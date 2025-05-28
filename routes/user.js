import express from "express";
import { getAllUsers, registerUser, loginUser, getUserAddress } from "../controllers/userController.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/", verifyToken, getAllUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/address", getUserAddress);

export default router;