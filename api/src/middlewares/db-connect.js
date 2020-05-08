const mongoose = require('mongoose');

const uri = 'mongodb://database/my-movietheque'

const dbConnect = () => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = dbConnect;
