var mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const blogSchema = mongoose.Schema({
  author: {
    type: ObjectId,
    ref: 'User',
  },
  blogTitle:{
    type:String,
    required:true
  },
  blogContent: {
    type: String,
    required: true
  },
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
