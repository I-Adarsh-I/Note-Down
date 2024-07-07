var mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
    default: "",
  },
  about: {
    type: String,
  },
  interests: [
    {
      type: String
    }
  ],
  links: [
    {
      type: String,
    },
  ],
  followers: [
    {
      type: ObjectId,
      ref: 'User'
    },
  ],
  following: [
    {
      type: ObjectId,
      ref: 'User'
    },
  ],
  joinedOn:{
    type:Date,
    default:Date.now,
  }
});

const userModel = mongoose.model('User', userSchema);
module.exports =  userModel;