// Compiled by ClojureScript 0.0-3291 {}
goog.provide('crate.binding');
goog.require('cljs.core');
goog.require('clojure.set');

/**
* @constructor
*/
crate.binding.SubAtom = (function (atm,path,prevhash,watches,key){
this.atm = atm;
this.path = path;
this.prevhash = prevhash;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path);
});

crate.binding.SubAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#<SubAtom: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path))),cljs.core.str(">")].join(''));
});

crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__27329 = cljs.core.seq.call(null,self__.watches);
var chunk__27330 = null;
var count__27331 = (0);
var i__27332 = (0);
while(true){
if((i__27332 < count__27331)){
var vec__27333 = cljs.core._nth.call(null,chunk__27330,i__27332);
var key__$1 = cljs.core.nth.call(null,vec__27333,(0),null);
var f = cljs.core.nth.call(null,vec__27333,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);

var G__27335 = seq__27329;
var G__27336 = chunk__27330;
var G__27337 = count__27331;
var G__27338 = (i__27332 + (1));
seq__27329 = G__27335;
chunk__27330 = G__27336;
count__27331 = G__27337;
i__27332 = G__27338;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__27329);
if(temp__4423__auto__){
var seq__27329__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27329__$1)){
var c__25771__auto__ = cljs.core.chunk_first.call(null,seq__27329__$1);
var G__27339 = cljs.core.chunk_rest.call(null,seq__27329__$1);
var G__27340 = c__25771__auto__;
var G__27341 = cljs.core.count.call(null,c__25771__auto__);
var G__27342 = (0);
seq__27329 = G__27339;
chunk__27330 = G__27340;
count__27331 = G__27341;
i__27332 = G__27342;
continue;
} else {
var vec__27334 = cljs.core.first.call(null,seq__27329__$1);
var key__$1 = cljs.core.nth.call(null,vec__27334,(0),null);
var f = cljs.core.nth.call(null,vec__27334,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);

var G__27343 = cljs.core.next.call(null,seq__27329__$1);
var G__27344 = null;
var G__27345 = (0);
var G__27346 = (0);
seq__27329 = G__27343;
chunk__27330 = G__27344;
count__27331 = G__27345;
i__27332 = G__27346;
continue;
}
} else {
return null;
}
}
break;
}
});

crate.binding.SubAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(f)){
return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else {
return null;
}
});

crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});

crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

crate.binding.SubAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atm","atm",-1963551835,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"prevhash","prevhash",1446045952,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"key","key",124488940,null)], null);
});

crate.binding.SubAtom.cljs$lang$type = true;

crate.binding.SubAtom.cljs$lang$ctorStr = "crate.binding/SubAtom";

crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__25565__auto__,writer__25566__auto__,opt__25567__auto__){
return cljs.core._write.call(null,writer__25566__auto__,"crate.binding/SubAtom");
});

crate.binding.__GT_SubAtom = (function crate$binding$__GT_SubAtom(atm,path,prevhash,watches,key){
return (new crate.binding.SubAtom(atm,path,prevhash,watches,key));
});

crate.binding.subatom = (function crate$binding$subatom(atm,path){
var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var vec__27348 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));
var atm__$1 = cljs.core.nth.call(null,vec__27348,(0),null);
var path__$2 = cljs.core.nth.call(null,vec__27348,(1),null);
var k = cljs.core.gensym.call(null,"subatom");
var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));
cljs.core.add_watch.call(null,atm__$1,k,((function (path__$1,vec__27348,atm__$1,path__$2,k,sa){
return (function (_,___$1,ov,nv){
var latest = cljs.core.get_in.call(null,nv,path__$2);
var prev = cljs.core.get_in.call(null,ov,path__$2);
var latest_hash = cljs.core.hash.call(null,latest);
if((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest))){
sa.prevhash = latest_hash;

return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else {
return null;
}
});})(path__$1,vec__27348,atm__$1,path__$2,k,sa))
);

return sa;
});
/**
 * Sets the value of atom to newval without regard for the
 * current value. Returns newval.
 */
