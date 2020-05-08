const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = mongoose.Schema({
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
  }
});

module.exports = mongoose.model('Staff', staffSchema);