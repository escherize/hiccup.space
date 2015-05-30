// Compiled by ClojureScript 0.0-3291 {:static-fns true, :optimize-constants true}
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
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__13150 = self__.atm;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13150) : cljs.core.deref.call(null,G__13150));
})(),self__.path);
});

crate.binding.SubAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,[cljs.core.str("#<SubAtom: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__13151 = self__.atm;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13151) : cljs.core.deref.call(null,G__13151));
})(),self__.path)], 0))),cljs.core.str(">")].join(''));
});

crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__13152 = cljs.core.seq(self__.watches);
var chunk__13153 = null;
var count__13154 = (0);
var i__13155 = (0);
while(true){
if((i__13155 < count__13154)){
var vec__13156 = chunk__13153.cljs$core$IIndexed$_nth$arity$2(null,i__13155);
var key__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13156,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13156,(1),null);
var G__13157_13167 = key__$1;
var G__13158_13168 = this$__$1;
var G__13159_13169 = oldval;
var G__13160_13170 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13157_13167,G__13158_13168,G__13159_13169,G__13160_13170) : f.call(null,G__13157_13167,G__13158_13168,G__13159_13169,G__13160_13170));

var G__13171 = seq__13152;
var G__13172 = chunk__13153;
var G__13173 = count__13154;
var G__13174 = (i__13155 + (1));
seq__13152 = G__13171;
chunk__13153 = G__13172;
count__13154 = G__13173;
i__13155 = G__13174;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq(seq__13152);
if(temp__4423__auto__){
var seq__13152__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13152__$1)){
var c__5094__auto__ = cljs.core.chunk_first(seq__13152__$1);
var G__13175 = cljs.core.chunk_rest(seq__13152__$1);
var G__13176 = c__5094__auto__;
var G__13177 = cljs.core.count(c__5094__auto__);
var G__13178 = (0);
seq__13152 = G__13175;
chunk__13153 = G__13176;
count__13154 = G__13177;
i__13155 = G__13178;
continue;
} else {
var vec__13161 = cljs.core.first(seq__13152__$1);
var key__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13161,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13161,(1),null);
var G__13162_13179 = key__$1;
var G__13163_13180 = this$__$1;
var G__13164_13181 = oldval;
var G__13165_13182 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13162_13179,G__13163_13180,G__13164_13181,G__13165_13182) : f.call(null,G__13162_13179,G__13163_13180,G__13164_13181,G__13165_13182));

var G__13183 = cljs.core.next(seq__13152__$1);
var G__13184 = null;
var G__13185 = (0);
var G__13186 = (0);
seq__13152 = G__13183;
chunk__13153 = G__13184;
count__13154 = G__13185;
i__13155 = G__13186;
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
return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key__$1,f);
} else {
return null;
}
});

crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key__$1);
});

crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__13166 = this$__$1;
return goog.getUid(G__13166);
});

crate.binding.SubAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atm","atm",-1963551835,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"prevhash","prevhash",1446045952,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"key","key",124488940,null)], null);
});

crate.binding.SubAtom.cljs$lang$type = true;

crate.binding.SubAtom.cljs$lang$ctorStr = "crate.binding/SubAtom";

crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write(writer__4889__auto__,"crate.binding/SubAtom");
});

crate.binding.__GT_SubAtom = (function crate$binding$__GT_SubAtom(atm,path,prevhash,watches,key){
return (new crate.binding.SubAtom(atm,path,prevhash,watches,key));
});

crate.binding.subatom = (function crate$binding$subatom(atm,path){
var path__$1 = ((cljs.core.coll_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var vec__13189 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));
var atm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13189,(0),null);
var path__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13189,(1),null);
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("subatom");
var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__13190 = atm__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13190) : cljs.core.deref.call(null,G__13190));
})(),path__$2)),null,k));
cljs.core.add_watch(atm__$1,k,((function (path__$1,vec__13189,atm__$1,path__$2,k,sa){
return (function (_,___$1,ov,nv){
var latest = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(nv,path__$2);
var prev = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ov,path__$2);
var latest_hash = cljs.core.hash(latest);
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev,latest))){
sa.prevhash = latest_hash;

return sa.cljs$core$IWatchable$_notify_watches$arity$3(null,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ov,path__$2),latest);
} else {
return null;
}
});})(path__$1,vec__13189,atm__$1,path__$2,k,sa))
);

