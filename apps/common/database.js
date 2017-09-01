var config = require("config");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: config.get("mysql.host"),
    user: config.get("mysql.user"),
    password: config.get("mysql.password"),
    databse: config.get("mysql.databse"),
    port: config.get("mysql.port")
});

connection.connect();

function getConnection() {
    if (!connection) {
        connection.connect();
    }
    return connection;
}

module.exports = {
    getConnection: getConnection
}