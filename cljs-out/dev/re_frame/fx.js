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
var _STAR_current_trace_STAR__orig_val__17642 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__17643 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__17643);

try{try{var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___17678 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___17678)){
var new_db_17679 = temp__5753__auto___17678;
var fexpr__17644_17680 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__17644_17680.cljs$core$IFn$_invoke$arity$1 ? fexpr__17644_17680.cljs$core$IFn$_invoke$arity$1(new_db_17679) : fexpr__17644_17680.call(null,new_db_17679));
} else {
}

var seq__17645 = cljs.core.seq(effects_without_db);
var chunk__17646 = null;
var count__17647 = (0);
var i__17648 = (0);
while(true){
if((i__17648 < count__17647)){
var vec__17655 = chunk__17646.cljs$core$IIndexed$_nth$arity$2(null,i__17648);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17655,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17655,(1),null);
var temp__5751__auto___17681 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___17681)){
var effect_fn_17682 = temp__5751__auto___17681;
(effect_fn_17682.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17682.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17682.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17683 = seq__17645;
var G__17684 = chunk__17646;
var G__17685 = count__17647;
var G__17686 = (i__17648 + (1));
seq__17645 = G__17683;
chunk__17646 = G__17684;
count__17647 = G__17685;
i__17648 = G__17686;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17645);
if(temp__5753__auto__){
var seq__17645__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17645__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__17645__$1);
var G__17687 = cljs.core.chunk_rest(seq__17645__$1);
var G__17688 = c__4638__auto__;
var G__17689 = cljs.core.count(c__4638__auto__);
var G__17690 = (0);
seq__17645 = G__17687;
chunk__17646 = G__17688;
count__17647 = G__17689;
i__17648 = G__17690;
continue;
} else {
var vec__17658 = cljs.core.first(seq__17645__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17658,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17658,(1),null);
var temp__5751__auto___17691 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___17691)){
var effect_fn_17692 = temp__5751__auto___17691;
(effect_fn_17692.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17692.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17692.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17693 = cljs.core.next(seq__17645__$1);
var G__17694 = null;
var G__17695 = (0);
var G__17696 = (0);
seq__17645 = G__17693;
chunk__17646 = G__17694;
count__17647 = G__17695;
i__17648 = G__17696;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__17431__auto___17697 = re_frame.interop.now();
var duration__17432__auto___17698 = (end__17431__auto___17697 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__17432__auto___17698,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__17431__auto___17697);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__17642);
}} else {
var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___17699 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___17699)){
var new_db_17700 = temp__5753__auto___17699;
var fexpr__17661_17701 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__17661_17701.cljs$core$IFn$_invoke$arity$1 ? fexpr__17661_17701.cljs$core$IFn$_invoke$arity$1(new_db_17700) : fexpr__17661_17701.call(null,new_db_17700));
} else {
}

