var express = require("express");
const { userAuthentication } = require("../middlewares/userAuthentication");
const {
  createBlog,
  showAllBlogs,
  removeBlog,
  likes,
  unlike,
  comment,
  showBlogById,
  showBlogsOfUser,
  likeAndUnlike,
} = require("../controllers/blog");
var router = express.Router();

router.post("/newblog", userAuthentication, createBlog);
router.get("/allBlogs", showAllBlogs);
router.delete("/removeblog/:blogId", userAuthentication, removeBlog);
router.put("/like", userAuthentication, likes);
router.put("/unlike", userAuthentication, unlike);
router.get('/likeandunlike/:blogId/like-state', userAuthentication, likeAndUnlike)
router.put("/comment", userAuthentication, comment);
router.get("/blog/:blogId", showBlogById);
router.get("/allblogsbyuser/:userId", showBlogsOfUser);

module.exports = router;