crate.binding.sub_reset_BANG_ = (function crate$binding$sub_reset_BANG_(sa,new_value){
cljs.core.swap_BANG_.call(null,sa.atm,cljs.core.assoc_in,sa.path,new_value);

return new_value;
});
/**
 * Atomically swaps the value of atom to be:
 * (apply f current-value-of-atom args). Note that f may be called
 * multiple times, and thus should be free of side effects.  Returns
 * the value that was swapped in.
 */
crate.binding.sub_swap_BANG_ = (function crate$binding$sub_swap_BANG_(){
var G__27356 = arguments.length;
switch (G__27356) {
case 2:
return crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__26037__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(5)),(0)));
return crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__26037__auto__);

}
});

crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (sa,f){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa)));
});

crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (sa,f,x){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x));
});

crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (sa,f,x,y){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y));
});

crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (sa,f,x,y,z){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y,z));
});

crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (sa,f,x,y,z,more){
return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
});

crate.binding.sub_swap_BANG_.cljs$lang$applyTo = (function (seq27349){
var G__27350 = cljs.core.first.call(null,seq27349);
var seq27349__$1 = cljs.core.next.call(null,seq27349);
var G__27351 = cljs.core.first.call(null,seq27349__$1);
var seq27349__$2 = cljs.core.next.call(null,seq27349__$1);
var G__27352 = cljs.core.first.call(null,seq27349__$2);
var seq27349__$3 = cljs.core.next.call(null,seq27349__$2);
var G__27353 = cljs.core.first.call(null,seq27349__$3);
var seq27349__$4 = cljs.core.next.call(null,seq27349__$3);
var G__27354 = cljs.core.first.call(null,seq27349__$4);
var seq27349__$5 = cljs.core.next.call(null,seq27349__$4);
return crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27350,G__27351,G__27352,G__27353,G__27354,seq27349__$5);
});

crate.binding.sub_swap_BANG_.cljs$lang$maxFixedArity = (5);
crate.binding.sub_destroy_BANG_ = (function crate$binding$sub_destroy_BANG_(sa){
cljs.core.remove_watch.call(null,sa.atm,sa.key);

sa.watches = null;

return sa.atm = null;
});

crate.binding.computable = (function (){var obj27359 = {};
return obj27359;
})();

/**
 * compute the latest value
 */
crate.binding._compute = (function crate$binding$_compute(this$){
if((function (){var and__24974__auto__ = this$;
if(and__24974__auto__){
return this$.crate$binding$computable$_compute$arity$1;
} else {
return and__24974__auto__;
}
})()){
return this$.crate$binding$computable$_compute$arity$1(this$);
} else {
var x__25622__auto__ = (((this$ == null))?null:this$);
return (function (){var or__24986__auto__ = (crate.binding._compute[goog.typeOf(x__25622__auto__)]);
if(or__24986__auto__){
return or__24986__auto__;
} else {
var or__24986__auto____$1 = (crate.binding._compute["_"]);
if(or__24986__auto____$1){
return or__24986__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"computable.-compute",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
*/
crate.binding.Computed = (function (atms,value,func,watches,key){
this.atms = atms;
this.value = value;
this.func = func;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.Computed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

crate.binding.Computed.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

crate.binding.Computed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#<Computed: "),cljs.core.str(cljs.core.pr_str.call(null,self__.value)),cljs.core.str(">")].join(''));
});

crate.binding.Computed.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__27360 = cljs.core.seq.call(null,self__.watches);
var chunk__27361 = null;
var count__27362 = (0);
var i__27363 = (0);
while(true){
if((i__27363 < count__27362)){
var vec__27364 = cljs.core._nth.call(null,chunk__27361,i__27363);
var key__$1 = cljs.core.nth.call(null,vec__27364,(0),null);
var f = cljs.core.nth.call(null,vec__27364,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);

var G__27366 = seq__27360;
var G__27367 = chunk__27361;
var G__27368 = count__27362;
var G__27369 = (i__27363 + (1));
seq__27360 = G__27366;
chunk__27361 = G__27367;
count__27362 = G__27368;
i__27363 = G__27369;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__27360);
if(temp__4423__auto__){
var seq__27360__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27360__$1)){
var c__25771__auto__ = cljs.core.chunk_first.call(null,seq__27360__$1);
var G__27370 = cljs.core.chunk_rest.call(null,seq__27360__$1);
var G__27371 = c__25771__auto__;
var G__27372 = cljs.core.count.call(null,c__25771__auto__);
var G__27373 = (0);
seq__27360 = G__27370;
chunk__27361 = G__27371;
count__27362 = G__27372;
i__27363 = G__27373;
continue;
} else {
var vec__27365 = cljs.core.first.call(null,seq__27360__$1);
var key__$1 = cljs.core.nth.call(null,vec__27365,(0),null);
var f = cljs.core.nth.call(null,vec__27365,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);

var G__27374 = cljs.core.next.call(null,seq__27360__$1);
var G__27375 = null;
var G__27376 = (0);
var G__27377 = (0);
seq__27360 = G__27374;
chunk__27361 = G__27375;
count__27362 = G__27376;
i__27363 = G__27377;
continue;
}
} else {
return null;
}
}
break;
}
});

crate.binding.Computed.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(f)){
return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else {
return null;
}
});

