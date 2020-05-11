http.createServer(function(req, res) {
  res.writeHead(301,{Location: 'http://new-website.com'});
  res.end();
}).listen(8888);
