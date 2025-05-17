import app from "./app.js";
import sequelize from "./config/database.js";

const PORT = 3231;

sequelize.authenticate()
  .then(() => {
    console.log("✅ Connected to Hostinger MySQL Database using Sequelize!");

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });

  })
  .catch((err) => {
    console.error("❌ Unable to connect to MySQL:", err);
  });
