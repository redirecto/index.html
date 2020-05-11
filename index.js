var http = require("http");
var url = require("url");

http.createServer(function(req, res) {
  var pathname = url.parse(req.url).pathname;
  res.writeHead(301,{Location: 'http://new-website.com/' + pathname});
  res.end();
}).listen(8888);
