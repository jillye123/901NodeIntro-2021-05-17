const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));

Promise.try(() => {
    return db.schema.createTable("customer", (table) => {
        table.increments("id").primary();
        table.text("firstName");
        table.text("lastName");
        table.text("email");
    });
}).then(() => {
    console.log("Created Table!");
}).then(() => {
    return db("customer").insert([{
        firstName: "Bruce",
        lastName: "Wayne",
        email: "therealbatman@gotham.com"
    }, {
        firstName: "Clark",
        lastName: "Kent",
        email: "therealsuperman@metropolis.com"
    }]);
}).then(() => {
    console.log("Inserted records!");
}).then(() => {
    return db("customer");
}).then((customers) => {
    console.log("All the people:", customers);
}).finally(() => {
    db.destroy();
});