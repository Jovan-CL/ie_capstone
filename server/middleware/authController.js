import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Users from "../collection_models/registerSchema.js";
dotenv.config();
const JSON_SECRET_TOKEN = process.env.JSON_SECRET_KEY;

export const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const decoded = jwt.verify(token, JSON_SECRET_TOKEN);

    if (!decoded) {
      return res
        .status(401)
        .json({ message: "Not authenticated - Invalid token" });
    }

    const user = await Users.findById({ _id: decoded.userId }).select(
      "-password"
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    req.user = user;
    // console.log(req.user);
    next();
  } catch (err) {
    console.error("Error in authController:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
