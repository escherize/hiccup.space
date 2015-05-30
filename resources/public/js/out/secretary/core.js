// Compiled by ClojureScript 0.0-3291 {:static-fns true, :optimize-constants true}
goog.provide('secretary.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');

secretary.core.IRouteMatches = (function (){var obj13990 = {};
return obj13990;
})();

secretary.core.route_matches = (function secretary$core$route_matches(this$,route){
if((function (){var and__4297__auto__ = this$;
if(and__4297__auto__){
return this$.secretary$core$IRouteMatches$route_matches$arity$2;
} else {
return and__4297__auto__;
}
})()){
return this$.secretary$core$IRouteMatches$route_matches$arity$2(this$,route);
} else {
var x__4945__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4309__auto__ = (secretary.core.route_matches[(function (){var G__13994 = x__4945__auto__;
return goog.typeOf(G__13994);
})()]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (secretary.core.route_matches["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol("IRouteMatches.route-matches",this$);
}
}
})().call(null,this$,route);
}
});


secretary.core.IRouteValue = (function (){var obj13996 = {};
return obj13996;
})();

secretary.core.route_value = (function secretary$core$route_value(this$){
if((function (){var and__4297__auto__ = this$;
if(and__4297__auto__){
return this$.secretary$core$IRouteValue$route_value$arity$1;
} else {
return and__4297__auto__;
}
})()){
return this$.secretary$core$IRouteValue$route_value$arity$1(this$);
} else {
var x__4945__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4309__auto__ = (secretary.core.route_value[(function (){var G__14000 = x__4945__auto__;
return goog.typeOf(G__14000);
})()]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (secretary.core.route_value["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol("IRouteValue.route-value",this$);
}
}
})().call(null,this$);
}
});


secretary.core.IRenderRoute = (function (){var obj14002 = {};
return obj14002;
})();

secretary.core.render_route = (function secretary$core$render_route(){
var G__14004 = arguments.length;
switch (G__14004) {
case 1:
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

secretary.core.render_route.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((function (){var and__4297__auto__ = this$;
if(and__4297__auto__){
return this$.secretary$core$IRenderRoute$render_route$arity$1;
} else {
return and__4297__auto__;
}
})()){
return this$.secretary$core$IRenderRoute$render_route$arity$1(this$);
} else {
var x__4945__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4309__auto__ = (secretary.core.render_route[(function (){var G__14006 = x__4945__auto__;
return goog.typeOf(G__14006);
})()]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (secretary.core.render_route["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderRoute.render-route",this$);
}
}
})().call(null,this$);
}
});

secretary.core.render_route.cljs$core$IFn$_invoke$arity$2 = (function (this$,params){
if((function (){var and__4297__auto__ = this$;
if(and__4297__auto__){
return this$.secretary$core$IRenderRoute$render_route$arity$2;
} else {
return and__4297__auto__;
}
})()){
return this$.secretary$core$IRenderRoute$render_route$arity$2(this$,params);
} else {
var x__4945__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4309__auto__ = (secretary.core.render_route[(function (){var G__14008 = x__4945__auto__;
return goog.typeOf(G__14008);
})()]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (secretary.core.render_route["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderRoute.render-route",this$);
}
}
})().call(null,this$,params);
}
});

secretary.core.render_route.cljs$lang$maxFixedArity = 2;

secretary.core._STAR_config_STAR_ = (function (){var G__14010 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$prefix,""], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14010) : cljs.core.atom.call(null,G__14010));
})();
/**
 * Gets a value for *config* at path.
 */
secretary.core.get_config = (function secretary$core$get_config(path){
var path__$1 = ((cljs.core.sequential_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__14012 = secretary.core._STAR_config_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14012) : cljs.core.deref.call(null,G__14012));
})(),path__$1);
});
/**
 * Associates a value val for *config* at path.
 */
