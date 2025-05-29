import express from "express";

import { getPageContent } from "../controllers/pageContentController.js";

const router = express.Router();

router.get("/", getPageContent);

export default router;