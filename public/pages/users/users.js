var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  router.render('users');
  // res.status(500).send('Test 500 error');
});

module.exports = router;
