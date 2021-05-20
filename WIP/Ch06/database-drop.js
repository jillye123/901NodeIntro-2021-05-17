const Promise = require('bluebird');
const knex = require('knex');
let db = knex(require('./knexfile'));

Promise.try(() => {
    return db.schema.hasTable("customer");
}).then((exist) => {
    if (exist) {
        console.log(`table customer dropped.`);
        return db.schema.dropTable("customer");
    } else {
        console.log(`table customer does not exist.`);
    }
}).then((msg) => {
    console.log(`return value from dropTable ${msg}`);
}).catch((err) => {
    console.log(`${err}`);
}).finally(() => {
    db.destroy();
});