var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var KindActsSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    tier: {
        type: Number,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
   
})

var KindActs = mongoose.model("KindActs", KindActsSchema);

module.exports = KindActs;
