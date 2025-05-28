import AdvGallery from "../models/AdvGallery.js";
import AdvertisementFee from "../models/AdvertisementFee.js";
import AdvPosts from "../models/AdvPosts.js";

export const getAllAdvGallery = async (req , res) => {
    try{
        const advGallery = await AdvGallery.findAll();
        res.json(advGallery);
    }catch(error) {
        res.status(500).json({error: "Error fetching ADS Gallery."});
    }
};

export const getAdvertisementFee = async (req , res) => {
    try {
        const advFee = await AdvertisementFee.findAll();
        res.json(advFee);
    }catch(error){
        res.status(500).json({error: "Error fetching ADS Fee."})
    }
};

export const getAdvPosts = async(req , res) => {
    try{
        const advPost = await AdvPosts.findAll();
        res.json(advPost);
    }catch(error){
        res.status(500).json({error: "Error fectching ADS Posts."})
    }
};