const router = require("express").Router();
const UserController = require("../../controller/UserController");

//localhost:3001/api/users/
// finds user by id in db & allows us to update their info
router
  .route("/:id")
  .get(UserController.findById)
  .put(UserController.update);

//localhost:3001/api/users/
// create a new user, find all users, find user by id
router
  .route("/")
  .post(UserController.create)
  .get(UserController.findById)
  .get(UserController.findAll);

module.exports = router;
