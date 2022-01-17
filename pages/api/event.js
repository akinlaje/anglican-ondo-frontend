/* eslint-disable import/no-anonymous-default-export */
// import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

export default async (req, res) => {
  const {
    name,
    date,
    startTime,
    endTime,
    numChairs,
    phoneNumber,
    message,
    email,
  } = req.body;

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
    subject: 'Event Hall Booking Request',
    text: message + ' | Sent from: ' + email,
    html: `<div>
      <p>Good day sir/ma I am ${name}. I would like to rent your event hall</p>
      <p>Details: </p>
      <table>
        <tr>				
          <th>Name</th>	
          <th>Email</th>	
          <th>Phone Number</th>	
          <th>Date</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Number of Chairs</th>
        </tr> 
        <tr>
          <td>${name}</td>
          <td>${email}</td>
          <td>${phoneNumber}</td>
          <td>${date}</td>
          <td>${startTime.hour}:${startTime.minute}</td>
          <td>${endTime}</td>
          <td>${numChairs}</td>
        </tr>
        <p>${message}</p>
      </table>
    </div>`,
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
