// const { MailtrapClient } = require("mailtrap");
// import {MailtrapClient} from "mailtrap";
// import dotenv from "dotenv"

// dotenv.config()

// const TOKEN = process.env.MAILTRAP_TOKEN;

// export const mailtrapClient = new MailtrapClient({
//   token: TOKEN,
// });

// export const sender = {
//   email: "hello@demomailtrap.com",
//   name: "Mailtrap Test",
// };

// const recipients = [
//   {
//     email: "momentdipole33@gmail.com",
//   }
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);



import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,  
        pass: process.env.GMAIL_APP_PASSWORD, 
    },
});

export const sender = {
    email: process.env.GMAIL_USER,
    name: "Maestro-Auth",
};
