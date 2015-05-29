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
var seq__34461_34473 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34462_34474 = null;
var count__34463_34475 = (0);
var i__34464_34476 = (0);
while(true){
if((i__34464_34476 < count__34463_34475)){
var f_34477 = cljs.core._nth.call(null,chunk__34462_34474,i__34464_34476);
cljs.core.println.call(null,"  ",f_34477);

var G__34478 = seq__34461_34473;
var G__34479 = chunk__34462_34474;
var G__34480 = count__34463_34475;
var G__34481 = (i__34464_34476 + (1));
seq__34461_34473 = G__34478;
chunk__34462_34474 = G__34479;
count__34463_34475 = G__34480;
i__34464_34476 = G__34481;
continue;
} else {
var temp__4423__auto___34482 = cljs.core.seq.call(null,seq__34461_34473);
if(temp__4423__auto___34482){
var seq__34461_34483__$1 = temp__4423__auto___34482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34461_34483__$1)){
var c__25771__auto___34484 = cljs.core.chunk_first.call(null,seq__34461_34483__$1);
var G__34485 = cljs.core.chunk_rest.call(null,seq__34461_34483__$1);
var G__34486 = c__25771__auto___34484;
var G__34487 = cljs.core.count.call(null,c__25771__auto___34484);
var G__34488 = (0);
seq__34461_34473 = G__34485;
chunk__34462_34474 = G__34486;
count__34463_34475 = G__34487;
i__34464_34476 = G__34488;
continue;
} else {
var f_34489 = cljs.core.first.call(null,seq__34461_34483__$1);
cljs.core.println.call(null,"  ",f_34489);

var G__34490 = cljs.core.next.call(null,seq__34461_34483__$1);
var G__34491 = null;
var G__34492 = (0);
var G__34493 = (0);
seq__34461_34473 = G__34490;
chunk__34462_34474 = G__34491;
count__34463_34475 = G__34492;
i__34464_34476 = G__34493;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34494 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24986__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24986__auto__)){
return or__24986__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34494);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34494)))?cljs.core.second.call(null,arglists_34494):arglists_34494));
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
var seq__34465 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34466 = null;
var count__34467 = (0);
var i__34468 = (0);
while(true){
if((i__34468 < count__34467)){
var vec__34469 = cljs.core._nth.call(null,chunk__34466,i__34468);
var name = cljs.core.nth.call(null,vec__34469,(0),null);
var map__34470 = cljs.core.nth.call(null,vec__34469,(1),null);
var map__34470__$1 = ((cljs.core.seq_QMARK_.call(null,map__34470))?cljs.core.apply.call(null,cljs.core.hash_map,map__34470):map__34470);
var doc = cljs.core.get.call(null,map__34470__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__34470__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__34495 = seq__34465;
var G__34496 = chunk__34466;
var G__34497 = count__34467;
var G__34498 = (i__34468 + (1));
seq__34465 = G__34495;
chunk__34466 = G__34496;
count__34467 = G__34497;
i__34468 = G__34498;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__34465);
if(temp__4423__auto__){
var seq__34465__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34465__$1)){
var c__25771__auto__ = cljs.core.chunk_first.call(null,seq__34465__$1);
var G__34499 = cljs.core.chunk_rest.call(null,seq__34465__$1);
var G__34500 = c__25771__auto__;
var G__34501 = cljs.core.count.call(null,c__25771__auto__);
var G__34502 = (0);
seq__34465 = G__34499;
chunk__34466 = G__34500;
count__34467 = G__34501;
i__34468 = G__34502;
continue;
} else {
var vec__34471 = cljs.core.first.call(null,seq__34465__$1);
var name = cljs.core.nth.call(null,vec__34471,(0),null);
var map__34472 = cljs.core.nth.call(null,vec__34471,(1),null);
var map__34472__$1 = ((cljs.core.seq_QMARK_.call(null,map__34472))?cljs.core.apply.call(null,cljs.core.hash_map,map__34472):map__34472);
var doc = cljs.core.get.call(null,map__34472__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__34472__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__34503 = cljs.core.next.call(null,seq__34465__$1);
var G__34504 = null;
var G__34505 = (0);
var G__34506 = (0);
seq__34465 = G__34503;
chunk__34466 = G__34504;
count__34467 = G__34505;
i__34468 = G__34506;
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