// Compiled by ClojureScript 0.0-3291 {:static-fns true, :optimize-constants true}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv(other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__12687 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__12687) : com.cognitect.transit.eq.hashCode.call(null,G__12687));
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__12688 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__12688) : com.cognitect.transit.eq.hashCode.call(null,G__12688));
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__12689 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__12689) : com.cognitect.transit.eq.hashCode.call(null,G__12689));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write(writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__12694_12698 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__12695_12699 = null;
var count__12696_12700 = (0);
var i__12697_12701 = (0);
while(true){
if((i__12697_12701 < count__12696_12700)){
var k_12702 = chunk__12695_12699.cljs$core$IIndexed$_nth$arity$2(null,i__12697_12701);
var v_12703 = (b[k_12702]);
(a[k_12702] = v_12703);

var G__12704 = seq__12694_12698;
var G__12705 = chunk__12695_12699;
var G__12706 = count__12696_12700;
var G__12707 = (i__12697_12701 + (1));
seq__12694_12698 = G__12704;
chunk__12695_12699 = G__12705;
count__12696_12700 = G__12706;
i__12697_12701 = G__12707;
continue;
} else {
var temp__4423__auto___12708 = cljs.core.seq(seq__12694_12698);
if(temp__4423__auto___12708){
var seq__12694_12709__$1 = temp__4423__auto___12708;
if(cljs.core.chunked_seq_QMARK_(seq__12694_12709__$1)){
var c__5094__auto___12710 = cljs.core.chunk_first(seq__12694_12709__$1);
var G__12711 = cljs.core.chunk_rest(seq__12694_12709__$1);
var G__12712 = c__5094__auto___12710;
var G__12713 = cljs.core.count(c__5094__auto___12710);
var G__12714 = (0);
seq__12694_12698 = G__12711;
chunk__12695_12699 = G__12712;
count__12696_12700 = G__12713;
i__12697_12701 = G__12714;
continue;
} else {
var k_12715 = cljs.core.first(seq__12694_12709__$1);
var v_12716 = (b[k_12715]);
(a[k_12715] = v_12716);

var G__12717 = cljs.core.next(seq__12694_12709__$1);
var G__12718 = null;
var G__12719 = (0);
var G__12720 = (0);
seq__12694_12698 = G__12717;
chunk__12695_12699 = G__12718;
count__12696_12700 = G__12719;
i__12697_12701 = G__12720;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
var G__12721 = arr;
var G__12722 = true;
var G__12723 = true;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__12721,G__12722,G__12723) : cljs.core.PersistentArrayMap.fromArray.call(null,G__12721,G__12722,G__12723));
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write(writer__4889__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
var G__12724 = arr;
var G__12725 = true;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__12724,G__12725) : cljs.core.PersistentVector.fromArray.call(null,G__12724,G__12725));
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write(writer__4889__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(){
var G__12727 = arguments.length;
switch (G__12727) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var G__12728 = cljs.core.name(type);
var G__12729 = cognitect.transit.opts_merge({"handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__12728){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__12728))
,":",((function (G__12728){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__12728))
,"set",((function (G__12728){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__12728))
,"list",((function (G__12728){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__12728))
,"cmap",((function (G__12728){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__12731 = (i + (2));
var G__12732 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__12731;
ret = G__12732;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__12728))
], null),cljs.core.constant$keyword$handlers.cljs$core$IFn$_invoke$arity$1(opts)], 0))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$handlers)));
return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__12728,G__12729) : com.cognitect.transit.reader.call(null,G__12728,G__12729));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write(writer__4889__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write(writer__4889__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__12733_12739 = cljs.core.seq(v);
var chunk__12734_12740 = null;
var count__12735_12741 = (0);
var i__12736_12742 = (0);
while(true){
if((i__12736_12742 < count__12735_12741)){
var x_12743 = chunk__12734_12740.cljs$core$IIndexed$_nth$arity$2(null,i__12736_12742);
ret.push(x_12743);

var G__12744 = seq__12733_12739;
var G__12745 = chunk__12734_12740;
var G__12746 = count__12735_12741;
var G__12747 = (i__12736_12742 + (1));
seq__12733_12739 = G__12744;
chunk__12734_12740 = G__12745;
count__12735_12741 = G__12746;
i__12736_12742 = G__12747;
continue;
} else {
var temp__4423__auto___12748 = cljs.core.seq(seq__12733_12739);
if(temp__4423__auto___12748){
var seq__12733_12749__$1 = temp__4423__auto___12748;
if(cljs.core.chunked_seq_QMARK_(seq__12733_12749__$1)){
var c__5094__auto___12750 = cljs.core.chunk_first(seq__12733_12749__$1);
var G__12751 = cljs.core.chunk_rest(seq__12733_12749__$1);
var G__12752 = c__5094__auto___12750;
var G__12753 = cljs.core.count(c__5094__auto___12750);
var G__12754 = (0);
seq__12733_12739 = G__12751;
chunk__12734_12740 = G__12752;
count__12735_12741 = G__12753;
i__12736_12742 = G__12754;
continue;
} else {
var x_12755 = cljs.core.first(seq__12733_12749__$1);
ret.push(x_12755);

var G__12756 = cljs.core.next(seq__12733_12749__$1);
var G__12757 = null;
var G__12758 = (0);
var G__12759 = (0);
seq__12733_12739 = G__12756;
chunk__12734_12740 = G__12757;
count__12735_12741 = G__12758;
i__12736_12742 = G__12759;
continue;
}
} else {
}
}
break;
}

var G__12737 = "array";
var G__12738 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__12737,G__12738) : com.cognitect.transit.tagged.call(null,G__12737,G__12738));
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write(writer__4889__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write(writer__4889__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__12760_12766 = cljs.core.seq(v);
var chunk__12761_12767 = null;
var count__12762_12768 = (0);
var i__12763_12769 = (0);
while(true){
if((i__12763_12769 < count__12762_12768)){
var x_12770 = chunk__12761_12767.cljs$core$IIndexed$_nth$arity$2(null,i__12763_12769);
ret.push(x_12770);

var G__12771 = seq__12760_12766;
var G__12772 = chunk__12761_12767;
var G__12773 = count__12762_12768;
var G__12774 = (i__12763_12769 + (1));
seq__12760_12766 = G__12771;
chunk__12761_12767 = G__12772;
count__12762_12768 = G__12773;
i__12763_12769 = G__12774;
continue;
} else {
var temp__4423__auto___12775 = cljs.core.seq(seq__12760_12766);
if(temp__4423__auto___12775){
var seq__12760_12776__$1 = temp__4423__auto___12775;
if(cljs.core.chunked_seq_QMARK_(seq__12760_12776__$1)){
var c__5094__auto___12777 = cljs.core.chunk_first(seq__12760_12776__$1);
var G__12778 = cljs.core.chunk_rest(seq__12760_12776__$1);
var G__12779 = c__5094__auto___12777;
var G__12780 = cljs.core.count(c__5094__auto___12777);
var G__12781 = (0);
seq__12760_12766 = G__12778;
chunk__12761_12767 = G__12779;
count__12762_12768 = G__12780;
i__12763_12769 = G__12781;
continue;
} else {
var x_12782 = cljs.core.first(seq__12760_12776__$1);
ret.push(x_12782);

var G__12783 = cljs.core.next(seq__12760_12776__$1);
var G__12784 = null;
var G__12785 = (0);
var G__12786 = (0);
seq__12760_12766 = G__12783;
chunk__12761_12767 = G__12784;
count__12762_12768 = G__12785;
i__12763_12769 = G__12786;
continue;
}
} else {
}
}
break;
}

var G__12764 = "array";
var G__12765 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__12764,G__12765) : com.cognitect.transit.tagged.call(null,G__12764,G__12765));
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write(writer__4889__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__12787_12791 = cljs.core.seq(v);
var chunk__12788_12792 = null;
var count__12789_12793 = (0);
var i__12790_12794 = (0);
while(true){
if((i__12790_12794 < count__12789_12793)){
var x_12795 = chunk__12788_12792.cljs$core$IIndexed$_nth$arity$2(null,i__12790_12794);
ret.push(x_12795);

var G__12796 = seq__12787_12791;
var G__12797 = chunk__12788_12792;
var G__12798 = count__12789_12793;
var G__12799 = (i__12790_12794 + (1));
seq__12787_12791 = G__12796;
chunk__12788_12792 = G__12797;
count__12789_12793 = G__12798;
i__12790_12794 = G__12799;
continue;
} else {
var temp__4423__auto___12800 = cljs.core.seq(seq__12787_12791);
if(temp__4423__auto___12800){
var seq__12787_12801__$1 = temp__4423__auto___12800;
if(cljs.core.chunked_seq_QMARK_(seq__12787_12801__$1)){
var c__5094__auto___12802 = cljs.core.chunk_first(seq__12787_12801__$1);
var G__12803 = cljs.core.chunk_rest(seq__12787_12801__$1);
var G__12804 = c__5094__auto___12802;
var G__12805 = cljs.core.count(c__5094__auto___12802);
var G__12806 = (0);
seq__12787_12791 = G__12803;
chunk__12788_12792 = G__12804;
count__12789_12793 = G__12805;
i__12790_12794 = G__12806;
continue;
} else {
var x_12807 = cljs.core.first(seq__12787_12801__$1);
ret.push(x_12807);

var G__12808 = cljs.core.next(seq__12787_12801__$1);
var G__12809 = null;
var G__12810 = (0);
var G__12811 = (0);
seq__12787_12791 = G__12808;
chunk__12788_12792 = G__12809;
count__12789_12793 = G__12810;
i__12790_12794 = G__12811;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write(writer__4889__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write(writer__4889__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 * opts is a map containing a :handlers entry. :handlers is a map of
 * type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(){
var G__12813 = arguments.length;
switch (G__12813) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),cljs.core.constant$keyword$handlers.cljs$core$IFn$_invoke$arity$1(opts)], 0));
var G__12814 = cljs.core.name(type);
var G__12815 = cognitect.transit.opts_merge({"objectBuilder": ((function (G__12814,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__12814,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__12816 = obj;
G__12816.push((function (){var G__12817 = k;
return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__12817) : kfn.call(null,G__12817));
})(),(function (){var G__12818 = v;
return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__12818) : vfn.call(null,G__12818));
})());

return G__12816;
});})(G__12814,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__12814,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x12819 = cljs.core.clone(handlers);
x12819.forEach = ((function (x12819,G__12814,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__12820 = cljs.core.seq(coll);
var chunk__12821 = null;
var count__12822 = (0);
var i__12823 = (0);
while(true){
if((i__12823 < count__12822)){
var vec__12824 = chunk__12821.cljs$core$IIndexed$_nth$arity$2(null,i__12823);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12824,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12824,(1),null);
var G__12825_12831 = v;
var G__12826_12832 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12825_12831,G__12826_12832) : f.call(null,G__12825_12831,G__12826_12832));

var G__12833 = seq__12820;
var G__12834 = chunk__12821;
var G__12835 = count__12822;
var G__12836 = (i__12823 + (1));
seq__12820 = G__12833;
chunk__12821 = G__12834;
count__12822 = G__12835;
i__12823 = G__12836;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq(seq__12820);
if(temp__4423__auto__){
var seq__12820__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12820__$1)){
var c__5094__auto__ = cljs.core.chunk_first(seq__12820__$1);
var G__12837 = cljs.core.chunk_rest(seq__12820__$1);
var G__12838 = c__5094__auto__;
var G__12839 = cljs.core.count(c__5094__auto__);
var G__12840 = (0);
seq__12820 = G__12837;
chunk__12821 = G__12838;
count__12822 = G__12839;
i__12823 = G__12840;
continue;
} else {
var vec__12827 = cljs.core.first(seq__12820__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12827,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12827,(1),null);
var G__12828_12841 = v;
var G__12829_12842 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12828_12841,G__12829_12842) : f.call(null,G__12828_12841,G__12829_12842));

var G__12843 = cljs.core.next(seq__12820__$1);
var G__12844 = null;
var G__12845 = (0);
var G__12846 = (0);
seq__12820 = G__12843;
chunk__12821 = G__12844;
count__12822 = G__12845;
i__12823 = G__12846;
continue;
}
} else {
return null;
}
}
break;
}
});})(x12819,G__12814,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x12819;
})(), "unpack": ((function (G__12814,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__12814,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$handlers)));
return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__12814,G__12815) : com.cognitect.transit.writer.call(null,G__12814,G__12815));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(){
var G__12848 = arguments.length;
switch (G__12848) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t12849 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t12849 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta12850){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta12850 = meta12850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t12849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12851,meta12850__$1){
var self__ = this;
var _12851__$1 = this;
return (new cognitect.transit.t12849(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta12850__$1));
});

