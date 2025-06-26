import User from "../../models/authModels/user.js";
import { generateToken } from "../../utils/generateToken.js";

export const register = async ({ username, phoneNumber, password }) => {
 console.log("username, phoneNumber, password", username, phoneNumber, password)
 const existingUser = await User.findOne({ username, phoneNumber });

//  const existingUser = await User.findOne({
//   $or: [{ username }, { phoneNumber }]
// });
 
  if (existingUser){
    return {message:"User Or Phone Number Already Existed!!!"};
  }
  console.log("exististingUser", existingUser)
  const user = new User({ username, phoneNumber, password });
  await user.save();
  return {user};
};

export const login = async ({ username, password }) => {
  const user = await User.findOne({
   username
  }).select('+password');
  // const user = await User.findOne({
  //   $or: [{ username: username }, { password: password }]
  // }).select('+password');

  if (!user || !(await user.isPasswordMatch(password))) {
    throw new Error('Invalid credentials');
  }        

  const token = generateToken(user);  
  return { user: { id: user._id, username: user.username }, token };
};