crate.binding.Computed.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});

crate.binding.Computed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

crate.binding.Computed.prototype.crate$binding$computable$ = true;

crate.binding.Computed.prototype.crate$binding$computable$_compute$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var old = this$__$1.value;
this$__$1.value = cljs.core.apply.call(null,self__.func,cljs.core.map.call(null,cljs.core.deref,self__.atms));

return cljs.core._notify_watches.call(null,this$__$1,old,this$__$1.value);
});

crate.binding.Computed.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atms","atms",-855465715,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"key","key",124488940,null)], null);
});

crate.binding.Computed.cljs$lang$type = true;

crate.binding.Computed.cljs$lang$ctorStr = "crate.binding/Computed";

crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__25565__auto__,writer__25566__auto__,opt__25567__auto__){
return cljs.core._write.call(null,writer__25566__auto__,"crate.binding/Computed");
});

crate.binding.__GT_Computed = (function crate$binding$__GT_Computed(atms,value,func,watches,key){
return (new crate.binding.Computed(atms,value,func,watches,key));
});

crate.binding.computed = (function crate$binding$computed(atms,func){
var k = cljs.core.gensym.call(null,"computed");
var neue = (new crate.binding.Computed(atms,null,func,null,k));
crate.binding._compute.call(null,neue);

var seq__27382_27386 = cljs.core.seq.call(null,atms);
var chunk__27383_27387 = null;
var count__27384_27388 = (0);
var i__27385_27389 = (0);
while(true){
if((i__27385_27389 < count__27384_27388)){
var atm_27390 = cljs.core._nth.call(null,chunk__27383_27387,i__27385_27389);
cljs.core.add_watch.call(null,atm_27390,k,((function (seq__27382_27386,chunk__27383_27387,count__27384_27388,i__27385_27389,atm_27390,k,neue){
return (function (_,___$1,___$2,___$3){
return crate.binding._compute.call(null,neue);
});})(seq__27382_27386,chunk__27383_27387,count__27384_27388,i__27385_27389,atm_27390,k,neue))
);

var G__27391 = seq__27382_27386;
var G__27392 = chunk__27383_27387;
var G__27393 = count__27384_27388;
var G__27394 = (i__27385_27389 + (1));
seq__27382_27386 = G__27391;
chunk__27383_27387 = G__27392;
count__27384_27388 = G__27393;
i__27385_27389 = G__27394;
continue;
} else {
var temp__4423__auto___27395 = cljs.core.seq.call(null,seq__27382_27386);
if(temp__4423__auto___27395){
var seq__27382_27396__$1 = temp__4423__auto___27395;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27382_27396__$1)){
var c__25771__auto___27397 = cljs.core.chunk_first.call(null,seq__27382_27396__$1);
var G__27398 = cljs.core.chunk_rest.call(null,seq__27382_27396__$1);
var G__27399 = c__25771__auto___27397;
var G__27400 = cljs.core.count.call(null,c__25771__auto___27397);
var G__27401 = (0);
seq__27382_27386 = G__27398;
chunk__27383_27387 = G__27399;
count__27384_27388 = G__27400;
i__27385_27389 = G__27401;
continue;
} else {
var atm_27402 = cljs.core.first.call(null,seq__27382_27396__$1);
cljs.core.add_watch.call(null,atm_27402,k,((function (seq__27382_27386,chunk__27383_27387,count__27384_27388,i__27385_27389,atm_27402,seq__27382_27396__$1,temp__4423__auto___27395,k,neue){
return (function (_,___$1,___$2,___$3){
return crate.binding._compute.call(null,neue);
});})(seq__27382_27386,chunk__27383_27387,count__27384_27388,i__27385_27389,atm_27402,seq__27382_27396__$1,temp__4423__auto___27395,k,neue))
);

var G__27403 = cljs.core.next.call(null,seq__27382_27396__$1);
var G__27404 = null;
var G__27405 = (0);
var G__27406 = (0);
seq__27382_27386 = G__27403;
chunk__27383_27387 = G__27404;
count__27384_27388 = G__27405;
i__27385_27389 = G__27406;
continue;
}
} else {
}
}
break;
}

