// Compiled by ClojureScript 0.0-3291 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__33396){
var map__33402 = p__33396;
var map__33402__$1 = ((cljs.core.seq_QMARK_.call(null,map__33402))?cljs.core.apply.call(null,cljs.core.hash_map,map__33402):map__33402);
var replacement_transformers = cljs.core.get.call(null,map__33402__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__33402__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
return ((function (map__33402,map__33402__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_33403 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__33404 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_33403,map__33402,map__33402__$1,replacement_transformers,custom_transformers){
return (function (p__33405,transformer){
var vec__33406 = p__33405;
var text = cljs.core.nth.call(null,vec__33406,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__33406,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_33403,map__33402,map__33402__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__24986__auto__ = replacement_transformers;
if(cljs.core.truth_(or__24986__auto__)){
return or__24986__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__33404,(0),null);
var new_state = cljs.core.nth.call(null,vec__33404,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_33403;
}});
;})(map__33402,map__33402__$1,replacement_transformers,custom_transformers))
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

markdown.core.format.cljs$lang$applyTo = (function (seq33407){
var G__33408 = cljs.core.first.call(null,seq33407);
var seq33407__$1 = cljs.core.next.call(null,seq33407);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__33408,seq33407__$1);
});
markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__33413_33417 = cljs.core.seq.call(null,lines);
var chunk__33414_33418 = null;
var count__33415_33419 = (0);
var i__33416_33420 = (0);
while(true){
if((i__33416_33420 < count__33415_33419)){
var line_33421 = cljs.core._nth.call(null,chunk__33414_33418,i__33416_33420);
markdown.transformers.parse_reference_link.call(null,line_33421,references);

var G__33422 = seq__33413_33417;
var G__33423 = chunk__33414_33418;
var G__33424 = count__33415_33419;
var G__33425 = (i__33416_33420 + (1));
seq__33413_33417 = G__33422;
chunk__33414_33418 = G__33423;
count__33415_33419 = G__33424;
i__33416_33420 = G__33425;
continue;
} else {
var temp__4423__auto___33426 = cljs.core.seq.call(null,seq__33413_33417);
if(temp__4423__auto___33426){
var seq__33413_33427__$1 = temp__4423__auto___33426;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33413_33427__$1)){
var c__25771__auto___33428 = cljs.core.chunk_first.call(null,seq__33413_33427__$1);
var G__33429 = cljs.core.chunk_rest.call(null,seq__33413_33427__$1);
var G__33430 = c__25771__auto___33428;
var G__33431 = cljs.core.count.call(null,c__25771__auto___33428);
var G__33432 = (0);
seq__33413_33417 = G__33429;
chunk__33414_33418 = G__33430;
count__33415_33419 = G__33431;
i__33416_33420 = G__33432;
continue;
} else {
var line_33433 = cljs.core.first.call(null,seq__33413_33427__$1);
markdown.transformers.parse_reference_link.call(null,line_33433,references);

var G__33434 = cljs.core.next.call(null,seq__33413_33427__$1);
var G__33435 = null;
var G__33436 = (0);
var G__33437 = (0);
seq__33413_33417 = G__33434;
chunk__33414_33418 = G__33435;
count__33415_33419 = G__33436;
i__33416_33420 = G__33437;
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
var _STAR_substring_STAR_33440 = markdown.transformers._STAR_substring_STAR_;
var formatter33441 = markdown.transformers.formatter;
markdown.transformers._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_33440,formatter33441){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_33440,formatter33441))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = text.split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__33443_33446 = lines;
var vec__33444_33447 = G__33443_33446;
var line_33448 = cljs.core.nth.call(null,vec__33444_33447,(0),null);
var more_33449 = cljs.core.nthnext.call(null,vec__33444_33447,(1));
var state_33450 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__33443_33451__$1 = G__33443_33446;
var state_33452__$1 = state_33450;
while(true){
var vec__33445_33453 = G__33443_33451__$1;
var line_33454__$1 = cljs.core.nth.call(null,vec__33445_33453,(0),null);
var more_33455__$1 = cljs.core.nthnext.call(null,vec__33445_33453,(1));
var state_33456__$2 = state_33452__$1;
var state_33457__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_33456__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_33456__$2),cljs.core.first.call(null,more_33455__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_33456__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_33456__$2);
if(cljs.core.truth_(cljs.core.first.call(null,more_33455__$1))){
var G__33458 = more_33455__$1;
var G__33459 = cljs.core.assoc.call(null,transformer.call(null,html,line_33454__$1,cljs.core.first.call(null,more_33455__$1),state_33457__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_33454__$1));
G__33443_33451__$1 = G__33458;
state_33452__$1 = G__33459;
continue;
} else {
transformer.call(null,html,line_33454__$1,"",cljs.core.assoc.call(null,state_33457__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return html.toString();
}finally {markdown.transformers.formatter = formatter33441;

markdown.transformers._STAR_substring_STAR_ = _STAR_substring_STAR_33440;
}});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq33438){
var G__33439 = cljs.core.first.call(null,seq33438);
var seq33438__$1 = cljs.core.next.call(null,seq33438);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__33439,seq33438__$1);
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

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq33460){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33460));
});

//# sourceMappingURL=core.js.map