// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('transit_decoder.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('transit_decoder.text_processing');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transit_DASH_str,"",cljs.core.cst$kw$closjure_DASH_str,""], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$change_DASH_transit_DASH_str,(function (db,p__18892){
var vec__18893 = p__18892;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18893,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18893,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$transit_DASH_str,new_value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$change_DASH_clojure_DASH_str,(function (db,p__18896){
var vec__18897 = p__18896;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18897,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18897,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$clojure_DASH_str,new_value);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$show_DASH_error,(function (_,p__18900){
var vec__18901 = p__18900;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18901,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18901,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$show_DASH_alert_DASH_window,message], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$click_DASH_on_DASH_convert,(function (p__18904,_){
var map__18905 = p__18904;
var map__18905__$1 = (((((!((map__18905 == null))))?(((((map__18905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18905):map__18905);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18905__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$convert,cljs.core.cst$kw$transit_DASH_str.cljs$core$IFn$_invoke$arity$1(db)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$convert,(function (_,p__18907){
var vec__18908 = p__18907;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18908,(0),null);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18908,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$format_DASH_and_DASH_highlight_DASH_clojure,input], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$click_DASH_on_DASH_convert_DASH_from_DASH_clipboard,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$get_DASH_text_DASH_from_DASH_clipboard,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$change_DASH_transit_DASH_str], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$convert], null)], null),cljs.core.cst$kw$on_DASH_error,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$show_DASH_error], null)], null)], null);
}));
var G__18911_18913 = cljs.core.cst$kw$show_DASH_alert_DASH_window;
var G__18912_18914 = (function (message){
return alert(message);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__18911_18913,G__18912_18914) : re_frame.core.reg_fx.call(null,G__18911_18913,G__18912_18914));
var G__18915_18921 = cljs.core.cst$kw$format_DASH_and_DASH_highlight_DASH_clojure;
var G__18916_18922 = (function (input){
try{var G__18920 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$change_DASH_clojure_DASH_str,transit_decoder.text_processing.prettify_and_highlight_clojure_transit(input)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18920) : re_frame.core.dispatch.call(null,G__18920));
}catch (e18917){if((e18917 instanceof SyntaxError)){
var e = e18917;
var G__18918 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$show_DASH_error,["Please check your input: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)].join('')], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18918) : re_frame.core.dispatch.call(null,G__18918));
} else {
var e = e18917;
var G__18919 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$show_DASH_error,e], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18919) : re_frame.core.dispatch.call(null,G__18919));

}
}});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__18915_18921,G__18916_18922) : re_frame.core.reg_fx.call(null,G__18915_18921,G__18916_18922));
var G__18923_18937 = cljs.core.cst$kw$get_DASH_text_DASH_from_DASH_clipboard;
var G__18924_18938 = (function (p__18925){
var map__18926 = p__18925;
var map__18926__$1 = (((((!((map__18926 == null))))?(((((map__18926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18926):map__18926);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18926__$1,cljs.core.cst$kw$on_DASH_success);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18926__$1,cljs.core.cst$kw$on_DASH_error);
return navigator.clipboard.readText().then((function (text){
var seq__18928 = cljs.core.seq(on_success);
var chunk__18929 = null;
var count__18930 = (0);
var i__18931 = (0);
while(true){
if((i__18931 < count__18930)){
var event = chunk__18929.cljs$core$IIndexed$_nth$arity$2(null,i__18931);
var G__18934_18939 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(event,text);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18934_18939) : re_frame.core.dispatch.call(null,G__18934_18939));


var G__18940 = seq__18928;
var G__18941 = chunk__18929;
var G__18942 = count__18930;
var G__18943 = (i__18931 + (1));
seq__18928 = G__18940;
chunk__18929 = G__18941;
count__18930 = G__18942;
i__18931 = G__18943;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18928);
if(temp__5457__auto__){
var seq__18928__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18928__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__18928__$1);
var G__18944 = cljs.core.chunk_rest(seq__18928__$1);
var G__18945 = c__4556__auto__;
var G__18946 = cljs.core.count(c__4556__auto__);
var G__18947 = (0);
seq__18928 = G__18944;
chunk__18929 = G__18945;
count__18930 = G__18946;
i__18931 = G__18947;
continue;
} else {
var event = cljs.core.first(seq__18928__$1);
var G__18935_18948 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(event,text);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18935_18948) : re_frame.core.dispatch.call(null,G__18935_18948));


var G__18949 = cljs.core.next(seq__18928__$1);
var G__18950 = null;
var G__18951 = (0);
var G__18952 = (0);
seq__18928 = G__18949;
chunk__18929 = G__18950;
count__18930 = G__18951;
i__18931 = G__18952;
continue;
}
} else {
return null;
}
}
break;
}
})).catch((function (error){
var G__18936 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_error,error);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18936) : re_frame.core.dispatch.call(null,G__18936));
}));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__18923_18937,G__18924_18938) : re_frame.core.reg_fx.call(null,G__18923_18937,G__18924_18938));
