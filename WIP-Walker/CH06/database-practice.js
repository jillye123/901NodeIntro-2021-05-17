const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));


Promise.try(() => {
    return db.schema.createTableIfNotExists("people", (table) => {
        table.increments("id").primary();
        table.text("firstName");
        table.text("lastName");
        table.text("email");
    });
}).then(() => {
	console.log("Created Table!");
}).then(() => {
    return db("people").insert([{
        firstName: "William",
        lastName: "Walker",
        email: "William.Walker@ssa.gov"
    }, {
        firstName: "Jacqueline",
        lastName: "Walker",
        email: "Jacqueline.Walker@ssa.gov"
    }
    ]);
}).then(() => {
    console.log("Inserted records!");
}).then(() => {
        return db("people");
    }).then((ssaEmp) => {
        console.log("All the people:", ssaEmp);
    }).finally(() => {
        db.destroy();
    });