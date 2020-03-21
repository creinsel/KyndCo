const router = require("express").Router();
const KindActsController = require("../../controller/KindActsController");
const UserController = require("../../controller/UserController");

//localhost:3000/api/kindacts/
// shows all kind acts in db when get started btn is pressed
// before user logs in
router
  .route("/:id/dashboard")
  .get(KindActsController.findAll)
  .post(KindActsController.create);

//localhost:3000/api/kindacts/
// finds and updates a kind act by id
router
  .route("/:id")
  .get(KindActsController.findById)
  .put(UserController.update);

module.exports = router;
