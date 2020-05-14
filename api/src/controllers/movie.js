const mongoose = require('mongoose');

const Movie = require('../models/movie');

exports.add_movie = (req, res, next) => {
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