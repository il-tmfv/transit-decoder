// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
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
var _STAR_current_trace_STAR__orig_val__13219 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13220 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13220);

try{try{var seq__13221 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__13222 = null;
var count__13223 = (0);
var i__13224 = (0);
while(true){
if((i__13224 < count__13223)){
var vec__13231 = chunk__13222.cljs$core$IIndexed$_nth$arity$2(null,i__13224);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13231,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13231,(1),null);
var temp__5455__auto___13253 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___13253)){
var effect_fn_13254 = temp__5455__auto___13253;
(effect_fn_13254.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13254.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13254.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13255 = seq__13221;
var G__13256 = chunk__13222;
var G__13257 = count__13223;
var G__13258 = (i__13224 + (1));
seq__13221 = G__13255;
chunk__13222 = G__13256;
count__13223 = G__13257;
i__13224 = G__13258;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__13221);
if(temp__5457__auto__){
var seq__13221__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13221__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__13221__$1);
var G__13259 = cljs.core.chunk_rest(seq__13221__$1);
var G__13260 = c__4556__auto__;
var G__13261 = cljs.core.count(c__4556__auto__);
var G__13262 = (0);
seq__13221 = G__13259;
chunk__13222 = G__13260;
count__13223 = G__13261;
i__13224 = G__13262;
continue;
} else {
var vec__13234 = cljs.core.first(seq__13221__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13234,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13234,(1),null);
var temp__5455__auto___13263 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___13263)){
var effect_fn_13264 = temp__5455__auto___13263;
(effect_fn_13264.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13264.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13264.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13265 = cljs.core.next(seq__13221__$1);
var G__13266 = null;
var G__13267 = (0);
var G__13268 = (0);
seq__13221 = G__13265;
chunk__13222 = G__13266;
count__13223 = G__13267;
i__13224 = G__13268;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__13019__auto___13269 = re_frame.interop.now();
var duration__13020__auto___13270 = (end__13019__auto___13269 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__13020__auto___13270,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__13019__auto___13269);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__13219);
}} else {
var seq__13237 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__13238 = null;
var count__13239 = (0);
var i__13240 = (0);
while(true){
if((i__13240 < count__13239)){
var vec__13247 = chunk__13238.cljs$core$IIndexed$_nth$arity$2(null,i__13240);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13247,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13247,(1),null);
var temp__5455__auto___13271 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___13271)){
var effect_fn_13272 = temp__5455__auto___13271;
(effect_fn_13272.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13272.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13272.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13273 = seq__13237;
var G__13274 = chunk__13238;
var G__13275 = count__13239;
var G__13276 = (i__13240 + (1));
seq__13237 = G__13273;
chunk__13238 = G__13274;
count__13239 = G__13275;
i__13240 = G__13276;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__13237);
if(temp__5457__auto__){
var seq__13237__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13237__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__13237__$1);
var G__13277 = cljs.core.chunk_rest(seq__13237__$1);
var G__13278 = c__4556__auto__;
var G__13279 = cljs.core.count(c__4556__auto__);
var G__13280 = (0);
seq__13237 = G__13277;
chunk__13238 = G__13278;
count__13239 = G__13279;
i__13240 = G__13280;
continue;
} else {
var vec__13250 = cljs.core.first(seq__13237__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13250,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13250,(1),null);
var temp__5455__auto___13281 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___13281)){
var effect_fn_13282 = temp__5455__auto___13281;
(effect_fn_13282.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13282.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13282.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13283 = cljs.core.next(seq__13237__$1);
var G__13284 = null;
var G__13285 = (0);
var G__13286 = (0);
seq__13237 = G__13283;
chunk__13238 = G__13284;
count__13239 = G__13285;
i__13240 = G__13286;
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
var seq__13287 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13288 = null;
var count__13289 = (0);
var i__13290 = (0);
while(true){
if((i__13290 < count__13289)){
var map__13295 = chunk__13288.cljs$core$IIndexed$_nth$arity$2(null,i__13290);
var map__13295__$1 = (((((!((map__13295 == null))))?(((((map__13295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13295):map__13295);
var effect = map__13295__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13295__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13295__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13287,chunk__13288,count__13289,i__13290,map__13295,map__13295__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13287,chunk__13288,count__13289,i__13290,map__13295,map__13295__$1,effect,ms,dispatch))
,ms);
}


var G__13299 = seq__13287;
var G__13300 = chunk__13288;
var G__13301 = count__13289;
var G__13302 = (i__13290 + (1));
seq__13287 = G__13299;
chunk__13288 = G__13300;
count__13289 = G__13301;
i__13290 = G__13302;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__13287);
if(temp__5457__auto__){
var seq__13287__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13287__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__13287__$1);
var G__13303 = cljs.core.chunk_rest(seq__13287__$1);
var G__13304 = c__4556__auto__;
var G__13305 = cljs.core.count(c__4556__auto__);
var G__13306 = (0);
seq__13287 = G__13303;
chunk__13288 = G__13304;
count__13289 = G__13305;
i__13290 = G__13306;
continue;
} else {
var map__13297 = cljs.core.first(seq__13287__$1);
var map__13297__$1 = (((((!((map__13297 == null))))?(((((map__13297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13297):map__13297);
var effect = map__13297__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13297__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13297__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13287,chunk__13288,count__13289,i__13290,map__13297,map__13297__$1,effect,ms,dispatch,seq__13287__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13287,chunk__13288,count__13289,i__13290,map__13297,map__13297__$1,effect,ms,dispatch,seq__13287__$1,temp__5457__auto__))
,ms);
}


var G__13307 = cljs.core.next(seq__13287__$1);
var G__13308 = null;
var G__13309 = (0);
var G__13310 = (0);
seq__13287 = G__13307;
chunk__13288 = G__13308;
count__13289 = G__13309;
i__13290 = G__13310;
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
var seq__13311 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13312 = null;
var count__13313 = (0);
var i__13314 = (0);
while(true){
if((i__13314 < count__13313)){
var event = chunk__13312.cljs$core$IIndexed$_nth$arity$2(null,i__13314);
re_frame.router.dispatch(event);


var G__13315 = seq__13311;
var G__13316 = chunk__13312;
var G__13317 = count__13313;
var G__13318 = (i__13314 + (1));
seq__13311 = G__13315;
chunk__13312 = G__13316;
count__13313 = G__13317;
i__13314 = G__13318;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__13311);
if(temp__5457__auto__){
var seq__13311__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13311__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__13311__$1);
var G__13319 = cljs.core.chunk_rest(seq__13311__$1);
var G__13320 = c__4556__auto__;
var G__13321 = cljs.core.count(c__4556__auto__);
var G__13322 = (0);
seq__13311 = G__13319;
chunk__13312 = G__13320;
count__13313 = G__13321;
i__13314 = G__13322;
continue;
} else {
var event = cljs.core.first(seq__13311__$1);
re_frame.router.dispatch(event);


var G__13323 = cljs.core.next(seq__13311__$1);
var G__13324 = null;
var G__13325 = (0);
var G__13326 = (0);
seq__13311 = G__13323;
chunk__13312 = G__13324;
count__13313 = G__13325;
i__13314 = G__13326;
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
var seq__13327 = cljs.core.seq(value);
var chunk__13328 = null;
var count__13329 = (0);
var i__13330 = (0);
while(true){
if((i__13330 < count__13329)){
var event = chunk__13328.cljs$core$IIndexed$_nth$arity$2(null,i__13330);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__13331 = seq__13327;
var G__13332 = chunk__13328;
var G__13333 = count__13329;
var G__13334 = (i__13330 + (1));
seq__13327 = G__13331;
chunk__13328 = G__13332;
count__13329 = G__13333;
i__13330 = G__13334;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__13327);
if(temp__5457__auto__){
var seq__13327__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13327__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__13327__$1);
var G__13335 = cljs.core.chunk_rest(seq__13327__$1);
var G__13336 = c__4556__auto__;
var G__13337 = cljs.core.count(c__4556__auto__);
var G__13338 = (0);
seq__13327 = G__13335;
chunk__13328 = G__13336;
count__13329 = G__13337;
i__13330 = G__13338;
continue;
} else {
var event = cljs.core.first(seq__13327__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__13339 = cljs.core.next(seq__13327__$1);
var G__13340 = null;
var G__13341 = (0);
var G__13342 = (0);
seq__13327 = G__13339;
chunk__13328 = G__13340;
count__13329 = G__13341;
i__13330 = G__13342;
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
