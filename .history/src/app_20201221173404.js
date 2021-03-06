require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const BookRouter = require('./books/bookrouter.js');

const app = express();

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use('/books', BookRouter);

app.get('/', (req, res) => {
  knexInstance.from('readnext').select('*')
   .then(result => {
     console.log(result)
   })
  res.send()

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








// require('dotenv').config()
// const express = require('express')
// const morgan = require('morgan')
// const cors = require('cors')
// const helmet = require('helmet')
// const { NODE_ENV } = require('./config')
// const knex = require('knex')


// const app = express()

// const morganSetting = process.env.NODE_ENV === 'production' ? 'tiny' : 'common'

// const knexInstance = knex({
//   client: 'pg',
//    connection: process.env.DB_URL
// });

// app.use(morgan(morganSetting))
// app.use(helmet())
// app.use(cors())
// app.use(express.json());

// app.use((error, req, res, next) => {
//   let response
//   if (process.env.NODE_ENV === 'production') {
//     response = { error: { message: 'server error' }}
//   } else {
//     response = { error }
//   }
//   res.status(500).json(response)
// })





//    });

   


// app.get('/', (req, res) => {
//     res.send('Hello Express!');
//   });

//   app.get('/burgers', (req, res) => {
//     res.send('We have juicy cheese burgers!');
//   })
//   app.listen(8000, () => {
//     console.log('Express server is listening on port 8000!');
//   });


  // module.exports = app