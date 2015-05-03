/**
 * Print
 */

var debug = require('debug')('riepmann:output:print');
var rx = require('rx');

function printComponent(eventStream) {
    var printObserver = rx.Observer.create(
        function (message) {
            console.log(message);
        },
        function (err) {
            debug(err);
        },
        function () {
            debug('completed');
        }
    );
    var subscription = eventStream.subscribe(printObserver);
}

module.exports = printComponent;