secretary.core.set_config_BANG_ = (function secretary$core$set_config_BANG_(path,val){
var path__$1 = ((cljs.core.sequential_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_config_STAR_,cljs.core.assoc_in,path__$1,val);
});
secretary.core.encode = encodeURIComponent;
if(typeof secretary.core.encode_pair !== 'undefined'){
} else {
/**
 * Given a key and a value return and encoded key-value pair.
 */
secretary.core.encode_pair = (function (){var method_table__5204__auto__ = (function (){var G__14013 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14013) : cljs.core.atom.call(null,G__14013));
})();
var prefer_table__5205__auto__ = (function (){var G__14014 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14014) : cljs.core.atom.call(null,G__14014));
})();
var method_cache__5206__auto__ = (function (){var G__14015 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14015) : cljs.core.atom.call(null,G__14015));
})();
var cached_hierarchy__5207__auto__ = (function (){var G__14016 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14016) : cljs.core.atom.call(null,G__14016));
})();
var hierarchy__5208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("secretary.core","encode-pair"),((function (method_table__5204__auto__,prefer_table__5205__auto__,method_cache__5206__auto__,cached_hierarchy__5207__auto__,hierarchy__5208__auto__){
return (function (p__14017){
var vec__14018 = p__14017;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14018,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14018,(1),null);
if((cljs.core.sequential_QMARK_(v)) || (cljs.core.set_QMARK_(v))){
return cljs.core.constant$keyword$secretary$core_SLASH_sequential;
} else {
if((function (){var or__4309__auto__ = cljs.core.map_QMARK_(v);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var G__14020 = v;
if(G__14020){
var bit__4983__auto__ = (G__14020.cljs$lang$protocol_mask$partition0$ & (67108864));
if((bit__4983__auto__) || (G__14020.cljs$core$IRecord$)){
return true;
} else {
if((!G__14020.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,G__14020);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,G__14020);
}
}
})()){
return cljs.core.constant$keyword$secretary$core_SLASH_map;
} else {
return null;
}
}
});})(method_table__5204__auto__,prefer_table__5205__auto__,method_cache__5206__auto__,cached_hierarchy__5207__auto__,hierarchy__5208__auto__))
,cljs.core.constant$keyword$default,hierarchy__5208__auto__,method_table__5204__auto__,prefer_table__5205__auto__,method_cache__5206__auto__,cached_hierarchy__5207__auto__));
})();
}
secretary.core.key_index = (function secretary$core$key_index(){
var G__14022 = arguments.length;
switch (G__14022) {
case 1:
return secretary.core.key_index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return secretary.core.key_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

secretary.core.key_index.cljs$core$IFn$_invoke$arity$1 = (function (k){
return [cljs.core.str(cljs.core.name(k)),cljs.core.str("[]")].join('');
});

secretary.core.key_index.cljs$core$IFn$_invoke$arity$2 = (function (k,index){
return [cljs.core.str(cljs.core.name(k)),cljs.core.str("["),cljs.core.str(index),cljs.core.str("]")].join('');
});

secretary.core.key_index.cljs$lang$maxFixedArity = 2;
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$secretary$core_SLASH_sequential,(function (p__14024){
var vec__14025 = p__14024;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14025,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14025,(1),null);
var encoded = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__14025,k,v){
return (function (i,x){
var pair = ((cljs.core.coll_QMARK_(x))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$2(k,i),x], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$1(k),x], null));
var G__14026 = pair;
return (secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1(G__14026) : secretary.core.encode_pair.call(null,G__14026));
});})(vec__14025,k,v))
,v);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",encoded);
}));
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$secretary$core_SLASH_map,(function (p__14027){
var vec__14028 = p__14027;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14028,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14028,(1),null);
var encoded = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14028,k,v){
return (function (p__14029){
var vec__14030 = p__14029;
var ik = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14030,(0),null);
var iv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14030,(1),null);
var G__14031 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$2(k,cljs.core.name(ik)),iv], null);
return (secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1(G__14031) : secretary.core.encode_pair.call(null,G__14031));
});})(vec__14028,k,v))
,v);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",encoded);
}));
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$default,(function (p__14032){
var vec__14033 = p__14032;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14033,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14033,(1),null);
return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str((function (){var G__14034 = [cljs.core.str(v)].join('');
return (secretary.core.encode.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode.cljs$core$IFn$_invoke$arity$1(G__14034) : secretary.core.encode.call(null,G__14034));
})())].join('');
}));
/**
 * Convert a map of query parameters into url encoded string.
 */