var seq__17662 = cljs.core.seq(effects_without_db);
var chunk__17663 = null;
var count__17664 = (0);
var i__17665 = (0);
while(true){
if((i__17665 < count__17664)){
var vec__17672 = chunk__17663.cljs$core$IIndexed$_nth$arity$2(null,i__17665);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17672,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17672,(1),null);
var temp__5751__auto___17702 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___17702)){
var effect_fn_17703 = temp__5751__auto___17702;
(effect_fn_17703.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17703.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17703.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17704 = seq__17662;
var G__17705 = chunk__17663;
var G__17706 = count__17664;
var G__17707 = (i__17665 + (1));
seq__17662 = G__17704;
chunk__17663 = G__17705;
count__17664 = G__17706;
i__17665 = G__17707;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17662);
if(temp__5753__auto__){
var seq__17662__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17662__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__17662__$1);
var G__17708 = cljs.core.chunk_rest(seq__17662__$1);
var G__17709 = c__4638__auto__;
var G__17710 = cljs.core.count(c__4638__auto__);
var G__17711 = (0);
seq__17662 = G__17708;
chunk__17663 = G__17709;
count__17664 = G__17710;
i__17665 = G__17711;
continue;
} else {
var vec__17675 = cljs.core.first(seq__17662__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17675,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17675,(1),null);
var temp__5751__auto___17712 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___17712)){
var effect_fn_17713 = temp__5751__auto___17712;
(effect_fn_17713.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17713.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17713.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17714 = cljs.core.next(seq__17662__$1);
var G__17715 = null;
var G__17716 = (0);
var G__17717 = (0);
seq__17662 = G__17714;
chunk__17663 = G__17715;
count__17664 = G__17716;
i__17665 = G__17717;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__17718){
var map__17719 = p__17718;
var map__17719__$1 = cljs.core.__destructure_map(map__17719);
var effect = map__17719__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17719__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17719__$1,cljs.core.cst$kw$dispatch);
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
var seq__17720 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__17721 = null;
var count__17722 = (0);
var i__17723 = (0);
while(true){
if((i__17723 < count__17722)){
var effect = chunk__17721.cljs$core$IIndexed$_nth$arity$2(null,i__17723);
re_frame.fx.dispatch_later(effect);


var G__17724 = seq__17720;
var G__17725 = chunk__17721;
var G__17726 = count__17722;
var G__17727 = (i__17723 + (1));
seq__17720 = G__17724;
chunk__17721 = G__17725;
count__17722 = G__17726;
i__17723 = G__17727;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17720);
if(temp__5753__auto__){
var seq__17720__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17720__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__17720__$1);
var G__17728 = cljs.core.chunk_rest(seq__17720__$1);
var G__17729 = c__4638__auto__;
var G__17730 = cljs.core.count(c__4638__auto__);
var G__17731 = (0);
seq__17720 = G__17728;
chunk__17721 = G__17729;
count__17722 = G__17730;
i__17723 = G__17731;
continue;
} else {
var effect = cljs.core.first(seq__17720__$1);
re_frame.fx.dispatch_later(effect);


var G__17732 = cljs.core.next(seq__17720__$1);
var G__17733 = null;
var G__17734 = (0);
var G__17735 = (0);
seq__17720 = G__17732;
chunk__17721 = G__17733;
count__17722 = G__17734;
i__17723 = G__17735;
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
var seq__17736 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__17737 = null;
var count__17738 = (0);
var i__17739 = (0);
while(true){
if((i__17739 < count__17738)){
var vec__17746 = chunk__17737.cljs$core$IIndexed$_nth$arity$2(null,i__17739);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17746,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17746,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___17752 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___17752)){
var effect_fn_17753 = temp__5751__auto___17752;
(effect_fn_17753.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17753.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17753.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__17754 = seq__17736;
var G__17755 = chunk__17737;
var G__17756 = count__17738;
var G__17757 = (i__17739 + (1));
seq__17736 = G__17754;
chunk__17737 = G__17755;
count__17738 = G__17756;
i__17739 = G__17757;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17736);
if(temp__5753__auto__){
var seq__17736__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17736__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__17736__$1);
var G__17758 = cljs.core.chunk_rest(seq__17736__$1);
var G__17759 = c__4638__auto__;
var G__17760 = cljs.core.count(c__4638__auto__);
var G__17761 = (0);
seq__17736 = G__17758;
chunk__17737 = G__17759;
count__17738 = G__17760;
i__17739 = G__17761;
continue;
} else {
var vec__17749 = cljs.core.first(seq__17736__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17749,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17749,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___17762 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___17762)){
var effect_fn_17763 = temp__5751__auto___17762;
(effect_fn_17763.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17763.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17763.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__17764 = cljs.core.next(seq__17736__$1);
var G__17765 = null;
var G__17766 = (0);
var G__17767 = (0);
seq__17736 = G__17764;
chunk__17737 = G__17765;
count__17738 = G__17766;
i__17739 = G__17767;
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
var seq__17768 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__17769 = null;
var count__17770 = (0);
var i__17771 = (0);
while(true){
if((i__17771 < count__17770)){
var event = chunk__17769.cljs$core$IIndexed$_nth$arity$2(null,i__17771);
re_frame.router.dispatch(event);


var G__17772 = seq__17768;
var G__17773 = chunk__17769;
var G__17774 = count__17770;
var G__17775 = (i__17771 + (1));
seq__17768 = G__17772;
chunk__17769 = G__17773;
count__17770 = G__17774;
i__17771 = G__17775;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17768);
if(temp__5753__auto__){
var seq__17768__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17768__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__17768__$1);
var G__17776 = cljs.core.chunk_rest(seq__17768__$1);
var G__17777 = c__4638__auto__;
var G__17778 = cljs.core.count(c__4638__auto__);
var G__17779 = (0);
seq__17768 = G__17776;
chunk__17769 = G__17777;
count__17770 = G__17778;
i__17771 = G__17779;
continue;
} else {
var event = cljs.core.first(seq__17768__$1);
re_frame.router.dispatch(event);


var G__17780 = cljs.core.next(seq__17768__$1);
var G__17781 = null;
var G__17782 = (0);
var G__17783 = (0);
seq__17768 = G__17780;
chunk__17769 = G__17781;
count__17770 = G__17782;
i__17771 = G__17783;
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
var seq__17784 = cljs.core.seq(value);
var chunk__17785 = null;
var count__17786 = (0);
var i__17787 = (0);
while(true){
if((i__17787 < count__17786)){
var event = chunk__17785.cljs$core$IIndexed$_nth$arity$2(null,i__17787);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__17788 = seq__17784;
var G__17789 = chunk__17785;
var G__17790 = count__17786;
var G__17791 = (i__17787 + (1));
seq__17784 = G__17788;
chunk__17785 = G__17789;
count__17786 = G__17790;
i__17787 = G__17791;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17784);
if(temp__5753__auto__){
var seq__17784__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17784__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__17784__$1);
var G__17792 = cljs.core.chunk_rest(seq__17784__$1);
var G__17793 = c__4638__auto__;
var G__17794 = cljs.core.count(c__4638__auto__);
var G__17795 = (0);
seq__17784 = G__17792;
chunk__17785 = G__17793;
count__17786 = G__17794;
i__17787 = G__17795;
continue;
} else {
var event = cljs.core.first(seq__17784__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__17796 = cljs.core.next(seq__17784__$1);
var G__17797 = null;
var G__17798 = (0);
var G__17799 = (0);
seq__17784 = G__17796;
chunk__17785 = G__17797;
count__17786 = G__17798;
i__17787 = G__17799;
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
