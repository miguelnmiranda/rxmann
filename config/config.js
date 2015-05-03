/**
 * User defined configuration
 */

var rx = require('rx');
var _ = require('lodash');
var clone = require('clone');

var debug = require('./../src/output/debug.js');
var print = require('./../src/output/print.js');

// returns a stream of events to be indexed
function config(inputStream) {

    var myStream = inputStream
        //.filter(function(event) { return event.service == 'wlan0 rx packets' })
        .bufferWithTime(4000)
        .filter(function(events) { return events.length > 0; })
        //.map(function(events) { return _.reduce(events, function(r, e) { r.metric_f += e.metric_f; return r;}); })
        .map(function(events) { var localEvent = clone(events[0]); localEvent.metric_f = events.length; return localEvent; })
        .map(function(event) { event.service = 'count'; event.state = ''; event.description = ''; return event; });
    //debug(myStream);

    return inputStream.merge(myStream);
}

module.exports = config;
