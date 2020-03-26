var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

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

UserSchema.methods.hashpassword = async () => {
  const newPassword = await bcrypt.hash(this.password, 10, (err, hash) => {
    return hash;
  });
  this.password = newPassword;
  return this.password;
};

UserSchema.methods.validPassword = password => {
  return bcrypt.compareSync(password, this.password);
};

var UserInfo = mongoose.model("UserInfo", UserSchema);

module.exports = UserInfo;
