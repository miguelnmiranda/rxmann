/**
 * Index
 */

var debug = require('debug')('riepmann:core:index');
var rx = require('rx');
var _ = require('lodash');

var index = {};

function indexComponent(indexStream, queryEmmiter) {
    var indexObserver = rx.Observer.create(
        function (event) {
            debug("indexing..");
            if(index[event.host] == undefined) {
                index[event.host] = {};
            }
            index[event.host][event.service] = event;
        },
        function (err) {
            debug(err);
        },
        function () {
            debug('completed');
        }
    );
    indexStream.subscribe(indexObserver);

    setInterval(function() {
        var batch = _.flatten(_.map(_.values(index), function(l2) { return _.values(l2); }));
        queryEmmiter.emit('batch', batch);
    }, 2000);
}

// TODO: compaction?

module.exports = indexComponent;
