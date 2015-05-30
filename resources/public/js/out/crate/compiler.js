// Compiled by ClojureScript 0.0-3291 {:static-fns true, :optimize-constants true}
goog.provide('crate.compiler');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('crate.binding');
crate.compiler.xmlns = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$xhtml,"http://www.w3.org/1999/xhtml",cljs.core.constant$keyword$svg,"http://www.w3.org/2000/svg"], null);


crate.compiler.group_id = (function (){var G__12902 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12902) : cljs.core.atom.call(null,G__12902));
})();
crate.compiler.bindings = (function (){var G__12903 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12903) : cljs.core.atom.call(null,G__12903));
})();
crate.compiler.capture_binding = (function crate$compiler$capture_binding(tag,b){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(crate.compiler.bindings,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,b], null));
});
crate.compiler.as_content = (function crate$compiler$as_content(parent,content){
var seq__12930 = cljs.core.seq(content);
var chunk__12931 = null;
var count__12932 = (0);
var i__12933 = (0);
while(true){
if((i__12933 < count__12932)){
var c = chunk__12931.cljs$core$IIndexed$_nth$arity$2(null,i__12933);
var child_12944 = (((c == null))?null:((cljs.core.map_QMARK_(c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?(function (){var G__12934 = c;
return goog.dom.htmlToDocumentFragment(G__12934);
})():((cljs.core.vector_QMARK_(c))?(function (){var G__12935 = c;
return (crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1 ? crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1(G__12935) : crate.compiler.elem_factory.call(null,G__12935));
})():((cljs.core.seq_QMARK_(c))?crate$compiler$as_content(parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_(c))?(function (){
crate.compiler.capture_binding(cljs.core.constant$keyword$coll,c);

return crate$compiler$as_content(parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value(c)], null));
})()
:(cljs.core.truth_(crate.binding.binding_QMARK_(c))?(function (){
crate.compiler.capture_binding(cljs.core.constant$keyword$text,c);

return crate$compiler$as_content(parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value(c)], null));
})()
:(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get((0)):(function (){var G__12936 = [cljs.core.str(c)].join('');
return goog.dom.htmlToDocumentFragment(G__12936);
})()
)))))))));
if(cljs.core.truth_(child_12944)){
var G__12937_12945 = parent;
var G__12938_12946 = child_12944;
goog.dom.appendChild(G__12937_12945,G__12938_12946);
} else {
}

var G__12947 = seq__12930;
var G__12948 = chunk__12931;
var G__12949 = count__12932;
var G__12950 = (i__12933 + (1));
seq__12930 = G__12947;
chunk__12931 = G__12948;
count__12932 = G__12949;
i__12933 = G__12950;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq(seq__12930);
if(temp__4423__auto__){
var seq__12930__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12930__$1)){
var c__5094__auto__ = cljs.core.chunk_first(seq__12930__$1);
var G__12951 = cljs.core.chunk_rest(seq__12930__$1);
var G__12952 = c__5094__auto__;
var G__12953 = cljs.core.count(c__5094__auto__);
var G__12954 = (0);
seq__12930 = G__12951;
chunk__12931 = G__12952;
count__12932 = G__12953;
i__12933 = G__12954;
continue;
} else {
var c = cljs.core.first(seq__12930__$1);
var child_12955 = (((c == null))?null:((cljs.core.map_QMARK_(c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?(function (){var G__12939 = c;
return goog.dom.htmlToDocumentFragment(G__12939);
})():((cljs.core.vector_QMARK_(c))?(function (){var G__12940 = c;
return (crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1 ? crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1(G__12940) : crate.compiler.elem_factory.call(null,G__12940));
})():((cljs.core.seq_QMARK_(c))?crate$compiler$as_content(parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_(c))?(function (){
crate.compiler.capture_binding(cljs.core.constant$keyword$coll,c);

return crate$compiler$as_content(parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value(c)], null));
})()
:(cljs.core.truth_(crate.binding.binding_QMARK_(c))?(function (){
crate.compiler.capture_binding(cljs.core.constant$keyword$text,c);

return crate$compiler$as_content(parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value(c)], null));
})()
:(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get((0)):(function (){var G__12941 = [cljs.core.str(c)].join('');
return goog.dom.htmlToDocumentFragment(G__12941);
})()
)))))))));
if(cljs.core.truth_(child_12955)){
var G__12942_12956 = parent;
var G__12943_12957 = child_12955;
goog.dom.appendChild(G__12942_12956,G__12943_12957);
} else {
}

