const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '143.198.203.150',
    port: 3306,
    user: 'hamdun',
    password: 'Viking123!!!',
    database: 'webprofile',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise(); // Using promises for async operations
