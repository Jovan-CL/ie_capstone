import jwt from "jsonwebtoken";
export function tokenGenerator(userId, res, privateKey) {
  const token = jwt.sign({ userId: userId }, privateKey, {
    expiresIn: "1d",
  });
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    maxAge: 15 * 24 * 60 * 60 * 1000,
  });
}
