'use strict';
// Create a server with a host and port
const Hapi=require('hapi');
const server = new Hapi.Server();

const mongoose = require("mongoose");
const User = require("./models/user_model");
const connectdb = mongoose.connect("mongodb://localhost/connectdb");

//Port
server.connection({port:3000});

// Start the server
server.start(console.log("test"));

// Add the route
server.route({
  method: "GET",
  path: "/",
  handler: function(request, reply){
    reply.view("landing");
  }
});

//REGISTER VISION
server.register(require("vision"), function(err){
  server.views({
    engines: {
      ejs: require("ejs")
    },
    relativeTo: __dirname,
    path: "views"
  })
});


server.register(require("inert"), function(err){

});

//Register Cookie using Hapi Auth
server.register(require("hapi-auth-cookie"));
server.auth.strategy("cookiestrategy", "cookie", {
  cookie: "cookie1",
  password: "CnqKELu9u4RusbnmpAQBzYraPgkkrqjg",
  isSecure: false
});

//Register Plug-in in User Folder to Server.
server.register({
  register: require("./routes/user")
}, function(err){
    if (err) {
      return;
  }
});
//Register Plug-in in Home Folder to Server.
server.register({
  register: require("./routes/home")
}, function(err){
  if(err){
    return;
  }
});

server.route({
  method: "GET",
  path: "/{param*}",
  handler: {
    directory: {
      path: "public"
    }
  }
});

server.route({
  method: "GET",
  path: "/user_profile_images/{param*}",
  handler: {
    directory: {
      path: "user_profile_images"
    }
  }
});
