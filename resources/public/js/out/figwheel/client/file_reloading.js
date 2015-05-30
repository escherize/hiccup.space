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
return cljs.core.reduce.call(null,(function (p1__35314_SHARP_,p2__35315_SHARP_){
var and__24974__auto__ = p1__35314_SHARP_;
if(cljs.core.truth_(and__24974__auto__)){
return p2__35315_SHARP_;
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__35316){
var map__35317 = p__35316;
var map__35317__$1 = ((cljs.core.seq_QMARK_.call(null,map__35317))?cljs.core.apply.call(null,cljs.core.hash_map,map__35317):map__35317);
var file = cljs.core.get.call(null,map__35317__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__35318){
var map__35319 = p__35318;
var map__35319__$1 = ((cljs.core.seq_QMARK_.call(null,map__35319))?cljs.core.apply.call(null,cljs.core.hash_map,map__35319):map__35319);
var namespace = cljs.core.get.call(null,map__35319__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e35320){if((e35320 instanceof Error)){
var e = e35320;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35320;

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
var G__35322 = arguments.length;
switch (G__35322) {
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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35324,callback){
var map__35326 = p__35324;
var map__35326__$1 = ((cljs.core.seq_QMARK_.call(null,map__35326))?cljs.core.apply.call(null,cljs.core.hash_map,map__35326):map__35326);
var file_msg = map__35326__$1;
var request_url = cljs.core.get.call(null,map__35326__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35326,map__35326__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35326,map__35326__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35327){
var map__35329 = p__35327;
var map__35329__$1 = ((cljs.core.seq_QMARK_.call(null,map__35329))?cljs.core.apply.call(null,cljs.core.hash_map,map__35329):map__35329);
var file_msg = map__35329__$1;
var namespace = cljs.core.get.call(null,map__35329__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__35329__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35330,callback){
var map__35332 = p__35330;
var map__35332__$1 = ((cljs.core.seq_QMARK_.call(null,map__35332))?cljs.core.apply.call(null,cljs.core.hash_map,map__35332):map__35332);
var file_msg = map__35332__$1;
var request_url = cljs.core.get.call(null,map__35332__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35332__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__29107__auto___35419 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29107__auto___35419,out){
return (function (){
var f__29108__auto__ = (function (){var switch__29045__auto__ = ((function (c__29107__auto___35419,out){
return (function (state_35401){
var state_val_35402 = (state_35401[(1)]);
if((state_val_35402 === (1))){
var inst_35379 = cljs.core.nth.call(null,files,(0),null);
var inst_35380 = cljs.core.nthnext.call(null,files,(1));
var inst_35381 = files;
var state_35401__$1 = (function (){var statearr_35403 = state_35401;
(statearr_35403[(7)] = inst_35379);

(statearr_35403[(8)] = inst_35381);

(statearr_35403[(9)] = inst_35380);

return statearr_35403;
})();
var statearr_35404_35420 = state_35401__$1;
(statearr_35404_35420[(2)] = null);

(statearr_35404_35420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (2))){
var inst_35384 = (state_35401[(10)]);
var inst_35381 = (state_35401[(8)]);
var inst_35384__$1 = cljs.core.nth.call(null,inst_35381,(0),null);
var inst_35385 = cljs.core.nthnext.call(null,inst_35381,(1));
var inst_35386 = (inst_35384__$1 == null);
var inst_35387 = cljs.core.not.call(null,inst_35386);
var state_35401__$1 = (function (){var statearr_35405 = state_35401;
(statearr_35405[(11)] = inst_35385);

(statearr_35405[(10)] = inst_35384__$1);

return statearr_35405;
})();
if(inst_35387){
var statearr_35406_35421 = state_35401__$1;
(statearr_35406_35421[(1)] = (4));

} else {
var statearr_35407_35422 = state_35401__$1;
(statearr_35407_35422[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (3))){
var inst_35399 = (state_35401[(2)]);
var state_35401__$1 = state_35401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35401__$1,inst_35399);
} else {
if((state_val_35402 === (4))){
var inst_35384 = (state_35401[(10)]);
var inst_35389 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35384);
var state_35401__$1 = state_35401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35401__$1,(7),inst_35389);
} else {
if((state_val_35402 === (5))){
var inst_35395 = cljs.core.async.close_BANG_.call(null,out);
var state_35401__$1 = state_35401;
var statearr_35408_35423 = state_35401__$1;
(statearr_35408_35423[(2)] = inst_35395);

(statearr_35408_35423[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (6))){
var inst_35397 = (state_35401[(2)]);
var state_35401__$1 = state_35401;
var statearr_35409_35424 = state_35401__$1;
(statearr_35409_35424[(2)] = inst_35397);

(statearr_35409_35424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (7))){
var inst_35385 = (state_35401[(11)]);
var inst_35391 = (state_35401[(2)]);
var inst_35392 = cljs.core.async.put_BANG_.call(null,out,inst_35391);
var inst_35381 = inst_35385;
var state_35401__$1 = (function (){var statearr_35410 = state_35401;
(statearr_35410[(8)] = inst_35381);

(statearr_35410[(12)] = inst_35392);

return statearr_35410;
})();
var statearr_35411_35425 = state_35401__$1;
(statearr_35411_35425[(2)] = null);

(statearr_35411_35425[(1)] = (2));


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
});})(c__29107__auto___35419,out))
;
return ((function (switch__29045__auto__,c__29107__auto___35419,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29046__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29046__auto____0 = (function (){
var statearr_35415 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35415[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29046__auto__);

(statearr_35415[(1)] = (1));

return statearr_35415;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29046__auto____1 = (function (state_35401){
while(true){
var ret_value__29047__auto__ = (function (){try{while(true){
var result__29048__auto__ = switch__29045__auto__.call(null,state_35401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29048__auto__;
}
break;
}
}catch (e35416){if((e35416 instanceof Object)){
var ex__29049__auto__ = e35416;
var statearr_35417_35426 = state_35401;
(statearr_35417_35426[(5)] = ex__29049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35427 = state_35401;
state_35401 = G__35427;
continue;
} else {
return ret_value__29047__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29046__auto__ = function(state_35401){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29046__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29046__auto____1.call(this,state_35401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29046__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29046__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29046__auto__;
})()
;})(switch__29045__auto__,c__29107__auto___35419,out))
})();
var state__29109__auto__ = (function (){var statearr_35418 = f__29108__auto__.call(null);
(statearr_35418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29107__auto___35419);

return statearr_35418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29109__auto__);
});})(c__29107__auto___35419,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__35428,p__35429){
var map__35432 = p__35428;
var map__35432__$1 = ((cljs.core.seq_QMARK_.call(null,map__35432))?cljs.core.apply.call(null,cljs.core.hash_map,map__35432):map__35432);
var opts = map__35432__$1;
var url_rewriter = cljs.core.get.call(null,map__35432__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__35433 = p__35429;
var map__35433__$1 = ((cljs.core.seq_QMARK_.call(null,map__35433))?cljs.core.apply.call(null,cljs.core.hash_map,map__35433):map__35433);
var file_msg = map__35433__$1;
var file = cljs.core.get.call(null,map__35433__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35434){
var map__35437 = p__35434;
var map__35437__$1 = ((cljs.core.seq_QMARK_.call(null,map__35437))?cljs.core.apply.call(null,cljs.core.hash_map,map__35437):map__35437);
var eval_body__$1 = cljs.core.get.call(null,map__35437__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35437__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e35438){var e = e35438;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35443,p__35444){
var map__35646 = p__35443;
var map__35646__$1 = ((cljs.core.seq_QMARK_.call(null,map__35646))?cljs.core.apply.call(null,cljs.core.hash_map,map__35646):map__35646);
var opts = map__35646__$1;
var before_jsload = cljs.core.get.call(null,map__35646__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35646__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__35646__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__35647 = p__35444;
var map__35647__$1 = ((cljs.core.seq_QMARK_.call(null,map__35647))?cljs.core.apply.call(null,cljs.core.hash_map,map__35647):map__35647);
var msg = map__35647__$1;
var files = cljs.core.get.call(null,map__35647__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__29107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29107__auto__,map__35646,map__35646__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35647,map__35647__$1,msg,files){
return (function (){
var f__29108__auto__ = (function (){var switch__29045__auto__ = ((function (c__29107__auto__,map__35646,map__35646__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35647,map__35647__$1,msg,files){
return (function (state_35772){
var state_val_35773 = (state_35772[(1)]);
if((state_val_35773 === (7))){
var inst_35659 = (state_35772[(7)]);
var inst_35662 = (state_35772[(8)]);
var inst_35660 = (state_35772[(9)]);
var inst_35661 = (state_35772[(10)]);
var inst_35667 = cljs.core._nth.call(null,inst_35660,inst_35662);
var inst_35668 = figwheel.client.file_reloading.eval_body.call(null,inst_35667);
var inst_35669 = (inst_35662 + (1));
var tmp35774 = inst_35659;
var tmp35775 = inst_35660;
var tmp35776 = inst_35661;
var inst_35659__$1 = tmp35774;
var inst_35660__$1 = tmp35775;
var inst_35661__$1 = tmp35776;
var inst_35662__$1 = inst_35669;
var state_35772__$1 = (function (){var statearr_35777 = state_35772;
(statearr_35777[(7)] = inst_35659__$1);

(statearr_35777[(8)] = inst_35662__$1);

(statearr_35777[(11)] = inst_35668);

(statearr_35777[(9)] = inst_35660__$1);

(statearr_35777[(10)] = inst_35661__$1);

return statearr_35777;
})();
var statearr_35778_35847 = state_35772__$1;
(statearr_35778_35847[(2)] = null);

(statearr_35778_35847[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (20))){
var inst_35711 = (state_35772[(12)]);
var inst_35704 = (state_35772[(13)]);
var inst_35705 = (state_35772[(14)]);
var inst_35709 = (state_35772[(15)]);
var inst_35708 = (state_35772[(16)]);
var inst_35714 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35716 = (function (){var all_files = inst_35704;
var files_SINGLEQUOTE_ = inst_35705;
var res_SINGLEQUOTE_ = inst_35708;
var res = inst_35709;
var files_not_loaded = inst_35711;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35711,inst_35704,inst_35705,inst_35709,inst_35708,inst_35714,state_val_35773,c__29107__auto__,map__35646,map__35646__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35647,map__35647__$1,msg,files){
return (function (p__35715){
var map__35779 = p__35715;
var map__35779__$1 = ((cljs.core.seq_QMARK_.call(null,map__35779))?cljs.core.apply.call(null,cljs.core.hash_map,map__35779):map__35779);
var namespace = cljs.core.get.call(null,map__35779__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35779__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35711,inst_35704,inst_35705,inst_35709,inst_35708,inst_35714,state_val_35773,c__29107__auto__,map__35646,map__35646__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35647,map__35647__$1,msg,files))
})();
var inst_35717 = cljs.core.map.call(null,inst_35716,inst_35709);
var inst_35718 = cljs.core.pr_str.call(null,inst_35717);
var inst_35719 = figwheel.client.utils.log.call(null,inst_35718);
var inst_35720 = (function (){var all_files = inst_35704;
var files_SINGLEQUOTE_ = inst_35705;
var res_SINGLEQUOTE_ = inst_35708;
var res = inst_35709;
var files_not_loaded = inst_35711;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35711,inst_35704,inst_35705,inst_35709,inst_35708,inst_35714,inst_35716,inst_35717,inst_35718,inst_35719,state_val_35773,c__29107__auto__,map__35646,map__35646__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35647,map__35647__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35711,inst_35704,inst_35705,inst_35709,inst_35708,inst_35714,inst_35716,inst_35717,inst_35718,inst_35719,state_val_35773,c__29107__auto__,map__35646,map__35646__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35647,map__35647__$1,msg,files))
})();
var inst_35721 = setTimeout(inst_35720,(10));
var state_35772__$1 = (function (){var statearr_35780 = state_35772;
(statearr_35780[(17)] = inst_35719);

(statearr_35780[(18)] = inst_35714);

return statearr_35780;
})();
var statearr_35781_35848 = state_35772__$1;
(statearr_35781_35848[(2)] = inst_35721);

(statearr_35781_35848[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (27))){
var inst_35731 = (state_35772[(19)]);
var state_35772__$1 = state_35772;
var statearr_35782_35849 = state_35772__$1;
(statearr_35782_35849[(2)] = inst_35731);

(statearr_35782_35849[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (1))){
var inst_35651 = (state_35772[(20)]);
var inst_35648 = before_jsload.call(null,files);
var inst_35649 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35650 = (function (){return ((function (inst_35651,inst_35648,inst_35649,state_val_35773,c__29107__auto__,map__35646,map__35646__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35647,map__35647__$1,msg,files){
return (function (p1__35439_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35439_SHARP_);
});
;})(inst_35651,inst_35648,inst_35649,state_val_35773,c__29107__auto__,map__35646,map__35646__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35647,map__35647__$1,msg,files))
})();
var inst_35651__$1 = cljs.core.filter.call(null,inst_35650,files);
var inst_35652 = cljs.core.not_empty.call(null,inst_35651__$1);
var state_35772__$1 = (function (){var statearr_35783 = state_35772;
(statearr_35783[(21)] = inst_35649);

(statearr_35783[(20)] = inst_35651__$1);

(statearr_35783[(22)] = inst_35648);

return statearr_35783;
})();
if(cljs.core.truth_(inst_35652)){
var statearr_35784_35850 = state_35772__$1;
(statearr_35784_35850[(1)] = (2));

} else {
var statearr_35785_35851 = state_35772__$1;
(statearr_35785_35851[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (24))){
var state_35772__$1 = state_35772;
var statearr_35786_35852 = state_35772__$1;
(statearr_35786_35852[(2)] = null);

(statearr_35786_35852[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (4))){
var inst_35696 = (state_35772[(2)]);
var inst_35697 = (function (){return ((function (inst_35696,state_val_35773,c__29107__auto__,map__35646,map__35646__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35647,map__35647__$1,msg,files){
return (function (p1__35440_SHARP_){
var and__24974__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35440_SHARP_);
if(cljs.core.truth_(and__24974__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35440_SHARP_));
} else {
return and__24974__auto__;
}
});
;})(inst_35696,state_val_35773,c__29107__auto__,map__35646,map__35646__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35647,map__35647__$1,msg,files))
})();
var inst_35698 = cljs.core.filter.call(null,inst_35697,files);
var state_35772__$1 = (function (){var statearr_35787 = state_35772;
(statearr_35787[(23)] = inst_35698);

(statearr_35787[(24)] = inst_35696);

return statearr_35787;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_35788_35853 = state_35772__$1;
(statearr_35788_35853[(1)] = (16));

} else {
var statearr_35789_35854 = state_35772__$1;
(statearr_35789_35854[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (15))){
var inst_35686 = (state_35772[(2)]);
var state_35772__$1 = state_35772;
var statearr_35790_35855 = state_35772__$1;
(statearr_35790_35855[(2)] = inst_35686);

(statearr_35790_35855[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (21))){
var state_35772__$1 = state_35772;
var statearr_35791_35856 = state_35772__$1;
(statearr_35791_35856[(2)] = null);

(statearr_35791_35856[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (31))){
var inst_35739 = (state_35772[(25)]);
var inst_35749 = (state_35772[(2)]);
var inst_35750 = cljs.core.not_empty.call(null,inst_35739);
var state_35772__$1 = (function (){var statearr_35792 = state_35772;
(statearr_35792[(26)] = inst_35749);

return statearr_35792;
})();
if(cljs.core.truth_(inst_35750)){
var statearr_35793_35857 = state_35772__$1;
(statearr_35793_35857[(1)] = (32));

} else {
var statearr_35794_35858 = state_35772__$1;
(statearr_35794_35858[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (32))){
var inst_35739 = (state_35772[(25)]);
var inst_35752 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35739);
var inst_35753 = cljs.core.pr_str.call(null,inst_35752);
var inst_35754 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_35753)].join('');
var inst_35755 = figwheel.client.utils.log.call(null,inst_35754);
var state_35772__$1 = state_35772;
var statearr_35795_35859 = state_35772__$1;
(statearr_35795_35859[(2)] = inst_35755);

(statearr_35795_35859[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (33))){
var state_35772__$1 = state_35772;
var statearr_35796_35860 = state_35772__$1;
(statearr_35796_35860[(2)] = null);

(statearr_35796_35860[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (13))){
var inst_35672 = (state_35772[(27)]);
var inst_35676 = cljs.core.chunk_first.call(null,inst_35672);
var inst_35677 = cljs.core.chunk_rest.call(null,inst_35672);
var inst_35678 = cljs.core.count.call(null,inst_35676);
var inst_35659 = inst_35677;
var inst_35660 = inst_35676;
var inst_35661 = inst_35678;
var inst_35662 = (0);
var state_35772__$1 = (function (){var statearr_35797 = state_35772;
(statearr_35797[(7)] = inst_35659);

(statearr_35797[(8)] = inst_35662);

(statearr_35797[(9)] = inst_35660);

(statearr_35797[(10)] = inst_35661);

return statearr_35797;
})();
var statearr_35798_35861 = state_35772__$1;
(statearr_35798_35861[(2)] = null);

(statearr_35798_35861[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (22))){
var inst_35711 = (state_35772[(12)]);
var inst_35724 = (state_35772[(2)]);
var inst_35725 = cljs.core.not_empty.call(null,inst_35711);
var state_35772__$1 = (function (){var statearr_35799 = state_35772;
(statearr_35799[(28)] = inst_35724);

return statearr_35799;
})();
if(cljs.core.truth_(inst_35725)){
var statearr_35800_35862 = state_35772__$1;
(statearr_35800_35862[(1)] = (23));

} else {
var statearr_35801_35863 = state_35772__$1;
(statearr_35801_35863[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (36))){
var state_35772__$1 = state_35772;
var statearr_35802_35864 = state_35772__$1;
(statearr_35802_35864[(2)] = null);

(statearr_35802_35864[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (29))){
var inst_35738 = (state_35772[(29)]);
var inst_35743 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35738);
var inst_35744 = cljs.core.pr_str.call(null,inst_35743);
var inst_35745 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35744)].join('');
var inst_35746 = figwheel.client.utils.log.call(null,inst_35745);
var state_35772__$1 = state_35772;
var statearr_35803_35865 = state_35772__$1;
(statearr_35803_35865[(2)] = inst_35746);

(statearr_35803_35865[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (6))){
var inst_35693 = (state_35772[(2)]);
var state_35772__$1 = state_35772;
var statearr_35804_35866 = state_35772__$1;
(statearr_35804_35866[(2)] = inst_35693);

(statearr_35804_35866[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (28))){
var inst_35738 = (state_35772[(29)]);
var inst_35737 = (state_35772[(2)]);
var inst_35738__$1 = cljs.core.get.call(null,inst_35737,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35739 = cljs.core.get.call(null,inst_35737,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_35740 = cljs.core.get.call(null,inst_35737,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35741 = cljs.core.not_empty.call(null,inst_35738__$1);
var state_35772__$1 = (function (){var statearr_35805 = state_35772;
(statearr_35805[(25)] = inst_35739);

(statearr_35805[(30)] = inst_35740);

(statearr_35805[(29)] = inst_35738__$1);

return statearr_35805;
})();
if(cljs.core.truth_(inst_35741)){
var statearr_35806_35867 = state_35772__$1;
(statearr_35806_35867[(1)] = (29));

} else {
var statearr_35807_35868 = state_35772__$1;
(statearr_35807_35868[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (25))){
var inst_35770 = (state_35772[(2)]);
var state_35772__$1 = state_35772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35772__$1,inst_35770);
} else {
if((state_val_35773 === (34))){
var inst_35740 = (state_35772[(30)]);
var inst_35758 = (state_35772[(2)]);
var inst_35759 = cljs.core.not_empty.call(null,inst_35740);
var state_35772__$1 = (function (){var statearr_35808 = state_35772;
(statearr_35808[(31)] = inst_35758);

return statearr_35808;
})();
if(cljs.core.truth_(inst_35759)){
var statearr_35809_35869 = state_35772__$1;
(statearr_35809_35869[(1)] = (35));

} else {
var statearr_35810_35870 = state_35772__$1;
(statearr_35810_35870[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (17))){
var inst_35698 = (state_35772[(23)]);
var state_35772__$1 = state_35772;
var statearr_35811_35871 = state_35772__$1;
(statearr_35811_35871[(2)] = inst_35698);

(statearr_35811_35871[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (3))){
var state_35772__$1 = state_35772;
var statearr_35812_35872 = state_35772__$1;
(statearr_35812_35872[(2)] = null);

(statearr_35812_35872[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (12))){
var inst_35689 = (state_35772[(2)]);
var state_35772__$1 = state_35772;
var statearr_35813_35873 = state_35772__$1;
(statearr_35813_35873[(2)] = inst_35689);

(statearr_35813_35873[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (2))){
var inst_35651 = (state_35772[(20)]);
var inst_35658 = cljs.core.seq.call(null,inst_35651);
var inst_35659 = inst_35658;
var inst_35660 = null;
var inst_35661 = (0);
var inst_35662 = (0);
var state_35772__$1 = (function (){var statearr_35814 = state_35772;
(statearr_35814[(7)] = inst_35659);

(statearr_35814[(8)] = inst_35662);

(statearr_35814[(9)] = inst_35660);

(statearr_35814[(10)] = inst_35661);

return statearr_35814;
})();
var statearr_35815_35874 = state_35772__$1;
(statearr_35815_35874[(2)] = null);

(statearr_35815_35874[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (23))){
var inst_35711 = (state_35772[(12)]);
var inst_35704 = (state_35772[(13)]);
var inst_35705 = (state_35772[(14)]);
var inst_35731 = (state_35772[(19)]);
var inst_35709 = (state_35772[(15)]);
var inst_35708 = (state_35772[(16)]);
var inst_35727 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35730 = (function (){var all_files = inst_35704;
var files_SINGLEQUOTE_ = inst_35705;
var res_SINGLEQUOTE_ = inst_35708;
var res = inst_35709;
var files_not_loaded = inst_35711;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35711,inst_35704,inst_35705,inst_35731,inst_35709,inst_35708,inst_35727,state_val_35773,c__29107__auto__,map__35646,map__35646__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35647,map__35647__$1,msg,files){
return (function (p__35729){
var map__35816 = p__35729;
var map__35816__$1 = ((cljs.core.seq_QMARK_.call(null,map__35816))?cljs.core.apply.call(null,cljs.core.hash_map,map__35816):map__35816);
var meta_data = cljs.core.get.call(null,map__35816__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35711,inst_35704,inst_35705,inst_35731,inst_35709,inst_35708,inst_35727,state_val_35773,c__29107__auto__,map__35646,map__35646__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35647,map__35647__$1,msg,files))
})();
var inst_35731__$1 = cljs.core.group_by.call(null,inst_35730,inst_35711);
var inst_35732 = cljs.core.seq_QMARK_.call(null,inst_35731__$1);
var state_35772__$1 = (function (){var statearr_35817 = state_35772;
(statearr_35817[(32)] = inst_35727);

(statearr_35817[(19)] = inst_35731__$1);

return statearr_35817;
})();
if(inst_35732){
var statearr_35818_35875 = state_35772__$1;
(statearr_35818_35875[(1)] = (26));

} else {
var statearr_35819_35876 = state_35772__$1;
(statearr_35819_35876[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (35))){
var inst_35740 = (state_35772[(30)]);
var inst_35761 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35740);
var inst_35762 = cljs.core.pr_str.call(null,inst_35761);
var inst_35763 = [cljs.core.str("not required: "),cljs.core.str(inst_35762)].join('');
var inst_35764 = figwheel.client.utils.log.call(null,inst_35763);
var state_35772__$1 = state_35772;
var statearr_35820_35877 = state_35772__$1;
(statearr_35820_35877[(2)] = inst_35764);

(statearr_35820_35877[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (19))){
var inst_35704 = (state_35772[(13)]);
var inst_35705 = (state_35772[(14)]);
var inst_35709 = (state_35772[(15)]);
var inst_35708 = (state_35772[(16)]);
var inst_35708__$1 = (state_35772[(2)]);
var inst_35709__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35708__$1);
var inst_35710 = (function (){var all_files = inst_35704;
var files_SINGLEQUOTE_ = inst_35705;
var res_SINGLEQUOTE_ = inst_35708__$1;
var res = inst_35709__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_35704,inst_35705,inst_35709,inst_35708,inst_35708__$1,inst_35709__$1,state_val_35773,c__29107__auto__,map__35646,map__35646__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35647,map__35647__$1,msg,files){
return (function (p1__35442_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35442_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_35704,inst_35705,inst_35709,inst_35708,inst_35708__$1,inst_35709__$1,state_val_35773,c__29107__auto__,map__35646,map__35646__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35647,map__35647__$1,msg,files))
})();
var inst_35711 = cljs.core.filter.call(null,inst_35710,inst_35708__$1);
var inst_35712 = cljs.core.not_empty.call(null,inst_35709__$1);
var state_35772__$1 = (function (){var statearr_35821 = state_35772;
(statearr_35821[(12)] = inst_35711);

(statearr_35821[(15)] = inst_35709__$1);

(statearr_35821[(16)] = inst_35708__$1);

return statearr_35821;
})();
if(cljs.core.truth_(inst_35712)){
var statearr_35822_35878 = state_35772__$1;
(statearr_35822_35878[(1)] = (20));

} else {
var statearr_35823_35879 = state_35772__$1;
(statearr_35823_35879[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (11))){
var state_35772__$1 = state_35772;
var statearr_35824_35880 = state_35772__$1;
(statearr_35824_35880[(2)] = null);

(statearr_35824_35880[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (9))){
var inst_35691 = (state_35772[(2)]);
var state_35772__$1 = state_35772;
var statearr_35825_35881 = state_35772__$1;
(statearr_35825_35881[(2)] = inst_35691);

(statearr_35825_35881[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (5))){
var inst_35662 = (state_35772[(8)]);
var inst_35661 = (state_35772[(10)]);
var inst_35664 = (inst_35662 < inst_35661);
var inst_35665 = inst_35664;
var state_35772__$1 = state_35772;
if(cljs.core.truth_(inst_35665)){
var statearr_35826_35882 = state_35772__$1;
(statearr_35826_35882[(1)] = (7));

} else {
var statearr_35827_35883 = state_35772__$1;
(statearr_35827_35883[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (14))){
var inst_35672 = (state_35772[(27)]);
var inst_35681 = cljs.core.first.call(null,inst_35672);
var inst_35682 = figwheel.client.file_reloading.eval_body.call(null,inst_35681);
var inst_35683 = cljs.core.next.call(null,inst_35672);
var inst_35659 = inst_35683;
var inst_35660 = null;
var inst_35661 = (0);
var inst_35662 = (0);
var state_35772__$1 = (function (){var statearr_35828 = state_35772;
(statearr_35828[(7)] = inst_35659);

(statearr_35828[(8)] = inst_35662);

(statearr_35828[(33)] = inst_35682);

(statearr_35828[(9)] = inst_35660);

(statearr_35828[(10)] = inst_35661);

return statearr_35828;
})();
var statearr_35829_35884 = state_35772__$1;
(statearr_35829_35884[(2)] = null);

(statearr_35829_35884[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (26))){
var inst_35731 = (state_35772[(19)]);
var inst_35734 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35731);
var state_35772__$1 = state_35772;
var statearr_35830_35885 = state_35772__$1;
(statearr_35830_35885[(2)] = inst_35734);

(statearr_35830_35885[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (16))){
var inst_35698 = (state_35772[(23)]);
var inst_35700 = (function (){var all_files = inst_35698;
return ((function (all_files,inst_35698,state_val_35773,c__29107__auto__,map__35646,map__35646__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35647,map__35647__$1,msg,files){
return (function (p1__35441_SHARP_){
return cljs.core.update_in.call(null,p1__35441_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_35698,state_val_35773,c__29107__auto__,map__35646,map__35646__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35647,map__35647__$1,msg,files))
})();
var inst_35701 = cljs.core.map.call(null,inst_35700,inst_35698);
var state_35772__$1 = state_35772;
var statearr_35831_35886 = state_35772__$1;
(statearr_35831_35886[(2)] = inst_35701);

(statearr_35831_35886[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (30))){
var state_35772__$1 = state_35772;
var statearr_35832_35887 = state_35772__$1;
(statearr_35832_35887[(2)] = null);

(statearr_35832_35887[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (10))){
var inst_35672 = (state_35772[(27)]);
var inst_35674 = cljs.core.chunked_seq_QMARK_.call(null,inst_35672);
var state_35772__$1 = state_35772;
if(inst_35674){
var statearr_35833_35888 = state_35772__$1;
(statearr_35833_35888[(1)] = (13));

} else {
var statearr_35834_35889 = state_35772__$1;
(statearr_35834_35889[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (18))){
var inst_35704 = (state_35772[(13)]);
var inst_35705 = (state_35772[(14)]);
var inst_35704__$1 = (state_35772[(2)]);
var inst_35705__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_35704__$1);
var inst_35706 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35705__$1);
var state_35772__$1 = (function (){var statearr_35835 = state_35772;
(statearr_35835[(13)] = inst_35704__$1);

(statearr_35835[(14)] = inst_35705__$1);

return statearr_35835;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35772__$1,(19),inst_35706);
} else {
if((state_val_35773 === (37))){
var inst_35767 = (state_35772[(2)]);
var state_35772__$1 = state_35772;
var statearr_35836_35890 = state_35772__$1;
(statearr_35836_35890[(2)] = inst_35767);

(statearr_35836_35890[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (8))){
var inst_35659 = (state_35772[(7)]);
var inst_35672 = (state_35772[(27)]);
var inst_35672__$1 = cljs.core.seq.call(null,inst_35659);
var state_35772__$1 = (function (){var statearr_35837 = state_35772;
(statearr_35837[(27)] = inst_35672__$1);

return statearr_35837;
})();
if(inst_35672__$1){
var statearr_35838_35891 = state_35772__$1;
(statearr_35838_35891[(1)] = (10));

} else {
var statearr_35839_35892 = state_35772__$1;
(statearr_35839_35892[(1)] = (11));

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
});})(c__29107__auto__,map__35646,map__35646__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35647,map__35647__$1,msg,files))
;
return ((function (switch__29045__auto__,c__29107__auto__,map__35646,map__35646__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35647,map__35647__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29046__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29046__auto____0 = (function (){
var statearr_35843 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35843[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29046__auto__);

(statearr_35843[(1)] = (1));

return statearr_35843;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29046__auto____1 = (function (state_35772){
while(true){
var ret_value__29047__auto__ = (function (){try{while(true){
var result__29048__auto__ = switch__29045__auto__.call(null,state_35772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29048__auto__;
}
break;
}
}catch (e35844){if((e35844 instanceof Object)){
var ex__29049__auto__ = e35844;
var statearr_35845_35893 = state_35772;
(statearr_35845_35893[(5)] = ex__29049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35894 = state_35772;
state_35772 = G__35894;
continue;
} else {
return ret_value__29047__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29046__auto__ = function(state_35772){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29046__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29046__auto____1.call(this,state_35772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29046__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29046__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29046__auto__;
})()
;})(switch__29045__auto__,c__29107__auto__,map__35646,map__35646__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35647,map__35647__$1,msg,files))
})();
var state__29109__auto__ = (function (){var statearr_35846 = f__29108__auto__.call(null);
(statearr_35846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29107__auto__);

return statearr_35846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29109__auto__);
});})(c__29107__auto__,map__35646,map__35646__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35647,map__35647__$1,msg,files))
);

return c__29107__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35897,link){
var map__35899 = p__35897;
var map__35899__$1 = ((cljs.core.seq_QMARK_.call(null,map__35899))?cljs.core.apply.call(null,cljs.core.hash_map,map__35899):map__35899);
var file = cljs.core.get.call(null,map__35899__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4423__auto__ = link.href;
if(cljs.core.truth_(temp__4423__auto__)){
var link_href = temp__4423__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4423__auto__,map__35899,map__35899__$1,file){
return (function (p1__35895_SHARP_,p2__35896_SHARP_){
if(cljs.core._EQ_.call(null,p1__35895_SHARP_,p2__35896_SHARP_)){
return p1__35895_SHARP_;
} else {
return false;
}
});})(link_href,temp__4423__auto__,map__35899,map__35899__$1,file))
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
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35903){
var map__35904 = p__35903;
var map__35904__$1 = ((cljs.core.seq_QMARK_.call(null,map__35904))?cljs.core.apply.call(null,cljs.core.hash_map,map__35904):map__35904);
var match_length = cljs.core.get.call(null,map__35904__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35904__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35900_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35900_SHARP_);
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
var G__35906 = arguments.length;
switch (G__35906) {
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__35908){
var map__35910 = p__35908;
var map__35910__$1 = ((cljs.core.seq_QMARK_.call(null,map__35910))?cljs.core.apply.call(null,cljs.core.hash_map,map__35910):map__35910);
var f_data = map__35910__$1;
var file = cljs.core.get.call(null,map__35910__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__35910__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
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
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35911,files_msg){
var map__35933 = p__35911;
var map__35933__$1 = ((cljs.core.seq_QMARK_.call(null,map__35933))?cljs.core.apply.call(null,cljs.core.hash_map,map__35933):map__35933);
var opts = map__35933__$1;
var on_cssload = cljs.core.get.call(null,map__35933__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35934_35954 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__35935_35955 = null;
var count__35936_35956 = (0);
var i__35937_35957 = (0);
while(true){
if((i__35937_35957 < count__35936_35956)){
var f_35958 = cljs.core._nth.call(null,chunk__35935_35955,i__35937_35957);
figwheel.client.file_reloading.reload_css_file.call(null,f_35958);

var G__35959 = seq__35934_35954;
var G__35960 = chunk__35935_35955;
var G__35961 = count__35936_35956;
var G__35962 = (i__35937_35957 + (1));
seq__35934_35954 = G__35959;
chunk__35935_35955 = G__35960;
count__35936_35956 = G__35961;
i__35937_35957 = G__35962;
continue;
} else {
var temp__4423__auto___35963 = cljs.core.seq.call(null,seq__35934_35954);
if(temp__4423__auto___35963){
var seq__35934_35964__$1 = temp__4423__auto___35963;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35934_35964__$1)){
var c__25771__auto___35965 = cljs.core.chunk_first.call(null,seq__35934_35964__$1);
var G__35966 = cljs.core.chunk_rest.call(null,seq__35934_35964__$1);
var G__35967 = c__25771__auto___35965;
var G__35968 = cljs.core.count.call(null,c__25771__auto___35965);
var G__35969 = (0);
seq__35934_35954 = G__35966;
chunk__35935_35955 = G__35967;
count__35936_35956 = G__35968;
i__35937_35957 = G__35969;
continue;
} else {
var f_35970 = cljs.core.first.call(null,seq__35934_35964__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35970);

var G__35971 = cljs.core.next.call(null,seq__35934_35964__$1);
var G__35972 = null;
var G__35973 = (0);
var G__35974 = (0);
seq__35934_35954 = G__35971;
chunk__35935_35955 = G__35972;
count__35936_35956 = G__35973;
i__35937_35957 = G__35974;
continue;
}
} else {
}
}
break;
}

var c__29107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29107__auto__,map__35933,map__35933__$1,opts,on_cssload){
return (function (){
var f__29108__auto__ = (function (){var switch__29045__auto__ = ((function (c__29107__auto__,map__35933,map__35933__$1,opts,on_cssload){
return (function (state_35944){
var state_val_35945 = (state_35944[(1)]);
if((state_val_35945 === (1))){
var inst_35938 = cljs.core.async.timeout.call(null,(100));
var state_35944__$1 = state_35944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35944__$1,(2),inst_35938);
} else {
if((state_val_35945 === (2))){
var inst_35940 = (state_35944[(2)]);
var inst_35941 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_35942 = on_cssload.call(null,inst_35941);
var state_35944__$1 = (function (){var statearr_35946 = state_35944;
(statearr_35946[(7)] = inst_35940);

return statearr_35946;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35944__$1,inst_35942);
} else {
return null;
}
}
});})(c__29107__auto__,map__35933,map__35933__$1,opts,on_cssload))
;
return ((function (switch__29045__auto__,c__29107__auto__,map__35933,map__35933__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__29046__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__29046__auto____0 = (function (){
var statearr_35950 = [null,null,null,null,null,null,null,null];
(statearr_35950[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__29046__auto__);

(statearr_35950[(1)] = (1));

return statearr_35950;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__29046__auto____1 = (function (state_35944){
while(true){
var ret_value__29047__auto__ = (function (){try{while(true){
var result__29048__auto__ = switch__29045__auto__.call(null,state_35944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29048__auto__;
}
break;
}
}catch (e35951){if((e35951 instanceof Object)){
var ex__29049__auto__ = e35951;
var statearr_35952_35975 = state_35944;
(statearr_35952_35975[(5)] = ex__29049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35976 = state_35944;
state_35944 = G__35976;
continue;
} else {
return ret_value__29047__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__29046__auto__ = function(state_35944){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__29046__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__29046__auto____1.call(this,state_35944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__29046__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__29046__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__29046__auto__;
})()
;})(switch__29045__auto__,c__29107__auto__,map__35933,map__35933__$1,opts,on_cssload))
})();
var state__29109__auto__ = (function (){var statearr_35953 = f__29108__auto__.call(null);
(statearr_35953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29107__auto__);

return statearr_35953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29109__auto__);
});})(c__29107__auto__,map__35933,map__35933__$1,opts,on_cssload))
);

return c__29107__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map