grammar Query;

predicate : (or EOF) ;

or : and (ws OR ws and)* ;

and : (not | primary) (ws AND ws (not | primary))* ;

not : NOT ws (not | primary) ;

primary
  : '(' or ')'
  | simple
  ;

simple
  : tagged
  | equal
  | not_equal
  | lesser
  | greater
  | lesser_equal
  | greater_equal
  | like
  | regex_match
  | v_boolean
  ;

tagged        : TAGGED ws string ;
equal         : field ws EQUAL ws value ;
not_equal     : field ws NOT_EQUAL ws value ;
lesser        : field ws LESSER ws number ;
greater       : field ws GREATER ws number ;
lesser_equal  : field ws LESSER_EQUAL ws number ;
greater_equal : field ws GREATER_EQUAL ws number ;
like          : field ws APPROXIMATELY ws string ;
regex_match   : field ws REGEX_MATCH ws string ;

// Values -----------------------------------------------------------

ws : WS* ;

field
  : 'host'
  | 'service'
  | 'state'
  | 'description'
  | 'metric_f'
  | 'metric'
  | 'ttl'
  | 'time'
  ;

value
  : v_boolean
  | nil
  | number
  | string
  ;

string : STRING ;

v_boolean
  : v_true
  | v_false
  ;

v_true : TRUE ;
v_false : FALSE ;

nil : NIL ;

number
    : v_float
    | v_int
    ;

v_float : FLOAT;
v_int : INT;

// Lexers -------------------------------------------------------------

AND : 'and';
OR : 'or';
NOT : 'not';

APPROXIMATELY : '=~';
REGEX_MATCH : '~=';
NOT_EQUAL : '!=';
EQUAL : '=';
LESSER : '<';
LESSER_EQUAL : '<=';
GREATER : '>';
GREATER_EQUAL : '>=';
TAGGED : 'tagged';

STRING : '"' (ESCAPE_SEQUENCE | ~('\u0000'..'\u001f' | '\\' | '\"'))* '"' ;

fragment
ESCAPE_SEQUENCE : '\\' (UNICODE_ESCAPE |'b'|'t'|'n'|'f'|'r'|'\"'|'\\') ;

fragment
UNICODE_ESCAPE : 'u' HEX_DIGT HEX_DIGT HEX_DIGT HEX_DIGT ;

fragment
HEX_DIGT : '0'..'9' | 'A'..'F' | 'a'..'f' ;

FLOAT : '-'? ('0'..'9')+ ('.' ('0'..'9')*)? ;

INT : '-'? '0'..'9'+ ;

NIL : 'nil' | 'null' ;

TRUE : 'true' ;
FALSE : 'false' ;

// Whitespace

WS : [ \n\r\t\,] -> channel(HIDDEN) ;
