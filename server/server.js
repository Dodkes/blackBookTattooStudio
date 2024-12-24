import express from "express";
import nodemailer from "nodemailer";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 8080;
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send-order", (req, res) => {
  const mailOptions = {
    // Take data from the request body
    from: "dodo.zitt@gmail.com",
    to: "dodo.zitt@gmail.com", // Replace with the recipient's email
    subject: "[Nodemailer] test",
    text: `Node mailer test sent.`,
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
