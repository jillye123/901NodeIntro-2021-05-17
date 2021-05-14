const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("../knexfile"));

Promise.try(() => {
	return db("people").delete().where({
		lastName: "Smith"
	});
}).then(() => {
	console.log("Deleted all Smiths!");
	return db("people");
}).then((people) => {
	console.log("Now, all the people:", people);
}).catch((error) => {
	console.log(error)
}).finally(() => {
	db.destroy();
});

