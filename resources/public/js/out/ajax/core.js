// Compiled by ClojureScript 0.0-3291 {:static-fns true, :optimize-constants true}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');

/**
 * An abstraction for a javascript class that implements
 * Ajax calls.
 */
ajax.core.AjaxImpl = (function (){var obj12445 = {};
return obj12445;
})();

/**
 * Makes an actual ajax request.  All parameters except opts
 * are in JS format.  Should return an AjaxRequest.
 */
ajax.core._js_ajax_request = (function ajax$core$_js_ajax_request(this$,uri,method,body,headers,handler,opts){
if((function (){var and__4297__auto__ = this$;
if(and__4297__auto__){
return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7;
} else {
return and__4297__auto__;
}
})()){
return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else {
var x__4945__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4309__auto__ = (ajax.core._js_ajax_request[(function (){var G__12449 = x__4945__auto__;
return goog.typeOf(G__12449);
})()]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (ajax.core._js_ajax_request["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol("AjaxImpl.-js-ajax-request",this$);
}
}
})().call(null,this$,uri,method,body,headers,handler,opts);
}
});


/**
 * An abstraction for a running ajax request.
 */
ajax.core.AjaxRequest = (function (){var obj12451 = {};
return obj12451;
})();

/**
 * Aborts a running ajax request, if possible.
 */
ajax.core._abort = (function ajax$core$_abort(this$){
if((function (){var and__4297__auto__ = this$;
if(and__4297__auto__){
return this$.ajax$core$AjaxRequest$_abort$arity$1;
} else {
return and__4297__auto__;
}
})()){
return this$.ajax$core$AjaxRequest$_abort$arity$1(this$);
} else {
var x__4945__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4309__auto__ = (ajax.core._abort[(function (){var G__12455 = x__4945__auto__;
return goog.typeOf(G__12455);
})()]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (ajax.core._abort["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol("AjaxRequest.-abort",this$);
}
}
})().call(null,this$);
}
});


/**
 * A marker interface for types that can be directly sent to XhrIo.
 */
ajax.core.DirectlySubmittable = (function (){var obj12457 = {};
return obj12457;
})();


/**
 * An abstraction for an ajax response.
 */
ajax.core.AjaxResponse = (function (){var obj12459 = {};
return obj12459;
})();

/**
 * Returns the HTTP Status of the response as an integer.
 */
