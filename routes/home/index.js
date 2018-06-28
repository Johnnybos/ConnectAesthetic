

module.exports.register = function(plugin, options, next){
  plugin.route([
    {
      method: "GET",
      path: "/home",
      config: {
        auth: "cookiestrategy",
        handler: function(request, reply){
          var name = request.auth.credentials.name;
          console.log("name", name);
          reply.view("home", {name: name});
        }
      }
    }
  ])
  next();
}

module.exports.register.attributes = {
  pkg: require("./package.json")
};
