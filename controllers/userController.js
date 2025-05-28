import User from "../models/User.js";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";


export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({});
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching User details:", error);
    res.status(500).json({ error: "Failed to fetch Users" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body; // identifier can be username or email

  try {
    // Try to find user by email
    let user = await User.findOne({ where: { email: email } });

    // If not found by email, try username
    // if (!user) {
    //   user = await User.findOne({ where: { name: identifier } });
    // }

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || "default_secret",
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const registerUser = async (req, res) => {
  const t = await sequelize.transaction();

  try {
    const {
      name,
      email,
      password,
      mobileno,
      aadhar_number,
      type, // 1 = provider, 2 = user
      username,
      category,
      subcategory,
      referred_by,
      team_limit,
      video_link,
      referral_earn,
      is_available,
      about_me,
      gst = "10",
      bda_id,
      purpose,
      offer,
      response_time,
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
      usertype = 0,
      is_agree = 1,
      language = "en"
    } = req.body;

    // ✅ Validate required fields
    if (!name || !email || !mobileno || !password || !aadhar_number || !type) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // ✅ Check for existing email, mobile, or aadhar
    const existingEmail = await User.findOne({ where: { email } });
    const existingMobile = await User.findOne({ where: { mobileno } });
    const existingAadhar = await User.findOne({ where: { aadhar_number } });

    if (existingEmail || existingMobile || existingAadhar) {
      return res.status(409).json({ message: "Email, mobile, or Aadhar number already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const now = new Date();

    // ✅ Create User
    const newUser = await User.create({
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
      last_login: now
    }, { transaction: t });

    let newProvider = null;

    if (type === 1) {
      const joinedBdaStr = now.toISOString().slice(0, 10);

      newProvider = await Providers.create({
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
      }, { transaction: t });
    }

    await t.commit();

    const jwtToken = jwt.sign(
      { id: newUser.id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(201).json({
      message: "Registration successful",
      user: newUser,
      provider: newProvider,
      jwt: jwtToken
    });

  } catch (error) {
    console.error("Unified registration error:", error);
    await t.rollback();
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
