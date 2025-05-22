import administrators from "../models/administrators.js";
import crypto from 'crypto';

export const registerAdmin = async (req, res) => {
    const {
        email,
        password,
        username,
        profile_img,
        full_name,
    } = req.body;

    if (!username || !full_name || !email || !password || !profile_img || !full_name) {
        return res.status(400).json({ message: "FullName, email, username, profile_img, password are required" });
    }

    try {
        const existingEmail = await administrators.findOne({ where: { email } });
        if (existingEmail) {
            return res.status(409).json({ message: "Email already in use" });
        }

        const existingUsername = await administrators.findOne({ where: { username } });
        if (existingUsername) {
            return res.status(409).json({ message: "Username already exists" });
        }

        const encryptedPassword = crypto.createHash("md5").update(password).digest("hex");

        const newAdmin = await administrators.create({
            email,
            password: encryptedPassword,
            username,
            profile_img,
            full_name,
            normal_password: password,
        });

        res.status(201).json({ message: "Admin registered successfully", administrators: newAdmin });

    } catch (error) {
        console.error("Registration error: ", error);
        res.status(500).json({ mesage: "Server error" });
    }
};