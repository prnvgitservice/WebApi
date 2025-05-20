import express from "express";
import { getAllSeoContent } from "../controllers/seoContentDetailsController.js";

const router = express.Router();

router.get("/", getAllSeoContent);

export default router;