return sa;
});
/**
 * Sets the value of atom to newval without regard for the
 * current value. Returns newval.
 */
crate.binding.sub_reset_BANG_ = (function crate$binding$sub_reset_BANG_(sa,new_value){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sa.atm,cljs.core.assoc_in,sa.path,new_value);

return new_value;
});
/**
 * Atomically swaps the value of atom to be:
 * (apply f current-value-of-atom args). Note that f may be called
 * multiple times, and thus should be free of side effects.  Returns
 * the value that was swapped in.
 */
crate.binding.sub_swap_BANG_ = (function crate$binding$sub_swap_BANG_(){
var G__13198 = arguments.length;
switch (G__13198) {
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
var argseq__5360__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(5)),(0)));
return crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5360__auto__);

}
});

crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (sa,f){
return crate.binding.sub_reset_BANG_(sa,(function (){var G__13199 = (function (){var G__13200 = sa;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13200) : cljs.core.deref.call(null,G__13200));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13199) : f.call(null,G__13199));
})());
});

crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (sa,f,x){
return crate.binding.sub_reset_BANG_(sa,(function (){var G__13201 = (function (){var G__13203 = sa;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13203) : cljs.core.deref.call(null,G__13203));
})();
var G__13202 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13201,G__13202) : f.call(null,G__13201,G__13202));
})());
});

crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (sa,f,x,y){
return crate.binding.sub_reset_BANG_(sa,(function (){var G__13204 = (function (){var G__13207 = sa;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13207) : cljs.core.deref.call(null,G__13207));
})();
var G__13205 = x;
var G__13206 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13204,G__13205,G__13206) : f.call(null,G__13204,G__13205,G__13206));
})());
});

crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (sa,f,x,y,z){
return crate.binding.sub_reset_BANG_(sa,(function (){var G__13208 = (function (){var G__13212 = sa;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13212) : cljs.core.deref.call(null,G__13212));
})();
var G__13209 = x;
var G__13210 = y;
var G__13211 = z;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13208,G__13209,G__13210,G__13211) : f.call(null,G__13208,G__13209,G__13210,G__13211));
})());
});

crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (sa,f,x,y,z,more){
return crate.binding.sub_reset_BANG_(sa,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,(function (){var G__13213 = sa;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13213) : cljs.core.deref.call(null,G__13213));
})(),x,y,z,cljs.core.array_seq([more], 0)));
});

crate.binding.sub_swap_BANG_.cljs$lang$applyTo = (function (seq13191){
var G__13192 = cljs.core.first(seq13191);
var seq13191__$1 = cljs.core.next(seq13191);
var G__13193 = cljs.core.first(seq13191__$1);
var seq13191__$2 = cljs.core.next(seq13191__$1);
var G__13194 = cljs.core.first(seq13191__$2);
var seq13191__$3 = cljs.core.next(seq13191__$2);
var G__13195 = cljs.core.first(seq13191__$3);
var seq13191__$4 = cljs.core.next(seq13191__$3);
var G__13196 = cljs.core.first(seq13191__$4);
var seq13191__$5 = cljs.core.next(seq13191__$4);
return crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13192,G__13193,G__13194,G__13195,G__13196,seq13191__$5);
});

crate.binding.sub_swap_BANG_.cljs$lang$maxFixedArity = (5);
crate.binding.sub_destroy_BANG_ = (function crate$binding$sub_destroy_BANG_(sa){
cljs.core.remove_watch(sa.atm,sa.key);

sa.watches = null;

return sa.atm = null;
});

crate.binding.computable = (function (){var obj13216 = {};
return obj13216;
})();

/**
 * compute the latest value
 */
