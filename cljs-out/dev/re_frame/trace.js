// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__17513){
var map__17514 = p__17513;
var map__17514__$1 = cljs.core.__destructure_map(map__17514);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17514__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17514__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17514__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17514__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4223__auto__ = child_of;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
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
var seq__17515_17539 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__17516_17540 = null;
var count__17517_17541 = (0);
var i__17518_17542 = (0);
while(true){
if((i__17518_17542 < count__17517_17541)){
var vec__17529_17543 = chunk__17516_17540.cljs$core$IIndexed$_nth$arity$2(null,i__17518_17542);
var k_17544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17529_17543,(0),null);
var cb_17545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17529_17543,(1),null);
try{var G__17533_17546 = cljs.core.deref(re_frame.trace.traces);
(cb_17545.cljs$core$IFn$_invoke$arity$1 ? cb_17545.cljs$core$IFn$_invoke$arity$1(G__17533_17546) : cb_17545.call(null,G__17533_17546));
}catch (e17532){var e_17547 = e17532;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_17544,"while storing",cljs.core.deref(re_frame.trace.traces),e_17547], 0));
}

var G__17548 = seq__17515_17539;
var G__17549 = chunk__17516_17540;
var G__17550 = count__17517_17541;
var G__17551 = (i__17518_17542 + (1));
seq__17515_17539 = G__17548;
chunk__17516_17540 = G__17549;
count__17517_17541 = G__17550;
i__17518_17542 = G__17551;
continue;
} else {
var temp__5753__auto___17552 = cljs.core.seq(seq__17515_17539);
if(temp__5753__auto___17552){
var seq__17515_17553__$1 = temp__5753__auto___17552;
if(cljs.core.chunked_seq_QMARK_(seq__17515_17553__$1)){
var c__4649__auto___17554 = cljs.core.chunk_first(seq__17515_17553__$1);
var G__17555 = cljs.core.chunk_rest(seq__17515_17553__$1);
var G__17556 = c__4649__auto___17554;
var G__17557 = cljs.core.count(c__4649__auto___17554);
var G__17558 = (0);
seq__17515_17539 = G__17555;
chunk__17516_17540 = G__17556;
count__17517_17541 = G__17557;
i__17518_17542 = G__17558;
continue;
} else {
var vec__17534_17559 = cljs.core.first(seq__17515_17553__$1);
var k_17560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17534_17559,(0),null);
var cb_17561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17534_17559,(1),null);
try{var G__17538_17562 = cljs.core.deref(re_frame.trace.traces);
(cb_17561.cljs$core$IFn$_invoke$arity$1 ? cb_17561.cljs$core$IFn$_invoke$arity$1(G__17538_17562) : cb_17561.call(null,G__17538_17562));
}catch (e17537){var e_17563 = e17537;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_17560,"while storing",cljs.core.deref(re_frame.trace.traces),e_17563], 0));
}

var G__17564 = cljs.core.next(seq__17515_17553__$1);
var G__17565 = null;
var G__17566 = (0);
var G__17567 = (0);
seq__17515_17539 = G__17564;
chunk__17516_17540 = G__17565;
count__17517_17541 = G__17566;
i__17518_17542 = G__17567;
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
