const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));


Promise.try(() => {
    return db.schema.createTable("people", (table) => {
        table.increments("id").primary();
        table.text("firstName");
        table.text("lastName");
        table.text("email");
    });
});
