const router = require("express").Router();
const UserController = require("../../controller/UserController");

//localhost:3000/api/users/:id
// find user by id in db, update user by id
router
  .route("/:id")
  .get(UserController.findById)
  .put(UserController.update);

//localhost:3000/api/users
// create a new user, find user by id, and find all users
router
  .route("/")
  .post(UserController.create)
  .get(UserController.findById)
  .get(UserController.findAll);

module.exports = router;
