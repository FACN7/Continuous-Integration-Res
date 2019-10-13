var http = require('http');


const hello = http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end('Hello Travis!');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');


module.exports = hello;