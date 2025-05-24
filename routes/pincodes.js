import express from "express";
import { getAllPincodes } from "../controllers/pincodesController.js";

const router = express.Router();

router.get("/", getAllPincodes);

export default router;