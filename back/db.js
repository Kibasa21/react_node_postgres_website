const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "postgres",
    host: "database-2.cqykstfvwwut.us-east-1.rds.amazonaws.com",
    port: 5432,
    database: "loja"
});

module.exports = pool