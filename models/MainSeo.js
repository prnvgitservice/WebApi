import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";


const MainSeo = sequelize.define(
    "MainSeo",
    {
        id: {
            type: DataTypes.INTEGER(12),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        url: {
            type: DataTypes.TEXT("long"),
            allowNull: false,
        },
        title: {
            type: DataTypes.TEXT("long"),
            allowNull: false,
        },
        keywords: {
            type: DataTypes.TEXT("long"),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT("long"),
            allowNull: false,
        },
        added: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updated: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
            onUpdate: DataTypes.NOW,
        },
        status: {
            type: DataTypes.ENUM("1", "2"),
            allowNull: false,
            comment: "1-Active, 2-deleted/inactive",
        },
    },
    {
        tableName: "main_seo",
        timestamps: false,
    }
);

export default MainSeo;
