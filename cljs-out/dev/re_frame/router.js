// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.events');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.router.later_fns = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$flush_DASH_dom,(function (f){
var G__13169 = (function (){
return (re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1 ? re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1(f) : re_frame.interop.next_tick.call(null,f));
});
return (re_frame.interop.after_render.cljs$core$IFn$_invoke$arity$1 ? re_frame.interop.after_render.cljs$core$IFn$_invoke$arity$1(G__13169) : re_frame.interop.after_render.call(null,G__13169));
}),cljs.core.cst$kw$yield,re_frame.interop.next_tick], null);

/**
 * @interface
 */
re_frame.router.IEventQueue = function(){};

var re_frame$router$IEventQueue$push$dyn_13170 = (function (this$,event){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (re_frame.router.push[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4429__auto__.call(null,this$,event));
} else {
var m__4426__auto__ = (re_frame.router.push["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4426__auto__.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.push",this$);
}
}
});
re_frame.router.push = (function re_frame$router$push(this$,event){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$push$arity$2 == null)))))){
return this$.re_frame$router$IEventQueue$push$arity$2(this$,event);
} else {
return re_frame$router$IEventQueue$push$dyn_13170(this$,event);
}
});

var re_frame$router$IEventQueue$add_post_event_callback$dyn_13171 = (function (this$,id,callack){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (re_frame.router.add_post_event_callback[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,callack) : m__4429__auto__.call(null,this$,id,callack));
} else {
var m__4426__auto__ = (re_frame.router.add_post_event_callback["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,callack) : m__4426__auto__.call(null,this$,id,callack));
} else {
throw cljs.core.missing_protocol("IEventQueue.add-post-event-callback",this$);
}
}
});
re_frame.router.add_post_event_callback = (function re_frame$router$add_post_event_callback(this$,id,callack){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$add_post_event_callback$arity$3 == null)))))){
return this$.re_frame$router$IEventQueue$add_post_event_callback$arity$3(this$,id,callack);
} else {
return re_frame$router$IEventQueue$add_post_event_callback$dyn_13171(this$,id,callack);
}
});

var re_frame$router$IEventQueue$remove_post_event_callback$dyn_13172 = (function (this$,f){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (re_frame.router.remove_post_event_callback[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4429__auto__.call(null,this$,f));
} else {
var m__4426__auto__ = (re_frame.router.remove_post_event_callback["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4426__auto__.call(null,this$,f));
} else {
throw cljs.core.missing_protocol("IEventQueue.remove-post-event-callback",this$);
}
}
});
re_frame.router.remove_post_event_callback = (function re_frame$router$remove_post_event_callback(this$,f){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$remove_post_event_callback$arity$2 == null)))))){
return this$.re_frame$router$IEventQueue$remove_post_event_callback$arity$2(this$,f);
} else {
return re_frame$router$IEventQueue$remove_post_event_callback$dyn_13172(this$,f);
}
});

var re_frame$router$IEventQueue$purge$dyn_13173 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (re_frame.router.purge[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (re_frame.router.purge["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.purge",this$);
}
}
});
re_frame.router.purge = (function re_frame$router$purge(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$purge$arity$1 == null)))))){
return this$.re_frame$router$IEventQueue$purge$arity$1(this$);
} else {
return re_frame$router$IEventQueue$purge$dyn_13173(this$);
}
});

var re_frame$router$IEventQueue$_fsm_trigger$dyn_13174 = (function (this$,trigger,arg){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (re_frame.router._fsm_trigger[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,trigger,arg) : m__4429__auto__.call(null,this$,trigger,arg));
} else {
var m__4426__auto__ = (re_frame.router._fsm_trigger["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,trigger,arg) : m__4426__auto__.call(null,this$,trigger,arg));
} else {
throw cljs.core.missing_protocol("IEventQueue.-fsm-trigger",this$);
}
}
});
re_frame.router._fsm_trigger = (function re_frame$router$_fsm_trigger(this$,trigger,arg){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_fsm_trigger$arity$3 == null)))))){
return this$.re_frame$router$IEventQueue$_fsm_trigger$arity$3(this$,trigger,arg);
} else {
return re_frame$router$IEventQueue$_fsm_trigger$dyn_13174(this$,trigger,arg);
}
});

