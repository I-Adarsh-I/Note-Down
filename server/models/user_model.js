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
  folowers: [
    {
      type: ObjectId,
      ref: 'User'
    },
  ],
  folowing: [
    {
      type: ObjectId,
      ref: 'User'
    },
  ],
});

const userModel = mongoose.model('User', userSchema);
module.exports =  userModel;