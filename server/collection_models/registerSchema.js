import mongoose from "mongoose";

const Users = new mongoose.Schema(
  {
    photopic: { type: String },
    firstname: { type: String, required: true },
    middlename: { type: String, required: true },
    surname: { type: String, required: true },
    name: { type: String, required: true },
    age: { type: String, required: true },
    birthday: { type: Date, required: true },
    contact: { type: String, required: true },
    location: { type: String, required: true },
    batch: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    // description:
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Users", Users);
