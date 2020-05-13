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
    country: {
        type: String
    },
    studio: {
        type: String
    },
    staff: {
        director: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Director',
            required: true
        },
        producer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Producer'
        },
        writer: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Writer'
        },
        music: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Music'
        }
    },
    casting: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Actor'
    }
});

module.exports = mongoose.model('Movie', movieSchema);

// TODO: Removing director, producer, writer, actors. Use reference to other model