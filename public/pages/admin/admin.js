var express = require('express');
var router = express.Router();
var path = require('path');


/* GET admin page. */
router.get('/', function(req, res, next) {
  res.render(path.join(__dirname, 'admin'));
});

module.exports = router;
