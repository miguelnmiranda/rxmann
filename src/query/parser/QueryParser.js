// Generated from schemas/Query.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var QueryListener = require('./QueryListener').QueryListener;
var grammarFileName = "Query.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3\37\u00c4\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b",
    "\4\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20",
    "\t\20\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4",
    "\27\t\27\4\30\t\30\4\31\t\31\4\32\t\32\4\33\t\33\3\2\3\2\3\2\3\3\3\3",
    "\3\3\3\3\3\3\3\3\7\3@\n\3\f\3\16\3C\13\3\3\4\3\4\5\4G\n\4\3\4\3\4\3",
    "\4\3\4\3\4\5\4N\n\4\7\4P\n\4\f\4\16\4S\13\4\3\5\3\5\3\5\3\5\5\5Y\n\5",
    "\3\6\3\6\3\6\3\6\3\6\5\6`\n\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3",
    "\7\5\7l\n\7\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n",
    "\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3",
    "\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17",
    "\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\20\3\21\7\21\u00a3\n\21\f\21\16",
    "\21\u00a6\13\21\3\22\3\22\3\23\3\23\3\23\3\23\5\23\u00ae\n\23\3\24\3",
    "\24\3\25\3\25\5\25\u00b4\n\25\3\26\3\26\3\27\3\27\3\30\3\30\3\31\3\31",
    "\5\31\u00be\n\31\3\32\3\32\3\33\3\33\3\33\2\2\34\2\4\6\b\n\f\16\20\22",
    "\24\26\30\32\34\36 \"$&(*,.\60\62\64\2\3\3\2\5\f\u00be\2\66\3\2\2\2",
    "\49\3\2\2\2\6F\3\2\2\2\bT\3\2\2\2\n_\3\2\2\2\fk\3\2\2\2\16m\3\2\2\2",
    "\20q\3\2\2\2\22w\3\2\2\2\24}\3\2\2\2\26\u0083\3\2\2\2\30\u0089\3\2\2",
    "\2\32\u008f\3\2\2\2\34\u0095\3\2\2\2\36\u009b\3\2\2\2 \u00a4\3\2\2\2",
    "\"\u00a7\3\2\2\2$\u00ad\3\2\2\2&\u00af\3\2\2\2(\u00b3\3\2\2\2*\u00b5",
    "\3\2\2\2,\u00b7\3\2\2\2.\u00b9\3\2\2\2\60\u00bd\3\2\2\2\62\u00bf\3\2",
    "\2\2\64\u00c1\3\2\2\2\66\67\5\4\3\2\678\7\2\2\38\3\3\2\2\29A\5\6\4\2",
    ":;\5 \21\2;<\7\16\2\2<=\5 \21\2=>\5\6\4\2>@\3\2\2\2?:\3\2\2\2@C\3\2",
    "\2\2A?\3\2\2\2AB\3\2\2\2B\5\3\2\2\2CA\3\2\2\2DG\5\b\5\2EG\5\n\6\2FD",
    "\3\2\2\2FE\3\2\2\2GQ\3\2\2\2HI\5 \21\2IJ\7\r\2\2JM\5 \21\2KN\5\b\5\2",
    "LN\5\n\6\2MK\3\2\2\2ML\3\2\2\2NP\3\2\2\2OH\3\2\2\2PS\3\2\2\2QO\3\2\2",
    "\2QR\3\2\2\2R\7\3\2\2\2SQ\3\2\2\2TU\7\17\2\2UX\5 \21\2VY\5\b\5\2WY\5",
    "\n\6\2XV\3\2\2\2XW\3\2\2\2Y\t\3\2\2\2Z[\7\3\2\2[\\\5\4\3\2\\]\7\4\2",
    "\2]`\3\2\2\2^`\5\f\7\2_Z\3\2\2\2_^\3\2\2\2`\13\3\2\2\2al\5\16\b\2bl",
    "\5\20\t\2cl\5\22\n\2dl\5\24\13\2el\5\26\f\2fl\5\30\r\2gl\5\32\16\2h",
    "l\5\34\17\2il\5\36\20\2jl\5(\25\2ka\3\2\2\2kb\3\2\2\2kc\3\2\2\2kd\3",
    "\2\2\2ke\3\2\2\2kf\3\2\2\2kg\3\2\2\2kh\3\2\2\2ki\3\2\2\2kj\3\2\2\2l",
    "\r\3\2\2\2mn\7\30\2\2no\5 \21\2op\5&\24\2p\17\3\2\2\2qr\5\"\22\2rs\5",
    " \21\2st\7\23\2\2tu\5 \21\2uv\5$\23\2v\21\3\2\2\2wx\5\"\22\2xy\5 \21",
    "\2yz\7\22\2\2z{\5 \21\2{|\5$\23\2|\23\3\2\2\2}~\5\"\22\2~\177\5 \21",
    "\2\177\u0080\7\24\2\2\u0080\u0081\5 \21\2\u0081\u0082\5\60\31\2\u0082",
    "\25\3\2\2\2\u0083\u0084\5\"\22\2\u0084\u0085\5 \21\2\u0085\u0086\7\26",
    "\2\2\u0086\u0087\5 \21\2\u0087\u0088\5\60\31\2\u0088\27\3\2\2\2\u0089",
    "\u008a\5\"\22\2\u008a\u008b\5 \21\2\u008b\u008c\7\25\2\2\u008c\u008d",
    "\5 \21\2\u008d\u008e\5\60\31\2\u008e\31\3\2\2\2\u008f\u0090\5\"\22\2",
    "\u0090\u0091\5 \21\2\u0091\u0092\7\27\2\2\u0092\u0093\5 \21\2\u0093",
    "\u0094\5\60\31\2\u0094\33\3\2\2\2\u0095\u0096\5\"\22\2\u0096\u0097\5",
    " \21\2\u0097\u0098\7\20\2\2\u0098\u0099\5 \21\2\u0099\u009a\5&\24\2",
    "\u009a\35\3\2\2\2\u009b\u009c\5\"\22\2\u009c\u009d\5 \21\2\u009d\u009e",
    "\7\21\2\2\u009e\u009f\5 \21\2\u009f\u00a0\5&\24\2\u00a0\37\3\2\2\2\u00a1",
    "\u00a3\7\37\2\2\u00a2\u00a1\3\2\2\2\u00a3\u00a6\3\2\2\2\u00a4\u00a2",
    "\3\2\2\2\u00a4\u00a5\3\2\2\2\u00a5!\3\2\2\2\u00a6\u00a4\3\2\2\2\u00a7",
    "\u00a8\t\2\2\2\u00a8#\3\2\2\2\u00a9\u00ae\5(\25\2\u00aa\u00ae\5.\30",
    "\2\u00ab\u00ae\5\60\31\2\u00ac\u00ae\5&\24\2\u00ad\u00a9\3\2\2\2\u00ad",
    "\u00aa\3\2\2\2\u00ad\u00ab\3\2\2\2\u00ad\u00ac\3\2\2\2\u00ae%\3\2\2",
    "\2\u00af\u00b0\7\31\2\2\u00b0\'\3\2\2\2\u00b1\u00b4\5*\26\2\u00b2\u00b4",
    "\5,\27\2\u00b3\u00b1\3\2\2\2\u00b3\u00b2\3\2\2\2\u00b4)\3\2\2\2\u00b5",
    "\u00b6\7\35\2\2\u00b6+\3\2\2\2\u00b7\u00b8\7\36\2\2\u00b8-\3\2\2\2\u00b9",
    "\u00ba\7\34\2\2\u00ba/\3\2\2\2\u00bb\u00be\5\62\32\2\u00bc\u00be\5\64",
    "\33\2\u00bd\u00bb\3\2\2\2\u00bd\u00bc\3\2\2\2\u00be\61\3\2\2\2\u00bf",
    "\u00c0\7\32\2\2\u00c0\63\3\2\2\2\u00c1\u00c2\7\33\2\2\u00c2\65\3\2\2",
    "\2\rAFMQX_k\u00a4\u00ad\u00b3\u00bd"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'('", "')'", "'host'", "'service'", "'state'", 
                     "'description'", "'metric_f'", "'metric'", "'ttl'", 
                     "'time'", "'and'", "'or'", "'not'", "'=~'", "'~='", 
                     "'!='", "'='", "'<'", "'<='", "'>'", "'>='", "'tagged'", 
                     'null', 'null', 'null', 'null', "'true'", "'false'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', "AND", "OR", "NOT", 
                      "APPROXIMATELY", "REGEX_MATCH", "NOT_EQUAL", "EQUAL", 
                      "LESSER", "LESSER_EQUAL", "GREATER", "GREATER_EQUAL", 
                      "TAGGED", "STRING", "FLOAT", "INT", "NIL", "TRUE", 
                      "FALSE", "WS" ];

