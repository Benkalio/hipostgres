const pgPromise = require('pg-promise')();
const connectionString = 'postgres://localhost:5432/adamsgarden';

const db = pgPromise(connectionString);

console.log(db);