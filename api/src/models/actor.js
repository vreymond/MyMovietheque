const mongoose = require('mongoose');

const actorSchema = mongoose.Schema({
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