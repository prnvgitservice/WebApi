import FAQ from "../models/Faq.js";

export const getAllFaq = async (req, res) => {
    try{
        const faqs = await FAQ.findAll();
        res.json(faqs);
    } catch(error) {
        res.status(500).json({error: "Error fetching FAQ's."});
    }
}