return neue;
});
crate.binding.z = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crate.binding.y = crate.binding.computed.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.z], null),(function (z){
return cljs.core.filter.call(null,cljs.core.even_QMARK_,z);
}));
crate.binding.r = crate.binding.computed.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.y], null),(function (y){
return cljs.core.filter.call(null,(function (p1__27407_SHARP_){
return (p1__27407_SHARP_ > (100));
}),y);
}));
cljs.core.swap_BANG_.call(null,crate.binding.z,cljs.core.conj,(1340));
cljs.core.deref.call(null,crate.binding.y);
cljs.core.deref.call(null,crate.binding.r);
crate.binding.notify = (function crate$binding$notify(w,o,v){
return cljs.core._notify_watches.call(null,w,o,v);
});

crate.binding.bindable_coll = (function (){var obj27409 = {};
return obj27409;
})();


crate.binding.bindable = (function (){var obj27411 = {};
return obj27411;
})();

/**
 * get the current value of this binding
 */
crate.binding._value = (function crate$binding$_value(this$){
if((function (){var and__24974__auto__ = this$;
if(and__24974__auto__){
return this$.crate$binding$bindable$_value$arity$1;
} else {
return and__24974__auto__;
}
})()){
return this$.crate$binding$bindable$_value$arity$1(this$);
} else {
var x__25622__auto__ = (((this$ == null))?null:this$);
return (function (){var or__24986__auto__ = (crate.binding._value[goog.typeOf(x__25622__auto__)]);
if(or__24986__auto__){
return or__24986__auto__;
} else {
var or__24986__auto____$1 = (crate.binding._value["_"]);
if(or__24986__auto____$1){
return or__24986__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"bindable.-value",this$);
}
}
})().call(null,this$);
}
});

/**
 * On change of this binding execute func
 */
crate.binding._on_change = (function crate$binding$_on_change(this$,func){
if((function (){var and__24974__auto__ = this$;
if(and__24974__auto__){
return this$.crate$binding$bindable$_on_change$arity$2;
} else {
return and__24974__auto__;
}
})()){
return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else {
var x__25622__auto__ = (((this$ == null))?null:this$);
return (function (){var or__24986__auto__ = (crate.binding._on_change[goog.typeOf(x__25622__auto__)]);
if(or__24986__auto__){
return or__24986__auto__;
} else {
var or__24986__auto____$1 = (crate.binding._on_change["_"]);
if(or__24986__auto____$1){
return or__24986__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"bindable.-on-change",this$);
}
}
})().call(null,this$,func);
}
});


/**
* @constructor
*/
crate.binding.atom_binding = (function (atm,value_func){
this.atm = atm;
this.value_func = value_func;
})
crate.binding.atom_binding.prototype.crate$binding$bindable$ = true;

crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.value_func.call(null,cljs.core.deref.call(null,self__.atm));
});

crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var self__ = this;
var this$__$1 = this;
return cljs.core.add_watch.call(null,self__.atm,cljs.core.gensym.call(null,"atom-binding"),((function (this$__$1){
return (function (){
return func.call(null,crate.binding._value.call(null,this$__$1));
});})(this$__$1))
);
});

crate.binding.atom_binding.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atm","atm",-1963551835,null),new cljs.core.Symbol(null,"value-func","value-func",2077951825,null)], null);
});

crate.binding.atom_binding.cljs$lang$type = true;

crate.binding.atom_binding.cljs$lang$ctorStr = "crate.binding/atom-binding";

crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__25565__auto__,writer__25566__auto__,opt__25567__auto__){
return cljs.core._write.call(null,writer__25566__auto__,"crate.binding/atom-binding");
});

crate.binding.__GT_atom_binding = (function crate$binding$__GT_atom_binding(atm,value_func){
return (new crate.binding.atom_binding(atm,value_func));
});


/**
* @constructor
*/
crate.binding.notifier = (function (watches){
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 2;
this.cljs$lang$protocol_mask$partition0$ = 0;
})
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__27412 = cljs.core.seq.call(null,self__.watches);
var chunk__27413 = null;
var count__27414 = (0);
var i__27415 = (0);
while(true){
if((i__27415 < count__27414)){
var vec__27416 = cljs.core._nth.call(null,chunk__27413,i__27415);
var key = cljs.core.nth.call(null,vec__27416,(0),null);
var f = cljs.core.nth.call(null,vec__27416,(1),null);
f.call(null,key,this$__$1,oldval,newval);

var G__27418 = seq__27412;
var G__27419 = chunk__27413;
var G__27420 = count__27414;
var G__27421 = (i__27415 + (1));
seq__27412 = G__27418;
chunk__27413 = G__27419;
count__27414 = G__27420;
i__27415 = G__27421;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__27412);
if(temp__4423__auto__){
var seq__27412__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27412__$1)){
var c__25771__auto__ = cljs.core.chunk_first.call(null,seq__27412__$1);
var G__27422 = cljs.core.chunk_rest.call(null,seq__27412__$1);
var G__27423 = c__25771__auto__;
var G__27424 = cljs.core.count.call(null,c__25771__auto__);
var G__27425 = (0);
seq__27412 = G__27422;
chunk__27413 = G__27423;
count__27414 = G__27424;
i__27415 = G__27425;
continue;
} else {
var vec__27417 = cljs.core.first.call(null,seq__27412__$1);
var key = cljs.core.nth.call(null,vec__27417,(0),null);
var f = cljs.core.nth.call(null,vec__27417,(1),null);
f.call(null,key,this$__$1,oldval,newval);

var G__27426 = cljs.core.next.call(null,seq__27412__$1);
var G__27427 = null;
var G__27428 = (0);
var G__27429 = (0);
seq__27412 = G__27426;
chunk__27413 = G__27427;
count__27414 = G__27428;
i__27415 = G__27429;
continue;
}
} else {
return null;
}
}
break;
}
});

crate.binding.notifier.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

crate.binding.notifier.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"watches","watches",1367433992,null)], null);
});

crate.binding.notifier.cljs$lang$type = true;

crate.binding.notifier.cljs$lang$ctorStr = "crate.binding/notifier";

crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__25565__auto__,writer__25566__auto__,opt__25567__auto__){
return cljs.core._write.call(null,writer__25566__auto__,"crate.binding/notifier");
});

crate.binding.__GT_notifier = (function crate$binding$__GT_notifier(watches){
return (new crate.binding.notifier(watches));
});


/**
* @constructor
*/
crate.binding.bound_collection = (function (atm,notif,opts,stuff){
this.atm = atm;
this.notif = notif;
this.opts = opts;
this.stuff = stuff;
})
crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = true;

crate.binding.bound_collection.prototype.crate$binding$bindable$ = true;

crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.call(null,new cljs.core.Keyword(null,"elem","elem",618631056),cljs.core.vals.call(null,this$__$1.stuff));
});

crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var self__ = this;
var this$__$1 = this;
return cljs.core.add_watch.call(null,self__.notif,cljs.core.gensym.call(null,"bound-coll"),((function (this$__$1){
return (function (_,___$1,___$2,p__27430){
var vec__27431 = p__27430;
var event = cljs.core.nth.call(null,vec__27431,(0),null);
var el = cljs.core.nth.call(null,vec__27431,(1),null);
var v = cljs.core.nth.call(null,vec__27431,(2),null);
return func.call(null,event,el,v);
});})(this$__$1))
);
});

