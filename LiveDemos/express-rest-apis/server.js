const express = require("express");

const config = require("./config.json");


const bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use(require("./routes/index.js"));

app.listen(config.port, () => {
	console.log(`Listening on http://localhost:${config.port} ...`);
});
