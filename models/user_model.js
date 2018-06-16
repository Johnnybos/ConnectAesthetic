const mongoose = require("mongoose");
const shortid = require("shortid");

var userProfileSchema = mongoose.Schema({
  location: {type: String, default: "None"}
});

var userSchema = mongoose.Schema({
  name: {type: String},
  email: {type: String},
  password: {type: String},
  member_id: {type: String, default: shordid.generate},
  friends: [{"member_id": String, "friend_name": String, "profile_pic": String}],
  friend_requests: [{"member_id": String, "friend_name": String, "profile_pic": String}],
  user_profile:
})
