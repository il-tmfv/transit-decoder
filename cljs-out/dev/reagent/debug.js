// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
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
var G__16402__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__16402 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16403__i = 0, G__16403__a = new Array(arguments.length -  0);
while (G__16403__i < G__16403__a.length) {G__16403__a[G__16403__i] = arguments[G__16403__i + 0]; ++G__16403__i;}
  args = new cljs.core.IndexedSeq(G__16403__a,0,null);
} 
return G__16402__delegate.call(this,args);};
G__16402.cljs$lang$maxFixedArity = 0;
G__16402.cljs$lang$applyTo = (function (arglist__16404){
var args = cljs.core.seq(arglist__16404);
return G__16402__delegate(args);
});
G__16402.cljs$core$IFn$_invoke$arity$variadic = G__16402__delegate;
return G__16402;
})()
);

(o.error = (function() { 
var G__16405__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__16405 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16406__i = 0, G__16406__a = new Array(arguments.length -  0);
while (G__16406__i < G__16406__a.length) {G__16406__a[G__16406__i] = arguments[G__16406__i + 0]; ++G__16406__i;}
  args = new cljs.core.IndexedSeq(G__16406__a,0,null);
} 
return G__16405__delegate.call(this,args);};
G__16405.cljs$lang$maxFixedArity = 0;
G__16405.cljs$lang$applyTo = (function (arglist__16407){
var args = cljs.core.seq(arglist__16407);
return G__16405__delegate(args);
});
G__16405.cljs$core$IFn$_invoke$arity$variadic = G__16405__delegate;
return G__16405;
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
