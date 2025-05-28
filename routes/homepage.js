import express from "express";
import { getAllPrnvServiceAreas } from "../controllers/PrnvServiceAreasController.js";

const router = express.Router();

router.get("/", getAllPrnvServiceAreas);

export default router;