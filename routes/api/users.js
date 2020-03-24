const router = require("express").Router();
const UserController = require("../../controller/UserController");
const bcrypt = require("bcrypt");

//localhost:3001/api/users/
// finds user by id in db & allows us to update their info
router
  .route("/:id")
  .get(UserController.findById)
  .put(UserController.update)
  .post(UserController.performAct);

//localhost:3001/api/users/
// create a new user, find all users, find user by id
router
  .route("/")
  .post((req, res) => {
    console.log("req.body: ", req.body)
     bcrypt.hash(req.body.password, 10, (err, hash) => {
      req.body.password = hash;
    console.log("req.body 2: ", req.body)
    UserController.create(req, res);
   })
    
 })
  .get(UserController.findById)
  .get(UserController.findAll);

module.exports = router;
