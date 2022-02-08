// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__4824__auto__ = [];
var len__4818__auto___18345 = arguments.length;
var i__4819__auto___18346 = (0);
while(true){
if((i__4819__auto___18346 < len__4818__auto___18345)){
args__4824__auto__.push((arguments[i__4819__auto___18346]));

var G__18347 = (i__4819__auto___18346 + (1));
i__4819__auto___18346 = G__18347;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
}));

(cljs.pprint.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.print.cljs$lang$applyTo = (function (seq18344){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18344));
}));

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__4824__auto__ = [];
var len__4818__auto___18349 = arguments.length;
var i__4819__auto___18350 = (0);
while(true){
if((i__4819__auto___18350 < len__4818__auto___18349)){
args__4824__auto__.push((arguments[i__4819__auto___18350]));

var G__18351 = (i__4819__auto___18350 + (1));
i__4819__auto___18350 = G__18351;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
}));

(cljs.pprint.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.println.cljs$lang$applyTo = (function (seq18348){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18348));
}));

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__18352 = cljs.core._EQ_;
var expr__18353 = c;
if(cljs.core.truth_((function (){var G__18355 = "\b";
var G__18356 = expr__18353;
return (pred__18352.cljs$core$IFn$_invoke$arity$2 ? pred__18352.cljs$core$IFn$_invoke$arity$2(G__18355,G__18356) : pred__18352.call(null,G__18355,G__18356));
})())){
return "\\backspace";
} else {
if(cljs.core.truth_((function (){var G__18357 = " ";
var G__18358 = expr__18353;
return (pred__18352.cljs$core$IFn$_invoke$arity$2 ? pred__18352.cljs$core$IFn$_invoke$arity$2(G__18357,G__18358) : pred__18352.call(null,G__18357,G__18358));
})())){
return "\\space";
} else {
if(cljs.core.truth_((function (){var G__18359 = "\t";
var G__18360 = expr__18353;
return (pred__18352.cljs$core$IFn$_invoke$arity$2 ? pred__18352.cljs$core$IFn$_invoke$arity$2(G__18359,G__18360) : pred__18352.call(null,G__18359,G__18360));
})())){
return "\\tab";
} else {
if(cljs.core.truth_((function (){var G__18361 = "\n";
var G__18362 = expr__18353;
return (pred__18352.cljs$core$IFn$_invoke$arity$2 ? pred__18352.cljs$core$IFn$_invoke$arity$2(G__18361,G__18362) : pred__18352.call(null,G__18361,G__18362));
})())){
return "\\newline";
} else {
if(cljs.core.truth_((function (){var G__18363 = "\f";
var G__18364 = expr__18353;
return (pred__18352.cljs$core$IFn$_invoke$arity$2 ? pred__18352.cljs$core$IFn$_invoke$arity$2(G__18363,G__18364) : pred__18352.call(null,G__18363,G__18364));
})())){
return "\\formfeed";
} else {
if(cljs.core.truth_((function (){var G__18365 = "\r";
var G__18366 = expr__18353;
return (pred__18352.cljs$core$IFn$_invoke$arity$2 ? pred__18352.cljs$core$IFn$_invoke$arity$2(G__18365,G__18366) : pred__18352.call(null,G__18365,G__18366));
})())){
return "\\return";
} else {
if(cljs.core.truth_((function (){var G__18367 = "\"";
var G__18368 = expr__18353;
return (pred__18352.cljs$core$IFn$_invoke$arity$2 ? pred__18352.cljs$core$IFn$_invoke$arity$2(G__18367,G__18368) : pred__18352.call(null,G__18367,G__18368));
})())){
return "\\\"";
} else {
if(cljs.core.truth_((function (){var G__18369 = "\\";
var G__18370 = expr__18353;
return (pred__18352.cljs$core$IFn$_invoke$arity$2 ? pred__18352.cljs$core$IFn$_invoke$arity$2(G__18369,G__18370) : pred__18352.call(null,G__18369,G__18370));
})())){
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__4824__auto__ = [];
var len__4818__auto___18372 = arguments.length;
var i__4819__auto___18373 = (0);
while(true){
if((i__4819__auto___18373 < len__4818__auto___18372)){
args__4824__auto__.push((arguments[i__4819__auto___18373]));

var G__18374 = (i__4819__auto___18373 + (1));
i__4819__auto___18373 = G__18374;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
}));

(cljs.pprint.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.pr.cljs$lang$applyTo = (function (seq18371){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18371));
}));

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__4824__auto__ = [];
var len__4818__auto___18376 = arguments.length;
var i__4819__auto___18377 = (0);
while(true){
if((i__4819__auto___18377 < len__4818__auto___18376)){
args__4824__auto__.push((arguments[i__4819__auto___18377]));

var G__18378 = (i__4819__auto___18377 + (1));
i__4819__auto___18377 = G__18378;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pr,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
}));

(cljs.pprint.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.prn.cljs$lang$applyTo = (function (seq18375){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18375));
}));

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return ((typeof n === 'number') && ((((!(isNaN(n)))) && ((((!((n === Infinity)))) && ((!((parseFloat(n) === parseInt(n,(10)))))))))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if(((typeof c === 'string') && ((c.length === (1))))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first(lis__$1);
var remainder = cljs.core.next(lis__$1);
var vec__18382 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18382,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18382,(1),null);
var G__18385 = new_context;
var G__18386 = remainder;
var G__18387 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__18385;
lis__$1 = G__18386;
acc = G__18387;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__18391 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18391,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18391,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__18394 = new_context;
var G__18395 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__18394;
acc = G__18395;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__18399 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18399,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18399,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18399,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__18402 = new_context;
var G__18403 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__18402;
acc = G__18403;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4611__auto__ = (function cljs$pprint$unzip_map_$_iter__18404(s__18405){
return (new cljs.core.LazySeq(null,(function (){
var s__18405__$1 = s__18405;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__18405__$1);
if(temp__5753__auto__){
var s__18405__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18405__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__18405__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__18407 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__18406 = (0);
while(true){
if((i__18406 < size__4610__auto__)){
var vec__18408 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4609__auto__,i__18406);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18408,(0),null);
var vec__18411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18408,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18411,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18411,(1),null);
cljs.core.chunk_append(b__18407,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__18436 = (i__18406 + (1));
i__18406 = G__18436;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18407),cljs$pprint$unzip_map_$_iter__18404(cljs.core.chunk_rest(s__18405__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18407),null);
}
} else {
var vec__18414 = cljs.core.first(s__18405__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18414,(0),null);
var vec__18417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18414,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18417,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18417,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__18404(cljs.core.rest(s__18405__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4611__auto__ = (function cljs$pprint$unzip_map_$_iter__18420(s__18421){
return (new cljs.core.LazySeq(null,(function (){
var s__18421__$1 = s__18421;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__18421__$1);
if(temp__5753__auto__){
var s__18421__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18421__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__18421__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__18423 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__18422 = (0);
while(true){
if((i__18422 < size__4610__auto__)){
var vec__18424 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4609__auto__,i__18422);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18424,(0),null);
var vec__18427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18424,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18427,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18427,(1),null);
cljs.core.chunk_append(b__18423,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__18437 = (i__18422 + (1));
i__18422 = G__18437;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18423),cljs$pprint$unzip_map_$_iter__18420(cljs.core.chunk_rest(s__18421__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18423),null);
}
} else {
var vec__18430 = cljs.core.first(s__18421__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18430,(0),null);
var vec__18433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18430,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18433,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18433,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__18420(cljs.core.rest(s__18421__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4611__auto__ = (function cljs$pprint$tuple_map_$_iter__18438(s__18439){
return (new cljs.core.LazySeq(null,(function (){
var s__18439__$1 = s__18439;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__18439__$1);
if(temp__5753__auto__){
var s__18439__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18439__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__18439__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__18441 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__18440 = (0);
while(true){
if((i__18440 < size__4610__auto__)){
var vec__18442 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4609__auto__,i__18440);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18442,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18442,(1),null);
cljs.core.chunk_append(b__18441,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__18448 = (i__18440 + (1));
i__18440 = G__18448;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18441),cljs$pprint$tuple_map_$_iter__18438(cljs.core.chunk_rest(s__18439__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18441),null);
}
} else {
var vec__18445 = cljs.core.first(s__18439__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18445,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18445,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__18438(cljs.core.rest(s__18439__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count(s);
if((((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1))),c)))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(n + (1)));
} else {
var G__18449 = (n - (1));
n = G__18449;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count(s);
if((((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0)),c)))){
var n = (0);
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,len)) || ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,n);
} else {
var G__18450 = (n + (1));
n = G__18450;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_(val))?cljs.core.set(val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__18451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__18451) : test.call(null,G__18451));
})())))){
return pos;
} else {
var G__18452 = (pos + (1));
pos = G__18452;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

var cljs$pprint$IPrettyFlush$_ppflush$dyn_18453 = (function (pp){
var x__4509__auto__ = (((pp == null))?null:pp);
var m__4510__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__4510__auto__.call(null,pp));
} else {
var m__4508__auto__ = (cljs.pprint._ppflush["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__4508__auto__.call(null,pp));
} else {
throw cljs.core.missing_protocol("IPrettyFlush.-ppflush",pp);
}
}
});
cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((((!((pp == null)))) && ((!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
return cljs$pprint$IPrettyFlush$_ppflush$dyn_18453(pp);
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
var G__18454 = cljs.core.deref(cljs.core.deref(this$));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__18454) : sym.call(null,G__18454));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$cur);
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$line);
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$max);
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field(this$,cljs.core.cst$kw$max,new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$base);
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(0));

cljs.pprint.set_field(this$,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$,cljs.core.cst$kw$line) + (1)));
} else {
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$,cljs.core.cst$kw$cur) + (1)));
}

return cljs.core._write(cljs.pprint.get_field(this$,cljs.core.cst$kw$base),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__18457 = arguments.length;
switch (G__18457) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,cljs.pprint._STAR_default_page_width_STAR_);
}));

(cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$max,max_columns,cljs.core.cst$kw$cur,(0),cljs.core.cst$kw$line,(0),cljs.core.cst$kw$base,writer], null));
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint18458 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint18458 = (function (writer,max_columns,fields,meta18459){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta18459 = meta18459;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint18458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18460,meta18459__$1){
var self__ = this;
var _18460__$1 = this;
return (new cljs.pprint.t_cljs$pprint18458(self__.writer,self__.max_columns,self__.fields,meta18459__$1));
}));

(cljs.pprint.t_cljs$pprint18458.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18460){
var self__ = this;
var _18460__$1 = this;
return self__.meta18459;
}));

(cljs.pprint.t_cljs$pprint18458.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
}));

(cljs.pprint.t_cljs$pprint18458.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint18458.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__18461 = cljs.core._EQ_;
var expr__18462 = cljs.core.type(x);
if(cljs.core.truth_((pred__18461.cljs$core$IFn$_invoke$arity$2 ? pred__18461.cljs$core$IFn$_invoke$arity$2(String,expr__18462) : pred__18461.call(null,String,expr__18462)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$cur) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$line) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18455_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__18455_SHARP_,"\n");
}),s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$base),s);
} else {
if(cljs.core.truth_((pred__18461.cljs$core$IFn$_invoke$arity$2 ? pred__18461.cljs$core$IFn$_invoke$arity$2(Number,expr__18462) : pred__18461.call(null,Number,expr__18462)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__18462)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint18458.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta18459], null);
}));

(cljs.pprint.t_cljs$pprint18458.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint18458.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint18458");

(cljs.pprint.t_cljs$pprint18458.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.pprint/t_cljs$pprint18458");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint18458.
 */
cljs.pprint.__GT_t_cljs$pprint18458 = (function cljs$pprint$__GT_t_cljs$pprint18458(writer__$1,max_columns__$1,fields__$1,meta18459){
return (new cljs.pprint.t_cljs$pprint18458(writer__$1,max_columns__$1,fields__$1,meta18459));
});

}

return (new cljs.pprint.t_cljs$pprint18458(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k18466,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__18470 = k18466;
var G__18470__$1 = (((G__18470 instanceof cljs.core.Keyword))?G__18470.fqn:null);
switch (G__18470__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18466,else__4464__auto__);

}
}));

(cljs.pprint.logical_block.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__18471){
var vec__18472 = p__18471;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18472,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18472,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#cljs.pprint.logical-block{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18465){
var self__ = this;
var G__18465__$1 = this;
return (new cljs.core.RecordIter((0),G__18465__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parent,cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (){var fexpr__18475 = (function (coll__4458__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
});
return fexpr__18475(this__4457__auto____$1);
})();
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18467,other18468){
var self__ = this;
var this18467__$1 = this;
return (((!((other18468 == null)))) && ((((this18467__$1.constructor === other18468.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18467__$1.parent,other18468.parent)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18467__$1.section,other18468.section)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18467__$1.start_col,other18468.start_col)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18467__$1.indent,other18468.indent)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18467__$1.done_nl,other18468.done_nl)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18467__$1.intra_block_nl,other18468.intra_block_nl)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18467__$1.prefix,other18468.prefix)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18467__$1.per_line_prefix,other18468.per_line_prefix)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18467__$1.suffix,other18468.suffix)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18467__$1.logical_block_callback,other18468.logical_block_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18467__$1.__extmap,other18468.__extmap)))))))))))))))))))))))));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$suffix,null,cljs.core.cst$kw$indent,null,cljs.core.cst$kw$parent,null,cljs.core.cst$kw$section,null,cljs.core.cst$kw$done_DASH_nl,null,cljs.core.cst$kw$start_DASH_col,null,cljs.core.cst$kw$prefix,null,cljs.core.cst$kw$per_DASH_line_DASH_prefix,null,cljs.core.cst$kw$logical_DASH_block_DASH_callback,null,cljs.core.cst$kw$intra_DASH_block_DASH_nl,null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k18466){
var self__ = this;
var this__4468__auto____$1 = this;
var G__18476 = k18466;
var G__18476__$1 = (((G__18476 instanceof cljs.core.Keyword))?G__18476.fqn:null);
switch (G__18476__$1) {
case "parent":
case "section":
case "start-col":
case "indent":
case "done-nl":
case "intra-block-nl":
case "prefix":
case "per-line-prefix":
case "suffix":
case "logical-block-callback":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18466);

}
}));

(cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__18465){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__18477 = cljs.core.keyword_identical_QMARK_;
var expr__18478 = k__4470__auto__;
if(cljs.core.truth_((function (){var G__18480 = cljs.core.cst$kw$parent;
var G__18481 = expr__18478;
return (pred__18477.cljs$core$IFn$_invoke$arity$2 ? pred__18477.cljs$core$IFn$_invoke$arity$2(G__18480,G__18481) : pred__18477.call(null,G__18480,G__18481));
})())){
return (new cljs.pprint.logical_block(G__18465,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18482 = cljs.core.cst$kw$section;
var G__18483 = expr__18478;
return (pred__18477.cljs$core$IFn$_invoke$arity$2 ? pred__18477.cljs$core$IFn$_invoke$arity$2(G__18482,G__18483) : pred__18477.call(null,G__18482,G__18483));
})())){
return (new cljs.pprint.logical_block(self__.parent,G__18465,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18484 = cljs.core.cst$kw$start_DASH_col;
var G__18485 = expr__18478;
return (pred__18477.cljs$core$IFn$_invoke$arity$2 ? pred__18477.cljs$core$IFn$_invoke$arity$2(G__18484,G__18485) : pred__18477.call(null,G__18484,G__18485));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__18465,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18486 = cljs.core.cst$kw$indent;
var G__18487 = expr__18478;
return (pred__18477.cljs$core$IFn$_invoke$arity$2 ? pred__18477.cljs$core$IFn$_invoke$arity$2(G__18486,G__18487) : pred__18477.call(null,G__18486,G__18487));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__18465,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18488 = cljs.core.cst$kw$done_DASH_nl;
var G__18489 = expr__18478;
return (pred__18477.cljs$core$IFn$_invoke$arity$2 ? pred__18477.cljs$core$IFn$_invoke$arity$2(G__18488,G__18489) : pred__18477.call(null,G__18488,G__18489));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__18465,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18490 = cljs.core.cst$kw$intra_DASH_block_DASH_nl;
var G__18491 = expr__18478;
return (pred__18477.cljs$core$IFn$_invoke$arity$2 ? pred__18477.cljs$core$IFn$_invoke$arity$2(G__18490,G__18491) : pred__18477.call(null,G__18490,G__18491));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__18465,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18492 = cljs.core.cst$kw$prefix;
var G__18493 = expr__18478;
return (pred__18477.cljs$core$IFn$_invoke$arity$2 ? pred__18477.cljs$core$IFn$_invoke$arity$2(G__18492,G__18493) : pred__18477.call(null,G__18492,G__18493));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__18465,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18494 = cljs.core.cst$kw$per_DASH_line_DASH_prefix;
var G__18495 = expr__18478;
return (pred__18477.cljs$core$IFn$_invoke$arity$2 ? pred__18477.cljs$core$IFn$_invoke$arity$2(G__18494,G__18495) : pred__18477.call(null,G__18494,G__18495));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__18465,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18496 = cljs.core.cst$kw$suffix;
var G__18497 = expr__18478;
return (pred__18477.cljs$core$IFn$_invoke$arity$2 ? pred__18477.cljs$core$IFn$_invoke$arity$2(G__18496,G__18497) : pred__18477.call(null,G__18496,G__18497));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__18465,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18498 = cljs.core.cst$kw$logical_DASH_block_DASH_callback;
var G__18499 = expr__18478;
return (pred__18477.cljs$core$IFn$_invoke$arity$2 ? pred__18477.cljs$core$IFn$_invoke$arity$2(G__18498,G__18499) : pred__18477.call(null,G__18498,G__18499));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__18465,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__18465),null));
}
}
}
}
}
}
}
}
}
}
}));

(cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$parent,self__.parent,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$section,self__.section,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_col,self__.start_col,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$indent,self__.indent,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$done_DASH_nl,self__.done_nl,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$prefix,self__.prefix,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$suffix,self__.suffix,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback,null))], null),self__.__extmap));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__18465){
var self__ = this;
var this__4460__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__18465,self__.__extmap,self__.__hash));
}));

(cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$parent,cljs.core.cst$sym$section,cljs.core.cst$sym$start_DASH_col,cljs.core.cst$sym$indent,cljs.core.cst$sym$done_DASH_nl,cljs.core.cst$sym$intra_DASH_block_DASH_nl,cljs.core.cst$sym$prefix,cljs.core.cst$sym$per_DASH_line_DASH_prefix,cljs.core.cst$sym$suffix,cljs.core.cst$sym$logical_DASH_block_DASH_callback], null);
}));

(cljs.pprint.logical_block.cljs$lang$type = true);

(cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"cljs.pprint/logical-block",null,(1),null));
}));

(cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"cljs.pprint/logical-block");
}));

/**
 * Positional factory function for cljs.pprint/logical-block.
 */
cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

/**
 * Factory function for cljs.pprint/logical-block, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__18469){
var extmap__4501__auto__ = (function (){var G__18500 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18469,cljs.core.cst$kw$parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], 0));
if(cljs.core.record_QMARK_(G__18469)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18500);
} else {
return G__18500;
}
})();
return (new cljs.pprint.logical_block(cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__18469),cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(G__18469),cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(G__18469),cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(G__18469),cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__18469),cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__18469),cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(G__18469),cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(G__18469),cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(G__18469),cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__18469),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__18503 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__18503;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq(l);
if(l__$1){
return (cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.last(l__$1)) - cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.first(l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k18505,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__18509 = k18505;
var G__18509__$1 = (((G__18509 instanceof cljs.core.Keyword))?G__18509.fqn:null);
switch (G__18509__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18505,else__4464__auto__);

}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__18510){
var vec__18511 = p__18510;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18511,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18511,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18504){
var self__ = this;
var G__18504__$1 = this;
return (new cljs.core.RecordIter((0),G__18504__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (){var fexpr__18514 = (function (coll__4458__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
});
return fexpr__18514(this__4457__auto____$1);
})();
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18506,other18507){
var self__ = this;
var this18506__$1 = this;
return (((!((other18507 == null)))) && ((((this18506__$1.constructor === other18507.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18506__$1.type_tag,other18507.type_tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18506__$1.data,other18507.data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18506__$1.trailing_white_space,other18507.trailing_white_space)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18506__$1.start_pos,other18507.start_pos)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18506__$1.end_pos,other18507.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18506__$1.__extmap,other18507.__extmap)))))))))))))));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null,cljs.core.cst$kw$data,null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k18505){
var self__ = this;
var this__4468__auto____$1 = this;
var G__18515 = k18505;
var G__18515__$1 = (((G__18515 instanceof cljs.core.Keyword))?G__18515.fqn:null);
switch (G__18515__$1) {
case "type-tag":
case "data":
case "trailing-white-space":
case "start-pos":
case "end-pos":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18505);

}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__18504){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__18516 = cljs.core.keyword_identical_QMARK_;
var expr__18517 = k__4470__auto__;
if(cljs.core.truth_((function (){var G__18519 = cljs.core.cst$kw$type_DASH_tag;
var G__18520 = expr__18517;
return (pred__18516.cljs$core$IFn$_invoke$arity$2 ? pred__18516.cljs$core$IFn$_invoke$arity$2(G__18519,G__18520) : pred__18516.call(null,G__18519,G__18520));
})())){
return (new cljs.pprint.buffer_blob(G__18504,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18521 = cljs.core.cst$kw$data;
var G__18522 = expr__18517;
return (pred__18516.cljs$core$IFn$_invoke$arity$2 ? pred__18516.cljs$core$IFn$_invoke$arity$2(G__18521,G__18522) : pred__18516.call(null,G__18521,G__18522));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__18504,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18523 = cljs.core.cst$kw$trailing_DASH_white_DASH_space;
var G__18524 = expr__18517;
return (pred__18516.cljs$core$IFn$_invoke$arity$2 ? pred__18516.cljs$core$IFn$_invoke$arity$2(G__18523,G__18524) : pred__18516.call(null,G__18523,G__18524));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__18504,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18525 = cljs.core.cst$kw$start_DASH_pos;
var G__18526 = expr__18517;
return (pred__18516.cljs$core$IFn$_invoke$arity$2 ? pred__18516.cljs$core$IFn$_invoke$arity$2(G__18525,G__18526) : pred__18516.call(null,G__18525,G__18526));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__18504,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18527 = cljs.core.cst$kw$end_DASH_pos;
var G__18528 = expr__18517;
return (pred__18516.cljs$core$IFn$_invoke$arity$2 ? pred__18516.cljs$core$IFn$_invoke$arity$2(G__18527,G__18528) : pred__18516.call(null,G__18527,G__18528));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__18504,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__18504),null));
}
}
}
}
}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$data,self__.data,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__18504){
var self__ = this;
var this__4460__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__18504,self__.__extmap,self__.__hash));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$data,cljs.core.cst$sym$trailing_DASH_white_DASH_space,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
}));

(cljs.pprint.buffer_blob.cljs$lang$type = true);

(cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"cljs.pprint/buffer-blob",null,(1),null));
}));

(cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"cljs.pprint/buffer-blob");
}));

/**
 * Positional factory function for cljs.pprint/buffer-blob.
 */
cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/buffer-blob, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__18508){
var extmap__4501__auto__ = (function (){var G__18529 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18508,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0));
if(cljs.core.record_QMARK_(G__18508)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18529);
} else {
return G__18529;
}
})();
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__18508),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__18508),cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(G__18508),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__18508),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__18508),null,cljs.core.not_empty(extmap__4501__auto__),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$buffer_DASH_blob,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__18275__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__18275__auto__),cljs.core.cst$kw$buffer_DASH_blob);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k18533,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__18537 = k18533;
var G__18537__$1 = (((G__18537 instanceof cljs.core.Keyword))?G__18537.fqn:null);
switch (G__18537__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18533,else__4464__auto__);

}
}));

(cljs.pprint.nl_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__18538){
var vec__18539 = p__18538;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18539,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18539,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#cljs.pprint.nl-t{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18532){
var self__ = this;
var G__18532__$1 = this;
return (new cljs.core.RecordIter((0),G__18532__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (){var fexpr__18542 = (function (coll__4458__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
});
return fexpr__18542(this__4457__auto____$1);
})();
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18534,other18535){
var self__ = this;
var this18534__$1 = this;
return (((!((other18535 == null)))) && ((((this18534__$1.constructor === other18535.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18534__$1.type_tag,other18535.type_tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18534__$1.type,other18535.type)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18534__$1.logical_block,other18535.logical_block)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18534__$1.start_pos,other18535.start_pos)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18534__$1.end_pos,other18535.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18534__$1.__extmap,other18535.__extmap)))))))))))))));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$type,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k18533){
var self__ = this;
var this__4468__auto____$1 = this;
var G__18543 = k18533;
var G__18543__$1 = (((G__18543 instanceof cljs.core.Keyword))?G__18543.fqn:null);
switch (G__18543__$1) {
case "type-tag":
case "type":
case "logical-block":
case "start-pos":
case "end-pos":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18533);

}
}));

(cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__18532){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__18544 = cljs.core.keyword_identical_QMARK_;
var expr__18545 = k__4470__auto__;
if(cljs.core.truth_((function (){var G__18547 = cljs.core.cst$kw$type_DASH_tag;
var G__18548 = expr__18545;
return (pred__18544.cljs$core$IFn$_invoke$arity$2 ? pred__18544.cljs$core$IFn$_invoke$arity$2(G__18547,G__18548) : pred__18544.call(null,G__18547,G__18548));
})())){
return (new cljs.pprint.nl_t(G__18532,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18549 = cljs.core.cst$kw$type;
var G__18550 = expr__18545;
return (pred__18544.cljs$core$IFn$_invoke$arity$2 ? pred__18544.cljs$core$IFn$_invoke$arity$2(G__18549,G__18550) : pred__18544.call(null,G__18549,G__18550));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,G__18532,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18551 = cljs.core.cst$kw$logical_DASH_block;
var G__18552 = expr__18545;
return (pred__18544.cljs$core$IFn$_invoke$arity$2 ? pred__18544.cljs$core$IFn$_invoke$arity$2(G__18551,G__18552) : pred__18544.call(null,G__18551,G__18552));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__18532,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18553 = cljs.core.cst$kw$start_DASH_pos;
var G__18554 = expr__18545;
return (pred__18544.cljs$core$IFn$_invoke$arity$2 ? pred__18544.cljs$core$IFn$_invoke$arity$2(G__18553,G__18554) : pred__18544.call(null,G__18553,G__18554));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__18532,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18555 = cljs.core.cst$kw$end_DASH_pos;
var G__18556 = expr__18545;
return (pred__18544.cljs$core$IFn$_invoke$arity$2 ? pred__18544.cljs$core$IFn$_invoke$arity$2(G__18555,G__18556) : pred__18544.call(null,G__18555,G__18556));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__18532,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__18532),null));
}
}
}
}
}
}));

(cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$type,self__.type,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block,self__.logical_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__18532){
var self__ = this;
var this__4460__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__18532,self__.__extmap,self__.__hash));
}));

(cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$type,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
}));

(cljs.pprint.nl_t.cljs$lang$type = true);

(cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"cljs.pprint/nl-t",null,(1),null));
}));

(cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"cljs.pprint/nl-t");
}));

/**
 * Positional factory function for cljs.pprint/nl-t.
 */
cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/nl-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__18536){
var extmap__4501__auto__ = (function (){var G__18557 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18536,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0));
if(cljs.core.record_QMARK_(G__18536)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18557);
} else {
return G__18557;
}
})();
return (new cljs.pprint.nl_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__18536),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__18536),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__18536),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__18536),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__18536),null,cljs.core.not_empty(extmap__4501__auto__),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$nl_DASH_t,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__18275__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__18275__auto__),cljs.core.cst$kw$nl_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k18561,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__18565 = k18561;
var G__18565__$1 = (((G__18565 instanceof cljs.core.Keyword))?G__18565.fqn:null);
switch (G__18565__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18561,else__4464__auto__);

}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__18566){
var vec__18567 = p__18566;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18567,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18567,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18560){
var self__ = this;
var G__18560__$1 = this;
return (new cljs.core.RecordIter((0),G__18560__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (){var fexpr__18570 = (function (coll__4458__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
});
return fexpr__18570(this__4457__auto____$1);
})();
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18562,other18563){
var self__ = this;
var this18562__$1 = this;
return (((!((other18563 == null)))) && ((((this18562__$1.constructor === other18563.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18562__$1.type_tag,other18563.type_tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18562__$1.logical_block,other18563.logical_block)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18562__$1.start_pos,other18563.start_pos)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18562__$1.end_pos,other18563.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18562__$1.__extmap,other18563.__extmap)))))))))))));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k18561){
var self__ = this;
var this__4468__auto____$1 = this;
var G__18571 = k18561;
var G__18571__$1 = (((G__18571 instanceof cljs.core.Keyword))?G__18571.fqn:null);
switch (G__18571__$1) {
case "type-tag":
case "logical-block":
case "start-pos":
case "end-pos":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18561);

}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__18560){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__18572 = cljs.core.keyword_identical_QMARK_;
var expr__18573 = k__4470__auto__;
if(cljs.core.truth_((function (){var G__18575 = cljs.core.cst$kw$type_DASH_tag;
var G__18576 = expr__18573;
return (pred__18572.cljs$core$IFn$_invoke$arity$2 ? pred__18572.cljs$core$IFn$_invoke$arity$2(G__18575,G__18576) : pred__18572.call(null,G__18575,G__18576));
})())){
return (new cljs.pprint.start_block_t(G__18560,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18577 = cljs.core.cst$kw$logical_DASH_block;
var G__18578 = expr__18573;
return (pred__18572.cljs$core$IFn$_invoke$arity$2 ? pred__18572.cljs$core$IFn$_invoke$arity$2(G__18577,G__18578) : pred__18572.call(null,G__18577,G__18578));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,G__18560,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18579 = cljs.core.cst$kw$start_DASH_pos;
var G__18580 = expr__18573;
return (pred__18572.cljs$core$IFn$_invoke$arity$2 ? pred__18572.cljs$core$IFn$_invoke$arity$2(G__18579,G__18580) : pred__18572.call(null,G__18579,G__18580));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__18560,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18581 = cljs.core.cst$kw$end_DASH_pos;
var G__18582 = expr__18573;
return (pred__18572.cljs$core$IFn$_invoke$arity$2 ? pred__18572.cljs$core$IFn$_invoke$arity$2(G__18581,G__18582) : pred__18572.call(null,G__18581,G__18582));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__18560,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__18560),null));
}
}
}
}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block,self__.logical_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__18560){
var self__ = this;
var this__4460__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__18560,self__.__extmap,self__.__hash));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
}));

(cljs.pprint.start_block_t.cljs$lang$type = true);

(cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"cljs.pprint/start-block-t",null,(1),null));
}));

(cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"cljs.pprint/start-block-t");
}));

/**
 * Positional factory function for cljs.pprint/start-block-t.
 */
cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/start-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__18564){
var extmap__4501__auto__ = (function (){var G__18583 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18564,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0));
if(cljs.core.record_QMARK_(G__18564)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18583);
} else {
return G__18583;
}
})();
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__18564),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__18564),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__18564),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__18564),null,cljs.core.not_empty(extmap__4501__auto__),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$start_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__18275__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__18275__auto__),cljs.core.cst$kw$start_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k18587,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__18591 = k18587;
var G__18591__$1 = (((G__18591 instanceof cljs.core.Keyword))?G__18591.fqn:null);
switch (G__18591__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18587,else__4464__auto__);

}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__18592){
var vec__18593 = p__18592;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18593,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18593,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18586){
var self__ = this;
var G__18586__$1 = this;
return (new cljs.core.RecordIter((0),G__18586__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (){var fexpr__18596 = (function (coll__4458__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
});
return fexpr__18596(this__4457__auto____$1);
})();
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18588,other18589){
var self__ = this;
var this18588__$1 = this;
return (((!((other18589 == null)))) && ((((this18588__$1.constructor === other18589.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18588__$1.type_tag,other18589.type_tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18588__$1.logical_block,other18589.logical_block)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18588__$1.start_pos,other18589.start_pos)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18588__$1.end_pos,other18589.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18588__$1.__extmap,other18589.__extmap)))))))))))));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k18587){
var self__ = this;
var this__4468__auto____$1 = this;
var G__18597 = k18587;
var G__18597__$1 = (((G__18597 instanceof cljs.core.Keyword))?G__18597.fqn:null);
switch (G__18597__$1) {
case "type-tag":
case "logical-block":
case "start-pos":
case "end-pos":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18587);

}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__18586){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__18598 = cljs.core.keyword_identical_QMARK_;
var expr__18599 = k__4470__auto__;
if(cljs.core.truth_((function (){var G__18601 = cljs.core.cst$kw$type_DASH_tag;
var G__18602 = expr__18599;
return (pred__18598.cljs$core$IFn$_invoke$arity$2 ? pred__18598.cljs$core$IFn$_invoke$arity$2(G__18601,G__18602) : pred__18598.call(null,G__18601,G__18602));
})())){
return (new cljs.pprint.end_block_t(G__18586,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18603 = cljs.core.cst$kw$logical_DASH_block;
var G__18604 = expr__18599;
return (pred__18598.cljs$core$IFn$_invoke$arity$2 ? pred__18598.cljs$core$IFn$_invoke$arity$2(G__18603,G__18604) : pred__18598.call(null,G__18603,G__18604));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,G__18586,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18605 = cljs.core.cst$kw$start_DASH_pos;
var G__18606 = expr__18599;
return (pred__18598.cljs$core$IFn$_invoke$arity$2 ? pred__18598.cljs$core$IFn$_invoke$arity$2(G__18605,G__18606) : pred__18598.call(null,G__18605,G__18606));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__18586,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18607 = cljs.core.cst$kw$end_DASH_pos;
var G__18608 = expr__18599;
return (pred__18598.cljs$core$IFn$_invoke$arity$2 ? pred__18598.cljs$core$IFn$_invoke$arity$2(G__18607,G__18608) : pred__18598.call(null,G__18607,G__18608));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__18586,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__18586),null));
}
}
}
}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block,self__.logical_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__18586){
var self__ = this;
var this__4460__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__18586,self__.__extmap,self__.__hash));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
}));

(cljs.pprint.end_block_t.cljs$lang$type = true);

(cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"cljs.pprint/end-block-t",null,(1),null));
}));

(cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"cljs.pprint/end-block-t");
}));

/**
 * Positional factory function for cljs.pprint/end-block-t.
 */
cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/end-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__18590){
var extmap__4501__auto__ = (function (){var G__18609 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18590,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0));
if(cljs.core.record_QMARK_(G__18590)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18609);
} else {
return G__18609;
}
})();
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__18590),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__18590),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__18590),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__18590),null,cljs.core.not_empty(extmap__4501__auto__),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$end_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__18275__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__18275__auto__),cljs.core.cst$kw$end_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k18613,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__18617 = k18613;
var G__18617__$1 = (((G__18617 instanceof cljs.core.Keyword))?G__18617.fqn:null);
switch (G__18617__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18613,else__4464__auto__);

}
}));

(cljs.pprint.indent_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__18618){
var vec__18619 = p__18618;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18619,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18619,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#cljs.pprint.indent-t{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18612){
var self__ = this;
var G__18612__$1 = this;
return (new cljs.core.RecordIter((0),G__18612__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (){var fexpr__18622 = (function (coll__4458__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
});
return fexpr__18622(this__4457__auto____$1);
})();
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18614,other18615){
var self__ = this;
var this18614__$1 = this;
return (((!((other18615 == null)))) && ((((this18614__$1.constructor === other18615.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18614__$1.type_tag,other18615.type_tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18614__$1.logical_block,other18615.logical_block)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18614__$1.relative_to,other18615.relative_to)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18614__$1.offset,other18615.offset)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18614__$1.start_pos,other18615.start_pos)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18614__$1.end_pos,other18615.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18614__$1.__extmap,other18615.__extmap)))))))))))))))));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$relative_DASH_to,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k18613){
var self__ = this;
var this__4468__auto____$1 = this;
var G__18623 = k18613;
var G__18623__$1 = (((G__18623 instanceof cljs.core.Keyword))?G__18623.fqn:null);
switch (G__18623__$1) {
case "type-tag":
case "logical-block":
case "relative-to":
case "offset":
case "start-pos":
case "end-pos":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18613);

}
}));

(cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__18612){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__18624 = cljs.core.keyword_identical_QMARK_;
var expr__18625 = k__4470__auto__;
if(cljs.core.truth_((function (){var G__18627 = cljs.core.cst$kw$type_DASH_tag;
var G__18628 = expr__18625;
return (pred__18624.cljs$core$IFn$_invoke$arity$2 ? pred__18624.cljs$core$IFn$_invoke$arity$2(G__18627,G__18628) : pred__18624.call(null,G__18627,G__18628));
})())){
return (new cljs.pprint.indent_t(G__18612,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18629 = cljs.core.cst$kw$logical_DASH_block;
var G__18630 = expr__18625;
return (pred__18624.cljs$core$IFn$_invoke$arity$2 ? pred__18624.cljs$core$IFn$_invoke$arity$2(G__18629,G__18630) : pred__18624.call(null,G__18629,G__18630));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,G__18612,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18631 = cljs.core.cst$kw$relative_DASH_to;
var G__18632 = expr__18625;
return (pred__18624.cljs$core$IFn$_invoke$arity$2 ? pred__18624.cljs$core$IFn$_invoke$arity$2(G__18631,G__18632) : pred__18624.call(null,G__18631,G__18632));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__18612,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18633 = cljs.core.cst$kw$offset;
var G__18634 = expr__18625;
return (pred__18624.cljs$core$IFn$_invoke$arity$2 ? pred__18624.cljs$core$IFn$_invoke$arity$2(G__18633,G__18634) : pred__18624.call(null,G__18633,G__18634));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__18612,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18635 = cljs.core.cst$kw$start_DASH_pos;
var G__18636 = expr__18625;
return (pred__18624.cljs$core$IFn$_invoke$arity$2 ? pred__18624.cljs$core$IFn$_invoke$arity$2(G__18635,G__18636) : pred__18624.call(null,G__18635,G__18636));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__18612,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18637 = cljs.core.cst$kw$end_DASH_pos;
var G__18638 = expr__18625;
return (pred__18624.cljs$core$IFn$_invoke$arity$2 ? pred__18624.cljs$core$IFn$_invoke$arity$2(G__18637,G__18638) : pred__18624.call(null,G__18637,G__18638));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__18612,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__18612),null));
}
}
}
}
}
}
}));

(cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block,self__.logical_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$relative_DASH_to,self__.relative_to,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$offset,self__.offset,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__18612){
var self__ = this;
var this__4460__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__18612,self__.__extmap,self__.__hash));
}));

(cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$relative_DASH_to,cljs.core.cst$sym$offset,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
}));

(cljs.pprint.indent_t.cljs$lang$type = true);

(cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"cljs.pprint/indent-t",null,(1),null));
}));

(cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"cljs.pprint/indent-t");
}));

/**
 * Positional factory function for cljs.pprint/indent-t.
 */
cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/indent-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__18616){
var extmap__4501__auto__ = (function (){var G__18639 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18616,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0));
if(cljs.core.record_QMARK_(G__18616)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18639);
} else {
return G__18639;
}
})();
return (new cljs.pprint.indent_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__18616),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__18616),cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(G__18616),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__18616),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__18616),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__18616),null,cljs.core.not_empty(extmap__4501__auto__),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$indent_DASH_t,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__18275__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__18275__auto__),cljs.core.cst$kw$indent_DASH_t);
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.write_token !== 'undefined')){
} else {
cljs.pprint.write_token = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__18644 = cljs.core.get_global_hierarchy;
return (fexpr__18644.cljs$core$IFn$_invoke$arity$0 ? fexpr__18644.cljs$core$IFn$_invoke$arity$0() : fexpr__18644.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),(function (p1__18643_SHARP_,p2__18642_SHARP_){
return cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(p2__18642_SHARP_);
}),cljs.core.cst$kw$default,hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$start_DASH_block_DASH_t,(function (this$,token){
var temp__5753__auto___18646 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5753__auto___18646)){
var cb_18647 = temp__5753__auto___18646;
var G__18645_18648 = cljs.core.cst$kw$start;
(cb_18647.cljs$core$IFn$_invoke$arity$1 ? cb_18647.cljs$core$IFn$_invoke$arity$1(G__18645_18648) : cb_18647.call(null,G__18645_18648));
} else {
}

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
var temp__5753__auto___18649 = cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5753__auto___18649)){
var prefix_18650 = temp__5753__auto___18649;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix_18650);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$end_DASH_block_DASH_t,(function (this$,token){
var temp__5753__auto___18652 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5753__auto___18652)){
var cb_18653 = temp__5753__auto___18652;
var G__18651_18654 = cljs.core.cst$kw$end;
(cb_18653.cljs$core$IFn$_invoke$arity$1 ? cb_18653.cljs$core$IFn$_invoke$arity$1(G__18651_18654) : cb_18653.call(null,G__18651_18654));
} else {
}

var temp__5753__auto__ = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__5753__auto__)){
var suffix = temp__5753__auto__;
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
return null;
}
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$indent_DASH_t,(function (this$,token){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__18655 = cljs.core._EQ_;
var expr__18656 = cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((function (){var G__18658 = cljs.core.cst$kw$block;
var G__18659 = expr__18656;
return (pred__18655.cljs$core$IFn$_invoke$arity$2 ? pred__18655.cljs$core$IFn$_invoke$arity$2(G__18658,G__18659) : pred__18655.call(null,G__18658,G__18659));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__18660 = cljs.core.cst$kw$current;
var G__18661 = expr__18656;
return (pred__18655.cljs$core$IFn$_invoke$arity$2 ? pred__18655.cljs$core$IFn$_invoke$arity$2(G__18660,G__18661) : pred__18655.call(null,G__18660,G__18661));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__18656)].join('')));
}
}
})()));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$buffer_DASH_blob,(function (this$,token){
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nl_DASH_t,(function (this$,token){
if(cljs.core.truth_((function (){var or__4212__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$mandatory);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var and__4210__auto__ = (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$fill)));
if(and__4210__auto__){
return cljs.core.deref(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__4210__auto__;
}
}
})())){
(cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.emit_nl.call(null,this$,token));
} else {
var temp__5751__auto___18662 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5751__auto___18662)){
var tws_18663 = temp__5751__auto___18662;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_18663);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__18664 = cljs.core.seq(tokens);
var chunk__18665 = null;
var count__18666 = (0);
var i__18667 = (0);
while(true){
if((i__18667 < count__18666)){
var token = chunk__18665.cljs$core$IIndexed$_nth$arity$2(null,i__18667);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t)))){
var temp__5751__auto___18668 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5751__auto___18668)){
var tws_18669 = temp__5751__auto___18668;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_18669);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_18670 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__4210__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4210__auto__)){
return tws_18670;
} else {
return and__4210__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_18670);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}


var G__18671 = seq__18664;
var G__18672 = chunk__18665;
var G__18673 = count__18666;
var G__18674 = (i__18667 + (1));
seq__18664 = G__18671;
chunk__18665 = G__18672;
count__18666 = G__18673;
i__18667 = G__18674;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__18664);
if(temp__5753__auto__){
var seq__18664__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18664__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__18664__$1);
var G__18675 = cljs.core.chunk_rest(seq__18664__$1);
var G__18676 = c__4638__auto__;
var G__18677 = cljs.core.count(c__4638__auto__);
var G__18678 = (0);
seq__18664 = G__18675;
chunk__18665 = G__18676;
count__18666 = G__18677;
i__18667 = G__18678;
continue;
} else {
var token = cljs.core.first(seq__18664__$1);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t)))){
var temp__5751__auto___18679 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5751__auto___18679)){
var tws_18680 = temp__5751__auto___18679;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_18680);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_18681 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__4210__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4210__auto__)){
return tws_18681;
} else {
return and__4210__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_18681);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}


