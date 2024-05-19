import dotenv from "dotenv/config";
import express from "express";
import cors from "cors";
import router from "./routes.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("WELCOME TO IE-CONNECT!!");
});

app.use("/api/ie-connect", router);

app.listen(process.env.IE_CONNECT_SERVER, () => {
  console.log("listening to port 8000");
});
