import BlogPosts from "../models/BlogPosts.js";

export const getAllBlogPosts = async (req, res) => {
    try{
        const blogs = await BlogPosts.findAll();
        res.json(blogs);
    } catch(error) {
        res.status(500).json({error: "Error fetching blog."});
    }
}