ajax.core._status = (function ajax$core$_status(this$){
if((function (){var and__4297__auto__ = this$;
if(and__4297__auto__){
return this$.ajax$core$AjaxResponse$_status$arity$1;
} else {
return and__4297__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_status$arity$1(this$);
} else {
var x__4945__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4309__auto__ = (ajax.core._status[(function (){var G__12463 = x__4945__auto__;
return goog.typeOf(G__12463);
})()]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (ajax.core._status["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol("AjaxResponse.-status",this$);
}
}
})().call(null,this$);
}
});

/**
 * Returns the HTTP Status Text of the response as a string.
 */
ajax.core._status_text = (function ajax$core$_status_text(this$){
if((function (){var and__4297__auto__ = this$;
if(and__4297__auto__){
return this$.ajax$core$AjaxResponse$_status_text$arity$1;
} else {
return and__4297__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_status_text$arity$1(this$);
} else {
var x__4945__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4309__auto__ = (ajax.core._status_text[(function (){var G__12467 = x__4945__auto__;
return goog.typeOf(G__12467);
})()]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (ajax.core._status_text["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol("AjaxResponse.-status-text",this$);
}
}
})().call(null,this$);
}
});

/**
 * Returns the response body as a string.
 */
ajax.core._body = (function ajax$core$_body(this$){
if((function (){var and__4297__auto__ = this$;
if(and__4297__auto__){
return this$.ajax$core$AjaxResponse$_body$arity$1;
} else {
return and__4297__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_body$arity$1(this$);
} else {
var x__4945__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4309__auto__ = (ajax.core._body[(function (){var G__12471 = x__4945__auto__;
return goog.typeOf(G__12471);
})()]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (ajax.core._body["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol("AjaxResponse.-body",this$);
}
}
})().call(null,this$);
}
});

/**
 * Gets the specified response header (specified by a string) as a string.
 */
ajax.core._get_response_header = (function ajax$core$_get_response_header(this$,header){
if((function (){var and__4297__auto__ = this$;
if(and__4297__auto__){
return this$.ajax$core$AjaxResponse$_get_response_header$arity$2;
} else {
return and__4297__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_get_response_header$arity$2(this$,header);
} else {
var x__4945__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4309__auto__ = (ajax.core._get_response_header[(function (){var G__12475 = x__4945__auto__;
return goog.typeOf(G__12475);
})()]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (ajax.core._get_response_header["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol("AjaxResponse.-get-response-header",this$);
}
}
})().call(null,this$,header);
}
});

/**
 * Was the response aborted.
 */
ajax.core._was_aborted = (function ajax$core$_was_aborted(this$){
if((function (){var and__4297__auto__ = this$;
if(and__4297__auto__){
return this$.ajax$core$AjaxResponse$_was_aborted$arity$1;
} else {
return and__4297__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_was_aborted$arity$1(this$);
} else {
var x__4945__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4309__auto__ = (ajax.core._was_aborted[(function (){var G__12479 = x__4945__auto__;
return goog.typeOf(G__12479);
})()]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (ajax.core._was_aborted["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol("AjaxResponse.-was-aborted",this$);
}
}
})().call(null,this$);
}
});

if(typeof FormData !== 'undefined'){
FormData.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof ArrayBufferView !== 'undefined'){
ArrayBufferView.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof Blob !== 'undefined'){
Blob.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof Document !== 'undefined'){
Document.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}
ajax.core.submittable_QMARK_ = (function ajax$core$submittable_QMARK_(params){
var or__4309__auto__ = (function (){var G__12483 = params;
if(G__12483){
var bit__4983__auto__ = null;
if(cljs.core.truth_((function (){var or__4309__auto__ = bit__4983__auto__;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return G__12483.ajax$core$DirectlySubmittable$;
}
})())){
return true;
} else {
if((!G__12483.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(ajax.core.DirectlySubmittable,G__12483);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(ajax.core.DirectlySubmittable,G__12483);
}
})();
if(or__4309__auto__){
return or__4309__auto__;
} else {
return typeof params === 'string';
}
});
goog.net.XhrIo.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__12485){
var map__12486 = p__12485;
var map__12486__$1 = ((cljs.core.seq_QMARK_(map__12486))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12486):map__12486);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12486__$1,cljs.core.constant$keyword$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12486__$1,cljs.core.constant$keyword$with_DASH_credentials,false);
var this$__$1 = this;
var G__12487 = this$__$1;
var G__12488_12492 = G__12487;
var G__12489_12493 = goog.net.EventType.COMPLETE;
var G__12490_12494 = ((function (G__12488_12492,G__12489_12493,G__12487,this$__$1,map__12486,map__12486__$1,timeout,with_credentials){
return (function (p1__12484_SHARP_){
var G__12491 = p1__12484_SHARP_.target;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__12491) : handler.call(null,G__12491));
});})(G__12488_12492,G__12489_12493,G__12487,this$__$1,map__12486,map__12486__$1,timeout,with_credentials))
;
goog.events.listen(G__12488_12492,G__12489_12493,G__12490_12494);

G__12487.setTimeoutInterval(timeout);

G__12487.setWithCredentials(with_credentials);

G__12487.send(uri,method,body,cljs.core.clj__GT_js(headers));

return G__12487;
});

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort(goog.net.ErrorCode.ABORT);
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getResponseText();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatus();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatusText();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
ajax.core.ready_state = (function ajax$core$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.constant$keyword$not_DASH_initialized,(1),cljs.core.constant$keyword$connection_DASH_established,(2),cljs.core.constant$keyword$request_DASH_received,(3),cljs.core.constant$keyword$processing_DASH_request,(4),cljs.core.constant$keyword$response_DASH_ready], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$core$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__12496){
var map__12497 = p__12496;
var map__12497__$1 = ((cljs.core.seq_QMARK_(map__12497))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12497):map__12497);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12497__$1,cljs.core.constant$keyword$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12497__$1,cljs.core.constant$keyword$with_DASH_credentials,false);
var this$__$1 = this;
this$__$1.timeout = timeout;

this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__12497,map__12497__$1,timeout,with_credentials){
return (function (p1__12495_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$response_DASH_ready,ajax.core.ready_state(p1__12495_SHARP_))){
var G__12498 = this$__$1;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__12498) : handler.call(null,G__12498));
} else {
return null;
}
});})(this$__$1,map__12497,map__12497__$1,timeout,with_credentials))
;

var G__12499 = this$__$1;
G__12499.open(method,uri,true);

