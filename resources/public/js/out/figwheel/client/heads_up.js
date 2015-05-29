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
var seq__34218_34226 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__34219_34227 = null;
var count__34220_34228 = (0);
var i__34221_34229 = (0);
while(true){
if((i__34221_34229 < count__34220_34228)){
var k_34230 = cljs.core._nth.call(null,chunk__34219_34227,i__34221_34229);
e.setAttribute(cljs.core.name.call(null,k_34230),cljs.core.get.call(null,attrs,k_34230));

var G__34231 = seq__34218_34226;
var G__34232 = chunk__34219_34227;
var G__34233 = count__34220_34228;
var G__34234 = (i__34221_34229 + (1));
seq__34218_34226 = G__34231;
chunk__34219_34227 = G__34232;
count__34220_34228 = G__34233;
i__34221_34229 = G__34234;
continue;
} else {
var temp__4423__auto___34235 = cljs.core.seq.call(null,seq__34218_34226);
if(temp__4423__auto___34235){
var seq__34218_34236__$1 = temp__4423__auto___34235;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34218_34236__$1)){
var c__25771__auto___34237 = cljs.core.chunk_first.call(null,seq__34218_34236__$1);
var G__34238 = cljs.core.chunk_rest.call(null,seq__34218_34236__$1);
var G__34239 = c__25771__auto___34237;
var G__34240 = cljs.core.count.call(null,c__25771__auto___34237);
var G__34241 = (0);
seq__34218_34226 = G__34238;
chunk__34219_34227 = G__34239;
count__34220_34228 = G__34240;
i__34221_34229 = G__34241;
continue;
} else {
var k_34242 = cljs.core.first.call(null,seq__34218_34236__$1);
e.setAttribute(cljs.core.name.call(null,k_34242),cljs.core.get.call(null,attrs,k_34242));

var G__34243 = cljs.core.next.call(null,seq__34218_34236__$1);
var G__34244 = null;
var G__34245 = (0);
var G__34246 = (0);
seq__34218_34226 = G__34243;
chunk__34219_34227 = G__34244;
count__34220_34228 = G__34245;
i__34221_34229 = G__34246;
continue;
}
} else {
}
}
break;
}

