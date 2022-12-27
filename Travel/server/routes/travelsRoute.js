import express from "express";
import {
  updateTravel,
  deleteTravel,
  getTravelList,
  createTravel,
} from "../controllers/travelsController.js";
const router = express.Router();

router.get("/", getTravelList);
router.post("/", createTravel);
router.delete("/:id", deleteTravel);
router.put("/:id", updateTravel);

export default router;
