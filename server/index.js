import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import router from "./routes.js";

import dbConnection from "./dbconnect/dbconnect.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: "100mb" }));

app.get("/", (req, res) => {
  res.send("WELCOME TO IE-CONNECT!!");
});

app.use("/api/ie-connect", router);
// const uploadResult = await cloudinary.uploader
//   .upload(
//     "https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
//     {
//       public_id: "shoes",
//     }
//   )
//   .catch((error) => {
//     console.log(error);
//   });

// console.log(uploadResult);
async function server_db_connection() {
  try {
    dbConnection(process.env.MONGO_URL);
    app.listen(process.env.IE_CONNECT_SERVER, () => {
      console.log("listening to port 8000");
    });
  } catch (error) {
    console.log({ error: error, message: "Something went wrong!" });
  }
}

server_db_connection();