var t_12506 = G__12499;
var t_12507__$1 = (function (){var seq__12500 = cljs.core.seq(headers);
var chunk__12501 = null;
var count__12502 = (0);
var i__12503 = (0);
while(true){
if((i__12503 < count__12502)){
var vec__12504 = chunk__12501.cljs$core$IIndexed$_nth$arity$2(null,i__12503);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12504,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12504,(1),null);
t_12506.setRequestHeader(k,v);

var G__12508 = seq__12500;
var G__12509 = chunk__12501;
var G__12510 = count__12502;
var G__12511 = (i__12503 + (1));
seq__12500 = G__12508;
chunk__12501 = G__12509;
count__12502 = G__12510;
i__12503 = G__12511;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq(seq__12500);
if(temp__4423__auto__){
var seq__12500__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12500__$1)){
var c__5094__auto__ = cljs.core.chunk_first(seq__12500__$1);
var G__12512 = cljs.core.chunk_rest(seq__12500__$1);
var G__12513 = c__5094__auto__;
var G__12514 = cljs.core.count(c__5094__auto__);
var G__12515 = (0);
seq__12500 = G__12512;
chunk__12501 = G__12513;
count__12502 = G__12514;
i__12503 = G__12515;
continue;
} else {
var vec__12505 = cljs.core.first(seq__12500__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12505,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12505,(1),null);
t_12506.setRequestHeader(k,v);

var G__12516 = cljs.core.next(seq__12500__$1);
var G__12517 = null;
var G__12518 = (0);
var G__12519 = (0);
seq__12500 = G__12516;
chunk__12501 = G__12517;
count__12502 = G__12518;
i__12503 = G__12519;
continue;
}
} else {
return null;
}
}
break;
}
})();

G__12499.send((function (){var or__4309__auto__ = body;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return "";
}
})());

return G__12499;
});

XMLHttpRequest.prototype.ajax$core$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__12520){
var map__12521 = p__12520;
var map__12521__$1 = ((cljs.core.seq_QMARK_(map__12521))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12521):map__12521);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12521__$1,cljs.core.constant$keyword$id);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12521__$1,cljs.core.constant$keyword$timeout);
var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12521__$1,cljs.core.constant$keyword$priority);
var max_retries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12521__$1,cljs.core.constant$keyword$max_DASH_retries);
var this$__$1 = this;
return this$__$1.send(id,uri,method,body,cljs.core.clj__GT_js(headers),priority,handler,max_retries);
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.core._abort(this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.read_edn = (function ajax$core$read_edn(xhrio){
return cljs.reader.read_string(ajax.core._body(xhrio));
});
ajax.core.edn_response_format = (function ajax$core$edn_response_format(){
var G__12523 = arguments.length;
switch (G__12523) {
case 0:
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$read,ajax.core.read_edn,cljs.core.constant$keyword$description,"EDN",cljs.core.constant$keyword$content_DASH_type,"application/edn"], null);
});

ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$0();
});

ajax.core.edn_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.edn_request_format = (function ajax$core$edn_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$write,cljs.core.pr_str,cljs.core.constant$keyword$content_DASH_type,"application/edn"], null);
});
ajax.core.transit_content_type = "application/transit+json; charset=utf-8";
ajax.core.transit_write = (function ajax$core$transit_write(){
var G__12526 = arguments.length;
switch (G__12526) {
case 2:
return ajax.core.transit_write.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transit_write.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.transit_write.cljs$core$IFn$_invoke$arity$2 = (function (writer,params){
return cognitect.transit.write(writer,params);
});

ajax.core.transit_write.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return (function (params){
return cognitect.transit.write(writer,params);
});
});

ajax.core.transit_write.cljs$lang$maxFixedArity = 2;
ajax.core.transit_request_format = (function ajax$core$transit_request_format(){
var G__12529 = arguments.length;
switch (G__12529) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (p__12530){
var map__12531 = p__12530;
var map__12531__$1 = ((cljs.core.seq_QMARK_(map__12531))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12531):map__12531);
var opts = map__12531__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12531__$1,cljs.core.constant$keyword$type);
var writer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12531__$1,cljs.core.constant$keyword$writer);
var writer__$1 = (function (){var or__4309__auto__ = writer;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((function (){var or__4309__auto____$1 = type;
if(cljs.core.truth_(or__4309__auto____$1)){
return or__4309__auto____$1;
} else {
return cljs.core.constant$keyword$json;
}
})(),opts);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$write,ajax.core.transit_write.cljs$core$IFn$_invoke$arity$1(writer__$1),cljs.core.constant$keyword$content_DASH_type,ajax.core.transit_content_type], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = 1;
ajax.core.transit_read = (function ajax$core$transit_read(){
var G__12534 = arguments.length;
switch (G__12534) {
case 3:
return ajax.core.transit_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.transit_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transit_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.transit_read.cljs$core$IFn$_invoke$arity$3 = (function (reader,raw,xhrio){
var text = ajax.core._body(xhrio);
var data = cognitect.transit.read(reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
}
});

ajax.core.transit_read.cljs$core$IFn$_invoke$arity$2 = (function (reader,raw){
return (function (xhrio){
var text = ajax.core._body(xhrio);
var data = cognitect.transit.read(reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
}
});
});

ajax.core.transit_read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return (function (raw,xhrio){
var text = ajax.core._body(xhrio);
var data = cognitect.transit.read(reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
}
});
});

ajax.core.transit_read.cljs$lang$maxFixedArity = 3;
ajax.core.transit_response_format = (function ajax$core$transit_response_format(){
var G__12537 = arguments.length;
switch (G__12537) {
case 0:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__12538){
var map__12539 = p__12538;
var map__12539__$1 = ((cljs.core.seq_QMARK_(map__12539))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12539):map__12539);
var opts = map__12539__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12539__$1,cljs.core.constant$keyword$type);
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12539__$1,cljs.core.constant$keyword$reader);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12539__$1,cljs.core.constant$keyword$raw);
var reader__$1 = (function (){var or__4309__auto__ = reader;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((function (){var or__4309__auto____$1 = type;
if(cljs.core.truth_(or__4309__auto____$1)){
return or__4309__auto____$1;
} else {
return cljs.core.constant$keyword$json;
}
})(),opts);
}
})();
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$read,ajax.core.transit_read.cljs$core$IFn$_invoke$arity$2(reader__$1,raw),cljs.core.constant$keyword$description,"Transit",cljs.core.constant$keyword$content_DASH_type,"application/transit+json"], null);
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
if(cljs.core.truth_(params)){
return (function (){var G__12542 = (new goog.structs.Map(cljs.core.clj__GT_js(params)));
return goog.Uri.QueryData.createFromMap(G__12542);
})().toString();
} else {
return null;
}
});
ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$write,ajax.core.params_to_str,cljs.core.constant$keyword$content_DASH_type,"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(){
var G__12544 = arguments.length;
switch (G__12544) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$read,ajax.core._body,cljs.core.constant$keyword$description,"raw text",cljs.core.constant$keyword$content_DASH_type,"*/*"], null);
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js(data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$write,ajax.core.write_json,cljs.core.constant$keyword$content_DASH_type,"application/json"], null);
});
ajax.core.json_read = (function ajax$core$json_read(){
var G__12547 = arguments.length;
switch (G__12547) {
case 4:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core._body(xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__4297__auto__ = prefix;
if(cljs.core.truth_(and__4297__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),text.indexOf(prefix));
} else {
return and__4297__auto__;
}
})())?text.substring(prefix.length()):text);
var json = (function (){var G__12548 = text__$1;
return goog.json.parse(G__12548);
})();
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.constant$keyword$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core._body(xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__4297__auto__ = prefix;
if(cljs.core.truth_(and__4297__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),text.indexOf(prefix));
} else {
return and__4297__auto__;
}
})())?text.substring(prefix.length()):text);
var json = (function (){var G__12549 = text__$1;
return goog.json.parse(G__12549);
})();
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.constant$keyword$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core._body(xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__4297__auto__ = prefix;
if(cljs.core.truth_(and__4297__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),text.indexOf(prefix));
} else {
return and__4297__auto__;
}
})())?text.substring(prefix.length()):text);
var json = (function (){var G__12550 = text__$1;
return goog.json.parse(G__12550);
})();
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.constant$keyword$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core._body(xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__4297__auto__ = prefix;
if(cljs.core.truth_(and__4297__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),text.indexOf(prefix));
} else {
return and__4297__auto__;
}
})())?text.substring(prefix.length()):text);
var json = (function (){var G__12551 = text__$1;
return goog.json.parse(G__12551);
})();
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.constant$keyword$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});
});

