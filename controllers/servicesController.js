import Service from "../models/Services.js";

export const getAllServices = async(req , res) => {
    try{
        const services = await Service.findAll({})
        res.status(200).json(services);
    }catch(error){
        console.error("Error fetching Services:", error);
        res.status(500).json({error: "Failed to fetch Services"});
    }
}
