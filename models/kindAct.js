var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var KindActsSchema = new Schema({
  task: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    default: "Others"
  },
  points: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

var KindAct = mongoose.model("KindAct", KindActsSchema);

module.exports = KindAct;
