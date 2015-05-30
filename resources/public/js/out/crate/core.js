// Compiled by ClojureScript 0.0-3291 {}
goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('crate.compiler');
goog.require('crate.util');
crate.core.group_id = cljs.core.atom.call(null,(0));
crate.core.raw = (function crate$core$raw(html_str){
return goog.dom.htmlToDocumentFragment(html_str);
});
crate.core.html = (function crate$core$html(){
var argseq__26026__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return crate.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__26026__auto__);
});

crate.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (tags){
var res = cljs.core.map.call(null,crate.compiler.elem_factory,tags);
if(cljs.core.truth_(cljs.core.second.call(null,res))){
return res;
} else {
return cljs.core.first.call(null,res);
}
});

crate.core.html.cljs$lang$maxFixedArity = (0);

crate.core.html.cljs$lang$applyTo = (function (seq33167){
return crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33167));
});
/**
 * Alias for crate.util/escape-html
 */
crate.core.h = crate.util.escape_html;

//# sourceMappingURL=core.js.map