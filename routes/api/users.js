const router = require("express").Router();
const UserController = require("../../controller/UserController");


//localhost:3001/api/users/
// finds user by id in db & allows us to update their info
// router
//   .route("/:id")
//   .get(UserController.findById)
//   .put(UserController.update)
//   .post(UserController.performAct);

//localhost:3001/api/users/
// create a new user, find all users, find user by id
router
  .route("/")
  .get(UserController.findAll)
  .post((req, res) => {
    console.log("req.body: ", req.body);
    // bcrypt.hash(req.body.password, 10, (err, hash) => {
    //   req.body.password = hash;
    //   console.log("req.body 2: ", req.body);
      UserController.create(req, res);
    // });
  });
//localhost:3001/api/users/check/:id
router.route("/check/:id").post(UserController.checklogin);

router
.route("/login")
.post((req, res) => {
console.log("passport", req.body.email, req.body.password);
UserController.findByEmail(req, res);

//   passport.authenticate('local', { successRedirect: '/',
//                                    failureRedirect: '/login',
//                                    failureFlash: true } 
// )
// UserController.login(req,res)
})

  // .get(UserController.findById)
  // .get(UserController.findAll);

  router
    .route("/:id")
    .get(UserController.findById)
    .put(UserController.update)
    .post(UserController.performAct);
module.exports = router;
