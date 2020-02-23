// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__14119 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__14120 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__14120;

try{try{var seq__14121 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__14122 = null;
var count__14123 = (0);
var i__14124 = (0);
while(true){
if((i__14124 < count__14123)){
var vec__14131 = chunk__14122.cljs$core$IIndexed$_nth$arity$2(null,i__14124);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14131,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14131,(1),null);
var temp__5455__auto___14153 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___14153)){
var effect_fn_14154 = temp__5455__auto___14153;
(effect_fn_14154.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14154.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14154.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__14155 = seq__14121;
var G__14156 = chunk__14122;
var G__14157 = count__14123;
var G__14158 = (i__14124 + (1));
seq__14121 = G__14155;
chunk__14122 = G__14156;
count__14123 = G__14157;
i__14124 = G__14158;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14121);
if(temp__5457__auto__){
var seq__14121__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14121__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__14121__$1);
var G__14159 = cljs.core.chunk_rest(seq__14121__$1);
var G__14160 = c__4550__auto__;
var G__14161 = cljs.core.count(c__4550__auto__);
var G__14162 = (0);
seq__14121 = G__14159;
chunk__14122 = G__14160;
count__14123 = G__14161;
i__14124 = G__14162;
continue;
} else {
var vec__14134 = cljs.core.first(seq__14121__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14134,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14134,(1),null);
var temp__5455__auto___14163 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___14163)){
var effect_fn_14164 = temp__5455__auto___14163;
(effect_fn_14164.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14164.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14164.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__14165 = cljs.core.next(seq__14121__$1);
var G__14166 = null;
var G__14167 = (0);
var G__14168 = (0);
seq__14121 = G__14165;
chunk__14122 = G__14166;
count__14123 = G__14167;
i__14124 = G__14168;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__13932__auto___14169 = re_frame.interop.now();
var duration__13933__auto___14170 = (end__13932__auto___14169 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__13933__auto___14170,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__13932__auto___14169);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__14119;
}} else {
var seq__14137 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__14138 = null;
var count__14139 = (0);
var i__14140 = (0);
while(true){
if((i__14140 < count__14139)){
var vec__14147 = chunk__14138.cljs$core$IIndexed$_nth$arity$2(null,i__14140);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14147,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14147,(1),null);
var temp__5455__auto___14171 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___14171)){
var effect_fn_14172 = temp__5455__auto___14171;
(effect_fn_14172.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14172.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14172.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__14173 = seq__14137;
var G__14174 = chunk__14138;
var G__14175 = count__14139;
var G__14176 = (i__14140 + (1));
seq__14137 = G__14173;
chunk__14138 = G__14174;
count__14139 = G__14175;
i__14140 = G__14176;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14137);
if(temp__5457__auto__){
var seq__14137__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14137__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__14137__$1);
var G__14177 = cljs.core.chunk_rest(seq__14137__$1);
var G__14178 = c__4550__auto__;
var G__14179 = cljs.core.count(c__4550__auto__);
var G__14180 = (0);
seq__14137 = G__14177;
chunk__14138 = G__14178;
count__14139 = G__14179;
i__14140 = G__14180;
continue;
} else {
var vec__14150 = cljs.core.first(seq__14137__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14150,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14150,(1),null);
var temp__5455__auto___14181 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___14181)){
var effect_fn_14182 = temp__5455__auto___14181;
(effect_fn_14182.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14182.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14182.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__14183 = cljs.core.next(seq__14137__$1);
var G__14184 = null;
var G__14185 = (0);
var G__14186 = (0);
seq__14137 = G__14183;
chunk__14138 = G__14184;
count__14139 = G__14185;
i__14140 = G__14186;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__14187 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__14188 = null;
var count__14189 = (0);
var i__14190 = (0);
while(true){
if((i__14190 < count__14189)){
var map__14195 = chunk__14188.cljs$core$IIndexed$_nth$arity$2(null,i__14190);
var map__14195__$1 = (((((!((map__14195 == null))))?(((((map__14195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14195):map__14195);
var effect = map__14195__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14195__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14195__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__14187,chunk__14188,count__14189,i__14190,map__14195,map__14195__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__14187,chunk__14188,count__14189,i__14190,map__14195,map__14195__$1,effect,ms,dispatch))
,ms);
}


var G__14199 = seq__14187;
var G__14200 = chunk__14188;
var G__14201 = count__14189;
var G__14202 = (i__14190 + (1));
seq__14187 = G__14199;
chunk__14188 = G__14200;
count__14189 = G__14201;
i__14190 = G__14202;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14187);
if(temp__5457__auto__){
var seq__14187__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14187__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__14187__$1);
var G__14203 = cljs.core.chunk_rest(seq__14187__$1);
var G__14204 = c__4550__auto__;
var G__14205 = cljs.core.count(c__4550__auto__);
var G__14206 = (0);
seq__14187 = G__14203;
chunk__14188 = G__14204;
count__14189 = G__14205;
i__14190 = G__14206;
continue;
} else {
var map__14197 = cljs.core.first(seq__14187__$1);
var map__14197__$1 = (((((!((map__14197 == null))))?(((((map__14197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14197):map__14197);
var effect = map__14197__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14197__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14197__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__14187,chunk__14188,count__14189,i__14190,map__14197,map__14197__$1,effect,ms,dispatch,seq__14187__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__14187,chunk__14188,count__14189,i__14190,map__14197,map__14197__$1,effect,ms,dispatch,seq__14187__$1,temp__5457__auto__))
,ms);
}


var G__14207 = cljs.core.next(seq__14187__$1);
var G__14208 = null;
var G__14209 = (0);
var G__14210 = (0);
seq__14187 = G__14207;
chunk__14188 = G__14208;
count__14189 = G__14209;
i__14190 = G__14210;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__14211 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__14212 = null;
var count__14213 = (0);
var i__14214 = (0);
while(true){
if((i__14214 < count__14213)){
var event = chunk__14212.cljs$core$IIndexed$_nth$arity$2(null,i__14214);
re_frame.router.dispatch(event);


var G__14215 = seq__14211;
var G__14216 = chunk__14212;
var G__14217 = count__14213;
var G__14218 = (i__14214 + (1));
seq__14211 = G__14215;
chunk__14212 = G__14216;
count__14213 = G__14217;
i__14214 = G__14218;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14211);
if(temp__5457__auto__){
var seq__14211__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14211__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__14211__$1);
var G__14219 = cljs.core.chunk_rest(seq__14211__$1);
var G__14220 = c__4550__auto__;
var G__14221 = cljs.core.count(c__4550__auto__);
var G__14222 = (0);
seq__14211 = G__14219;
chunk__14212 = G__14220;
count__14213 = G__14221;
i__14214 = G__14222;
continue;
} else {
var event = cljs.core.first(seq__14211__$1);
re_frame.router.dispatch(event);


var G__14223 = cljs.core.next(seq__14211__$1);
var G__14224 = null;
var G__14225 = (0);
var G__14226 = (0);
seq__14211 = G__14223;
chunk__14212 = G__14224;
count__14213 = G__14225;
i__14214 = G__14226;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__14227 = cljs.core.seq(value);
var chunk__14228 = null;
var count__14229 = (0);
var i__14230 = (0);
while(true){
if((i__14230 < count__14229)){
var event = chunk__14228.cljs$core$IIndexed$_nth$arity$2(null,i__14230);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__14231 = seq__14227;
var G__14232 = chunk__14228;
var G__14233 = count__14229;
var G__14234 = (i__14230 + (1));
seq__14227 = G__14231;
chunk__14228 = G__14232;
count__14229 = G__14233;
i__14230 = G__14234;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14227);
if(temp__5457__auto__){
var seq__14227__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14227__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__14227__$1);
var G__14235 = cljs.core.chunk_rest(seq__14227__$1);
var G__14236 = c__4550__auto__;
var G__14237 = cljs.core.count(c__4550__auto__);
var G__14238 = (0);
seq__14227 = G__14235;
chunk__14228 = G__14236;
count__14229 = G__14237;
i__14230 = G__14238;
continue;
} else {
var event = cljs.core.first(seq__14227__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__14239 = cljs.core.next(seq__14227__$1);
var G__14240 = null;
var G__14241 = (0);
var G__14242 = (0);
seq__14227 = G__14239;
chunk__14228 = G__14240;
count__14229 = G__14241;
i__14230 = G__14242;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
