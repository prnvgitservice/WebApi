import Categories from "../models/Categories.js";

export const getAllCategories = async (req, res) => {
    try {
        const categories = await Categories.findAll({
            attributes: [
                "id",
                "category_name",
                "category_slug",
                "other_slug",
                "category_image",
                "thumb_image",
                "cat_name",
                "cat_desc_image",
                "category_mobile_icon",
                "is_featured",
                "status",
                "totalviews",
                "created_at",
                "meta_title",
                "heading",
                "meta_description",
                "meta_keywords",
                "home_page_order"
            ],
        });
        res.status(200).json(categories);
    } catch (error) {
        console.error("❌ Error fetching categories:", error.message);
        res.status(500).json({ error: "Failed to fetch categories" });
    }
};