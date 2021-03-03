const mysql = require('mysql');
const dbConfig = require('./dbconfig.js');

const connection = mysql.createConnection({
    host: dbConfig.host,
    port: dbConfig.port,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
});

connection.connect(err => {
    if (err) {
        throw err;
    }
    console.log("Connected to database.");
});

module.exports = connection;