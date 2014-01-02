var http = require('http');
var send = require('send');

var fs = require('fs');
var https = require('https');

http.createServer(servePage).listen(80);
http.createServer(servePage).listen(8080);

var options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};
https.createServer(options, servePage).listen(443);

function servePage(req, res) {
  console.log('connected!');

  send(req, req.url).root(__dirname).pipe(res);
}
