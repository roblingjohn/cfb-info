const router = require("express").Router();
const teamController = require("../../controllers/teamController");

router
  .route("/teams")
  .get(teamController.findAll)
  .post(teamController.create);

router
  .route("/teams/:team")
  .get(teamController.findBySearchName)
  .post(teamController.create);
//   .get(teamController.findById);

module.exports = router;
