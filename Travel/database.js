const mysql = require("mysql");

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "paulo_sql300",
  database: "travelsystem",
});

module.exports = { database };
