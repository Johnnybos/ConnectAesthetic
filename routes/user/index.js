const User = require("../../models/user_model");






module.exports.register = function(server, options, next){
  server.route([
    {
      method: "POST",
      path: "/sign_up",
      handler: function(request, reply) {
        User.findOne({"email": request.payload.email}, function(err, existing_user){
          if(existing_user){
            reply("User already exists"). code(400);
          } else {
            var user = new User({"email": request.payload.email, "name": request.payload.name, "password": request.payload.password});
            user.save(function())
          }
        });
      }
    }
  ]);

  next();
};

module.exports.register.attributes = {
  pkg: require("./package.json")
};
