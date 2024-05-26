import mongoose from "mongoose";
const announcements = new mongoose.Schema({
  announcement: { type: String, required: true },
  date_posted: { type: Date, default: Date.now },
});

export default mongoose.model("announcements", announcements);
