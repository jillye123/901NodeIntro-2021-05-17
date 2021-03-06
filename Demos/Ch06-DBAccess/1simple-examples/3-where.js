

const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("../knexfile"));

Promise.try(() => {
	return db("people").where({
		firstName: "Joe"
	});
}).then((people) => {
	console.log("All the people named Joe:", people);
}).catch((error) => {
	console.log(error)
}).finally(() => {
	db.destroy();
});

