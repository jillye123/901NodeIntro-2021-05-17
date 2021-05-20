const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("../knexfile"));
Promise.try(() => {
	return db("people").insert([{
		firstName: "Geddy",
		lastName: "Lee",
		age: 20
	}, {
		firstName: "Alex",
		lastName: "Lifeson",
		age: 22
	}, {
		firstName: "Neil",
		lastName: "Peart",
		age: 21
	}]);
}).then(() => {
	console.log("Done!");
}).catch((error) => {
	console.log(error)
}).finally(() => {
	db.destroy();
});
