var QueryListener = require('./parser/QueryListener').QueryListener;
var _ = require('lodash');

// This class defines a complete listener for a parse tree produced by QueryParser.
function PredicateQueryListener() {
	QueryListener.call(this);
	return this;
}

PredicateQueryListener.prototype = Object.create(QueryListener.prototype);
PredicateQueryListener.prototype.constructor = PredicateQueryListener;

var currentPreds = [];

PredicateQueryListener.prototype.getPredicate = function() {
	return currentPreds[0];
};

// Enter a parse tree produced by QueryParser#predicate.
PredicateQueryListener.prototype.enterPredicate = function(ctx) {
};

// Exit a parse tree produced by QueryParser#predicate.
PredicateQueryListener.prototype.exitPredicate = function(ctx) {
};


// Enter a parse tree produced by QueryParser#or.
PredicateQueryListener.prototype.enterOr = function(ctx) {
	ctx.parentPreds = currentPreds;
	currentPreds = [];
};

// Exit a parse tree produced by QueryParser#or.
PredicateQueryListener.prototype.exitOr = function(ctx) {
	var childPreds = currentPreds;
	var orPred = function(event) {
		var app = _.map(childPreds, function(fn) { return fn(event); });
		return _.reduce(app, function (acc, p) { return acc || p; }, false);
	}
	currentPreds = ctx.parentPreds;
	currentPreds.push(orPred);
};


// Enter a parse tree produced by QueryParser#and.
PredicateQueryListener.prototype.enterAnd = function(ctx) {
	ctx.parentPreds = currentPreds;
	currentPreds = [];
};

// Exit a parse tree produced by QueryParser#and.
PredicateQueryListener.prototype.exitAnd = function(ctx) {
	var childPreds = currentPreds;
	var andPred = function(event) {
		var app = _.map(childPreds, function(fn) { return fn(event); });
		return _.reduce(app, function (acc, p) { return acc && p; }, true);
	}
	currentPreds = ctx.parentPreds;
	currentPreds.push(andPred);
};


// Enter a parse tree produced by QueryParser#not.
PredicateQueryListener.prototype.enterNot = function(ctx) {
};

// Exit a parse tree produced by QueryParser#not.
PredicateQueryListener.prototype.exitNot = function(ctx) {
};


// Enter a parse tree produced by QueryParser#primary.
PredicateQueryListener.prototype.enterPrimary = function(ctx) {
};

// Exit a parse tree produced by QueryParser#primary.
PredicateQueryListener.prototype.exitPrimary = function(ctx) {
};


// Enter a parse tree produced by QueryParser#simple.
PredicateQueryListener.prototype.enterSimple = function(ctx) {
};

// Exit a parse tree produced by QueryParser#simple.
PredicateQueryListener.prototype.exitSimple = function(ctx) {
};


// Enter a parse tree produced by QueryParser#tagged.
PredicateQueryListener.prototype.enterTagged = function(ctx) {
};

// Exit a parse tree produced by QueryParser#tagged.
PredicateQueryListener.prototype.exitTagged = function(ctx) {
};


// Enter a parse tree produced by QueryParser#equal.
PredicateQueryListener.prototype.enterEqual = function(ctx) {
};

// Exit a parse tree produced by QueryParser#equal.
PredicateQueryListener.prototype.exitEqual = function(ctx) {
	var equalPred = function(event) {
		return event[ctx.currentField] == ctx.currentValue;
	}
	currentPreds.push(equalPred);
};


// Enter a parse tree produced by QueryParser#not_equal.
PredicateQueryListener.prototype.enterNot_equal = function(ctx) {
};

// Exit a parse tree produced by QueryParser#not_equal.
PredicateQueryListener.prototype.exitNot_equal = function(ctx) {
	var noEqualPred = function(event) {
		return noEqualPred[ctx.currentField] != ctx.currentValue;
	}
	currentPreds.push(equalPred);
};


// Enter a parse tree produced by QueryParser#lesser.
PredicateQueryListener.prototype.enterLesser = function(ctx) {
};

// Exit a parse tree produced by QueryParser#lesser.
PredicateQueryListener.prototype.exitLesser = function(ctx) {
};


// Enter a parse tree produced by QueryParser#greater.
PredicateQueryListener.prototype.enterGreater = function(ctx) {
};

