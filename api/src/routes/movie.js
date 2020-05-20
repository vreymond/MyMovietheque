const express = require('express');
const router = express.Router();


const MovieController = require('../controllers/movie');

// TODO: movie routes
//       adding auth middleware

router.get('/', MovieController.get_all_movies);

router.post('/', MovieController.add_movie);

router.get('/:movieID', MovieController.get_movie);

module.exports = router;
