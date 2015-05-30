// Compiled by ClojureScript 0.0-3291 {:static-fns true, :optimize-constants true}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(){
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__14142){
var vec__14143 = p__14142;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14143,(0),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var G__14144 = reagent.session.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14144) : cljs.core.deref.call(null,G__14144));
})(),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq14140){
var G__14141 = cljs.core.first(seq14140);
var seq14140__$1 = cljs.core.next(seq14140);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__14141,seq14140__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 * returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(){
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__14147){
var vec__14148 = p__14147;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14148,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__14149 = reagent.session.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14149) : cljs.core.deref.call(null,G__14149));
})(),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq14145){
var G__14146 = cljs.core.first(seq14145);
var seq14145__$1 = cljs.core.next(seq14145);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__14146,seq14145__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 * the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(){
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq14150){
var G__14151 = cljs.core.first(seq14150);
var seq14150__$1 = cljs.core.next(seq14150);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14151,seq14150__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
var G__14154 = reagent.session.state;
var G__14155 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14154,G__14155) : cljs.core.reset_BANG_.call(null,G__14154,G__14155));
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
var G__14158 = reagent.session.state;
var G__14159 = m;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14158,G__14159) : cljs.core.reset_BANG_.call(null,G__14158,G__14159));
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__14160_SHARP_){
return cljs.core.assoc_in(p1__14160_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 * and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(){
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__14163){
var vec__14164 = p__14163;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14164,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.array_seq([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq14161){
var G__14162 = cljs.core.first(seq14161);
var seq14161__$1 = cljs.core.next(seq14161);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14162,seq14161__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 * specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(){
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__14167){
var vec__14168 = p__14167;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14168,(0),null);
var cur = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__14169 = reagent.session.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14169) : cljs.core.deref.call(null,G__14169));
})(),ks,default$);
reagent.session.assoc_in_BANG_(ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq14165){
var G__14166 = cljs.core.first(seq14165);
var seq14165__$1 = cljs.core.next(seq14165);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14166,seq14165__$1);
});
/**
 * 'Updates' a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(){
var argseq__5349__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5349__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__14170_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__14170_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq14171){
var G__14172 = cljs.core.first(seq14171);
var seq14171__$1 = cljs.core.next(seq14171);
var G__14173 = cljs.core.first(seq14171__$1);
var seq14171__$2 = cljs.core.next(seq14171__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14172,G__14173,seq14171__$2);
});
