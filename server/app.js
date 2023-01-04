const express = require('express');
/* A middleware that allows us to make requests from a different domain. */
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');

//Connect to our MongoDB
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', require('./routes/cocktailRoutes'));

/**
 * handle requests for static files
 */
//app.use(express.static(path.resolve(__dirname, '../frontend/client/assets')));

// app.use((err, req, res, next) => {
//   const defaultErr = {
//     log: 'Express error handler caught unknown middleware error',
//     status: 500,
//     message: { err: 'An error occurred' },
//   };
//   const errorObj = Object.assign({}, defaultErr, err);
//   console.log(errorObj.log);
//   return res.status(errorObj.status).json(errorObj.message);
// });

// /**
//  * start server
//  */
// app.listen(PORT, () => {
//   console.log(`Server listening on port: ${PORT}...`);
// });

module.exports = app;
