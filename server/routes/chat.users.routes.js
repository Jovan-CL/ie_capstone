import express from "express";
import { authenticate } from "../middleware/authController.js";
import { getUsersChat } from "./getUser.controller.js";
const userRouter = express.Router();

userRouter.route("/").get(authenticate, getUsersChat);

export default userRouter;
