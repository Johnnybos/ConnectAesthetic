const http = require('http');
const hapi = require("hapi");
const server = new hapi.Server();

server.connection({port:3000});

server.start(console.log("Hello World"));

server.route({
  method: "GET",
  path: "/",
  handler: function(request, reply){
    reply.view("Test");
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

server.register(require("inert"), function(err){

});

server.route({
  method: "GET",
  path: "/{param}",
  handler: {
    directory: {
      path: "public"
    }
  }
});
