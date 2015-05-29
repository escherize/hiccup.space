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
var seq__27186 = cljs.core.seq.call(null,content);
var chunk__27187 = null;
var count__27188 = (0);
var i__27189 = (0);
while(true){
if((i__27189 < count__27188)){
var c = cljs.core._nth.call(null,chunk__27187,i__27189);
var child_27190 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.htmlToDocumentFragment(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?crate$compiler$as_content.call(null,parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1647737163),c);

return crate$compiler$as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:(cljs.core.truth_(crate.binding.binding_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),c);

return crate$compiler$as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get((0)):goog.dom.htmlToDocumentFragment([cljs.core.str(c)].join(''))
)))))))));
if(cljs.core.truth_(child_27190)){
goog.dom.appendChild(parent,child_27190);
} else {
}

var G__27191 = seq__27186;
var G__27192 = chunk__27187;
var G__27193 = count__27188;
var G__27194 = (i__27189 + (1));
seq__27186 = G__27191;
chunk__27187 = G__27192;
count__27188 = G__27193;
i__27189 = G__27194;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__27186);
if(temp__4423__auto__){
var seq__27186__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27186__$1)){
var c__25771__auto__ = cljs.core.chunk_first.call(null,seq__27186__$1);
var G__27195 = cljs.core.chunk_rest.call(null,seq__27186__$1);
var G__27196 = c__25771__auto__;
var G__27197 = cljs.core.count.call(null,c__25771__auto__);
var G__27198 = (0);
seq__27186 = G__27195;
chunk__27187 = G__27196;
count__27188 = G__27197;
i__27189 = G__27198;
continue;
} else {
var c = cljs.core.first.call(null,seq__27186__$1);
var child_27199 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.htmlToDocumentFragment(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?crate$compiler$as_content.call(null,parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1647737163),c);

return crate$compiler$as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:(cljs.core.truth_(crate.binding.binding_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),c);

return crate$compiler$as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get((0)):goog.dom.htmlToDocumentFragment([cljs.core.str(c)].join(''))
)))))))));
if(cljs.core.truth_(child_27199)){
goog.dom.appendChild(parent,child_27199);
} else {
}

