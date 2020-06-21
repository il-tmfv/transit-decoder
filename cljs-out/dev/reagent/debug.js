// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
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
var G__11993__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__11993 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11994__i = 0, G__11994__a = new Array(arguments.length -  0);
while (G__11994__i < G__11994__a.length) {G__11994__a[G__11994__i] = arguments[G__11994__i + 0]; ++G__11994__i;}
  args = new cljs.core.IndexedSeq(G__11994__a,0,null);
} 
return G__11993__delegate.call(this,args);};
G__11993.cljs$lang$maxFixedArity = 0;
G__11993.cljs$lang$applyTo = (function (arglist__11995){
var args = cljs.core.seq(arglist__11995);
return G__11993__delegate(args);
});
G__11993.cljs$core$IFn$_invoke$arity$variadic = G__11993__delegate;
return G__11993;
})()
);

(o.error = (function() { 
var G__11996__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__11996 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11997__i = 0, G__11997__a = new Array(arguments.length -  0);
while (G__11997__i < G__11997__a.length) {G__11997__a[G__11997__i] = arguments[G__11997__i + 0]; ++G__11997__i;}
  args = new cljs.core.IndexedSeq(G__11997__a,0,null);
} 
return G__11996__delegate.call(this,args);};
G__11996.cljs$lang$maxFixedArity = 0;
G__11996.cljs$lang$applyTo = (function (arglist__11998){
var args = cljs.core.seq(arglist__11998);
return G__11996__delegate(args);
});
G__11996.cljs$core$IFn$_invoke$arity$variadic = G__11996__delegate;
return G__11996;
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
