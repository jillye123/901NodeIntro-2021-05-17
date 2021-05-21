const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));

Promise.try(() => {
    return db("customer").insert([{
        firstname: "eddie",
        lastname: "neal",
        email: "eddie.neal@ssa.gov"
    }, {
        firstname: "John",
        lastname: "doe",
        email: "john.doe@ssa.gov"
    }, {
        firstname: "jane",
        lastname: "doe",
        email: "jane.doe@ssa.gov"
    }])
}).then(() => {
    console.log("Done!")
}).catch((error) => {
    console.log(error);
}).finally(() => {
    db.destroy();
});