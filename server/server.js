import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import logger from "./logger.js";
import https from "https";
import fs from "fs";

dotenv.config();
const app = express();
const PORT = 8080;
app.use(cors());
app.use(express.json());
//Load the SSL certificate and key
const privateKey = fs.readFileSync(
  "/etc/letsencrypt/live/blackbooktattoostudio.cz/privkey.pem",
  "utf8"
);
const certificate = fs.readFileSync(
  "/etc/letsencrypt/live/blackbooktattoostudio.cz/cert.pem",
  "utf8"
);

const credentials = {
  key: privateKey,
  cert: certificate,
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function validateRecaptcha(token) {
  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.VITE_SECRET_KEY,
          response: token,
        }),
      }
    );

    const data = await response.json();
    return data.success;
  } catch (error) {
    logger.error("Error validating reCAPTCHA:", error);
    return false;
  }
}

app.post("/order", async (req, res) => {
  const token = req.body.recaptchaToken;

  if (!token) {
    logger.error("No token provided.");
    return res.status(400).send("No token provided.");
  }

  const isRecaptchaTokenValid = await validateRecaptcha(token);

  if (!isRecaptchaTokenValid) {
    logger.error("Recaptcha verification failed.");
    return res.status(400).send("Recaptcha verification failed.");
  }

  logger.info(`/order POST received [IP: ${req.ip}]`);
  const data = req.body;
  const date = `${new Date().getDate()}.${
    new Date().getMonth() + 1
  }.${new Date().getFullYear()}`;
  const time = `${new Date().getHours()}:${new Date().getMinutes()}`;

  const mailTemplate = `
    <div style="background-color:rgb(26, 25, 25); padding: 20px; color: white; border-radius: 5px;">
    <h1 style="text-align: center;">Nová objednávka</h1>
    <h3>Detaily objednávky:</h3>
    <ul>
    <li>Jméno: ${data.name}</li>
    <li>Příjmení: ${data.surname}</li>
    <li>Email: ${data.email}</li>
    <li>Telefon: 
    <a href="tel:${data.phone}">
    ${data.phone}
    </a>
    </li>
    <li>Služba: ${data.service} - ${data.type}</li>
    <li>Zpráva: ${data.message}</li>
    </ul>
    <p style="text-align: right;">Vytvořená: ${date} (${time})</p>
    </div>
    `;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "mrkkakarko@gmail.com",
    subject: `Nová objednávka [${data.service}]`,
    html: mailTemplate,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      logger.error(`Error sending email: ${error}`);
      return res.status(500).send("Error sending email.");
    }
    logger.info("Email order sent:", info.response);
    res.status(200).send("Order sent successfully!");
  });
});

https.createServer(credentials, app).listen(PORT, () => {
  logger.info(`Server started and listening on port ${PORT}`);
});
