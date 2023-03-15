// Stream is used to read data in streaming manner
// It is an instance of EmmiterEvent which return some events
// data, error, end, finish

const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on("request", (req, res)=>{
  const rstream = fs.createReadStream("input.txt");  

  rstream.on('data', (data)=>{
    res.write(data)
    res.end();
  });
  rstream.on('error', (err)=>{
    res.end("404 not found");
  });
  rstream.on('end', ()=>{
    res.end();
  });
})

server.listen(8080)