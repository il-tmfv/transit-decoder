// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('garden.units');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.reader');
goog.require('garden.types');
goog.require('garden.util');
garden.units.length_units = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$mm,cljs.core.cst$kw$pt,cljs.core.cst$kw$px,cljs.core.cst$kw$pc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.cst$kw$cm,cljs.core.cst$kw$in]);
garden.units.angular_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$deg,null,cljs.core.cst$kw$turn,null,cljs.core.cst$kw$rad,null,cljs.core.cst$kw$grad,null], null), null);
garden.units.time_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$s,null,cljs.core.cst$kw$ms,null], null), null);
garden.units.frequency_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$kHz,null,cljs.core.cst$kw$Hz,null], null), null);
garden.units.resolution_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$dppx,null,cljs.core.cst$kw$dpcm,null,cljs.core.cst$kw$dpi,null], null), null);
/**
 * True if x is of type CSSUnit.
 */
garden.units.unit_QMARK_ = (function garden$units$unit_QMARK_(x){
return (x instanceof garden.types.CSSUnit);
});
garden.units.length_QMARK_ = (function garden$units$length_QMARK_(x){
return ((garden.units.unit_QMARK_(x)) && (cljs.core.contains_QMARK_(garden.units.length_units,cljs.core.cst$kw$unit.cljs$core$IFn$_invoke$arity$1(x))));
});
garden.units.angle_QMARK_ = (function garden$units$angle_QMARK_(x){
return ((garden.units.unit_QMARK_(x)) && (cljs.core.contains_QMARK_(garden.units.angular_units,cljs.core.cst$kw$unit.cljs$core$IFn$_invoke$arity$1(x))));
});
garden.units.time_QMARK_ = (function garden$units$time_QMARK_(x){
return ((garden.units.unit_QMARK_(x)) && (cljs.core.contains_QMARK_(garden.units.time_units,cljs.core.cst$kw$unit.cljs$core$IFn$_invoke$arity$1(x))));
});
garden.units.frequency_QMARK_ = (function garden$units$frequency_QMARK_(x){
return ((garden.units.unit_QMARK_(x)) && (cljs.core.contains_QMARK_(garden.units.frequency_units,cljs.core.cst$kw$unit.cljs$core$IFn$_invoke$arity$1(x))));
});
garden.units.resolution_QMARK_ = (function garden$units$resolution_QMARK_(x){
return ((garden.units.unit_QMARK_(x)) && (cljs.core.contains_QMARK_(garden.units.resolution_units,cljs.core.cst$kw$unit.cljs$core$IFn$_invoke$arity$1(x))));
});
/**
 * Map associating CSS unit types to their conversion values.
 */
garden.units.conversions = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$mm,cljs.core.cst$kw$kHz,cljs.core.cst$kw$pt,cljs.core.cst$kw$px,cljs.core.cst$kw$rem,cljs.core.cst$kw$em,cljs.core.cst$kw$Hz,cljs.core.cst$kw$pc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.cst$kw$s,cljs.core.cst$kw$deg,cljs.core.cst$kw$cm,cljs.core.cst$kw$turn,cljs.core.cst$kw$ms,cljs.core.cst$kw$rad,cljs.core.cst$kw$grad,cljs.core.cst$kw$in],[new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$mm,(1),cljs.core.cst$kw$pt,2.83464567,cljs.core.cst$kw$px,3.7795275591], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$kHz,(1)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pt,(1),cljs.core.cst$kw$px,1.3333333333], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$px,(1)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rem,(1)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$em,(1)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$Hz,(1),cljs.core.cst$kw$kHz,0.001], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mm,4.23333333,cljs.core.cst$kw$pc,(1),cljs.core.cst$kw$pt,(12),cljs.core.cst$kw$px,(16)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("%"),(1)]),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ms,(1000),cljs.core.cst$kw$s,(1)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$deg,(1),cljs.core.cst$kw$grad,1.111111111,cljs.core.cst$kw$rad,0.0174532925,cljs.core.cst$kw$turn,0.002777778], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cm,(1),cljs.core.cst$kw$mm,(10),cljs.core.cst$kw$pc,2.36220473,cljs.core.cst$kw$pt,28.3464567,cljs.core.cst$kw$px,37.795275591], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$turn,(1)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ms,(1)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$rad,(1),cljs.core.cst$kw$turn,0.159154943], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$grad,(1),cljs.core.cst$kw$rad,63.661977237,cljs.core.cst$kw$turn,0.0025], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cm,2.54,cljs.core.cst$kw$in,(1),cljs.core.cst$kw$mm,25.4,cljs.core.cst$kw$pc,(6),cljs.core.cst$kw$pt,(72),cljs.core.cst$kw$px,(96)], null)]);
/**
 * True if unit is a key of convertable-units, false otherwise.
 */
