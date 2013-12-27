var http = require('http');
var send = require('send');

var server = http.createServer(function(req, res) {
  console.log('connected!');

  send(req, req.url).root(__dirname).pipe(res);
});
server.listen(7575);
