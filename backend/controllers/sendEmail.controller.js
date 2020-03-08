var express = require('express');
var nodemailer = require("nodemailer");


module.exports.sendEmail = (req, res, next) => {

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'infokrishakkart@gmail.com',
      pass: 'Aa@123456'
    }
  });

  let mailOptions = {
    from: req.body.email, // sender address
    to: 'infokrishakkart@gmail.com', // list of receivers
    subject: 'Need an assistance', // Subject line
    // text: 'Test', // plain text body
    html: `<b>Name :</b> ${req.body.name}<br/><b>Email :</b> ${req.body.email}<br/><b>Contact Number : </b>${req.body.contact}<br/><b>Message : </b>${req.body.msg}` // html body
  };

  transporter.sendMail(mailOptions, function (error, response) { //callback
    if (error) {
      console.log(error);
    } else {
      console.log(res);
    }
  });
}
