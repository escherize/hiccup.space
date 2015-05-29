// Compiled by ClojureScript 0.0-3291 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t35240 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35240 = (function (fn_handler,f,meta35241){
this.fn_handler = fn_handler;
this.f = f;
this.meta35241 = meta35241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35242,meta35241__$1){
var self__ = this;
var _35242__$1 = this;
return (new cljs.core.async.t35240(self__.fn_handler,self__.f,meta35241__$1));
});

cljs.core.async.t35240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35242){
var self__ = this;
var _35242__$1 = this;
return self__.meta35241;
});

cljs.core.async.t35240.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t35240.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t35240.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t35240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta35241","meta35241",-974615286,null)], null);
});

cljs.core.async.t35240.cljs$lang$type = true;

cljs.core.async.t35240.cljs$lang$ctorStr = "cljs.core.async/t35240";

cljs.core.async.t35240.cljs$lang$ctorPrWriter = (function (this__25565__auto__,writer__25566__auto__,opt__25567__auto__){
return cljs.core._write.call(null,writer__25566__auto__,"cljs.core.async/t35240");
});

cljs.core.async.__GT_t35240 = (function cljs$core$async$fn_handler_$___GT_t35240(fn_handler__$1,f__$1,meta35241){
return (new cljs.core.async.t35240(fn_handler__$1,f__$1,meta35241));
});

}

return (new cljs.core.async.t35240(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__35244 = buff;
if(G__35244){
var bit__25660__auto__ = null;
if(cljs.core.truth_((function (){var or__24986__auto__ = bit__25660__auto__;
if(cljs.core.truth_(or__24986__auto__)){
return or__24986__auto__;
} else {
return G__35244.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__35244.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__35244);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__35244);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__35246 = arguments.length;
switch (G__35246) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__35249 = arguments.length;
switch (G__35249) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_35251 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_35251);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_35251,ret){
return (function (){
return fn1.call(null,val_35251);
});})(val_35251,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__35253 = arguments.length;
switch (G__35253) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4421__auto__)){
var ret = temp__4421__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4421__auto__)){
var retb = temp__4421__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4421__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4421__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25871__auto___35255 = n;
var x_35256 = (0);
while(true){
if((x_35256 < n__25871__auto___35255)){
(a[x_35256] = (0));

var G__35257 = (x_35256 + (1));
x_35256 = G__35257;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__35258 = (i + (1));
i = G__35258;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t35262 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35262 = (function (alt_flag,flag,meta35263){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta35263 = meta35263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_35264,meta35263__$1){
var self__ = this;
var _35264__$1 = this;
return (new cljs.core.async.t35262(self__.alt_flag,self__.flag,meta35263__$1));
});})(flag))
;

cljs.core.async.t35262.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_35264){
var self__ = this;
var _35264__$1 = this;
return self__.meta35263;
});})(flag))
;

cljs.core.async.t35262.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t35262.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t35262.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t35262.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35263","meta35263",-1141233244,null)], null);
});})(flag))
;

cljs.core.async.t35262.cljs$lang$type = true;

cljs.core.async.t35262.cljs$lang$ctorStr = "cljs.core.async/t35262";

cljs.core.async.t35262.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25565__auto__,writer__25566__auto__,opt__25567__auto__){
return cljs.core._write.call(null,writer__25566__auto__,"cljs.core.async/t35262");
});})(flag))
;

cljs.core.async.__GT_t35262 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t35262(alt_flag__$1,flag__$1,meta35263){
return (new cljs.core.async.t35262(alt_flag__$1,flag__$1,meta35263));
});})(flag))
;

}

return (new cljs.core.async.t35262(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t35268 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35268 = (function (alt_handler,flag,cb,meta35269){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta35269 = meta35269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35270,meta35269__$1){
var self__ = this;
var _35270__$1 = this;
return (new cljs.core.async.t35268(self__.alt_handler,self__.flag,self__.cb,meta35269__$1));
});

cljs.core.async.t35268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35270){
var self__ = this;
var _35270__$1 = this;
return self__.meta35269;
});

cljs.core.async.t35268.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t35268.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t35268.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t35268.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35269","meta35269",971952853,null)], null);
});

cljs.core.async.t35268.cljs$lang$type = true;

cljs.core.async.t35268.cljs$lang$ctorStr = "cljs.core.async/t35268";

cljs.core.async.t35268.cljs$lang$ctorPrWriter = (function (this__25565__auto__,writer__25566__auto__,opt__25567__auto__){
return cljs.core._write.call(null,writer__25566__auto__,"cljs.core.async/t35268");
});

cljs.core.async.__GT_t35268 = (function cljs$core$async$alt_handler_$___GT_t35268(alt_handler__$1,flag__$1,cb__$1,meta35269){
return (new cljs.core.async.t35268(alt_handler__$1,flag__$1,cb__$1,meta35269));
});

}

