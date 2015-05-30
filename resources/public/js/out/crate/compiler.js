// Compiled by ClojureScript 0.0-3291 {}
goog.provide('crate.compiler');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('crate.binding');
crate.compiler.xmlns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xhtml","xhtml",1912943770),"http://www.w3.org/1999/xhtml",new cljs.core.Keyword(null,"svg","svg",856789142),"http://www.w3.org/2000/svg"], null);


crate.compiler.group_id = cljs.core.atom.call(null,(0));
crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crate.compiler.capture_binding = (function crate$compiler$capture_binding(tag,b){
return cljs.core.swap_BANG_.call(null,crate.compiler.bindings,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,b], null));
});
crate.compiler.as_content = (function crate$compiler$as_content(parent,content){
var seq__33174 = cljs.core.seq.call(null,content);
var chunk__33175 = null;
var count__33176 = (0);
var i__33177 = (0);
while(true){
if((i__33177 < count__33176)){
var c = cljs.core._nth.call(null,chunk__33175,i__33177);
var child_33178 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.htmlToDocumentFragment(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?crate$compiler$as_content.call(null,parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1647737163),c);

return crate$compiler$as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:(cljs.core.truth_(crate.binding.binding_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),c);

return crate$compiler$as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get((0)):goog.dom.htmlToDocumentFragment([cljs.core.str(c)].join(''))
)))))))));
if(cljs.core.truth_(child_33178)){
goog.dom.appendChild(parent,child_33178);
} else {
}

var G__33179 = seq__33174;
var G__33180 = chunk__33175;
var G__33181 = count__33176;
var G__33182 = (i__33177 + (1));
seq__33174 = G__33179;
chunk__33175 = G__33180;
count__33176 = G__33181;
i__33177 = G__33182;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__33174);
if(temp__4423__auto__){
var seq__33174__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33174__$1)){
var c__25771__auto__ = cljs.core.chunk_first.call(null,seq__33174__$1);
var G__33183 = cljs.core.chunk_rest.call(null,seq__33174__$1);
var G__33184 = c__25771__auto__;
var G__33185 = cljs.core.count.call(null,c__25771__auto__);
var G__33186 = (0);
seq__33174 = G__33183;
chunk__33175 = G__33184;
count__33176 = G__33185;
i__33177 = G__33186;
continue;
} else {
var c = cljs.core.first.call(null,seq__33174__$1);
var child_33187 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.htmlToDocumentFragment(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?crate$compiler$as_content.call(null,parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1647737163),c);

return crate$compiler$as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:(cljs.core.truth_(crate.binding.binding_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),c);

return crate$compiler$as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get((0)):goog.dom.htmlToDocumentFragment([cljs.core.str(c)].join(''))
)))))))));
if(cljs.core.truth_(child_33187)){
goog.dom.appendChild(parent,child_33187);
} else {
}

