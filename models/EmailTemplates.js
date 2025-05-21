import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const EmailTemplates = sequelize.define(
  "EmailTemplates",
  {
    template_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    template_title: {
      type: DataTypes.TEXT,
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    template_content: {
      type: DataTypes.BLOB('long'),
      allowNull: false,
    },
    template_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    template_created: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    template_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0 - Inactive, 1 - Active",
    },
  },
  {
    tableName: "email_templates",
    timestamps: false,
  }
);

export default EmailTemplates;
