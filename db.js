// db.js
const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root', // update with your MySQL user credentials
    password: '', // update with your MySQL password
    database: 'user_data', // update with your database name
});

module.exports = db;
