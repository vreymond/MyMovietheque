const mongoose = require('mongoose');

const Movie = require('../models/movie');

/* TODO: 
        - update movie function
        - delete movie function
        - adding jwt and bcrypt
*/

exports.get_all_movies = (req, res, next) => {
    Movie.find()
        .select('_id title')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                movies: docs.map(doc => {
                    return {
                        _id: doc._id,
                        title: doc.title,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:8080/' + doc._id
                        }
                    }
                })
            };
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
};

exports.get_movie = (req, res, next) => {
    const movieID = req.params.movieID;
    Movie.findById(movieID)
        .select('_id title')
        .exec()
        .then( doc => {
            if (doc) {
                res.status(200).json({
                    movie: doc,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:8080/' + doc._id
                    }
                });
            }
            else {
                res.status(404).json({
                    status: '404',
                    message: 'No movie found in database for provided id'
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        })
}

exports.add_movie = (req, res, next) => {
    console.log(req.body);
    const movie = new Movie({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title
    });

    movie
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Created movie successfully',
                createdMovie: {
                    _id: result._id,
                    title: result.title,
                    request: {
                        type: 'POST',
                        url: 'http://localhost:8080' + result._id
                    }
                }
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
}

exports.update_movie = (req, res, next) => {
    const movieID = req.params.movieID;
    const updateOps = {};

    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }

    Movie.update({_id: movieID}, {$set: updateOps})
        .exec()
        .then(result => {
            console.log(res)
            res.status(200).json({
                message: 'Movie updated',
                request: {
                    type: 'Get',
                    url: 'http://localhost:3000/' + movieID
                }
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
}

exports.movie_delete = (req, res, next) => {
    const movieID = req.params.movieID;

    Movie.remove({_id: movieID})
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Movie deleted',
                request: {
                    type: 'POST',
                    url: 'http://localhost:8080'
                }
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
}