var G__33188 = cljs.core.next.call(null,seq__33174__$1);
var G__33189 = null;
var G__33190 = (0);
var G__33191 = (0);
seq__33174 = G__33188;
chunk__33175 = G__33189;
count__33176 = G__33190;
i__33177 = G__33191;
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
crate.compiler.dom_binding = (function (){var method_table__25881__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25882__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25883__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25884__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25885__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"crate.compiler","dom-binding"),((function (method_table__25881__auto__,prefer_table__25882__auto__,method_cache__25883__auto__,cached_hierarchy__25884__auto__,hierarchy__25885__auto__){
return (function (type,_,___$1){
return type;
});})(method_table__25881__auto__,prefer_table__25882__auto__,method_cache__25883__auto__,cached_hierarchy__25884__auto__,hierarchy__25885__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25885__auto__,method_table__25881__auto__,prefer_table__25882__auto__,method_cache__25883__auto__,cached_hierarchy__25884__auto__));
})();
}
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"text","text",-1790561697),(function (_,b,elem){
return crate.binding.on_change.call(null,b,(function (v){
goog.dom.removeChildren(elem);

return crate.compiler.as_content.call(null,elem,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
}));
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (_,p__33192,elem){
var vec__33193 = p__33192;
var k = cljs.core.nth.call(null,vec__33193,(0),null);
var b = cljs.core.nth.call(null,vec__33193,(1),null);
return crate.binding.on_change.call(null,b,((function (vec__33193,k,b){
return (function (v){
return crate.compiler.dom_attr.call(null,elem,k,v);
});})(vec__33193,k,b))
);
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"style","style",-496642736),(function (_,p__33194,elem){
var vec__33195 = p__33194;
var k = cljs.core.nth.call(null,vec__33195,(0),null);
var b = cljs.core.nth.call(null,vec__33195,(1),null);
return crate.binding.on_change.call(null,b,((function (vec__33195,k,b){
return (function (v){
if(cljs.core.truth_(k)){
return crate.compiler.dom_style.call(null,elem,k,v);
} else {
return crate.compiler.dom_style.call(null,elem,v);
}
});})(vec__33195,k,b))
);
}));
crate.compiler.dom_add = (function crate$compiler$dom_add(bc,parent,elem,v){
var temp__4421__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"add","add",235287739));
if(cljs.core.truth_(temp__4421__auto__)){
var adder = temp__4421__auto__;
return adder.call(null,parent,elem,v);
} else {
return goog.dom.appendChild(parent,elem);
}
});
crate.compiler.dom_remove = (function crate$compiler$dom_remove(bc,elem){
var temp__4421__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"remove","remove",-131428414));
if(cljs.core.truth_(temp__4421__auto__)){
var remover = temp__4421__auto__;
return remover.call(null,elem);
} else {
return goog.dom.removeNode(elem);
}
});
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"coll","coll",1647737163),(function (_,bc,parent){
return crate.binding.on_change.call(null,bc,(function (type,elem,v){
var pred__33196 = cljs.core._EQ_;
var expr__33197 = type;
if(cljs.core.truth_(pred__33196.call(null,new cljs.core.Keyword(null,"add","add",235287739),expr__33197))){
return crate.compiler.dom_add.call(null,bc,parent,elem,v);
} else {
if(cljs.core.truth_(pred__33196.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414),expr__33197))){
return crate.compiler.dom_remove.call(null,bc,elem);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__33197)].join('')));
}
}
}));
}));
crate.compiler.handle_bindings = (function crate$compiler$handle_bindings(bs,elem){
var seq__33205 = cljs.core.seq.call(null,bs);
var chunk__33206 = null;
var count__33207 = (0);
var i__33208 = (0);
while(true){
if((i__33208 < count__33207)){
var vec__33209 = cljs.core._nth.call(null,chunk__33206,i__33208);
var type = cljs.core.nth.call(null,vec__33209,(0),null);
var b = cljs.core.nth.call(null,vec__33209,(1),null);
crate.compiler.dom_binding.call(null,type,b,elem);

var G__33211 = seq__33205;
var G__33212 = chunk__33206;
var G__33213 = count__33207;
var G__33214 = (i__33208 + (1));
seq__33205 = G__33211;
chunk__33206 = G__33212;
count__33207 = G__33213;
i__33208 = G__33214;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__33205);
if(temp__4423__auto__){
var seq__33205__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33205__$1)){
var c__25771__auto__ = cljs.core.chunk_first.call(null,seq__33205__$1);
var G__33215 = cljs.core.chunk_rest.call(null,seq__33205__$1);
var G__33216 = c__25771__auto__;
var G__33217 = cljs.core.count.call(null,c__25771__auto__);
var G__33218 = (0);
seq__33205 = G__33215;
chunk__33206 = G__33216;
count__33207 = G__33217;
i__33208 = G__33218;
continue;
} else {
var vec__33210 = cljs.core.first.call(null,seq__33205__$1);
var type = cljs.core.nth.call(null,vec__33210,(0),null);
var b = cljs.core.nth.call(null,vec__33210,(1),null);
crate.compiler.dom_binding.call(null,type,b,elem);

var G__33219 = cljs.core.next.call(null,seq__33205__$1);
var G__33220 = null;
var G__33221 = (0);
var G__33222 = (0);
seq__33205 = G__33219;
chunk__33206 = G__33220;
count__33207 = G__33221;
i__33208 = G__33222;
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
var G__33224 = arguments.length;
switch (G__33224) {
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
if(cljs.core.map_QMARK_.call(null,v)){
var seq__33225_33232 = cljs.core.seq.call(null,v);
var chunk__33226_33233 = null;
var count__33227_33234 = (0);
var i__33228_33235 = (0);
while(true){
if((i__33228_33235 < count__33227_33234)){
var vec__33229_33236 = cljs.core._nth.call(null,chunk__33226_33233,i__33228_33235);
var k_33237 = cljs.core.nth.call(null,vec__33229_33236,(0),null);
var v_33238__$1 = cljs.core.nth.call(null,vec__33229_33236,(1),null);
crate.compiler.dom_style.call(null,elem,k_33237,v_33238__$1);

var G__33239 = seq__33225_33232;
var G__33240 = chunk__33226_33233;
var G__33241 = count__33227_33234;
var G__33242 = (i__33228_33235 + (1));
seq__33225_33232 = G__33239;
chunk__33226_33233 = G__33240;
count__33227_33234 = G__33241;
i__33228_33235 = G__33242;
continue;
} else {
var temp__4423__auto___33243 = cljs.core.seq.call(null,seq__33225_33232);
if(temp__4423__auto___33243){
var seq__33225_33244__$1 = temp__4423__auto___33243;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33225_33244__$1)){
var c__25771__auto___33245 = cljs.core.chunk_first.call(null,seq__33225_33244__$1);
var G__33246 = cljs.core.chunk_rest.call(null,seq__33225_33244__$1);
var G__33247 = c__25771__auto___33245;
var G__33248 = cljs.core.count.call(null,c__25771__auto___33245);
var G__33249 = (0);
seq__33225_33232 = G__33246;
chunk__33226_33233 = G__33247;
count__33227_33234 = G__33248;
i__33228_33235 = G__33249;
continue;
} else {
var vec__33230_33250 = cljs.core.first.call(null,seq__33225_33244__$1);
var k_33251 = cljs.core.nth.call(null,vec__33230_33250,(0),null);
var v_33252__$1 = cljs.core.nth.call(null,vec__33230_33250,(1),null);
crate.compiler.dom_style.call(null,elem,k_33251,v_33252__$1);

var G__33253 = cljs.core.next.call(null,seq__33225_33244__$1);
var G__33254 = null;
var G__33255 = (0);
var G__33256 = (0);
seq__33225_33232 = G__33253;
chunk__33226_33233 = G__33254;
count__33227_33234 = G__33255;
i__33228_33235 = G__33256;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(crate.binding.binding_QMARK_.call(null,v))){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,v], null));

crate.compiler.dom_style.call(null,elem,crate.binding.value.call(null,v));
} else {
}
}
}

return elem;
});

crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var v__$1 = (cljs.core.truth_(crate.binding.binding_QMARK_.call(null,v))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

return crate.binding.value.call(null,v);
})()
:v);
return goog.style.setStyle(elem,cljs.core.name.call(null,k),v__$1);
});

crate.compiler.dom_style.cljs$lang$maxFixedArity = 3;
crate.compiler.dom_attr = (function crate$compiler$dom_attr(){
var G__33258 = arguments.length;
switch (G__33258) {
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
if(!(cljs.core.map_QMARK_.call(null,attrs))){
return elem.getAttribute(cljs.core.name.call(null,attrs));
} else {
var seq__33259_33266 = cljs.core.seq.call(null,attrs);
var chunk__33260_33267 = null;
var count__33261_33268 = (0);
var i__33262_33269 = (0);
while(true){
if((i__33262_33269 < count__33261_33268)){
var vec__33263_33270 = cljs.core._nth.call(null,chunk__33260_33267,i__33262_33269);
var k_33271 = cljs.core.nth.call(null,vec__33263_33270,(0),null);
var v_33272 = cljs.core.nth.call(null,vec__33263_33270,(1),null);
crate.compiler.dom_attr.call(null,elem,k_33271,v_33272);

var G__33273 = seq__33259_33266;
var G__33274 = chunk__33260_33267;
var G__33275 = count__33261_33268;
var G__33276 = (i__33262_33269 + (1));
seq__33259_33266 = G__33273;
chunk__33260_33267 = G__33274;
count__33261_33268 = G__33275;
i__33262_33269 = G__33276;
continue;
} else {
var temp__4423__auto___33277 = cljs.core.seq.call(null,seq__33259_33266);
if(temp__4423__auto___33277){
var seq__33259_33278__$1 = temp__4423__auto___33277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33259_33278__$1)){
var c__25771__auto___33279 = cljs.core.chunk_first.call(null,seq__33259_33278__$1);
var G__33280 = cljs.core.chunk_rest.call(null,seq__33259_33278__$1);
var G__33281 = c__25771__auto___33279;
var G__33282 = cljs.core.count.call(null,c__25771__auto___33279);
var G__33283 = (0);
seq__33259_33266 = G__33280;
chunk__33260_33267 = G__33281;
count__33261_33268 = G__33282;
i__33262_33269 = G__33283;
continue;
} else {
var vec__33264_33284 = cljs.core.first.call(null,seq__33259_33278__$1);
var k_33285 = cljs.core.nth.call(null,vec__33264_33284,(0),null);
var v_33286 = cljs.core.nth.call(null,vec__33264_33284,(1),null);
crate.compiler.dom_attr.call(null,elem,k_33285,v_33286);

var G__33287 = cljs.core.next.call(null,seq__33259_33278__$1);
var G__33288 = null;
var G__33289 = (0);
var G__33290 = (0);
seq__33259_33266 = G__33287;
chunk__33260_33267 = G__33288;
count__33261_33268 = G__33289;
i__33262_33269 = G__33290;
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
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",-496642736))){
crate.compiler.dom_style.call(null,elem,v);
} else {
var v_33291__$1 = (cljs.core.truth_(crate.binding.binding_QMARK_.call(null,v))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

return crate.binding.value.call(null,v);
})()
:v);
elem.setAttribute(cljs.core.name.call(null,k),v_33291__$1);
}

return elem;
});

crate.compiler.dom_attr.cljs$lang$maxFixedArity = 3;
/**
 * Regular expression that parses a CSS-style id and class from a tag name.
 */
crate.compiler.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
crate.compiler.normalize_map_attrs = (function crate$compiler$normalize_map_attrs(map_attrs){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__33294){
var vec__33295 = p__33294;
var n = cljs.core.nth.call(null,vec__33295,(0),null);
var v = cljs.core.nth.call(null,vec__33295,(1),null);
if(v === true){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.name.call(null,n)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,v], null);
}
}),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.boolean$,cljs.core.second),map_attrs)));
});
/**
 * Ensure a tag vector is of the form [tag-name attrs content].
 */