var ruleNames =  [ "predicate", "or", "and", "not", "primary", "simple", 
                   "tagged", "equal", "not_equal", "lesser", "greater", 
                   "lesser_equal", "greater_equal", "like", "regex_match", 
                   "ws", "field", "value", "string", "v_boolean", "v_true", 
                   "v_false", "nil", "number", "v_float", "v_int" ];

function QueryParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

QueryParser.prototype = Object.create(antlr4.Parser.prototype);
QueryParser.prototype.constructor = QueryParser;

Object.defineProperty(QueryParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

QueryParser.EOF = antlr4.Token.EOF;
QueryParser.T__0 = 1;
QueryParser.T__1 = 2;
QueryParser.T__2 = 3;
QueryParser.T__3 = 4;
QueryParser.T__4 = 5;
QueryParser.T__5 = 6;
QueryParser.T__6 = 7;
QueryParser.T__7 = 8;
QueryParser.T__8 = 9;
QueryParser.T__9 = 10;
QueryParser.AND = 11;
QueryParser.OR = 12;
QueryParser.NOT = 13;
QueryParser.APPROXIMATELY = 14;
QueryParser.REGEX_MATCH = 15;
QueryParser.NOT_EQUAL = 16;
QueryParser.EQUAL = 17;
QueryParser.LESSER = 18;
QueryParser.LESSER_EQUAL = 19;
QueryParser.GREATER = 20;
QueryParser.GREATER_EQUAL = 21;
QueryParser.TAGGED = 22;
QueryParser.STRING = 23;
QueryParser.FLOAT = 24;
QueryParser.INT = 25;
QueryParser.NIL = 26;
QueryParser.TRUE = 27;
QueryParser.FALSE = 28;
QueryParser.WS = 29;

QueryParser.RULE_predicate = 0;
QueryParser.RULE_or = 1;
QueryParser.RULE_and = 2;
QueryParser.RULE_not = 3;
QueryParser.RULE_primary = 4;
QueryParser.RULE_simple = 5;
QueryParser.RULE_tagged = 6;
QueryParser.RULE_equal = 7;
QueryParser.RULE_not_equal = 8;
QueryParser.RULE_lesser = 9;
QueryParser.RULE_greater = 10;
QueryParser.RULE_lesser_equal = 11;
QueryParser.RULE_greater_equal = 12;
QueryParser.RULE_like = 13;
QueryParser.RULE_regex_match = 14;
QueryParser.RULE_ws = 15;
QueryParser.RULE_field = 16;
QueryParser.RULE_value = 17;
QueryParser.RULE_string = 18;
QueryParser.RULE_v_boolean = 19;
QueryParser.RULE_v_true = 20;
QueryParser.RULE_v_false = 21;
QueryParser.RULE_nil = 22;
QueryParser.RULE_number = 23;
QueryParser.RULE_v_float = 24;
QueryParser.RULE_v_int = 25;

function PredicateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_predicate;
    return this;
}

PredicateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PredicateContext.prototype.constructor = PredicateContext;

PredicateContext.prototype.or = function() {
    return this.getTypedRuleContext(OrContext,0);
};

PredicateContext.prototype.EOF = function() {
    return this.getToken(QueryParser.EOF, 0);
};

PredicateContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterPredicate(this);
	}
};

PredicateContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitPredicate(this);
	}
};




QueryParser.PredicateContext = PredicateContext;

QueryParser.prototype.predicate = function() {

    var localctx = new PredicateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, QueryParser.RULE_predicate);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 52;
        this.or();
        this.state = 53;
        this.match(QueryParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_or;
    return this;
}

OrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OrContext.prototype.constructor = OrContext;

OrContext.prototype.and = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AndContext);
    } else {
        return this.getTypedRuleContext(AndContext,i);
    }
};

OrContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

OrContext.prototype.OR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(QueryParser.OR);
    } else {
        return this.getToken(QueryParser.OR, i);
    }
};


OrContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterOr(this);
	}
};

OrContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitOr(this);
	}
};




QueryParser.OrContext = OrContext;

QueryParser.prototype.or = function() {

    var localctx = new OrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, QueryParser.RULE_or);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 55;
        this.and();
        this.state = 63;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===QueryParser.OR || _la===QueryParser.WS) {
            this.state = 56;
            this.ws();
            this.state = 57;
            this.match(QueryParser.OR);
            this.state = 58;
            this.ws();
            this.state = 59;
            this.and();
            this.state = 65;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_and;
    return this;
}

AndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AndContext.prototype.constructor = AndContext;

AndContext.prototype.not = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NotContext);
    } else {
        return this.getTypedRuleContext(NotContext,i);
    }
};

AndContext.prototype.primary = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PrimaryContext);
    } else {
        return this.getTypedRuleContext(PrimaryContext,i);
    }
};

AndContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

AndContext.prototype.AND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(QueryParser.AND);
    } else {
        return this.getToken(QueryParser.AND, i);
    }
};


AndContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterAnd(this);
	}
};

AndContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitAnd(this);
	}
};




QueryParser.AndContext = AndContext;

QueryParser.prototype.and = function() {

    var localctx = new AndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, QueryParser.RULE_and);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        switch(this._input.LA(1)) {
        case QueryParser.NOT:
            this.state = 66;
            this.not();
            break;
        case QueryParser.T__0:
        case QueryParser.T__2:
        case QueryParser.T__3:
        case QueryParser.T__4:
        case QueryParser.T__5:
        case QueryParser.T__6:
        case QueryParser.T__7:
        case QueryParser.T__8:
        case QueryParser.T__9:
        case QueryParser.TAGGED:
        case QueryParser.TRUE:
        case QueryParser.FALSE:
            this.state = 67;
            this.primary();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 79;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 70;
                this.ws();
                this.state = 71;
                this.match(QueryParser.AND);
                this.state = 72;
                this.ws();
                this.state = 75;
                switch(this._input.LA(1)) {
                case QueryParser.NOT:
                    this.state = 73;
                    this.not();
                    break;
                case QueryParser.T__0:
                case QueryParser.T__2:
                case QueryParser.T__3:
                case QueryParser.T__4:
                case QueryParser.T__5:
                case QueryParser.T__6:
                case QueryParser.T__7:
                case QueryParser.T__8:
                case QueryParser.T__9:
                case QueryParser.TAGGED:
                case QueryParser.TRUE:
                case QueryParser.FALSE:
                    this.state = 74;
                    this.primary();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                } 
            }
            this.state = 81;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NotContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_not;
    return this;
}

NotContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NotContext.prototype.constructor = NotContext;

NotContext.prototype.NOT = function() {
    return this.getToken(QueryParser.NOT, 0);
};

NotContext.prototype.ws = function() {
    return this.getTypedRuleContext(WsContext,0);
};

NotContext.prototype.not = function() {
    return this.getTypedRuleContext(NotContext,0);
};

NotContext.prototype.primary = function() {
    return this.getTypedRuleContext(PrimaryContext,0);
};

NotContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterNot(this);
	}
};

NotContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitNot(this);
	}
};




QueryParser.NotContext = NotContext;

QueryParser.prototype.not = function() {

    var localctx = new NotContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, QueryParser.RULE_not);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 82;
        this.match(QueryParser.NOT);
        this.state = 83;
        this.ws();
        this.state = 86;
        switch(this._input.LA(1)) {
        case QueryParser.NOT:
            this.state = 84;
            this.not();
            break;
        case QueryParser.T__0:
        case QueryParser.T__2:
        case QueryParser.T__3:
        case QueryParser.T__4:
        case QueryParser.T__5:
        case QueryParser.T__6:
        case QueryParser.T__7:
        case QueryParser.T__8:
        case QueryParser.T__9:
        case QueryParser.TAGGED:
        case QueryParser.TRUE:
        case QueryParser.FALSE:
            this.state = 85;
            this.primary();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PrimaryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_primary;
    return this;
}

PrimaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimaryContext.prototype.constructor = PrimaryContext;

PrimaryContext.prototype.or = function() {
    return this.getTypedRuleContext(OrContext,0);
};

PrimaryContext.prototype.simple = function() {
    return this.getTypedRuleContext(SimpleContext,0);
};

PrimaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterPrimary(this);
	}
};

PrimaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitPrimary(this);
	}
};




QueryParser.PrimaryContext = PrimaryContext;

QueryParser.prototype.primary = function() {

    var localctx = new PrimaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, QueryParser.RULE_primary);
    try {
        this.state = 93;
        switch(this._input.LA(1)) {
        case QueryParser.T__0:
            this.enterOuterAlt(localctx, 1);
            this.state = 88;
            this.match(QueryParser.T__0);
            this.state = 89;
            this.or();
            this.state = 90;
            this.match(QueryParser.T__1);
            break;
        case QueryParser.T__2:
        case QueryParser.T__3:
        case QueryParser.T__4:
        case QueryParser.T__5:
        case QueryParser.T__6:
        case QueryParser.T__7:
        case QueryParser.T__8:
        case QueryParser.T__9:
        case QueryParser.TAGGED:
        case QueryParser.TRUE:
        case QueryParser.FALSE:
            this.enterOuterAlt(localctx, 2);
            this.state = 92;
            this.simple();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SimpleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_simple;
    return this;
}

SimpleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleContext.prototype.constructor = SimpleContext;

SimpleContext.prototype.tagged = function() {
    return this.getTypedRuleContext(TaggedContext,0);
};

SimpleContext.prototype.equal = function() {
    return this.getTypedRuleContext(EqualContext,0);
};

SimpleContext.prototype.not_equal = function() {
    return this.getTypedRuleContext(Not_equalContext,0);
};

SimpleContext.prototype.lesser = function() {
    return this.getTypedRuleContext(LesserContext,0);
};

SimpleContext.prototype.greater = function() {
    return this.getTypedRuleContext(GreaterContext,0);
};

SimpleContext.prototype.lesser_equal = function() {
    return this.getTypedRuleContext(Lesser_equalContext,0);
};

SimpleContext.prototype.greater_equal = function() {
    return this.getTypedRuleContext(Greater_equalContext,0);
};

SimpleContext.prototype.like = function() {
    return this.getTypedRuleContext(LikeContext,0);
};

SimpleContext.prototype.regex_match = function() {
    return this.getTypedRuleContext(Regex_matchContext,0);
};

SimpleContext.prototype.v_boolean = function() {
    return this.getTypedRuleContext(V_booleanContext,0);
};

SimpleContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterSimple(this);
	}
};

SimpleContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitSimple(this);
	}
};




QueryParser.SimpleContext = SimpleContext;

QueryParser.prototype.simple = function() {

    var localctx = new SimpleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, QueryParser.RULE_simple);
    try {
        this.state = 105;
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 95;
            this.tagged();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 96;
            this.equal();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 97;
            this.not_equal();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 98;
            this.lesser();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 99;
            this.greater();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 100;
            this.lesser_equal();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 101;
            this.greater_equal();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 102;
            this.like();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 103;
            this.regex_match();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 104;
            this.v_boolean();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TaggedContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_tagged;
    return this;
}

TaggedContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TaggedContext.prototype.constructor = TaggedContext;

TaggedContext.prototype.TAGGED = function() {
    return this.getToken(QueryParser.TAGGED, 0);
};

TaggedContext.prototype.ws = function() {
    return this.getTypedRuleContext(WsContext,0);
};

TaggedContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

TaggedContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterTagged(this);
	}
};

TaggedContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitTagged(this);
	}
};




QueryParser.TaggedContext = TaggedContext;

QueryParser.prototype.tagged = function() {

    var localctx = new TaggedContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, QueryParser.RULE_tagged);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
        this.match(QueryParser.TAGGED);
        this.state = 108;
        this.ws();
        this.state = 109;
        this.string();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EqualContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_equal;
    return this;
}

EqualContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EqualContext.prototype.constructor = EqualContext;

EqualContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

EqualContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

EqualContext.prototype.EQUAL = function() {
    return this.getToken(QueryParser.EQUAL, 0);
};

EqualContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

EqualContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterEqual(this);
	}
};

EqualContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitEqual(this);
	}
};




QueryParser.EqualContext = EqualContext;

QueryParser.prototype.equal = function() {

    var localctx = new EqualContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, QueryParser.RULE_equal);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 111;
        this.field();
        this.state = 112;
        this.ws();
        this.state = 113;
        this.match(QueryParser.EQUAL);
        this.state = 114;
        this.ws();
        this.state = 115;
        this.value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Not_equalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_not_equal;
    return this;
}

