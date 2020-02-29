// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('transit_decoder.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('transit_decoder.text_processing');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transit_DASH_str,"",cljs.core.cst$kw$closjure_DASH_str,""], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$change_DASH_transit_DASH_str,(function (db,p__19938){
var vec__19939 = p__19938;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19939,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19939,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$transit_DASH_str,new_value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$change_DASH_clojure_DASH_str,(function (db,p__19942){
var vec__19943 = p__19942;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19943,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19943,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$clojure_DASH_str,new_value);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$show_DASH_error,(function (_,p__19946){
var vec__19947 = p__19946;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19947,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19947,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$show_DASH_alert_DASH_window,message], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$click_DASH_on_DASH_convert,(function (p__19950,_){
var map__19951 = p__19950;
var map__19951__$1 = (((((!((map__19951 == null))))?(((((map__19951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19951):map__19951);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19951__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$convert,cljs.core.cst$kw$transit_DASH_str.cljs$core$IFn$_invoke$arity$1(db)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$convert,(function (_,p__19953){
var vec__19954 = p__19953;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19954,(0),null);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19954,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$format_DASH_and_DASH_highlight_DASH_clojure,input], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$click_DASH_on_DASH_convert_DASH_from_DASH_clipboard,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$get_DASH_text_DASH_from_DASH_clipboard,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$change_DASH_transit_DASH_str], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$convert], null)], null),cljs.core.cst$kw$on_DASH_error,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$show_DASH_error], null)], null)], null);
}));
var G__19957_19959 = cljs.core.cst$kw$show_DASH_alert_DASH_window;
var G__19958_19960 = ((function (G__19957_19959){
return (function (message){
return alert(message);
});})(G__19957_19959))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19957_19959,G__19958_19960) : re_frame.core.reg_fx.call(null,G__19957_19959,G__19958_19960));
var G__19961_19967 = cljs.core.cst$kw$format_DASH_and_DASH_highlight_DASH_clojure;
var G__19962_19968 = ((function (G__19961_19967){
return (function (input){
try{var G__19966 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$change_DASH_clojure_DASH_str,transit_decoder.text_processing.prettify_and_highlight_clojure_transit(input)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19966) : re_frame.core.dispatch.call(null,G__19966));
}catch (e19963){if((e19963 instanceof SyntaxError)){
var e = e19963;
var G__19964 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$show_DASH_error,["Please check your input: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)].join('')], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19964) : re_frame.core.dispatch.call(null,G__19964));
} else {
var e = e19963;
var G__19965 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$show_DASH_error,e], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19965) : re_frame.core.dispatch.call(null,G__19965));

}
}});})(G__19961_19967))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19961_19967,G__19962_19968) : re_frame.core.reg_fx.call(null,G__19961_19967,G__19962_19968));
var G__19969_19983 = cljs.core.cst$kw$get_DASH_text_DASH_from_DASH_clipboard;
var G__19970_19984 = ((function (G__19969_19983){
return (function (p__19971){
var map__19972 = p__19971;
var map__19972__$1 = (((((!((map__19972 == null))))?(((((map__19972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19972):map__19972);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19972__$1,cljs.core.cst$kw$on_DASH_success);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19972__$1,cljs.core.cst$kw$on_DASH_error);
return navigator.clipboard.readText().then(((function (map__19972,map__19972__$1,on_success,on_error,G__19969_19983){
return (function (text){
var seq__19974 = cljs.core.seq(on_success);
var chunk__19975 = null;
var count__19976 = (0);
var i__19977 = (0);
while(true){
if((i__19977 < count__19976)){
var event = chunk__19975.cljs$core$IIndexed$_nth$arity$2(null,i__19977);
var G__19980_19985 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(event,text);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19980_19985) : re_frame.core.dispatch.call(null,G__19980_19985));


var G__19986 = seq__19974;
var G__19987 = chunk__19975;
var G__19988 = count__19976;
var G__19989 = (i__19977 + (1));
seq__19974 = G__19986;
chunk__19975 = G__19987;
count__19976 = G__19988;
i__19977 = G__19989;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19974);
if(temp__5457__auto__){
var seq__19974__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19974__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__19974__$1);
var G__19990 = cljs.core.chunk_rest(seq__19974__$1);
var G__19991 = c__4550__auto__;
var G__19992 = cljs.core.count(c__4550__auto__);
var G__19993 = (0);
seq__19974 = G__19990;
chunk__19975 = G__19991;
count__19976 = G__19992;
i__19977 = G__19993;
continue;
} else {
var event = cljs.core.first(seq__19974__$1);
var G__19981_19994 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(event,text);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19981_19994) : re_frame.core.dispatch.call(null,G__19981_19994));


var G__19995 = cljs.core.next(seq__19974__$1);
var G__19996 = null;
var G__19997 = (0);
var G__19998 = (0);
seq__19974 = G__19995;
chunk__19975 = G__19996;
count__19976 = G__19997;
i__19977 = G__19998;
continue;
}
} else {
return null;
}
}
break;
}
});})(map__19972,map__19972__$1,on_success,on_error,G__19969_19983))
).catch(((function (map__19972,map__19972__$1,on_success,on_error,G__19969_19983){
return (function (error){
var G__19982 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_error,error);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19982) : re_frame.core.dispatch.call(null,G__19982));
});})(map__19972,map__19972__$1,on_success,on_error,G__19969_19983))
);
});})(G__19969_19983))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19969_19983,G__19970_19984) : re_frame.core.reg_fx.call(null,G__19969_19983,G__19970_19984));
