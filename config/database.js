// Load environment variables from .env file
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
      authPlugins: {
        mysql_native_password: () => require('mysql2/lib/auth_plugins').mysql_native_password
      }
    },
    logging: false,
  });

export default sequelize;



