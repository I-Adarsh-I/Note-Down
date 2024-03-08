require("dotenv").config();
var express = require("express");
var cors = require("cors");
var app = express();
const session = require('express-session');
const passport = require('passport');
var mongoose = require("mongoose");
var userRouter = require("./routes/user_routes");
var blogRoutes = require("./routes/blog_route");

app.use(express.json());
app.use(cors());
app.use(session({
  secret: 'BLOG_WEB_SESSION_SECRET',
  resave: false,
  saveUninitialized: false
}));

// Initialize Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use(userRouter);
app.use(blogRoutes);

//Start server
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to DB");
    app.listen(process.env.PORT, () => {
      console.log(`Server has started on PORT - ${process.env.PORT}`);
    });

    process.on("SIGINT", () => {
      //Process.on - event listener
      mongoose.disconnect();
      process.exit(0); // Exit code '0' means successful termination/clean exit/noraml termination
    });
  } catch (err) {
    console.log("Error while connecting to server: ", err);
  }
};

startServer();
