// server.js

const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Đọc biến môi trường từ file .env
const app = express();
const port = 3000; // hoặc port bạn chọn

app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_RECEIVER,
      subject: 'New message from website',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<h1>New Message</h1><p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    res.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});