import mysql from 'mysql2/promise';


// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT
// });

//  connection.connect((err) => {
//   if (err) {
//     console.error('Veritabanı bağlantı hatası:', err);
//   } else {
//     console.log('MySQL veritabanına başarıyla bağlandı!');
//   }
// });
// export default connection;




const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT 
});

(async () => {
  try {
    const conn = await connection;
  
    await conn.query('SELECT 1');
    console.log('Successfully connected to MySQL database!');
  } catch (err) {
   
    console.error('MySQL database connection error:', err.message);
    // Hata durumunda uygulamayı durdurmak isteyebilirsiniz
    // process.exit(1); 
  }
})();

export default connection;