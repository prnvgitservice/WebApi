import PageContent from "../models/PageContent.js";

export const getPageContent = async ( req , res) => {
    try {
        const pageContent = await PageContent.findAll();
        res.json(pageContent);
    }catch(error) {
        res.status(500).json({error: "Error fetching Page Content Details."})
    }
}