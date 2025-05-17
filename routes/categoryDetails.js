import express from "express";
import Category from "../models/category.js"; // Adjust the path as needed

const router = express.Router();

// Route to get categories with id, category_name, and category_image
router.get("/categories", async (req, res) => {
  try {
    const categories = await Category.findAll({
      attributes: ["id", "category_name", "category_image"],
    });
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;