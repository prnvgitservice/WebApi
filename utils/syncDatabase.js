import fs from "fs";
import path from "path";
import sequelize from "../config/database.js";

async function syncDatabase() {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully.");

    const modelsPath = path.resolve("models");
    const modelFiles = fs
      .readdirSync(modelsPath)
      .filter(file => file.endsWith(".js"));

    for (const file of modelFiles) {
      // Skip files that represent views (e.g., ViewGetAllAreasPincodes.js)
      if (file.startsWith("View")) {
        console.log(`⏭️ Skipped syncing view model: ${file}`);
        continue;
      }

      const model = await import(`../models/${file}`);
      await model.default.sync(); // optionally use { alter: true }
      console.log(`✅ ${file.replace(".js", "")} table synced successfully.`);
    }
  } catch (error) {
    console.error("❌ Error syncing database:", error);
  }
}

export default syncDatabase;
