const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));

Promise.try(() => {
    return db.schema.createTableIfNotExists("customer", (table) => {
        table.increments("id").primary();
        table.text("firstName");
        table.text("lastName");
        table.text("email");
    });
}).then(() => {
    console.log("Created Successfully!");
}).catch((error) => {
    console.log(error)
}).finally(() => {
    db.destroy();
});

Promise.try(() => {
    return db("customer").insert([{
        firstName: "FName1",
        lastName: "LName1",
        email: "fname1.lname1@gmail.com"
    }, {
        firstName: "FName2",
        lastName: "LName2",
        email: "fname2.lname2@gmail.com"
    }]);
}).then(() => {
    console.log("Added two records successfully!");
}).catch((error) => {
    console.log(error)
}).finally(() => {
    db.destroy();
});

Promise.try(() => {
    return db("customer");
}).then((customer) => {
    console.log("All the customers registered:", customer);
    console.log("\nwithout anonymous:", JSON.stringify(customer))
}).catch((error) => {
    console.log(error)
}).finally(() => {
    db.destroy();
});
