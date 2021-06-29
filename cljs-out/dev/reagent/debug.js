// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__16468__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__16468 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16469__i = 0, G__16469__a = new Array(arguments.length -  0);
while (G__16469__i < G__16469__a.length) {G__16469__a[G__16469__i] = arguments[G__16469__i + 0]; ++G__16469__i;}
  args = new cljs.core.IndexedSeq(G__16469__a,0,null);
} 
return G__16468__delegate.call(this,args);};
G__16468.cljs$lang$maxFixedArity = 0;
G__16468.cljs$lang$applyTo = (function (arglist__16470){
var args = cljs.core.seq(arglist__16470);
return G__16468__delegate(args);
});
G__16468.cljs$core$IFn$_invoke$arity$variadic = G__16468__delegate;
return G__16468;
})()
);

(o.error = (function() { 
var G__16471__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__16471 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16472__i = 0, G__16472__a = new Array(arguments.length -  0);
while (G__16472__i < G__16472__a.length) {G__16472__a[G__16472__i] = arguments[G__16472__i + 0]; ++G__16472__i;}
  args = new cljs.core.IndexedSeq(G__16472__a,0,null);
} 
return G__16471__delegate.call(this,args);};
G__16471.cljs$lang$maxFixedArity = 0;
G__16471.cljs$lang$applyTo = (function (arglist__16473){
var args = cljs.core.seq(arglist__16473);
return G__16471__delegate(args);
});
G__16471.cljs$core$IFn$_invoke$arity$variadic = G__16471__delegate;
return G__16471;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
