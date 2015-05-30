// Compiled by ClojureScript 0.0-3291 {:static-fns true, :optimize-constants true}
goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');

cljs.reader.PushbackReader = (function (){var obj14177 = {};
return obj14177;
})();

/**
 * Returns the next char from the Reader,
 * nil if the end of stream has been reached
 */
cljs.reader.read_char = (function cljs$reader$read_char(reader){
if((function (){var and__4297__auto__ = reader;
if(and__4297__auto__){
return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else {
return and__4297__auto__;
}
})()){
return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else {
var x__4945__auto__ = (((reader == null))?null:reader);
return (function (){var or__4309__auto__ = (cljs.reader.read_char[(function (){var G__14181 = x__4945__auto__;
return goog.typeOf(G__14181);
})()]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.reader.read_char["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol("PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});

/**
 * Push back a single character on to the stream
 */
cljs.reader.unread = (function cljs$reader$unread(reader,ch){
if((function (){var and__4297__auto__ = reader;
if(and__4297__auto__){
return reader.cljs$reader$PushbackReader$unread$arity$2;
} else {
return and__4297__auto__;
}
})()){
return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else {
var x__4945__auto__ = (((reader == null))?null:reader);
return (function (){var or__4309__auto__ = (cljs.reader.unread[(function (){var G__14185 = x__4945__auto__;
return goog.typeOf(G__14185);
})()]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.reader.unread["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol("PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});


/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,buffer,idx){
this.s = s;
this.buffer = buffer;
this.idx = idx;
})
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;

cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var self__ = this;
var reader__$1 = this;
if((self__.buffer.length === (0))){
self__.idx = (self__.idx + (1));

return (self__.s[self__.idx]);
} else {
return self__.buffer.pop();
}
});

cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var self__ = this;
var reader__$1 = this;
return self__.buffer.push(ch);
});

cljs.reader.StringPushbackReader.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null);
});

cljs.reader.StringPushbackReader.cljs$lang$type = true;

cljs.reader.StringPushbackReader.cljs$lang$ctorStr = "cljs.reader/StringPushbackReader";

cljs.reader.StringPushbackReader.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write(writer__4889__auto__,"cljs.reader/StringPushbackReader");
});

cljs.reader.__GT_StringPushbackReader = (function cljs$reader$__GT_StringPushbackReader(s,buffer,idx){
return (new cljs.reader.StringPushbackReader(s,buffer,idx));
});

cljs.reader.push_back_reader = (function cljs$reader$push_back_reader(s){

return (new cljs.reader.StringPushbackReader(s,[],(-1)));
});
/**
 * Checks whether a given character is whitespace
 */
cljs.reader.whitespace_QMARK_ = (function cljs$reader$whitespace_QMARK_(ch){
var or__4309__auto__ = (function (){var G__14189 = ch;
return goog.string.isBreakingWhitespace(G__14189);
})();
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return ("," === ch);
}
});
/**
 * Checks whether a given character is numeric
 */
cljs.reader.numeric_QMARK_ = (function cljs$reader$numeric_QMARK_(ch){
var G__14191 = ch;
return goog.string.isNumeric(G__14191);
});
/**
 * Checks whether the character begins a comment.
 */
cljs.reader.comment_prefix_QMARK_ = (function cljs$reader$comment_prefix_QMARK_(ch){
return (";" === ch);
});
/**
 * Checks whether the reader is at the start of a number literal
 */
cljs.reader.number_literal_QMARK_ = (function cljs$reader$number_literal_QMARK_(reader,initch){
return (cljs.reader.numeric_QMARK_(initch)) || (((("+" === initch)) || (("-" === initch))) && (cljs.reader.numeric_QMARK_((function (){var next_ch = cljs.reader.read_char(reader);
cljs.reader.unread(reader,next_ch);

return next_ch;
})())));
});


cljs.reader.reader_error = (function cljs$reader$reader_error(){
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,msg){
throw (new Error(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg)));
});

cljs.reader.reader_error.cljs$lang$maxFixedArity = (1);

