var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/about", (req, res) => {
  res.send("Hello world! From GET /about route");
});


module.exports = router;
