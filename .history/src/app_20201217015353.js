require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')

const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())

app.use(function errorHandler(error, req, res, next) {
     let response
     if (process.env.NODE_ENV === 'production') {
       response = { error: { message: 'server error' } }
     } else {
       console.error(error)
       response = { message: error.message, error }
     }
     res.status(500).json(response)
   });


app.get('/', (req, res) => {
     res.send('Hello, world!')
   });

   


// app.get('/', (req, res) => {
//     res.send('Hello Express!');
//   });

//   app.get('/burgers', (req, res) => {
//     res.send('We have juicy cheese burgers!');
//   })
//   app.listen(8000, () => {
//     console.log('Express server is listening on port 8000!');
//   });


  module.exports = app