var re_frame$router$IEventQueue$_add_event$dyn_13175 = (function (this$,event){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (re_frame.router._add_event[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4429__auto__.call(null,this$,event));
} else {
var m__4426__auto__ = (re_frame.router._add_event["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4426__auto__.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.-add-event",this$);
}
}
});
re_frame.router._add_event = (function re_frame$router$_add_event(this$,event){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_add_event$arity$2 == null)))))){
return this$.re_frame$router$IEventQueue$_add_event$arity$2(this$,event);
} else {
return re_frame$router$IEventQueue$_add_event$dyn_13175(this$,event);
}
});

var re_frame$router$IEventQueue$_process_1st_event_in_queue$dyn_13176 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (re_frame.router._process_1st_event_in_queue[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (re_frame.router._process_1st_event_in_queue["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-process-1st-event-in-queue",this$);
}
}
});
re_frame.router._process_1st_event_in_queue = (function re_frame$router$_process_1st_event_in_queue(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 == null)))))){
return this$.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(this$);
} else {
return re_frame$router$IEventQueue$_process_1st_event_in_queue$dyn_13176(this$);
}
});

var re_frame$router$IEventQueue$_run_next_tick$dyn_13177 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (re_frame.router._run_next_tick[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (re_frame.router._run_next_tick["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-run-next-tick",this$);
}
}
});
re_frame.router._run_next_tick = (function re_frame$router$_run_next_tick(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_run_next_tick$arity$1 == null)))))){
return this$.re_frame$router$IEventQueue$_run_next_tick$arity$1(this$);
} else {
return re_frame$router$IEventQueue$_run_next_tick$dyn_13177(this$);
}
});

var re_frame$router$IEventQueue$_run_queue$dyn_13178 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (re_frame.router._run_queue[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (re_frame.router._run_queue["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-run-queue",this$);
}
}
});
re_frame.router._run_queue = (function re_frame$router$_run_queue(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_run_queue$arity$1 == null)))))){
return this$.re_frame$router$IEventQueue$_run_queue$arity$1(this$);
} else {
return re_frame$router$IEventQueue$_run_queue$dyn_13178(this$);
}
});

var re_frame$router$IEventQueue$_exception$dyn_13179 = (function (this$,ex){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (re_frame.router._exception[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,ex) : m__4429__auto__.call(null,this$,ex));
} else {
var m__4426__auto__ = (re_frame.router._exception["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,ex) : m__4426__auto__.call(null,this$,ex));
} else {
throw cljs.core.missing_protocol("IEventQueue.-exception",this$);
}
}
});
re_frame.router._exception = (function re_frame$router$_exception(this$,ex){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_exception$arity$2 == null)))))){
return this$.re_frame$router$IEventQueue$_exception$arity$2(this$,ex);
} else {
return re_frame$router$IEventQueue$_exception$dyn_13179(this$,ex);
}
});

var re_frame$router$IEventQueue$_pause$dyn_13180 = (function (this$,later_fn){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (re_frame.router._pause[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,later_fn) : m__4429__auto__.call(null,this$,later_fn));
} else {
var m__4426__auto__ = (re_frame.router._pause["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,later_fn) : m__4426__auto__.call(null,this$,later_fn));
} else {
throw cljs.core.missing_protocol("IEventQueue.-pause",this$);
}
}
});
re_frame.router._pause = (function re_frame$router$_pause(this$,later_fn){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_pause$arity$2 == null)))))){
return this$.re_frame$router$IEventQueue$_pause$arity$2(this$,later_fn);
} else {
return re_frame$router$IEventQueue$_pause$dyn_13180(this$,later_fn);
}
});