var G__18682 = cljs.core.next(seq__18664__$1);
var G__18683 = null;
var G__18684 = (0);
var G__18685 = (0);
seq__18664 = G__18682;
chunk__18665 = G__18683;
count__18666 = G__18684;
i__18667 = G__18685;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
return (((maxcol == null)) || (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))) + cljs.pprint.buffer_length(tokens)) < maxcol)));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__4212__auto__ = cljs.core.deref(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (!(cljs.pprint.tokens_fit_QMARK_(this$,section)));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = cljs.pprint.get_miser_width(this$);
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
var and__4210__auto__ = miser_width;
if(cljs.core.truth_(and__4210__auto__)){
var and__4210__auto____$1 = maxcol;
if(cljs.core.truth_(and__4210__auto____$1)){
var and__4210__auto____$2 = (cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__4210__auto____$2){
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
} else {
return and__4210__auto____$2;
}
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined')){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__18686 = cljs.core.get_global_hierarchy;
return (fexpr__18686.cljs$core$IFn$_invoke$arity$0 ? fexpr__18686.cljs$core$IFn$_invoke$arity$0() : fexpr__18686.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","emit-nl?"),(function (t,_,___$1,___$2){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t);
}),cljs.core.cst$kw$default,hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$linear,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$miser,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fill,(function (newl,this$,section,subsection){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
var or__4212__auto__ = cljs.core.deref(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = (!(cljs.pprint.tokens_fit_QMARK_(this$,subsection)));
if(or__4212__auto____$1){
return or__4212__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}
}
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$mandatory,(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__18687_SHARP_){
return (!(((cljs.pprint.nl_t_QMARK_(p1__18687_SHARP_)) && (cljs.pprint.ancestor_QMARK_(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__18687_SHARP_),lb)))));
}),cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__18688_SHARP_){
var nl_lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__18688_SHARP_);
return (!(((cljs.pprint.nl_t_QMARK_(p1__18688_SHARP_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb)) || (cljs.pprint.ancestor_QMARK_(nl_lb,lb)))))));
}),cljs.core.next(buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__18689 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__18689;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var istr_18690 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count(prefix))," "));
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),istr_18690);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__18691_SHARP_){
return (!(cljs.pprint.nl_t_QMARK_(p1__18691_SHARP_)));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__18692 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18692,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18692,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__18695 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18695,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18695,(1),null);
var newl = cljs.core.first(b);
var do_nl = (function (){var G__18698 = newl;
var G__18699 = this$;
var G__18700 = section;
var G__18701 = cljs.pprint.get_sub_section(b);
return (cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4 ? cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(G__18698,G__18699,G__18700,G__18701) : cljs.pprint.emit_nl_QMARK_.call(null,G__18698,G__18699,G__18700,G__18701));
})();
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl(this$,newl);

return cljs.core.next(b);
})()
:b);
var long_section = (!(cljs.pprint.tokens_fit_QMARK_(this$,result)));
var result__$1 = ((long_section)?(function (){var rem2 = (cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2(this$,section) : cljs.pprint.write_token_string.call(null,this$,section));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rem2,section)){
cljs.pprint.write_tokens(this$,section,false);

return remainder;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
while(true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,buffer));

if((!(cljs.pprint.tokens_fit_QMARK_(this$,buffer)))){
var new_buffer = cljs.pprint.write_token_string(this$,buffer);
if((!((buffer === new_buffer)))){
var G__18702 = new_buffer;
buffer = G__18702;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),token));

if((!(cljs.pprint.tokens_fit_QMARK_(this$,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))))){
return cljs.pprint.write_line(this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line(this$);

var temp__5751__auto__ = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5751__auto__)){
var buf = temp__5751__auto__;
cljs.pprint.write_tokens(this$,buf,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__5753__auto__ = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5753__auto__)){
var tws = temp__5753__auto__;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,"\n",(-1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lines),(1))){
return s;
} else {
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))));
var l = cljs.core.first(lines);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffering,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))){
var oldpos_18707 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_18708 = (oldpos_18707 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_18708);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_18707,newpos_18708));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l);
}

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),"\n");

var seq__18703_18709 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__18704_18710 = null;
var count__18705_18711 = (0);
var i__18706_18712 = (0);
while(true){
if((i__18706_18712 < count__18705_18711)){
var l_18713__$1 = chunk__18704_18710.cljs$core$IIndexed$_nth$arity$2(null,i__18706_18712);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_18713__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}


var G__18714 = seq__18703_18709;
var G__18715 = chunk__18704_18710;
var G__18716 = count__18705_18711;
var G__18717 = (i__18706_18712 + (1));
seq__18703_18709 = G__18714;
chunk__18704_18710 = G__18715;
count__18705_18711 = G__18716;
i__18706_18712 = G__18717;
continue;
} else {
var temp__5753__auto___18718 = cljs.core.seq(seq__18703_18709);
if(temp__5753__auto___18718){
var seq__18703_18719__$1 = temp__5753__auto___18718;
if(cljs.core.chunked_seq_QMARK_(seq__18703_18719__$1)){
var c__4638__auto___18720 = cljs.core.chunk_first(seq__18703_18719__$1);
var G__18721 = cljs.core.chunk_rest(seq__18703_18719__$1);
var G__18722 = c__4638__auto___18720;
var G__18723 = cljs.core.count(c__4638__auto___18720);
var G__18724 = (0);
seq__18703_18709 = G__18721;
chunk__18704_18710 = G__18722;
count__18705_18711 = G__18723;
i__18706_18712 = G__18724;
continue;
} else {
var l_18725__$1 = cljs.core.first(seq__18703_18719__$1);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_18725__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}


var G__18726 = cljs.core.next(seq__18703_18719__$1);
var G__18727 = null;
var G__18728 = (0);
var G__18729 = (0);
seq__18703_18709 = G__18726;
chunk__18704_18710 = G__18727;
count__18705_18711 = G__18728;
i__18706_18712 = G__18729;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffering,cljs.core.cst$kw$writing);

return cljs.core.last(lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),c);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
return cljs.pprint.write_initial_lines(this$,"\n");
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(cljs.core.char$(c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$miser_DASH_width,cljs.core.cst$kw$buffer_DASH_block,cljs.core.cst$kw$pretty_DASH_writer,cljs.core.cst$kw$sections,cljs.core.cst$kw$mode,cljs.core.cst$kw$pos,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$base,cljs.core.cst$kw$buffer_DASH_level,cljs.core.cst$kw$buffer],[lb,miser_width,lb,true,null,cljs.core.cst$kw$writing,(0),null,cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint18730 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint18730 = (function (writer,max_columns,miser_width,lb,fields,meta18731){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta18731 = meta18731;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint18730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18732,meta18731__$1){
var self__ = this;
var _18732__$1 = this;
return (new cljs.pprint.t_cljs$pprint18730(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta18731__$1));
}));

(cljs.pprint.t_cljs$pprint18730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18732){
var self__ = this;
var _18732__$1 = this;
return self__.meta18731;
}));

(cljs.pprint.t_cljs$pprint18730.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
}));

(cljs.pprint.t_cljs$pprint18730.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__18733 = cljs.core._EQ_;
var expr__18734 = cljs.core.type(x);
if(cljs.core.truth_((pred__18733.cljs$core$IFn$_invoke$arity$2 ? pred__18733.cljs$core$IFn$_invoke$arity$2(String,expr__18734) : pred__18733.call(null,String,expr__18734)))){
var s0 = cljs.pprint.write_initial_lines(this$__$1,x);
var s = clojure.string.replace_first(s0,/\s+$/,"");
var white_space = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s0,((s).length));
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),s);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,white_space);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
var newpos = (oldpos + cljs.core.count(s0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$__$1,cljs.pprint.make_buffer_blob(s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_((pred__18733.cljs$core$IFn$_invoke$arity$2 ? pred__18733.cljs$core$IFn$_invoke$arity$2(Number,expr__18734) : pred__18733.call(null,Number,expr__18734)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__18734)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint18730.prototype.cljs$core$IWriter$_flush$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.cljs$pprint$IPrettyFlush$_ppflush$arity$1(null);

return cljs.core._flush(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))));
}));

(cljs.pprint.t_cljs$pprint18730.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.pprint.t_cljs$pprint18730.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),cljs.core.cst$kw$buffering)){
cljs.pprint.write_tokens(this$__$1,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space(this$__$1);
}
}));

(cljs.pprint.t_cljs$pprint18730.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$miser_DASH_width,cljs.core.cst$sym$lb,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta18731], null);
}));

(cljs.pprint.t_cljs$pprint18730.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint18730.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint18730");

(cljs.pprint.t_cljs$pprint18730.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.pprint/t_cljs$pprint18730");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint18730.
 */
cljs.pprint.__GT_t_cljs$pprint18730 = (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint18730(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta18731){
return (new cljs.pprint.t_cljs$pprint18730(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta18731));
});

}

return (new cljs.pprint.t_cljs$pprint18730(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

var temp__5753__auto___18737 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5753__auto___18737)){
var cb_18738 = temp__5753__auto___18737;
var G__18736_18739 = cljs.core.cst$kw$start;
(cb_18738.cljs$core$IFn$_invoke$arity$1 ? cb_18738.cljs$core$IFn$_invoke$arity$1(G__18736_18739) : cb_18738.call(null,G__18736_18739));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(lb.start_col,col);

return cljs.core.reset_BANG_(lb.indent,col);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count(prefix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_start_block_t(lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var suffix = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

if(cljs.core.truth_(suffix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
}

var temp__5753__auto___18741 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5753__auto___18741)){
var cb_18742 = temp__5753__auto___18741;
var G__18740_18743 = cljs.core.cst$kw$end;
(cb_18742.cljs$core$IFn$_invoke$arity$1 ? cb_18742.cljs$core$IFn$_invoke$arity$1(G__18740_18743) : cb_18742.call(null,G__18740_18743));
} else {
}
} else {
var oldpos_18744 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_18745 = (oldpos_18744 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_18745);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_18744,newpos_18745));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$buffering);

var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_nl_t(type,cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__18746 = cljs.core._EQ_;
var expr__18747 = relative_to;
if(cljs.core.truth_((function (){var G__18749 = cljs.core.cst$kw$block;
var G__18750 = expr__18747;
return (pred__18746.cljs$core$IFn$_invoke$arity$2 ? pred__18746.cljs$core$IFn$_invoke$arity$2(G__18749,G__18750) : pred__18746.call(null,G__18749,G__18750));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__18751 = cljs.core.cst$kw$current;
var G__18752 = expr__18747;
return (pred__18746.cljs$core$IFn$_invoke$arity$2 ? pred__18746.cljs$core$IFn$_invoke$arity$2(G__18751,G__18752) : pred__18746.call(null,G__18751,G__18752));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__18747)].join('')));
}
}
})()));
} else {
var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_indent_t(lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined')){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__18753_SHARP_){
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__18753_SHARP_));
if(cljs.core.truth_(temp__5753__auto__)){
var v = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__18753_SHARP_)], null);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0)));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__4210__auto__ = (((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x));
if(and__4210__auto__){
return cljs.core.cst$kw$pretty_DASH_writer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(x)));
} else {
return and__4210__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer(base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__4210__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__4210__auto__)){
var and__4210__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__4210__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})();
if(cljs.core.not(cljs.pprint._STAR_print_pretty_STAR_)){
(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
(cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1)));
} else {
}

(cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object));
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__4824__auto__ = [];
var len__4818__auto___18785 = arguments.length;
var i__4819__auto___18786 = (0);
while(true){
if((i__4819__auto___18786 < len__4818__auto___18785)){
args__4824__auto__.push((arguments[i__4819__auto___18786]));

var G__18787 = (i__4819__auto___18786 + (1));
i__4819__auto___18786 = G__18787;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stream,true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kw_args)], 0));
var _STAR_print_base_STAR__orig_val__18757 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR__orig_val__18758 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR__orig_val__18759 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__18760 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR__orig_val__18761 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR__orig_val__18762 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR__orig_val__18763 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR__orig_val__18764 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR__orig_val__18765 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR__orig_val__18766 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR__orig_val__18767 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR__orig_val__18768 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
var _STAR_print_base_STAR__temp_val__18769 = cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);
var _STAR_print_circle_STAR__temp_val__18770 = cljs.core.cst$kw$circle.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);
var _STAR_print_length_STAR__temp_val__18771 = cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);
var _STAR_print_level_STAR__temp_val__18772 = cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);
var _STAR_print_lines_STAR__temp_val__18773 = cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);
var _STAR_print_miser_width_STAR__temp_val__18774 = cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);
var _STAR_print_pprint_dispatch_STAR__temp_val__18775 = cljs.core.cst$kw$dispatch.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);
var _STAR_print_pretty_STAR__temp_val__18776 = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);
var _STAR_print_radix_STAR__temp_val__18777 = cljs.core.cst$kw$radix.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);
var _STAR_print_readably_STAR__temp_val__18778 = cljs.core.cst$kw$readably.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);
var _STAR_print_right_margin_STAR__temp_val__18779 = cljs.core.cst$kw$right_DASH_margin.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);
var _STAR_print_suppress_namespaces_STAR__temp_val__18780 = cljs.core.cst$kw$suppress_DASH_namespaces.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);
(cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__temp_val__18769);

(cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__temp_val__18770);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__18771);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__18772);

(cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__temp_val__18773);

(cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__temp_val__18774);

(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__18775);

(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__18776);

(cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__temp_val__18777);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__18778);

(cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__temp_val__18779);

(cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__temp_val__18780);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,cljs.core.cst$kw$stream))?cljs.core.cst$kw$stream.cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = ((((optval === true) || ((optval == null))))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.core.truth_(cljs.pprint._STAR_print_pretty_STAR_)){
var base_writer__18258__auto___18788 = base_writer;
var new_writer__18259__auto___18789 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__18258__auto___18788));
var _STAR_out_STAR__orig_val__18781_18790 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__18782_18791 = ((new_writer__18259__auto___18789)?cljs.pprint.make_pretty_writer(base_writer__18258__auto___18788,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__18258__auto___18788);
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__18782_18791);

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__18781_18790);
}} else {
var _STAR_out_STAR__orig_val__18783_18792 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__18784_18793 = base_writer;
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__18784_18793);

try{(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__18783_18792);
}}

if(optval === true){
cljs.core.string_print(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
}

if((optval == null)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
return null;
}
}finally {}}finally {(cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__orig_val__18768);

(cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__orig_val__18767);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__18766);

(cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__orig_val__18765);

(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__18764);

(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__18763);

(cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__orig_val__18762);

(cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__orig_val__18761);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__18760);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__18759);

(cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__orig_val__18758);

(cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__orig_val__18757);
}}));

(cljs.pprint.write.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.pprint.write.cljs$lang$applyTo = (function (seq18755){
var G__18756 = cljs.core.first(seq18755);
var seq18755__$1 = cljs.core.next(seq18755);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18756,seq18755__$1);
}));

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__18795 = arguments.length;
switch (G__18795) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__18796 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__18797 = (new cljs.core.StringBufferWriter(sb));
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__18797);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__18796);
}}));

(cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__18258__auto__ = writer;
var new_writer__18259__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__18258__auto__));
var _STAR_out_STAR__orig_val__18798 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__18799 = ((new_writer__18259__auto__)?cljs.pprint.make_pretty_writer(base_writer__18258__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__18258__auto__);
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__18799);

try{var _STAR_print_pretty_STAR__orig_val__18800_18803 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_pretty_STAR__temp_val__18801_18804 = true;
(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__18801_18804);

try{cljs.pprint.write_out(object);
}finally {(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__18800_18803);
}
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_))))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__18798);
}}));

(cljs.pprint.pprint.cljs$lang$maxFixedArity = 2);

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$);

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not((choices.cljs$core$IFn$_invoke$arity$1 ? choices.cljs$core$IFn$_invoke$arity$1(arg) : choices.call(null,arg)))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__4210__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__4210__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__4210__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mandatory,null,cljs.core.cst$kw$miser,null,cljs.core.cst$kw$fill,null,cljs.core.cst$kw$linear,null], null), null));

return cljs.pprint.nl(cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg(relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$block,null,cljs.core.cst$kw$current,null], null), null));

return cljs.pprint.indent(cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$section,null,cljs.core.cst$kw$line,null,cljs.core.cst$kw$line_DASH_relative,null,cljs.core.cst$kw$section_DASH_relative,null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__4824__auto__ = [];
var len__4818__auto___18808 = arguments.length;
var i__4819__auto___18809 = (0);
while(true){
if((i__4819__auto___18809 < len__4818__auto___18808)){
args__4824__auto__.push((arguments[i__4819__auto___18809]));

var G__18810 = (i__4819__auto___18809 + (1));
i__4819__auto___18809 = G__18810;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?cljs.pprint.compile_format(format_in):format_in);
var navigator = cljs.pprint.init_navigator(args);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3(writer,compiled_format,navigator);
}));

(cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq18805){
var G__18806 = cljs.core.first(seq18805);
var seq18805__$1 = cljs.core.next(seq18805);
var G__18807 = cljs.core.first(seq18805__$1);
var seq18805__$2 = cljs.core.next(seq18805__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18806,G__18807,seq18805__$2);
}));

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(offset," "))),"^","\n"].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k18812,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__18816 = k18812;
var G__18816__$1 = (((G__18816 instanceof cljs.core.Keyword))?G__18816.fqn:null);
switch (G__18816__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18812,else__4464__auto__);

}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__18817){
var vec__18818 = p__18817;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18818,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18818,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18811){
var self__ = this;
var G__18811__$1 = this;
return (new cljs.core.RecordIter((0),G__18811__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$seq,cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (){var fexpr__18821 = (function (coll__4458__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
});
return fexpr__18821(this__4457__auto____$1);
})();
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18813,other18814){
var self__ = this;
var this18813__$1 = this;
return (((!((other18814 == null)))) && ((((this18813__$1.constructor === other18814.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18813__$1.seq,other18814.seq)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18813__$1.rest,other18814.rest)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18813__$1.pos,other18814.pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18813__$1.__extmap,other18814.__extmap)))))))))));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pos,null,cljs.core.cst$kw$seq,null,cljs.core.cst$kw$rest,null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k18812){
var self__ = this;
var this__4468__auto____$1 = this;
var G__18822 = k18812;
var G__18822__$1 = (((G__18822 instanceof cljs.core.Keyword))?G__18822.fqn:null);
switch (G__18822__$1) {
case "seq":
case "rest":
case "pos":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18812);

}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__18811){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__18823 = cljs.core.keyword_identical_QMARK_;
var expr__18824 = k__4470__auto__;
if(cljs.core.truth_((function (){var G__18826 = cljs.core.cst$kw$seq;
var G__18827 = expr__18824;
return (pred__18823.cljs$core$IFn$_invoke$arity$2 ? pred__18823.cljs$core$IFn$_invoke$arity$2(G__18826,G__18827) : pred__18823.call(null,G__18826,G__18827));
})())){
return (new cljs.pprint.arg_navigator(G__18811,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18828 = cljs.core.cst$kw$rest;
var G__18829 = expr__18824;
return (pred__18823.cljs$core$IFn$_invoke$arity$2 ? pred__18823.cljs$core$IFn$_invoke$arity$2(G__18828,G__18829) : pred__18823.call(null,G__18828,G__18829));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,G__18811,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18830 = cljs.core.cst$kw$pos;
var G__18831 = expr__18824;
return (pred__18823.cljs$core$IFn$_invoke$arity$2 ? pred__18823.cljs$core$IFn$_invoke$arity$2(G__18830,G__18831) : pred__18823.call(null,G__18830,G__18831));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__18811,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__18811),null));
}
}
}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$seq,self__.seq,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$rest,self__.rest,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$pos,self__.pos,null))], null),self__.__extmap));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__18811){
var self__ = this;
var this__4460__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__18811,self__.__extmap,self__.__hash));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$seq,cljs.core.cst$sym$rest,cljs.core.cst$sym$pos], null);
}));

(cljs.pprint.arg_navigator.cljs$lang$type = true);

(cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"cljs.pprint/arg-navigator",null,(1),null));
}));

(cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"cljs.pprint/arg-navigator");
}));

/**
 * Positional factory function for cljs.pprint/arg-navigator.
 */
cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/arg-navigator, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__18815){
var extmap__4501__auto__ = (function (){var G__18832 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18815,cljs.core.cst$kw$seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], 0));
if(cljs.core.record_QMARK_(G__18815)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18832);
} else {
return G__18832;
}
})();
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(G__18815),cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(G__18815),cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(G__18815),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq(s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__18835 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18835,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18835,(1),null);
var compiled_format = ((typeof raw_format === 'string')?cljs.pprint.compile_format(raw_format):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator))){
var G__18838 = navigator;
var G__18839 = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__18838,G__18839) : cljs.pprint.relative_reposition.call(null,G__18838,G__18839));
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition(navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k18841,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__18845 = k18841;
var G__18845__$1 = (((G__18845 instanceof cljs.core.Keyword))?G__18845.fqn:null);
switch (G__18845__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18841,else__4464__auto__);

}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__18846){
var vec__18847 = p__18846;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18847,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18847,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18840){
var self__ = this;
var G__18840__$1 = this;
return (new cljs.core.RecordIter((0),G__18840__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$func,cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (){var fexpr__18850 = (function (coll__4458__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
});
return fexpr__18850(this__4457__auto____$1);
})();
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18842,other18843){
var self__ = this;
var this18842__$1 = this;
return (((!((other18843 == null)))) && ((((this18842__$1.constructor === other18843.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18842__$1.func,other18843.func)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18842__$1.def,other18843.def)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18842__$1.params,other18843.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18842__$1.offset,other18843.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18842__$1.__extmap,other18843.__extmap)))))))))))));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$func,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$def,null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k18841){
var self__ = this;
var this__4468__auto____$1 = this;
var G__18851 = k18841;
var G__18851__$1 = (((G__18851 instanceof cljs.core.Keyword))?G__18851.fqn:null);
switch (G__18851__$1) {
case "func":
case "def":
case "params":
case "offset":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18841);

}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__18840){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__18852 = cljs.core.keyword_identical_QMARK_;
var expr__18853 = k__4470__auto__;
if(cljs.core.truth_((function (){var G__18855 = cljs.core.cst$kw$func;
var G__18856 = expr__18853;
return (pred__18852.cljs$core$IFn$_invoke$arity$2 ? pred__18852.cljs$core$IFn$_invoke$arity$2(G__18855,G__18856) : pred__18852.call(null,G__18855,G__18856));
})())){
return (new cljs.pprint.compiled_directive(G__18840,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18857 = cljs.core.cst$kw$def;
var G__18858 = expr__18853;
return (pred__18852.cljs$core$IFn$_invoke$arity$2 ? pred__18852.cljs$core$IFn$_invoke$arity$2(G__18857,G__18858) : pred__18852.call(null,G__18857,G__18858));
})())){
return (new cljs.pprint.compiled_directive(self__.func,G__18840,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18859 = cljs.core.cst$kw$params;
var G__18860 = expr__18853;
return (pred__18852.cljs$core$IFn$_invoke$arity$2 ? pred__18852.cljs$core$IFn$_invoke$arity$2(G__18859,G__18860) : pred__18852.call(null,G__18859,G__18860));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__18840,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18861 = cljs.core.cst$kw$offset;
var G__18862 = expr__18853;
return (pred__18852.cljs$core$IFn$_invoke$arity$2 ? pred__18852.cljs$core$IFn$_invoke$arity$2(G__18861,G__18862) : pred__18852.call(null,G__18861,G__18862));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__18840,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__18840),null));
}
}
}
}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$func,self__.func,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$def,self__.def,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$params,self__.params,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$offset,self__.offset,null))], null),self__.__extmap));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__18840){
var self__ = this;
var this__4460__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__18840,self__.__extmap,self__.__hash));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$func,cljs.core.cst$sym$def,cljs.core.cst$sym$params,cljs.core.cst$sym$offset], null);
}));

(cljs.pprint.compiled_directive.cljs$lang$type = true);

(cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"cljs.pprint/compiled-directive",null,(1),null));
}));

(cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"cljs.pprint/compiled-directive");
}));

/**
 * Positional factory function for cljs.pprint/compiled-directive.
 */
cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

/**
 * Factory function for cljs.pprint/compiled-directive, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__18844){
var extmap__4501__auto__ = (function (){var G__18863 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18844,cljs.core.cst$kw$func,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], 0));
if(cljs.core.record_QMARK_(G__18844)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18863);
} else {
return G__18863;
}
})();
return (new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(G__18844),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(G__18844),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__18844),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__18844),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__18866,navigator){
var vec__18867 = p__18866;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18867,(0),null);
var vec__18870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18867,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18870,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18870,(1),null);
var vec__18873 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$parameter_DASH_from_DASH_args))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$remaining_DASH_arg_DASH_count))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18873,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18873,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__18876 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18876,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18876,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_(n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),(cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.opt_base_str(cljs.pprint._STAR_print_base_STAR_,n))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__18879 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18879,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18879,(1),null);
var base_output = (function (){var or__4212__auto__ = cljs.pprint.format_simple_number(arg);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (print_func.cljs$core$IFn$_invoke$arity$1 ? print_func.cljs$core$IFn$_invoke$arity$1(arg) : print_func.call(null,arg));
}
})();
var base_width = base_output.length;
var min_width = (base_width + cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot(((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params)) + (1)) * cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((width - base_width),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join('')], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join('')], 0));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_(x)){
return true;
} else {
if(cljs.pprint.float_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__18882_SHARP_){
if((p1__18882_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__18882_SHARP_,base),cljs.core.quot(p1__18882_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18883_SHARP_){
if((p1__18883_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__18883_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__18883_SHARP_ - (10))));
}
}),cljs.pprint.remainders(base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str(base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(unit,x))),cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(unit,x))], null);
}),cljs.core.reverse(lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__18885 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18885,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18885,(1),null);
if(cljs.pprint.integral_QMARK_(arg)){
var neg_18888 = (arg < (0));
var pos_arg_18889 = ((neg_18888)?(- arg):arg);
var raw_str_18890 = cljs.pprint.opt_base_str(base,pos_arg_18889);
var group_str_18891 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18884_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__18884_SHARP_);
}),cljs.pprint.group_by_STAR_(cljs.core.cst$kw$commainterval.cljs$core$IFn$_invoke$arity$1(params),raw_str_18890));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),cljs.core.cst$kw$commachar.cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_18890);
var signed_str_18892 = ((neg_18888)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_18891)].join(''):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_18891)].join(''):group_str_18891
));
var padded_str_18893 = (((signed_str_18892.length < cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - signed_str_18892.length),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_18892)].join(''):signed_str_18892);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([padded_str_18893], 0));
} else {
cljs.pprint.format_ascii(cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$colinc,(1),cljs.core.cst$kw$minpad,(0),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [(((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null),(((((hundreds > (0))) && ((tens > (0)))))?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),(((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count(parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first(parts);
var remainder = cljs.core.next(parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",acc))),(((((!(cljs.core.empty_QMARK_(this$)))) && ((!(cljs.core.empty_QMARK_(acc))))))?", ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),(((((!(cljs.core.empty_QMARK_(this$)))) && (((pos + offset) > (0)))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null)].join('');
} else {
var G__18894 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__18895 = (pos - (1));
var G__18896 = cljs.core.first(remainder);
var G__18897 = cljs.core.next(remainder);
acc = G__18894;
pos = G__18895;
this$ = G__18896;
remainder = G__18897;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__18898 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18898,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18898,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zero"], 0));
} else {
var abs_arg_18901 = (((arg < (0)))?(- arg):arg);
var parts_18902 = cljs.pprint.remainders((1000),abs_arg_18901);
if((cljs.core.count(parts_18902) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_18903 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_18902);
var full_str_18904 = cljs.pprint.add_english_scales(parts_strs_18903,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(((arg < (0)))?"minus ":null),full_str_18904].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [(((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null),(((((hundreds > (0))) && ((tens > (0)))))?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
if((((ten_digit > (0))) && ((!((unit_digit > (0))))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),(((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__18905 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18905,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18905,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zeroth"], 0));
} else {
var abs_arg_18908 = (((arg < (0)))?(- arg):arg);
var parts_18909 = cljs.pprint.remainders((1000),abs_arg_18908);
if((cljs.core.count(parts_18909) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_18910 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_18909));
var head_str_18911 = cljs.pprint.add_english_scales(parts_strs_18910,(1));
var tail_str_18912 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_18909));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(((arg < (0)))?"minus ":null),(((((!(cljs.core.empty_QMARK_(head_str_18911)))) && ((!(cljs.core.empty_QMARK_(tail_str_18912))))))?[head_str_18911,", ",tail_str_18912].join(''):(((!(cljs.core.empty_QMARK_(head_str_18911))))?[head_str_18911,"th"].join(''):tail_str_18912
))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));

var low_two_digits_18913 = cljs.core.rem(arg,(100));
var not_teens_18914 = ((((11) < low_two_digits_18913)) || (((19) > low_two_digits_18913)));
var low_digit_18915 = cljs.core.rem(low_two_digits_18913,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((low_digit_18915 === (1))) && (not_teens_18914)))?"st":(((((low_digit_18915 === (2))) && (not_teens_18914)))?"nd":(((((low_digit_18915 === (3))) && (not_teens_18914)))?"rd":"th"
)))], 0));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__18916 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18916,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18916,(1),null);
if(((typeof arg === 'number') && ((((arg > (0))) && ((arg < (4000))))))){
var digits_18919 = cljs.pprint.remainders((10),arg);
var acc_18920 = cljs.core.PersistentVector.EMPTY;
var pos_18921 = (cljs.core.count(digits_18919) - (1));
var digits_18922__$1 = digits_18919;
while(true){
if(cljs.core.empty_QMARK_(digits_18922__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_18920)], 0));
} else {
var digit_18923 = cljs.core.first(digits_18922__$1);
var G__18924 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_18923))?acc_18920:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_18920,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_18921),(digit_18923 - (1)))));
var G__18925 = (pos_18921 - (1));
var G__18926 = cljs.core.next(digits_18922__$1);
acc_18920 = G__18924;
pos_18921 = G__18925;
digits_18922__$1 = G__18926;
continue;
}
break;
}
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__18927 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18927,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18927,(1),null);
var as_int = cljs.pprint.char_code(c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Meta-"], 0));
} else {
}

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((base_char + (64))))].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_char,(127)))?"Control-?":cljs.core.char$(base_char)
)))], 0));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__18930 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18930,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18930,(1),null);
var pred__18933_18940 = cljs.core._EQ_;
var expr__18934_18941 = cljs.core.cst$kw$char_DASH_format.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((function (){var G__18936 = "o";
var G__18937 = expr__18934_18941;
return (pred__18933_18940.cljs$core$IFn$_invoke$arity$2 ? pred__18933_18940.cljs$core$IFn$_invoke$arity$2(G__18936,G__18937) : pred__18933_18940.call(null,G__18936,G__18937));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3,'0o",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((function (){var G__18938 = "u";
var G__18939 = expr__18934_18941;
return (pred__18933_18940.cljs$core$IFn$_invoke$arity$2 ? pred__18933_18940.cljs$core$IFn$_invoke$arity$2(G__18938,G__18939) : pred__18933_18940.call(null,G__18938,G__18939));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4,'0x",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__18933_18940.cljs$core$IFn$_invoke$arity$2 ? pred__18933_18940.cljs$core$IFn$_invoke$arity$2(null,expr__18934_18941) : pred__18933_18940.call(null,null,expr__18934_18941)))){
cljs.pprint.print_char(c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__18934_18941)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__18942 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18942,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18942,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([char$], 0));

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first(context);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,token)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,token)));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second(cljs.pprint.map_passing_context((function (element,context){
if(cljs.pprint.abort_QMARK_(context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__18945 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18945,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18945,(1),null);
var vec__18948 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18948,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18948,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(f));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,cljs.core.str.cljs$core$IFn$_invoke$arity$1((((s).length) - (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),dotloc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(dotloc + (1)))].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),exploc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),exploc)].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__18951 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18951,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18951,(1),null);
var m1 = cljs.pprint.rtrim(m,"0");
var m2 = cljs.pprint.ltrim(m1,"0");
var delta = (cljs.core.count(m1) - cljs.core.count(m2));
var e__$1 = (((((cljs.core.count(e) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),"+"))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e,(1)):e);
if(cljs.core.empty_QMARK_(m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count(s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"1",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("9",s.charAt(i))){
var G__18954 = (i - (1));
i = G__18954;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.char$((cljs.pprint.char_code(s.charAt(i)) + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__4212__auto__ = d;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count(m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__4295__auto__ = (2);
var y__4296__auto__ = w;
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__4295__auto__ = (e + (1));
var y__4296__auto__ = (w__$1 - (1));
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})():(w__$1 + e)
));
var vec__18955 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18955,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18955,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18955,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18955,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m1,round_pos__$1);
var result = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m1,(0),round_pos__$1);
if((cljs.pprint.char_code(round_char) >= cljs.pprint.char_code("5"))){
var round_up_result = cljs.pprint.inc_s(result);
var expanded = (cljs.core.count(round_up_result) > ((result).length));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(round_up_result,(0),(cljs.core.count(round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__18958 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18958,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18958,(1),null);
var len = cljs.core.count(m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),loc),".",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,loc)].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal(cljs.pprint.expand_fixed(m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),k),".",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,k)].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var vec__18961 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18961,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18961,(1),null);
var vec__18964 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18964,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18964,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__18967 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18967,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18967,(1),null);
var scaled_exp = (exp + cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__4212__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = ((cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp)));
var vec__18970 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18970,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18970,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18970,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__4210__auto__ = w;
if(cljs.core.truth_(and__4210__auto__)){
var and__4210__auto____$1 = d;
if(cljs.core.truth_(and__4210__auto____$1)){
return (((d >= (1))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((0)),"0")) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((1)),".")) && ((((fixed_repr).length) > (w - (cljs.core.truth_(add_sign)?(1):(0))))))))));
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_18973 = ((fixed_repr__$1).length);
var signed_len_18974 = (cljs.core.truth_(add_sign)?(len_18973 + (1)):len_18973);
var prepend_zero_18975__$1 = ((prepend_zero) && ((!((signed_len_18974 >= w)))));
var append_zero_18976__$1 = ((append_zero) && ((!((signed_len_18974 >= w)))));
var full_len_18977 = ((((prepend_zero_18975__$1) || (append_zero_18976__$1)))?(signed_len_18974 + (1)):signed_len_18974);
if(cljs.core.truth_((function (){var and__4210__auto__ = (full_len_18977 > w);
if(and__4210__auto__){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4210__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_18977),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),((prepend_zero_18975__$1)?"0":null),fixed_repr__$1,((append_zero_18976__$1)?"0":null)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),((prepend_zero)?"0":null),fixed_repr__$1,((append_zero)?"0":null)].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__18978 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18978,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18978,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__18984_18994 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__18985_18995 = G__18984_18994;
var mantissa_18996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18985_18995,(0),null);
var exp_18997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18985_18995,(1),null);
var G__18984_18998__$1 = G__18984_18994;
while(true){
var vec__18988_18999 = G__18984_18998__$1;
var mantissa_19000__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18988_18999,(0),null);
var exp_19001__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18988_18999,(1),null);
var w_19002 = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d_19003 = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e_19004 = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var k_19005 = cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params);
var expchar_19006 = (function (){var or__4212__auto__ = cljs.core.cst$kw$exponentchar.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "E";
}
})();
var add_sign_19007 = (function (){var or__4212__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_19008 = (k_19005 <= (0));
var scaled_exp_19009 = (exp_19001__$1 - (k_19005 - (1)));
var scaled_exp_str_19010 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_19009));
var scaled_exp_str_19011__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_19006),(((scaled_exp_19009 < (0)))?"-":"+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_19004)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_19004 - ((scaled_exp_str_19010).length)),"0")):null)),scaled_exp_str_19010].join('');
var exp_width_19012 = ((scaled_exp_str_19011__$1).length);
var base_mantissa_width_19013 = cljs.core.count(mantissa_19000__$1);
var scaled_mantissa_19014 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_19005),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_19000__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_19003)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_19003 - (base_mantissa_width_19013 - (1))) - (((k_19005 < (0)))?(- k_19005):(0))),"0")):null))].join('');
var w_mantissa_19015 = (cljs.core.truth_(w_19002)?(w_19002 - exp_width_19012):null);
var vec__18991_19016 = cljs.pprint.round_str(scaled_mantissa_19014,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_19005,(0)))?(d_19003 - (1)):(((k_19005 > (0)))?d_19003:(((k_19005 < (0)))?(d_19003 - (1)):null))),(cljs.core.truth_(w_mantissa_19015)?(w_mantissa_19015 - (cljs.core.truth_(add_sign_19007)?(1):(0))):null));
var rounded_mantissa_19017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18991_19016,(0),null);
var __19018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18991_19016,(1),null);
var incr_exp_19019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18991_19016,(2),null);
var full_mantissa_19020 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_19017,k_19005);
var append_zero_19021 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_19005,cljs.core.count(rounded_mantissa_19017))) && ((d_19003 == null)));
if(cljs.core.not(incr_exp_19019)){
if(cljs.core.truth_(w_19002)){
var len_19022 = (((full_mantissa_19020).length) + exp_width_19012);
var signed_len_19023 = (cljs.core.truth_(add_sign_19007)?(len_19022 + (1)):len_19022);
var prepend_zero_19024__$1 = ((prepend_zero_19008) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_19023,w_19002)))));
var full_len_19025 = ((prepend_zero_19024__$1)?(signed_len_19023 + (1)):signed_len_19023);
var append_zero_19026__$1 = ((append_zero_19021) && ((full_len_19025 < w_19002)));
if(cljs.core.truth_((function (){var and__4210__auto__ = (function (){var or__4212__auto__ = (full_len_19025 > w_19002);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var and__4210__auto__ = e_19004;
if(cljs.core.truth_(and__4210__auto__)){
return ((exp_width_19012 - (2)) > e_19004);
} else {
return and__4210__auto__;
}
}
})();
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4210__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_19002,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_19002 - full_len_19025) - ((append_zero_19026__$1)?(1):(0))),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),(cljs.core.truth_(add_sign_19007)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_19024__$1)?"0":null),full_mantissa_19020,((append_zero_19026__$1)?"0":null),scaled_exp_str_19011__$1].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(cljs.core.truth_(add_sign_19007)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_19008)?"0":null),full_mantissa_19020,((append_zero_19021)?"0":null),scaled_exp_str_19011__$1].join('')], 0));
}
} else {
var G__19027 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_19017,(exp_19001__$1 + (1))], null);
G__18984_18998__$1 = G__19027;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__19028 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19028,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19028,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__19031 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19031,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19031,(1),null);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__4295__auto__ = cljs.core.count(mantissa);
var y__4296__auto__ = (function (){var x__4298__auto__ = n;
var y__4299__auto__ = (7);
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})());
var dd = (d__$1 - n);
if(((((0) <= dd)) && ((dd <= d__$1)))){
var navigator__$1 = cljs.pprint.fixed_float(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$w,ww,cljs.core.cst$kw$d,dd,cljs.core.cst$kw$k,(0),cljs.core.cst$kw$overflowchar,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ee," "))], 0));

return navigator__$1;
} else {
return cljs.pprint.exponential_float(params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__19034 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19034,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19034,(1),null);
var vec__19037 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19037,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19037,(1),null);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__4212__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (arg < (0));
}
})();
var vec__19040 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19040,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19040,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19040,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - fixed_repr.indexOf(".")),"0"))),fixed_repr].join('');
var full_len = (((full_repr).length) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4210__auto__)){
return add_sign;
} else {
return and__4210__auto__;
}
})())?(((arg < (0)))?"-":"+"):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params));
if(and__4210__auto__){
return add_sign;
} else {
return and__4210__auto__;
}
})())?(((arg < (0)))?"-":"+"):null),full_repr].join('')], 0));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(params);
var vec__19043 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19043,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19043,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses)))))?cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__19046 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19046,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19046,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__19049 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19049,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19049,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first(clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,arg_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__19052 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19052,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19052,(1),null);
var vec__19055 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19055,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19055,(1),null);
var args = cljs.pprint.init_navigator(arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not(max_count)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1))))))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__4212__auto__ = ((cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(args__$1))) && (((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4212__auto__){
return or__4212__auto__;
} else {
var and__4210__auto__ = max_count;
if(cljs.core.truth_(and__4210__auto__)){
return (count >= max_count);
} else {
return and__4210__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,args__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__19058 = (count + (1));
var G__19059 = iter_result;
var G__19060 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__19058;
args__$1 = G__19059;
last_pos = G__19060;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__19061 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19061,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19061,(1),null);
var vec__19064 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19064,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19064,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__4212__auto__ = ((cljs.core.empty_QMARK_(arg_list__$1)) && (((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4212__auto__){
return or__4212__auto__;
} else {
var and__4210__auto__ = max_count;
if(cljs.core.truth_(and__4210__auto__)){
return (count >= max_count);
} else {
return and__4210__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(cljs.core.first(arg_list__$1)),cljs.pprint.init_navigator(cljs.core.next(arg_list__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__19067 = (count + (1));
var G__19068 = cljs.core.next(arg_list__$1);
count = G__19067;
arg_list__$1 = G__19068;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__19069 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19069,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19069,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not(max_count)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1))))))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__4212__auto__ = ((cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4212__auto__){
return or__4212__auto__;
} else {
var and__4210__auto__ = max_count;
if(cljs.core.truth_(and__4210__auto__)){
return (count >= max_count);
} else {
return and__4210__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return cljs.core.second(iter_result);
} else {
var G__19072 = (count + (1));
var G__19073 = iter_result;
var G__19074 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__19072;
navigator__$2 = G__19073;
last_pos = G__19074;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__19075 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19075,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19075,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__4212__auto__ = ((cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4212__auto__){
return or__4212__auto__;
} else {
var and__4210__auto__ = max_count;
if(cljs.core.truth_(and__4210__auto__)){
return (count >= max_count);
} else {
return and__4210__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__19081 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19081,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19081,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__19084 = (count + (1));
var G__19085 = navigator__$3;
count = G__19084;
navigator__$2 = G__19085;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))){
return cljs.pprint.format_logical_block(params,navigator,offsets);
} else {
return cljs.pprint.justify_clauses(params,navigator,offsets);
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_(clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first(clauses__$1);
var vec__19091 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__19094 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__19095 = (new cljs.core.StringBufferWriter(sb));
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__19095);

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)], null);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__19094);
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19091,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19091,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__19096 = cljs.core.next(clauses__$1);
var G__19097 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__19098 = iter_result;
clauses__$1 = G__19096;
acc = G__19097;
navigator__$1 = G__19098;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__19099 = (function (){var temp__5753__auto__ = cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5753__auto__)){
var else$ = temp__5753__auto__;
return cljs.pprint.render_clauses(else$,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__19102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19099,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19102,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19099,(1),null);
var navigator__$1 = (function (){var or__4212__auto__ = new_navigator;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return navigator;
}
})();
var vec__19105 = (function (){var temp__5753__auto__ = cljs.core.cst$kw$else_DASH_params.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5753__auto__)){
var p = temp__5753__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19105,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19105,(1),null);
var navigator__$2 = (function (){var or__4212__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__4212__auto__ = cljs.core.first(cljs.core.cst$kw$min_DASH_remaining.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__4212__auto__ = cljs.core.first(cljs.core.cst$kw$max_DASH_columns.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.pprint.get_max_column(cljs.core._STAR_out_STAR_);
}
})();
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var vec__19108 = cljs.pprint.render_clauses(clauses,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19108,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19108,(1),null);
var slots = (function (){var x__4295__auto__ = (1);
var y__4296__auto__ = (((cljs.core.count(strs) - (1)) + (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})();
var chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,strs));
var mincol = cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params);
var minpad = cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params);
var colinc = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot(((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__4295__auto__ = minpad;
var y__4296__auto__ = cljs.core.quot(total_pad,slots);
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__4210__auto__ = eol_str;
if(cljs.core.truth_(and__4210__auto__)){
return (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__4210__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eol_str], 0));
} else {
}

var slots_19111__$1 = slots;
var extra_pad_19112__$1 = extra_pad;
var strs_19113__$1 = strs;
var pad_only_19114 = (function (){var or__4212__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_19113__$1),(1))) && (cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))));
}
})();
while(true){
if(cljs.core.seq(strs_19113__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(pad_only_19114))?cljs.core.first(strs_19113__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__4212__auto__ = pad_only_19114;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = cljs.core.next(strs_19113__$1);
if(or__4212__auto____$1){
return or__4212__auto____$1;
} else {
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_19112__$1 > (0)))?cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__19115 = (slots_19111__$1 - (1));
var G__19116 = (extra_pad_19112__$1 - (1));
var G__19117 = (cljs.core.truth_(pad_only_19114)?strs_19113__$1:cljs.core.next(strs_19113__$1));
var G__19118 = false;
slots_19111__$1 = G__19115;
extra_pad_19112__$1 = G__19116;
strs_19113__$1 = G__19117;
pad_only_19114 = G__19118;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint19119 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint19119 = (function (writer,meta19120){
this.writer = writer;
this.meta19120 = meta19120;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint19119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19121,meta19120__$1){
var self__ = this;
var _19121__$1 = this;
return (new cljs.pprint.t_cljs$pprint19119(self__.writer,meta19120__$1));
}));

(cljs.pprint.t_cljs$pprint19119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19121){
var self__ = this;
var _19121__$1 = this;
return self__.meta19120;
}));

(cljs.pprint.t_cljs$pprint19119.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint19119.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__19122 = cljs.core._EQ_;
var expr__19123 = cljs.core.type(x);
if(cljs.core.truth_((pred__19122.cljs$core$IFn$_invoke$arity$2 ? pred__19122.cljs$core$IFn$_invoke$arity$2(String,expr__19123) : pred__19122.call(null,String,expr__19123)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__19122.cljs$core$IFn$_invoke$arity$2 ? pred__19122.cljs$core$IFn$_invoke$arity$2(Number,expr__19123) : pred__19122.call(null,Number,expr__19123)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__19123)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint19119.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta19120], null);
}));

(cljs.pprint.t_cljs$pprint19119.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint19119.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint19119");

(cljs.pprint.t_cljs$pprint19119.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.pprint/t_cljs$pprint19119");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint19119.
 */
