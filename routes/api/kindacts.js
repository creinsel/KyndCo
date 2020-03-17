const router = require("express").Router();
const KindActsController = require("../../controller/KindActsController");

// shows all kind acts in db when get started btn is pressed
// before user logs in
router.route("/get-started").get(KindActsController.findAll);

// finds and updates a kind act by id
router
  .route("/:id")
  .get(KindActsController.findById)
  .put(KindActsController.update);

// creates new kind act in the db
router.route("/create").post(KindActsController.create);

module.exports = router;
