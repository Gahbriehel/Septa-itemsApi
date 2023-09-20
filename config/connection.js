require("dotenv").config();
const { Pool } = require("pg");

const connectionString = process.env.CONNECTION_STRING;
// console.log(connectionString);
const pool = new Pool({
  connectionString,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
