import * as authService from "../../services/authServices/user.js";

export const register = async (req, res, next) => {
  try {
    const result = await authService.register(req.body);
     console.log("req.body", req.body)
    res.status(201).json({message:"successfully registered", result});
  } catch (err) {
    console.log("err", err)
    res.status(400).json({error: err});
  }
};

export const login = async (req, res, next) => {
  try {
    const result = await authService.login(req.body);
   
    res.json(result);
    console.log("req.body",req.body)
  } catch (err) {
    next(err);
  }
};
// export const login = async (req, res, next) => {
//   try {
//     const result = await authService.login(req.body);
   
//     res.json(result);
//   } catch (err) {
//     next(err);
//   }
// };


// const User = require('../../models/authModel/user');
// const generateToken = require('../../utils/generateToken');

// exports.registerUser = async (req, res) => {
//   const { name, email, password, role } = req.body;

//   try {
//     const userExists = await User.findOne({ email });
//     if (userExists) return res.status(400).json({ message: 'Email already registered' });

//     const user = await User.create({ name, email, password, role });
    
//     res.status(201).json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       role: user.role,
//       token: generateToken(user._id)
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// exports.loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user || !(await user.matchPassword(password))) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     res.json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       role: user.role,
//       token: generateToken(user._id)
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };
