const router = require("express").Router();
const KindActsController = require("../../controller/KindActsController");

// shows all kind acts in db when get started btn is pressed
// before user logs in
//localhost:3001/api/kindacts/
router.route("/").get(KindActsController.findAll);

// finds and updates a kind act by id
//localhost:3001/api/kindacts/:id
router
  .route("/:id")
  .get(KindActsController.findById)
  .put(KindActsController.update);

//localhost:3001/api/kindacts/create
// creates new kind act in the db
router.route("/create").post(KindActsController.create);

module.exports = router;