cljs.pprint.__GT_t_cljs$pprint19119 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint19119(writer__$1,meta19120){
return (new cljs.pprint.t_cljs$pprint19119(writer__$1,meta19120));
});

}

return (new cljs.pprint.t_cljs$pprint19119(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint19125 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint19125 = (function (writer,meta19126){
this.writer = writer;
this.meta19126 = meta19126;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint19125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19127,meta19126__$1){
var self__ = this;
var _19127__$1 = this;
return (new cljs.pprint.t_cljs$pprint19125(self__.writer,meta19126__$1));
}));

(cljs.pprint.t_cljs$pprint19125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19127){
var self__ = this;
var _19127__$1 = this;
return self__.meta19126;
}));

(cljs.pprint.t_cljs$pprint19125.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint19125.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__19128 = cljs.core._EQ_;
var expr__19129 = cljs.core.type(x);
if(cljs.core.truth_((pred__19128.cljs$core$IFn$_invoke$arity$2 ? pred__19128.cljs$core$IFn$_invoke$arity$2(String,expr__19129) : pred__19128.call(null,String,expr__19129)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__19128.cljs$core$IFn$_invoke$arity$2 ? pred__19128.cljs$core$IFn$_invoke$arity$2(Number,expr__19129) : pred__19128.call(null,Number,expr__19129)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__19129)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint19125.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta19126], null);
}));

(cljs.pprint.t_cljs$pprint19125.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint19125.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint19125");

(cljs.pprint.t_cljs$pprint19125.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.pprint/t_cljs$pprint19125");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint19125.
 */
cljs.pprint.__GT_t_cljs$pprint19125 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint19125(writer__$1,meta19126){
return (new cljs.pprint.t_cljs$pprint19125(writer__$1,meta19126));
});

}

return (new cljs.pprint.t_cljs$pprint19125(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first(s);
var s__$1 = (cljs.core.truth_((function (){var and__4210__auto__ = first_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
var and__4210__auto____$1 = f;
if(cljs.core.truth_(and__4210__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())?[clojure.string.upper_case(f),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1))].join(''):s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.pprint.consume((function (s__$2){
if(cljs.core.empty_QMARK_(s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__4210__auto__ = m;
if(cljs.core.truth_(and__4210__auto__)){
return (m.index + (1));
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$2,(0),offset),clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$2,offset))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
}),s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint19131 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint19131 = (function (writer,last_was_whitespace_QMARK_,meta19132){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta19132 = meta19132;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint19131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19133,meta19132__$1){
var self__ = this;
var _19133__$1 = this;
return (new cljs.pprint.t_cljs$pprint19131(self__.writer,self__.last_was_whitespace_QMARK_,meta19132__$1));
}));

(cljs.pprint.t_cljs$pprint19131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19133){
var self__ = this;
var _19133__$1 = this;
return self__.meta19132;
}));

(cljs.pprint.t_cljs$pprint19131.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint19131.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__19134 = cljs.core._EQ_;
var expr__19135 = cljs.core.type(x);
if(cljs.core.truth_((pred__19134.cljs$core$IFn$_invoke$arity$2 ? pred__19134.cljs$core$IFn$_invoke$arity$2(String,expr__19135) : pred__19134.call(null,String,expr__19135)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),cljs.core.deref(self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)))));
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__19134.cljs$core$IFn$_invoke$arity$2 ? pred__19134.cljs$core$IFn$_invoke$arity$2(Number,expr__19135) : pred__19134.call(null,Number,expr__19135)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_(cljs.core.deref(self__.last_was_whitespace_QMARK_))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__19135)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint19131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$last_DASH_was_DASH_whitespace_QMARK_,cljs.core.cst$sym$meta19132], null);
}));

(cljs.pprint.t_cljs$pprint19131.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint19131.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint19131");

(cljs.pprint.t_cljs$pprint19131.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.pprint/t_cljs$pprint19131");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint19131.
 */
cljs.pprint.__GT_t_cljs$pprint19131 = (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint19131(writer__$1,last_was_whitespace_QMARK___$1,meta19132){
return (new cljs.pprint.t_cljs$pprint19131(writer__$1,last_was_whitespace_QMARK___$1,meta19132));
});

}

return (new cljs.pprint.t_cljs$pprint19131(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint19137 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint19137 = (function (writer,capped,meta19138){
this.writer = writer;
this.capped = capped;
this.meta19138 = meta19138;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint19137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19139,meta19138__$1){
var self__ = this;
var _19139__$1 = this;
return (new cljs.pprint.t_cljs$pprint19137(self__.writer,self__.capped,meta19138__$1));
}));

(cljs.pprint.t_cljs$pprint19137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19139){
var self__ = this;
var _19139__$1 = this;
return self__.meta19138;
}));

(cljs.pprint.t_cljs$pprint19137.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint19137.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__19140 = cljs.core._EQ_;
var expr__19141 = cljs.core.type(x);
if(cljs.core.truth_((pred__19140.cljs$core$IFn$_invoke$arity$2 ? pred__19140.cljs$core$IFn$_invoke$arity$2(String,expr__19141) : pred__19140.call(null,String,expr__19141)))){
var s = clojure.string.lower_case(x);
if(cljs.core.not(cljs.core.deref(self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__4210__auto__ = m;
if(cljs.core.truth_(and__4210__auto__)){
return m.index;
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write(self__.writer,[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),offset),clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,offset)),clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(offset + (1))))].join(''));

return cljs.core.reset_BANG_(self__.capped,true);
} else {
return cljs.core._write(self__.writer,s);
}
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
}
} else {
if(cljs.core.truth_((pred__19140.cljs$core$IFn$_invoke$arity$2 ? pred__19140.cljs$core$IFn$_invoke$arity$2(Number,expr__19141) : pred__19140.call(null,Number,expr__19141)))){
var c = cljs.core.char$(x);
if(((cljs.core.not(cljs.core.deref(self__.capped))) && (goog.string.isUnicodeChar(c)))){
cljs.core.reset_BANG_(self__.capped,true);

return cljs.core._write(self__.writer,clojure.string.upper_case(c));
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__19141)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint19137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$capped,cljs.core.cst$sym$meta19138], null);
}));

(cljs.pprint.t_cljs$pprint19137.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint19137.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint19137");

(cljs.pprint.t_cljs$pprint19137.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.pprint/t_cljs$pprint19137");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint19137.
 */
cljs.pprint.__GT_t_cljs$pprint19137 = (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint19137(writer__$1,capped__$1,meta19138){
return (new cljs.pprint.t_cljs$pprint19137(writer__$1,capped__$1,meta19138));
});

}

return (new cljs.pprint.t_cljs$pprint19137(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR__orig_val__19143 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__19144 = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__19144);

try{return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__19143);
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_(writer))){
return writer;
} else {
return cljs.pprint.pretty_writer(writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if((((!((cljs.core._STAR_out_STAR_ == null))))?(((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$))))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))))))){
return cljs.pprint.prn();
} else {
return null;
}
} else {
return cljs.pprint.prn();
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_19146 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_19147 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var current_19148 = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))));
var space_count_19149 = (((current_19148 < colnum_19146))?(colnum_19146 - current_19148):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_19147,(0)))?(0):(colinc_19147 - cljs.core.rem((current_19148 - colnum_19146),colinc_19147))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_19149," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_19150 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_19151 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var start_col_19152 = (colrel_19150 + cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))));
var offset_19153 = (((colinc_19151 > (0)))?cljs.core.rem(start_col_19152,colinc_19151):(0));
var space_count_19154 = (colrel_19150 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_19153))?(0):(colinc_19151 - offset_19153)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_19154," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__19155 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19155,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19155,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__19158_19162 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__19159_19163 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__19160_19164 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__19161_19165 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__19160_19164);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__19161_19165);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__19159_19163);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__19158_19162);
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$current:cljs.core.cst$kw$block);
cljs.pprint.pprint_indent(relative_to,cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$mandatory:cljs.core.cst$kw$fill):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$miser:cljs.core.cst$kw$linear));
cljs.pprint.pprint_newline(kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"A",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__19166_SHARP_,p2__19167_SHARP_,p3__19168_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__19166_SHARP_,p2__19167_SHARP_,p3__19168_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"S",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__19169_SHARP_,p2__19170_SHARP_,p3__19171_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__19169_SHARP_,p2__19170_SHARP_,p3__19171_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"D",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__19172_SHARP_,p2__19173_SHARP_,p3__19174_SHARP_){
return cljs.pprint.format_integer((10),p1__19172_SHARP_,p2__19173_SHARP_,p3__19174_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"B",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__19175_SHARP_,p2__19176_SHARP_,p3__19177_SHARP_){
return cljs.pprint.format_integer((2),p1__19175_SHARP_,p2__19176_SHARP_,p3__19177_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"O",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__19178_SHARP_,p2__19179_SHARP_,p3__19180_SHARP_){
return cljs.pprint.format_integer((8),p1__19178_SHARP_,p2__19179_SHARP_,p3__19180_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"X",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__19181_SHARP_,p2__19182_SHARP_,p3__19183_SHARP_){
return cljs.pprint.format_integer((16),p1__19181_SHARP_,p2__19182_SHARP_,p3__19183_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"R",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.first(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__19184_SHARP_,p2__19185_SHARP_,p3__19186_SHARP_){
return cljs.pprint.format_integer(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(p1__19184_SHARP_),p1__19184_SHARP_,p2__19185_SHARP_,p3__19186_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4210__auto__;
}
})())){
return (function (p1__19187_SHARP_,p2__19188_SHARP_,p3__19189_SHARP_){
return cljs.pprint.format_old_roman(p1__19187_SHARP_,p2__19188_SHARP_,p3__19189_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__19190_SHARP_,p2__19191_SHARP_,p3__19192_SHARP_){
return cljs.pprint.format_new_roman(p1__19190_SHARP_,p2__19191_SHARP_,p3__19192_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__19193_SHARP_,p2__19194_SHARP_,p3__19195_SHARP_){
return cljs.pprint.format_ordinal_english(p1__19193_SHARP_,p2__19194_SHARP_,p3__19195_SHARP_);
});
} else {
return (function (p1__19196_SHARP_,p2__19197_SHARP_,p3__19198_SHARP_){
return cljs.pprint.format_cardinal_english(p1__19196_SHARP_,p2__19197_SHARP_,p3__19198_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"P",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__19208 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19208,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19208,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,(1)))?cljs.core.first(strs):cljs.core.second(strs))], 0));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"C",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$char_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"F",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"E",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"G",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"$",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"%",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__4695__auto___19226 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_19227 = (0);
while(true){
if((i_19227 < n__4695__auto___19226)){
cljs.pprint.prn();

var G__19228 = (i_19227 + (1));
i_19227 = G__19228;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"&",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_19229 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_19229 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__4695__auto___19230 = (cnt_19229 - (1));
var i_19231 = (0);
while(true){
if((i_19231 < n__4695__auto___19230)){
cljs.pprint.prn();

var G__19232 = (i_19231 + (1));
i_19231 = G__19232;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"|",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__4695__auto___19233 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_19234 = (0);
while(true){
if((i_19234 < n__4695__auto___19233)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\f"], 0));

var G__19235 = (i_19234 + (1));
i_19234 = G__19235;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"~",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"~"))], 0));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"\n",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn();
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"T",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$colnum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__19199_SHARP_,p2__19200_SHARP_,p3__19201_SHARP_){
return cljs.pprint.relative_tabulation(p1__19199_SHARP_,p2__19200_SHARP_,p3__19201_SHARP_);
});
} else {
return (function (p1__19202_SHARP_,p2__19203_SHARP_,p3__19204_SHARP_){
return cljs.pprint.absolute_tabulation(p1__19202_SHARP_,p2__19203_SHARP_,p3__19204_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"*",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition(navigator,n);
} else {
return cljs.pprint.relative_reposition(navigator,(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"?",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__19211 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19211,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19211,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__19214 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19214,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19214,(1),null);
var vec__19217 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19217,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19217,(1),null);
var sub_navigator = cljs.pprint.init_navigator(subargs);
cljs.pprint.execute_sub_format(subformat,sub_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"(",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,")",cljs.core.cst$kw$allows_DASH_separator,null,cljs.core.cst$kw$else,null], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4210__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return (function (p1__19205_SHARP_,p2__19206_SHARP_,p3__19207_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__19205_SHARP_,p2__19206_SHARP_,p3__19207_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,")",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"[",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$selector,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,"]",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$last], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,";",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$min_DASH_remaining,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$max_DASH_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$separator,true], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"]",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"{",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$max_DASH_iterations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$right,"}",cljs.core.cst$kw$allows_DASH_separator,false], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4210__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"}",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"<",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,">",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$first], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,">",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"^",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(3),[cljs.core.cst$kw$arg1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.cst$kw$colon_DASH_up_DASH_arrow:cljs.core.cst$kw$up_DASH_arrow);
if(cljs.core.truth_((function (){var and__4210__auto__ = arg1;
if(cljs.core.truth_(and__4210__auto__)){
var and__4210__auto____$1 = arg2;
if(cljs.core.truth_(and__4210__auto____$1)){
return arg3;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())){
if((((arg1 <= arg2)) && ((arg2 <= arg3)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__4210__auto__ = arg1;
if(cljs.core.truth_(and__4210__auto__)){
return arg2;
} else {
return and__4210__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"W",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var or__4212__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,null,cljs.core.cst$kw$length,null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pretty,true], null):cljs.core.PersistentVector.EMPTY));
return (function (params__$1,navigator,offsets){
var vec__19220 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19220,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19220,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
} else {
return (function (params__$1,navigator,offsets){
var vec__19223 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19223,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19223,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out(arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"_",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"I",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remaining_DASH_arg_DASH_count,null,cljs.core.cst$kw$parameter_DASH_from_DASH_args,null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__19236){
var vec__19237 = p__19236;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19237,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19237,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19237,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first(param);
var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remainder,(0)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error("Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume(cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__19240){
var vec__19241 = p__19240;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19241,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19241,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?cljs.core.cst$kw$parameter_DASH_from_DASH_args:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?cljs.core.cst$kw$remaining_DASH_arg_DASH_count:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",cljs.core.cst$kw$colon,"@",cljs.core.cst$kw$at], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__19244){
var vec__19245 = p__19244;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19245,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19245,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19245,(2),null);
if(cljs.core.empty_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.flag_defs,cljs.core.first(s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_(flags,flag)){
return cljs.pprint.format_error(["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__4210__auto__){
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__4210__auto__;
}
})())){
cljs.pprint.format_error(["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__4210__auto__){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__4210__auto__;
}
})())){
cljs.pprint.format_error(["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.not(cljs.core.cst$kw$both.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__4210__auto____$1)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())){
return cljs.pprint.format_error(["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__4298__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__4299__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags(def,flags);

if((cljs.core.count(params) > cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def),cljs.core.count(params),cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def))], 0)),cljs.core.second(cljs.core.first(params)));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__19248_SHARP_,p2__19249_SHARP_){
var val = cljs.core.first(p1__19248_SHARP_);
if((!((((val == null)) || (((cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__19249_SHARP_)),cljs.core.type(val))))))))){
return cljs.pprint.format_error(["Parameter ",cljs.core.name(cljs.core.first(p2__19249_SHARP_))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(val))].join(''),cljs.core.second(p1__19248_SHARP_));
} else {
return null;
}
}),params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__4611__auto__ = (function cljs$pprint$map_params_$_iter__19253(s__19254){
return (new cljs.core.LazySeq(null,(function (){
var s__19254__$1 = s__19254;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__19254__$1);
if(temp__5753__auto__){
var s__19254__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19254__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__19254__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__19256 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__19255 = (0);
while(true){
if((i__19255 < size__4610__auto__)){
var vec__19257 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4609__auto__,i__19255);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19257,(0),null);
var vec__19260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19257,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19260,(0),null);
cljs.core.chunk_append(b__19256,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__19269 = (i__19255 + (1));
i__19255 = G__19269;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19256),cljs$pprint$map_params_$_iter__19253(cljs.core.chunk_rest(s__19254__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19256),null);
}
} else {
var vec__19263 = cljs.core.first(s__19254__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19263,(0),null);
var vec__19266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19263,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19266,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__19253(cljs.core.rest(s__19254__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__19250_SHARP_,p2__19251_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__19250_SHARP_,p2__19251_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19252_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__19252_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__19270 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19270,(0),null);
var vec__19273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19270,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19273,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19273,(1),null);
var vec__19276 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19276,(0),null);
var vec__19279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19276,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19279,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19279,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19279,(2),null);
var directive = cljs.core.first(rest__$1);
var def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.directive_table,clojure.string.upper_case(directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params(def,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not(directive)){
cljs.pprint.format_error("Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not(def)){
cljs.pprint.format_error(["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive((function (){var fexpr__19282 = cljs.core.cst$kw$generator_DASH_fn.cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__19282.cljs$core$IFn$_invoke$arity$2 ? fexpr__19282.cljs$core$IFn$_invoke$arity$2(params,offset__$2) : fexpr__19282.call(null,params,offset__$2));
})(),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count(remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__4210__auto__ = cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__4210__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__19283 = cljs.pprint.collect_clauses(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$),remainder);
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19283,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19283,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map(subex,cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$))], 0)),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume((function (remainder__$1){
if(cljs.core.empty_QMARK_(remainder__$1)){
return cljs.pprint.format_error("No closing bracket found.",offset);
} else {
var this$ = cljs.core.first(remainder__$1);
var remainder__$2 = cljs.core.next(remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket(this$))){
return cljs.pprint.process_bracket(this$,remainder__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket_info),cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_bracket,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$else,null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$separator,null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second(cljs.pprint.consume((function (p__19286){
var vec__19287 = p__19286;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19287,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19287,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19287,(2),null);
var vec__19290 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19290,(0),null);
var vec__19293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19290,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19293,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19293,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19293,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19293,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$right_DASH_bracket)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?cljs.core.cst$kw$else:cljs.core.cst$kw$clauses),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$right_DASH_params,right_params])], 0)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$else)){
if(cljs.core.truth_(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error("Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(clause_map))))){
return cljs.pprint.format_error("The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$else,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$else_DASH_params,else_params], null)], 0)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$separator)){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error("A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$allows_DASH_separator.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first(cljs.pprint.consume((function (remainder){
var this$ = cljs.core.first(remainder);
var remainder__$1 = cljs.core.next(remainder);
var bracket = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket(this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR__orig_val__19296 = cljs.pprint._STAR_format_str_STAR_;
var _STAR_format_str_STAR__temp_val__19297 = format_str;
(cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__temp_val__19297);

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume((function (p__19298){
var vec__19299 = p__19298;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19299,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19299,(1),null);
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,tilde),(tilde + offset)], null)], null);

}
}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {(cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__orig_val__19296);
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_(format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__4212__auto__ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1))));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
}
}
})())){
return true;
} else {
var G__19302 = cljs.core.next(format__$1);
format__$1 = G__19302;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__19304 = arguments.length;
switch (G__19304) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = ((((cljs.core.not(stream)) || (stream === true)))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = ((((cljs.pprint.needs_pretty(format)) && (cljs.core.not(cljs.pprint.pretty_writer_QMARK_(real_stream)))))?cljs.pprint.get_pretty_writer(real_stream):real_stream);
var _STAR_out_STAR__orig_val__19305 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__19306 = wrapped_stream;
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__19306);

try{try{cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(format,args);
}finally {if((!((real_stream === wrapped_stream)))){
cljs.core._flush(wrapped_stream);
} else {
}
}
if(cljs.core.not(stream)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
if(stream === true){
return cljs.core.string_print(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
return null;

}
}
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__19305);
}}));

(cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.pprint.abort_QMARK_(context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__19307 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19307,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19307,(1),null);
var vec__19310 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19310,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19310,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
}));

(cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3);

cljs.pprint.cached_compile = cljs.core.memoize(cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method(multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$quote,"'",cljs.core.cst$sym$var,"#'",cljs.core.cst$sym$clojure$core_SLASH_deref,"@",cljs.core.cst$sym$clojure$core_SLASH_unquote,"~",cljs.core.cst$sym$cljs$core_SLASH_deref,"@",cljs.core.cst$sym$cljs$core_SLASH_unquote,"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = (function (){var G__19314 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__19314) : cljs.pprint.reader_macros.call(null,G__19314));
})();
if(cljs.core.truth_((function (){var and__4210__auto__ = macro_char;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(alis));
} else {
return and__4210__auto__;
}
})())){
cljs.core._write(cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out(cljs.core.second(alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__19315_19320 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__19316_19321 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__19317_19322 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__19318_19323 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__19317_19322);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__19318_19323);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count19319_19324 = (0);
var alis_19325__$1 = cljs.core.seq(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count19319_19324 < cljs.core._STAR_print_length_STAR_)))){
if(alis_19325__$1){
cljs.pprint.write_out(cljs.core.first(alis_19325__$1));

if(cljs.core.next(alis_19325__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__19326 = (length_count19319_19324 + (1));
var G__19327 = cljs.core.next(alis_19325__$1);
length_count19319_19324 = G__19326;
alis_19325__$1 = G__19327;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__19316_19321);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__19315_19320);
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
return cljs.pprint.pprint_simple_list(alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__19328_19333 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__19329_19334 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__19330_19335 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__19331_19336 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__19330_19335);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__19331_19336);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count19332_19337 = (0);
var aseq_19338 = cljs.core.seq(avec);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count19332_19337 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_19338){
cljs.pprint.write_out(cljs.core.first(aseq_19338));

if(cljs.core.next(aseq_19338)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__19339 = (length_count19332_19337 + (1));
var G__19340 = cljs.core.next(aseq_19338);
length_count19332_19337 = G__19339;
aseq_19338 = G__19340;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__19329_19334);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__19328_19333);
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__18323__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__18324__auto__ = ((typeof format_in__18323__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__18323__auto__) : cljs.pprint.cached_compile.call(null,format_in__18323__auto__)):format_in__18323__auto__);
return (function() { 
var G__19341__delegate = function (args__18325__auto__){
var navigator__18326__auto__ = cljs.pprint.init_navigator(args__18325__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__18324__auto__,navigator__18326__auto__);
};
var G__19341 = function (var_args){
var args__18325__auto__ = null;
if (arguments.length > 0) {
var G__19342__i = 0, G__19342__a = new Array(arguments.length -  0);
while (G__19342__i < G__19342__a.length) {G__19342__a[G__19342__i] = arguments[G__19342__i + 0]; ++G__19342__i;}
  args__18325__auto__ = new cljs.core.IndexedSeq(G__19342__a,0,null);
} 
return G__19341__delegate.call(this,args__18325__auto__);};
G__19341.cljs$lang$maxFixedArity = 0;
G__19341.cljs$lang$applyTo = (function (arglist__19343){
var args__18325__auto__ = cljs.core.seq(arglist__19343);
return G__19341__delegate(args__18325__auto__);
});
G__19341.cljs$core$IFn$_invoke$arity$variadic = G__19341__delegate;
return G__19341;
})()
;
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__19344 = (((!(cljs.core.record_QMARK_(amap))))?(function (){var fexpr__19347 = new cljs.core.Var(function(){return cljs.core.lift_ns;},cljs.core.cst$sym$cljs$core_SLASH_lift_DASH_ns,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$lift_DASH_ns,"cljs/core.cljs",15,1,10440,10440,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)]));
return (fexpr__19347.cljs$core$IFn$_invoke$arity$1 ? fexpr__19347.cljs$core$IFn$_invoke$arity$1(amap) : fexpr__19347.call(null,amap));
})():null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19344,(0),null);
var lift_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19344,(1),null);
var amap__$1 = (function (){var or__4212__auto__ = lift_map;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__19348_19357 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__19349_19358 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__19350_19359 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__19351_19360 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__19350_19359);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__19351_19360);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count19352_19361 = (0);
var aseq_19362 = cljs.core.seq(amap__$1);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count19352_19361 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_19362){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__19353_19363 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__19354_19364 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__19355_19365 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__19356_19366 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__19355_19365);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__19356_19366);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_19362));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

(cljs.pprint._STAR_current_length_STAR_ = (0));

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_19362)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__19354_19364);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__19353_19363);
}}


if(cljs.core.next(aseq_19362)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__19367 = (length_count19352_19361 + (1));
var G__19368 = cljs.core.next(aseq_19362);
length_count19352_19361 = G__19367;
aseq_19362 = G__19368;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__19349_19358);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__19348_19357);
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__18323__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__18324__auto__ = ((typeof format_in__18323__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__18323__auto__) : cljs.pprint.cached_compile.call(null,format_in__18323__auto__)):format_in__18323__auto__);
return (function() { 
var G__19369__delegate = function (args__18325__auto__){
var navigator__18326__auto__ = cljs.pprint.init_navigator(args__18325__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__18324__auto__,navigator__18326__auto__);
};
var G__19369 = function (var_args){
var args__18325__auto__ = null;
if (arguments.length > 0) {
var G__19370__i = 0, G__19370__a = new Array(arguments.length -  0);
while (G__19370__i < G__19370__a.length) {G__19370__a[G__19370__i] = arguments[G__19370__i + 0]; ++G__19370__i;}
  args__18325__auto__ = new cljs.core.IndexedSeq(G__19370__a,0,null);
} 
return G__19369__delegate.call(this,args__18325__auto__);};
G__19369.cljs$lang$maxFixedArity = 0;
G__19369.cljs$lang$applyTo = (function (arglist__19371){
var args__18325__auto__ = cljs.core.seq(arglist__19371);
return G__19369__delegate(args__18325__auto__);
});
G__19369.cljs$core$IFn$_invoke$arity$variadic = G__19369__delegate;
return G__19369;
})()
;
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__4212__auto__ = (function (){var temp__5753__auto__ = cljs.core.re_find(/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__5753__auto__)){
var match = temp__5753__auto__;
return (cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1(match) : cljs.pprint.type_map.call(null,match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type(cljs.core.type(o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__19372_19377 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__19373_19378 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__19374_19379 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__19375_19380 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__19374_19379);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__19375_19380);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(- (((prefix).length) - (2))));

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint.write_out((((function (){var and__4210__auto__ = (((!((o == null))))?(((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$))))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o));
if(and__4210__auto__){
return (!(cljs.core._realized_QMARK_(o)));
} else {
return and__4210__auto__;
}
})())?cljs.core.cst$kw$not_DASH_delivered:cljs.core.deref(o)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__19373_19378);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__19372_19377);
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__18323__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__18324__auto__ = ((typeof format_in__18323__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__18323__auto__) : cljs.pprint.cached_compile.call(null,format_in__18323__auto__)):format_in__18323__auto__);
return (function() { 
var G__19381__delegate = function (args__18325__auto__){
var navigator__18326__auto__ = cljs.pprint.init_navigator(args__18325__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__18324__auto__,navigator__18326__auto__);
};
var G__19381 = function (var_args){
var args__18325__auto__ = null;
if (arguments.length > 0) {
var G__19382__i = 0, G__19382__a = new Array(arguments.length -  0);
while (G__19382__i < G__19382__a.length) {G__19382__a[G__19382__i] = arguments[G__19382__i + 0]; ++G__19382__i;}
  args__18325__auto__ = new cljs.core.IndexedSeq(G__19382__a,0,null);
} 
return G__19381__delegate.call(this,args__18325__auto__);};
G__19381.cljs$lang$maxFixedArity = 0;
G__19381.cljs$lang$applyTo = (function (arglist__19383){
var args__18325__auto__ = cljs.core.seq(arglist__19383);
return G__19381__delegate(args__18325__auto__);
});
G__19381.cljs$core$IFn$_invoke$arity$variadic = G__19381__delegate;
return G__19381;
})()
;
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return cljs.core.cst$kw$queue;
} else {
if((((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return cljs.core.cst$kw$deref;
} else {
if((obj instanceof cljs.core.Symbol)){
return cljs.core.cst$kw$symbol;
} else {
if(cljs.core.seq_QMARK_(obj)){
return cljs.core.cst$kw$list;
} else {
if(cljs.core.map_QMARK_(obj)){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.vector_QMARK_(obj)){
return cljs.core.cst$kw$vector;
} else {
if(cljs.core.set_QMARK_(obj)){
return cljs.core.cst$kw$set;
} else {
if((obj == null)){
return null;
} else {
return cljs.core.cst$kw$default;

}
}
}
}
}
}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.simple_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__19385 = cljs.core.get_global_hierarchy;
return (fexpr__19385.cljs$core$IFn$_invoke$arity$0 ? fexpr__19385.cljs$core$IFn$_invoke$arity$0() : fexpr__19385.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_list);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)));
}));
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_(reference)){
var vec__19386 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19386,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19386,(1),null);
var vec__19389 = reference;
var seq__19390 = cljs.core.seq(vec__19389);
var first__19391 = cljs.core.first(seq__19390);
var seq__19390__$1 = cljs.core.next(seq__19390);
var keyw = first__19391;
var args = seq__19390__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__19392_19412 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__19393_19413 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__19394_19414 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__19395_19415 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__19394_19414);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__19395_19415);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

var fexpr__19396_19416 = (function (){var format_in__18323__auto__ = "~w~:i";
var cf__18324__auto__ = ((typeof format_in__18323__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__18323__auto__) : cljs.pprint.cached_compile.call(null,format_in__18323__auto__)):format_in__18323__auto__);
return (function() { 
var G__19417__delegate = function (args__18325__auto__){
var navigator__18326__auto__ = cljs.pprint.init_navigator(args__18325__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__18324__auto__,navigator__18326__auto__);
};
var G__19417 = function (var_args){
var args__18325__auto__ = null;
if (arguments.length > 0) {
var G__19418__i = 0, G__19418__a = new Array(arguments.length -  0);
while (G__19418__i < G__19418__a.length) {G__19418__a[G__19418__i] = arguments[G__19418__i + 0]; ++G__19418__i;}
  args__18325__auto__ = new cljs.core.IndexedSeq(G__19418__a,0,null);
} 
return G__19417__delegate.call(this,args__18325__auto__);};
G__19417.cljs$lang$maxFixedArity = 0;
G__19417.cljs$lang$applyTo = (function (arglist__19419){
var args__18325__auto__ = cljs.core.seq(arglist__19419);
return G__19417__delegate(args__18325__auto__);
});
G__19417.cljs$core$IFn$_invoke$arity$variadic = G__19417__delegate;
return G__19417;
})()
;
})();
(fexpr__19396_19416.cljs$core$IFn$_invoke$arity$1 ? fexpr__19396_19416.cljs$core$IFn$_invoke$arity$1(keyw) : fexpr__19396_19416.call(null,keyw));

var args_19420__$1 = args;
while(true){
if(cljs.core.seq(args_19420__$1)){
var fexpr__19397_19421 = (function (){var format_in__18323__auto__ = " ";
var cf__18324__auto__ = ((typeof format_in__18323__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__18323__auto__) : cljs.pprint.cached_compile.call(null,format_in__18323__auto__)):format_in__18323__auto__);
return ((function (args_19420__$1,format_in__18323__auto__,cf__18324__auto__,_STAR_current_level_STAR__orig_val__19392_19412,_STAR_current_length_STAR__orig_val__19393_19413,_STAR_current_level_STAR__temp_val__19394_19414,_STAR_current_length_STAR__temp_val__19395_19415,vec__19386,start,end,vec__19389,seq__19390,first__19391,seq__19390__$1,keyw,args){
return (function() { 
var G__19422__delegate = function (args__18325__auto__){
var navigator__18326__auto__ = cljs.pprint.init_navigator(args__18325__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__18324__auto__,navigator__18326__auto__);
};
var G__19422 = function (var_args){
var args__18325__auto__ = null;
if (arguments.length > 0) {
var G__19423__i = 0, G__19423__a = new Array(arguments.length -  0);
while (G__19423__i < G__19423__a.length) {G__19423__a[G__19423__i] = arguments[G__19423__i + 0]; ++G__19423__i;}
  args__18325__auto__ = new cljs.core.IndexedSeq(G__19423__a,0,null);
} 
return G__19422__delegate.call(this,args__18325__auto__);};
G__19422.cljs$lang$maxFixedArity = 0;
G__19422.cljs$lang$applyTo = (function (arglist__19424){
var args__18325__auto__ = cljs.core.seq(arglist__19424);
return G__19422__delegate(args__18325__auto__);
});
G__19422.cljs$core$IFn$_invoke$arity$variadic = G__19422__delegate;
return G__19422;
})()
;
;})(args_19420__$1,format_in__18323__auto__,cf__18324__auto__,_STAR_current_level_STAR__orig_val__19392_19412,_STAR_current_length_STAR__orig_val__19393_19413,_STAR_current_level_STAR__temp_val__19394_19414,_STAR_current_length_STAR__temp_val__19395_19415,vec__19386,start,end,vec__19389,seq__19390,first__19391,seq__19390__$1,keyw,args))
})();
(fexpr__19397_19421.cljs$core$IFn$_invoke$arity$0 ? fexpr__19397_19421.cljs$core$IFn$_invoke$arity$0() : fexpr__19397_19421.call(null));

var arg_19425 = cljs.core.first(args_19420__$1);
if(cljs.core.sequential_QMARK_(arg_19425)){
var vec__19398_19426 = cljs.pprint.brackets(arg_19425);
var start_19427__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19398_19426,(0),null);
var end_19428__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19398_19426,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__19401_19429 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__19402_19430 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__19403_19431 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__19404_19432 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__19403_19431);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__19404_19432);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_19427__$1,null,end_19428__$1);

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_19425),(3))) && ((cljs.core.second(arg_19425) instanceof cljs.core.Keyword)))){
var vec__19405_19433 = arg_19425;
var ns_19434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19405_19433,(0),null);
var kw_19435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19405_19433,(1),null);
var lis_19436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19405_19433,(2),null);
var fexpr__19408_19437 = (function (){var format_in__18323__auto__ = "~w ~w ";
var cf__18324__auto__ = ((typeof format_in__18323__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__18323__auto__) : cljs.pprint.cached_compile.call(null,format_in__18323__auto__)):format_in__18323__auto__);
return ((function (args_19420__$1,format_in__18323__auto__,cf__18324__auto__,vec__19405_19433,ns_19434,kw_19435,lis_19436,_STAR_current_level_STAR__orig_val__19401_19429,_STAR_current_length_STAR__orig_val__19402_19430,_STAR_current_level_STAR__temp_val__19403_19431,_STAR_current_length_STAR__temp_val__19404_19432,vec__19398_19426,start_19427__$1,end_19428__$1,arg_19425,_STAR_current_level_STAR__orig_val__19392_19412,_STAR_current_length_STAR__orig_val__19393_19413,_STAR_current_level_STAR__temp_val__19394_19414,_STAR_current_length_STAR__temp_val__19395_19415,vec__19386,start,end,vec__19389,seq__19390,first__19391,seq__19390__$1,keyw,args){
return (function() { 
var G__19438__delegate = function (args__18325__auto__){
var navigator__18326__auto__ = cljs.pprint.init_navigator(args__18325__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__18324__auto__,navigator__18326__auto__);
};
var G__19438 = function (var_args){
var args__18325__auto__ = null;
if (arguments.length > 0) {
var G__19439__i = 0, G__19439__a = new Array(arguments.length -  0);
while (G__19439__i < G__19439__a.length) {G__19439__a[G__19439__i] = arguments[G__19439__i + 0]; ++G__19439__i;}
  args__18325__auto__ = new cljs.core.IndexedSeq(G__19439__a,0,null);
} 
return G__19438__delegate.call(this,args__18325__auto__);};
G__19438.cljs$lang$maxFixedArity = 0;
G__19438.cljs$lang$applyTo = (function (arglist__19440){
var args__18325__auto__ = cljs.core.seq(arglist__19440);
return G__19438__delegate(args__18325__auto__);
});
G__19438.cljs$core$IFn$_invoke$arity$variadic = G__19438__delegate;
return G__19438;
})()
;
;})(args_19420__$1,format_in__18323__auto__,cf__18324__auto__,vec__19405_19433,ns_19434,kw_19435,lis_19436,_STAR_current_level_STAR__orig_val__19401_19429,_STAR_current_length_STAR__orig_val__19402_19430,_STAR_current_level_STAR__temp_val__19403_19431,_STAR_current_length_STAR__temp_val__19404_19432,vec__19398_19426,start_19427__$1,end_19428__$1,arg_19425,_STAR_current_level_STAR__orig_val__19392_19412,_STAR_current_length_STAR__orig_val__19393_19413,_STAR_current_level_STAR__temp_val__19394_19414,_STAR_current_length_STAR__temp_val__19395_19415,vec__19386,start,end,vec__19389,seq__19390,first__19391,seq__19390__$1,keyw,args))
})();
(fexpr__19408_19437.cljs$core$IFn$_invoke$arity$2 ? fexpr__19408_19437.cljs$core$IFn$_invoke$arity$2(ns_19434,kw_19435) : fexpr__19408_19437.call(null,ns_19434,kw_19435));

if(cljs.core.sequential_QMARK_(lis_19436)){
var fexpr__19409_19441 = (function (){var format_in__18323__auto__ = ((cljs.core.vector_QMARK_(lis_19436))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__18324__auto__ = ((typeof format_in__18323__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__18323__auto__) : cljs.pprint.cached_compile.call(null,format_in__18323__auto__)):format_in__18323__auto__);
return ((function (args_19420__$1,format_in__18323__auto__,cf__18324__auto__,vec__19405_19433,ns_19434,kw_19435,lis_19436,_STAR_current_level_STAR__orig_val__19401_19429,_STAR_current_length_STAR__orig_val__19402_19430,_STAR_current_level_STAR__temp_val__19403_19431,_STAR_current_length_STAR__temp_val__19404_19432,vec__19398_19426,start_19427__$1,end_19428__$1,arg_19425,_STAR_current_level_STAR__orig_val__19392_19412,_STAR_current_length_STAR__orig_val__19393_19413,_STAR_current_level_STAR__temp_val__19394_19414,_STAR_current_length_STAR__temp_val__19395_19415,vec__19386,start,end,vec__19389,seq__19390,first__19391,seq__19390__$1,keyw,args){
return (function() { 
var G__19442__delegate = function (args__18325__auto__){
var navigator__18326__auto__ = cljs.pprint.init_navigator(args__18325__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__18324__auto__,navigator__18326__auto__);
};
var G__19442 = function (var_args){
var args__18325__auto__ = null;
if (arguments.length > 0) {
var G__19443__i = 0, G__19443__a = new Array(arguments.length -  0);
while (G__19443__i < G__19443__a.length) {G__19443__a[G__19443__i] = arguments[G__19443__i + 0]; ++G__19443__i;}
  args__18325__auto__ = new cljs.core.IndexedSeq(G__19443__a,0,null);
} 
return G__19442__delegate.call(this,args__18325__auto__);};
G__19442.cljs$lang$maxFixedArity = 0;
G__19442.cljs$lang$applyTo = (function (arglist__19444){
var args__18325__auto__ = cljs.core.seq(arglist__19444);
return G__19442__delegate(args__18325__auto__);
});
G__19442.cljs$core$IFn$_invoke$arity$variadic = G__19442__delegate;
return G__19442;
})()
;
;})(args_19420__$1,format_in__18323__auto__,cf__18324__auto__,vec__19405_19433,ns_19434,kw_19435,lis_19436,_STAR_current_level_STAR__orig_val__19401_19429,_STAR_current_length_STAR__orig_val__19402_19430,_STAR_current_level_STAR__temp_val__19403_19431,_STAR_current_length_STAR__temp_val__19404_19432,vec__19398_19426,start_19427__$1,end_19428__$1,arg_19425,_STAR_current_level_STAR__orig_val__19392_19412,_STAR_current_length_STAR__orig_val__19393_19413,_STAR_current_level_STAR__temp_val__19394_19414,_STAR_current_length_STAR__temp_val__19395_19415,vec__19386,start,end,vec__19389,seq__19390,first__19391,seq__19390__$1,keyw,args))
})();
(fexpr__19409_19441.cljs$core$IFn$_invoke$arity$1 ? fexpr__19409_19441.cljs$core$IFn$_invoke$arity$1(lis_19436) : fexpr__19409_19441.call(null,lis_19436));
} else {
cljs.pprint.write_out(lis_19436);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__18323__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__18324__auto__ = ((typeof format_in__18323__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__18323__auto__) : cljs.pprint.cached_compile.call(null,format_in__18323__auto__)):format_in__18323__auto__);
return ((function (args_19420__$1,format_in__18323__auto__,cf__18324__auto__,_STAR_current_level_STAR__orig_val__19401_19429,_STAR_current_length_STAR__orig_val__19402_19430,_STAR_current_level_STAR__temp_val__19403_19431,_STAR_current_length_STAR__temp_val__19404_19432,vec__19398_19426,start_19427__$1,end_19428__$1,arg_19425,_STAR_current_level_STAR__orig_val__19392_19412,_STAR_current_length_STAR__orig_val__19393_19413,_STAR_current_level_STAR__temp_val__19394_19414,_STAR_current_length_STAR__temp_val__19395_19415,vec__19386,start,end,vec__19389,seq__19390,first__19391,seq__19390__$1,keyw,args){
return (function() { 
var G__19445__delegate = function (args__18325__auto__){
var navigator__18326__auto__ = cljs.pprint.init_navigator(args__18325__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__18324__auto__,navigator__18326__auto__);
};
var G__19445 = function (var_args){
var args__18325__auto__ = null;
if (arguments.length > 0) {
var G__19446__i = 0, G__19446__a = new Array(arguments.length -  0);
while (G__19446__i < G__19446__a.length) {G__19446__a[G__19446__i] = arguments[G__19446__i + 0]; ++G__19446__i;}
  args__18325__auto__ = new cljs.core.IndexedSeq(G__19446__a,0,null);
} 
return G__19445__delegate.call(this,args__18325__auto__);};
G__19445.cljs$lang$maxFixedArity = 0;
G__19445.cljs$lang$applyTo = (function (arglist__19447){
var args__18325__auto__ = cljs.core.seq(arglist__19447);
return G__19445__delegate(args__18325__auto__);
});
G__19445.cljs$core$IFn$_invoke$arity$variadic = G__19445__delegate;
return G__19445;
})()
;
;})(args_19420__$1,format_in__18323__auto__,cf__18324__auto__,_STAR_current_level_STAR__orig_val__19401_19429,_STAR_current_length_STAR__orig_val__19402_19430,_STAR_current_level_STAR__temp_val__19403_19431,_STAR_current_length_STAR__temp_val__19404_19432,vec__19398_19426,start_19427__$1,end_19428__$1,arg_19425,_STAR_current_level_STAR__orig_val__19392_19412,_STAR_current_length_STAR__orig_val__19393_19413,_STAR_current_level_STAR__temp_val__19394_19414,_STAR_current_length_STAR__temp_val__19395_19415,vec__19386,start,end,vec__19389,seq__19390,first__19391,seq__19390__$1,keyw,args))
})(),arg_19425);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__19402_19430);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__19401_19429);
}}


