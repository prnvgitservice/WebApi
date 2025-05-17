import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";  

const Color = sequelize.define(
  "Color",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    color_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active",
    },
  },
  {
    tableName: "colors",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

sequelize
  .sync()
  .then(({ models }) => {
    if (models.Color) {
      console.log("✅ Color table already exists.");
    } else {
      console.log("✅ Color table created.");
    }
  })
  .catch((err) => {
    console.error("❌ Error creating Color table:", err);
  });


export default Color;
