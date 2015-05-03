// Generated from schemas/Query.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by QueryParser.
function QueryListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

QueryListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
QueryListener.prototype.constructor = QueryListener;

// Enter a parse tree produced by QueryParser#predicate.
QueryListener.prototype.enterPredicate = function(ctx) {
};

// Exit a parse tree produced by QueryParser#predicate.
QueryListener.prototype.exitPredicate = function(ctx) {
};


// Enter a parse tree produced by QueryParser#or.
QueryListener.prototype.enterOr = function(ctx) {
};

// Exit a parse tree produced by QueryParser#or.
QueryListener.prototype.exitOr = function(ctx) {
};


// Enter a parse tree produced by QueryParser#and.
QueryListener.prototype.enterAnd = function(ctx) {
};

// Exit a parse tree produced by QueryParser#and.
QueryListener.prototype.exitAnd = function(ctx) {
};


// Enter a parse tree produced by QueryParser#not.
QueryListener.prototype.enterNot = function(ctx) {
};

// Exit a parse tree produced by QueryParser#not.
QueryListener.prototype.exitNot = function(ctx) {
};


// Enter a parse tree produced by QueryParser#primary.
QueryListener.prototype.enterPrimary = function(ctx) {
};

// Exit a parse tree produced by QueryParser#primary.
QueryListener.prototype.exitPrimary = function(ctx) {
};


// Enter a parse tree produced by QueryParser#simple.
QueryListener.prototype.enterSimple = function(ctx) {
};

// Exit a parse tree produced by QueryParser#simple.
QueryListener.prototype.exitSimple = function(ctx) {
};


// Enter a parse tree produced by QueryParser#tagged.
QueryListener.prototype.enterTagged = function(ctx) {
};

// Exit a parse tree produced by QueryParser#tagged.
QueryListener.prototype.exitTagged = function(ctx) {
};


// Enter a parse tree produced by QueryParser#equal.
QueryListener.prototype.enterEqual = function(ctx) {
};

// Exit a parse tree produced by QueryParser#equal.
QueryListener.prototype.exitEqual = function(ctx) {
};


// Enter a parse tree produced by QueryParser#not_equal.
QueryListener.prototype.enterNot_equal = function(ctx) {
};

// Exit a parse tree produced by QueryParser#not_equal.
QueryListener.prototype.exitNot_equal = function(ctx) {
};


// Enter a parse tree produced by QueryParser#lesser.
QueryListener.prototype.enterLesser = function(ctx) {
};

// Exit a parse tree produced by QueryParser#lesser.
QueryListener.prototype.exitLesser = function(ctx) {
};


// Enter a parse tree produced by QueryParser#greater.
QueryListener.prototype.enterGreater = function(ctx) {
};

// Exit a parse tree produced by QueryParser#greater.
QueryListener.prototype.exitGreater = function(ctx) {
};


// Enter a parse tree produced by QueryParser#lesser_equal.
QueryListener.prototype.enterLesser_equal = function(ctx) {
};

// Exit a parse tree produced by QueryParser#lesser_equal.
QueryListener.prototype.exitLesser_equal = function(ctx) {
};


// Enter a parse tree produced by QueryParser#greater_equal.
QueryListener.prototype.enterGreater_equal = function(ctx) {
};

// Exit a parse tree produced by QueryParser#greater_equal.
QueryListener.prototype.exitGreater_equal = function(ctx) {
};


// Enter a parse tree produced by QueryParser#like.
QueryListener.prototype.enterLike = function(ctx) {
};

// Exit a parse tree produced by QueryParser#like.
QueryListener.prototype.exitLike = function(ctx) {
};


// Enter a parse tree produced by QueryParser#regex_match.
QueryListener.prototype.enterRegex_match = function(ctx) {
};

// Exit a parse tree produced by QueryParser#regex_match.
QueryListener.prototype.exitRegex_match = function(ctx) {
};


// Enter a parse tree produced by QueryParser#ws.
QueryListener.prototype.enterWs = function(ctx) {
};

// Exit a parse tree produced by QueryParser#ws.
QueryListener.prototype.exitWs = function(ctx) {
};


// Enter a parse tree produced by QueryParser#field.
QueryListener.prototype.enterField = function(ctx) {
};

// Exit a parse tree produced by QueryParser#field.
QueryListener.prototype.exitField = function(ctx) {
};


// Enter a parse tree produced by QueryParser#value.
QueryListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by QueryParser#value.
QueryListener.prototype.exitValue = function(ctx) {
};


// Enter a parse tree produced by QueryParser#string.
QueryListener.prototype.enterString = function(ctx) {
};

// Exit a parse tree produced by QueryParser#string.
QueryListener.prototype.exitString = function(ctx) {
};


// Enter a parse tree produced by QueryParser#v_boolean.
QueryListener.prototype.enterV_boolean = function(ctx) {
};

// Exit a parse tree produced by QueryParser#v_boolean.
QueryListener.prototype.exitV_boolean = function(ctx) {
};


// Enter a parse tree produced by QueryParser#v_true.
QueryListener.prototype.enterV_true = function(ctx) {
};

// Exit a parse tree produced by QueryParser#v_true.
QueryListener.prototype.exitV_true = function(ctx) {
};


// Enter a parse tree produced by QueryParser#v_false.
QueryListener.prototype.enterV_false = function(ctx) {
};

// Exit a parse tree produced by QueryParser#v_false.
QueryListener.prototype.exitV_false = function(ctx) {
};


// Enter a parse tree produced by QueryParser#nil.
QueryListener.prototype.enterNil = function(ctx) {
};

// Exit a parse tree produced by QueryParser#nil.
QueryListener.prototype.exitNil = function(ctx) {
};


// Enter a parse tree produced by QueryParser#number.
QueryListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by QueryParser#number.
QueryListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by QueryParser#v_float.
QueryListener.prototype.enterV_float = function(ctx) {
};

// Exit a parse tree produced by QueryParser#v_float.
QueryListener.prototype.exitV_float = function(ctx) {
};


// Enter a parse tree produced by QueryParser#v_int.
QueryListener.prototype.enterV_int = function(ctx) {
};

// Exit a parse tree produced by QueryParser#v_int.
QueryListener.prototype.exitV_int = function(ctx) {
};



exports.QueryListener = QueryListener;