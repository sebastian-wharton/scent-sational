require('dotenv').config()

// Libraries
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// DB Connection
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

// Server can accept JSON ( instead of HTTP method )
app.use(express.json());

// Middleware

// Router
const usersRouter = require('./routes/users');
app.use('/subscribers', usersRouter);


// Browser event listener
app.listen(3000, () => console.log('Server Started'));