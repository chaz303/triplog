var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  //    user     : 'admin',
  //    password : 'password',
  database: "triplog"
});

try {
  connection.connect();
} catch (e) {
  console.log("Database Connection failed:" + e);
}

module.exports = connection;
