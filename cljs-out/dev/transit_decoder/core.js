// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('transit_decoder.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.dom');
goog.require('re_frame.core');
goog.require('transit_decoder.events');
goog.require('transit_decoder.db');
goog.require('transit_decoder.css_classes');
goog.require('herb.core');
transit_decoder.core.ClipboardButton = (function transit_decoder$core$ClipboardButton(){
var clipboard_api_supported_QMARK_ = (typeof navigator !== 'undefined') && (typeof navigator.clipboard !== 'undefined');
if(clipboard_api_supported_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,(((!(cljs.core.fn_QMARK_(transit_decoder.css_classes.convert_button))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["herb error in \"","transit-decoder.core","\", the first argument to ","<",cljs.core.name(cljs.core.cst$kw$class)," must be a function."].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,cljs.core.cst$sym$css_SLASH_convert_DASH_button,cljs.core.cst$kw$namespace,"transit-decoder.core"], null))})():(((!(cljs.core.map_QMARK_(transit_decoder.css_classes.convert_button()))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["herb error: style function \"","transit-decoder.core","/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$css_SLASH_convert_DASH_button),"\" needs to return a map."].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$function,cljs.core.cst$sym$css_SLASH_convert_DASH_button,cljs.core.cst$kw$return_DASH_value,transit_decoder.css_classes.convert_button(),cljs.core.cst$kw$namespace,"transit-decoder.core"], null))})():herb.impl.with_style_BANG_(cljs.core.cst$kw$class,cljs.core.cst$sym$css_SLASH_convert_DASH_button,"transit-decoder.core",transit_decoder.css_classes.convert_button)
)),cljs.core.cst$kw$on_DASH_click,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$click_DASH_on_DASH_convert_DASH_from_DASH_clipboard], null));
})], null),"Paste and convert"], null);
} else {
return null;
}
});
transit_decoder.core.ConvertButton = (function transit_decoder$core$ConvertButton(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_click,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$click_DASH_on_DASH_convert], null));
}),cljs.core.cst$kw$disabled,cljs.core.deref(transit_decoder.db.transit_string_empty_QMARK__STAR_),cljs.core.cst$kw$class,(((!(cljs.core.fn_QMARK_(transit_decoder.css_classes.convert_button))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["herb error in \"","transit-decoder.core","\", the first argument to ","<",cljs.core.name(cljs.core.cst$kw$class)," must be a function."].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,cljs.core.cst$sym$css_SLASH_convert_DASH_button,cljs.core.cst$kw$namespace,"transit-decoder.core"], null))})():(((!(cljs.core.map_QMARK_(transit_decoder.css_classes.convert_button()))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["herb error: style function \"","transit-decoder.core","/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$css_SLASH_convert_DASH_button),"\" needs to return a map."].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$function,cljs.core.cst$sym$css_SLASH_convert_DASH_button,cljs.core.cst$kw$return_DASH_value,transit_decoder.css_classes.convert_button(),cljs.core.cst$kw$namespace,"transit-decoder.core"], null))})():herb.impl.with_style_BANG_(cljs.core.cst$kw$class,cljs.core.cst$sym$css_SLASH_convert_DASH_button,"transit-decoder.core",transit_decoder.css_classes.convert_button)
))], null),"Convert Transit -> Clojure"], null);
});
transit_decoder.core.ActionButtons = (function transit_decoder$core$ActionButtons(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transit_decoder.core.ConvertButton], null)," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transit_decoder.core.ClipboardButton], null)], null);
});
transit_decoder.core.app = (function transit_decoder$core$app(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Transit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.deref(transit_decoder.db.transit_str_STAR_),cljs.core.cst$kw$class,(((!(cljs.core.fn_QMARK_(transit_decoder.css_classes.transit_input))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["herb error in \"","transit-decoder.core","\", the first argument to ","<",cljs.core.name(cljs.core.cst$kw$class)," must be a function."].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,cljs.core.cst$sym$css_SLASH_transit_DASH_input,cljs.core.cst$kw$namespace,"transit-decoder.core"], null))})():(((!(cljs.core.map_QMARK_(transit_decoder.css_classes.transit_input()))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["herb error: style function \"","transit-decoder.core","/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$css_SLASH_transit_DASH_input),"\" needs to return a map."].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$function,cljs.core.cst$sym$css_SLASH_transit_DASH_input,cljs.core.cst$kw$return_DASH_value,transit_decoder.css_classes.transit_input(),cljs.core.cst$kw$namespace,"transit-decoder.core"], null))})():herb.impl.with_style_BANG_(cljs.core.cst$kw$class,cljs.core.cst$sym$css_SLASH_transit_DASH_input,"transit-decoder.core",transit_decoder.css_classes.transit_input)
)),cljs.core.cst$kw$on_DASH_change,(function (p1__19826_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$change_DASH_transit_DASH_str,p1__19826_SHARP_.target.value], null));
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transit_decoder.core.ActionButtons], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Clojure"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(((!(cljs.core.fn_QMARK_(transit_decoder.css_classes.clojure_output))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["herb error in \"","transit-decoder.core","\", the first argument to ","<",cljs.core.name(cljs.core.cst$kw$class)," must be a function."].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,cljs.core.cst$sym$css_SLASH_clojure_DASH_output,cljs.core.cst$kw$namespace,"transit-decoder.core"], null))})():(((!(cljs.core.map_QMARK_(transit_decoder.css_classes.clojure_output()))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["herb error: style function \"","transit-decoder.core","/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$css_SLASH_clojure_DASH_output),"\" needs to return a map."].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$function,cljs.core.cst$sym$css_SLASH_clojure_DASH_output,cljs.core.cst$kw$return_DASH_value,transit_decoder.css_classes.clojure_output(),cljs.core.cst$kw$namespace,"transit-decoder.core"], null))})():herb.impl.with_style_BANG_(cljs.core.cst$kw$class,cljs.core.cst$sym$css_SLASH_clojure_DASH_output,"transit-decoder.core",transit_decoder.css_classes.clojure_output)
))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,cljs.core.deref(transit_decoder.db.clojure_str_STAR_)], null)], null)], null)], null)], null);
});
transit_decoder.core.mount = (function transit_decoder$core$mount(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transit_decoder.core.app], null),document.getElementById("app"));
});
transit_decoder.core.re_render = (function transit_decoder$core$re_render(){
return transit_decoder.core.mount();
});
if((typeof transit_decoder !== 'undefined') && (typeof transit_decoder.core !== 'undefined') && (typeof transit_decoder.core.start_up !== 'undefined')){
} else {
transit_decoder.core.start_up = (function (){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize], null));

transit_decoder.core.mount();

return true;
})()
;
}