crate.binding._compute = (function crate$binding$_compute(this$){
if((function (){var and__4297__auto__ = this$;
if(and__4297__auto__){
return this$.crate$binding$computable$_compute$arity$1;
} else {
return and__4297__auto__;
}
})()){
return this$.crate$binding$computable$_compute$arity$1(this$);
} else {
var x__4945__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4309__auto__ = (crate.binding._compute[(function (){var G__13220 = x__4945__auto__;
return goog.typeOf(G__13220);
})()]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (crate.binding._compute["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol("computable.-compute",this$);
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
return cljs.core._write(writer,[cljs.core.str("#<Computed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.value], 0))),cljs.core.str(">")].join(''));
});

crate.binding.Computed.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__13221 = cljs.core.seq(self__.watches);
var chunk__13222 = null;
var count__13223 = (0);
var i__13224 = (0);
while(true){
if((i__13224 < count__13223)){
var vec__13225 = chunk__13222.cljs$core$IIndexed$_nth$arity$2(null,i__13224);
var key__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13225,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13225,(1),null);
var G__13226_13236 = key__$1;
var G__13227_13237 = this$__$1;
var G__13228_13238 = oldval;
var G__13229_13239 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13226_13236,G__13227_13237,G__13228_13238,G__13229_13239) : f.call(null,G__13226_13236,G__13227_13237,G__13228_13238,G__13229_13239));

var G__13240 = seq__13221;
var G__13241 = chunk__13222;
var G__13242 = count__13223;
var G__13243 = (i__13224 + (1));
seq__13221 = G__13240;
chunk__13222 = G__13241;
count__13223 = G__13242;
i__13224 = G__13243;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq(seq__13221);
if(temp__4423__auto__){
var seq__13221__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13221__$1)){
var c__5094__auto__ = cljs.core.chunk_first(seq__13221__$1);
var G__13244 = cljs.core.chunk_rest(seq__13221__$1);
var G__13245 = c__5094__auto__;
var G__13246 = cljs.core.count(c__5094__auto__);
var G__13247 = (0);
seq__13221 = G__13244;
chunk__13222 = G__13245;
count__13223 = G__13246;
i__13224 = G__13247;
continue;
} else {
var vec__13230 = cljs.core.first(seq__13221__$1);
var key__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13230,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13230,(1),null);
var G__13231_13248 = key__$1;
var G__13232_13249 = this$__$1;
var G__13233_13250 = oldval;
var G__13234_13251 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13231_13248,G__13232_13249,G__13233_13250,G__13234_13251) : f.call(null,G__13231_13248,G__13232_13249,G__13233_13250,G__13234_13251));

var G__13252 = cljs.core.next(seq__13221__$1);
var G__13253 = null;
var G__13254 = (0);
var G__13255 = (0);
seq__13221 = G__13252;
chunk__13222 = G__13253;
count__13223 = G__13254;
i__13224 = G__13255;
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
return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key__$1,f);
} else {
return null;
}
});

crate.binding.Computed.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key__$1);
});

crate.binding.Computed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__13235 = this$__$1;
return goog.getUid(G__13235);
});

crate.binding.Computed.prototype.crate$binding$computable$ = true;

crate.binding.Computed.prototype.crate$binding$computable$_compute$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var old = this$__$1.value;
this$__$1.value = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.func,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,self__.atms));

return cljs.core._notify_watches(this$__$1,old,this$__$1.value);
});

crate.binding.Computed.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atms","atms",-855465715,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"key","key",124488940,null)], null);
});

crate.binding.Computed.cljs$lang$type = true;

crate.binding.Computed.cljs$lang$ctorStr = "crate.binding/Computed";

crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write(writer__4889__auto__,"crate.binding/Computed");
});

crate.binding.__GT_Computed = (function crate$binding$__GT_Computed(atms,value,func,watches,key){
return (new crate.binding.Computed(atms,value,func,watches,key));
});

