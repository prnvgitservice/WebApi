import express from "express";
import { getAllProviders, getProviderAddress, getProviderVideoGallery, registerProvider } from "../controllers/providersController.js";

const router = express.Router();

router.get("/", getAllProviders);
router.post("/signup", registerProvider);
router.get("/gallery", getProviderVideoGallery);
router.get("/address", getProviderAddress);

export default router;