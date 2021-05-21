const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));


Promise.try(() => {
    return db.schema.createTable("customer", (table) => {
        table.text("firstName");
        table.text("lastName");
        table.text("email");
    });
}).then(() => {
    console.log("Table Created!");
}).then(() => {
    return db("customer").insert([{
        firstName: "Joe",
        lastName: "Bloggs",
        email: "joe@gmail.com"
    }, {
        firstName: "Beth",
        lastName: "Smith",
        email: "beth@gmail.com"
    }]);
}).then(() => {
    console.log("Records Created!");
}).then(() => {
    return db("customer");
}).then((customer) => {
    console.log("All the customer:", customer);
    console.log("\nwithout anonymous:", JSON.stringify(customer))
}).catch((error) => {
    console.log(error)
}).finally(() => {
    db.destroy();
});