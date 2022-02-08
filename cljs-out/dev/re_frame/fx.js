// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
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
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__17639 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__17640 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__17640);

try{try{var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___17675 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___17675)){
var new_db_17676 = temp__5753__auto___17675;
var fexpr__17641_17677 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__17641_17677.cljs$core$IFn$_invoke$arity$1 ? fexpr__17641_17677.cljs$core$IFn$_invoke$arity$1(new_db_17676) : fexpr__17641_17677.call(null,new_db_17676));
} else {
}

var seq__17642 = cljs.core.seq(effects_without_db);
var chunk__17643 = null;
var count__17644 = (0);
var i__17645 = (0);
while(true){
if((i__17645 < count__17644)){
var vec__17652 = chunk__17643.cljs$core$IIndexed$_nth$arity$2(null,i__17645);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17652,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17652,(1),null);
var temp__5751__auto___17678 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___17678)){
var effect_fn_17679 = temp__5751__auto___17678;
(effect_fn_17679.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17679.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17679.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17680 = seq__17642;
var G__17681 = chunk__17643;
var G__17682 = count__17644;
var G__17683 = (i__17645 + (1));
seq__17642 = G__17680;
chunk__17643 = G__17681;
count__17644 = G__17682;
i__17645 = G__17683;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17642);
if(temp__5753__auto__){
var seq__17642__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17642__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__17642__$1);
var G__17684 = cljs.core.chunk_rest(seq__17642__$1);
var G__17685 = c__4638__auto__;
var G__17686 = cljs.core.count(c__4638__auto__);
var G__17687 = (0);
seq__17642 = G__17684;
chunk__17643 = G__17685;
count__17644 = G__17686;
i__17645 = G__17687;
continue;
} else {
var vec__17655 = cljs.core.first(seq__17642__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17655,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17655,(1),null);
var temp__5751__auto___17688 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___17688)){
var effect_fn_17689 = temp__5751__auto___17688;
(effect_fn_17689.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17689.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17689.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17690 = cljs.core.next(seq__17642__$1);
var G__17691 = null;
var G__17692 = (0);
var G__17693 = (0);
seq__17642 = G__17690;
chunk__17643 = G__17691;
count__17644 = G__17692;
i__17645 = G__17693;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__17428__auto___17694 = re_frame.interop.now();
var duration__17429__auto___17695 = (end__17428__auto___17694 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__17429__auto___17695,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__17428__auto___17694);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__17639);
}} else {
var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___17696 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___17696)){
var new_db_17697 = temp__5753__auto___17696;
var fexpr__17658_17698 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__17658_17698.cljs$core$IFn$_invoke$arity$1 ? fexpr__17658_17698.cljs$core$IFn$_invoke$arity$1(new_db_17697) : fexpr__17658_17698.call(null,new_db_17697));
} else {
}

