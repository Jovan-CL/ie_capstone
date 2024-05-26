import { Router } from "express";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import Users from "./collection_models/registerSchema.js";
import bcrypt from "bcrypt";
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const router = Router();

router.get("/bulletin", (req, res) => {
  res.send("WELCOME TO BULLETIN PAGE!!!");
});

// REGISTRATION POST ENDPOINT
router.route("/registration").post(async (req, res) => {
  const { firstname, lastname, email, username, password } = req.body;

  try {
    const saltRounds = 10;
    const hashedPass = await bcrypt.hash(password, saltRounds);
    console.log(hashedPass);
    const registeredUser = await Users.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      username: username,
      password: hashedPass,
    });

    await registeredUser.save();
    res.status(201).json({ success: true, data: registeredUser });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

// LOGIN POST ENDPOINT
router.route("/login").post(async (req, res) => {
  const { uname, pword } = req.body;
  try {
    const result = await Users.findOne({ username: uname });
    const isMatch = await bcrypt.compare(pword, result.password);

    if (result.username === uname) {
      if (isMatch) {
        res.status(201).json({ success: true, message: `Welcome ${uname}` });
      }
    } else {
      res.send("None existing account");
    }
  } catch (error) {
    res.status(201).json({ success: false, err: error.message });
  }
});

// ANNOUNCEMENT POST ENDPOINT
// router.route("bulletin").post((req, res) => {});

// CREATE PROFILE POST ENDPOINT
// router.route().post();

export default router;
