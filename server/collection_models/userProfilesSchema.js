import mongoose from "mongoose";

const userProfile = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
    photopic: { type: String, required: true },
    // name: {
    //   type: mongoose.Schema.Types.name,
    //   required: true,
    //   ref: "Users",
    // },
    age: { type: String, required: true },
    birthday: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    batch: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("userProfile", userProfile);
