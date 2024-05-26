import mongoose from "mongoose";

const Users = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date_created: { type: Date, default: Date.now },
});

export default mongoose.model("Users", Users);
