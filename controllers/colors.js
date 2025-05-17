// controllers/colorController.js
import Color from "../models/color.js";

// Get all colors
export const getAllColors = async (req, res) => {
  try {
    const colors = await Color.findAll();
    res.json(colors);
  } catch (error) {
    res.status(500).json({ error: "Error fetching colors." });
  }
};

// Create a new color
export const createColor = async (req, res) => {
  try {
    const { color_name, status } = req.body;
    const newColor = await Color.create({ color_name, status });
    res.status(201).json(newColor);
  } catch (error) {
    res.status(400).json({ error: "Error creating color." });
  }
};

// Update a color
export const updateColor = async (req, res) => {
  try {
    const { id } = req.params;
    const { color_name, status } = req.body;

    const color = await Color.findByPk(id);
    if (!color) {
      return res.status(404).json({ error: "Color not found." });
    }

    await color.update({ color_name, status });
    res.json(color);
  } catch (error) {
    res.status(400).json({ error: "Error updating color." });
  }
};

// Delete a color
export const deleteColor = async (req, res) => {
  try {
    const { id } = req.params;
    const color = await Color.findByPk(id);

    if (!color) {
      return res.status(404).json({ error: "Color not found." });
    }

    await color.destroy();
    res.json({ message: "Color deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Error deleting color." });
  }
};
