import express from "express";
import { getAllProviders, registerProvider } from "../controllers/providersController.js";

const router = express.Router();

router.get("/", getAllProviders);
router.post("/signup", registerProvider)

export default router;