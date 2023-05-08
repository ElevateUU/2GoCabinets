import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function sendmail(req: NextApiRequest, res: NextApiResponse) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: "myroslav.kogut2007@gmail.com",
      pass: process.env.PASS,
    },
  });

  const now = new Date();
  const formattedDate = now.toLocaleString();
  const formattedTime = now.toLocaleTimeString();

  const toHostMailData = {
    from: `${req.body.firstName} ${req.body} ${req.body.email}`,
    to: "myroslav.kogut2007@gmail.com",
    subject: `New Lead From Contact Form`,
    text: "Sent from:" + req.body.email,
    html: `
    <div style="background-color: #f5f5f5; padding: 20px;">
    <p style="font-size: 18px;">A new lead '${req.body.firstName} ${req.body.lastName}' was created from your contact form on '${formattedDate}' </p>
    <p style="font-size: 18px;">Phone: ${req.body.phone}</p>
    <p style="font-size: 18px;">Email: ${req.body.email}</p>
    <p style="font-size: 18px;">Services: ${req.body.interests}</p>
    <p style="font-size: 18px;">Where did you hear about us? ${req.body.selectedOption}</p>
    <p style="font-size: 18px; padding-top: 20px">Message:</p>
    <p style="font-size: 18px;">${req.body.message}</p>
  </div>
    `,
  };

  transporter.sendMail(toHostMailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.send("success");
}
