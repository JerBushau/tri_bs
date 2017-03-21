const express = require('express');
const router = express.Router();

// GET /
router.get('/', function(req, res, next) {
  return res.render('index');
});

router.post('/mail', (req, res, next) => {
  let email = req.body.email;
  return res.render('thanks', {email: email});
});

module.exports = router;
