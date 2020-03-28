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
  kindacts: [
    {
      type: Schema.Types.ObjectId,
      ref: "KindAct"
    }
  ]
});

UserSchema.pre("save", function(next) {
  var user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) {
    return next();
  }
  // generate a salt
  // bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
  //   if (err) return next(err);

  // hash the password using our new salt
  // bcrypt.hash(user.password, salt, function(err, hash) {
  // if (err) return next(err);
  user.password = bcrypt.hashSync(user.password, 10);

  //   });
  //   this.
  // override the cleartext password with the hashed one
  // user.password = hash;
  next();
  console.log("hashing");
});
// });
// });

// UserSchema.methods.hashpassword = async () => {
//   const newPassword = await bcrypt.hash(this.password, 10, (err, hash) => {
//     return hash;
//   });
//   this.password = newPassword;
//   return this.password;
// };

UserSchema.methods.validPassword = password => {
  console.log("checking hash");
  return bcrypt.compareSync(password, this.password);
};

var UserInfo = mongoose.model("UserInfo", UserSchema);

module.exports = UserInfo;
