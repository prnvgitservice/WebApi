import PrnvPincodes from "../models/PrnvPincodes.js"

export const getAllPincodes = async (req, res) => {
    try{
        const pincodes = await PrnvPincodes.findAll({});
        res.status(200).json(pincodes);
    }catch(error){
        console.error("Error fetching Pincodes:", error);
        res.status(500).json({error: "Failed to fetch Pincodes"});
    }
};

