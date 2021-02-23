const router = require("express").Router();
const teamController = require("../../controllers/teamController");

router
  .route("/teams")
  .get(teamController.findAll)
  .post(teamController.create);

router
  .route("/events/:team")
  .get(teamController.findById)
  .post(teamController.create);
//   .get(teamController.findById);

module.exports = router;
