const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));

// Promise.try(()=> {
//     return db.schema.createTable("dancer", (table) => {
//         table.text("firstName");
//         table.text("lastName");
//         table.text("company");
//     });

// }).then(()=> {
//     console.log("Table created");
// }).catch((error) => {
//     console.log(error)
// }).finally(()=>{
//     db.destroy();
// });

Promise.try(()=> {

    return db("dancer").insert([{
        firstName: "Victoria",
        lastName: "Treshkina",
        company: "Mariinsky"
    },

        {
            firstName: "Iana",
            lastName:"Salenko",
            company: "Deutsche Oper Berlin"
        }]);

}).then(()=> {
    console.log("Data inserted");
}).catch((error) => {
    console.log(error)
}).finally(()=>{
    db.destroy();
});

