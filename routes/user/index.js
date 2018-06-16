





module.exports.register = function(server, options, next){

  next();
};

module.exports.register.attributes = {
  pkg: require("./package.json")
};