crate.binding.bound_collection.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atm","atm",-1963551835,null),new cljs.core.Symbol(null,"notif","notif",-1551848296,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"stuff","stuff",-411032116,null)], null);
});

crate.binding.bound_collection.cljs$lang$type = true;

crate.binding.bound_collection.cljs$lang$ctorStr = "crate.binding/bound-collection";

crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__25565__auto__,writer__25566__auto__,opt__25567__auto__){
return cljs.core._write.call(null,writer__25566__auto__,"crate.binding/bound-collection");
});

crate.binding.__GT_bound_collection = (function crate$binding$__GT_bound_collection(atm,notif,opts,stuff){
return (new crate.binding.bound_collection(atm,notif,opts,stuff));
});

crate.binding.opt = (function crate$binding$opt(bc,k){
return bc.opts.call(null,k);
});
crate.binding.bc_add = (function crate$binding$bc_add(bc,path,key){
var sa = crate.binding.subatom.call(null,bc.atm,path);
var elem = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"as","as",1148689641)).call(null,sa);
bc.stuff = cljs.core.assoc.call(null,bc.stuff,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",618631056),elem,new cljs.core.Keyword(null,"subatom","subatom",-95454370),sa], null));

return crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add","add",235287739),elem,cljs.core.deref.call(null,sa)], null));
});
crate.binding.bc_remove = (function crate$binding$bc_remove(bc,key){
var notif = bc.notif;
var prev = bc.stuff.call(null,key);
bc.stuff = cljs.core.dissoc.call(null,bc.stuff,key);

crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(prev),null], null));

return crate.binding.sub_destroy_BANG_.call(null,new cljs.core.Keyword(null,"subatom","subatom",-95454370).cljs$core$IFn$_invoke$arity$1(prev));
});
crate.binding.__GT_indexed = (function crate$binding$__GT_indexed(coll){
if(cljs.core.map_QMARK_.call(null,coll)){
return cljs.core.seq.call(null,coll);
} else {
if(cljs.core.set_QMARK_.call(null,coll)){
return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.identity),coll);
} else {
return cljs.core.map_indexed.call(null,cljs.core.vector,coll);

}
}
});
crate.binding.__GT_keyed = (function crate$binding$__GT_keyed(coll,keyfn){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,keyfn,crate.binding.__GT_indexed.call(null,coll)));
});
crate.binding.__GT_path = (function crate$binding$__GT_path(){
var argseq__26026__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return crate.binding.__GT_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26026__auto__);
});

crate.binding.__GT_path.cljs$core$IFn$_invoke$arity$variadic = (function (bc,segs){
return cljs.core.concat.call(null,(function (){var or__24986__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_(or__24986__auto__)){
return or__24986__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
});

crate.binding.__GT_path.cljs$lang$maxFixedArity = (1);

crate.binding.__GT_path.cljs$lang$applyTo = (function (seq27432){
var G__27433 = cljs.core.first.call(null,seq27432);
var seq27432__$1 = cljs.core.next.call(null,seq27432);
return crate.binding.__GT_path.cljs$core$IFn$_invoke$arity$variadic(G__27433,seq27432__$1);
});
crate.binding.bc_compare = (function crate$binding$bc_compare(bc,neue){
var prev = bc.stuff;
var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));
var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",780060332)));
var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));
var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));
var seq__27442_27450 = cljs.core.seq.call(null,added);
var chunk__27443_27451 = null;
var count__27444_27452 = (0);
var i__27445_27453 = (0);
while(true){
if((i__27445_27453 < count__27444_27452)){
var a_27454 = cljs.core._nth.call(null,chunk__27443_27451,i__27445_27453);
crate.binding.bc_add.call(null,bc,a_27454,a_27454);

var G__27455 = seq__27442_27450;
var G__27456 = chunk__27443_27451;
var G__27457 = count__27444_27452;
var G__27458 = (i__27445_27453 + (1));
seq__27442_27450 = G__27455;
chunk__27443_27451 = G__27456;
count__27444_27452 = G__27457;
i__27445_27453 = G__27458;
continue;
} else {
var temp__4423__auto___27459 = cljs.core.seq.call(null,seq__27442_27450);
if(temp__4423__auto___27459){
var seq__27442_27460__$1 = temp__4423__auto___27459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27442_27460__$1)){
var c__25771__auto___27461 = cljs.core.chunk_first.call(null,seq__27442_27460__$1);
var G__27462 = cljs.core.chunk_rest.call(null,seq__27442_27460__$1);
var G__27463 = c__25771__auto___27461;
var G__27464 = cljs.core.count.call(null,c__25771__auto___27461);
var G__27465 = (0);
seq__27442_27450 = G__27462;
chunk__27443_27451 = G__27463;
count__27444_27452 = G__27464;
i__27445_27453 = G__27465;
continue;
} else {
var a_27466 = cljs.core.first.call(null,seq__27442_27460__$1);
crate.binding.bc_add.call(null,bc,a_27466,a_27466);

var G__27467 = cljs.core.next.call(null,seq__27442_27460__$1);
var G__27468 = null;
var G__27469 = (0);
var G__27470 = (0);
seq__27442_27450 = G__27467;
chunk__27443_27451 = G__27468;
count__27444_27452 = G__27469;
i__27445_27453 = G__27470;
continue;
}
} else {
}
}
break;
}

