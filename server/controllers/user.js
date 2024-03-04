const userModel = require("../models/user_model");

module.exports.updateUserInfo = async (req, res) => {
  try {
    const userId = req.user._id;
    const { username, about, links, profileImg, interests } = req.body;
    const userDetails = {
      username,
      about,
      links,
      profileImg,
      interests,
    };
    const updateInfo = await userModel.findByIdAndUpdate(userId, userDetails, {
      new: true,
    });
    res.status(200).json({message: "Profile updated successfully!", userDetails: updateInfo});
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