var re_frame$router$IEventQueue$_resume$dyn_13181 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (re_frame.router._resume[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (re_frame.router._resume["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-resume",this$);
}
}
});
re_frame.router._resume = (function re_frame$router$_resume(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_resume$arity$1 == null)))))){
return this$.re_frame$router$IEventQueue$_resume$arity$1(this$);
} else {
return re_frame$router$IEventQueue$_resume$dyn_13181(this$);
}
});

var re_frame$router$IEventQueue$_call_post_event_callbacks$dyn_13182 = (function (this$,event){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (re_frame.router._call_post_event_callbacks[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4429__auto__.call(null,this$,event));
} else {
var m__4426__auto__ = (re_frame.router._call_post_event_callbacks["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4426__auto__.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.-call-post-event-callbacks",this$);
}
}
});
re_frame.router._call_post_event_callbacks = (function re_frame$router$_call_post_event_callbacks(this$,event){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 == null)))))){
return this$.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(this$,event);
} else {
return re_frame$router$IEventQueue$_call_post_event_callbacks$dyn_13182(this$,event);
}
});


/**
* @constructor
 * @implements {re_frame.router.IEventQueue}
*/
re_frame.router.EventQueue = (function (fsm_state,queue,post_event_callback_fns){
this.fsm_state = fsm_state;
this.queue = queue;
this.post_event_callback_fns = post_event_callback_fns;
});
(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_run_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var n = cljs.core.count(self__.queue);
while(true){
if((n === (0))){
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,cljs.core.cst$kw$finish_DASH_run,null);
} else {
var temp__5455__auto__ = cljs.core.some(re_frame.router.later_fns,cljs.core.keys(cljs.core.meta(cljs.core.peek(self__.queue))));
if(cljs.core.truth_(temp__5455__auto__)){
var later_fn = temp__5455__auto__;
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,cljs.core.cst$kw$pause,later_fn);
} else {
this$__$1.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(null);

var G__13200 = (n - (1));
n = G__13200;
continue;
}
}
break;
}
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$remove_post_event_callback$arity$2 = (function (_,id){
var self__ = this;
var ___$1 = this;
if((!(cljs.core.contains_QMARK_(self__.post_event_callback_fns,id)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: could not remove post event call back with id:",id], 0));
} else {
return (self__.post_event_callback_fns = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.post_event_callback_fns,id));
}
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_add_event$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
return (self__.queue = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.queue,event));
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_resume$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(null);

return this$__$1.re_frame$router$IEventQueue$_run_queue$arity$1(null);
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$push$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,cljs.core.cst$kw$add_DASH_event,event);
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_run_next_tick$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__13183 = (function (){
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,cljs.core.cst$kw$run_DASH_queue,null);
});
return (re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1 ? re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1(G__13183) : re_frame.interop.next_tick.call(null,G__13183));
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_fsm_trigger$arity$3 = (function (this$,trigger,arg){
var self__ = this;
var this$__$1 = this;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__13184 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13185 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$re_DASH_frame$router_SLASH_fsm_DASH_trigger], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13185);

try{try{var vec__13186 = (function (){var G__13189 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle,cljs.core.cst$kw$add_DASH_event], null),G__13189)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,(function (){
this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);

return this$__$1.re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,cljs.core.cst$kw$add_DASH_event], null),G__13189)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,(function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,cljs.core.cst$kw$run_DASH_queue], null),G__13189)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,(function (){
return this$__$1.re_frame$router$IEventQueue$_run_queue$arity$1(null);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$add_DASH_event], null),G__13189)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,(function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$pause], null),G__13189)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,(function (){
return this$__$1.re_frame$router$IEventQueue$_pause$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$exception], null),G__13189)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle,(function (){
return this$__$1.re_frame$router$IEventQueue$_exception$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$finish_DASH_run], null),G__13189)){
if(cljs.core.empty_QMARK_(self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,(function (){
return this$__$1.re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
})], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,cljs.core.cst$kw$add_DASH_event], null),G__13189)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,(function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,cljs.core.cst$kw$resume], null),G__13189)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,(function (){
return this$__$1.re_frame$router$IEventQueue$_resume$arity$1(null);
})], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["re-frame: router state transition not found. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fsm_DASH_state,self__.fsm_state,cljs.core.cst$kw$trigger,trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13186,(0),null);
var action_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13186,(1),null);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__13021__auto___13201 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$operation,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_state,self__.fsm_state,cljs.core.cst$kw$new_DASH_state,new_fsm_state], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$operation,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_state,self__.fsm_state,cljs.core.cst$kw$new_DASH_state,new_fsm_state], null)], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__13021__auto___13201);

} else {
}

