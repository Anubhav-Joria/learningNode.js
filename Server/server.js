// //HTTP module is used to create a server
const http = require('http'); // importing module

//CREATING HTTP SERVER
const server = http.createServer((req, resp)=>{
    //req : for accepting request
    // resp : for sending response
    resp.writeHead(200, {"content-type" : "text/html"});// For sending response and we are declaring what type of response we want to send
    resp.write("<h1> First Node app </h1>");
    resp.write("<h2> Creating server and sending response </h2>");
    resp.end("Ending")
});
server.listen('9090');