Not_equalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Not_equalContext.prototype.constructor = Not_equalContext;

Not_equalContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

Not_equalContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

Not_equalContext.prototype.NOT_EQUAL = function() {
    return this.getToken(QueryParser.NOT_EQUAL, 0);
};

Not_equalContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

Not_equalContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterNot_equal(this);
	}
};

Not_equalContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitNot_equal(this);
	}
};




QueryParser.Not_equalContext = Not_equalContext;

QueryParser.prototype.not_equal = function() {

    var localctx = new Not_equalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, QueryParser.RULE_not_equal);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 117;
        this.field();
        this.state = 118;
        this.ws();
        this.state = 119;
        this.match(QueryParser.NOT_EQUAL);
        this.state = 120;
        this.ws();
        this.state = 121;
        this.value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LesserContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_lesser;
    return this;
}

LesserContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LesserContext.prototype.constructor = LesserContext;

LesserContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

LesserContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

LesserContext.prototype.LESSER = function() {
    return this.getToken(QueryParser.LESSER, 0);
};

LesserContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

LesserContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterLesser(this);
	}
};

LesserContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitLesser(this);
	}
};




QueryParser.LesserContext = LesserContext;

QueryParser.prototype.lesser = function() {

    var localctx = new LesserContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, QueryParser.RULE_lesser);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 123;
        this.field();
        this.state = 124;
        this.ws();
        this.state = 125;
        this.match(QueryParser.LESSER);
        this.state = 126;
        this.ws();
        this.state = 127;
        this.number();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GreaterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_greater;
    return this;
}

GreaterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GreaterContext.prototype.constructor = GreaterContext;

GreaterContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

GreaterContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

GreaterContext.prototype.GREATER = function() {
    return this.getToken(QueryParser.GREATER, 0);
};

GreaterContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

GreaterContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterGreater(this);
	}
};

GreaterContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitGreater(this);
	}
};




QueryParser.GreaterContext = GreaterContext;

QueryParser.prototype.greater = function() {

    var localctx = new GreaterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, QueryParser.RULE_greater);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        this.field();
        this.state = 130;
        this.ws();
        this.state = 131;
        this.match(QueryParser.GREATER);
        this.state = 132;
        this.ws();
        this.state = 133;
        this.number();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Lesser_equalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_lesser_equal;
    return this;
}

Lesser_equalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Lesser_equalContext.prototype.constructor = Lesser_equalContext;

Lesser_equalContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

Lesser_equalContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

Lesser_equalContext.prototype.LESSER_EQUAL = function() {
    return this.getToken(QueryParser.LESSER_EQUAL, 0);
};

Lesser_equalContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

Lesser_equalContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterLesser_equal(this);
	}
};

Lesser_equalContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitLesser_equal(this);
	}
};




QueryParser.Lesser_equalContext = Lesser_equalContext;

QueryParser.prototype.lesser_equal = function() {

    var localctx = new Lesser_equalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, QueryParser.RULE_lesser_equal);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
        this.field();
        this.state = 136;
        this.ws();
        this.state = 137;
        this.match(QueryParser.LESSER_EQUAL);
        this.state = 138;
        this.ws();
        this.state = 139;
        this.number();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Greater_equalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_greater_equal;
    return this;
}

Greater_equalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Greater_equalContext.prototype.constructor = Greater_equalContext;

Greater_equalContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

Greater_equalContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

Greater_equalContext.prototype.GREATER_EQUAL = function() {
    return this.getToken(QueryParser.GREATER_EQUAL, 0);
};

Greater_equalContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

Greater_equalContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterGreater_equal(this);
	}
};

Greater_equalContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitGreater_equal(this);
	}
};




QueryParser.Greater_equalContext = Greater_equalContext;

QueryParser.prototype.greater_equal = function() {

    var localctx = new Greater_equalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, QueryParser.RULE_greater_equal);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 141;
        this.field();
        this.state = 142;
        this.ws();
        this.state = 143;
        this.match(QueryParser.GREATER_EQUAL);
        this.state = 144;
        this.ws();
        this.state = 145;
        this.number();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LikeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_like;
    return this;
}

LikeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LikeContext.prototype.constructor = LikeContext;

LikeContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

LikeContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

LikeContext.prototype.APPROXIMATELY = function() {
    return this.getToken(QueryParser.APPROXIMATELY, 0);
};

LikeContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

LikeContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterLike(this);
	}
};

LikeContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitLike(this);
	}
};




QueryParser.LikeContext = LikeContext;

QueryParser.prototype.like = function() {

    var localctx = new LikeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, QueryParser.RULE_like);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 147;
        this.field();
        this.state = 148;
        this.ws();
        this.state = 149;
        this.match(QueryParser.APPROXIMATELY);
        this.state = 150;
        this.ws();
        this.state = 151;
        this.string();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Regex_matchContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_regex_match;
    return this;
}

Regex_matchContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Regex_matchContext.prototype.constructor = Regex_matchContext;

Regex_matchContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

Regex_matchContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

Regex_matchContext.prototype.REGEX_MATCH = function() {
    return this.getToken(QueryParser.REGEX_MATCH, 0);
};

Regex_matchContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

Regex_matchContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterRegex_match(this);
	}
};

Regex_matchContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitRegex_match(this);
	}
};




QueryParser.Regex_matchContext = Regex_matchContext;

QueryParser.prototype.regex_match = function() {

    var localctx = new Regex_matchContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, QueryParser.RULE_regex_match);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 153;
        this.field();
        this.state = 154;
        this.ws();
        this.state = 155;
        this.match(QueryParser.REGEX_MATCH);
        this.state = 156;
        this.ws();
        this.state = 157;
        this.string();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_ws;
    return this;
}

WsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WsContext.prototype.constructor = WsContext;

WsContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(QueryParser.WS);
    } else {
        return this.getToken(QueryParser.WS, i);
    }
};


WsContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterWs(this);
	}
};

WsContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitWs(this);
	}
};




QueryParser.WsContext = WsContext;

QueryParser.prototype.ws = function() {

    var localctx = new WsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, QueryParser.RULE_ws);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 162;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===QueryParser.WS) {
            this.state = 159;
            this.match(QueryParser.WS);
            this.state = 164;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_field;
    return this;
}

FieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldContext.prototype.constructor = FieldContext;


FieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterField(this);
	}
};

FieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitField(this);
	}
};




QueryParser.FieldContext = FieldContext;

QueryParser.prototype.field = function() {

    var localctx = new FieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, QueryParser.RULE_field);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 165;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << QueryParser.T__2) | (1 << QueryParser.T__3) | (1 << QueryParser.T__4) | (1 << QueryParser.T__5) | (1 << QueryParser.T__6) | (1 << QueryParser.T__7) | (1 << QueryParser.T__8) | (1 << QueryParser.T__9))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.v_boolean = function() {
    return this.getTypedRuleContext(V_booleanContext,0);
};

ValueContext.prototype.nil = function() {
    return this.getTypedRuleContext(NilContext,0);
};

ValueContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

ValueContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitValue(this);
	}
};




QueryParser.ValueContext = ValueContext;

QueryParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, QueryParser.RULE_value);
    try {
        this.state = 171;
        switch(this._input.LA(1)) {
        case QueryParser.TRUE:
        case QueryParser.FALSE:
            this.enterOuterAlt(localctx, 1);
            this.state = 167;
            this.v_boolean();
            break;
        case QueryParser.NIL:
            this.enterOuterAlt(localctx, 2);
            this.state = 168;
            this.nil();
            break;
        case QueryParser.FLOAT:
        case QueryParser.INT:
            this.enterOuterAlt(localctx, 3);
            this.state = 169;
            this.number();
            break;
        case QueryParser.STRING:
            this.enterOuterAlt(localctx, 4);
            this.state = 170;
            this.string();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_string;
    return this;
}

StringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringContext.prototype.constructor = StringContext;

StringContext.prototype.STRING = function() {
    return this.getToken(QueryParser.STRING, 0);
};

StringContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterString(this);
	}
};

StringContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitString(this);
	}
};




QueryParser.StringContext = StringContext;

QueryParser.prototype.string = function() {

    var localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, QueryParser.RULE_string);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 173;
        this.match(QueryParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function V_booleanContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_v_boolean;
    return this;
}