cognitect.transit.t12849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12851){
var self__ = this;
var _12851__$1 = this;
return self__.meta12850;
});

cognitect.transit.t12849.prototype.tag = (function (o){
var self__ = this;
var _ = this;
var G__12852 = o;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__12852) : self__.tag_fn.call(null,G__12852));
});

cognitect.transit.t12849.prototype.rep = (function (o){
var self__ = this;
var _ = this;
var G__12853 = o;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__12853) : self__.rep_fn.call(null,G__12853));
});

cognitect.transit.t12849.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
var G__12854 = o;
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__12854) : self__.str_rep_fn.call(null,G__12854));
} else {
return null;
}
});

cognitect.transit.t12849.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t12849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta12850","meta12850",-632912436,null)], null);
});

cognitect.transit.t12849.cljs$lang$type = true;

cognitect.transit.t12849.cljs$lang$ctorStr = "cognitect.transit/t12849";

cognitect.transit.t12849.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write(writer__4889__auto__,"cognitect.transit/t12849");
});

cognitect.transit.__GT_t12849 = (function cognitect$transit$__GT_t12849(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta12850){
return (new cognitect.transit.t12849(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta12850));
});

}

return (new cognitect.transit.t12849(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
var G__12858 = tag;
var G__12859 = rep;
return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__12858,G__12859) : com.cognitect.transit.types.taggedValue.call(null,G__12858,G__12859));
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
var G__12861 = x;
return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__12861) : com.cognitect.transit.types.isTaggedValue.call(null,G__12861));
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 * in the 53bit integer range, a goog.math.Long instance if above. s
 * may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
