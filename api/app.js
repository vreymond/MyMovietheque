const express = require('express')
const cors = require("cors");

const app = express()
const PORT = 8080;

app.use(cors());

app.get('/', function (req, res) {
  res.send('My Movietheque API')
})

app.listen(PORT, function () {
  console.log(`MyMovietheque API is listening on port ${PORT}`)
})