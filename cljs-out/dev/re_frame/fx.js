// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
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
var _STAR_current_trace_STAR__orig_val__17702 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__17703 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__17703);

try{try{var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___17738 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___17738)){
var new_db_17739 = temp__5753__auto___17738;
var fexpr__17704_17740 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__17704_17740.cljs$core$IFn$_invoke$arity$1 ? fexpr__17704_17740.cljs$core$IFn$_invoke$arity$1(new_db_17739) : fexpr__17704_17740.call(null,new_db_17739));
} else {
}

var seq__17705 = cljs.core.seq(effects_without_db);
var chunk__17706 = null;
var count__17707 = (0);
var i__17708 = (0);
while(true){
if((i__17708 < count__17707)){
var vec__17715 = chunk__17706.cljs$core$IIndexed$_nth$arity$2(null,i__17708);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17715,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17715,(1),null);
var temp__5751__auto___17741 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___17741)){
var effect_fn_17742 = temp__5751__auto___17741;
(effect_fn_17742.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17742.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17742.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17743 = seq__17705;
var G__17744 = chunk__17706;
var G__17745 = count__17707;
var G__17746 = (i__17708 + (1));
seq__17705 = G__17743;
chunk__17706 = G__17744;
count__17707 = G__17745;
i__17708 = G__17746;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17705);
if(temp__5753__auto__){
var seq__17705__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17705__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__17705__$1);
var G__17747 = cljs.core.chunk_rest(seq__17705__$1);
var G__17748 = c__4649__auto__;
var G__17749 = cljs.core.count(c__4649__auto__);
var G__17750 = (0);
seq__17705 = G__17747;
chunk__17706 = G__17748;
count__17707 = G__17749;
i__17708 = G__17750;
continue;
} else {
var vec__17718 = cljs.core.first(seq__17705__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17718,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17718,(1),null);
var temp__5751__auto___17751 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___17751)){
var effect_fn_17752 = temp__5751__auto___17751;
(effect_fn_17752.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17752.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17752.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17753 = cljs.core.next(seq__17705__$1);
var G__17754 = null;
var G__17755 = (0);
var G__17756 = (0);
seq__17705 = G__17753;
chunk__17706 = G__17754;
count__17707 = G__17755;
i__17708 = G__17756;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__17491__auto___17757 = re_frame.interop.now();
var duration__17492__auto___17758 = (end__17491__auto___17757 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__17492__auto___17758,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__17491__auto___17757);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__17702);
}} else {
var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___17759 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___17759)){
var new_db_17760 = temp__5753__auto___17759;
var fexpr__17721_17761 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__17721_17761.cljs$core$IFn$_invoke$arity$1 ? fexpr__17721_17761.cljs$core$IFn$_invoke$arity$1(new_db_17760) : fexpr__17721_17761.call(null,new_db_17760));
} else {
}

