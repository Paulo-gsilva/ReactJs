const express = require("express");
const {
  updateTravel,
  deleteTravel,
  getTravelList,
  createTravel,
} = require("../src/controllers/travelsController.js");
const router = express.Router();

router.get("/", getTravelList);
router.post("/", createTravel);
router.delete("/:id", deleteTravel);
router.put("/:id", updateTravel);

module.exports = { router };
