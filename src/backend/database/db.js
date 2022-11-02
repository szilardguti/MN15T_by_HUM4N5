const mysql = require('mysql');
const {func, dbconfig }  = require('./db-config');

var connection;

const getConnection = () => {
    connection = mysql.createConnection(dbconfig);
    return connection;
}

const closeConnection = (conn) => {
    conn.end();
}

module.exports = {
    getConnection,
    closeConnection
}