(self__.fsm_state = new_fsm_state);

if(cljs.core.truth_(action_fn)){
return (action_fn.cljs$core$IFn$_invoke$arity$0 ? action_fn.cljs$core$IFn$_invoke$arity$0() : action_fn.call(null));
} else {
return null;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__13019__auto___13202 = re_frame.interop.now();
var duration__13020__auto___13203 = (end__13019__auto___13202 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__13020__auto___13203,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__13019__auto___13202);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__13184);
}} else {
var vec__13190 = (function (){var G__13193 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle,cljs.core.cst$kw$add_DASH_event], null),G__13193)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,(function (){
this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);

return this$__$1.re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,cljs.core.cst$kw$add_DASH_event], null),G__13193)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,(function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,cljs.core.cst$kw$run_DASH_queue], null),G__13193)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,(function (){
return this$__$1.re_frame$router$IEventQueue$_run_queue$arity$1(null);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$add_DASH_event], null),G__13193)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,(function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$pause], null),G__13193)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,(function (){
return this$__$1.re_frame$router$IEventQueue$_pause$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$exception], null),G__13193)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle,(function (){
return this$__$1.re_frame$router$IEventQueue$_exception$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$finish_DASH_run], null),G__13193)){
if(cljs.core.empty_QMARK_(self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,(function (){
return this$__$1.re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
})], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,cljs.core.cst$kw$add_DASH_event], null),G__13193)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,(function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,cljs.core.cst$kw$resume], null),G__13193)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,(function (){
return this$__$1.re_frame$router$IEventQueue$_resume$arity$1(null);
})], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["re-frame: router state transition not found. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fsm_DASH_state,self__.fsm_state,cljs.core.cst$kw$trigger,trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13190,(0),null);
var action_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13190,(1),null);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__13021__auto___13204 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$operation,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_state,self__.fsm_state,cljs.core.cst$kw$new_DASH_state,new_fsm_state], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$operation,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_state,self__.fsm_state,cljs.core.cst$kw$new_DASH_state,new_fsm_state], null)], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__13021__auto___13204);

} else {
}

(self__.fsm_state = new_fsm_state);