crate.binding.computed = (function crate$binding$computed(atms,func){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("computed");
var neue = (new crate.binding.Computed(atms,null,func,null,k));
neue.crate$binding$computable$_compute$arity$1(null);

var seq__13260_13264 = cljs.core.seq(atms);
var chunk__13261_13265 = null;
var count__13262_13266 = (0);
var i__13263_13267 = (0);
while(true){
if((i__13263_13267 < count__13262_13266)){
var atm_13268 = chunk__13261_13265.cljs$core$IIndexed$_nth$arity$2(null,i__13263_13267);
cljs.core.add_watch(atm_13268,k,((function (seq__13260_13264,chunk__13261_13265,count__13262_13266,i__13263_13267,atm_13268,k,neue){
return (function (_,___$1,___$2,___$3){
return neue.crate$binding$computable$_compute$arity$1(null);
});})(seq__13260_13264,chunk__13261_13265,count__13262_13266,i__13263_13267,atm_13268,k,neue))
);

var G__13269 = seq__13260_13264;
var G__13270 = chunk__13261_13265;
var G__13271 = count__13262_13266;
var G__13272 = (i__13263_13267 + (1));
seq__13260_13264 = G__13269;
chunk__13261_13265 = G__13270;
count__13262_13266 = G__13271;
i__13263_13267 = G__13272;
continue;
} else {
var temp__4423__auto___13273 = cljs.core.seq(seq__13260_13264);
if(temp__4423__auto___13273){
var seq__13260_13274__$1 = temp__4423__auto___13273;
if(cljs.core.chunked_seq_QMARK_(seq__13260_13274__$1)){
var c__5094__auto___13275 = cljs.core.chunk_first(seq__13260_13274__$1);
var G__13276 = cljs.core.chunk_rest(seq__13260_13274__$1);
var G__13277 = c__5094__auto___13275;
var G__13278 = cljs.core.count(c__5094__auto___13275);
var G__13279 = (0);
seq__13260_13264 = G__13276;
chunk__13261_13265 = G__13277;
count__13262_13266 = G__13278;
i__13263_13267 = G__13279;
continue;
} else {
var atm_13280 = cljs.core.first(seq__13260_13274__$1);
cljs.core.add_watch(atm_13280,k,((function (seq__13260_13264,chunk__13261_13265,count__13262_13266,i__13263_13267,atm_13280,seq__13260_13274__$1,temp__4423__auto___13273,k,neue){
return (function (_,___$1,___$2,___$3){
return neue.crate$binding$computable$_compute$arity$1(null);
});})(seq__13260_13264,chunk__13261_13265,count__13262_13266,i__13263_13267,atm_13280,seq__13260_13274__$1,temp__4423__auto___13273,k,neue))
);

var G__13281 = cljs.core.next(seq__13260_13274__$1);
var G__13282 = null;
var G__13283 = (0);
var G__13284 = (0);
seq__13260_13264 = G__13281;
chunk__13261_13265 = G__13282;
count__13262_13266 = G__13283;
i__13263_13267 = G__13284;
continue;
}
} else {
}
}
break;
}

return neue;
});
crate.binding.z = (function (){var G__13285 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13285) : cljs.core.atom.call(null,G__13285));
})();
crate.binding.y = crate.binding.computed(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.z], null),(function (z){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.even_QMARK_,z);
}));
crate.binding.r = crate.binding.computed(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.y], null),(function (y){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__13286_SHARP_){
return (p1__13286_SHARP_ > (100));
}),y);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(crate.binding.z,cljs.core.conj,(1340));
var G__13287_13288 = crate.binding.y;
(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13287_13288) : cljs.core.deref.call(null,G__13287_13288));
var G__13289_13290 = crate.binding.r;
(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13289_13290) : cljs.core.deref.call(null,G__13289_13290));
crate.binding.notify = (function crate$binding$notify(w,o,v){
return cljs.core._notify_watches(w,o,v);
});

crate.binding.bindable_coll = (function (){var obj13292 = {};
return obj13292;
})();


crate.binding.bindable = (function (){var obj13294 = {};
return obj13294;
})();

/**
 * get the current value of this binding
 */
crate.binding._value = (function crate$binding$_value(this$){
if((function (){var and__4297__auto__ = this$;
if(and__4297__auto__){
return this$.crate$binding$bindable$_value$arity$1;
} else {
return and__4297__auto__;
}
})()){
return this$.crate$binding$bindable$_value$arity$1(this$);
} else {
var x__4945__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4309__auto__ = (crate.binding._value[(function (){var G__13298 = x__4945__auto__;
return goog.typeOf(G__13298);
})()]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (crate.binding._value["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol("bindable.-value",this$);
}
}
})().call(null,this$);
}
});

/**
 * On change of this binding execute func
 */