var seq__27446 = cljs.core.seq.call(null,removed);
var chunk__27447 = null;
var count__27448 = (0);
var i__27449 = (0);
while(true){
if((i__27449 < count__27448)){
var r = cljs.core._nth.call(null,chunk__27447,i__27449);
crate.binding.bc_remove.call(null,bc,r);

var G__27471 = seq__27446;
var G__27472 = chunk__27447;
var G__27473 = count__27448;
var G__27474 = (i__27449 + (1));
seq__27446 = G__27471;
chunk__27447 = G__27472;
count__27448 = G__27473;
i__27449 = G__27474;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__27446);
if(temp__4423__auto__){
var seq__27446__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27446__$1)){
var c__25771__auto__ = cljs.core.chunk_first.call(null,seq__27446__$1);
var G__27475 = cljs.core.chunk_rest.call(null,seq__27446__$1);
var G__27476 = c__25771__auto__;
var G__27477 = cljs.core.count.call(null,c__25771__auto__);
var G__27478 = (0);
seq__27446 = G__27475;
chunk__27447 = G__27476;
count__27448 = G__27477;
i__27449 = G__27478;
continue;
} else {
var r = cljs.core.first.call(null,seq__27446__$1);
crate.binding.bc_remove.call(null,bc,r);

var G__27479 = cljs.core.next.call(null,seq__27446__$1);
var G__27480 = null;
var G__27481 = (0);
var G__27482 = (0);
seq__27446 = G__27479;
chunk__27447 = G__27480;
count__27448 = G__27481;
i__27449 = G__27482;
continue;
}
} else {
return null;
}
}
break;
}
});
crate.binding.bound_coll = (function crate$binding$bound_coll(){
var argseq__26026__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return crate.binding.bound_coll.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26026__auto__);
});

crate.binding.bound_coll.cljs$core$IFn$_invoke$arity$variadic = (function (atm,p__27485){
var vec__27486 = p__27485;
var path = cljs.core.nth.call(null,vec__27486,(0),null);
var opts = cljs.core.nth.call(null,vec__27486,(1),null);
var vec__27487 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));
var path__$1 = cljs.core.nth.call(null,vec__27487,(0),null);
var opts__$1 = cljs.core.nth.call(null,vec__27487,(1),null);
var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));
var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",-188191168),path__$1);
var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));
var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));
cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (vec__27487,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__27486,path,opts){
return (function (_,___$1,___$2,neue){
return crate.binding.bc_compare.call(null,bc,neue);
});})(vec__27487,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__27486,path,opts))
);

crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));

return bc;
});

crate.binding.bound_coll.cljs$lang$maxFixedArity = (1);

crate.binding.bound_coll.cljs$lang$applyTo = (function (seq27483){
var G__27484 = cljs.core.first.call(null,seq27483);
var seq27483__$1 = cljs.core.next.call(null,seq27483);
return crate.binding.bound_coll.cljs$core$IFn$_invoke$arity$variadic(G__27484,seq27483__$1);
});
crate.binding.map_bound = (function crate$binding$map_bound(){
var argseq__26026__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return crate.binding.map_bound.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26026__auto__);
});

