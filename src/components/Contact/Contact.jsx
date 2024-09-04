import React, { useRef } from "react";
import "./contact.css";
// import nodemailer from "nodemailer"
function Contact() {
    const form = useRef();
    const time = new Date();
    let year = time.getFullYear();
    const sendEmail = (e) => {
        e.preventDefault();
        // let transporter = nodemailer.createTransport({
        //     service: 'gmail',
        //     auth: {
        //         user: 'donotknow7383@gmail.com',
        //         pass: 'don@t23'
        //     }
        // });

        // let mailOptions = {
        //     from: 'donotknow7383@gmail.com',
        //     to: 'ranjanbej412@gmail.com',
        //     subject: 'Sending Email using Node.js',
        //     text: 'That was easy!'
        // };

        // transporter.sendMail(mailOptions, function (error, info) {
        //     if (error) {
        //         console.log(error);
        //     } else {
        //         console.log('Email sent: ' + info.response);
        //     }
        // });
    };

    return <div id="contact">
        <h1>Contact Me</h1>
        <p>Please fill out the below to discuss any work opportunities</p>
        <form ref={form} onSubmit={sendEmail}>
            <input placeholder="Your name" type="text" name="your_name" className="inputs" />
            <input type="text" placeholder="Your email" name="your_email" className="inputs" />
            <textarea name="message" id="message" className="inputs" cols="30" rows="10" placeholder="Your Message"></textarea>
            <button>Submit</button>
        </form>
        <p id="copyright">© Copyright {year}</p>
    </div>
}
export default Contact;