garden.units.convertable_QMARK_ = (function garden$units$convertable_QMARK_(unit){
return cljs.core.contains_QMARK_(garden.units.conversions,unit);
});
/**
 * Convert a Unit with :unit left to a Unit with :unit right if possible.
 */
garden.units.convert = (function garden$units$convert(p__14514,right){
var map__14515 = p__14514;
var map__14515__$1 = (((((!((map__14515 == null))))?(((((map__14515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14515):map__14515);
var m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14515__$1,cljs.core.cst$kw$magnitude);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14515__$1,cljs.core.cst$kw$unit);
if(cljs.core.every_QMARK_(garden.units.convertable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null))){
var v1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(garden.units.conversions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null));
var v2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(garden.units.conversions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [right,left], null));
if(cljs.core.truth_(v1)){
return (new garden.types.CSSUnit(right,(v1 * m),null,null,null));
} else {
if(cljs.core.truth_(v2)){
return (new garden.types.CSSUnit(right,(m / v2),null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(garden.util.format.cljs$core$IFn$_invoke$arity$variadic("Can't convert %s to %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(left),cljs.core.name(right)], 0)),cljs.core.PersistentArrayMap.EMPTY);

}
}
} else {
var x = cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(garden.units.convertable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null)));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Inconvertible unit ",cljs.core.name(x)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Regular expression for matching a CSS unit. The magnitude
 *           and unit are captured.
 */
garden.units.unit_re = /([+-]?\d+(?:\.?\d+)?)(p[xtc]|in|[cm]m|%|r?em|ex|ch|v(?:[wh]|m(?:in|ax))|deg|g?rad|turn|m?s|k?Hz|dp(?:i|cm|px))/;
/**
 * Read a `CSSUnit` object from the string `s`.
 */
garden.units.read_unit = (function garden$units$read_unit(s){
var temp__5457__auto__ = cljs.core.re_matches(garden.units.unit_re,s);
if(cljs.core.truth_(temp__5457__auto__)){
var vec__14517 = temp__5457__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14517,(0),null);
var magnitude = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14517,(1),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14517,(2),null);
var unit__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(unit);
var magnitude__$1 = (cljs.core.truth_(magnitude)?cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(magnitude):(0));
return (new garden.types.CSSUnit(unit__$1,magnitude__$1,null,null,null));
} else {
return null;
}
});
/**
 * Creates a function for verifying the given unit type.
 */
garden.units.make_unit_predicate = (function garden$units$make_unit_predicate(unit){
return (function (x){
return ((garden.units.unit_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unit.cljs$core$IFn$_invoke$arity$1(x),unit)));
});
});
/**
 * Creates a function for creating and converting `CSSUnit`s for the
 *   given unit. If a number n is passed the function it will produce a
 *   new `CSSUnit` record with a the magnitude set to n. If a `CSSUnit`
 *   is passed the function will attempt to convert it.
 */
garden.units.make_unit_fn = (function garden$units$make_unit_fn(unit){
return (function (x){
if(typeof x === 'number'){
return (new garden.types.CSSUnit(unit,x,null,null,null));
} else {
if(garden.units.unit_QMARK_(x)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((unit.cljs$core$IFn$_invoke$arity$1 ? unit.cljs$core$IFn$_invoke$arity$1(x) : unit.call(null,x)),unit)){
return x;
} else {
return garden.units.convert(x,unit);
}
} else {
var ex_message = garden.util.format.cljs$core$IFn$_invoke$arity$variadic("Unable to convert from %s to %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type.getName(),cljs.core.name(unit)], 0));
var ex_data = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$given,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.type,cljs.core.cst$kw$unit,unit], null)], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(ex_message,ex_data);

}
}
});
});
/**
 * Create a addition function for adding Units.
 */