var G__12958 = cljs.core.next(seq__12930__$1);
var G__12959 = null;
var G__12960 = (0);
var G__12961 = (0);
seq__12930 = G__12958;
chunk__12931 = G__12959;
count__12932 = G__12960;
i__12933 = G__12961;
continue;
}
} else {
return null;
}
}
break;
}
});
if(typeof crate.compiler.dom_binding !== 'undefined'){
} else {
crate.compiler.dom_binding = (function (){var method_table__5204__auto__ = (function (){var G__12962 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12962) : cljs.core.atom.call(null,G__12962));
})();
var prefer_table__5205__auto__ = (function (){var G__12963 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12963) : cljs.core.atom.call(null,G__12963));
})();
var method_cache__5206__auto__ = (function (){var G__12964 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12964) : cljs.core.atom.call(null,G__12964));
})();
var cached_hierarchy__5207__auto__ = (function (){var G__12965 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12965) : cljs.core.atom.call(null,G__12965));
})();
var hierarchy__5208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("crate.compiler","dom-binding"),((function (method_table__5204__auto__,prefer_table__5205__auto__,method_cache__5206__auto__,cached_hierarchy__5207__auto__,hierarchy__5208__auto__){
return (function (type,_,___$1){
return type;
});})(method_table__5204__auto__,prefer_table__5205__auto__,method_cache__5206__auto__,cached_hierarchy__5207__auto__,hierarchy__5208__auto__))
,cljs.core.constant$keyword$default,hierarchy__5208__auto__,method_table__5204__auto__,prefer_table__5205__auto__,method_cache__5206__auto__,cached_hierarchy__5207__auto__));
})();
}
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$text,(function (_,b,elem){
return crate.binding.on_change(b,(function (v){
var G__12966_12967 = elem;
goog.dom.removeChildren(G__12966_12967);

return crate.compiler.as_content(elem,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
}));
}));
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$attr,(function (_,p__12968,elem){
var vec__12969 = p__12968;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12969,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12969,(1),null);
return crate.binding.on_change(b,((function (vec__12969,k,b){
return (function (v){
var G__12970 = elem;
var G__12971 = k;
var G__12972 = v;
return (crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3(G__12970,G__12971,G__12972) : crate.compiler.dom_attr.call(null,G__12970,G__12971,G__12972));
});})(vec__12969,k,b))
);
}));
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$style,(function (_,p__12973,elem){
var vec__12974 = p__12973;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12974,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12974,(1),null);
return crate.binding.on_change(b,((function (vec__12974,k,b){
return (function (v){
if(cljs.core.truth_(k)){
var G__12975 = elem;
var G__12976 = k;
var G__12977 = v;
return (crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3(G__12975,G__12976,G__12977) : crate.compiler.dom_style.call(null,G__12975,G__12976,G__12977));
} else {
var G__12978 = elem;
var G__12979 = v;
return (crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2 ? crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2(G__12978,G__12979) : crate.compiler.dom_style.call(null,G__12978,G__12979));
}
});})(vec__12974,k,b))
);
}));
crate.compiler.dom_add = (function crate$compiler$dom_add(bc,parent,elem,v){
var temp__4421__auto__ = crate.binding.opt(bc,cljs.core.constant$keyword$add);
if(cljs.core.truth_(temp__4421__auto__)){
var adder = temp__4421__auto__;
var G__12985 = parent;
var G__12986 = elem;
var G__12987 = v;
return (adder.cljs$core$IFn$_invoke$arity$3 ? adder.cljs$core$IFn$_invoke$arity$3(G__12985,G__12986,G__12987) : adder.call(null,G__12985,G__12986,G__12987));
} else {
var G__12988 = parent;
var G__12989 = elem;
return goog.dom.appendChild(G__12988,G__12989);
}
});
crate.compiler.dom_remove = (function crate$compiler$dom_remove(bc,elem){
var temp__4421__auto__ = crate.binding.opt(bc,cljs.core.constant$keyword$remove);
if(cljs.core.truth_(temp__4421__auto__)){
var remover = temp__4421__auto__;
var G__12992 = elem;
return (remover.cljs$core$IFn$_invoke$arity$1 ? remover.cljs$core$IFn$_invoke$arity$1(G__12992) : remover.call(null,G__12992));
} else {
var G__12993 = elem;
return goog.dom.removeNode(G__12993);
}
});
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$coll,(function (_,bc,parent){
return crate.binding.on_change(bc,(function (type,elem,v){
var pred__12994 = cljs.core._EQ_;
var expr__12995 = type;
if(cljs.core.truth_((function (){var G__12997 = cljs.core.constant$keyword$add;
var G__12998 = expr__12995;
return (pred__12994.cljs$core$IFn$_invoke$arity$2 ? pred__12994.cljs$core$IFn$_invoke$arity$2(G__12997,G__12998) : pred__12994.call(null,G__12997,G__12998));
})())){
return crate.compiler.dom_add(bc,parent,elem,v);
} else {
if(cljs.core.truth_((function (){var G__12999 = cljs.core.constant$keyword$remove;
var G__13000 = expr__12995;
return (pred__12994.cljs$core$IFn$_invoke$arity$2 ? pred__12994.cljs$core$IFn$_invoke$arity$2(G__12999,G__13000) : pred__12994.call(null,G__12999,G__13000));
})())){
return crate.compiler.dom_remove(bc,elem);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12995)].join('')));
}
}
}));
}));
crate.compiler.handle_bindings = (function crate$compiler$handle_bindings(bs,elem){
var seq__13013 = cljs.core.seq(bs);
var chunk__13014 = null;
var count__13015 = (0);
var i__13016 = (0);
while(true){
if((i__13016 < count__13015)){
var vec__13017 = chunk__13014.cljs$core$IIndexed$_nth$arity$2(null,i__13016);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13017,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13017,(1),null);
var G__13018_13025 = type;
var G__13019_13026 = b;
var G__13020_13027 = elem;
(crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3(G__13018_13025,G__13019_13026,G__13020_13027) : crate.compiler.dom_binding.call(null,G__13018_13025,G__13019_13026,G__13020_13027));

var G__13028 = seq__13013;
var G__13029 = chunk__13014;
var G__13030 = count__13015;
var G__13031 = (i__13016 + (1));
seq__13013 = G__13028;
chunk__13014 = G__13029;
count__13015 = G__13030;
i__13016 = G__13031;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq(seq__13013);
if(temp__4423__auto__){
var seq__13013__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13013__$1)){
var c__5094__auto__ = cljs.core.chunk_first(seq__13013__$1);
var G__13032 = cljs.core.chunk_rest(seq__13013__$1);
var G__13033 = c__5094__auto__;
var G__13034 = cljs.core.count(c__5094__auto__);
var G__13035 = (0);
seq__13013 = G__13032;
chunk__13014 = G__13033;
count__13015 = G__13034;
i__13016 = G__13035;
continue;
} else {
var vec__13021 = cljs.core.first(seq__13013__$1);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13021,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13021,(1),null);
var G__13022_13036 = type;
var G__13023_13037 = b;
var G__13024_13038 = elem;
(crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3(G__13022_13036,G__13023_13037,G__13024_13038) : crate.compiler.dom_binding.call(null,G__13022_13036,G__13023_13037,G__13024_13038));

var G__13039 = cljs.core.next(seq__13013__$1);
var G__13040 = null;
var G__13041 = (0);
var G__13042 = (0);
seq__13013 = G__13039;
chunk__13014 = G__13040;
count__13015 = G__13041;
i__13016 = G__13042;
continue;
}
} else {
return null;
}
}
break;
}
});
crate.compiler.dom_style = (function crate$compiler$dom_style(){
var G__13044 = arguments.length;
switch (G__13044) {
case 2:
return crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2 = (function (elem,v){
if(typeof v === 'string'){
elem.setAttribute("style",v);
} else {
if(cljs.core.map_QMARK_(v)){
var seq__13045_13055 = cljs.core.seq(v);
var chunk__13046_13056 = null;
var count__13047_13057 = (0);
var i__13048_13058 = (0);
while(true){
if((i__13048_13058 < count__13047_13057)){
var vec__13049_13059 = chunk__13046_13056.cljs$core$IIndexed$_nth$arity$2(null,i__13048_13058);
var k_13060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13049_13059,(0),null);
var v_13061__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13049_13059,(1),null);
crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3(elem,k_13060,v_13061__$1);

var G__13062 = seq__13045_13055;
var G__13063 = chunk__13046_13056;
var G__13064 = count__13047_13057;
var G__13065 = (i__13048_13058 + (1));
seq__13045_13055 = G__13062;
chunk__13046_13056 = G__13063;
count__13047_13057 = G__13064;
i__13048_13058 = G__13065;
continue;
} else {
var temp__4423__auto___13066 = cljs.core.seq(seq__13045_13055);
if(temp__4423__auto___13066){
var seq__13045_13067__$1 = temp__4423__auto___13066;
if(cljs.core.chunked_seq_QMARK_(seq__13045_13067__$1)){
var c__5094__auto___13068 = cljs.core.chunk_first(seq__13045_13067__$1);
var G__13069 = cljs.core.chunk_rest(seq__13045_13067__$1);
var G__13070 = c__5094__auto___13068;
var G__13071 = cljs.core.count(c__5094__auto___13068);
var G__13072 = (0);
seq__13045_13055 = G__13069;
chunk__13046_13056 = G__13070;
count__13047_13057 = G__13071;
i__13048_13058 = G__13072;
continue;
} else {
var vec__13050_13073 = cljs.core.first(seq__13045_13067__$1);
var k_13074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13050_13073,(0),null);
var v_13075__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13050_13073,(1),null);
crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3(elem,k_13074,v_13075__$1);

var G__13076 = cljs.core.next(seq__13045_13067__$1);
var G__13077 = null;
var G__13078 = (0);
var G__13079 = (0);
seq__13045_13055 = G__13076;
chunk__13046_13056 = G__13077;
count__13047_13057 = G__13078;
i__13048_13058 = G__13079;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(crate.binding.binding_QMARK_(v))){
crate.compiler.capture_binding(cljs.core.constant$keyword$style,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,v], null));

crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2(elem,crate.binding.value(v));
} else {
}
}
}

return elem;
});

crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var v__$1 = (cljs.core.truth_(crate.binding.binding_QMARK_(v))?(function (){
crate.compiler.capture_binding(cljs.core.constant$keyword$style,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

return crate.binding.value(v);
})()
:v);
var G__13051 = elem;
var G__13052 = cljs.core.name(k);
var G__13053 = v__$1;
return goog.style.setStyle(G__13051,G__13052,G__13053);
});

crate.compiler.dom_style.cljs$lang$maxFixedArity = 3;
crate.compiler.dom_attr = (function crate$compiler$dom_attr(){
var G__13081 = arguments.length;
switch (G__13081) {
case 2:
return crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2 = (function (elem,attrs){
if(cljs.core.truth_(elem)){
if(!(cljs.core.map_QMARK_(attrs))){
return elem.getAttribute(cljs.core.name(attrs));
} else {
var seq__13082_13089 = cljs.core.seq(attrs);
var chunk__13083_13090 = null;
var count__13084_13091 = (0);
var i__13085_13092 = (0);
while(true){
if((i__13085_13092 < count__13084_13091)){
var vec__13086_13093 = chunk__13083_13090.cljs$core$IIndexed$_nth$arity$2(null,i__13085_13092);
var k_13094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13086_13093,(0),null);
var v_13095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13086_13093,(1),null);
crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k_13094,v_13095);

var G__13096 = seq__13082_13089;
var G__13097 = chunk__13083_13090;
var G__13098 = count__13084_13091;
var G__13099 = (i__13085_13092 + (1));
seq__13082_13089 = G__13096;
chunk__13083_13090 = G__13097;
count__13084_13091 = G__13098;
i__13085_13092 = G__13099;
continue;
} else {
var temp__4423__auto___13100 = cljs.core.seq(seq__13082_13089);
if(temp__4423__auto___13100){
var seq__13082_13101__$1 = temp__4423__auto___13100;
if(cljs.core.chunked_seq_QMARK_(seq__13082_13101__$1)){
var c__5094__auto___13102 = cljs.core.chunk_first(seq__13082_13101__$1);
var G__13103 = cljs.core.chunk_rest(seq__13082_13101__$1);
var G__13104 = c__5094__auto___13102;
var G__13105 = cljs.core.count(c__5094__auto___13102);
var G__13106 = (0);
seq__13082_13089 = G__13103;
chunk__13083_13090 = G__13104;
count__13084_13091 = G__13105;
i__13085_13092 = G__13106;
continue;
} else {
var vec__13087_13107 = cljs.core.first(seq__13082_13101__$1);
var k_13108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13087_13107,(0),null);
var v_13109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13087_13107,(1),null);
crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k_13108,v_13109);

var G__13110 = cljs.core.next(seq__13082_13101__$1);
var G__13111 = null;
var G__13112 = (0);
var G__13113 = (0);
seq__13082_13089 = G__13110;
chunk__13083_13090 = G__13111;
count__13084_13091 = G__13112;
i__13085_13092 = G__13113;
continue;
}
} else {
}
}
break;
}

return elem;
}
} else {
return null;
}
});

crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.constant$keyword$style)){
crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2(elem,v);
} else {
var v_13114__$1 = (cljs.core.truth_(crate.binding.binding_QMARK_(v))?(function (){
crate.compiler.capture_binding(cljs.core.constant$keyword$attr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

return crate.binding.value(v);
})()
:v);
elem.setAttribute(cljs.core.name(k),v_13114__$1);
}

return elem;
});

crate.compiler.dom_attr.cljs$lang$maxFixedArity = 3;
/**
 * Regular expression that parses a CSS-style id and class from a tag name.
 */
crate.compiler.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
crate.compiler.normalize_map_attrs = (function crate$compiler$normalize_map_attrs(map_attrs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13117){
var vec__13118 = p__13117;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13118,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13118,(1),null);
if(v === true){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.name(n)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,v], null);
}
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$,cljs.core.second),map_attrs)));
});
/**
 * Ensure a tag vector is of the form [tag-name attrs content].
 */
crate.compiler.normalize_element = (function crate$compiler$normalize_element(p__13120){
var vec__13126 = p__13120;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13126,(0),null);
var content = cljs.core.nthnext(vec__13126,(1));
if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))){
throw [cljs.core.str(tag),cljs.core.str(" is not a valid tag name.")].join('');
} else {
}

var vec__13127 = cljs.core.re_matches(crate.compiler.re_tag,cljs.core.name(tag));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13127,(0),null);
var tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13127,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13127,(2),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13127,(3),null);
var vec__13128 = (function (){var vec__13129 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(tag__$1,/:/);
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13129,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13129,(1),null);
var ns_xmlns = (function (){var G__13130 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(nsp);
return (crate.compiler.xmlns.cljs$core$IFn$_invoke$arity$1 ? crate.compiler.xmlns.cljs$core$IFn$_invoke$arity$1(G__13130) : crate.compiler.xmlns.call(null,G__13130));
})();
if(cljs.core.truth_(t)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4309__auto__ = ns_xmlns;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return nsp;
}
})(),t], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$xhtml.cljs$core$IFn$_invoke$arity$1(crate.compiler.xmlns),nsp], null);
}
})();
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13128,(0),null);
var tag__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13128,(1),null);
var tag_attrs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__13127,_,tag__$1,id,class$,vec__13128,nsp,tag__$2,vec__13126,tag,content){
return (function (p1__13119_SHARP_){
return !((cljs.core.second(p1__13119_SHARP_) == null));
});})(vec__13127,_,tag__$1,id,class$,vec__13128,nsp,tag__$2,vec__13126,tag,content))
,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$id,(function (){var or__4309__auto__ = id;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return null;
}
})(),cljs.core.constant$keyword$class,(cljs.core.truth_(class$)?clojure.string.replace(class$,/\./," "):null)], null)));
var map_attrs = cljs.core.first(content);
if(cljs.core.map_QMARK_(map_attrs)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tag_attrs,crate.compiler.normalize_map_attrs(map_attrs)], 0)),cljs.core.next(content)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,tag_attrs,content], null);
}
});
crate.compiler.parse_content = (function crate$compiler$parse_content(elem,content){
var attrs = cljs.core.first(content);
if(cljs.core.map_QMARK_(attrs)){
crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2(elem,attrs);

return cljs.core.rest(content);
} else {
return content;
}
});
crate.compiler.create_elem = (cljs.core.truth_(document.createElementNS)?(function (nsp,tag){
return document.createElementNS(nsp,tag);
}):(function (_,tag){
return document.createElement(tag);
}));
crate.compiler.elem_factory = (function crate$compiler$elem_factory(tag_def){
var bindings13137 = crate.compiler.bindings;
crate.compiler.bindings = (function (){var G__13138 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13138) : cljs.core.atom.call(null,G__13138));
})();

