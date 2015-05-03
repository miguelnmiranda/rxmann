/**
 * Debug
 */

var rx = require('rx');

function debugComponent(eventStream) {
    var debugObserver = rx.Observer.create(
        function (message) {
            console.log(message);
        },
        function (err) {
            console.log(err);
        },
        function () {
            console.log('completed');
        }
    );
    var subscription = eventStream.subscribe(debugObserver);
}

module.exports = debugComponent;
