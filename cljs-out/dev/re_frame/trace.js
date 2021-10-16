// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__17453){
var map__17454 = p__17453;
var map__17454__$1 = cljs.core.__destructure_map(map__17454);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17454__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17454__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17454__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17454__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4212__auto__ = child_of;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__17455_17479 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__17456_17480 = null;
var count__17457_17481 = (0);
var i__17458_17482 = (0);
while(true){
if((i__17458_17482 < count__17457_17481)){
var vec__17469_17483 = chunk__17456_17480.cljs$core$IIndexed$_nth$arity$2(null,i__17458_17482);
var k_17484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17469_17483,(0),null);
var cb_17485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17469_17483,(1),null);
try{var G__17473_17486 = cljs.core.deref(re_frame.trace.traces);
(cb_17485.cljs$core$IFn$_invoke$arity$1 ? cb_17485.cljs$core$IFn$_invoke$arity$1(G__17473_17486) : cb_17485.call(null,G__17473_17486));
}catch (e17472){var e_17487 = e17472;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_17484,"while storing",cljs.core.deref(re_frame.trace.traces),e_17487], 0));
}

var G__17488 = seq__17455_17479;
var G__17489 = chunk__17456_17480;
var G__17490 = count__17457_17481;
var G__17491 = (i__17458_17482 + (1));
seq__17455_17479 = G__17488;
chunk__17456_17480 = G__17489;
count__17457_17481 = G__17490;
i__17458_17482 = G__17491;
continue;
} else {
var temp__5753__auto___17492 = cljs.core.seq(seq__17455_17479);
if(temp__5753__auto___17492){
var seq__17455_17493__$1 = temp__5753__auto___17492;
if(cljs.core.chunked_seq_QMARK_(seq__17455_17493__$1)){
var c__4638__auto___17494 = cljs.core.chunk_first(seq__17455_17493__$1);
var G__17495 = cljs.core.chunk_rest(seq__17455_17493__$1);
var G__17496 = c__4638__auto___17494;
var G__17497 = cljs.core.count(c__4638__auto___17494);
var G__17498 = (0);
seq__17455_17479 = G__17495;
chunk__17456_17480 = G__17496;
count__17457_17481 = G__17497;
i__17458_17482 = G__17498;
continue;
} else {
var vec__17474_17499 = cljs.core.first(seq__17455_17493__$1);
var k_17500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17474_17499,(0),null);
var cb_17501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17474_17499,(1),null);
try{var G__17478_17502 = cljs.core.deref(re_frame.trace.traces);
(cb_17501.cljs$core$IFn$_invoke$arity$1 ? cb_17501.cljs$core$IFn$_invoke$arity$1(G__17478_17502) : cb_17501.call(null,G__17478_17502));
}catch (e17477){var e_17503 = e17477;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_17500,"while storing",cljs.core.deref(re_frame.trace.traces),e_17503], 0));
}

var G__17504 = cljs.core.next(seq__17455_17493__$1);
var G__17505 = null;
var G__17506 = (0);
var G__17507 = (0);
seq__17455_17479 = G__17504;
chunk__17456_17480 = G__17505;
count__17457_17481 = G__17506;
i__17458_17482 = G__17507;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
