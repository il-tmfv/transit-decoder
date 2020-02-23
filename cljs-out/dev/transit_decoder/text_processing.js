// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('transit_decoder.text_processing');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('module$home$runner$work$transit_decoder$transit_decoder$node_modules$prismjs$components$prism_core');
goog.require('module$home$runner$work$transit_decoder$transit_decoder$node_modules$prismjs$components$prism_clojure');
goog.require('cljs.pprint');
goog.require('cognitect.transit');
transit_decoder.text_processing.clojure_lang = module$home$runner$work$transit_decoder$transit_decoder$node_modules$prismjs$components$prism_core["default"].languages.clojure;
transit_decoder.text_processing.read_transit = (function transit_decoder$text_processing$read_transit(input){
return cognitect.transit.read(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json),input);
});
transit_decoder.text_processing.prettify_cljs_string = (function transit_decoder$text_processing$prettify_cljs_string(input){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19568_19572 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19569_19573 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19570_19574 = true;
var _STAR_print_fn_STAR__temp_val__19571_19575 = ((function (_STAR_print_newline_STAR__orig_val__19568_19572,_STAR_print_fn_STAR__orig_val__19569_19573,_STAR_print_newline_STAR__temp_val__19570_19574,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__19568_19572,_STAR_print_fn_STAR__orig_val__19569_19573,_STAR_print_newline_STAR__temp_val__19570_19574,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19570_19574;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19571_19575;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(input);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19569_19573;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19568_19572;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});
transit_decoder.text_processing.highlight_input = (function transit_decoder$text_processing$highlight_input(input,lang){
return module$home$runner$work$transit_decoder$transit_decoder$node_modules$prismjs$components$prism_core["default"].highlight(input,lang);
});
transit_decoder.text_processing.prettify_and_highlight_clojure_transit = (function transit_decoder$text_processing$prettify_and_highlight_clojure_transit(input_transit){
return transit_decoder.text_processing.highlight_input(transit_decoder.text_processing.prettify_cljs_string(transit_decoder.text_processing.read_transit(input_transit)),transit_decoder.text_processing.clojure_lang);
});
