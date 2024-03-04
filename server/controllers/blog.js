const blogModel = require("../models/blog_model");

module.exports.createBlog = async (req, res) => {
  try {
    const { title, subtitle, description, tags } = req.body;

    const blog = {
      author: req.user._id,
      blogContent: {
        blogTitle: title,
        blogSubTitle: subtitle,
        description: description,
      },
      tags: tags,
    };

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
      .populate(
        "author",
        "_id fullname email username profileImg links about followers following"
      )
      .populate(
        "comments.commentedBy",
        "_id fullname username profileImg username"
      );
      return res.status(200).json({Blogs: allBlogs});
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.removeBlog = async(req, res) => {
  try {
    const { blogId } = req.params;
    
    const removeBlog = await blogModel.findByIdAndDelete(blogId)
    if(!removeBlog){
      res.status(404).json({error: 'Blog does not exist'})
    }
    res.status(200).json({message: 'Blog removed sucessfully', removedBlog: removeBlog});
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
