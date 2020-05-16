const express = require('express');
const router = express.Router();


const MovieController = require('../controllers/movie');

// TODO: movie routes

router.get('/', MovieController.get_movies);

router.post('/', MovieController.add_movie);

module.exports = router;
