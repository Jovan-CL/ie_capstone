import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import dbConnection from "./dbconnect/dbconnect.js";

import generalRouter from "./routes/general.routes.js";
import messageRouter from "./routes/message.routes.js";
import userRouter from "./routes/chat.users.routes.js";

dotenv.config();
import { app, server } from "./Socket/socket.js";
// const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    credentials: true, // Enable credentials (cookies, authorization headers)
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("WELCOME TO IE-CONNECT!!");
});

app.use("/ie-connect/api", generalRouter);
app.use("/ie-connect/api/chat", messageRouter);
app.use("/ie-connect/api/users", userRouter);

async function server_db_connection() {
  try {
    server.listen(process.env.IE_CONNECT_SERVER, () => {
      dbConnection(process.env.MONGO_URL);
      console.log(`listening to port ${process.env.IE_CONNECT_SERVER}`);
    });
  } catch (error) {
    console.log({ error: error, message: "Something went wrong!" });
  }
}

server_db_connection();
