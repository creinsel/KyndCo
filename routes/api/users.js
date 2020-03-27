const router = require("express").Router();
const UserController = require("../../controller/UserController");

//localhost:3001/api/users/
// create a new user, find all users, find user by id
router
  .route("/")
  .get(UserController.findAll)
  .post((req, res) => {
    // console.log("req.body: ", req.body);
    UserController.create(req, res);
  });

//localhost:3001/api/users/login
router.route("/login").post((req, res) => {
  console.log("passport", req.body.email, req.body.password);
  UserController.findByEmail(req, res);
});

//localhost:3001/api/users/:id
router
  .route("/:id")
  .get(UserController.findById)
  .put(UserController.update)
  .post(UserController.performAct);

module.exports = router;
