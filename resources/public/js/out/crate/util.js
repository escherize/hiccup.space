// Compiled by ClojureScript 0.0-3291 {:static-fns true, :optimize-constants true}
goog.provide('crate.util');
goog.require('cljs.core');
goog.require('clojure.string');
crate.util._STAR_base_url_STAR_ = null;
crate.util.as_str = (function crate$util$as_str(){
var G__13474 = arguments.length;
switch (G__13474) {
case 0:
return crate.util.as_str.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return crate.util.as_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__5360__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return crate.util.as_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5360__auto__);

}
});

crate.util.as_str.cljs$core$IFn$_invoke$arity$0 = (function (){
return "";
});

crate.util.as_str.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(((x instanceof cljs.core.Symbol)) || ((x instanceof cljs.core.Keyword))){
return cljs.core.name(x);
} else {
return [cljs.core.str(x)].join('');
}
});

crate.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (x,xs){
return (function (s,more){
while(true){
if(cljs.core.truth_(more)){
var G__13476 = [cljs.core.str(s),cljs.core.str(crate.util.as_str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(more)))].join('');
var G__13477 = cljs.core.next(more);
s = G__13476;
more = G__13477;
continue;
} else {
return s;
}
break;
}
}).call(null,crate.util.as_str.cljs$core$IFn$_invoke$arity$1(x),xs);
});

crate.util.as_str.cljs$lang$applyTo = (function (seq13471){
var G__13472 = cljs.core.first(seq13471);
var seq13471__$1 = cljs.core.next(seq13471);
return crate.util.as_str.cljs$core$IFn$_invoke$arity$variadic(G__13472,seq13471__$1);
});

crate.util.as_str.cljs$lang$maxFixedArity = (1);
/**
 * Change special characters into HTML character entities.
 */
crate.util.escape_html = (function crate$util$escape_html(text){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(crate.util.as_str.cljs$core$IFn$_invoke$arity$1(text),"&","&amp;"),"<","&lt;"),">","&gt;"),"\"","&quot;");
});
/**
 * Prepends the base-url to the supplied URI.
 */
crate.util.to_uri = (function crate$util$to_uri(uri){
if(cljs.core.truth_(cljs.core.re_matches(/^\w+:.*/,uri))){
return uri;
} else {
return [cljs.core.str(crate.util._STAR_base_url_STAR_),cljs.core.str(uri)].join('');
}
});
crate.util.url_encode_component = (function crate$util$url_encode_component(s){

var G__13479 = crate.util.as_str.cljs$core$IFn$_invoke$arity$1(s);
return encodeURIComponent(G__13479);
});
/**
 * Turn a map of parameters into a urlencoded string.
 */
crate.util.url_encode = (function crate$util$url_encode(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",(function (){var iter__5063__auto__ = (function crate$util$url_encode_$_iter__13490(s__13491){
return (new cljs.core.LazySeq(null,(function (){
var s__13491__$1 = s__13491;
while(true){
var temp__4423__auto__ = cljs.core.seq(s__13491__$1);
if(temp__4423__auto__){
var s__13491__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13491__$2)){
var c__5061__auto__ = cljs.core.chunk_first(s__13491__$2);
var size__5062__auto__ = cljs.core.count(c__5061__auto__);
var b__13493 = cljs.core.chunk_buffer(size__5062__auto__);
if((function (){var i__13492 = (0);
while(true){
if((i__13492 < size__5062__auto__)){
var vec__13498 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5061__auto__,i__13492);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13498,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13498,(1),null);
cljs.core.chunk_append(b__13493,[cljs.core.str(crate.util.url_encode_component(k)),cljs.core.str("="),cljs.core.str(crate.util.url_encode_component(v))].join(''));

var G__13500 = (i__13492 + (1));
i__13492 = G__13500;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13493),crate$util$url_encode_$_iter__13490(cljs.core.chunk_rest(s__13491__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13493),null);
}
} else {
var vec__13499 = cljs.core.first(s__13491__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13499,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13499,(1),null);
return cljs.core.cons([cljs.core.str(crate.util.url_encode_component(k)),cljs.core.str("="),cljs.core.str(crate.util.url_encode_component(v))].join(''),crate$util$url_encode_$_iter__13490(cljs.core.rest(s__13491__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5063__auto__(params);
})());
});
/**
 * Creates a URL string from a variable list of arguments and an optional
 * parameter map as the last argument. For example:
 * (url "/group/" 4 "/products" {:page 9})
 * => "/group/4/products?page=9"
 */
crate.util.url = (function crate$util$url(){
var argseq__5349__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return crate.util.url.cljs$core$IFn$_invoke$arity$variadic(argseq__5349__auto__);
});

crate.util.url.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var params = cljs.core.last(args);
var args__$1 = cljs.core.butlast(args);
return [cljs.core.str(crate.util.to_uri([cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args__$1)),cljs.core.str(((cljs.core.map_QMARK_(params))?[cljs.core.str("?"),cljs.core.str(crate.util.url_encode(params))].join(''):params))].join('')))].join('');
});

crate.util.url.cljs$lang$maxFixedArity = (0);

crate.util.url.cljs$lang$applyTo = (function (seq13501){
return crate.util.url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13501));
});