crate.binding._on_change = (function crate$binding$_on_change(this$,func){
if((function (){var and__4297__auto__ = this$;
if(and__4297__auto__){
return this$.crate$binding$bindable$_on_change$arity$2;
} else {
return and__4297__auto__;
}
})()){
return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else {
var x__4945__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4309__auto__ = (crate.binding._on_change[(function (){var G__13302 = x__4945__auto__;
return goog.typeOf(G__13302);
})()]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (crate.binding._on_change["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol("bindable.-on-change",this$);
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
var G__13303 = (function (){var G__13304 = self__.atm;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13304) : cljs.core.deref.call(null,G__13304));
})();
return (self__.value_func.cljs$core$IFn$_invoke$arity$1 ? self__.value_func.cljs$core$IFn$_invoke$arity$1(G__13303) : self__.value_func.call(null,G__13303));
});

crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var self__ = this;
var this$__$1 = this;
return cljs.core.add_watch(self__.atm,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("atom-binding"),((function (this$__$1){
return (function (){
var G__13305 = crate.binding._value(this$__$1);
return (func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(G__13305) : func.call(null,G__13305));
});})(this$__$1))
);
});

crate.binding.atom_binding.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atm","atm",-1963551835,null),new cljs.core.Symbol(null,"value-func","value-func",2077951825,null)], null);
});

crate.binding.atom_binding.cljs$lang$type = true;

crate.binding.atom_binding.cljs$lang$ctorStr = "crate.binding/atom-binding";

crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write(writer__4889__auto__,"crate.binding/atom-binding");
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
var seq__13306 = cljs.core.seq(self__.watches);
var chunk__13307 = null;
var count__13308 = (0);
var i__13309 = (0);
while(true){
if((i__13309 < count__13308)){
var vec__13310 = chunk__13307.cljs$core$IIndexed$_nth$arity$2(null,i__13309);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13310,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13310,(1),null);
var G__13311_13320 = key;
var G__13312_13321 = this$__$1;
var G__13313_13322 = oldval;
var G__13314_13323 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13311_13320,G__13312_13321,G__13313_13322,G__13314_13323) : f.call(null,G__13311_13320,G__13312_13321,G__13313_13322,G__13314_13323));

var G__13324 = seq__13306;
var G__13325 = chunk__13307;
var G__13326 = count__13308;
var G__13327 = (i__13309 + (1));
seq__13306 = G__13324;
chunk__13307 = G__13325;
count__13308 = G__13326;
i__13309 = G__13327;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq(seq__13306);
if(temp__4423__auto__){
var seq__13306__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13306__$1)){
var c__5094__auto__ = cljs.core.chunk_first(seq__13306__$1);
var G__13328 = cljs.core.chunk_rest(seq__13306__$1);
var G__13329 = c__5094__auto__;
var G__13330 = cljs.core.count(c__5094__auto__);
var G__13331 = (0);
seq__13306 = G__13328;
chunk__13307 = G__13329;
count__13308 = G__13330;
i__13309 = G__13331;
continue;
} else {
var vec__13315 = cljs.core.first(seq__13306__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13315,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13315,(1),null);
var G__13316_13332 = key;
var G__13317_13333 = this$__$1;
var G__13318_13334 = oldval;
var G__13319_13335 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13316_13332,G__13317_13333,G__13318_13334,G__13319_13335) : f.call(null,G__13316_13332,G__13317_13333,G__13318_13334,G__13319_13335));

var G__13336 = cljs.core.next(seq__13306__$1);
var G__13337 = null;
var G__13338 = (0);
var G__13339 = (0);
seq__13306 = G__13336;
chunk__13307 = G__13337;
count__13308 = G__13338;
i__13309 = G__13339;
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
return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});

crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

crate.binding.notifier.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"watches","watches",1367433992,null)], null);
});

crate.binding.notifier.cljs$lang$type = true;

crate.binding.notifier.cljs$lang$ctorStr = "crate.binding/notifier";

crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write(writer__4889__auto__,"crate.binding/notifier");
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$elem,cljs.core.vals(this$__$1.stuff));
});

crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var self__ = this;
var this$__$1 = this;
return cljs.core.add_watch(self__.notif,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bound-coll"),((function (this$__$1){
return (function (_,___$1,___$2,p__13340){
var vec__13341 = p__13340;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13341,(0),null);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13341,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13341,(2),null);
var G__13342 = event;
var G__13343 = el;
var G__13344 = v;
return (func.cljs$core$IFn$_invoke$arity$3 ? func.cljs$core$IFn$_invoke$arity$3(G__13342,G__13343,G__13344) : func.call(null,G__13342,G__13343,G__13344));
});})(this$__$1))
);
});