secretary.core.encode_query_params = (function secretary$core$encode_query_params(query_params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.encode_pair,query_params));
});
/**
 * Like js/encodeURIComponent excepts ignore slashes.
 */
secretary.core.encode_uri = (function secretary$core$encode_uri(uri){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.encode,clojure.string.split.cljs$core$IFn$_invoke$arity$2(uri,/\//)));
});
secretary.core.decode = decodeURIComponent;
/**
 * Parse a value from a serialized query-string key index. If the
 * index value is empty 0 is returned, if it's a digit it returns the
 * js/parseInt value, otherwise it returns the extracted index.
 */
secretary.core.parse_path = (function secretary$core$parse_path(path){
var index_re = /\[([^\]]*)\]*/;
var parts = cljs.core.re_seq(index_re,path);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (index_re,parts){
return (function (p__14038){
var vec__14039 = p__14038;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14039,(0),null);
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14039,(1),null);
if(cljs.core.empty_QMARK_(part)){
return (0);
} else {
if(cljs.core.truth_(cljs.core.re_matches(/\d+/,part))){
var G__14040 = part;
return parseInt(G__14040);
} else {
return part;

}
}
});})(index_re,parts))
,parts);
});
/**
 * Return a key path for a serialized query-string entry.
 * 
 * Ex.
 * 
 * (key-parse "foo[][a][][b]")
 * ;; => ("foo" 0 "a" 0 "b")
 * 
 */
secretary.core.key_parse = (function secretary$core$key_parse(k){
var re = /([^\[\]]+)((?:\[[^\]]*\])*)?/;
var vec__14042 = cljs.core.re_matches(re,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14042,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14042,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14042,(2),null);
var parsed_path = (cljs.core.truth_(path)?secretary.core.parse_path(path):null);
return cljs.core.cons(key,parsed_path);
});
/**
 * Like assoc-in but numbers in path create vectors instead of maps.
 * 
 * Ex.
 * 
 * (assoc-in-query-params {} ["foo" 0] 1)
 * ;; => {"foo" [1]}
 * 
 * (assoc-in-query-params {} ["foo" 0 "a"] 1)
 * ;; => {"foo" [{"a" 1}]}
 * 
 */
secretary.core.assoc_in_query_params = (function secretary$core$assoc_in_query_params(m,path,v){
var heads = (function (xs){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,_){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((i + (1)),xs);
}),xs);
});
var hs = heads(path);
var m__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (heads,hs){
return (function (m__$1,h){
if((typeof cljs.core.last(h) === 'number') && (!(cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.butlast(h)))))){
return cljs.core.assoc_in(m__$1,cljs.core.butlast(h),cljs.core.PersistentVector.EMPTY);
} else {
return m__$1;
}
});})(heads,hs))
,m,hs);
if((cljs.core.last(path) === (0))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$1,cljs.core.butlast(path),cljs.core.conj,v);
} else {
return cljs.core.assoc_in(m__$1,path,v);
}
});
/**
 * Extract a map of query parameters from a query string.
 */
secretary.core.decode_query_params = (function secretary$core$decode_query_params(query_string){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(query_string,/&/);
var params = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (parts){
return (function (m,part){
var vec__14045 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(part,/=/,(2));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14045,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14045,(1),null);
return secretary.core.assoc_in_query_params(m,secretary.core.key_parse(k),(function (){var G__14046 = v;
return (secretary.core.decode.cljs$core$IFn$_invoke$arity$1 ? secretary.core.decode.cljs$core$IFn$_invoke$arity$1(G__14046) : secretary.core.decode.call(null,G__14046));
})());
});})(parts))
,cljs.core.PersistentArrayMap.EMPTY,parts);
var params__$1 = clojure.walk.keywordize_keys(params);
return params__$1;
});
/**
 * Like re-matches but result is a always vector. If re does not
 * capture matches then it will return a vector of [m m] as if it had a
 * single capture. Other wise it maintains consistent behavior with
 * re-matches.
 */
