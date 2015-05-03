/**
 * UDP
 */

var debug = require('debug')('riepmann');
var dgram = require('dgram');

var protobuf = require('protocol-buffers/require');
var messages = protobuf('../../schemas/proto.proto');

function asdf(msg, rinfo, emitter) {
    var content = undefined;
    try {
        content = messages.Msg.decode(msg)
    }
    catch(err) {
        debug(err)
    }
    if(content != undefined) {
        emitter.emit('batch', content.events);
    }
}

function udp(port, socketType, emitter) {
    debug("add stuff");
    var socket = dgram.createSocket(socketType);

    socket.on("listening", function () {
        var address = socket.address();
        debug("Listening: " + address.address + ":" + address.port);
    });

    socket.on("message", function (data, rinfo) {
        debug("add stuff");
        asdf(data, rinfo, emitter);
    });

    socket.on("error", function (err) {
        debug("error: " + err.stack);
        socket.close();
    });

    socket.bind(port);
}

module.exports = udp;
