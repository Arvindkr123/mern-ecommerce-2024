import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "./../models/user.models.js";
import { CLIENT_SECRET_KEY } from "../config/envVar.config.js";

// register controllers
export const userRegisterController = async (req, res, next) => {
  try {
    // Destructure the user input from the request body
    const { userName, email, password } = req.body;

    if (!userName || !email || !password) {
      return res
        .status(401)
        .json({ success: false, message: "All fields are required!" });
    }

    const existedUser = await UserModel.findOne({ email });

    if (existedUser) {
      return res.status(404).json({
        success: false,
        message: "User already exists!, please try other email, or userName",
      });
    }

    // Hash the password asynchronously with await
    const hashPassword = await bcrypt.hash(password, 12);

    // Create a new user instance with the hashed password
    const newUser = new UserModel({ userName, email, password: hashPassword });

    // Save the new user to the database
    await newUser.save();

    // Respond with success status and message
    res
      .status(201)
      .json({ success: true, message: "User Registration Successful!" });
  } catch (error) {
    console.log("Error: error while registering user", error);

    // Respond with error status and message
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again!!",
    });
  }
};

// login controller
export const loginUserController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(401)
        .json({ success: false, message: "All fields are required!" });
    }

    const existedUser = await UserModel.findOne({ email });

    if (!existedUser) {
      return res.status(404).json({
        success: false,
        message: "User doesn't exists! Please register first",
      });
    }

    const checkPasswordMatch = await bcrypt.compare(
      password,
      existedUser.password
    );
    if (!checkPasswordMatch) {
      return res.json({
        success: false,
        message: "Incorrect password! Please try again",
      });
    }

    const token = jwt.sign(
      {
        id: existedUser._id,
        role: existedUser.role,
        email: existedUser.email,
        userName: existedUser.userName,
      },
      CLIENT_SECRET_KEY,
      { expiresIn: "60m" }
    );

    res.cookie("token", token, { httpOnly: true, secure: false }).json({
      success: true,
      message: "Logged in successfully",
      user: {
        email: existedUser.email,
        role: existedUser.role,
        id: existedUser._id,
        userName: existedUser.userName,
      },
    });
  } catch (error) {
    console.log("Error: error while login user");
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again!!",
    });
  }
};

// logout controller
export const logoutRegisterController = async (req, res, next) => {
  try {
    const { userName, email, password } = req.body;
  } catch (error) {
    console.log("Error: error while logout user");
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again!!",
    });
  }
};
