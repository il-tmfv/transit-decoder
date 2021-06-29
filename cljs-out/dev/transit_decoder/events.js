// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('transit_decoder.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('transit_decoder.text_processing');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transit_DASH_str,"",cljs.core.cst$kw$closjure_DASH_str,""], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$change_DASH_transit_DASH_str,(function (db,p__19789){
var vec__19790 = p__19789;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19790,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19790,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$transit_DASH_str,new_value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$change_DASH_clojure_DASH_str,(function (db,p__19793){
var vec__19794 = p__19793;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19794,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19794,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$clojure_DASH_str,new_value);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$show_DASH_error,(function (_,p__19797){
var vec__19798 = p__19797;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19798,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19798,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$show_DASH_alert_DASH_window,message], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$click_DASH_on_DASH_convert,(function (p__19801,_){
var map__19802 = p__19801;
var map__19802__$1 = cljs.core.__destructure_map(map__19802);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19802__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$convert,cljs.core.cst$kw$transit_DASH_str.cljs$core$IFn$_invoke$arity$1(db)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$convert,(function (_,p__19803){
var vec__19804 = p__19803;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19804,(0),null);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19804,(1),null);
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
}catch (e19807){if((e19807 instanceof SyntaxError)){
var e = e19807;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$show_DASH_error,["Please check your input: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)].join('')], null));
} else {
var e = e19807;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$show_DASH_error,e], null));

}
}}));
re_frame.core.reg_fx(cljs.core.cst$kw$get_DASH_text_DASH_from_DASH_clipboard,(function (p__19808){
var map__19809 = p__19808;
var map__19809__$1 = cljs.core.__destructure_map(map__19809);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19809__$1,cljs.core.cst$kw$on_DASH_success);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19809__$1,cljs.core.cst$kw$on_DASH_error);
return navigator.clipboard.readText().then((function (text){
var seq__19810 = cljs.core.seq(on_success);
var chunk__19811 = null;
var count__19812 = (0);
var i__19813 = (0);
while(true){
if((i__19813 < count__19812)){
var event = chunk__19811.cljs$core$IIndexed$_nth$arity$2(null,i__19813);
re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(event,text));


var G__19814 = seq__19810;
var G__19815 = chunk__19811;
var G__19816 = count__19812;
var G__19817 = (i__19813 + (1));
seq__19810 = G__19814;
chunk__19811 = G__19815;
count__19812 = G__19816;
i__19813 = G__19817;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__19810);
if(temp__5753__auto__){
var seq__19810__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19810__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__19810__$1);
var G__19818 = cljs.core.chunk_rest(seq__19810__$1);
var G__19819 = c__4649__auto__;
var G__19820 = cljs.core.count(c__4649__auto__);
var G__19821 = (0);
seq__19810 = G__19818;
chunk__19811 = G__19819;
count__19812 = G__19820;
i__19813 = G__19821;
continue;
} else {
var event = cljs.core.first(seq__19810__$1);
re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(event,text));


var G__19822 = cljs.core.next(seq__19810__$1);
var G__19823 = null;
var G__19824 = (0);
var G__19825 = (0);
seq__19810 = G__19822;
chunk__19811 = G__19823;
count__19812 = G__19824;
i__19813 = G__19825;
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
