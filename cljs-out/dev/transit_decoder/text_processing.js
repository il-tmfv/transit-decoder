// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
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
var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19719_19723 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19720_19724 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19721_19725 = true;
var _STAR_print_fn_STAR__temp_val__19722_19726 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19721_19725);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19722_19726);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(input);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19720_19724);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19719_19723);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
});
transit_decoder.text_processing.highlight_input = (function transit_decoder$text_processing$highlight_input(input,lang){
return module$home$runner$work$transit_decoder$transit_decoder$node_modules$prismjs$components$prism_core["default"].highlight(input,lang);
});
transit_decoder.text_processing.prettify_and_highlight_clojure_transit = (function transit_decoder$text_processing$prettify_and_highlight_clojure_transit(input_transit){
return transit_decoder.text_processing.highlight_input(transit_decoder.text_processing.prettify_cljs_string(transit_decoder.text_processing.read_transit(input_transit)),transit_decoder.text_processing.clojure_lang);
});
