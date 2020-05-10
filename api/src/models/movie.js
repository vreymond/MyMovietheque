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
    staff: {
        director: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        producer: {
            type: mongoose.Schema.Types.ObjectId,
        },
        writer: {
            type: [mongoose.Schema.Types.ObjectId],
        },
        actors: {
            type: [mongoose.Schema.Types.ObjectId],
        }
    }
});

module.exports = mongoose.model('Movie', movieSchema);

// TODO: Removing director, producer, writer, actors. Use reference to other model