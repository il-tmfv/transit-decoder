// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('transit_decoder.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('transit_decoder.text_processing');
goog.require('herb.core');
goog.require('transit_decoder.css_classes');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transit_DASH_str,"",cljs.core.cst$kw$closjure_DASH_str,""], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$change_DASH_transit_DASH_str,(function (db,p__19919){
var vec__19920 = p__19919;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19920,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19920,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$transit_DASH_str,new_value);
}));
var G__19923_19925 = cljs.core.cst$kw$transit_DASH_str;
var G__19924_19926 = ((function (G__19923_19925){
return (function (db,_){
return cljs.core.cst$kw$transit_DASH_str.cljs$core$IFn$_invoke$arity$1(db);
});})(G__19923_19925))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19923_19925,G__19924_19926) : re_frame.core.reg_sub.call(null,G__19923_19925,G__19924_19926));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$change_DASH_clojure_DASH_str,(function (db,p__19927){
var vec__19928 = p__19927;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19928,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19928,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$clojure_DASH_str,new_value);
}));
var G__19931_19933 = cljs.core.cst$kw$clojure_DASH_str;
var G__19932_19934 = ((function (G__19931_19933){
return (function (db,_){
return cljs.core.cst$kw$clojure_DASH_str.cljs$core$IFn$_invoke$arity$1(db);
});})(G__19931_19933))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19931_19933,G__19932_19934) : re_frame.core.reg_sub.call(null,G__19931_19933,G__19932_19934));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$show_DASH_error,(function (_,p__19935){
var vec__19936 = p__19935;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19936,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19936,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$show_DASH_alert_DASH_window,message], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$click_DASH_on_DASH_convert,(function (p__19939,_){
var map__19940 = p__19939;
var map__19940__$1 = (((((!((map__19940 == null))))?(((((map__19940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19940):map__19940);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19940__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$convert,cljs.core.cst$kw$transit_DASH_str.cljs$core$IFn$_invoke$arity$1(db)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$convert,(function (_,p__19942){
var vec__19943 = p__19942;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19943,(0),null);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19943,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$format_DASH_and_DASH_highlight_DASH_clojure,input], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$click_DASH_on_DASH_convert_DASH_from_DASH_clipboard,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$get_DASH_text_DASH_from_DASH_clipboard,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$change_DASH_transit_DASH_str], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$convert], null)], null),cljs.core.cst$kw$on_DASH_error,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$show_DASH_error], null)], null)], null);
}));
var G__19946_19948 = cljs.core.cst$kw$show_DASH_alert_DASH_window;
var G__19947_19949 = ((function (G__19946_19948){
return (function (message){
return alert(message);
});})(G__19946_19948))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19946_19948,G__19947_19949) : re_frame.core.reg_fx.call(null,G__19946_19948,G__19947_19949));
var G__19950_19956 = cljs.core.cst$kw$format_DASH_and_DASH_highlight_DASH_clojure;
var G__19951_19957 = ((function (G__19950_19956){
return (function (input){
try{var G__19955 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$change_DASH_clojure_DASH_str,transit_decoder.text_processing.prettify_and_highlight_clojure_transit(input)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19955) : re_frame.core.dispatch.call(null,G__19955));
}catch (e19952){if((e19952 instanceof SyntaxError)){
var e = e19952;
var G__19953 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$show_DASH_error,["Please check your input: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)].join('')], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19953) : re_frame.core.dispatch.call(null,G__19953));
} else {
var e = e19952;
var G__19954 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$show_DASH_error,e], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19954) : re_frame.core.dispatch.call(null,G__19954));

}
}});})(G__19950_19956))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19950_19956,G__19951_19957) : re_frame.core.reg_fx.call(null,G__19950_19956,G__19951_19957));
var G__19958_19972 = cljs.core.cst$kw$get_DASH_text_DASH_from_DASH_clipboard;
var G__19959_19973 = ((function (G__19958_19972){
return (function (p__19960){
var map__19961 = p__19960;
var map__19961__$1 = (((((!((map__19961 == null))))?(((((map__19961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19961):map__19961);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19961__$1,cljs.core.cst$kw$on_DASH_success);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19961__$1,cljs.core.cst$kw$on_DASH_error);
return navigator.clipboard.readText().then(((function (map__19961,map__19961__$1,on_success,on_error,G__19958_19972){
return (function (text){
var seq__19963 = cljs.core.seq(on_success);
var chunk__19964 = null;
var count__19965 = (0);
var i__19966 = (0);
while(true){
if((i__19966 < count__19965)){
var event = chunk__19964.cljs$core$IIndexed$_nth$arity$2(null,i__19966);
var G__19969_19974 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(event,text);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19969_19974) : re_frame.core.dispatch.call(null,G__19969_19974));


var G__19975 = seq__19963;
var G__19976 = chunk__19964;
var G__19977 = count__19965;
var G__19978 = (i__19966 + (1));
seq__19963 = G__19975;
chunk__19964 = G__19976;
count__19965 = G__19977;
i__19966 = G__19978;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19963);
if(temp__5457__auto__){
var seq__19963__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19963__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__19963__$1);
var G__19979 = cljs.core.chunk_rest(seq__19963__$1);
var G__19980 = c__4550__auto__;
var G__19981 = cljs.core.count(c__4550__auto__);
var G__19982 = (0);
seq__19963 = G__19979;
chunk__19964 = G__19980;
count__19965 = G__19981;
i__19966 = G__19982;
continue;
} else {
var event = cljs.core.first(seq__19963__$1);
var G__19970_19983 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(event,text);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19970_19983) : re_frame.core.dispatch.call(null,G__19970_19983));


var G__19984 = cljs.core.next(seq__19963__$1);
var G__19985 = null;
var G__19986 = (0);
var G__19987 = (0);
seq__19963 = G__19984;
chunk__19964 = G__19985;
count__19965 = G__19986;
i__19966 = G__19987;
continue;
}
} else {
return null;
}
}
break;
}
});})(map__19961,map__19961__$1,on_success,on_error,G__19958_19972))
).catch(((function (map__19961,map__19961__$1,on_success,on_error,G__19958_19972){
return (function (error){
var G__19971 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_error,error);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19971) : re_frame.core.dispatch.call(null,G__19971));
});})(map__19961,map__19961__$1,on_success,on_error,G__19958_19972))
);
});})(G__19958_19972))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19958_19972,G__19959_19973) : re_frame.core.reg_fx.call(null,G__19958_19972,G__19959_19973));
transit_decoder.core.ClipboardButton = (function transit_decoder$core$ClipboardButton(){
var clipboard_api_supported_QMARK_ = (typeof navigator !== 'undefined') && (typeof navigator.clipboard !== 'undefined');
if(clipboard_api_supported_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,(((!(cljs.core.fn_QMARK_(transit_decoder.css_classes.convert_button))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["herb error in \"","transit-decoder.core","\", the first argument to ","<",cljs.core.name(cljs.core.cst$kw$class)," must be a function."].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,cljs.core.cst$sym$css_SLASH_convert_DASH_button,cljs.core.cst$kw$namespace,"transit-decoder.core"], null))})():(((!(cljs.core.map_QMARK_(transit_decoder.css_classes.convert_button()))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["herb error: style function \"","transit-decoder.core","/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$css_SLASH_convert_DASH_button),"\" needs to return a map."].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$function,cljs.core.cst$sym$css_SLASH_convert_DASH_button,cljs.core.cst$kw$return_DASH_value,transit_decoder.css_classes.convert_button(),cljs.core.cst$kw$namespace,"transit-decoder.core"], null))})():herb.impl.with_style_BANG_(cljs.core.cst$kw$class,cljs.core.cst$sym$css_SLASH_convert_DASH_button,"transit-decoder.core",transit_decoder.css_classes.convert_button)
)),cljs.core.cst$kw$on_DASH_click,((function (clipboard_api_supported_QMARK_){
return (function (){
var G__19988 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$click_DASH_on_DASH_convert_DASH_from_DASH_clipboard], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19988) : re_frame.core.dispatch.call(null,G__19988));
});})(clipboard_api_supported_QMARK_))
], null),"Paste and convert"], null);
} else {
return null;
}
});
transit_decoder.core.ConvertButton = (function transit_decoder$core$ConvertButton(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,(function (){
var G__19989 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$click_DASH_on_DASH_convert], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19989) : re_frame.core.dispatch.call(null,G__19989));
}),cljs.core.cst$kw$class,(((!(cljs.core.fn_QMARK_(transit_decoder.css_classes.convert_button))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["herb error in \"","transit-decoder.core","\", the first argument to ","<",cljs.core.name(cljs.core.cst$kw$class)," must be a function."].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,cljs.core.cst$sym$css_SLASH_convert_DASH_button,cljs.core.cst$kw$namespace,"transit-decoder.core"], null))})():(((!(cljs.core.map_QMARK_(transit_decoder.css_classes.convert_button()))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["herb error: style function \"","transit-decoder.core","/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$css_SLASH_convert_DASH_button),"\" needs to return a map."].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$function,cljs.core.cst$sym$css_SLASH_convert_DASH_button,cljs.core.cst$kw$return_DASH_value,transit_decoder.css_classes.convert_button(),cljs.core.cst$kw$namespace,"transit-decoder.core"], null))})():herb.impl.with_style_BANG_(cljs.core.cst$kw$class,cljs.core.cst$sym$css_SLASH_convert_DASH_button,"transit-decoder.core",transit_decoder.css_classes.convert_button)
))], null),"Convert Transit -> Clojure"], null);
});
transit_decoder.core.ActionButtons = (function transit_decoder$core$ActionButtons(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transit_decoder.core.ConvertButton], null)," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transit_decoder.core.ClipboardButton], null)], null);
});
transit_decoder.core.app = (function transit_decoder$core$app(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Transit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.deref((function (){var G__19991 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$transit_DASH_str], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19991) : re_frame.core.subscribe.call(null,G__19991));
})()),cljs.core.cst$kw$class,(((!(cljs.core.fn_QMARK_(transit_decoder.css_classes.transit_input))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["herb error in \"","transit-decoder.core","\", the first argument to ","<",cljs.core.name(cljs.core.cst$kw$class)," must be a function."].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,cljs.core.cst$sym$css_SLASH_transit_DASH_input,cljs.core.cst$kw$namespace,"transit-decoder.core"], null))})():(((!(cljs.core.map_QMARK_(transit_decoder.css_classes.transit_input()))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["herb error: style function \"","transit-decoder.core","/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$css_SLASH_transit_DASH_input),"\" needs to return a map."].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$function,cljs.core.cst$sym$css_SLASH_transit_DASH_input,cljs.core.cst$kw$return_DASH_value,transit_decoder.css_classes.transit_input(),cljs.core.cst$kw$namespace,"transit-decoder.core"], null))})():herb.impl.with_style_BANG_(cljs.core.cst$kw$class,cljs.core.cst$sym$css_SLASH_transit_DASH_input,"transit-decoder.core",transit_decoder.css_classes.transit_input)
)),cljs.core.cst$kw$on_DASH_change,(function (p1__19990_SHARP_){
var G__19992 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$change_DASH_transit_DASH_str,p1__19990_SHARP_.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19992) : re_frame.core.dispatch.call(null,G__19992));
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transit_decoder.core.ActionButtons], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Clojure"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(((!(cljs.core.fn_QMARK_(transit_decoder.css_classes.clojure_output))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["herb error in \"","transit-decoder.core","\", the first argument to ","<",cljs.core.name(cljs.core.cst$kw$class)," must be a function."].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,cljs.core.cst$sym$css_SLASH_clojure_DASH_output,cljs.core.cst$kw$namespace,"transit-decoder.core"], null))})():(((!(cljs.core.map_QMARK_(transit_decoder.css_classes.clojure_output()))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["herb error: style function \"","transit-decoder.core","/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$css_SLASH_clojure_DASH_output),"\" needs to return a map."].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$function,cljs.core.cst$sym$css_SLASH_clojure_DASH_output,cljs.core.cst$kw$return_DASH_value,transit_decoder.css_classes.clojure_output(),cljs.core.cst$kw$namespace,"transit-decoder.core"], null))})():herb.impl.with_style_BANG_(cljs.core.cst$kw$class,cljs.core.cst$sym$css_SLASH_clojure_DASH_output,"transit-decoder.core",transit_decoder.css_classes.clojure_output)
))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,cljs.core.deref((function (){var G__19993 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clojure_DASH_str], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19993) : re_frame.core.subscribe.call(null,G__19993));
})())], null)], null)], null)], null)], null);
});
transit_decoder.core.mount = (function transit_decoder$core$mount(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transit_decoder.core.app], null),document.getElementById("app"));
});
transit_decoder.core.re_render = (function transit_decoder$core$re_render(){
return transit_decoder.core.mount();
});
if((typeof transit_decoder !== 'undefined') && (typeof transit_decoder.core !== 'undefined') && (typeof transit_decoder.core.start_up !== 'undefined')){
} else {
transit_decoder.core.start_up = (function (){
var G__19994_19995 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__19994_19995) : re_frame.core.dispatch_sync.call(null,G__19994_19995));

transit_decoder.core.mount();

return true;
})()
;
}
