// import express from 'express'
// import 'dotenv/config'
// import session from 'express-session'
// import userRouter from './src/routes/auth.route.js';
// import filmRouter from './src/routes/film.route.js';
// import favoriRouter from './src/routes/favori.route.js';
// import filmApiRoutes from './src/api/routes/film.route.js'
// import userApiRoutes from './src/api/routes/auth.route.js'
// import favoriApiRoutes from './src/api/routes/favori.route.js'

// import cors from "cors";


// const app = express()

// app.use(cors());

// // configurer la session
// app.use(session({
//     secret: 'express-ejs',
//     resave: false,
//     saveUninitialized: false

// }))



// app.use((req, res, next) => {
//   res.locals.user = req.session.user || null;
//   next();
// });

// // utiliser le middleware body-parser
// app.use(express.urlencoded())
// app.use(express.json())

// // configurer les ressources statiques
// app.use(express.static('public'))


// // Mapping entre routes et le routeur
// app.use('/', userRouter);
// app.use('/', filmRouter);
// app.use('/', favoriRouter);

// app.use("/", filmApiRoutes);
// app.use("/", userApiRoutes);
// app.use("/", favoriApiRoutes);

// // Configuration du moteur de template
// app.set('view engine', 'ejs')
// app.set('views', import.meta.dirname + '/templates')

// app.use('/public', express.static('public'))

// // modifier le delimiter
// // app.set('view options', { delimiter: '?' })


// app.get(['/login'], (req, res) => {
//     res.render('login')
// })
// app.get(['/signup'], (req, res) => {
//     res.render('signup')
// })
// app.get(['/favori'], async (req, res) => {
//     res.render('favori')
// })
// app.get(['/search'], async (req, res) => {
//     res.render('search')
// })




// app.all("/*splat", (req, res) => {
//     res
//         .status(404)
//         .end("Page introuvable")
// })


// const PORT = process.env.PORT || 5555

// app.listen(PORT, () => {
//     console.log(`Adresse serveur : http://localhost:${PORT}`);
// })

import express from 'express';
import 'dotenv/config';

import path from 'path';
import { fileURLToPath } from 'url';

// import session from 'express-session';
// import MySQLStore from 'express-mysql-session';


import userRouter from './src/routes/auth.route.js';
import filmRouter from './src/routes/film.route.js';
import favoriRouter from './src/routes/favori.route.js';
import filmApiRoutes from './src/api/routes/film.route.js';
import userApiRoutes from './src/api/routes/auth.route.js';
import favoriApiRoutes from './src/api/routes/favori.route.js';

import cors from 'cors';

const app = express();

// CORS ayarı
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

// Session store yapılandırması
// const sessionStore = new MySQLStore({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
// });

// // Session ayarı
// app.use(session({
//   secret: 'express-ejs',
//   resave: false,
//   saveUninitialized: false
// }));

// Kullanıcı bilgisini her istekte erişilebilir hale getir
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

// Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Statik dosyalar
app.use('/public', express.static('public'));

// Route tanımlamaları
app.use('/', userRouter);
app.use('/', filmRouter);
app.use('/', favoriRouter);
app.use('/', filmApiRoutes);
app.use('/', userApiRoutes);
app.use('/', favoriApiRoutes);

// EJS template ayarı
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

// Sayfa yönlendirmeleri
app.get('/login', (req, res) => res.render('login'));
app.get('/signup', (req, res) => res.render('signup'));
app.get('/favori', (req, res) => res.render('favori'));
app.get('/search', (req, res) => res.render('search'));

// 404 sayfası
app.all(/.*/, (req, res) => {
  res.status(404).end("Page introuvable");
});

// Sunucu başlatma
const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
  console.log(`Serveur actif sur le port ${PORT}`);
});