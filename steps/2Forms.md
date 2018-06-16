# Connecting to Mongo Database

We need a database to store users and their
email, password, id, friends, friend requests,
interest and picture.

```
npm install mongoose --save
```
Open a new tab terminal to view Mongod
Open the shell to open a database
Let's call our database -> connectdb
Type '  use connectdb  ' in the terminal


Make a folder called 'models' and add
user_model.js

To identify users:
```
npm install shortid
```

## Require the modules: mongoose and shortid
const mongoose = require("mongoose");
const shortid = require("shortid");

## Add userSchema
var userSchema = mongoose.Schema({
  name: {type: String},
  email: {type: String},
  password: {type: String},
  member_id: {type: String, default: shordid.generate},
  friends: [{"member_id": String, "friend_name": String, "profile_pic": String}],
  friend_requests: [{"member_id": String, "friend_name": String, "profile_pic": String}],
  user_profile: [userProfileSchema]
})

##Add userProfileSchema
var userProfileSchema = mongoose.Schema({
  location: {type: String, default: "None"},
  description: {type: String, default: "None"},
  interests: {type: String, default: "None"},
  profile_pic: {type: String, default"default_profile.png"}
})
