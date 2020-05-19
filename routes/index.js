const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./authRoutes");

//localhost:3000/
// API Routes
router.use("/api", apiRoutes);

//use auth routes

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
