var server = require('./server.js');
var routes = ['books'];
var serviceName = "books";
server.start(serviceName, routes);