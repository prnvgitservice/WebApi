import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const administrators = sequelize.define(
    "administrators",
    {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        normal_password: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING(150),
            allowNull: false,
            unique: true,
        },
        full_name: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        profile_img: {
            type: DataTypes.STRING(256),
            allowNull: true,
        },
        role: {
            type: DataTypes.TINYINT(4),
            allowNull: false,
            defaultValue: 0,
        },
        token: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
    }, {
        tableName: "administrators",
        timestamps: false,
        indexes: [
            {
              unique: true,
              fields: ["email"],
            },
          ],
    });
    
export default administrators;