var G__12863 = s;
return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__12863) : com.cognitect.transit.types.integer.call(null,G__12863));
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 * range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
var G__12865 = x;
return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__12865) : com.cognitect.transit.types.isInteger.call(null,G__12865));
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
var G__12867 = s;
return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__12867) : com.cognitect.transit.types.bigInteger.call(null,G__12867));
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
var G__12869 = x;
return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__12869) : com.cognitect.transit.types.isBigInteger.call(null,G__12869));
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
var G__12871 = s;
return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__12871) : com.cognitect.transit.types.bigDecimalValue.call(null,G__12871));
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
var G__12873 = x;
return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__12873) : com.cognitect.transit.types.isBigDecimal.call(null,G__12873));
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
var G__12875 = s;
return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__12875) : com.cognitect.transit.types.uri.call(null,G__12875));
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
var G__12877 = x;
return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__12877) : com.cognitect.transit.types.isURI.call(null,G__12877));
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
var G__12879 = s;
return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__12879) : com.cognitect.transit.types.uuid.call(null,G__12879));
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var G__12881 = x;
return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__12881) : com.cognitect.transit.types.isUUID.call(null,G__12881));
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
var G__12883 = s;
return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__12883) : com.cognitect.transit.types.binary.call(null,G__12883));
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
var G__12885 = x;
return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__12885) : com.cognitect.transit.types.isBinary.call(null,G__12885));
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
var G__12887 = x;
return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__12887) : com.cognitect.transit.types.quoted.call(null,G__12887));
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
var G__12889 = x;
return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__12889) : com.cognitect.transit.types.isQuoted.call(null,G__12889));
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
var G__12891 = x;
return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__12891) : com.cognitect.transit.types.link.call(null,G__12891));
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
var G__12893 = x;
return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__12893) : com.cognitect.transit.types.isLink.call(null,G__12893));
});
