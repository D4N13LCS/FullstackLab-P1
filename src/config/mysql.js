const mysql = require('mysql2/promise');

 const pool = mysql.createPool({
            host: "mysqldb",
            port: 3306,
            user: "root",
            password: "root",
            database: "mysqlDatabase"
        });

async function initializeUserTable() {
    try {
        await pool.query('USE mysqlDatabase');
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255),
                email VARCHAR(255)
            )
        `);
        
    } catch (e) {
        console.log(e);
        return null;
    }
}

module.exports = {pool, initializeUserTable};