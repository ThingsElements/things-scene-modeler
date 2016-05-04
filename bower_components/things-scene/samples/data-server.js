var http = require('http'),
    faye = require('faye');

var server = http.createServer(),
    bayeux = new faye.NodeAdapter({mount: '/service', timeout: 20});

bayeux.attach(server);
server.listen(8888);