crate.binding.bound_collection.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atm","atm",-1963551835,null),new cljs.core.Symbol(null,"notif","notif",-1551848296,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"stuff","stuff",-411032116,null)], null);
});

crate.binding.bound_collection.cljs$lang$type = true;

crate.binding.bound_collection.cljs$lang$ctorStr = "crate.binding/bound-collection";

crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write(writer__4889__auto__,"crate.binding/bound-collection");
});

crate.binding.__GT_bound_collection = (function crate$binding$__GT_bound_collection(atm,notif,opts,stuff){
return (new crate.binding.bound_collection(atm,notif,opts,stuff));
});

crate.binding.opt = (function crate$binding$opt(bc,k){
return bc.opts.call(null,k);
});
crate.binding.bc_add = (function crate$binding$bc_add(bc,path,key){
var sa = crate.binding.subatom(bc.atm,path);
var elem = crate.binding.opt(bc,cljs.core.constant$keyword$as).call(null,sa);
bc.stuff = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bc.stuff,key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$elem,elem,cljs.core.constant$keyword$subatom,sa], null));

return crate.binding.notify(bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$add,elem,(function (){var G__13346 = sa;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13346) : cljs.core.deref.call(null,G__13346));
})()], null));
});
crate.binding.bc_remove = (function crate$binding$bc_remove(bc,key){
var notif = bc.notif;
var prev = bc.stuff.call(null,key);
bc.stuff = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bc.stuff,key);

crate.binding.notify(bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$remove,cljs.core.constant$keyword$elem.cljs$core$IFn$_invoke$arity$1(prev),null], null));

