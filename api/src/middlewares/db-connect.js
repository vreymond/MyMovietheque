const mongoose = require('mongoose');
require('dotenv').config();

const dbName = process.env.DB_NAME;
const rootUser = process.env.MONGO_INITDB_ROOT_USERNAME;
const rootPwd = process.env.MONGO_INITDB_ROOT_PASSWORD;

const uri = `mongodb://${rootUser}:${rootPwd}@database/${dbName}?authSource=admin`;

const dbConnect = () => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

module.exports = dbConnect;

