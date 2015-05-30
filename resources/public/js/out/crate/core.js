// Compiled by ClojureScript 0.0-3291 {:static-fns true, :optimize-constants true}
goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('crate.compiler');
goog.require('crate.util');
crate.core.group_id = (function (){var G__12896 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12896) : cljs.core.atom.call(null,G__12896));
})();
crate.core.raw = (function crate$core$raw(html_str){
var G__12898 = html_str;
return goog.dom.htmlToDocumentFragment(G__12898);
});
crate.core.html = (function crate$core$html(){
var argseq__5349__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return crate.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5349__auto__);
});

crate.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (tags){
var res = cljs.core.map.cljs$core$IFn$_invoke$arity$2(crate.compiler.elem_factory,tags);
if(cljs.core.truth_(cljs.core.second(res))){
return res;
} else {
return cljs.core.first(res);
}
});

crate.core.html.cljs$lang$maxFixedArity = (0);

crate.core.html.cljs$lang$applyTo = (function (seq12899){
return crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12899));
});
/**
 * Alias for crate.util/escape-html
 */
crate.core.h = crate.util.escape_html;
