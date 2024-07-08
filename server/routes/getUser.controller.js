import Users from "../collection_models/registerSchema.js";

export async function getUsersChat(req, res) {
  try {
    const allUsers = await Users.find({}).select("-password");
    res.status(200).json({ data: allUsers });
  } catch (error) {
    console.error("Error from getUsersChat controller ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