if(cljs.core.next(args_19420__$1)){
var fexpr__19410_19448 = (function (){var format_in__18323__auto__ = "~_";
var cf__18324__auto__ = ((typeof format_in__18323__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__18323__auto__) : cljs.pprint.cached_compile.call(null,format_in__18323__auto__)):format_in__18323__auto__);
return ((function (args_19420__$1,format_in__18323__auto__,cf__18324__auto__,vec__19398_19426,start_19427__$1,end_19428__$1,arg_19425,_STAR_current_level_STAR__orig_val__19392_19412,_STAR_current_length_STAR__orig_val__19393_19413,_STAR_current_level_STAR__temp_val__19394_19414,_STAR_current_length_STAR__temp_val__19395_19415,vec__19386,start,end,vec__19389,seq__19390,first__19391,seq__19390__$1,keyw,args){
return (function() { 
var G__19449__delegate = function (args__18325__auto__){
var navigator__18326__auto__ = cljs.pprint.init_navigator(args__18325__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__18324__auto__,navigator__18326__auto__);
};
var G__19449 = function (var_args){
var args__18325__auto__ = null;
if (arguments.length > 0) {
var G__19450__i = 0, G__19450__a = new Array(arguments.length -  0);
while (G__19450__i < G__19450__a.length) {G__19450__a[G__19450__i] = arguments[G__19450__i + 0]; ++G__19450__i;}
  args__18325__auto__ = new cljs.core.IndexedSeq(G__19450__a,0,null);
} 
return G__19449__delegate.call(this,args__18325__auto__);};
G__19449.cljs$lang$maxFixedArity = 0;
G__19449.cljs$lang$applyTo = (function (arglist__19451){
var args__18325__auto__ = cljs.core.seq(arglist__19451);
return G__19449__delegate(args__18325__auto__);
});
G__19449.cljs$core$IFn$_invoke$arity$variadic = G__19449__delegate;
return G__19449;
})()
;
;})(args_19420__$1,format_in__18323__auto__,cf__18324__auto__,vec__19398_19426,start_19427__$1,end_19428__$1,arg_19425,_STAR_current_level_STAR__orig_val__19392_19412,_STAR_current_length_STAR__orig_val__19393_19413,_STAR_current_level_STAR__temp_val__19394_19414,_STAR_current_length_STAR__temp_val__19395_19415,vec__19386,start,end,vec__19389,seq__19390,first__19391,seq__19390__$1,keyw,args))
})();
(fexpr__19410_19448.cljs$core$IFn$_invoke$arity$0 ? fexpr__19410_19448.cljs$core$IFn$_invoke$arity$0() : fexpr__19410_19448.call(null));
} else {
}
} else {
cljs.pprint.write_out(arg_19425);

if(cljs.core.next(args_19420__$1)){
var fexpr__19411_19452 = (function (){var format_in__18323__auto__ = "~:_";
var cf__18324__auto__ = ((typeof format_in__18323__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__18323__auto__) : cljs.pprint.cached_compile.call(null,format_in__18323__auto__)):format_in__18323__auto__);
return ((function (args_19420__$1,format_in__18323__auto__,cf__18324__auto__,arg_19425,_STAR_current_level_STAR__orig_val__19392_19412,_STAR_current_length_STAR__orig_val__19393_19413,_STAR_current_level_STAR__temp_val__19394_19414,_STAR_current_length_STAR__temp_val__19395_19415,vec__19386,start,end,vec__19389,seq__19390,first__19391,seq__19390__$1,keyw,args){
return (function() { 
var G__19453__delegate = function (args__18325__auto__){
var navigator__18326__auto__ = cljs.pprint.init_navigator(args__18325__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__18324__auto__,navigator__18326__auto__);
};
var G__19453 = function (var_args){
var args__18325__auto__ = null;
if (arguments.length > 0) {
var G__19454__i = 0, G__19454__a = new Array(arguments.length -  0);
while (G__19454__i < G__19454__a.length) {G__19454__a[G__19454__i] = arguments[G__19454__i + 0]; ++G__19454__i;}
  args__18325__auto__ = new cljs.core.IndexedSeq(G__19454__a,0,null);
} 
return G__19453__delegate.call(this,args__18325__auto__);};
G__19453.cljs$lang$maxFixedArity = 0;
G__19453.cljs$lang$applyTo = (function (arglist__19455){
var args__18325__auto__ = cljs.core.seq(arglist__19455);
return G__19453__delegate(args__18325__auto__);
});
G__19453.cljs$core$IFn$_invoke$arity$variadic = G__19453__delegate;
return G__19453;
})()
;
;})(args_19420__$1,format_in__18323__auto__,cf__18324__auto__,arg_19425,_STAR_current_level_STAR__orig_val__19392_19412,_STAR_current_length_STAR__orig_val__19393_19413,_STAR_current_level_STAR__temp_val__19394_19414,_STAR_current_length_STAR__temp_val__19395_19415,vec__19386,start,end,vec__19389,seq__19390,first__19391,seq__19390__$1,keyw,args))
})();
(fexpr__19411_19452.cljs$core$IFn$_invoke$arity$0 ? fexpr__19411_19452.cljs$core$IFn$_invoke$arity$0() : fexpr__19411_19452.call(null));
} else {
}
}

var G__19456 = cljs.core.next(args_19420__$1);
args_19420__$1 = G__19456;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__19393_19413);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__19392_19412);
}}

return null;
} else {
return cljs.pprint.write_out(reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next(alis)){
var vec__19457 = alis;
var seq__19458 = cljs.core.seq(vec__19457);
var first__19459 = cljs.core.first(seq__19458);
var seq__19458__$1 = cljs.core.next(seq__19458);
var ns_sym = first__19459;
var first__19459__$1 = cljs.core.first(seq__19458__$1);
var seq__19458__$2 = cljs.core.next(seq__19458__$1);
var ns_name = first__19459__$1;
var stuff = seq__19458__$2;
var vec__19460 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19460,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19460,(1),null);
var vec__19463 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19463,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19463,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__19466_19475 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__19467_19476 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__19468_19477 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__19469_19478 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__19468_19477);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__19469_19478);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__19470_19479 = (function (){var format_in__18323__auto__ = "~w ~1I~@_~w";
var cf__18324__auto__ = ((typeof format_in__18323__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__18323__auto__) : cljs.pprint.cached_compile.call(null,format_in__18323__auto__)):format_in__18323__auto__);
return (function() { 
var G__19480__delegate = function (args__18325__auto__){
var navigator__18326__auto__ = cljs.pprint.init_navigator(args__18325__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__18324__auto__,navigator__18326__auto__);
};
var G__19480 = function (var_args){
var args__18325__auto__ = null;
if (arguments.length > 0) {
var G__19481__i = 0, G__19481__a = new Array(arguments.length -  0);
while (G__19481__i < G__19481__a.length) {G__19481__a[G__19481__i] = arguments[G__19481__i + 0]; ++G__19481__i;}
  args__18325__auto__ = new cljs.core.IndexedSeq(G__19481__a,0,null);
} 
return G__19480__delegate.call(this,args__18325__auto__);};
G__19480.cljs$lang$maxFixedArity = 0;
G__19480.cljs$lang$applyTo = (function (arglist__19482){
var args__18325__auto__ = cljs.core.seq(arglist__19482);
return G__19480__delegate(args__18325__auto__);
});
G__19480.cljs$core$IFn$_invoke$arity$variadic = G__19480__delegate;
return G__19480;
})()
;
})();
(fexpr__19470_19479.cljs$core$IFn$_invoke$arity$2 ? fexpr__19470_19479.cljs$core$IFn$_invoke$arity$2(ns_sym,ns_name) : fexpr__19470_19479.call(null,ns_sym,ns_name));

if(cljs.core.truth_((function (){var or__4212__auto__ = doc_str;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = attr_map;
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return cljs.core.seq(references);
}
}
})())){
var fexpr__19471_19483 = (function (){var format_in__18323__auto__ = "~@:_";
var cf__18324__auto__ = ((typeof format_in__18323__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__18323__auto__) : cljs.pprint.cached_compile.call(null,format_in__18323__auto__)):format_in__18323__auto__);
return (function() { 
var G__19484__delegate = function (args__18325__auto__){
var navigator__18326__auto__ = cljs.pprint.init_navigator(args__18325__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__18324__auto__,navigator__18326__auto__);
};
var G__19484 = function (var_args){
var args__18325__auto__ = null;
if (arguments.length > 0) {
var G__19485__i = 0, G__19485__a = new Array(arguments.length -  0);
while (G__19485__i < G__19485__a.length) {G__19485__a[G__19485__i] = arguments[G__19485__i + 0]; ++G__19485__i;}
  args__18325__auto__ = new cljs.core.IndexedSeq(G__19485__a,0,null);
} 
return G__19484__delegate.call(this,args__18325__auto__);};
G__19484.cljs$lang$maxFixedArity = 0;
G__19484.cljs$lang$applyTo = (function (arglist__19486){
var args__18325__auto__ = cljs.core.seq(arglist__19486);
return G__19484__delegate(args__18325__auto__);
});
G__19484.cljs$core$IFn$_invoke$arity$variadic = G__19484__delegate;
return G__19484;
})()
;
})();
(fexpr__19471_19483.cljs$core$IFn$_invoke$arity$0 ? fexpr__19471_19483.cljs$core$IFn$_invoke$arity$0() : fexpr__19471_19483.call(null));
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\"~a\"~:[~;~:@_~]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([doc_str,(function (){var or__4212__auto__ = attr_map;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.seq(references);
}
})()], 0));
} else {
}

if(cljs.core.truth_(attr_map)){
var G__19473_19487 = attr_map;
var G__19474_19488 = cljs.core.seq(references);
var fexpr__19472_19489 = (function (){var format_in__18323__auto__ = "~w~:[~;~:@_~]";
var cf__18324__auto__ = ((typeof format_in__18323__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__18323__auto__) : cljs.pprint.cached_compile.call(null,format_in__18323__auto__)):format_in__18323__auto__);
return (function() { 
var G__19490__delegate = function (args__18325__auto__){
var navigator__18326__auto__ = cljs.pprint.init_navigator(args__18325__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__18324__auto__,navigator__18326__auto__);
};
var G__19490 = function (var_args){
var args__18325__auto__ = null;
if (arguments.length > 0) {
var G__19491__i = 0, G__19491__a = new Array(arguments.length -  0);
while (G__19491__i < G__19491__a.length) {G__19491__a[G__19491__i] = arguments[G__19491__i + 0]; ++G__19491__i;}
  args__18325__auto__ = new cljs.core.IndexedSeq(G__19491__a,0,null);
} 
return G__19490__delegate.call(this,args__18325__auto__);};
G__19490.cljs$lang$maxFixedArity = 0;
G__19490.cljs$lang$applyTo = (function (arglist__19492){
var args__18325__auto__ = cljs.core.seq(arglist__19492);
return G__19490__delegate(args__18325__auto__);
});
G__19490.cljs$core$IFn$_invoke$arity$variadic = G__19490__delegate;
return G__19490;
})()
;
})();
(fexpr__19472_19489.cljs$core$IFn$_invoke$arity$2 ? fexpr__19472_19489.cljs$core$IFn$_invoke$arity$2(G__19473_19487,G__19474_19488) : fexpr__19472_19489.call(null,G__19473_19487,G__19474_19488));
} else {
}

var references_19493__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_19493__$1));

var temp__5753__auto___19494 = cljs.core.next(references_19493__$1);
if(temp__5753__auto___19494){
var references_19495__$2 = temp__5753__auto___19494;
cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__19496 = references_19495__$2;
references_19493__$1 = G__19496;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__19467_19476);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__19466_19475);
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__18323__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__18324__auto__ = ((typeof format_in__18323__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__18323__auto__) : cljs.pprint.cached_compile.call(null,format_in__18323__auto__)):format_in__18323__auto__);
return (function() { 
var G__19497__delegate = function (args__18325__auto__){
var navigator__18326__auto__ = cljs.pprint.init_navigator(args__18325__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__18324__auto__,navigator__18326__auto__);
};
var G__19497 = function (var_args){
var args__18325__auto__ = null;
if (arguments.length > 0) {
var G__19498__i = 0, G__19498__a = new Array(arguments.length -  0);
while (G__19498__i < G__19498__a.length) {G__19498__a[G__19498__i] = arguments[G__19498__i + 0]; ++G__19498__i;}
  args__18325__auto__ = new cljs.core.IndexedSeq(G__19498__a,0,null);
} 
return G__19497__delegate.call(this,args__18325__auto__);};
G__19497.cljs$lang$maxFixedArity = 0;
G__19497.cljs$lang$applyTo = (function (arglist__19499){
var args__18325__auto__ = cljs.core.seq(arglist__19499);
return G__19497__delegate(args__18325__auto__);
});
G__19497.cljs$core$IFn$_invoke$arity$variadic = G__19497__delegate;
return G__19497;
})()
;
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
var fexpr__19500_19503 = (function (){var format_in__18323__auto__ = " ~_";
var cf__18324__auto__ = ((typeof format_in__18323__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__18323__auto__) : cljs.pprint.cached_compile.call(null,format_in__18323__auto__)):format_in__18323__auto__);
return (function() { 
var G__19504__delegate = function (args__18325__auto__){
var navigator__18326__auto__ = cljs.pprint.init_navigator(args__18325__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__18324__auto__,navigator__18326__auto__);
};
var G__19504 = function (var_args){
var args__18325__auto__ = null;
if (arguments.length > 0) {
var G__19505__i = 0, G__19505__a = new Array(arguments.length -  0);
while (G__19505__i < G__19505__a.length) {G__19505__a[G__19505__i] = arguments[G__19505__i + 0]; ++G__19505__i;}
  args__18325__auto__ = new cljs.core.IndexedSeq(G__19505__a,0,null);
} 
return G__19504__delegate.call(this,args__18325__auto__);};
G__19504.cljs$lang$maxFixedArity = 0;
G__19504.cljs$lang$applyTo = (function (arglist__19506){
var args__18325__auto__ = cljs.core.seq(arglist__19506);
return G__19504__delegate(args__18325__auto__);
});
G__19504.cljs$core$IFn$_invoke$arity$variadic = G__19504__delegate;
return G__19504;
})()
;
})();
(fexpr__19500_19503.cljs$core$IFn$_invoke$arity$0 ? fexpr__19500_19503.cljs$core$IFn$_invoke$arity$0() : fexpr__19500_19503.call(null));
} else {
var fexpr__19501_19507 = (function (){var format_in__18323__auto__ = " ~@_";
var cf__18324__auto__ = ((typeof format_in__18323__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__18323__auto__) : cljs.pprint.cached_compile.call(null,format_in__18323__auto__)):format_in__18323__auto__);
return (function() { 
var G__19508__delegate = function (args__18325__auto__){
var navigator__18326__auto__ = cljs.pprint.init_navigator(args__18325__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__18324__auto__,navigator__18326__auto__);
};
var G__19508 = function (var_args){
var args__18325__auto__ = null;
if (arguments.length > 0) {
var G__19509__i = 0, G__19509__a = new Array(arguments.length -  0);
while (G__19509__i < G__19509__a.length) {G__19509__a[G__19509__i] = arguments[G__19509__i + 0]; ++G__19509__i;}
  args__18325__auto__ = new cljs.core.IndexedSeq(G__19509__a,0,null);
} 
return G__19508__delegate.call(this,args__18325__auto__);};
G__19508.cljs$lang$maxFixedArity = 0;
G__19508.cljs$lang$applyTo = (function (arglist__19510){
var args__18325__auto__ = cljs.core.seq(arglist__19510);
return G__19508__delegate(args__18325__auto__);
});
G__19508.cljs$core$IFn$_invoke$arity$variadic = G__19508__delegate;
return G__19508;
})()
;
})();
(fexpr__19501_19507.cljs$core$IFn$_invoke$arity$0 ? fexpr__19501_19507.cljs$core$IFn$_invoke$arity$0() : fexpr__19501_19507.call(null));
}

var fexpr__19502 = (function (){var format_in__18323__auto__ = "~{~w~^ ~_~}";
var cf__18324__auto__ = ((typeof format_in__18323__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__18323__auto__) : cljs.pprint.cached_compile.call(null,format_in__18323__auto__)):format_in__18323__auto__);
return (function() { 
var G__19511__delegate = function (args__18325__auto__){
var navigator__18326__auto__ = cljs.pprint.init_navigator(args__18325__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__18324__auto__,navigator__18326__auto__);
};
var G__19511 = function (var_args){
var args__18325__auto__ = null;
if (arguments.length > 0) {
var G__19512__i = 0, G__19512__a = new Array(arguments.length -  0);
while (G__19512__i < G__19512__a.length) {G__19512__a[G__19512__i] = arguments[G__19512__i + 0]; ++G__19512__i;}
  args__18325__auto__ = new cljs.core.IndexedSeq(G__19512__a,0,null);
} 
return G__19511__delegate.call(this,args__18325__auto__);};
G__19511.cljs$lang$maxFixedArity = 0;
G__19511.cljs$lang$applyTo = (function (arglist__19513){
var args__18325__auto__ = cljs.core.seq(arglist__19513);
return G__19511__delegate(args__18325__auto__);
});
G__19511.cljs$core$IFn$_invoke$arity$variadic = G__19511__delegate;
return G__19511;
})()
;
})();
return (fexpr__19502.cljs$core$IFn$_invoke$arity$1 ? fexpr__19502.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__19502.call(null,alis));
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
var fexpr__19514 = (function (){var format_in__18323__auto__ = " ~_~{~w~^ ~_~}";
var cf__18324__auto__ = ((typeof format_in__18323__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__18323__auto__) : cljs.pprint.cached_compile.call(null,format_in__18323__auto__)):format_in__18323__auto__);
return (function() { 
var G__19515__delegate = function (args__18325__auto__){
var navigator__18326__auto__ = cljs.pprint.init_navigator(args__18325__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__18324__auto__,navigator__18326__auto__);
};
var G__19515 = function (var_args){
var args__18325__auto__ = null;
if (arguments.length > 0) {
var G__19516__i = 0, G__19516__a = new Array(arguments.length -  0);
while (G__19516__i < G__19516__a.length) {G__19516__a[G__19516__i] = arguments[G__19516__i + 0]; ++G__19516__i;}
  args__18325__auto__ = new cljs.core.IndexedSeq(G__19516__a,0,null);
} 
return G__19515__delegate.call(this,args__18325__auto__);};
G__19515.cljs$lang$maxFixedArity = 0;
G__19515.cljs$lang$applyTo = (function (arglist__19517){
var args__18325__auto__ = cljs.core.seq(arglist__19517);
return G__19515__delegate(args__18325__auto__);
});
G__19515.cljs$core$IFn$_invoke$arity$variadic = G__19515__delegate;
return G__19515;
})()
;
})();
return (fexpr__19514.cljs$core$IFn$_invoke$arity$1 ? fexpr__19514.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__19514.call(null,alis));
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__19518 = alis;
var seq__19519 = cljs.core.seq(vec__19518);
var first__19520 = cljs.core.first(seq__19519);
var seq__19519__$1 = cljs.core.next(seq__19519);
var defn_sym = first__19520;
var first__19520__$1 = cljs.core.first(seq__19519__$1);
var seq__19519__$2 = cljs.core.next(seq__19519__$1);
var defn_name = first__19520__$1;
var stuff = seq__19519__$2;
var vec__19521 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19521,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19521,(1),null);
var vec__19524 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19524,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19524,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__19527_19534 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__19528_19535 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__19529_19536 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__19530_19537 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__19529_19536);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__19530_19537);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__19531_19538 = (function (){var format_in__18323__auto__ = "~w ~1I~@_~w";
var cf__18324__auto__ = ((typeof format_in__18323__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__18323__auto__) : cljs.pprint.cached_compile.call(null,format_in__18323__auto__)):format_in__18323__auto__);
return (function() { 
var G__19539__delegate = function (args__18325__auto__){
var navigator__18326__auto__ = cljs.pprint.init_navigator(args__18325__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__18324__auto__,navigator__18326__auto__);
};
var G__19539 = function (var_args){
var args__18325__auto__ = null;
if (arguments.length > 0) {
var G__19540__i = 0, G__19540__a = new Array(arguments.length -  0);
while (G__19540__i < G__19540__a.length) {G__19540__a[G__19540__i] = arguments[G__19540__i + 0]; ++G__19540__i;}
  args__18325__auto__ = new cljs.core.IndexedSeq(G__19540__a,0,null);
} 
return G__19539__delegate.call(this,args__18325__auto__);};
G__19539.cljs$lang$maxFixedArity = 0;
G__19539.cljs$lang$applyTo = (function (arglist__19541){
var args__18325__auto__ = cljs.core.seq(arglist__19541);
return G__19539__delegate(args__18325__auto__);
});
G__19539.cljs$core$IFn$_invoke$arity$variadic = G__19539__delegate;
return G__19539;
})()
;
})();
(fexpr__19531_19538.cljs$core$IFn$_invoke$arity$2 ? fexpr__19531_19538.cljs$core$IFn$_invoke$arity$2(defn_sym,defn_name) : fexpr__19531_19538.call(null,defn_sym,defn_name));

