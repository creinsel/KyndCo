var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var UserSchema = new Schema({

  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  badges: {
    type: String
  },
  points: {
    type: Number,
    required: true
  },
  act: [
    {
      type: Schema.Types.ObjectId,
      ref: "KindActs"
    }
  ]

});

var UserInfo = mongoose.model("UserInfo", UserSchema);

module.exports = UserInfo;
