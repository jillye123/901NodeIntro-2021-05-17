const express = require("express");

let router = express.Router();

router.get("/contacts", (req, res) => {
	res.send('Only if url is /contacts!')

});
router.get("/", (req, res) => {
	res.send('Im in /routes/index.js!')

});

module.exports = router;
