import User from "../models/User.js";

export const getAllUsers = async (req, res) => {
    try{
        const users = await User.findAll({});
        res.status(200).json(users);
    }catch(error){
        console.error("Error fetching User details:", error);
        res.status(500).json({error: "Failed to fetch Users"});
    }
};