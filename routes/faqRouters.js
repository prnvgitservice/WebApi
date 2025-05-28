import express from "express";

import { getAllFaq } from "../controllers/faqController.js";

const router = express.Router();

router.get("/", getAllFaq);

export default router;