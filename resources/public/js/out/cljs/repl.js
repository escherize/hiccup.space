// Compiled by ClojureScript 0.0-3291 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35248_35260 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35249_35261 = null;
var count__35250_35262 = (0);
var i__35251_35263 = (0);
while(true){
if((i__35251_35263 < count__35250_35262)){
var f_35264 = cljs.core._nth.call(null,chunk__35249_35261,i__35251_35263);
cljs.core.println.call(null,"  ",f_35264);

var G__35265 = seq__35248_35260;
var G__35266 = chunk__35249_35261;
var G__35267 = count__35250_35262;
var G__35268 = (i__35251_35263 + (1));
seq__35248_35260 = G__35265;
chunk__35249_35261 = G__35266;
count__35250_35262 = G__35267;
i__35251_35263 = G__35268;
continue;
} else {
var temp__4423__auto___35269 = cljs.core.seq.call(null,seq__35248_35260);
if(temp__4423__auto___35269){
var seq__35248_35270__$1 = temp__4423__auto___35269;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35248_35270__$1)){
var c__25771__auto___35271 = cljs.core.chunk_first.call(null,seq__35248_35270__$1);
var G__35272 = cljs.core.chunk_rest.call(null,seq__35248_35270__$1);
var G__35273 = c__25771__auto___35271;
var G__35274 = cljs.core.count.call(null,c__25771__auto___35271);
var G__35275 = (0);
seq__35248_35260 = G__35272;
chunk__35249_35261 = G__35273;
count__35250_35262 = G__35274;
i__35251_35263 = G__35275;
continue;
} else {
var f_35276 = cljs.core.first.call(null,seq__35248_35270__$1);
cljs.core.println.call(null,"  ",f_35276);

var G__35277 = cljs.core.next.call(null,seq__35248_35270__$1);
var G__35278 = null;
var G__35279 = (0);
var G__35280 = (0);
seq__35248_35260 = G__35277;
chunk__35249_35261 = G__35278;
count__35250_35262 = G__35279;
i__35251_35263 = G__35280;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35281 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24986__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24986__auto__)){
return or__24986__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35281);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35281)))?cljs.core.second.call(null,arglists_35281):arglists_35281));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35252 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35253 = null;
var count__35254 = (0);
var i__35255 = (0);
while(true){
if((i__35255 < count__35254)){
var vec__35256 = cljs.core._nth.call(null,chunk__35253,i__35255);
var name = cljs.core.nth.call(null,vec__35256,(0),null);
var map__35257 = cljs.core.nth.call(null,vec__35256,(1),null);
var map__35257__$1 = ((cljs.core.seq_QMARK_.call(null,map__35257))?cljs.core.apply.call(null,cljs.core.hash_map,map__35257):map__35257);
var doc = cljs.core.get.call(null,map__35257__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__35257__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__35282 = seq__35252;
var G__35283 = chunk__35253;
var G__35284 = count__35254;
var G__35285 = (i__35255 + (1));
seq__35252 = G__35282;
chunk__35253 = G__35283;
count__35254 = G__35284;
i__35255 = G__35285;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__35252);
if(temp__4423__auto__){
var seq__35252__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35252__$1)){
var c__25771__auto__ = cljs.core.chunk_first.call(null,seq__35252__$1);
var G__35286 = cljs.core.chunk_rest.call(null,seq__35252__$1);
var G__35287 = c__25771__auto__;
var G__35288 = cljs.core.count.call(null,c__25771__auto__);
var G__35289 = (0);
seq__35252 = G__35286;
chunk__35253 = G__35287;
count__35254 = G__35288;
i__35255 = G__35289;
continue;
} else {
var vec__35258 = cljs.core.first.call(null,seq__35252__$1);
var name = cljs.core.nth.call(null,vec__35258,(0),null);
var map__35259 = cljs.core.nth.call(null,vec__35258,(1),null);
var map__35259__$1 = ((cljs.core.seq_QMARK_.call(null,map__35259))?cljs.core.apply.call(null,cljs.core.hash_map,map__35259):map__35259);
var doc = cljs.core.get.call(null,map__35259__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__35259__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__35290 = cljs.core.next.call(null,seq__35252__$1);
var G__35291 = null;
var G__35292 = (0);
var G__35293 = (0);
seq__35252 = G__35290;
chunk__35253 = G__35291;
count__35254 = G__35292;
i__35255 = G__35293;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map