import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
import hbs from "nodemailer-express-handlebars";
import * as path from 'path';
dotenv.config({ path: '.env' });

// Email for when a user registers for an appointment.
// This returns an email with the appointment the user has registered for
export async function registerNotification(req, res, next) {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.gmail_email,
            pass: process.env.gmail_password
        },
        port: 465,
        host: 'smtp.gmail.com'
    });

    transporter.use('compile', hbs({
        viewEngine: {
            extName: ".handlebars",
            defaultLayout: false
        },
        viewPath: path.resolve('./views') 
    }))
    
    const msg = {
        from: '"ShareDine" <sharedine.noreply@gmail.com>',
        to: `${req.query.email}`,
        subject: `Registration Confirmation`,
        template: 'register',
        context: {
            appointment: req.query.appointment,
            location: req.query.location,
            date: req.query.date,
            time: req.query.time
        }
    };

    
    transporter.sendMail(msg, (err )=>{
        if (err) {
            //return console.log('Error occurs', err);
            console.log(err)
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

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.gmail_email,
            pass: process.env.gmail_password
        },
        port: 465,
        host: 'smtp.gmail.com'
    });

    transporter.use('compile', hbs({
        viewEngine: {
            extName: ".handlebars",
            defaultLayout: false
        },
        viewPath: path.resolve('./views') 
    }))
    
    const msg = {
        from: '"ShareDine" <sharedine.noreply@gmail.com>',
        to: `${req.query.email}`,
        subject: "An appointment has been removed",
        template: 'remove',
        context: {
            appointment: req.query.appointment,
            location: req.query.location,
            date: req.query.date,
            time: req.query.time
        }
    };

    
    transporter.sendMail(msg, (err )=>{
        if (err) {
            //return console.log('Error occurs', err);
            console.log(err)
            res.json('Error occured')
        } else {
            //return console.log('Email sent');
            res.json('Email sent')
        }
    })
}

// Email for when an appointment has been edited.
// The user gets an email about the appointment that has been edited.
export async function editNotification(req, res, next) {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.gmail_email,
            pass: process.env.gmail_password
        },
        port: 465,
        host: 'smtp.gmail.com'
    });

    transporter.use('compile', hbs({
        viewEngine: {
            extName: ".handlebars",
            defaultLayout: false
        },
        viewPath: path.resolve('./views') 
    }))
    
    const msg = {
        from: '"ShareDine" <sharedine.noreply@gmail.com>',
        to: `${req.query.email}`,
        subject: "An appointment has been edited",
        template: 'edit',
        context: {
            appointment: req.query.appointment,
            location: req.query.location,
            date: req.query.date,
            time: req.query.time
        }
    };

    
    transporter.sendMail(msg, (err )=>{
        if (err) {
            //return console.log('Error occurs', err);
            console.log(err)
            res.json('Error occured')
        } else {
            //return console.log('Email sent');
            res.json('Email sent')
        }
    })
}