if(cljs.core.truth_(doc_str)){
var fexpr__19532_19542 = (function (){var format_in__18323__auto__ = " ~_~w";
var cf__18324__auto__ = ((typeof format_in__18323__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__18323__auto__) : cljs.pprint.cached_compile.call(null,format_in__18323__auto__)):format_in__18323__auto__);
return (function() { 
var G__19543__delegate = function (args__18325__auto__){
var navigator__18326__auto__ = cljs.pprint.init_navigator(args__18325__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__18324__auto__,navigator__18326__auto__);
};
var G__19543 = function (var_args){
var args__18325__auto__ = null;
if (arguments.length > 0) {
var G__19544__i = 0, G__19544__a = new Array(arguments.length -  0);
while (G__19544__i < G__19544__a.length) {G__19544__a[G__19544__i] = arguments[G__19544__i + 0]; ++G__19544__i;}
  args__18325__auto__ = new cljs.core.IndexedSeq(G__19544__a,0,null);
} 
return G__19543__delegate.call(this,args__18325__auto__);};
G__19543.cljs$lang$maxFixedArity = 0;
G__19543.cljs$lang$applyTo = (function (arglist__19545){
var args__18325__auto__ = cljs.core.seq(arglist__19545);
return G__19543__delegate(args__18325__auto__);
});
G__19543.cljs$core$IFn$_invoke$arity$variadic = G__19543__delegate;
return G__19543;
})()
;
})();
(fexpr__19532_19542.cljs$core$IFn$_invoke$arity$1 ? fexpr__19532_19542.cljs$core$IFn$_invoke$arity$1(doc_str) : fexpr__19532_19542.call(null,doc_str));
} else {
}

if(cljs.core.truth_(attr_map)){
var fexpr__19533_19546 = (function (){var format_in__18323__auto__ = " ~_~w";
var cf__18324__auto__ = ((typeof format_in__18323__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__18323__auto__) : cljs.pprint.cached_compile.call(null,format_in__18323__auto__)):format_in__18323__auto__);
return (function() { 
var G__19547__delegate = function (args__18325__auto__){
var navigator__18326__auto__ = cljs.pprint.init_navigator(args__18325__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__18324__auto__,navigator__18326__auto__);
};
var G__19547 = function (var_args){
var args__18325__auto__ = null;
if (arguments.length > 0) {
var G__19548__i = 0, G__19548__a = new Array(arguments.length -  0);
while (G__19548__i < G__19548__a.length) {G__19548__a[G__19548__i] = arguments[G__19548__i + 0]; ++G__19548__i;}
  args__18325__auto__ = new cljs.core.IndexedSeq(G__19548__a,0,null);
} 
return G__19547__delegate.call(this,args__18325__auto__);};
G__19547.cljs$lang$maxFixedArity = 0;
G__19547.cljs$lang$applyTo = (function (arglist__19549){
var args__18325__auto__ = cljs.core.seq(arglist__19549);
return G__19547__delegate(args__18325__auto__);
});
G__19547.cljs$core$IFn$_invoke$arity$variadic = G__19547__delegate;
return G__19547;
})()
;
})();
(fexpr__19533_19546.cljs$core$IFn$_invoke$arity$1 ? fexpr__19533_19546.cljs$core$IFn$_invoke$arity$1(attr_map) : fexpr__19533_19546.call(null,attr_map));
} else {
}

if(cljs.core.vector_QMARK_(cljs.core.first(stuff__$2))){
cljs.pprint.single_defn(stuff__$2,(function (){var or__4212__auto__ = doc_str;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn(stuff__$2,(function (){var or__4212__auto__ = doc_str;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__19528_19535);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__19527_19534);
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__19550_19559 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__19551_19560 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__19552_19561 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__19553_19562 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__19552_19561);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__19553_19562);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count19554_19563 = (0);
var binding_19564 = binding_vec;
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count19554_19563 < cljs.core._STAR_print_length_STAR_)))){
if(cljs.core.seq(binding_19564)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__19555_19565 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__19556_19566 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__19557_19567 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__19558_19568 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__19557_19567);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__19558_19568);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_19564));

if(cljs.core.next(binding_19564)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(binding_19564));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__19556_19566);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__19555_19565);
}}


if(cljs.core.next(cljs.core.rest(binding_19564))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__19569 = (length_count19554_19563 + (1));
var G__19570 = cljs.core.next(cljs.core.rest(binding_19564));
length_count19554_19563 = G__19569;
binding_19564 = G__19570;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__19551_19560);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__19550_19559);
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__19571_19578 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__19572_19579 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__19573_19580 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__19574_19581 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__19573_19580);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__19574_19581);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if(((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis))))){
var fexpr__19575_19582 = (function (){var format_in__18323__auto__ = "~w ~1I~@_";
var cf__18324__auto__ = ((typeof format_in__18323__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__18323__auto__) : cljs.pprint.cached_compile.call(null,format_in__18323__auto__)):format_in__18323__auto__);
return (function() { 
var G__19583__delegate = function (args__18325__auto__){
var navigator__18326__auto__ = cljs.pprint.init_navigator(args__18325__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__18324__auto__,navigator__18326__auto__);
};
var G__19583 = function (var_args){
var args__18325__auto__ = null;
if (arguments.length > 0) {
var G__19584__i = 0, G__19584__a = new Array(arguments.length -  0);
while (G__19584__i < G__19584__a.length) {G__19584__a[G__19584__i] = arguments[G__19584__i + 0]; ++G__19584__i;}
  args__18325__auto__ = new cljs.core.IndexedSeq(G__19584__a,0,null);
} 
return G__19583__delegate.call(this,args__18325__auto__);};
G__19583.cljs$lang$maxFixedArity = 0;
G__19583.cljs$lang$applyTo = (function (arglist__19585){
var args__18325__auto__ = cljs.core.seq(arglist__19585);
return G__19583__delegate(args__18325__auto__);
});
G__19583.cljs$core$IFn$_invoke$arity$variadic = G__19583__delegate;
return G__19583;
})()
;
})();
(fexpr__19575_19582.cljs$core$IFn$_invoke$arity$1 ? fexpr__19575_19582.cljs$core$IFn$_invoke$arity$1(base_sym) : fexpr__19575_19582.call(null,base_sym));

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

var G__19577_19586 = cljs.core.next(cljs.core.rest(alis));
var fexpr__19576_19587 = (function (){var format_in__18323__auto__ = " ~_~{~w~^ ~_~}";
var cf__18324__auto__ = ((typeof format_in__18323__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__18323__auto__) : cljs.pprint.cached_compile.call(null,format_in__18323__auto__)):format_in__18323__auto__);
return (function() { 
var G__19588__delegate = function (args__18325__auto__){
var navigator__18326__auto__ = cljs.pprint.init_navigator(args__18325__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__18324__auto__,navigator__18326__auto__);
};
var G__19588 = function (var_args){
var args__18325__auto__ = null;
if (arguments.length > 0) {
var G__19589__i = 0, G__19589__a = new Array(arguments.length -  0);
while (G__19589__i < G__19589__a.length) {G__19589__a[G__19589__i] = arguments[G__19589__i + 0]; ++G__19589__i;}
  args__18325__auto__ = new cljs.core.IndexedSeq(G__19589__a,0,null);
} 
return G__19588__delegate.call(this,args__18325__auto__);};
G__19588.cljs$lang$maxFixedArity = 0;
G__19588.cljs$lang$applyTo = (function (arglist__19590){
var args__18325__auto__ = cljs.core.seq(arglist__19590);
return G__19588__delegate(args__18325__auto__);
});
G__19588.cljs$core$IFn$_invoke$arity$variadic = G__19588__delegate;
return G__19588;
})()
;
})();
(fexpr__19576_19587.cljs$core$IFn$_invoke$arity$1 ? fexpr__19576_19587.cljs$core$IFn$_invoke$arity$1(G__19577_19586) : fexpr__19576_19587.call(null,G__19577_19586));
} else {
cljs.pprint.pprint_simple_code_list(alis);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__19572_19579);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__19571_19578);
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__18323__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__18324__auto__ = ((typeof format_in__18323__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__18323__auto__) : cljs.pprint.cached_compile.call(null,format_in__18323__auto__)):format_in__18323__auto__);
return (function() { 
var G__19591__delegate = function (args__18325__auto__){
var navigator__18326__auto__ = cljs.pprint.init_navigator(args__18325__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__18324__auto__,navigator__18326__auto__);
};
var G__19591 = function (var_args){
var args__18325__auto__ = null;
if (arguments.length > 0) {
var G__19592__i = 0, G__19592__a = new Array(arguments.length -  0);
while (G__19592__i < G__19592__a.length) {G__19592__a[G__19592__i] = arguments[G__19592__i + 0]; ++G__19592__i;}
  args__18325__auto__ = new cljs.core.IndexedSeq(G__19592__a,0,null);
} 
return G__19591__delegate.call(this,args__18325__auto__);};
G__19591.cljs$lang$maxFixedArity = 0;
G__19591.cljs$lang$applyTo = (function (arglist__19593){
var args__18325__auto__ = cljs.core.seq(arglist__19593);
return G__19591__delegate(args__18325__auto__);
});
G__19591.cljs$core$IFn$_invoke$arity$variadic = G__19591__delegate;
return G__19591;
})()
;
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__19594_19603 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__19595_19604 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__19596_19605 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__19597_19606 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__19596_19605);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__19597_19606);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var length_count19598_19607 = (0);
var alis_19608__$1 = cljs.core.next(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count19598_19607 < cljs.core._STAR_print_length_STAR_)))){
if(alis_19608__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__19599_19609 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__19600_19610 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__19601_19611 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__19602_19612 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__19601_19611);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__19602_19612);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_19608__$1));

if(cljs.core.next(alis_19608__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_19608__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__19600_19610);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__19599_19609);
}}


if(cljs.core.next(cljs.core.rest(alis_19608__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__19613 = (length_count19598_19607 + (1));
var G__19614 = cljs.core.next(cljs.core.rest(alis_19608__$1));
length_count19598_19607 = G__19613;
alis_19608__$1 = G__19614;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__19595_19604);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__19594_19603);
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__19615_19624 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__19616_19625 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__19617_19626 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__19618_19627 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__19617_19626);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__19618_19627);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__18323__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__18324__auto__ = ((typeof format_in__18323__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__18323__auto__) : cljs.pprint.cached_compile.call(null,format_in__18323__auto__)):format_in__18323__auto__);
return (function() { 
var G__19628__delegate = function (args__18325__auto__){
var navigator__18326__auto__ = cljs.pprint.init_navigator(args__18325__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__18324__auto__,navigator__18326__auto__);
};
var G__19628 = function (var_args){
var args__18325__auto__ = null;
if (arguments.length > 0) {
var G__19629__i = 0, G__19629__a = new Array(arguments.length -  0);
while (G__19629__i < G__19629__a.length) {G__19629__a[G__19629__i] = arguments[G__19629__i + 0]; ++G__19629__i;}
  args__18325__auto__ = new cljs.core.IndexedSeq(G__19629__a,0,null);
} 
return G__19628__delegate.call(this,args__18325__auto__);};
G__19628.cljs$lang$maxFixedArity = 0;
G__19628.cljs$lang$applyTo = (function (arglist__19630){
var args__18325__auto__ = cljs.core.seq(arglist__19630);
return G__19628__delegate(args__18325__auto__);
});
G__19628.cljs$core$IFn$_invoke$arity$variadic = G__19628__delegate;
return G__19628;
})()
;
})(),alis);

var length_count19619_19631 = (0);
var alis_19632__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count19619_19631 < cljs.core._STAR_print_length_STAR_)))){
if(alis_19632__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__19620_19633 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__19621_19634 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__19622_19635 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__19623_19636 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__19622_19635);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__19623_19636);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_19632__$1));

if(cljs.core.next(alis_19632__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_19632__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__19621_19634);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__19620_19633);
}}


if(cljs.core.next(cljs.core.rest(alis_19632__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__19637 = (length_count19619_19631 + (1));
var G__19638 = cljs.core.next(cljs.core.rest(alis_19632__$1));
length_count19619_19631 = G__19637;
alis_19632__$1 = G__19638;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__19616_19625);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__19615_19624);
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second(alis);
var nlis = cljs.core.first(cljs.core.rest(cljs.core.rest(alis)));
if(cljs.core.vector_QMARK_(args)){
var _STAR_symbol_map_STAR__orig_val__19641 = cljs.pprint._STAR_symbol_map_STAR_;
var _STAR_symbol_map_STAR__temp_val__19642 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),"%"]):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__19639_SHARP_,p2__19640_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__19639_SHARP_,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__19640_SHARP_)].join('')],null));
}),args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));
(cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__temp_val__19642);

try{var fexpr__19643 = (function (){var format_in__18323__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__18324__auto__ = ((typeof format_in__18323__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__18323__auto__) : cljs.pprint.cached_compile.call(null,format_in__18323__auto__)):format_in__18323__auto__);
return (function() { 
var G__19644__delegate = function (args__18325__auto__){
var navigator__18326__auto__ = cljs.pprint.init_navigator(args__18325__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__18324__auto__,navigator__18326__auto__);
};
var G__19644 = function (var_args){
var args__18325__auto__ = null;
if (arguments.length > 0) {
var G__19645__i = 0, G__19645__a = new Array(arguments.length -  0);
while (G__19645__i < G__19645__a.length) {G__19645__a[G__19645__i] = arguments[G__19645__i + 0]; ++G__19645__i;}
  args__18325__auto__ = new cljs.core.IndexedSeq(G__19645__a,0,null);
} 
return G__19644__delegate.call(this,args__18325__auto__);};
G__19644.cljs$lang$maxFixedArity = 0;
G__19644.cljs$lang$applyTo = (function (arglist__19646){
var args__18325__auto__ = cljs.core.seq(arglist__19646);
return G__19644__delegate(args__18325__auto__);
});
G__19644.cljs$core$IFn$_invoke$arity$variadic = G__19644__delegate;
return G__19644;
})()
;
})();
return (fexpr__19643.cljs$core$IFn$_invoke$arity$1 ? fexpr__19643.cljs$core$IFn$_invoke$arity$1(nlis) : fexpr__19643.call(null,nlis));
}finally {(cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__orig_val__19641);
}} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__19647_19652 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__19648_19653 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__19649_19654 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__19650_19655 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__19649_19654);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__19650_19655);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

var length_count19651_19656 = (0);
var alis_19657__$1 = cljs.core.seq(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count19651_19656 < cljs.core._STAR_print_length_STAR_)))){
if(alis_19657__$1){
cljs.pprint.write_out(cljs.core.first(alis_19657__$1));

if(cljs.core.next(alis_19657__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__19658 = (length_count19651_19656 + (1));
var G__19659 = cljs.core.next(alis_19657__$1);
length_count19651_19656 = G__19658;
alis_19657__$1 = G__19659;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__19648_19653);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__19647_19652);
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4611__auto__ = (function cljs$pprint$two_forms_$_iter__19660(s__19661){
return (new cljs.core.LazySeq(null,(function (){
var s__19661__$1 = s__19661;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__19661__$1);
if(temp__5753__auto__){
var s__19661__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19661__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__19661__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__19663 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__19662 = (0);
while(true){
if((i__19662 < size__4610__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4609__auto__,i__19662);
cljs.core.chunk_append(b__19663,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__19664 = (i__19662 + (1));
i__19662 = G__19664;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19663),cljs$pprint$two_forms_$_iter__19660(cljs.core.chunk_rest(s__19661__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19663),null);
}
} else {
var x = cljs.core.first(s__19661__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__19660(cljs.core.rest(s__19661__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(amap);
})()], 0)));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19665_SHARP_){
var vec__19666 = p1__19665_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19666,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19666,(1),null);
if(cljs.core.not((function (){var or__4212__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__19665_SHARP_;
}
}),amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$_DOT_,cljs.core.cst$sym$fn_STAR_,cljs.core.cst$sym$when_DASH_first,cljs.core.cst$sym$if,cljs.core.cst$sym$condp,cljs.core.cst$sym$$$,cljs.core.cst$sym$defmacro,cljs.core.cst$sym$defn,cljs.core.cst$sym$loop,cljs.core.cst$sym$struct,cljs.core.cst$sym$doseq,cljs.core.cst$sym$if_DASH_not,cljs.core.cst$sym$when_DASH_not,cljs.core.cst$sym$def,cljs.core.cst$sym$when,cljs.core.cst$sym$with_DASH_open,cljs.core.cst$sym$with_DASH_local_DASH_vars,cljs.core.cst$sym$defonce,cljs.core.cst$sym$when_DASH_let,cljs.core.cst$sym$ns,cljs.core.cst$sym$dotimes,cljs.core.cst$sym$cond,cljs.core.cst$sym$let,cljs.core.cst$sym$fn,cljs.core.cst$sym$defn_DASH_,cljs.core.cst$sym$locking,cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$if_DASH_let,cljs.core.cst$sym$binding,cljs.core.cst$sym$struct_DASH_map],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__5751__auto__ = (function (){var G__19669 = cljs.core.first(alis);
return (cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1(G__19669) : cljs.pprint._STAR_code_table_STAR_.call(null,G__19669));
})();
if(cljs.core.truth_(temp__5751__auto__)){
var special_form = temp__5751__auto__;
return (special_form.cljs$core$IFn$_invoke$arity$1 ? special_form.cljs$core$IFn$_invoke$arity$1(alis) : special_form.call(null,alis));
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__5751__auto__ = (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_symbol_map_STAR_) : sym.call(null,cljs.pprint._STAR_symbol_map_STAR_));
if(cljs.core.truth_(temp__5751__auto__)){
var arg_num = temp__5751__auto__;
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_num], 0));
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0));
} else {
return (cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(sym) : cljs.pprint.pr.call(null,sym));
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.code_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__19670 = cljs.core.get_global_hierarchy;
return (fexpr__19670.cljs$core$IFn$_invoke$arity$0 ? fexpr__19670.cljs$core$IFn$_invoke$arity$0() : fexpr__19670.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_code_list);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$symbol,cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$queue,cljs.pprint.pprint_pqueue);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$deref,cljs.pprint.pprint_ideref);
cljs.pprint.use_method(cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__4295__auto__ = (0);
var y__4296__auto__ = (width - cljs.core.count(s));
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__19675 = arguments.length;
switch (G__19675) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,((cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)).length),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19671_SHARP_){
return ((cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__19671_SHARP_,k))).length);
}),rows));
}),ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19672_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__19672_SHARP_,"-"));
}),widths);
var fmt_row = (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__4611__auto__ = (function cljs$pprint$iter__19686(s__19687){
return (new cljs.core.LazySeq(null,(function (){
var s__19687__$1 = s__19687;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__19687__$1);
if(temp__5753__auto__){
var s__19687__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19687__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__19687__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__19689 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__19688 = (0);
while(true){
if((i__19688 < size__4610__auto__)){
var vec__19690 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4609__auto__,i__19688);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19690,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19690,(1),null);
cljs.core.chunk_append(b__19689,cljs.pprint.add_padding(width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)));

var G__19701 = (i__19688 + (1));
i__19688 = G__19701;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19689),cljs$pprint$iter__19686(cljs.core.chunk_rest(s__19687__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19689),null);
}
} else {
var vec__19693 = cljs.core.first(s__19687__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19693,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19693,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),cljs$pprint$iter__19686(cljs.core.rest(s__19687__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19673_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__19673_SHARP_);
}),ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__19696 = cljs.core.seq(rows);
var chunk__19697 = null;
var count__19698 = (0);
var i__19699 = (0);
while(true){
if((i__19699 < count__19698)){
var row = chunk__19697.cljs$core$IIndexed$_nth$arity$2(null,i__19699);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));


var G__19702 = seq__19696;
var G__19703 = chunk__19697;
var G__19704 = count__19698;
var G__19705 = (i__19699 + (1));
seq__19696 = G__19702;
chunk__19697 = G__19703;
count__19698 = G__19704;
i__19699 = G__19705;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__19696);
if(temp__5753__auto__){
var seq__19696__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19696__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__19696__$1);
var G__19706 = cljs.core.chunk_rest(seq__19696__$1);
var G__19707 = c__4638__auto__;
var G__19708 = cljs.core.count(c__4638__auto__);
var G__19709 = (0);
seq__19696 = G__19706;
chunk__19697 = G__19707;
count__19698 = G__19708;
i__19699 = G__19709;
continue;
} else {
var row = cljs.core.first(seq__19696__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));


var G__19710 = cljs.core.next(seq__19696__$1);
var G__19711 = null;
var G__19712 = (0);
var G__19713 = (0);
seq__19696 = G__19710;
chunk__19697 = G__19711;
count__19698 = G__19712;
i__19699 = G__19713;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
}));

(cljs.pprint.print_table.cljs$lang$maxFixedArity = 2);

