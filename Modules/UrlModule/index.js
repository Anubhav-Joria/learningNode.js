const http = require("http");
const url = require("url");

// CREATING THE SERVER
http
  .createServer((req, res) => {
    //GETTING THE URL. URL : IT IS THE REQUEST WE ARE MAKING. eg-> localhost/server
    const reqUrl = req.url;
    console.log(reqUrl);

    // It makes object from our request & querry will be in string form
    // const parseUrl = url.parse(reqUrl);
    const parseUrl = url.parse(reqUrl, true); // By passing true we can get querry as an object
    console.log(parseUrl);
    console.log("h");
    console.log("h");
  })
  .listen(8000);

// Notes
// Important things from Object
// 1. pathname : the path we follow
// 2. querry : means anything after "?" -> key-value pair
// we will get default querry -> as a string
