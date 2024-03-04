var express = require('express');
var router = express.Router();
const { loginUser, registerUser } = require('../controllers/auth');
const { userAuthentication } = require('../middlewares/userAuthentication');
const { updateUserInfo } = require('../controllers/user');

router.post('/login', loginUser);
router.post('/register', registerUser);
router.put('/updateprofile', userAuthentication, updateUserInfo);

module.exports = router;