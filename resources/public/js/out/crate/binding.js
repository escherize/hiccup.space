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
var seq__33317 = cljs.core.seq.call(null,self__.watches);
var chunk__33318 = null;
var count__33319 = (0);
var i__33320 = (0);
while(true){
if((i__33320 < count__33319)){
var vec__33321 = cljs.core._nth.call(null,chunk__33318,i__33320);
var key__$1 = cljs.core.nth.call(null,vec__33321,(0),null);
var f = cljs.core.nth.call(null,vec__33321,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);

var G__33323 = seq__33317;
var G__33324 = chunk__33318;
var G__33325 = count__33319;
var G__33326 = (i__33320 + (1));
seq__33317 = G__33323;
chunk__33318 = G__33324;
count__33319 = G__33325;
i__33320 = G__33326;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__33317);
if(temp__4423__auto__){
var seq__33317__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33317__$1)){
var c__25771__auto__ = cljs.core.chunk_first.call(null,seq__33317__$1);
var G__33327 = cljs.core.chunk_rest.call(null,seq__33317__$1);
var G__33328 = c__25771__auto__;
var G__33329 = cljs.core.count.call(null,c__25771__auto__);
var G__33330 = (0);
seq__33317 = G__33327;
chunk__33318 = G__33328;
count__33319 = G__33329;
i__33320 = G__33330;
continue;
} else {
var vec__33322 = cljs.core.first.call(null,seq__33317__$1);
var key__$1 = cljs.core.nth.call(null,vec__33322,(0),null);
var f = cljs.core.nth.call(null,vec__33322,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);

var G__33331 = cljs.core.next.call(null,seq__33317__$1);
var G__33332 = null;
var G__33333 = (0);
var G__33334 = (0);
seq__33317 = G__33331;
chunk__33318 = G__33332;
count__33319 = G__33333;
i__33320 = G__33334;
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
var vec__33336 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));
var atm__$1 = cljs.core.nth.call(null,vec__33336,(0),null);
var path__$2 = cljs.core.nth.call(null,vec__33336,(1),null);
var k = cljs.core.gensym.call(null,"subatom");
var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));
cljs.core.add_watch.call(null,atm__$1,k,((function (path__$1,vec__33336,atm__$1,path__$2,k,sa){
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
});})(path__$1,vec__33336,atm__$1,path__$2,k,sa))
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
var G__33344 = arguments.length;
switch (G__33344) {
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

crate.binding.sub_swap_BANG_.cljs$lang$applyTo = (function (seq33337){
var G__33338 = cljs.core.first.call(null,seq33337);
var seq33337__$1 = cljs.core.next.call(null,seq33337);
var G__33339 = cljs.core.first.call(null,seq33337__$1);
var seq33337__$2 = cljs.core.next.call(null,seq33337__$1);
var G__33340 = cljs.core.first.call(null,seq33337__$2);
var seq33337__$3 = cljs.core.next.call(null,seq33337__$2);
var G__33341 = cljs.core.first.call(null,seq33337__$3);
var seq33337__$4 = cljs.core.next.call(null,seq33337__$3);
var G__33342 = cljs.core.first.call(null,seq33337__$4);
var seq33337__$5 = cljs.core.next.call(null,seq33337__$4);
return crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33338,G__33339,G__33340,G__33341,G__33342,seq33337__$5);
});

crate.binding.sub_swap_BANG_.cljs$lang$maxFixedArity = (5);
crate.binding.sub_destroy_BANG_ = (function crate$binding$sub_destroy_BANG_(sa){
cljs.core.remove_watch.call(null,sa.atm,sa.key);

sa.watches = null;

return sa.atm = null;
});

