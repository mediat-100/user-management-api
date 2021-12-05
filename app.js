const express = require('express');
const morgan = require('morgan');
const userRouter = require('./route/userRoute');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

app.use(express.json()); //body-parser

app.use(morgan('dev')); //logger middleware

// Routes Middleware
app.use('/api/v1/users', userRouter);

app.use(globalErrorHandler); // error handling middleware

module.exports = app;
