const router = require("express").Router();
const UserController = require("../../controller/UserController");

// finds users in db & updates
router
  .route("/:id")
  .get(UserController.findById)
  .put(UserController.update);
  

// create a new user
router.route("/create").post(UserController.create);

module.exports = router;