ajax.core.json_read.cljs$lang$maxFixedArity = 4;
/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function ajax$core$json_response_format(){
var G__12554 = arguments.length;
switch (G__12554) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__12555){
var map__12556 = p__12555;
var map__12556__$1 = ((cljs.core.seq_QMARK_(map__12556))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12556):map__12556);
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12556__$1,cljs.core.constant$keyword$prefix);
var keywords_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12556__$1,cljs.core.constant$keyword$keywords_QMARK_);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12556__$1,cljs.core.constant$keyword$raw);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$read,ajax.core.json_read.cljs$core$IFn$_invoke$arity$3(prefix,raw,keywords_QMARK_),cljs.core.constant$keyword$description,[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),cljs.core.constant$keyword$content_DASH_type,"application/json"], null);
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.json_response_format,ajax.core.edn_response_format,ajax.core.transit_response_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.raw_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.raw_response_format], null),ajax.core.raw_response_format], null);
ajax.core.get_format = (function ajax$core$get_format(){
var G__12559 = arguments.length;
switch (G__12559) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$2 = (function (opts,format_entry){
if(cljs.core.vector_QMARK_(format_entry)){
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.second(format_entry));
} else {
if(cljs.core.map_QMARK_(format_entry)){
return format_entry;
} else {
var G__12560 = opts;
return (format_entry.cljs$core$IFn$_invoke$arity$1 ? format_entry.cljs$core$IFn$_invoke$arity$1(G__12560) : format_entry.call(null,G__12560));

}
}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return (function (format_entry){
if(cljs.core.vector_QMARK_(format_entry)){
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.second(format_entry));
} else {
if(cljs.core.map_QMARK_(format_entry)){
return format_entry;
} else {
var G__12561 = opts;
return (format_entry.cljs$core$IFn$_invoke$arity$1 ? format_entry.cljs$core$IFn$_invoke$arity$1(G__12561) : format_entry.call(null,G__12561));

}
}
});
});

ajax.core.get_format.cljs$lang$maxFixedArity = 2;
ajax.core.accept_entry = (function ajax$core$accept_entry(){
var G__12564 = arguments.length;
switch (G__12564) {
case 2:
return ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2 = (function (opts,format_entry){
var or__4309__auto__ = ((cljs.core.vector_QMARK_(format_entry))?cljs.core.first(format_entry):cljs.core.constant$keyword$content_DASH_type.cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(opts,format_entry)));
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return "*/*";
}
});

ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return (function (format_entry){
var or__4309__auto__ = ((cljs.core.vector_QMARK_(format_entry))?cljs.core.first(format_entry):cljs.core.constant$keyword$content_DASH_type.cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(opts,format_entry)));
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return "*/*";
}
});
});

