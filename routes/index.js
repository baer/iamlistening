var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html');
});

/* GET Results page. */
router.get('/results-partial', function(req, res, next) {
  // Get ze Data!
  var data = {
    "yay": 1,
    "data": 2
  }
  res.render('results.tmpl', { results: JSON.stringify(data) });
});

module.exports = router;