secretary.core.re_matches_STAR_ = (function secretary$core$re_matches_STAR_(re,s){
var ms = cljs.core.re_matches(re,s);
if(cljs.core.truth_(ms)){
if(cljs.core.sequential_QMARK_(ms)){
return ms;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms,ms], null);
}
} else {
return null;
}
});
secretary.core.re_escape_chars = cljs.core.set("\\.*+|?()[]{}$^");
secretary.core.re_escape = (function secretary$core$re_escape(s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,c){
if(cljs.core.truth_((function (){var G__14048 = c;
return (secretary.core.re_escape_chars.cljs$core$IFn$_invoke$arity$1 ? secretary.core.re_escape_chars.cljs$core$IFn$_invoke$arity$1(G__14048) : secretary.core.re_escape_chars.call(null,G__14048));
})())){
return [cljs.core.str(s__$1),cljs.core.str("\\"),cljs.core.str(c)].join('');
} else {
return [cljs.core.str(s__$1),cljs.core.str(c)].join('');
}
}),"",s);
});
/**
 * Attempt to lex a single token from s with clauses. Each clause is a
 * pair of [regexp action] where action is a function. regexp is
 * expected to begin with ^ and contain a single capture. If the
 * attempt is successful a vector of [s-without-token (action capture)]
 * is returned. Otherwise the result is nil.
 */
secretary.core.lex_STAR_ = (function secretary$core$lex_STAR_(s,clauses){
return cljs.core.some((function (p__14053){
var vec__14054 = p__14053;
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14054,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14054,(1),null);
var temp__4423__auto__ = cljs.core.re_find(re,s);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__14055 = temp__4423__auto__;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14055,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14055,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,cljs.core.count(m)),(function (){var G__14056 = c;
return (action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(G__14056) : action.call(null,G__14056));
})()], null);
} else {
return null;
}
}),clauses);
});
/**
 * Return a pair of [regex params]. regex is a compiled regular
 * expression for matching routes. params is a list of route param
 * names (:*, :id, etc.).
 */
secretary.core.lex_route = (function secretary$core$lex_route(s,clauses){
var s__$1 = s;
var pattern = "";
var params = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq(s__$1)){
var vec__14059 = secretary.core.lex_STAR_(s__$1,clauses);
var s__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14059,(0),null);
var vec__14060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14059,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14060,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14060,(1),null);
var G__14061 = s__$2;
var G__14062 = [cljs.core.str(pattern),cljs.core.str(r)].join('');
var G__14063 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,p);
s__$1 = G__14061;
pattern = G__14062;
params = G__14063;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.re_pattern([cljs.core.str("^"),cljs.core.str(pattern),cljs.core.str("$")].join('')),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,params)], null);
}
break;
}
});
/**
 * Given a route return an instance of IRouteMatches.
 */
secretary.core.compile_route = (function secretary$core$compile_route(orig_route){
var clauses = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\*([^\s.:*\/]*)/,(function (v){
var r = "(.*?)";
var p = ((cljs.core.seq(v))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v):cljs.core.constant$keyword$_STAR_);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\:([^\s.:*\/]+)/,(function (v){
var r = "([^,;?/]+)";
var p = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^([^:*]+)/,(function (v){
var r = secretary.core.re_escape(v);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null);
})], null)], null);
var vec__14069 = secretary.core.lex_route(orig_route,clauses);
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14069,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14069,(1),null);
if(typeof secretary.core.t14070 !== 'undefined'){
} else {

/**
* @constructor
*/
secretary.core.t14070 = (function (compile_route,orig_route,clauses,vec__14069,re,params,meta14071){
this.compile_route = compile_route;
this.orig_route = orig_route;
this.clauses = clauses;
this.vec__14069 = vec__14069;
this.re = re;
this.params = params;
this.meta14071 = meta14071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
secretary.core.t14070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (clauses,vec__14069,re,params){
return (function (_14072,meta14071__$1){
var self__ = this;
var _14072__$1 = this;
return (new secretary.core.t14070(self__.compile_route,self__.orig_route,self__.clauses,self__.vec__14069,self__.re,self__.params,meta14071__$1));
});})(clauses,vec__14069,re,params))
;

secretary.core.t14070.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (clauses,vec__14069,re,params){
return (function (_14072){
var self__ = this;
var _14072__$1 = this;
return self__.meta14071;
});})(clauses,vec__14069,re,params))
;

