var express = require("express");
const { userAuthentication } = require("../middlewares/userAuthentication");
const { createBlog, showAllBlogs, removeBlog } = require("../controllers/blog");
var router = express.Router();

router.post("/newblog", userAuthentication, createBlog);
router.get("/allBlogs", showAllBlogs);
router.delete("/removeblog/:blogId", userAuthentication, removeBlog);

module.exports = router;
