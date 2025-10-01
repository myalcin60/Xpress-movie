import mysql from "mysql2";

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

connection.getConnection((err, conn) => {
    if (err) console.error("MySQL connection error:", err);
    else {
        console.log("Connected to MySQL!");
        conn.release();
    }
});

export default connection;

