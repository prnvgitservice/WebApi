import express from "express";
import { getAllMainSeo } from "../controllers/mainSeoController.js";

const router = express.Router();

router.get("/", getAllMainSeo);

export default router;