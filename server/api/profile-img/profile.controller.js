const pool = require("../../config/database");

module.exports = {
  uploadProfileImage: (req, res) => {
    const { userId } = req.body;
    const imageUrl = req.file.path; // Assuming you're storing the image path

    const updateQuery =
      "UPDATE profile SET profile_image_url = ? WHERE user_id = ?";
    pool.query(updateQuery, [imageUrl, userId], (err) => {
      if (err) {
        console.error("Error updating profile image:", err);
        res.status(500).json({ error: "An error occurred" });
      } else {
        res.json({ message: "Profile image uploaded successfully" });
      }
    });
  },

  getProfileImage: (req, res) => {
    const userId = req.params.userId;

    const selectQuery =
      "SELECT profile_image_url FROM profile WHERE user_id = ?";
    pool.query(selectQuery, [userId], (err, results) => {
      if (err) {
        console.error("Error fetching profile image from database:", err);
        res.status(500).json({ error: "An error occurred" });
      } else {
        if (results.length > 0 && results[0].profile_image_url) {
          const imageUrl = results[0].profile_image_url;
          res.json({ imageUrl });
        } else {
          res.status(404).json({ error: "Profile image not found" });
        }
      }
    });
  },
};
