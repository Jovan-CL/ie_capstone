import mongoose from "mongoose";

const Users = new mongoose.Schema(
  {
    photopic: { type: String, required: true },
    // name: {
    //   type: mongoose.Schema.Types.name,
    //   required: true,
    //   ref: "Users",
    // },
    age: { type: String, required: true },
    birthday: { type: Date, required: true },
    contact: { type: String, required: true },
    batch: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    date_created: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Users", Users);
