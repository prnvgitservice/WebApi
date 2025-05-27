import app from "./app.js";
import sequelize from "./config/database.js";
import syncDatabase from "./utils/syncDatabase.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8080;

sequelize.authenticate()
  .then(() => {
    console.log("✅ Connected to Hostinger MySQL Database using Sequelize!");

    // Sync all database tables
    syncDatabase()
      .then(() => {
        console.log("✅ All tables synced successfully.");

        // Express Server
        app.listen(PORT, '0.0.0.0', () => {
          console.log(`🚀 Server running at http://0.0.0.0:${PORT}/api/`);
        });

      })
      .catch((err) => {
        console.error("❌ Error during database sync:", err);
      });
  })
  .catch((err) => {
    console.error("❌ Unable to connect to MySQL:", err);
  });