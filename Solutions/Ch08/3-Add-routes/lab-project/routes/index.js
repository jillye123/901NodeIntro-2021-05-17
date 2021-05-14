var express = require('express');
var router = express.Router();
const path = require("path")

var debug = require('debug')('lab-project:server');


router.get("/about", (req, res) => {
  res.send("Hello world! From GET /about route");
});

router.get('/submit', function(req, res, next) {
  debug('in submit route')
  console.log(`req is`, req.body)
  res.sendFile(path.join(__dirname ,'../public', 'submitted.html'));
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
