import User from "../models/User.js";
import crypto from 'crypto';
import jwt from 'jsonwebtoken';


export const getAllUsers = async (req, res) => {
    try{
        const users = await User.findAll({});
        res.status(200).json(users);
    }catch(error){
        console.error("Error fetching User details:", error);
        res.status(500).json({error: "Failed to fetch Users"});
    }
};

export const registerUser = async (req, res) => {
  const {
    name,
    email,
    password,
    mobileno,
    country_code = "91",
    currency_code = "INR",
    otp = "000000",
    profile_img = "https://example.com/default-profile.png",
    pwd,
    account_holder_name = "Default Holder",
    account_number = "0000000000",
    account_iban = "IN00000000000000000000",
    bank_name = "Default Bank",
    bank_address = "Default Address",
    sort_code = "000000",
    routing_number = "000000000",
    account_ifsc = "IFSC0000000",
    language = "en"
  } = req.body;

  if (!name || !email || !password || !mobileno) {
    return res.status(400).json({ message: "Name, email, password, and mobile number are required" });
  }

  try {
    const existingEmail = await User.findOne({ where: { email } });
    if (existingEmail) {
      return res.status(409).json({ message: "Email already in use" });
    }

    const existingMobile = await User.findOne({ where: { mobileno } });
    if (existingMobile) {
      return res.status(409).json({ message: "Mobile number already in use" });
    }

    const encryptedPassword = crypto.createHash("md5").update(password).digest("hex");
    const now = new Date();

    const newUser = await User.create({
      name,
      email,
      mobileno,
      password: encryptedPassword,
      pwd: pwd || encryptedPassword,
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
      type: 2,
      is_agree: 1,
      usertype: 0,
      created_at: now,
      updated_at: now,
      last_login: now
    });

    // 🔐 Issue JWT token
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(201).json({
      message: "User registered successfully",
      user: newUser,
      jwt: token
    });

  } catch (error) {
    console.error("Registration error: ", error);
    res.status(500).json({ message: "Server error" });
  }
};
