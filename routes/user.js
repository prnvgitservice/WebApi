import express from "express";
import { getAllUsers, registerUser } from "../controllers/userController.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/", verifyToken, getAllUsers);
router.post("/register", registerUser);

export default router;