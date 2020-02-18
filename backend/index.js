require('./config/config');

//Framework
const express = require('express');

//Middlewares
const bodyParser = require('body-parser');
const cors = require('cors');

//Send SMS
const Nexmo = require('nexmo');

var app = express();

const nexmo = new Nexmo({
    apiKey: '32febac5',
    apiSecret: 'cF0stmocTNtHytuS',
});

const from = 'NEXMO';
const to = 918130474909;
const text = 'Hey';

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Start Server
app.listen(process.env.PORT, () => console.log(`server started at port : ${process.env.PORT}`));

// nexmo.message.sendSms(from, to, text);

nexmo.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if (responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
});