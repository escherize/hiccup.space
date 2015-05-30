// Compiled by ClojureScript 0.0-3291 {}
goog.provide('hiccup_repl.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('cljsjs.jquery');
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.form-control","textarea.form-control",-1690362789),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"200px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px"], null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,model),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (p1__32819_SHARP_){
return console.log(p1__32819_SHARP_);
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__32820_SHARP_){
return cljs.core.reset_BANG_.call(null,model,p1__32820_SHARP_.target.value);
})], null)], null)], null);
});
hiccup_repl.core.safe_read = (function hiccup_repl$core$safe_read(s,out){
try{var data = cljs.reader.read_string.call(null,s);
return cljs.core.reset_BANG_.call(null,out,data);
}catch (e32822){var e = e32822;
return "never mind";
}});
hiccup_repl.core.safe_parse = (function hiccup_repl$core$safe_parse(hiccup_data,out){
try{var hiccup_html = reagent.core.render_to_static_markup.call(null,hiccup_data);
return cljs.core.reset_BANG_.call(null,out,hiccup_html);
}catch (e32824){var e = e32824;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ok","ok",967785236),false,new cljs.core.Keyword(null,"data","data",-232669377),e], null);
}});
hiccup_repl.core.example_component = (function hiccup_repl$core$example_component(starting_string){
var hic_string = reagent.core.atom.call(null,starting_string);
var hiccup_data = reagent.core.atom.call(null,"");
var hiccup_html = reagent.core.atom.call(null,"");
return ((function (hic_string,hiccup_data,hiccup_html){
return (function (){
var __32825 = hiccup_repl.core.safe_read.call(null,cljs.core.deref.call(null,hic_string),hiccup_data);
var __32826__$1 = hiccup_repl.core.safe_parse.call(null,cljs.core.deref.call(null,hiccup_data),hiccup_html);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-4","div.col-xs-4",-990350100),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup_repl.core.atom_textarea,hic_string], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-4","div.col-xs-4",-990350100),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerously-set-inner-HTML","dangerously-set-inner-HTML",-1133779743),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),cljs.core.deref.call(null,hiccup_html)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-4","div.col-xs-4",-990350100),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monowidth"], null)], null),cljs.core.deref.call(null,hiccup_html)], null)], null)], null)], null)], null);
});
;})(hic_string,hiccup_data,hiccup_html))
});
hiccup_repl.core.home_component = (function hiccup_repl$core$home_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"-60px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"40px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),"hiccup.space"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup_repl.core.example_component,"[:h1 \"Welcome to hiccup.space\"]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup_repl.core.example_component,"[:p \"You can \"\n     [:code \"edit\"]\n     \"the boxes on the left.\"]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup_repl.core.example_component,"[:div\n[:p \"Try uncommenting the\"]\n[:pre \"<----[next line]-------\"]\n#_[:img {:src \"http://media.giphy.com/media/oLJ3zbbp4lX1u/giphy.gif\"}]\n]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup_repl.core.example_component,"[:table.table.table-hover\n [:thead\n  [:tr [:td \"Name\"] [:td \"Times\"]]]\n [:tbody\n  [:tr [:td \"Bill\"] [:td \"50\"]]\n  [:tr [:td \"Jane\"] [:td \"100\"]]]]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"by @escherize on Twiter"], null)], null)], null);
});
hiccup_repl.core.pages = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Var(function(){return hiccup_repl.core.home_component;},new cljs.core.Symbol("hiccup-repl.core","home-component","hiccup-repl.core/home-component",-1855402575,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"hiccup-repl.core","hiccup-repl.core",1278503174,null),new cljs.core.Symbol(null,"home-component","home-component",511117826,null),"src-cljs/hiccup_repl/core.cljs",21,1,60,60,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(hiccup_repl.core.home_component)?hiccup_repl.core.home_component.cljs$lang$test:null)]))], null);
hiccup_repl.core.page = (function hiccup_repl$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup_repl.core.pages.call(null,reagent.session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397)))], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__27970__auto___32829 = (function (params__27971__auto__){
if(cljs.core.map_QMARK_.call(null,params__27971__auto__)){
var map__32827 = params__27971__auto__;
var map__32827__$1 = ((cljs.core.seq_QMARK_.call(null,map__32827))?cljs.core.apply.call(null,cljs.core.hash_map,map__32827):map__32827);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27971__auto__)){
var vec__32828 = params__27971__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__27970__auto___32829);

hiccup_repl.core.hook_browser_navigation_BANG_ = (function hiccup_repl$core$hook_browser_navigation_BANG_(){
var G__32831 = (new goog.History());
goog.events.listen(G__32831,goog.history.EventType.NAVIGATE,((function (G__32831){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__32831))
);

G__32831.setEnabled(true);

return G__32831;
});
hiccup_repl.core.mount_components = (function hiccup_repl$core$mount_components(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return hiccup_repl.core.page;},new cljs.core.Symbol("hiccup-repl.core","page","hiccup-repl.core/page",184720675,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"hiccup-repl.core","hiccup-repl.core",1278503174,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),"src-cljs/hiccup_repl/core.cljs",11,1,92,92,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(hiccup_repl.core.page)?hiccup_repl.core.page.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
hiccup_repl.core.init_BANG_ = (function hiccup_repl$core$init_BANG_(){
hiccup_repl.core.hook_browser_navigation_BANG_.call(null);

reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));

return hiccup_repl.core.mount_components.call(null);
});

//# sourceMappingURL=core.js.map