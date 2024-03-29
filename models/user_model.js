const mongoose = require("mongoose");
const shortid  = require("shortid");

var userProfileSchema = mongoose.Schema({
  location:    {type: String, default: "None"},
  description: {type: String, default: "None"},
  interests:   {type: String, default: "None"},
  profile_pic: {type: String, default: "default_profile.png"}
})



var userSchema = mongoose.Schema({
  name: {type: String},
  email: {type: String},
  password: {type: String},
  member_id: {type: String, default: shortid.generate},
  friends: [{"member_id": String, "friend_name": String, "profile_pic": String}],
  friend_requests: [{"member_id": String, "friend_name": String, "profile_pic": String}],
  user_profile: [userProfileSchema]
})

//Create the User Model
var User = mongoose.model("User", userSchema);

module.exports = User;