return crate.binding.sub_destroy_BANG_(cljs.core.constant$keyword$subatom.cljs$core$IFn$_invoke$arity$1(prev));
});
crate.binding.__GT_indexed = (function crate$binding$__GT_indexed(coll){
if(cljs.core.map_QMARK_(coll)){
return cljs.core.seq(coll);
} else {
if(cljs.core.set_QMARK_(coll)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.identity),coll);
} else {
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll);

}
}
});
crate.binding.__GT_keyed = (function crate$binding$__GT_keyed(coll,keyfn){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(keyfn,crate.binding.__GT_indexed(coll)));
});
crate.binding.__GT_path = (function crate$binding$__GT_path(){
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return crate.binding.__GT_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

crate.binding.__GT_path.cljs$core$IFn$_invoke$arity$variadic = (function (bc,segs){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var or__4309__auto__ = crate.binding.opt(bc,cljs.core.constant$keyword$path);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
});

crate.binding.__GT_path.cljs$lang$maxFixedArity = (1);

crate.binding.__GT_path.cljs$lang$applyTo = (function (seq13347){
var G__13348 = cljs.core.first(seq13347);
var seq13347__$1 = cljs.core.next(seq13347);
return crate.binding.__GT_path.cljs$core$IFn$_invoke$arity$variadic(G__13348,seq13347__$1);
});
crate.binding.bc_compare = (function crate$binding$bc_compare(bc,neue){
var prev = bc.stuff;
var pset = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(prev));
var nset = crate.binding.__GT_keyed(neue,crate.binding.opt(bc,cljs.core.constant$keyword$keyfn));
var added = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set(),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(nset,pset));
var removed = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set(),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(pset,nset));
var seq__13357_13365 = cljs.core.seq(added);
var chunk__13358_13366 = null;
var count__13359_13367 = (0);
var i__13360_13368 = (0);
while(true){
if((i__13360_13368 < count__13359_13367)){
var a_13369 = chunk__13358_13366.cljs$core$IIndexed$_nth$arity$2(null,i__13360_13368);
crate.binding.bc_add(bc,a_13369,a_13369);

var G__13370 = seq__13357_13365;
var G__13371 = chunk__13358_13366;
var G__13372 = count__13359_13367;
var G__13373 = (i__13360_13368 + (1));
seq__13357_13365 = G__13370;
chunk__13358_13366 = G__13371;
count__13359_13367 = G__13372;
i__13360_13368 = G__13373;
continue;
} else {
var temp__4423__auto___13374 = cljs.core.seq(seq__13357_13365);
if(temp__4423__auto___13374){
var seq__13357_13375__$1 = temp__4423__auto___13374;
if(cljs.core.chunked_seq_QMARK_(seq__13357_13375__$1)){
var c__5094__auto___13376 = cljs.core.chunk_first(seq__13357_13375__$1);
var G__13377 = cljs.core.chunk_rest(seq__13357_13375__$1);
var G__13378 = c__5094__auto___13376;
var G__13379 = cljs.core.count(c__5094__auto___13376);
var G__13380 = (0);
seq__13357_13365 = G__13377;
chunk__13358_13366 = G__13378;
count__13359_13367 = G__13379;
i__13360_13368 = G__13380;
continue;
} else {
var a_13381 = cljs.core.first(seq__13357_13375__$1);
crate.binding.bc_add(bc,a_13381,a_13381);

var G__13382 = cljs.core.next(seq__13357_13375__$1);
var G__13383 = null;
var G__13384 = (0);
var G__13385 = (0);
seq__13357_13365 = G__13382;
chunk__13358_13366 = G__13383;
count__13359_13367 = G__13384;
i__13360_13368 = G__13385;
continue;
}
} else {
}
}
break;
}

var seq__13361 = cljs.core.seq(removed);
var chunk__13362 = null;
var count__13363 = (0);
var i__13364 = (0);
while(true){
if((i__13364 < count__13363)){
var r = chunk__13362.cljs$core$IIndexed$_nth$arity$2(null,i__13364);
crate.binding.bc_remove(bc,r);

var G__13386 = seq__13361;
var G__13387 = chunk__13362;
var G__13388 = count__13363;
var G__13389 = (i__13364 + (1));
seq__13361 = G__13386;
chunk__13362 = G__13387;
count__13363 = G__13388;
i__13364 = G__13389;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq(seq__13361);
if(temp__4423__auto__){
var seq__13361__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13361__$1)){
var c__5094__auto__ = cljs.core.chunk_first(seq__13361__$1);
var G__13390 = cljs.core.chunk_rest(seq__13361__$1);
var G__13391 = c__5094__auto__;
var G__13392 = cljs.core.count(c__5094__auto__);
var G__13393 = (0);
seq__13361 = G__13390;
chunk__13362 = G__13391;
count__13363 = G__13392;
i__13364 = G__13393;
continue;
} else {
var r = cljs.core.first(seq__13361__$1);
crate.binding.bc_remove(bc,r);

var G__13394 = cljs.core.next(seq__13361__$1);
var G__13395 = null;
var G__13396 = (0);
var G__13397 = (0);
seq__13361 = G__13394;
chunk__13362 = G__13395;
count__13363 = G__13396;
i__13364 = G__13397;
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
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return crate.binding.bound_coll.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

crate.binding.bound_coll.cljs$core$IFn$_invoke$arity$variadic = (function (atm,p__13400){
var vec__13401 = p__13400;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13401,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13401,(1),null);
var vec__13402 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));
var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13402,(0),null);
var opts__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13402,(1),null);
var atm__$1 = ((cljs.core.not(path__$1))?atm:crate.binding.subatom(atm,path__$1));
var opts__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,cljs.core.constant$keyword$path,path__$1);
var opts__$3 = ((cljs.core.not(cljs.core.constant$keyword$keyfn.cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$2,cljs.core.constant$keyword$keyfn,cljs.core.first):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$2,cljs.core.constant$keyword$keyfn,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$keyfn.cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));
var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map()));
cljs.core.add_watch(atm__$1,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bound-coll"),((function (vec__13402,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__13401,path,opts){
return (function (_,___$1,___$2,neue){
return crate.binding.bc_compare(bc,neue);
});})(vec__13402,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__13401,path,opts))
);

crate.binding.bc_compare(bc,(function (){var G__13403 = atm__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13403) : cljs.core.deref.call(null,G__13403));
})());

return bc;
});

crate.binding.bound_coll.cljs$lang$maxFixedArity = (1);

crate.binding.bound_coll.cljs$lang$applyTo = (function (seq13398){
var G__13399 = cljs.core.first(seq13398);
var seq13398__$1 = cljs.core.next(seq13398);
return crate.binding.bound_coll.cljs$core$IFn$_invoke$arity$variadic(G__13399,seq13398__$1);
});
crate.binding.map_bound = (function crate$binding$map_bound(){
var argseq__5349__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return crate.binding.map_bound.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5349__auto__);
});