garden.units.make_unit_adder = (function garden$units$make_unit_adder(unit){
var u = garden.units.make_unit_fn(unit);
return (function() {
var garden$units$make_unit_adder_$_u_PLUS_ = null;
var garden$units$make_unit_adder_$_u_PLUS___0 = (function (){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1((0)) : u.call(null,(0)));
});
var garden$units$make_unit_adder_$_u_PLUS___1 = (function (x){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
});
var garden$units$make_unit_adder_$_u_PLUS___2 = (function (x,y){
var map__14520 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
var map__14520__$1 = (((((!((map__14520 == null))))?(((((map__14520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14520):map__14520);
var m1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14520__$1,cljs.core.cst$kw$magnitude);
var map__14521 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(y) : u.call(null,y));
var map__14521__$1 = (((((!((map__14521 == null))))?(((((map__14521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14521):map__14521);
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14521__$1,cljs.core.cst$kw$magnitude);
var G__14524 = (m1 + m2);
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__14524) : u.call(null,G__14524));
});
var garden$units$make_unit_adder_$_u_PLUS___3 = (function() { 
var G__14525__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(garden$units$make_unit_adder_$_u_PLUS_,garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__14525 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__14526__i = 0, G__14526__a = new Array(arguments.length -  2);
while (G__14526__i < G__14526__a.length) {G__14526__a[G__14526__i] = arguments[G__14526__i + 2]; ++G__14526__i;}
  more = new cljs.core.IndexedSeq(G__14526__a,0,null);
} 
return G__14525__delegate.call(this,x,y,more);};
G__14525.cljs$lang$maxFixedArity = 2;
G__14525.cljs$lang$applyTo = (function (arglist__14527){
var x = cljs.core.first(arglist__14527);
arglist__14527 = cljs.core.next(arglist__14527);
var y = cljs.core.first(arglist__14527);
var more = cljs.core.rest(arglist__14527);
return G__14525__delegate(x,y,more);
});
G__14525.cljs$core$IFn$_invoke$arity$variadic = G__14525__delegate;
return G__14525;
})()
;
garden$units$make_unit_adder_$_u_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return garden$units$make_unit_adder_$_u_PLUS___0.call(this);
case 1:
return garden$units$make_unit_adder_$_u_PLUS___1.call(this,x);
case 2:
return garden$units$make_unit_adder_$_u_PLUS___2.call(this,x,y);
default:
var G__14528 = null;
if (arguments.length > 2) {
var G__14529__i = 0, G__14529__a = new Array(arguments.length -  2);
while (G__14529__i < G__14529__a.length) {G__14529__a[G__14529__i] = arguments[G__14529__i + 2]; ++G__14529__i;}
G__14528 = new cljs.core.IndexedSeq(G__14529__a,0,null);
}
return garden$units$make_unit_adder_$_u_PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__14528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
garden$units$make_unit_adder_$_u_PLUS_.cljs$lang$maxFixedArity = 2;
garden$units$make_unit_adder_$_u_PLUS_.cljs$lang$applyTo = garden$units$make_unit_adder_$_u_PLUS___3.cljs$lang$applyTo;
garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$0 = garden$units$make_unit_adder_$_u_PLUS___0;
garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$1 = garden$units$make_unit_adder_$_u_PLUS___1;
garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$2 = garden$units$make_unit_adder_$_u_PLUS___2;
garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$variadic = garden$units$make_unit_adder_$_u_PLUS___3.cljs$core$IFn$_invoke$arity$variadic;
return garden$units$make_unit_adder_$_u_PLUS_;
})()
});
/**
 * Create a subtraction function for subtracting Units.
 */
garden.units.make_unit_subtractor = (function garden$units$make_unit_subtractor(unit){
var u = garden.units.make_unit_fn(unit);
return (function() {
var garden$units$make_unit_subtractor_$_u_ = null;
var garden$units$make_unit_subtractor_$_u___1 = (function (x){
var G__14530 = (- x);
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__14530) : u.call(null,G__14530));
});
var garden$units$make_unit_subtractor_$_u___2 = (function (x,y){
var map__14531 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
var map__14531__$1 = (((((!((map__14531 == null))))?(((((map__14531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14531):map__14531);
var m1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14531__$1,cljs.core.cst$kw$magnitude);
var map__14532 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(y) : u.call(null,y));
var map__14532__$1 = (((((!((map__14532 == null))))?(((((map__14532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14532):map__14532);
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14532__$1,cljs.core.cst$kw$magnitude);
var G__14535 = (m1 - m2);
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__14535) : u.call(null,G__14535));
});
var garden$units$make_unit_subtractor_$_u___3 = (function() { 
var G__14536__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(garden$units$make_unit_subtractor_$_u_,garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__14536 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__14537__i = 0, G__14537__a = new Array(arguments.length -  2);
while (G__14537__i < G__14537__a.length) {G__14537__a[G__14537__i] = arguments[G__14537__i + 2]; ++G__14537__i;}
  more = new cljs.core.IndexedSeq(G__14537__a,0,null);
} 
return G__14536__delegate.call(this,x,y,more);};
G__14536.cljs$lang$maxFixedArity = 2;
G__14536.cljs$lang$applyTo = (function (arglist__14538){
var x = cljs.core.first(arglist__14538);
arglist__14538 = cljs.core.next(arglist__14538);
var y = cljs.core.first(arglist__14538);
var more = cljs.core.rest(arglist__14538);
return G__14536__delegate(x,y,more);
});
G__14536.cljs$core$IFn$_invoke$arity$variadic = G__14536__delegate;
return G__14536;
})()
;
garden$units$make_unit_subtractor_$_u_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return garden$units$make_unit_subtractor_$_u___1.call(this,x);
case 2:
return garden$units$make_unit_subtractor_$_u___2.call(this,x,y);
default:
var G__14539 = null;
if (arguments.length > 2) {
var G__14540__i = 0, G__14540__a = new Array(arguments.length -  2);
while (G__14540__i < G__14540__a.length) {G__14540__a[G__14540__i] = arguments[G__14540__i + 2]; ++G__14540__i;}
G__14539 = new cljs.core.IndexedSeq(G__14540__a,0,null);
}
return garden$units$make_unit_subtractor_$_u___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__14539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
garden$units$make_unit_subtractor_$_u_.cljs$lang$maxFixedArity = 2;
garden$units$make_unit_subtractor_$_u_.cljs$lang$applyTo = garden$units$make_unit_subtractor_$_u___3.cljs$lang$applyTo;
garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$1 = garden$units$make_unit_subtractor_$_u___1;
garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$2 = garden$units$make_unit_subtractor_$_u___2;
garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$variadic = garden$units$make_unit_subtractor_$_u___3.cljs$core$IFn$_invoke$arity$variadic;
return garden$units$make_unit_subtractor_$_u_;
})()
});
/**
 * Create a multiplication function for multiplying Units.
 */
garden.units.make_unit_multiplier = (function garden$units$make_unit_multiplier(unit){
var u = garden.units.make_unit_fn(unit);
var op = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,cljs.core.cst$kw$_PERCENT_))?(function garden$units$make_unit_multiplier_$_percent_STAR_(x,y){
return ((x * y) / (100));
}):cljs.core._STAR_);
return (function() {
var garden$units$make_unit_multiplier_$_u_STAR_ = null;
var garden$units$make_unit_multiplier_$_u_STAR___0 = (function (){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1((1)) : u.call(null,(1)));
});
var garden$units$make_unit_multiplier_$_u_STAR___1 = (function (x){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
});
var garden$units$make_unit_multiplier_$_u_STAR___2 = (function (x,y){
var map__14541 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
var map__14541__$1 = (((((!((map__14541 == null))))?(((((map__14541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14541):map__14541);
var m1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14541__$1,cljs.core.cst$kw$magnitude);
var map__14542 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(y) : u.call(null,y));
var map__14542__$1 = (((((!((map__14542 == null))))?(((((map__14542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14542):map__14542);
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14542__$1,cljs.core.cst$kw$magnitude);
var G__14545 = (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(m1,m2) : op.call(null,m1,m2));
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__14545) : u.call(null,G__14545));
});
var garden$units$make_unit_multiplier_$_u_STAR___3 = (function() { 
var G__14546__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(garden$units$make_unit_multiplier_$_u_STAR_,garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__14546 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__14547__i = 0, G__14547__a = new Array(arguments.length -  2);
while (G__14547__i < G__14547__a.length) {G__14547__a[G__14547__i] = arguments[G__14547__i + 2]; ++G__14547__i;}
  more = new cljs.core.IndexedSeq(G__14547__a,0,null);
} 
return G__14546__delegate.call(this,x,y,more);};
G__14546.cljs$lang$maxFixedArity = 2;
G__14546.cljs$lang$applyTo = (function (arglist__14548){
var x = cljs.core.first(arglist__14548);
arglist__14548 = cljs.core.next(arglist__14548);
var y = cljs.core.first(arglist__14548);
var more = cljs.core.rest(arglist__14548);
return G__14546__delegate(x,y,more);
});
G__14546.cljs$core$IFn$_invoke$arity$variadic = G__14546__delegate;
return G__14546;
})()
;
garden$units$make_unit_multiplier_$_u_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return garden$units$make_unit_multiplier_$_u_STAR___0.call(this);
case 1:
return garden$units$make_unit_multiplier_$_u_STAR___1.call(this,x);
case 2:
return garden$units$make_unit_multiplier_$_u_STAR___2.call(this,x,y);
default:
var G__14549 = null;
if (arguments.length > 2) {
var G__14550__i = 0, G__14550__a = new Array(arguments.length -  2);
while (G__14550__i < G__14550__a.length) {G__14550__a[G__14550__i] = arguments[G__14550__i + 2]; ++G__14550__i;}
G__14549 = new cljs.core.IndexedSeq(G__14550__a,0,null);
}
return garden$units$make_unit_multiplier_$_u_STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__14549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
garden$units$make_unit_multiplier_$_u_STAR_.cljs$lang$maxFixedArity = 2;
garden$units$make_unit_multiplier_$_u_STAR_.cljs$lang$applyTo = garden$units$make_unit_multiplier_$_u_STAR___3.cljs$lang$applyTo;
garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$0 = garden$units$make_unit_multiplier_$_u_STAR___0;
garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$1 = garden$units$make_unit_multiplier_$_u_STAR___1;
garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$2 = garden$units$make_unit_multiplier_$_u_STAR___2;
garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$variadic = garden$units$make_unit_multiplier_$_u_STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return garden$units$make_unit_multiplier_$_u_STAR_;
})()
});
/**
 * Create a division function for dividing Units.
 */
garden.units.make_unit_divider = (function garden$units$make_unit_divider(unit){
var u = garden.units.make_unit_fn(unit);
var op = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,cljs.core.cst$kw$_PERCENT_))?(function garden$units$make_unit_divider_$_percent_div(x,y){
return ((100) * (x / y));
}):cljs.core._SLASH_);
return (function() {
var garden$units$make_unit_divider_$_ud = null;
var garden$units$make_unit_divider_$_ud__1 = (function (x){
var G__14551 = ((1) / x);
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__14551) : u.call(null,G__14551));
});
var garden$units$make_unit_divider_$_ud__2 = (function (x,y){
var map__14552 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
var map__14552__$1 = (((((!((map__14552 == null))))?(((((map__14552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14552):map__14552);
var m1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14552__$1,cljs.core.cst$kw$magnitude);
var map__14553 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(y) : u.call(null,y));
var map__14553__$1 = (((((!((map__14553 == null))))?(((((map__14553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14553):map__14553);
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14553__$1,cljs.core.cst$kw$magnitude);
var G__14556 = (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(m1,m2) : op.call(null,m1,m2));
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__14556) : u.call(null,G__14556));
});
var garden$units$make_unit_divider_$_ud__3 = (function() { 
var G__14557__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(garden$units$make_unit_divider_$_ud,garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__14557 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__14558__i = 0, G__14558__a = new Array(arguments.length -  2);
while (G__14558__i < G__14558__a.length) {G__14558__a[G__14558__i] = arguments[G__14558__i + 2]; ++G__14558__i;}
  more = new cljs.core.IndexedSeq(G__14558__a,0,null);
} 
return G__14557__delegate.call(this,x,y,more);};
G__14557.cljs$lang$maxFixedArity = 2;
G__14557.cljs$lang$applyTo = (function (arglist__14559){
var x = cljs.core.first(arglist__14559);
arglist__14559 = cljs.core.next(arglist__14559);
var y = cljs.core.first(arglist__14559);
var more = cljs.core.rest(arglist__14559);
return G__14557__delegate(x,y,more);
});
G__14557.cljs$core$IFn$_invoke$arity$variadic = G__14557__delegate;
return G__14557;
})()
;
garden$units$make_unit_divider_$_ud = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return garden$units$make_unit_divider_$_ud__1.call(this,x);
case 2:
return garden$units$make_unit_divider_$_ud__2.call(this,x,y);
default:
var G__14560 = null;
if (arguments.length > 2) {
var G__14561__i = 0, G__14561__a = new Array(arguments.length -  2);
while (G__14561__i < G__14561__a.length) {G__14561__a[G__14561__i] = arguments[G__14561__i + 2]; ++G__14561__i;}
G__14560 = new cljs.core.IndexedSeq(G__14561__a,0,null);
}
return garden$units$make_unit_divider_$_ud__3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__14560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
garden$units$make_unit_divider_$_ud.cljs$lang$maxFixedArity = 2;
garden$units$make_unit_divider_$_ud.cljs$lang$applyTo = garden$units$make_unit_divider_$_ud__3.cljs$lang$applyTo;
garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$1 = garden$units$make_unit_divider_$_ud__1;
garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$2 = garden$units$make_unit_divider_$_ud__2;
garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$variadic = garden$units$make_unit_divider_$_ud__3.cljs$core$IFn$_invoke$arity$variadic;
return garden$units$make_unit_divider_$_ud;
})()
});
garden.units.cm = garden.units.make_unit_fn(cljs.core.cst$kw$cm);

garden.units.cm_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$cm);

garden.units.cm_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$cm);

garden.units.cm_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$cm);

garden.units.cm_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$cm);

garden.units.cm_div = garden.units.make_unit_divider(cljs.core.cst$kw$cm);
garden.units.mm = garden.units.make_unit_fn(cljs.core.cst$kw$mm);

garden.units.mm_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$mm);

garden.units.mm_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$mm);

garden.units.mm_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$mm);

garden.units.mm_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$mm);

garden.units.mm_div = garden.units.make_unit_divider(cljs.core.cst$kw$mm);
garden.units.in$ = garden.units.make_unit_fn(cljs.core.cst$kw$in);

garden.units.in_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$in);

garden.units.in_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$in);

garden.units.in_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$in);

garden.units.in_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$in);

