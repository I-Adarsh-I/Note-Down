const blogModel = require("../models/blog_model");

module.exports.createBlog = async (req, res) => {
  try {
    const { blogTitle, blogContent } = req.body;

    const blog = {
      author: req.user._id,
      blogContent,
      blogTitle
      // tags: tags,
    };

    if (!blogContent || !blogTitle) {
      return res.status(404).json({
        error: `${blogContent ? 'Blog title' : 'Blog content'} cannot be empty`
      });
    }
    const newBlog = await blogModel.create(blog);
    return res.status(201).json({ message: "Blog created", blog: newBlog });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.showAllBlogs = async (req, res) => {
  try {
    const allBlogs = await blogModel
      .find()
      .sort({postedAt: -1})
      .populate(
        "author",
        "_id fullname email username profileImg links about followers following"
      )
      .populate(
        "comments.commentedBy",
        "_id fullname username profileImg username"
      );
    return res.status(200).json({ Blogs: allBlogs });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.showBlogById = async (req, res) => {
  const { blogId } = req.params;
  try {
    const blog = await blogModel
      .find({ _id: blogId })
      .populate(
        "author",
        "_id fullname email profileImg about interests links followers following"
      );
    if (!blog) {
      return res.status(404).json({ error: "Blog does not exist" });
    }
    return res.status(200).json({ blog: blog });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.showBlogsOfUser = async (req, res) => {
  try {
    const { userId } = req.params;

    // Check if the userId is provided
    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const blogsOfUser = await blogModel
      .find({ author: userId })
      .populate(
        "author",
        "_id fullname profileImg about interests links followers following username"
      )
      .populate("comments.commentedBy", "_id fullname profileImg");

    if (!blogsOfUser) {
      return res.status(404).json({ error: "No posts found for this user" });
    }

    res.status(200).json({ blogs: blogsOfUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.removeBlog = async (req, res) => {
  try {
    const { blogId } = req.params;

    const removeBlog = await blogModel.findByIdAndDelete(blogId);
    if (!removeBlog) {
      res.status(404).json({ error: "Blog does not exist" });
    }
    res
      .status(200)
      .json({ message: "Blog removed sucessfully", removedBlog: removeBlog });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.editBlog = async (req, res) => {
  const {
    blogId,
    blogTitle,
    blogSubTitle,
    description,
    blogImg,
    additionalLinks,
  } = req.body;

  try {
    const updatedBlog = await blogModel.findByIdAndUpdate(
      blogId,
      {
        $set: {
          "blogContent.blogTitle": blogTitle,
          "blogContent.blogSubTitle": blogSubTitle,
          "blogContent.description": description,
          "blogContent.blogImg": blogImg,
          "blogContent.additionalLinks": additionalLinks,
          isEdited: true,
        },
      },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json({ message: "Blog updated successfully", updatedBlog });
  } catch (err) {
    console.error("Error editing blog:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.comment = async (req, res) => {
  try {
    const { blogId, commentText } = req.body;

    const comment = {
      commentText: commentText,
      commentedBy: req.user._id,
    };

    const createComment = await findByIdAndUpate(
      blogId,
      {
        $push: { comments: comment },
      },
      {
        new: true,
      }
    )
      .populate("comments.commentedBy", "_id fullname profileImg")
      .populate("author", "_id fullname profileImg");

    if (!createComment) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res
      .status(201)
      .json({ message: "Comment created", comments: createComment });
  } catch (err) {
    console.error("Error editing blog:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.likes = async (req, res) => {
  try {
    const like = await blogModel
      .findByIdAndUpdate(
        req.body.blogId,
        {
          $push: { likes: req.user._id },
        },
        {
          new: true,
        }
      )
      .populate("author", "_id fullname");

    if (!like) {
      res.status(400).json({ error: "Post could not be found" });
    } else {
      res.status(200).json({
        message: `Post liked by ${req.user.fullname}`,
        user: req.user.fullname,
      });
    }
    console.log("logging user in likes: ", req.user);
  } catch (err) {
    console.log(err);
    res.status(500).josn({ error: "Internal server error" });
  }
};

module.exports.unlike = async (req, res) => {
  try {
    const unlike = await blogModel
      .findByIdAndUpdate(
        req.body.blogId,
        {
          $pull: { likes: req.user._id },
        },
        {
          new: true,
        }
      )
      .populate("author", "_id fullname");

    if (!unlike) {
      res.status(400).json({ error: "Post could not be found" });
    } else {
      res.status(200).json({ message: `Post unliked by ${req.user.fullname}` });
    }
    console.log("logging user in likes: ", req.user);
  } catch (err) {
    console.log(err);
    res.status(500).josn({ error: "Internal server error" });
  }
};
