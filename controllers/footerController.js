import FooterMenu from "../models/FooterMenu.js";
import FooterSubmenu from "../models/FooterSubmenu.js"

export const getFooterMenu = async(req , res) => {
    try{
        const footerMenu = await FooterMenu.findAll();
        res.json(footerMenu);
    }catch(error){
        res.status(500).json({error: "Error fectching Footer Menu."})
    }
};

export const getFooterSubmenu = async(req, res) => {
    try{
        const footerSubmenu = await FooterSubmenu.findAll();
        res.json(footerSubmenu);
    }catch(error){
        res.status(500).json({error: "Error fetching Footer Submenu."})
    }
};