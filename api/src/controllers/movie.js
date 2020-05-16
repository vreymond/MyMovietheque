const mongoose = require('mongoose');

const Movie = require('../models/movie');

exports.get_movies = (req, res, next) => {
    Movie.find()
        .select('_id title')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                movies: docs.map(doc => {
                    return {
                        _id: doc._id,
                        title: doc.title
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
                    title: result.title
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