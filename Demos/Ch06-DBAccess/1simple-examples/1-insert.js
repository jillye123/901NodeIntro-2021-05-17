const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("../knexfile"));
Promise.try(() => {
	return db("people").insert([{
		firstName: "Joe",
		lastName: "Bloggs",
		age: 42
	}, {
		firstName: "Joe",
		lastName: "Smith",
		age: 52
	}, {
		firstName: "Beth",
		lastName: "Smith",
		age: 24
	}]);
}).then(() => {
	console.log("Done!");
}).catch((error) => {
	console.log(error)
}).finally(() => {
	db.destroy();
});
