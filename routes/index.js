const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// GET /
router.get('/', (req, res, next) => {
  return res.render('index');
});

// POST /mail
router.post('/mail', (req, res, next) => {
  let email = req.body.email;

  // use nodemailer to create transportor
  let transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      // this obviously needs to be an actual user and pw 
      // could set them as enviromental variables on the server
      // look into using sendgrid
      user: 'email',
      pass: 'pw'
    }
  });

  // mail options
  let mailOptions = {
    // sender address
    from: '<noreply@noreply.com>', 
    // list of receivers
    to: email,
    // Subject line 
    subject: 'Get your refrigeration equipment in tip-top shape!', 
    // html body
    html: '<h1>;)</h1> <p>Dont forget to call Thomas Refrigeration and find out about a custom preventative maintenance program today!</p>'
  };

  // use newly created transporter and mail options to send mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Well, here\'s your problem:', error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });

  // for now render thanks view whether sendMail was successful or not 
  return res.render('thanks', {email: email});
});

module.exports = router;
