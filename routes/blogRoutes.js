import express from "express";
import { getAllBlogPosts } from "../controllers/blogController.js";
import { getAllBlogCategories } from "../controllers/blogController.js";
import { getAllBlogComments } from "../controllers/blogController.js";

const router = express.Router();

router.get("/blog-posts", getAllBlogPosts);
router.get("/blog-categories", getAllBlogCategories);
router.get("/blog-comments", getAllBlogComments);

export default router;