ajax.core.accept_entry.cljs$lang$maxFixedArity = 2;
ajax.core.detect_content_type = (function ajax$core$detect_content_type(){
var G__12567 = arguments.length;
switch (G__12567) {
case 3:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,opts,format_entry){
var accept = ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2(opts,format_entry);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,opts){
return (function (format_entry){
var accept = ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2(opts,format_entry);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (opts,format_entry){
var accept = ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2(opts,format_entry);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = 3;
ajax.core.get_default_format = (function ajax$core$get_default_format(xhrio,p__12569){
var map__12571 = p__12569;
var map__12571__$1 = ((cljs.core.seq_QMARK_(map__12571))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12571):map__12571);
var opts = map__12571__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12571__$1,cljs.core.constant$keyword$response_DASH_format);
var f = ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((function (){var or__4309__auto__ = ajax.core._get_response_header(xhrio,"Content-Type");
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return "";
}
})(),opts);
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(){
var G__12573 = arguments.length;
switch (G__12573) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (opts,xhrio){
return cljs.core.constant$keyword$read.cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format(xhrio,opts)).call(null,xhrio);
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return (function (xhrio){
return cljs.core.constant$keyword$read.cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format(xhrio,opts)).call(null,xhrio);
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = 2;
ajax.core.accept_header = (function ajax$core$accept_header(p__12575){
var map__12577 = p__12575;
var map__12577__$1 = ((cljs.core.seq_QMARK_(map__12577))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12577):map__12577);
var opts = map__12577__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12577__$1,cljs.core.constant$keyword$response_DASH_format);
if(cljs.core.vector_QMARK_(response_format)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$1(opts),response_format));
} else {
return ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2(opts,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(){
var G__12579 = arguments.length;
switch (G__12579) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$response_DASH_format,ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var accept = ajax.core.accept_header(opts);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$read,ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$format,[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),cljs.core.constant$keyword$content_DASH_type,accept], null);
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.get_response_format = (function ajax$core$get_response_format(p__12581){
var map__12583 = p__12581;
var map__12583__$1 = ((cljs.core.seq_QMARK_(map__12583))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12583):map__12583);
var opts = map__12583__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12583__$1,cljs.core.constant$keyword$response_DASH_format);
if(cljs.core.vector_QMARK_(response_format)){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1(opts);
} else {
if(cljs.core.map_QMARK_(response_format)){
return response_format;
} else {
if(cljs.core.ifn_QMARK_(response_format)){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$read,response_format,cljs.core.constant$keyword$description,"custom",cljs.core.constant$keyword$content_DASH_type,"*/*"], null);
} else {
throw (new Error([cljs.core.str("unrecognized response format: "),cljs.core.str(response_format)].join('')));

}
}
}
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__12584,xhrio){
var map__12586 = p__12584;
var map__12586__$1 = ((cljs.core.seq_QMARK_(map__12586))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12586):map__12586);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12586__$1,cljs.core.constant$keyword$description);
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$status,status,cljs.core.constant$keyword$failure,cljs.core.constant$keyword$error,cljs.core.constant$keyword$response,null], null);
var status_text = [cljs.core.str(e.message),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.constant$keyword$status_DASH_text,status_text,cljs.core.array_seq([cljs.core.constant$keyword$failure,cljs.core.constant$keyword$parse,cljs.core.constant$keyword$original_DASH_text,ajax.core._body(xhrio)], 0));
if(cljs.core.truth_(ajax.core.success_QMARK_(status))){
return parse_error;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.constant$keyword$status_DASH_text,ajax.core._status_text(xhrio),cljs.core.array_seq([cljs.core.constant$keyword$parse_DASH_error,parse_error], 0));
}
});
ajax.core.fail = (function ajax$core$fail(){
var argseq__5349__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5349__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$status,status,cljs.core.constant$keyword$status_DASH_text,status_text,cljs.core.constant$keyword$failure,failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,response,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq12587){
var G__12588 = cljs.core.first(seq12587);
var seq12587__$1 = cljs.core.next(seq12587);
var G__12589 = cljs.core.first(seq12587__$1);
var seq12587__$2 = cljs.core.next(seq12587__$1);
var G__12590 = cljs.core.first(seq12587__$2);
var seq12587__$3 = cljs.core.next(seq12587__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__12588,G__12589,G__12590,seq12587__$3);
});
ajax.core.interpret_response = (function ajax$core$interpret_response(p__12591,xhrio){
var map__12604 = p__12591;
var map__12604__$1 = ((cljs.core.seq_QMARK_(map__12604))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12604):map__12604);
var format = map__12604__$1;
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12604__$1,cljs.core.constant$keyword$read);
try{var status = ajax.core._status(xhrio);
var fail = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ajax.core.fail,status);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),status)){
if(cljs.core.truth_(ajax.core._was_aborted(xhrio))){
var G__12606 = "Request aborted by client.";
var G__12607 = cljs.core.constant$keyword$aborted;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__12606,G__12607) : fail.call(null,G__12606,G__12607));
} else {
var G__12608 = "Request timed out.";
var G__12609 = cljs.core.constant$keyword$timeout;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__12608,G__12609) : fail.call(null,G__12608,G__12609));
}
} else {
try{var response = (function (){var G__12611 = xhrio;
return (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(G__12611) : read.call(null,G__12611));
})();
if(cljs.core.truth_(ajax.core.success_QMARK_(status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
var G__12612 = ajax.core._status_text(xhrio);
var G__12613 = cljs.core.constant$keyword$error;
var G__12614 = cljs.core.constant$keyword$response;
var G__12615 = response;
return (fail.cljs$core$IFn$_invoke$arity$4 ? fail.cljs$core$IFn$_invoke$arity$4(G__12612,G__12613,G__12614,G__12615) : fail.call(null,G__12612,G__12613,G__12614,G__12615));
}
}catch (e12610){if((e12610 instanceof Object)){
var e = e12610;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response(e,status,format,xhrio)], null);
} else {
throw e12610;

}
}}
}catch (e12605){if((e12605 instanceof Object)){
var e = e12605;
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((0),e.message,cljs.core.constant$keyword$exception,cljs.core.array_seq([cljs.core.constant$keyword$exception,e], 0));
} else {
throw e12605;

}
}});
ajax.core.no_format = (function ajax$core$no_format(xhrio){
throw (new Error("No response format was supplied."));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(uri,params){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(ajax.core.params_to_str(params))].join('');
} else {
return uri;
}
});
ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.ifn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$write,format,cljs.core.constant$keyword$content_DASH_type,"text/plain"], null);
} else {
return null;

}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case(cljs.core.name(method));
} else {
return method;
}
});
ajax.core.process_inputs = (function ajax$core$process_inputs(p__12616,p__12617){
var map__12622 = p__12616;
var map__12622__$1 = ((cljs.core.seq_QMARK_(map__12622))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12622):map__12622);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12622__$1,cljs.core.constant$keyword$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12622__$1,cljs.core.constant$keyword$method);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12622__$1,cljs.core.constant$keyword$format);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12622__$1,cljs.core.constant$keyword$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12622__$1,cljs.core.constant$keyword$headers);
var map__12623 = p__12617;
var map__12623__$1 = ((cljs.core.seq_QMARK_(map__12623))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12623):map__12623);
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12623__$1,cljs.core.constant$keyword$content_DASH_type);
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["Accept",content_type], null),(function (){var or__4309__auto__ = headers;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ajax.core.normalize_method(method),"GET")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params(uri,params),null,headers__$1], null);
} else {
var map__12624 = ajax.core.get_request_format(format);
var map__12624__$1 = ((cljs.core.seq_QMARK_(map__12624))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12624):map__12624);
var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12624__$1,cljs.core.constant$keyword$write);
var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12624__$1,cljs.core.constant$keyword$content_DASH_type);
var body = ((!((write == null)))?(function (){var G__12625 = params;
return (write.cljs$core$IFn$_invoke$arity$1 ? write.cljs$core$IFn$_invoke$arity$1(G__12625) : write.call(null,G__12625));
})():(cljs.core.truth_(ajax.core.submittable_QMARK_(params))?params:(function(){throw (new Error([cljs.core.str("unrecognized request format: "),cljs.core.str(format)].join('')))})()
));
var content_type__$2 = (cljs.core.truth_(content_type__$1)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",content_type__$1], null):null);
var headers__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([headers__$1,content_type__$2], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,body,headers__$2], null);
}
});
ajax.core.js_handler = (function ajax$core$js_handler(){
var G__12627 = arguments.length;
switch (G__12627) {
case 3:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (response_format,handler,xhrio){
var response = ajax.core.interpret_response(response_format,xhrio);
var G__12628 = response;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__12628) : handler.call(null,G__12628));
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (response_format,handler){
return (function (xhrio){
var response = ajax.core.interpret_response(response_format,xhrio);
var G__12629 = response;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__12629) : handler.call(null,G__12629));
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (response_format){
return (function (handler,xhrio){
var response = ajax.core.interpret_response(response_format,xhrio);
var G__12630 = response;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__12630) : handler.call(null,G__12630));
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = 3;
ajax.core.base_handler = (function ajax$core$base_handler(response_format,p__12632){
var map__12634 = p__12632;
var map__12634__$1 = ((cljs.core.seq_QMARK_(map__12634))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12634):map__12634);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12634__$1,cljs.core.constant$keyword$handler);
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2(response_format,handler);
} else {
throw (new Error("No ajax handler provided."));
}
});
ajax.core.ajax_request = (function ajax$core$ajax_request(p__12635){
var map__12638 = p__12635;
var map__12638__$1 = ((cljs.core.seq_QMARK_(map__12638))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12638):map__12638);
var opts = map__12638__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12638__$1,cljs.core.constant$keyword$method);
var api = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12638__$1,cljs.core.constant$keyword$api);
var response_format = ajax.core.get_response_format(opts);
var method__$1 = ajax.core.normalize_method(method);
var vec__12639 = ajax.core.process_inputs(opts,response_format);
var uri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12639,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12639,(1),null);
var headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12639,(2),null);
var handler = ajax.core.base_handler(response_format,opts);
var api__$1 = (function (){var or__4309__auto__ = api;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return (new goog.net.XhrIo());
}
})();
return ajax.core._js_ajax_request(api__$1,uri,method__$1,body,headers,handler,opts);
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.fn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$write,format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(format_params);
} else {
var G__12641 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__12641) {
case "transit":
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "json":
return ajax.core.json_request_format();

break;
case "edn":
return ajax.core.edn_request_format();

break;
case "raw":
return ajax.core.url_request_format();

break;
case "url":
return ajax.core.url_request_format();

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_2 = (function ajax$core$keyword_response_format_2(format,format_params){
if(cljs.core.vector_QMARK_(format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(format),ajax$core$keyword_response_format_2(cljs.core.second(format),format_params)], null);
} else {
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.fn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$read,format,cljs.core.constant$keyword$description,"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();
} else {
var G__12646 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__12646) {
case "transit":
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "json":
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "edn":
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case "raw":
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case "detect":
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_(format)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12648_SHARP_){
return ajax.core.keyword_response_format_2(p1__12648_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_2(format,format_params);
}
});
ajax.core.transform_handler = (function ajax$core$transform_handler(){
var G__12650 = arguments.length;
switch (G__12650) {
case 2:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2 = (function (p__12651,p__12652){
var map__12653 = p__12651;
var map__12653__$1 = ((cljs.core.seq_QMARK_(map__12653))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12653):map__12653);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12653__$1,cljs.core.constant$keyword$handler);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12653__$1,cljs.core.constant$keyword$error_DASH_handler);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12653__$1,cljs.core.constant$keyword$finally);
var vec__12654 = p__12652;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12654,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12654,(1),null);
var temp__4421__auto___12662 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4421__auto___12662)){
var h_12663 = temp__4421__auto___12662;
var G__12655_12664 = result;
(h_12663.cljs$core$IFn$_invoke$arity$1 ? h_12663.cljs$core$IFn$_invoke$arity$1(G__12655_12664) : h_12663.call(null,G__12655_12664));
} else {
}

