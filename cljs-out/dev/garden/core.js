// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15204 = arguments.length;
var i__4731__auto___15205 = (0);
while(true){
if((i__4731__auto___15205 < len__4730__auto___15204)){
args__4736__auto__.push((arguments[i__4731__auto___15205]));

var G__15206 = (i__4731__auto___15205 + (1));
i__4731__auto___15205 = G__15206;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
garden.core.css.cljs$lang$applyTo = (function (seq15203){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15203));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15208 = arguments.length;
var i__4731__auto___15209 = (0);
while(true){
if((i__4731__auto___15209 < len__4730__auto___15208)){
args__4736__auto__.push((arguments[i__4731__auto___15209]));

var G__15210 = (i__4731__auto___15209 + (1));
i__4731__auto___15209 = G__15210;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style(maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
garden.core.style.cljs$lang$applyTo = (function (seq15207){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15207));
});

