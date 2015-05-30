// Compiled by ClojureScript 0.0-3291 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__26026__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26026__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__35005_35013 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__35006_35014 = null;
var count__35007_35015 = (0);
var i__35008_35016 = (0);
while(true){
if((i__35008_35016 < count__35007_35015)){
var k_35017 = cljs.core._nth.call(null,chunk__35006_35014,i__35008_35016);
e.setAttribute(cljs.core.name.call(null,k_35017),cljs.core.get.call(null,attrs,k_35017));

var G__35018 = seq__35005_35013;
var G__35019 = chunk__35006_35014;
var G__35020 = count__35007_35015;
var G__35021 = (i__35008_35016 + (1));
seq__35005_35013 = G__35018;
chunk__35006_35014 = G__35019;
count__35007_35015 = G__35020;
i__35008_35016 = G__35021;
continue;
} else {
var temp__4423__auto___35022 = cljs.core.seq.call(null,seq__35005_35013);
if(temp__4423__auto___35022){
var seq__35005_35023__$1 = temp__4423__auto___35022;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35005_35023__$1)){
var c__25771__auto___35024 = cljs.core.chunk_first.call(null,seq__35005_35023__$1);
var G__35025 = cljs.core.chunk_rest.call(null,seq__35005_35023__$1);
var G__35026 = c__25771__auto___35024;
var G__35027 = cljs.core.count.call(null,c__25771__auto___35024);
var G__35028 = (0);
seq__35005_35013 = G__35025;
chunk__35006_35014 = G__35026;
count__35007_35015 = G__35027;
i__35008_35016 = G__35028;
continue;
} else {
var k_35029 = cljs.core.first.call(null,seq__35005_35023__$1);
e.setAttribute(cljs.core.name.call(null,k_35029),cljs.core.get.call(null,attrs,k_35029));

var G__35030 = cljs.core.next.call(null,seq__35005_35023__$1);
var G__35031 = null;
var G__35032 = (0);
var G__35033 = (0);
seq__35005_35013 = G__35030;
chunk__35006_35014 = G__35031;
count__35007_35015 = G__35032;
i__35008_35016 = G__35033;
continue;
}
} else {
}
}
break;
}

