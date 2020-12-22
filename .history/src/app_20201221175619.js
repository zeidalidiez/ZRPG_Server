require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const BookRouter = require('./books/bookrouter.js');
const knex = require('knex');

const app = express();

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL
});

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use('/books', BookRouter);

app.get('/', (req, res) => {
  knexInstance.from('*').select('*')
   .then(result => {
     console.log(result)
   })
  res.send()});

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;