garden.units.in_div = garden.units.make_unit_divider(cljs.core.cst$kw$in);
garden.units.px = garden.units.make_unit_fn(cljs.core.cst$kw$px);

garden.units.px_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$px);

garden.units.px_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$px);

garden.units.px_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$px);

garden.units.px_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$px);

garden.units.px_div = garden.units.make_unit_divider(cljs.core.cst$kw$px);
garden.units.pt = garden.units.make_unit_fn(cljs.core.cst$kw$pt);

garden.units.pt_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$pt);

garden.units.pt_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$pt);

garden.units.pt_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$pt);

garden.units.pt_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$pt);

garden.units.pt_div = garden.units.make_unit_divider(cljs.core.cst$kw$pt);
garden.units.pc = garden.units.make_unit_fn(cljs.core.cst$kw$pc);

garden.units.pc_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$pc);

garden.units.pc_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$pc);

garden.units.pc_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$pc);

garden.units.pc_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$pc);

garden.units.pc_div = garden.units.make_unit_divider(cljs.core.cst$kw$pc);
garden.units.percent = garden.units.make_unit_fn(cljs.core.cst$kw$_PERCENT_);

garden.units.percent_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$_PERCENT_);

garden.units.percent_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$_PERCENT_);

garden.units.percent_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$_PERCENT_);

