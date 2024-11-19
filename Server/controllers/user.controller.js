import { checkPassword, hashPassword } from "../middlewares/hashPassword.js";
import { generateToken } from "../middlewares/token.js";
import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
  const { username, email, phone, password } = req.body;
  if (!username || !email || !phone || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }
  try {
    const encryptPassword = await hashPassword(password);
    const user = new User({
      username: username.toLowerCase(),
      email,
      phone,
      password: encryptPassword,
    });
    await user.save();
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Not able to register user",
      error: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "username and password are required",
    });
  }
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User does not exist",
      });
    }
    const isMatch = await checkPassword(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }
    const token = generateToken(user);
    res.cookie("token", token, { httpOnly: true, secure: true });
    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Not able to login user",
      error: error.message,
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    if (!users) {
      return "No users at the moment";
    }
    res.status(200).json({
      success: true,
      message: "Successfully fetched users",
      users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Not able to get users",
      error: error.message,
    });
  }
};

export { registerUser, loginUser, getUsers };