if(cljs.core.fn_QMARK_(finally$)){
return (finally$.cljs$core$IFn$_invoke$arity$0 ? finally$.cljs$core$IFn$_invoke$arity$0() : finally$.call(null));
} else {
return null;
}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1 = (function (p__12656){
var map__12657 = p__12656;
var map__12657__$1 = ((cljs.core.seq_QMARK_(map__12657))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12657):map__12657);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12657__$1,cljs.core.constant$keyword$handler);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12657__$1,cljs.core.constant$keyword$error_DASH_handler);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12657__$1,cljs.core.constant$keyword$finally);
return ((function (map__12657,map__12657__$1,handler,error_handler,finally$){
return (function (p__12658){
var vec__12659 = p__12658;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12659,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12659,(1),null);
var temp__4421__auto___12665 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4421__auto___12665)){
var h_12666 = temp__4421__auto___12665;
var G__12660_12667 = result;
(h_12666.cljs$core$IFn$_invoke$arity$1 ? h_12666.cljs$core$IFn$_invoke$arity$1(G__12660_12667) : h_12666.call(null,G__12660_12667));
} else {
}

if(cljs.core.fn_QMARK_(finally$)){
return (finally$.cljs$core$IFn$_invoke$arity$0 ? finally$.cljs$core$IFn$_invoke$arity$0() : finally$.call(null));
} else {
return null;
}
});
;})(map__12657,map__12657__$1,handler,error_handler,finally$))
});

