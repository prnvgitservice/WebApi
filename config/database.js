import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

console.log("Dialect:", process.env.DB_DIALECT); // Debug

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT, // Make sure this is not undefined
    define: {
      indexes: [],
    },
    dialectOptions: {
      ssl: false,
      authPlugins: {
        mysql_native_password: () =>
          require("mysql2/lib/auth_plugins").mysql_native_password,
      },
    },
    logging: false,
  }
);

export default sequelize;