var seq__34222_34247 = cljs.core.seq.call(null,children);
var chunk__34223_34248 = null;
var count__34224_34249 = (0);
var i__34225_34250 = (0);
while(true){
if((i__34225_34250 < count__34224_34249)){
var ch_34251 = cljs.core._nth.call(null,chunk__34223_34248,i__34225_34250);
e.appendChild(ch_34251);

var G__34252 = seq__34222_34247;
var G__34253 = chunk__34223_34248;
var G__34254 = count__34224_34249;
var G__34255 = (i__34225_34250 + (1));
seq__34222_34247 = G__34252;
chunk__34223_34248 = G__34253;
count__34224_34249 = G__34254;
i__34225_34250 = G__34255;
continue;
} else {
var temp__4423__auto___34256 = cljs.core.seq.call(null,seq__34222_34247);
if(temp__4423__auto___34256){
var seq__34222_34257__$1 = temp__4423__auto___34256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34222_34257__$1)){
var c__25771__auto___34258 = cljs.core.chunk_first.call(null,seq__34222_34257__$1);
var G__34259 = cljs.core.chunk_rest.call(null,seq__34222_34257__$1);
var G__34260 = c__25771__auto___34258;
var G__34261 = cljs.core.count.call(null,c__25771__auto___34258);
var G__34262 = (0);
seq__34222_34247 = G__34259;
chunk__34223_34248 = G__34260;
count__34224_34249 = G__34261;
i__34225_34250 = G__34262;
continue;
} else {
var ch_34263 = cljs.core.first.call(null,seq__34222_34257__$1);
e.appendChild(ch_34263);

var G__34264 = cljs.core.next.call(null,seq__34222_34257__$1);
var G__34265 = null;
var G__34266 = (0);
var G__34267 = (0);
seq__34222_34247 = G__34264;
chunk__34223_34248 = G__34265;
count__34224_34249 = G__34266;
i__34225_34250 = G__34267;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq34215){
var G__34216 = cljs.core.first.call(null,seq34215);
var seq34215__$1 = cljs.core.next.call(null,seq34215);
var G__34217 = cljs.core.first.call(null,seq34215__$1);
var seq34215__$2 = cljs.core.next.call(null,seq34215__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__34216,G__34217,seq34215__$2);
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
var el_34268 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_34268.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_34268.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_34268.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_34268);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__34269,st_map){
var map__34273 = p__34269;
var map__34273__$1 = ((cljs.core.seq_QMARK_.call(null,map__34273))?cljs.core.apply.call(null,cljs.core.hash_map,map__34273):map__34273);
var container_el = cljs.core.get.call(null,map__34273__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__34273,map__34273__$1,container_el){
return (function (p__34274){
var vec__34275 = p__34274;
var k = cljs.core.nth.call(null,vec__34275,(0),null);
var v = cljs.core.nth.call(null,vec__34275,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__34273,map__34273__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__34276,dom_str){
var map__34278 = p__34276;
var map__34278__$1 = ((cljs.core.seq_QMARK_.call(null,map__34278))?cljs.core.apply.call(null,cljs.core.hash_map,map__34278):map__34278);
var c = map__34278__$1;
var content_area_el = cljs.core.get.call(null,map__34278__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__34279){
var map__34281 = p__34279;
var map__34281__$1 = ((cljs.core.seq_QMARK_.call(null,map__34281))?cljs.core.apply.call(null,cljs.core.hash_map,map__34281):map__34281);
var content_area_el = cljs.core.get.call(null,map__34281__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__28903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28903__auto__){
return (function (){
var f__28904__auto__ = (function (){var switch__28841__auto__ = ((function (c__28903__auto__){
return (function (state_34323){
var state_val_34324 = (state_34323[(1)]);
if((state_val_34324 === (1))){
var inst_34308 = (state_34323[(7)]);
var inst_34308__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34309 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34310 = ["10px","10px","100%","68px","1.0"];
var inst_34311 = cljs.core.PersistentHashMap.fromArrays(inst_34309,inst_34310);
var inst_34312 = cljs.core.merge.call(null,inst_34311,style);
var inst_34313 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34308__$1,inst_34312);
var inst_34314 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34308__$1,msg);
var inst_34315 = cljs.core.async.timeout.call(null,(300));
var state_34323__$1 = (function (){var statearr_34325 = state_34323;
(statearr_34325[(7)] = inst_34308__$1);

(statearr_34325[(8)] = inst_34313);

(statearr_34325[(9)] = inst_34314);

return statearr_34325;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34323__$1,(2),inst_34315);
} else {
if((state_val_34324 === (2))){
var inst_34308 = (state_34323[(7)]);
var inst_34317 = (state_34323[(2)]);
var inst_34318 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_34319 = ["auto"];
var inst_34320 = cljs.core.PersistentHashMap.fromArrays(inst_34318,inst_34319);
var inst_34321 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34308,inst_34320);
var state_34323__$1 = (function (){var statearr_34326 = state_34323;
(statearr_34326[(10)] = inst_34317);

return statearr_34326;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34323__$1,inst_34321);
} else {
return null;
}
}
});})(c__28903__auto__))
;
return ((function (switch__28841__auto__,c__28903__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__28842__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__28842__auto____0 = (function (){
var statearr_34330 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34330[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__28842__auto__);

(statearr_34330[(1)] = (1));

return statearr_34330;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__28842__auto____1 = (function (state_34323){
while(true){
var ret_value__28843__auto__ = (function (){try{while(true){
var result__28844__auto__ = switch__28841__auto__.call(null,state_34323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28844__auto__;
}
break;
}
}catch (e34331){if((e34331 instanceof Object)){
var ex__28845__auto__ = e34331;
var statearr_34332_34334 = state_34323;
(statearr_34332_34334[(5)] = ex__28845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34335 = state_34323;
state_34323 = G__34335;
continue;
} else {
return ret_value__28843__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__28842__auto__ = function(state_34323){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__28842__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__28842__auto____1.call(this,state_34323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__28842__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__28842__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__28842__auto__;
})()
;})(switch__28841__auto__,c__28903__auto__))
})();
var state__28905__auto__ = (function (){var statearr_34333 = f__28904__auto__.call(null);
(statearr_34333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28903__auto__);

return statearr_34333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28905__auto__);
});})(c__28903__auto__))
);

return c__28903__auto__;
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
var vec__34337 = temp__4421__auto__;
var f = cljs.core.nth.call(null,vec__34337,(0),null);
var ln = cljs.core.nth.call(null,vec__34337,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__34340 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__34340,(0),null);
var file_line = cljs.core.nth.call(null,vec__34340,(1),null);
var file_column = cljs.core.nth.call(null,vec__34340,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__34340,file_name,file_line,file_column){
return (function (p1__34338_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__34338_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__34340,file_name,file_line,file_column))
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
var map__34342 = figwheel.client.heads_up.ensure_container.call(null);
var map__34342__$1 = ((cljs.core.seq_QMARK_.call(null,map__34342))?cljs.core.apply.call(null,cljs.core.hash_map,map__34342):map__34342);
var content_area_el = cljs.core.get.call(null,map__34342__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__28903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28903__auto__){
return (function (){
var f__28904__auto__ = (function (){var switch__28841__auto__ = ((function (c__28903__auto__){
return (function (state_34389){
var state_val_34390 = (state_34389[(1)]);
if((state_val_34390 === (1))){
var inst_34372 = (state_34389[(7)]);
var inst_34372__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34373 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34374 = ["0.0"];
var inst_34375 = cljs.core.PersistentHashMap.fromArrays(inst_34373,inst_34374);
var inst_34376 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34372__$1,inst_34375);
var inst_34377 = cljs.core.async.timeout.call(null,(300));
var state_34389__$1 = (function (){var statearr_34391 = state_34389;
(statearr_34391[(7)] = inst_34372__$1);

(statearr_34391[(8)] = inst_34376);

return statearr_34391;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34389__$1,(2),inst_34377);
} else {
if((state_val_34390 === (2))){
var inst_34372 = (state_34389[(7)]);
var inst_34379 = (state_34389[(2)]);
var inst_34380 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_34381 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_34382 = cljs.core.PersistentHashMap.fromArrays(inst_34380,inst_34381);
var inst_34383 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34372,inst_34382);
var inst_34384 = cljs.core.async.timeout.call(null,(200));
var state_34389__$1 = (function (){var statearr_34392 = state_34389;
(statearr_34392[(9)] = inst_34383);

(statearr_34392[(10)] = inst_34379);

return statearr_34392;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34389__$1,(3),inst_34384);
} else {
if((state_val_34390 === (3))){
var inst_34372 = (state_34389[(7)]);
var inst_34386 = (state_34389[(2)]);
var inst_34387 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34372,"");
var state_34389__$1 = (function (){var statearr_34393 = state_34389;
(statearr_34393[(11)] = inst_34386);

return statearr_34393;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34389__$1,inst_34387);
} else {
return null;
}
}
}
});})(c__28903__auto__))
;
return ((function (switch__28841__auto__,c__28903__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__28842__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__28842__auto____0 = (function (){
var statearr_34397 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34397[(0)] = figwheel$client$heads_up$clear_$_state_machine__28842__auto__);

(statearr_34397[(1)] = (1));

return statearr_34397;
});
var figwheel$client$heads_up$clear_$_state_machine__28842__auto____1 = (function (state_34389){
while(true){
var ret_value__28843__auto__ = (function (){try{while(true){
var result__28844__auto__ = switch__28841__auto__.call(null,state_34389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28844__auto__;
}
break;
}
}catch (e34398){if((e34398 instanceof Object)){
var ex__28845__auto__ = e34398;
var statearr_34399_34401 = state_34389;
(statearr_34399_34401[(5)] = ex__28845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34402 = state_34389;
state_34389 = G__34402;
continue;
} else {
return ret_value__28843__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__28842__auto__ = function(state_34389){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__28842__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__28842__auto____1.call(this,state_34389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__28842__auto____0;
figwheel$client$heads_up$clear_$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__28842__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__28842__auto__;
})()
;})(switch__28841__auto__,c__28903__auto__))
})();
var state__28905__auto__ = (function (){var statearr_34400 = f__28904__auto__.call(null);
(statearr_34400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28903__auto__);

return statearr_34400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28905__auto__);
});})(c__28903__auto__))
);

return c__28903__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__28903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28903__auto__){
return (function (){
var f__28904__auto__ = (function (){var switch__28841__auto__ = ((function (c__28903__auto__){
return (function (state_34434){
var state_val_34435 = (state_34434[(1)]);
if((state_val_34435 === (1))){
var inst_34424 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_34434__$1 = state_34434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34434__$1,(2),inst_34424);
} else {
if((state_val_34435 === (2))){
var inst_34426 = (state_34434[(2)]);
var inst_34427 = cljs.core.async.timeout.call(null,(400));
var state_34434__$1 = (function (){var statearr_34436 = state_34434;
(statearr_34436[(7)] = inst_34426);

return statearr_34436;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34434__$1,(3),inst_34427);
} else {
if((state_val_34435 === (3))){
var inst_34429 = (state_34434[(2)]);
var inst_34430 = figwheel.client.heads_up.clear.call(null);
var state_34434__$1 = (function (){var statearr_34437 = state_34434;
(statearr_34437[(8)] = inst_34429);

return statearr_34437;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34434__$1,(4),inst_34430);
} else {
if((state_val_34435 === (4))){
var inst_34432 = (state_34434[(2)]);
var state_34434__$1 = state_34434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34434__$1,inst_34432);
} else {
return null;
}
}
}
}
});})(c__28903__auto__))
;
return ((function (switch__28841__auto__,c__28903__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__28842__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__28842__auto____0 = (function (){
var statearr_34441 = [null,null,null,null,null,null,null,null,null];
(statearr_34441[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__28842__auto__);

(statearr_34441[(1)] = (1));

return statearr_34441;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__28842__auto____1 = (function (state_34434){
while(true){
var ret_value__28843__auto__ = (function (){try{while(true){
var result__28844__auto__ = switch__28841__auto__.call(null,state_34434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28844__auto__;
}
break;
}
}catch (e34442){if((e34442 instanceof Object)){
var ex__28845__auto__ = e34442;
var statearr_34443_34445 = state_34434;
(statearr_34443_34445[(5)] = ex__28845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34446 = state_34434;
state_34434 = G__34446;
continue;
} else {
return ret_value__28843__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__28842__auto__ = function(state_34434){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__28842__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__28842__auto____1.call(this,state_34434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__28842__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__28842__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__28842__auto__;
})()
;})(switch__28841__auto__,c__28903__auto__))
})();
var state__28905__auto__ = (function (){var statearr_34444 = f__28904__auto__.call(null);
(statearr_34444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28903__auto__);

return statearr_34444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28905__auto__);
});})(c__28903__auto__))
);

return c__28903__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map