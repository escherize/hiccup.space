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
if(typeof cljs.core.async.t35982 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35982 = (function (fn_handler,f,meta35983){
this.fn_handler = fn_handler;
this.f = f;
this.meta35983 = meta35983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35984,meta35983__$1){
var self__ = this;
var _35984__$1 = this;
return (new cljs.core.async.t35982(self__.fn_handler,self__.f,meta35983__$1));
});

cljs.core.async.t35982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35984){
var self__ = this;
var _35984__$1 = this;
return self__.meta35983;
});

cljs.core.async.t35982.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t35982.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t35982.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t35982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta35983","meta35983",296624670,null)], null);
});

cljs.core.async.t35982.cljs$lang$type = true;

cljs.core.async.t35982.cljs$lang$ctorStr = "cljs.core.async/t35982";

cljs.core.async.t35982.cljs$lang$ctorPrWriter = (function (this__25565__auto__,writer__25566__auto__,opt__25567__auto__){
return cljs.core._write.call(null,writer__25566__auto__,"cljs.core.async/t35982");
});

cljs.core.async.__GT_t35982 = (function cljs$core$async$fn_handler_$___GT_t35982(fn_handler__$1,f__$1,meta35983){
return (new cljs.core.async.t35982(fn_handler__$1,f__$1,meta35983));
});

}

return (new cljs.core.async.t35982(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35986 = buff;
if(G__35986){
var bit__25660__auto__ = null;
if(cljs.core.truth_((function (){var or__24986__auto__ = bit__25660__auto__;
if(cljs.core.truth_(or__24986__auto__)){
return or__24986__auto__;
} else {
return G__35986.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__35986.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__35986);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__35986);
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
var G__35988 = arguments.length;
switch (G__35988) {
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
var G__35991 = arguments.length;
switch (G__35991) {
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
var val_35993 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_35993);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_35993,ret){
return (function (){
return fn1.call(null,val_35993);
});})(val_35993,ret))
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
var G__35995 = arguments.length;
switch (G__35995) {
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
var n__25871__auto___35997 = n;
var x_35998 = (0);
while(true){
if((x_35998 < n__25871__auto___35997)){
(a[x_35998] = (0));

var G__35999 = (x_35998 + (1));
x_35998 = G__35999;
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

var G__36000 = (i + (1));
i = G__36000;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t36004 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36004 = (function (alt_flag,flag,meta36005){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta36005 = meta36005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t36004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36006,meta36005__$1){
var self__ = this;
var _36006__$1 = this;
return (new cljs.core.async.t36004(self__.alt_flag,self__.flag,meta36005__$1));
});})(flag))
;

cljs.core.async.t36004.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36006){
var self__ = this;
var _36006__$1 = this;
return self__.meta36005;
});})(flag))
;

cljs.core.async.t36004.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t36004.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t36004.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t36004.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36005","meta36005",-1590166884,null)], null);
});})(flag))
;

cljs.core.async.t36004.cljs$lang$type = true;

cljs.core.async.t36004.cljs$lang$ctorStr = "cljs.core.async/t36004";

cljs.core.async.t36004.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25565__auto__,writer__25566__auto__,opt__25567__auto__){
return cljs.core._write.call(null,writer__25566__auto__,"cljs.core.async/t36004");
});})(flag))
;

cljs.core.async.__GT_t36004 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t36004(alt_flag__$1,flag__$1,meta36005){
return (new cljs.core.async.t36004(alt_flag__$1,flag__$1,meta36005));
});})(flag))
;

}

return (new cljs.core.async.t36004(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t36010 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36010 = (function (alt_handler,flag,cb,meta36011){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta36011 = meta36011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t36010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36012,meta36011__$1){
var self__ = this;
var _36012__$1 = this;
return (new cljs.core.async.t36010(self__.alt_handler,self__.flag,self__.cb,meta36011__$1));
});

cljs.core.async.t36010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36012){
var self__ = this;
var _36012__$1 = this;
return self__.meta36011;
});

cljs.core.async.t36010.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t36010.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t36010.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t36010.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36011","meta36011",1442010969,null)], null);
});

cljs.core.async.t36010.cljs$lang$type = true;

cljs.core.async.t36010.cljs$lang$ctorStr = "cljs.core.async/t36010";

cljs.core.async.t36010.cljs$lang$ctorPrWriter = (function (this__25565__auto__,writer__25566__auto__,opt__25567__auto__){
return cljs.core._write.call(null,writer__25566__auto__,"cljs.core.async/t36010");
});

cljs.core.async.__GT_t36010 = (function cljs$core$async$alt_handler_$___GT_t36010(alt_handler__$1,flag__$1,cb__$1,meta36011){
return (new cljs.core.async.t36010(alt_handler__$1,flag__$1,cb__$1,meta36011));
});

}

