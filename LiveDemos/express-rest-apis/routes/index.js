const express = require("express");

let router = express.Router();

router.get("/", (req, res) => {
	res.send("Hello world! From the main page");
});

router.get("/about", (req, res) => {
	res.send("Hello world! From about page");
});

router.get("/class", (req, res) => {
	res.send("Hello world! From class tools page");
});


let students = [];

router.get("/students", (req, res) => {
	
	let message = `There are ${students.length}` ;
	message += `<br/>`;
	message += students;
	res.send(message);
});

router.post("/students", (req, res) => {
	students.push(req.body.name)
	res.status(201).send("student added");
});

module.exports = router;

