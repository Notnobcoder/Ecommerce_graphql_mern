import nodemailer from "nodemailer"



export const Transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service provider
  auth: {
    user: 'tushar@lovoj.com', // Your email address
    pass: 'fmlmqaojexteybgo',  // Your email password (use environment variables for security)
  },
});


