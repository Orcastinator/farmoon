// IMPORT MODULES
const express = require('express');
const cors = require('cors');
const path = require('path');
const socketio = require('socket.io');
const mysql = require('mysql2');
require('dotenv').config();

// SERVER
const app = express();
const server = app.listen(process.env.PORT, () => {
    console.log("Server listening at "+process.env.PORT);
});

// SETTINGS
app.use(express.json());
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// ROUTES
app.use(require('./routes/'));

// PUBLIC STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

// BBDD
const poolDB = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_BBDD,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// WEB SOCKETS 
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('New user -> '+socket.id);

});