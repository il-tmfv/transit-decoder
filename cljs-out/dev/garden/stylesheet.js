// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
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
var args__4742__auto__ = [];
var len__4736__auto___15558 = arguments.length;
var i__4737__auto___15559 = (0);
while(true){
if((i__4737__auto___15559 < len__4736__auto___15558)){
args__4742__auto__.push((arguments[i__4737__auto___15559]));

var G__15560 = (i__4737__auto___15559 + (1));
i__4737__auto___15559 = G__15560;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__15561__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__15561 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__15562__i = 0, G__15562__a = new Array(arguments.length -  0);
while (G__15562__i < G__15562__a.length) {G__15562__a[G__15562__i] = arguments[G__15562__i + 0]; ++G__15562__i;}
  children = new cljs.core.IndexedSeq(G__15562__a,0,null);
} 
return G__15561__delegate.call(this,children);};
G__15561.cljs$lang$maxFixedArity = 0;
G__15561.cljs$lang$applyTo = (function (arglist__15563){
var children = cljs.core.seq(arglist__15563);
return G__15561__delegate(children);
});
G__15561.cljs$core$IFn$_invoke$arity$variadic = G__15561__delegate;
return G__15561;
})()
;
}
}));

(garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.rule.cljs$lang$applyTo = (function (seq15556){
var G__15557 = cljs.core.first(seq15556);
var seq15556__$1 = cljs.core.next(seq15556);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15557,seq15556__$1);
}));

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__15564__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__15564 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15565__i = 0, G__15565__a = new Array(arguments.length -  0);
while (G__15565__i < G__15565__a.length) {G__15565__a[G__15565__i] = arguments[G__15565__i + 0]; ++G__15565__i;}
  args = new cljs.core.IndexedSeq(G__15565__a,0,null);
} 
return G__15564__delegate.call(this,args);};
G__15564.cljs$lang$maxFixedArity = 0;
G__15564.cljs$lang$applyTo = (function (arglist__15566){
var args = cljs.core.seq(arglist__15566);
return G__15564__delegate(args);
});
G__15564.cljs$core$IFn$_invoke$arity$variadic = G__15564__delegate;
return G__15564;
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
var args__4742__auto__ = [];
var len__4736__auto___15568 = arguments.length;
var i__4737__auto___15569 = (0);
while(true){
if((i__4737__auto___15569 < len__4736__auto___15568)){
args__4742__auto__.push((arguments[i__4737__auto___15569]));

var G__15570 = (i__4737__auto___15569 + (1));
i__4737__auto___15569 = G__15570;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq15567){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15567));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__15574 = arguments.length;
switch (G__15574) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___15576 = arguments.length;
var i__4737__auto___15577 = (0);
while(true){
if((i__4737__auto___15577 < len__4736__auto___15576)){
args_arr__4757__auto__.push((arguments[i__4737__auto___15577]));

var G__15578 = (i__4737__auto___15577 + (1));
i__4737__auto___15577 = G__15578;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4758__auto__);

}
});

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule(cljs.core.cst$kw$import,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,url,cljs.core.cst$kw$media_DASH_queries,null], null));
}));

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule(cljs.core.cst$kw$import,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,url,cljs.core.cst$kw$media_DASH_queries,media_queries], null));
}));

/** @this {Function} */
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq15572){
var G__15573 = cljs.core.first(seq15572);
var seq15572__$1 = cljs.core.next(seq15572);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15573,seq15572__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15581 = arguments.length;
var i__4737__auto___15582 = (0);
while(true){
if((i__4737__auto___15582 < len__4736__auto___15581)){
args__4742__auto__.push((arguments[i__4737__auto___15582]));

var G__15583 = (i__4737__auto___15582 + (1));
i__4737__auto___15582 = G__15583;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule(cljs.core.cst$kw$media,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$media_DASH_queries,media_queries,cljs.core.cst$kw$rules,rules], null));
}));

(garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq15579){
var G__15580 = cljs.core.first(seq15579);
var seq15579__$1 = cljs.core.next(seq15579);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15580,seq15579__$1);
}));

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15586 = arguments.length;
var i__4737__auto___15587 = (0);
while(true){
if((i__4737__auto___15587 < len__4736__auto___15586)){
args__4742__auto__.push((arguments[i__4737__auto___15587]));

var G__15588 = (i__4737__auto___15587 + (1));
i__4737__auto___15587 = G__15588;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule(cljs.core.cst$kw$feature,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$feature_DASH_queries,feature_queries,cljs.core.cst$kw$rules,rules], null));
}));

(garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq15584){
var G__15585 = cljs.core.first(seq15584);
var seq15584__$1 = cljs.core.next(seq15584);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15585,seq15584__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15591 = arguments.length;
var i__4737__auto___15592 = (0);
while(true){
if((i__4737__auto___15592 < len__4736__auto___15591)){
args__4742__auto__.push((arguments[i__4737__auto___15592]));

var G__15593 = (i__4737__auto___15592 + (1));
i__4737__auto___15592 = G__15593;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule(cljs.core.cst$kw$keyframes,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$identifier,identifier,cljs.core.cst$kw$frames,frames], null));
}));

(garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq15589){
var G__15590 = cljs.core.first(seq15589);
var seq15589__$1 = cljs.core.next(seq15589);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15590,seq15589__$1);
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
