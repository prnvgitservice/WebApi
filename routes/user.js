import express from "express";
import { getAllUsers, registerUser, loginUser } from "../controllers/userController.js";
import { verifyToken } from "../middleware/auth.js";
import { log } from "console";

const router = express.Router();

router.get("/", verifyToken, getAllUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;