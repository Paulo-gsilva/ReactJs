const express = require("express");
const deleteTravel =
  require("../src/controllers/travelsController.js").deleteTravel;
const getTravelList =
  require("../src/controllers/travelsController.js").getTravelList;
const createTravel =
  require("../src/controllers/travelsController.js").createTravel;
const router = express.Router();

router.get("/", getTravelList);
router.post("/", createTravel);
router.delete("/:id", deleteTravel);

module.exports = { router };
