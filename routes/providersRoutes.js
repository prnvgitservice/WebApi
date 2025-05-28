import express from "express";
import { getAllProviders, getProviderAddress, getProviderGallery, getProviderHighligths, getProviderVideoGallery, registerProvider } from "../controllers/providersController.js";

const router = express.Router();

router.get("/", getAllProviders);
router.post("/signup", registerProvider);
router.get("/videogallery", getProviderVideoGallery);
router.get("/address", getProviderAddress);
router.get("/gallery", getProviderGallery);
router.get("/hightlights", getProviderHighligths);

export default router;