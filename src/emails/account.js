const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SEND_GRED_API_KYE)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'hatimabualrub@gmail.com',
        subject: 'Welcome to Task-Manager App',
        text: `Hello ${name}, welcome to Task-Manager App!!`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'hatimabualrub@gmail.com',
        subject: 'Good Bye',
        text: `We are sad to say good bye to you ${name}, we hope you come back soon ❤`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}