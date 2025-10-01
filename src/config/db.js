import mysql from "mysql2";

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

connection.getConnection((err, conn) => {
    if (err) console.error("❌ MySQL bağlantı hatası:", err.message);
    else {
        console.log("✅ MySQL'e bağlanıldı!");
        conn.release();
    }
});

export default connection;


