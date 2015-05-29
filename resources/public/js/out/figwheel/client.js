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
var G__33568__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__33568 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33569__i = 0, G__33569__a = new Array(arguments.length -  0);
while (G__33569__i < G__33569__a.length) {G__33569__a[G__33569__i] = arguments[G__33569__i + 0]; ++G__33569__i;}
  args = new cljs.core.IndexedSeq(G__33569__a,0);
} 
return G__33568__delegate.call(this,args);};
G__33568.cljs$lang$maxFixedArity = 0;
G__33568.cljs$lang$applyTo = (function (arglist__33570){
var args = cljs.core.seq(arglist__33570);
return G__33568__delegate(args);
});
G__33568.cljs$core$IFn$_invoke$arity$variadic = G__33568__delegate;
return G__33568;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__33571){
var map__33573 = p__33571;
var map__33573__$1 = ((cljs.core.seq_QMARK_.call(null,map__33573))?cljs.core.apply.call(null,cljs.core.hash_map,map__33573):map__33573);
var message = cljs.core.get.call(null,map__33573__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__33573__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__28903__auto___33702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28903__auto___33702,ch){
return (function (){
var f__28904__auto__ = (function (){var switch__28841__auto__ = ((function (c__28903__auto___33702,ch){
return (function (state_33676){
var state_val_33677 = (state_33676[(1)]);
if((state_val_33677 === (7))){
var inst_33672 = (state_33676[(2)]);
var state_33676__$1 = state_33676;
var statearr_33678_33703 = state_33676__$1;
(statearr_33678_33703[(2)] = inst_33672);

(statearr_33678_33703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (1))){
var state_33676__$1 = state_33676;
var statearr_33679_33704 = state_33676__$1;
(statearr_33679_33704[(2)] = null);

(statearr_33679_33704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (4))){
var inst_33640 = (state_33676[(7)]);
var inst_33640__$1 = (state_33676[(2)]);
var state_33676__$1 = (function (){var statearr_33680 = state_33676;
(statearr_33680[(7)] = inst_33640__$1);

return statearr_33680;
})();
if(cljs.core.truth_(inst_33640__$1)){
var statearr_33681_33705 = state_33676__$1;
(statearr_33681_33705[(1)] = (5));

} else {
var statearr_33682_33706 = state_33676__$1;
(statearr_33682_33706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (13))){
var state_33676__$1 = state_33676;
var statearr_33683_33707 = state_33676__$1;
(statearr_33683_33707[(2)] = null);

(statearr_33683_33707[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (6))){
var state_33676__$1 = state_33676;
var statearr_33684_33708 = state_33676__$1;
(statearr_33684_33708[(2)] = null);

(statearr_33684_33708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (3))){
var inst_33674 = (state_33676[(2)]);
var state_33676__$1 = state_33676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33676__$1,inst_33674);
} else {
if((state_val_33677 === (12))){
var inst_33647 = (state_33676[(8)]);
var inst_33660 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33647);
var inst_33661 = cljs.core.first.call(null,inst_33660);
var inst_33662 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33661);
var inst_33663 = console.warn("Figwheel: Not loading code with warnings - ",inst_33662);
var state_33676__$1 = state_33676;
var statearr_33685_33709 = state_33676__$1;
(statearr_33685_33709[(2)] = inst_33663);

(statearr_33685_33709[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (2))){
var state_33676__$1 = state_33676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33676__$1,(4),ch);
} else {
if((state_val_33677 === (11))){
var inst_33656 = (state_33676[(2)]);
var state_33676__$1 = state_33676;
var statearr_33686_33710 = state_33676__$1;
(statearr_33686_33710[(2)] = inst_33656);

(statearr_33686_33710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (9))){
var inst_33646 = (state_33676[(9)]);
var inst_33658 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33646,opts);
var state_33676__$1 = state_33676;
if(cljs.core.truth_(inst_33658)){
var statearr_33687_33711 = state_33676__$1;
(statearr_33687_33711[(1)] = (12));

} else {
var statearr_33688_33712 = state_33676__$1;
(statearr_33688_33712[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (5))){
var inst_33646 = (state_33676[(9)]);
var inst_33640 = (state_33676[(7)]);
var inst_33642 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33643 = (new cljs.core.PersistentArrayMap(null,2,inst_33642,null));
var inst_33644 = (new cljs.core.PersistentHashSet(null,inst_33643,null));
var inst_33645 = figwheel.client.focus_msgs.call(null,inst_33644,inst_33640);
var inst_33646__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33645);
var inst_33647 = cljs.core.first.call(null,inst_33645);
var inst_33648 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33646__$1,opts);
var state_33676__$1 = (function (){var statearr_33689 = state_33676;
(statearr_33689[(9)] = inst_33646__$1);

(statearr_33689[(8)] = inst_33647);

return statearr_33689;
})();
if(cljs.core.truth_(inst_33648)){
var statearr_33690_33713 = state_33676__$1;
(statearr_33690_33713[(1)] = (8));

} else {
var statearr_33691_33714 = state_33676__$1;
(statearr_33691_33714[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (14))){
var inst_33666 = (state_33676[(2)]);
var state_33676__$1 = state_33676;
var statearr_33692_33715 = state_33676__$1;
(statearr_33692_33715[(2)] = inst_33666);

(statearr_33692_33715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (10))){
var inst_33668 = (state_33676[(2)]);
var state_33676__$1 = (function (){var statearr_33693 = state_33676;
(statearr_33693[(10)] = inst_33668);

return statearr_33693;
})();
var statearr_33694_33716 = state_33676__$1;
(statearr_33694_33716[(2)] = null);

(statearr_33694_33716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (8))){
var inst_33647 = (state_33676[(8)]);
var inst_33650 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33651 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33647);
var inst_33652 = cljs.core.async.timeout.call(null,(1000));
var inst_33653 = [inst_33651,inst_33652];
var inst_33654 = (new cljs.core.PersistentVector(null,2,(5),inst_33650,inst_33653,null));
var state_33676__$1 = state_33676;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33676__$1,(11),inst_33654);
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
});})(c__28903__auto___33702,ch))
;
return ((function (switch__28841__auto__,c__28903__auto___33702,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28842__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28842__auto____0 = (function (){
var statearr_33698 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33698[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28842__auto__);

(statearr_33698[(1)] = (1));

return statearr_33698;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28842__auto____1 = (function (state_33676){
while(true){
var ret_value__28843__auto__ = (function (){try{while(true){
var result__28844__auto__ = switch__28841__auto__.call(null,state_33676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28844__auto__;
}
break;
}
}catch (e33699){if((e33699 instanceof Object)){
var ex__28845__auto__ = e33699;
var statearr_33700_33717 = state_33676;
(statearr_33700_33717[(5)] = ex__28845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33718 = state_33676;
state_33676 = G__33718;
continue;
} else {
return ret_value__28843__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28842__auto__ = function(state_33676){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28842__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28842__auto____1.call(this,state_33676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28842__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28842__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28842__auto__;
})()
;})(switch__28841__auto__,c__28903__auto___33702,ch))
})();
var state__28905__auto__ = (function (){var statearr_33701 = f__28904__auto__.call(null);
(statearr_33701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28903__auto___33702);

return statearr_33701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28905__auto__);
});})(c__28903__auto___33702,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33719_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33719_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_33726 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_33726){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_33724 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_33725 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_33724,_STAR_print_newline_STAR_33725,base_path_33726){
return (function() { 
var G__33727__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__33727 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33728__i = 0, G__33728__a = new Array(arguments.length -  0);
while (G__33728__i < G__33728__a.length) {G__33728__a[G__33728__i] = arguments[G__33728__i + 0]; ++G__33728__i;}
  args = new cljs.core.IndexedSeq(G__33728__a,0);
} 
return G__33727__delegate.call(this,args);};
G__33727.cljs$lang$maxFixedArity = 0;
G__33727.cljs$lang$applyTo = (function (arglist__33729){
var args = cljs.core.seq(arglist__33729);
return G__33727__delegate(args);
});
G__33727.cljs$core$IFn$_invoke$arity$variadic = G__33727__delegate;
return G__33727;
})()
;})(_STAR_print_fn_STAR_33724,_STAR_print_newline_STAR_33725,base_path_33726))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33725;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33724;
}}catch (e33723){if((e33723 instanceof Error)){
var e = e33723;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33726], null));
} else {
var e = e33723;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_33726))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__33730){
var map__33735 = p__33730;
var map__33735__$1 = ((cljs.core.seq_QMARK_.call(null,map__33735))?cljs.core.apply.call(null,cljs.core.hash_map,map__33735):map__33735);
var opts = map__33735__$1;
var build_id = cljs.core.get.call(null,map__33735__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__33735,map__33735__$1,opts,build_id){
return (function (p__33736){
var vec__33737 = p__33736;
var map__33738 = cljs.core.nth.call(null,vec__33737,(0),null);
var map__33738__$1 = ((cljs.core.seq_QMARK_.call(null,map__33738))?cljs.core.apply.call(null,cljs.core.hash_map,map__33738):map__33738);
var msg = map__33738__$1;
var msg_name = cljs.core.get.call(null,map__33738__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33737,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__33737,map__33738,map__33738__$1,msg,msg_name,_,map__33735,map__33735__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__33737,map__33738,map__33738__$1,msg,msg_name,_,map__33735,map__33735__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__33735,map__33735__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__33742){
var vec__33743 = p__33742;
var map__33744 = cljs.core.nth.call(null,vec__33743,(0),null);
var map__33744__$1 = ((cljs.core.seq_QMARK_.call(null,map__33744))?cljs.core.apply.call(null,cljs.core.hash_map,map__33744):map__33744);
var msg = map__33744__$1;
var msg_name = cljs.core.get.call(null,map__33744__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33743,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__33745){
var map__33753 = p__33745;
var map__33753__$1 = ((cljs.core.seq_QMARK_.call(null,map__33753))?cljs.core.apply.call(null,cljs.core.hash_map,map__33753):map__33753);
var on_compile_warning = cljs.core.get.call(null,map__33753__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__33753__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__33753,map__33753__$1,on_compile_warning,on_compile_fail){
return (function (p__33754){
var vec__33755 = p__33754;
var map__33756 = cljs.core.nth.call(null,vec__33755,(0),null);
var map__33756__$1 = ((cljs.core.seq_QMARK_.call(null,map__33756))?cljs.core.apply.call(null,cljs.core.hash_map,map__33756):map__33756);
var msg = map__33756__$1;
var msg_name = cljs.core.get.call(null,map__33756__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33755,(1));
var pred__33757 = cljs.core._EQ_;
var expr__33758 = msg_name;
if(cljs.core.truth_(pred__33757.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33758))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33757.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33758))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__33753,map__33753__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28903__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28904__auto__ = (function (){var switch__28841__auto__ = ((function (c__28903__auto__,msg_hist,msg_names,msg){
return (function (state_33959){
var state_val_33960 = (state_33959[(1)]);
if((state_val_33960 === (7))){
var inst_33893 = (state_33959[(2)]);
var state_33959__$1 = state_33959;
var statearr_33961_34002 = state_33959__$1;
(statearr_33961_34002[(2)] = inst_33893);

(statearr_33961_34002[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (20))){
var inst_33921 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33959__$1 = state_33959;
if(cljs.core.truth_(inst_33921)){
var statearr_33962_34003 = state_33959__$1;
(statearr_33962_34003[(1)] = (22));

} else {
var statearr_33963_34004 = state_33959__$1;
(statearr_33963_34004[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (27))){
var inst_33933 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33934 = figwheel.client.heads_up.display_warning.call(null,inst_33933);
var state_33959__$1 = state_33959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33959__$1,(30),inst_33934);
} else {
if((state_val_33960 === (1))){
var inst_33881 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33959__$1 = state_33959;
if(cljs.core.truth_(inst_33881)){
var statearr_33964_34005 = state_33959__$1;
(statearr_33964_34005[(1)] = (2));

} else {
var statearr_33965_34006 = state_33959__$1;
(statearr_33965_34006[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (24))){
var inst_33949 = (state_33959[(2)]);
var state_33959__$1 = state_33959;
var statearr_33966_34007 = state_33959__$1;
(statearr_33966_34007[(2)] = inst_33949);

(statearr_33966_34007[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (4))){
var inst_33957 = (state_33959[(2)]);
var state_33959__$1 = state_33959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33959__$1,inst_33957);
} else {
if((state_val_33960 === (15))){
var inst_33909 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33910 = figwheel.client.format_messages.call(null,inst_33909);
var inst_33911 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33912 = figwheel.client.heads_up.display_error.call(null,inst_33910,inst_33911);
var state_33959__$1 = state_33959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33959__$1,(18),inst_33912);
} else {
if((state_val_33960 === (21))){
var inst_33951 = (state_33959[(2)]);
var state_33959__$1 = state_33959;
var statearr_33967_34008 = state_33959__$1;
(statearr_33967_34008[(2)] = inst_33951);

(statearr_33967_34008[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (31))){
var inst_33940 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33959__$1 = state_33959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33959__$1,(34),inst_33940);
} else {
if((state_val_33960 === (32))){
var state_33959__$1 = state_33959;
var statearr_33968_34009 = state_33959__$1;
(statearr_33968_34009[(2)] = null);

(statearr_33968_34009[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (33))){
var inst_33945 = (state_33959[(2)]);
var state_33959__$1 = state_33959;
var statearr_33969_34010 = state_33959__$1;
(statearr_33969_34010[(2)] = inst_33945);

(statearr_33969_34010[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (13))){
var inst_33899 = (state_33959[(2)]);
var inst_33900 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33901 = figwheel.client.format_messages.call(null,inst_33900);
var inst_33902 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33903 = figwheel.client.heads_up.display_error.call(null,inst_33901,inst_33902);
var state_33959__$1 = (function (){var statearr_33970 = state_33959;
(statearr_33970[(7)] = inst_33899);

return statearr_33970;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33959__$1,(14),inst_33903);
} else {
if((state_val_33960 === (22))){
var inst_33923 = figwheel.client.heads_up.clear.call(null);
var state_33959__$1 = state_33959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33959__$1,(25),inst_33923);
} else {
if((state_val_33960 === (29))){
var inst_33947 = (state_33959[(2)]);
var state_33959__$1 = state_33959;
var statearr_33971_34011 = state_33959__$1;
(statearr_33971_34011[(2)] = inst_33947);

(statearr_33971_34011[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (6))){
var inst_33889 = figwheel.client.heads_up.clear.call(null);
var state_33959__$1 = state_33959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33959__$1,(9),inst_33889);
} else {
if((state_val_33960 === (28))){
var inst_33938 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33959__$1 = state_33959;
if(cljs.core.truth_(inst_33938)){
var statearr_33972_34012 = state_33959__$1;
(statearr_33972_34012[(1)] = (31));

} else {
var statearr_33973_34013 = state_33959__$1;
(statearr_33973_34013[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (25))){
var inst_33925 = (state_33959[(2)]);
var inst_33926 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33927 = figwheel.client.heads_up.display_warning.call(null,inst_33926);
var state_33959__$1 = (function (){var statearr_33974 = state_33959;
(statearr_33974[(8)] = inst_33925);

return statearr_33974;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33959__$1,(26),inst_33927);
} else {
if((state_val_33960 === (34))){
var inst_33942 = (state_33959[(2)]);
var state_33959__$1 = state_33959;
var statearr_33975_34014 = state_33959__$1;
(statearr_33975_34014[(2)] = inst_33942);

(statearr_33975_34014[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (17))){
var inst_33953 = (state_33959[(2)]);
var state_33959__$1 = state_33959;
var statearr_33976_34015 = state_33959__$1;
(statearr_33976_34015[(2)] = inst_33953);

(statearr_33976_34015[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (3))){
var inst_33895 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33959__$1 = state_33959;
if(cljs.core.truth_(inst_33895)){
var statearr_33977_34016 = state_33959__$1;
(statearr_33977_34016[(1)] = (10));

} else {
var statearr_33978_34017 = state_33959__$1;
(statearr_33978_34017[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (12))){
var inst_33955 = (state_33959[(2)]);
var state_33959__$1 = state_33959;
var statearr_33979_34018 = state_33959__$1;
(statearr_33979_34018[(2)] = inst_33955);

(statearr_33979_34018[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (2))){
var inst_33883 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33959__$1 = state_33959;
if(cljs.core.truth_(inst_33883)){
var statearr_33980_34019 = state_33959__$1;
(statearr_33980_34019[(1)] = (5));

} else {
var statearr_33981_34020 = state_33959__$1;
(statearr_33981_34020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (23))){
var inst_33931 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33959__$1 = state_33959;
if(cljs.core.truth_(inst_33931)){
var statearr_33982_34021 = state_33959__$1;
(statearr_33982_34021[(1)] = (27));

} else {
var statearr_33983_34022 = state_33959__$1;
(statearr_33983_34022[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (19))){
var inst_33918 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33919 = figwheel.client.heads_up.append_message.call(null,inst_33918);
var state_33959__$1 = state_33959;
var statearr_33984_34023 = state_33959__$1;
(statearr_33984_34023[(2)] = inst_33919);

(statearr_33984_34023[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (11))){
var inst_33907 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33959__$1 = state_33959;
if(cljs.core.truth_(inst_33907)){
var statearr_33985_34024 = state_33959__$1;
(statearr_33985_34024[(1)] = (15));

} else {
var statearr_33986_34025 = state_33959__$1;
(statearr_33986_34025[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (9))){
var inst_33891 = (state_33959[(2)]);
var state_33959__$1 = state_33959;
var statearr_33987_34026 = state_33959__$1;
(statearr_33987_34026[(2)] = inst_33891);

(statearr_33987_34026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (5))){
var inst_33885 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33959__$1 = state_33959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33959__$1,(8),inst_33885);
} else {
if((state_val_33960 === (14))){
var inst_33905 = (state_33959[(2)]);
var state_33959__$1 = state_33959;
var statearr_33988_34027 = state_33959__$1;
(statearr_33988_34027[(2)] = inst_33905);

(statearr_33988_34027[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (26))){
var inst_33929 = (state_33959[(2)]);
var state_33959__$1 = state_33959;
var statearr_33989_34028 = state_33959__$1;
(statearr_33989_34028[(2)] = inst_33929);

(statearr_33989_34028[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (16))){
var inst_33916 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33959__$1 = state_33959;
if(cljs.core.truth_(inst_33916)){
var statearr_33990_34029 = state_33959__$1;
(statearr_33990_34029[(1)] = (19));

} else {
var statearr_33991_34030 = state_33959__$1;
(statearr_33991_34030[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (30))){
var inst_33936 = (state_33959[(2)]);
var state_33959__$1 = state_33959;
var statearr_33992_34031 = state_33959__$1;
(statearr_33992_34031[(2)] = inst_33936);

(statearr_33992_34031[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (10))){
var inst_33897 = figwheel.client.heads_up.clear.call(null);
var state_33959__$1 = state_33959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33959__$1,(13),inst_33897);
} else {
if((state_val_33960 === (18))){
var inst_33914 = (state_33959[(2)]);
var state_33959__$1 = state_33959;
var statearr_33993_34032 = state_33959__$1;
(statearr_33993_34032[(2)] = inst_33914);

(statearr_33993_34032[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (8))){
var inst_33887 = (state_33959[(2)]);
var state_33959__$1 = state_33959;
var statearr_33994_34033 = state_33959__$1;
(statearr_33994_34033[(2)] = inst_33887);

(statearr_33994_34033[(1)] = (7));


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
});})(c__28903__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28841__auto__,c__28903__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28842__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28842__auto____0 = (function (){
var statearr_33998 = [null,null,null,null,null,null,null,null,null];
(statearr_33998[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28842__auto__);

(statearr_33998[(1)] = (1));

return statearr_33998;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28842__auto____1 = (function (state_33959){
while(true){
var ret_value__28843__auto__ = (function (){try{while(true){
var result__28844__auto__ = switch__28841__auto__.call(null,state_33959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28844__auto__;
}
break;
}
}catch (e33999){if((e33999 instanceof Object)){
var ex__28845__auto__ = e33999;
var statearr_34000_34034 = state_33959;
(statearr_34000_34034[(5)] = ex__28845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34035 = state_33959;
state_33959 = G__34035;
continue;
} else {
return ret_value__28843__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28842__auto__ = function(state_33959){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28842__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28842__auto____1.call(this,state_33959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28842__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28842__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28842__auto__;
})()
;})(switch__28841__auto__,c__28903__auto__,msg_hist,msg_names,msg))
})();
var state__28905__auto__ = (function (){var statearr_34001 = f__28904__auto__.call(null);
(statearr_34001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28903__auto__);

return statearr_34001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28905__auto__);
});})(c__28903__auto__,msg_hist,msg_names,msg))
);

return c__28903__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28903__auto___34098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28903__auto___34098,ch){
return (function (){
var f__28904__auto__ = (function (){var switch__28841__auto__ = ((function (c__28903__auto___34098,ch){
return (function (state_34081){
var state_val_34082 = (state_34081[(1)]);
if((state_val_34082 === (1))){
var state_34081__$1 = state_34081;
var statearr_34083_34099 = state_34081__$1;
(statearr_34083_34099[(2)] = null);

(statearr_34083_34099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (2))){
var state_34081__$1 = state_34081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34081__$1,(4),ch);
} else {
if((state_val_34082 === (3))){
var inst_34079 = (state_34081[(2)]);
var state_34081__$1 = state_34081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34081__$1,inst_34079);
} else {
if((state_val_34082 === (4))){
var inst_34069 = (state_34081[(7)]);
var inst_34069__$1 = (state_34081[(2)]);
var state_34081__$1 = (function (){var statearr_34084 = state_34081;
(statearr_34084[(7)] = inst_34069__$1);

return statearr_34084;
})();
if(cljs.core.truth_(inst_34069__$1)){
var statearr_34085_34100 = state_34081__$1;
(statearr_34085_34100[(1)] = (5));

} else {
var statearr_34086_34101 = state_34081__$1;
(statearr_34086_34101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (5))){
var inst_34069 = (state_34081[(7)]);
var inst_34071 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34069);
var state_34081__$1 = state_34081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34081__$1,(8),inst_34071);
} else {
if((state_val_34082 === (6))){
var state_34081__$1 = state_34081;
var statearr_34087_34102 = state_34081__$1;
(statearr_34087_34102[(2)] = null);

(statearr_34087_34102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (7))){
var inst_34077 = (state_34081[(2)]);
var state_34081__$1 = state_34081;
var statearr_34088_34103 = state_34081__$1;
(statearr_34088_34103[(2)] = inst_34077);

(statearr_34088_34103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (8))){
var inst_34073 = (state_34081[(2)]);
var state_34081__$1 = (function (){var statearr_34089 = state_34081;
(statearr_34089[(8)] = inst_34073);

return statearr_34089;
})();
var statearr_34090_34104 = state_34081__$1;
(statearr_34090_34104[(2)] = null);

(statearr_34090_34104[(1)] = (2));


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
});})(c__28903__auto___34098,ch))
;
return ((function (switch__28841__auto__,c__28903__auto___34098,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28842__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28842__auto____0 = (function (){
var statearr_34094 = [null,null,null,null,null,null,null,null,null];
(statearr_34094[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28842__auto__);

(statearr_34094[(1)] = (1));

return statearr_34094;
});
var figwheel$client$heads_up_plugin_$_state_machine__28842__auto____1 = (function (state_34081){
while(true){
var ret_value__28843__auto__ = (function (){try{while(true){
var result__28844__auto__ = switch__28841__auto__.call(null,state_34081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28844__auto__;
}
break;
}
}catch (e34095){if((e34095 instanceof Object)){
var ex__28845__auto__ = e34095;
var statearr_34096_34105 = state_34081;
(statearr_34096_34105[(5)] = ex__28845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34106 = state_34081;
state_34081 = G__34106;
continue;
} else {
return ret_value__28843__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28842__auto__ = function(state_34081){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28842__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28842__auto____1.call(this,state_34081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28842__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28842__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28842__auto__;
})()
;})(switch__28841__auto__,c__28903__auto___34098,ch))
})();
var state__28905__auto__ = (function (){var statearr_34097 = f__28904__auto__.call(null);
(statearr_34097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28903__auto___34098);

return statearr_34097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28905__auto__);
});})(c__28903__auto___34098,ch))
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
var c__28903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28903__auto__){
return (function (){
var f__28904__auto__ = (function (){var switch__28841__auto__ = ((function (c__28903__auto__){
return (function (state_34127){
var state_val_34128 = (state_34127[(1)]);
if((state_val_34128 === (1))){
var inst_34122 = cljs.core.async.timeout.call(null,(3000));
var state_34127__$1 = state_34127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34127__$1,(2),inst_34122);
} else {
if((state_val_34128 === (2))){
var inst_34124 = (state_34127[(2)]);
var inst_34125 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34127__$1 = (function (){var statearr_34129 = state_34127;
(statearr_34129[(7)] = inst_34124);

return statearr_34129;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34127__$1,inst_34125);
} else {
return null;
}
}
});})(c__28903__auto__))
;
return ((function (switch__28841__auto__,c__28903__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28842__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28842__auto____0 = (function (){
var statearr_34133 = [null,null,null,null,null,null,null,null];
(statearr_34133[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28842__auto__);

(statearr_34133[(1)] = (1));

return statearr_34133;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28842__auto____1 = (function (state_34127){
while(true){
var ret_value__28843__auto__ = (function (){try{while(true){
var result__28844__auto__ = switch__28841__auto__.call(null,state_34127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28844__auto__;
}
break;
}
}catch (e34134){if((e34134 instanceof Object)){
var ex__28845__auto__ = e34134;
var statearr_34135_34137 = state_34127;
(statearr_34135_34137[(5)] = ex__28845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34138 = state_34127;
state_34127 = G__34138;
continue;
} else {
return ret_value__28843__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28842__auto__ = function(state_34127){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28842__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28842__auto____1.call(this,state_34127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28842__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28842__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28842__auto__;
})()
;})(switch__28841__auto__,c__28903__auto__))
})();
var state__28905__auto__ = (function (){var statearr_34136 = f__28904__auto__.call(null);
(statearr_34136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28903__auto__);

return statearr_34136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28905__auto__);
});})(c__28903__auto__))
);

return c__28903__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__34139){
var map__34145 = p__34139;
var map__34145__$1 = ((cljs.core.seq_QMARK_.call(null,map__34145))?cljs.core.apply.call(null,cljs.core.hash_map,map__34145):map__34145);
var ed = map__34145__$1;
var formatted_exception = cljs.core.get.call(null,map__34145__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__34145__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__34145__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__34146_34150 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__34147_34151 = null;
var count__34148_34152 = (0);
var i__34149_34153 = (0);
while(true){
if((i__34149_34153 < count__34148_34152)){
var msg_34154 = cljs.core._nth.call(null,chunk__34147_34151,i__34149_34153);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34154);

var G__34155 = seq__34146_34150;
var G__34156 = chunk__34147_34151;
var G__34157 = count__34148_34152;
var G__34158 = (i__34149_34153 + (1));
seq__34146_34150 = G__34155;
chunk__34147_34151 = G__34156;
count__34148_34152 = G__34157;
i__34149_34153 = G__34158;
continue;
} else {
var temp__4423__auto___34159 = cljs.core.seq.call(null,seq__34146_34150);
if(temp__4423__auto___34159){
var seq__34146_34160__$1 = temp__4423__auto___34159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34146_34160__$1)){
var c__25771__auto___34161 = cljs.core.chunk_first.call(null,seq__34146_34160__$1);
var G__34162 = cljs.core.chunk_rest.call(null,seq__34146_34160__$1);
var G__34163 = c__25771__auto___34161;
var G__34164 = cljs.core.count.call(null,c__25771__auto___34161);
var G__34165 = (0);
seq__34146_34150 = G__34162;
chunk__34147_34151 = G__34163;
count__34148_34152 = G__34164;
i__34149_34153 = G__34165;
continue;
} else {
var msg_34166 = cljs.core.first.call(null,seq__34146_34160__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34166);

var G__34167 = cljs.core.next.call(null,seq__34146_34160__$1);
var G__34168 = null;
var G__34169 = (0);
var G__34170 = (0);
seq__34146_34150 = G__34167;
chunk__34147_34151 = G__34168;
count__34148_34152 = G__34169;
i__34149_34153 = G__34170;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__34171){
var map__34173 = p__34171;
var map__34173__$1 = ((cljs.core.seq_QMARK_.call(null,map__34173))?cljs.core.apply.call(null,cljs.core.hash_map,map__34173):map__34173);
var w = map__34173__$1;
var message = cljs.core.get.call(null,map__34173__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__34180 = cljs.core.seq.call(null,plugins);
var chunk__34181 = null;
var count__34182 = (0);
var i__34183 = (0);
while(true){
if((i__34183 < count__34182)){
var vec__34184 = cljs.core._nth.call(null,chunk__34181,i__34183);
var k = cljs.core.nth.call(null,vec__34184,(0),null);
var plugin = cljs.core.nth.call(null,vec__34184,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34186 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34180,chunk__34181,count__34182,i__34183,pl_34186,vec__34184,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34186.call(null,msg_hist);
});})(seq__34180,chunk__34181,count__34182,i__34183,pl_34186,vec__34184,k,plugin))
);
} else {
}

var G__34187 = seq__34180;
var G__34188 = chunk__34181;
var G__34189 = count__34182;
var G__34190 = (i__34183 + (1));
seq__34180 = G__34187;
chunk__34181 = G__34188;
count__34182 = G__34189;
i__34183 = G__34190;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__34180);
if(temp__4423__auto__){
var seq__34180__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34180__$1)){
var c__25771__auto__ = cljs.core.chunk_first.call(null,seq__34180__$1);
var G__34191 = cljs.core.chunk_rest.call(null,seq__34180__$1);
var G__34192 = c__25771__auto__;
var G__34193 = cljs.core.count.call(null,c__25771__auto__);
var G__34194 = (0);
seq__34180 = G__34191;
chunk__34181 = G__34192;
count__34182 = G__34193;
i__34183 = G__34194;
continue;
} else {
var vec__34185 = cljs.core.first.call(null,seq__34180__$1);
var k = cljs.core.nth.call(null,vec__34185,(0),null);
var plugin = cljs.core.nth.call(null,vec__34185,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34195 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34180,chunk__34181,count__34182,i__34183,pl_34195,vec__34185,k,plugin,seq__34180__$1,temp__4423__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34195.call(null,msg_hist);
});})(seq__34180,chunk__34181,count__34182,i__34183,pl_34195,vec__34185,k,plugin,seq__34180__$1,temp__4423__auto__))
);
} else {
}

var G__34196 = cljs.core.next.call(null,seq__34180__$1);
var G__34197 = null;
var G__34198 = (0);
var G__34199 = (0);
seq__34180 = G__34196;
chunk__34181 = G__34197;
count__34182 = G__34198;
i__34183 = G__34199;
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
var G__34201 = arguments.length;
switch (G__34201) {
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

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__34204){
var map__34205 = p__34204;
var map__34205__$1 = ((cljs.core.seq_QMARK_.call(null,map__34205))?cljs.core.apply.call(null,cljs.core.hash_map,map__34205):map__34205);
var opts = map__34205__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq34203){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34203));
});

//# sourceMappingURL=client.js.map