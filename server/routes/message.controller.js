import Conversation from "../collection_models/conversationSchema.js";
import Message from "../collection_models/messageSchema.js";
import { getReceiverSocketId, io } from "../Socket/socket.js";

export async function sendMessage(req, res) {
  try {
    const { message } = req.body;
    console.log(message);
    // return;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);

    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    } else {
      console.log("Error in send message socket part");
    }

    res.status(201).json({ message: newMessage });
  } catch (error) {
    console.error("Error from sendMessage controller ", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getMessage(req, res) {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if (!conversation) {
      return res.status(200).json([]);
    }
    res.status(200).json({ data: conversation.messages });
  } catch (error) {
    console.error("Error from getMessage controller ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
