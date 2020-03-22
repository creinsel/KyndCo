const router = require("express").Router();
const userRoutes = require("./users");
const kindRoutes = require("./kindacts");

//localhost:3000/api

// User routes
router.use("/users", userRoutes);

// Kindacts routes
router.use("/kindacts", kindRoutes);

module.exports = router;
