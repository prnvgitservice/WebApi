import express from "express";
import sequelize from "../config/database.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const [results] = await sequelize.query("SELECT CURRENT_TIMESTAMP() AS current_time_db");
    res.send("✅ MySQL Connected. Server Time: " + results[0].current_time_db + "<br>Welcome to PRNV Services Backend API");
  } catch (error) {
    res.status(500).send("Database Error: " + error.message);
  }
});

export default router;