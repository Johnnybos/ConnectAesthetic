'use strict';

const Hapi=require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();

const mongoose = require("mongoose");
const User = require("./models/user_model");
const connect = mongoose.connect("mongodb://localhost/connect");
//Port
server.connection({port:8080});


// Start the server
server.start(console.log("test"));

// Add the route
server.route({
  method: "GET",
  path: "/",
  handler: function(request, reply){
    reply.view("landing");
  }
})

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

server.route({
  method: "GET",
  path: "/{param*}",
  handler: {
    directory: {
      path: "public"
    }
  }
});
