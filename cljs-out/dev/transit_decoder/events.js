// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('transit_decoder.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('transit_decoder.text_processing');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transit_DASH_str,"",cljs.core.cst$kw$closjure_DASH_str,""], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$change_DASH_transit_DASH_str,(function (db,p__19729){
var vec__19730 = p__19729;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19730,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19730,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$transit_DASH_str,new_value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$change_DASH_clojure_DASH_str,(function (db,p__19733){
var vec__19734 = p__19733;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19734,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19734,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$clojure_DASH_str,new_value);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$show_DASH_error,(function (_,p__19737){
var vec__19738 = p__19737;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19738,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19738,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$show_DASH_alert_DASH_window,message], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$click_DASH_on_DASH_convert,(function (p__19741,_){
var map__19742 = p__19741;
var map__19742__$1 = cljs.core.__destructure_map(map__19742);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19742__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$convert,cljs.core.cst$kw$transit_DASH_str.cljs$core$IFn$_invoke$arity$1(db)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$convert,(function (_,p__19743){
var vec__19744 = p__19743;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19744,(0),null);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19744,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$format_DASH_and_DASH_highlight_DASH_clojure,input], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$click_DASH_on_DASH_convert_DASH_from_DASH_clipboard,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$get_DASH_text_DASH_from_DASH_clipboard,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$change_DASH_transit_DASH_str], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$convert], null)], null),cljs.core.cst$kw$on_DASH_error,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$show_DASH_error], null)], null)], null);
}));
re_frame.core.reg_fx(cljs.core.cst$kw$show_DASH_alert_DASH_window,(function (message){
return alert(message);
}));
re_frame.core.reg_fx(cljs.core.cst$kw$format_DASH_and_DASH_highlight_DASH_clojure,(function (input){
try{return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$change_DASH_clojure_DASH_str,transit_decoder.text_processing.prettify_and_highlight_clojure_transit(input)], null));
}catch (e19747){if((e19747 instanceof SyntaxError)){
var e = e19747;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$show_DASH_error,["Please check your input: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)].join('')], null));
} else {
var e = e19747;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$show_DASH_error,e], null));

}
}}));
re_frame.core.reg_fx(cljs.core.cst$kw$get_DASH_text_DASH_from_DASH_clipboard,(function (p__19748){
var map__19749 = p__19748;
var map__19749__$1 = cljs.core.__destructure_map(map__19749);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19749__$1,cljs.core.cst$kw$on_DASH_success);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19749__$1,cljs.core.cst$kw$on_DASH_error);
return navigator.clipboard.readText().then((function (text){
var seq__19750 = cljs.core.seq(on_success);
var chunk__19751 = null;
var count__19752 = (0);
var i__19753 = (0);
while(true){
if((i__19753 < count__19752)){
var event = chunk__19751.cljs$core$IIndexed$_nth$arity$2(null,i__19753);
re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(event,text));


var G__19754 = seq__19750;
var G__19755 = chunk__19751;
var G__19756 = count__19752;
var G__19757 = (i__19753 + (1));
seq__19750 = G__19754;
chunk__19751 = G__19755;
count__19752 = G__19756;
i__19753 = G__19757;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__19750);
if(temp__5753__auto__){
var seq__19750__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19750__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__19750__$1);
var G__19758 = cljs.core.chunk_rest(seq__19750__$1);
var G__19759 = c__4638__auto__;
var G__19760 = cljs.core.count(c__4638__auto__);
var G__19761 = (0);
seq__19750 = G__19758;
chunk__19751 = G__19759;
count__19752 = G__19760;
i__19753 = G__19761;
continue;
} else {
var event = cljs.core.first(seq__19750__$1);
re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(event,text));


var G__19762 = cljs.core.next(seq__19750__$1);
var G__19763 = null;
var G__19764 = (0);
var G__19765 = (0);
seq__19750 = G__19762;
chunk__19751 = G__19763;
count__19752 = G__19764;
i__19753 = G__19765;
continue;
}
} else {
return null;
}
}
break;
}
})).catch((function (error){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_error,error));
}));
}));
