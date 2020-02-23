// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('transit_decoder.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('transit_decoder.text_processing');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transit_DASH_str,"",cljs.core.cst$kw$closjure_DASH_str,""], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$change_DASH_transit_DASH_str,(function (db,p__19929){
var vec__19930 = p__19929;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19930,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19930,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$transit_DASH_str,new_value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$change_DASH_clojure_DASH_str,(function (db,p__19933){
var vec__19934 = p__19933;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19934,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19934,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$clojure_DASH_str,new_value);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$show_DASH_error,(function (_,p__19937){
var vec__19938 = p__19937;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19938,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19938,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$show_DASH_alert_DASH_window,message], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$click_DASH_on_DASH_convert,(function (p__19941,_){
var map__19942 = p__19941;
var map__19942__$1 = (((((!((map__19942 == null))))?(((((map__19942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19942):map__19942);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19942__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$convert,cljs.core.cst$kw$transit_DASH_str.cljs$core$IFn$_invoke$arity$1(db)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$convert,(function (_,p__19944){
var vec__19945 = p__19944;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19945,(0),null);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19945,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$format_DASH_and_DASH_highlight_DASH_clojure,input], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$click_DASH_on_DASH_convert_DASH_from_DASH_clipboard,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$get_DASH_text_DASH_from_DASH_clipboard,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$change_DASH_transit_DASH_str], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$convert], null)], null),cljs.core.cst$kw$on_DASH_error,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$show_DASH_error], null)], null)], null);
}));
var G__19948_19950 = cljs.core.cst$kw$show_DASH_alert_DASH_window;
var G__19949_19951 = ((function (G__19948_19950){
return (function (message){
return alert(message);
});})(G__19948_19950))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19948_19950,G__19949_19951) : re_frame.core.reg_fx.call(null,G__19948_19950,G__19949_19951));
var G__19952_19958 = cljs.core.cst$kw$format_DASH_and_DASH_highlight_DASH_clojure;
var G__19953_19959 = ((function (G__19952_19958){
return (function (input){
try{var G__19957 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$change_DASH_clojure_DASH_str,transit_decoder.text_processing.prettify_and_highlight_clojure_transit(input)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19957) : re_frame.core.dispatch.call(null,G__19957));
}catch (e19954){if((e19954 instanceof SyntaxError)){
var e = e19954;
var G__19955 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$show_DASH_error,["Please check your input: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)].join('')], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19955) : re_frame.core.dispatch.call(null,G__19955));
} else {
var e = e19954;
var G__19956 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$show_DASH_error,e], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19956) : re_frame.core.dispatch.call(null,G__19956));

}
}});})(G__19952_19958))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19952_19958,G__19953_19959) : re_frame.core.reg_fx.call(null,G__19952_19958,G__19953_19959));
var G__19960_19974 = cljs.core.cst$kw$get_DASH_text_DASH_from_DASH_clipboard;
var G__19961_19975 = ((function (G__19960_19974){
return (function (p__19962){
var map__19963 = p__19962;
var map__19963__$1 = (((((!((map__19963 == null))))?(((((map__19963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19963):map__19963);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19963__$1,cljs.core.cst$kw$on_DASH_success);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19963__$1,cljs.core.cst$kw$on_DASH_error);
return navigator.clipboard.readText().then(((function (map__19963,map__19963__$1,on_success,on_error,G__19960_19974){
return (function (text){
var seq__19965 = cljs.core.seq(on_success);
var chunk__19966 = null;
var count__19967 = (0);
var i__19968 = (0);
while(true){
if((i__19968 < count__19967)){
var event = chunk__19966.cljs$core$IIndexed$_nth$arity$2(null,i__19968);
var G__19971_19976 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(event,text);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19971_19976) : re_frame.core.dispatch.call(null,G__19971_19976));


var G__19977 = seq__19965;
var G__19978 = chunk__19966;
var G__19979 = count__19967;
var G__19980 = (i__19968 + (1));
seq__19965 = G__19977;
chunk__19966 = G__19978;
count__19967 = G__19979;
i__19968 = G__19980;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19965);
if(temp__5457__auto__){
var seq__19965__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19965__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__19965__$1);
var G__19981 = cljs.core.chunk_rest(seq__19965__$1);
var G__19982 = c__4550__auto__;
var G__19983 = cljs.core.count(c__4550__auto__);
var G__19984 = (0);
seq__19965 = G__19981;
chunk__19966 = G__19982;
count__19967 = G__19983;
i__19968 = G__19984;
continue;
} else {
var event = cljs.core.first(seq__19965__$1);
var G__19972_19985 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(event,text);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19972_19985) : re_frame.core.dispatch.call(null,G__19972_19985));


var G__19986 = cljs.core.next(seq__19965__$1);
var G__19987 = null;
var G__19988 = (0);
var G__19989 = (0);
seq__19965 = G__19986;
chunk__19966 = G__19987;
count__19967 = G__19988;
i__19968 = G__19989;
continue;
}
} else {
return null;
}
}
break;
}
});})(map__19963,map__19963__$1,on_success,on_error,G__19960_19974))
).catch(((function (map__19963,map__19963__$1,on_success,on_error,G__19960_19974){
return (function (error){
var G__19973 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_error,error);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19973) : re_frame.core.dispatch.call(null,G__19973));
});})(map__19963,map__19963__$1,on_success,on_error,G__19960_19974))
);
});})(G__19960_19974))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19960_19974,G__19961_19975) : re_frame.core.reg_fx.call(null,G__19960_19974,G__19961_19975));
