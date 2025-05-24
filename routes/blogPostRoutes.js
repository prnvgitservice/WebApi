import express from "express";
import { getAllBlogPosts } from "../controllers/blogpostController.js";

const router = express.Router();

router.get("/", getAllBlogPosts);

export default router;