import express from "express";
import Color from "../models/color.js";

const router = express.Router();

// Create a new color
router.post("/", async (req, res) => {
  try {
    const { color_name, status } = req.body;
    const color = await Color.create({ color_name, status });
    res.status(201).json(color);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all colors
router.get("/", async (req, res) => {
  try {
    const colors = await Color.findAll();
    res.json(colors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single color by ID
router.get("/:id", async (req, res) => {
  try {
    const color = await Color.findByPk(req.params.id);
    if (color) {
      res.json(color);
    } else {
      res.status(404).json({ error: "Color not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a color by ID
router.put("/:id", async (req, res) => {
  try {
    const { color_name, status } = req.body;
    const color = await Color.findByPk(req.params.id);
    if (color) {
      color.color_name = color_name || color.color_name;
      color.status = status || color.status;
      await color.save();
      res.json(color);
    } else {
      res.status(404).json({ error: "Color not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a color by ID
router.delete("/:id", async (req, res) => {
  try {
    const color = await Color.findByPk(req.params.id);
    if (color) {
      await color.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Color not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
