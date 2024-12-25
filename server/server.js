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

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Nová objednávka [${data.service}]`,
    text: `Nová objednávka: \n\nJméno: ${data.name}\nEmail: ${data.email}\nTelefon: ${data.phone}\n\nSlužba: ${data.service}\n\nZpráva: ${data.message}`,
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