try{var vec__13139 = crate.compiler.normalize_element(tag_def);
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13139,(0),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13139,(1),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13139,(2),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13139,(3),null);
var elem = (function (){var G__13140 = nsp;
var G__13141 = tag;
return (crate.compiler.create_elem.cljs$core$IFn$_invoke$arity$2 ? crate.compiler.create_elem.cljs$core$IFn$_invoke$arity$2(G__13140,G__13141) : crate.compiler.create_elem.call(null,G__13140,G__13141));
})();
crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2(elem,attrs);

crate.compiler.as_content(elem,content);

crate.compiler.handle_bindings((function (){var G__13142 = crate.compiler.bindings;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13142) : cljs.core.deref.call(null,G__13142));
})(),elem);

return elem;
}finally {crate.compiler.bindings = bindings13137;
}});
/**
 * Add an optional attribute argument to a function that returns a vector tag.
 */
crate.compiler.add_optional_attrs = (function crate$compiler$add_optional_attrs(func){
return (function() { 
var G__13145__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__13144 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13144,(0),null);
var body = cljs.core.nthnext(vec__13144,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__13145 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13146__i = 0, G__13146__a = new Array(arguments.length -  0);
while (G__13146__i < G__13146__a.length) {G__13146__a[G__13146__i] = arguments[G__13146__i + 0]; ++G__13146__i;}
  args = new cljs.core.IndexedSeq(G__13146__a,0);
} 
return G__13145__delegate.call(this,args);};
G__13145.cljs$lang$maxFixedArity = 0;
G__13145.cljs$lang$applyTo = (function (arglist__13147){
var args = cljs.core.seq(arglist__13147);
return G__13145__delegate(args);
});
G__13145.cljs$core$IFn$_invoke$arity$variadic = G__13145__delegate;
return G__13145;
})()
;
});