crate.binding.map_bound.cljs$core$IFn$_invoke$arity$variadic = (function (as,atm,p__27491){
var vec__27492 = p__27491;
var opts = cljs.core.nth.call(null,vec__27492,(0),null);
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1148689641),as);
var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts__$1)));
var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));
var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));
cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (opts__$1,atm__$1,opts__$2,bc,vec__27492,opts){
return (function (_,___$1,___$2,neue){
return crate.binding.bc_compare.call(null,bc,neue);
});})(opts__$1,atm__$1,opts__$2,bc,vec__27492,opts))
);

crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));

return bc;
});

crate.binding.map_bound.cljs$lang$maxFixedArity = (2);

crate.binding.map_bound.cljs$lang$applyTo = (function (seq27488){
var G__27489 = cljs.core.first.call(null,seq27488);
var seq27488__$1 = cljs.core.next.call(null,seq27488);
var G__27490 = cljs.core.first.call(null,seq27488__$1);
var seq27488__$2 = cljs.core.next.call(null,seq27488__$1);
return crate.binding.map_bound.cljs$core$IFn$_invoke$arity$variadic(G__27489,G__27490,seq27488__$2);
});
crate.binding.binding_QMARK_ = (function crate$binding$binding_QMARK_(b){
var G__27494 = b;
if(G__27494){
var bit__25660__auto__ = null;
if(cljs.core.truth_((function (){var or__24986__auto__ = bit__25660__auto__;
if(cljs.core.truth_(or__24986__auto__)){
return or__24986__auto__;
} else {
return G__27494.crate$binding$bindable$;
}
})())){
return true;
} else {
if((!G__27494.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__27494);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__27494);
}
});
crate.binding.binding_coll_QMARK_ = (function crate$binding$binding_coll_QMARK_(b){
var G__27496 = b;
if(G__27496){
var bit__25660__auto__ = null;
if(cljs.core.truth_((function (){var or__24986__auto__ = bit__25660__auto__;
if(cljs.core.truth_(or__24986__auto__)){
return or__24986__auto__;
} else {
return G__27496.crate$binding$bindable_coll$;
}
})())){
return true;
} else {
if((!G__27496.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__27496);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__27496);
}
});
crate.binding.deref_QMARK_ = (function crate$binding$deref_QMARK_(atm){
var G__27498 = atm;
if(G__27498){
var bit__25660__auto__ = (G__27498.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__25660__auto__) || (G__27498.cljs$core$IDeref$)){
return true;
} else {
if((!G__27498.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__27498);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__27498);
}
});
crate.binding.value = (function crate$binding$value(b){
return crate.binding._value.call(null,b);
});
crate.binding.index = (function crate$binding$index(sub_atom){
return cljs.core.last.call(null,sub_atom.path);
});
crate.binding.on_change = (function crate$binding$on_change(b,func){
return crate.binding._on_change.call(null,b,func);
});
crate.binding.bound = (function crate$binding$bound(){
var argseq__26026__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return crate.binding.bound.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26026__auto__);
});

crate.binding.bound.cljs$core$IFn$_invoke$arity$variadic = (function (atm,p__27501){
var vec__27502 = p__27501;
var func = cljs.core.nth.call(null,vec__27502,(0),null);
var func__$1 = (function (){var or__24986__auto__ = func;
if(cljs.core.truth_(or__24986__auto__)){
return or__24986__auto__;
} else {
return cljs.core.identity;
}
})();
return (new crate.binding.atom_binding(atm,func__$1));
});

crate.binding.bound.cljs$lang$maxFixedArity = (1);

crate.binding.bound.cljs$lang$applyTo = (function (seq27499){
var G__27500 = cljs.core.first.call(null,seq27499);
var seq27499__$1 = cljs.core.next.call(null,seq27499);
return crate.binding.bound.cljs$core$IFn$_invoke$arity$variadic(G__27500,seq27499__$1);
});

//# sourceMappingURL=binding.js.map