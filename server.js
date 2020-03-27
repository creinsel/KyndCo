const express = require("express");
const routes = require("./routes")
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
const router = express.Router();

passport.use(new LocalStrategy({
  usernameField: 'email',
},
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));
// const router = express.Router();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
// const root = require('path').join(__dirname, 'client', 'build')

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes)
// app.use(express.static(root));

mongoose.connect("mongodb://localhost/KyndCo", { useNewUrlParser: true }, (err) =>{
  if(!err) console.log("connected to mongo")
});

app.get("*", (req, res) => {
  res.sendFile('index.html', {
    root
  });
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

// module.exports = router;
