/**
 * TCP - NOT WORKING
 */

var net = require('net');

var server = net.createServer();

server.on('connection', function(socket) {
    var socketId = socket.remotePort
    console.log('client connected ' + socketId);

    socket.setEncoding('utf-8');
    socket.on('data', function(data) {
        console.log('client sending data ' + socketId);
        console.log(data);
    });

    socket.on('timeout', function() {
        console.log('client timeout ' + socketId);
        socket.close();
    });

    socket.on('drain', function() {
        console.log('client waiting for more ' + socketId);
    });

    socket.on('error', function(err) {
        console.log('client connection error ' + socketId + ': ' + err );
    });

    socket.on('end', function() {
        console.log('client disconnected ' + socketId);
    });

    socket.on('close', function(had_error) {
        console.log('client gone ' + socketId + ': ' + had_error);
    });
});

server.on('listening', function() {
    console.log('server bound');
});

server.on('error', function(err) {
    console.log('server error: ' + err);
});

server.on('end', function() {
    console.log('server disconnected');
});

server.listen(5555);