if(cljs.core.truth_(action_fn)){
return (action_fn.cljs$core$IFn$_invoke$arity$0 ? action_fn.cljs$core$IFn$_invoke$arity$0() : action_fn.call(null));
} else {
return null;
}
}
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_pause$arity$2 = (function (this$,later_fn){
var self__ = this;
var this$__$1 = this;
var G__13194 = (function (){
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,cljs.core.cst$kw$resume,null);
});
return (later_fn.cljs$core$IFn$_invoke$arity$1 ? later_fn.cljs$core$IFn$_invoke$arity$1(G__13194) : later_fn.call(null,G__13194));
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$add_post_event_callback$arity$3 = (function (_,id,callback_fn){
var self__ = this;
var ___$1 = this;
if(cljs.core.contains_QMARK_(self__.post_event_callback_fns,id)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: overwriting existing post event call back with id:",id], 0));
} else {
}

return (self__.post_event_callback_fns = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.post_event_callback_fns,id,callback_fn));
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var event_v = cljs.core.peek(self__.queue);
try{re_frame.events.handle(event_v);

(self__.queue = cljs.core.pop(self__.queue));

return this$__$1.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(null,event_v);
}catch (e13195){var ex = e13195;
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,cljs.core.cst$kw$exception,ex);
}}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 = (function (_,event_v){
var self__ = this;
var ___$1 = this;
var seq__13196 = cljs.core.seq(cljs.core.vals(self__.post_event_callback_fns));
var chunk__13197 = null;
var count__13198 = (0);
var i__13199 = (0);
while(true){
if((i__13199 < count__13198)){
var callback = chunk__13197.cljs$core$IIndexed$_nth$arity$2(null,i__13199);
(callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(event_v,self__.queue) : callback.call(null,event_v,self__.queue));


var G__13205 = seq__13196;
var G__13206 = chunk__13197;
var G__13207 = count__13198;
var G__13208 = (i__13199 + (1));
seq__13196 = G__13205;
chunk__13197 = G__13206;
count__13198 = G__13207;
i__13199 = G__13208;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__13196);
if(temp__5457__auto__){
var seq__13196__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13196__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__13196__$1);
var G__13209 = cljs.core.chunk_rest(seq__13196__$1);
var G__13210 = c__4556__auto__;
var G__13211 = cljs.core.count(c__4556__auto__);
var G__13212 = (0);
seq__13196 = G__13209;
chunk__13197 = G__13210;
count__13198 = G__13211;
i__13199 = G__13212;
continue;
} else {
var callback = cljs.core.first(seq__13196__$1);
(callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(event_v,self__.queue) : callback.call(null,event_v,self__.queue));


var G__13213 = cljs.core.next(seq__13196__$1);
var G__13214 = null;
var G__13215 = (0);
var G__13216 = (0);
seq__13196 = G__13213;
chunk__13197 = G__13214;
count__13198 = G__13215;
i__13199 = G__13216;
continue;
}
} else {
return null;
}
}
break;
}
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$purge$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.queue = re_frame.interop.empty_queue);
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_exception$arity$2 = (function (this$,ex){
var self__ = this;
var this$__$1 = this;
this$__$1.re_frame$router$IEventQueue$purge$arity$1(null);

throw ex;
}));

(re_frame.router.EventQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$fsm_DASH_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$queue,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$post_DASH_event_DASH_callback_DASH_fns,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
}));

(re_frame.router.EventQueue.cljs$lang$type = true);

(re_frame.router.EventQueue.cljs$lang$ctorStr = "re-frame.router/EventQueue");

(re_frame.router.EventQueue.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"re-frame.router/EventQueue");
}));

/**
 * Positional factory function for re-frame.router/EventQueue.
 */
re_frame.router.__GT_EventQueue = (function re_frame$router$__GT_EventQueue(fsm_state,queue,post_event_callback_fns){
return (new re_frame.router.EventQueue(fsm_state,queue,post_event_callback_fns));
});

re_frame.router.event_queue = re_frame.router.__GT_EventQueue(cljs.core.cst$kw$idle,re_frame.interop.empty_queue,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Enqueue `event` for processing by event handling machinery.
 * 
 *   `event` is a vector of length >= 1. The 1st element identifies the kind of event.
 * 
 *   Note: the event handler is not run immediately - it is not run
 *   synchronously. It will likely be run 'very soon', although it may be
 *   added to the end of a FIFO queue which already contain events.
 * 
 *   Usage:
 *   (dispatch [:order-pizza {:supreme 2 :meatlovers 1 :veg 1})
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event){
if((event == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("re-frame: you called \"dispatch\" without an event vector.",cljs.core.PersistentArrayMap.EMPTY);
} else {
re_frame.router.event_queue.re_frame$router$IEventQueue$push$arity$2(null,event);
}

return null;
});
/**
 * Synchronously (immediately) process `event`. Do not queue.
 * 
 *   Generally, don't use this. Instead use `dispatch`. It is an error
 *   to use `dispatch-sync` within an event handler.
 * 
 *   Useful when any delay in processing is a problem:
 *   1. the `:on-change` handler of a text field where we are expecting fast typing.
 *   2  when initialising your app - see 'main' in todomvc examples
 *   3. in a unit test where we don't want the action 'later'
 * 
 *   Usage:
 *   (dispatch-sync [:sing :falsetto 634])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.events.handle(event_v);

re_frame.router.event_queue.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(null,event_v);

return null;
});
