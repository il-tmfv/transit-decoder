// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__19583){
var vec__19584 = p__19583;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19584,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19584,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__19587 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19587,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19587,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19587,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__19591 = arguments.length;
switch (G__19591) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__19593_19617 = clojure.data.equality_partition;
var G__19594_19618 = "null";
var G__19595_19619 = ((function (G__19593_19617,G__19594_19618){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__19593_19617,G__19594_19618))
;
goog.object.set(G__19593_19617,G__19594_19618,G__19595_19619);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__19596_19620 = clojure.data.equality_partition;
var G__19597_19621 = "string";
var G__19598_19622 = ((function (G__19596_19620,G__19597_19621){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__19596_19620,G__19597_19621))
;
goog.object.set(G__19596_19620,G__19597_19621,G__19598_19622);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__19599_19623 = clojure.data.equality_partition;
var G__19600_19624 = "number";
var G__19601_19625 = ((function (G__19599_19623,G__19600_19624){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__19599_19623,G__19600_19624))
;
goog.object.set(G__19599_19623,G__19600_19624,G__19601_19625);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__19602_19626 = clojure.data.equality_partition;
var G__19603_19627 = "array";
var G__19604_19628 = ((function (G__19602_19626,G__19603_19627){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__19602_19626,G__19603_19627))
;
goog.object.set(G__19602_19626,G__19603_19627,G__19604_19628);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__19605_19629 = clojure.data.equality_partition;
var G__19606_19630 = "function";
var G__19607_19631 = ((function (G__19605_19629,G__19606_19630){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__19605_19629,G__19606_19630))
;
goog.object.set(G__19605_19629,G__19606_19630,G__19607_19631);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__19608_19632 = clojure.data.equality_partition;
var G__19609_19633 = "boolean";
var G__19610_19634 = ((function (G__19608_19632,G__19609_19633){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__19608_19632,G__19609_19633))
;
goog.object.set(G__19608_19632,G__19609_19633,G__19610_19634);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__19611_19635 = clojure.data.equality_partition;
var G__19612_19636 = "_";
var G__19613_19637 = ((function (G__19611_19635,G__19612_19636){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__19611_19635,G__19612_19636))
;
goog.object.set(G__19611_19635,G__19612_19636,G__19613_19637);
goog.object.set(clojure.data.Diff,"null",true);

var G__19638_19662 = clojure.data.diff_similar;
var G__19639_19663 = "null";
var G__19640_19664 = ((function (G__19638_19662,G__19639_19663){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__19638_19662,G__19639_19663))
;
goog.object.set(G__19638_19662,G__19639_19663,G__19640_19664);

goog.object.set(clojure.data.Diff,"string",true);

var G__19641_19665 = clojure.data.diff_similar;
var G__19642_19666 = "string";
var G__19643_19667 = ((function (G__19641_19665,G__19642_19666){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__19641_19665,G__19642_19666))
;
goog.object.set(G__19641_19665,G__19642_19666,G__19643_19667);

goog.object.set(clojure.data.Diff,"number",true);

var G__19644_19668 = clojure.data.diff_similar;
var G__19645_19669 = "number";
var G__19646_19670 = ((function (G__19644_19668,G__19645_19669){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__19644_19668,G__19645_19669))
;
goog.object.set(G__19644_19668,G__19645_19669,G__19646_19670);

goog.object.set(clojure.data.Diff,"array",true);

var G__19647_19671 = clojure.data.diff_similar;
var G__19648_19672 = "array";
var G__19649_19673 = ((function (G__19647_19671,G__19648_19672){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__19647_19671,G__19648_19672))
;
goog.object.set(G__19647_19671,G__19648_19672,G__19649_19673);

goog.object.set(clojure.data.Diff,"function",true);

var G__19650_19674 = clojure.data.diff_similar;
var G__19651_19675 = "function";
var G__19652_19676 = ((function (G__19650_19674,G__19651_19675){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__19650_19674,G__19651_19675))
;
goog.object.set(G__19650_19674,G__19651_19675,G__19652_19676);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__19653_19677 = clojure.data.diff_similar;
var G__19654_19678 = "boolean";
var G__19655_19679 = ((function (G__19653_19677,G__19654_19678){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__19653_19677,G__19654_19678))
;
goog.object.set(G__19653_19677,G__19654_19678,G__19655_19679);

goog.object.set(clojure.data.Diff,"_",true);

var G__19656_19680 = clojure.data.diff_similar;
var G__19657_19681 = "_";
var G__19658_19682 = ((function (G__19656_19680,G__19657_19681){
return (function (a,b){
var fexpr__19660 = (function (){var G__19661 = clojure.data.equality_partition(a);
var G__19661__$1 = (((G__19661 instanceof cljs.core.Keyword))?G__19661.fqn:null);
switch (G__19661__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19661__$1)].join('')));

}
})();
return (fexpr__19660.cljs$core$IFn$_invoke$arity$2 ? fexpr__19660.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__19660.call(null,a,b));
});})(G__19656_19680,G__19657_19681))
;
goog.object.set(G__19656_19680,G__19657_19681,G__19658_19682);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
