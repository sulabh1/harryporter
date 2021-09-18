const express = require("express");
const characterController = require("../controllers/characterController");
const router = express.Router();

router
  .route("/")
  // .post(characterController.createCharacter)
  .get(characterController.getData);

module.exports = router;
