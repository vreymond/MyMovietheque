const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const dbConnect = require('./src/middlewares/db-connect');
const testroutes = require('./src/routes/init');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(helmet());

app.use('/init', testroutes);

// Connection to db check
dbConnect().then(() =>{
  console.log('Connection to my-movietheque databse established !');
  app.listen(PORT, function () {
    console.log(`MyMovietheque API is listening on port ${PORT}`);
  });
});