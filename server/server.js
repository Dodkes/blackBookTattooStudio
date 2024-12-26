import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = 8080;
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

function log(req, res) {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  console.log(
    `[INFO] Resuest from: ${ip} | ${new Date()} ${req.method} ${req.url}`
  );
}

app.post("/order", (req, res) => {
  console.log("[INFO]: Order received!");
  log(req, res);
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
    <li>Služba: ${data.service}</li>
    <li>Barva: ${data.color}</li>
    <li>Zpráva: ${data.message}</li>
    </ul>
    <p style="text-align: right;">Vytvořená: ${date} (${time})</p>
    </div>
    `;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Nová objednávka [${data.service}]`,
    html: mailTemplate,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send("Error sending email.");
    }
    console.log("Email sent:", info.response);
    res.status(200).send("Order sent successfully!");
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
