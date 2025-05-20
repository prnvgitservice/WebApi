import SeoContentDetails from "../models/SeoContentDetails.js";

export const getAllSeoContent = async (req, res) => {
  try {
    const contents = await SeoContentDetails.findAll({
      order: [['added_date', 'DESC']],
    });
    res.status(200).json(contents);
  } catch (error) {
    console.error("Error fetching SEO contents:", error);
    res.status(500).json({ error: "Failed to fetch SEO contents" });
  }
};
