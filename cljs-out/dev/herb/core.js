// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('herb.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('herb.impl');
goog.require('herb.spec');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('herb.runtime');
/**
 * Initialize herb, takes a map of options:
 *   :vendors - a vector of vendor prefixes, ie [:webkit :moz]
 *   :auto-prefix - A set of CSS properties to auto prefix, ie #{:transition :border-radius} 
 */
herb.core.init_BANG_ = (function herb$core$init_BANG_(options){
var parsed = cljs.spec.alpha.conform(cljs.core.cst$kw$herb$spec_SLASH_options,options);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parsed,cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid input",cljs.spec.alpha.explain_data(cljs.core.cst$kw$herb$spec_SLASH_options,options));
} else {
return cljs.core.reset_BANG_(herb.runtime.options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$vendors,herb.impl.convert_vendors(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (parsed){
return (function (p__16687){
var vec__16688 = p__16687;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16688,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16688,(1),null);
return v;
});})(parsed))
,cljs.core.cst$kw$vendors.cljs$core$IFn$_invoke$arity$1(parsed))),cljs.core.cst$kw$auto_DASH_prefix,cljs.core.cst$kw$auto_DASH_prefix.cljs$core$IFn$_invoke$arity$1(options)], null));
}
});
/**
 * Joins multiple classes together, filtering out nils:
 *   ```clojure
 *   (join (<class fn-1) (<class fn-2))
 *   ```
 */
herb.core.join = (function herb$core$join(var_args){
var args__4736__auto__ = [];
var len__4730__auto___16692 = arguments.length;
var i__4731__auto___16693 = (0);
while(true){
if((i__4731__auto___16693 < len__4730__auto___16692)){
args__4736__auto__.push((arguments[i__4731__auto___16693]));

var G__16694 = (i__4731__auto___16693 + (1));
i__4731__auto___16693 = G__16694;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return herb.core.join.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

herb.core.join.cljs$core$IFn$_invoke$arity$variadic = (function (classes){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$herb$spec_SLASH_classes,classes)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,classes));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("join takes one or more strings as arguments",cljs.spec.alpha.explain_data(cljs.core.cst$kw$herb$spec_SLASH_classes,classes));
}
});

herb.core.join.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
herb.core.join.cljs$lang$applyTo = (function (seq16691){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16691));
});

