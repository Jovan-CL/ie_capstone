import dotenv from "dotenv";
dotenv.config();
import { Router } from "express";
import { v2 as cloudinary } from "cloudinary";
import upload from "../multer/multer.config.js";
import Users from "../collection_models/registerSchema.js";
import Announcement from "../collection_models/announcementSchema.js";

import bcrypt from "bcrypt";

import { tokenGenerator } from "../utils/tokenGenerator.js";

import { authenticate } from "../middleware/authController.js";

const JSON_SECRET = process.env.JSON_SECRET_KEY;

// CLOUDINARY CONFIGURATION
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const router = Router();

// ANNOUNCEMENT GET ENDPOINT
router.route("/bulletin").get(authenticate, async (req, res) => {
  try {
    const resAnnouncement = await Announcement?.find({
      expiration: { $gte: Date.now() },
    });
    console.log(resAnnouncement);
    res.status(200).json({ success: true, announcement: resAnnouncement });
  } catch (error) {
    res.status(404).json({ success: false, err: error.message });
  }
});

// ANNOUNCEMENT POST ENDPOINT
router.route("/bulletin").post(authenticate, async (req, res) => {
  const { name, announcement, expiration } = req.body;

  const date = new Date(expiration);

  try {
    const newAnnouncement = await Announcement.create({
      name: name,
      announcement: announcement,
      expiration: date,
    });

    console.log(newAnnouncement);
    await newAnnouncement.save();
    res
      .status(201)
      .json({ success: true, message: "Announcement created successfully!" });
  } catch (error) {
    res.json({ success: false, error: err.message });
  }
});

// REGISTRATION POST ENDPOINT
router.route("/registration").post(async (req, res) => {
  try {
    const {
      firstname,
      middlename,
      surname,
      age,
      birthday,
      contact,
      location,
      email,
      username,
      password,
      batch,
    } = req.body;
    // const file = req.file;
    // console.log(password)
    const name = `${firstname} ${middlename} ${surname}`;
    const duplicate = await Users.findOne({ username }).lean().exec();
    if (duplicate) {
      return res.status(400).json({ message: "Duplicate username" });
    }
    console.log(password);
    const saltRounds = 10;
    const hashedPass = await bcrypt.hash(password, saltRounds);
    const hashedlocation = await bcrypt.hash(location, saltRounds);

    const newProfile = await Users.create({
      firstname,
      middlename,
      surname,
      name,
      age,
      birthday,
      contact,
      location: hashedlocation,
      email,
      username,
      password: hashedPass,
      batch,
    });
    newProfile.save();
    // console.log(photoUrl.secure_url);
    res.status(201).json({ success: true, message: "Profile saved!" });
  } catch (error) {
    console.error("error in registration", error.message);
    res.status(500).json({ success: false, message: "Profile saved!" });
  }
});

// LOGIN POST ENDPOINT
router.route("/login").post(async (req, res) => {
  try {
    const { uname, pword } = req.body;
    // console.log(uname, pword);

    const result = await Users.findOne({ username: uname });
    if (!result) {
      return res.status(401).json({ message: "Invalid username" });
    }

    const isMatch = await bcrypt.compare(pword, result?.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    tokenGenerator(result._id, res, JSON_SECRET);

    res.status(200).json({
      success: true,
      message: "Logged in successfully!",
      data: {
        id: result._id,
        fullname: result.name,
        username: result.username,
        profilePic: result.photopic,
      },
    });
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

// LOG OUT ROUTE

router.route("/logout").post(async (req, res) => {
  try {
    res.cookie("token", "", { maxAge: 0 });
    res.send("Logged out successfully");
  } catch (error) {
    console.error("Error during logout:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// CREATE PROFILE POST ENDPOINT
router
  .route("/profile/editProfile/:id")
  .patch(authenticate, upload.single("photo"), async (req, res) => {
    const {
      firstname,
      middlename,
      surname,
      age,
      birthday,
      contact,
      location,
      email,
      batch,
    } = req.body;
    const id = req.params.id;
    const file = req.file;

    try {
      const updated = await Users.findById(id).exec();

      if (!updated) {
        return res.status(404).json({ message: "User not found" });
      }

      if (file) {
        const photoUrl = await cloudinary.uploader.upload(file.path);
        updated.photopic = photoUrl.secure_url;
        // console.log("from edit profile ", photoUrl)
      }

      if (firstname) {
        updated.firstname = firstname;
      }

      if (middlename) {
        updated.middlename = middlename;
      }
      if (surname) {
        updated.surname = surname;
      }

      // if (firstname || middlename || surname) {
      const name = `${firstname ? firstname : updated.firstname} ${
        middlename ? middlename : updated.middlename
      } ${surname ? surname : updated.surname}`;
      updated.name = name;
      // }

      if (age) {
        updated.age = age;
      }

      if (birthday) {
        updated.birthday = birthday;
      }

      if (contact) {
        updated.contact = contact;
      }

      if (location) {
        updated.location = location;
      }

      if (email) {
        updated.email = email;
      }
      if (batch) {
        updated.batch = batch;
      }

      const updatedProfile = await updated.save();

      // console.log(photoUrl.secure_url);
      res.status(201).json({
        success: true,
        message: `${updatedProfile.name} is updated successfully!`,
        data: {
          id: updatedProfile._id,
          fullname: updatedProfile.name,
          username: updatedProfile.username,
          profilePic: updatedProfile.photopic,
        },
      });
    } catch (error) {
      res.status(400).json({ success: true, message: `failed to update` });
      console.error(error.message);
    }
  });

router.route("/profile/:id").get(authenticate, async (req, res) => {
  try {
    const currentId = req.params.id;
    const user = req.user;

    const userProfile = await Users.findById(currentId)
      .lean()
      .select("-password");
    if (userProfile) {
      // console.log(userProfile);
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(400).json("Error occured in profile server");
  }
});

// ADMIN LOGIN POST ENDPOINT
// router.route("/admin-login").post();
// router.route().patch();

// PEOPLE GET END POINT
// authenticate, refreshTokenMiddleware,

router.route("/people").get(authenticate, async (req, res) => {
  try {
    const loggedInID = req.user._id;
    const users = await Users.find({ _id: { $ne: loggedInID } })
      .select("-password")
      .select("-username")
      .lean();

    // console.log(users);
    res.status(200).json({
      success: true,
      message: "Successful data get request!!",
      data: users,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
});

export default router;
