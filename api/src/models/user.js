const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// TODO: Add movies ref to user?

module.exports = mongoose.model('User', userSchema);