cljs.reader.reader_error.cljs$lang$applyTo = (function (seq14192){
var G__14193 = cljs.core.first(seq14192);
var seq14192__$1 = cljs.core.next(seq14192);
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(G__14193,seq14192__$1);
});
cljs.reader.macro_terminating_QMARK_ = (function cljs$reader$macro_terminating_QMARK_(ch){
var and__4297__auto__ = !((ch === "#"));
if(and__4297__auto__){
var and__4297__auto____$1 = !((ch === "'"));
if(and__4297__auto____$1){
var and__4297__auto____$2 = !((ch === ":"));
if(and__4297__auto____$2){
var G__14201 = ch;
return (cljs.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(G__14201) : cljs.reader.macros.call(null,G__14201));
} else {
return and__4297__auto____$2;
}
} else {
return and__4297__auto____$1;
}
} else {
return and__4297__auto__;
}
});
cljs.reader.read_token = (function cljs$reader$read_token(rdr,initch){
var sb = (new goog.string.StringBuffer(initch));
var ch = cljs.reader.read_char(rdr);
while(true){
if(((ch == null)) || (cljs.reader.whitespace_QMARK_(ch)) || (cljs.reader.macro_terminating_QMARK_(ch))){
cljs.reader.unread(rdr,ch);

return sb.toString();
} else {
var G__14202 = (function (){
sb.append(ch);

return sb;
})()
;
var G__14203 = cljs.reader.read_char(rdr);
sb = G__14202;
ch = G__14203;
continue;
}
break;
}
});
/**
 * Advances the reader to the end of a line. Returns the reader
 */
cljs.reader.skip_line = (function cljs$reader$skip_line(reader,_){
while(true){
var ch = cljs.reader.read_char(reader);
if(((ch === "\n")) || ((ch === "\r")) || ((ch == null))){
return reader;
} else {
continue;
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern("^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$");
cljs.reader.ratio_pattern = cljs.core.re_pattern("^([-+]?[0-9]+)/([0-9]+)$");
cljs.reader.float_pattern = cljs.core.re_pattern("^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$");
cljs.reader.symbol_pattern = cljs.core.re_pattern("^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");
cljs.reader.re_matches_STAR_ = (function cljs$reader$re_matches_STAR_(re,s){
var matches = re.exec(s);
if((!((matches == null))) && (((matches[(0)]) === s))){
if((matches.length === (1))){
return (matches[(0)]);
} else {
return matches;
}
} else {
return null;
}
});
cljs.reader.match_int = (function cljs$reader$match_int(s){
var groups = cljs.reader.re_matches_STAR_(cljs.reader.int_pattern,s);
var ie8_fix = (groups[(2)]);
var zero = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ie8_fix,""))?null:ie8_fix);
if(!((zero == null))){
return (0);
} else {
var a = (cljs.core.truth_((groups[(3)]))?[(groups[(3)]),(10)]:(cljs.core.truth_((groups[(4)]))?[(groups[(4)]),(16)]:(cljs.core.truth_((groups[(5)]))?[(groups[(5)]),(8)]:(cljs.core.truth_((groups[(6)]))?[(groups[(7)]),(function (){var G__14208 = (groups[(6)]);
var G__14209 = (10);
return parseInt(G__14208,G__14209);
})()]:[null,null]
))));
var n = (a[(0)]);
var radix = (a[(1)]);
if((n == null)){
return null;
} else {
var parsed = (function (){var G__14210 = n;
var G__14211 = radix;
return parseInt(G__14210,G__14211);
})();
if(("-" === (groups[(1)]))){
return (- parsed);
} else {
return parsed;
}
}
}
});
cljs.reader.match_ratio = (function cljs$reader$match_ratio(s){
var groups = cljs.reader.re_matches_STAR_(cljs.reader.ratio_pattern,s);
var numinator = (groups[(1)]);
var denominator = (groups[(2)]);
return ((function (){var G__14216 = numinator;
var G__14217 = (10);
return parseInt(G__14216,G__14217);
})() / (function (){var G__14218 = denominator;
var G__14219 = (10);
return parseInt(G__14218,G__14219);
})());
});
cljs.reader.match_float = (function cljs$reader$match_float(s){
var G__14221 = s;
return parseFloat(G__14221);
});
cljs.reader.match_number = (function cljs$reader$match_number(s){
if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.int_pattern,s))){
return cljs.reader.match_int(s);
} else {
if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.ratio_pattern,s))){
return cljs.reader.match_ratio(s);
} else {
if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.float_pattern,s))){
return cljs.reader.match_float(s);
} else {
return null;
}
}
}
});
cljs.reader.escape_char_map = (function cljs$reader$escape_char_map(c){
if((c === "t")){
return "\t";
} else {
if((c === "r")){
return "\r";
} else {
if((c === "n")){
return "\n";
} else {
if((c === "\\")){
return "\\";
} else {
if((c === "\"")){
return "\"";
} else {
if((c === "b")){
return "\b";
} else {
if((c === "f")){
return "\f";
} else {
return null;

}
}
}
}
}
}
}
});
cljs.reader.read_2_chars = (function cljs$reader$read_2_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char(reader),cljs.reader.read_char(reader))).toString();
});
cljs.reader.read_4_chars = (function cljs$reader$read_4_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char(reader),cljs.reader.read_char(reader),cljs.reader.read_char(reader),cljs.reader.read_char(reader))).toString();
});
cljs.reader.unicode_2_pattern = cljs.core.re_pattern("^[0-9A-Fa-f]{2}$");
cljs.reader.unicode_4_pattern = cljs.core.re_pattern("^[0-9A-Fa-f]{4}$");
cljs.reader.validate_unicode_escape = (function cljs$reader$validate_unicode_escape(unicode_pattern,reader,escape_char,unicode_str){
if(cljs.core.truth_(cljs.core.re_matches(unicode_pattern,unicode_str))){
return unicode_str;
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Unexpected unicode escape \\",escape_char,unicode_str], 0));
}
});
cljs.reader.make_unicode_char = (function cljs$reader$make_unicode_char(code_str){
var code = (function (){var G__14224 = code_str;
var G__14225 = (16);
return parseInt(G__14224,G__14225);
})();
return String.fromCharCode(code);
});
cljs.reader.escape_char = (function cljs$reader$escape_char(buffer,reader){
var ch = cljs.reader.read_char(reader);
var mapresult = cljs.reader.escape_char_map(ch);
if(cljs.core.truth_(mapresult)){
return mapresult;
} else {
if((ch === "x")){
return cljs.reader.make_unicode_char(cljs.reader.validate_unicode_escape(cljs.reader.unicode_2_pattern,reader,ch,cljs.reader.read_2_chars(reader)));
} else {
if((ch === "u")){
return cljs.reader.make_unicode_char(cljs.reader.validate_unicode_escape(cljs.reader.unicode_4_pattern,reader,ch,cljs.reader.read_4_chars(reader)));
} else {
if(cljs.reader.numeric_QMARK_(ch)){
return String.fromCharCode(ch);
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Unexpected unicode escape \\",ch], 0));

}
}
}
}
});
/**
 * Read until first character that doesn't match pred, returning
 * char.
 */
