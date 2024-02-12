let express = require('express');
let router = express.Router();
let cors = require('cors');

let connection = require('../service/db/connectdb');

let sendEmail = require('../service/sendingEmail.js')

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

router.post('/message', cors(corsOptions), async (req, res) => {
    console.log('sending email' + req.body)

    const { name, email, message } = req.body;
    const from = process.env.EMAIL_NAME;
    const to = process.env.EMAIL_NAME;
    const subject = 'New message from ' + name;
    const template = 'contact';
    const context = {
        name: name,
        email: email,
        message: message
    }
    await sendEmail(from, to, subject, template, context)
    res.status(200).send('Email sent')
})



module.exports = router;
