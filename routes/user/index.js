const User = require("../../models/user_model");



module.exports.register = function(server, options, next){

  //SIGNUP ROUTE
  server.route([
    {
      method: "POST",
      path: "/sign_up",
      handler: function(request, reply) {
        console.log("request_payload", request.payload);
        User.findOne({"email": request.payload.email}, function(err, existing_user){
            console.log("existing_user", existing_user)
          if(existing_user){
            reply("User already exists. Enter another email").code(400);
          }
          else
          {
            var user = new User({"name": request.payload.name, "email": request.payload.email,  "password": request.payload.password, "user_profile": {} });
            user.save(function(err, saved_user_record){
              console.log("saved_user_record", saved_user_record);
            })
          }
        })
      }
    },

    //SIGN IN ROUTE
    {
      method: "POST",
      path: "/login",
      handler: function(request, reply){
        console.log("request_payload", request.payload);
        User.findOne({"email": request.payload.email, "password": request.payload.password}, function(err, valid_user){
          if(valid_user) {
            request.cookieAuth.set({"user": valid_user.email, "member_id": valid_user.member_id, "name": valid_user.name})
            reply();
          } else {
            replsy.code(400);
          }
        })
      }
    },
      //LOGOUT ROUTE
    {
      method: "POST",
      path: "/logout",
      handler: function(request, reply){
        request.cookieAuth.clear();
        reply();
      }
    }
  ])
}

module.exports.register.attributes = {
  pkg: require("./package.json")
}