secretary.core.t14070.prototype.secretary$core$IRouteValue$ = true;

secretary.core.t14070.prototype.secretary$core$IRouteValue$route_value$arity$1 = ((function (clauses,vec__14069,re,params){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.orig_route;
});})(clauses,vec__14069,re,params))
;

secretary.core.t14070.prototype.secretary$core$IRouteMatches$ = true;

secretary.core.t14070.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = ((function (clauses,vec__14069,re,params){
return (function (_,route){
var self__ = this;
var ___$1 = this;
var temp__4423__auto__ = secretary.core.re_matches_STAR_(self__.re,route);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__14073 = temp__4423__auto__;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14073,(0),null);
var ms = cljs.core.nthnext(vec__14073,(1));
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(self__.params,cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.decode,ms)))], 0));
} else {
return null;
}
});})(clauses,vec__14069,re,params))
;

secretary.core.t14070.getBasis = ((function (clauses,vec__14069,re,params){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"compile-route","compile-route",-1479918120,null),new cljs.core.Symbol(null,"orig-route","orig-route",899103121,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null),new cljs.core.Symbol(null,"vec__14069","vec__14069",1794051118,null),new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"meta14071","meta14071",-1999114572,null)], null);
});})(clauses,vec__14069,re,params))
;

secretary.core.t14070.cljs$lang$type = true;

secretary.core.t14070.cljs$lang$ctorStr = "secretary.core/t14070";

secretary.core.t14070.cljs$lang$ctorPrWriter = ((function (clauses,vec__14069,re,params){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write(writer__4889__auto__,"secretary.core/t14070");
});})(clauses,vec__14069,re,params))
;

secretary.core.__GT_t14070 = ((function (clauses,vec__14069,re,params){
return (function secretary$core$compile_route_$___GT_t14070(compile_route__$1,orig_route__$1,clauses__$1,vec__14069__$1,re__$1,params__$1,meta14071){
return (new secretary.core.t14070(compile_route__$1,orig_route__$1,clauses__$1,vec__14069__$1,re__$1,params__$1,meta14071));
});})(clauses,vec__14069,re,params))
;

}

return (new secretary.core.t14070(secretary$core$compile_route,orig_route,clauses,vec__14069,re,params,cljs.core.PersistentArrayMap.EMPTY));
});
secretary.core.render_route_STAR_ = (function secretary$core$render_route_STAR_(){
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,args){
if((function (){var G__14076 = obj;
if(G__14076){
var bit__4983__auto__ = null;
if(cljs.core.truth_((function (){var or__4309__auto__ = bit__4983__auto__;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return G__14076.secretary$core$IRenderRoute$;
}
})())){
return true;
} else {
if((!G__14076.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(secretary.core.IRenderRoute,G__14076);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(secretary.core.IRenderRoute,G__14076);
}
})()){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route,obj,args);
} else {
return null;
}
});

secretary.core.render_route_STAR_.cljs$lang$maxFixedArity = (1);

secretary.core.render_route_STAR_.cljs$lang$applyTo = (function (seq14074){
var G__14075 = cljs.core.first(seq14074);
var seq14074__$1 = cljs.core.next(seq14074);
return secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__14075,seq14074__$1);
});
secretary.core._STAR_routes_STAR_ = (function (){var G__14077 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14077) : cljs.core.atom.call(null,G__14077));
})();
secretary.core.add_route_BANG_ = (function secretary$core$add_route_BANG_(obj,action){
var obj__$1 = ((typeof obj === 'string')?secretary.core.compile_route(obj):obj);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(secretary.core._STAR_routes_STAR_,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj__$1,action], null));
});
secretary.core.remove_route_BANG_ = (function secretary$core$remove_route_BANG_(obj){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(secretary.core._STAR_routes_STAR_,(function (rs){
return cljs.core.filterv((function (p__14080){
var vec__14081 = p__14080;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14081,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14081,(1),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,obj);
}),rs);
}));
});
secretary.core.reset_routes_BANG_ = (function secretary$core$reset_routes_BANG_(){
var G__14084 = secretary.core._STAR_routes_STAR_;
var G__14085 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14084,G__14085) : cljs.core.reset_BANG_.call(null,G__14084,G__14085));
});
secretary.core.locate_route = (function secretary$core$locate_route(route){
return cljs.core.some((function (p__14089){
var vec__14090 = p__14089;
var compiled_route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14090,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14090,(1),null);
var temp__4423__auto__ = secretary.core.route_matches(compiled_route,route);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$action,action,cljs.core.constant$keyword$params,params,cljs.core.constant$keyword$route,compiled_route], null);
} else {
return null;
}
}),(function (){var G__14091 = secretary.core._STAR_routes_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14091) : cljs.core.deref.call(null,G__14091));
})());
});
/**
 * Returns original route value as set in defroute when passed a URI path.
 */
