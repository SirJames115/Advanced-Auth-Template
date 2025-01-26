import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN;
// const TOKEN = "73fd62c1c9fd76ae21f4d1b98ee97dda";

console.log("mailtrap token: ", TOKEN);
console.log("mailtrap token: ", process.env.MAILTRAP_TOKEN);

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "James Othniel",
};
// const recipients = [
//   {
//     email: "jamesothniel7@gmail.com",
//   },
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats Jay for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);
