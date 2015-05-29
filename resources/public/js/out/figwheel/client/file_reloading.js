// Compiled by ClojureScript 0.0-3291 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__34527_SHARP_,p2__34528_SHARP_){
var and__24974__auto__ = p1__34527_SHARP_;
if(cljs.core.truth_(and__24974__auto__)){
return p2__34528_SHARP_;
} else {
return and__24974__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24986__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24986__auto__){
return or__24986__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__24986__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__24986__auto__){
return or__24986__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__24986__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__24986__auto__)){
return or__24986__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__25881__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25882__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25883__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25884__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25885__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25885__auto__,method_table__25881__auto__,prefer_table__25882__auto__,method_cache__25883__auto__,cached_hierarchy__25884__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__34529){
var map__34530 = p__34529;
var map__34530__$1 = ((cljs.core.seq_QMARK_.call(null,map__34530))?cljs.core.apply.call(null,cljs.core.hash_map,map__34530):map__34530);
var file = cljs.core.get.call(null,map__34530__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__34531){
var map__34532 = p__34531;
var map__34532__$1 = ((cljs.core.seq_QMARK_.call(null,map__34532))?cljs.core.apply.call(null,cljs.core.hash_map,map__34532):map__34532);
var namespace = cljs.core.get.call(null,map__34532__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__25881__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25882__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25883__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25884__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25885__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25885__auto__,method_table__25881__auto__,prefer_table__25882__auto__,method_cache__25883__auto__,cached_hierarchy__25884__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e34533){if((e34533 instanceof Error)){
var e = e34533;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34533;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__34535 = arguments.length;
switch (G__34535) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34537,callback){
var map__34539 = p__34537;
var map__34539__$1 = ((cljs.core.seq_QMARK_.call(null,map__34539))?cljs.core.apply.call(null,cljs.core.hash_map,map__34539):map__34539);
var file_msg = map__34539__$1;
var request_url = cljs.core.get.call(null,map__34539__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34539,map__34539__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34539,map__34539__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34540){
var map__34542 = p__34540;
var map__34542__$1 = ((cljs.core.seq_QMARK_.call(null,map__34542))?cljs.core.apply.call(null,cljs.core.hash_map,map__34542):map__34542);
var file_msg = map__34542__$1;
var namespace = cljs.core.get.call(null,map__34542__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__34542__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__24986__auto__ = meta_data;
if(cljs.core.truth_(or__24986__auto__)){
return or__24986__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__24974__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__24974__auto__){
var or__24986__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__24986__auto__)){
return or__24986__auto__;
} else {
var or__24986__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__24986__auto____$1)){
return or__24986__auto____$1;
} else {
var and__24974__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__24974__auto____$1){
var or__24986__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__24986__auto____$2){
return or__24986__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__24974__auto____$1;
}
}
}
} else {
return and__24974__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34543,callback){
var map__34545 = p__34543;
var map__34545__$1 = ((cljs.core.seq_QMARK_.call(null,map__34545))?cljs.core.apply.call(null,cljs.core.hash_map,map__34545):map__34545);
var file_msg = map__34545__$1;
var request_url = cljs.core.get.call(null,map__34545__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34545__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28903__auto___34632 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28903__auto___34632,out){
return (function (){
var f__28904__auto__ = (function (){var switch__28841__auto__ = ((function (c__28903__auto___34632,out){
return (function (state_34614){
var state_val_34615 = (state_34614[(1)]);
if((state_val_34615 === (1))){
var inst_34592 = cljs.core.nth.call(null,files,(0),null);
var inst_34593 = cljs.core.nthnext.call(null,files,(1));
var inst_34594 = files;
var state_34614__$1 = (function (){var statearr_34616 = state_34614;
(statearr_34616[(7)] = inst_34594);

(statearr_34616[(8)] = inst_34593);

(statearr_34616[(9)] = inst_34592);

return statearr_34616;
})();
var statearr_34617_34633 = state_34614__$1;
(statearr_34617_34633[(2)] = null);

(statearr_34617_34633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34615 === (2))){
var inst_34594 = (state_34614[(7)]);
var inst_34597 = (state_34614[(10)]);
var inst_34597__$1 = cljs.core.nth.call(null,inst_34594,(0),null);
var inst_34598 = cljs.core.nthnext.call(null,inst_34594,(1));
var inst_34599 = (inst_34597__$1 == null);
var inst_34600 = cljs.core.not.call(null,inst_34599);
var state_34614__$1 = (function (){var statearr_34618 = state_34614;
(statearr_34618[(11)] = inst_34598);

(statearr_34618[(10)] = inst_34597__$1);

return statearr_34618;
})();
if(inst_34600){
var statearr_34619_34634 = state_34614__$1;
(statearr_34619_34634[(1)] = (4));

} else {
var statearr_34620_34635 = state_34614__$1;
(statearr_34620_34635[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34615 === (3))){
var inst_34612 = (state_34614[(2)]);
var state_34614__$1 = state_34614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34614__$1,inst_34612);
} else {
if((state_val_34615 === (4))){
var inst_34597 = (state_34614[(10)]);
var inst_34602 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34597);
var state_34614__$1 = state_34614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34614__$1,(7),inst_34602);
} else {
if((state_val_34615 === (5))){
var inst_34608 = cljs.core.async.close_BANG_.call(null,out);
var state_34614__$1 = state_34614;
var statearr_34621_34636 = state_34614__$1;
(statearr_34621_34636[(2)] = inst_34608);

(statearr_34621_34636[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34615 === (6))){
var inst_34610 = (state_34614[(2)]);
var state_34614__$1 = state_34614;
var statearr_34622_34637 = state_34614__$1;
(statearr_34622_34637[(2)] = inst_34610);

(statearr_34622_34637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34615 === (7))){
var inst_34598 = (state_34614[(11)]);
var inst_34604 = (state_34614[(2)]);
var inst_34605 = cljs.core.async.put_BANG_.call(null,out,inst_34604);
var inst_34594 = inst_34598;
var state_34614__$1 = (function (){var statearr_34623 = state_34614;
(statearr_34623[(12)] = inst_34605);

(statearr_34623[(7)] = inst_34594);

return statearr_34623;
})();
var statearr_34624_34638 = state_34614__$1;
(statearr_34624_34638[(2)] = null);

(statearr_34624_34638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__28903__auto___34632,out))
;
return ((function (switch__28841__auto__,c__28903__auto___34632,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28842__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28842__auto____0 = (function (){
var statearr_34628 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34628[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28842__auto__);

(statearr_34628[(1)] = (1));

return statearr_34628;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28842__auto____1 = (function (state_34614){
while(true){
var ret_value__28843__auto__ = (function (){try{while(true){
var result__28844__auto__ = switch__28841__auto__.call(null,state_34614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28844__auto__;
}
break;
}
}catch (e34629){if((e34629 instanceof Object)){
var ex__28845__auto__ = e34629;
var statearr_34630_34639 = state_34614;
(statearr_34630_34639[(5)] = ex__28845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34640 = state_34614;
state_34614 = G__34640;
continue;
} else {
return ret_value__28843__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28842__auto__ = function(state_34614){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28842__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28842__auto____1.call(this,state_34614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28842__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28842__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28842__auto__;
})()
;})(switch__28841__auto__,c__28903__auto___34632,out))
})();
var state__28905__auto__ = (function (){var statearr_34631 = f__28904__auto__.call(null);
(statearr_34631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28903__auto___34632);

return statearr_34631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28905__auto__);
});})(c__28903__auto___34632,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__34641,p__34642){
var map__34645 = p__34641;
var map__34645__$1 = ((cljs.core.seq_QMARK_.call(null,map__34645))?cljs.core.apply.call(null,cljs.core.hash_map,map__34645):map__34645);
var opts = map__34645__$1;
var url_rewriter = cljs.core.get.call(null,map__34645__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__34646 = p__34642;
var map__34646__$1 = ((cljs.core.seq_QMARK_.call(null,map__34646))?cljs.core.apply.call(null,cljs.core.hash_map,map__34646):map__34646);
var file_msg = map__34646__$1;
var file = cljs.core.get.call(null,map__34646__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34647){
var map__34650 = p__34647;
var map__34650__$1 = ((cljs.core.seq_QMARK_.call(null,map__34650))?cljs.core.apply.call(null,cljs.core.hash_map,map__34650):map__34650);
var eval_body__$1 = cljs.core.get.call(null,map__34650__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34650__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24974__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24974__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24974__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e34651){var e = e34651;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34656,p__34657){
var map__34859 = p__34656;
var map__34859__$1 = ((cljs.core.seq_QMARK_.call(null,map__34859))?cljs.core.apply.call(null,cljs.core.hash_map,map__34859):map__34859);
var opts = map__34859__$1;
var before_jsload = cljs.core.get.call(null,map__34859__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34859__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__34859__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__34860 = p__34657;
var map__34860__$1 = ((cljs.core.seq_QMARK_.call(null,map__34860))?cljs.core.apply.call(null,cljs.core.hash_map,map__34860):map__34860);
var msg = map__34860__$1;
var files = cljs.core.get.call(null,map__34860__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__28903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28903__auto__,map__34859,map__34859__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34860,map__34860__$1,msg,files){
return (function (){
var f__28904__auto__ = (function (){var switch__28841__auto__ = ((function (c__28903__auto__,map__34859,map__34859__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34860,map__34860__$1,msg,files){
return (function (state_34985){
var state_val_34986 = (state_34985[(1)]);
if((state_val_34986 === (7))){
var inst_34873 = (state_34985[(7)]);
var inst_34872 = (state_34985[(8)]);
var inst_34875 = (state_34985[(9)]);
var inst_34874 = (state_34985[(10)]);
var inst_34880 = cljs.core._nth.call(null,inst_34873,inst_34875);
var inst_34881 = figwheel.client.file_reloading.eval_body.call(null,inst_34880);
var inst_34882 = (inst_34875 + (1));
var tmp34987 = inst_34873;
var tmp34988 = inst_34872;
var tmp34989 = inst_34874;
var inst_34872__$1 = tmp34988;
var inst_34873__$1 = tmp34987;
var inst_34874__$1 = tmp34989;
var inst_34875__$1 = inst_34882;
var state_34985__$1 = (function (){var statearr_34990 = state_34985;
(statearr_34990[(7)] = inst_34873__$1);

(statearr_34990[(8)] = inst_34872__$1);

(statearr_34990[(9)] = inst_34875__$1);

(statearr_34990[(11)] = inst_34881);

(statearr_34990[(10)] = inst_34874__$1);

return statearr_34990;
})();
var statearr_34991_35060 = state_34985__$1;
(statearr_34991_35060[(2)] = null);

(statearr_34991_35060[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (20))){
var inst_34918 = (state_34985[(12)]);
var inst_34924 = (state_34985[(13)]);
var inst_34921 = (state_34985[(14)]);
var inst_34917 = (state_34985[(15)]);
var inst_34922 = (state_34985[(16)]);
var inst_34927 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34929 = (function (){var all_files = inst_34917;
var files_SINGLEQUOTE_ = inst_34918;
var res_SINGLEQUOTE_ = inst_34921;
var res = inst_34922;
var files_not_loaded = inst_34924;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_34918,inst_34924,inst_34921,inst_34917,inst_34922,inst_34927,state_val_34986,c__28903__auto__,map__34859,map__34859__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34860,map__34860__$1,msg,files){
return (function (p__34928){
var map__34992 = p__34928;
var map__34992__$1 = ((cljs.core.seq_QMARK_.call(null,map__34992))?cljs.core.apply.call(null,cljs.core.hash_map,map__34992):map__34992);
var namespace = cljs.core.get.call(null,map__34992__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34992__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_34918,inst_34924,inst_34921,inst_34917,inst_34922,inst_34927,state_val_34986,c__28903__auto__,map__34859,map__34859__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34860,map__34860__$1,msg,files))
})();
var inst_34930 = cljs.core.map.call(null,inst_34929,inst_34922);
var inst_34931 = cljs.core.pr_str.call(null,inst_34930);
var inst_34932 = figwheel.client.utils.log.call(null,inst_34931);
var inst_34933 = (function (){var all_files = inst_34917;
var files_SINGLEQUOTE_ = inst_34918;
var res_SINGLEQUOTE_ = inst_34921;
var res = inst_34922;
var files_not_loaded = inst_34924;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_34918,inst_34924,inst_34921,inst_34917,inst_34922,inst_34927,inst_34929,inst_34930,inst_34931,inst_34932,state_val_34986,c__28903__auto__,map__34859,map__34859__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34860,map__34860__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_34918,inst_34924,inst_34921,inst_34917,inst_34922,inst_34927,inst_34929,inst_34930,inst_34931,inst_34932,state_val_34986,c__28903__auto__,map__34859,map__34859__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34860,map__34860__$1,msg,files))
})();
var inst_34934 = setTimeout(inst_34933,(10));
var state_34985__$1 = (function (){var statearr_34993 = state_34985;
(statearr_34993[(17)] = inst_34927);

(statearr_34993[(18)] = inst_34932);

return statearr_34993;
})();
var statearr_34994_35061 = state_34985__$1;
(statearr_34994_35061[(2)] = inst_34934);

(statearr_34994_35061[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (27))){
var inst_34944 = (state_34985[(19)]);
var state_34985__$1 = state_34985;
var statearr_34995_35062 = state_34985__$1;
(statearr_34995_35062[(2)] = inst_34944);

(statearr_34995_35062[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (1))){
var inst_34864 = (state_34985[(20)]);
var inst_34861 = before_jsload.call(null,files);
var inst_34862 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34863 = (function (){return ((function (inst_34864,inst_34861,inst_34862,state_val_34986,c__28903__auto__,map__34859,map__34859__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34860,map__34860__$1,msg,files){
return (function (p1__34652_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34652_SHARP_);
});
;})(inst_34864,inst_34861,inst_34862,state_val_34986,c__28903__auto__,map__34859,map__34859__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34860,map__34860__$1,msg,files))
})();
var inst_34864__$1 = cljs.core.filter.call(null,inst_34863,files);
var inst_34865 = cljs.core.not_empty.call(null,inst_34864__$1);
var state_34985__$1 = (function (){var statearr_34996 = state_34985;
(statearr_34996[(21)] = inst_34862);

(statearr_34996[(20)] = inst_34864__$1);

(statearr_34996[(22)] = inst_34861);

return statearr_34996;
})();
if(cljs.core.truth_(inst_34865)){
var statearr_34997_35063 = state_34985__$1;
(statearr_34997_35063[(1)] = (2));

} else {
var statearr_34998_35064 = state_34985__$1;
(statearr_34998_35064[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (24))){
var state_34985__$1 = state_34985;
var statearr_34999_35065 = state_34985__$1;
(statearr_34999_35065[(2)] = null);

(statearr_34999_35065[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (4))){
var inst_34909 = (state_34985[(2)]);
var inst_34910 = (function (){return ((function (inst_34909,state_val_34986,c__28903__auto__,map__34859,map__34859__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34860,map__34860__$1,msg,files){
return (function (p1__34653_SHARP_){
var and__24974__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34653_SHARP_);
if(cljs.core.truth_(and__24974__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34653_SHARP_));
} else {
return and__24974__auto__;
}
});
;})(inst_34909,state_val_34986,c__28903__auto__,map__34859,map__34859__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34860,map__34860__$1,msg,files))
})();
var inst_34911 = cljs.core.filter.call(null,inst_34910,files);
var state_34985__$1 = (function (){var statearr_35000 = state_34985;
(statearr_35000[(23)] = inst_34909);

(statearr_35000[(24)] = inst_34911);

return statearr_35000;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_35001_35066 = state_34985__$1;
(statearr_35001_35066[(1)] = (16));

} else {
var statearr_35002_35067 = state_34985__$1;
(statearr_35002_35067[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (15))){
var inst_34899 = (state_34985[(2)]);
var state_34985__$1 = state_34985;
var statearr_35003_35068 = state_34985__$1;
(statearr_35003_35068[(2)] = inst_34899);

(statearr_35003_35068[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (21))){
var state_34985__$1 = state_34985;
var statearr_35004_35069 = state_34985__$1;
(statearr_35004_35069[(2)] = null);

(statearr_35004_35069[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (31))){
var inst_34952 = (state_34985[(25)]);
var inst_34962 = (state_34985[(2)]);
var inst_34963 = cljs.core.not_empty.call(null,inst_34952);
var state_34985__$1 = (function (){var statearr_35005 = state_34985;
(statearr_35005[(26)] = inst_34962);

return statearr_35005;
})();
if(cljs.core.truth_(inst_34963)){
var statearr_35006_35070 = state_34985__$1;
(statearr_35006_35070[(1)] = (32));

} else {
var statearr_35007_35071 = state_34985__$1;
(statearr_35007_35071[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (32))){
var inst_34952 = (state_34985[(25)]);
var inst_34965 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34952);
var inst_34966 = cljs.core.pr_str.call(null,inst_34965);
var inst_34967 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_34966)].join('');
var inst_34968 = figwheel.client.utils.log.call(null,inst_34967);
var state_34985__$1 = state_34985;
var statearr_35008_35072 = state_34985__$1;
(statearr_35008_35072[(2)] = inst_34968);

(statearr_35008_35072[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (33))){
var state_34985__$1 = state_34985;
var statearr_35009_35073 = state_34985__$1;
(statearr_35009_35073[(2)] = null);

(statearr_35009_35073[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (13))){
var inst_34885 = (state_34985[(27)]);
var inst_34889 = cljs.core.chunk_first.call(null,inst_34885);
var inst_34890 = cljs.core.chunk_rest.call(null,inst_34885);
var inst_34891 = cljs.core.count.call(null,inst_34889);
var inst_34872 = inst_34890;
var inst_34873 = inst_34889;
var inst_34874 = inst_34891;
var inst_34875 = (0);
var state_34985__$1 = (function (){var statearr_35010 = state_34985;
(statearr_35010[(7)] = inst_34873);

(statearr_35010[(8)] = inst_34872);

(statearr_35010[(9)] = inst_34875);

(statearr_35010[(10)] = inst_34874);

return statearr_35010;
})();
var statearr_35011_35074 = state_34985__$1;
(statearr_35011_35074[(2)] = null);

(statearr_35011_35074[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (22))){
var inst_34924 = (state_34985[(13)]);
var inst_34937 = (state_34985[(2)]);
var inst_34938 = cljs.core.not_empty.call(null,inst_34924);
var state_34985__$1 = (function (){var statearr_35012 = state_34985;
(statearr_35012[(28)] = inst_34937);

return statearr_35012;
})();
if(cljs.core.truth_(inst_34938)){
var statearr_35013_35075 = state_34985__$1;
(statearr_35013_35075[(1)] = (23));

} else {
var statearr_35014_35076 = state_34985__$1;
(statearr_35014_35076[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (36))){
var state_34985__$1 = state_34985;
var statearr_35015_35077 = state_34985__$1;
(statearr_35015_35077[(2)] = null);

(statearr_35015_35077[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (29))){
var inst_34951 = (state_34985[(29)]);
var inst_34956 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34951);
var inst_34957 = cljs.core.pr_str.call(null,inst_34956);
var inst_34958 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34957)].join('');
var inst_34959 = figwheel.client.utils.log.call(null,inst_34958);
var state_34985__$1 = state_34985;
var statearr_35016_35078 = state_34985__$1;
(statearr_35016_35078[(2)] = inst_34959);

(statearr_35016_35078[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (6))){
var inst_34906 = (state_34985[(2)]);
var state_34985__$1 = state_34985;
var statearr_35017_35079 = state_34985__$1;
(statearr_35017_35079[(2)] = inst_34906);

(statearr_35017_35079[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (28))){
var inst_34951 = (state_34985[(29)]);
var inst_34950 = (state_34985[(2)]);
var inst_34951__$1 = cljs.core.get.call(null,inst_34950,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34952 = cljs.core.get.call(null,inst_34950,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_34953 = cljs.core.get.call(null,inst_34950,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34954 = cljs.core.not_empty.call(null,inst_34951__$1);
var state_34985__$1 = (function (){var statearr_35018 = state_34985;
(statearr_35018[(29)] = inst_34951__$1);

(statearr_35018[(25)] = inst_34952);

(statearr_35018[(30)] = inst_34953);

return statearr_35018;
})();
if(cljs.core.truth_(inst_34954)){
var statearr_35019_35080 = state_34985__$1;
(statearr_35019_35080[(1)] = (29));

} else {
var statearr_35020_35081 = state_34985__$1;
(statearr_35020_35081[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (25))){
var inst_34983 = (state_34985[(2)]);
var state_34985__$1 = state_34985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34985__$1,inst_34983);
} else {
if((state_val_34986 === (34))){
var inst_34953 = (state_34985[(30)]);
var inst_34971 = (state_34985[(2)]);
var inst_34972 = cljs.core.not_empty.call(null,inst_34953);
var state_34985__$1 = (function (){var statearr_35021 = state_34985;
(statearr_35021[(31)] = inst_34971);

return statearr_35021;
})();
if(cljs.core.truth_(inst_34972)){
var statearr_35022_35082 = state_34985__$1;
(statearr_35022_35082[(1)] = (35));

} else {
var statearr_35023_35083 = state_34985__$1;
(statearr_35023_35083[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (17))){
var inst_34911 = (state_34985[(24)]);
var state_34985__$1 = state_34985;
var statearr_35024_35084 = state_34985__$1;
(statearr_35024_35084[(2)] = inst_34911);

(statearr_35024_35084[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (3))){
var state_34985__$1 = state_34985;
var statearr_35025_35085 = state_34985__$1;
(statearr_35025_35085[(2)] = null);

(statearr_35025_35085[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (12))){
var inst_34902 = (state_34985[(2)]);
var state_34985__$1 = state_34985;
var statearr_35026_35086 = state_34985__$1;
(statearr_35026_35086[(2)] = inst_34902);

(statearr_35026_35086[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (2))){
var inst_34864 = (state_34985[(20)]);
var inst_34871 = cljs.core.seq.call(null,inst_34864);
var inst_34872 = inst_34871;
var inst_34873 = null;
var inst_34874 = (0);
var inst_34875 = (0);
var state_34985__$1 = (function (){var statearr_35027 = state_34985;
(statearr_35027[(7)] = inst_34873);

(statearr_35027[(8)] = inst_34872);

(statearr_35027[(9)] = inst_34875);

(statearr_35027[(10)] = inst_34874);

return statearr_35027;
})();
var statearr_35028_35087 = state_34985__$1;
(statearr_35028_35087[(2)] = null);

(statearr_35028_35087[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (23))){
var inst_34918 = (state_34985[(12)]);
var inst_34944 = (state_34985[(19)]);
var inst_34924 = (state_34985[(13)]);
var inst_34921 = (state_34985[(14)]);
var inst_34917 = (state_34985[(15)]);
var inst_34922 = (state_34985[(16)]);
var inst_34940 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34943 = (function (){var all_files = inst_34917;
var files_SINGLEQUOTE_ = inst_34918;
var res_SINGLEQUOTE_ = inst_34921;
var res = inst_34922;
var files_not_loaded = inst_34924;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_34918,inst_34944,inst_34924,inst_34921,inst_34917,inst_34922,inst_34940,state_val_34986,c__28903__auto__,map__34859,map__34859__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34860,map__34860__$1,msg,files){
return (function (p__34942){
var map__35029 = p__34942;
var map__35029__$1 = ((cljs.core.seq_QMARK_.call(null,map__35029))?cljs.core.apply.call(null,cljs.core.hash_map,map__35029):map__35029);
var meta_data = cljs.core.get.call(null,map__35029__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_34918,inst_34944,inst_34924,inst_34921,inst_34917,inst_34922,inst_34940,state_val_34986,c__28903__auto__,map__34859,map__34859__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34860,map__34860__$1,msg,files))
})();
var inst_34944__$1 = cljs.core.group_by.call(null,inst_34943,inst_34924);
var inst_34945 = cljs.core.seq_QMARK_.call(null,inst_34944__$1);
var state_34985__$1 = (function (){var statearr_35030 = state_34985;
(statearr_35030[(19)] = inst_34944__$1);

(statearr_35030[(32)] = inst_34940);

return statearr_35030;
})();
if(inst_34945){
var statearr_35031_35088 = state_34985__$1;
(statearr_35031_35088[(1)] = (26));

} else {
var statearr_35032_35089 = state_34985__$1;
(statearr_35032_35089[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (35))){
var inst_34953 = (state_34985[(30)]);
var inst_34974 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34953);
var inst_34975 = cljs.core.pr_str.call(null,inst_34974);
var inst_34976 = [cljs.core.str("not required: "),cljs.core.str(inst_34975)].join('');
var inst_34977 = figwheel.client.utils.log.call(null,inst_34976);
var state_34985__$1 = state_34985;
var statearr_35033_35090 = state_34985__$1;
(statearr_35033_35090[(2)] = inst_34977);

(statearr_35033_35090[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (19))){
var inst_34918 = (state_34985[(12)]);
var inst_34921 = (state_34985[(14)]);
var inst_34917 = (state_34985[(15)]);
var inst_34922 = (state_34985[(16)]);
var inst_34921__$1 = (state_34985[(2)]);
var inst_34922__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34921__$1);
var inst_34923 = (function (){var all_files = inst_34917;
var files_SINGLEQUOTE_ = inst_34918;
var res_SINGLEQUOTE_ = inst_34921__$1;
var res = inst_34922__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_34918,inst_34921,inst_34917,inst_34922,inst_34921__$1,inst_34922__$1,state_val_34986,c__28903__auto__,map__34859,map__34859__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34860,map__34860__$1,msg,files){
return (function (p1__34655_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34655_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_34918,inst_34921,inst_34917,inst_34922,inst_34921__$1,inst_34922__$1,state_val_34986,c__28903__auto__,map__34859,map__34859__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34860,map__34860__$1,msg,files))
})();
var inst_34924 = cljs.core.filter.call(null,inst_34923,inst_34921__$1);
var inst_34925 = cljs.core.not_empty.call(null,inst_34922__$1);
var state_34985__$1 = (function (){var statearr_35034 = state_34985;
(statearr_35034[(13)] = inst_34924);

(statearr_35034[(14)] = inst_34921__$1);

(statearr_35034[(16)] = inst_34922__$1);

return statearr_35034;
})();
if(cljs.core.truth_(inst_34925)){
var statearr_35035_35091 = state_34985__$1;
(statearr_35035_35091[(1)] = (20));

} else {
var statearr_35036_35092 = state_34985__$1;
(statearr_35036_35092[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (11))){
var state_34985__$1 = state_34985;
var statearr_35037_35093 = state_34985__$1;
(statearr_35037_35093[(2)] = null);

(statearr_35037_35093[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (9))){
var inst_34904 = (state_34985[(2)]);
var state_34985__$1 = state_34985;
var statearr_35038_35094 = state_34985__$1;
(statearr_35038_35094[(2)] = inst_34904);

(statearr_35038_35094[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (5))){
var inst_34875 = (state_34985[(9)]);
var inst_34874 = (state_34985[(10)]);
var inst_34877 = (inst_34875 < inst_34874);
var inst_34878 = inst_34877;
var state_34985__$1 = state_34985;
if(cljs.core.truth_(inst_34878)){
var statearr_35039_35095 = state_34985__$1;
(statearr_35039_35095[(1)] = (7));

} else {
var statearr_35040_35096 = state_34985__$1;
(statearr_35040_35096[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (14))){
var inst_34885 = (state_34985[(27)]);
var inst_34894 = cljs.core.first.call(null,inst_34885);
var inst_34895 = figwheel.client.file_reloading.eval_body.call(null,inst_34894);
var inst_34896 = cljs.core.next.call(null,inst_34885);
var inst_34872 = inst_34896;
var inst_34873 = null;
var inst_34874 = (0);
var inst_34875 = (0);
var state_34985__$1 = (function (){var statearr_35041 = state_34985;
(statearr_35041[(7)] = inst_34873);

(statearr_35041[(33)] = inst_34895);

(statearr_35041[(8)] = inst_34872);

(statearr_35041[(9)] = inst_34875);

(statearr_35041[(10)] = inst_34874);

return statearr_35041;
})();
var statearr_35042_35097 = state_34985__$1;
(statearr_35042_35097[(2)] = null);

(statearr_35042_35097[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (26))){
var inst_34944 = (state_34985[(19)]);
var inst_34947 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34944);
var state_34985__$1 = state_34985;
var statearr_35043_35098 = state_34985__$1;
(statearr_35043_35098[(2)] = inst_34947);

(statearr_35043_35098[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (16))){
var inst_34911 = (state_34985[(24)]);
var inst_34913 = (function (){var all_files = inst_34911;
return ((function (all_files,inst_34911,state_val_34986,c__28903__auto__,map__34859,map__34859__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34860,map__34860__$1,msg,files){
return (function (p1__34654_SHARP_){
return cljs.core.update_in.call(null,p1__34654_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_34911,state_val_34986,c__28903__auto__,map__34859,map__34859__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34860,map__34860__$1,msg,files))
})();
var inst_34914 = cljs.core.map.call(null,inst_34913,inst_34911);
var state_34985__$1 = state_34985;
var statearr_35044_35099 = state_34985__$1;
(statearr_35044_35099[(2)] = inst_34914);

(statearr_35044_35099[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (30))){
var state_34985__$1 = state_34985;
var statearr_35045_35100 = state_34985__$1;
(statearr_35045_35100[(2)] = null);

(statearr_35045_35100[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (10))){
var inst_34885 = (state_34985[(27)]);
var inst_34887 = cljs.core.chunked_seq_QMARK_.call(null,inst_34885);
var state_34985__$1 = state_34985;
if(inst_34887){
var statearr_35046_35101 = state_34985__$1;
(statearr_35046_35101[(1)] = (13));

} else {
var statearr_35047_35102 = state_34985__$1;
(statearr_35047_35102[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (18))){
var inst_34918 = (state_34985[(12)]);
var inst_34917 = (state_34985[(15)]);
var inst_34917__$1 = (state_34985[(2)]);
var inst_34918__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_34917__$1);
var inst_34919 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34918__$1);
var state_34985__$1 = (function (){var statearr_35048 = state_34985;
(statearr_35048[(12)] = inst_34918__$1);

(statearr_35048[(15)] = inst_34917__$1);

return statearr_35048;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34985__$1,(19),inst_34919);
} else {
if((state_val_34986 === (37))){
var inst_34980 = (state_34985[(2)]);
var state_34985__$1 = state_34985;
var statearr_35049_35103 = state_34985__$1;
(statearr_35049_35103[(2)] = inst_34980);

(statearr_35049_35103[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (8))){
var inst_34885 = (state_34985[(27)]);
var inst_34872 = (state_34985[(8)]);
var inst_34885__$1 = cljs.core.seq.call(null,inst_34872);
var state_34985__$1 = (function (){var statearr_35050 = state_34985;
(statearr_35050[(27)] = inst_34885__$1);

return statearr_35050;
})();
if(inst_34885__$1){
var statearr_35051_35104 = state_34985__$1;
(statearr_35051_35104[(1)] = (10));

} else {
var statearr_35052_35105 = state_34985__$1;
(statearr_35052_35105[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28903__auto__,map__34859,map__34859__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34860,map__34860__$1,msg,files))
;
return ((function (switch__28841__auto__,c__28903__auto__,map__34859,map__34859__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34860,map__34860__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28842__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28842__auto____0 = (function (){
var statearr_35056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35056[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28842__auto__);

(statearr_35056[(1)] = (1));

return statearr_35056;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28842__auto____1 = (function (state_34985){
while(true){
var ret_value__28843__auto__ = (function (){try{while(true){
var result__28844__auto__ = switch__28841__auto__.call(null,state_34985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28844__auto__;
}
break;
}
}catch (e35057){if((e35057 instanceof Object)){
var ex__28845__auto__ = e35057;
var statearr_35058_35106 = state_34985;
(statearr_35058_35106[(5)] = ex__28845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35107 = state_34985;
state_34985 = G__35107;
continue;
} else {
return ret_value__28843__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28842__auto__ = function(state_34985){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28842__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28842__auto____1.call(this,state_34985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28842__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28842__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28842__auto__;
})()
;})(switch__28841__auto__,c__28903__auto__,map__34859,map__34859__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34860,map__34860__$1,msg,files))
})();
var state__28905__auto__ = (function (){var statearr_35059 = f__28904__auto__.call(null);
(statearr_35059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28903__auto__);

return statearr_35059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28905__auto__);
});})(c__28903__auto__,map__34859,map__34859__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34860,map__34860__$1,msg,files))
);

return c__28903__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35110,link){
var map__35112 = p__35110;
var map__35112__$1 = ((cljs.core.seq_QMARK_.call(null,map__35112))?cljs.core.apply.call(null,cljs.core.hash_map,map__35112):map__35112);
var file = cljs.core.get.call(null,map__35112__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4423__auto__ = link.href;
if(cljs.core.truth_(temp__4423__auto__)){
var link_href = temp__4423__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4423__auto__,map__35112,map__35112__$1,file){
return (function (p1__35108_SHARP_,p2__35109_SHARP_){
if(cljs.core._EQ_.call(null,p1__35108_SHARP_,p2__35109_SHARP_)){
return p1__35108_SHARP_;
} else {
return false;
}
});})(link_href,temp__4423__auto__,map__35112,map__35112__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35116){
var map__35117 = p__35116;
var map__35117__$1 = ((cljs.core.seq_QMARK_.call(null,map__35117))?cljs.core.apply.call(null,cljs.core.hash_map,map__35117):map__35117);
var match_length = cljs.core.get.call(null,map__35117__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35117__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35113_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35113_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__35119 = arguments.length;
switch (G__35119) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__35121){
var map__35123 = p__35121;
var map__35123__$1 = ((cljs.core.seq_QMARK_.call(null,map__35123))?cljs.core.apply.call(null,cljs.core.hash_map,map__35123):map__35123);
var f_data = map__35123__$1;
var file = cljs.core.get.call(null,map__35123__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__35123__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4421__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4421__auto__)){
var link = temp__4421__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__24986__auto__ = request_url;
if(cljs.core.truth_(or__24986__auto__)){
return or__24986__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35124,files_msg){
var map__35146 = p__35124;
var map__35146__$1 = ((cljs.core.seq_QMARK_.call(null,map__35146))?cljs.core.apply.call(null,cljs.core.hash_map,map__35146):map__35146);
var opts = map__35146__$1;
var on_cssload = cljs.core.get.call(null,map__35146__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35147_35167 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__35148_35168 = null;
var count__35149_35169 = (0);
var i__35150_35170 = (0);
while(true){
if((i__35150_35170 < count__35149_35169)){
var f_35171 = cljs.core._nth.call(null,chunk__35148_35168,i__35150_35170);
figwheel.client.file_reloading.reload_css_file.call(null,f_35171);

var G__35172 = seq__35147_35167;
var G__35173 = chunk__35148_35168;
var G__35174 = count__35149_35169;
var G__35175 = (i__35150_35170 + (1));
seq__35147_35167 = G__35172;
chunk__35148_35168 = G__35173;
count__35149_35169 = G__35174;
i__35150_35170 = G__35175;
continue;
} else {
var temp__4423__auto___35176 = cljs.core.seq.call(null,seq__35147_35167);
if(temp__4423__auto___35176){
var seq__35147_35177__$1 = temp__4423__auto___35176;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35147_35177__$1)){
var c__25771__auto___35178 = cljs.core.chunk_first.call(null,seq__35147_35177__$1);
var G__35179 = cljs.core.chunk_rest.call(null,seq__35147_35177__$1);
var G__35180 = c__25771__auto___35178;
var G__35181 = cljs.core.count.call(null,c__25771__auto___35178);
var G__35182 = (0);
seq__35147_35167 = G__35179;
chunk__35148_35168 = G__35180;
count__35149_35169 = G__35181;
i__35150_35170 = G__35182;
continue;
} else {
var f_35183 = cljs.core.first.call(null,seq__35147_35177__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35183);

var G__35184 = cljs.core.next.call(null,seq__35147_35177__$1);
var G__35185 = null;
var G__35186 = (0);
var G__35187 = (0);
seq__35147_35167 = G__35184;
chunk__35148_35168 = G__35185;
count__35149_35169 = G__35186;
i__35150_35170 = G__35187;
continue;
}
} else {
}
}
break;
}

var c__28903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28903__auto__,map__35146,map__35146__$1,opts,on_cssload){
return (function (){
var f__28904__auto__ = (function (){var switch__28841__auto__ = ((function (c__28903__auto__,map__35146,map__35146__$1,opts,on_cssload){
return (function (state_35157){
var state_val_35158 = (state_35157[(1)]);
if((state_val_35158 === (1))){
var inst_35151 = cljs.core.async.timeout.call(null,(100));
var state_35157__$1 = state_35157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35157__$1,(2),inst_35151);
} else {
if((state_val_35158 === (2))){
var inst_35153 = (state_35157[(2)]);
var inst_35154 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_35155 = on_cssload.call(null,inst_35154);
var state_35157__$1 = (function (){var statearr_35159 = state_35157;
(statearr_35159[(7)] = inst_35153);

return statearr_35159;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35157__$1,inst_35155);
} else {
return null;
}
}
});})(c__28903__auto__,map__35146,map__35146__$1,opts,on_cssload))
;
return ((function (switch__28841__auto__,c__28903__auto__,map__35146,map__35146__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__28842__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__28842__auto____0 = (function (){
var statearr_35163 = [null,null,null,null,null,null,null,null];
(statearr_35163[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__28842__auto__);

(statearr_35163[(1)] = (1));

return statearr_35163;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__28842__auto____1 = (function (state_35157){
while(true){
var ret_value__28843__auto__ = (function (){try{while(true){
var result__28844__auto__ = switch__28841__auto__.call(null,state_35157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28844__auto__;
}
break;
}
}catch (e35164){if((e35164 instanceof Object)){
var ex__28845__auto__ = e35164;
var statearr_35165_35188 = state_35157;
(statearr_35165_35188[(5)] = ex__28845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35189 = state_35157;
state_35157 = G__35189;
continue;
} else {
return ret_value__28843__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__28842__auto__ = function(state_35157){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__28842__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__28842__auto____1.call(this,state_35157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__28842__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__28842__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__28842__auto__;
})()
;})(switch__28841__auto__,c__28903__auto__,map__35146,map__35146__$1,opts,on_cssload))
})();
var state__28905__auto__ = (function (){var statearr_35166 = f__28904__auto__.call(null);
(statearr_35166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28903__auto__);

return statearr_35166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28905__auto__);
});})(c__28903__auto__,map__35146,map__35146__$1,opts,on_cssload))
);

return c__28903__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map