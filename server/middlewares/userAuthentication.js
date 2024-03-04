var jwt = require("jsonwebtoken");
const userModel = require("../models/user_model");

module.exports.userAuthentication = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      res.status(401).json({ error: "Authorization header is missing" });
    } else {
      const token = authorization.replace("Bearer ", "");
      jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
        if (err) {
          console.log("JWT verification error: ", err);
          return res.status(401).json({ error: "Invalid or expired token" });
        }
        if (!payload || !payload._id) {
          return res.status(401).json({ error: "Invalid token payload" });
        }

        const { _id } = payload;
        const userExistInDB = await userModel.findById(_id);

        if (!userExistInDB) {
          return res.status(404).json({ error: "User does not exist" });
        }

        req.user = userExistInDB;
        next();
      });
    }
  } catch (err) {
    console.log("Error in verifying user: ", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
