import mysql from "mysql";

export const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "paulo_sql300",
  database: "travelsystem",
});
