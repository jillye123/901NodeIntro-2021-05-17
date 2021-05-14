const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.listen(9001);
console.log('Listening on: http://localhost:9001');