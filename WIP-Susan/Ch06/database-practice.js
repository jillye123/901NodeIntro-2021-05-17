const Promise = require("bluebird");
const knex = require("knex");
const { sampleSize } = require("lodash");
let db = knex(require("./knexfile"));

Promise.try(() => {
 return db.schema.createTable("customer", (table) => {
  table.increments("id").primary();
  table.text("firstName");
  table.text("lastName");
  table.text("email");
    });
}).then(() => {
    console.log("Done!");
}).catch((error) => {
    console.log(error)
}).finally(() => {
    db.destroy();
});



Promise.try(() => {
    return db("customer").insert([{
        firstName: "Joe",
        lastName: "Bloggs",
        email: "joe.gloggs@sampleSize.gov"
    }, {
        firstName: "Beth",
        lastName: "Smith",
        email: "joe.gloggs@sampleSize.gov"
    }]);
}).then(() => {
    console.log("Done!");
}).catch((error) => {
    console.log(error)
}).finally(() => {
    db.destroy();
});


Promise.try(() => {
    return db("customer");
}).then((customer) => {
    console.log("All the people:", customer);
    console.log("\nwithout anonymous:", JSON.stringify(customer))
}).catch((error) => {
    console.log(error)
}).finally(() => {
    db.destroy();
});
