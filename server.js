'use strict';

const Hapi=require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();

server.connection({port:3000});

server.start(console.log('test'));

server.route({
  method: "GET",
  path: "/",
  handler: function(request, reply){
    reply("welcome to node connect");
  }
})

server.register(require("vision"), function(err){
  server.views({
    engine: {
      ejs: require("ejs")
    },
    relativeTo: __dirname,
    path: "views"
  })
});