ajax.core.transform_handler.cljs$lang$maxFixedArity = 2;
ajax.core.transform_opts = (function ajax$core$transform_opts(p__12668){
var map__12670 = p__12668;
var map__12670__$1 = ((cljs.core.seq_QMARK_(map__12670))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12670):map__12670);
var opts = map__12670__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12670__$1,cljs.core.constant$keyword$method);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12670__$1,cljs.core.constant$keyword$format);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12670__$1,cljs.core.constant$keyword$response_DASH_format);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12670__$1,cljs.core.constant$keyword$params);

var needs_format = cljs.core.not((function (){var or__4309__auto__ = ajax.core.submittable_QMARK_(params);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET");
}
})());
var rf = (cljs.core.truth_((function (){var or__4309__auto__ = format;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format(format,opts):null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$handler,ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.array_seq([cljs.core.constant$keyword$format,rf,cljs.core.constant$keyword$response_DASH_format,ajax.core.keyword_response_format(response_format,opts)], 0));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request(ajax.core.transform_opts(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$uri,uri,cljs.core.array_seq([cljs.core.constant$keyword$method,method], 0))));
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(){
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__10141__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"GET",(((f__10141__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10141__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq12671){
var G__12672 = cljs.core.first(seq12671);
var seq12671__$1 = cljs.core.next(seq12671);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__12672,seq12671__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(){
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__10141__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"HEAD",(((f__10141__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10141__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq12673){
var G__12674 = cljs.core.first(seq12673);
var seq12673__$1 = cljs.core.next(seq12673);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__12674,seq12673__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(){
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__10141__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"POST",(((f__10141__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10141__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq12675){
var G__12676 = cljs.core.first(seq12675);
var seq12675__$1 = cljs.core.next(seq12675);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__12676,seq12675__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(){
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__10141__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"PUT",(((f__10141__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10141__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq12677){
var G__12678 = cljs.core.first(seq12677);
var seq12677__$1 = cljs.core.next(seq12677);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__12678,seq12677__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(){
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__10141__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"DELETE",(((f__10141__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10141__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq12679){
var G__12680 = cljs.core.first(seq12679);
var seq12679__$1 = cljs.core.next(seq12679);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__12680,seq12679__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(){
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__10141__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"OPTIONS",(((f__10141__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10141__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq12681){
var G__12682 = cljs.core.first(seq12681);
var seq12681__$1 = cljs.core.next(seq12681);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__12682,seq12681__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(){
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__10141__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"TRACE",(((f__10141__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10141__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq12683){
var G__12684 = cljs.core.first(seq12683);
var seq12683__$1 = cljs.core.next(seq12683);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__12684,seq12683__$1);
});
