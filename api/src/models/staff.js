const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = mongoose.Schema({
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
        ref: 'Movie'
    }
});

const directorSchema = new Schema(staffSchema);

module.exports = mongoose.model('Staff', staffSchema);

//TODO: Link staff model to movie (array of movie entry)