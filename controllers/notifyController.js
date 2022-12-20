import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

// Email for when a user registers for an appointment.
// This returns an email with the appointment the user has registered for
export async function registerNotification(req, res, next) {
    const msg = {
        from: '"ShareDine" <sharedine.noreply@gmail.com>',
        to: "ever0045@hz.nl",
        subject: "You've registered yourself for <appointment>",
        text: 'You have succesfully registered yourself for the following appointment: <appointment>'
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
            //return console.log('Error occurs', err);
            res.json('Error occured')
        } else {
            //return console.log('Email sent');
            res.json('Email sent')
        }
    })
}

// Email for when a appointment has been canceled
// The user gets an email about the cancelation of an appointment
export async function removeNotification(req, res, next) {
    const msg = {
        from: '"ShareDine" <sharedine.noreply@gmail.com>',
        to: "",
        subject: "<appointment> has been canceled",
        text: 'too bad, better luck next time'
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
            // return console.log('Error occurs', err);
            res.json('Error occured')
        } else {
            // return console.log('Email sent');
            res.json('Email sent')
        }
    })
}

// Email for when an appointment has been edited.
// The user gets an email about the appointment that has been edited.
export async function editNotification(req, res, next) {
    const msg = {
        from: '"ShareDine" <sharedine.noreply@gmail.com>',
        to: "",
        subject: "The contents of <appointment> have changed",
        text: 'To see the changes please log in and open the appointment'
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
            // return console.log('Error occurs', err);
            res.json('Error occured')
        } else {
            // return console.log('Email sent');
            res.json('Email sent')
        }
    })
}
