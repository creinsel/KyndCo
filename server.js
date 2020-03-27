const express = require("express");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const router = express.Router();

// const router = express.Router();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
// const root = require('path').join(__dirname, 'client', 'build')

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);
// app.use(express.static(root));

mongoose.connect(
  "mongodb://localhost/KyndCo",
  { useNewUrlParser: true },
  err => {
    if (!err) console.log("connected to mongo");
  }
);

app.get("*", (req, res) => {
  res.sendFile("index.html", {
    root
  });
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

// module.exports = router;
