/**
 * WS
 */

var url = require('url');
var WebSocketServer = require('ws').Server;
var rx = require('rx');
var moment = require('moment');
var _ = require('lodash');
var clone = require('clone');

var antlr4 = require('antlr4');
var QueryLexer = require('./parser/QueryLexer');
var QueryParser = require('./parser/QueryParser');
var PredicateQueryListener = require('./predicate-query-listener').PredicateQueryListener;

function wsComponent(queryStream) {
    var p = new WebSocketServer({port: 5678});

    p.on('connection', function (ws) {
        console.log('connection');

        var request = url.parse(ws.upgradeReq.url,true);
        var chars = new antlr4.InputStream(request.query.query);
        var lexer = new QueryLexer.QueryLexer(chars);
        var tokens  = new antlr4.CommonTokenStream(lexer);
        var parser = new QueryParser.QueryParser(tokens);
        parser.buildParseTrees = true;
        var tree = parser.predicate();

        var listener = new PredicateQueryListener();
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

        var subscription;
        if(request.pathname == '/index') {
            subscription = queryComponent(ws, listener.getPredicate(), queryStream);
        } else {
            ws.close();
        }

        ws.on('end', function message() {
            console.log('end');
            if(subscription) {
                subscription.dispose();
            }
        });
    });

    p.on('error', function (err) {
        console.log('error');
    });

    p.on('disconnection', function () {
        console.log('disconnection');
    });
}

function queryComponent(ws, predicate, queryStream) {
    var queryObserver = rx.Observer.create(
        function (event) {
            var localEvent = clone(event);
            localEvent.time = moment.unix(localEvent.time).toISOString();
            localEvent.metric = event.metric_f;
            localEvent.ttl = 10.0;
            ws.send(JSON.stringify(localEvent));
        },
        function (err) {
            console.log(err);
        },
        function () {
            console.log('query completed');
        }
    );
    return queryStream.filter(predicate).subscribe(queryObserver);
}

module.exports = wsComponent;