cljs.reader.read_past = (function cljs$reader$read_past(pred,rdr){
var ch = cljs.reader.read_char(rdr);
while(true){
if(cljs.core.truth_((function (){var G__14227 = ch;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__14227) : pred.call(null,G__14227));
})())){
var G__14228 = cljs.reader.read_char(rdr);
ch = G__14228;
continue;
} else {
return ch;
}
break;
}
});
cljs.reader.read_delimited_list = (function cljs$reader$read_delimited_list(delim,rdr,recursive_QMARK_){
var a = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var ch = cljs.reader.read_past(cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch)){
} else {
cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["EOF while reading"], 0));
}

if((delim === ch)){
return cljs.core.persistent_BANG_(a);
} else {
var temp__4421__auto__ = (function (){var G__14236 = ch;
return (cljs.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(G__14236) : cljs.reader.macros.call(null,G__14236));
})();
if(cljs.core.truth_(temp__4421__auto__)){
var macrofn = temp__4421__auto__;
var mret = (function (){var G__14237 = rdr;
var G__14238 = ch;
return (macrofn.cljs$core$IFn$_invoke$arity$2 ? macrofn.cljs$core$IFn$_invoke$arity$2(G__14237,G__14238) : macrofn.call(null,G__14237,G__14238));
})();
var G__14243 = (((mret === rdr))?a:cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,mret));
a = G__14243;
continue;
} else {
cljs.reader.unread(rdr,ch);

var o = (function (){var G__14239 = rdr;
var G__14240 = true;
var G__14241 = null;
var G__14242 = recursive_QMARK_;
return (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__14239,G__14240,G__14241,G__14242) : cljs.reader.read.call(null,G__14239,G__14240,G__14241,G__14242));
})();
var G__14244 = (((o === rdr))?a:cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,o));
a = G__14244;
continue;
}
}
break;
}
});
cljs.reader.not_implemented = (function cljs$reader$not_implemented(rdr,ch){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Reader for ",ch," not implemented yet"], 0));
});
cljs.reader.read_dispatch = (function cljs$reader$read_dispatch(rdr,_){
var ch = cljs.reader.read_char(rdr);
var dm = (function (){var G__14250 = ch;
return (cljs.reader.dispatch_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.dispatch_macros.cljs$core$IFn$_invoke$arity$1(G__14250) : cljs.reader.dispatch_macros.call(null,G__14250));
})();
if(cljs.core.truth_(dm)){
var G__14251 = rdr;
var G__14252 = _;
return (dm.cljs$core$IFn$_invoke$arity$2 ? dm.cljs$core$IFn$_invoke$arity$2(G__14251,G__14252) : dm.call(null,G__14251,G__14252));
} else {
var temp__4421__auto__ = (function (){var G__14253 = rdr;
var G__14254 = ch;
return (cljs.reader.maybe_read_tagged_type.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.maybe_read_tagged_type.cljs$core$IFn$_invoke$arity$2(G__14253,G__14254) : cljs.reader.maybe_read_tagged_type.call(null,G__14253,G__14254));
})();
if(cljs.core.truth_(temp__4421__auto__)){
var obj = temp__4421__auto__;
return obj;
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["No dispatch macro for ",ch], 0));
}
}
});
cljs.reader.read_unmatched_delimiter = (function cljs$reader$read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Unmatched delimiter ",ch], 0));
});
cljs.reader.read_list = (function cljs$reader$read_list(rdr,_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.reader.read_delimited_list(")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function cljs$reader$read_vector(rdr,_){
return cljs.reader.read_delimited_list("]",rdr,true);
});
cljs.reader.read_map = (function cljs$reader$read_map(rdr,_){
var l = cljs.reader.read_delimited_list("}",rdr,true);
if(cljs.core.odd_QMARK_(cljs.core.count(l))){
cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Map literal must contain an even number of forms"], 0));
} else {
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,l);
});
cljs.reader.read_number = (function cljs$reader$read_number(reader,initch){
var buffer = (new goog.string.StringBuffer(initch));
var ch = cljs.reader.read_char(reader);
while(true){
if(cljs.core.truth_((function (){var or__4309__auto__ = (ch == null);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = cljs.reader.whitespace_QMARK_(ch);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
var G__14260 = ch;
return (cljs.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(G__14260) : cljs.reader.macros.call(null,G__14260));
}
}
})())){
cljs.reader.unread(reader,ch);

var s = buffer.toString();
var or__4309__auto__ = cljs.reader.match_number(s);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Invalid number format [",s,"]"], 0));
}
} else {
var G__14261 = (function (){
buffer.append(ch);

return buffer;
})()
;
var G__14262 = cljs.reader.read_char(reader);
buffer = G__14261;
ch = G__14262;
continue;
}
break;
}
});
cljs.reader.read_string_STAR_ = (function cljs$reader$read_string_STAR_(reader,_){
var buffer = (new goog.string.StringBuffer());
var ch = cljs.reader.read_char(reader);
while(true){
if((ch == null)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else {
if(("\\" === ch)){
var G__14263 = (function (){
buffer.append(cljs.reader.escape_char(buffer,reader));

return buffer;
})()
;
var G__14264 = cljs.reader.read_char(reader);
buffer = G__14263;
ch = G__14264;
continue;
} else {
if(("\"" === ch)){
return buffer.toString();
} else {
var G__14265 = (function (){
buffer.append(ch);

return buffer;
})()
;
var G__14266 = cljs.reader.read_char(reader);
buffer = G__14265;
ch = G__14266;
continue;

}
}
}
break;
}
});
cljs.reader.read_raw_string_STAR_ = (function cljs$reader$read_raw_string_STAR_(reader,_){
var buffer = (new goog.string.StringBuffer());
var ch = cljs.reader.read_char(reader);
while(true){
if((ch == null)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else {
if(("\\" === ch)){
buffer.append(ch);

var nch = cljs.reader.read_char(reader);
if((nch == null)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else {
var G__14271 = (function (){var G__14269 = buffer;
G__14269.append(nch);

return G__14269;
})();
var G__14272 = cljs.reader.read_char(reader);
buffer = G__14271;
ch = G__14272;
continue;
}
} else {
if(("\"" === ch)){
return buffer.toString();
} else {
var G__14273 = (function (){var G__14270 = buffer;
G__14270.append(ch);

return G__14270;
})();
var G__14274 = cljs.reader.read_char(reader);
buffer = G__14273;
ch = G__14274;
continue;

}
}
}
break;
}
});
cljs.reader.special_symbols = (function cljs$reader$special_symbols(t,not_found){
if((t === "nil")){
return null;
} else {
if((t === "true")){
return true;
} else {
if((t === "false")){
return false;
} else {
if((t === "/")){
return new cljs.core.Symbol(null,"/","/",-1371932971,null);
} else {
return not_found;

}
}
}
}
});
cljs.reader.read_symbol = (function cljs$reader$read_symbol(reader,initch){
var token = cljs.reader.read_token(reader,initch);
if(cljs.core.truth_((function (){var and__4297__auto__ = (function (){var G__14281 = token;
var G__14282 = "/";
return goog.string.contains(G__14281,G__14282);
})();
if(cljs.core.truth_(and__4297__auto__)){
return !((token.length === (1)));
} else {
return and__4297__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,(0),token.indexOf("/")),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,(token.indexOf("/") + (1)),token.length));
} else {
return cljs.reader.special_symbols(token,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(token));
}
});
cljs.reader.read_keyword = (function cljs$reader$read_keyword(reader,initch){
var token = cljs.reader.read_token(reader,cljs.reader.read_char(reader));
var a = cljs.reader.re_matches_STAR_(cljs.reader.symbol_pattern,token);
var token__$1 = (a[(0)]);
var ns = (a[(1)]);
var name = (a[(2)]);
if(((!((void 0 === ns))) && ((ns.substring((ns.length - (2)),ns.length) === ":/"))) || (((name[(name.length - (1))]) === ":")) || (!((token__$1.indexOf("::",(1)) === (-1))))){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Invalid token: ",token__$1], 0));
} else {
if((!((ns == null))) && ((ns.length > (0)))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns.substring((0),ns.indexOf("/")),name);
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token__$1);
}
}
});
cljs.reader.desugar_meta = (function cljs$reader$desugar_meta(f){
if((f instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$tag,f], null);
} else {
if(typeof f === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$tag,f], null);
} else {
if((f instanceof cljs.core.Keyword)){
return new cljs.core.PersistentArrayMap.fromArray([f,true], true, false);
} else {
return f;

}
}
}
});
cljs.reader.wrapping_reader = (function cljs$reader$wrapping_reader(sym){
return (function (rdr,_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__14287 = rdr;
var G__14288 = true;
var G__14289 = null;
var G__14290 = true;
return (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__14287,G__14288,G__14289,G__14290) : cljs.reader.read.call(null,G__14287,G__14288,G__14289,G__14290));
})()),sym);
});
});
cljs.reader.throwing_reader = (function cljs$reader$throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq([msg], 0));
});
});
cljs.reader.read_meta = (function cljs$reader$read_meta(rdr,_){
var m = cljs.reader.desugar_meta((function (){var G__14300 = rdr;
var G__14301 = true;
var G__14302 = null;
var G__14303 = true;
return (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__14300,G__14301,G__14302,G__14303) : cljs.reader.read.call(null,G__14300,G__14301,G__14302,G__14303));
})());
if(cljs.core.map_QMARK_(m)){
} else {
cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Metadata must be Symbol,Keyword,String or Map"], 0));
}

var o = (function (){var G__14304 = rdr;
var G__14305 = true;
var G__14306 = null;
var G__14307 = true;
return (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__14304,G__14305,G__14306,G__14307) : cljs.reader.read.call(null,G__14304,G__14305,G__14306,G__14307));
})();
if((function (){var G__14308 = o;
if(G__14308){
var bit__4983__auto__ = (G__14308.cljs$lang$protocol_mask$partition0$ & (262144));
if((bit__4983__auto__) || (G__14308.cljs$core$IWithMeta$)){
return true;
} else {
if((!G__14308.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__14308);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__14308);
}
})()){
return cljs.core.with_meta(o,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.meta(o),m], 0)));
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Metadata can only be applied to IWithMetas"], 0));
}
});
cljs.reader.read_set = (function cljs$reader$read_set(rdr,_){
return cljs.core.set(cljs.reader.read_delimited_list("}",rdr,true));
});
cljs.reader.read_regex = (function cljs$reader$read_regex(rdr,ch){
return cljs.core.re_pattern(cljs.reader.read_raw_string_STAR_(rdr,ch));
});
cljs.reader.read_discard = (function cljs$reader$read_discard(rdr,_){
var G__14313_14317 = rdr;
var G__14314_14318 = true;
var G__14315_14319 = null;
var G__14316_14320 = true;
(cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__14313_14317,G__14314_14318,G__14315_14319,G__14316_14320) : cljs.reader.read.call(null,G__14313_14317,G__14314_14318,G__14315_14319,G__14316_14320));

return rdr;
});
cljs.reader.macros = (function cljs$reader$macros(c){
if((c === "\"")){
return cljs.reader.read_string_STAR_;
} else {
if((c === ":")){
return cljs.reader.read_keyword;
} else {
if((c === ";")){
return cljs.reader.read_comment;
} else {
if((c === "'")){
return cljs.reader.wrapping_reader(new cljs.core.Symbol(null,"quote","quote",1377916282,null));
} else {
if((c === "@")){
return cljs.reader.wrapping_reader(new cljs.core.Symbol(null,"deref","deref",1494944732,null));
} else {
if((c === "^")){
return cljs.reader.read_meta;
} else {
if((c === "`")){
return cljs.reader.not_implemented;
} else {
if((c === "~")){
return cljs.reader.not_implemented;
} else {
if((c === "(")){
return cljs.reader.read_list;
} else {
if((c === ")")){
return cljs.reader.read_unmatched_delimiter;
} else {
if((c === "[")){
return cljs.reader.read_vector;
} else {
if((c === "]")){
return cljs.reader.read_unmatched_delimiter;
} else {
if((c === "{")){
return cljs.reader.read_map;
} else {
if((c === "}")){
return cljs.reader.read_unmatched_delimiter;
} else {
if((c === "\\")){
return cljs.reader.read_char;
} else {
if((c === "#")){
return cljs.reader.read_dispatch;
} else {
return null;

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
cljs.reader.dispatch_macros = (function cljs$reader$dispatch_macros(s){
if((s === "{")){
return cljs.reader.read_set;
} else {
if((s === "<")){
return cljs.reader.throwing_reader("Unreadable form");
} else {
if((s === "\"")){
return cljs.reader.read_regex;
} else {
if((s === "!")){
return cljs.reader.read_comment;
} else {
if((s === "_")){
return cljs.reader.read_discard;
} else {
return null;

}
}
}
}
}
});
/**
 * Reads the first object from a PushbackReader. Returns the object read.
 * If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
 */
cljs.reader.read = (function cljs$reader$read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch = cljs.reader.read_char(reader);
if((ch == null)){
if(cljs.core.truth_(eof_is_error)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else {
return sentinel;
}
} else {
if(cljs.reader.whitespace_QMARK_(ch)){
var G__14329 = reader;
var G__14330 = eof_is_error;
var G__14331 = sentinel;
var G__14332 = is_recursive;
reader = G__14329;
eof_is_error = G__14330;
sentinel = G__14331;
is_recursive = G__14332;
continue;
} else {
if(cljs.reader.comment_prefix_QMARK_(ch)){
var G__14333 = (function (){var G__14325 = reader;
var G__14326 = ch;
return (cljs.reader.read_comment.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.read_comment.cljs$core$IFn$_invoke$arity$2(G__14325,G__14326) : cljs.reader.read_comment.call(null,G__14325,G__14326));
})();
var G__14334 = eof_is_error;
var G__14335 = sentinel;
var G__14336 = is_recursive;
reader = G__14333;
eof_is_error = G__14334;
sentinel = G__14335;
is_recursive = G__14336;
continue;
} else {
var f = cljs.reader.macros(ch);
var res = (cljs.core.truth_(f)?(function (){var G__14327 = reader;
var G__14328 = ch;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14327,G__14328) : f.call(null,G__14327,G__14328));
})():((cljs.reader.number_literal_QMARK_(reader,ch))?cljs.reader.read_number(reader,ch):cljs.reader.read_symbol(reader,ch)
));
if((res === reader)){
var G__14337 = reader;
var G__14338 = eof_is_error;
var G__14339 = sentinel;
var G__14340 = is_recursive;
reader = G__14337;
eof_is_error = G__14338;
sentinel = G__14339;
is_recursive = G__14340;
continue;
} else {
return res;
}

}
}
}
break;
}
});
/**
 * Reads one object from the string s
 */
cljs.reader.read_string = (function cljs$reader$read_string(s){
var r = cljs.reader.push_back_reader(s);
return cljs.reader.read(r,false,null,false);
});
cljs.reader.zero_fill_right_and_truncate = (function cljs$reader$zero_fill_right_and_truncate(s,width){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width,cljs.core.count(s))){
return s;
} else {
if((width < cljs.core.count(s))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),width);
} else {
var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width)){
var G__14341 = b.append("0");
b = G__14341;
continue;
} else {
return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function cljs$reader$divisible_QMARK_(num,div){
return (cljs.core.mod(num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function cljs$reader$indivisible_QMARK_(num,div){
return cljs.core.not(cljs.reader.divisible_QMARK_(num,div));
});
cljs.reader.leap_year_QMARK_ = (function cljs$reader$leap_year_QMARK_(year){
var and__4297__auto__ = cljs.reader.divisible_QMARK_(year,(4));
if(cljs.core.truth_(and__4297__auto__)){
var or__4309__auto__ = cljs.reader.indivisible_QMARK_(year,(100));
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cljs.reader.divisible_QMARK_(year,(400));
}
} else {
return and__4297__auto__;
}
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
return ((function (dim_norm,dim_leap){
return (function (month,leap_year_QMARK_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
;})(dim_norm,dim_leap))
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function cljs$reader$parse_int(s){
var n = (function (){var G__14345 = s;
var G__14346 = (10);
return parseInt(G__14345,G__14346);
})();
if(cljs.core.not((function (){var G__14347 = n;
return isNaN(G__14347);
})())){
return n;
} else {
return null;
}
});
cljs.reader.check = (function cljs$reader$check(low,n,high,msg){
if(((low <= n)) && ((n <= high))){
} else {
cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')], 0));
}

return n;
});
cljs.reader.parse_and_validate_timestamp = (function cljs$reader$parse_and_validate_timestamp(s){
var vec__14351 = cljs.core.re_matches(cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14351,(0),null);
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14351,(1),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14351,(2),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14351,(3),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14351,(4),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14351,(5),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14351,(6),null);
var fraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14351,(7),null);
var offset_sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14351,(8),null);
var offset_hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14351,(9),null);
var offset_minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14351,(10),null);
var v = vec__14351;
if(cljs.core.not(v)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(s)].join('')], 0));
} else {
var years__$1 = cljs.reader.parse_int(years);
var months__$1 = (function (){var or__4309__auto__ = cljs.reader.parse_int(months);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__4309__auto__ = cljs.reader.parse_int(days);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__4309__auto__ = cljs.reader.parse_int(hours);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__4309__auto__ = cljs.reader.parse_int(minutes);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__4309__auto__ = cljs.reader.parse_int(seconds);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__4309__auto__ = cljs.reader.parse_int(cljs.reader.zero_fill_right_and_truncate(fraction,(3)));
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__4309__auto__ = cljs.reader.parse_int(offset_hours);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__4309__auto__ = cljs.reader.parse_int(offset_minutes);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return (0);
}
})();
var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check((1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check((1),days__$1,(function (){var G__14352 = months__$1;
var G__14353 = cljs.reader.leap_year_QMARK_(years__$1);
return (cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2(G__14352,G__14353) : cljs.reader.days_in_month.call(null,G__14352,G__14353));
})(),"timestamp day field must be in range 1..last day in month"),cljs.reader.check((0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check((0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check((0),seconds__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check((0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function cljs$reader$parse_timestamp(ts){
var temp__4421__auto__ = cljs.reader.parse_and_validate_timestamp(ts);
if(cljs.core.truth_(temp__4421__auto__)){
var vec__14355 = temp__4421__auto__;
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14355,(0),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14355,(1),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14355,(2),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14355,(3),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14355,(4),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14355,(5),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14355,(6),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14355,(7),null);
return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(ts)].join('')], 0));
}
});
cljs.reader.read_date = (function cljs$reader$read_date(s){
if(typeof s === 'string'){
return cljs.reader.parse_timestamp(s);
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Instance literal expects a string for its timestamp."], 0));
}
});
cljs.reader.read_queue = (function cljs$reader$read_queue(elems){
if(cljs.core.vector_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,elems);
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Queue literal expects a vector for its elements."], 0));
}
});
cljs.reader.read_js = (function cljs$reader$read_js(form){
if(cljs.core.vector_QMARK_(form)){
var arr = [];
var seq__14368_14380 = cljs.core.seq(form);
var chunk__14369_14381 = null;
var count__14370_14382 = (0);
var i__14371_14383 = (0);
while(true){
if((i__14371_14383 < count__14370_14382)){
var x_14384 = chunk__14369_14381.cljs$core$IIndexed$_nth$arity$2(null,i__14371_14383);
arr.push(x_14384);

var G__14385 = seq__14368_14380;
var G__14386 = chunk__14369_14381;
var G__14387 = count__14370_14382;
var G__14388 = (i__14371_14383 + (1));
seq__14368_14380 = G__14385;
chunk__14369_14381 = G__14386;
count__14370_14382 = G__14387;
i__14371_14383 = G__14388;
continue;
} else {
var temp__4423__auto___14389 = cljs.core.seq(seq__14368_14380);
if(temp__4423__auto___14389){
var seq__14368_14390__$1 = temp__4423__auto___14389;
if(cljs.core.chunked_seq_QMARK_(seq__14368_14390__$1)){
var c__5094__auto___14391 = cljs.core.chunk_first(seq__14368_14390__$1);
var G__14392 = cljs.core.chunk_rest(seq__14368_14390__$1);
var G__14393 = c__5094__auto___14391;
var G__14394 = cljs.core.count(c__5094__auto___14391);
var G__14395 = (0);
seq__14368_14380 = G__14392;
chunk__14369_14381 = G__14393;
count__14370_14382 = G__14394;
i__14371_14383 = G__14395;
continue;
} else {
var x_14396 = cljs.core.first(seq__14368_14390__$1);
arr.push(x_14396);

var G__14397 = cljs.core.next(seq__14368_14390__$1);
var G__14398 = null;
var G__14399 = (0);
var G__14400 = (0);
seq__14368_14380 = G__14397;
chunk__14369_14381 = G__14398;
count__14370_14382 = G__14399;
i__14371_14383 = G__14400;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
if(cljs.core.map_QMARK_(form)){
var obj = (function (){var obj14373 = {};
return obj14373;
})();
var seq__14374_14401 = cljs.core.seq(form);
var chunk__14375_14402 = null;
var count__14376_14403 = (0);
var i__14377_14404 = (0);
while(true){
if((i__14377_14404 < count__14376_14403)){
var vec__14378_14405 = chunk__14375_14402.cljs$core$IIndexed$_nth$arity$2(null,i__14377_14404);
var k_14406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14378_14405,(0),null);
var v_14407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14378_14405,(1),null);
(obj[cljs.core.name(k_14406)] = v_14407);

var G__14408 = seq__14374_14401;
var G__14409 = chunk__14375_14402;
var G__14410 = count__14376_14403;
var G__14411 = (i__14377_14404 + (1));
seq__14374_14401 = G__14408;
chunk__14375_14402 = G__14409;
count__14376_14403 = G__14410;
i__14377_14404 = G__14411;
continue;
} else {
var temp__4423__auto___14412 = cljs.core.seq(seq__14374_14401);
if(temp__4423__auto___14412){
var seq__14374_14413__$1 = temp__4423__auto___14412;
if(cljs.core.chunked_seq_QMARK_(seq__14374_14413__$1)){
var c__5094__auto___14414 = cljs.core.chunk_first(seq__14374_14413__$1);
var G__14415 = cljs.core.chunk_rest(seq__14374_14413__$1);
var G__14416 = c__5094__auto___14414;
var G__14417 = cljs.core.count(c__5094__auto___14414);
var G__14418 = (0);
seq__14374_14401 = G__14415;
chunk__14375_14402 = G__14416;
count__14376_14403 = G__14417;
i__14377_14404 = G__14418;
continue;
} else {
var vec__14379_14419 = cljs.core.first(seq__14374_14413__$1);
var k_14420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14379_14419,(0),null);
var v_14421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14379_14419,(1),null);
(obj[cljs.core.name(k_14420)] = v_14421);

var G__14422 = cljs.core.next(seq__14374_14413__$1);
var G__14423 = null;
var G__14424 = (0);
var G__14425 = (0);
seq__14374_14401 = G__14422;
chunk__14375_14402 = G__14423;
count__14376_14403 = G__14424;
i__14377_14404 = G__14425;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str("JS literal expects a vector or map containing "),cljs.core.str("only string or unqualified keyword keys")].join('')], 0));

}
}
});
cljs.reader.read_uuid = (function cljs$reader$read_uuid(uuid){
if(typeof uuid === 'string'){
return cljs.core.uuid(uuid);
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["UUID literal expects a string as its representation."], 0));
}
});
cljs.reader._STAR_tag_table_STAR_ = (function (){var G__14426 = new cljs.core.PersistentArrayMap(null, 4, ["inst",cljs.reader.read_date,"uuid",cljs.reader.read_uuid,"queue",cljs.reader.read_queue,"js",cljs.reader.read_js], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14426) : cljs.core.atom.call(null,G__14426));
})();
cljs.reader._STAR_default_data_reader_fn_STAR_ = (function (){var G__14427 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14427) : cljs.core.atom.call(null,G__14427));
})();
cljs.reader.maybe_read_tagged_type = (function cljs$reader$maybe_read_tagged_type(rdr,initch){
var tag = cljs.reader.read_symbol(rdr,initch);
var pfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__14434 = cljs.reader._STAR_tag_table_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14434) : cljs.core.deref.call(null,G__14434));
})(),[cljs.core.str(tag)].join(''));
var dfn = (function (){var G__14435 = cljs.reader._STAR_default_data_reader_fn_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14435) : cljs.core.deref.call(null,G__14435));
})();
if(cljs.core.truth_(pfn)){
var G__14436 = cljs.reader.read(rdr,true,null,false);
return (pfn.cljs$core$IFn$_invoke$arity$1 ? pfn.cljs$core$IFn$_invoke$arity$1(G__14436) : pfn.call(null,G__14436));
} else {
if(cljs.core.truth_(dfn)){
var G__14437 = tag;
var G__14438 = cljs.reader.read(rdr,true,null,false);
return (dfn.cljs$core$IFn$_invoke$arity$2 ? dfn.cljs$core$IFn$_invoke$arity$2(G__14437,G__14438) : dfn.call(null,G__14437,G__14438));
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Could not find tag parser for ",[cljs.core.str(tag)].join('')," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.keys((function (){var G__14439 = cljs.reader._STAR_tag_table_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14439) : cljs.core.deref.call(null,G__14439));
})())], 0))], 0));

}
}
});
cljs.reader.register_tag_parser_BANG_ = (function cljs$reader$register_tag_parser_BANG_(tag,f){
var tag__$1 = [cljs.core.str(tag)].join('');
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__14441 = cljs.reader._STAR_tag_table_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14441) : cljs.core.deref.call(null,G__14441));
})(),tag__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__$1,f);

return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function cljs$reader$deregister_tag_parser_BANG_(tag){
var tag__$1 = [cljs.core.str(tag)].join('');
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__14443 = cljs.reader._STAR_tag_table_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14443) : cljs.core.deref.call(null,G__14443));
})(),tag__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__$1);

return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function cljs$reader$register_default_tag_parser_BANG_(f){
var old_parser = (function (){var G__14445 = cljs.reader._STAR_default_data_reader_fn_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14445) : cljs.core.deref.call(null,G__14445));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return f;
});})(old_parser))
);

return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function cljs$reader$deregister_default_tag_parser_BANG_(){
var old_parser = (function (){var G__14447 = cljs.reader._STAR_default_data_reader_fn_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14447) : cljs.core.deref.call(null,G__14447));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return null;
});})(old_parser))
);

return old_parser;
});
