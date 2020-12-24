const knex = require('knex');
const app = require('./app');
const { PORT, DATABASE_URL } = require('./config');

const db = knex({
  client: 'pg',
  connection: {
    dbname='d5m5v2m0gmoil4',
    host='ec2-52-6-75-198.compute-1.amazonaws.com',
    port='5432',
    user='znpkqzrrrahlwk',
    password='3c3e3e8881f885e80d9d4d6e6cfc94ed5aa599144afa4ba95c5ff30bba42e0b2',
    sslmode='require'
  }








});

app.set('db', db);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});