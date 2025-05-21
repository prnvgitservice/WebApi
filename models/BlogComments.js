import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";  

const BlogComments = sequelize.define(
  "BlogComments",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    comment: {
      type: DataTypes.STRING(5000),
      allowNull: true,
    },
    ip_address: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1, // Default status
    },
    created_at: {
      type: DataTypes.TIMESTAMP,
      allowNull: true,
      defaultValue: DataTypes.NOW, // Current timestamp
    },
  },
  {
    tableName: "blog_comments",
    timestamps: false, // Disable automatic timestamps since we are using custom fields
  }
);

export default BlogComments;
