var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('donuts', { title: 'Deepak Reddy Maram Search Results' });
});

module.exports = router;
