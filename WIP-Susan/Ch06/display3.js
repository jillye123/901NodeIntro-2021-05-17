const Promise = require("bluebird");
const knex = require("knex");
const { sampleSize } = require("lodash");
let db = knex(require("./knexfile"));


Promise.try(() => {
    return db("customer2").insert([{
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
    return db("customer2");
}).then((customer2) => {
    console.log("All the people:", customer2);
    console.log("\nwithout anonymous:", JSON.stringify(customer2))
}).catch((error) => {
    console.log(error)
}).finally(() => {
    db.destroy();
});
