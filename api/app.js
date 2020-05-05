const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const dbConnect = require('./src/middlewares/db-connect');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(helmet());

app.get('/', function (req, res) {
  res.send('My Movietheque API');
})

dbConnect().then(() => {
  console.log(`Connection with the ${process.env.DB_NAME} established`);

  app.listen(PORT, function () {
    console.log(`MyMovietheque API is listening on port ${PORT}`);
  });
});

