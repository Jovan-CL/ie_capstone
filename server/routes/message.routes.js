import express from "express";
import { sendMessage, getMessage } from "./message.controller.js";
import { authenticate } from "../middleware/authController.js";
const messageRouter = express.Router();

messageRouter.route("/send/:id").post(authenticate, sendMessage);

messageRouter.route("/:id").get(authenticate, getMessage);

export default messageRouter;
