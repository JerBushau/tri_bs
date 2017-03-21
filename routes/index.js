const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// GET /
router.get('/', function(req, res, next) {
  return res.render('index');
});

router.post('/mail', (req, res, next) => {
  let email = req.body.email;

  let transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      // this obviously needs to be an actual user and pw... 
      user: 'email',
      pass: 'pw'
    }
  });

  let mailOptions = {
    from: '<noreply@noreply.com>', // sender address
    to: email, // list of receivers
    subject: 'Get your refrigeration equipment in tip-top shape!', // Subject line
    html: '<h1>;)</h1> <p>Dont forget to call Thomas Refrigeration and find out about a custom preventative maintenance program today!</p>' // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Well, here\'s your problem:', error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });

  return res.render('thanks', {email: email});
});

module.exports = router;
