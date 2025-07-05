import * as authService from "../../services/authServices/user.js";

export const register = async (req, res, next) => {
  try {
    const result = await authService.register(req.body);
     console.log("req.body", req.body)
    res.status(201).json({
      success: true,
      message: "User Registered successfully.",
      user: result,
    });
  } catch (err) {
    next(err)
  }
};

export const login = async (req, res, next) => {
  try {
    const result = await authService.login(req.body);
    res.json({
      success: true,
      message: "User Login successfully.",
      user: result,
    });
    console.log("req.body",req.body)
  } catch (err) {
    next(err);
  }
};