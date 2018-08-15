const config = require('../config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(
  config.mongodb,
  {}
);
const Schema = mongoose.Schema;

const Floor = new Schema({
  floor_number: { type: Number, required: true },
  floor_position: { type: String, required: true },
  door_status: { type: String, required: true },
  vertical_status: { type: String, required: true },
  call_activation: { type: String, required: true }
});

module.exports = mongoose.model('Floor', Floor);
