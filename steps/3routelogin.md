# Sign in

```
npm install hapi-auth-cookie
```
Add Sign in route
```
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
```
Register Cookie-Auth on Server
Make a 32 bit password
http://www.sethcardoza.com/tools/random-password-generator/
```
server.register(require("hapi-auth-cookie"));
server.auth.strategy("strategy", "cookie", {
  cookie "cookie",
  password: "CnqKELu9u4Ru*bnmpAQBzYr^P^k9t_jg",
  isSecure: false
})
```