return (new cljs.core.async.t36010(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__36013_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36013_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36014_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36014_SHARP_,port], null));
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
var G__36015 = (i + (1));
i = G__36015;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36018){
var map__36019 = p__36018;
var map__36019__$1 = ((cljs.core.seq_QMARK_.call(null,map__36019))?cljs.core.apply.call(null,cljs.core.hash_map,map__36019):map__36019);
var opts = map__36019__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36016){
var G__36017 = cljs.core.first.call(null,seq36016);
var seq36016__$1 = cljs.core.next.call(null,seq36016);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36017,seq36016__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__36021 = arguments.length;
switch (G__36021) {
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
var c__29107__auto___36070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29107__auto___36070){
return (function (){
var f__29108__auto__ = (function (){var switch__29045__auto__ = ((function (c__29107__auto___36070){
return (function (state_36045){
var state_val_36046 = (state_36045[(1)]);
if((state_val_36046 === (7))){
var inst_36041 = (state_36045[(2)]);
var state_36045__$1 = state_36045;
var statearr_36047_36071 = state_36045__$1;
(statearr_36047_36071[(2)] = inst_36041);

(statearr_36047_36071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36046 === (1))){
var state_36045__$1 = state_36045;
var statearr_36048_36072 = state_36045__$1;
(statearr_36048_36072[(2)] = null);

(statearr_36048_36072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36046 === (4))){
var inst_36024 = (state_36045[(7)]);
var inst_36024__$1 = (state_36045[(2)]);
var inst_36025 = (inst_36024__$1 == null);
var state_36045__$1 = (function (){var statearr_36049 = state_36045;
(statearr_36049[(7)] = inst_36024__$1);

return statearr_36049;
})();
if(cljs.core.truth_(inst_36025)){
var statearr_36050_36073 = state_36045__$1;
(statearr_36050_36073[(1)] = (5));

} else {
var statearr_36051_36074 = state_36045__$1;
(statearr_36051_36074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36046 === (13))){
var state_36045__$1 = state_36045;
var statearr_36052_36075 = state_36045__$1;
(statearr_36052_36075[(2)] = null);

(statearr_36052_36075[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36046 === (6))){
var inst_36024 = (state_36045[(7)]);
var state_36045__$1 = state_36045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36045__$1,(11),to,inst_36024);
} else {
if((state_val_36046 === (3))){
var inst_36043 = (state_36045[(2)]);
var state_36045__$1 = state_36045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36045__$1,inst_36043);
} else {
if((state_val_36046 === (12))){
var state_36045__$1 = state_36045;
var statearr_36053_36076 = state_36045__$1;
(statearr_36053_36076[(2)] = null);

(statearr_36053_36076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36046 === (2))){
var state_36045__$1 = state_36045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36045__$1,(4),from);
} else {
if((state_val_36046 === (11))){
var inst_36034 = (state_36045[(2)]);
var state_36045__$1 = state_36045;
if(cljs.core.truth_(inst_36034)){
var statearr_36054_36077 = state_36045__$1;
(statearr_36054_36077[(1)] = (12));

} else {
var statearr_36055_36078 = state_36045__$1;
(statearr_36055_36078[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36046 === (9))){
var state_36045__$1 = state_36045;
var statearr_36056_36079 = state_36045__$1;
(statearr_36056_36079[(2)] = null);

(statearr_36056_36079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36046 === (5))){
var state_36045__$1 = state_36045;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36057_36080 = state_36045__$1;
(statearr_36057_36080[(1)] = (8));

} else {
var statearr_36058_36081 = state_36045__$1;
(statearr_36058_36081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36046 === (14))){
var inst_36039 = (state_36045[(2)]);
var state_36045__$1 = state_36045;
var statearr_36059_36082 = state_36045__$1;
(statearr_36059_36082[(2)] = inst_36039);

(statearr_36059_36082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36046 === (10))){
var inst_36031 = (state_36045[(2)]);
var state_36045__$1 = state_36045;
var statearr_36060_36083 = state_36045__$1;
(statearr_36060_36083[(2)] = inst_36031);

(statearr_36060_36083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36046 === (8))){
var inst_36028 = cljs.core.async.close_BANG_.call(null,to);
var state_36045__$1 = state_36045;
var statearr_36061_36084 = state_36045__$1;
(statearr_36061_36084[(2)] = inst_36028);

(statearr_36061_36084[(1)] = (10));


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
});})(c__29107__auto___36070))
;
return ((function (switch__29045__auto__,c__29107__auto___36070){
return (function() {
var cljs$core$async$state_machine__29046__auto__ = null;
var cljs$core$async$state_machine__29046__auto____0 = (function (){
var statearr_36065 = [null,null,null,null,null,null,null,null];
(statearr_36065[(0)] = cljs$core$async$state_machine__29046__auto__);

(statearr_36065[(1)] = (1));

return statearr_36065;
});
var cljs$core$async$state_machine__29046__auto____1 = (function (state_36045){
while(true){
var ret_value__29047__auto__ = (function (){try{while(true){
var result__29048__auto__ = switch__29045__auto__.call(null,state_36045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29048__auto__;
}
break;
}
}catch (e36066){if((e36066 instanceof Object)){
var ex__29049__auto__ = e36066;
var statearr_36067_36085 = state_36045;
(statearr_36067_36085[(5)] = ex__29049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36086 = state_36045;
state_36045 = G__36086;
continue;
} else {
return ret_value__29047__auto__;
}
break;
}
});
cljs$core$async$state_machine__29046__auto__ = function(state_36045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29046__auto____1.call(this,state_36045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29046__auto____0;
cljs$core$async$state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29046__auto____1;
return cljs$core$async$state_machine__29046__auto__;
})()
;})(switch__29045__auto__,c__29107__auto___36070))
})();
var state__29109__auto__ = (function (){var statearr_36068 = f__29108__auto__.call(null);
(statearr_36068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29107__auto___36070);

return statearr_36068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29109__auto__);
});})(c__29107__auto___36070))
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
return (function (p__36270){
var vec__36271 = p__36270;
var v = cljs.core.nth.call(null,vec__36271,(0),null);
var p = cljs.core.nth.call(null,vec__36271,(1),null);
var job = vec__36271;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29107__auto___36453 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29107__auto___36453,res,vec__36271,v,p,job,jobs,results){
return (function (){
var f__29108__auto__ = (function (){var switch__29045__auto__ = ((function (c__29107__auto___36453,res,vec__36271,v,p,job,jobs,results){
return (function (state_36276){
var state_val_36277 = (state_36276[(1)]);
if((state_val_36277 === (1))){
var state_36276__$1 = state_36276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36276__$1,(2),res,v);
} else {
if((state_val_36277 === (2))){
var inst_36273 = (state_36276[(2)]);
var inst_36274 = cljs.core.async.close_BANG_.call(null,res);
var state_36276__$1 = (function (){var statearr_36278 = state_36276;
(statearr_36278[(7)] = inst_36273);

return statearr_36278;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36276__$1,inst_36274);
} else {
return null;
}
}
});})(c__29107__auto___36453,res,vec__36271,v,p,job,jobs,results))
;
return ((function (switch__29045__auto__,c__29107__auto___36453,res,vec__36271,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29046__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29046__auto____0 = (function (){
var statearr_36282 = [null,null,null,null,null,null,null,null];
(statearr_36282[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29046__auto__);

(statearr_36282[(1)] = (1));

return statearr_36282;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29046__auto____1 = (function (state_36276){
while(true){
var ret_value__29047__auto__ = (function (){try{while(true){
var result__29048__auto__ = switch__29045__auto__.call(null,state_36276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29048__auto__;
}
break;
}
}catch (e36283){if((e36283 instanceof Object)){
var ex__29049__auto__ = e36283;
var statearr_36284_36454 = state_36276;
(statearr_36284_36454[(5)] = ex__29049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36455 = state_36276;
state_36276 = G__36455;
continue;
} else {
return ret_value__29047__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29046__auto__ = function(state_36276){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29046__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29046__auto____1.call(this,state_36276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29046__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29046__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29046__auto__;
})()
;})(switch__29045__auto__,c__29107__auto___36453,res,vec__36271,v,p,job,jobs,results))
})();
var state__29109__auto__ = (function (){var statearr_36285 = f__29108__auto__.call(null);
(statearr_36285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29107__auto___36453);

return statearr_36285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29109__auto__);
});})(c__29107__auto___36453,res,vec__36271,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__36286){
var vec__36287 = p__36286;
var v = cljs.core.nth.call(null,vec__36287,(0),null);
var p = cljs.core.nth.call(null,vec__36287,(1),null);
var job = vec__36287;
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
var n__25871__auto___36456 = n;
var __36457 = (0);
while(true){
if((__36457 < n__25871__auto___36456)){
var G__36288_36458 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36288_36458) {
case "compute":
var c__29107__auto___36460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36457,c__29107__auto___36460,G__36288_36458,n__25871__auto___36456,jobs,results,process,async){
return (function (){
var f__29108__auto__ = (function (){var switch__29045__auto__ = ((function (__36457,c__29107__auto___36460,G__36288_36458,n__25871__auto___36456,jobs,results,process,async){
return (function (state_36301){
var state_val_36302 = (state_36301[(1)]);
if((state_val_36302 === (1))){
var state_36301__$1 = state_36301;
var statearr_36303_36461 = state_36301__$1;
(statearr_36303_36461[(2)] = null);

(statearr_36303_36461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (2))){
var state_36301__$1 = state_36301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36301__$1,(4),jobs);
} else {
if((state_val_36302 === (3))){
var inst_36299 = (state_36301[(2)]);
var state_36301__$1 = state_36301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36301__$1,inst_36299);
} else {
if((state_val_36302 === (4))){
var inst_36291 = (state_36301[(2)]);
var inst_36292 = process.call(null,inst_36291);
var state_36301__$1 = state_36301;
if(cljs.core.truth_(inst_36292)){
var statearr_36304_36462 = state_36301__$1;
(statearr_36304_36462[(1)] = (5));

} else {
var statearr_36305_36463 = state_36301__$1;
(statearr_36305_36463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (5))){
var state_36301__$1 = state_36301;
var statearr_36306_36464 = state_36301__$1;
(statearr_36306_36464[(2)] = null);

(statearr_36306_36464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (6))){
var state_36301__$1 = state_36301;
var statearr_36307_36465 = state_36301__$1;
(statearr_36307_36465[(2)] = null);

(statearr_36307_36465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (7))){
var inst_36297 = (state_36301[(2)]);
var state_36301__$1 = state_36301;
var statearr_36308_36466 = state_36301__$1;
(statearr_36308_36466[(2)] = inst_36297);

(statearr_36308_36466[(1)] = (3));


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
});})(__36457,c__29107__auto___36460,G__36288_36458,n__25871__auto___36456,jobs,results,process,async))
;
return ((function (__36457,switch__29045__auto__,c__29107__auto___36460,G__36288_36458,n__25871__auto___36456,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29046__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29046__auto____0 = (function (){
var statearr_36312 = [null,null,null,null,null,null,null];
(statearr_36312[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29046__auto__);

(statearr_36312[(1)] = (1));

return statearr_36312;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29046__auto____1 = (function (state_36301){
while(true){
var ret_value__29047__auto__ = (function (){try{while(true){
var result__29048__auto__ = switch__29045__auto__.call(null,state_36301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29048__auto__;
}
break;
}
}catch (e36313){if((e36313 instanceof Object)){
var ex__29049__auto__ = e36313;
var statearr_36314_36467 = state_36301;
(statearr_36314_36467[(5)] = ex__29049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36468 = state_36301;
state_36301 = G__36468;
continue;
} else {
return ret_value__29047__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29046__auto__ = function(state_36301){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29046__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29046__auto____1.call(this,state_36301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29046__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29046__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29046__auto__;
})()
;})(__36457,switch__29045__auto__,c__29107__auto___36460,G__36288_36458,n__25871__auto___36456,jobs,results,process,async))
})();
var state__29109__auto__ = (function (){var statearr_36315 = f__29108__auto__.call(null);
(statearr_36315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29107__auto___36460);

return statearr_36315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29109__auto__);
});})(__36457,c__29107__auto___36460,G__36288_36458,n__25871__auto___36456,jobs,results,process,async))
);


break;
case "async":
var c__29107__auto___36469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36457,c__29107__auto___36469,G__36288_36458,n__25871__auto___36456,jobs,results,process,async){
return (function (){
var f__29108__auto__ = (function (){var switch__29045__auto__ = ((function (__36457,c__29107__auto___36469,G__36288_36458,n__25871__auto___36456,jobs,results,process,async){
return (function (state_36328){
var state_val_36329 = (state_36328[(1)]);
if((state_val_36329 === (1))){
var state_36328__$1 = state_36328;
var statearr_36330_36470 = state_36328__$1;
(statearr_36330_36470[(2)] = null);

(statearr_36330_36470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36329 === (2))){
var state_36328__$1 = state_36328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36328__$1,(4),jobs);
} else {
if((state_val_36329 === (3))){
var inst_36326 = (state_36328[(2)]);
var state_36328__$1 = state_36328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36328__$1,inst_36326);
} else {
if((state_val_36329 === (4))){
var inst_36318 = (state_36328[(2)]);
var inst_36319 = async.call(null,inst_36318);
var state_36328__$1 = state_36328;
if(cljs.core.truth_(inst_36319)){
var statearr_36331_36471 = state_36328__$1;
(statearr_36331_36471[(1)] = (5));

} else {
var statearr_36332_36472 = state_36328__$1;
(statearr_36332_36472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36329 === (5))){
var state_36328__$1 = state_36328;
var statearr_36333_36473 = state_36328__$1;
(statearr_36333_36473[(2)] = null);

(statearr_36333_36473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36329 === (6))){
var state_36328__$1 = state_36328;
var statearr_36334_36474 = state_36328__$1;
(statearr_36334_36474[(2)] = null);

(statearr_36334_36474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36329 === (7))){
var inst_36324 = (state_36328[(2)]);
var state_36328__$1 = state_36328;
var statearr_36335_36475 = state_36328__$1;
(statearr_36335_36475[(2)] = inst_36324);

(statearr_36335_36475[(1)] = (3));


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
});})(__36457,c__29107__auto___36469,G__36288_36458,n__25871__auto___36456,jobs,results,process,async))
;
return ((function (__36457,switch__29045__auto__,c__29107__auto___36469,G__36288_36458,n__25871__auto___36456,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29046__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29046__auto____0 = (function (){
var statearr_36339 = [null,null,null,null,null,null,null];
(statearr_36339[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29046__auto__);

(statearr_36339[(1)] = (1));

return statearr_36339;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29046__auto____1 = (function (state_36328){
while(true){
var ret_value__29047__auto__ = (function (){try{while(true){
var result__29048__auto__ = switch__29045__auto__.call(null,state_36328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29048__auto__;
}
break;
}
}catch (e36340){if((e36340 instanceof Object)){
var ex__29049__auto__ = e36340;
var statearr_36341_36476 = state_36328;
(statearr_36341_36476[(5)] = ex__29049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36477 = state_36328;
state_36328 = G__36477;
continue;
} else {
return ret_value__29047__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29046__auto__ = function(state_36328){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29046__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29046__auto____1.call(this,state_36328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29046__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29046__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29046__auto__;
})()
;})(__36457,switch__29045__auto__,c__29107__auto___36469,G__36288_36458,n__25871__auto___36456,jobs,results,process,async))
})();
var state__29109__auto__ = (function (){var statearr_36342 = f__29108__auto__.call(null);
(statearr_36342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29107__auto___36469);

return statearr_36342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29109__auto__);
});})(__36457,c__29107__auto___36469,G__36288_36458,n__25871__auto___36456,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__36478 = (__36457 + (1));
__36457 = G__36478;
continue;
} else {
}
break;
}

var c__29107__auto___36479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29107__auto___36479,jobs,results,process,async){
return (function (){
var f__29108__auto__ = (function (){var switch__29045__auto__ = ((function (c__29107__auto___36479,jobs,results,process,async){
return (function (state_36364){
var state_val_36365 = (state_36364[(1)]);
if((state_val_36365 === (1))){
var state_36364__$1 = state_36364;
var statearr_36366_36480 = state_36364__$1;
(statearr_36366_36480[(2)] = null);

(statearr_36366_36480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (2))){
var state_36364__$1 = state_36364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36364__$1,(4),from);
} else {
if((state_val_36365 === (3))){
var inst_36362 = (state_36364[(2)]);
var state_36364__$1 = state_36364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36364__$1,inst_36362);
} else {
if((state_val_36365 === (4))){
var inst_36345 = (state_36364[(7)]);
var inst_36345__$1 = (state_36364[(2)]);
var inst_36346 = (inst_36345__$1 == null);
var state_36364__$1 = (function (){var statearr_36367 = state_36364;
(statearr_36367[(7)] = inst_36345__$1);

return statearr_36367;
})();
if(cljs.core.truth_(inst_36346)){
var statearr_36368_36481 = state_36364__$1;
(statearr_36368_36481[(1)] = (5));

} else {
var statearr_36369_36482 = state_36364__$1;
(statearr_36369_36482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (5))){
var inst_36348 = cljs.core.async.close_BANG_.call(null,jobs);
var state_36364__$1 = state_36364;
var statearr_36370_36483 = state_36364__$1;
(statearr_36370_36483[(2)] = inst_36348);

(statearr_36370_36483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (6))){
var inst_36345 = (state_36364[(7)]);
var inst_36350 = (state_36364[(8)]);
var inst_36350__$1 = cljs.core.async.chan.call(null,(1));
var inst_36351 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36352 = [inst_36345,inst_36350__$1];
var inst_36353 = (new cljs.core.PersistentVector(null,2,(5),inst_36351,inst_36352,null));
var state_36364__$1 = (function (){var statearr_36371 = state_36364;
(statearr_36371[(8)] = inst_36350__$1);

return statearr_36371;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36364__$1,(8),jobs,inst_36353);
} else {
if((state_val_36365 === (7))){
var inst_36360 = (state_36364[(2)]);
var state_36364__$1 = state_36364;
var statearr_36372_36484 = state_36364__$1;
(statearr_36372_36484[(2)] = inst_36360);

(statearr_36372_36484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (8))){
var inst_36350 = (state_36364[(8)]);
var inst_36355 = (state_36364[(2)]);
var state_36364__$1 = (function (){var statearr_36373 = state_36364;
(statearr_36373[(9)] = inst_36355);

return statearr_36373;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36364__$1,(9),results,inst_36350);
} else {
if((state_val_36365 === (9))){
var inst_36357 = (state_36364[(2)]);
var state_36364__$1 = (function (){var statearr_36374 = state_36364;
(statearr_36374[(10)] = inst_36357);

return statearr_36374;
})();
var statearr_36375_36485 = state_36364__$1;
(statearr_36375_36485[(2)] = null);

(statearr_36375_36485[(1)] = (2));


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
});})(c__29107__auto___36479,jobs,results,process,async))
;
return ((function (switch__29045__auto__,c__29107__auto___36479,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29046__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29046__auto____0 = (function (){
var statearr_36379 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36379[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29046__auto__);

(statearr_36379[(1)] = (1));

return statearr_36379;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29046__auto____1 = (function (state_36364){
while(true){
var ret_value__29047__auto__ = (function (){try{while(true){
var result__29048__auto__ = switch__29045__auto__.call(null,state_36364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29048__auto__;
}
break;
}
}catch (e36380){if((e36380 instanceof Object)){
var ex__29049__auto__ = e36380;
var statearr_36381_36486 = state_36364;
(statearr_36381_36486[(5)] = ex__29049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36487 = state_36364;
state_36364 = G__36487;
continue;
} else {
return ret_value__29047__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29046__auto__ = function(state_36364){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29046__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29046__auto____1.call(this,state_36364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29046__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29046__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29046__auto__;
})()
;})(switch__29045__auto__,c__29107__auto___36479,jobs,results,process,async))
})();
var state__29109__auto__ = (function (){var statearr_36382 = f__29108__auto__.call(null);
(statearr_36382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29107__auto___36479);

return statearr_36382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29109__auto__);
});})(c__29107__auto___36479,jobs,results,process,async))
);


var c__29107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29107__auto__,jobs,results,process,async){
return (function (){
var f__29108__auto__ = (function (){var switch__29045__auto__ = ((function (c__29107__auto__,jobs,results,process,async){
return (function (state_36420){
var state_val_36421 = (state_36420[(1)]);
if((state_val_36421 === (7))){
var inst_36416 = (state_36420[(2)]);
var state_36420__$1 = state_36420;
var statearr_36422_36488 = state_36420__$1;
(statearr_36422_36488[(2)] = inst_36416);

(statearr_36422_36488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36421 === (20))){
var state_36420__$1 = state_36420;
var statearr_36423_36489 = state_36420__$1;
(statearr_36423_36489[(2)] = null);

(statearr_36423_36489[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36421 === (1))){
var state_36420__$1 = state_36420;
var statearr_36424_36490 = state_36420__$1;
(statearr_36424_36490[(2)] = null);

(statearr_36424_36490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36421 === (4))){
var inst_36385 = (state_36420[(7)]);
var inst_36385__$1 = (state_36420[(2)]);
var inst_36386 = (inst_36385__$1 == null);
var state_36420__$1 = (function (){var statearr_36425 = state_36420;
(statearr_36425[(7)] = inst_36385__$1);

return statearr_36425;
})();
if(cljs.core.truth_(inst_36386)){
var statearr_36426_36491 = state_36420__$1;
(statearr_36426_36491[(1)] = (5));

} else {
var statearr_36427_36492 = state_36420__$1;
(statearr_36427_36492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36421 === (15))){
var inst_36398 = (state_36420[(8)]);
var state_36420__$1 = state_36420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36420__$1,(18),to,inst_36398);
} else {
if((state_val_36421 === (21))){
var inst_36411 = (state_36420[(2)]);
var state_36420__$1 = state_36420;
var statearr_36428_36493 = state_36420__$1;
(statearr_36428_36493[(2)] = inst_36411);

(statearr_36428_36493[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36421 === (13))){
var inst_36413 = (state_36420[(2)]);
var state_36420__$1 = (function (){var statearr_36429 = state_36420;
(statearr_36429[(9)] = inst_36413);

return statearr_36429;
})();
var statearr_36430_36494 = state_36420__$1;
(statearr_36430_36494[(2)] = null);

(statearr_36430_36494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36421 === (6))){
var inst_36385 = (state_36420[(7)]);
var state_36420__$1 = state_36420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36420__$1,(11),inst_36385);
} else {
if((state_val_36421 === (17))){
var inst_36406 = (state_36420[(2)]);
var state_36420__$1 = state_36420;
if(cljs.core.truth_(inst_36406)){
var statearr_36431_36495 = state_36420__$1;
(statearr_36431_36495[(1)] = (19));

} else {
var statearr_36432_36496 = state_36420__$1;
(statearr_36432_36496[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36421 === (3))){
var inst_36418 = (state_36420[(2)]);
var state_36420__$1 = state_36420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36420__$1,inst_36418);
} else {
if((state_val_36421 === (12))){
var inst_36395 = (state_36420[(10)]);
var state_36420__$1 = state_36420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36420__$1,(14),inst_36395);
} else {
if((state_val_36421 === (2))){
var state_36420__$1 = state_36420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36420__$1,(4),results);
} else {
if((state_val_36421 === (19))){
var state_36420__$1 = state_36420;
var statearr_36433_36497 = state_36420__$1;
(statearr_36433_36497[(2)] = null);

(statearr_36433_36497[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36421 === (11))){
var inst_36395 = (state_36420[(2)]);
var state_36420__$1 = (function (){var statearr_36434 = state_36420;
(statearr_36434[(10)] = inst_36395);

return statearr_36434;
})();
var statearr_36435_36498 = state_36420__$1;
(statearr_36435_36498[(2)] = null);

(statearr_36435_36498[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36421 === (9))){
var state_36420__$1 = state_36420;
var statearr_36436_36499 = state_36420__$1;
(statearr_36436_36499[(2)] = null);

(statearr_36436_36499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36421 === (5))){
var state_36420__$1 = state_36420;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36437_36500 = state_36420__$1;
(statearr_36437_36500[(1)] = (8));

} else {
var statearr_36438_36501 = state_36420__$1;
(statearr_36438_36501[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36421 === (14))){
var inst_36398 = (state_36420[(8)]);
var inst_36400 = (state_36420[(11)]);
var inst_36398__$1 = (state_36420[(2)]);
var inst_36399 = (inst_36398__$1 == null);
var inst_36400__$1 = cljs.core.not.call(null,inst_36399);
var state_36420__$1 = (function (){var statearr_36439 = state_36420;
(statearr_36439[(8)] = inst_36398__$1);

(statearr_36439[(11)] = inst_36400__$1);

return statearr_36439;
})();
if(inst_36400__$1){
var statearr_36440_36502 = state_36420__$1;
(statearr_36440_36502[(1)] = (15));

} else {
var statearr_36441_36503 = state_36420__$1;
(statearr_36441_36503[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36421 === (16))){
var inst_36400 = (state_36420[(11)]);
var state_36420__$1 = state_36420;
var statearr_36442_36504 = state_36420__$1;
(statearr_36442_36504[(2)] = inst_36400);

(statearr_36442_36504[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36421 === (10))){
var inst_36392 = (state_36420[(2)]);
var state_36420__$1 = state_36420;
var statearr_36443_36505 = state_36420__$1;
(statearr_36443_36505[(2)] = inst_36392);

(statearr_36443_36505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36421 === (18))){
var inst_36403 = (state_36420[(2)]);
var state_36420__$1 = state_36420;
var statearr_36444_36506 = state_36420__$1;
(statearr_36444_36506[(2)] = inst_36403);

(statearr_36444_36506[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36421 === (8))){
var inst_36389 = cljs.core.async.close_BANG_.call(null,to);
var state_36420__$1 = state_36420;
var statearr_36445_36507 = state_36420__$1;
(statearr_36445_36507[(2)] = inst_36389);

(statearr_36445_36507[(1)] = (10));


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
});})(c__29107__auto__,jobs,results,process,async))
;
return ((function (switch__29045__auto__,c__29107__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29046__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29046__auto____0 = (function (){
var statearr_36449 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36449[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29046__auto__);

(statearr_36449[(1)] = (1));

return statearr_36449;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29046__auto____1 = (function (state_36420){
while(true){
var ret_value__29047__auto__ = (function (){try{while(true){
var result__29048__auto__ = switch__29045__auto__.call(null,state_36420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29048__auto__;
}
break;
}
}catch (e36450){if((e36450 instanceof Object)){
var ex__29049__auto__ = e36450;
var statearr_36451_36508 = state_36420;
(statearr_36451_36508[(5)] = ex__29049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36509 = state_36420;
state_36420 = G__36509;
continue;
} else {
return ret_value__29047__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29046__auto__ = function(state_36420){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29046__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29046__auto____1.call(this,state_36420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29046__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29046__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29046__auto__;
})()
;})(switch__29045__auto__,c__29107__auto__,jobs,results,process,async))
})();
var state__29109__auto__ = (function (){var statearr_36452 = f__29108__auto__.call(null);
(statearr_36452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29107__auto__);

return statearr_36452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29109__auto__);
});})(c__29107__auto__,jobs,results,process,async))
);

return c__29107__auto__;
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
var G__36511 = arguments.length;
switch (G__36511) {
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
var G__36514 = arguments.length;
switch (G__36514) {
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
var G__36517 = arguments.length;
switch (G__36517) {
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
var c__29107__auto___36569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29107__auto___36569,tc,fc){
return (function (){
var f__29108__auto__ = (function (){var switch__29045__auto__ = ((function (c__29107__auto___36569,tc,fc){
return (function (state_36543){
var state_val_36544 = (state_36543[(1)]);
if((state_val_36544 === (7))){
var inst_36539 = (state_36543[(2)]);
var state_36543__$1 = state_36543;
var statearr_36545_36570 = state_36543__$1;
(statearr_36545_36570[(2)] = inst_36539);

(statearr_36545_36570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36544 === (1))){
var state_36543__$1 = state_36543;
var statearr_36546_36571 = state_36543__$1;
(statearr_36546_36571[(2)] = null);

(statearr_36546_36571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36544 === (4))){
var inst_36520 = (state_36543[(7)]);
var inst_36520__$1 = (state_36543[(2)]);
var inst_36521 = (inst_36520__$1 == null);
var state_36543__$1 = (function (){var statearr_36547 = state_36543;
(statearr_36547[(7)] = inst_36520__$1);

return statearr_36547;
})();
if(cljs.core.truth_(inst_36521)){
var statearr_36548_36572 = state_36543__$1;
(statearr_36548_36572[(1)] = (5));

} else {
var statearr_36549_36573 = state_36543__$1;
(statearr_36549_36573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36544 === (13))){
var state_36543__$1 = state_36543;
var statearr_36550_36574 = state_36543__$1;
(statearr_36550_36574[(2)] = null);

(statearr_36550_36574[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36544 === (6))){
var inst_36520 = (state_36543[(7)]);
var inst_36526 = p.call(null,inst_36520);
var state_36543__$1 = state_36543;
if(cljs.core.truth_(inst_36526)){
var statearr_36551_36575 = state_36543__$1;
(statearr_36551_36575[(1)] = (9));

} else {
var statearr_36552_36576 = state_36543__$1;
(statearr_36552_36576[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36544 === (3))){
var inst_36541 = (state_36543[(2)]);
var state_36543__$1 = state_36543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36543__$1,inst_36541);
} else {
if((state_val_36544 === (12))){
var state_36543__$1 = state_36543;
var statearr_36553_36577 = state_36543__$1;
(statearr_36553_36577[(2)] = null);

(statearr_36553_36577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36544 === (2))){
var state_36543__$1 = state_36543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36543__$1,(4),ch);
} else {
if((state_val_36544 === (11))){
var inst_36520 = (state_36543[(7)]);
var inst_36530 = (state_36543[(2)]);
var state_36543__$1 = state_36543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36543__$1,(8),inst_36530,inst_36520);
} else {
if((state_val_36544 === (9))){
var state_36543__$1 = state_36543;
var statearr_36554_36578 = state_36543__$1;
(statearr_36554_36578[(2)] = tc);

(statearr_36554_36578[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36544 === (5))){
var inst_36523 = cljs.core.async.close_BANG_.call(null,tc);
var inst_36524 = cljs.core.async.close_BANG_.call(null,fc);
var state_36543__$1 = (function (){var statearr_36555 = state_36543;
(statearr_36555[(8)] = inst_36523);

return statearr_36555;
})();
var statearr_36556_36579 = state_36543__$1;
(statearr_36556_36579[(2)] = inst_36524);

(statearr_36556_36579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36544 === (14))){
var inst_36537 = (state_36543[(2)]);
var state_36543__$1 = state_36543;
var statearr_36557_36580 = state_36543__$1;
(statearr_36557_36580[(2)] = inst_36537);

(statearr_36557_36580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36544 === (10))){
var state_36543__$1 = state_36543;
var statearr_36558_36581 = state_36543__$1;
(statearr_36558_36581[(2)] = fc);

(statearr_36558_36581[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36544 === (8))){
var inst_36532 = (state_36543[(2)]);
var state_36543__$1 = state_36543;
if(cljs.core.truth_(inst_36532)){
var statearr_36559_36582 = state_36543__$1;
(statearr_36559_36582[(1)] = (12));

} else {
var statearr_36560_36583 = state_36543__$1;
(statearr_36560_36583[(1)] = (13));

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
});})(c__29107__auto___36569,tc,fc))
;
return ((function (switch__29045__auto__,c__29107__auto___36569,tc,fc){
return (function() {
var cljs$core$async$state_machine__29046__auto__ = null;
var cljs$core$async$state_machine__29046__auto____0 = (function (){
var statearr_36564 = [null,null,null,null,null,null,null,null,null];
(statearr_36564[(0)] = cljs$core$async$state_machine__29046__auto__);

(statearr_36564[(1)] = (1));

return statearr_36564;
});
var cljs$core$async$state_machine__29046__auto____1 = (function (state_36543){
while(true){
var ret_value__29047__auto__ = (function (){try{while(true){
var result__29048__auto__ = switch__29045__auto__.call(null,state_36543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29048__auto__;
}
break;
}
}catch (e36565){if((e36565 instanceof Object)){
var ex__29049__auto__ = e36565;
var statearr_36566_36584 = state_36543;
(statearr_36566_36584[(5)] = ex__29049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36585 = state_36543;
state_36543 = G__36585;
continue;
} else {
return ret_value__29047__auto__;
}
break;
}
});
cljs$core$async$state_machine__29046__auto__ = function(state_36543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29046__auto____1.call(this,state_36543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29046__auto____0;
cljs$core$async$state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29046__auto____1;
return cljs$core$async$state_machine__29046__auto__;
})()
;})(switch__29045__auto__,c__29107__auto___36569,tc,fc))
})();
var state__29109__auto__ = (function (){var statearr_36567 = f__29108__auto__.call(null);
(statearr_36567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29107__auto___36569);

return statearr_36567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29109__auto__);
});})(c__29107__auto___36569,tc,fc))
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
var c__29107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29107__auto__){
return (function (){
var f__29108__auto__ = (function (){var switch__29045__auto__ = ((function (c__29107__auto__){
return (function (state_36632){
var state_val_36633 = (state_36632[(1)]);
if((state_val_36633 === (1))){
var inst_36618 = init;
var state_36632__$1 = (function (){var statearr_36634 = state_36632;
(statearr_36634[(7)] = inst_36618);

return statearr_36634;
})();
var statearr_36635_36650 = state_36632__$1;
(statearr_36635_36650[(2)] = null);

(statearr_36635_36650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36633 === (2))){
var state_36632__$1 = state_36632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36632__$1,(4),ch);
} else {
if((state_val_36633 === (3))){
var inst_36630 = (state_36632[(2)]);
var state_36632__$1 = state_36632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36632__$1,inst_36630);
} else {
if((state_val_36633 === (4))){
var inst_36621 = (state_36632[(8)]);
var inst_36621__$1 = (state_36632[(2)]);
var inst_36622 = (inst_36621__$1 == null);
var state_36632__$1 = (function (){var statearr_36636 = state_36632;
(statearr_36636[(8)] = inst_36621__$1);

return statearr_36636;
})();
if(cljs.core.truth_(inst_36622)){
var statearr_36637_36651 = state_36632__$1;
(statearr_36637_36651[(1)] = (5));

} else {
var statearr_36638_36652 = state_36632__$1;
(statearr_36638_36652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36633 === (5))){
var inst_36618 = (state_36632[(7)]);
var state_36632__$1 = state_36632;
var statearr_36639_36653 = state_36632__$1;
(statearr_36639_36653[(2)] = inst_36618);

(statearr_36639_36653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36633 === (6))){
var inst_36621 = (state_36632[(8)]);
var inst_36618 = (state_36632[(7)]);
var inst_36625 = f.call(null,inst_36618,inst_36621);
var inst_36618__$1 = inst_36625;
var state_36632__$1 = (function (){var statearr_36640 = state_36632;
(statearr_36640[(7)] = inst_36618__$1);

return statearr_36640;
})();
var statearr_36641_36654 = state_36632__$1;
(statearr_36641_36654[(2)] = null);

(statearr_36641_36654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36633 === (7))){
var inst_36628 = (state_36632[(2)]);
var state_36632__$1 = state_36632;
var statearr_36642_36655 = state_36632__$1;
(statearr_36642_36655[(2)] = inst_36628);

(statearr_36642_36655[(1)] = (3));


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
});})(c__29107__auto__))
;
return ((function (switch__29045__auto__,c__29107__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29046__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29046__auto____0 = (function (){
var statearr_36646 = [null,null,null,null,null,null,null,null,null];
(statearr_36646[(0)] = cljs$core$async$reduce_$_state_machine__29046__auto__);

(statearr_36646[(1)] = (1));

return statearr_36646;
});
var cljs$core$async$reduce_$_state_machine__29046__auto____1 = (function (state_36632){
while(true){
var ret_value__29047__auto__ = (function (){try{while(true){
var result__29048__auto__ = switch__29045__auto__.call(null,state_36632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29048__auto__;
}
break;
}
}catch (e36647){if((e36647 instanceof Object)){
var ex__29049__auto__ = e36647;
var statearr_36648_36656 = state_36632;
(statearr_36648_36656[(5)] = ex__29049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36657 = state_36632;
state_36632 = G__36657;
continue;
} else {
return ret_value__29047__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29046__auto__ = function(state_36632){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29046__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29046__auto____1.call(this,state_36632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29046__auto____0;
cljs$core$async$reduce_$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29046__auto____1;
return cljs$core$async$reduce_$_state_machine__29046__auto__;
})()
;})(switch__29045__auto__,c__29107__auto__))
})();
var state__29109__auto__ = (function (){var statearr_36649 = f__29108__auto__.call(null);
(statearr_36649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29107__auto__);

return statearr_36649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29109__auto__);
});})(c__29107__auto__))
);

return c__29107__auto__;
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
var G__36659 = arguments.length;
switch (G__36659) {
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
var c__29107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29107__auto__){
return (function (){
var f__29108__auto__ = (function (){var switch__29045__auto__ = ((function (c__29107__auto__){
return (function (state_36684){
var state_val_36685 = (state_36684[(1)]);
if((state_val_36685 === (7))){
var inst_36666 = (state_36684[(2)]);
var state_36684__$1 = state_36684;
var statearr_36686_36710 = state_36684__$1;
(statearr_36686_36710[(2)] = inst_36666);

(statearr_36686_36710[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (1))){
var inst_36660 = cljs.core.seq.call(null,coll);
var inst_36661 = inst_36660;
var state_36684__$1 = (function (){var statearr_36687 = state_36684;
(statearr_36687[(7)] = inst_36661);

return statearr_36687;
})();
var statearr_36688_36711 = state_36684__$1;
(statearr_36688_36711[(2)] = null);

(statearr_36688_36711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (4))){
var inst_36661 = (state_36684[(7)]);
var inst_36664 = cljs.core.first.call(null,inst_36661);
var state_36684__$1 = state_36684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36684__$1,(7),ch,inst_36664);
} else {
if((state_val_36685 === (13))){
var inst_36678 = (state_36684[(2)]);
var state_36684__$1 = state_36684;
var statearr_36689_36712 = state_36684__$1;
(statearr_36689_36712[(2)] = inst_36678);

(statearr_36689_36712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (6))){
var inst_36669 = (state_36684[(2)]);
var state_36684__$1 = state_36684;
if(cljs.core.truth_(inst_36669)){
var statearr_36690_36713 = state_36684__$1;
(statearr_36690_36713[(1)] = (8));

} else {
var statearr_36691_36714 = state_36684__$1;
(statearr_36691_36714[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (3))){
var inst_36682 = (state_36684[(2)]);
var state_36684__$1 = state_36684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36684__$1,inst_36682);
} else {
if((state_val_36685 === (12))){
var state_36684__$1 = state_36684;
var statearr_36692_36715 = state_36684__$1;
(statearr_36692_36715[(2)] = null);

(statearr_36692_36715[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (2))){
var inst_36661 = (state_36684[(7)]);
var state_36684__$1 = state_36684;
if(cljs.core.truth_(inst_36661)){
var statearr_36693_36716 = state_36684__$1;
(statearr_36693_36716[(1)] = (4));

} else {
var statearr_36694_36717 = state_36684__$1;
(statearr_36694_36717[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (11))){
var inst_36675 = cljs.core.async.close_BANG_.call(null,ch);
var state_36684__$1 = state_36684;
var statearr_36695_36718 = state_36684__$1;
(statearr_36695_36718[(2)] = inst_36675);

(statearr_36695_36718[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (9))){
var state_36684__$1 = state_36684;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36696_36719 = state_36684__$1;
(statearr_36696_36719[(1)] = (11));

} else {
var statearr_36697_36720 = state_36684__$1;
(statearr_36697_36720[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (5))){
var inst_36661 = (state_36684[(7)]);
var state_36684__$1 = state_36684;
var statearr_36698_36721 = state_36684__$1;
(statearr_36698_36721[(2)] = inst_36661);

(statearr_36698_36721[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (10))){
var inst_36680 = (state_36684[(2)]);
var state_36684__$1 = state_36684;
var statearr_36699_36722 = state_36684__$1;
(statearr_36699_36722[(2)] = inst_36680);

(statearr_36699_36722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (8))){
var inst_36661 = (state_36684[(7)]);
var inst_36671 = cljs.core.next.call(null,inst_36661);
var inst_36661__$1 = inst_36671;
var state_36684__$1 = (function (){var statearr_36700 = state_36684;
(statearr_36700[(7)] = inst_36661__$1);

return statearr_36700;
})();
var statearr_36701_36723 = state_36684__$1;
(statearr_36701_36723[(2)] = null);

(statearr_36701_36723[(1)] = (2));


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
});})(c__29107__auto__))
;
return ((function (switch__29045__auto__,c__29107__auto__){
return (function() {
var cljs$core$async$state_machine__29046__auto__ = null;
var cljs$core$async$state_machine__29046__auto____0 = (function (){
var statearr_36705 = [null,null,null,null,null,null,null,null];
(statearr_36705[(0)] = cljs$core$async$state_machine__29046__auto__);

(statearr_36705[(1)] = (1));

return statearr_36705;
});
var cljs$core$async$state_machine__29046__auto____1 = (function (state_36684){
while(true){
var ret_value__29047__auto__ = (function (){try{while(true){
var result__29048__auto__ = switch__29045__auto__.call(null,state_36684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29048__auto__;
}
break;
}
}catch (e36706){if((e36706 instanceof Object)){
var ex__29049__auto__ = e36706;
var statearr_36707_36724 = state_36684;
(statearr_36707_36724[(5)] = ex__29049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36725 = state_36684;
state_36684 = G__36725;
continue;
} else {
return ret_value__29047__auto__;
}
break;
}
});
cljs$core$async$state_machine__29046__auto__ = function(state_36684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29046__auto____1.call(this,state_36684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29046__auto____0;
cljs$core$async$state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29046__auto____1;
return cljs$core$async$state_machine__29046__auto__;
})()
;})(switch__29045__auto__,c__29107__auto__))
})();
var state__29109__auto__ = (function (){var statearr_36708 = f__29108__auto__.call(null);
(statearr_36708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29107__auto__);

return statearr_36708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29109__auto__);
});})(c__29107__auto__))
);

return c__29107__auto__;
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

cljs.core.async.Mux = (function (){var obj36727 = {};
return obj36727;
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


cljs.core.async.Mult = (function (){var obj36729 = {};
return obj36729;
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
if(typeof cljs.core.async.t36951 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36951 = (function (mult,ch,cs,meta36952){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta36952 = meta36952;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t36951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36953,meta36952__$1){
var self__ = this;
var _36953__$1 = this;
return (new cljs.core.async.t36951(self__.mult,self__.ch,self__.cs,meta36952__$1));
});})(cs))
;

cljs.core.async.t36951.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36953){
var self__ = this;
var _36953__$1 = this;
return self__.meta36952;
});})(cs))
;

cljs.core.async.t36951.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t36951.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t36951.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t36951.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t36951.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t36951.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t36951.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36952","meta36952",1362985767,null)], null);
});})(cs))
;

cljs.core.async.t36951.cljs$lang$type = true;

cljs.core.async.t36951.cljs$lang$ctorStr = "cljs.core.async/t36951";

cljs.core.async.t36951.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25565__auto__,writer__25566__auto__,opt__25567__auto__){
return cljs.core._write.call(null,writer__25566__auto__,"cljs.core.async/t36951");
});})(cs))
;

cljs.core.async.__GT_t36951 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t36951(mult__$1,ch__$1,cs__$1,meta36952){
return (new cljs.core.async.t36951(mult__$1,ch__$1,cs__$1,meta36952));
});})(cs))
;

}

return (new cljs.core.async.t36951(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29107__auto___37172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29107__auto___37172,cs,m,dchan,dctr,done){
return (function (){
var f__29108__auto__ = (function (){var switch__29045__auto__ = ((function (c__29107__auto___37172,cs,m,dchan,dctr,done){
return (function (state_37084){
var state_val_37085 = (state_37084[(1)]);
if((state_val_37085 === (7))){
var inst_37080 = (state_37084[(2)]);
var state_37084__$1 = state_37084;
var statearr_37086_37173 = state_37084__$1;
(statearr_37086_37173[(2)] = inst_37080);

(statearr_37086_37173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (20))){
var inst_36985 = (state_37084[(7)]);
var inst_36995 = cljs.core.first.call(null,inst_36985);
var inst_36996 = cljs.core.nth.call(null,inst_36995,(0),null);
var inst_36997 = cljs.core.nth.call(null,inst_36995,(1),null);
var state_37084__$1 = (function (){var statearr_37087 = state_37084;
(statearr_37087[(8)] = inst_36996);

return statearr_37087;
})();
if(cljs.core.truth_(inst_36997)){
var statearr_37088_37174 = state_37084__$1;
(statearr_37088_37174[(1)] = (22));

} else {
var statearr_37089_37175 = state_37084__$1;
(statearr_37089_37175[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (27))){
var inst_37027 = (state_37084[(9)]);
var inst_37025 = (state_37084[(10)]);
var inst_37032 = (state_37084[(11)]);
var inst_36956 = (state_37084[(12)]);
var inst_37032__$1 = cljs.core._nth.call(null,inst_37025,inst_37027);
var inst_37033 = cljs.core.async.put_BANG_.call(null,inst_37032__$1,inst_36956,done);
var state_37084__$1 = (function (){var statearr_37090 = state_37084;
(statearr_37090[(11)] = inst_37032__$1);

return statearr_37090;
})();
if(cljs.core.truth_(inst_37033)){
var statearr_37091_37176 = state_37084__$1;
(statearr_37091_37176[(1)] = (30));

} else {
var statearr_37092_37177 = state_37084__$1;
(statearr_37092_37177[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (1))){
var state_37084__$1 = state_37084;
var statearr_37093_37178 = state_37084__$1;
(statearr_37093_37178[(2)] = null);

(statearr_37093_37178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (24))){
var inst_36985 = (state_37084[(7)]);
var inst_37002 = (state_37084[(2)]);
var inst_37003 = cljs.core.next.call(null,inst_36985);
var inst_36965 = inst_37003;
var inst_36966 = null;
var inst_36967 = (0);
var inst_36968 = (0);
var state_37084__$1 = (function (){var statearr_37094 = state_37084;
(statearr_37094[(13)] = inst_36966);

(statearr_37094[(14)] = inst_37002);

(statearr_37094[(15)] = inst_36967);

(statearr_37094[(16)] = inst_36965);

(statearr_37094[(17)] = inst_36968);

return statearr_37094;
})();
var statearr_37095_37179 = state_37084__$1;
(statearr_37095_37179[(2)] = null);

(statearr_37095_37179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (39))){
var state_37084__$1 = state_37084;
var statearr_37099_37180 = state_37084__$1;
(statearr_37099_37180[(2)] = null);

(statearr_37099_37180[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (4))){
var inst_36956 = (state_37084[(12)]);
var inst_36956__$1 = (state_37084[(2)]);
var inst_36957 = (inst_36956__$1 == null);
var state_37084__$1 = (function (){var statearr_37100 = state_37084;
(statearr_37100[(12)] = inst_36956__$1);

return statearr_37100;
})();
if(cljs.core.truth_(inst_36957)){
var statearr_37101_37181 = state_37084__$1;
(statearr_37101_37181[(1)] = (5));

} else {
var statearr_37102_37182 = state_37084__$1;
(statearr_37102_37182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (15))){
var inst_36966 = (state_37084[(13)]);
var inst_36967 = (state_37084[(15)]);
var inst_36965 = (state_37084[(16)]);
var inst_36968 = (state_37084[(17)]);
var inst_36981 = (state_37084[(2)]);
var inst_36982 = (inst_36968 + (1));
var tmp37096 = inst_36966;
var tmp37097 = inst_36967;
var tmp37098 = inst_36965;
var inst_36965__$1 = tmp37098;
var inst_36966__$1 = tmp37096;
var inst_36967__$1 = tmp37097;
var inst_36968__$1 = inst_36982;
var state_37084__$1 = (function (){var statearr_37103 = state_37084;
(statearr_37103[(13)] = inst_36966__$1);

(statearr_37103[(15)] = inst_36967__$1);

(statearr_37103[(18)] = inst_36981);

(statearr_37103[(16)] = inst_36965__$1);

(statearr_37103[(17)] = inst_36968__$1);

return statearr_37103;
})();
var statearr_37104_37183 = state_37084__$1;
(statearr_37104_37183[(2)] = null);

(statearr_37104_37183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (21))){
var inst_37006 = (state_37084[(2)]);
var state_37084__$1 = state_37084;
var statearr_37108_37184 = state_37084__$1;
(statearr_37108_37184[(2)] = inst_37006);

(statearr_37108_37184[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (31))){
var inst_37032 = (state_37084[(11)]);
var inst_37036 = done.call(null,null);
var inst_37037 = cljs.core.async.untap_STAR_.call(null,m,inst_37032);
var state_37084__$1 = (function (){var statearr_37109 = state_37084;
(statearr_37109[(19)] = inst_37036);

return statearr_37109;
})();
var statearr_37110_37185 = state_37084__$1;
(statearr_37110_37185[(2)] = inst_37037);

(statearr_37110_37185[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (32))){
var inst_37026 = (state_37084[(20)]);
var inst_37027 = (state_37084[(9)]);
var inst_37025 = (state_37084[(10)]);
var inst_37024 = (state_37084[(21)]);
var inst_37039 = (state_37084[(2)]);
var inst_37040 = (inst_37027 + (1));
var tmp37105 = inst_37026;
var tmp37106 = inst_37025;
var tmp37107 = inst_37024;
var inst_37024__$1 = tmp37107;
var inst_37025__$1 = tmp37106;
var inst_37026__$1 = tmp37105;
var inst_37027__$1 = inst_37040;
var state_37084__$1 = (function (){var statearr_37111 = state_37084;
(statearr_37111[(20)] = inst_37026__$1);

(statearr_37111[(9)] = inst_37027__$1);

(statearr_37111[(10)] = inst_37025__$1);

(statearr_37111[(21)] = inst_37024__$1);

(statearr_37111[(22)] = inst_37039);

return statearr_37111;
})();
var statearr_37112_37186 = state_37084__$1;
(statearr_37112_37186[(2)] = null);

(statearr_37112_37186[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (40))){
var inst_37052 = (state_37084[(23)]);
var inst_37056 = done.call(null,null);
var inst_37057 = cljs.core.async.untap_STAR_.call(null,m,inst_37052);
var state_37084__$1 = (function (){var statearr_37113 = state_37084;
(statearr_37113[(24)] = inst_37056);

return statearr_37113;
})();
var statearr_37114_37187 = state_37084__$1;
(statearr_37114_37187[(2)] = inst_37057);

(statearr_37114_37187[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (33))){
var inst_37043 = (state_37084[(25)]);
var inst_37045 = cljs.core.chunked_seq_QMARK_.call(null,inst_37043);
var state_37084__$1 = state_37084;
if(inst_37045){
var statearr_37115_37188 = state_37084__$1;
(statearr_37115_37188[(1)] = (36));

} else {
var statearr_37116_37189 = state_37084__$1;
(statearr_37116_37189[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (13))){
var inst_36975 = (state_37084[(26)]);
var inst_36978 = cljs.core.async.close_BANG_.call(null,inst_36975);
var state_37084__$1 = state_37084;
var statearr_37117_37190 = state_37084__$1;
(statearr_37117_37190[(2)] = inst_36978);

(statearr_37117_37190[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (22))){
var inst_36996 = (state_37084[(8)]);
var inst_36999 = cljs.core.async.close_BANG_.call(null,inst_36996);
var state_37084__$1 = state_37084;
var statearr_37118_37191 = state_37084__$1;
(statearr_37118_37191[(2)] = inst_36999);

(statearr_37118_37191[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (36))){
var inst_37043 = (state_37084[(25)]);
var inst_37047 = cljs.core.chunk_first.call(null,inst_37043);
var inst_37048 = cljs.core.chunk_rest.call(null,inst_37043);
var inst_37049 = cljs.core.count.call(null,inst_37047);
var inst_37024 = inst_37048;
var inst_37025 = inst_37047;
var inst_37026 = inst_37049;
var inst_37027 = (0);
var state_37084__$1 = (function (){var statearr_37119 = state_37084;
(statearr_37119[(20)] = inst_37026);

(statearr_37119[(9)] = inst_37027);

(statearr_37119[(10)] = inst_37025);

(statearr_37119[(21)] = inst_37024);

return statearr_37119;
})();
var statearr_37120_37192 = state_37084__$1;
(statearr_37120_37192[(2)] = null);

(statearr_37120_37192[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (41))){
var inst_37043 = (state_37084[(25)]);
var inst_37059 = (state_37084[(2)]);
var inst_37060 = cljs.core.next.call(null,inst_37043);
var inst_37024 = inst_37060;
var inst_37025 = null;
var inst_37026 = (0);
var inst_37027 = (0);
var state_37084__$1 = (function (){var statearr_37121 = state_37084;
(statearr_37121[(27)] = inst_37059);

(statearr_37121[(20)] = inst_37026);

(statearr_37121[(9)] = inst_37027);

(statearr_37121[(10)] = inst_37025);

(statearr_37121[(21)] = inst_37024);

return statearr_37121;
})();
var statearr_37122_37193 = state_37084__$1;
(statearr_37122_37193[(2)] = null);

(statearr_37122_37193[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (43))){
var state_37084__$1 = state_37084;
var statearr_37123_37194 = state_37084__$1;
(statearr_37123_37194[(2)] = null);

(statearr_37123_37194[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (29))){
var inst_37068 = (state_37084[(2)]);
var state_37084__$1 = state_37084;
var statearr_37124_37195 = state_37084__$1;
(statearr_37124_37195[(2)] = inst_37068);

(statearr_37124_37195[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (44))){
var inst_37077 = (state_37084[(2)]);
var state_37084__$1 = (function (){var statearr_37125 = state_37084;
(statearr_37125[(28)] = inst_37077);

return statearr_37125;
})();
var statearr_37126_37196 = state_37084__$1;
(statearr_37126_37196[(2)] = null);

(statearr_37126_37196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (6))){
var inst_37016 = (state_37084[(29)]);
var inst_37015 = cljs.core.deref.call(null,cs);
var inst_37016__$1 = cljs.core.keys.call(null,inst_37015);
var inst_37017 = cljs.core.count.call(null,inst_37016__$1);
var inst_37018 = cljs.core.reset_BANG_.call(null,dctr,inst_37017);
var inst_37023 = cljs.core.seq.call(null,inst_37016__$1);
var inst_37024 = inst_37023;
var inst_37025 = null;
var inst_37026 = (0);
var inst_37027 = (0);
var state_37084__$1 = (function (){var statearr_37127 = state_37084;
(statearr_37127[(20)] = inst_37026);

(statearr_37127[(9)] = inst_37027);

(statearr_37127[(10)] = inst_37025);

(statearr_37127[(21)] = inst_37024);

(statearr_37127[(29)] = inst_37016__$1);

(statearr_37127[(30)] = inst_37018);

return statearr_37127;
})();
var statearr_37128_37197 = state_37084__$1;
(statearr_37128_37197[(2)] = null);

(statearr_37128_37197[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (28))){
var inst_37043 = (state_37084[(25)]);
var inst_37024 = (state_37084[(21)]);
var inst_37043__$1 = cljs.core.seq.call(null,inst_37024);
var state_37084__$1 = (function (){var statearr_37129 = state_37084;
(statearr_37129[(25)] = inst_37043__$1);

return statearr_37129;
})();
if(inst_37043__$1){
var statearr_37130_37198 = state_37084__$1;
(statearr_37130_37198[(1)] = (33));

} else {
var statearr_37131_37199 = state_37084__$1;
(statearr_37131_37199[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (25))){
var inst_37026 = (state_37084[(20)]);
var inst_37027 = (state_37084[(9)]);
var inst_37029 = (inst_37027 < inst_37026);
var inst_37030 = inst_37029;
var state_37084__$1 = state_37084;
if(cljs.core.truth_(inst_37030)){
var statearr_37132_37200 = state_37084__$1;
(statearr_37132_37200[(1)] = (27));

} else {
var statearr_37133_37201 = state_37084__$1;
(statearr_37133_37201[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (34))){
var state_37084__$1 = state_37084;
var statearr_37134_37202 = state_37084__$1;
(statearr_37134_37202[(2)] = null);

(statearr_37134_37202[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (17))){
var state_37084__$1 = state_37084;
var statearr_37135_37203 = state_37084__$1;
(statearr_37135_37203[(2)] = null);

(statearr_37135_37203[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (3))){
var inst_37082 = (state_37084[(2)]);
var state_37084__$1 = state_37084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37084__$1,inst_37082);
} else {
if((state_val_37085 === (12))){
var inst_37011 = (state_37084[(2)]);
var state_37084__$1 = state_37084;
var statearr_37136_37204 = state_37084__$1;
(statearr_37136_37204[(2)] = inst_37011);

(statearr_37136_37204[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (2))){
var state_37084__$1 = state_37084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37084__$1,(4),ch);
} else {
if((state_val_37085 === (23))){
var state_37084__$1 = state_37084;
var statearr_37137_37205 = state_37084__$1;
(statearr_37137_37205[(2)] = null);

(statearr_37137_37205[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (35))){
var inst_37066 = (state_37084[(2)]);
var state_37084__$1 = state_37084;
var statearr_37138_37206 = state_37084__$1;
(statearr_37138_37206[(2)] = inst_37066);

(statearr_37138_37206[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (19))){
var inst_36985 = (state_37084[(7)]);
var inst_36989 = cljs.core.chunk_first.call(null,inst_36985);
var inst_36990 = cljs.core.chunk_rest.call(null,inst_36985);
var inst_36991 = cljs.core.count.call(null,inst_36989);
var inst_36965 = inst_36990;
var inst_36966 = inst_36989;
var inst_36967 = inst_36991;
var inst_36968 = (0);
var state_37084__$1 = (function (){var statearr_37139 = state_37084;
(statearr_37139[(13)] = inst_36966);

(statearr_37139[(15)] = inst_36967);

(statearr_37139[(16)] = inst_36965);

(statearr_37139[(17)] = inst_36968);

return statearr_37139;
})();
var statearr_37140_37207 = state_37084__$1;
(statearr_37140_37207[(2)] = null);

(statearr_37140_37207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (11))){
var inst_36985 = (state_37084[(7)]);
var inst_36965 = (state_37084[(16)]);
var inst_36985__$1 = cljs.core.seq.call(null,inst_36965);
var state_37084__$1 = (function (){var statearr_37141 = state_37084;
(statearr_37141[(7)] = inst_36985__$1);

return statearr_37141;
})();
if(inst_36985__$1){
var statearr_37142_37208 = state_37084__$1;
(statearr_37142_37208[(1)] = (16));

} else {
var statearr_37143_37209 = state_37084__$1;
(statearr_37143_37209[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (9))){
var inst_37013 = (state_37084[(2)]);
var state_37084__$1 = state_37084;
var statearr_37144_37210 = state_37084__$1;
(statearr_37144_37210[(2)] = inst_37013);

(statearr_37144_37210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (5))){
var inst_36963 = cljs.core.deref.call(null,cs);
var inst_36964 = cljs.core.seq.call(null,inst_36963);
var inst_36965 = inst_36964;
var inst_36966 = null;
var inst_36967 = (0);
var inst_36968 = (0);
var state_37084__$1 = (function (){var statearr_37145 = state_37084;
(statearr_37145[(13)] = inst_36966);

(statearr_37145[(15)] = inst_36967);

(statearr_37145[(16)] = inst_36965);

(statearr_37145[(17)] = inst_36968);

return statearr_37145;
})();
var statearr_37146_37211 = state_37084__$1;
(statearr_37146_37211[(2)] = null);

(statearr_37146_37211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (14))){
var state_37084__$1 = state_37084;
var statearr_37147_37212 = state_37084__$1;
(statearr_37147_37212[(2)] = null);

(statearr_37147_37212[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (45))){
var inst_37074 = (state_37084[(2)]);
var state_37084__$1 = state_37084;
var statearr_37148_37213 = state_37084__$1;
(statearr_37148_37213[(2)] = inst_37074);

(statearr_37148_37213[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (26))){
var inst_37016 = (state_37084[(29)]);
var inst_37070 = (state_37084[(2)]);
var inst_37071 = cljs.core.seq.call(null,inst_37016);
var state_37084__$1 = (function (){var statearr_37149 = state_37084;
(statearr_37149[(31)] = inst_37070);

return statearr_37149;
})();
if(inst_37071){
var statearr_37150_37214 = state_37084__$1;
(statearr_37150_37214[(1)] = (42));

} else {
var statearr_37151_37215 = state_37084__$1;
(statearr_37151_37215[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (16))){
var inst_36985 = (state_37084[(7)]);
var inst_36987 = cljs.core.chunked_seq_QMARK_.call(null,inst_36985);
var state_37084__$1 = state_37084;
if(inst_36987){
var statearr_37152_37216 = state_37084__$1;
(statearr_37152_37216[(1)] = (19));

} else {
var statearr_37153_37217 = state_37084__$1;
(statearr_37153_37217[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (38))){
var inst_37063 = (state_37084[(2)]);
var state_37084__$1 = state_37084;
var statearr_37154_37218 = state_37084__$1;
(statearr_37154_37218[(2)] = inst_37063);

(statearr_37154_37218[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (30))){
var state_37084__$1 = state_37084;
var statearr_37155_37219 = state_37084__$1;
(statearr_37155_37219[(2)] = null);

(statearr_37155_37219[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (10))){
var inst_36966 = (state_37084[(13)]);
var inst_36968 = (state_37084[(17)]);
var inst_36974 = cljs.core._nth.call(null,inst_36966,inst_36968);
var inst_36975 = cljs.core.nth.call(null,inst_36974,(0),null);
var inst_36976 = cljs.core.nth.call(null,inst_36974,(1),null);
var state_37084__$1 = (function (){var statearr_37156 = state_37084;
(statearr_37156[(26)] = inst_36975);

return statearr_37156;
})();
if(cljs.core.truth_(inst_36976)){
var statearr_37157_37220 = state_37084__$1;
(statearr_37157_37220[(1)] = (13));

} else {
var statearr_37158_37221 = state_37084__$1;
(statearr_37158_37221[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (18))){
var inst_37009 = (state_37084[(2)]);
var state_37084__$1 = state_37084;
var statearr_37159_37222 = state_37084__$1;
(statearr_37159_37222[(2)] = inst_37009);

(statearr_37159_37222[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (42))){
var state_37084__$1 = state_37084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37084__$1,(45),dchan);
} else {
if((state_val_37085 === (37))){
var inst_37052 = (state_37084[(23)]);
var inst_37043 = (state_37084[(25)]);
var inst_36956 = (state_37084[(12)]);
var inst_37052__$1 = cljs.core.first.call(null,inst_37043);
var inst_37053 = cljs.core.async.put_BANG_.call(null,inst_37052__$1,inst_36956,done);
var state_37084__$1 = (function (){var statearr_37160 = state_37084;
(statearr_37160[(23)] = inst_37052__$1);

return statearr_37160;
})();
if(cljs.core.truth_(inst_37053)){
var statearr_37161_37223 = state_37084__$1;
(statearr_37161_37223[(1)] = (39));

} else {
var statearr_37162_37224 = state_37084__$1;
(statearr_37162_37224[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (8))){
var inst_36967 = (state_37084[(15)]);
var inst_36968 = (state_37084[(17)]);
var inst_36970 = (inst_36968 < inst_36967);
var inst_36971 = inst_36970;
var state_37084__$1 = state_37084;
if(cljs.core.truth_(inst_36971)){
var statearr_37163_37225 = state_37084__$1;
(statearr_37163_37225[(1)] = (10));

} else {
var statearr_37164_37226 = state_37084__$1;
(statearr_37164_37226[(1)] = (11));

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
});})(c__29107__auto___37172,cs,m,dchan,dctr,done))
;
return ((function (switch__29045__auto__,c__29107__auto___37172,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29046__auto__ = null;
var cljs$core$async$mult_$_state_machine__29046__auto____0 = (function (){
var statearr_37168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37168[(0)] = cljs$core$async$mult_$_state_machine__29046__auto__);

(statearr_37168[(1)] = (1));

return statearr_37168;
});
var cljs$core$async$mult_$_state_machine__29046__auto____1 = (function (state_37084){
while(true){
var ret_value__29047__auto__ = (function (){try{while(true){
var result__29048__auto__ = switch__29045__auto__.call(null,state_37084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29048__auto__;
}
break;
}
}catch (e37169){if((e37169 instanceof Object)){
var ex__29049__auto__ = e37169;
var statearr_37170_37227 = state_37084;
(statearr_37170_37227[(5)] = ex__29049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37228 = state_37084;
state_37084 = G__37228;
continue;
} else {
return ret_value__29047__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29046__auto__ = function(state_37084){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29046__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29046__auto____1.call(this,state_37084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29046__auto____0;
cljs$core$async$mult_$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29046__auto____1;
return cljs$core$async$mult_$_state_machine__29046__auto__;
})()
;})(switch__29045__auto__,c__29107__auto___37172,cs,m,dchan,dctr,done))
})();
var state__29109__auto__ = (function (){var statearr_37171 = f__29108__auto__.call(null);
(statearr_37171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29107__auto___37172);

return statearr_37171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29109__auto__);
});})(c__29107__auto___37172,cs,m,dchan,dctr,done))
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
var G__37230 = arguments.length;
switch (G__37230) {
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

cljs.core.async.Mix = (function (){var obj37233 = {};
return obj37233;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37238){
var map__37239 = p__37238;
var map__37239__$1 = ((cljs.core.seq_QMARK_.call(null,map__37239))?cljs.core.apply.call(null,cljs.core.hash_map,map__37239):map__37239);
var opts = map__37239__$1;
var statearr_37240_37243 = state;
(statearr_37240_37243[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__37239,map__37239__$1,opts){
return (function (val){
var statearr_37241_37244 = state;
(statearr_37241_37244[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__37239,map__37239__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_37242_37245 = state;
(statearr_37242_37245[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37234){
var G__37235 = cljs.core.first.call(null,seq37234);
var seq37234__$1 = cljs.core.next.call(null,seq37234);
var G__37236 = cljs.core.first.call(null,seq37234__$1);
var seq37234__$2 = cljs.core.next.call(null,seq37234__$1);
var G__37237 = cljs.core.first.call(null,seq37234__$2);
var seq37234__$3 = cljs.core.next.call(null,seq37234__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37235,G__37236,G__37237,seq37234__$3);
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
if(typeof cljs.core.async.t37365 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37365 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37366){
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
this.meta37366 = meta37366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t37365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37367,meta37366__$1){
var self__ = this;
var _37367__$1 = this;
return (new cljs.core.async.t37365(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37366__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37365.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37367){
var self__ = this;
var _37367__$1 = this;
return self__.meta37366;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37365.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t37365.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37365.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t37365.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37365.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37365.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37365.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37365.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t37365.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37366","meta37366",-133204764,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37365.cljs$lang$type = true;

cljs.core.async.t37365.cljs$lang$ctorStr = "cljs.core.async/t37365";

cljs.core.async.t37365.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25565__auto__,writer__25566__auto__,opt__25567__auto__){
return cljs.core._write.call(null,writer__25566__auto__,"cljs.core.async/t37365");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t37365 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t37365(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37366){
return (new cljs.core.async.t37365(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37366));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t37365(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29107__auto___37484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29107__auto___37484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29108__auto__ = (function (){var switch__29045__auto__ = ((function (c__29107__auto___37484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_37437){
var state_val_37438 = (state_37437[(1)]);
if((state_val_37438 === (7))){
var inst_37381 = (state_37437[(7)]);
var inst_37386 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37381);
var state_37437__$1 = state_37437;
var statearr_37439_37485 = state_37437__$1;
(statearr_37439_37485[(2)] = inst_37386);

(statearr_37439_37485[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (20))){
var inst_37396 = (state_37437[(8)]);
var state_37437__$1 = state_37437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37437__$1,(23),out,inst_37396);
} else {
if((state_val_37438 === (1))){
var inst_37371 = (state_37437[(9)]);
var inst_37371__$1 = calc_state.call(null);
var inst_37372 = cljs.core.seq_QMARK_.call(null,inst_37371__$1);
var state_37437__$1 = (function (){var statearr_37440 = state_37437;
(statearr_37440[(9)] = inst_37371__$1);

return statearr_37440;
})();
if(inst_37372){
var statearr_37441_37486 = state_37437__$1;
(statearr_37441_37486[(1)] = (2));

} else {
var statearr_37442_37487 = state_37437__$1;
(statearr_37442_37487[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (24))){
var inst_37389 = (state_37437[(10)]);
var inst_37381 = inst_37389;
var state_37437__$1 = (function (){var statearr_37443 = state_37437;
(statearr_37443[(7)] = inst_37381);

return statearr_37443;
})();
var statearr_37444_37488 = state_37437__$1;
(statearr_37444_37488[(2)] = null);

(statearr_37444_37488[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (4))){
var inst_37371 = (state_37437[(9)]);
var inst_37377 = (state_37437[(2)]);
var inst_37378 = cljs.core.get.call(null,inst_37377,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37379 = cljs.core.get.call(null,inst_37377,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37380 = cljs.core.get.call(null,inst_37377,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37381 = inst_37371;
var state_37437__$1 = (function (){var statearr_37445 = state_37437;
(statearr_37445[(11)] = inst_37378);

(statearr_37445[(12)] = inst_37380);

(statearr_37445[(7)] = inst_37381);

(statearr_37445[(13)] = inst_37379);

return statearr_37445;
})();
var statearr_37446_37489 = state_37437__$1;
(statearr_37446_37489[(2)] = null);

(statearr_37446_37489[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (15))){
var state_37437__$1 = state_37437;
var statearr_37447_37490 = state_37437__$1;
(statearr_37447_37490[(2)] = null);

(statearr_37447_37490[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (21))){
var inst_37389 = (state_37437[(10)]);
var inst_37381 = inst_37389;
var state_37437__$1 = (function (){var statearr_37448 = state_37437;
(statearr_37448[(7)] = inst_37381);

return statearr_37448;
})();
var statearr_37449_37491 = state_37437__$1;
(statearr_37449_37491[(2)] = null);

(statearr_37449_37491[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (13))){
var inst_37433 = (state_37437[(2)]);
var state_37437__$1 = state_37437;
var statearr_37450_37492 = state_37437__$1;
(statearr_37450_37492[(2)] = inst_37433);

(statearr_37450_37492[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (22))){
var inst_37431 = (state_37437[(2)]);
var state_37437__$1 = state_37437;
var statearr_37451_37493 = state_37437__$1;
(statearr_37451_37493[(2)] = inst_37431);

(statearr_37451_37493[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (6))){
var inst_37435 = (state_37437[(2)]);
var state_37437__$1 = state_37437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37437__$1,inst_37435);
} else {
if((state_val_37438 === (25))){
var state_37437__$1 = state_37437;
var statearr_37452_37494 = state_37437__$1;
(statearr_37452_37494[(2)] = null);

(statearr_37452_37494[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (17))){
var inst_37411 = (state_37437[(14)]);
var state_37437__$1 = state_37437;
var statearr_37453_37495 = state_37437__$1;
(statearr_37453_37495[(2)] = inst_37411);

(statearr_37453_37495[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (3))){
var inst_37371 = (state_37437[(9)]);
var state_37437__$1 = state_37437;
var statearr_37454_37496 = state_37437__$1;
(statearr_37454_37496[(2)] = inst_37371);

(statearr_37454_37496[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (12))){
var inst_37390 = (state_37437[(15)]);
var inst_37397 = (state_37437[(16)]);
var inst_37411 = (state_37437[(14)]);
var inst_37411__$1 = inst_37390.call(null,inst_37397);
var state_37437__$1 = (function (){var statearr_37455 = state_37437;
(statearr_37455[(14)] = inst_37411__$1);

return statearr_37455;
})();
if(cljs.core.truth_(inst_37411__$1)){
var statearr_37456_37497 = state_37437__$1;
(statearr_37456_37497[(1)] = (17));

} else {
var statearr_37457_37498 = state_37437__$1;
(statearr_37457_37498[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (2))){
var inst_37371 = (state_37437[(9)]);
var inst_37374 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37371);
var state_37437__$1 = state_37437;
var statearr_37458_37499 = state_37437__$1;
(statearr_37458_37499[(2)] = inst_37374);

(statearr_37458_37499[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (23))){
var inst_37422 = (state_37437[(2)]);
var state_37437__$1 = state_37437;
if(cljs.core.truth_(inst_37422)){
var statearr_37459_37500 = state_37437__$1;
(statearr_37459_37500[(1)] = (24));

} else {
var statearr_37460_37501 = state_37437__$1;
(statearr_37460_37501[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (19))){
var inst_37419 = (state_37437[(2)]);
var state_37437__$1 = state_37437;
if(cljs.core.truth_(inst_37419)){
var statearr_37461_37502 = state_37437__$1;
(statearr_37461_37502[(1)] = (20));

} else {
var statearr_37462_37503 = state_37437__$1;
(statearr_37462_37503[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (11))){
var inst_37396 = (state_37437[(8)]);
var inst_37402 = (inst_37396 == null);
var state_37437__$1 = state_37437;
if(cljs.core.truth_(inst_37402)){
var statearr_37463_37504 = state_37437__$1;
(statearr_37463_37504[(1)] = (14));

} else {
var statearr_37464_37505 = state_37437__$1;
(statearr_37464_37505[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (9))){
var inst_37389 = (state_37437[(10)]);
var inst_37389__$1 = (state_37437[(2)]);
var inst_37390 = cljs.core.get.call(null,inst_37389__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37391 = cljs.core.get.call(null,inst_37389__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37392 = cljs.core.get.call(null,inst_37389__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37437__$1 = (function (){var statearr_37465 = state_37437;
(statearr_37465[(15)] = inst_37390);

(statearr_37465[(17)] = inst_37391);

(statearr_37465[(10)] = inst_37389__$1);

return statearr_37465;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_37437__$1,(10),inst_37392);
} else {
if((state_val_37438 === (5))){
var inst_37381 = (state_37437[(7)]);
var inst_37384 = cljs.core.seq_QMARK_.call(null,inst_37381);
var state_37437__$1 = state_37437;
if(inst_37384){
var statearr_37466_37506 = state_37437__$1;
(statearr_37466_37506[(1)] = (7));

} else {
var statearr_37467_37507 = state_37437__$1;
(statearr_37467_37507[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (14))){
var inst_37397 = (state_37437[(16)]);
var inst_37404 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_37397);
var state_37437__$1 = state_37437;
var statearr_37468_37508 = state_37437__$1;
(statearr_37468_37508[(2)] = inst_37404);

(statearr_37468_37508[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (26))){
var inst_37427 = (state_37437[(2)]);
var state_37437__$1 = state_37437;
var statearr_37469_37509 = state_37437__$1;
(statearr_37469_37509[(2)] = inst_37427);

(statearr_37469_37509[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (16))){
var inst_37407 = (state_37437[(2)]);
var inst_37408 = calc_state.call(null);
var inst_37381 = inst_37408;
var state_37437__$1 = (function (){var statearr_37470 = state_37437;
(statearr_37470[(7)] = inst_37381);

(statearr_37470[(18)] = inst_37407);

return statearr_37470;
})();
var statearr_37471_37510 = state_37437__$1;
(statearr_37471_37510[(2)] = null);

(statearr_37471_37510[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (10))){
var inst_37397 = (state_37437[(16)]);
var inst_37396 = (state_37437[(8)]);
var inst_37395 = (state_37437[(2)]);
var inst_37396__$1 = cljs.core.nth.call(null,inst_37395,(0),null);
var inst_37397__$1 = cljs.core.nth.call(null,inst_37395,(1),null);
var inst_37398 = (inst_37396__$1 == null);
var inst_37399 = cljs.core._EQ_.call(null,inst_37397__$1,change);
var inst_37400 = (inst_37398) || (inst_37399);
var state_37437__$1 = (function (){var statearr_37472 = state_37437;
(statearr_37472[(16)] = inst_37397__$1);

(statearr_37472[(8)] = inst_37396__$1);

return statearr_37472;
})();
if(cljs.core.truth_(inst_37400)){
var statearr_37473_37511 = state_37437__$1;
(statearr_37473_37511[(1)] = (11));

} else {
var statearr_37474_37512 = state_37437__$1;
(statearr_37474_37512[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (18))){
var inst_37390 = (state_37437[(15)]);
var inst_37391 = (state_37437[(17)]);
var inst_37397 = (state_37437[(16)]);
var inst_37414 = cljs.core.empty_QMARK_.call(null,inst_37390);
var inst_37415 = inst_37391.call(null,inst_37397);
var inst_37416 = cljs.core.not.call(null,inst_37415);
var inst_37417 = (inst_37414) && (inst_37416);
var state_37437__$1 = state_37437;
var statearr_37475_37513 = state_37437__$1;
(statearr_37475_37513[(2)] = inst_37417);

(statearr_37475_37513[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (8))){
var inst_37381 = (state_37437[(7)]);
var state_37437__$1 = state_37437;
var statearr_37476_37514 = state_37437__$1;
(statearr_37476_37514[(2)] = inst_37381);

(statearr_37476_37514[(1)] = (9));


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
});})(c__29107__auto___37484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29045__auto__,c__29107__auto___37484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29046__auto__ = null;
var cljs$core$async$mix_$_state_machine__29046__auto____0 = (function (){
var statearr_37480 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37480[(0)] = cljs$core$async$mix_$_state_machine__29046__auto__);

(statearr_37480[(1)] = (1));

return statearr_37480;
});
var cljs$core$async$mix_$_state_machine__29046__auto____1 = (function (state_37437){
while(true){
var ret_value__29047__auto__ = (function (){try{while(true){
var result__29048__auto__ = switch__29045__auto__.call(null,state_37437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29048__auto__;
}
break;
}
}catch (e37481){if((e37481 instanceof Object)){
var ex__29049__auto__ = e37481;
var statearr_37482_37515 = state_37437;
(statearr_37482_37515[(5)] = ex__29049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37516 = state_37437;
state_37437 = G__37516;
continue;
} else {
return ret_value__29047__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29046__auto__ = function(state_37437){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29046__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29046__auto____1.call(this,state_37437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29046__auto____0;
cljs$core$async$mix_$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29046__auto____1;
return cljs$core$async$mix_$_state_machine__29046__auto__;
})()
;})(switch__29045__auto__,c__29107__auto___37484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29109__auto__ = (function (){var statearr_37483 = f__29108__auto__.call(null);
(statearr_37483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29107__auto___37484);

return statearr_37483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29109__auto__);
});})(c__29107__auto___37484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj37518 = {};
return obj37518;
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
var G__37520 = arguments.length;
switch (G__37520) {
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
var G__37524 = arguments.length;
switch (G__37524) {
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
return (function (p1__37522_SHARP_){
if(cljs.core.truth_(p1__37522_SHARP_.call(null,topic))){
return p1__37522_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__37522_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24986__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t37525 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37525 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37526){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37526 = meta37526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t37525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37527,meta37526__$1){
var self__ = this;
var _37527__$1 = this;
return (new cljs.core.async.t37525(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37526__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t37525.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37527){
var self__ = this;
var _37527__$1 = this;
return self__.meta37526;
});})(mults,ensure_mult))
;

cljs.core.async.t37525.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t37525.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t37525.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t37525.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t37525.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t37525.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t37525.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t37525.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37526","meta37526",-2031028216,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t37525.cljs$lang$type = true;

cljs.core.async.t37525.cljs$lang$ctorStr = "cljs.core.async/t37525";

cljs.core.async.t37525.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25565__auto__,writer__25566__auto__,opt__25567__auto__){
return cljs.core._write.call(null,writer__25566__auto__,"cljs.core.async/t37525");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t37525 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t37525(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37526){
return (new cljs.core.async.t37525(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37526));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t37525(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29107__auto___37648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29107__auto___37648,mults,ensure_mult,p){
return (function (){
var f__29108__auto__ = (function (){var switch__29045__auto__ = ((function (c__29107__auto___37648,mults,ensure_mult,p){
return (function (state_37599){
var state_val_37600 = (state_37599[(1)]);
if((state_val_37600 === (7))){
var inst_37595 = (state_37599[(2)]);
var state_37599__$1 = state_37599;
var statearr_37601_37649 = state_37599__$1;
(statearr_37601_37649[(2)] = inst_37595);

(statearr_37601_37649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (20))){
var state_37599__$1 = state_37599;
var statearr_37602_37650 = state_37599__$1;
(statearr_37602_37650[(2)] = null);

(statearr_37602_37650[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (1))){
var state_37599__$1 = state_37599;
var statearr_37603_37651 = state_37599__$1;
(statearr_37603_37651[(2)] = null);

(statearr_37603_37651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (24))){
var inst_37578 = (state_37599[(7)]);
var inst_37587 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_37578);
var state_37599__$1 = state_37599;
var statearr_37604_37652 = state_37599__$1;
(statearr_37604_37652[(2)] = inst_37587);

(statearr_37604_37652[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (4))){
var inst_37530 = (state_37599[(8)]);
var inst_37530__$1 = (state_37599[(2)]);
var inst_37531 = (inst_37530__$1 == null);
var state_37599__$1 = (function (){var statearr_37605 = state_37599;
(statearr_37605[(8)] = inst_37530__$1);

return statearr_37605;
})();
if(cljs.core.truth_(inst_37531)){
var statearr_37606_37653 = state_37599__$1;
(statearr_37606_37653[(1)] = (5));

} else {
var statearr_37607_37654 = state_37599__$1;
(statearr_37607_37654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (15))){
var inst_37572 = (state_37599[(2)]);
var state_37599__$1 = state_37599;
var statearr_37608_37655 = state_37599__$1;
(statearr_37608_37655[(2)] = inst_37572);

(statearr_37608_37655[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (21))){
var inst_37592 = (state_37599[(2)]);
var state_37599__$1 = (function (){var statearr_37609 = state_37599;
(statearr_37609[(9)] = inst_37592);

return statearr_37609;
})();
var statearr_37610_37656 = state_37599__$1;
(statearr_37610_37656[(2)] = null);

(statearr_37610_37656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (13))){
var inst_37554 = (state_37599[(10)]);
var inst_37556 = cljs.core.chunked_seq_QMARK_.call(null,inst_37554);
var state_37599__$1 = state_37599;
if(inst_37556){
var statearr_37611_37657 = state_37599__$1;
(statearr_37611_37657[(1)] = (16));

} else {
var statearr_37612_37658 = state_37599__$1;
(statearr_37612_37658[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (22))){
var inst_37584 = (state_37599[(2)]);
var state_37599__$1 = state_37599;
if(cljs.core.truth_(inst_37584)){
var statearr_37613_37659 = state_37599__$1;
(statearr_37613_37659[(1)] = (23));

} else {
var statearr_37614_37660 = state_37599__$1;
(statearr_37614_37660[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (6))){
var inst_37578 = (state_37599[(7)]);
var inst_37580 = (state_37599[(11)]);
var inst_37530 = (state_37599[(8)]);
var inst_37578__$1 = topic_fn.call(null,inst_37530);
var inst_37579 = cljs.core.deref.call(null,mults);
var inst_37580__$1 = cljs.core.get.call(null,inst_37579,inst_37578__$1);
var state_37599__$1 = (function (){var statearr_37615 = state_37599;
(statearr_37615[(7)] = inst_37578__$1);

(statearr_37615[(11)] = inst_37580__$1);

return statearr_37615;
})();
if(cljs.core.truth_(inst_37580__$1)){
var statearr_37616_37661 = state_37599__$1;
(statearr_37616_37661[(1)] = (19));

} else {
var statearr_37617_37662 = state_37599__$1;
(statearr_37617_37662[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (25))){
var inst_37589 = (state_37599[(2)]);
var state_37599__$1 = state_37599;
var statearr_37618_37663 = state_37599__$1;
(statearr_37618_37663[(2)] = inst_37589);

(statearr_37618_37663[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (17))){
var inst_37554 = (state_37599[(10)]);
var inst_37563 = cljs.core.first.call(null,inst_37554);
var inst_37564 = cljs.core.async.muxch_STAR_.call(null,inst_37563);
var inst_37565 = cljs.core.async.close_BANG_.call(null,inst_37564);
var inst_37566 = cljs.core.next.call(null,inst_37554);
var inst_37540 = inst_37566;
var inst_37541 = null;
var inst_37542 = (0);
var inst_37543 = (0);
var state_37599__$1 = (function (){var statearr_37619 = state_37599;
(statearr_37619[(12)] = inst_37565);

(statearr_37619[(13)] = inst_37542);

(statearr_37619[(14)] = inst_37540);

(statearr_37619[(15)] = inst_37541);

(statearr_37619[(16)] = inst_37543);

return statearr_37619;
})();
var statearr_37620_37664 = state_37599__$1;
(statearr_37620_37664[(2)] = null);

(statearr_37620_37664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (3))){
var inst_37597 = (state_37599[(2)]);
var state_37599__$1 = state_37599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37599__$1,inst_37597);
} else {
if((state_val_37600 === (12))){
var inst_37574 = (state_37599[(2)]);
var state_37599__$1 = state_37599;
var statearr_37621_37665 = state_37599__$1;
(statearr_37621_37665[(2)] = inst_37574);

(statearr_37621_37665[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (2))){
var state_37599__$1 = state_37599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37599__$1,(4),ch);
} else {
if((state_val_37600 === (23))){
var state_37599__$1 = state_37599;
var statearr_37622_37666 = state_37599__$1;
(statearr_37622_37666[(2)] = null);

(statearr_37622_37666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (19))){
var inst_37580 = (state_37599[(11)]);
var inst_37530 = (state_37599[(8)]);
var inst_37582 = cljs.core.async.muxch_STAR_.call(null,inst_37580);
var state_37599__$1 = state_37599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37599__$1,(22),inst_37582,inst_37530);
} else {
if((state_val_37600 === (11))){
var inst_37554 = (state_37599[(10)]);
var inst_37540 = (state_37599[(14)]);
var inst_37554__$1 = cljs.core.seq.call(null,inst_37540);
var state_37599__$1 = (function (){var statearr_37623 = state_37599;
(statearr_37623[(10)] = inst_37554__$1);

return statearr_37623;
})();
if(inst_37554__$1){
var statearr_37624_37667 = state_37599__$1;
(statearr_37624_37667[(1)] = (13));

} else {
var statearr_37625_37668 = state_37599__$1;
(statearr_37625_37668[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (9))){
var inst_37576 = (state_37599[(2)]);
var state_37599__$1 = state_37599;
var statearr_37626_37669 = state_37599__$1;
(statearr_37626_37669[(2)] = inst_37576);

(statearr_37626_37669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (5))){
var inst_37537 = cljs.core.deref.call(null,mults);
var inst_37538 = cljs.core.vals.call(null,inst_37537);
var inst_37539 = cljs.core.seq.call(null,inst_37538);
var inst_37540 = inst_37539;
var inst_37541 = null;
var inst_37542 = (0);
var inst_37543 = (0);
var state_37599__$1 = (function (){var statearr_37627 = state_37599;
(statearr_37627[(13)] = inst_37542);

(statearr_37627[(14)] = inst_37540);

(statearr_37627[(15)] = inst_37541);

(statearr_37627[(16)] = inst_37543);

return statearr_37627;
})();
var statearr_37628_37670 = state_37599__$1;
(statearr_37628_37670[(2)] = null);

(statearr_37628_37670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (14))){
var state_37599__$1 = state_37599;
var statearr_37632_37671 = state_37599__$1;
(statearr_37632_37671[(2)] = null);

(statearr_37632_37671[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (16))){
var inst_37554 = (state_37599[(10)]);
var inst_37558 = cljs.core.chunk_first.call(null,inst_37554);
var inst_37559 = cljs.core.chunk_rest.call(null,inst_37554);
var inst_37560 = cljs.core.count.call(null,inst_37558);
var inst_37540 = inst_37559;
var inst_37541 = inst_37558;
var inst_37542 = inst_37560;
var inst_37543 = (0);
var state_37599__$1 = (function (){var statearr_37633 = state_37599;
(statearr_37633[(13)] = inst_37542);

(statearr_37633[(14)] = inst_37540);

(statearr_37633[(15)] = inst_37541);

(statearr_37633[(16)] = inst_37543);

return statearr_37633;
})();
var statearr_37634_37672 = state_37599__$1;
(statearr_37634_37672[(2)] = null);

(statearr_37634_37672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (10))){
var inst_37542 = (state_37599[(13)]);
var inst_37540 = (state_37599[(14)]);
var inst_37541 = (state_37599[(15)]);
var inst_37543 = (state_37599[(16)]);
var inst_37548 = cljs.core._nth.call(null,inst_37541,inst_37543);
var inst_37549 = cljs.core.async.muxch_STAR_.call(null,inst_37548);
var inst_37550 = cljs.core.async.close_BANG_.call(null,inst_37549);
var inst_37551 = (inst_37543 + (1));
var tmp37629 = inst_37542;
var tmp37630 = inst_37540;
var tmp37631 = inst_37541;
var inst_37540__$1 = tmp37630;
var inst_37541__$1 = tmp37631;
var inst_37542__$1 = tmp37629;
var inst_37543__$1 = inst_37551;
var state_37599__$1 = (function (){var statearr_37635 = state_37599;
(statearr_37635[(13)] = inst_37542__$1);

(statearr_37635[(14)] = inst_37540__$1);

(statearr_37635[(15)] = inst_37541__$1);

(statearr_37635[(16)] = inst_37543__$1);

(statearr_37635[(17)] = inst_37550);

return statearr_37635;
})();
var statearr_37636_37673 = state_37599__$1;
(statearr_37636_37673[(2)] = null);

(statearr_37636_37673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (18))){
var inst_37569 = (state_37599[(2)]);
var state_37599__$1 = state_37599;
var statearr_37637_37674 = state_37599__$1;
(statearr_37637_37674[(2)] = inst_37569);

(statearr_37637_37674[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (8))){
var inst_37542 = (state_37599[(13)]);
var inst_37543 = (state_37599[(16)]);
var inst_37545 = (inst_37543 < inst_37542);
var inst_37546 = inst_37545;
var state_37599__$1 = state_37599;
if(cljs.core.truth_(inst_37546)){
var statearr_37638_37675 = state_37599__$1;
(statearr_37638_37675[(1)] = (10));

} else {
var statearr_37639_37676 = state_37599__$1;
(statearr_37639_37676[(1)] = (11));

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
});})(c__29107__auto___37648,mults,ensure_mult,p))
;
return ((function (switch__29045__auto__,c__29107__auto___37648,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29046__auto__ = null;
var cljs$core$async$state_machine__29046__auto____0 = (function (){
var statearr_37643 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37643[(0)] = cljs$core$async$state_machine__29046__auto__);

(statearr_37643[(1)] = (1));

return statearr_37643;
});
var cljs$core$async$state_machine__29046__auto____1 = (function (state_37599){
while(true){
var ret_value__29047__auto__ = (function (){try{while(true){
var result__29048__auto__ = switch__29045__auto__.call(null,state_37599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29048__auto__;
}
break;
}
}catch (e37644){if((e37644 instanceof Object)){
var ex__29049__auto__ = e37644;
var statearr_37645_37677 = state_37599;
(statearr_37645_37677[(5)] = ex__29049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37678 = state_37599;
state_37599 = G__37678;
continue;
} else {
return ret_value__29047__auto__;
}
break;
}
});
cljs$core$async$state_machine__29046__auto__ = function(state_37599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29046__auto____1.call(this,state_37599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29046__auto____0;
cljs$core$async$state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29046__auto____1;
return cljs$core$async$state_machine__29046__auto__;
})()
;})(switch__29045__auto__,c__29107__auto___37648,mults,ensure_mult,p))
})();
var state__29109__auto__ = (function (){var statearr_37646 = f__29108__auto__.call(null);
(statearr_37646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29107__auto___37648);

return statearr_37646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29109__auto__);
});})(c__29107__auto___37648,mults,ensure_mult,p))
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
var G__37680 = arguments.length;
switch (G__37680) {
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
var G__37683 = arguments.length;
switch (G__37683) {
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
var G__37686 = arguments.length;
switch (G__37686) {
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
var c__29107__auto___37756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29107__auto___37756,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29108__auto__ = (function (){var switch__29045__auto__ = ((function (c__29107__auto___37756,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_37725){
var state_val_37726 = (state_37725[(1)]);
if((state_val_37726 === (7))){
var state_37725__$1 = state_37725;
var statearr_37727_37757 = state_37725__$1;
(statearr_37727_37757[(2)] = null);

(statearr_37727_37757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37726 === (1))){
var state_37725__$1 = state_37725;
var statearr_37728_37758 = state_37725__$1;
(statearr_37728_37758[(2)] = null);

(statearr_37728_37758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37726 === (4))){
var inst_37689 = (state_37725[(7)]);
var inst_37691 = (inst_37689 < cnt);
var state_37725__$1 = state_37725;
if(cljs.core.truth_(inst_37691)){
var statearr_37729_37759 = state_37725__$1;
(statearr_37729_37759[(1)] = (6));

} else {
var statearr_37730_37760 = state_37725__$1;
(statearr_37730_37760[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37726 === (15))){
var inst_37721 = (state_37725[(2)]);
var state_37725__$1 = state_37725;
var statearr_37731_37761 = state_37725__$1;
(statearr_37731_37761[(2)] = inst_37721);

(statearr_37731_37761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37726 === (13))){
var inst_37714 = cljs.core.async.close_BANG_.call(null,out);
var state_37725__$1 = state_37725;
var statearr_37732_37762 = state_37725__$1;
(statearr_37732_37762[(2)] = inst_37714);

(statearr_37732_37762[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37726 === (6))){
var state_37725__$1 = state_37725;
var statearr_37733_37763 = state_37725__$1;
(statearr_37733_37763[(2)] = null);

(statearr_37733_37763[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37726 === (3))){
var inst_37723 = (state_37725[(2)]);
var state_37725__$1 = state_37725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37725__$1,inst_37723);
} else {
if((state_val_37726 === (12))){
var inst_37711 = (state_37725[(8)]);
var inst_37711__$1 = (state_37725[(2)]);
var inst_37712 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_37711__$1);
var state_37725__$1 = (function (){var statearr_37734 = state_37725;
(statearr_37734[(8)] = inst_37711__$1);

return statearr_37734;
})();
if(cljs.core.truth_(inst_37712)){
var statearr_37735_37764 = state_37725__$1;
(statearr_37735_37764[(1)] = (13));

} else {
var statearr_37736_37765 = state_37725__$1;
(statearr_37736_37765[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37726 === (2))){
var inst_37688 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_37689 = (0);
var state_37725__$1 = (function (){var statearr_37737 = state_37725;
(statearr_37737[(9)] = inst_37688);

(statearr_37737[(7)] = inst_37689);

return statearr_37737;
})();
var statearr_37738_37766 = state_37725__$1;
(statearr_37738_37766[(2)] = null);

(statearr_37738_37766[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37726 === (11))){
var inst_37689 = (state_37725[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37725,(10),Object,null,(9));
var inst_37698 = chs__$1.call(null,inst_37689);
var inst_37699 = done.call(null,inst_37689);
var inst_37700 = cljs.core.async.take_BANG_.call(null,inst_37698,inst_37699);
var state_37725__$1 = state_37725;
var statearr_37739_37767 = state_37725__$1;
(statearr_37739_37767[(2)] = inst_37700);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37725__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37726 === (9))){
var inst_37689 = (state_37725[(7)]);
var inst_37702 = (state_37725[(2)]);
var inst_37703 = (inst_37689 + (1));
var inst_37689__$1 = inst_37703;
var state_37725__$1 = (function (){var statearr_37740 = state_37725;
(statearr_37740[(10)] = inst_37702);

(statearr_37740[(7)] = inst_37689__$1);

return statearr_37740;
})();
var statearr_37741_37768 = state_37725__$1;
(statearr_37741_37768[(2)] = null);

(statearr_37741_37768[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37726 === (5))){
var inst_37709 = (state_37725[(2)]);
var state_37725__$1 = (function (){var statearr_37742 = state_37725;
(statearr_37742[(11)] = inst_37709);

return statearr_37742;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37725__$1,(12),dchan);
} else {
if((state_val_37726 === (14))){
var inst_37711 = (state_37725[(8)]);
var inst_37716 = cljs.core.apply.call(null,f,inst_37711);
var state_37725__$1 = state_37725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37725__$1,(16),out,inst_37716);
} else {
if((state_val_37726 === (16))){
var inst_37718 = (state_37725[(2)]);
var state_37725__$1 = (function (){var statearr_37743 = state_37725;
(statearr_37743[(12)] = inst_37718);

return statearr_37743;
})();
var statearr_37744_37769 = state_37725__$1;
(statearr_37744_37769[(2)] = null);

(statearr_37744_37769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37726 === (10))){
var inst_37693 = (state_37725[(2)]);
var inst_37694 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_37725__$1 = (function (){var statearr_37745 = state_37725;
(statearr_37745[(13)] = inst_37693);

return statearr_37745;
})();
var statearr_37746_37770 = state_37725__$1;
(statearr_37746_37770[(2)] = inst_37694);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37725__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37726 === (8))){
var inst_37707 = (state_37725[(2)]);
var state_37725__$1 = state_37725;
var statearr_37747_37771 = state_37725__$1;
(statearr_37747_37771[(2)] = inst_37707);

(statearr_37747_37771[(1)] = (5));


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
});})(c__29107__auto___37756,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29045__auto__,c__29107__auto___37756,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29046__auto__ = null;
var cljs$core$async$state_machine__29046__auto____0 = (function (){
var statearr_37751 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37751[(0)] = cljs$core$async$state_machine__29046__auto__);

(statearr_37751[(1)] = (1));

return statearr_37751;
});
var cljs$core$async$state_machine__29046__auto____1 = (function (state_37725){
while(true){
var ret_value__29047__auto__ = (function (){try{while(true){
var result__29048__auto__ = switch__29045__auto__.call(null,state_37725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29048__auto__;
}
break;
}
}catch (e37752){if((e37752 instanceof Object)){
var ex__29049__auto__ = e37752;
var statearr_37753_37772 = state_37725;
(statearr_37753_37772[(5)] = ex__29049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37773 = state_37725;
state_37725 = G__37773;
continue;
} else {
return ret_value__29047__auto__;
}
break;
}
});
cljs$core$async$state_machine__29046__auto__ = function(state_37725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29046__auto____1.call(this,state_37725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29046__auto____0;
cljs$core$async$state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29046__auto____1;
return cljs$core$async$state_machine__29046__auto__;
})()
;})(switch__29045__auto__,c__29107__auto___37756,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29109__auto__ = (function (){var statearr_37754 = f__29108__auto__.call(null);
(statearr_37754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29107__auto___37756);

return statearr_37754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29109__auto__);
});})(c__29107__auto___37756,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__37776 = arguments.length;
switch (G__37776) {
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
var c__29107__auto___37831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29107__auto___37831,out){
return (function (){
var f__29108__auto__ = (function (){var switch__29045__auto__ = ((function (c__29107__auto___37831,out){
return (function (state_37806){
var state_val_37807 = (state_37806[(1)]);
if((state_val_37807 === (7))){
var inst_37786 = (state_37806[(7)]);
var inst_37785 = (state_37806[(8)]);
var inst_37785__$1 = (state_37806[(2)]);
var inst_37786__$1 = cljs.core.nth.call(null,inst_37785__$1,(0),null);
var inst_37787 = cljs.core.nth.call(null,inst_37785__$1,(1),null);
var inst_37788 = (inst_37786__$1 == null);
var state_37806__$1 = (function (){var statearr_37808 = state_37806;
(statearr_37808[(7)] = inst_37786__$1);

(statearr_37808[(9)] = inst_37787);

(statearr_37808[(8)] = inst_37785__$1);

return statearr_37808;
})();
if(cljs.core.truth_(inst_37788)){
var statearr_37809_37832 = state_37806__$1;
(statearr_37809_37832[(1)] = (8));

} else {
var statearr_37810_37833 = state_37806__$1;
(statearr_37810_37833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37807 === (1))){
var inst_37777 = cljs.core.vec.call(null,chs);
var inst_37778 = inst_37777;
var state_37806__$1 = (function (){var statearr_37811 = state_37806;
(statearr_37811[(10)] = inst_37778);

return statearr_37811;
})();
var statearr_37812_37834 = state_37806__$1;
(statearr_37812_37834[(2)] = null);

(statearr_37812_37834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37807 === (4))){
var inst_37778 = (state_37806[(10)]);
var state_37806__$1 = state_37806;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37806__$1,(7),inst_37778);
} else {
if((state_val_37807 === (6))){
var inst_37802 = (state_37806[(2)]);
var state_37806__$1 = state_37806;
var statearr_37813_37835 = state_37806__$1;
(statearr_37813_37835[(2)] = inst_37802);

(statearr_37813_37835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37807 === (3))){
var inst_37804 = (state_37806[(2)]);
var state_37806__$1 = state_37806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37806__$1,inst_37804);
} else {
if((state_val_37807 === (2))){
var inst_37778 = (state_37806[(10)]);
var inst_37780 = cljs.core.count.call(null,inst_37778);
var inst_37781 = (inst_37780 > (0));
var state_37806__$1 = state_37806;
if(cljs.core.truth_(inst_37781)){
var statearr_37815_37836 = state_37806__$1;
(statearr_37815_37836[(1)] = (4));

} else {
var statearr_37816_37837 = state_37806__$1;
(statearr_37816_37837[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37807 === (11))){
var inst_37778 = (state_37806[(10)]);
var inst_37795 = (state_37806[(2)]);
var tmp37814 = inst_37778;
var inst_37778__$1 = tmp37814;
var state_37806__$1 = (function (){var statearr_37817 = state_37806;
(statearr_37817[(10)] = inst_37778__$1);

(statearr_37817[(11)] = inst_37795);

return statearr_37817;
})();
var statearr_37818_37838 = state_37806__$1;
(statearr_37818_37838[(2)] = null);

(statearr_37818_37838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37807 === (9))){
var inst_37786 = (state_37806[(7)]);
var state_37806__$1 = state_37806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37806__$1,(11),out,inst_37786);
} else {
if((state_val_37807 === (5))){
var inst_37800 = cljs.core.async.close_BANG_.call(null,out);
var state_37806__$1 = state_37806;
var statearr_37819_37839 = state_37806__$1;
(statearr_37819_37839[(2)] = inst_37800);

(statearr_37819_37839[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37807 === (10))){
var inst_37798 = (state_37806[(2)]);
var state_37806__$1 = state_37806;
var statearr_37820_37840 = state_37806__$1;
(statearr_37820_37840[(2)] = inst_37798);

(statearr_37820_37840[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37807 === (8))){
var inst_37786 = (state_37806[(7)]);
var inst_37778 = (state_37806[(10)]);
var inst_37787 = (state_37806[(9)]);
var inst_37785 = (state_37806[(8)]);
var inst_37790 = (function (){var cs = inst_37778;
var vec__37783 = inst_37785;
var v = inst_37786;
var c = inst_37787;
return ((function (cs,vec__37783,v,c,inst_37786,inst_37778,inst_37787,inst_37785,state_val_37807,c__29107__auto___37831,out){
return (function (p1__37774_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__37774_SHARP_);
});
;})(cs,vec__37783,v,c,inst_37786,inst_37778,inst_37787,inst_37785,state_val_37807,c__29107__auto___37831,out))
})();
var inst_37791 = cljs.core.filterv.call(null,inst_37790,inst_37778);
var inst_37778__$1 = inst_37791;
var state_37806__$1 = (function (){var statearr_37821 = state_37806;
(statearr_37821[(10)] = inst_37778__$1);

return statearr_37821;
})();
var statearr_37822_37841 = state_37806__$1;
(statearr_37822_37841[(2)] = null);

(statearr_37822_37841[(1)] = (2));


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
});})(c__29107__auto___37831,out))
;
return ((function (switch__29045__auto__,c__29107__auto___37831,out){
return (function() {
var cljs$core$async$state_machine__29046__auto__ = null;
var cljs$core$async$state_machine__29046__auto____0 = (function (){
var statearr_37826 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37826[(0)] = cljs$core$async$state_machine__29046__auto__);

(statearr_37826[(1)] = (1));

return statearr_37826;
});
var cljs$core$async$state_machine__29046__auto____1 = (function (state_37806){
while(true){
var ret_value__29047__auto__ = (function (){try{while(true){
var result__29048__auto__ = switch__29045__auto__.call(null,state_37806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29048__auto__;
}
break;
}
}catch (e37827){if((e37827 instanceof Object)){
var ex__29049__auto__ = e37827;
var statearr_37828_37842 = state_37806;
(statearr_37828_37842[(5)] = ex__29049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37843 = state_37806;
state_37806 = G__37843;
continue;
} else {
return ret_value__29047__auto__;
}
break;
}
});
cljs$core$async$state_machine__29046__auto__ = function(state_37806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29046__auto____1.call(this,state_37806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29046__auto____0;
cljs$core$async$state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29046__auto____1;
return cljs$core$async$state_machine__29046__auto__;
})()
;})(switch__29045__auto__,c__29107__auto___37831,out))
})();
var state__29109__auto__ = (function (){var statearr_37829 = f__29108__auto__.call(null);
(statearr_37829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29107__auto___37831);

return statearr_37829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29109__auto__);
});})(c__29107__auto___37831,out))
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
var G__37845 = arguments.length;
switch (G__37845) {
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
var c__29107__auto___37893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29107__auto___37893,out){
return (function (){
var f__29108__auto__ = (function (){var switch__29045__auto__ = ((function (c__29107__auto___37893,out){
return (function (state_37869){
var state_val_37870 = (state_37869[(1)]);
if((state_val_37870 === (7))){
var inst_37851 = (state_37869[(7)]);
var inst_37851__$1 = (state_37869[(2)]);
var inst_37852 = (inst_37851__$1 == null);
var inst_37853 = cljs.core.not.call(null,inst_37852);
var state_37869__$1 = (function (){var statearr_37871 = state_37869;
(statearr_37871[(7)] = inst_37851__$1);

return statearr_37871;
})();
if(inst_37853){
var statearr_37872_37894 = state_37869__$1;
(statearr_37872_37894[(1)] = (8));

} else {
var statearr_37873_37895 = state_37869__$1;
(statearr_37873_37895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37870 === (1))){
var inst_37846 = (0);
var state_37869__$1 = (function (){var statearr_37874 = state_37869;
(statearr_37874[(8)] = inst_37846);

return statearr_37874;
})();
var statearr_37875_37896 = state_37869__$1;
(statearr_37875_37896[(2)] = null);

(statearr_37875_37896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37870 === (4))){
var state_37869__$1 = state_37869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37869__$1,(7),ch);
} else {
if((state_val_37870 === (6))){
var inst_37864 = (state_37869[(2)]);
var state_37869__$1 = state_37869;
var statearr_37876_37897 = state_37869__$1;
(statearr_37876_37897[(2)] = inst_37864);

(statearr_37876_37897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37870 === (3))){
var inst_37866 = (state_37869[(2)]);
var inst_37867 = cljs.core.async.close_BANG_.call(null,out);
var state_37869__$1 = (function (){var statearr_37877 = state_37869;
(statearr_37877[(9)] = inst_37866);

return statearr_37877;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37869__$1,inst_37867);
} else {
if((state_val_37870 === (2))){
var inst_37846 = (state_37869[(8)]);
var inst_37848 = (inst_37846 < n);
var state_37869__$1 = state_37869;
if(cljs.core.truth_(inst_37848)){
var statearr_37878_37898 = state_37869__$1;
(statearr_37878_37898[(1)] = (4));

} else {
var statearr_37879_37899 = state_37869__$1;
(statearr_37879_37899[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37870 === (11))){
var inst_37846 = (state_37869[(8)]);
var inst_37856 = (state_37869[(2)]);
var inst_37857 = (inst_37846 + (1));
var inst_37846__$1 = inst_37857;
var state_37869__$1 = (function (){var statearr_37880 = state_37869;
(statearr_37880[(8)] = inst_37846__$1);

(statearr_37880[(10)] = inst_37856);

return statearr_37880;
})();
var statearr_37881_37900 = state_37869__$1;
(statearr_37881_37900[(2)] = null);

(statearr_37881_37900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37870 === (9))){
var state_37869__$1 = state_37869;
var statearr_37882_37901 = state_37869__$1;
(statearr_37882_37901[(2)] = null);

(statearr_37882_37901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37870 === (5))){
var state_37869__$1 = state_37869;
var statearr_37883_37902 = state_37869__$1;
(statearr_37883_37902[(2)] = null);

(statearr_37883_37902[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37870 === (10))){
var inst_37861 = (state_37869[(2)]);
var state_37869__$1 = state_37869;
var statearr_37884_37903 = state_37869__$1;
(statearr_37884_37903[(2)] = inst_37861);

(statearr_37884_37903[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37870 === (8))){
var inst_37851 = (state_37869[(7)]);
var state_37869__$1 = state_37869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37869__$1,(11),out,inst_37851);
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
});})(c__29107__auto___37893,out))
;
return ((function (switch__29045__auto__,c__29107__auto___37893,out){
return (function() {
var cljs$core$async$state_machine__29046__auto__ = null;
var cljs$core$async$state_machine__29046__auto____0 = (function (){
var statearr_37888 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37888[(0)] = cljs$core$async$state_machine__29046__auto__);

(statearr_37888[(1)] = (1));

return statearr_37888;
});
var cljs$core$async$state_machine__29046__auto____1 = (function (state_37869){
while(true){
var ret_value__29047__auto__ = (function (){try{while(true){
var result__29048__auto__ = switch__29045__auto__.call(null,state_37869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29048__auto__;
}
break;
}
}catch (e37889){if((e37889 instanceof Object)){
var ex__29049__auto__ = e37889;
var statearr_37890_37904 = state_37869;
(statearr_37890_37904[(5)] = ex__29049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37905 = state_37869;
state_37869 = G__37905;
continue;
} else {
return ret_value__29047__auto__;
}
break;
}
});
cljs$core$async$state_machine__29046__auto__ = function(state_37869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29046__auto____1.call(this,state_37869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29046__auto____0;
cljs$core$async$state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29046__auto____1;
return cljs$core$async$state_machine__29046__auto__;
})()
;})(switch__29045__auto__,c__29107__auto___37893,out))
})();
var state__29109__auto__ = (function (){var statearr_37891 = f__29108__auto__.call(null);
(statearr_37891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29107__auto___37893);

return statearr_37891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29109__auto__);
});})(c__29107__auto___37893,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t37913 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37913 = (function (map_LT_,f,ch,meta37914){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta37914 = meta37914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t37913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37915,meta37914__$1){
var self__ = this;
var _37915__$1 = this;
return (new cljs.core.async.t37913(self__.map_LT_,self__.f,self__.ch,meta37914__$1));
});

cljs.core.async.t37913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37915){
var self__ = this;
var _37915__$1 = this;
return self__.meta37914;
});

cljs.core.async.t37913.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t37913.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t37913.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t37913.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t37913.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t37916 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37916 = (function (map_LT_,f,ch,meta37914,_,fn1,meta37917){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta37914 = meta37914;
this._ = _;
this.fn1 = fn1;
this.meta37917 = meta37917;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t37916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_37918,meta37917__$1){
var self__ = this;
var _37918__$1 = this;
return (new cljs.core.async.t37916(self__.map_LT_,self__.f,self__.ch,self__.meta37914,self__._,self__.fn1,meta37917__$1));
});})(___$1))
;

cljs.core.async.t37916.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_37918){
var self__ = this;
var _37918__$1 = this;
return self__.meta37917;
});})(___$1))
;

cljs.core.async.t37916.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t37916.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t37916.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__37906_SHARP_){
return f1.call(null,(((p1__37906_SHARP_ == null))?null:self__.f.call(null,p1__37906_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t37916.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37914","meta37914",-31529069,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37917","meta37917",1311045242,null)], null);
});})(___$1))
;

cljs.core.async.t37916.cljs$lang$type = true;

cljs.core.async.t37916.cljs$lang$ctorStr = "cljs.core.async/t37916";

cljs.core.async.t37916.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25565__auto__,writer__25566__auto__,opt__25567__auto__){
return cljs.core._write.call(null,writer__25566__auto__,"cljs.core.async/t37916");
});})(___$1))
;

cljs.core.async.__GT_t37916 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t37916(map_LT___$1,f__$1,ch__$1,meta37914__$1,___$2,fn1__$1,meta37917){
return (new cljs.core.async.t37916(map_LT___$1,f__$1,ch__$1,meta37914__$1,___$2,fn1__$1,meta37917));
});})(___$1))
;

}

return (new cljs.core.async.t37916(self__.map_LT_,self__.f,self__.ch,self__.meta37914,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t37913.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t37913.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t37913.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37914","meta37914",-31529069,null)], null);
});

cljs.core.async.t37913.cljs$lang$type = true;

cljs.core.async.t37913.cljs$lang$ctorStr = "cljs.core.async/t37913";

cljs.core.async.t37913.cljs$lang$ctorPrWriter = (function (this__25565__auto__,writer__25566__auto__,opt__25567__auto__){
return cljs.core._write.call(null,writer__25566__auto__,"cljs.core.async/t37913");
});

cljs.core.async.__GT_t37913 = (function cljs$core$async$map_LT__$___GT_t37913(map_LT___$1,f__$1,ch__$1,meta37914){
return (new cljs.core.async.t37913(map_LT___$1,f__$1,ch__$1,meta37914));
});

}

return (new cljs.core.async.t37913(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t37922 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37922 = (function (map_GT_,f,ch,meta37923){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta37923 = meta37923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t37922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37924,meta37923__$1){
var self__ = this;
var _37924__$1 = this;
return (new cljs.core.async.t37922(self__.map_GT_,self__.f,self__.ch,meta37923__$1));
});

cljs.core.async.t37922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37924){
var self__ = this;
var _37924__$1 = this;
return self__.meta37923;
});

cljs.core.async.t37922.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t37922.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t37922.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t37922.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t37922.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t37922.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t37922.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37923","meta37923",-1105627342,null)], null);
});

cljs.core.async.t37922.cljs$lang$type = true;

cljs.core.async.t37922.cljs$lang$ctorStr = "cljs.core.async/t37922";

cljs.core.async.t37922.cljs$lang$ctorPrWriter = (function (this__25565__auto__,writer__25566__auto__,opt__25567__auto__){
return cljs.core._write.call(null,writer__25566__auto__,"cljs.core.async/t37922");
});

cljs.core.async.__GT_t37922 = (function cljs$core$async$map_GT__$___GT_t37922(map_GT___$1,f__$1,ch__$1,meta37923){
return (new cljs.core.async.t37922(map_GT___$1,f__$1,ch__$1,meta37923));
});

}

return (new cljs.core.async.t37922(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t37928 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37928 = (function (filter_GT_,p,ch,meta37929){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta37929 = meta37929;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t37928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37930,meta37929__$1){
var self__ = this;
var _37930__$1 = this;
return (new cljs.core.async.t37928(self__.filter_GT_,self__.p,self__.ch,meta37929__$1));
});

cljs.core.async.t37928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37930){
var self__ = this;
var _37930__$1 = this;
return self__.meta37929;
});

cljs.core.async.t37928.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t37928.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t37928.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t37928.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t37928.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t37928.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t37928.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t37928.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37929","meta37929",1203637095,null)], null);
});

cljs.core.async.t37928.cljs$lang$type = true;

cljs.core.async.t37928.cljs$lang$ctorStr = "cljs.core.async/t37928";

cljs.core.async.t37928.cljs$lang$ctorPrWriter = (function (this__25565__auto__,writer__25566__auto__,opt__25567__auto__){
return cljs.core._write.call(null,writer__25566__auto__,"cljs.core.async/t37928");
});

cljs.core.async.__GT_t37928 = (function cljs$core$async$filter_GT__$___GT_t37928(filter_GT___$1,p__$1,ch__$1,meta37929){
return (new cljs.core.async.t37928(filter_GT___$1,p__$1,ch__$1,meta37929));
});

}

return (new cljs.core.async.t37928(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__37932 = arguments.length;
switch (G__37932) {
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
var c__29107__auto___37975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29107__auto___37975,out){
return (function (){
var f__29108__auto__ = (function (){var switch__29045__auto__ = ((function (c__29107__auto___37975,out){
return (function (state_37953){
var state_val_37954 = (state_37953[(1)]);
if((state_val_37954 === (7))){
var inst_37949 = (state_37953[(2)]);
var state_37953__$1 = state_37953;
var statearr_37955_37976 = state_37953__$1;
(statearr_37955_37976[(2)] = inst_37949);

(statearr_37955_37976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37954 === (1))){
var state_37953__$1 = state_37953;
var statearr_37956_37977 = state_37953__$1;
(statearr_37956_37977[(2)] = null);

(statearr_37956_37977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37954 === (4))){
var inst_37935 = (state_37953[(7)]);
var inst_37935__$1 = (state_37953[(2)]);
var inst_37936 = (inst_37935__$1 == null);
var state_37953__$1 = (function (){var statearr_37957 = state_37953;
(statearr_37957[(7)] = inst_37935__$1);

return statearr_37957;
})();
if(cljs.core.truth_(inst_37936)){
var statearr_37958_37978 = state_37953__$1;
(statearr_37958_37978[(1)] = (5));

} else {
var statearr_37959_37979 = state_37953__$1;
(statearr_37959_37979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37954 === (6))){
var inst_37935 = (state_37953[(7)]);
var inst_37940 = p.call(null,inst_37935);
var state_37953__$1 = state_37953;
if(cljs.core.truth_(inst_37940)){
var statearr_37960_37980 = state_37953__$1;
(statearr_37960_37980[(1)] = (8));

} else {
var statearr_37961_37981 = state_37953__$1;
(statearr_37961_37981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37954 === (3))){
var inst_37951 = (state_37953[(2)]);
var state_37953__$1 = state_37953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37953__$1,inst_37951);
} else {
if((state_val_37954 === (2))){
var state_37953__$1 = state_37953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37953__$1,(4),ch);
} else {
if((state_val_37954 === (11))){
var inst_37943 = (state_37953[(2)]);
var state_37953__$1 = state_37953;
var statearr_37962_37982 = state_37953__$1;
(statearr_37962_37982[(2)] = inst_37943);

(statearr_37962_37982[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37954 === (9))){
var state_37953__$1 = state_37953;
var statearr_37963_37983 = state_37953__$1;
(statearr_37963_37983[(2)] = null);

(statearr_37963_37983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37954 === (5))){
var inst_37938 = cljs.core.async.close_BANG_.call(null,out);
var state_37953__$1 = state_37953;
var statearr_37964_37984 = state_37953__$1;
(statearr_37964_37984[(2)] = inst_37938);

(statearr_37964_37984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37954 === (10))){
var inst_37946 = (state_37953[(2)]);
var state_37953__$1 = (function (){var statearr_37965 = state_37953;
(statearr_37965[(8)] = inst_37946);

return statearr_37965;
})();
var statearr_37966_37985 = state_37953__$1;
(statearr_37966_37985[(2)] = null);

(statearr_37966_37985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37954 === (8))){
var inst_37935 = (state_37953[(7)]);
var state_37953__$1 = state_37953;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37953__$1,(11),out,inst_37935);
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
});})(c__29107__auto___37975,out))
;
return ((function (switch__29045__auto__,c__29107__auto___37975,out){
return (function() {
var cljs$core$async$state_machine__29046__auto__ = null;
var cljs$core$async$state_machine__29046__auto____0 = (function (){
var statearr_37970 = [null,null,null,null,null,null,null,null,null];
(statearr_37970[(0)] = cljs$core$async$state_machine__29046__auto__);

(statearr_37970[(1)] = (1));

return statearr_37970;
});
var cljs$core$async$state_machine__29046__auto____1 = (function (state_37953){
while(true){
var ret_value__29047__auto__ = (function (){try{while(true){
var result__29048__auto__ = switch__29045__auto__.call(null,state_37953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29048__auto__;
}
break;
}
}catch (e37971){if((e37971 instanceof Object)){
var ex__29049__auto__ = e37971;
var statearr_37972_37986 = state_37953;
(statearr_37972_37986[(5)] = ex__29049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37987 = state_37953;
state_37953 = G__37987;
continue;
} else {
return ret_value__29047__auto__;
}
break;
}
});
cljs$core$async$state_machine__29046__auto__ = function(state_37953){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29046__auto____1.call(this,state_37953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29046__auto____0;
cljs$core$async$state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29046__auto____1;
return cljs$core$async$state_machine__29046__auto__;
})()
;})(switch__29045__auto__,c__29107__auto___37975,out))
})();
var state__29109__auto__ = (function (){var statearr_37973 = f__29108__auto__.call(null);
(statearr_37973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29107__auto___37975);

return statearr_37973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29109__auto__);
});})(c__29107__auto___37975,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__37989 = arguments.length;
switch (G__37989) {
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
var c__29107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29107__auto__){
return (function (){
var f__29108__auto__ = (function (){var switch__29045__auto__ = ((function (c__29107__auto__){
return (function (state_38156){
var state_val_38157 = (state_38156[(1)]);
if((state_val_38157 === (7))){
var inst_38152 = (state_38156[(2)]);
var state_38156__$1 = state_38156;
var statearr_38158_38199 = state_38156__$1;
(statearr_38158_38199[(2)] = inst_38152);

(statearr_38158_38199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38157 === (20))){
var inst_38122 = (state_38156[(7)]);
var inst_38133 = (state_38156[(2)]);
var inst_38134 = cljs.core.next.call(null,inst_38122);
var inst_38108 = inst_38134;
var inst_38109 = null;
var inst_38110 = (0);
var inst_38111 = (0);
var state_38156__$1 = (function (){var statearr_38159 = state_38156;
(statearr_38159[(8)] = inst_38108);

(statearr_38159[(9)] = inst_38110);

(statearr_38159[(10)] = inst_38133);

(statearr_38159[(11)] = inst_38109);

(statearr_38159[(12)] = inst_38111);

return statearr_38159;
})();
var statearr_38160_38200 = state_38156__$1;
(statearr_38160_38200[(2)] = null);

(statearr_38160_38200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38157 === (1))){
var state_38156__$1 = state_38156;
var statearr_38161_38201 = state_38156__$1;
(statearr_38161_38201[(2)] = null);

(statearr_38161_38201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38157 === (4))){
var inst_38097 = (state_38156[(13)]);
var inst_38097__$1 = (state_38156[(2)]);
var inst_38098 = (inst_38097__$1 == null);
var state_38156__$1 = (function (){var statearr_38162 = state_38156;
(statearr_38162[(13)] = inst_38097__$1);

return statearr_38162;
})();
if(cljs.core.truth_(inst_38098)){
var statearr_38163_38202 = state_38156__$1;
(statearr_38163_38202[(1)] = (5));

} else {
var statearr_38164_38203 = state_38156__$1;
(statearr_38164_38203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38157 === (15))){
var state_38156__$1 = state_38156;
var statearr_38168_38204 = state_38156__$1;
(statearr_38168_38204[(2)] = null);

(statearr_38168_38204[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38157 === (21))){
var state_38156__$1 = state_38156;
var statearr_38169_38205 = state_38156__$1;
(statearr_38169_38205[(2)] = null);

(statearr_38169_38205[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38157 === (13))){
var inst_38108 = (state_38156[(8)]);
var inst_38110 = (state_38156[(9)]);
var inst_38109 = (state_38156[(11)]);
var inst_38111 = (state_38156[(12)]);
var inst_38118 = (state_38156[(2)]);
var inst_38119 = (inst_38111 + (1));
var tmp38165 = inst_38108;
var tmp38166 = inst_38110;
var tmp38167 = inst_38109;
var inst_38108__$1 = tmp38165;
var inst_38109__$1 = tmp38167;
var inst_38110__$1 = tmp38166;
var inst_38111__$1 = inst_38119;
var state_38156__$1 = (function (){var statearr_38170 = state_38156;
(statearr_38170[(8)] = inst_38108__$1);

(statearr_38170[(9)] = inst_38110__$1);

(statearr_38170[(11)] = inst_38109__$1);

(statearr_38170[(12)] = inst_38111__$1);

(statearr_38170[(14)] = inst_38118);

return statearr_38170;
})();
var statearr_38171_38206 = state_38156__$1;
(statearr_38171_38206[(2)] = null);

(statearr_38171_38206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38157 === (22))){
var state_38156__$1 = state_38156;
var statearr_38172_38207 = state_38156__$1;
(statearr_38172_38207[(2)] = null);

(statearr_38172_38207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38157 === (6))){
var inst_38097 = (state_38156[(13)]);
var inst_38106 = f.call(null,inst_38097);
var inst_38107 = cljs.core.seq.call(null,inst_38106);
var inst_38108 = inst_38107;
var inst_38109 = null;
var inst_38110 = (0);
var inst_38111 = (0);
var state_38156__$1 = (function (){var statearr_38173 = state_38156;
(statearr_38173[(8)] = inst_38108);

(statearr_38173[(9)] = inst_38110);

(statearr_38173[(11)] = inst_38109);

(statearr_38173[(12)] = inst_38111);

return statearr_38173;
})();
var statearr_38174_38208 = state_38156__$1;
(statearr_38174_38208[(2)] = null);

(statearr_38174_38208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38157 === (17))){
var inst_38122 = (state_38156[(7)]);
var inst_38126 = cljs.core.chunk_first.call(null,inst_38122);
var inst_38127 = cljs.core.chunk_rest.call(null,inst_38122);
var inst_38128 = cljs.core.count.call(null,inst_38126);
var inst_38108 = inst_38127;
var inst_38109 = inst_38126;
var inst_38110 = inst_38128;
var inst_38111 = (0);
var state_38156__$1 = (function (){var statearr_38175 = state_38156;
(statearr_38175[(8)] = inst_38108);

(statearr_38175[(9)] = inst_38110);

(statearr_38175[(11)] = inst_38109);

(statearr_38175[(12)] = inst_38111);

return statearr_38175;
})();
var statearr_38176_38209 = state_38156__$1;
(statearr_38176_38209[(2)] = null);

(statearr_38176_38209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38157 === (3))){
var inst_38154 = (state_38156[(2)]);
var state_38156__$1 = state_38156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38156__$1,inst_38154);
} else {
if((state_val_38157 === (12))){
var inst_38142 = (state_38156[(2)]);
var state_38156__$1 = state_38156;
var statearr_38177_38210 = state_38156__$1;
(statearr_38177_38210[(2)] = inst_38142);

(statearr_38177_38210[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38157 === (2))){
var state_38156__$1 = state_38156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38156__$1,(4),in$);
} else {
if((state_val_38157 === (23))){
var inst_38150 = (state_38156[(2)]);
var state_38156__$1 = state_38156;
var statearr_38178_38211 = state_38156__$1;
(statearr_38178_38211[(2)] = inst_38150);

(statearr_38178_38211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38157 === (19))){
var inst_38137 = (state_38156[(2)]);
var state_38156__$1 = state_38156;
var statearr_38179_38212 = state_38156__$1;
(statearr_38179_38212[(2)] = inst_38137);

(statearr_38179_38212[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38157 === (11))){
var inst_38108 = (state_38156[(8)]);
var inst_38122 = (state_38156[(7)]);
var inst_38122__$1 = cljs.core.seq.call(null,inst_38108);
var state_38156__$1 = (function (){var statearr_38180 = state_38156;
(statearr_38180[(7)] = inst_38122__$1);

return statearr_38180;
})();
if(inst_38122__$1){
var statearr_38181_38213 = state_38156__$1;
(statearr_38181_38213[(1)] = (14));

} else {
var statearr_38182_38214 = state_38156__$1;
(statearr_38182_38214[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38157 === (9))){
var inst_38144 = (state_38156[(2)]);
var inst_38145 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_38156__$1 = (function (){var statearr_38183 = state_38156;
(statearr_38183[(15)] = inst_38144);

return statearr_38183;
})();
if(cljs.core.truth_(inst_38145)){
var statearr_38184_38215 = state_38156__$1;
(statearr_38184_38215[(1)] = (21));

} else {
var statearr_38185_38216 = state_38156__$1;
(statearr_38185_38216[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38157 === (5))){
var inst_38100 = cljs.core.async.close_BANG_.call(null,out);
var state_38156__$1 = state_38156;
var statearr_38186_38217 = state_38156__$1;
(statearr_38186_38217[(2)] = inst_38100);

(statearr_38186_38217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38157 === (14))){
var inst_38122 = (state_38156[(7)]);
var inst_38124 = cljs.core.chunked_seq_QMARK_.call(null,inst_38122);
var state_38156__$1 = state_38156;
if(inst_38124){
var statearr_38187_38218 = state_38156__$1;
(statearr_38187_38218[(1)] = (17));

} else {
var statearr_38188_38219 = state_38156__$1;
(statearr_38188_38219[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38157 === (16))){
var inst_38140 = (state_38156[(2)]);
var state_38156__$1 = state_38156;
var statearr_38189_38220 = state_38156__$1;
(statearr_38189_38220[(2)] = inst_38140);

(statearr_38189_38220[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38157 === (10))){
var inst_38109 = (state_38156[(11)]);
var inst_38111 = (state_38156[(12)]);
var inst_38116 = cljs.core._nth.call(null,inst_38109,inst_38111);
var state_38156__$1 = state_38156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38156__$1,(13),out,inst_38116);
} else {
if((state_val_38157 === (18))){
var inst_38122 = (state_38156[(7)]);
var inst_38131 = cljs.core.first.call(null,inst_38122);
var state_38156__$1 = state_38156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38156__$1,(20),out,inst_38131);
} else {
if((state_val_38157 === (8))){
var inst_38110 = (state_38156[(9)]);
var inst_38111 = (state_38156[(12)]);
var inst_38113 = (inst_38111 < inst_38110);
var inst_38114 = inst_38113;
var state_38156__$1 = state_38156;
if(cljs.core.truth_(inst_38114)){
var statearr_38190_38221 = state_38156__$1;
(statearr_38190_38221[(1)] = (10));

} else {
var statearr_38191_38222 = state_38156__$1;
(statearr_38191_38222[(1)] = (11));

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
});})(c__29107__auto__))
;
return ((function (switch__29045__auto__,c__29107__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29046__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29046__auto____0 = (function (){
var statearr_38195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38195[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29046__auto__);

(statearr_38195[(1)] = (1));

return statearr_38195;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29046__auto____1 = (function (state_38156){
while(true){
var ret_value__29047__auto__ = (function (){try{while(true){
var result__29048__auto__ = switch__29045__auto__.call(null,state_38156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29048__auto__;
}
break;
}
}catch (e38196){if((e38196 instanceof Object)){
var ex__29049__auto__ = e38196;
var statearr_38197_38223 = state_38156;
(statearr_38197_38223[(5)] = ex__29049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38224 = state_38156;
state_38156 = G__38224;
continue;
} else {
return ret_value__29047__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29046__auto__ = function(state_38156){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29046__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29046__auto____1.call(this,state_38156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29046__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29046__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29046__auto__;
})()
;})(switch__29045__auto__,c__29107__auto__))
})();
var state__29109__auto__ = (function (){var statearr_38198 = f__29108__auto__.call(null);
(statearr_38198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29107__auto__);

return statearr_38198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29109__auto__);
});})(c__29107__auto__))
);

return c__29107__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__38226 = arguments.length;
switch (G__38226) {
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
var G__38229 = arguments.length;
switch (G__38229) {
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
var G__38232 = arguments.length;
switch (G__38232) {
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
var c__29107__auto___38282 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29107__auto___38282,out){
return (function (){
var f__29108__auto__ = (function (){var switch__29045__auto__ = ((function (c__29107__auto___38282,out){
return (function (state_38256){
var state_val_38257 = (state_38256[(1)]);
if((state_val_38257 === (7))){
var inst_38251 = (state_38256[(2)]);
var state_38256__$1 = state_38256;
var statearr_38258_38283 = state_38256__$1;
(statearr_38258_38283[(2)] = inst_38251);

(statearr_38258_38283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38257 === (1))){
var inst_38233 = null;
var state_38256__$1 = (function (){var statearr_38259 = state_38256;
(statearr_38259[(7)] = inst_38233);

return statearr_38259;
})();
var statearr_38260_38284 = state_38256__$1;
(statearr_38260_38284[(2)] = null);

(statearr_38260_38284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38257 === (4))){
var inst_38236 = (state_38256[(8)]);
var inst_38236__$1 = (state_38256[(2)]);
var inst_38237 = (inst_38236__$1 == null);
var inst_38238 = cljs.core.not.call(null,inst_38237);
var state_38256__$1 = (function (){var statearr_38261 = state_38256;
(statearr_38261[(8)] = inst_38236__$1);

return statearr_38261;
})();
if(inst_38238){
var statearr_38262_38285 = state_38256__$1;
(statearr_38262_38285[(1)] = (5));

} else {
var statearr_38263_38286 = state_38256__$1;
(statearr_38263_38286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38257 === (6))){
var state_38256__$1 = state_38256;
var statearr_38264_38287 = state_38256__$1;
(statearr_38264_38287[(2)] = null);

(statearr_38264_38287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38257 === (3))){
var inst_38253 = (state_38256[(2)]);
var inst_38254 = cljs.core.async.close_BANG_.call(null,out);
var state_38256__$1 = (function (){var statearr_38265 = state_38256;
(statearr_38265[(9)] = inst_38253);

return statearr_38265;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38256__$1,inst_38254);
} else {
if((state_val_38257 === (2))){
var state_38256__$1 = state_38256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38256__$1,(4),ch);
} else {
if((state_val_38257 === (11))){
var inst_38236 = (state_38256[(8)]);
var inst_38245 = (state_38256[(2)]);
var inst_38233 = inst_38236;
var state_38256__$1 = (function (){var statearr_38266 = state_38256;
(statearr_38266[(10)] = inst_38245);

(statearr_38266[(7)] = inst_38233);

return statearr_38266;
})();
var statearr_38267_38288 = state_38256__$1;
(statearr_38267_38288[(2)] = null);

(statearr_38267_38288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38257 === (9))){
var inst_38236 = (state_38256[(8)]);
var state_38256__$1 = state_38256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38256__$1,(11),out,inst_38236);
} else {
if((state_val_38257 === (5))){
var inst_38236 = (state_38256[(8)]);
var inst_38233 = (state_38256[(7)]);
var inst_38240 = cljs.core._EQ_.call(null,inst_38236,inst_38233);
var state_38256__$1 = state_38256;
if(inst_38240){
var statearr_38269_38289 = state_38256__$1;
(statearr_38269_38289[(1)] = (8));

} else {
var statearr_38270_38290 = state_38256__$1;
(statearr_38270_38290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38257 === (10))){
var inst_38248 = (state_38256[(2)]);
var state_38256__$1 = state_38256;
var statearr_38271_38291 = state_38256__$1;
(statearr_38271_38291[(2)] = inst_38248);

(statearr_38271_38291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38257 === (8))){
var inst_38233 = (state_38256[(7)]);
var tmp38268 = inst_38233;
var inst_38233__$1 = tmp38268;
var state_38256__$1 = (function (){var statearr_38272 = state_38256;
(statearr_38272[(7)] = inst_38233__$1);

return statearr_38272;
})();
var statearr_38273_38292 = state_38256__$1;
(statearr_38273_38292[(2)] = null);

(statearr_38273_38292[(1)] = (2));


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
});})(c__29107__auto___38282,out))
;
return ((function (switch__29045__auto__,c__29107__auto___38282,out){
return (function() {
var cljs$core$async$state_machine__29046__auto__ = null;
var cljs$core$async$state_machine__29046__auto____0 = (function (){
var statearr_38277 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38277[(0)] = cljs$core$async$state_machine__29046__auto__);

(statearr_38277[(1)] = (1));

return statearr_38277;
});
var cljs$core$async$state_machine__29046__auto____1 = (function (state_38256){
while(true){
var ret_value__29047__auto__ = (function (){try{while(true){
var result__29048__auto__ = switch__29045__auto__.call(null,state_38256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29048__auto__;
}
break;
}
}catch (e38278){if((e38278 instanceof Object)){
var ex__29049__auto__ = e38278;
var statearr_38279_38293 = state_38256;
(statearr_38279_38293[(5)] = ex__29049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38294 = state_38256;
state_38256 = G__38294;
continue;
} else {
return ret_value__29047__auto__;
}
break;
}
});
cljs$core$async$state_machine__29046__auto__ = function(state_38256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29046__auto____1.call(this,state_38256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29046__auto____0;
cljs$core$async$state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29046__auto____1;
return cljs$core$async$state_machine__29046__auto__;
})()
;})(switch__29045__auto__,c__29107__auto___38282,out))
})();
var state__29109__auto__ = (function (){var statearr_38280 = f__29108__auto__.call(null);
(statearr_38280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29107__auto___38282);

return statearr_38280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29109__auto__);
});})(c__29107__auto___38282,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__38296 = arguments.length;
switch (G__38296) {
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
var c__29107__auto___38365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29107__auto___38365,out){
return (function (){
var f__29108__auto__ = (function (){var switch__29045__auto__ = ((function (c__29107__auto___38365,out){
return (function (state_38334){
var state_val_38335 = (state_38334[(1)]);
if((state_val_38335 === (7))){
var inst_38330 = (state_38334[(2)]);
var state_38334__$1 = state_38334;
var statearr_38336_38366 = state_38334__$1;
(statearr_38336_38366[(2)] = inst_38330);

(statearr_38336_38366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38335 === (1))){
var inst_38297 = (new Array(n));
var inst_38298 = inst_38297;
var inst_38299 = (0);
var state_38334__$1 = (function (){var statearr_38337 = state_38334;
(statearr_38337[(7)] = inst_38299);

(statearr_38337[(8)] = inst_38298);

return statearr_38337;
})();
var statearr_38338_38367 = state_38334__$1;
(statearr_38338_38367[(2)] = null);

(statearr_38338_38367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38335 === (4))){
var inst_38302 = (state_38334[(9)]);
var inst_38302__$1 = (state_38334[(2)]);
var inst_38303 = (inst_38302__$1 == null);
var inst_38304 = cljs.core.not.call(null,inst_38303);
var state_38334__$1 = (function (){var statearr_38339 = state_38334;
(statearr_38339[(9)] = inst_38302__$1);

return statearr_38339;
})();
if(inst_38304){
var statearr_38340_38368 = state_38334__$1;
(statearr_38340_38368[(1)] = (5));

} else {
var statearr_38341_38369 = state_38334__$1;
(statearr_38341_38369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38335 === (15))){
var inst_38324 = (state_38334[(2)]);
var state_38334__$1 = state_38334;
var statearr_38342_38370 = state_38334__$1;
(statearr_38342_38370[(2)] = inst_38324);

(statearr_38342_38370[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38335 === (13))){
var state_38334__$1 = state_38334;
var statearr_38343_38371 = state_38334__$1;
(statearr_38343_38371[(2)] = null);

(statearr_38343_38371[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38335 === (6))){
var inst_38299 = (state_38334[(7)]);
var inst_38320 = (inst_38299 > (0));
var state_38334__$1 = state_38334;
if(cljs.core.truth_(inst_38320)){
var statearr_38344_38372 = state_38334__$1;
(statearr_38344_38372[(1)] = (12));

} else {
var statearr_38345_38373 = state_38334__$1;
(statearr_38345_38373[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38335 === (3))){
var inst_38332 = (state_38334[(2)]);
var state_38334__$1 = state_38334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38334__$1,inst_38332);
} else {
if((state_val_38335 === (12))){
var inst_38298 = (state_38334[(8)]);
var inst_38322 = cljs.core.vec.call(null,inst_38298);
var state_38334__$1 = state_38334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38334__$1,(15),out,inst_38322);
} else {
if((state_val_38335 === (2))){
var state_38334__$1 = state_38334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38334__$1,(4),ch);
} else {
if((state_val_38335 === (11))){
var inst_38314 = (state_38334[(2)]);
var inst_38315 = (new Array(n));
var inst_38298 = inst_38315;
var inst_38299 = (0);
var state_38334__$1 = (function (){var statearr_38346 = state_38334;
(statearr_38346[(10)] = inst_38314);

(statearr_38346[(7)] = inst_38299);

(statearr_38346[(8)] = inst_38298);

return statearr_38346;
})();
var statearr_38347_38374 = state_38334__$1;
(statearr_38347_38374[(2)] = null);

(statearr_38347_38374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38335 === (9))){
var inst_38298 = (state_38334[(8)]);
var inst_38312 = cljs.core.vec.call(null,inst_38298);
var state_38334__$1 = state_38334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38334__$1,(11),out,inst_38312);
} else {
if((state_val_38335 === (5))){
var inst_38307 = (state_38334[(11)]);
var inst_38299 = (state_38334[(7)]);
var inst_38298 = (state_38334[(8)]);
var inst_38302 = (state_38334[(9)]);
var inst_38306 = (inst_38298[inst_38299] = inst_38302);
var inst_38307__$1 = (inst_38299 + (1));
var inst_38308 = (inst_38307__$1 < n);
var state_38334__$1 = (function (){var statearr_38348 = state_38334;
(statearr_38348[(11)] = inst_38307__$1);

(statearr_38348[(12)] = inst_38306);

return statearr_38348;
})();
if(cljs.core.truth_(inst_38308)){
var statearr_38349_38375 = state_38334__$1;
(statearr_38349_38375[(1)] = (8));

} else {
var statearr_38350_38376 = state_38334__$1;
(statearr_38350_38376[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38335 === (14))){
var inst_38327 = (state_38334[(2)]);
var inst_38328 = cljs.core.async.close_BANG_.call(null,out);
var state_38334__$1 = (function (){var statearr_38352 = state_38334;
(statearr_38352[(13)] = inst_38327);

return statearr_38352;
})();
var statearr_38353_38377 = state_38334__$1;
(statearr_38353_38377[(2)] = inst_38328);

(statearr_38353_38377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38335 === (10))){
var inst_38318 = (state_38334[(2)]);
var state_38334__$1 = state_38334;
var statearr_38354_38378 = state_38334__$1;
(statearr_38354_38378[(2)] = inst_38318);

(statearr_38354_38378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38335 === (8))){
var inst_38307 = (state_38334[(11)]);
var inst_38298 = (state_38334[(8)]);
var tmp38351 = inst_38298;
var inst_38298__$1 = tmp38351;
var inst_38299 = inst_38307;
var state_38334__$1 = (function (){var statearr_38355 = state_38334;
(statearr_38355[(7)] = inst_38299);

(statearr_38355[(8)] = inst_38298__$1);

return statearr_38355;
})();
var statearr_38356_38379 = state_38334__$1;
(statearr_38356_38379[(2)] = null);

(statearr_38356_38379[(1)] = (2));


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
});})(c__29107__auto___38365,out))
;
return ((function (switch__29045__auto__,c__29107__auto___38365,out){
return (function() {
var cljs$core$async$state_machine__29046__auto__ = null;
var cljs$core$async$state_machine__29046__auto____0 = (function (){
var statearr_38360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38360[(0)] = cljs$core$async$state_machine__29046__auto__);

(statearr_38360[(1)] = (1));

return statearr_38360;
});
var cljs$core$async$state_machine__29046__auto____1 = (function (state_38334){
while(true){
var ret_value__29047__auto__ = (function (){try{while(true){
var result__29048__auto__ = switch__29045__auto__.call(null,state_38334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29048__auto__;
}
break;
}
}catch (e38361){if((e38361 instanceof Object)){
var ex__29049__auto__ = e38361;
var statearr_38362_38380 = state_38334;
(statearr_38362_38380[(5)] = ex__29049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38381 = state_38334;
state_38334 = G__38381;
continue;
} else {
return ret_value__29047__auto__;
}
break;
}
});
cljs$core$async$state_machine__29046__auto__ = function(state_38334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29046__auto____1.call(this,state_38334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29046__auto____0;
cljs$core$async$state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29046__auto____1;
return cljs$core$async$state_machine__29046__auto__;
})()
;})(switch__29045__auto__,c__29107__auto___38365,out))
})();
var state__29109__auto__ = (function (){var statearr_38363 = f__29108__auto__.call(null);
(statearr_38363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29107__auto___38365);

return statearr_38363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29109__auto__);
});})(c__29107__auto___38365,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__38383 = arguments.length;
switch (G__38383) {
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
var c__29107__auto___38456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29107__auto___38456,out){
return (function (){
var f__29108__auto__ = (function (){var switch__29045__auto__ = ((function (c__29107__auto___38456,out){
return (function (state_38425){
var state_val_38426 = (state_38425[(1)]);
if((state_val_38426 === (7))){
var inst_38421 = (state_38425[(2)]);
var state_38425__$1 = state_38425;
var statearr_38427_38457 = state_38425__$1;
(statearr_38427_38457[(2)] = inst_38421);

(statearr_38427_38457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38426 === (1))){
var inst_38384 = [];
var inst_38385 = inst_38384;
var inst_38386 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38425__$1 = (function (){var statearr_38428 = state_38425;
(statearr_38428[(7)] = inst_38386);

(statearr_38428[(8)] = inst_38385);

return statearr_38428;
})();
var statearr_38429_38458 = state_38425__$1;
(statearr_38429_38458[(2)] = null);

(statearr_38429_38458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38426 === (4))){
var inst_38389 = (state_38425[(9)]);
var inst_38389__$1 = (state_38425[(2)]);
var inst_38390 = (inst_38389__$1 == null);
var inst_38391 = cljs.core.not.call(null,inst_38390);
var state_38425__$1 = (function (){var statearr_38430 = state_38425;
(statearr_38430[(9)] = inst_38389__$1);

return statearr_38430;
})();
if(inst_38391){
var statearr_38431_38459 = state_38425__$1;
(statearr_38431_38459[(1)] = (5));

} else {
var statearr_38432_38460 = state_38425__$1;
(statearr_38432_38460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38426 === (15))){
var inst_38415 = (state_38425[(2)]);
var state_38425__$1 = state_38425;
var statearr_38433_38461 = state_38425__$1;
(statearr_38433_38461[(2)] = inst_38415);

(statearr_38433_38461[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38426 === (13))){
var state_38425__$1 = state_38425;
var statearr_38434_38462 = state_38425__$1;
(statearr_38434_38462[(2)] = null);

(statearr_38434_38462[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38426 === (6))){
var inst_38385 = (state_38425[(8)]);
var inst_38410 = inst_38385.length;
var inst_38411 = (inst_38410 > (0));
var state_38425__$1 = state_38425;
if(cljs.core.truth_(inst_38411)){
var statearr_38435_38463 = state_38425__$1;
(statearr_38435_38463[(1)] = (12));

} else {
var statearr_38436_38464 = state_38425__$1;
(statearr_38436_38464[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38426 === (3))){
var inst_38423 = (state_38425[(2)]);
var state_38425__$1 = state_38425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38425__$1,inst_38423);
} else {
if((state_val_38426 === (12))){
var inst_38385 = (state_38425[(8)]);
var inst_38413 = cljs.core.vec.call(null,inst_38385);
var state_38425__$1 = state_38425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38425__$1,(15),out,inst_38413);
} else {
if((state_val_38426 === (2))){
var state_38425__$1 = state_38425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38425__$1,(4),ch);
} else {
if((state_val_38426 === (11))){
var inst_38393 = (state_38425[(10)]);
var inst_38389 = (state_38425[(9)]);
var inst_38403 = (state_38425[(2)]);
var inst_38404 = [];
var inst_38405 = inst_38404.push(inst_38389);
var inst_38385 = inst_38404;
var inst_38386 = inst_38393;
var state_38425__$1 = (function (){var statearr_38437 = state_38425;
(statearr_38437[(7)] = inst_38386);

(statearr_38437[(8)] = inst_38385);

(statearr_38437[(11)] = inst_38405);

(statearr_38437[(12)] = inst_38403);

return statearr_38437;
})();
var statearr_38438_38465 = state_38425__$1;
(statearr_38438_38465[(2)] = null);

(statearr_38438_38465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38426 === (9))){
var inst_38385 = (state_38425[(8)]);
var inst_38401 = cljs.core.vec.call(null,inst_38385);
var state_38425__$1 = state_38425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38425__$1,(11),out,inst_38401);
} else {
if((state_val_38426 === (5))){
var inst_38393 = (state_38425[(10)]);
var inst_38389 = (state_38425[(9)]);
var inst_38386 = (state_38425[(7)]);
var inst_38393__$1 = f.call(null,inst_38389);
var inst_38394 = cljs.core._EQ_.call(null,inst_38393__$1,inst_38386);
var inst_38395 = cljs.core.keyword_identical_QMARK_.call(null,inst_38386,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38396 = (inst_38394) || (inst_38395);
var state_38425__$1 = (function (){var statearr_38439 = state_38425;
(statearr_38439[(10)] = inst_38393__$1);

return statearr_38439;
})();
if(cljs.core.truth_(inst_38396)){
var statearr_38440_38466 = state_38425__$1;
(statearr_38440_38466[(1)] = (8));

} else {
var statearr_38441_38467 = state_38425__$1;
(statearr_38441_38467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38426 === (14))){
var inst_38418 = (state_38425[(2)]);
var inst_38419 = cljs.core.async.close_BANG_.call(null,out);
var state_38425__$1 = (function (){var statearr_38443 = state_38425;
(statearr_38443[(13)] = inst_38418);

return statearr_38443;
})();
var statearr_38444_38468 = state_38425__$1;
(statearr_38444_38468[(2)] = inst_38419);

(statearr_38444_38468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38426 === (10))){
var inst_38408 = (state_38425[(2)]);
var state_38425__$1 = state_38425;
var statearr_38445_38469 = state_38425__$1;
(statearr_38445_38469[(2)] = inst_38408);

(statearr_38445_38469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38426 === (8))){
var inst_38393 = (state_38425[(10)]);
var inst_38389 = (state_38425[(9)]);
var inst_38385 = (state_38425[(8)]);
var inst_38398 = inst_38385.push(inst_38389);
var tmp38442 = inst_38385;
var inst_38385__$1 = tmp38442;
var inst_38386 = inst_38393;
var state_38425__$1 = (function (){var statearr_38446 = state_38425;
(statearr_38446[(7)] = inst_38386);

(statearr_38446[(8)] = inst_38385__$1);

(statearr_38446[(14)] = inst_38398);

return statearr_38446;
})();
var statearr_38447_38470 = state_38425__$1;
(statearr_38447_38470[(2)] = null);

(statearr_38447_38470[(1)] = (2));


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
});})(c__29107__auto___38456,out))
;
return ((function (switch__29045__auto__,c__29107__auto___38456,out){
return (function() {
var cljs$core$async$state_machine__29046__auto__ = null;
var cljs$core$async$state_machine__29046__auto____0 = (function (){
var statearr_38451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38451[(0)] = cljs$core$async$state_machine__29046__auto__);

(statearr_38451[(1)] = (1));

return statearr_38451;
});
var cljs$core$async$state_machine__29046__auto____1 = (function (state_38425){
while(true){
var ret_value__29047__auto__ = (function (){try{while(true){
var result__29048__auto__ = switch__29045__auto__.call(null,state_38425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29048__auto__;
}
break;
}
}catch (e38452){if((e38452 instanceof Object)){
var ex__29049__auto__ = e38452;
var statearr_38453_38471 = state_38425;
(statearr_38453_38471[(5)] = ex__29049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38472 = state_38425;
state_38425 = G__38472;
continue;
} else {
return ret_value__29047__auto__;
}
break;
}
});
cljs$core$async$state_machine__29046__auto__ = function(state_38425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29046__auto____1.call(this,state_38425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29046__auto____0;
cljs$core$async$state_machine__29046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29046__auto____1;
return cljs$core$async$state_machine__29046__auto__;
})()
;})(switch__29045__auto__,c__29107__auto___38456,out))
})();
var state__29109__auto__ = (function (){var statearr_38454 = f__29108__auto__.call(null);
(statearr_38454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29107__auto___38456);

return statearr_38454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29109__auto__);
});})(c__29107__auto___38456,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map