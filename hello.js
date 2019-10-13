var http = require('http');


const hello = http.createServer(function (req, res) {
  const endPoint = req.url;
  if (endPoint === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end('Hello Travis!');
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html'
    });

    res.end("Sorry :(")
  }


}).listen(3000, () => {

  console.log('Server running at port 3000');
});


module.exports = hello;