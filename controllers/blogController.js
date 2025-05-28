import BlogPosts from "../models/BlogPosts.js";
import BlogCategories from "../models/BlogCategories.js";
import BlogComments from "../models/BlogComments.js";

export const getAllBlogPosts = async (req, res) => {
    try{
        const blogsPosts = await BlogPosts.findAll();
        res.json(blogsPosts);
    } catch(error) {
        res.status(500).json({error: "Error fetching blog Posts."});
    }
}

export const getAllBlogCategories = async (req, res) => {
    try{
        const blogsCategories = await BlogCategories.findAll();
        res.json(blogsCategories);
    } catch(error) {
        res.status(500).json({error: "Error fetching blogs Categories."});
    }
};

export const getAllBlogComments = async (req, res) => {
    try{
        const blogComments = await BlogComments.findAll();
        res.json(blogComments);
    } catch(error) {
        res.status(500).json({error: "Error fetching blogs Comments."});
    }
};