import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
    message: {
      type: String,
      required: true,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageSchema);
export default Message;