garden.units.percent_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$_PERCENT_);

garden.units.percent_div = garden.units.make_unit_divider(cljs.core.cst$kw$_PERCENT_);
garden.units.em = garden.units.make_unit_fn(cljs.core.cst$kw$em);

garden.units.em_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$em);

garden.units.em_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$em);

garden.units.em_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$em);

garden.units.em_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$em);

garden.units.em_div = garden.units.make_unit_divider(cljs.core.cst$kw$em);
garden.units.ex = garden.units.make_unit_fn(cljs.core.cst$kw$ex);

garden.units.ex_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$ex);

garden.units.ex_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$ex);

garden.units.ex_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$ex);

garden.units.ex_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$ex);

garden.units.ex_div = garden.units.make_unit_divider(cljs.core.cst$kw$ex);
garden.units.ch = garden.units.make_unit_fn(cljs.core.cst$kw$ch);

garden.units.ch_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$ch);

garden.units.ch_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$ch);

garden.units.ch_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$ch);

garden.units.ch_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$ch);

garden.units.ch_div = garden.units.make_unit_divider(cljs.core.cst$kw$ch);
garden.units.rem = garden.units.make_unit_fn(cljs.core.cst$kw$rem);

garden.units.rem_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$rem);

garden.units.rem_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$rem);

