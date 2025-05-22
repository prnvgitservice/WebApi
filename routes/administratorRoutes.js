import express from "express";
import { registerAdmin } from "../controllers/administratorsController.js";

const router = express.Router();

router.post("/register", registerAdmin);

export default router;