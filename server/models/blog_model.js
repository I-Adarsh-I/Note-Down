var mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const blogContentSchema = new mongoose.Schema({
    blogTitle: {
      type: String,
      required: true,
    },
    blogSubTitle: String,
    description: {
      type: String,
      required: true,
    },
    blogImg: String,
    additionalLinks: String,
  });

const blogSchema = mongoose.Schema({
  author: {
    type: ObjectId,
    ref: 'User',
  },
  blogContent: blogContentSchema,
  tags: [
    {
      type: String,
    },
  ],
  likes: [
    {
      type: ObjectId,
      ref: "User",
    },
  ],
  comments: [
    {
      commentText: String,
      commentedBy: {
        type: ObjectId,
        ref: "User",
      },
    },
  ],
  isEdited: {
    type: Boolean,
    default: false
  },
  postedAt: {
    type: Date,
    default: Date.now,
  },
});

const blogModel = mongoose.model('Blog', blogSchema);
module.exports = blogModel;
