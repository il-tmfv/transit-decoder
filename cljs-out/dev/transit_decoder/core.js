// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('transit_decoder.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('module$home$runner$work$transit_decoder$transit_decoder$node_modules$prismjs$components$prism_core');
goog.require('module$home$runner$work$transit_decoder$transit_decoder$node_modules$prismjs$components$prism_clojure');
goog.require('cljs.pprint');
goog.require('herb.core');
goog.require('transit_decoder.css_classes');
goog.require('cognitect.transit');
if((typeof transit_decoder !== 'undefined') && (typeof transit_decoder.core !== 'undefined') && (typeof transit_decoder.core.app_state !== 'undefined')){
} else {
transit_decoder.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transit,"",cljs.core.cst$kw$clojure,""], null));
}
if((typeof transit_decoder !== 'undefined') && (typeof transit_decoder.core !== 'undefined') && (typeof transit_decoder.core.transit_str_STAR_ !== 'undefined')){
} else {
transit_decoder.core.transit_str_STAR_ = reagent.core.cursor(transit_decoder.core.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$transit], null));
}
if((typeof transit_decoder !== 'undefined') && (typeof transit_decoder.core !== 'undefined') && (typeof transit_decoder.core.clojure_str_STAR_ !== 'undefined')){
} else {
transit_decoder.core.clojure_str_STAR_ = reagent.core.cursor(transit_decoder.core.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clojure], null));
}
transit_decoder.core.convert = (function transit_decoder$core$convert(){
var converted_data = cognitect.transit.read(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json),cljs.core.deref(transit_decoder.core.transit_str_STAR_));
var pretty_converted_data = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18782_18788 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18783_18789 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18784_18790 = true;
var _STAR_print_fn_STAR__temp_val__18785_18791 = ((function (_STAR_print_newline_STAR__orig_val__18782_18788,_STAR_print_fn_STAR__orig_val__18783_18789,_STAR_print_newline_STAR__temp_val__18784_18790,sb__4661__auto__,converted_data){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__18782_18788,_STAR_print_fn_STAR__orig_val__18783_18789,_STAR_print_newline_STAR__temp_val__18784_18790,sb__4661__auto__,converted_data))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18784_18790;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18785_18791;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(converted_data);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18783_18789;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18782_18788;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
var clojure_lang = module$home$runner$work$transit_decoder$transit_decoder$node_modules$prismjs$components$prism_core["default"].languages.clojure;
return cljs.core.reset_BANG_(transit_decoder.core.clojure_str_STAR_,(function (){var G__18786 = pretty_converted_data;
var G__18787 = clojure_lang;
return module$home$runner$work$transit_decoder$transit_decoder$node_modules$prismjs$components$prism_core["default"].highlight(G__18786,G__18787);
})());
});
transit_decoder.core.app = (function transit_decoder$core$app(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Transit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.deref(transit_decoder.core.transit_str_STAR_),cljs.core.cst$kw$class,(((!(cljs.core.fn_QMARK_(transit_decoder.css_classes.transit_input))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["herb error in \"","transit-decoder.core","\", the first argument to ","<",cljs.core.name(cljs.core.cst$kw$class)," must be a function."].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,cljs.core.cst$sym$css_SLASH_transit_DASH_input,cljs.core.cst$kw$namespace,"transit-decoder.core"], null))})():(((!(cljs.core.map_QMARK_(transit_decoder.css_classes.transit_input()))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["herb error: style function \"","transit-decoder.core","/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$css_SLASH_transit_DASH_input),"\" needs to return a map."].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$function,cljs.core.cst$sym$css_SLASH_transit_DASH_input,cljs.core.cst$kw$return_DASH_value,transit_decoder.css_classes.transit_input(),cljs.core.cst$kw$namespace,"transit-decoder.core"], null))})():herb.impl.with_style_BANG_(cljs.core.cst$kw$class,cljs.core.cst$sym$css_SLASH_transit_DASH_input,"transit-decoder.core",transit_decoder.css_classes.transit_input)
)),cljs.core.cst$kw$on_DASH_change,(function (p1__18792_SHARP_){
return cljs.core.reset_BANG_(transit_decoder.core.transit_str_STAR_,p1__18792_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,transit_decoder.core.convert,cljs.core.cst$kw$class,(((!(cljs.core.fn_QMARK_(transit_decoder.css_classes.convert_button))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["herb error in \"","transit-decoder.core","\", the first argument to ","<",cljs.core.name(cljs.core.cst$kw$class)," must be a function."].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,cljs.core.cst$sym$css_SLASH_convert_DASH_button,cljs.core.cst$kw$namespace,"transit-decoder.core"], null))})():(((!(cljs.core.map_QMARK_(transit_decoder.css_classes.convert_button()))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["herb error: style function \"","transit-decoder.core","/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$css_SLASH_convert_DASH_button),"\" needs to return a map."].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$function,cljs.core.cst$sym$css_SLASH_convert_DASH_button,cljs.core.cst$kw$return_DASH_value,transit_decoder.css_classes.convert_button(),cljs.core.cst$kw$namespace,"transit-decoder.core"], null))})():herb.impl.with_style_BANG_(cljs.core.cst$kw$class,cljs.core.cst$sym$css_SLASH_convert_DASH_button,"transit-decoder.core",transit_decoder.css_classes.convert_button)
))], null),"Convert Transit -> Clojure"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Clojure"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(((!(cljs.core.fn_QMARK_(transit_decoder.css_classes.clojure_output))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["herb error in \"","transit-decoder.core","\", the first argument to ","<",cljs.core.name(cljs.core.cst$kw$class)," must be a function."].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,cljs.core.cst$sym$css_SLASH_clojure_DASH_output,cljs.core.cst$kw$namespace,"transit-decoder.core"], null))})():(((!(cljs.core.map_QMARK_(transit_decoder.css_classes.clojure_output()))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["herb error: style function \"","transit-decoder.core","/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$css_SLASH_clojure_DASH_output),"\" needs to return a map."].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$function,cljs.core.cst$sym$css_SLASH_clojure_DASH_output,cljs.core.cst$kw$return_DASH_value,transit_decoder.css_classes.clojure_output(),cljs.core.cst$kw$namespace,"transit-decoder.core"], null))})():herb.impl.with_style_BANG_(cljs.core.cst$kw$class,cljs.core.cst$sym$css_SLASH_clojure_DASH_output,"transit-decoder.core",transit_decoder.css_classes.clojure_output)
))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,cljs.core.deref(transit_decoder.core.clojure_str_STAR_)], null)], null)], null)], null)], null);
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
transit_decoder.core.mount();

return true;
})()
;
}
