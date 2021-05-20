const Promise = require('bluebird');
const knex = require('knex');
let db = knex(require('./knexfile'));

Promise.try(() => {
    return db.schema.hasTable("customer");
}).then((exist) => {

    if (exist) {
        console.log('table customer has already exists.');
        return;
    } else {
        console.log('start to create table customer.');
        return db.schema.createTable("customer", (table) => {
            table.increments("id").primary();
            table.text("firstname");
            table.text("lastname");
            table.text("email");
        });
    }

}).then((msg) => {
    console.log(`data returned from create table is ${msg}`);
    console.log("table customer has been created successfully. ");
}).then(() => {
    return db("customer").insert([
        { firstname: "Jill", lastname: "Ye", email: "jill.ye@ssa.gov" },
        { firstname: "John", lastname: "Smith", email: "john.smith@hotmail.com" }
    ]);
}).then((msg) => {
    console.log(`table records inserted ${msg}`);
}).catch((err) => {
    console.log(`Error happened. 
${err}`);
}).finally(() => {
    db.destroy();
});