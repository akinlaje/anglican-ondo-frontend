/* eslint-disable import/no-anonymous-default-export */
// import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

export default async (req, res) => {
  const { name, email, message, subject } = req.body;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'mailbot626@gmail.com',
      pass: 'mailer626',
    },
    secure: true,
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log('Server is ready to take our messages');
        resolve(success);
      }
    });
  });

  // console.log(req.body);

  const mailData = {
    from: {
      name: `${name}`,
      address: `${email}`,
    },
    replyTo: `${email}`,
    to: 'ondoanglican@gmail.com',
    subject: `${subject}`,
    text: message + ' | Sent from: ' + email,
    html: `<div>${message}</div><p>Sent from:
    ${email}</p>`,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  transporter.close();

  res.status(200).json({ status: 'OK' });
};
