import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const msg = {
    from: '"ShareDine" <sharedine.noreply@gmail.com>',
    to: "",
    subject: "",
    text: ' '
};

nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.gmail_email,
        pass: process.env.gmail_password
    },
    port: 465,
    host: 'smtp.gmail.com'
})

.sendMail(msg, (err )=>{
    if (err) {
        return console.log('Error occurs', err);
    } else {
        return console.log('Email sent');
    }
})
