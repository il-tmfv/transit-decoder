// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__13041){
var map__13042 = p__13041;
var map__13042__$1 = (((((!((map__13042 == null))))?(((((map__13042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13042):map__13042);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13042__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13042__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13042__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13042__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
var seq__13044_13068 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__13045_13069 = null;
var count__13046_13070 = (0);
var i__13047_13071 = (0);
while(true){
if((i__13047_13071 < count__13046_13070)){
var vec__13058_13072 = chunk__13045_13069.cljs$core$IIndexed$_nth$arity$2(null,i__13047_13071);
var k_13073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13058_13072,(0),null);
var cb_13074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13058_13072,(1),null);
try{var G__13062_13075 = cljs.core.deref(re_frame.trace.traces);
(cb_13074.cljs$core$IFn$_invoke$arity$1 ? cb_13074.cljs$core$IFn$_invoke$arity$1(G__13062_13075) : cb_13074.call(null,G__13062_13075));
}catch (e13061){var e_13076 = e13061;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_13073,"while storing",cljs.core.deref(re_frame.trace.traces),e_13076], 0));
}

var G__13077 = seq__13044_13068;
var G__13078 = chunk__13045_13069;
var G__13079 = count__13046_13070;
var G__13080 = (i__13047_13071 + (1));
seq__13044_13068 = G__13077;
chunk__13045_13069 = G__13078;
count__13046_13070 = G__13079;
i__13047_13071 = G__13080;
continue;
} else {
var temp__5457__auto___13081 = cljs.core.seq(seq__13044_13068);
if(temp__5457__auto___13081){
var seq__13044_13082__$1 = temp__5457__auto___13081;
if(cljs.core.chunked_seq_QMARK_(seq__13044_13082__$1)){
var c__4556__auto___13083 = cljs.core.chunk_first(seq__13044_13082__$1);
var G__13084 = cljs.core.chunk_rest(seq__13044_13082__$1);
var G__13085 = c__4556__auto___13083;
var G__13086 = cljs.core.count(c__4556__auto___13083);
var G__13087 = (0);
seq__13044_13068 = G__13084;
chunk__13045_13069 = G__13085;
count__13046_13070 = G__13086;
i__13047_13071 = G__13087;
continue;
} else {
var vec__13063_13088 = cljs.core.first(seq__13044_13082__$1);
var k_13089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13063_13088,(0),null);
var cb_13090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13063_13088,(1),null);
try{var G__13067_13091 = cljs.core.deref(re_frame.trace.traces);
(cb_13090.cljs$core$IFn$_invoke$arity$1 ? cb_13090.cljs$core$IFn$_invoke$arity$1(G__13067_13091) : cb_13090.call(null,G__13067_13091));
}catch (e13066){var e_13092 = e13066;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_13089,"while storing",cljs.core.deref(re_frame.trace.traces),e_13092], 0));
}

var G__13093 = cljs.core.next(seq__13044_13082__$1);
var G__13094 = null;
var G__13095 = (0);
var G__13096 = (0);
seq__13044_13068 = G__13093;
chunk__13045_13069 = G__13094;
count__13046_13070 = G__13095;
i__13047_13071 = G__13096;
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