// Exit a parse tree produced by QueryParser#greater.
PredicateQueryListener.prototype.exitGreater = function(ctx) {
};


// Enter a parse tree produced by QueryParser#lesser_equal.
PredicateQueryListener.prototype.enterLesser_equal = function(ctx) {
};

// Exit a parse tree produced by QueryParser#lesser_equal.
PredicateQueryListener.prototype.exitLesser_equal = function(ctx) {
};


// Enter a parse tree produced by QueryParser#greater_equal.
PredicateQueryListener.prototype.enterGreater_equal = function(ctx) {
};

// Exit a parse tree produced by QueryParser#greater_equal.
PredicateQueryListener.prototype.exitGreater_equal = function(ctx) {
};


// Enter a parse tree produced by QueryParser#like.
PredicateQueryListener.prototype.enterLike = function(ctx) {
};

// Exit a parse tree produced by QueryParser#like.
PredicateQueryListener.prototype.exitLike = function(ctx) {
};


// Enter a parse tree produced by QueryParser#regex_match.
PredicateQueryListener.prototype.enterRegex_match = function(ctx) {
};

// Exit a parse tree produced by QueryParser#regex_match.
PredicateQueryListener.prototype.exitRegex_match = function(ctx) {
};


// Enter a parse tree produced by QueryParser#ws.
PredicateQueryListener.prototype.enterWs = function(ctx) {
};

// Exit a parse tree produced by QueryParser#ws.
PredicateQueryListener.prototype.exitWs = function(ctx) {
};


// Enter a parse tree produced by QueryParser#field.
PredicateQueryListener.prototype.enterField = function(ctx) {
};

// Exit a parse tree produced by QueryParser#field.
PredicateQueryListener.prototype.exitField = function(ctx) {
	ctx.parentCtx.currentField = ctx.parser.getTokenStream().getText(ctx);
};


// Enter a parse tree produced by QueryParser#value.
PredicateQueryListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by QueryParser#value.
PredicateQueryListener.prototype.exitValue = function(ctx) {
	ctx.parentCtx.currentValue = ctx.currentValue;
};


// Enter a parse tree produced by QueryParser#string.
PredicateQueryListener.prototype.enterString = function(ctx) {
};

// Exit a parse tree produced by QueryParser#string.
PredicateQueryListener.prototype.exitString = function(ctx) {
	var string = ctx.parser.getTokenStream().getText(ctx);
	ctx.parentCtx.currentValue = string.slice(1, -1);
};


// Enter a parse tree produced by QueryParser#v_boolean.
PredicateQueryListener.prototype.enterV_boolean = function(ctx) {
};

// Exit a parse tree produced by QueryParser#v_boolean.
PredicateQueryListener.prototype.exitV_boolean = function(ctx) {
};


// Enter a parse tree produced by QueryParser#v_true.
PredicateQueryListener.prototype.enterV_true = function(ctx) {
};

// Exit a parse tree produced by QueryParser#v_true.
PredicateQueryListener.prototype.exitV_true = function(ctx) {
};


// Enter a parse tree produced by QueryParser#v_false.
PredicateQueryListener.prototype.enterV_false = function(ctx) {
};

// Exit a parse tree produced by QueryParser#v_false.
PredicateQueryListener.prototype.exitV_false = function(ctx) {
};


// Enter a parse tree produced by QueryParser#nil.
PredicateQueryListener.prototype.enterNil = function(ctx) {
};

// Exit a parse tree produced by QueryParser#nil.
PredicateQueryListener.prototype.exitNil = function(ctx) {
};


// Enter a parse tree produced by QueryParser#number.
PredicateQueryListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by QueryParser#number.
PredicateQueryListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by QueryParser#v_float.
PredicateQueryListener.prototype.enterV_float = function(ctx) {
};

// Exit a parse tree produced by QueryParser#v_float.
PredicateQueryListener.prototype.exitV_float = function(ctx) {
};


// Enter a parse tree produced by QueryParser#v_int.
PredicateQueryListener.prototype.enterV_int = function(ctx) {
};

// Exit a parse tree produced by QueryParser#v_int.
PredicateQueryListener.prototype.exitV_int = function(ctx) {
};

exports.PredicateQueryListener = PredicateQueryListener;
