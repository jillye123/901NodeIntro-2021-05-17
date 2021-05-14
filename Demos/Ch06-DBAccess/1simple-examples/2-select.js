

const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("../knexfile"));

Promise.try(() => {
	return db("people");
}).then((people) => {
	console.log("All the people:", people);
	console.log("\nwithout anonymous:", JSON.stringify(people))
}).catch((error) => {
	console.log(error)
}).finally(() => {
	db.destroy();
});