var seq__35009_35034 = cljs.core.seq.call(null,children);
var chunk__35010_35035 = null;
var count__35011_35036 = (0);
var i__35012_35037 = (0);
while(true){
if((i__35012_35037 < count__35011_35036)){
var ch_35038 = cljs.core._nth.call(null,chunk__35010_35035,i__35012_35037);
e.appendChild(ch_35038);

var G__35039 = seq__35009_35034;
var G__35040 = chunk__35010_35035;
var G__35041 = count__35011_35036;
var G__35042 = (i__35012_35037 + (1));
seq__35009_35034 = G__35039;
chunk__35010_35035 = G__35040;
count__35011_35036 = G__35041;
i__35012_35037 = G__35042;
continue;
} else {
var temp__4423__auto___35043 = cljs.core.seq.call(null,seq__35009_35034);
if(temp__4423__auto___35043){
var seq__35009_35044__$1 = temp__4423__auto___35043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35009_35044__$1)){
var c__25771__auto___35045 = cljs.core.chunk_first.call(null,seq__35009_35044__$1);
var G__35046 = cljs.core.chunk_rest.call(null,seq__35009_35044__$1);
var G__35047 = c__25771__auto___35045;
var G__35048 = cljs.core.count.call(null,c__25771__auto___35045);
var G__35049 = (0);
seq__35009_35034 = G__35046;
chunk__35010_35035 = G__35047;
count__35011_35036 = G__35048;
i__35012_35037 = G__35049;
continue;
} else {
var ch_35050 = cljs.core.first.call(null,seq__35009_35044__$1);
e.appendChild(ch_35050);

var G__35051 = cljs.core.next.call(null,seq__35009_35044__$1);
var G__35052 = null;
var G__35053 = (0);
var G__35054 = (0);
seq__35009_35034 = G__35051;
chunk__35010_35035 = G__35052;
count__35011_35036 = G__35053;
i__35012_35037 = G__35054;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq35002){
var G__35003 = cljs.core.first.call(null,seq35002);
var seq35002__$1 = cljs.core.next.call(null,seq35002);
var G__35004 = cljs.core.first.call(null,seq35002__$1);
var seq35002__$2 = cljs.core.next.call(null,seq35002__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__35003,G__35004,seq35002__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__25881__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25882__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25883__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25884__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25885__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__25881__auto__,prefer_table__25882__auto__,method_cache__25883__auto__,cached_hierarchy__25884__auto__,hierarchy__25885__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__25881__auto__,prefer_table__25882__auto__,method_cache__25883__auto__,cached_hierarchy__25884__auto__,hierarchy__25885__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25885__auto__,method_table__25881__auto__,prefer_table__25882__auto__,method_cache__25883__auto__,cached_hierarchy__25884__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_35055 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_35055.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_35055.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_35055.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_35055);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__35056,st_map){
var map__35060 = p__35056;
var map__35060__$1 = ((cljs.core.seq_QMARK_.call(null,map__35060))?cljs.core.apply.call(null,cljs.core.hash_map,map__35060):map__35060);
var container_el = cljs.core.get.call(null,map__35060__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__35060,map__35060__$1,container_el){
return (function (p__35061){
var vec__35062 = p__35061;
var k = cljs.core.nth.call(null,vec__35062,(0),null);
var v = cljs.core.nth.call(null,vec__35062,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__35060,map__35060__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__35063,dom_str){
var map__35065 = p__35063;
var map__35065__$1 = ((cljs.core.seq_QMARK_.call(null,map__35065))?cljs.core.apply.call(null,cljs.core.hash_map,map__35065):map__35065);
var c = map__35065__$1;
var content_area_el = cljs.core.get.call(null,map__35065__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__35066){
var map__35068 = p__35066;
var map__35068__$1 = ((cljs.core.seq_QMARK_.call(null,map__35068))?cljs.core.apply.call(null,cljs.core.hash_map,map__35068):map__35068);
var content_area_el = cljs.core.get.call(null,map__35068__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__29107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29107__auto__){
return (function (){
var f__29108__auto__ = (function (){var switch__29045__auto__ = ((function (c__29107__auto__){
return (function (state_35110){
var state_val_35111 = (state_35110[(1)]);
if((state_val_35111 === (1))){
var inst_35095 = (state_35110[(7)]);
var inst_35095__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_35096 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_35097 = ["10px","10px","100%","68px","1.0"];
var inst_35098 = cljs.core.PersistentHashMap.fromArrays(inst_35096,inst_35097);
var inst_35099 = cljs.core.merge.call(null,inst_35098,style);
var inst_35100 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35095__$1,inst_35099);
var inst_35101 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_35095__$1,msg);
var inst_35102 = cljs.core.async.timeout.call(null,(300));
var state_35110__$1 = (function (){var statearr_35112 = state_35110;
(statearr_35112[(7)] = inst_35095__$1);

(statearr_35112[(8)] = inst_35101);

(statearr_35112[(9)] = inst_35100);

return statearr_35112;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35110__$1,(2),inst_35102);
} else {
if((state_val_35111 === (2))){
var inst_35095 = (state_35110[(7)]);
var inst_35104 = (state_35110[(2)]);
var inst_35105 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_35106 = ["auto"];
var inst_35107 = cljs.core.PersistentHashMap.fromArrays(inst_35105,inst_35106);
var inst_35108 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35095,inst_35107);
var state_35110__$1 = (function (){var statearr_35113 = state_35110;
(statearr_35113[(10)] = inst_35104);

return statearr_35113;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35110__$1,inst_35108);
} else {
return null;
}
}
});})(c__29107__auto__))
;
return ((function (switch__29045__auto__,c__29107__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__29046__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__29046__auto____0 = (function (){
var statearr_35117 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35117[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__29046__auto__);

(statearr_35117[(1)] = (1));

return statearr_35117;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__29046__auto____1 = (function (state_35110){
while(true){
var ret_value__29047__auto__ = (function (){try{while(true){
var result__29048__auto__ = switch__29045__auto__.call(null,state_35110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29048__auto__;
}
break;
}
}catch (e35118){if((e35118 instanceof Object)){
var ex__29049__auto__ = e35118;
var statearr_35119_35121 = state_35110;
(statearr_35119_35121[(5)] = ex__29049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35122 = state_35110;
state_35110 = G__35122;
continue;
} else {
return ret_value__29047__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__29046__auto__ = function(state_35110){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__29046__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__29046__auto____1.call(this,state_35110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__29046__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__29046__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__29046__auto__;
})()
;})(switch__29045__auto__,c__29107__auto__))
})();
var state__29109__auto__ = (function (){var statearr_35120 = f__29108__auto__.call(null);
(statearr_35120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29107__auto__);

return statearr_35120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29109__auto__);
});})(c__29107__auto__))
);

return c__29107__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4421__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4421__auto__)){
var vec__35124 = temp__4421__auto__;
var f = cljs.core.nth.call(null,vec__35124,(0),null);
var ln = cljs.core.nth.call(null,vec__35124,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__35127 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__35127,(0),null);
var file_line = cljs.core.nth.call(null,vec__35127,(1),null);
var file_column = cljs.core.nth.call(null,vec__35127,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__35127,file_name,file_line,file_column){
return (function (p1__35125_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__35125_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__35127,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__24986__auto__ = file_line;
if(cljs.core.truth_(or__24986__auto__)){
return or__24986__auto__;
} else {
var and__24974__auto__ = cause;
if(cljs.core.truth_(and__24974__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__24974__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__35129 = figwheel.client.heads_up.ensure_container.call(null);
var map__35129__$1 = ((cljs.core.seq_QMARK_.call(null,map__35129))?cljs.core.apply.call(null,cljs.core.hash_map,map__35129):map__35129);
var content_area_el = cljs.core.get.call(null,map__35129__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__29107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29107__auto__){
return (function (){
var f__29108__auto__ = (function (){var switch__29045__auto__ = ((function (c__29107__auto__){
return (function (state_35176){
var state_val_35177 = (state_35176[(1)]);
if((state_val_35177 === (1))){
var inst_35159 = (state_35176[(7)]);
var inst_35159__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_35160 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_35161 = ["0.0"];
var inst_35162 = cljs.core.PersistentHashMap.fromArrays(inst_35160,inst_35161);
var inst_35163 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35159__$1,inst_35162);
var inst_35164 = cljs.core.async.timeout.call(null,(300));
var state_35176__$1 = (function (){var statearr_35178 = state_35176;
(statearr_35178[(7)] = inst_35159__$1);

(statearr_35178[(8)] = inst_35163);

return statearr_35178;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35176__$1,(2),inst_35164);
} else {
if((state_val_35177 === (2))){
var inst_35159 = (state_35176[(7)]);
var inst_35166 = (state_35176[(2)]);
var inst_35167 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_35168 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_35169 = cljs.core.PersistentHashMap.fromArrays(inst_35167,inst_35168);
var inst_35170 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35159,inst_35169);
var inst_35171 = cljs.core.async.timeout.call(null,(200));
var state_35176__$1 = (function (){var statearr_35179 = state_35176;
(statearr_35179[(9)] = inst_35170);

(statearr_35179[(10)] = inst_35166);

return statearr_35179;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35176__$1,(3),inst_35171);
} else {
if((state_val_35177 === (3))){
var inst_35159 = (state_35176[(7)]);
var inst_35173 = (state_35176[(2)]);
var inst_35174 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_35159,"");
var state_35176__$1 = (function (){var statearr_35180 = state_35176;
(statearr_35180[(11)] = inst_35173);

return statearr_35180;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35176__$1,inst_35174);
} else {
return null;
}
}
}
});})(c__29107__auto__))
;
return ((function (switch__29045__auto__,c__29107__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__29046__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__29046__auto____0 = (function (){
var statearr_35184 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35184[(0)] = figwheel$client$heads_up$clear_$_state_machine__29046__auto__);

(statearr_35184[(1)] = (1));

return statearr_35184;
});
var figwheel$client$heads_up$clear_$_state_machine__29046__auto____1 = (function (state_35176){
while(true){
var ret_value__29047__auto__ = (function (){try{while(true){
var result__29048__auto__ = switch__29045__auto__.call(null,state_35176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29048__auto__;
}
break;
}
}catch (e35185){if((e35185 instanceof Object)){
var ex__29049__auto__ = e35185;
var statearr_35186_35188 = state_35176;
(statearr_35186_35188[(5)] = ex__29049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35189 = state_35176;
state_35176 = G__35189;
continue;
} else {
return ret_value__29047__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__29046__auto__ = function(state_35176){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__29046__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__29046__auto____1.call(this,state_35176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__29046__auto____0;
figwheel$client$heads_up$clear_$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__29046__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__29046__auto__;
})()
;})(switch__29045__auto__,c__29107__auto__))
})();
var state__29109__auto__ = (function (){var statearr_35187 = f__29108__auto__.call(null);
(statearr_35187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29107__auto__);

return statearr_35187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29109__auto__);
});})(c__29107__auto__))
);

return c__29107__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__29107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29107__auto__){
return (function (){
var f__29108__auto__ = (function (){var switch__29045__auto__ = ((function (c__29107__auto__){
return (function (state_35221){
var state_val_35222 = (state_35221[(1)]);
if((state_val_35222 === (1))){
var inst_35211 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_35221__$1 = state_35221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35221__$1,(2),inst_35211);
} else {
if((state_val_35222 === (2))){
var inst_35213 = (state_35221[(2)]);
var inst_35214 = cljs.core.async.timeout.call(null,(400));
var state_35221__$1 = (function (){var statearr_35223 = state_35221;
(statearr_35223[(7)] = inst_35213);

return statearr_35223;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35221__$1,(3),inst_35214);
} else {
if((state_val_35222 === (3))){
var inst_35216 = (state_35221[(2)]);
var inst_35217 = figwheel.client.heads_up.clear.call(null);
var state_35221__$1 = (function (){var statearr_35224 = state_35221;
(statearr_35224[(8)] = inst_35216);

return statearr_35224;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35221__$1,(4),inst_35217);
} else {
if((state_val_35222 === (4))){
var inst_35219 = (state_35221[(2)]);
var state_35221__$1 = state_35221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35221__$1,inst_35219);
} else {
return null;
}
}
}
}
});})(c__29107__auto__))
;
return ((function (switch__29045__auto__,c__29107__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__29046__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__29046__auto____0 = (function (){
var statearr_35228 = [null,null,null,null,null,null,null,null,null];
(statearr_35228[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__29046__auto__);

(statearr_35228[(1)] = (1));

return statearr_35228;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__29046__auto____1 = (function (state_35221){
while(true){
var ret_value__29047__auto__ = (function (){try{while(true){
var result__29048__auto__ = switch__29045__auto__.call(null,state_35221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29048__auto__;
}
break;
}
}catch (e35229){if((e35229 instanceof Object)){
var ex__29049__auto__ = e35229;
var statearr_35230_35232 = state_35221;
(statearr_35230_35232[(5)] = ex__29049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35233 = state_35221;
state_35221 = G__35233;
continue;
} else {
return ret_value__29047__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__29046__auto__ = function(state_35221){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__29046__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__29046__auto____1.call(this,state_35221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__29046__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__29046__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__29046__auto__;
})()
;})(switch__29045__auto__,c__29107__auto__))
})();
var state__29109__auto__ = (function (){var statearr_35231 = f__29108__auto__.call(null);
(statearr_35231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29107__auto__);

return statearr_35231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29109__auto__);
});})(c__29107__auto__))
);

return c__29107__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map