# Getting Started!
#Open the terminal and Run the following:
###npm init
###npm install hapi@13.4.1
###npm install ejs
###npm install vision
###npm install inert
#Add the Server and Routes
'use strict';

const Hapi=require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();

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
    relativeTo: __ dirname,
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

# Create a Landing page in the views

<html lang="en" dir="ltr">
  <%include partials/header%>
  <body class="">
    <h1 id="landing_header">Connect</h1>
    <div class="sign_up_div">
      <form class="" action="index.html" method="post" id="sign_up_form">
        <h2>Sign Up&nbsp</h2>
        <input type="text" name="name" value="" id="name" placeholder="Name:">
        <input type="text" name="email" value="" id="email" placeholder="Email:">
        <input type="text" name="password" value="" id="password">
        <input type="button" name="name" value="Register" id="register_user" >
      </form>

    </div>

    <div class="sign_in_div">
      <form class="" action="index.html" method="post" id="sign_up_form">
        <h2>Sign In&nbsp</h2>
        <input type="text" name="email" value="" id="usr_email" placeholder="Email:">
        <input type="text" name="password" value="" id="usr_pwd">
        <input type="button" name="name" value="Sign In" id="sign_in_user" >
      </form>

    </div>
  </body>
</html>