garden.units.rem_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$rem);

garden.units.rem_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$rem);

garden.units.rem_div = garden.units.make_unit_divider(cljs.core.cst$kw$rem);
garden.units.vw = garden.units.make_unit_fn(cljs.core.cst$kw$vw);

garden.units.vw_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$vw);

garden.units.vw_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$vw);

garden.units.vw_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$vw);

garden.units.vw_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$vw);

garden.units.vw_div = garden.units.make_unit_divider(cljs.core.cst$kw$vw);
garden.units.vh = garden.units.make_unit_fn(cljs.core.cst$kw$vh);

garden.units.vh_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$vh);

garden.units.vh_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$vh);

garden.units.vh_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$vh);

garden.units.vh_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$vh);

garden.units.vh_div = garden.units.make_unit_divider(cljs.core.cst$kw$vh);
garden.units.vmin = garden.units.make_unit_fn(cljs.core.cst$kw$vmin);

garden.units.vmin_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$vmin);

garden.units.vmin_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$vmin);

garden.units.vmin_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$vmin);

garden.units.vmin_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$vmin);

garden.units.vmin_div = garden.units.make_unit_divider(cljs.core.cst$kw$vmin);
garden.units.vmax = garden.units.make_unit_fn(cljs.core.cst$kw$vmax);

