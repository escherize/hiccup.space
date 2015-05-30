// Compiled by ClojureScript 0.0-3291 {:static-fns true, :optimize-constants true}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__19785){
var map__19793 = p__19785;
var map__19793__$1 = ((cljs.core.seq_QMARK_(map__19793))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19793):map__19793);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19793__$1,cljs.core.constant$keyword$replacement_DASH_transformers);
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19793__$1,cljs.core.constant$keyword$custom_DASH_transformers);
return ((function (map__19793,map__19793__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_19794 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__19795 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_STAR_next_line_STAR_19794,map__19793,map__19793__$1,replacement_transformers,custom_transformers){
return (function (p__19796,transformer){
var vec__19797 = p__19796;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19797,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19797,(1),null);
var G__19798 = text;
var G__19799 = state__$1;
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__19798,G__19799) : transformer.call(null,G__19798,G__19799));
});})(_STAR_next_line_STAR_19794,map__19793,map__19793__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__4309__auto__ = replacement_transformers;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19795,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19795,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_19794;
}});
;})(map__19793,map__19793__$1,replacement_transformers,custom_transformers))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(){
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq19800){
var G__19801 = cljs.core.first(seq19800);
var seq19800__$1 = cljs.core.next(seq19800);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__19801,seq19800__$1);
});
markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = (function (){var G__19808 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19808) : cljs.core.atom.call(null,G__19808));
})();
var seq__19809_19814 = cljs.core.seq(lines);
var chunk__19810_19815 = null;
var count__19811_19816 = (0);
var i__19812_19817 = (0);
while(true){
if((i__19812_19817 < count__19811_19816)){
var line_19818 = chunk__19810_19815.cljs$core$IIndexed$_nth$arity$2(null,i__19812_19817);
markdown.transformers.parse_reference_link(line_19818,references);

var G__19819 = seq__19809_19814;
var G__19820 = chunk__19810_19815;
var G__19821 = count__19811_19816;
var G__19822 = (i__19812_19817 + (1));
seq__19809_19814 = G__19819;
chunk__19810_19815 = G__19820;
count__19811_19816 = G__19821;
i__19812_19817 = G__19822;
continue;
} else {
var temp__4423__auto___19823 = cljs.core.seq(seq__19809_19814);
if(temp__4423__auto___19823){
var seq__19809_19824__$1 = temp__4423__auto___19823;
if(cljs.core.chunked_seq_QMARK_(seq__19809_19824__$1)){
var c__5094__auto___19825 = cljs.core.chunk_first(seq__19809_19824__$1);
var G__19826 = cljs.core.chunk_rest(seq__19809_19824__$1);
var G__19827 = c__5094__auto___19825;
var G__19828 = cljs.core.count(c__5094__auto___19825);
var G__19829 = (0);
seq__19809_19814 = G__19826;
chunk__19810_19815 = G__19827;
count__19811_19816 = G__19828;
i__19812_19817 = G__19829;
continue;
} else {
var line_19830 = cljs.core.first(seq__19809_19824__$1);
markdown.transformers.parse_reference_link(line_19830,references);

var G__19831 = cljs.core.next(seq__19809_19824__$1);
var G__19832 = null;
var G__19833 = (0);
var G__19834 = (0);
seq__19809_19814 = G__19831;
chunk__19810_19815 = G__19832;
count__19811_19816 = G__19833;
i__19812_19817 = G__19834;
continue;
}
} else {
}
}
break;
}

var G__19813 = references;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19813) : cljs.core.deref.call(null,G__19813));
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md__GT_html = (function markdown$core$md__GT_html(){
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
var _STAR_substring_STAR_19837 = markdown.transformers._STAR_substring_STAR_;
var formatter19838 = markdown.transformers.formatter;
markdown.transformers._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_19837,formatter19838){
return (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});})(_STAR_substring_STAR_19837,formatter19838))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = text.split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(cljs.core.constant$keyword$reference_DASH_links_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var transformer = markdown.core.init_transformer(params__$1);
var G__19840_19855 = lines;
var vec__19841_19856 = G__19840_19855;
var line_19857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19841_19856,(0),null);
var more_19858 = cljs.core.nthnext(vec__19841_19856,(1));
var state_19859 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$clojurescript,true,cljs.core.constant$keyword$references,references,cljs.core.constant$keyword$last_DASH_line_DASH_empty_QMARK_,true], null),params__$1], 0));
var G__19840_19860__$1 = G__19840_19855;
var state_19861__$1 = state_19859;
while(true){
var vec__19842_19862 = G__19840_19860__$1;
var line_19863__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19842_19862,(0),null);
var more_19864__$1 = cljs.core.nthnext(vec__19842_19862,(1));
var state_19865__$2 = state_19861__$1;
var state_19866__$3 = (cljs.core.truth_(cljs.core.constant$keyword$buf.cljs$core$IFn$_invoke$arity$1(state_19865__$2))?(function (){var G__19843 = html;
var G__19844 = cljs.core.constant$keyword$buf.cljs$core$IFn$_invoke$arity$1(state_19865__$2);
var G__19845 = cljs.core.first(more_19864__$1);
var G__19846 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_19865__$2,cljs.core.constant$keyword$buf,cljs.core.array_seq([cljs.core.constant$keyword$lists], 0)),cljs.core.constant$keyword$last_DASH_line_DASH_empty_QMARK_,true);
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__19843,G__19844,G__19845,G__19846) : transformer.call(null,G__19843,G__19844,G__19845,G__19846));
})():state_19865__$2);
if(cljs.core.truth_(cljs.core.first(more_19864__$1))){
var G__19867 = more_19864__$1;
var G__19868 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19847 = html;
var G__19848 = line_19863__$1;
var G__19849 = cljs.core.first(more_19864__$1);
var G__19850 = state_19866__$3;
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__19847,G__19848,G__19849,G__19850) : transformer.call(null,G__19847,G__19848,G__19849,G__19850));
})(),cljs.core.constant$keyword$last_DASH_line_DASH_empty_QMARK_,cljs.core.empty_QMARK_(line_19863__$1));
G__19840_19860__$1 = G__19867;
state_19861__$1 = G__19868;
continue;
} else {
var G__19851_19869 = html;
var G__19852_19870 = line_19863__$1;
var G__19853_19871 = "";
var G__19854_19872 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_19866__$3,cljs.core.constant$keyword$eof,true);
(transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__19851_19869,G__19852_19870,G__19853_19871,G__19854_19872) : transformer.call(null,G__19851_19869,G__19852_19870,G__19853_19871,G__19854_19872));
}
break;
}

return html.toString();
}finally {markdown.transformers.formatter = formatter19838;

markdown.transformers._STAR_substring_STAR_ = _STAR_substring_STAR_19837;
}});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq19835){
var G__19836 = cljs.core.first(seq19835);
var seq19835__$1 = cljs.core.next(seq19835);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__19836,seq19835__$1);
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(){
var argseq__5349__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__5349__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq19873){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19873));
});