var G__27200 = cljs.core.next.call(null,seq__27186__$1);
var G__27201 = null;
var G__27202 = (0);
var G__27203 = (0);
seq__27186 = G__27200;
chunk__27187 = G__27201;
count__27188 = G__27202;
i__27189 = G__27203;
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
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (_,p__27204,elem){
var vec__27205 = p__27204;
var k = cljs.core.nth.call(null,vec__27205,(0),null);
var b = cljs.core.nth.call(null,vec__27205,(1),null);
return crate.binding.on_change.call(null,b,((function (vec__27205,k,b){
return (function (v){
return crate.compiler.dom_attr.call(null,elem,k,v);
});})(vec__27205,k,b))
);
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"style","style",-496642736),(function (_,p__27206,elem){
var vec__27207 = p__27206;
var k = cljs.core.nth.call(null,vec__27207,(0),null);
var b = cljs.core.nth.call(null,vec__27207,(1),null);
return crate.binding.on_change.call(null,b,((function (vec__27207,k,b){
return (function (v){
if(cljs.core.truth_(k)){
return crate.compiler.dom_style.call(null,elem,k,v);
} else {
return crate.compiler.dom_style.call(null,elem,v);
}
});})(vec__27207,k,b))
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
var pred__27208 = cljs.core._EQ_;
var expr__27209 = type;
if(cljs.core.truth_(pred__27208.call(null,new cljs.core.Keyword(null,"add","add",235287739),expr__27209))){
return crate.compiler.dom_add.call(null,bc,parent,elem,v);
} else {
if(cljs.core.truth_(pred__27208.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414),expr__27209))){
return crate.compiler.dom_remove.call(null,bc,elem);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__27209)].join('')));
}
}
}));
}));
crate.compiler.handle_bindings = (function crate$compiler$handle_bindings(bs,elem){
var seq__27217 = cljs.core.seq.call(null,bs);
var chunk__27218 = null;
var count__27219 = (0);
var i__27220 = (0);
while(true){
if((i__27220 < count__27219)){
var vec__27221 = cljs.core._nth.call(null,chunk__27218,i__27220);
var type = cljs.core.nth.call(null,vec__27221,(0),null);
var b = cljs.core.nth.call(null,vec__27221,(1),null);
crate.compiler.dom_binding.call(null,type,b,elem);

var G__27223 = seq__27217;
var G__27224 = chunk__27218;
var G__27225 = count__27219;
var G__27226 = (i__27220 + (1));
seq__27217 = G__27223;
chunk__27218 = G__27224;
count__27219 = G__27225;
i__27220 = G__27226;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__27217);
if(temp__4423__auto__){
var seq__27217__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27217__$1)){
var c__25771__auto__ = cljs.core.chunk_first.call(null,seq__27217__$1);
var G__27227 = cljs.core.chunk_rest.call(null,seq__27217__$1);
var G__27228 = c__25771__auto__;
var G__27229 = cljs.core.count.call(null,c__25771__auto__);
var G__27230 = (0);
seq__27217 = G__27227;
chunk__27218 = G__27228;
count__27219 = G__27229;
i__27220 = G__27230;
continue;
} else {
var vec__27222 = cljs.core.first.call(null,seq__27217__$1);
var type = cljs.core.nth.call(null,vec__27222,(0),null);
var b = cljs.core.nth.call(null,vec__27222,(1),null);
crate.compiler.dom_binding.call(null,type,b,elem);

var G__27231 = cljs.core.next.call(null,seq__27217__$1);
var G__27232 = null;
var G__27233 = (0);
var G__27234 = (0);
seq__27217 = G__27231;
chunk__27218 = G__27232;
count__27219 = G__27233;
i__27220 = G__27234;
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
var G__27236 = arguments.length;
switch (G__27236) {
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
var seq__27237_27244 = cljs.core.seq.call(null,v);
var chunk__27238_27245 = null;
var count__27239_27246 = (0);
var i__27240_27247 = (0);
while(true){
if((i__27240_27247 < count__27239_27246)){
var vec__27241_27248 = cljs.core._nth.call(null,chunk__27238_27245,i__27240_27247);
var k_27249 = cljs.core.nth.call(null,vec__27241_27248,(0),null);
var v_27250__$1 = cljs.core.nth.call(null,vec__27241_27248,(1),null);
crate.compiler.dom_style.call(null,elem,k_27249,v_27250__$1);

var G__27251 = seq__27237_27244;
var G__27252 = chunk__27238_27245;
var G__27253 = count__27239_27246;
var G__27254 = (i__27240_27247 + (1));
seq__27237_27244 = G__27251;
chunk__27238_27245 = G__27252;
count__27239_27246 = G__27253;
i__27240_27247 = G__27254;
continue;
} else {
var temp__4423__auto___27255 = cljs.core.seq.call(null,seq__27237_27244);
if(temp__4423__auto___27255){
var seq__27237_27256__$1 = temp__4423__auto___27255;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27237_27256__$1)){
var c__25771__auto___27257 = cljs.core.chunk_first.call(null,seq__27237_27256__$1);
var G__27258 = cljs.core.chunk_rest.call(null,seq__27237_27256__$1);
var G__27259 = c__25771__auto___27257;
var G__27260 = cljs.core.count.call(null,c__25771__auto___27257);
var G__27261 = (0);
seq__27237_27244 = G__27258;
chunk__27238_27245 = G__27259;
count__27239_27246 = G__27260;
i__27240_27247 = G__27261;
continue;
} else {
var vec__27242_27262 = cljs.core.first.call(null,seq__27237_27256__$1);
var k_27263 = cljs.core.nth.call(null,vec__27242_27262,(0),null);
var v_27264__$1 = cljs.core.nth.call(null,vec__27242_27262,(1),null);
crate.compiler.dom_style.call(null,elem,k_27263,v_27264__$1);

var G__27265 = cljs.core.next.call(null,seq__27237_27256__$1);
var G__27266 = null;
var G__27267 = (0);
var G__27268 = (0);
seq__27237_27244 = G__27265;
chunk__27238_27245 = G__27266;
count__27239_27246 = G__27267;
i__27240_27247 = G__27268;
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
var G__27270 = arguments.length;
switch (G__27270) {
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
var seq__27271_27278 = cljs.core.seq.call(null,attrs);
var chunk__27272_27279 = null;
var count__27273_27280 = (0);
var i__27274_27281 = (0);
while(true){
if((i__27274_27281 < count__27273_27280)){
var vec__27275_27282 = cljs.core._nth.call(null,chunk__27272_27279,i__27274_27281);
var k_27283 = cljs.core.nth.call(null,vec__27275_27282,(0),null);
var v_27284 = cljs.core.nth.call(null,vec__27275_27282,(1),null);
crate.compiler.dom_attr.call(null,elem,k_27283,v_27284);

var G__27285 = seq__27271_27278;
var G__27286 = chunk__27272_27279;
var G__27287 = count__27273_27280;
var G__27288 = (i__27274_27281 + (1));
seq__27271_27278 = G__27285;
chunk__27272_27279 = G__27286;
count__27273_27280 = G__27287;
i__27274_27281 = G__27288;
continue;
} else {
var temp__4423__auto___27289 = cljs.core.seq.call(null,seq__27271_27278);
if(temp__4423__auto___27289){
var seq__27271_27290__$1 = temp__4423__auto___27289;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27271_27290__$1)){
var c__25771__auto___27291 = cljs.core.chunk_first.call(null,seq__27271_27290__$1);
var G__27292 = cljs.core.chunk_rest.call(null,seq__27271_27290__$1);
var G__27293 = c__25771__auto___27291;
var G__27294 = cljs.core.count.call(null,c__25771__auto___27291);
var G__27295 = (0);
seq__27271_27278 = G__27292;
chunk__27272_27279 = G__27293;
count__27273_27280 = G__27294;
i__27274_27281 = G__27295;
continue;
} else {
var vec__27276_27296 = cljs.core.first.call(null,seq__27271_27290__$1);
var k_27297 = cljs.core.nth.call(null,vec__27276_27296,(0),null);
var v_27298 = cljs.core.nth.call(null,vec__27276_27296,(1),null);
crate.compiler.dom_attr.call(null,elem,k_27297,v_27298);

var G__27299 = cljs.core.next.call(null,seq__27271_27290__$1);
var G__27300 = null;
var G__27301 = (0);
var G__27302 = (0);
seq__27271_27278 = G__27299;
chunk__27272_27279 = G__27300;
count__27273_27280 = G__27301;
i__27274_27281 = G__27302;
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
var v_27303__$1 = (cljs.core.truth_(crate.binding.binding_QMARK_.call(null,v))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

return crate.binding.value.call(null,v);
})()
:v);
elem.setAttribute(cljs.core.name.call(null,k),v_27303__$1);
}

return elem;
});

crate.compiler.dom_attr.cljs$lang$maxFixedArity = 3;
/**
 * Regular expression that parses a CSS-style id and class from a tag name.
 */
crate.compiler.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
crate.compiler.normalize_map_attrs = (function crate$compiler$normalize_map_attrs(map_attrs){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__27306){
var vec__27307 = p__27306;
var n = cljs.core.nth.call(null,vec__27307,(0),null);
var v = cljs.core.nth.call(null,vec__27307,(1),null);
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
crate.compiler.normalize_element = (function crate$compiler$normalize_element(p__27309){
var vec__27314 = p__27309;
var tag = cljs.core.nth.call(null,vec__27314,(0),null);
var content = cljs.core.nthnext.call(null,vec__27314,(1));
if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))){
throw [cljs.core.str(tag),cljs.core.str(" is not a valid tag name.")].join('');
} else {
}

var vec__27315 = cljs.core.re_matches.call(null,crate.compiler.re_tag,cljs.core.name.call(null,tag));
var _ = cljs.core.nth.call(null,vec__27315,(0),null);
var tag__$1 = cljs.core.nth.call(null,vec__27315,(1),null);
var id = cljs.core.nth.call(null,vec__27315,(2),null);
var class$ = cljs.core.nth.call(null,vec__27315,(3),null);
var vec__27316 = (function (){var vec__27317 = clojure.string.split.call(null,tag__$1,/:/);
var nsp = cljs.core.nth.call(null,vec__27317,(0),null);
var t = cljs.core.nth.call(null,vec__27317,(1),null);
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
var nsp = cljs.core.nth.call(null,vec__27316,(0),null);
var tag__$2 = cljs.core.nth.call(null,vec__27316,(1),null);
var tag_attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (vec__27315,_,tag__$1,id,class$,vec__27316,nsp,tag__$2,vec__27314,tag,content){
return (function (p1__27308_SHARP_){
return !((cljs.core.second.call(null,p1__27308_SHARP_) == null));
});})(vec__27315,_,tag__$1,id,class$,vec__27316,nsp,tag__$2,vec__27314,tag,content))
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
var bindings27320 = crate.compiler.bindings;
crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);

try{var vec__27321 = crate.compiler.normalize_element.call(null,tag_def);
var nsp = cljs.core.nth.call(null,vec__27321,(0),null);
var tag = cljs.core.nth.call(null,vec__27321,(1),null);
var attrs = cljs.core.nth.call(null,vec__27321,(2),null);
var content = cljs.core.nth.call(null,vec__27321,(3),null);
var elem = crate.compiler.create_elem.call(null,nsp,tag);
crate.compiler.dom_attr.call(null,elem,attrs);

crate.compiler.as_content.call(null,elem,content);

crate.compiler.handle_bindings.call(null,cljs.core.deref.call(null,crate.compiler.bindings),elem);

return elem;
}finally {crate.compiler.bindings = bindings27320;
}});
/**
 * Add an optional attribute argument to a function that returns a vector tag.
 */
crate.compiler.add_optional_attrs = (function crate$compiler$add_optional_attrs(func){
return (function() { 
var G__27324__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__27323 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__27323,(0),null);
var body = cljs.core.nthnext.call(null,vec__27323,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__27324 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27325__i = 0, G__27325__a = new Array(arguments.length -  0);
while (G__27325__i < G__27325__a.length) {G__27325__a[G__27325__i] = arguments[G__27325__i + 0]; ++G__27325__i;}
  args = new cljs.core.IndexedSeq(G__27325__a,0);
} 
return G__27324__delegate.call(this,args);};
G__27324.cljs$lang$maxFixedArity = 0;
G__27324.cljs$lang$applyTo = (function (arglist__27326){
var args = cljs.core.seq(arglist__27326);
return G__27324__delegate(args);
});
G__27324.cljs$core$IFn$_invoke$arity$variadic = G__27324__delegate;
return G__27324;
})()
;
});

//# sourceMappingURL=compiler.js.map