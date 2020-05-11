const mongoose = require('mongoose');

const actorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    movies: {
      type: [Schema.Types.ObjectId],
      ref: 'Movie',
      required: true
    }
});

module.exports = mongoose.model('Actor', actorSchema);

//TODO: Link actor model to movie (array of movie entry)