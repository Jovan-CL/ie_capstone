import mongoose from "mongoose";

const announcements = new mongoose.Schema({
  name: { type: String, required: true },
  announcement: { type: String, required: true },
  date_posted: { type: Date, default: Date.now() },
  expiration: { type: Date, default: Date.now() },
});

export default mongoose.model("announcements", announcements);