garden.units.vmax_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$vmax);

garden.units.vmax_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$vmax);

garden.units.vmax_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$vmax);

garden.units.vmax_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$vmax);

garden.units.vmax_div = garden.units.make_unit_divider(cljs.core.cst$kw$vmax);
garden.units.deg = garden.units.make_unit_fn(cljs.core.cst$kw$deg);

garden.units.deg_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$deg);

garden.units.deg_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$deg);

garden.units.deg_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$deg);

garden.units.deg_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$deg);

garden.units.deg_div = garden.units.make_unit_divider(cljs.core.cst$kw$deg);
garden.units.grad = garden.units.make_unit_fn(cljs.core.cst$kw$grad);

garden.units.grad_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$grad);

garden.units.grad_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$grad);

garden.units.grad_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$grad);

garden.units.grad_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$grad);

garden.units.grad_div = garden.units.make_unit_divider(cljs.core.cst$kw$grad);
garden.units.rad = garden.units.make_unit_fn(cljs.core.cst$kw$rad);

garden.units.rad_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$rad);

garden.units.rad_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$rad);

garden.units.rad_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$rad);

garden.units.rad_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$rad);

garden.units.rad_div = garden.units.make_unit_divider(cljs.core.cst$kw$rad);
garden.units.turn = garden.units.make_unit_fn(cljs.core.cst$kw$turn);

