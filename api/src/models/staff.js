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

let directorSchema, producerSchema, writerSchema, musicSchema;
directorSchema = producerSchema = writerSchema = musicSchema = new Schema(staffSchema);

module.exports = {
    Director: mongoose.model('Director', directorSchema),
    Producer: mongoose.model('Producer', producerSchema),
    Writer: mongoose.model('Writer', writerSchema),
    Music: mongoose.model('Music', musicSchema)
};