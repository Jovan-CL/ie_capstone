import mongoose from "mongoose";

function dbConnect(url) {
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected!"))
    .catch((err) => console.log(err));
}

export default dbConnect;
