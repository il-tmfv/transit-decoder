// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
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
var args__4835__auto__ = [];
var len__4829__auto___14967 = arguments.length;
var i__4830__auto___14968 = (0);
while(true){
if((i__4830__auto___14968 < len__4829__auto___14967)){
args__4835__auto__.push((arguments[i__4830__auto___14968]));

var G__14969 = (i__4830__auto___14968 + (1));
i__4830__auto___14968 = G__14969;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (((typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__14970__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__14970 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__14971__i = 0, G__14971__a = new Array(arguments.length -  0);
while (G__14971__i < G__14971__a.length) {G__14971__a[G__14971__i] = arguments[G__14971__i + 0]; ++G__14971__i;}
  children = new cljs.core.IndexedSeq(G__14971__a,0,null);
} 
return G__14970__delegate.call(this,children);};
G__14970.cljs$lang$maxFixedArity = 0;
G__14970.cljs$lang$applyTo = (function (arglist__14972){
var children = cljs.core.seq(arglist__14972);
return G__14970__delegate(children);
});
G__14970.cljs$core$IFn$_invoke$arity$variadic = G__14970__delegate;
return G__14970;
})()
;
}
}));

(garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.rule.cljs$lang$applyTo = (function (seq14965){
var G__14966 = cljs.core.first(seq14965);
var seq14965__$1 = cljs.core.next(seq14965);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14966,seq14965__$1);
}));

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__14973__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__14973 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14974__i = 0, G__14974__a = new Array(arguments.length -  0);
while (G__14974__i < G__14974__a.length) {G__14974__a[G__14974__i] = arguments[G__14974__i + 0]; ++G__14974__i;}
  args = new cljs.core.IndexedSeq(G__14974__a,0,null);
} 
return G__14973__delegate.call(this,args);};
G__14973.cljs$lang$maxFixedArity = 0;
G__14973.cljs$lang$applyTo = (function (arglist__14975){
var args = cljs.core.seq(arglist__14975);
return G__14973__delegate(args);
});
G__14973.cljs$core$IFn$_invoke$arity$variadic = G__14973__delegate;
return G__14973;
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
var args__4835__auto__ = [];
var len__4829__auto___14977 = arguments.length;
var i__4830__auto___14978 = (0);
while(true){
if((i__4830__auto___14978 < len__4829__auto___14977)){
args__4835__auto__.push((arguments[i__4830__auto___14978]));

var G__14979 = (i__4830__auto___14978 + (1));
i__4830__auto___14978 = G__14979;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq14976){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14976));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__14983 = arguments.length;
switch (G__14983) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4850__auto__ = [];
var len__4829__auto___14985 = arguments.length;
var i__4830__auto___14986 = (0);
while(true){
if((i__4830__auto___14986 < len__4829__auto___14985)){
args_arr__4850__auto__.push((arguments[i__4830__auto___14986]));

var G__14987 = (i__4830__auto___14986 + (1));
i__4830__auto___14986 = G__14987;
continue;
} else {
}
break;
}

var argseq__4851__auto__ = (new cljs.core.IndexedSeq(args_arr__4850__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4851__auto__);

}
});

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule(cljs.core.cst$kw$import,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,url,cljs.core.cst$kw$media_DASH_queries,null], null));
}));

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule(cljs.core.cst$kw$import,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,url,cljs.core.cst$kw$media_DASH_queries,media_queries], null));
}));

/** @this {Function} */
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq14981){
var G__14982 = cljs.core.first(seq14981);
var seq14981__$1 = cljs.core.next(seq14981);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14982,seq14981__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4835__auto__ = [];
var len__4829__auto___14990 = arguments.length;
var i__4830__auto___14991 = (0);
while(true){
if((i__4830__auto___14991 < len__4829__auto___14990)){
args__4835__auto__.push((arguments[i__4830__auto___14991]));

var G__14992 = (i__4830__auto___14991 + (1));
i__4830__auto___14991 = G__14992;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule(cljs.core.cst$kw$media,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$media_DASH_queries,media_queries,cljs.core.cst$kw$rules,rules], null));
}));

(garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq14988){
var G__14989 = cljs.core.first(seq14988);
var seq14988__$1 = cljs.core.next(seq14988);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14989,seq14988__$1);
}));

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4835__auto__ = [];
var len__4829__auto___14995 = arguments.length;
var i__4830__auto___14996 = (0);
while(true){
if((i__4830__auto___14996 < len__4829__auto___14995)){
args__4835__auto__.push((arguments[i__4830__auto___14996]));

var G__14997 = (i__4830__auto___14996 + (1));
i__4830__auto___14996 = G__14997;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule(cljs.core.cst$kw$feature,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$feature_DASH_queries,feature_queries,cljs.core.cst$kw$rules,rules], null));
}));

(garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq14993){
var G__14994 = cljs.core.first(seq14993);
var seq14993__$1 = cljs.core.next(seq14993);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14994,seq14993__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4835__auto__ = [];
var len__4829__auto___15000 = arguments.length;
var i__4830__auto___15001 = (0);
while(true){
if((i__4830__auto___15001 < len__4829__auto___15000)){
args__4835__auto__.push((arguments[i__4830__auto___15001]));

var G__15002 = (i__4830__auto___15001 + (1));
i__4830__auto___15001 = G__15002;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule(cljs.core.cst$kw$keyframes,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$identifier,identifier,cljs.core.cst$kw$frames,frames], null));
}));

(garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq14998){
var G__14999 = cljs.core.first(seq14998);
var seq14998__$1 = cljs.core.next(seq14998);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14999,seq14998__$1);
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
