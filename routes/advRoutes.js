import express from "express";

import { getAllAdvGallery } from "../controllers/advController.js";
import { getAdvertisementFee } from "../controllers/advController.js";
import { getAdvPosts } from "../controllers/advController.js";

const router = express.Router();

router.get("/adv-gallery", getAllAdvGallery);
router.get("/adv-fee", getAdvertisementFee);
router.get("/adv-posts", getAdvPosts);

export default router;