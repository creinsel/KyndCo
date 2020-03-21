const router = require("express").Router();
const UserController = require("../../controller/UserController");

//localhost:3000/users/
// finds user by id in db & allows us to update their info
router
  .route("/:id/dashboard")
  .get(UserController.findById)
  .put(UserController.update);

//localhost:3000/users/
// create a new user
router.route("/").post(UserController.create);

module.exports = router;