var seq__17722 = cljs.core.seq(effects_without_db);
var chunk__17723 = null;
var count__17724 = (0);
var i__17725 = (0);
while(true){
if((i__17725 < count__17724)){
var vec__17732 = chunk__17723.cljs$core$IIndexed$_nth$arity$2(null,i__17725);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17732,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17732,(1),null);
var temp__5751__auto___17762 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___17762)){
var effect_fn_17763 = temp__5751__auto___17762;
(effect_fn_17763.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17763.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17763.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17764 = seq__17722;
var G__17765 = chunk__17723;
var G__17766 = count__17724;
var G__17767 = (i__17725 + (1));
seq__17722 = G__17764;
chunk__17723 = G__17765;
count__17724 = G__17766;
i__17725 = G__17767;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17722);
if(temp__5753__auto__){
var seq__17722__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17722__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__17722__$1);
var G__17768 = cljs.core.chunk_rest(seq__17722__$1);
var G__17769 = c__4649__auto__;
var G__17770 = cljs.core.count(c__4649__auto__);
var G__17771 = (0);
seq__17722 = G__17768;
chunk__17723 = G__17769;
count__17724 = G__17770;
i__17725 = G__17771;
continue;
} else {
var vec__17735 = cljs.core.first(seq__17722__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17735,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17735,(1),null);
var temp__5751__auto___17772 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___17772)){
var effect_fn_17773 = temp__5751__auto___17772;
(effect_fn_17773.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17773.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17773.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17774 = cljs.core.next(seq__17722__$1);
var G__17775 = null;
var G__17776 = (0);
var G__17777 = (0);
seq__17722 = G__17774;
chunk__17723 = G__17775;
count__17724 = G__17776;
i__17725 = G__17777;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__17778){
var map__17779 = p__17778;
var map__17779__$1 = cljs.core.__destructure_map(map__17779);
var effect = map__17779__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17779__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17779__$1,cljs.core.cst$kw$dispatch);
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
var seq__17780 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__17781 = null;
var count__17782 = (0);
var i__17783 = (0);
while(true){
if((i__17783 < count__17782)){
var effect = chunk__17781.cljs$core$IIndexed$_nth$arity$2(null,i__17783);
re_frame.fx.dispatch_later(effect);


var G__17784 = seq__17780;
var G__17785 = chunk__17781;
var G__17786 = count__17782;
var G__17787 = (i__17783 + (1));
seq__17780 = G__17784;
chunk__17781 = G__17785;
count__17782 = G__17786;
i__17783 = G__17787;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17780);
if(temp__5753__auto__){
var seq__17780__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17780__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__17780__$1);
var G__17788 = cljs.core.chunk_rest(seq__17780__$1);
var G__17789 = c__4649__auto__;
var G__17790 = cljs.core.count(c__4649__auto__);
var G__17791 = (0);
seq__17780 = G__17788;
chunk__17781 = G__17789;
count__17782 = G__17790;
i__17783 = G__17791;
continue;
} else {
var effect = cljs.core.first(seq__17780__$1);
re_frame.fx.dispatch_later(effect);


var G__17792 = cljs.core.next(seq__17780__$1);
var G__17793 = null;
var G__17794 = (0);
var G__17795 = (0);
seq__17780 = G__17792;
chunk__17781 = G__17793;
count__17782 = G__17794;
i__17783 = G__17795;
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
var seq__17796 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__17797 = null;
var count__17798 = (0);
var i__17799 = (0);
while(true){
if((i__17799 < count__17798)){
var vec__17806 = chunk__17797.cljs$core$IIndexed$_nth$arity$2(null,i__17799);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17806,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17806,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___17812 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___17812)){
var effect_fn_17813 = temp__5751__auto___17812;
(effect_fn_17813.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17813.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17813.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__17814 = seq__17796;
var G__17815 = chunk__17797;
var G__17816 = count__17798;
var G__17817 = (i__17799 + (1));
seq__17796 = G__17814;
chunk__17797 = G__17815;
count__17798 = G__17816;
i__17799 = G__17817;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17796);
if(temp__5753__auto__){
var seq__17796__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17796__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__17796__$1);
var G__17818 = cljs.core.chunk_rest(seq__17796__$1);
var G__17819 = c__4649__auto__;
var G__17820 = cljs.core.count(c__4649__auto__);
var G__17821 = (0);
seq__17796 = G__17818;
chunk__17797 = G__17819;
count__17798 = G__17820;
i__17799 = G__17821;
continue;
} else {
var vec__17809 = cljs.core.first(seq__17796__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17809,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17809,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___17822 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___17822)){
var effect_fn_17823 = temp__5751__auto___17822;
(effect_fn_17823.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17823.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17823.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__17824 = cljs.core.next(seq__17796__$1);
var G__17825 = null;
var G__17826 = (0);
var G__17827 = (0);
seq__17796 = G__17824;
chunk__17797 = G__17825;
count__17798 = G__17826;
i__17799 = G__17827;
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
var seq__17828 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__17829 = null;
var count__17830 = (0);
var i__17831 = (0);
while(true){
if((i__17831 < count__17830)){
var event = chunk__17829.cljs$core$IIndexed$_nth$arity$2(null,i__17831);
re_frame.router.dispatch(event);


var G__17832 = seq__17828;
var G__17833 = chunk__17829;
var G__17834 = count__17830;
var G__17835 = (i__17831 + (1));
seq__17828 = G__17832;
chunk__17829 = G__17833;
count__17830 = G__17834;
i__17831 = G__17835;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17828);
if(temp__5753__auto__){
var seq__17828__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17828__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__17828__$1);
var G__17836 = cljs.core.chunk_rest(seq__17828__$1);
var G__17837 = c__4649__auto__;
var G__17838 = cljs.core.count(c__4649__auto__);
var G__17839 = (0);
seq__17828 = G__17836;
chunk__17829 = G__17837;
count__17830 = G__17838;
i__17831 = G__17839;
continue;
} else {
var event = cljs.core.first(seq__17828__$1);
re_frame.router.dispatch(event);


var G__17840 = cljs.core.next(seq__17828__$1);
var G__17841 = null;
var G__17842 = (0);
var G__17843 = (0);
seq__17828 = G__17840;
chunk__17829 = G__17841;
count__17830 = G__17842;
i__17831 = G__17843;
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
var seq__17844 = cljs.core.seq(value);
var chunk__17845 = null;
var count__17846 = (0);
var i__17847 = (0);
while(true){
if((i__17847 < count__17846)){
var event = chunk__17845.cljs$core$IIndexed$_nth$arity$2(null,i__17847);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__17848 = seq__17844;
var G__17849 = chunk__17845;
var G__17850 = count__17846;
var G__17851 = (i__17847 + (1));
seq__17844 = G__17848;
chunk__17845 = G__17849;
count__17846 = G__17850;
i__17847 = G__17851;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17844);
if(temp__5753__auto__){
var seq__17844__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17844__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__17844__$1);
var G__17852 = cljs.core.chunk_rest(seq__17844__$1);
var G__17853 = c__4649__auto__;
var G__17854 = cljs.core.count(c__4649__auto__);
var G__17855 = (0);
seq__17844 = G__17852;
chunk__17845 = G__17853;
count__17846 = G__17854;
i__17847 = G__17855;
continue;
} else {
var event = cljs.core.first(seq__17844__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__17856 = cljs.core.next(seq__17844__$1);
var G__17857 = null;
var G__17858 = (0);
var G__17859 = (0);
seq__17844 = G__17856;
chunk__17845 = G__17857;
count__17846 = G__17858;
i__17847 = G__17859;
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
