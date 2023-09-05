const http = require('http');
// http is a module we can use its methods and properties to create a http server 
 
const hostname = '127.0.0.1';
const port = 3000;
 
// http.createServer() creates us an http server and returns it 
// when a request is recieved a request event is called that provides two object 
// a req and a res we set the status code to 200 to show the response was a success

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

const server = require("./routes.js")
 
// server is then set to listen to on a port 3000 
// when server is ready it will run the callback letting us know the server is 
// running on port 3000
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



