const User = require("../../models/user_model");




module.exports.register = function(server, options, next){
  server.route([
    {
      method: "POST",
      path: "/sign_up",
      handler: function(request, reply) {
        User.findOne({"email": request.payload.email}, function(err, existing_user){
          if(existing_user){
            reply("User already exists").code(400);
          }
          else
          {
            var user = new User({"email": request.payload.email, "name": request.payload.name, "password": request.payload.password, "user_profile": {} });
            user.save(function(err, saved_user_record){
              if (err) {
                reply("Error during signup").code(400);
              }
            })
          }
        })
      }
    },
//Sign in route
    {
      method: "POST",
      path: "/login",
      handler: function(request, reply){
        console.log("request_payload", request.payload);
        User.findOne({"email": request.payload.email, "password": request.payload.password}, function(err, valid_user){
          if(valid_user) {
            request.cookieAuth.set({"user": valid_user.email, "member_id", valid_user.member_id, "name": valid_user.name})
            reply();
          }
        })
      }
    }

  ])
}

module.exports.register.attributes =
{
  pkg: require("./package.json")
};