crate.binding.computable = (function (){var obj33347 = {};
return obj33347;
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
var seq__33348 = cljs.core.seq.call(null,self__.watches);
var chunk__33349 = null;
var count__33350 = (0);
var i__33351 = (0);
while(true){
if((i__33351 < count__33350)){
var vec__33352 = cljs.core._nth.call(null,chunk__33349,i__33351);
var key__$1 = cljs.core.nth.call(null,vec__33352,(0),null);
var f = cljs.core.nth.call(null,vec__33352,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);

var G__33354 = seq__33348;
var G__33355 = chunk__33349;
var G__33356 = count__33350;
var G__33357 = (i__33351 + (1));
seq__33348 = G__33354;
chunk__33349 = G__33355;
count__33350 = G__33356;
i__33351 = G__33357;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__33348);
if(temp__4423__auto__){
var seq__33348__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33348__$1)){
var c__25771__auto__ = cljs.core.chunk_first.call(null,seq__33348__$1);
var G__33358 = cljs.core.chunk_rest.call(null,seq__33348__$1);
var G__33359 = c__25771__auto__;
var G__33360 = cljs.core.count.call(null,c__25771__auto__);
var G__33361 = (0);
seq__33348 = G__33358;
chunk__33349 = G__33359;
count__33350 = G__33360;
i__33351 = G__33361;
continue;
} else {
var vec__33353 = cljs.core.first.call(null,seq__33348__$1);
var key__$1 = cljs.core.nth.call(null,vec__33353,(0),null);
var f = cljs.core.nth.call(null,vec__33353,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);

var G__33362 = cljs.core.next.call(null,seq__33348__$1);
var G__33363 = null;
var G__33364 = (0);
var G__33365 = (0);
seq__33348 = G__33362;
chunk__33349 = G__33363;
count__33350 = G__33364;
i__33351 = G__33365;
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

var seq__33370_33374 = cljs.core.seq.call(null,atms);
var chunk__33371_33375 = null;
var count__33372_33376 = (0);
var i__33373_33377 = (0);
while(true){
if((i__33373_33377 < count__33372_33376)){
var atm_33378 = cljs.core._nth.call(null,chunk__33371_33375,i__33373_33377);
cljs.core.add_watch.call(null,atm_33378,k,((function (seq__33370_33374,chunk__33371_33375,count__33372_33376,i__33373_33377,atm_33378,k,neue){
return (function (_,___$1,___$2,___$3){
return crate.binding._compute.call(null,neue);
});})(seq__33370_33374,chunk__33371_33375,count__33372_33376,i__33373_33377,atm_33378,k,neue))
);

var G__33379 = seq__33370_33374;
var G__33380 = chunk__33371_33375;
var G__33381 = count__33372_33376;
var G__33382 = (i__33373_33377 + (1));
seq__33370_33374 = G__33379;
chunk__33371_33375 = G__33380;
count__33372_33376 = G__33381;
i__33373_33377 = G__33382;
continue;
} else {
var temp__4423__auto___33383 = cljs.core.seq.call(null,seq__33370_33374);
if(temp__4423__auto___33383){
var seq__33370_33384__$1 = temp__4423__auto___33383;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33370_33384__$1)){
var c__25771__auto___33385 = cljs.core.chunk_first.call(null,seq__33370_33384__$1);
var G__33386 = cljs.core.chunk_rest.call(null,seq__33370_33384__$1);
var G__33387 = c__25771__auto___33385;
var G__33388 = cljs.core.count.call(null,c__25771__auto___33385);
var G__33389 = (0);
seq__33370_33374 = G__33386;
chunk__33371_33375 = G__33387;
count__33372_33376 = G__33388;
i__33373_33377 = G__33389;
continue;
} else {
var atm_33390 = cljs.core.first.call(null,seq__33370_33384__$1);
cljs.core.add_watch.call(null,atm_33390,k,((function (seq__33370_33374,chunk__33371_33375,count__33372_33376,i__33373_33377,atm_33390,seq__33370_33384__$1,temp__4423__auto___33383,k,neue){
return (function (_,___$1,___$2,___$3){
return crate.binding._compute.call(null,neue);
});})(seq__33370_33374,chunk__33371_33375,count__33372_33376,i__33373_33377,atm_33390,seq__33370_33384__$1,temp__4423__auto___33383,k,neue))
);

var G__33391 = cljs.core.next.call(null,seq__33370_33384__$1);
var G__33392 = null;
var G__33393 = (0);
var G__33394 = (0);
seq__33370_33374 = G__33391;
chunk__33371_33375 = G__33392;
count__33372_33376 = G__33393;
i__33373_33377 = G__33394;
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
return cljs.core.filter.call(null,(function (p1__33395_SHARP_){
return (p1__33395_SHARP_ > (100));
}),y);
}));
cljs.core.swap_BANG_.call(null,crate.binding.z,cljs.core.conj,(1340));
cljs.core.deref.call(null,crate.binding.y);
cljs.core.deref.call(null,crate.binding.r);
crate.binding.notify = (function crate$binding$notify(w,o,v){
return cljs.core._notify_watches.call(null,w,o,v);
});

crate.binding.bindable_coll = (function (){var obj33397 = {};
return obj33397;
})();


crate.binding.bindable = (function (){var obj33399 = {};
return obj33399;
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
var seq__33400 = cljs.core.seq.call(null,self__.watches);
var chunk__33401 = null;
var count__33402 = (0);
var i__33403 = (0);
while(true){
if((i__33403 < count__33402)){
var vec__33404 = cljs.core._nth.call(null,chunk__33401,i__33403);
var key = cljs.core.nth.call(null,vec__33404,(0),null);
var f = cljs.core.nth.call(null,vec__33404,(1),null);
f.call(null,key,this$__$1,oldval,newval);

var G__33406 = seq__33400;
var G__33407 = chunk__33401;
var G__33408 = count__33402;
var G__33409 = (i__33403 + (1));
seq__33400 = G__33406;
chunk__33401 = G__33407;
count__33402 = G__33408;
i__33403 = G__33409;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__33400);
if(temp__4423__auto__){
var seq__33400__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33400__$1)){
var c__25771__auto__ = cljs.core.chunk_first.call(null,seq__33400__$1);
var G__33410 = cljs.core.chunk_rest.call(null,seq__33400__$1);
var G__33411 = c__25771__auto__;
var G__33412 = cljs.core.count.call(null,c__25771__auto__);
var G__33413 = (0);
seq__33400 = G__33410;
chunk__33401 = G__33411;
count__33402 = G__33412;
i__33403 = G__33413;
continue;
} else {
var vec__33405 = cljs.core.first.call(null,seq__33400__$1);
var key = cljs.core.nth.call(null,vec__33405,(0),null);
var f = cljs.core.nth.call(null,vec__33405,(1),null);
f.call(null,key,this$__$1,oldval,newval);

var G__33414 = cljs.core.next.call(null,seq__33400__$1);
var G__33415 = null;
var G__33416 = (0);
var G__33417 = (0);
seq__33400 = G__33414;
chunk__33401 = G__33415;
count__33402 = G__33416;
i__33403 = G__33417;
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
return (function (_,___$1,___$2,p__33418){
var vec__33419 = p__33418;
var event = cljs.core.nth.call(null,vec__33419,(0),null);
var el = cljs.core.nth.call(null,vec__33419,(1),null);
var v = cljs.core.nth.call(null,vec__33419,(2),null);
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

crate.binding.__GT_path.cljs$lang$applyTo = (function (seq33420){
var G__33421 = cljs.core.first.call(null,seq33420);
var seq33420__$1 = cljs.core.next.call(null,seq33420);
return crate.binding.__GT_path.cljs$core$IFn$_invoke$arity$variadic(G__33421,seq33420__$1);
});
crate.binding.bc_compare = (function crate$binding$bc_compare(bc,neue){
var prev = bc.stuff;
var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));
var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",780060332)));
var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));
var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));
var seq__33430_33438 = cljs.core.seq.call(null,added);
var chunk__33431_33439 = null;
var count__33432_33440 = (0);
var i__33433_33441 = (0);
while(true){
if((i__33433_33441 < count__33432_33440)){
var a_33442 = cljs.core._nth.call(null,chunk__33431_33439,i__33433_33441);
crate.binding.bc_add.call(null,bc,a_33442,a_33442);

var G__33443 = seq__33430_33438;
var G__33444 = chunk__33431_33439;
var G__33445 = count__33432_33440;
var G__33446 = (i__33433_33441 + (1));
seq__33430_33438 = G__33443;
chunk__33431_33439 = G__33444;
count__33432_33440 = G__33445;
i__33433_33441 = G__33446;
continue;
} else {
var temp__4423__auto___33447 = cljs.core.seq.call(null,seq__33430_33438);
if(temp__4423__auto___33447){
var seq__33430_33448__$1 = temp__4423__auto___33447;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33430_33448__$1)){
var c__25771__auto___33449 = cljs.core.chunk_first.call(null,seq__33430_33448__$1);
var G__33450 = cljs.core.chunk_rest.call(null,seq__33430_33448__$1);
var G__33451 = c__25771__auto___33449;
var G__33452 = cljs.core.count.call(null,c__25771__auto___33449);
var G__33453 = (0);
seq__33430_33438 = G__33450;
chunk__33431_33439 = G__33451;
count__33432_33440 = G__33452;
i__33433_33441 = G__33453;
continue;
} else {
var a_33454 = cljs.core.first.call(null,seq__33430_33448__$1);
crate.binding.bc_add.call(null,bc,a_33454,a_33454);

var G__33455 = cljs.core.next.call(null,seq__33430_33448__$1);
var G__33456 = null;
var G__33457 = (0);
var G__33458 = (0);
seq__33430_33438 = G__33455;
chunk__33431_33439 = G__33456;
count__33432_33440 = G__33457;
i__33433_33441 = G__33458;
continue;
}
} else {
}
}
break;
}

var seq__33434 = cljs.core.seq.call(null,removed);
var chunk__33435 = null;
var count__33436 = (0);
var i__33437 = (0);
while(true){
if((i__33437 < count__33436)){
var r = cljs.core._nth.call(null,chunk__33435,i__33437);
crate.binding.bc_remove.call(null,bc,r);

var G__33459 = seq__33434;
var G__33460 = chunk__33435;
var G__33461 = count__33436;
var G__33462 = (i__33437 + (1));
seq__33434 = G__33459;
chunk__33435 = G__33460;
count__33436 = G__33461;
i__33437 = G__33462;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__33434);
if(temp__4423__auto__){
var seq__33434__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33434__$1)){
var c__25771__auto__ = cljs.core.chunk_first.call(null,seq__33434__$1);
var G__33463 = cljs.core.chunk_rest.call(null,seq__33434__$1);
var G__33464 = c__25771__auto__;
var G__33465 = cljs.core.count.call(null,c__25771__auto__);
var G__33466 = (0);
seq__33434 = G__33463;
chunk__33435 = G__33464;
count__33436 = G__33465;
i__33437 = G__33466;
continue;
} else {
var r = cljs.core.first.call(null,seq__33434__$1);
crate.binding.bc_remove.call(null,bc,r);

var G__33467 = cljs.core.next.call(null,seq__33434__$1);
var G__33468 = null;
var G__33469 = (0);
var G__33470 = (0);
seq__33434 = G__33467;
chunk__33435 = G__33468;
count__33436 = G__33469;
i__33437 = G__33470;
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

crate.binding.bound_coll.cljs$core$IFn$_invoke$arity$variadic = (function (atm,p__33473){
var vec__33474 = p__33473;
var path = cljs.core.nth.call(null,vec__33474,(0),null);
var opts = cljs.core.nth.call(null,vec__33474,(1),null);
var vec__33475 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));
var path__$1 = cljs.core.nth.call(null,vec__33475,(0),null);
var opts__$1 = cljs.core.nth.call(null,vec__33475,(1),null);
var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));
var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",-188191168),path__$1);
var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));
var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));
cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (vec__33475,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__33474,path,opts){
return (function (_,___$1,___$2,neue){
return crate.binding.bc_compare.call(null,bc,neue);
});})(vec__33475,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__33474,path,opts))
);

crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));

return bc;
});

crate.binding.bound_coll.cljs$lang$maxFixedArity = (1);

crate.binding.bound_coll.cljs$lang$applyTo = (function (seq33471){
var G__33472 = cljs.core.first.call(null,seq33471);
var seq33471__$1 = cljs.core.next.call(null,seq33471);
return crate.binding.bound_coll.cljs$core$IFn$_invoke$arity$variadic(G__33472,seq33471__$1);
});
crate.binding.map_bound = (function crate$binding$map_bound(){
var argseq__26026__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return crate.binding.map_bound.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26026__auto__);
});

crate.binding.map_bound.cljs$core$IFn$_invoke$arity$variadic = (function (as,atm,p__33479){
var vec__33480 = p__33479;
var opts = cljs.core.nth.call(null,vec__33480,(0),null);
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1148689641),as);
var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts__$1)));
var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));
var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));
cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (opts__$1,atm__$1,opts__$2,bc,vec__33480,opts){
return (function (_,___$1,___$2,neue){
return crate.binding.bc_compare.call(null,bc,neue);
});})(opts__$1,atm__$1,opts__$2,bc,vec__33480,opts))
);

crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));

return bc;
});

crate.binding.map_bound.cljs$lang$maxFixedArity = (2);

crate.binding.map_bound.cljs$lang$applyTo = (function (seq33476){
var G__33477 = cljs.core.first.call(null,seq33476);
var seq33476__$1 = cljs.core.next.call(null,seq33476);
var G__33478 = cljs.core.first.call(null,seq33476__$1);
var seq33476__$2 = cljs.core.next.call(null,seq33476__$1);
return crate.binding.map_bound.cljs$core$IFn$_invoke$arity$variadic(G__33477,G__33478,seq33476__$2);
});
crate.binding.binding_QMARK_ = (function crate$binding$binding_QMARK_(b){
var G__33482 = b;
if(G__33482){
var bit__25660__auto__ = null;
if(cljs.core.truth_((function (){var or__24986__auto__ = bit__25660__auto__;
if(cljs.core.truth_(or__24986__auto__)){
return or__24986__auto__;
} else {
return G__33482.crate$binding$bindable$;
}
})())){
return true;
} else {
if((!G__33482.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__33482);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__33482);
}
});
crate.binding.binding_coll_QMARK_ = (function crate$binding$binding_coll_QMARK_(b){
var G__33484 = b;
if(G__33484){
var bit__25660__auto__ = null;
if(cljs.core.truth_((function (){var or__24986__auto__ = bit__25660__auto__;
if(cljs.core.truth_(or__24986__auto__)){
return or__24986__auto__;
} else {
return G__33484.crate$binding$bindable_coll$;
}
})())){
return true;
} else {
if((!G__33484.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__33484);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__33484);
}
});
crate.binding.deref_QMARK_ = (function crate$binding$deref_QMARK_(atm){
var G__33486 = atm;
if(G__33486){
var bit__25660__auto__ = (G__33486.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__25660__auto__) || (G__33486.cljs$core$IDeref$)){
return true;
} else {
if((!G__33486.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__33486);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__33486);
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

crate.binding.bound.cljs$core$IFn$_invoke$arity$variadic = (function (atm,p__33489){
var vec__33490 = p__33489;
var func = cljs.core.nth.call(null,vec__33490,(0),null);
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

crate.binding.bound.cljs$lang$applyTo = (function (seq33487){
var G__33488 = cljs.core.first.call(null,seq33487);
var seq33487__$1 = cljs.core.next.call(null,seq33487);
return crate.binding.bound.cljs$core$IFn$_invoke$arity$variadic(G__33488,seq33487__$1);
});

//# sourceMappingURL=binding.js.map