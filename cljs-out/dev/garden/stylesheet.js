// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('garden.stylesheet');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('garden.util');
goog.require('garden.color');
goog.require('garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__4824__auto__ = [];
var len__4818__auto___14901 = arguments.length;
var i__4819__auto___14902 = (0);
while(true){
if((i__4819__auto___14902 < len__4818__auto___14901)){
args__4824__auto__.push((arguments[i__4819__auto___14902]));

var G__14903 = (i__4819__auto___14902 + (1));
i__4819__auto___14902 = G__14903;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (((typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__14904__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__14904 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__14905__i = 0, G__14905__a = new Array(arguments.length -  0);
while (G__14905__i < G__14905__a.length) {G__14905__a[G__14905__i] = arguments[G__14905__i + 0]; ++G__14905__i;}
  children = new cljs.core.IndexedSeq(G__14905__a,0,null);
} 
return G__14904__delegate.call(this,children);};
G__14904.cljs$lang$maxFixedArity = 0;
G__14904.cljs$lang$applyTo = (function (arglist__14906){
var children = cljs.core.seq(arglist__14906);
return G__14904__delegate(children);
});
G__14904.cljs$core$IFn$_invoke$arity$variadic = G__14904__delegate;
return G__14904;
})()
;
}
}));

(garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.rule.cljs$lang$applyTo = (function (seq14899){
var G__14900 = cljs.core.first(seq14899);
var seq14899__$1 = cljs.core.next(seq14899);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14900,seq14899__$1);
}));

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__14907__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__14907 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14908__i = 0, G__14908__a = new Array(arguments.length -  0);
while (G__14908__i < G__14908__a.length) {G__14908__a[G__14908__i] = arguments[G__14908__i + 0]; ++G__14908__i;}
  args = new cljs.core.IndexedSeq(G__14908__a,0,null);
} 
return G__14907__delegate.call(this,args);};
G__14907.cljs$lang$maxFixedArity = 0;
G__14907.cljs$lang$applyTo = (function (arglist__14909){
var args = cljs.core.seq(arglist__14909);
return G__14907__delegate(args);
});
G__14907.cljs$core$IFn$_invoke$arity$variadic = G__14907__delegate;
return G__14907;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__4824__auto__ = [];
var len__4818__auto___14911 = arguments.length;
var i__4819__auto___14912 = (0);
while(true){
if((i__4819__auto___14912 < len__4818__auto___14911)){
args__4824__auto__.push((arguments[i__4819__auto___14912]));

var G__14913 = (i__4819__auto___14912 + (1));
i__4819__auto___14912 = G__14913;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq14910){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14910));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__14917 = arguments.length;
switch (G__14917) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___14919 = arguments.length;
var i__4819__auto___14920 = (0);
while(true){
if((i__4819__auto___14920 < len__4818__auto___14919)){
args_arr__4839__auto__.push((arguments[i__4819__auto___14920]));

var G__14921 = (i__4819__auto___14920 + (1));
i__4819__auto___14920 = G__14921;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4840__auto__);

}
});

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule(cljs.core.cst$kw$import,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,url,cljs.core.cst$kw$media_DASH_queries,null], null));
}));

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule(cljs.core.cst$kw$import,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,url,cljs.core.cst$kw$media_DASH_queries,media_queries], null));
}));

/** @this {Function} */
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq14915){
var G__14916 = cljs.core.first(seq14915);
var seq14915__$1 = cljs.core.next(seq14915);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14916,seq14915__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4824__auto__ = [];
var len__4818__auto___14924 = arguments.length;
var i__4819__auto___14925 = (0);
while(true){
if((i__4819__auto___14925 < len__4818__auto___14924)){
args__4824__auto__.push((arguments[i__4819__auto___14925]));

var G__14926 = (i__4819__auto___14925 + (1));
i__4819__auto___14925 = G__14926;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule(cljs.core.cst$kw$media,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$media_DASH_queries,media_queries,cljs.core.cst$kw$rules,rules], null));
}));

(garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq14922){
var G__14923 = cljs.core.first(seq14922);
var seq14922__$1 = cljs.core.next(seq14922);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14923,seq14922__$1);
}));

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4824__auto__ = [];
var len__4818__auto___14929 = arguments.length;
var i__4819__auto___14930 = (0);
while(true){
if((i__4819__auto___14930 < len__4818__auto___14929)){
args__4824__auto__.push((arguments[i__4819__auto___14930]));

var G__14931 = (i__4819__auto___14930 + (1));
i__4819__auto___14930 = G__14931;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule(cljs.core.cst$kw$feature,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$feature_DASH_queries,feature_queries,cljs.core.cst$kw$rules,rules], null));
}));

(garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq14927){
var G__14928 = cljs.core.first(seq14927);
var seq14927__$1 = cljs.core.next(seq14927);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14928,seq14927__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4824__auto__ = [];
var len__4818__auto___14934 = arguments.length;
var i__4819__auto___14935 = (0);
while(true){
if((i__4819__auto___14935 < len__4818__auto___14934)){
args__4824__auto__.push((arguments[i__4819__auto___14935]));

var G__14936 = (i__4819__auto___14935 + (1));
i__4819__auto___14935 = G__14936;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule(cljs.core.cst$kw$keyframes,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$identifier,identifier,cljs.core.cst$kw$frames,frames], null));
}));

(garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq14932){
var G__14933 = cljs.core.first(seq14932);
var seq14932__$1 = cljs.core.next(seq14932);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14933,seq14932__$1);
}));

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});
