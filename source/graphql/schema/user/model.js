const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  // _id: {
  //   type: mongoose.Types.ObjectId
  // },
  user_name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  user_head_id: {
    type: mongoose.Types.ObjectId,
  },
  permission: {
    type: String,
    default:""
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