crate.binding.map_bound.cljs$core$IFn$_invoke$arity$variadic = (function (as,atm,p__13407){
var vec__13408 = p__13407;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13408,(0),null);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$as,as);
var atm__$1 = ((cljs.core.not(cljs.core.constant$keyword$path.cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom(atm,cljs.core.constant$keyword$path.cljs$core$IFn$_invoke$arity$1(opts__$1)));
var opts__$2 = ((cljs.core.not(cljs.core.constant$keyword$keyfn.cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,cljs.core.constant$keyword$keyfn,cljs.core.first):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,cljs.core.constant$keyword$keyfn,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$keyfn.cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));
var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map()));
cljs.core.add_watch(atm__$1,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bound-coll"),((function (opts__$1,atm__$1,opts__$2,bc,vec__13408,opts){
return (function (_,___$1,___$2,neue){
return crate.binding.bc_compare(bc,neue);
});})(opts__$1,atm__$1,opts__$2,bc,vec__13408,opts))
);

crate.binding.bc_compare(bc,(function (){var G__13409 = atm__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13409) : cljs.core.deref.call(null,G__13409));
})());

return bc;
});

crate.binding.map_bound.cljs$lang$maxFixedArity = (2);

crate.binding.map_bound.cljs$lang$applyTo = (function (seq13404){
var G__13405 = cljs.core.first(seq13404);
var seq13404__$1 = cljs.core.next(seq13404);
var G__13406 = cljs.core.first(seq13404__$1);
var seq13404__$2 = cljs.core.next(seq13404__$1);
return crate.binding.map_bound.cljs$core$IFn$_invoke$arity$variadic(G__13405,G__13406,seq13404__$2);
});
crate.binding.binding_QMARK_ = (function crate$binding$binding_QMARK_(b){
var G__13411 = b;
if(G__13411){
var bit__4983__auto__ = null;
if(cljs.core.truth_((function (){var or__4309__auto__ = bit__4983__auto__;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return G__13411.crate$binding$bindable$;
}
})())){
return true;
} else {
if((!G__13411.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(crate.binding.bindable,G__13411);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(crate.binding.bindable,G__13411);
}
});
crate.binding.binding_coll_QMARK_ = (function crate$binding$binding_coll_QMARK_(b){
var G__13413 = b;
if(G__13413){
var bit__4983__auto__ = null;
if(cljs.core.truth_((function (){var or__4309__auto__ = bit__4983__auto__;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return G__13413.crate$binding$bindable_coll$;
}
})())){
return true;
} else {
if((!G__13413.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(crate.binding.bindable_coll,G__13413);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(crate.binding.bindable_coll,G__13413);
}
});
crate.binding.deref_QMARK_ = (function crate$binding$deref_QMARK_(atm){
var G__13415 = atm;
if(G__13415){
var bit__4983__auto__ = (G__13415.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4983__auto__) || (G__13415.cljs$core$IDeref$)){
return true;
} else {
if((!G__13415.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__13415);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__13415);
}
});
crate.binding.value = (function crate$binding$value(b){
return crate.binding._value(b);
});
crate.binding.index = (function crate$binding$index(sub_atom){
return cljs.core.last(sub_atom.path);
});
crate.binding.on_change = (function crate$binding$on_change(b,func){
return crate.binding._on_change(b,func);
});
crate.binding.bound = (function crate$binding$bound(){
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return crate.binding.bound.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

crate.binding.bound.cljs$core$IFn$_invoke$arity$variadic = (function (atm,p__13418){
var vec__13419 = p__13418;
var func = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13419,(0),null);
var func__$1 = (function (){var or__4309__auto__ = func;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cljs.core.identity;
}
})();
return (new crate.binding.atom_binding(atm,func__$1));
});

crate.binding.bound.cljs$lang$maxFixedArity = (1);

crate.binding.bound.cljs$lang$applyTo = (function (seq13416){
var G__13417 = cljs.core.first(seq13416);
var seq13416__$1 = cljs.core.next(seq13416);
return crate.binding.bound.cljs$core$IFn$_invoke$arity$variadic(G__13417,seq13416__$1);
});
