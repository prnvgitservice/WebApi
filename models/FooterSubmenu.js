import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const FooterSubmenu = sequelize.define(
  "FooterSubmenu",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    footer_menu: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    footer_submenu: {
      type: DataTypes.STRING(50),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    widget_showhide: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    widget_name: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    link: {
      type: DataTypes.TEXT,
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    address: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    phone: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    email: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    category_view: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    category_count: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    followus_link: {
      type: DataTypes.TEXT,
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    category_enable: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    page_title: {
      type: DataTypes.STRING(50),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    page_desc: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    menu_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "footer_submenu",
    timestamps: false,
  }
);

export default FooterSubmenu;
