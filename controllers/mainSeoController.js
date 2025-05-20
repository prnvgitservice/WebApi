import MainSeo from "../models/MainSeo.js";

export const getAllMainSeo = async (req, res) => {
    try{
        const content = await MainSeo.findAll();
        res.status(200).json(content);
    }catch (error){
        console.error("Error fetching Main SEO content: ", error);
        res.status(500).json({ error: "Failed to fetch SEO contents" });
    }
};