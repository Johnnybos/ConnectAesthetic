const hapi = require("hapi");
const server = new hapi.server();

//Port
server.connection({port:3000});

server.start(console.log("Hello World"));
