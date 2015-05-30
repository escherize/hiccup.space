// Compiled by ClojureScript 0.0-3291 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34355__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__34355 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34356__i = 0, G__34356__a = new Array(arguments.length -  0);
while (G__34356__i < G__34356__a.length) {G__34356__a[G__34356__i] = arguments[G__34356__i + 0]; ++G__34356__i;}
  args = new cljs.core.IndexedSeq(G__34356__a,0);
} 
return G__34355__delegate.call(this,args);};
G__34355.cljs$lang$maxFixedArity = 0;
G__34355.cljs$lang$applyTo = (function (arglist__34357){
var args = cljs.core.seq(arglist__34357);
return G__34355__delegate(args);
});
G__34355.cljs$core$IFn$_invoke$arity$variadic = G__34355__delegate;
return G__34355;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34358){
var map__34360 = p__34358;
var map__34360__$1 = ((cljs.core.seq_QMARK_.call(null,map__34360))?cljs.core.apply.call(null,cljs.core.hash_map,map__34360):map__34360);
var message = cljs.core.get.call(null,map__34360__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34360__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24986__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24986__auto__)){
return or__24986__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24974__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24974__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24974__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29107__auto___34489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29107__auto___34489,ch){
return (function (){
var f__29108__auto__ = (function (){var switch__29045__auto__ = ((function (c__29107__auto___34489,ch){
return (function (state_34463){
var state_val_34464 = (state_34463[(1)]);
if((state_val_34464 === (7))){
var inst_34459 = (state_34463[(2)]);
var state_34463__$1 = state_34463;
var statearr_34465_34490 = state_34463__$1;
(statearr_34465_34490[(2)] = inst_34459);

(statearr_34465_34490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34464 === (1))){
var state_34463__$1 = state_34463;
var statearr_34466_34491 = state_34463__$1;
(statearr_34466_34491[(2)] = null);

(statearr_34466_34491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34464 === (4))){
var inst_34427 = (state_34463[(7)]);
var inst_34427__$1 = (state_34463[(2)]);
var state_34463__$1 = (function (){var statearr_34467 = state_34463;
(statearr_34467[(7)] = inst_34427__$1);

return statearr_34467;
})();
if(cljs.core.truth_(inst_34427__$1)){
var statearr_34468_34492 = state_34463__$1;
(statearr_34468_34492[(1)] = (5));

} else {
var statearr_34469_34493 = state_34463__$1;
(statearr_34469_34493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34464 === (13))){
var state_34463__$1 = state_34463;
var statearr_34470_34494 = state_34463__$1;
(statearr_34470_34494[(2)] = null);

(statearr_34470_34494[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34464 === (6))){
var state_34463__$1 = state_34463;
var statearr_34471_34495 = state_34463__$1;
(statearr_34471_34495[(2)] = null);

(statearr_34471_34495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34464 === (3))){
var inst_34461 = (state_34463[(2)]);
var state_34463__$1 = state_34463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34463__$1,inst_34461);
} else {
if((state_val_34464 === (12))){
var inst_34434 = (state_34463[(8)]);
var inst_34447 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34434);
var inst_34448 = cljs.core.first.call(null,inst_34447);
var inst_34449 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34448);
var inst_34450 = console.warn("Figwheel: Not loading code with warnings - ",inst_34449);
var state_34463__$1 = state_34463;
var statearr_34472_34496 = state_34463__$1;
(statearr_34472_34496[(2)] = inst_34450);

(statearr_34472_34496[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34464 === (2))){
var state_34463__$1 = state_34463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34463__$1,(4),ch);
} else {
if((state_val_34464 === (11))){
var inst_34443 = (state_34463[(2)]);
var state_34463__$1 = state_34463;
var statearr_34473_34497 = state_34463__$1;
(statearr_34473_34497[(2)] = inst_34443);

(statearr_34473_34497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34464 === (9))){
var inst_34433 = (state_34463[(9)]);
var inst_34445 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34433,opts);
var state_34463__$1 = state_34463;
if(cljs.core.truth_(inst_34445)){
var statearr_34474_34498 = state_34463__$1;
(statearr_34474_34498[(1)] = (12));

} else {
var statearr_34475_34499 = state_34463__$1;
(statearr_34475_34499[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34464 === (5))){
var inst_34433 = (state_34463[(9)]);
var inst_34427 = (state_34463[(7)]);
var inst_34429 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34430 = (new cljs.core.PersistentArrayMap(null,2,inst_34429,null));
var inst_34431 = (new cljs.core.PersistentHashSet(null,inst_34430,null));
var inst_34432 = figwheel.client.focus_msgs.call(null,inst_34431,inst_34427);
var inst_34433__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34432);
var inst_34434 = cljs.core.first.call(null,inst_34432);
var inst_34435 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34433__$1,opts);
var state_34463__$1 = (function (){var statearr_34476 = state_34463;
(statearr_34476[(9)] = inst_34433__$1);

(statearr_34476[(8)] = inst_34434);

return statearr_34476;
})();
if(cljs.core.truth_(inst_34435)){
var statearr_34477_34500 = state_34463__$1;
(statearr_34477_34500[(1)] = (8));

} else {
var statearr_34478_34501 = state_34463__$1;
(statearr_34478_34501[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34464 === (14))){
var inst_34453 = (state_34463[(2)]);
var state_34463__$1 = state_34463;
var statearr_34479_34502 = state_34463__$1;
(statearr_34479_34502[(2)] = inst_34453);

(statearr_34479_34502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34464 === (10))){
var inst_34455 = (state_34463[(2)]);
var state_34463__$1 = (function (){var statearr_34480 = state_34463;
(statearr_34480[(10)] = inst_34455);

return statearr_34480;
})();
var statearr_34481_34503 = state_34463__$1;
(statearr_34481_34503[(2)] = null);

(statearr_34481_34503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34464 === (8))){
var inst_34434 = (state_34463[(8)]);
var inst_34437 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34438 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34434);
var inst_34439 = cljs.core.async.timeout.call(null,(1000));
var inst_34440 = [inst_34438,inst_34439];
var inst_34441 = (new cljs.core.PersistentVector(null,2,(5),inst_34437,inst_34440,null));
var state_34463__$1 = state_34463;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34463__$1,(11),inst_34441);
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
});})(c__29107__auto___34489,ch))
;
return ((function (switch__29045__auto__,c__29107__auto___34489,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29046__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29046__auto____0 = (function (){
var statearr_34485 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34485[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29046__auto__);

(statearr_34485[(1)] = (1));

return statearr_34485;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29046__auto____1 = (function (state_34463){
while(true){
var ret_value__29047__auto__ = (function (){try{while(true){
var result__29048__auto__ = switch__29045__auto__.call(null,state_34463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29048__auto__;
}
break;
}
}catch (e34486){if((e34486 instanceof Object)){
var ex__29049__auto__ = e34486;
var statearr_34487_34504 = state_34463;
(statearr_34487_34504[(5)] = ex__29049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34505 = state_34463;
state_34463 = G__34505;
continue;
} else {
return ret_value__29047__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29046__auto__ = function(state_34463){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29046__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29046__auto____1.call(this,state_34463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29046__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29046__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29046__auto__;
})()
;})(switch__29045__auto__,c__29107__auto___34489,ch))
})();
var state__29109__auto__ = (function (){var statearr_34488 = f__29108__auto__.call(null);
(statearr_34488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29107__auto___34489);

return statearr_34488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29109__auto__);
});})(c__29107__auto___34489,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34506_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34506_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_34513 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34513){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_34511 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_34512 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_34511,_STAR_print_newline_STAR_34512,base_path_34513){
return (function() { 
var G__34514__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__34514 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34515__i = 0, G__34515__a = new Array(arguments.length -  0);
while (G__34515__i < G__34515__a.length) {G__34515__a[G__34515__i] = arguments[G__34515__i + 0]; ++G__34515__i;}
  args = new cljs.core.IndexedSeq(G__34515__a,0);
} 
return G__34514__delegate.call(this,args);};
G__34514.cljs$lang$maxFixedArity = 0;
G__34514.cljs$lang$applyTo = (function (arglist__34516){
var args = cljs.core.seq(arglist__34516);
return G__34514__delegate(args);
});
G__34514.cljs$core$IFn$_invoke$arity$variadic = G__34514__delegate;
return G__34514;
})()
;})(_STAR_print_fn_STAR_34511,_STAR_print_newline_STAR_34512,base_path_34513))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_34512;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_34511;
}}catch (e34510){if((e34510 instanceof Error)){
var e = e34510;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34513], null));
} else {
var e = e34510;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_34513))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34517){
var map__34522 = p__34517;
var map__34522__$1 = ((cljs.core.seq_QMARK_.call(null,map__34522))?cljs.core.apply.call(null,cljs.core.hash_map,map__34522):map__34522);
var opts = map__34522__$1;
var build_id = cljs.core.get.call(null,map__34522__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34522,map__34522__$1,opts,build_id){
return (function (p__34523){
var vec__34524 = p__34523;
var map__34525 = cljs.core.nth.call(null,vec__34524,(0),null);
var map__34525__$1 = ((cljs.core.seq_QMARK_.call(null,map__34525))?cljs.core.apply.call(null,cljs.core.hash_map,map__34525):map__34525);
var msg = map__34525__$1;
var msg_name = cljs.core.get.call(null,map__34525__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34524,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__34524,map__34525,map__34525__$1,msg,msg_name,_,map__34522,map__34522__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34524,map__34525,map__34525__$1,msg,msg_name,_,map__34522,map__34522__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34522,map__34522__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34529){
var vec__34530 = p__34529;
var map__34531 = cljs.core.nth.call(null,vec__34530,(0),null);
var map__34531__$1 = ((cljs.core.seq_QMARK_.call(null,map__34531))?cljs.core.apply.call(null,cljs.core.hash_map,map__34531):map__34531);
var msg = map__34531__$1;
var msg_name = cljs.core.get.call(null,map__34531__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34530,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34532){
var map__34540 = p__34532;
var map__34540__$1 = ((cljs.core.seq_QMARK_.call(null,map__34540))?cljs.core.apply.call(null,cljs.core.hash_map,map__34540):map__34540);
var on_compile_warning = cljs.core.get.call(null,map__34540__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34540__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34540,map__34540__$1,on_compile_warning,on_compile_fail){
return (function (p__34541){
var vec__34542 = p__34541;
var map__34543 = cljs.core.nth.call(null,vec__34542,(0),null);
var map__34543__$1 = ((cljs.core.seq_QMARK_.call(null,map__34543))?cljs.core.apply.call(null,cljs.core.hash_map,map__34543):map__34543);
var msg = map__34543__$1;
var msg_name = cljs.core.get.call(null,map__34543__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34542,(1));
var pred__34544 = cljs.core._EQ_;
var expr__34545 = msg_name;
if(cljs.core.truth_(pred__34544.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34545))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34544.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34545))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34540,map__34540__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29107__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29108__auto__ = (function (){var switch__29045__auto__ = ((function (c__29107__auto__,msg_hist,msg_names,msg){
return (function (state_34746){
var state_val_34747 = (state_34746[(1)]);
if((state_val_34747 === (7))){
var inst_34680 = (state_34746[(2)]);
var state_34746__$1 = state_34746;
var statearr_34748_34789 = state_34746__$1;
(statearr_34748_34789[(2)] = inst_34680);

(statearr_34748_34789[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (20))){
var inst_34708 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34746__$1 = state_34746;
if(cljs.core.truth_(inst_34708)){
var statearr_34749_34790 = state_34746__$1;
(statearr_34749_34790[(1)] = (22));

} else {
var statearr_34750_34791 = state_34746__$1;
(statearr_34750_34791[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (27))){
var inst_34720 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34721 = figwheel.client.heads_up.display_warning.call(null,inst_34720);
var state_34746__$1 = state_34746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34746__$1,(30),inst_34721);
} else {
if((state_val_34747 === (1))){
var inst_34668 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34746__$1 = state_34746;
if(cljs.core.truth_(inst_34668)){
var statearr_34751_34792 = state_34746__$1;
(statearr_34751_34792[(1)] = (2));

} else {
var statearr_34752_34793 = state_34746__$1;
(statearr_34752_34793[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (24))){
var inst_34736 = (state_34746[(2)]);
var state_34746__$1 = state_34746;
var statearr_34753_34794 = state_34746__$1;
(statearr_34753_34794[(2)] = inst_34736);

(statearr_34753_34794[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (4))){
var inst_34744 = (state_34746[(2)]);
var state_34746__$1 = state_34746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34746__$1,inst_34744);
} else {
if((state_val_34747 === (15))){
var inst_34696 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34697 = figwheel.client.format_messages.call(null,inst_34696);
var inst_34698 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34699 = figwheel.client.heads_up.display_error.call(null,inst_34697,inst_34698);
var state_34746__$1 = state_34746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34746__$1,(18),inst_34699);
} else {
if((state_val_34747 === (21))){
var inst_34738 = (state_34746[(2)]);
var state_34746__$1 = state_34746;
var statearr_34754_34795 = state_34746__$1;
(statearr_34754_34795[(2)] = inst_34738);

(statearr_34754_34795[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (31))){
var inst_34727 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34746__$1 = state_34746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34746__$1,(34),inst_34727);
} else {
if((state_val_34747 === (32))){
var state_34746__$1 = state_34746;
var statearr_34755_34796 = state_34746__$1;
(statearr_34755_34796[(2)] = null);

(statearr_34755_34796[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (33))){
var inst_34732 = (state_34746[(2)]);
var state_34746__$1 = state_34746;
var statearr_34756_34797 = state_34746__$1;
(statearr_34756_34797[(2)] = inst_34732);

(statearr_34756_34797[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (13))){
var inst_34686 = (state_34746[(2)]);
var inst_34687 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34688 = figwheel.client.format_messages.call(null,inst_34687);
var inst_34689 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34690 = figwheel.client.heads_up.display_error.call(null,inst_34688,inst_34689);
var state_34746__$1 = (function (){var statearr_34757 = state_34746;
(statearr_34757[(7)] = inst_34686);

return statearr_34757;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34746__$1,(14),inst_34690);
} else {
if((state_val_34747 === (22))){
var inst_34710 = figwheel.client.heads_up.clear.call(null);
var state_34746__$1 = state_34746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34746__$1,(25),inst_34710);
} else {
if((state_val_34747 === (29))){
var inst_34734 = (state_34746[(2)]);
var state_34746__$1 = state_34746;
var statearr_34758_34798 = state_34746__$1;
(statearr_34758_34798[(2)] = inst_34734);

(statearr_34758_34798[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (6))){
var inst_34676 = figwheel.client.heads_up.clear.call(null);
var state_34746__$1 = state_34746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34746__$1,(9),inst_34676);
} else {
if((state_val_34747 === (28))){
var inst_34725 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34746__$1 = state_34746;
if(cljs.core.truth_(inst_34725)){
var statearr_34759_34799 = state_34746__$1;
(statearr_34759_34799[(1)] = (31));

} else {
var statearr_34760_34800 = state_34746__$1;
(statearr_34760_34800[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (25))){
var inst_34712 = (state_34746[(2)]);
var inst_34713 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34714 = figwheel.client.heads_up.display_warning.call(null,inst_34713);
var state_34746__$1 = (function (){var statearr_34761 = state_34746;
(statearr_34761[(8)] = inst_34712);

return statearr_34761;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34746__$1,(26),inst_34714);
} else {
if((state_val_34747 === (34))){
var inst_34729 = (state_34746[(2)]);
var state_34746__$1 = state_34746;
var statearr_34762_34801 = state_34746__$1;
(statearr_34762_34801[(2)] = inst_34729);

(statearr_34762_34801[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (17))){
var inst_34740 = (state_34746[(2)]);
var state_34746__$1 = state_34746;
var statearr_34763_34802 = state_34746__$1;
(statearr_34763_34802[(2)] = inst_34740);

(statearr_34763_34802[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (3))){
var inst_34682 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34746__$1 = state_34746;
if(cljs.core.truth_(inst_34682)){
var statearr_34764_34803 = state_34746__$1;
(statearr_34764_34803[(1)] = (10));

} else {
var statearr_34765_34804 = state_34746__$1;
(statearr_34765_34804[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (12))){
var inst_34742 = (state_34746[(2)]);
var state_34746__$1 = state_34746;
var statearr_34766_34805 = state_34746__$1;
(statearr_34766_34805[(2)] = inst_34742);

(statearr_34766_34805[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (2))){
var inst_34670 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34746__$1 = state_34746;
if(cljs.core.truth_(inst_34670)){
var statearr_34767_34806 = state_34746__$1;
(statearr_34767_34806[(1)] = (5));

} else {
var statearr_34768_34807 = state_34746__$1;
(statearr_34768_34807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (23))){
var inst_34718 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34746__$1 = state_34746;
if(cljs.core.truth_(inst_34718)){
var statearr_34769_34808 = state_34746__$1;
(statearr_34769_34808[(1)] = (27));

} else {
var statearr_34770_34809 = state_34746__$1;
(statearr_34770_34809[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (19))){
var inst_34705 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34706 = figwheel.client.heads_up.append_message.call(null,inst_34705);
var state_34746__$1 = state_34746;
var statearr_34771_34810 = state_34746__$1;
(statearr_34771_34810[(2)] = inst_34706);

(statearr_34771_34810[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (11))){
var inst_34694 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34746__$1 = state_34746;
if(cljs.core.truth_(inst_34694)){
var statearr_34772_34811 = state_34746__$1;
(statearr_34772_34811[(1)] = (15));

} else {
var statearr_34773_34812 = state_34746__$1;
(statearr_34773_34812[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (9))){
var inst_34678 = (state_34746[(2)]);
var state_34746__$1 = state_34746;
var statearr_34774_34813 = state_34746__$1;
(statearr_34774_34813[(2)] = inst_34678);

(statearr_34774_34813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (5))){
var inst_34672 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34746__$1 = state_34746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34746__$1,(8),inst_34672);
} else {
if((state_val_34747 === (14))){
var inst_34692 = (state_34746[(2)]);
var state_34746__$1 = state_34746;
var statearr_34775_34814 = state_34746__$1;
(statearr_34775_34814[(2)] = inst_34692);

(statearr_34775_34814[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (26))){
var inst_34716 = (state_34746[(2)]);
var state_34746__$1 = state_34746;
var statearr_34776_34815 = state_34746__$1;
(statearr_34776_34815[(2)] = inst_34716);

(statearr_34776_34815[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (16))){
var inst_34703 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34746__$1 = state_34746;
if(cljs.core.truth_(inst_34703)){
var statearr_34777_34816 = state_34746__$1;
(statearr_34777_34816[(1)] = (19));

} else {
var statearr_34778_34817 = state_34746__$1;
(statearr_34778_34817[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (30))){
var inst_34723 = (state_34746[(2)]);
var state_34746__$1 = state_34746;
var statearr_34779_34818 = state_34746__$1;
(statearr_34779_34818[(2)] = inst_34723);

(statearr_34779_34818[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (10))){
var inst_34684 = figwheel.client.heads_up.clear.call(null);
var state_34746__$1 = state_34746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34746__$1,(13),inst_34684);
} else {
if((state_val_34747 === (18))){
var inst_34701 = (state_34746[(2)]);
var state_34746__$1 = state_34746;
var statearr_34780_34819 = state_34746__$1;
(statearr_34780_34819[(2)] = inst_34701);

(statearr_34780_34819[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (8))){
var inst_34674 = (state_34746[(2)]);
var state_34746__$1 = state_34746;
var statearr_34781_34820 = state_34746__$1;
(statearr_34781_34820[(2)] = inst_34674);

(statearr_34781_34820[(1)] = (7));


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
});})(c__29107__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29045__auto__,c__29107__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29046__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29046__auto____0 = (function (){
var statearr_34785 = [null,null,null,null,null,null,null,null,null];
(statearr_34785[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29046__auto__);

(statearr_34785[(1)] = (1));

return statearr_34785;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29046__auto____1 = (function (state_34746){
while(true){
var ret_value__29047__auto__ = (function (){try{while(true){
var result__29048__auto__ = switch__29045__auto__.call(null,state_34746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29048__auto__;
}
break;
}
}catch (e34786){if((e34786 instanceof Object)){
var ex__29049__auto__ = e34786;
var statearr_34787_34821 = state_34746;
(statearr_34787_34821[(5)] = ex__29049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34822 = state_34746;
state_34746 = G__34822;
continue;
} else {
return ret_value__29047__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29046__auto__ = function(state_34746){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29046__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29046__auto____1.call(this,state_34746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29046__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29046__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29046__auto__;
})()
;})(switch__29045__auto__,c__29107__auto__,msg_hist,msg_names,msg))
})();
var state__29109__auto__ = (function (){var statearr_34788 = f__29108__auto__.call(null);
(statearr_34788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29107__auto__);

return statearr_34788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29109__auto__);
});})(c__29107__auto__,msg_hist,msg_names,msg))
);

return c__29107__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29107__auto___34885 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29107__auto___34885,ch){
return (function (){
var f__29108__auto__ = (function (){var switch__29045__auto__ = ((function (c__29107__auto___34885,ch){
return (function (state_34868){
var state_val_34869 = (state_34868[(1)]);
if((state_val_34869 === (1))){
var state_34868__$1 = state_34868;
var statearr_34870_34886 = state_34868__$1;
(statearr_34870_34886[(2)] = null);

(statearr_34870_34886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (2))){
var state_34868__$1 = state_34868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34868__$1,(4),ch);
} else {
if((state_val_34869 === (3))){
var inst_34866 = (state_34868[(2)]);
var state_34868__$1 = state_34868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34868__$1,inst_34866);
} else {
if((state_val_34869 === (4))){
var inst_34856 = (state_34868[(7)]);
var inst_34856__$1 = (state_34868[(2)]);
var state_34868__$1 = (function (){var statearr_34871 = state_34868;
(statearr_34871[(7)] = inst_34856__$1);

return statearr_34871;
})();
if(cljs.core.truth_(inst_34856__$1)){
var statearr_34872_34887 = state_34868__$1;
(statearr_34872_34887[(1)] = (5));

} else {
var statearr_34873_34888 = state_34868__$1;
(statearr_34873_34888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (5))){
var inst_34856 = (state_34868[(7)]);
var inst_34858 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34856);
var state_34868__$1 = state_34868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34868__$1,(8),inst_34858);
} else {
if((state_val_34869 === (6))){
var state_34868__$1 = state_34868;
var statearr_34874_34889 = state_34868__$1;
(statearr_34874_34889[(2)] = null);

(statearr_34874_34889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (7))){
var inst_34864 = (state_34868[(2)]);
var state_34868__$1 = state_34868;
var statearr_34875_34890 = state_34868__$1;
(statearr_34875_34890[(2)] = inst_34864);

(statearr_34875_34890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (8))){
var inst_34860 = (state_34868[(2)]);
var state_34868__$1 = (function (){var statearr_34876 = state_34868;
(statearr_34876[(8)] = inst_34860);

return statearr_34876;
})();
var statearr_34877_34891 = state_34868__$1;
(statearr_34877_34891[(2)] = null);

(statearr_34877_34891[(1)] = (2));


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
});})(c__29107__auto___34885,ch))
;
return ((function (switch__29045__auto__,c__29107__auto___34885,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29046__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29046__auto____0 = (function (){
var statearr_34881 = [null,null,null,null,null,null,null,null,null];
(statearr_34881[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29046__auto__);

(statearr_34881[(1)] = (1));

return statearr_34881;
});
var figwheel$client$heads_up_plugin_$_state_machine__29046__auto____1 = (function (state_34868){
while(true){
var ret_value__29047__auto__ = (function (){try{while(true){
var result__29048__auto__ = switch__29045__auto__.call(null,state_34868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29048__auto__;
}
break;
}
}catch (e34882){if((e34882 instanceof Object)){
var ex__29049__auto__ = e34882;
var statearr_34883_34892 = state_34868;
(statearr_34883_34892[(5)] = ex__29049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34893 = state_34868;
state_34868 = G__34893;
continue;
} else {
return ret_value__29047__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29046__auto__ = function(state_34868){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29046__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29046__auto____1.call(this,state_34868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29046__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29046__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29046__auto__;
})()
;})(switch__29045__auto__,c__29107__auto___34885,ch))
})();
var state__29109__auto__ = (function (){var statearr_34884 = f__29108__auto__.call(null);
(statearr_34884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29107__auto___34885);

return statearr_34884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29109__auto__);
});})(c__29107__auto___34885,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29107__auto__){
return (function (){
var f__29108__auto__ = (function (){var switch__29045__auto__ = ((function (c__29107__auto__){
return (function (state_34914){
var state_val_34915 = (state_34914[(1)]);
if((state_val_34915 === (1))){
var inst_34909 = cljs.core.async.timeout.call(null,(3000));
var state_34914__$1 = state_34914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34914__$1,(2),inst_34909);
} else {
if((state_val_34915 === (2))){
var inst_34911 = (state_34914[(2)]);
var inst_34912 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34914__$1 = (function (){var statearr_34916 = state_34914;
(statearr_34916[(7)] = inst_34911);

return statearr_34916;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34914__$1,inst_34912);
} else {
return null;
}
}
});})(c__29107__auto__))
;
return ((function (switch__29045__auto__,c__29107__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29046__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29046__auto____0 = (function (){
var statearr_34920 = [null,null,null,null,null,null,null,null];
(statearr_34920[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29046__auto__);

(statearr_34920[(1)] = (1));

return statearr_34920;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29046__auto____1 = (function (state_34914){
while(true){
var ret_value__29047__auto__ = (function (){try{while(true){
var result__29048__auto__ = switch__29045__auto__.call(null,state_34914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29048__auto__;
}
break;
}
}catch (e34921){if((e34921 instanceof Object)){
var ex__29049__auto__ = e34921;
var statearr_34922_34924 = state_34914;
(statearr_34922_34924[(5)] = ex__29049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34925 = state_34914;
state_34914 = G__34925;
continue;
} else {
return ret_value__29047__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29046__auto__ = function(state_34914){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29046__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29046__auto____1.call(this,state_34914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29046__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29046__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29046__auto__;
})()
;})(switch__29045__auto__,c__29107__auto__))
})();
var state__29109__auto__ = (function (){var statearr_34923 = f__29108__auto__.call(null);
(statearr_34923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29107__auto__);

return statearr_34923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29109__auto__);
});})(c__29107__auto__))
);

return c__29107__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__34926){
var map__34932 = p__34926;
var map__34932__$1 = ((cljs.core.seq_QMARK_.call(null,map__34932))?cljs.core.apply.call(null,cljs.core.hash_map,map__34932):map__34932);
var ed = map__34932__$1;
var formatted_exception = cljs.core.get.call(null,map__34932__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__34932__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__34932__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__34933_34937 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__34934_34938 = null;
var count__34935_34939 = (0);
var i__34936_34940 = (0);
while(true){
if((i__34936_34940 < count__34935_34939)){
var msg_34941 = cljs.core._nth.call(null,chunk__34934_34938,i__34936_34940);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34941);

var G__34942 = seq__34933_34937;
var G__34943 = chunk__34934_34938;
var G__34944 = count__34935_34939;
var G__34945 = (i__34936_34940 + (1));
seq__34933_34937 = G__34942;
chunk__34934_34938 = G__34943;
count__34935_34939 = G__34944;
i__34936_34940 = G__34945;
continue;
} else {
var temp__4423__auto___34946 = cljs.core.seq.call(null,seq__34933_34937);
if(temp__4423__auto___34946){
var seq__34933_34947__$1 = temp__4423__auto___34946;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34933_34947__$1)){
var c__25771__auto___34948 = cljs.core.chunk_first.call(null,seq__34933_34947__$1);
var G__34949 = cljs.core.chunk_rest.call(null,seq__34933_34947__$1);
var G__34950 = c__25771__auto___34948;
var G__34951 = cljs.core.count.call(null,c__25771__auto___34948);
var G__34952 = (0);
seq__34933_34937 = G__34949;
chunk__34934_34938 = G__34950;
count__34935_34939 = G__34951;
i__34936_34940 = G__34952;
continue;
} else {
var msg_34953 = cljs.core.first.call(null,seq__34933_34947__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34953);

var G__34954 = cljs.core.next.call(null,seq__34933_34947__$1);
var G__34955 = null;
var G__34956 = (0);
var G__34957 = (0);
seq__34933_34937 = G__34954;
chunk__34934_34938 = G__34955;
count__34935_34939 = G__34956;
i__34936_34940 = G__34957;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__34958){
var map__34960 = p__34958;
var map__34960__$1 = ((cljs.core.seq_QMARK_.call(null,map__34960))?cljs.core.apply.call(null,cljs.core.hash_map,map__34960):map__34960);
var w = map__34960__$1;
var message = cljs.core.get.call(null,map__34960__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24974__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24974__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24974__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__34967 = cljs.core.seq.call(null,plugins);
var chunk__34968 = null;
var count__34969 = (0);
var i__34970 = (0);
while(true){
if((i__34970 < count__34969)){
var vec__34971 = cljs.core._nth.call(null,chunk__34968,i__34970);
var k = cljs.core.nth.call(null,vec__34971,(0),null);
var plugin = cljs.core.nth.call(null,vec__34971,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34973 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34967,chunk__34968,count__34969,i__34970,pl_34973,vec__34971,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34973.call(null,msg_hist);
});})(seq__34967,chunk__34968,count__34969,i__34970,pl_34973,vec__34971,k,plugin))
);
} else {
}

var G__34974 = seq__34967;
var G__34975 = chunk__34968;
var G__34976 = count__34969;
var G__34977 = (i__34970 + (1));
seq__34967 = G__34974;
chunk__34968 = G__34975;
count__34969 = G__34976;
i__34970 = G__34977;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__34967);
if(temp__4423__auto__){
var seq__34967__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34967__$1)){
var c__25771__auto__ = cljs.core.chunk_first.call(null,seq__34967__$1);
var G__34978 = cljs.core.chunk_rest.call(null,seq__34967__$1);
var G__34979 = c__25771__auto__;
var G__34980 = cljs.core.count.call(null,c__25771__auto__);
var G__34981 = (0);
seq__34967 = G__34978;
chunk__34968 = G__34979;
count__34969 = G__34980;
i__34970 = G__34981;
continue;
} else {
var vec__34972 = cljs.core.first.call(null,seq__34967__$1);
var k = cljs.core.nth.call(null,vec__34972,(0),null);
var plugin = cljs.core.nth.call(null,vec__34972,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34982 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34967,chunk__34968,count__34969,i__34970,pl_34982,vec__34972,k,plugin,seq__34967__$1,temp__4423__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34982.call(null,msg_hist);
});})(seq__34967,chunk__34968,count__34969,i__34970,pl_34982,vec__34972,k,plugin,seq__34967__$1,temp__4423__auto__))
);
} else {
}

var G__34983 = cljs.core.next.call(null,seq__34967__$1);
var G__34984 = null;
var G__34985 = (0);
var G__34986 = (0);
seq__34967 = G__34983;
chunk__34968 = G__34984;
count__34969 = G__34985;
i__34970 = G__34986;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__34988 = arguments.length;
switch (G__34988) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__26026__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26026__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__34991){
var map__34992 = p__34991;
var map__34992__$1 = ((cljs.core.seq_QMARK_.call(null,map__34992))?cljs.core.apply.call(null,cljs.core.hash_map,map__34992):map__34992);
var opts = map__34992__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq34990){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34990));
});

//# sourceMappingURL=client.js.map