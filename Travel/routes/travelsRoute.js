const express = require("express");
const getTravelList =
  require("../src/controllers/travelsController.js").getTravelList;
const router = express.Router();

router.get("/", getTravelList);

module.exports = { router };