garden.units.turn_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$turn);

garden.units.turn_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$turn);

garden.units.turn_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$turn);

garden.units.turn_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$turn);

garden.units.turn_div = garden.units.make_unit_divider(cljs.core.cst$kw$turn);
garden.units.s = garden.units.make_unit_fn(cljs.core.cst$kw$s);

garden.units.s_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$s);

garden.units.s_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$s);

garden.units.s_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$s);

garden.units.s_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$s);

garden.units.s_div = garden.units.make_unit_divider(cljs.core.cst$kw$s);
garden.units.ms = garden.units.make_unit_fn(cljs.core.cst$kw$ms);

garden.units.ms_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$ms);

garden.units.ms_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$ms);

garden.units.ms_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$ms);

garden.units.ms_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$ms);

garden.units.ms_div = garden.units.make_unit_divider(cljs.core.cst$kw$ms);
garden.units.Hz = garden.units.make_unit_fn(cljs.core.cst$kw$Hz);

garden.units.Hz_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$Hz);

garden.units.Hz_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$Hz);

garden.units.Hz_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$Hz);

garden.units.Hz_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$Hz);

garden.units.Hz_div = garden.units.make_unit_divider(cljs.core.cst$kw$Hz);
garden.units.kHz = garden.units.make_unit_fn(cljs.core.cst$kw$kHz);

garden.units.kHz_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$kHz);

garden.units.kHz_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$kHz);

garden.units.kHz_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$kHz);

garden.units.kHz_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$kHz);

garden.units.kHz_div = garden.units.make_unit_divider(cljs.core.cst$kw$kHz);
garden.units.dpi = garden.units.make_unit_fn(cljs.core.cst$kw$dpi);

garden.units.dpi_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$dpi);

garden.units.dpi_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$dpi);

garden.units.dpi_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$dpi);

garden.units.dpi_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$dpi);

garden.units.dpi_div = garden.units.make_unit_divider(cljs.core.cst$kw$dpi);
garden.units.dpcm = garden.units.make_unit_fn(cljs.core.cst$kw$dpcm);

garden.units.dpcm_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$dpcm);

garden.units.dpcm_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$dpcm);

garden.units.dpcm_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$dpcm);

garden.units.dpcm_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$dpcm);

garden.units.dpcm_div = garden.units.make_unit_divider(cljs.core.cst$kw$dpcm);
garden.units.dppx = garden.units.make_unit_fn(cljs.core.cst$kw$dppx);

garden.units.dppx_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$dppx);

garden.units.dppx_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$dppx);

garden.units.dppx_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$dppx);

garden.units.dppx_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$dppx);

garden.units.dppx_div = garden.units.make_unit_divider(cljs.core.cst$kw$dppx);
