import PrnvServiceAreas from "../models/PrnvServiceAreas.js";

export const getAllPrnvServiceAreas = async(req, res) =>{
    try{
        const serviceAreas = await PrnvServiceAreas.findAll();
        res.json(serviceAreas);
    }catch(error){
        res.status(500).json({error: "Error fetching Service Areas."});
    }
};