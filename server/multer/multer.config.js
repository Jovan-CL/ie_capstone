import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    console.log(path.extname(file.originalname));
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const filefilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({ storage, filefilter });

export default upload;
