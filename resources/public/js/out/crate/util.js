// Compiled by ClojureScript 0.0-3291 {}
goog.provide('crate.util');
goog.require('cljs.core');
goog.require('clojure.string');
crate.util._STAR_base_url_STAR_ = null;
crate.util.as_str = (function crate$util$as_str(){
var G__27508 = arguments.length;
switch (G__27508) {
case 0:
return crate.util.as_str.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return crate.util.as_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__26037__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return crate.util.as_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26037__auto__);

}
});

crate.util.as_str.cljs$core$IFn$_invoke$arity$0 = (function (){
return "";
});

crate.util.as_str.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(((x instanceof cljs.core.Symbol)) || ((x instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,x);
} else {
return [cljs.core.str(x)].join('');
}
});

crate.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (x,xs){
return (function (s,more){
while(true){
if(cljs.core.truth_(more)){
var G__27510 = [cljs.core.str(s),cljs.core.str(crate.util.as_str.call(null,cljs.core.first.call(null,more)))].join('');
var G__27511 = cljs.core.next.call(null,more);
s = G__27510;
more = G__27511;
continue;
} else {
return s;
}
break;
}
}).call(null,crate.util.as_str.call(null,x),xs);
});

crate.util.as_str.cljs$lang$applyTo = (function (seq27505){
var G__27506 = cljs.core.first.call(null,seq27505);
var seq27505__$1 = cljs.core.next.call(null,seq27505);
return crate.util.as_str.cljs$core$IFn$_invoke$arity$variadic(G__27506,seq27505__$1);
});

crate.util.as_str.cljs$lang$maxFixedArity = (1);
/**
 * Change special characters into HTML character entities.
 */
crate.util.escape_html = (function crate$util$escape_html(text){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,crate.util.as_str.call(null,text),"&","&amp;"),"<","&lt;"),">","&gt;"),"\"","&quot;");
});
/**
 * Prepends the base-url to the supplied URI.
 */
crate.util.to_uri = (function crate$util$to_uri(uri){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^\w+:.*/,uri))){
return uri;
} else {
return [cljs.core.str(crate.util._STAR_base_url_STAR_),cljs.core.str(uri)].join('');
}
});
crate.util.url_encode_component = (function crate$util$url_encode_component(s){

return encodeURIComponent(crate.util.as_str.call(null,s));
});
/**
 * Turn a map of parameters into a urlencoded string.
 */
crate.util.url_encode = (function crate$util$url_encode(params){
return clojure.string.join.call(null,"&",(function (){var iter__25740__auto__ = (function crate$util$url_encode_$_iter__27520(s__27521){
return (new cljs.core.LazySeq(null,(function (){
var s__27521__$1 = s__27521;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__27521__$1);
if(temp__4423__auto__){
var s__27521__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27521__$2)){
var c__25738__auto__ = cljs.core.chunk_first.call(null,s__27521__$2);
var size__25739__auto__ = cljs.core.count.call(null,c__25738__auto__);
var b__27523 = cljs.core.chunk_buffer.call(null,size__25739__auto__);
if((function (){var i__27522 = (0);
while(true){
if((i__27522 < size__25739__auto__)){
var vec__27526 = cljs.core._nth.call(null,c__25738__auto__,i__27522);
var k = cljs.core.nth.call(null,vec__27526,(0),null);
var v = cljs.core.nth.call(null,vec__27526,(1),null);
cljs.core.chunk_append.call(null,b__27523,[cljs.core.str(crate.util.url_encode_component.call(null,k)),cljs.core.str("="),cljs.core.str(crate.util.url_encode_component.call(null,v))].join(''));

var G__27528 = (i__27522 + (1));
i__27522 = G__27528;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27523),crate$util$url_encode_$_iter__27520.call(null,cljs.core.chunk_rest.call(null,s__27521__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27523),null);
}
} else {
var vec__27527 = cljs.core.first.call(null,s__27521__$2);
var k = cljs.core.nth.call(null,vec__27527,(0),null);
var v = cljs.core.nth.call(null,vec__27527,(1),null);
return cljs.core.cons.call(null,[cljs.core.str(crate.util.url_encode_component.call(null,k)),cljs.core.str("="),cljs.core.str(crate.util.url_encode_component.call(null,v))].join(''),crate$util$url_encode_$_iter__27520.call(null,cljs.core.rest.call(null,s__27521__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25740__auto__.call(null,params);
})());
});
/**
 * Creates a URL string from a variable list of arguments and an optional
 * parameter map as the last argument. For example:
 * (url "/group/" 4 "/products" {:page 9})
 * => "/group/4/products?page=9"
 */
crate.util.url = (function crate$util$url(){
var argseq__26026__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return crate.util.url.cljs$core$IFn$_invoke$arity$variadic(argseq__26026__auto__);
});

crate.util.url.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var params = cljs.core.last.call(null,args);
var args__$1 = cljs.core.butlast.call(null,args);
return [cljs.core.str(crate.util.to_uri.call(null,[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,args__$1)),cljs.core.str(((cljs.core.map_QMARK_.call(null,params))?[cljs.core.str("?"),cljs.core.str(crate.util.url_encode.call(null,params))].join(''):params))].join('')))].join('');
});

crate.util.url.cljs$lang$maxFixedArity = (0);

crate.util.url.cljs$lang$applyTo = (function (seq27529){
return crate.util.url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27529));
});

//# sourceMappingURL=util.js.map