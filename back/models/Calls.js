const config = require("../config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(config.mongodb, {});
const Schema = mongoose.Schema;

const Call = new Schema({
  name: { type: String, required: true },
  floor: { type: Number, required: true },
  created_at: { type: Date, required: true, default: Date.now }
});

module.exports = mongoose.model("Call", Call);