return (new cljs.core.async.t35268(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35271_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35271_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35272_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35272_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24986__auto__ = wport;
if(cljs.core.truth_(or__24986__auto__)){
return or__24986__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35273 = (i + (1));
i = G__35273;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24986__auto__ = ret;
if(cljs.core.truth_(or__24986__auto__)){
return or__24986__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4423__auto__ = (function (){var and__24974__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24974__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24974__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var got = temp__4423__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__26026__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26026__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35276){
var map__35277 = p__35276;
var map__35277__$1 = ((cljs.core.seq_QMARK_.call(null,map__35277))?cljs.core.apply.call(null,cljs.core.hash_map,map__35277):map__35277);
var opts = map__35277__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35274){
var G__35275 = cljs.core.first.call(null,seq35274);
var seq35274__$1 = cljs.core.next.call(null,seq35274);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35275,seq35274__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__35279 = arguments.length;
switch (G__35279) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28903__auto___35328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28903__auto___35328){
return (function (){
var f__28904__auto__ = (function (){var switch__28841__auto__ = ((function (c__28903__auto___35328){
return (function (state_35303){
var state_val_35304 = (state_35303[(1)]);
if((state_val_35304 === (7))){
var inst_35299 = (state_35303[(2)]);
var state_35303__$1 = state_35303;
var statearr_35305_35329 = state_35303__$1;
(statearr_35305_35329[(2)] = inst_35299);

(statearr_35305_35329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35304 === (1))){
var state_35303__$1 = state_35303;
var statearr_35306_35330 = state_35303__$1;
(statearr_35306_35330[(2)] = null);

(statearr_35306_35330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35304 === (4))){
var inst_35282 = (state_35303[(7)]);
var inst_35282__$1 = (state_35303[(2)]);
var inst_35283 = (inst_35282__$1 == null);
var state_35303__$1 = (function (){var statearr_35307 = state_35303;
(statearr_35307[(7)] = inst_35282__$1);

return statearr_35307;
})();
if(cljs.core.truth_(inst_35283)){
var statearr_35308_35331 = state_35303__$1;
(statearr_35308_35331[(1)] = (5));

} else {
var statearr_35309_35332 = state_35303__$1;
(statearr_35309_35332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35304 === (13))){
var state_35303__$1 = state_35303;
var statearr_35310_35333 = state_35303__$1;
(statearr_35310_35333[(2)] = null);

(statearr_35310_35333[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35304 === (6))){
var inst_35282 = (state_35303[(7)]);
var state_35303__$1 = state_35303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35303__$1,(11),to,inst_35282);
} else {
if((state_val_35304 === (3))){
var inst_35301 = (state_35303[(2)]);
var state_35303__$1 = state_35303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35303__$1,inst_35301);
} else {
if((state_val_35304 === (12))){
var state_35303__$1 = state_35303;
var statearr_35311_35334 = state_35303__$1;
(statearr_35311_35334[(2)] = null);

(statearr_35311_35334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35304 === (2))){
var state_35303__$1 = state_35303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35303__$1,(4),from);
} else {
if((state_val_35304 === (11))){
var inst_35292 = (state_35303[(2)]);
var state_35303__$1 = state_35303;
if(cljs.core.truth_(inst_35292)){
var statearr_35312_35335 = state_35303__$1;
(statearr_35312_35335[(1)] = (12));

} else {
var statearr_35313_35336 = state_35303__$1;
(statearr_35313_35336[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35304 === (9))){
var state_35303__$1 = state_35303;
var statearr_35314_35337 = state_35303__$1;
(statearr_35314_35337[(2)] = null);

(statearr_35314_35337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35304 === (5))){
var state_35303__$1 = state_35303;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35315_35338 = state_35303__$1;
(statearr_35315_35338[(1)] = (8));

} else {
var statearr_35316_35339 = state_35303__$1;
(statearr_35316_35339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35304 === (14))){
var inst_35297 = (state_35303[(2)]);
var state_35303__$1 = state_35303;
var statearr_35317_35340 = state_35303__$1;
(statearr_35317_35340[(2)] = inst_35297);

(statearr_35317_35340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35304 === (10))){
var inst_35289 = (state_35303[(2)]);
var state_35303__$1 = state_35303;
var statearr_35318_35341 = state_35303__$1;
(statearr_35318_35341[(2)] = inst_35289);

(statearr_35318_35341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35304 === (8))){
var inst_35286 = cljs.core.async.close_BANG_.call(null,to);
var state_35303__$1 = state_35303;
var statearr_35319_35342 = state_35303__$1;
(statearr_35319_35342[(2)] = inst_35286);

(statearr_35319_35342[(1)] = (10));


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
});})(c__28903__auto___35328))
;
return ((function (switch__28841__auto__,c__28903__auto___35328){
return (function() {
var cljs$core$async$state_machine__28842__auto__ = null;
var cljs$core$async$state_machine__28842__auto____0 = (function (){
var statearr_35323 = [null,null,null,null,null,null,null,null];
(statearr_35323[(0)] = cljs$core$async$state_machine__28842__auto__);

(statearr_35323[(1)] = (1));

return statearr_35323;
});
var cljs$core$async$state_machine__28842__auto____1 = (function (state_35303){
while(true){
var ret_value__28843__auto__ = (function (){try{while(true){
var result__28844__auto__ = switch__28841__auto__.call(null,state_35303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28844__auto__;
}
break;
}
}catch (e35324){if((e35324 instanceof Object)){
var ex__28845__auto__ = e35324;
var statearr_35325_35343 = state_35303;
(statearr_35325_35343[(5)] = ex__28845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35344 = state_35303;
state_35303 = G__35344;
continue;
} else {
return ret_value__28843__auto__;
}
break;
}
});
cljs$core$async$state_machine__28842__auto__ = function(state_35303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28842__auto____1.call(this,state_35303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28842__auto____0;
cljs$core$async$state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28842__auto____1;
return cljs$core$async$state_machine__28842__auto__;
})()
;})(switch__28841__auto__,c__28903__auto___35328))
})();
var state__28905__auto__ = (function (){var statearr_35326 = f__28904__auto__.call(null);
(statearr_35326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28903__auto___35328);

return statearr_35326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28905__auto__);
});})(c__28903__auto___35328))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__35528){
var vec__35529 = p__35528;
var v = cljs.core.nth.call(null,vec__35529,(0),null);
var p = cljs.core.nth.call(null,vec__35529,(1),null);
var job = vec__35529;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28903__auto___35711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28903__auto___35711,res,vec__35529,v,p,job,jobs,results){
return (function (){
var f__28904__auto__ = (function (){var switch__28841__auto__ = ((function (c__28903__auto___35711,res,vec__35529,v,p,job,jobs,results){
return (function (state_35534){
var state_val_35535 = (state_35534[(1)]);
if((state_val_35535 === (1))){
var state_35534__$1 = state_35534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35534__$1,(2),res,v);
} else {
if((state_val_35535 === (2))){
var inst_35531 = (state_35534[(2)]);
var inst_35532 = cljs.core.async.close_BANG_.call(null,res);
var state_35534__$1 = (function (){var statearr_35536 = state_35534;
(statearr_35536[(7)] = inst_35531);

return statearr_35536;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35534__$1,inst_35532);
} else {
return null;
}
}
});})(c__28903__auto___35711,res,vec__35529,v,p,job,jobs,results))
;
return ((function (switch__28841__auto__,c__28903__auto___35711,res,vec__35529,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28842__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28842__auto____0 = (function (){
var statearr_35540 = [null,null,null,null,null,null,null,null];
(statearr_35540[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28842__auto__);

(statearr_35540[(1)] = (1));

return statearr_35540;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28842__auto____1 = (function (state_35534){
while(true){
var ret_value__28843__auto__ = (function (){try{while(true){
var result__28844__auto__ = switch__28841__auto__.call(null,state_35534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28844__auto__;
}
break;
}
}catch (e35541){if((e35541 instanceof Object)){
var ex__28845__auto__ = e35541;
var statearr_35542_35712 = state_35534;
(statearr_35542_35712[(5)] = ex__28845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35713 = state_35534;
state_35534 = G__35713;
continue;
} else {
return ret_value__28843__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28842__auto__ = function(state_35534){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28842__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28842__auto____1.call(this,state_35534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28842__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28842__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28842__auto__;
})()
;})(switch__28841__auto__,c__28903__auto___35711,res,vec__35529,v,p,job,jobs,results))
})();
var state__28905__auto__ = (function (){var statearr_35543 = f__28904__auto__.call(null);
(statearr_35543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28903__auto___35711);

return statearr_35543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28905__auto__);
});})(c__28903__auto___35711,res,vec__35529,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__35544){
var vec__35545 = p__35544;
var v = cljs.core.nth.call(null,vec__35545,(0),null);
var p = cljs.core.nth.call(null,vec__35545,(1),null);
var job = vec__35545;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25871__auto___35714 = n;
var __35715 = (0);
while(true){
if((__35715 < n__25871__auto___35714)){
var G__35546_35716 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__35546_35716) {
case "compute":
var c__28903__auto___35718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35715,c__28903__auto___35718,G__35546_35716,n__25871__auto___35714,jobs,results,process,async){
return (function (){
var f__28904__auto__ = (function (){var switch__28841__auto__ = ((function (__35715,c__28903__auto___35718,G__35546_35716,n__25871__auto___35714,jobs,results,process,async){
return (function (state_35559){
var state_val_35560 = (state_35559[(1)]);
if((state_val_35560 === (1))){
var state_35559__$1 = state_35559;
var statearr_35561_35719 = state_35559__$1;
(statearr_35561_35719[(2)] = null);

(statearr_35561_35719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35560 === (2))){
var state_35559__$1 = state_35559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35559__$1,(4),jobs);
} else {
if((state_val_35560 === (3))){
var inst_35557 = (state_35559[(2)]);
var state_35559__$1 = state_35559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35559__$1,inst_35557);
} else {
if((state_val_35560 === (4))){
var inst_35549 = (state_35559[(2)]);
var inst_35550 = process.call(null,inst_35549);
var state_35559__$1 = state_35559;
if(cljs.core.truth_(inst_35550)){
var statearr_35562_35720 = state_35559__$1;
(statearr_35562_35720[(1)] = (5));

} else {
var statearr_35563_35721 = state_35559__$1;
(statearr_35563_35721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35560 === (5))){
var state_35559__$1 = state_35559;
var statearr_35564_35722 = state_35559__$1;
(statearr_35564_35722[(2)] = null);

(statearr_35564_35722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35560 === (6))){
var state_35559__$1 = state_35559;
var statearr_35565_35723 = state_35559__$1;
(statearr_35565_35723[(2)] = null);

(statearr_35565_35723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35560 === (7))){
var inst_35555 = (state_35559[(2)]);
var state_35559__$1 = state_35559;
var statearr_35566_35724 = state_35559__$1;
(statearr_35566_35724[(2)] = inst_35555);

(statearr_35566_35724[(1)] = (3));


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
});})(__35715,c__28903__auto___35718,G__35546_35716,n__25871__auto___35714,jobs,results,process,async))
;
return ((function (__35715,switch__28841__auto__,c__28903__auto___35718,G__35546_35716,n__25871__auto___35714,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28842__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28842__auto____0 = (function (){
var statearr_35570 = [null,null,null,null,null,null,null];
(statearr_35570[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28842__auto__);

(statearr_35570[(1)] = (1));

return statearr_35570;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28842__auto____1 = (function (state_35559){
while(true){
var ret_value__28843__auto__ = (function (){try{while(true){
var result__28844__auto__ = switch__28841__auto__.call(null,state_35559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28844__auto__;
}
break;
}
}catch (e35571){if((e35571 instanceof Object)){
var ex__28845__auto__ = e35571;
var statearr_35572_35725 = state_35559;
(statearr_35572_35725[(5)] = ex__28845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35726 = state_35559;
state_35559 = G__35726;
continue;
} else {
return ret_value__28843__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28842__auto__ = function(state_35559){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28842__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28842__auto____1.call(this,state_35559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28842__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28842__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28842__auto__;
})()
;})(__35715,switch__28841__auto__,c__28903__auto___35718,G__35546_35716,n__25871__auto___35714,jobs,results,process,async))
})();
var state__28905__auto__ = (function (){var statearr_35573 = f__28904__auto__.call(null);
(statearr_35573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28903__auto___35718);

return statearr_35573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28905__auto__);
});})(__35715,c__28903__auto___35718,G__35546_35716,n__25871__auto___35714,jobs,results,process,async))
);


break;
case "async":
var c__28903__auto___35727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35715,c__28903__auto___35727,G__35546_35716,n__25871__auto___35714,jobs,results,process,async){
return (function (){
var f__28904__auto__ = (function (){var switch__28841__auto__ = ((function (__35715,c__28903__auto___35727,G__35546_35716,n__25871__auto___35714,jobs,results,process,async){
return (function (state_35586){
var state_val_35587 = (state_35586[(1)]);
if((state_val_35587 === (1))){
var state_35586__$1 = state_35586;
var statearr_35588_35728 = state_35586__$1;
(statearr_35588_35728[(2)] = null);

(statearr_35588_35728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (2))){
var state_35586__$1 = state_35586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35586__$1,(4),jobs);
} else {
if((state_val_35587 === (3))){
var inst_35584 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35586__$1,inst_35584);
} else {
if((state_val_35587 === (4))){
var inst_35576 = (state_35586[(2)]);
var inst_35577 = async.call(null,inst_35576);
var state_35586__$1 = state_35586;
if(cljs.core.truth_(inst_35577)){
var statearr_35589_35729 = state_35586__$1;
(statearr_35589_35729[(1)] = (5));

} else {
var statearr_35590_35730 = state_35586__$1;
(statearr_35590_35730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (5))){
var state_35586__$1 = state_35586;
var statearr_35591_35731 = state_35586__$1;
(statearr_35591_35731[(2)] = null);

(statearr_35591_35731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (6))){
var state_35586__$1 = state_35586;
var statearr_35592_35732 = state_35586__$1;
(statearr_35592_35732[(2)] = null);

(statearr_35592_35732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (7))){
var inst_35582 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
var statearr_35593_35733 = state_35586__$1;
(statearr_35593_35733[(2)] = inst_35582);

(statearr_35593_35733[(1)] = (3));


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
});})(__35715,c__28903__auto___35727,G__35546_35716,n__25871__auto___35714,jobs,results,process,async))
;
return ((function (__35715,switch__28841__auto__,c__28903__auto___35727,G__35546_35716,n__25871__auto___35714,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28842__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28842__auto____0 = (function (){
var statearr_35597 = [null,null,null,null,null,null,null];
(statearr_35597[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28842__auto__);

(statearr_35597[(1)] = (1));

return statearr_35597;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28842__auto____1 = (function (state_35586){
while(true){
var ret_value__28843__auto__ = (function (){try{while(true){
var result__28844__auto__ = switch__28841__auto__.call(null,state_35586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28844__auto__;
}
break;
}
}catch (e35598){if((e35598 instanceof Object)){
var ex__28845__auto__ = e35598;
var statearr_35599_35734 = state_35586;
(statearr_35599_35734[(5)] = ex__28845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35735 = state_35586;
state_35586 = G__35735;
continue;
} else {
return ret_value__28843__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28842__auto__ = function(state_35586){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28842__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28842__auto____1.call(this,state_35586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28842__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28842__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28842__auto__;
})()
;})(__35715,switch__28841__auto__,c__28903__auto___35727,G__35546_35716,n__25871__auto___35714,jobs,results,process,async))
})();
var state__28905__auto__ = (function (){var statearr_35600 = f__28904__auto__.call(null);
(statearr_35600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28903__auto___35727);

return statearr_35600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28905__auto__);
});})(__35715,c__28903__auto___35727,G__35546_35716,n__25871__auto___35714,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__35736 = (__35715 + (1));
__35715 = G__35736;
continue;
} else {
}
break;
}

var c__28903__auto___35737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28903__auto___35737,jobs,results,process,async){
return (function (){
var f__28904__auto__ = (function (){var switch__28841__auto__ = ((function (c__28903__auto___35737,jobs,results,process,async){
return (function (state_35622){
var state_val_35623 = (state_35622[(1)]);
if((state_val_35623 === (1))){
var state_35622__$1 = state_35622;
var statearr_35624_35738 = state_35622__$1;
(statearr_35624_35738[(2)] = null);

(statearr_35624_35738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35623 === (2))){
var state_35622__$1 = state_35622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35622__$1,(4),from);
} else {
if((state_val_35623 === (3))){
var inst_35620 = (state_35622[(2)]);
var state_35622__$1 = state_35622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35622__$1,inst_35620);
} else {
if((state_val_35623 === (4))){
var inst_35603 = (state_35622[(7)]);
var inst_35603__$1 = (state_35622[(2)]);
var inst_35604 = (inst_35603__$1 == null);
var state_35622__$1 = (function (){var statearr_35625 = state_35622;
(statearr_35625[(7)] = inst_35603__$1);

return statearr_35625;
})();
if(cljs.core.truth_(inst_35604)){
var statearr_35626_35739 = state_35622__$1;
(statearr_35626_35739[(1)] = (5));

} else {
var statearr_35627_35740 = state_35622__$1;
(statearr_35627_35740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35623 === (5))){
var inst_35606 = cljs.core.async.close_BANG_.call(null,jobs);
var state_35622__$1 = state_35622;
var statearr_35628_35741 = state_35622__$1;
(statearr_35628_35741[(2)] = inst_35606);

(statearr_35628_35741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35623 === (6))){
var inst_35608 = (state_35622[(8)]);
var inst_35603 = (state_35622[(7)]);
var inst_35608__$1 = cljs.core.async.chan.call(null,(1));
var inst_35609 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35610 = [inst_35603,inst_35608__$1];
var inst_35611 = (new cljs.core.PersistentVector(null,2,(5),inst_35609,inst_35610,null));
var state_35622__$1 = (function (){var statearr_35629 = state_35622;
(statearr_35629[(8)] = inst_35608__$1);

return statearr_35629;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35622__$1,(8),jobs,inst_35611);
} else {
if((state_val_35623 === (7))){
var inst_35618 = (state_35622[(2)]);
var state_35622__$1 = state_35622;
var statearr_35630_35742 = state_35622__$1;
(statearr_35630_35742[(2)] = inst_35618);

(statearr_35630_35742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35623 === (8))){
var inst_35608 = (state_35622[(8)]);
var inst_35613 = (state_35622[(2)]);
var state_35622__$1 = (function (){var statearr_35631 = state_35622;
(statearr_35631[(9)] = inst_35613);

return statearr_35631;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35622__$1,(9),results,inst_35608);
} else {
if((state_val_35623 === (9))){
var inst_35615 = (state_35622[(2)]);
var state_35622__$1 = (function (){var statearr_35632 = state_35622;
(statearr_35632[(10)] = inst_35615);

return statearr_35632;
})();
var statearr_35633_35743 = state_35622__$1;
(statearr_35633_35743[(2)] = null);

(statearr_35633_35743[(1)] = (2));


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
});})(c__28903__auto___35737,jobs,results,process,async))
;
return ((function (switch__28841__auto__,c__28903__auto___35737,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28842__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28842__auto____0 = (function (){
var statearr_35637 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35637[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28842__auto__);

(statearr_35637[(1)] = (1));

return statearr_35637;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28842__auto____1 = (function (state_35622){
while(true){
var ret_value__28843__auto__ = (function (){try{while(true){
var result__28844__auto__ = switch__28841__auto__.call(null,state_35622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28844__auto__;
}
break;
}
}catch (e35638){if((e35638 instanceof Object)){
var ex__28845__auto__ = e35638;
var statearr_35639_35744 = state_35622;
(statearr_35639_35744[(5)] = ex__28845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35745 = state_35622;
state_35622 = G__35745;
continue;
} else {
return ret_value__28843__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28842__auto__ = function(state_35622){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28842__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28842__auto____1.call(this,state_35622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28842__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28842__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28842__auto__;
})()
;})(switch__28841__auto__,c__28903__auto___35737,jobs,results,process,async))
})();
var state__28905__auto__ = (function (){var statearr_35640 = f__28904__auto__.call(null);
(statearr_35640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28903__auto___35737);

return statearr_35640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28905__auto__);
});})(c__28903__auto___35737,jobs,results,process,async))
);


var c__28903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28903__auto__,jobs,results,process,async){
return (function (){
var f__28904__auto__ = (function (){var switch__28841__auto__ = ((function (c__28903__auto__,jobs,results,process,async){
return (function (state_35678){
var state_val_35679 = (state_35678[(1)]);
if((state_val_35679 === (7))){
var inst_35674 = (state_35678[(2)]);
var state_35678__$1 = state_35678;
var statearr_35680_35746 = state_35678__$1;
(statearr_35680_35746[(2)] = inst_35674);

(statearr_35680_35746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (20))){
var state_35678__$1 = state_35678;
var statearr_35681_35747 = state_35678__$1;
(statearr_35681_35747[(2)] = null);

(statearr_35681_35747[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (1))){
var state_35678__$1 = state_35678;
var statearr_35682_35748 = state_35678__$1;
(statearr_35682_35748[(2)] = null);

(statearr_35682_35748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (4))){
var inst_35643 = (state_35678[(7)]);
var inst_35643__$1 = (state_35678[(2)]);
var inst_35644 = (inst_35643__$1 == null);
var state_35678__$1 = (function (){var statearr_35683 = state_35678;
(statearr_35683[(7)] = inst_35643__$1);

return statearr_35683;
})();
if(cljs.core.truth_(inst_35644)){
var statearr_35684_35749 = state_35678__$1;
(statearr_35684_35749[(1)] = (5));

} else {
var statearr_35685_35750 = state_35678__$1;
(statearr_35685_35750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (15))){
var inst_35656 = (state_35678[(8)]);
var state_35678__$1 = state_35678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35678__$1,(18),to,inst_35656);
} else {
if((state_val_35679 === (21))){
var inst_35669 = (state_35678[(2)]);
var state_35678__$1 = state_35678;
var statearr_35686_35751 = state_35678__$1;
(statearr_35686_35751[(2)] = inst_35669);

(statearr_35686_35751[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (13))){
var inst_35671 = (state_35678[(2)]);
var state_35678__$1 = (function (){var statearr_35687 = state_35678;
(statearr_35687[(9)] = inst_35671);

return statearr_35687;
})();
var statearr_35688_35752 = state_35678__$1;
(statearr_35688_35752[(2)] = null);

(statearr_35688_35752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (6))){
var inst_35643 = (state_35678[(7)]);
var state_35678__$1 = state_35678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35678__$1,(11),inst_35643);
} else {
if((state_val_35679 === (17))){
var inst_35664 = (state_35678[(2)]);
var state_35678__$1 = state_35678;
if(cljs.core.truth_(inst_35664)){
var statearr_35689_35753 = state_35678__$1;
(statearr_35689_35753[(1)] = (19));

} else {
var statearr_35690_35754 = state_35678__$1;
(statearr_35690_35754[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (3))){
var inst_35676 = (state_35678[(2)]);
var state_35678__$1 = state_35678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35678__$1,inst_35676);
} else {
if((state_val_35679 === (12))){
var inst_35653 = (state_35678[(10)]);
var state_35678__$1 = state_35678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35678__$1,(14),inst_35653);
} else {
if((state_val_35679 === (2))){
var state_35678__$1 = state_35678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35678__$1,(4),results);
} else {
if((state_val_35679 === (19))){
var state_35678__$1 = state_35678;
var statearr_35691_35755 = state_35678__$1;
(statearr_35691_35755[(2)] = null);

(statearr_35691_35755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (11))){
var inst_35653 = (state_35678[(2)]);
var state_35678__$1 = (function (){var statearr_35692 = state_35678;
(statearr_35692[(10)] = inst_35653);

return statearr_35692;
})();
var statearr_35693_35756 = state_35678__$1;
(statearr_35693_35756[(2)] = null);

(statearr_35693_35756[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (9))){
var state_35678__$1 = state_35678;
var statearr_35694_35757 = state_35678__$1;
(statearr_35694_35757[(2)] = null);

(statearr_35694_35757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (5))){
var state_35678__$1 = state_35678;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35695_35758 = state_35678__$1;
(statearr_35695_35758[(1)] = (8));

} else {
var statearr_35696_35759 = state_35678__$1;
(statearr_35696_35759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (14))){
var inst_35658 = (state_35678[(11)]);
var inst_35656 = (state_35678[(8)]);
var inst_35656__$1 = (state_35678[(2)]);
var inst_35657 = (inst_35656__$1 == null);
var inst_35658__$1 = cljs.core.not.call(null,inst_35657);
var state_35678__$1 = (function (){var statearr_35697 = state_35678;
(statearr_35697[(11)] = inst_35658__$1);

(statearr_35697[(8)] = inst_35656__$1);

return statearr_35697;
})();
if(inst_35658__$1){
var statearr_35698_35760 = state_35678__$1;
(statearr_35698_35760[(1)] = (15));

} else {
var statearr_35699_35761 = state_35678__$1;
(statearr_35699_35761[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (16))){
var inst_35658 = (state_35678[(11)]);
var state_35678__$1 = state_35678;
var statearr_35700_35762 = state_35678__$1;
(statearr_35700_35762[(2)] = inst_35658);

(statearr_35700_35762[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (10))){
var inst_35650 = (state_35678[(2)]);
var state_35678__$1 = state_35678;
var statearr_35701_35763 = state_35678__$1;
(statearr_35701_35763[(2)] = inst_35650);

(statearr_35701_35763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (18))){
var inst_35661 = (state_35678[(2)]);
var state_35678__$1 = state_35678;
var statearr_35702_35764 = state_35678__$1;
(statearr_35702_35764[(2)] = inst_35661);

(statearr_35702_35764[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (8))){
var inst_35647 = cljs.core.async.close_BANG_.call(null,to);
var state_35678__$1 = state_35678;
var statearr_35703_35765 = state_35678__$1;
(statearr_35703_35765[(2)] = inst_35647);

(statearr_35703_35765[(1)] = (10));


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
});})(c__28903__auto__,jobs,results,process,async))
;
return ((function (switch__28841__auto__,c__28903__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28842__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28842__auto____0 = (function (){
var statearr_35707 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35707[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28842__auto__);

(statearr_35707[(1)] = (1));

return statearr_35707;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28842__auto____1 = (function (state_35678){
while(true){
var ret_value__28843__auto__ = (function (){try{while(true){
var result__28844__auto__ = switch__28841__auto__.call(null,state_35678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28844__auto__;
}
break;
}
}catch (e35708){if((e35708 instanceof Object)){
var ex__28845__auto__ = e35708;
var statearr_35709_35766 = state_35678;
(statearr_35709_35766[(5)] = ex__28845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35767 = state_35678;
state_35678 = G__35767;
continue;
} else {
return ret_value__28843__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28842__auto__ = function(state_35678){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28842__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28842__auto____1.call(this,state_35678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28842__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28842__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28842__auto__;
})()
;})(switch__28841__auto__,c__28903__auto__,jobs,results,process,async))
})();
var state__28905__auto__ = (function (){var statearr_35710 = f__28904__auto__.call(null);
(statearr_35710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28903__auto__);

return statearr_35710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28905__auto__);
});})(c__28903__auto__,jobs,results,process,async))
);

return c__28903__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__35769 = arguments.length;
switch (G__35769) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__35772 = arguments.length;
switch (G__35772) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__35775 = arguments.length;
switch (G__35775) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28903__auto___35827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28903__auto___35827,tc,fc){
return (function (){
var f__28904__auto__ = (function (){var switch__28841__auto__ = ((function (c__28903__auto___35827,tc,fc){
return (function (state_35801){
var state_val_35802 = (state_35801[(1)]);
if((state_val_35802 === (7))){
var inst_35797 = (state_35801[(2)]);
var state_35801__$1 = state_35801;
var statearr_35803_35828 = state_35801__$1;
(statearr_35803_35828[(2)] = inst_35797);

(statearr_35803_35828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (1))){
var state_35801__$1 = state_35801;
var statearr_35804_35829 = state_35801__$1;
(statearr_35804_35829[(2)] = null);

(statearr_35804_35829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (4))){
var inst_35778 = (state_35801[(7)]);
var inst_35778__$1 = (state_35801[(2)]);
var inst_35779 = (inst_35778__$1 == null);
var state_35801__$1 = (function (){var statearr_35805 = state_35801;
(statearr_35805[(7)] = inst_35778__$1);

return statearr_35805;
})();
if(cljs.core.truth_(inst_35779)){
var statearr_35806_35830 = state_35801__$1;
(statearr_35806_35830[(1)] = (5));

} else {
var statearr_35807_35831 = state_35801__$1;
(statearr_35807_35831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (13))){
var state_35801__$1 = state_35801;
var statearr_35808_35832 = state_35801__$1;
(statearr_35808_35832[(2)] = null);

(statearr_35808_35832[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (6))){
var inst_35778 = (state_35801[(7)]);
var inst_35784 = p.call(null,inst_35778);
var state_35801__$1 = state_35801;
if(cljs.core.truth_(inst_35784)){
var statearr_35809_35833 = state_35801__$1;
(statearr_35809_35833[(1)] = (9));

} else {
var statearr_35810_35834 = state_35801__$1;
(statearr_35810_35834[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (3))){
var inst_35799 = (state_35801[(2)]);
var state_35801__$1 = state_35801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35801__$1,inst_35799);
} else {
if((state_val_35802 === (12))){
var state_35801__$1 = state_35801;
var statearr_35811_35835 = state_35801__$1;
(statearr_35811_35835[(2)] = null);

(statearr_35811_35835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (2))){
var state_35801__$1 = state_35801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35801__$1,(4),ch);
} else {
if((state_val_35802 === (11))){
var inst_35778 = (state_35801[(7)]);
var inst_35788 = (state_35801[(2)]);
var state_35801__$1 = state_35801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35801__$1,(8),inst_35788,inst_35778);
} else {
if((state_val_35802 === (9))){
var state_35801__$1 = state_35801;
var statearr_35812_35836 = state_35801__$1;
(statearr_35812_35836[(2)] = tc);

(statearr_35812_35836[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (5))){
var inst_35781 = cljs.core.async.close_BANG_.call(null,tc);
var inst_35782 = cljs.core.async.close_BANG_.call(null,fc);
var state_35801__$1 = (function (){var statearr_35813 = state_35801;
(statearr_35813[(8)] = inst_35781);

return statearr_35813;
})();
var statearr_35814_35837 = state_35801__$1;
(statearr_35814_35837[(2)] = inst_35782);

(statearr_35814_35837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (14))){
var inst_35795 = (state_35801[(2)]);
var state_35801__$1 = state_35801;
var statearr_35815_35838 = state_35801__$1;
(statearr_35815_35838[(2)] = inst_35795);

(statearr_35815_35838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (10))){
var state_35801__$1 = state_35801;
var statearr_35816_35839 = state_35801__$1;
(statearr_35816_35839[(2)] = fc);

(statearr_35816_35839[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (8))){
var inst_35790 = (state_35801[(2)]);
var state_35801__$1 = state_35801;
if(cljs.core.truth_(inst_35790)){
var statearr_35817_35840 = state_35801__$1;
(statearr_35817_35840[(1)] = (12));

} else {
var statearr_35818_35841 = state_35801__$1;
(statearr_35818_35841[(1)] = (13));

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
});})(c__28903__auto___35827,tc,fc))
;
return ((function (switch__28841__auto__,c__28903__auto___35827,tc,fc){
return (function() {
var cljs$core$async$state_machine__28842__auto__ = null;
var cljs$core$async$state_machine__28842__auto____0 = (function (){
var statearr_35822 = [null,null,null,null,null,null,null,null,null];
(statearr_35822[(0)] = cljs$core$async$state_machine__28842__auto__);

(statearr_35822[(1)] = (1));

return statearr_35822;
});
var cljs$core$async$state_machine__28842__auto____1 = (function (state_35801){
while(true){
var ret_value__28843__auto__ = (function (){try{while(true){
var result__28844__auto__ = switch__28841__auto__.call(null,state_35801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28844__auto__;
}
break;
}
}catch (e35823){if((e35823 instanceof Object)){
var ex__28845__auto__ = e35823;
var statearr_35824_35842 = state_35801;
(statearr_35824_35842[(5)] = ex__28845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35843 = state_35801;
state_35801 = G__35843;
continue;
} else {
return ret_value__28843__auto__;
}
break;
}
});
cljs$core$async$state_machine__28842__auto__ = function(state_35801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28842__auto____1.call(this,state_35801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28842__auto____0;
cljs$core$async$state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28842__auto____1;
return cljs$core$async$state_machine__28842__auto__;
})()
;})(switch__28841__auto__,c__28903__auto___35827,tc,fc))
})();
var state__28905__auto__ = (function (){var statearr_35825 = f__28904__auto__.call(null);
(statearr_35825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28903__auto___35827);

return statearr_35825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28905__auto__);
});})(c__28903__auto___35827,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28903__auto__){
return (function (){
var f__28904__auto__ = (function (){var switch__28841__auto__ = ((function (c__28903__auto__){
return (function (state_35890){
var state_val_35891 = (state_35890[(1)]);
if((state_val_35891 === (1))){
var inst_35876 = init;
var state_35890__$1 = (function (){var statearr_35892 = state_35890;
(statearr_35892[(7)] = inst_35876);

return statearr_35892;
})();
var statearr_35893_35908 = state_35890__$1;
(statearr_35893_35908[(2)] = null);

(statearr_35893_35908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35891 === (2))){
var state_35890__$1 = state_35890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35890__$1,(4),ch);
} else {
if((state_val_35891 === (3))){
var inst_35888 = (state_35890[(2)]);
var state_35890__$1 = state_35890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35890__$1,inst_35888);
} else {
if((state_val_35891 === (4))){
var inst_35879 = (state_35890[(8)]);
var inst_35879__$1 = (state_35890[(2)]);
var inst_35880 = (inst_35879__$1 == null);
var state_35890__$1 = (function (){var statearr_35894 = state_35890;
(statearr_35894[(8)] = inst_35879__$1);

return statearr_35894;
})();
if(cljs.core.truth_(inst_35880)){
var statearr_35895_35909 = state_35890__$1;
(statearr_35895_35909[(1)] = (5));

} else {
var statearr_35896_35910 = state_35890__$1;
(statearr_35896_35910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35891 === (5))){
var inst_35876 = (state_35890[(7)]);
var state_35890__$1 = state_35890;
var statearr_35897_35911 = state_35890__$1;
(statearr_35897_35911[(2)] = inst_35876);

(statearr_35897_35911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35891 === (6))){
var inst_35879 = (state_35890[(8)]);
var inst_35876 = (state_35890[(7)]);
var inst_35883 = f.call(null,inst_35876,inst_35879);
var inst_35876__$1 = inst_35883;
var state_35890__$1 = (function (){var statearr_35898 = state_35890;
(statearr_35898[(7)] = inst_35876__$1);

return statearr_35898;
})();
var statearr_35899_35912 = state_35890__$1;
(statearr_35899_35912[(2)] = null);

(statearr_35899_35912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35891 === (7))){
var inst_35886 = (state_35890[(2)]);
var state_35890__$1 = state_35890;
var statearr_35900_35913 = state_35890__$1;
(statearr_35900_35913[(2)] = inst_35886);

(statearr_35900_35913[(1)] = (3));


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
});})(c__28903__auto__))
;
return ((function (switch__28841__auto__,c__28903__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28842__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28842__auto____0 = (function (){
var statearr_35904 = [null,null,null,null,null,null,null,null,null];
(statearr_35904[(0)] = cljs$core$async$reduce_$_state_machine__28842__auto__);

(statearr_35904[(1)] = (1));

return statearr_35904;
});
var cljs$core$async$reduce_$_state_machine__28842__auto____1 = (function (state_35890){
while(true){
var ret_value__28843__auto__ = (function (){try{while(true){
var result__28844__auto__ = switch__28841__auto__.call(null,state_35890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28844__auto__;
}
break;
}
}catch (e35905){if((e35905 instanceof Object)){
var ex__28845__auto__ = e35905;
var statearr_35906_35914 = state_35890;
(statearr_35906_35914[(5)] = ex__28845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35915 = state_35890;
state_35890 = G__35915;
continue;
} else {
return ret_value__28843__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28842__auto__ = function(state_35890){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28842__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28842__auto____1.call(this,state_35890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28842__auto____0;
cljs$core$async$reduce_$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28842__auto____1;
return cljs$core$async$reduce_$_state_machine__28842__auto__;
})()
;})(switch__28841__auto__,c__28903__auto__))
})();
var state__28905__auto__ = (function (){var statearr_35907 = f__28904__auto__.call(null);
(statearr_35907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28903__auto__);

return statearr_35907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28905__auto__);
});})(c__28903__auto__))
);

return c__28903__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__35917 = arguments.length;
switch (G__35917) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28903__auto__){
return (function (){
var f__28904__auto__ = (function (){var switch__28841__auto__ = ((function (c__28903__auto__){
return (function (state_35942){
var state_val_35943 = (state_35942[(1)]);
if((state_val_35943 === (7))){
var inst_35924 = (state_35942[(2)]);
var state_35942__$1 = state_35942;
var statearr_35944_35968 = state_35942__$1;
(statearr_35944_35968[(2)] = inst_35924);

(statearr_35944_35968[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35943 === (1))){
var inst_35918 = cljs.core.seq.call(null,coll);
var inst_35919 = inst_35918;
var state_35942__$1 = (function (){var statearr_35945 = state_35942;
(statearr_35945[(7)] = inst_35919);

return statearr_35945;
})();
var statearr_35946_35969 = state_35942__$1;
(statearr_35946_35969[(2)] = null);

(statearr_35946_35969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35943 === (4))){
var inst_35919 = (state_35942[(7)]);
var inst_35922 = cljs.core.first.call(null,inst_35919);
var state_35942__$1 = state_35942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35942__$1,(7),ch,inst_35922);
} else {
if((state_val_35943 === (13))){
var inst_35936 = (state_35942[(2)]);
var state_35942__$1 = state_35942;
var statearr_35947_35970 = state_35942__$1;
(statearr_35947_35970[(2)] = inst_35936);

(statearr_35947_35970[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35943 === (6))){
var inst_35927 = (state_35942[(2)]);
var state_35942__$1 = state_35942;
if(cljs.core.truth_(inst_35927)){
var statearr_35948_35971 = state_35942__$1;
(statearr_35948_35971[(1)] = (8));

} else {
var statearr_35949_35972 = state_35942__$1;
(statearr_35949_35972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35943 === (3))){
var inst_35940 = (state_35942[(2)]);
var state_35942__$1 = state_35942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35942__$1,inst_35940);
} else {
if((state_val_35943 === (12))){
var state_35942__$1 = state_35942;
var statearr_35950_35973 = state_35942__$1;
(statearr_35950_35973[(2)] = null);

(statearr_35950_35973[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35943 === (2))){
var inst_35919 = (state_35942[(7)]);
var state_35942__$1 = state_35942;
if(cljs.core.truth_(inst_35919)){
var statearr_35951_35974 = state_35942__$1;
(statearr_35951_35974[(1)] = (4));

} else {
var statearr_35952_35975 = state_35942__$1;
(statearr_35952_35975[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35943 === (11))){
var inst_35933 = cljs.core.async.close_BANG_.call(null,ch);
var state_35942__$1 = state_35942;
var statearr_35953_35976 = state_35942__$1;
(statearr_35953_35976[(2)] = inst_35933);

(statearr_35953_35976[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35943 === (9))){
var state_35942__$1 = state_35942;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35954_35977 = state_35942__$1;
(statearr_35954_35977[(1)] = (11));

} else {
var statearr_35955_35978 = state_35942__$1;
(statearr_35955_35978[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35943 === (5))){
var inst_35919 = (state_35942[(7)]);
var state_35942__$1 = state_35942;
var statearr_35956_35979 = state_35942__$1;
(statearr_35956_35979[(2)] = inst_35919);

(statearr_35956_35979[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35943 === (10))){
var inst_35938 = (state_35942[(2)]);
var state_35942__$1 = state_35942;
var statearr_35957_35980 = state_35942__$1;
(statearr_35957_35980[(2)] = inst_35938);

(statearr_35957_35980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35943 === (8))){
var inst_35919 = (state_35942[(7)]);
var inst_35929 = cljs.core.next.call(null,inst_35919);
var inst_35919__$1 = inst_35929;
var state_35942__$1 = (function (){var statearr_35958 = state_35942;
(statearr_35958[(7)] = inst_35919__$1);

return statearr_35958;
})();
var statearr_35959_35981 = state_35942__$1;
(statearr_35959_35981[(2)] = null);

(statearr_35959_35981[(1)] = (2));


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
});})(c__28903__auto__))
;
return ((function (switch__28841__auto__,c__28903__auto__){
return (function() {
var cljs$core$async$state_machine__28842__auto__ = null;
var cljs$core$async$state_machine__28842__auto____0 = (function (){
var statearr_35963 = [null,null,null,null,null,null,null,null];
(statearr_35963[(0)] = cljs$core$async$state_machine__28842__auto__);

(statearr_35963[(1)] = (1));

return statearr_35963;
});
var cljs$core$async$state_machine__28842__auto____1 = (function (state_35942){
while(true){
var ret_value__28843__auto__ = (function (){try{while(true){
var result__28844__auto__ = switch__28841__auto__.call(null,state_35942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28844__auto__;
}
break;
}
}catch (e35964){if((e35964 instanceof Object)){
var ex__28845__auto__ = e35964;
var statearr_35965_35982 = state_35942;
(statearr_35965_35982[(5)] = ex__28845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35983 = state_35942;
state_35942 = G__35983;
continue;
} else {
return ret_value__28843__auto__;
}
break;
}
});
cljs$core$async$state_machine__28842__auto__ = function(state_35942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28842__auto____1.call(this,state_35942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28842__auto____0;
cljs$core$async$state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28842__auto____1;
return cljs$core$async$state_machine__28842__auto__;
})()
;})(switch__28841__auto__,c__28903__auto__))
})();
var state__28905__auto__ = (function (){var statearr_35966 = f__28904__auto__.call(null);
(statearr_35966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28903__auto__);

return statearr_35966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28905__auto__);
});})(c__28903__auto__))
);

return c__28903__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj35985 = {};
return obj35985;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__24974__auto__ = _;
if(and__24974__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__24974__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25622__auto__ = (((_ == null))?null:_);
return (function (){var or__24986__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25622__auto__)]);
if(or__24986__auto__){
return or__24986__auto__;
} else {
var or__24986__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__24986__auto____$1){
return or__24986__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj35987 = {};
return obj35987;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__24974__auto__ = m;
if(and__24974__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__24974__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25622__auto__ = (((m == null))?null:m);
return (function (){var or__24986__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25622__auto__)]);
if(or__24986__auto__){
return or__24986__auto__;
} else {
var or__24986__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__24986__auto____$1){
return or__24986__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__24974__auto__ = m;
if(and__24974__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__24974__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25622__auto__ = (((m == null))?null:m);
return (function (){var or__24986__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25622__auto__)]);
if(or__24986__auto__){
return or__24986__auto__;
} else {
var or__24986__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__24986__auto____$1){
return or__24986__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__24974__auto__ = m;
if(and__24974__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__24974__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25622__auto__ = (((m == null))?null:m);
return (function (){var or__24986__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25622__auto__)]);
if(or__24986__auto__){
return or__24986__auto__;
} else {
var or__24986__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__24986__auto____$1){
return or__24986__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t36209 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36209 = (function (mult,ch,cs,meta36210){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta36210 = meta36210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t36209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36211,meta36210__$1){
var self__ = this;
var _36211__$1 = this;
return (new cljs.core.async.t36209(self__.mult,self__.ch,self__.cs,meta36210__$1));
});})(cs))
;

cljs.core.async.t36209.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36211){
var self__ = this;
var _36211__$1 = this;
return self__.meta36210;
});})(cs))
;

cljs.core.async.t36209.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t36209.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t36209.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t36209.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t36209.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t36209.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t36209.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36210","meta36210",-741636134,null)], null);
});})(cs))
;

cljs.core.async.t36209.cljs$lang$type = true;

cljs.core.async.t36209.cljs$lang$ctorStr = "cljs.core.async/t36209";

cljs.core.async.t36209.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25565__auto__,writer__25566__auto__,opt__25567__auto__){
return cljs.core._write.call(null,writer__25566__auto__,"cljs.core.async/t36209");
});})(cs))
;

cljs.core.async.__GT_t36209 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t36209(mult__$1,ch__$1,cs__$1,meta36210){
return (new cljs.core.async.t36209(mult__$1,ch__$1,cs__$1,meta36210));
});})(cs))
;

}

return (new cljs.core.async.t36209(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28903__auto___36430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28903__auto___36430,cs,m,dchan,dctr,done){
return (function (){
var f__28904__auto__ = (function (){var switch__28841__auto__ = ((function (c__28903__auto___36430,cs,m,dchan,dctr,done){
return (function (state_36342){
var state_val_36343 = (state_36342[(1)]);
if((state_val_36343 === (7))){
var inst_36338 = (state_36342[(2)]);
var state_36342__$1 = state_36342;
var statearr_36344_36431 = state_36342__$1;
(statearr_36344_36431[(2)] = inst_36338);

(statearr_36344_36431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (20))){
var inst_36243 = (state_36342[(7)]);
var inst_36253 = cljs.core.first.call(null,inst_36243);
var inst_36254 = cljs.core.nth.call(null,inst_36253,(0),null);
var inst_36255 = cljs.core.nth.call(null,inst_36253,(1),null);
var state_36342__$1 = (function (){var statearr_36345 = state_36342;
(statearr_36345[(8)] = inst_36254);

return statearr_36345;
})();
if(cljs.core.truth_(inst_36255)){
var statearr_36346_36432 = state_36342__$1;
(statearr_36346_36432[(1)] = (22));

} else {
var statearr_36347_36433 = state_36342__$1;
(statearr_36347_36433[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (27))){
var inst_36285 = (state_36342[(9)]);
var inst_36290 = (state_36342[(10)]);
var inst_36283 = (state_36342[(11)]);
var inst_36214 = (state_36342[(12)]);
var inst_36290__$1 = cljs.core._nth.call(null,inst_36283,inst_36285);
var inst_36291 = cljs.core.async.put_BANG_.call(null,inst_36290__$1,inst_36214,done);
var state_36342__$1 = (function (){var statearr_36348 = state_36342;
(statearr_36348[(10)] = inst_36290__$1);

return statearr_36348;
})();
if(cljs.core.truth_(inst_36291)){
var statearr_36349_36434 = state_36342__$1;
(statearr_36349_36434[(1)] = (30));

} else {
var statearr_36350_36435 = state_36342__$1;
(statearr_36350_36435[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (1))){
var state_36342__$1 = state_36342;
var statearr_36351_36436 = state_36342__$1;
(statearr_36351_36436[(2)] = null);

(statearr_36351_36436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (24))){
var inst_36243 = (state_36342[(7)]);
var inst_36260 = (state_36342[(2)]);
var inst_36261 = cljs.core.next.call(null,inst_36243);
var inst_36223 = inst_36261;
var inst_36224 = null;
var inst_36225 = (0);
var inst_36226 = (0);
var state_36342__$1 = (function (){var statearr_36352 = state_36342;
(statearr_36352[(13)] = inst_36224);

(statearr_36352[(14)] = inst_36223);

(statearr_36352[(15)] = inst_36260);

(statearr_36352[(16)] = inst_36226);

(statearr_36352[(17)] = inst_36225);

return statearr_36352;
})();
var statearr_36353_36437 = state_36342__$1;
(statearr_36353_36437[(2)] = null);

(statearr_36353_36437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (39))){
var state_36342__$1 = state_36342;
var statearr_36357_36438 = state_36342__$1;
(statearr_36357_36438[(2)] = null);

(statearr_36357_36438[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (4))){
var inst_36214 = (state_36342[(12)]);
var inst_36214__$1 = (state_36342[(2)]);
var inst_36215 = (inst_36214__$1 == null);
var state_36342__$1 = (function (){var statearr_36358 = state_36342;
(statearr_36358[(12)] = inst_36214__$1);

return statearr_36358;
})();
if(cljs.core.truth_(inst_36215)){
var statearr_36359_36439 = state_36342__$1;
(statearr_36359_36439[(1)] = (5));

} else {
var statearr_36360_36440 = state_36342__$1;
(statearr_36360_36440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (15))){
var inst_36224 = (state_36342[(13)]);
var inst_36223 = (state_36342[(14)]);
var inst_36226 = (state_36342[(16)]);
var inst_36225 = (state_36342[(17)]);
var inst_36239 = (state_36342[(2)]);
var inst_36240 = (inst_36226 + (1));
var tmp36354 = inst_36224;
var tmp36355 = inst_36223;
var tmp36356 = inst_36225;
var inst_36223__$1 = tmp36355;
var inst_36224__$1 = tmp36354;
var inst_36225__$1 = tmp36356;
var inst_36226__$1 = inst_36240;
var state_36342__$1 = (function (){var statearr_36361 = state_36342;
(statearr_36361[(13)] = inst_36224__$1);

(statearr_36361[(14)] = inst_36223__$1);

(statearr_36361[(16)] = inst_36226__$1);

(statearr_36361[(18)] = inst_36239);

(statearr_36361[(17)] = inst_36225__$1);

return statearr_36361;
})();
var statearr_36362_36441 = state_36342__$1;
(statearr_36362_36441[(2)] = null);

(statearr_36362_36441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (21))){
var inst_36264 = (state_36342[(2)]);
var state_36342__$1 = state_36342;
var statearr_36366_36442 = state_36342__$1;
(statearr_36366_36442[(2)] = inst_36264);

(statearr_36366_36442[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (31))){
var inst_36290 = (state_36342[(10)]);
var inst_36294 = done.call(null,null);
var inst_36295 = cljs.core.async.untap_STAR_.call(null,m,inst_36290);
var state_36342__$1 = (function (){var statearr_36367 = state_36342;
(statearr_36367[(19)] = inst_36294);

return statearr_36367;
})();
var statearr_36368_36443 = state_36342__$1;
(statearr_36368_36443[(2)] = inst_36295);

(statearr_36368_36443[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (32))){
var inst_36282 = (state_36342[(20)]);
var inst_36285 = (state_36342[(9)]);
var inst_36284 = (state_36342[(21)]);
var inst_36283 = (state_36342[(11)]);
var inst_36297 = (state_36342[(2)]);
var inst_36298 = (inst_36285 + (1));
var tmp36363 = inst_36282;
var tmp36364 = inst_36284;
var tmp36365 = inst_36283;
var inst_36282__$1 = tmp36363;
var inst_36283__$1 = tmp36365;
var inst_36284__$1 = tmp36364;
var inst_36285__$1 = inst_36298;
var state_36342__$1 = (function (){var statearr_36369 = state_36342;
(statearr_36369[(20)] = inst_36282__$1);

(statearr_36369[(9)] = inst_36285__$1);

(statearr_36369[(21)] = inst_36284__$1);

(statearr_36369[(11)] = inst_36283__$1);

(statearr_36369[(22)] = inst_36297);

return statearr_36369;
})();
var statearr_36370_36444 = state_36342__$1;
(statearr_36370_36444[(2)] = null);

(statearr_36370_36444[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (40))){
var inst_36310 = (state_36342[(23)]);
var inst_36314 = done.call(null,null);
var inst_36315 = cljs.core.async.untap_STAR_.call(null,m,inst_36310);
var state_36342__$1 = (function (){var statearr_36371 = state_36342;
(statearr_36371[(24)] = inst_36314);

return statearr_36371;
})();
var statearr_36372_36445 = state_36342__$1;
(statearr_36372_36445[(2)] = inst_36315);

(statearr_36372_36445[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (33))){
var inst_36301 = (state_36342[(25)]);
var inst_36303 = cljs.core.chunked_seq_QMARK_.call(null,inst_36301);
var state_36342__$1 = state_36342;
if(inst_36303){
var statearr_36373_36446 = state_36342__$1;
(statearr_36373_36446[(1)] = (36));

} else {
var statearr_36374_36447 = state_36342__$1;
(statearr_36374_36447[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (13))){
var inst_36233 = (state_36342[(26)]);
var inst_36236 = cljs.core.async.close_BANG_.call(null,inst_36233);
var state_36342__$1 = state_36342;
var statearr_36375_36448 = state_36342__$1;
(statearr_36375_36448[(2)] = inst_36236);

(statearr_36375_36448[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (22))){
var inst_36254 = (state_36342[(8)]);
var inst_36257 = cljs.core.async.close_BANG_.call(null,inst_36254);
var state_36342__$1 = state_36342;
var statearr_36376_36449 = state_36342__$1;
(statearr_36376_36449[(2)] = inst_36257);

(statearr_36376_36449[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (36))){
var inst_36301 = (state_36342[(25)]);
var inst_36305 = cljs.core.chunk_first.call(null,inst_36301);
var inst_36306 = cljs.core.chunk_rest.call(null,inst_36301);
var inst_36307 = cljs.core.count.call(null,inst_36305);
var inst_36282 = inst_36306;
var inst_36283 = inst_36305;
var inst_36284 = inst_36307;
var inst_36285 = (0);
var state_36342__$1 = (function (){var statearr_36377 = state_36342;
(statearr_36377[(20)] = inst_36282);

(statearr_36377[(9)] = inst_36285);

(statearr_36377[(21)] = inst_36284);

(statearr_36377[(11)] = inst_36283);

return statearr_36377;
})();
var statearr_36378_36450 = state_36342__$1;
(statearr_36378_36450[(2)] = null);

(statearr_36378_36450[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (41))){
var inst_36301 = (state_36342[(25)]);
var inst_36317 = (state_36342[(2)]);
var inst_36318 = cljs.core.next.call(null,inst_36301);
var inst_36282 = inst_36318;
var inst_36283 = null;
var inst_36284 = (0);
var inst_36285 = (0);
var state_36342__$1 = (function (){var statearr_36379 = state_36342;
(statearr_36379[(20)] = inst_36282);

(statearr_36379[(9)] = inst_36285);

(statearr_36379[(21)] = inst_36284);

(statearr_36379[(11)] = inst_36283);

(statearr_36379[(27)] = inst_36317);

return statearr_36379;
})();
var statearr_36380_36451 = state_36342__$1;
(statearr_36380_36451[(2)] = null);

(statearr_36380_36451[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (43))){
var state_36342__$1 = state_36342;
var statearr_36381_36452 = state_36342__$1;
(statearr_36381_36452[(2)] = null);

(statearr_36381_36452[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (29))){
var inst_36326 = (state_36342[(2)]);
var state_36342__$1 = state_36342;
var statearr_36382_36453 = state_36342__$1;
(statearr_36382_36453[(2)] = inst_36326);

(statearr_36382_36453[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (44))){
var inst_36335 = (state_36342[(2)]);
var state_36342__$1 = (function (){var statearr_36383 = state_36342;
(statearr_36383[(28)] = inst_36335);

return statearr_36383;
})();
var statearr_36384_36454 = state_36342__$1;
(statearr_36384_36454[(2)] = null);

(statearr_36384_36454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (6))){
var inst_36274 = (state_36342[(29)]);
var inst_36273 = cljs.core.deref.call(null,cs);
var inst_36274__$1 = cljs.core.keys.call(null,inst_36273);
var inst_36275 = cljs.core.count.call(null,inst_36274__$1);
var inst_36276 = cljs.core.reset_BANG_.call(null,dctr,inst_36275);
var inst_36281 = cljs.core.seq.call(null,inst_36274__$1);
var inst_36282 = inst_36281;
var inst_36283 = null;
var inst_36284 = (0);
var inst_36285 = (0);
var state_36342__$1 = (function (){var statearr_36385 = state_36342;
(statearr_36385[(20)] = inst_36282);

(statearr_36385[(9)] = inst_36285);

(statearr_36385[(29)] = inst_36274__$1);

(statearr_36385[(30)] = inst_36276);

(statearr_36385[(21)] = inst_36284);

(statearr_36385[(11)] = inst_36283);

return statearr_36385;
})();
var statearr_36386_36455 = state_36342__$1;
(statearr_36386_36455[(2)] = null);

(statearr_36386_36455[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (28))){
var inst_36282 = (state_36342[(20)]);
var inst_36301 = (state_36342[(25)]);
var inst_36301__$1 = cljs.core.seq.call(null,inst_36282);
var state_36342__$1 = (function (){var statearr_36387 = state_36342;
(statearr_36387[(25)] = inst_36301__$1);

return statearr_36387;
})();
if(inst_36301__$1){
var statearr_36388_36456 = state_36342__$1;
(statearr_36388_36456[(1)] = (33));

} else {
var statearr_36389_36457 = state_36342__$1;
(statearr_36389_36457[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (25))){
var inst_36285 = (state_36342[(9)]);
var inst_36284 = (state_36342[(21)]);
var inst_36287 = (inst_36285 < inst_36284);
var inst_36288 = inst_36287;
var state_36342__$1 = state_36342;
if(cljs.core.truth_(inst_36288)){
var statearr_36390_36458 = state_36342__$1;
(statearr_36390_36458[(1)] = (27));

} else {
var statearr_36391_36459 = state_36342__$1;
(statearr_36391_36459[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (34))){
var state_36342__$1 = state_36342;
var statearr_36392_36460 = state_36342__$1;
(statearr_36392_36460[(2)] = null);

(statearr_36392_36460[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (17))){
var state_36342__$1 = state_36342;
var statearr_36393_36461 = state_36342__$1;
(statearr_36393_36461[(2)] = null);

(statearr_36393_36461[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (3))){
var inst_36340 = (state_36342[(2)]);
var state_36342__$1 = state_36342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36342__$1,inst_36340);
} else {
if((state_val_36343 === (12))){
var inst_36269 = (state_36342[(2)]);
var state_36342__$1 = state_36342;
var statearr_36394_36462 = state_36342__$1;
(statearr_36394_36462[(2)] = inst_36269);

(statearr_36394_36462[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (2))){
var state_36342__$1 = state_36342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36342__$1,(4),ch);
} else {
if((state_val_36343 === (23))){
var state_36342__$1 = state_36342;
var statearr_36395_36463 = state_36342__$1;
(statearr_36395_36463[(2)] = null);

(statearr_36395_36463[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (35))){
var inst_36324 = (state_36342[(2)]);
var state_36342__$1 = state_36342;
var statearr_36396_36464 = state_36342__$1;
(statearr_36396_36464[(2)] = inst_36324);

(statearr_36396_36464[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (19))){
var inst_36243 = (state_36342[(7)]);
var inst_36247 = cljs.core.chunk_first.call(null,inst_36243);
var inst_36248 = cljs.core.chunk_rest.call(null,inst_36243);
var inst_36249 = cljs.core.count.call(null,inst_36247);
var inst_36223 = inst_36248;
var inst_36224 = inst_36247;
var inst_36225 = inst_36249;
var inst_36226 = (0);
var state_36342__$1 = (function (){var statearr_36397 = state_36342;
(statearr_36397[(13)] = inst_36224);

(statearr_36397[(14)] = inst_36223);

(statearr_36397[(16)] = inst_36226);

(statearr_36397[(17)] = inst_36225);

return statearr_36397;
})();
var statearr_36398_36465 = state_36342__$1;
(statearr_36398_36465[(2)] = null);

(statearr_36398_36465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (11))){
var inst_36243 = (state_36342[(7)]);
var inst_36223 = (state_36342[(14)]);
var inst_36243__$1 = cljs.core.seq.call(null,inst_36223);
var state_36342__$1 = (function (){var statearr_36399 = state_36342;
(statearr_36399[(7)] = inst_36243__$1);

return statearr_36399;
})();
if(inst_36243__$1){
var statearr_36400_36466 = state_36342__$1;
(statearr_36400_36466[(1)] = (16));

} else {
var statearr_36401_36467 = state_36342__$1;
(statearr_36401_36467[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (9))){
var inst_36271 = (state_36342[(2)]);
var state_36342__$1 = state_36342;
var statearr_36402_36468 = state_36342__$1;
(statearr_36402_36468[(2)] = inst_36271);

(statearr_36402_36468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (5))){
var inst_36221 = cljs.core.deref.call(null,cs);
var inst_36222 = cljs.core.seq.call(null,inst_36221);
var inst_36223 = inst_36222;
var inst_36224 = null;
var inst_36225 = (0);
var inst_36226 = (0);
var state_36342__$1 = (function (){var statearr_36403 = state_36342;
(statearr_36403[(13)] = inst_36224);

(statearr_36403[(14)] = inst_36223);

(statearr_36403[(16)] = inst_36226);

(statearr_36403[(17)] = inst_36225);

return statearr_36403;
})();
var statearr_36404_36469 = state_36342__$1;
(statearr_36404_36469[(2)] = null);

(statearr_36404_36469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (14))){
var state_36342__$1 = state_36342;
var statearr_36405_36470 = state_36342__$1;
(statearr_36405_36470[(2)] = null);

(statearr_36405_36470[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (45))){
var inst_36332 = (state_36342[(2)]);
var state_36342__$1 = state_36342;
var statearr_36406_36471 = state_36342__$1;
(statearr_36406_36471[(2)] = inst_36332);

(statearr_36406_36471[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (26))){
var inst_36274 = (state_36342[(29)]);
var inst_36328 = (state_36342[(2)]);
var inst_36329 = cljs.core.seq.call(null,inst_36274);
var state_36342__$1 = (function (){var statearr_36407 = state_36342;
(statearr_36407[(31)] = inst_36328);

return statearr_36407;
})();
if(inst_36329){
var statearr_36408_36472 = state_36342__$1;
(statearr_36408_36472[(1)] = (42));

} else {
var statearr_36409_36473 = state_36342__$1;
(statearr_36409_36473[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (16))){
var inst_36243 = (state_36342[(7)]);
var inst_36245 = cljs.core.chunked_seq_QMARK_.call(null,inst_36243);
var state_36342__$1 = state_36342;
if(inst_36245){
var statearr_36410_36474 = state_36342__$1;
(statearr_36410_36474[(1)] = (19));

} else {
var statearr_36411_36475 = state_36342__$1;
(statearr_36411_36475[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (38))){
var inst_36321 = (state_36342[(2)]);
var state_36342__$1 = state_36342;
var statearr_36412_36476 = state_36342__$1;
(statearr_36412_36476[(2)] = inst_36321);

(statearr_36412_36476[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (30))){
var state_36342__$1 = state_36342;
var statearr_36413_36477 = state_36342__$1;
(statearr_36413_36477[(2)] = null);

(statearr_36413_36477[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (10))){
var inst_36224 = (state_36342[(13)]);
var inst_36226 = (state_36342[(16)]);
var inst_36232 = cljs.core._nth.call(null,inst_36224,inst_36226);
var inst_36233 = cljs.core.nth.call(null,inst_36232,(0),null);
var inst_36234 = cljs.core.nth.call(null,inst_36232,(1),null);
var state_36342__$1 = (function (){var statearr_36414 = state_36342;
(statearr_36414[(26)] = inst_36233);

return statearr_36414;
})();
if(cljs.core.truth_(inst_36234)){
var statearr_36415_36478 = state_36342__$1;
(statearr_36415_36478[(1)] = (13));

} else {
var statearr_36416_36479 = state_36342__$1;
(statearr_36416_36479[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (18))){
var inst_36267 = (state_36342[(2)]);
var state_36342__$1 = state_36342;
var statearr_36417_36480 = state_36342__$1;
(statearr_36417_36480[(2)] = inst_36267);

(statearr_36417_36480[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (42))){
var state_36342__$1 = state_36342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36342__$1,(45),dchan);
} else {
if((state_val_36343 === (37))){
var inst_36310 = (state_36342[(23)]);
var inst_36301 = (state_36342[(25)]);
var inst_36214 = (state_36342[(12)]);
var inst_36310__$1 = cljs.core.first.call(null,inst_36301);
var inst_36311 = cljs.core.async.put_BANG_.call(null,inst_36310__$1,inst_36214,done);
var state_36342__$1 = (function (){var statearr_36418 = state_36342;
(statearr_36418[(23)] = inst_36310__$1);

return statearr_36418;
})();
if(cljs.core.truth_(inst_36311)){
var statearr_36419_36481 = state_36342__$1;
(statearr_36419_36481[(1)] = (39));

} else {
var statearr_36420_36482 = state_36342__$1;
(statearr_36420_36482[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36343 === (8))){
var inst_36226 = (state_36342[(16)]);
var inst_36225 = (state_36342[(17)]);
var inst_36228 = (inst_36226 < inst_36225);
var inst_36229 = inst_36228;
var state_36342__$1 = state_36342;
if(cljs.core.truth_(inst_36229)){
var statearr_36421_36483 = state_36342__$1;
(statearr_36421_36483[(1)] = (10));

} else {
var statearr_36422_36484 = state_36342__$1;
(statearr_36422_36484[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__28903__auto___36430,cs,m,dchan,dctr,done))
;
return ((function (switch__28841__auto__,c__28903__auto___36430,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28842__auto__ = null;
var cljs$core$async$mult_$_state_machine__28842__auto____0 = (function (){
var statearr_36426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36426[(0)] = cljs$core$async$mult_$_state_machine__28842__auto__);

(statearr_36426[(1)] = (1));

return statearr_36426;
});
var cljs$core$async$mult_$_state_machine__28842__auto____1 = (function (state_36342){
while(true){
var ret_value__28843__auto__ = (function (){try{while(true){
var result__28844__auto__ = switch__28841__auto__.call(null,state_36342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28844__auto__;
}
break;
}
}catch (e36427){if((e36427 instanceof Object)){
var ex__28845__auto__ = e36427;
var statearr_36428_36485 = state_36342;
(statearr_36428_36485[(5)] = ex__28845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36486 = state_36342;
state_36342 = G__36486;
continue;
} else {
return ret_value__28843__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28842__auto__ = function(state_36342){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28842__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28842__auto____1.call(this,state_36342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28842__auto____0;
cljs$core$async$mult_$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28842__auto____1;
return cljs$core$async$mult_$_state_machine__28842__auto__;
})()
;})(switch__28841__auto__,c__28903__auto___36430,cs,m,dchan,dctr,done))
})();
var state__28905__auto__ = (function (){var statearr_36429 = f__28904__auto__.call(null);
(statearr_36429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28903__auto___36430);

return statearr_36429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28905__auto__);
});})(c__28903__auto___36430,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__36488 = arguments.length;
switch (G__36488) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj36491 = {};
return obj36491;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__24974__auto__ = m;
if(and__24974__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__24974__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25622__auto__ = (((m == null))?null:m);
return (function (){var or__24986__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25622__auto__)]);
if(or__24986__auto__){
return or__24986__auto__;
} else {
var or__24986__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__24986__auto____$1){
return or__24986__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__24974__auto__ = m;
if(and__24974__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__24974__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25622__auto__ = (((m == null))?null:m);
return (function (){var or__24986__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25622__auto__)]);
if(or__24986__auto__){
return or__24986__auto__;
} else {
var or__24986__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__24986__auto____$1){
return or__24986__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__24974__auto__ = m;
if(and__24974__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__24974__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25622__auto__ = (((m == null))?null:m);
return (function (){var or__24986__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25622__auto__)]);
if(or__24986__auto__){
return or__24986__auto__;
} else {
var or__24986__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__24986__auto____$1){
return or__24986__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__24974__auto__ = m;
if(and__24974__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__24974__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25622__auto__ = (((m == null))?null:m);
return (function (){var or__24986__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25622__auto__)]);
if(or__24986__auto__){
return or__24986__auto__;
} else {
var or__24986__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__24986__auto____$1){
return or__24986__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__24974__auto__ = m;
if(and__24974__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__24974__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25622__auto__ = (((m == null))?null:m);
return (function (){var or__24986__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25622__auto__)]);
if(or__24986__auto__){
return or__24986__auto__;
} else {
var or__24986__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__24986__auto____$1){
return or__24986__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__26026__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26026__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36496){
var map__36497 = p__36496;
var map__36497__$1 = ((cljs.core.seq_QMARK_.call(null,map__36497))?cljs.core.apply.call(null,cljs.core.hash_map,map__36497):map__36497);
var opts = map__36497__$1;
var statearr_36498_36501 = state;
(statearr_36498_36501[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__36497,map__36497__$1,opts){
return (function (val){
var statearr_36499_36502 = state;
(statearr_36499_36502[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__36497,map__36497__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_36500_36503 = state;
(statearr_36500_36503[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36492){
var G__36493 = cljs.core.first.call(null,seq36492);
var seq36492__$1 = cljs.core.next.call(null,seq36492);
var G__36494 = cljs.core.first.call(null,seq36492__$1);
var seq36492__$2 = cljs.core.next.call(null,seq36492__$1);
var G__36495 = cljs.core.first.call(null,seq36492__$2);
var seq36492__$3 = cljs.core.next.call(null,seq36492__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36493,G__36494,G__36495,seq36492__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t36623 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36623 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36624){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta36624 = meta36624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t36623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36625,meta36624__$1){
var self__ = this;
var _36625__$1 = this;
return (new cljs.core.async.t36623(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36624__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36623.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36625){
var self__ = this;
var _36625__$1 = this;
return self__.meta36624;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36623.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t36623.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36623.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t36623.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36623.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36623.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36623.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36623.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36623.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36624","meta36624",1152404273,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36623.cljs$lang$type = true;

cljs.core.async.t36623.cljs$lang$ctorStr = "cljs.core.async/t36623";

cljs.core.async.t36623.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25565__auto__,writer__25566__auto__,opt__25567__auto__){
return cljs.core._write.call(null,writer__25566__auto__,"cljs.core.async/t36623");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t36623 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t36623(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36624){
return (new cljs.core.async.t36623(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36624));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t36623(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28903__auto___36742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28903__auto___36742,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28904__auto__ = (function (){var switch__28841__auto__ = ((function (c__28903__auto___36742,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36695){
var state_val_36696 = (state_36695[(1)]);
if((state_val_36696 === (7))){
var inst_36639 = (state_36695[(7)]);
var inst_36644 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36639);
var state_36695__$1 = state_36695;
var statearr_36697_36743 = state_36695__$1;
(statearr_36697_36743[(2)] = inst_36644);

(statearr_36697_36743[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (20))){
var inst_36654 = (state_36695[(8)]);
var state_36695__$1 = state_36695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36695__$1,(23),out,inst_36654);
} else {
if((state_val_36696 === (1))){
var inst_36629 = (state_36695[(9)]);
var inst_36629__$1 = calc_state.call(null);
var inst_36630 = cljs.core.seq_QMARK_.call(null,inst_36629__$1);
var state_36695__$1 = (function (){var statearr_36698 = state_36695;
(statearr_36698[(9)] = inst_36629__$1);

return statearr_36698;
})();
if(inst_36630){
var statearr_36699_36744 = state_36695__$1;
(statearr_36699_36744[(1)] = (2));

} else {
var statearr_36700_36745 = state_36695__$1;
(statearr_36700_36745[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (24))){
var inst_36647 = (state_36695[(10)]);
var inst_36639 = inst_36647;
var state_36695__$1 = (function (){var statearr_36701 = state_36695;
(statearr_36701[(7)] = inst_36639);

return statearr_36701;
})();
var statearr_36702_36746 = state_36695__$1;
(statearr_36702_36746[(2)] = null);

(statearr_36702_36746[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (4))){
var inst_36629 = (state_36695[(9)]);
var inst_36635 = (state_36695[(2)]);
var inst_36636 = cljs.core.get.call(null,inst_36635,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36637 = cljs.core.get.call(null,inst_36635,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36638 = cljs.core.get.call(null,inst_36635,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36639 = inst_36629;
var state_36695__$1 = (function (){var statearr_36703 = state_36695;
(statearr_36703[(7)] = inst_36639);

(statearr_36703[(11)] = inst_36636);

(statearr_36703[(12)] = inst_36638);

(statearr_36703[(13)] = inst_36637);

return statearr_36703;
})();
var statearr_36704_36747 = state_36695__$1;
(statearr_36704_36747[(2)] = null);

(statearr_36704_36747[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (15))){
var state_36695__$1 = state_36695;
var statearr_36705_36748 = state_36695__$1;
(statearr_36705_36748[(2)] = null);

(statearr_36705_36748[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (21))){
var inst_36647 = (state_36695[(10)]);
var inst_36639 = inst_36647;
var state_36695__$1 = (function (){var statearr_36706 = state_36695;
(statearr_36706[(7)] = inst_36639);

return statearr_36706;
})();
var statearr_36707_36749 = state_36695__$1;
(statearr_36707_36749[(2)] = null);

(statearr_36707_36749[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (13))){
var inst_36691 = (state_36695[(2)]);
var state_36695__$1 = state_36695;
var statearr_36708_36750 = state_36695__$1;
(statearr_36708_36750[(2)] = inst_36691);

(statearr_36708_36750[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (22))){
var inst_36689 = (state_36695[(2)]);
var state_36695__$1 = state_36695;
var statearr_36709_36751 = state_36695__$1;
(statearr_36709_36751[(2)] = inst_36689);

(statearr_36709_36751[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (6))){
var inst_36693 = (state_36695[(2)]);
var state_36695__$1 = state_36695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36695__$1,inst_36693);
} else {
if((state_val_36696 === (25))){
var state_36695__$1 = state_36695;
var statearr_36710_36752 = state_36695__$1;
(statearr_36710_36752[(2)] = null);

(statearr_36710_36752[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (17))){
var inst_36669 = (state_36695[(14)]);
var state_36695__$1 = state_36695;
var statearr_36711_36753 = state_36695__$1;
(statearr_36711_36753[(2)] = inst_36669);

(statearr_36711_36753[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (3))){
var inst_36629 = (state_36695[(9)]);
var state_36695__$1 = state_36695;
var statearr_36712_36754 = state_36695__$1;
(statearr_36712_36754[(2)] = inst_36629);

(statearr_36712_36754[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (12))){
var inst_36669 = (state_36695[(14)]);
var inst_36655 = (state_36695[(15)]);
var inst_36648 = (state_36695[(16)]);
var inst_36669__$1 = inst_36648.call(null,inst_36655);
var state_36695__$1 = (function (){var statearr_36713 = state_36695;
(statearr_36713[(14)] = inst_36669__$1);

return statearr_36713;
})();
if(cljs.core.truth_(inst_36669__$1)){
var statearr_36714_36755 = state_36695__$1;
(statearr_36714_36755[(1)] = (17));

} else {
var statearr_36715_36756 = state_36695__$1;
(statearr_36715_36756[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (2))){
var inst_36629 = (state_36695[(9)]);
var inst_36632 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36629);
var state_36695__$1 = state_36695;
var statearr_36716_36757 = state_36695__$1;
(statearr_36716_36757[(2)] = inst_36632);

(statearr_36716_36757[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (23))){
var inst_36680 = (state_36695[(2)]);
var state_36695__$1 = state_36695;
if(cljs.core.truth_(inst_36680)){
var statearr_36717_36758 = state_36695__$1;
(statearr_36717_36758[(1)] = (24));

} else {
var statearr_36718_36759 = state_36695__$1;
(statearr_36718_36759[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (19))){
var inst_36677 = (state_36695[(2)]);
var state_36695__$1 = state_36695;
if(cljs.core.truth_(inst_36677)){
var statearr_36719_36760 = state_36695__$1;
(statearr_36719_36760[(1)] = (20));

} else {
var statearr_36720_36761 = state_36695__$1;
(statearr_36720_36761[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (11))){
var inst_36654 = (state_36695[(8)]);
var inst_36660 = (inst_36654 == null);
var state_36695__$1 = state_36695;
if(cljs.core.truth_(inst_36660)){
var statearr_36721_36762 = state_36695__$1;
(statearr_36721_36762[(1)] = (14));

} else {
var statearr_36722_36763 = state_36695__$1;
(statearr_36722_36763[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (9))){
var inst_36647 = (state_36695[(10)]);
var inst_36647__$1 = (state_36695[(2)]);
var inst_36648 = cljs.core.get.call(null,inst_36647__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36649 = cljs.core.get.call(null,inst_36647__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36650 = cljs.core.get.call(null,inst_36647__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36695__$1 = (function (){var statearr_36723 = state_36695;
(statearr_36723[(17)] = inst_36649);

(statearr_36723[(10)] = inst_36647__$1);

(statearr_36723[(16)] = inst_36648);

return statearr_36723;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_36695__$1,(10),inst_36650);
} else {
if((state_val_36696 === (5))){
var inst_36639 = (state_36695[(7)]);
var inst_36642 = cljs.core.seq_QMARK_.call(null,inst_36639);
var state_36695__$1 = state_36695;
if(inst_36642){
var statearr_36724_36764 = state_36695__$1;
(statearr_36724_36764[(1)] = (7));

} else {
var statearr_36725_36765 = state_36695__$1;
(statearr_36725_36765[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (14))){
var inst_36655 = (state_36695[(15)]);
var inst_36662 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36655);
var state_36695__$1 = state_36695;
var statearr_36726_36766 = state_36695__$1;
(statearr_36726_36766[(2)] = inst_36662);

(statearr_36726_36766[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (26))){
var inst_36685 = (state_36695[(2)]);
var state_36695__$1 = state_36695;
var statearr_36727_36767 = state_36695__$1;
(statearr_36727_36767[(2)] = inst_36685);

(statearr_36727_36767[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (16))){
var inst_36665 = (state_36695[(2)]);
var inst_36666 = calc_state.call(null);
var inst_36639 = inst_36666;
var state_36695__$1 = (function (){var statearr_36728 = state_36695;
(statearr_36728[(7)] = inst_36639);

(statearr_36728[(18)] = inst_36665);

return statearr_36728;
})();
var statearr_36729_36768 = state_36695__$1;
(statearr_36729_36768[(2)] = null);

(statearr_36729_36768[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (10))){
var inst_36655 = (state_36695[(15)]);
var inst_36654 = (state_36695[(8)]);
var inst_36653 = (state_36695[(2)]);
var inst_36654__$1 = cljs.core.nth.call(null,inst_36653,(0),null);
var inst_36655__$1 = cljs.core.nth.call(null,inst_36653,(1),null);
var inst_36656 = (inst_36654__$1 == null);
var inst_36657 = cljs.core._EQ_.call(null,inst_36655__$1,change);
var inst_36658 = (inst_36656) || (inst_36657);
var state_36695__$1 = (function (){var statearr_36730 = state_36695;
(statearr_36730[(15)] = inst_36655__$1);

(statearr_36730[(8)] = inst_36654__$1);

return statearr_36730;
})();
if(cljs.core.truth_(inst_36658)){
var statearr_36731_36769 = state_36695__$1;
(statearr_36731_36769[(1)] = (11));

} else {
var statearr_36732_36770 = state_36695__$1;
(statearr_36732_36770[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (18))){
var inst_36655 = (state_36695[(15)]);
var inst_36649 = (state_36695[(17)]);
var inst_36648 = (state_36695[(16)]);
var inst_36672 = cljs.core.empty_QMARK_.call(null,inst_36648);
var inst_36673 = inst_36649.call(null,inst_36655);
var inst_36674 = cljs.core.not.call(null,inst_36673);
var inst_36675 = (inst_36672) && (inst_36674);
var state_36695__$1 = state_36695;
var statearr_36733_36771 = state_36695__$1;
(statearr_36733_36771[(2)] = inst_36675);

(statearr_36733_36771[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (8))){
var inst_36639 = (state_36695[(7)]);
var state_36695__$1 = state_36695;
var statearr_36734_36772 = state_36695__$1;
(statearr_36734_36772[(2)] = inst_36639);

(statearr_36734_36772[(1)] = (9));


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
});})(c__28903__auto___36742,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28841__auto__,c__28903__auto___36742,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28842__auto__ = null;
var cljs$core$async$mix_$_state_machine__28842__auto____0 = (function (){
var statearr_36738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36738[(0)] = cljs$core$async$mix_$_state_machine__28842__auto__);

(statearr_36738[(1)] = (1));

return statearr_36738;
});
var cljs$core$async$mix_$_state_machine__28842__auto____1 = (function (state_36695){
while(true){
var ret_value__28843__auto__ = (function (){try{while(true){
var result__28844__auto__ = switch__28841__auto__.call(null,state_36695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28844__auto__;
}
break;
}
}catch (e36739){if((e36739 instanceof Object)){
var ex__28845__auto__ = e36739;
var statearr_36740_36773 = state_36695;
(statearr_36740_36773[(5)] = ex__28845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36774 = state_36695;
state_36695 = G__36774;
continue;
} else {
return ret_value__28843__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28842__auto__ = function(state_36695){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28842__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28842__auto____1.call(this,state_36695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28842__auto____0;
cljs$core$async$mix_$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28842__auto____1;
return cljs$core$async$mix_$_state_machine__28842__auto__;
})()
;})(switch__28841__auto__,c__28903__auto___36742,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28905__auto__ = (function (){var statearr_36741 = f__28904__auto__.call(null);
(statearr_36741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28903__auto___36742);

return statearr_36741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28905__auto__);
});})(c__28903__auto___36742,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj36776 = {};
return obj36776;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__24974__auto__ = p;
if(and__24974__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__24974__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25622__auto__ = (((p == null))?null:p);
return (function (){var or__24986__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25622__auto__)]);
if(or__24986__auto__){
return or__24986__auto__;
} else {
var or__24986__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__24986__auto____$1){
return or__24986__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__24974__auto__ = p;
if(and__24974__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__24974__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25622__auto__ = (((p == null))?null:p);
return (function (){var or__24986__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25622__auto__)]);
if(or__24986__auto__){
return or__24986__auto__;
} else {
var or__24986__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__24986__auto____$1){
return or__24986__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__36778 = arguments.length;
switch (G__36778) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__24974__auto__ = p;
if(and__24974__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__24974__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25622__auto__ = (((p == null))?null:p);
return (function (){var or__24986__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25622__auto__)]);
if(or__24986__auto__){
return or__24986__auto__;
} else {
var or__24986__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__24986__auto____$1){
return or__24986__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__24974__auto__ = p;
if(and__24974__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__24974__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25622__auto__ = (((p == null))?null:p);
return (function (){var or__24986__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25622__auto__)]);
if(or__24986__auto__){
return or__24986__auto__;
} else {
var or__24986__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__24986__auto____$1){
return or__24986__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__36782 = arguments.length;
switch (G__36782) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24986__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24986__auto__)){
return or__24986__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24986__auto__,mults){
return (function (p1__36780_SHARP_){
if(cljs.core.truth_(p1__36780_SHARP_.call(null,topic))){
return p1__36780_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__36780_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24986__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t36783 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36783 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36784){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36784 = meta36784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t36783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36785,meta36784__$1){
var self__ = this;
var _36785__$1 = this;
return (new cljs.core.async.t36783(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36784__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t36783.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36785){
var self__ = this;
var _36785__$1 = this;
return self__.meta36784;
});})(mults,ensure_mult))
;

cljs.core.async.t36783.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t36783.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t36783.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t36783.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t36783.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t36783.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t36783.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t36783.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36784","meta36784",1264361010,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t36783.cljs$lang$type = true;

cljs.core.async.t36783.cljs$lang$ctorStr = "cljs.core.async/t36783";

cljs.core.async.t36783.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25565__auto__,writer__25566__auto__,opt__25567__auto__){
return cljs.core._write.call(null,writer__25566__auto__,"cljs.core.async/t36783");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t36783 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t36783(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36784){
return (new cljs.core.async.t36783(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36784));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t36783(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28903__auto___36906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28903__auto___36906,mults,ensure_mult,p){
return (function (){
var f__28904__auto__ = (function (){var switch__28841__auto__ = ((function (c__28903__auto___36906,mults,ensure_mult,p){
return (function (state_36857){
var state_val_36858 = (state_36857[(1)]);
if((state_val_36858 === (7))){
var inst_36853 = (state_36857[(2)]);
var state_36857__$1 = state_36857;
var statearr_36859_36907 = state_36857__$1;
(statearr_36859_36907[(2)] = inst_36853);

(statearr_36859_36907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (20))){
var state_36857__$1 = state_36857;
var statearr_36860_36908 = state_36857__$1;
(statearr_36860_36908[(2)] = null);

(statearr_36860_36908[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (1))){
var state_36857__$1 = state_36857;
var statearr_36861_36909 = state_36857__$1;
(statearr_36861_36909[(2)] = null);

(statearr_36861_36909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (24))){
var inst_36836 = (state_36857[(7)]);
var inst_36845 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36836);
var state_36857__$1 = state_36857;
var statearr_36862_36910 = state_36857__$1;
(statearr_36862_36910[(2)] = inst_36845);

(statearr_36862_36910[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (4))){
var inst_36788 = (state_36857[(8)]);
var inst_36788__$1 = (state_36857[(2)]);
var inst_36789 = (inst_36788__$1 == null);
var state_36857__$1 = (function (){var statearr_36863 = state_36857;
(statearr_36863[(8)] = inst_36788__$1);

return statearr_36863;
})();
if(cljs.core.truth_(inst_36789)){
var statearr_36864_36911 = state_36857__$1;
(statearr_36864_36911[(1)] = (5));

} else {
var statearr_36865_36912 = state_36857__$1;
(statearr_36865_36912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (15))){
var inst_36830 = (state_36857[(2)]);
var state_36857__$1 = state_36857;
var statearr_36866_36913 = state_36857__$1;
(statearr_36866_36913[(2)] = inst_36830);

(statearr_36866_36913[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (21))){
var inst_36850 = (state_36857[(2)]);
var state_36857__$1 = (function (){var statearr_36867 = state_36857;
(statearr_36867[(9)] = inst_36850);

return statearr_36867;
})();
var statearr_36868_36914 = state_36857__$1;
(statearr_36868_36914[(2)] = null);

(statearr_36868_36914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (13))){
var inst_36812 = (state_36857[(10)]);
var inst_36814 = cljs.core.chunked_seq_QMARK_.call(null,inst_36812);
var state_36857__$1 = state_36857;
if(inst_36814){
var statearr_36869_36915 = state_36857__$1;
(statearr_36869_36915[(1)] = (16));

} else {
var statearr_36870_36916 = state_36857__$1;
(statearr_36870_36916[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (22))){
var inst_36842 = (state_36857[(2)]);
var state_36857__$1 = state_36857;
if(cljs.core.truth_(inst_36842)){
var statearr_36871_36917 = state_36857__$1;
(statearr_36871_36917[(1)] = (23));

} else {
var statearr_36872_36918 = state_36857__$1;
(statearr_36872_36918[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (6))){
var inst_36836 = (state_36857[(7)]);
var inst_36788 = (state_36857[(8)]);
var inst_36838 = (state_36857[(11)]);
var inst_36836__$1 = topic_fn.call(null,inst_36788);
var inst_36837 = cljs.core.deref.call(null,mults);
var inst_36838__$1 = cljs.core.get.call(null,inst_36837,inst_36836__$1);
var state_36857__$1 = (function (){var statearr_36873 = state_36857;
(statearr_36873[(7)] = inst_36836__$1);

(statearr_36873[(11)] = inst_36838__$1);

return statearr_36873;
})();
if(cljs.core.truth_(inst_36838__$1)){
var statearr_36874_36919 = state_36857__$1;
(statearr_36874_36919[(1)] = (19));

} else {
var statearr_36875_36920 = state_36857__$1;
(statearr_36875_36920[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (25))){
var inst_36847 = (state_36857[(2)]);
var state_36857__$1 = state_36857;
var statearr_36876_36921 = state_36857__$1;
(statearr_36876_36921[(2)] = inst_36847);

(statearr_36876_36921[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (17))){
var inst_36812 = (state_36857[(10)]);
var inst_36821 = cljs.core.first.call(null,inst_36812);
var inst_36822 = cljs.core.async.muxch_STAR_.call(null,inst_36821);
var inst_36823 = cljs.core.async.close_BANG_.call(null,inst_36822);
var inst_36824 = cljs.core.next.call(null,inst_36812);
var inst_36798 = inst_36824;
var inst_36799 = null;
var inst_36800 = (0);
var inst_36801 = (0);
var state_36857__$1 = (function (){var statearr_36877 = state_36857;
(statearr_36877[(12)] = inst_36798);

(statearr_36877[(13)] = inst_36801);

(statearr_36877[(14)] = inst_36799);

(statearr_36877[(15)] = inst_36800);

(statearr_36877[(16)] = inst_36823);

return statearr_36877;
})();
var statearr_36878_36922 = state_36857__$1;
(statearr_36878_36922[(2)] = null);

(statearr_36878_36922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (3))){
var inst_36855 = (state_36857[(2)]);
var state_36857__$1 = state_36857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36857__$1,inst_36855);
} else {
if((state_val_36858 === (12))){
var inst_36832 = (state_36857[(2)]);
var state_36857__$1 = state_36857;
var statearr_36879_36923 = state_36857__$1;
(statearr_36879_36923[(2)] = inst_36832);

(statearr_36879_36923[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (2))){
var state_36857__$1 = state_36857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36857__$1,(4),ch);
} else {
if((state_val_36858 === (23))){
var state_36857__$1 = state_36857;
var statearr_36880_36924 = state_36857__$1;
(statearr_36880_36924[(2)] = null);

(statearr_36880_36924[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (19))){
var inst_36788 = (state_36857[(8)]);
var inst_36838 = (state_36857[(11)]);
var inst_36840 = cljs.core.async.muxch_STAR_.call(null,inst_36838);
var state_36857__$1 = state_36857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36857__$1,(22),inst_36840,inst_36788);
} else {
if((state_val_36858 === (11))){
var inst_36798 = (state_36857[(12)]);
var inst_36812 = (state_36857[(10)]);
var inst_36812__$1 = cljs.core.seq.call(null,inst_36798);
var state_36857__$1 = (function (){var statearr_36881 = state_36857;
(statearr_36881[(10)] = inst_36812__$1);

return statearr_36881;
})();
if(inst_36812__$1){
var statearr_36882_36925 = state_36857__$1;
(statearr_36882_36925[(1)] = (13));

} else {
var statearr_36883_36926 = state_36857__$1;
(statearr_36883_36926[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (9))){
var inst_36834 = (state_36857[(2)]);
var state_36857__$1 = state_36857;
var statearr_36884_36927 = state_36857__$1;
(statearr_36884_36927[(2)] = inst_36834);

(statearr_36884_36927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (5))){
var inst_36795 = cljs.core.deref.call(null,mults);
var inst_36796 = cljs.core.vals.call(null,inst_36795);
var inst_36797 = cljs.core.seq.call(null,inst_36796);
var inst_36798 = inst_36797;
var inst_36799 = null;
var inst_36800 = (0);
var inst_36801 = (0);
var state_36857__$1 = (function (){var statearr_36885 = state_36857;
(statearr_36885[(12)] = inst_36798);

(statearr_36885[(13)] = inst_36801);

(statearr_36885[(14)] = inst_36799);

(statearr_36885[(15)] = inst_36800);

return statearr_36885;
})();
var statearr_36886_36928 = state_36857__$1;
(statearr_36886_36928[(2)] = null);

(statearr_36886_36928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (14))){
var state_36857__$1 = state_36857;
var statearr_36890_36929 = state_36857__$1;
(statearr_36890_36929[(2)] = null);

(statearr_36890_36929[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (16))){
var inst_36812 = (state_36857[(10)]);
var inst_36816 = cljs.core.chunk_first.call(null,inst_36812);
var inst_36817 = cljs.core.chunk_rest.call(null,inst_36812);
var inst_36818 = cljs.core.count.call(null,inst_36816);
var inst_36798 = inst_36817;
var inst_36799 = inst_36816;
var inst_36800 = inst_36818;
var inst_36801 = (0);
var state_36857__$1 = (function (){var statearr_36891 = state_36857;
(statearr_36891[(12)] = inst_36798);

(statearr_36891[(13)] = inst_36801);

(statearr_36891[(14)] = inst_36799);

(statearr_36891[(15)] = inst_36800);

return statearr_36891;
})();
var statearr_36892_36930 = state_36857__$1;
(statearr_36892_36930[(2)] = null);

(statearr_36892_36930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (10))){
var inst_36798 = (state_36857[(12)]);
var inst_36801 = (state_36857[(13)]);
var inst_36799 = (state_36857[(14)]);
var inst_36800 = (state_36857[(15)]);
var inst_36806 = cljs.core._nth.call(null,inst_36799,inst_36801);
var inst_36807 = cljs.core.async.muxch_STAR_.call(null,inst_36806);
var inst_36808 = cljs.core.async.close_BANG_.call(null,inst_36807);
var inst_36809 = (inst_36801 + (1));
var tmp36887 = inst_36798;
var tmp36888 = inst_36799;
var tmp36889 = inst_36800;
var inst_36798__$1 = tmp36887;
var inst_36799__$1 = tmp36888;
var inst_36800__$1 = tmp36889;
var inst_36801__$1 = inst_36809;
var state_36857__$1 = (function (){var statearr_36893 = state_36857;
(statearr_36893[(12)] = inst_36798__$1);

(statearr_36893[(13)] = inst_36801__$1);

(statearr_36893[(14)] = inst_36799__$1);

(statearr_36893[(15)] = inst_36800__$1);

(statearr_36893[(17)] = inst_36808);

return statearr_36893;
})();
var statearr_36894_36931 = state_36857__$1;
(statearr_36894_36931[(2)] = null);

(statearr_36894_36931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (18))){
var inst_36827 = (state_36857[(2)]);
var state_36857__$1 = state_36857;
var statearr_36895_36932 = state_36857__$1;
(statearr_36895_36932[(2)] = inst_36827);

(statearr_36895_36932[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (8))){
var inst_36801 = (state_36857[(13)]);
var inst_36800 = (state_36857[(15)]);
var inst_36803 = (inst_36801 < inst_36800);
var inst_36804 = inst_36803;
var state_36857__$1 = state_36857;
if(cljs.core.truth_(inst_36804)){
var statearr_36896_36933 = state_36857__$1;
(statearr_36896_36933[(1)] = (10));

} else {
var statearr_36897_36934 = state_36857__$1;
(statearr_36897_36934[(1)] = (11));

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
});})(c__28903__auto___36906,mults,ensure_mult,p))
;
return ((function (switch__28841__auto__,c__28903__auto___36906,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28842__auto__ = null;
var cljs$core$async$state_machine__28842__auto____0 = (function (){
var statearr_36901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36901[(0)] = cljs$core$async$state_machine__28842__auto__);

(statearr_36901[(1)] = (1));

return statearr_36901;
});
var cljs$core$async$state_machine__28842__auto____1 = (function (state_36857){
while(true){
var ret_value__28843__auto__ = (function (){try{while(true){
var result__28844__auto__ = switch__28841__auto__.call(null,state_36857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28844__auto__;
}
break;
}
}catch (e36902){if((e36902 instanceof Object)){
var ex__28845__auto__ = e36902;
var statearr_36903_36935 = state_36857;
(statearr_36903_36935[(5)] = ex__28845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36936 = state_36857;
state_36857 = G__36936;
continue;
} else {
return ret_value__28843__auto__;
}
break;
}
});
cljs$core$async$state_machine__28842__auto__ = function(state_36857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28842__auto____1.call(this,state_36857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28842__auto____0;
cljs$core$async$state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28842__auto____1;
return cljs$core$async$state_machine__28842__auto__;
})()
;})(switch__28841__auto__,c__28903__auto___36906,mults,ensure_mult,p))
})();
var state__28905__auto__ = (function (){var statearr_36904 = f__28904__auto__.call(null);
(statearr_36904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28903__auto___36906);

return statearr_36904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28905__auto__);
});})(c__28903__auto___36906,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__36938 = arguments.length;
switch (G__36938) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__36941 = arguments.length;
switch (G__36941) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__36944 = arguments.length;
switch (G__36944) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28903__auto___37014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28903__auto___37014,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28904__auto__ = (function (){var switch__28841__auto__ = ((function (c__28903__auto___37014,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36983){
var state_val_36984 = (state_36983[(1)]);
if((state_val_36984 === (7))){
var state_36983__$1 = state_36983;
var statearr_36985_37015 = state_36983__$1;
(statearr_36985_37015[(2)] = null);

(statearr_36985_37015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36984 === (1))){
var state_36983__$1 = state_36983;
var statearr_36986_37016 = state_36983__$1;
(statearr_36986_37016[(2)] = null);

(statearr_36986_37016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36984 === (4))){
var inst_36947 = (state_36983[(7)]);
var inst_36949 = (inst_36947 < cnt);
var state_36983__$1 = state_36983;
if(cljs.core.truth_(inst_36949)){
var statearr_36987_37017 = state_36983__$1;
(statearr_36987_37017[(1)] = (6));

} else {
var statearr_36988_37018 = state_36983__$1;
(statearr_36988_37018[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36984 === (15))){
var inst_36979 = (state_36983[(2)]);
var state_36983__$1 = state_36983;
var statearr_36989_37019 = state_36983__$1;
(statearr_36989_37019[(2)] = inst_36979);

(statearr_36989_37019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36984 === (13))){
var inst_36972 = cljs.core.async.close_BANG_.call(null,out);
var state_36983__$1 = state_36983;
var statearr_36990_37020 = state_36983__$1;
(statearr_36990_37020[(2)] = inst_36972);

(statearr_36990_37020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36984 === (6))){
var state_36983__$1 = state_36983;
var statearr_36991_37021 = state_36983__$1;
(statearr_36991_37021[(2)] = null);

(statearr_36991_37021[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36984 === (3))){
var inst_36981 = (state_36983[(2)]);
var state_36983__$1 = state_36983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36983__$1,inst_36981);
} else {
if((state_val_36984 === (12))){
var inst_36969 = (state_36983[(8)]);
var inst_36969__$1 = (state_36983[(2)]);
var inst_36970 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36969__$1);
var state_36983__$1 = (function (){var statearr_36992 = state_36983;
(statearr_36992[(8)] = inst_36969__$1);

return statearr_36992;
})();
if(cljs.core.truth_(inst_36970)){
var statearr_36993_37022 = state_36983__$1;
(statearr_36993_37022[(1)] = (13));

} else {
var statearr_36994_37023 = state_36983__$1;
(statearr_36994_37023[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36984 === (2))){
var inst_36946 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_36947 = (0);
var state_36983__$1 = (function (){var statearr_36995 = state_36983;
(statearr_36995[(9)] = inst_36946);

(statearr_36995[(7)] = inst_36947);

return statearr_36995;
})();
var statearr_36996_37024 = state_36983__$1;
(statearr_36996_37024[(2)] = null);

(statearr_36996_37024[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36984 === (11))){
var inst_36947 = (state_36983[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36983,(10),Object,null,(9));
var inst_36956 = chs__$1.call(null,inst_36947);
var inst_36957 = done.call(null,inst_36947);
var inst_36958 = cljs.core.async.take_BANG_.call(null,inst_36956,inst_36957);
var state_36983__$1 = state_36983;
var statearr_36997_37025 = state_36983__$1;
(statearr_36997_37025[(2)] = inst_36958);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36983__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36984 === (9))){
var inst_36947 = (state_36983[(7)]);
var inst_36960 = (state_36983[(2)]);
var inst_36961 = (inst_36947 + (1));
var inst_36947__$1 = inst_36961;
var state_36983__$1 = (function (){var statearr_36998 = state_36983;
(statearr_36998[(7)] = inst_36947__$1);

(statearr_36998[(10)] = inst_36960);

return statearr_36998;
})();
var statearr_36999_37026 = state_36983__$1;
(statearr_36999_37026[(2)] = null);

(statearr_36999_37026[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36984 === (5))){
var inst_36967 = (state_36983[(2)]);
var state_36983__$1 = (function (){var statearr_37000 = state_36983;
(statearr_37000[(11)] = inst_36967);

return statearr_37000;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36983__$1,(12),dchan);
} else {
if((state_val_36984 === (14))){
var inst_36969 = (state_36983[(8)]);
var inst_36974 = cljs.core.apply.call(null,f,inst_36969);
var state_36983__$1 = state_36983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36983__$1,(16),out,inst_36974);
} else {
if((state_val_36984 === (16))){
var inst_36976 = (state_36983[(2)]);
var state_36983__$1 = (function (){var statearr_37001 = state_36983;
(statearr_37001[(12)] = inst_36976);

return statearr_37001;
})();
var statearr_37002_37027 = state_36983__$1;
(statearr_37002_37027[(2)] = null);

(statearr_37002_37027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36984 === (10))){
var inst_36951 = (state_36983[(2)]);
var inst_36952 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_36983__$1 = (function (){var statearr_37003 = state_36983;
(statearr_37003[(13)] = inst_36951);

return statearr_37003;
})();
var statearr_37004_37028 = state_36983__$1;
(statearr_37004_37028[(2)] = inst_36952);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36983__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36984 === (8))){
var inst_36965 = (state_36983[(2)]);
var state_36983__$1 = state_36983;
var statearr_37005_37029 = state_36983__$1;
(statearr_37005_37029[(2)] = inst_36965);

(statearr_37005_37029[(1)] = (5));


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
});})(c__28903__auto___37014,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28841__auto__,c__28903__auto___37014,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28842__auto__ = null;
var cljs$core$async$state_machine__28842__auto____0 = (function (){
var statearr_37009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37009[(0)] = cljs$core$async$state_machine__28842__auto__);

(statearr_37009[(1)] = (1));

return statearr_37009;
});
var cljs$core$async$state_machine__28842__auto____1 = (function (state_36983){
while(true){
var ret_value__28843__auto__ = (function (){try{while(true){
var result__28844__auto__ = switch__28841__auto__.call(null,state_36983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28844__auto__;
}
break;
}
}catch (e37010){if((e37010 instanceof Object)){
var ex__28845__auto__ = e37010;
var statearr_37011_37030 = state_36983;
(statearr_37011_37030[(5)] = ex__28845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37031 = state_36983;
state_36983 = G__37031;
continue;
} else {
return ret_value__28843__auto__;
}
break;
}
});
cljs$core$async$state_machine__28842__auto__ = function(state_36983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28842__auto____1.call(this,state_36983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28842__auto____0;
cljs$core$async$state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28842__auto____1;
return cljs$core$async$state_machine__28842__auto__;
})()
;})(switch__28841__auto__,c__28903__auto___37014,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28905__auto__ = (function (){var statearr_37012 = f__28904__auto__.call(null);
(statearr_37012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28903__auto___37014);

return statearr_37012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28905__auto__);
});})(c__28903__auto___37014,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__37034 = arguments.length;
switch (G__37034) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28903__auto___37089 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28903__auto___37089,out){
return (function (){
var f__28904__auto__ = (function (){var switch__28841__auto__ = ((function (c__28903__auto___37089,out){
return (function (state_37064){
var state_val_37065 = (state_37064[(1)]);
if((state_val_37065 === (7))){
var inst_37044 = (state_37064[(7)]);
var inst_37043 = (state_37064[(8)]);
var inst_37043__$1 = (state_37064[(2)]);
var inst_37044__$1 = cljs.core.nth.call(null,inst_37043__$1,(0),null);
var inst_37045 = cljs.core.nth.call(null,inst_37043__$1,(1),null);
var inst_37046 = (inst_37044__$1 == null);
var state_37064__$1 = (function (){var statearr_37066 = state_37064;
(statearr_37066[(7)] = inst_37044__$1);

(statearr_37066[(8)] = inst_37043__$1);

(statearr_37066[(9)] = inst_37045);

return statearr_37066;
})();
if(cljs.core.truth_(inst_37046)){
var statearr_37067_37090 = state_37064__$1;
(statearr_37067_37090[(1)] = (8));

} else {
var statearr_37068_37091 = state_37064__$1;
(statearr_37068_37091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37065 === (1))){
var inst_37035 = cljs.core.vec.call(null,chs);
var inst_37036 = inst_37035;
var state_37064__$1 = (function (){var statearr_37069 = state_37064;
(statearr_37069[(10)] = inst_37036);

return statearr_37069;
})();
var statearr_37070_37092 = state_37064__$1;
(statearr_37070_37092[(2)] = null);

(statearr_37070_37092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37065 === (4))){
var inst_37036 = (state_37064[(10)]);
var state_37064__$1 = state_37064;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37064__$1,(7),inst_37036);
} else {
if((state_val_37065 === (6))){
var inst_37060 = (state_37064[(2)]);
var state_37064__$1 = state_37064;
var statearr_37071_37093 = state_37064__$1;
(statearr_37071_37093[(2)] = inst_37060);

(statearr_37071_37093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37065 === (3))){
var inst_37062 = (state_37064[(2)]);
var state_37064__$1 = state_37064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37064__$1,inst_37062);
} else {
if((state_val_37065 === (2))){
var inst_37036 = (state_37064[(10)]);
var inst_37038 = cljs.core.count.call(null,inst_37036);
var inst_37039 = (inst_37038 > (0));
var state_37064__$1 = state_37064;
if(cljs.core.truth_(inst_37039)){
var statearr_37073_37094 = state_37064__$1;
(statearr_37073_37094[(1)] = (4));

} else {
var statearr_37074_37095 = state_37064__$1;
(statearr_37074_37095[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37065 === (11))){
var inst_37036 = (state_37064[(10)]);
var inst_37053 = (state_37064[(2)]);
var tmp37072 = inst_37036;
var inst_37036__$1 = tmp37072;
var state_37064__$1 = (function (){var statearr_37075 = state_37064;
(statearr_37075[(10)] = inst_37036__$1);

(statearr_37075[(11)] = inst_37053);

return statearr_37075;
})();
var statearr_37076_37096 = state_37064__$1;
(statearr_37076_37096[(2)] = null);

(statearr_37076_37096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37065 === (9))){
var inst_37044 = (state_37064[(7)]);
var state_37064__$1 = state_37064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37064__$1,(11),out,inst_37044);
} else {
if((state_val_37065 === (5))){
var inst_37058 = cljs.core.async.close_BANG_.call(null,out);
var state_37064__$1 = state_37064;
var statearr_37077_37097 = state_37064__$1;
(statearr_37077_37097[(2)] = inst_37058);

(statearr_37077_37097[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37065 === (10))){
var inst_37056 = (state_37064[(2)]);
var state_37064__$1 = state_37064;
var statearr_37078_37098 = state_37064__$1;
(statearr_37078_37098[(2)] = inst_37056);

(statearr_37078_37098[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37065 === (8))){
var inst_37036 = (state_37064[(10)]);
var inst_37044 = (state_37064[(7)]);
var inst_37043 = (state_37064[(8)]);
var inst_37045 = (state_37064[(9)]);
var inst_37048 = (function (){var cs = inst_37036;
var vec__37041 = inst_37043;
var v = inst_37044;
var c = inst_37045;
return ((function (cs,vec__37041,v,c,inst_37036,inst_37044,inst_37043,inst_37045,state_val_37065,c__28903__auto___37089,out){
return (function (p1__37032_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__37032_SHARP_);
});
;})(cs,vec__37041,v,c,inst_37036,inst_37044,inst_37043,inst_37045,state_val_37065,c__28903__auto___37089,out))
})();
var inst_37049 = cljs.core.filterv.call(null,inst_37048,inst_37036);
var inst_37036__$1 = inst_37049;
var state_37064__$1 = (function (){var statearr_37079 = state_37064;
(statearr_37079[(10)] = inst_37036__$1);

return statearr_37079;
})();
var statearr_37080_37099 = state_37064__$1;
(statearr_37080_37099[(2)] = null);

(statearr_37080_37099[(1)] = (2));


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
});})(c__28903__auto___37089,out))
;
return ((function (switch__28841__auto__,c__28903__auto___37089,out){
return (function() {
var cljs$core$async$state_machine__28842__auto__ = null;
var cljs$core$async$state_machine__28842__auto____0 = (function (){
var statearr_37084 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37084[(0)] = cljs$core$async$state_machine__28842__auto__);

(statearr_37084[(1)] = (1));

return statearr_37084;
});
var cljs$core$async$state_machine__28842__auto____1 = (function (state_37064){
while(true){
var ret_value__28843__auto__ = (function (){try{while(true){
var result__28844__auto__ = switch__28841__auto__.call(null,state_37064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28844__auto__;
}
break;
}
}catch (e37085){if((e37085 instanceof Object)){
var ex__28845__auto__ = e37085;
var statearr_37086_37100 = state_37064;
(statearr_37086_37100[(5)] = ex__28845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37101 = state_37064;
state_37064 = G__37101;
continue;
} else {
return ret_value__28843__auto__;
}
break;
}
});
cljs$core$async$state_machine__28842__auto__ = function(state_37064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28842__auto____1.call(this,state_37064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28842__auto____0;
cljs$core$async$state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28842__auto____1;
return cljs$core$async$state_machine__28842__auto__;
})()
;})(switch__28841__auto__,c__28903__auto___37089,out))
})();
var state__28905__auto__ = (function (){var statearr_37087 = f__28904__auto__.call(null);
(statearr_37087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28903__auto___37089);

return statearr_37087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28905__auto__);
});})(c__28903__auto___37089,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__37103 = arguments.length;
switch (G__37103) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28903__auto___37151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28903__auto___37151,out){
return (function (){
var f__28904__auto__ = (function (){var switch__28841__auto__ = ((function (c__28903__auto___37151,out){
return (function (state_37127){
var state_val_37128 = (state_37127[(1)]);
if((state_val_37128 === (7))){
var inst_37109 = (state_37127[(7)]);
var inst_37109__$1 = (state_37127[(2)]);
var inst_37110 = (inst_37109__$1 == null);
var inst_37111 = cljs.core.not.call(null,inst_37110);
var state_37127__$1 = (function (){var statearr_37129 = state_37127;
(statearr_37129[(7)] = inst_37109__$1);

return statearr_37129;
})();
if(inst_37111){
var statearr_37130_37152 = state_37127__$1;
(statearr_37130_37152[(1)] = (8));

} else {
var statearr_37131_37153 = state_37127__$1;
(statearr_37131_37153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37128 === (1))){
var inst_37104 = (0);
var state_37127__$1 = (function (){var statearr_37132 = state_37127;
(statearr_37132[(8)] = inst_37104);

return statearr_37132;
})();
var statearr_37133_37154 = state_37127__$1;
(statearr_37133_37154[(2)] = null);

(statearr_37133_37154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37128 === (4))){
var state_37127__$1 = state_37127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37127__$1,(7),ch);
} else {
if((state_val_37128 === (6))){
var inst_37122 = (state_37127[(2)]);
var state_37127__$1 = state_37127;
var statearr_37134_37155 = state_37127__$1;
(statearr_37134_37155[(2)] = inst_37122);

(statearr_37134_37155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37128 === (3))){
var inst_37124 = (state_37127[(2)]);
var inst_37125 = cljs.core.async.close_BANG_.call(null,out);
var state_37127__$1 = (function (){var statearr_37135 = state_37127;
(statearr_37135[(9)] = inst_37124);

return statearr_37135;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37127__$1,inst_37125);
} else {
if((state_val_37128 === (2))){
var inst_37104 = (state_37127[(8)]);
var inst_37106 = (inst_37104 < n);
var state_37127__$1 = state_37127;
if(cljs.core.truth_(inst_37106)){
var statearr_37136_37156 = state_37127__$1;
(statearr_37136_37156[(1)] = (4));

} else {
var statearr_37137_37157 = state_37127__$1;
(statearr_37137_37157[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37128 === (11))){
var inst_37104 = (state_37127[(8)]);
var inst_37114 = (state_37127[(2)]);
var inst_37115 = (inst_37104 + (1));
var inst_37104__$1 = inst_37115;
var state_37127__$1 = (function (){var statearr_37138 = state_37127;
(statearr_37138[(10)] = inst_37114);

(statearr_37138[(8)] = inst_37104__$1);

return statearr_37138;
})();
var statearr_37139_37158 = state_37127__$1;
(statearr_37139_37158[(2)] = null);

(statearr_37139_37158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37128 === (9))){
var state_37127__$1 = state_37127;
var statearr_37140_37159 = state_37127__$1;
(statearr_37140_37159[(2)] = null);

(statearr_37140_37159[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37128 === (5))){
var state_37127__$1 = state_37127;
var statearr_37141_37160 = state_37127__$1;
(statearr_37141_37160[(2)] = null);

(statearr_37141_37160[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37128 === (10))){
var inst_37119 = (state_37127[(2)]);
var state_37127__$1 = state_37127;
var statearr_37142_37161 = state_37127__$1;
(statearr_37142_37161[(2)] = inst_37119);

(statearr_37142_37161[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37128 === (8))){
var inst_37109 = (state_37127[(7)]);
var state_37127__$1 = state_37127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37127__$1,(11),out,inst_37109);
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
});})(c__28903__auto___37151,out))
;
return ((function (switch__28841__auto__,c__28903__auto___37151,out){
return (function() {
var cljs$core$async$state_machine__28842__auto__ = null;
var cljs$core$async$state_machine__28842__auto____0 = (function (){
var statearr_37146 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37146[(0)] = cljs$core$async$state_machine__28842__auto__);

(statearr_37146[(1)] = (1));

return statearr_37146;
});
var cljs$core$async$state_machine__28842__auto____1 = (function (state_37127){
while(true){
var ret_value__28843__auto__ = (function (){try{while(true){
var result__28844__auto__ = switch__28841__auto__.call(null,state_37127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28844__auto__;
}
break;
}
}catch (e37147){if((e37147 instanceof Object)){
var ex__28845__auto__ = e37147;
var statearr_37148_37162 = state_37127;
(statearr_37148_37162[(5)] = ex__28845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37163 = state_37127;
state_37127 = G__37163;
continue;
} else {
return ret_value__28843__auto__;
}
break;
}
});
cljs$core$async$state_machine__28842__auto__ = function(state_37127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28842__auto____1.call(this,state_37127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28842__auto____0;
cljs$core$async$state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28842__auto____1;
return cljs$core$async$state_machine__28842__auto__;
})()
;})(switch__28841__auto__,c__28903__auto___37151,out))
})();
var state__28905__auto__ = (function (){var statearr_37149 = f__28904__auto__.call(null);
(statearr_37149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28903__auto___37151);

return statearr_37149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28905__auto__);
});})(c__28903__auto___37151,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t37171 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37171 = (function (map_LT_,f,ch,meta37172){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta37172 = meta37172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t37171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37173,meta37172__$1){
var self__ = this;
var _37173__$1 = this;
return (new cljs.core.async.t37171(self__.map_LT_,self__.f,self__.ch,meta37172__$1));
});

cljs.core.async.t37171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37173){
var self__ = this;
var _37173__$1 = this;
return self__.meta37172;
});

cljs.core.async.t37171.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t37171.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t37171.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t37171.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t37171.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t37174 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37174 = (function (map_LT_,f,ch,meta37172,_,fn1,meta37175){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta37172 = meta37172;
this._ = _;
this.fn1 = fn1;
this.meta37175 = meta37175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t37174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_37176,meta37175__$1){
var self__ = this;
var _37176__$1 = this;
return (new cljs.core.async.t37174(self__.map_LT_,self__.f,self__.ch,self__.meta37172,self__._,self__.fn1,meta37175__$1));
});})(___$1))
;

cljs.core.async.t37174.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_37176){
var self__ = this;
var _37176__$1 = this;
return self__.meta37175;
});})(___$1))
;

cljs.core.async.t37174.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t37174.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t37174.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__37164_SHARP_){
return f1.call(null,(((p1__37164_SHARP_ == null))?null:self__.f.call(null,p1__37164_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t37174.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37172","meta37172",-2080588434,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37175","meta37175",925166735,null)], null);
});})(___$1))
;

cljs.core.async.t37174.cljs$lang$type = true;

cljs.core.async.t37174.cljs$lang$ctorStr = "cljs.core.async/t37174";

cljs.core.async.t37174.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25565__auto__,writer__25566__auto__,opt__25567__auto__){
return cljs.core._write.call(null,writer__25566__auto__,"cljs.core.async/t37174");
});})(___$1))
;

cljs.core.async.__GT_t37174 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t37174(map_LT___$1,f__$1,ch__$1,meta37172__$1,___$2,fn1__$1,meta37175){
return (new cljs.core.async.t37174(map_LT___$1,f__$1,ch__$1,meta37172__$1,___$2,fn1__$1,meta37175));
});})(___$1))
;

}

return (new cljs.core.async.t37174(self__.map_LT_,self__.f,self__.ch,self__.meta37172,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24974__auto__ = ret;
if(cljs.core.truth_(and__24974__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24974__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t37171.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t37171.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t37171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37172","meta37172",-2080588434,null)], null);
});

cljs.core.async.t37171.cljs$lang$type = true;

cljs.core.async.t37171.cljs$lang$ctorStr = "cljs.core.async/t37171";

cljs.core.async.t37171.cljs$lang$ctorPrWriter = (function (this__25565__auto__,writer__25566__auto__,opt__25567__auto__){
return cljs.core._write.call(null,writer__25566__auto__,"cljs.core.async/t37171");
});

cljs.core.async.__GT_t37171 = (function cljs$core$async$map_LT__$___GT_t37171(map_LT___$1,f__$1,ch__$1,meta37172){
return (new cljs.core.async.t37171(map_LT___$1,f__$1,ch__$1,meta37172));
});

}

return (new cljs.core.async.t37171(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t37180 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37180 = (function (map_GT_,f,ch,meta37181){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta37181 = meta37181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t37180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37182,meta37181__$1){
var self__ = this;
var _37182__$1 = this;
return (new cljs.core.async.t37180(self__.map_GT_,self__.f,self__.ch,meta37181__$1));
});

cljs.core.async.t37180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37182){
var self__ = this;
var _37182__$1 = this;
return self__.meta37181;
});

cljs.core.async.t37180.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t37180.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t37180.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t37180.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t37180.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t37180.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t37180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37181","meta37181",-368945115,null)], null);
});

cljs.core.async.t37180.cljs$lang$type = true;

cljs.core.async.t37180.cljs$lang$ctorStr = "cljs.core.async/t37180";

cljs.core.async.t37180.cljs$lang$ctorPrWriter = (function (this__25565__auto__,writer__25566__auto__,opt__25567__auto__){
return cljs.core._write.call(null,writer__25566__auto__,"cljs.core.async/t37180");
});

cljs.core.async.__GT_t37180 = (function cljs$core$async$map_GT__$___GT_t37180(map_GT___$1,f__$1,ch__$1,meta37181){
return (new cljs.core.async.t37180(map_GT___$1,f__$1,ch__$1,meta37181));
});

}

return (new cljs.core.async.t37180(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t37186 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37186 = (function (filter_GT_,p,ch,meta37187){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta37187 = meta37187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t37186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37188,meta37187__$1){
var self__ = this;
var _37188__$1 = this;
return (new cljs.core.async.t37186(self__.filter_GT_,self__.p,self__.ch,meta37187__$1));
});

cljs.core.async.t37186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37188){
var self__ = this;
var _37188__$1 = this;
return self__.meta37187;
});

cljs.core.async.t37186.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t37186.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t37186.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t37186.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t37186.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t37186.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t37186.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t37186.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37187","meta37187",-1744347991,null)], null);
});

cljs.core.async.t37186.cljs$lang$type = true;

cljs.core.async.t37186.cljs$lang$ctorStr = "cljs.core.async/t37186";

cljs.core.async.t37186.cljs$lang$ctorPrWriter = (function (this__25565__auto__,writer__25566__auto__,opt__25567__auto__){
return cljs.core._write.call(null,writer__25566__auto__,"cljs.core.async/t37186");
});

cljs.core.async.__GT_t37186 = (function cljs$core$async$filter_GT__$___GT_t37186(filter_GT___$1,p__$1,ch__$1,meta37187){
return (new cljs.core.async.t37186(filter_GT___$1,p__$1,ch__$1,meta37187));
});

}

return (new cljs.core.async.t37186(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__37190 = arguments.length;
switch (G__37190) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28903__auto___37233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28903__auto___37233,out){
return (function (){
var f__28904__auto__ = (function (){var switch__28841__auto__ = ((function (c__28903__auto___37233,out){
return (function (state_37211){
var state_val_37212 = (state_37211[(1)]);
if((state_val_37212 === (7))){
var inst_37207 = (state_37211[(2)]);
var state_37211__$1 = state_37211;
var statearr_37213_37234 = state_37211__$1;
(statearr_37213_37234[(2)] = inst_37207);

(statearr_37213_37234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37212 === (1))){
var state_37211__$1 = state_37211;
var statearr_37214_37235 = state_37211__$1;
(statearr_37214_37235[(2)] = null);

(statearr_37214_37235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37212 === (4))){
var inst_37193 = (state_37211[(7)]);
var inst_37193__$1 = (state_37211[(2)]);
var inst_37194 = (inst_37193__$1 == null);
var state_37211__$1 = (function (){var statearr_37215 = state_37211;
(statearr_37215[(7)] = inst_37193__$1);

return statearr_37215;
})();
if(cljs.core.truth_(inst_37194)){
var statearr_37216_37236 = state_37211__$1;
(statearr_37216_37236[(1)] = (5));

} else {
var statearr_37217_37237 = state_37211__$1;
(statearr_37217_37237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37212 === (6))){
var inst_37193 = (state_37211[(7)]);
var inst_37198 = p.call(null,inst_37193);
var state_37211__$1 = state_37211;
if(cljs.core.truth_(inst_37198)){
var statearr_37218_37238 = state_37211__$1;
(statearr_37218_37238[(1)] = (8));

} else {
var statearr_37219_37239 = state_37211__$1;
(statearr_37219_37239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37212 === (3))){
var inst_37209 = (state_37211[(2)]);
var state_37211__$1 = state_37211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37211__$1,inst_37209);
} else {
if((state_val_37212 === (2))){
var state_37211__$1 = state_37211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37211__$1,(4),ch);
} else {
if((state_val_37212 === (11))){
var inst_37201 = (state_37211[(2)]);
var state_37211__$1 = state_37211;
var statearr_37220_37240 = state_37211__$1;
(statearr_37220_37240[(2)] = inst_37201);

(statearr_37220_37240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37212 === (9))){
var state_37211__$1 = state_37211;
var statearr_37221_37241 = state_37211__$1;
(statearr_37221_37241[(2)] = null);

(statearr_37221_37241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37212 === (5))){
var inst_37196 = cljs.core.async.close_BANG_.call(null,out);
var state_37211__$1 = state_37211;
var statearr_37222_37242 = state_37211__$1;
(statearr_37222_37242[(2)] = inst_37196);

(statearr_37222_37242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37212 === (10))){
var inst_37204 = (state_37211[(2)]);
var state_37211__$1 = (function (){var statearr_37223 = state_37211;
(statearr_37223[(8)] = inst_37204);

return statearr_37223;
})();
var statearr_37224_37243 = state_37211__$1;
(statearr_37224_37243[(2)] = null);

(statearr_37224_37243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37212 === (8))){
var inst_37193 = (state_37211[(7)]);
var state_37211__$1 = state_37211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37211__$1,(11),out,inst_37193);
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
});})(c__28903__auto___37233,out))
;
return ((function (switch__28841__auto__,c__28903__auto___37233,out){
return (function() {
var cljs$core$async$state_machine__28842__auto__ = null;
var cljs$core$async$state_machine__28842__auto____0 = (function (){
var statearr_37228 = [null,null,null,null,null,null,null,null,null];
(statearr_37228[(0)] = cljs$core$async$state_machine__28842__auto__);

(statearr_37228[(1)] = (1));

return statearr_37228;
});
var cljs$core$async$state_machine__28842__auto____1 = (function (state_37211){
while(true){
var ret_value__28843__auto__ = (function (){try{while(true){
var result__28844__auto__ = switch__28841__auto__.call(null,state_37211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28844__auto__;
}
break;
}
}catch (e37229){if((e37229 instanceof Object)){
var ex__28845__auto__ = e37229;
var statearr_37230_37244 = state_37211;
(statearr_37230_37244[(5)] = ex__28845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37245 = state_37211;
state_37211 = G__37245;
continue;
} else {
return ret_value__28843__auto__;
}
break;
}
});
cljs$core$async$state_machine__28842__auto__ = function(state_37211){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28842__auto____1.call(this,state_37211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28842__auto____0;
cljs$core$async$state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28842__auto____1;
return cljs$core$async$state_machine__28842__auto__;
})()
;})(switch__28841__auto__,c__28903__auto___37233,out))
})();
var state__28905__auto__ = (function (){var statearr_37231 = f__28904__auto__.call(null);
(statearr_37231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28903__auto___37233);

return statearr_37231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28905__auto__);
});})(c__28903__auto___37233,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__37247 = arguments.length;
switch (G__37247) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28903__auto__){
return (function (){
var f__28904__auto__ = (function (){var switch__28841__auto__ = ((function (c__28903__auto__){
return (function (state_37414){
var state_val_37415 = (state_37414[(1)]);
if((state_val_37415 === (7))){
var inst_37410 = (state_37414[(2)]);
var state_37414__$1 = state_37414;
var statearr_37416_37457 = state_37414__$1;
(statearr_37416_37457[(2)] = inst_37410);

(statearr_37416_37457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37415 === (20))){
var inst_37380 = (state_37414[(7)]);
var inst_37391 = (state_37414[(2)]);
var inst_37392 = cljs.core.next.call(null,inst_37380);
var inst_37366 = inst_37392;
var inst_37367 = null;
var inst_37368 = (0);
var inst_37369 = (0);
var state_37414__$1 = (function (){var statearr_37417 = state_37414;
(statearr_37417[(8)] = inst_37366);

(statearr_37417[(9)] = inst_37391);

(statearr_37417[(10)] = inst_37367);

(statearr_37417[(11)] = inst_37368);

(statearr_37417[(12)] = inst_37369);

return statearr_37417;
})();
var statearr_37418_37458 = state_37414__$1;
(statearr_37418_37458[(2)] = null);

(statearr_37418_37458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37415 === (1))){
var state_37414__$1 = state_37414;
var statearr_37419_37459 = state_37414__$1;
(statearr_37419_37459[(2)] = null);

(statearr_37419_37459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37415 === (4))){
var inst_37355 = (state_37414[(13)]);
var inst_37355__$1 = (state_37414[(2)]);
var inst_37356 = (inst_37355__$1 == null);
var state_37414__$1 = (function (){var statearr_37420 = state_37414;
(statearr_37420[(13)] = inst_37355__$1);

return statearr_37420;
})();
if(cljs.core.truth_(inst_37356)){
var statearr_37421_37460 = state_37414__$1;
(statearr_37421_37460[(1)] = (5));

} else {
var statearr_37422_37461 = state_37414__$1;
(statearr_37422_37461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37415 === (15))){
var state_37414__$1 = state_37414;
var statearr_37426_37462 = state_37414__$1;
(statearr_37426_37462[(2)] = null);

(statearr_37426_37462[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37415 === (21))){
var state_37414__$1 = state_37414;
var statearr_37427_37463 = state_37414__$1;
(statearr_37427_37463[(2)] = null);

(statearr_37427_37463[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37415 === (13))){
var inst_37366 = (state_37414[(8)]);
var inst_37367 = (state_37414[(10)]);
var inst_37368 = (state_37414[(11)]);
var inst_37369 = (state_37414[(12)]);
var inst_37376 = (state_37414[(2)]);
var inst_37377 = (inst_37369 + (1));
var tmp37423 = inst_37366;
var tmp37424 = inst_37367;
var tmp37425 = inst_37368;
var inst_37366__$1 = tmp37423;
var inst_37367__$1 = tmp37424;
var inst_37368__$1 = tmp37425;
var inst_37369__$1 = inst_37377;
var state_37414__$1 = (function (){var statearr_37428 = state_37414;
(statearr_37428[(8)] = inst_37366__$1);

(statearr_37428[(10)] = inst_37367__$1);

(statearr_37428[(11)] = inst_37368__$1);

(statearr_37428[(14)] = inst_37376);

(statearr_37428[(12)] = inst_37369__$1);

return statearr_37428;
})();
var statearr_37429_37464 = state_37414__$1;
(statearr_37429_37464[(2)] = null);

(statearr_37429_37464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37415 === (22))){
var state_37414__$1 = state_37414;
var statearr_37430_37465 = state_37414__$1;
(statearr_37430_37465[(2)] = null);

(statearr_37430_37465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37415 === (6))){
var inst_37355 = (state_37414[(13)]);
var inst_37364 = f.call(null,inst_37355);
var inst_37365 = cljs.core.seq.call(null,inst_37364);
var inst_37366 = inst_37365;
var inst_37367 = null;
var inst_37368 = (0);
var inst_37369 = (0);
var state_37414__$1 = (function (){var statearr_37431 = state_37414;
(statearr_37431[(8)] = inst_37366);

(statearr_37431[(10)] = inst_37367);

(statearr_37431[(11)] = inst_37368);

(statearr_37431[(12)] = inst_37369);

return statearr_37431;
})();
var statearr_37432_37466 = state_37414__$1;
(statearr_37432_37466[(2)] = null);

(statearr_37432_37466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37415 === (17))){
var inst_37380 = (state_37414[(7)]);
var inst_37384 = cljs.core.chunk_first.call(null,inst_37380);
var inst_37385 = cljs.core.chunk_rest.call(null,inst_37380);
var inst_37386 = cljs.core.count.call(null,inst_37384);
var inst_37366 = inst_37385;
var inst_37367 = inst_37384;
var inst_37368 = inst_37386;
var inst_37369 = (0);
var state_37414__$1 = (function (){var statearr_37433 = state_37414;
(statearr_37433[(8)] = inst_37366);

(statearr_37433[(10)] = inst_37367);

(statearr_37433[(11)] = inst_37368);

(statearr_37433[(12)] = inst_37369);

return statearr_37433;
})();
var statearr_37434_37467 = state_37414__$1;
(statearr_37434_37467[(2)] = null);

(statearr_37434_37467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37415 === (3))){
var inst_37412 = (state_37414[(2)]);
var state_37414__$1 = state_37414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37414__$1,inst_37412);
} else {
if((state_val_37415 === (12))){
var inst_37400 = (state_37414[(2)]);
var state_37414__$1 = state_37414;
var statearr_37435_37468 = state_37414__$1;
(statearr_37435_37468[(2)] = inst_37400);

(statearr_37435_37468[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37415 === (2))){
var state_37414__$1 = state_37414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37414__$1,(4),in$);
} else {
if((state_val_37415 === (23))){
var inst_37408 = (state_37414[(2)]);
var state_37414__$1 = state_37414;
var statearr_37436_37469 = state_37414__$1;
(statearr_37436_37469[(2)] = inst_37408);

(statearr_37436_37469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37415 === (19))){
var inst_37395 = (state_37414[(2)]);
var state_37414__$1 = state_37414;
var statearr_37437_37470 = state_37414__$1;
(statearr_37437_37470[(2)] = inst_37395);

(statearr_37437_37470[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37415 === (11))){
var inst_37366 = (state_37414[(8)]);
var inst_37380 = (state_37414[(7)]);
var inst_37380__$1 = cljs.core.seq.call(null,inst_37366);
var state_37414__$1 = (function (){var statearr_37438 = state_37414;
(statearr_37438[(7)] = inst_37380__$1);

return statearr_37438;
})();
if(inst_37380__$1){
var statearr_37439_37471 = state_37414__$1;
(statearr_37439_37471[(1)] = (14));

} else {
var statearr_37440_37472 = state_37414__$1;
(statearr_37440_37472[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37415 === (9))){
var inst_37402 = (state_37414[(2)]);
var inst_37403 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_37414__$1 = (function (){var statearr_37441 = state_37414;
(statearr_37441[(15)] = inst_37402);

return statearr_37441;
})();
if(cljs.core.truth_(inst_37403)){
var statearr_37442_37473 = state_37414__$1;
(statearr_37442_37473[(1)] = (21));

} else {
var statearr_37443_37474 = state_37414__$1;
(statearr_37443_37474[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37415 === (5))){
var inst_37358 = cljs.core.async.close_BANG_.call(null,out);
var state_37414__$1 = state_37414;
var statearr_37444_37475 = state_37414__$1;
(statearr_37444_37475[(2)] = inst_37358);

(statearr_37444_37475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37415 === (14))){
var inst_37380 = (state_37414[(7)]);
var inst_37382 = cljs.core.chunked_seq_QMARK_.call(null,inst_37380);
var state_37414__$1 = state_37414;
if(inst_37382){
var statearr_37445_37476 = state_37414__$1;
(statearr_37445_37476[(1)] = (17));

} else {
var statearr_37446_37477 = state_37414__$1;
(statearr_37446_37477[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37415 === (16))){
var inst_37398 = (state_37414[(2)]);
var state_37414__$1 = state_37414;
var statearr_37447_37478 = state_37414__$1;
(statearr_37447_37478[(2)] = inst_37398);

(statearr_37447_37478[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37415 === (10))){
var inst_37367 = (state_37414[(10)]);
var inst_37369 = (state_37414[(12)]);
var inst_37374 = cljs.core._nth.call(null,inst_37367,inst_37369);
var state_37414__$1 = state_37414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37414__$1,(13),out,inst_37374);
} else {
if((state_val_37415 === (18))){
var inst_37380 = (state_37414[(7)]);
var inst_37389 = cljs.core.first.call(null,inst_37380);
var state_37414__$1 = state_37414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37414__$1,(20),out,inst_37389);
} else {
if((state_val_37415 === (8))){
var inst_37368 = (state_37414[(11)]);
var inst_37369 = (state_37414[(12)]);
var inst_37371 = (inst_37369 < inst_37368);
var inst_37372 = inst_37371;
var state_37414__$1 = state_37414;
if(cljs.core.truth_(inst_37372)){
var statearr_37448_37479 = state_37414__$1;
(statearr_37448_37479[(1)] = (10));

} else {
var statearr_37449_37480 = state_37414__$1;
(statearr_37449_37480[(1)] = (11));

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
});})(c__28903__auto__))
;
return ((function (switch__28841__auto__,c__28903__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28842__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28842__auto____0 = (function (){
var statearr_37453 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37453[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28842__auto__);

(statearr_37453[(1)] = (1));

return statearr_37453;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28842__auto____1 = (function (state_37414){
while(true){
var ret_value__28843__auto__ = (function (){try{while(true){
var result__28844__auto__ = switch__28841__auto__.call(null,state_37414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28844__auto__;
}
break;
}
}catch (e37454){if((e37454 instanceof Object)){
var ex__28845__auto__ = e37454;
var statearr_37455_37481 = state_37414;
(statearr_37455_37481[(5)] = ex__28845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37482 = state_37414;
state_37414 = G__37482;
continue;
} else {
return ret_value__28843__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28842__auto__ = function(state_37414){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28842__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28842__auto____1.call(this,state_37414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28842__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28842__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28842__auto__;
})()
;})(switch__28841__auto__,c__28903__auto__))
})();
var state__28905__auto__ = (function (){var statearr_37456 = f__28904__auto__.call(null);
(statearr_37456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28903__auto__);

return statearr_37456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28905__auto__);
});})(c__28903__auto__))
);

return c__28903__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__37484 = arguments.length;
switch (G__37484) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__37487 = arguments.length;
switch (G__37487) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__37490 = arguments.length;
switch (G__37490) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28903__auto___37540 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28903__auto___37540,out){
return (function (){
var f__28904__auto__ = (function (){var switch__28841__auto__ = ((function (c__28903__auto___37540,out){
return (function (state_37514){
var state_val_37515 = (state_37514[(1)]);
if((state_val_37515 === (7))){
var inst_37509 = (state_37514[(2)]);
var state_37514__$1 = state_37514;
var statearr_37516_37541 = state_37514__$1;
(statearr_37516_37541[(2)] = inst_37509);

(statearr_37516_37541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37515 === (1))){
var inst_37491 = null;
var state_37514__$1 = (function (){var statearr_37517 = state_37514;
(statearr_37517[(7)] = inst_37491);

return statearr_37517;
})();
var statearr_37518_37542 = state_37514__$1;
(statearr_37518_37542[(2)] = null);

(statearr_37518_37542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37515 === (4))){
var inst_37494 = (state_37514[(8)]);
var inst_37494__$1 = (state_37514[(2)]);
var inst_37495 = (inst_37494__$1 == null);
var inst_37496 = cljs.core.not.call(null,inst_37495);
var state_37514__$1 = (function (){var statearr_37519 = state_37514;
(statearr_37519[(8)] = inst_37494__$1);

return statearr_37519;
})();
if(inst_37496){
var statearr_37520_37543 = state_37514__$1;
(statearr_37520_37543[(1)] = (5));

} else {
var statearr_37521_37544 = state_37514__$1;
(statearr_37521_37544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37515 === (6))){
var state_37514__$1 = state_37514;
var statearr_37522_37545 = state_37514__$1;
(statearr_37522_37545[(2)] = null);

(statearr_37522_37545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37515 === (3))){
var inst_37511 = (state_37514[(2)]);
var inst_37512 = cljs.core.async.close_BANG_.call(null,out);
var state_37514__$1 = (function (){var statearr_37523 = state_37514;
(statearr_37523[(9)] = inst_37511);

return statearr_37523;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37514__$1,inst_37512);
} else {
if((state_val_37515 === (2))){
var state_37514__$1 = state_37514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37514__$1,(4),ch);
} else {
if((state_val_37515 === (11))){
var inst_37494 = (state_37514[(8)]);
var inst_37503 = (state_37514[(2)]);
var inst_37491 = inst_37494;
var state_37514__$1 = (function (){var statearr_37524 = state_37514;
(statearr_37524[(10)] = inst_37503);

(statearr_37524[(7)] = inst_37491);

return statearr_37524;
})();
var statearr_37525_37546 = state_37514__$1;
(statearr_37525_37546[(2)] = null);

(statearr_37525_37546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37515 === (9))){
var inst_37494 = (state_37514[(8)]);
var state_37514__$1 = state_37514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37514__$1,(11),out,inst_37494);
} else {
if((state_val_37515 === (5))){
var inst_37491 = (state_37514[(7)]);
var inst_37494 = (state_37514[(8)]);
var inst_37498 = cljs.core._EQ_.call(null,inst_37494,inst_37491);
var state_37514__$1 = state_37514;
if(inst_37498){
var statearr_37527_37547 = state_37514__$1;
(statearr_37527_37547[(1)] = (8));

} else {
var statearr_37528_37548 = state_37514__$1;
(statearr_37528_37548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37515 === (10))){
var inst_37506 = (state_37514[(2)]);
var state_37514__$1 = state_37514;
var statearr_37529_37549 = state_37514__$1;
(statearr_37529_37549[(2)] = inst_37506);

(statearr_37529_37549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37515 === (8))){
var inst_37491 = (state_37514[(7)]);
var tmp37526 = inst_37491;
var inst_37491__$1 = tmp37526;
var state_37514__$1 = (function (){var statearr_37530 = state_37514;
(statearr_37530[(7)] = inst_37491__$1);

return statearr_37530;
})();
var statearr_37531_37550 = state_37514__$1;
(statearr_37531_37550[(2)] = null);

(statearr_37531_37550[(1)] = (2));


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
});})(c__28903__auto___37540,out))
;
return ((function (switch__28841__auto__,c__28903__auto___37540,out){
return (function() {
var cljs$core$async$state_machine__28842__auto__ = null;
var cljs$core$async$state_machine__28842__auto____0 = (function (){
var statearr_37535 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37535[(0)] = cljs$core$async$state_machine__28842__auto__);

(statearr_37535[(1)] = (1));

return statearr_37535;
});
var cljs$core$async$state_machine__28842__auto____1 = (function (state_37514){
while(true){
var ret_value__28843__auto__ = (function (){try{while(true){
var result__28844__auto__ = switch__28841__auto__.call(null,state_37514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28844__auto__;
}
break;
}
}catch (e37536){if((e37536 instanceof Object)){
var ex__28845__auto__ = e37536;
var statearr_37537_37551 = state_37514;
(statearr_37537_37551[(5)] = ex__28845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37552 = state_37514;
state_37514 = G__37552;
continue;
} else {
return ret_value__28843__auto__;
}
break;
}
});
cljs$core$async$state_machine__28842__auto__ = function(state_37514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28842__auto____1.call(this,state_37514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28842__auto____0;
cljs$core$async$state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28842__auto____1;
return cljs$core$async$state_machine__28842__auto__;
})()
;})(switch__28841__auto__,c__28903__auto___37540,out))
})();
var state__28905__auto__ = (function (){var statearr_37538 = f__28904__auto__.call(null);
(statearr_37538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28903__auto___37540);

return statearr_37538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28905__auto__);
});})(c__28903__auto___37540,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__37554 = arguments.length;
switch (G__37554) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28903__auto___37623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28903__auto___37623,out){
return (function (){
var f__28904__auto__ = (function (){var switch__28841__auto__ = ((function (c__28903__auto___37623,out){
return (function (state_37592){
var state_val_37593 = (state_37592[(1)]);
if((state_val_37593 === (7))){
var inst_37588 = (state_37592[(2)]);
var state_37592__$1 = state_37592;
var statearr_37594_37624 = state_37592__$1;
(statearr_37594_37624[(2)] = inst_37588);

(statearr_37594_37624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (1))){
var inst_37555 = (new Array(n));
var inst_37556 = inst_37555;
var inst_37557 = (0);
var state_37592__$1 = (function (){var statearr_37595 = state_37592;
(statearr_37595[(7)] = inst_37556);

(statearr_37595[(8)] = inst_37557);

return statearr_37595;
})();
var statearr_37596_37625 = state_37592__$1;
(statearr_37596_37625[(2)] = null);

(statearr_37596_37625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (4))){
var inst_37560 = (state_37592[(9)]);
var inst_37560__$1 = (state_37592[(2)]);
var inst_37561 = (inst_37560__$1 == null);
var inst_37562 = cljs.core.not.call(null,inst_37561);
var state_37592__$1 = (function (){var statearr_37597 = state_37592;
(statearr_37597[(9)] = inst_37560__$1);

return statearr_37597;
})();
if(inst_37562){
var statearr_37598_37626 = state_37592__$1;
(statearr_37598_37626[(1)] = (5));

} else {
var statearr_37599_37627 = state_37592__$1;
(statearr_37599_37627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (15))){
var inst_37582 = (state_37592[(2)]);
var state_37592__$1 = state_37592;
var statearr_37600_37628 = state_37592__$1;
(statearr_37600_37628[(2)] = inst_37582);

(statearr_37600_37628[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (13))){
var state_37592__$1 = state_37592;
var statearr_37601_37629 = state_37592__$1;
(statearr_37601_37629[(2)] = null);

(statearr_37601_37629[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (6))){
var inst_37557 = (state_37592[(8)]);
var inst_37578 = (inst_37557 > (0));
var state_37592__$1 = state_37592;
if(cljs.core.truth_(inst_37578)){
var statearr_37602_37630 = state_37592__$1;
(statearr_37602_37630[(1)] = (12));

} else {
var statearr_37603_37631 = state_37592__$1;
(statearr_37603_37631[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (3))){
var inst_37590 = (state_37592[(2)]);
var state_37592__$1 = state_37592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37592__$1,inst_37590);
} else {
if((state_val_37593 === (12))){
var inst_37556 = (state_37592[(7)]);
var inst_37580 = cljs.core.vec.call(null,inst_37556);
var state_37592__$1 = state_37592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37592__$1,(15),out,inst_37580);
} else {
if((state_val_37593 === (2))){
var state_37592__$1 = state_37592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37592__$1,(4),ch);
} else {
if((state_val_37593 === (11))){
var inst_37572 = (state_37592[(2)]);
var inst_37573 = (new Array(n));
var inst_37556 = inst_37573;
var inst_37557 = (0);
var state_37592__$1 = (function (){var statearr_37604 = state_37592;
(statearr_37604[(7)] = inst_37556);

(statearr_37604[(8)] = inst_37557);

(statearr_37604[(10)] = inst_37572);

return statearr_37604;
})();
var statearr_37605_37632 = state_37592__$1;
(statearr_37605_37632[(2)] = null);

(statearr_37605_37632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (9))){
var inst_37556 = (state_37592[(7)]);
var inst_37570 = cljs.core.vec.call(null,inst_37556);
var state_37592__$1 = state_37592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37592__$1,(11),out,inst_37570);
} else {
if((state_val_37593 === (5))){
var inst_37565 = (state_37592[(11)]);
var inst_37560 = (state_37592[(9)]);
var inst_37556 = (state_37592[(7)]);
var inst_37557 = (state_37592[(8)]);
var inst_37564 = (inst_37556[inst_37557] = inst_37560);
var inst_37565__$1 = (inst_37557 + (1));
var inst_37566 = (inst_37565__$1 < n);
var state_37592__$1 = (function (){var statearr_37606 = state_37592;
(statearr_37606[(12)] = inst_37564);

(statearr_37606[(11)] = inst_37565__$1);

return statearr_37606;
})();
if(cljs.core.truth_(inst_37566)){
var statearr_37607_37633 = state_37592__$1;
(statearr_37607_37633[(1)] = (8));

} else {
var statearr_37608_37634 = state_37592__$1;
(statearr_37608_37634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (14))){
var inst_37585 = (state_37592[(2)]);
var inst_37586 = cljs.core.async.close_BANG_.call(null,out);
var state_37592__$1 = (function (){var statearr_37610 = state_37592;
(statearr_37610[(13)] = inst_37585);

return statearr_37610;
})();
var statearr_37611_37635 = state_37592__$1;
(statearr_37611_37635[(2)] = inst_37586);

(statearr_37611_37635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (10))){
var inst_37576 = (state_37592[(2)]);
var state_37592__$1 = state_37592;
var statearr_37612_37636 = state_37592__$1;
(statearr_37612_37636[(2)] = inst_37576);

(statearr_37612_37636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (8))){
var inst_37565 = (state_37592[(11)]);
var inst_37556 = (state_37592[(7)]);
var tmp37609 = inst_37556;
var inst_37556__$1 = tmp37609;
var inst_37557 = inst_37565;
var state_37592__$1 = (function (){var statearr_37613 = state_37592;
(statearr_37613[(7)] = inst_37556__$1);

(statearr_37613[(8)] = inst_37557);

return statearr_37613;
})();
var statearr_37614_37637 = state_37592__$1;
(statearr_37614_37637[(2)] = null);

(statearr_37614_37637[(1)] = (2));


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
});})(c__28903__auto___37623,out))
;
return ((function (switch__28841__auto__,c__28903__auto___37623,out){
return (function() {
var cljs$core$async$state_machine__28842__auto__ = null;
var cljs$core$async$state_machine__28842__auto____0 = (function (){
var statearr_37618 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37618[(0)] = cljs$core$async$state_machine__28842__auto__);

(statearr_37618[(1)] = (1));

return statearr_37618;
});
var cljs$core$async$state_machine__28842__auto____1 = (function (state_37592){
while(true){
var ret_value__28843__auto__ = (function (){try{while(true){
var result__28844__auto__ = switch__28841__auto__.call(null,state_37592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28844__auto__;
}
break;
}
}catch (e37619){if((e37619 instanceof Object)){
var ex__28845__auto__ = e37619;
var statearr_37620_37638 = state_37592;
(statearr_37620_37638[(5)] = ex__28845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37639 = state_37592;
state_37592 = G__37639;
continue;
} else {
return ret_value__28843__auto__;
}
break;
}
});
cljs$core$async$state_machine__28842__auto__ = function(state_37592){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28842__auto____1.call(this,state_37592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28842__auto____0;
cljs$core$async$state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28842__auto____1;
return cljs$core$async$state_machine__28842__auto__;
})()
;})(switch__28841__auto__,c__28903__auto___37623,out))
})();
var state__28905__auto__ = (function (){var statearr_37621 = f__28904__auto__.call(null);
(statearr_37621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28903__auto___37623);

return statearr_37621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28905__auto__);
});})(c__28903__auto___37623,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__37641 = arguments.length;
switch (G__37641) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28903__auto___37714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28903__auto___37714,out){
return (function (){
var f__28904__auto__ = (function (){var switch__28841__auto__ = ((function (c__28903__auto___37714,out){
return (function (state_37683){
var state_val_37684 = (state_37683[(1)]);
if((state_val_37684 === (7))){
var inst_37679 = (state_37683[(2)]);
var state_37683__$1 = state_37683;
var statearr_37685_37715 = state_37683__$1;
(statearr_37685_37715[(2)] = inst_37679);

(statearr_37685_37715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37684 === (1))){
var inst_37642 = [];
var inst_37643 = inst_37642;
var inst_37644 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37683__$1 = (function (){var statearr_37686 = state_37683;
(statearr_37686[(7)] = inst_37643);

(statearr_37686[(8)] = inst_37644);

return statearr_37686;
})();
var statearr_37687_37716 = state_37683__$1;
(statearr_37687_37716[(2)] = null);

(statearr_37687_37716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37684 === (4))){
var inst_37647 = (state_37683[(9)]);
var inst_37647__$1 = (state_37683[(2)]);
var inst_37648 = (inst_37647__$1 == null);
var inst_37649 = cljs.core.not.call(null,inst_37648);
var state_37683__$1 = (function (){var statearr_37688 = state_37683;
(statearr_37688[(9)] = inst_37647__$1);

return statearr_37688;
})();
if(inst_37649){
var statearr_37689_37717 = state_37683__$1;
(statearr_37689_37717[(1)] = (5));

} else {
var statearr_37690_37718 = state_37683__$1;
(statearr_37690_37718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37684 === (15))){
var inst_37673 = (state_37683[(2)]);
var state_37683__$1 = state_37683;
var statearr_37691_37719 = state_37683__$1;
(statearr_37691_37719[(2)] = inst_37673);

(statearr_37691_37719[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37684 === (13))){
var state_37683__$1 = state_37683;
var statearr_37692_37720 = state_37683__$1;
(statearr_37692_37720[(2)] = null);

(statearr_37692_37720[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37684 === (6))){
var inst_37643 = (state_37683[(7)]);
var inst_37668 = inst_37643.length;
var inst_37669 = (inst_37668 > (0));
var state_37683__$1 = state_37683;
if(cljs.core.truth_(inst_37669)){
var statearr_37693_37721 = state_37683__$1;
(statearr_37693_37721[(1)] = (12));

} else {
var statearr_37694_37722 = state_37683__$1;
(statearr_37694_37722[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37684 === (3))){
var inst_37681 = (state_37683[(2)]);
var state_37683__$1 = state_37683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37683__$1,inst_37681);
} else {
if((state_val_37684 === (12))){
var inst_37643 = (state_37683[(7)]);
var inst_37671 = cljs.core.vec.call(null,inst_37643);
var state_37683__$1 = state_37683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37683__$1,(15),out,inst_37671);
} else {
if((state_val_37684 === (2))){
var state_37683__$1 = state_37683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37683__$1,(4),ch);
} else {
if((state_val_37684 === (11))){
var inst_37651 = (state_37683[(10)]);
var inst_37647 = (state_37683[(9)]);
var inst_37661 = (state_37683[(2)]);
var inst_37662 = [];
var inst_37663 = inst_37662.push(inst_37647);
var inst_37643 = inst_37662;
var inst_37644 = inst_37651;
var state_37683__$1 = (function (){var statearr_37695 = state_37683;
(statearr_37695[(7)] = inst_37643);

(statearr_37695[(11)] = inst_37663);

(statearr_37695[(12)] = inst_37661);

(statearr_37695[(8)] = inst_37644);

return statearr_37695;
})();
var statearr_37696_37723 = state_37683__$1;
(statearr_37696_37723[(2)] = null);

(statearr_37696_37723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37684 === (9))){
var inst_37643 = (state_37683[(7)]);
var inst_37659 = cljs.core.vec.call(null,inst_37643);
var state_37683__$1 = state_37683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37683__$1,(11),out,inst_37659);
} else {
if((state_val_37684 === (5))){
var inst_37651 = (state_37683[(10)]);
var inst_37644 = (state_37683[(8)]);
var inst_37647 = (state_37683[(9)]);
var inst_37651__$1 = f.call(null,inst_37647);
var inst_37652 = cljs.core._EQ_.call(null,inst_37651__$1,inst_37644);
var inst_37653 = cljs.core.keyword_identical_QMARK_.call(null,inst_37644,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37654 = (inst_37652) || (inst_37653);
var state_37683__$1 = (function (){var statearr_37697 = state_37683;
(statearr_37697[(10)] = inst_37651__$1);

return statearr_37697;
})();
if(cljs.core.truth_(inst_37654)){
var statearr_37698_37724 = state_37683__$1;
(statearr_37698_37724[(1)] = (8));

} else {
var statearr_37699_37725 = state_37683__$1;
(statearr_37699_37725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37684 === (14))){
var inst_37676 = (state_37683[(2)]);
var inst_37677 = cljs.core.async.close_BANG_.call(null,out);
var state_37683__$1 = (function (){var statearr_37701 = state_37683;
(statearr_37701[(13)] = inst_37676);

return statearr_37701;
})();
var statearr_37702_37726 = state_37683__$1;
(statearr_37702_37726[(2)] = inst_37677);

(statearr_37702_37726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37684 === (10))){
var inst_37666 = (state_37683[(2)]);
var state_37683__$1 = state_37683;
var statearr_37703_37727 = state_37683__$1;
(statearr_37703_37727[(2)] = inst_37666);

(statearr_37703_37727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37684 === (8))){
var inst_37643 = (state_37683[(7)]);
var inst_37651 = (state_37683[(10)]);
var inst_37647 = (state_37683[(9)]);
var inst_37656 = inst_37643.push(inst_37647);
var tmp37700 = inst_37643;
var inst_37643__$1 = tmp37700;
var inst_37644 = inst_37651;
var state_37683__$1 = (function (){var statearr_37704 = state_37683;
(statearr_37704[(7)] = inst_37643__$1);

(statearr_37704[(14)] = inst_37656);

(statearr_37704[(8)] = inst_37644);

return statearr_37704;
})();
var statearr_37705_37728 = state_37683__$1;
(statearr_37705_37728[(2)] = null);

(statearr_37705_37728[(1)] = (2));


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
});})(c__28903__auto___37714,out))
;
return ((function (switch__28841__auto__,c__28903__auto___37714,out){
return (function() {
var cljs$core$async$state_machine__28842__auto__ = null;
var cljs$core$async$state_machine__28842__auto____0 = (function (){
var statearr_37709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37709[(0)] = cljs$core$async$state_machine__28842__auto__);

(statearr_37709[(1)] = (1));

return statearr_37709;
});
var cljs$core$async$state_machine__28842__auto____1 = (function (state_37683){
while(true){
var ret_value__28843__auto__ = (function (){try{while(true){
var result__28844__auto__ = switch__28841__auto__.call(null,state_37683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28844__auto__;
}
break;
}
}catch (e37710){if((e37710 instanceof Object)){
var ex__28845__auto__ = e37710;
var statearr_37711_37729 = state_37683;
(statearr_37711_37729[(5)] = ex__28845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37730 = state_37683;
state_37683 = G__37730;
continue;
} else {
return ret_value__28843__auto__;
}
break;
}
});
cljs$core$async$state_machine__28842__auto__ = function(state_37683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28842__auto____1.call(this,state_37683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28842__auto____0;
cljs$core$async$state_machine__28842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28842__auto____1;
return cljs$core$async$state_machine__28842__auto__;
})()
;})(switch__28841__auto__,c__28903__auto___37714,out))
})();
var state__28905__auto__ = (function (){var statearr_37712 = f__28904__auto__.call(null);
(statearr_37712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28903__auto___37714);

return statearr_37712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28905__auto__);
});})(c__28903__auto___37714,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map