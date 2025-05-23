import express from "express";
import { getAllCities } from "../controllers/pncCitiesController.js";

const router = express.Router();

router.get("/:stateId", getAllCities);

export default router;