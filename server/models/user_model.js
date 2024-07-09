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
    default: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
  },
  about: {
    type: String,
  },
  bio:{
    type:String,
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
  }
});

const userModel = mongoose.model('User', userSchema);
module.exports =  userModel;