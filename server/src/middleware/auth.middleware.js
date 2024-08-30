import jwt from "jsonwebtoken";
import { CLIENT_SECRET_KEY } from "../config/envVar.config.js";
export const authMiddleWare = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized User!" });
    }

    const decodedToken = jwt.verify(token, CLIENT_SECRET_KEY);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "Unauthorized User!" });
  }
};
