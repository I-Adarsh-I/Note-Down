var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;
const userModel = require("../models/user_model");

module.exports.registerUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password)
      return res.status(400).json({ error: "One or more empty fields" });

    const isExistingUser = await userModel.findOne({ email });
    if (isExistingUser) {
      return res
        .status(400)
        .json({ error: "User already registered with this email" });
    }

    const hashedPass = await bcrypt.hash(password, 12);
    const registeredUser = await userModel.create({
      fullname,
      email,
      password: hashedPass,
    });
    console.log("New user: ", registeredUser);
    return res.status(201).json({ newUser: registeredUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isExistingUser = await userModel.findOne({ email });
    if (!isExistingUser) {
      return res.status(404).json({ error: "User not registered" });
    }

    const ispassCorrect = await bcrypt.compare(
      password,
      isExistingUser.password
    );

    if (!ispassCorrect) {
      return res.status(400).json({ error: "Incorrect password" });
    }

    const token = jwt.sign(
      { _id: isExistingUser, email: isExistingUser.email },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );
    return res.status(200).json({
      message: "User logged in successfully",
      user: { isExistingUser },
      token: { token },
    });
  } catch (err) {
    console.error("Error while logging in: ", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

//Google auth - configuration
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (acessToken, refreshToken, profile, done) => {
      try {
        let user = await userModel.findOne({ email: profile.emails[0].value });
        if (!user) {
          user = await userModel.create({
            fullname: profile.displayName,
            email: profile.emails[0].value,
            password: bcrypt.hashSync(profile.id, 12),
          });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

// Serialize user
passport.serializeUser(function (user, done) {
  done(null, user.id);
  console.log(user);
});

// Deserialize user
passport.deserializeUser(async function (id, done) {
  const user = await userModel.findById(id);
  if (user) {
    done(user);
  } else {
    console.log("No user found");
  }
});

module.exports.googleLogin = passport.authenticate("google", {
  scope: ["profile", "email"],
});

(module.exports.googleCallback = passport.authenticate("google", {
  successRedirect: "http://localhost:3000/profile",
  failureRedirect: "/login",
})),
  (req, res) => {
    const token = jwt.sign(
      { _id: req.user._id, email: req.user.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );
    res
      .status(200)
      .json({ message: "User logged in successfully", user: req.user, token });
  };
