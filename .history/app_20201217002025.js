const express = require('express');
const morgan = require('morgan')

const app = express();
const cors = require('cors');
app.use(morgan('dev'));
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello Express!');
  });

  app.get('/burgers', (req, res) => {
    res.send('We have juicy cheese burgers!');
  })
  app.listen(8000, () => {
    console.log('Express server is listening on port 8000!');
  });