V_booleanContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
V_booleanContext.prototype.constructor = V_booleanContext;

V_booleanContext.prototype.v_true = function() {
    return this.getTypedRuleContext(V_trueContext,0);
};

V_booleanContext.prototype.v_false = function() {
    return this.getTypedRuleContext(V_falseContext,0);
};

V_booleanContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterV_boolean(this);
	}
};

V_booleanContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitV_boolean(this);
	}
};




QueryParser.V_booleanContext = V_booleanContext;

QueryParser.prototype.v_boolean = function() {

    var localctx = new V_booleanContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, QueryParser.RULE_v_boolean);
    try {
        this.state = 177;
        switch(this._input.LA(1)) {
        case QueryParser.TRUE:
            this.enterOuterAlt(localctx, 1);
            this.state = 175;
            this.v_true();
            break;
        case QueryParser.FALSE:
            this.enterOuterAlt(localctx, 2);
            this.state = 176;
            this.v_false();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function V_trueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_v_true;
    return this;
}

V_trueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
V_trueContext.prototype.constructor = V_trueContext;

V_trueContext.prototype.TRUE = function() {
    return this.getToken(QueryParser.TRUE, 0);
};

V_trueContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterV_true(this);
	}
};

V_trueContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitV_true(this);
	}
};




QueryParser.V_trueContext = V_trueContext;

QueryParser.prototype.v_true = function() {

    var localctx = new V_trueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, QueryParser.RULE_v_true);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 179;
        this.match(QueryParser.TRUE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function V_falseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_v_false;
    return this;
}

V_falseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
V_falseContext.prototype.constructor = V_falseContext;

V_falseContext.prototype.FALSE = function() {
    return this.getToken(QueryParser.FALSE, 0);
};

V_falseContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterV_false(this);
	}
};

V_falseContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitV_false(this);
	}
};




QueryParser.V_falseContext = V_falseContext;

QueryParser.prototype.v_false = function() {

    var localctx = new V_falseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, QueryParser.RULE_v_false);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 181;
        this.match(QueryParser.FALSE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NilContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_nil;
    return this;
}

NilContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NilContext.prototype.constructor = NilContext;

NilContext.prototype.NIL = function() {
    return this.getToken(QueryParser.NIL, 0);
};

NilContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterNil(this);
	}
};

NilContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitNil(this);
	}
};




QueryParser.NilContext = NilContext;

QueryParser.prototype.nil = function() {

    var localctx = new NilContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, QueryParser.RULE_nil);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 183;
        this.match(QueryParser.NIL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.v_float = function() {
    return this.getTypedRuleContext(V_floatContext,0);
};

NumberContext.prototype.v_int = function() {
    return this.getTypedRuleContext(V_intContext,0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitNumber(this);
	}
};




QueryParser.NumberContext = NumberContext;

QueryParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, QueryParser.RULE_number);
    try {
        this.state = 187;
        switch(this._input.LA(1)) {
        case QueryParser.FLOAT:
            this.enterOuterAlt(localctx, 1);
            this.state = 185;
            this.v_float();
            break;
        case QueryParser.INT:
            this.enterOuterAlt(localctx, 2);
            this.state = 186;
            this.v_int();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function V_floatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_v_float;
    return this;
}

V_floatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
V_floatContext.prototype.constructor = V_floatContext;

V_floatContext.prototype.FLOAT = function() {
    return this.getToken(QueryParser.FLOAT, 0);
};

V_floatContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterV_float(this);
	}
};

V_floatContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitV_float(this);
	}
};




QueryParser.V_floatContext = V_floatContext;

QueryParser.prototype.v_float = function() {

    var localctx = new V_floatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, QueryParser.RULE_v_float);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 189;
        this.match(QueryParser.FLOAT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function V_intContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_v_int;
    return this;
}

V_intContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
V_intContext.prototype.constructor = V_intContext;

V_intContext.prototype.INT = function() {
    return this.getToken(QueryParser.INT, 0);
};

V_intContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterV_int(this);
	}
};

V_intContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitV_int(this);
	}
};




QueryParser.V_intContext = V_intContext;

QueryParser.prototype.v_int = function() {

    var localctx = new V_intContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, QueryParser.RULE_v_int);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 191;
        this.match(QueryParser.INT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.QueryParser = QueryParser;
