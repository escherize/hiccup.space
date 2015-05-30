// Compiled by ClojureScript 0.0-3291 {:static-fns true, :optimize-constants true}
goog.provide('hiccup_repl.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('markdown.core');
goog.require('crate.core');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
goog.require('clojure.string');
goog.require('cljs.reader');
hiccup_repl.core.atom_textarea = (function hiccup_repl$core$atom_textarea(model){
var line_num = cljs.core.count(clojure.string.split_lines(clojure.string.replace((function (){var G__12391 = model;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12391) : cljs.core.deref.call(null,G__12391));
})(),/#_/,"")));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$textarea$form_DASH_control,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$font_DASH_family,"monospace",cljs.core.constant$keyword$font_DASH_size,"14px",cljs.core.constant$keyword$width,"100%",cljs.core.constant$keyword$height,[cljs.core.str(((20) * ((2) + line_num))),cljs.core.str("px")].join(''),cljs.core.constant$keyword$margin_DASH_left,"10px"], null),cljs.core.constant$keyword$value,(function (){var G__12392 = model;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12392) : cljs.core.deref.call(null,G__12392));
})(),cljs.core.constant$keyword$on_DASH_blur,((function (line_num){
return (function (p1__12385_SHARP_){
return console.log(p1__12385_SHARP_);
});})(line_num))
,cljs.core.constant$keyword$on_DASH_change,((function (line_num){
return (function (p1__12386_SHARP_){
var G__12393 = model;
var G__12394 = p1__12386_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12393,G__12394) : cljs.core.reset_BANG_.call(null,G__12393,G__12394));
});})(line_num))
], null)], null)], null);
});
hiccup_repl.core.safe_read = (function hiccup_repl$core$safe_read(s,out){
try{var data = cljs.reader.read_string(s);
var G__12399 = out;
var G__12400 = data;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12399,G__12400) : cljs.core.reset_BANG_.call(null,G__12399,G__12400));
}catch (e12398){var e = e12398;
return "never mind";
}});
hiccup_repl.core.safe_parse = (function hiccup_repl$core$safe_parse(hiccup_data,out){
try{var hiccup_html = reagent.core.render_to_static_markup(hiccup_data);
var G__12405 = out;
var G__12406 = hiccup_html;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12405,G__12406) : cljs.core.reset_BANG_.call(null,G__12405,G__12406));
}catch (e12404){var e = e12404;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$ok,false,cljs.core.constant$keyword$data,e], null);
}});
hiccup_repl.core.example_component = (function hiccup_repl$core$example_component(starting_string){
var hic_string = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(starting_string);
var hiccup_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var hiccup_html = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return ((function (hic_string,hiccup_data,hiccup_html){
return (function (){
var __12415 = hiccup_repl.core.safe_read((function (){var G__12411 = hic_string;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12411) : cljs.core.deref.call(null,G__12411));
})(),hiccup_data);
var __12416__$1 = hiccup_repl.core.safe_parse((function (){var G__12412 = hiccup_data;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12412) : cljs.core.deref.call(null,G__12412));
})(),hiccup_html);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_xs_DASH_6$col_DASH_md_DASH_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup_repl.core.atom_textarea,hic_string], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_xs_DASH_6$col_DASH_md_DASH_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$dangerously_DASH_set_DASH_inner_DASH_HTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$__html,(function (){var G__12413 = hiccup_html;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12413) : cljs.core.deref.call(null,G__12413));
})()], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_md_DASH_4$hidden_DASH_sm$hidden_DASH_xs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$form_DASH_group,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$border,"black 1px solid",cljs.core.constant$keyword$font_DASH_family,"monowidth"], null)], null),(function (){var G__12414 = hiccup_html;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12414) : cljs.core.deref.call(null,G__12414));
})()], null)], null)], null)], null);
});
;})(hic_string,hiccup_data,hiccup_html))
});
hiccup_repl.core.home_component = (function hiccup_repl$core$home_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$jumbotron,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h1,"hiccup.space"], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Hiccup is subset of ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,"http://braveclojure.com"], null),"Clojure"], null)," used for generating html (or ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,"http://reagent-project.github.io/"], null),"react.js components"], null),") using ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,"http://braveclojure.com"], null),"Clojure"], null)," and ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,"https://www.quora.com/Why-ClojureScript"], null),"ClojureScript"], null),"."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Here are some examples:"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup_repl.core.example_component,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h1,"Welcome to hiccup.space!"], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup_repl.core.example_component,"[:h2 \"You can \"\n     [:code \"edit\"]\n     \"the boxes on the left.\"]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup_repl.core.example_component,";;      v-- This Map --v\n[:h1 {:style {:color \"#888\"}}\n  \"Attributes can be added using a map for styles.\"]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup_repl.core.example_component,"[:h1.gray.center-text\n  \"Classes can be added using a .\"]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup_repl.core.example_component,"[:h2#green-outline.rounded\n  \"Ids can be added using a #\"]"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$pre,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$margin_DASH_left,"15px"], null)], null),"A #_ tells the reader to ignore the next expression."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup_repl.core.example_component,"[:div\n[:h4 \"Remove (\" [:code \"#_\"] \") for a surprise :)\"\n#_[:img {:src \"http://media.giphy.com/media/oLJ3zbbp4lX1u/giphy.gif\"}]\n]]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup_repl.core.example_component,";; Table example:\n[:table.table.table-hover\n [:thead\n  [:tr [:td \"Programming Language\"]\n       [:td \"Coolness\"]]]\n [:tbody\n  [:tr [:td \"Clojure\"]       [:td \"100\"]]\n  [:tr [:td \"ClojureScript\"] [:td \"100\"]]\n  [:tr [:td \"Brainfuck\"]     [:td \"5\"]]]]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup_repl.core.example_component,"[:div\n  [:input.form-control\n    {:type \"text\" :placeholder \"Your name\"}]]"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,"http://twitter.com/escherize"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$code,"by @escherize on twiter"], null)], null)], null)], null);
});
hiccup_repl.core.pages = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$home,new cljs.core.Var(function(){return hiccup_repl.core.home_component;},new cljs.core.Symbol("hiccup-repl.core","home-component","hiccup-repl.core/home-component",-1855402575,null),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$ns,cljs.core.constant$keyword$name,cljs.core.constant$keyword$file,cljs.core.constant$keyword$end_DASH_column,cljs.core.constant$keyword$column,cljs.core.constant$keyword$line,cljs.core.constant$keyword$end_DASH_line,cljs.core.constant$keyword$arglists,cljs.core.constant$keyword$doc,cljs.core.constant$keyword$test],[new cljs.core.Symbol(null,"hiccup-repl.core","hiccup-repl.core",1278503174,null),new cljs.core.Symbol(null,"home-component","home-component",511117826,null),"src-cljs/hiccup_repl/core.cljs",21,1,59,59,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(hiccup_repl.core.home_component)?hiccup_repl.core.home_component.cljs$lang$test:null)]))], null);
hiccup_repl.core.page = (function hiccup_repl$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12418 = reagent.session.get(cljs.core.constant$keyword$page);
return (hiccup_repl.core.pages.cljs$core$IFn$_invoke$arity$1 ? hiccup_repl.core.pages.cljs$core$IFn$_invoke$arity$1(G__12418) : hiccup_repl.core.pages.call(null,G__12418));
})()], null);
});
secretary.core.set_config_BANG_(cljs.core.constant$keyword$prefix,"#");
var action__12254__auto___12421 = (function (params__12255__auto__){
if(cljs.core.map_QMARK_(params__12255__auto__)){
var map__12419 = params__12255__auto__;
var map__12419__$1 = ((cljs.core.seq_QMARK_(map__12419))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12419):map__12419);
return reagent.session.put_BANG_(cljs.core.constant$keyword$page,cljs.core.constant$keyword$home);
} else {
if(cljs.core.vector_QMARK_(params__12255__auto__)){
var vec__12420 = params__12255__auto__;
return reagent.session.put_BANG_(cljs.core.constant$keyword$page,cljs.core.constant$keyword$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__12254__auto___12421);

hiccup_repl.core.hook_browser_navigation_BANG_ = (function hiccup_repl$core$hook_browser_navigation_BANG_(){
var G__12426 = (new goog.History());
var G__12427_12430 = G__12426;
var G__12428_12431 = goog.history.EventType.NAVIGATE;
var G__12429_12432 = ((function (G__12427_12430,G__12428_12431,G__12426){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__12427_12430,G__12428_12431,G__12426))
;
goog.events.listen(G__12427_12430,G__12428_12431,G__12429_12432);

G__12426.setEnabled(true);

return G__12426;
});
hiccup_repl.core.mount_components = (function hiccup_repl$core$mount_components(){
var G__12435 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return hiccup_repl.core.page;},new cljs.core.Symbol("hiccup-repl.core","page","hiccup-repl.core/page",184720675,null),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$ns,cljs.core.constant$keyword$name,cljs.core.constant$keyword$file,cljs.core.constant$keyword$end_DASH_column,cljs.core.constant$keyword$column,cljs.core.constant$keyword$line,cljs.core.constant$keyword$end_DASH_line,cljs.core.constant$keyword$arglists,cljs.core.constant$keyword$doc,cljs.core.constant$keyword$test],[new cljs.core.Symbol(null,"hiccup-repl.core","hiccup-repl.core",1278503174,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),"src-cljs/hiccup_repl/core.cljs",11,1,116,116,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(hiccup_repl.core.page)?hiccup_repl.core.page.cljs$lang$test:null)]))], null);
var G__12436 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__12435,G__12436) : reagent.core.render_component.call(null,G__12435,G__12436));
});
hiccup_repl.core.init_BANG_ = (function hiccup_repl$core$init_BANG_(){
hiccup_repl.core.hook_browser_navigation_BANG_();

reagent.session.put_BANG_(cljs.core.constant$keyword$page,cljs.core.constant$keyword$home);

return hiccup_repl.core.mount_components();
});
