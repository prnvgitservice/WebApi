import bcrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import sequelize from "../config/database.js";
import User from "../models/User.js";
import Providers from "../models/Providers.js";
import ProviderVideoGallery from "../models/ProviderVideoGallery.js";
import ProviderAddress from "../models/ProviderAddress.js";
import ProviderGallery from "../models/ProviderGallery.js";
import ProviderHighlights from "../models/ProviderHighlights.js";

import dotenv from "dotenv";

dotenv.config();

export const getAllProviders = async (req, res) => {
    try {
        const provider = await Providers.findAll();
        res.json(provider);
    } catch (error) {
        res.status(500).json({ error: "Error fetching providers." })
    }
};


export const getProviderVideoGallery = async(req, res) => {
    try{
        const gallery = await ProviderVideoGallery.findAll();
        res.json(gallery);
    }catch(error){
        res.status(500).json({error: "Error fetching Provider Video Gallery."});
    }
};

export const getProviderAddress = async(req, res) => {
    try{
        const providerAddress = await ProviderAddress.findAll();
        res.json(providerAddress);
    }catch(error){
        res.status(500).json({error: "Error fetching Proivder Address."});
    }
}

export const getProviderGallery = async(req, res) => {
    try{
        const providerGallery = await ProviderGallery.findAll();
        res.json(providerGallery);
    }catch(error){
        res.status(500).json({error: "Error fetching Proivder Gallery."});
    }
}

export const getProviderHighligths = async(req, res) => {
    try{
        const providerHighlight = await ProviderHighlights.findAll();
        res.json(providerHighlight);
    }catch(error){
        res.status(500).json({error: "Error fetching Proivder Gallery."});
    }
}

export const registerProvider = async (req, res) => {
    const t = await sequelize.transaction();

    try {
        const {
            name,
            username,
            email,
            mobileno,
            password,
            category,
            subcategory,
            country_code = "91",
            currency_code = "INR",
            profile_img = "https://example.com/default-profile.png",
            otp = "000000",
            account_holder_name = "Default Holder",
            account_number = "0000000000",
            account_iban = "IN00000000000000000000",
            bank_name = "Default Bank",
            bank_address = "Default Address",
            sort_code = "000000",
            routing_number = "000000000",
            account_ifsc = "IFSC0000000",
            referred_by,
            team_limit,
            video_link,
            referral_earn,
            pwd,
            usertype = 0,
            type = 1, 
            is_agree = 1,
            language = "en",
            is_available,
            about_me,
            gst="10",
            bda_id,
            purpose,
            offer,
            response_time,
            aadhar_number = null,
        } = req.body;

        // Validate required fields
        if (!name || !email || !mobileno || !password || !category || !aadhar_number) {
            return res.status(400).json({ message: "Required fields are missing." });
        }

        const existingEmail = await User.findOne({ where: { email } });
        const existingMobile = await User.findOne({ where: { mobileno } });

        if (existingEmail || existingMobile) {
            return res.status(409).json({ message: "Email or Mobile already in use." });
        }


        const hashedPassword = await bcrypt.hash(password, 10);
        const now = new Date();

        const joinedBdaStr = now.toISOString().slice(0, 10);  // "YYYY-MM-DD"


        const newUser = await User.create(
            {
                name,
                email,
                mobileno,
                password: hashedPassword,
                pwd: pwd || hashedPassword,
                aadhar_number,
                country_code,
                currency_code,
                otp,
                profile_img,
                account_holder_name,
                account_number,
                account_iban,
                bank_name,
                bank_address,
                sort_code,
                routing_number,
                account_ifsc,
                language,
                token: crypto.randomBytes(8).toString("hex"),
                share_code: crypto.randomBytes(4).toString("hex"),
                status: 1,
                type,
                is_agree,
                usertype,
                created_at: now,
                updated_at: now,
                last_login: now,
            },
            { transaction: t }
        );

        const newProvider = await Providers.create(
            {
                joined_bda: joinedBdaStr,
                name,
                username: username || null,
                email,
                mobileno,
                password: hashedPassword,
                pwd: pwd || hashedPassword,
                country_code,
                currency_code,
                share_code: newUser.share_code,
                category,
                subcategory,
                profile_img,
                token: newUser.token,
                dob: null,
                otp,
                account_holder_name,
                account_number,
                account_iban,
                bank_name,
                bank_address,
                sort_code,
                routing_number,
                account_ifsc,
                created_at: now,
                referred_by,
                team_limit,
                video_link,
                referral_earn,
                updated_at: now,
                status: 1,
                delete_status: "0",
                usertype,
                type,
                last_login: now,
                last_logout: null,
                is_agree,
                is_online: 2,
                language,
                is_available,
                about_me,
                gst,
                total_views: 0,
                bda_id,
                purpose,
                offer,
                response_time
            },
            { transaction: t }
        );

        await t.commit();

        // Issue JWT token
        const jwtToken = jwt.sign(
            { id: newUser.id, email: newUser.email },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        return res.status(201).json({
            message: "Provider registered successfully.",
            user: newUser,
            provider: newProvider,
            jwt: jwtToken
        });

    } catch (error) {
        console.error("Error registering provider:", error);
        await t.rollback();
        res.status(500).json({ message: "Internal Server Error." });
    }
};
