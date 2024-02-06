let express = require('express');
let router = express.Router();
let cors = require('cors');

let sendEmail = require('../services/sendingEmail.js')

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}