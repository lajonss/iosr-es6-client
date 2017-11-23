var http = require('http-server');

var server = http.createServer();
var port = process.env.PORT || 9000;
server.listen(port);