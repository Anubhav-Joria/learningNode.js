// //HTTP module is used to create a server
const http = require("http"); // importing module
const fs = require("fs");

const data = fs.readFileSync("../Json/mockApiData.json", "utf-8");

//CREATING HTTP SERVER
const server = http.createServer((req, resp) => {
  const url = req.url;

  //req : for accepting request
  // resp : for sending response
  if (url === "/") {
    resp.writeHead(200, { "content-type": "text/html" }); // For sending response and we are declaring what type of response we want to send
    resp.write("<h1> First Node app </h1>");
    resp.write("<h2> Creating server and sending response </h2>");
    resp.end("Ending");
  }
  else if (url === "/mockApiData") {
    resp.writeHead(200, { "content-type": "application/json" }); 
    resp.end(data);
  }
  else{
    req.statusCode = 404;
    resp.end("<h1>404 not found</h1>");
  }

});
server.listen("9090");
