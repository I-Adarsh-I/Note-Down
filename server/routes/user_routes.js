var express = require("express");
var router = express.Router();
const { loginUser, registerUser, googleLogin, googleCallback } = require("../controllers/auth");
const { userAuthentication } = require("../middlewares/userAuthentication");
const { updateUserInfo, getUserInfo } = require("../controllers/user");

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get('/auth/google', googleLogin);
router.get('/auth/google/callback', googleCallback);
router.put("/updateprofile", userAuthentication, updateUserInfo);
router.get('/user/:userId', getUserInfo);

module.exports = router;