var seq__17659 = cljs.core.seq(effects_without_db);
var chunk__17660 = null;
var count__17661 = (0);
var i__17662 = (0);
while(true){
if((i__17662 < count__17661)){
var vec__17669 = chunk__17660.cljs$core$IIndexed$_nth$arity$2(null,i__17662);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17669,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17669,(1),null);
var temp__5751__auto___17699 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___17699)){
var effect_fn_17700 = temp__5751__auto___17699;
(effect_fn_17700.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17700.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17700.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17701 = seq__17659;
var G__17702 = chunk__17660;
var G__17703 = count__17661;
var G__17704 = (i__17662 + (1));
seq__17659 = G__17701;
chunk__17660 = G__17702;
count__17661 = G__17703;
i__17662 = G__17704;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17659);
if(temp__5753__auto__){
var seq__17659__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17659__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__17659__$1);
var G__17705 = cljs.core.chunk_rest(seq__17659__$1);
var G__17706 = c__4638__auto__;
var G__17707 = cljs.core.count(c__4638__auto__);
var G__17708 = (0);
seq__17659 = G__17705;
chunk__17660 = G__17706;
count__17661 = G__17707;
i__17662 = G__17708;
continue;
} else {
var vec__17672 = cljs.core.first(seq__17659__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17672,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17672,(1),null);
var temp__5751__auto___17709 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___17709)){
var effect_fn_17710 = temp__5751__auto___17709;
(effect_fn_17710.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17710.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17710.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17711 = cljs.core.next(seq__17659__$1);
var G__17712 = null;
var G__17713 = (0);
var G__17714 = (0);
seq__17659 = G__17711;
chunk__17660 = G__17712;
count__17661 = G__17713;
i__17662 = G__17714;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__17715){
var map__17716 = p__17715;
var map__17716__$1 = cljs.core.__destructure_map(map__17716);
var effect = map__17716__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17716__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17716__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__17717 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__17718 = null;
var count__17719 = (0);
var i__17720 = (0);
while(true){
if((i__17720 < count__17719)){
var effect = chunk__17718.cljs$core$IIndexed$_nth$arity$2(null,i__17720);
re_frame.fx.dispatch_later(effect);


var G__17721 = seq__17717;
var G__17722 = chunk__17718;
var G__17723 = count__17719;
var G__17724 = (i__17720 + (1));
seq__17717 = G__17721;
chunk__17718 = G__17722;
count__17719 = G__17723;
i__17720 = G__17724;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17717);
if(temp__5753__auto__){
var seq__17717__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17717__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__17717__$1);
var G__17725 = cljs.core.chunk_rest(seq__17717__$1);
var G__17726 = c__4638__auto__;
var G__17727 = cljs.core.count(c__4638__auto__);
var G__17728 = (0);
seq__17717 = G__17725;
chunk__17718 = G__17726;
count__17719 = G__17727;
i__17720 = G__17728;
continue;
} else {
var effect = cljs.core.first(seq__17717__$1);
re_frame.fx.dispatch_later(effect);


var G__17729 = cljs.core.next(seq__17717__$1);
var G__17730 = null;
var G__17731 = (0);
var G__17732 = (0);
seq__17717 = G__17729;
chunk__17718 = G__17730;
count__17719 = G__17731;
i__17720 = G__17732;
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
re_frame.fx.reg_fx(cljs.core.cst$kw$fx,(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__17733 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__17734 = null;
var count__17735 = (0);
var i__17736 = (0);
while(true){
if((i__17736 < count__17735)){
var vec__17743 = chunk__17734.cljs$core$IIndexed$_nth$arity$2(null,i__17736);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17743,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17743,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___17749 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___17749)){
var effect_fn_17750 = temp__5751__auto___17749;
(effect_fn_17750.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17750.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17750.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__17751 = seq__17733;
var G__17752 = chunk__17734;
var G__17753 = count__17735;
var G__17754 = (i__17736 + (1));
seq__17733 = G__17751;
chunk__17734 = G__17752;
count__17735 = G__17753;
i__17736 = G__17754;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17733);
if(temp__5753__auto__){
var seq__17733__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17733__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__17733__$1);
var G__17755 = cljs.core.chunk_rest(seq__17733__$1);
var G__17756 = c__4638__auto__;
var G__17757 = cljs.core.count(c__4638__auto__);
var G__17758 = (0);
seq__17733 = G__17755;
chunk__17734 = G__17756;
count__17735 = G__17757;
i__17736 = G__17758;
continue;
} else {
var vec__17746 = cljs.core.first(seq__17733__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17746,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17746,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___17759 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___17759)){
var effect_fn_17760 = temp__5751__auto___17759;
(effect_fn_17760.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17760.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17760.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__17761 = cljs.core.next(seq__17733__$1);
var G__17762 = null;
var G__17763 = (0);
var G__17764 = (0);
seq__17733 = G__17761;
chunk__17734 = G__17762;
count__17735 = G__17763;
i__17736 = G__17764;
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
var seq__17765 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__17766 = null;
var count__17767 = (0);
var i__17768 = (0);
while(true){
if((i__17768 < count__17767)){
var event = chunk__17766.cljs$core$IIndexed$_nth$arity$2(null,i__17768);
re_frame.router.dispatch(event);


var G__17769 = seq__17765;
var G__17770 = chunk__17766;
var G__17771 = count__17767;
var G__17772 = (i__17768 + (1));
seq__17765 = G__17769;
chunk__17766 = G__17770;
count__17767 = G__17771;
i__17768 = G__17772;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17765);
if(temp__5753__auto__){
var seq__17765__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17765__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__17765__$1);
var G__17773 = cljs.core.chunk_rest(seq__17765__$1);
var G__17774 = c__4638__auto__;
var G__17775 = cljs.core.count(c__4638__auto__);
var G__17776 = (0);
seq__17765 = G__17773;
chunk__17766 = G__17774;
count__17767 = G__17775;
i__17768 = G__17776;
continue;
} else {
var event = cljs.core.first(seq__17765__$1);
re_frame.router.dispatch(event);


var G__17777 = cljs.core.next(seq__17765__$1);
var G__17778 = null;
var G__17779 = (0);
var G__17780 = (0);
seq__17765 = G__17777;
chunk__17766 = G__17778;
count__17767 = G__17779;
i__17768 = G__17780;
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
var seq__17781 = cljs.core.seq(value);
var chunk__17782 = null;
var count__17783 = (0);
var i__17784 = (0);
while(true){
if((i__17784 < count__17783)){
var event = chunk__17782.cljs$core$IIndexed$_nth$arity$2(null,i__17784);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__17785 = seq__17781;
var G__17786 = chunk__17782;
var G__17787 = count__17783;
var G__17788 = (i__17784 + (1));
seq__17781 = G__17785;
chunk__17782 = G__17786;
count__17783 = G__17787;
i__17784 = G__17788;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17781);
if(temp__5753__auto__){
var seq__17781__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17781__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__17781__$1);
var G__17789 = cljs.core.chunk_rest(seq__17781__$1);
var G__17790 = c__4638__auto__;
var G__17791 = cljs.core.count(c__4638__auto__);
var G__17792 = (0);
seq__17781 = G__17789;
chunk__17782 = G__17790;
count__17783 = G__17791;
i__17784 = G__17792;
continue;
} else {
var event = cljs.core.first(seq__17781__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__17793 = cljs.core.next(seq__17781__$1);
var G__17794 = null;
var G__17795 = (0);
var G__17796 = (0);
seq__17781 = G__17793;
chunk__17782 = G__17794;
count__17783 = G__17795;
i__17784 = G__17796;
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
