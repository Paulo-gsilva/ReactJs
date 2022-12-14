const express = require("express");
const getTravelList =
  require("../src/controllers/travelsController.js").getTravelList;
const createTravel =
  require("../src/controllers/travelsController.js").createTravel;
const router = express.Router();

router.get("/", getTravelList);
router.post("/", createTravel);

module.exports = { router };
