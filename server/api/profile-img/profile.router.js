const router = require("express").Router();
const multer = require("multer");
const profileController = require("./profile.controller");

const upload = multer({ dest: "uploads/" });

router.post(
  "/upload-profile-image",
  upload.single("image"),
  profileController.uploadProfileImage
);
router.get("/profile/:userId", profileController.getProfileImage);

module.exports = router;