crate.compiler.normalize_element = (function crate$compiler$normalize_element(p__33297){
var vec__33302 = p__33297;
var tag = cljs.core.nth.call(null,vec__33302,(0),null);
var content = cljs.core.nthnext.call(null,vec__33302,(1));
if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))){
throw [cljs.core.str(tag),cljs.core.str(" is not a valid tag name.")].join('');
} else {
}

var vec__33303 = cljs.core.re_matches.call(null,crate.compiler.re_tag,cljs.core.name.call(null,tag));
var _ = cljs.core.nth.call(null,vec__33303,(0),null);
var tag__$1 = cljs.core.nth.call(null,vec__33303,(1),null);
var id = cljs.core.nth.call(null,vec__33303,(2),null);
var class$ = cljs.core.nth.call(null,vec__33303,(3),null);
var vec__33304 = (function (){var vec__33305 = clojure.string.split.call(null,tag__$1,/:/);
var nsp = cljs.core.nth.call(null,vec__33305,(0),null);
var t = cljs.core.nth.call(null,vec__33305,(1),null);
var ns_xmlns = crate.compiler.xmlns.call(null,cljs.core.keyword.call(null,nsp));
if(cljs.core.truth_(t)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__24986__auto__ = ns_xmlns;
if(cljs.core.truth_(or__24986__auto__)){
return or__24986__auto__;
} else {
return nsp;
}
})(),t], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhtml","xhtml",1912943770).cljs$core$IFn$_invoke$arity$1(crate.compiler.xmlns),nsp], null);
}
})();
var nsp = cljs.core.nth.call(null,vec__33304,(0),null);
var tag__$2 = cljs.core.nth.call(null,vec__33304,(1),null);
var tag_attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (vec__33303,_,tag__$1,id,class$,vec__33304,nsp,tag__$2,vec__33302,tag,content){
return (function (p1__33296_SHARP_){
return !((cljs.core.second.call(null,p1__33296_SHARP_) == null));
});})(vec__33303,_,tag__$1,id,class$,vec__33304,nsp,tag__$2,vec__33302,tag,content))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__24986__auto__ = id;
if(cljs.core.truth_(or__24986__auto__)){
return or__24986__auto__;
} else {
return null;
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,/\./," "):null)], null)));
var map_attrs = cljs.core.first.call(null,content);
if(cljs.core.map_QMARK_.call(null,map_attrs)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,cljs.core.merge.call(null,tag_attrs,crate.compiler.normalize_map_attrs.call(null,map_attrs)),cljs.core.next.call(null,content)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,tag_attrs,content], null);
}
});
crate.compiler.parse_content = (function crate$compiler$parse_content(elem,content){
var attrs = cljs.core.first.call(null,content);
if(cljs.core.map_QMARK_.call(null,attrs)){
crate.compiler.dom_attr.call(null,elem,attrs);

return cljs.core.rest.call(null,content);
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
var bindings33308 = crate.compiler.bindings;
crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);

try{var vec__33309 = crate.compiler.normalize_element.call(null,tag_def);
var nsp = cljs.core.nth.call(null,vec__33309,(0),null);
var tag = cljs.core.nth.call(null,vec__33309,(1),null);
var attrs = cljs.core.nth.call(null,vec__33309,(2),null);
var content = cljs.core.nth.call(null,vec__33309,(3),null);
var elem = crate.compiler.create_elem.call(null,nsp,tag);
crate.compiler.dom_attr.call(null,elem,attrs);

crate.compiler.as_content.call(null,elem,content);

crate.compiler.handle_bindings.call(null,cljs.core.deref.call(null,crate.compiler.bindings),elem);

return elem;
}finally {crate.compiler.bindings = bindings33308;
}});
/**
 * Add an optional attribute argument to a function that returns a vector tag.
 */
crate.compiler.add_optional_attrs = (function crate$compiler$add_optional_attrs(func){
return (function() { 
var G__33312__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__33311 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__33311,(0),null);
var body = cljs.core.nthnext.call(null,vec__33311,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__33312 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33313__i = 0, G__33313__a = new Array(arguments.length -  0);
while (G__33313__i < G__33313__a.length) {G__33313__a[G__33313__i] = arguments[G__33313__i + 0]; ++G__33313__i;}
  args = new cljs.core.IndexedSeq(G__33313__a,0);
} 
return G__33312__delegate.call(this,args);};
G__33312.cljs$lang$maxFixedArity = 0;
G__33312.cljs$lang$applyTo = (function (arglist__33314){
var args = cljs.core.seq(arglist__33314);
return G__33312__delegate(args);
});
G__33312.cljs$core$IFn$_invoke$arity$variadic = G__33312__delegate;
return G__33312;
})()
;
});

//# sourceMappingURL=compiler.js.map