secretary.core.locate_route_value = (function secretary$core$locate_route_value(uri){
return secretary.core.route_value(cljs.core.constant$keyword$route.cljs$core$IFn$_invoke$arity$1(secretary.core.locate_route(uri)));
});
secretary.core.prefix = (function secretary$core$prefix(){
return [cljs.core.str(secretary.core.get_config(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$prefix], null)))].join('');
});
secretary.core.uri_without_prefix = (function secretary$core$uri_without_prefix(uri){
return clojure.string.replace(uri,cljs.core.re_pattern([cljs.core.str("^"),cljs.core.str(secretary.core.prefix())].join('')),"");
});
/**
 * Ensures that the uri has a leading slash
 */
secretary.core.uri_with_leading_slash = (function secretary$core$uri_with_leading_slash(uri){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(uri))){
return uri;
} else {
return [cljs.core.str("/"),cljs.core.str(uri)].join('');
}
});
/**
 * Dispatch an action for a given route if it matches the URI path.
 */
secretary.core.dispatch_BANG_ = (function secretary$core$dispatch_BANG_(uri){
var vec__14095 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(secretary.core.uri_without_prefix(uri),/\?/);
var uri_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14095,(0),null);
var query_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14095,(1),null);
var uri_path__$1 = secretary.core.uri_with_leading_slash(uri_path);
var query_params = (cljs.core.truth_(query_string)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$query_DASH_params,secretary.core.decode_query_params(query_string)], null):null);
var map__14096 = secretary.core.locate_route(uri_path__$1);
var map__14096__$1 = ((cljs.core.seq_QMARK_(map__14096))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14096):map__14096);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14096__$1,cljs.core.constant$keyword$action);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14096__$1,cljs.core.constant$keyword$params);
var action__$1 = (function (){var or__4309__auto__ = action;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cljs.core.identity;
}
})();
var params__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params,query_params], 0));
var G__14097 = params__$1;
return (action__$1.cljs$core$IFn$_invoke$arity$1 ? action__$1.cljs$core$IFn$_invoke$arity$1(G__14097) : action__$1.call(null,G__14097));
});
secretary.core.invalid_params = (function secretary$core$invalid_params(params,validations){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__14100){
var vec__14101 = p__14100;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14101,(0),null);
var validation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14101,(1),null);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,key);
if(cljs.core.truth_(cljs.core.re_matches(validation,value))){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,validation], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),validations));
});
secretary.core.params_valid_QMARK_ = (function secretary$core$params_valid_QMARK_(params,validations){
return cljs.core.empty_QMARK_(secretary.core.invalid_params(params,validations));
});
(secretary.core.IRouteMatches["string"] = true);

(secretary.core.route_matches["string"] = (function (this$,route){
return secretary.core.route_matches(secretary.core.compile_route(this$),route);
}));

RegExp.prototype.secretary$core$IRouteMatches$ = true;

RegExp.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (this$,route){
var this$__$1 = this;
var temp__4423__auto__ = secretary.core.re_matches_STAR_(this$__$1,route);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__14102 = temp__4423__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14102,(0),null);
var ms = cljs.core.nthnext(vec__14102,(1));
return cljs.core.vec(ms);
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$ = true;

cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (p__14103,route){
var vec__14104 = p__14103;
var route_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14104,(0),null);
var validations = cljs.core.nthnext(vec__14104,(1));
var vec__14105 = this;
var route_string__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14105,(0),null);
var validations__$1 = cljs.core.nthnext(vec__14105,(1));
var params = secretary.core.route_matches(secretary.core.compile_route(route_string__$1),route);
if(cljs.core.truth_(secretary.core.params_valid_QMARK_(params,validations__$1))){
return params;
} else {
return null;
}
});
(secretary.core.IRouteValue["string"] = true);

(secretary.core.route_value["string"] = (function (this$){
return secretary.core.route_value(secretary.core.compile_route(this$));
}));

RegExp.prototype.secretary$core$IRouteValue$ = true;

RegExp.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$ = true;

cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (p__14106){
var vec__14107 = p__14106;
var route_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14107,(0),null);
var validations = cljs.core.nthnext(vec__14107,(1));
var vec__14108 = this;
var route_string__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14108,(0),null);
var validations__$1 = cljs.core.nthnext(vec__14108,(1));
return cljs.core.vec(cljs.core.cons(secretary.core.route_value(route_string__$1),validations__$1));
});
(secretary.core.IRenderRoute["string"] = true);

(secretary.core.render_route["string"] = (function() {
var G__14115 = null;
var G__14115__1 = (function (this$){
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.PersistentArrayMap.EMPTY);
});
var G__14115__2 = (function (this$,params){
var map__14109 = params;
var map__14109__$1 = ((cljs.core.seq_QMARK_(map__14109))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14109):map__14109);
var m = map__14109__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14109__$1,cljs.core.constant$keyword$query_DASH_params);
var a = (function (){var G__14110 = m;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14110) : cljs.core.atom.call(null,G__14110));
})();
var path = this$.replace((new RegExp(":[^\\s.:*/]+|\\*[^\\s.:*/]*","g")),((function (map__14109,map__14109__$1,m,query_params,a){
return (function ($1){
var lookup = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($1,"*"))?$1:cljs.core.subs.cljs$core$IFn$_invoke$arity$2($1,(1))));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__14111 = a;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14111) : cljs.core.deref.call(null,G__14111));
})(),lookup);
var replacement = ((cljs.core.sequential_QMARK_(v))?(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc,lookup,cljs.core.next(v));

return secretary.core.encode_uri(cljs.core.first(v));
})()
:(cljs.core.truth_(v)?secretary.core.encode_uri(v):$1));
return replacement;
});})(map__14109,map__14109__$1,m,query_params,a))
);
var path__$1 = [cljs.core.str(secretary.core.get_config(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$prefix], null))),cljs.core.str(path)].join('');
var temp__4421__auto__ = (function (){var and__4297__auto__ = query_params;
if(cljs.core.truth_(and__4297__auto__)){
return secretary.core.encode_query_params(query_params);
} else {
return and__4297__auto__;
}
})();
if(cljs.core.truth_(temp__4421__auto__)){
var query_string = temp__4421__auto__;
return [cljs.core.str(path__$1),cljs.core.str("?"),cljs.core.str(query_string)].join('');
} else {
return path__$1;
}
});
G__14115 = function(this$,params){
switch(arguments.length){
case 1:
return G__14115__1.call(this,this$);
case 2:
return G__14115__2.call(this,this$,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14115.cljs$core$IFn$_invoke$arity$1 = G__14115__1;
G__14115.cljs$core$IFn$_invoke$arity$2 = G__14115__2;
return G__14115;
})()
);

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$ = true;

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$1 = (function (this$){
var this$__$1 = this;
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$2 = (function (p__14112,params){
var vec__14113 = p__14112;
var route_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14113,(0),null);
var validations = cljs.core.nthnext(vec__14113,(1));
var vec__14114 = this;
var route_string__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14114,(0),null);
var validations__$1 = cljs.core.nthnext(vec__14114,(1));
var invalid = secretary.core.invalid_params(params,validations__$1);
if(cljs.core.empty_QMARK_(invalid)){
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(route_string__$1,params);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Could not build route: invalid params",invalid);
}
});
