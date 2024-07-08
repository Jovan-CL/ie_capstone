import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
configDotenv();
const JSON_SECRET_TOKEN = process.env.JSON_SECRET_KEY;
const JSON_REFRESH_SECRET = process.env.JSON_REFRESH_TOKEN;

export const refreshTokenMiddleware = async (req, res, next) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.sendStatus(401); // No refresh token provided
  }

  try {
    const decoded = jwt.verify(refreshToken, JSON_REFRESH_SECRET);
    const accessToken = jwt.sign(
      { userId: decoded.userId },
      JSON_SECRET_TOKEN,
      {
        expiresIn: "1h",
      }
    );

    // Add the new access token to the response header
    res.setHeader("Authorization", `Bearer ${accessToken}`);
    next();
  } catch (err) {
    res.sendStatus(403); // Invalid refresh token
  }
};
