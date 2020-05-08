const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    date: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    genre: {
        type: [String],
        required: true
    },
    rating: {
        type: String
    },
    director: {
        type: String,
        required: true
    },
    producer: {
        type: String
    },
    writer: {
        type: [String]
    },
    actors: {
        type: [String]
    }
});

module.exports = mongoose.model('Movie', movieSchema);