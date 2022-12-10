import express from "express";
import { getTravelList } from "../controllers/travelsController.js";
const router = express.Router();

router.get("/", getTravelList);

export default router;
