require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')

const app = express()

const morganOption = (process.env.NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())


app.get('/', (req, res) => {
    res.send('Hello Express!');
  });

  app.get('/burgers', (req, res) => {
    res.send('We have juicy cheese burgers!');
  })
  app.listen(8000, () => {
    console.log('Express server is listening on port 8000!');
  });


  module.exports = app