// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
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
var args__4736__auto__ = [];
var len__4730__auto___15253 = arguments.length;
var i__4731__auto___15254 = (0);
while(true){
if((i__4731__auto___15254 < len__4730__auto___15253)){
args__4736__auto__.push((arguments[i__4731__auto___15254]));

var G__15255 = (i__4731__auto___15254 + (1));
i__4731__auto___15254 = G__15255;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__15256__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__15256 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__15257__i = 0, G__15257__a = new Array(arguments.length -  0);
while (G__15257__i < G__15257__a.length) {G__15257__a[G__15257__i] = arguments[G__15257__i + 0]; ++G__15257__i;}
  children = new cljs.core.IndexedSeq(G__15257__a,0,null);
} 
return G__15256__delegate.call(this,children);};
G__15256.cljs$lang$maxFixedArity = 0;
G__15256.cljs$lang$applyTo = (function (arglist__15258){
var children = cljs.core.seq(arglist__15258);
return G__15256__delegate(children);
});
G__15256.cljs$core$IFn$_invoke$arity$variadic = G__15256__delegate;
return G__15256;
})()
;
}
});

garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.rule.cljs$lang$applyTo = (function (seq15251){
var G__15252 = cljs.core.first(seq15251);
var seq15251__$1 = cljs.core.next(seq15251);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15252,seq15251__$1);
});

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__15259__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__15259 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15260__i = 0, G__15260__a = new Array(arguments.length -  0);
while (G__15260__i < G__15260__a.length) {G__15260__a[G__15260__i] = arguments[G__15260__i + 0]; ++G__15260__i;}
  args = new cljs.core.IndexedSeq(G__15260__a,0,null);
} 
return G__15259__delegate.call(this,args);};
G__15259.cljs$lang$maxFixedArity = 0;
G__15259.cljs$lang$applyTo = (function (arglist__15261){
var args = cljs.core.seq(arglist__15261);
return G__15259__delegate(args);
});
G__15259.cljs$core$IFn$_invoke$arity$variadic = G__15259__delegate;
return G__15259;
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
var args__4736__auto__ = [];
var len__4730__auto___15263 = arguments.length;
var i__4731__auto___15264 = (0);
while(true){
if((i__4731__auto___15264 < len__4730__auto___15263)){
args__4736__auto__.push((arguments[i__4731__auto___15264]));

var G__15265 = (i__4731__auto___15264 + (1));
i__4731__auto___15264 = G__15265;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
});

garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq15262){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15262));
});

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__15269 = arguments.length;
switch (G__15269) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___15271 = arguments.length;
var i__4731__auto___15272 = (0);
while(true){
if((i__4731__auto___15272 < len__4730__auto___15271)){
args_arr__4751__auto__.push((arguments[i__4731__auto___15272]));

var G__15273 = (i__4731__auto___15272 + (1));
i__4731__auto___15272 = G__15273;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule(cljs.core.cst$kw$import,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,url,cljs.core.cst$kw$media_DASH_queries,null], null));
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule(cljs.core.cst$kw$import,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,url,cljs.core.cst$kw$media_DASH_queries,media_queries], null));
});

/** @this {Function} */
garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq15267){
var G__15268 = cljs.core.first(seq15267);
var seq15267__$1 = cljs.core.next(seq15267);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15268,seq15267__$1);
});

garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15276 = arguments.length;
var i__4731__auto___15277 = (0);
while(true){
if((i__4731__auto___15277 < len__4730__auto___15276)){
args__4736__auto__.push((arguments[i__4731__auto___15277]));

var G__15278 = (i__4731__auto___15277 + (1));
i__4731__auto___15277 = G__15278;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule(cljs.core.cst$kw$media,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$media_DASH_queries,media_queries,cljs.core.cst$kw$rules,rules], null));
});

garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq15274){
var G__15275 = cljs.core.first(seq15274);
var seq15274__$1 = cljs.core.next(seq15274);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15275,seq15274__$1);
});

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15281 = arguments.length;
var i__4731__auto___15282 = (0);
while(true){
if((i__4731__auto___15282 < len__4730__auto___15281)){
args__4736__auto__.push((arguments[i__4731__auto___15282]));

var G__15283 = (i__4731__auto___15282 + (1));
i__4731__auto___15282 = G__15283;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule(cljs.core.cst$kw$feature,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$feature_DASH_queries,feature_queries,cljs.core.cst$kw$rules,rules], null));
});

garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq15279){
var G__15280 = cljs.core.first(seq15279);
var seq15279__$1 = cljs.core.next(seq15279);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15280,seq15279__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15286 = arguments.length;
var i__4731__auto___15287 = (0);
while(true){
if((i__4731__auto___15287 < len__4730__auto___15286)){
args__4736__auto__.push((arguments[i__4731__auto___15287]));

var G__15288 = (i__4731__auto___15287 + (1));
i__4731__auto___15287 = G__15288;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule(cljs.core.cst$kw$keyframes,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$identifier,identifier,cljs.core.cst$kw$frames,frames], null));
});

garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq15284){
var G__15285 = cljs.core.first(seq15284);
var seq15284__$1 = cljs.core.next(seq15284);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15285,seq15284__$1);
});

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
