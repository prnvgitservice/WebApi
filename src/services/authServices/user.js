import User from '../../models/authModels/user.js';
import { generateToken } from '../../utils/generateToken.js';


export const register = async ({ username, phoneNumber, password }) => {
  if (!username || !phoneNumber || !password) {
    const error = new Error('All fields are required.');
    error.statusCode = 400;
    throw error;
  }


  const [usernameExists, phoneExists] = await Promise.all([
    User.findOne({ username }),
    User.findOne({ phoneNumber }),
  ]);


  if (usernameExists) {
    const error = new Error('Username already exists.');
    error.statusCode = 409; // Conflict
    throw error;
  }


  if (phoneExists) {
    const error = new Error('Phone number already exists.');
    error.statusCode = 409;
    throw error;
  }


  const user = await new User({ username, phoneNumber, password }).save();


  return {
    id: user._id,
    username: user.username,
    phoneNumber: user.phoneNumber,
  };
};


export const login = async ({ username, password }) => {
  if (!username || !password) {
    const error = new Error('Username & Password are required.');
    error.statusCode = 400;
    throw error;
  }


  const user = await User.findOne({ username }).select('+password');


  if (!user || !(await user.isPasswordMatch(password))) {
    const error = new Error('Invalid credentials');
    error.statusCode = 401;
    throw error;
  }


  const token = generateToken(user);


  return {
    id: user._id,
    username: user.username,
    token,
  };
};



// import User from "../../models/authModels/user.js";
// import { generateToken } from "../../utils/generateToken.js";

// export const register = async ({ username, phoneNumber, password }) => {

//   if (!username || !phoneNumber || !password) {
//     throw new Error("All fields are required.");
//   }

//   const usernameExists = await User.findOne({ username });
//   if (usernameExists) {
//     throw new Error("Username already exists.");
//   }

//   const phoneExists = await User.findOne({ phoneNumber });
//   if (phoneExists) {
//     throw new Error("Phone number already exists.");
//   }
//   const user = new User({ username, phoneNumber, password });
//   await user.save();
//   return {
//     id: user._id, username: user.username, phoneNumber: user.phoneNumber,
//   };
// };

// export const login = async ({ username, password }) => {

//   if (!username || !password) {
//     throw new Error("Username & Password are required.");
//   }

//   const user = await User.findOne({
//     username
//   }).select('+password');

//   if (!user || !(await user.isPasswordMatch(password))) {
//     throw new Error('Invalid credentials');
//   }

//   const token = generateToken(user);
//   return {id: user._id, username: user.username,
//     token
//   };
// };