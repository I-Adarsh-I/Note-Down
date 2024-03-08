var express = require("express");
var router = express.Router();
const { loginUser, registerUser, googleLogin, googleCallback } = require("../controllers/auth");
const { userAuthentication } = require("../middlewares/userAuthentication");
const { updateUserInfo } = require("../controllers/user");

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get('/auth/google', googleLogin);
router.get('/auth/google/callback', googleCallback);
router.get('/auth/authenticated', (req, res) => {
    res.json({message: 'redirected succesfully after login (Google)'})
});
router.put("/updateprofile", userAuthentication, updateUserInfo);

module.exports = router;
