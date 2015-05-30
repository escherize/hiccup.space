// Compiled by ClojureScript 0.0-3291 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__34183){
var map__34189 = p__34183;
var map__34189__$1 = ((cljs.core.seq_QMARK_.call(null,map__34189))?cljs.core.apply.call(null,cljs.core.hash_map,map__34189):map__34189);
var replacement_transformers = cljs.core.get.call(null,map__34189__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__34189__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
return ((function (map__34189,map__34189__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_34190 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__34191 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_34190,map__34189,map__34189__$1,replacement_transformers,custom_transformers){
return (function (p__34192,transformer){
var vec__34193 = p__34192;
var text = cljs.core.nth.call(null,vec__34193,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__34193,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_34190,map__34189,map__34189__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__24986__auto__ = replacement_transformers;
if(cljs.core.truth_(or__24986__auto__)){
return or__24986__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__34191,(0),null);
var new_state = cljs.core.nth.call(null,vec__34191,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_34190;
}});
;})(map__34189,map__34189__$1,replacement_transformers,custom_transformers))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(){
var argseq__26026__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26026__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq34194){
var G__34195 = cljs.core.first.call(null,seq34194);
var seq34194__$1 = cljs.core.next.call(null,seq34194);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__34195,seq34194__$1);
});
markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__34200_34204 = cljs.core.seq.call(null,lines);
var chunk__34201_34205 = null;
var count__34202_34206 = (0);
var i__34203_34207 = (0);
while(true){
if((i__34203_34207 < count__34202_34206)){
var line_34208 = cljs.core._nth.call(null,chunk__34201_34205,i__34203_34207);
markdown.transformers.parse_reference_link.call(null,line_34208,references);

var G__34209 = seq__34200_34204;
var G__34210 = chunk__34201_34205;
var G__34211 = count__34202_34206;
var G__34212 = (i__34203_34207 + (1));
seq__34200_34204 = G__34209;
chunk__34201_34205 = G__34210;
count__34202_34206 = G__34211;
i__34203_34207 = G__34212;
continue;
} else {
var temp__4423__auto___34213 = cljs.core.seq.call(null,seq__34200_34204);
if(temp__4423__auto___34213){
var seq__34200_34214__$1 = temp__4423__auto___34213;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34200_34214__$1)){
var c__25771__auto___34215 = cljs.core.chunk_first.call(null,seq__34200_34214__$1);
var G__34216 = cljs.core.chunk_rest.call(null,seq__34200_34214__$1);
var G__34217 = c__25771__auto___34215;
var G__34218 = cljs.core.count.call(null,c__25771__auto___34215);
var G__34219 = (0);
seq__34200_34204 = G__34216;
chunk__34201_34205 = G__34217;
count__34202_34206 = G__34218;
i__34203_34207 = G__34219;
continue;
} else {
var line_34220 = cljs.core.first.call(null,seq__34200_34214__$1);
markdown.transformers.parse_reference_link.call(null,line_34220,references);

var G__34221 = cljs.core.next.call(null,seq__34200_34214__$1);
var G__34222 = null;
var G__34223 = (0);
var G__34224 = (0);
seq__34200_34204 = G__34221;
chunk__34201_34205 = G__34222;
count__34202_34206 = G__34223;
i__34203_34207 = G__34224;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md__GT_html = (function markdown$core$md__GT_html(){
var argseq__26026__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26026__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
var _STAR_substring_STAR_34227 = markdown.transformers._STAR_substring_STAR_;
var formatter34228 = markdown.transformers.formatter;
markdown.transformers._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_34227,formatter34228){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_34227,formatter34228))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = text.split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__34230_34233 = lines;
var vec__34231_34234 = G__34230_34233;
var line_34235 = cljs.core.nth.call(null,vec__34231_34234,(0),null);
var more_34236 = cljs.core.nthnext.call(null,vec__34231_34234,(1));
var state_34237 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__34230_34238__$1 = G__34230_34233;
var state_34239__$1 = state_34237;
while(true){
var vec__34232_34240 = G__34230_34238__$1;
var line_34241__$1 = cljs.core.nth.call(null,vec__34232_34240,(0),null);
var more_34242__$1 = cljs.core.nthnext.call(null,vec__34232_34240,(1));
var state_34243__$2 = state_34239__$1;
var state_34244__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_34243__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_34243__$2),cljs.core.first.call(null,more_34242__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_34243__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_34243__$2);
if(cljs.core.truth_(cljs.core.first.call(null,more_34242__$1))){
var G__34245 = more_34242__$1;
var G__34246 = cljs.core.assoc.call(null,transformer.call(null,html,line_34241__$1,cljs.core.first.call(null,more_34242__$1),state_34244__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_34241__$1));
G__34230_34238__$1 = G__34245;
state_34239__$1 = G__34246;
continue;
} else {
transformer.call(null,html,line_34241__$1,"",cljs.core.assoc.call(null,state_34244__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return html.toString();
}finally {markdown.transformers.formatter = formatter34228;

markdown.transformers._STAR_substring_STAR_ = _STAR_substring_STAR_34227;
}});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq34225){
var G__34226 = cljs.core.first.call(null,seq34225);
var seq34225__$1 = cljs.core.next.call(null,seq34225);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__34226,seq34225__$1);
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(){
var argseq__26026__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__26026__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq34247){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34247));
});

//# sourceMappingURL=core.js.map