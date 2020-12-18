require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const knex = require('knex')


const app = express()

const morganSetting = process.env.NODE_ENV === 'production' ? 'tiny' : 'common'

app.use(morgan(morganSetting))
app.use(helmet())
app.use(cors())
app.use(express.json());

app.use((error, req, res, next) => {
  let response
  if (process.env.NODE_ENV === 'production') {
    response = { error: { message: 'server error' }}
  } else {
    response = { error }
  }
  res.status(500).json(response)
})


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