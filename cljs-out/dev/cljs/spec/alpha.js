// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.spec.alpha');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.spec.gen.alpha');
goog.require('clojure.string');
cljs.spec.alpha.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec.alpha._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec.alpha._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.alpha.Spec = function(){};

var cljs$spec$alpha$Spec$conform_STAR_$dyn_15541 = (function (spec,x){
var x__4509__auto__ = (((spec == null))?null:spec);
var m__4510__auto__ = (cljs.spec.alpha.conform_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(spec,x) : m__4510__auto__.call(null,spec,x));
} else {
var m__4508__auto__ = (cljs.spec.alpha.conform_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(spec,x) : m__4508__auto__.call(null,spec,x));
} else {
throw cljs.core.missing_protocol("Spec.conform*",spec);
}
}
});
cljs.spec.alpha.conform_STAR_ = (function cljs$spec$alpha$conform_STAR_(spec,x){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2 == null)))))){
return spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2(spec,x);
} else {
return cljs$spec$alpha$Spec$conform_STAR_$dyn_15541(spec,x);
}
});

var cljs$spec$alpha$Spec$unform_STAR_$dyn_15542 = (function (spec,y){
var x__4509__auto__ = (((spec == null))?null:spec);
var m__4510__auto__ = (cljs.spec.alpha.unform_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(spec,y) : m__4510__auto__.call(null,spec,y));
} else {
var m__4508__auto__ = (cljs.spec.alpha.unform_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(spec,y) : m__4508__auto__.call(null,spec,y));
} else {
throw cljs.core.missing_protocol("Spec.unform*",spec);
}
}
});
cljs.spec.alpha.unform_STAR_ = (function cljs$spec$alpha$unform_STAR_(spec,y){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2 == null)))))){
return spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2(spec,y);
} else {
return cljs$spec$alpha$Spec$unform_STAR_$dyn_15542(spec,y);
}
});

var cljs$spec$alpha$Spec$explain_STAR_$dyn_15543 = (function (spec,path,via,in$,x){
var x__4509__auto__ = (((spec == null))?null:spec);
var m__4510__auto__ = (cljs.spec.alpha.explain_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$5(spec,path,via,in$,x) : m__4510__auto__.call(null,spec,path,via,in$,x));
} else {
var m__4508__auto__ = (cljs.spec.alpha.explain_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$5(spec,path,via,in$,x) : m__4508__auto__.call(null,spec,path,via,in$,x));
} else {
throw cljs.core.missing_protocol("Spec.explain*",spec);
}
}
});
cljs.spec.alpha.explain_STAR_ = (function cljs$spec$alpha$explain_STAR_(spec,path,via,in$,x){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5 == null)))))){
return spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
return cljs$spec$alpha$Spec$explain_STAR_$dyn_15543(spec,path,via,in$,x);
}
});

var cljs$spec$alpha$Spec$gen_STAR_$dyn_15544 = (function (spec,overrides,path,rmap){
var x__4509__auto__ = (((spec == null))?null:spec);
var m__4510__auto__ = (cljs.spec.alpha.gen_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(spec,overrides,path,rmap) : m__4510__auto__.call(null,spec,overrides,path,rmap));
} else {
var m__4508__auto__ = (cljs.spec.alpha.gen_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(spec,overrides,path,rmap) : m__4508__auto__.call(null,spec,overrides,path,rmap));
} else {
throw cljs.core.missing_protocol("Spec.gen*",spec);
}
}
});
cljs.spec.alpha.gen_STAR_ = (function cljs$spec$alpha$gen_STAR_(spec,overrides,path,rmap){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4 == null)))))){
return spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
return cljs$spec$alpha$Spec$gen_STAR_$dyn_15544(spec,overrides,path,rmap);
}
});

var cljs$spec$alpha$Spec$with_gen_STAR_$dyn_15545 = (function (spec,gfn){
var x__4509__auto__ = (((spec == null))?null:spec);
var m__4510__auto__ = (cljs.spec.alpha.with_gen_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(spec,gfn) : m__4510__auto__.call(null,spec,gfn));
} else {
var m__4508__auto__ = (cljs.spec.alpha.with_gen_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(spec,gfn) : m__4508__auto__.call(null,spec,gfn));
} else {
throw cljs.core.missing_protocol("Spec.with-gen*",spec);
}
}
});
cljs.spec.alpha.with_gen_STAR_ = (function cljs$spec$alpha$with_gen_STAR_(spec,gfn){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 == null)))))){
return spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
return cljs$spec$alpha$Spec$with_gen_STAR_$dyn_15545(spec,gfn);
}
});

var cljs$spec$alpha$Spec$describe_STAR_$dyn_15546 = (function (spec){
var x__4509__auto__ = (((spec == null))?null:spec);
var m__4510__auto__ = (cljs.spec.alpha.describe_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(spec) : m__4510__auto__.call(null,spec));
} else {
var m__4508__auto__ = (cljs.spec.alpha.describe_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(spec) : m__4508__auto__.call(null,spec));
} else {
throw cljs.core.missing_protocol("Spec.describe*",spec);
}
}
});
cljs.spec.alpha.describe_STAR_ = (function cljs$spec$alpha$describe_STAR_(spec){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1 == null)))))){
return spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1(spec);
} else {
return cljs$spec$alpha$Spec$describe_STAR_$dyn_15546(spec);
}
});

if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.registry_ref !== 'undefined')){
} else {
cljs.spec.alpha.registry_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.alpha.deep_resolve = (function cljs$spec$alpha$deep_resolve(reg,k){
var spec = k;
while(true){
if(cljs.core.ident_QMARK_(spec)){
var G__15547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,spec);
spec = G__15547;
continue;
} else {
return spec;
}
break;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve = (function cljs$spec$alpha$reg_resolve(k){
if(cljs.core.ident_QMARK_(k)){
var reg = cljs.core.deref(cljs.spec.alpha.registry_ref);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,k);
if((!(cljs.core.ident_QMARK_(spec)))){
return spec;
} else {
return cljs.spec.alpha.deep_resolve(reg,spec);
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve_BANG_ = (function cljs$spec$alpha$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_(k)){
var or__4212__auto__ = cljs.spec.alpha.reg_resolve(k);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.alpha.spec_QMARK_ = (function cljs$spec$alpha$spec_QMARK_(x){
if((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$spec$alpha$Spec$))))?true:false):false)){
return x;
} else {
return null;
}
});
/**
 * returns x if x is a (cljs.spec.alpha) regex op, else logical false
 */
cljs.spec.alpha.regex_QMARK_ = (function cljs$spec$alpha$regex_QMARK_(x){
var and__4210__auto__ = cljs.core.cst$kw$cljs$spec$alpha_SLASH_op.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__4210__auto__)){
return x;
} else {
return and__4210__auto__;
}
});
cljs.spec.alpha.with_name = (function cljs$spec$alpha$with_name(spec,name){
if(cljs.core.ident_QMARK_(spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(spec))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_name,name);
} else {
if((((!((spec == null))))?(((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$))))?true:false):false)){
return cljs.core.with_meta(spec,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(spec),cljs.core.cst$kw$cljs$spec$alpha_SLASH_name,name));
} else {
return null;
}
}
}
});
cljs.spec.alpha.spec_name = (function cljs$spec$alpha$spec_name(spec){
if(cljs.core.ident_QMARK_(spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(spec))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_name.cljs$core$IFn$_invoke$arity$1(spec);
} else {
if((((!((spec == null))))?(((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$))))?true:false):false)){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(spec));
} else {
return null;
}
}
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.alpha.maybe_spec = (function cljs$spec$alpha$maybe_spec(spec_or_k){
var s = (function (){var or__4212__auto__ = (function (){var and__4210__auto__ = cljs.core.ident_QMARK_(spec_or_k);
if(and__4210__auto__){
return cljs.spec.alpha.reg_resolve(spec_or_k);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = cljs.spec.alpha.spec_QMARK_(spec_or_k);
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
var or__4212__auto____$2 = cljs.spec.alpha.regex_QMARK_(spec_or_k);
if(cljs.core.truth_(or__4212__auto____$2)){
return or__4212__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(s))){
return cljs.spec.alpha.with_name(cljs.spec.alpha.regex_spec_impl(s,null),cljs.spec.alpha.spec_name(s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.alpha.the_spec = (function cljs$spec$alpha$the_spec(spec_or_k){
var or__4212__auto__ = cljs.spec.alpha.maybe_spec(spec_or_k);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.ident_QMARK_(spec_or_k)){
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_or_k)].join('')));
} else {
return null;
}
}
});
cljs.spec.alpha.fn_sym = (function cljs$spec$alpha$fn_sym(f_n){
if(clojure.string.blank_QMARK_(f_n)){
return null;
} else {
var xs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.demunge,clojure.string.split.cljs$core$IFn$_invoke$arity$2(f_n,"$"));
if(((((2) <= cljs.core.count(xs))) && (cljs.core.every_QMARK_((function (p1__15551_SHARP_){
return (!(clojure.string.blank_QMARK_(p1__15551_SHARP_)));
}),xs)))){
var vec__15552 = (function (){var fexpr__15555 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast,cljs.core.last);
return (fexpr__15555.cljs$core$IFn$_invoke$arity$1 ? fexpr__15555.cljs$core$IFn$_invoke$arity$1(xs) : fexpr__15555.call(null,xs));
})();
var xs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15552,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15552,(1),null);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",xs__$1),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join(''));
} else {
return null;
}
}
});

/**
 * @interface
 */
cljs.spec.alpha.Specize = function(){};

var cljs$spec$alpha$Specize$specize_STAR_$dyn_15558 = (function() {
var G__15559 = null;
var G__15559__1 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.spec.alpha.specize_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Specize.specize*",_);
}
}
});
var G__15559__2 = (function (_,form){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(_,form) : m__4510__auto__.call(null,_,form));
} else {
var m__4508__auto__ = (cljs.spec.alpha.specize_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(_,form) : m__4508__auto__.call(null,_,form));
} else {
throw cljs.core.missing_protocol("Specize.specize*",_);
}
}
});
G__15559 = function(_,form){
switch(arguments.length){
case 1:
return G__15559__1.call(this,_);
case 2:
return G__15559__2.call(this,_,form);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15559.cljs$core$IFn$_invoke$arity$1 = G__15559__1;
G__15559.cljs$core$IFn$_invoke$arity$2 = G__15559__2;
return G__15559;
})()
;
cljs.spec.alpha.specize_STAR_ = (function cljs$spec$alpha$specize_STAR_(var_args){
var G__15557 = arguments.length;
switch (G__15557) {
case 1:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$1 == null)))))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$1(_);
} else {
return cljs$spec$alpha$Specize$specize_STAR_$dyn_15558.cljs$core$IFn$_invoke$arity$1(_);
}
}));

(cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_,form){
if((((!((_ == null)))) && ((!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$2 == null)))))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$2(_,form);
} else {
return cljs$spec$alpha$Specize$specize_STAR_$dyn_15558.cljs$core$IFn$_invoke$arity$2(_,form);
}
}));

(cljs.spec.alpha.specize_STAR_.cljs$lang$maxFixedArity = 2);


(cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (k){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(k__$1));
}));

(cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (k,_){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(k__$1));
}));

(cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(s__$1));
}));

(cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(s__$1));
}));

(cljs.core.PersistentHashSet.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(s__$1,s__$1,null,null);
}));

(cljs.core.PersistentHashSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,form){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(form,s__$1,null,null);
}));

(cljs.core.PersistentTreeSet.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(s__$1,s__$1,null,null);
}));

(cljs.core.PersistentTreeSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,form){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(form,s__$1,null,null);
}));

goog.object.set(cljs.spec.alpha.Specize,"_",true);

goog.object.set(cljs.spec.alpha.specize_STAR_,"_",(function() {
var G__15561 = null;
var G__15561__1 = (function (o){
var temp__5751__auto__ = (function (){var and__4210__auto__ = cljs.core.fn_QMARK_(o);
if(and__4210__auto__){
return cljs.spec.alpha.fn_sym(o.name);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var f_n = temp__5751__auto__;
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(f_n,o,null,null);
} else {
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$cljs$spec$alpha_SLASH_unknown,o,null,null);
}
});
var G__15561__2 = (function (o,form){
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(form,o,null,null);
});
G__15561 = function(o,form){
switch(arguments.length){
case 1:
return G__15561__1.call(this,o);
case 2:
return G__15561__2.call(this,o,form);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15561.cljs$core$IFn$_invoke$arity$1 = G__15561__1;
G__15561.cljs$core$IFn$_invoke$arity$2 = G__15561__2;
return G__15561;
})()
);
cljs.spec.alpha.specize = (function cljs$spec$alpha$specize(var_args){
var G__15563 = arguments.length;
switch (G__15563) {
case 1:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1 = (function (s){
var or__4212__auto__ = cljs.spec.alpha.spec_QMARK_(s);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(s);
}
}));

(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2 = (function (s,form){
var or__4212__auto__ = cljs.spec.alpha.spec_QMARK_(s);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2(s,form);
}
}));

(cljs.spec.alpha.specize.cljs$lang$maxFixedArity = 2);

/**
 * tests the validity of a conform return value
 */
cljs.spec.alpha.invalid_QMARK_ = (function cljs$spec$alpha$invalid_QMARK_(ret){
return cljs.core.keyword_identical_QMARK_(cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid,ret);
});
/**
 * Given a spec and a value, returns :cljs.spec.alpha/invalid if value does
 *   not match spec, else the (possibly destructured) value.
 */
cljs.spec.alpha.conform = (function cljs$spec$alpha$conform(spec,x){
return cljs.spec.alpha.conform_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.alpha.unform = (function cljs$spec$alpha$unform(spec,x){
return cljs.spec.alpha.unform_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.alpha.form = (function cljs$spec$alpha$form(spec){
return cljs.spec.alpha.describe_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec));
});
cljs.spec.alpha.abbrev = (function cljs$spec$alpha$abbrev(form){
if(cljs.core.seq_QMARK_(form)){
return clojure.walk.postwalk((function (form__$1){
if(cljs.core.truth_((function (){var and__4210__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__4210__auto__){
return cljs.core.namespace(form__$1);
} else {
return and__4210__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(form__$1));
} else {
if(((cljs.core.seq_QMARK_(form__$1)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$fn,cljs.core.first(form__$1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.second(form__$1))))))){
return cljs.core.last(form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__4210__auto__ = (form instanceof cljs.core.Symbol);
if(and__4210__auto__){
return cljs.core.namespace(form);
} else {
return and__4210__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.alpha.describe = (function cljs$spec$alpha$describe(spec){
return cljs.spec.alpha.abbrev(cljs.spec.alpha.form(spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.alpha.with_gen = (function cljs$spec$alpha$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.alpha.reg_resolve(spec);
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(spec__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_gfn,gen_fn);
} else {
return cljs.spec.alpha.with_gen_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec__$1),gen_fn);
}
});
cljs.spec.alpha.explain_data_STAR_ = (function cljs$spec$alpha$explain_data_STAR_(spec,path,via,in$,x){
var temp__5753__auto__ = cljs.spec.alpha.explain_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec),path,via,in$,x);
if(cljs.core.truth_(temp__5753__auto__)){
var probs = temp__5753__auto__;
if(cljs.core.empty_QMARK_(probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,probs,cljs.core.cst$kw$cljs$spec$alpha_SLASH_spec,spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_value,x], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.alpha.explain_data = (function cljs$spec$alpha$explain_data(spec,x){
return cljs.spec.alpha.explain_data_STAR_(spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__5751__auto__ = cljs.spec.alpha.spec_name(spec);
if(cljs.core.truth_(temp__5751__auto__)){
var name = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * Default printer for explain-data. nil indicates a successful validation.
 */
cljs.spec.alpha.explain_printer = (function cljs$spec$alpha$explain_printer(ed){
if(cljs.core.truth_(ed)){
var problems = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__15566_SHARP_){
return (- cljs.core.count(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(p1__15566_SHARP_)));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__15565_SHARP_){
return (- cljs.core.count(cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(p1__15565_SHARP_)));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems.cljs$core$IFn$_invoke$arity$1(ed)));
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15567_15659 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15568_15660 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15569_15661 = true;
var _STAR_print_fn_STAR__temp_val__15570_15662 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15569_15661);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15570_15662);

try{var seq__15571_15663 = cljs.core.seq(problems);
var chunk__15572_15664 = null;
var count__15573_15665 = (0);
var i__15574_15666 = (0);
while(true){
if((i__15574_15666 < count__15573_15665)){
var map__15617_15667 = chunk__15572_15664.cljs$core$IIndexed$_nth$arity$2(null,i__15574_15666);
var map__15617_15668__$1 = cljs.core.__destructure_map(map__15617_15667);
var prob_15669 = map__15617_15668__$1;
var path_15670 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15617_15668__$1,cljs.core.cst$kw$path);
var pred_15671 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15617_15668__$1,cljs.core.cst$kw$pred);
var val_15672 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15617_15668__$1,cljs.core.cst$kw$val);
var reason_15673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15617_15668__$1,cljs.core.cst$kw$reason);
var via_15674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15617_15668__$1,cljs.core.cst$kw$via);
var in_15675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15617_15668__$1,cljs.core.cst$kw$in);
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val_15672], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" - failed: "], 0));

if(cljs.core.truth_(reason_15673)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reason_15673], 0));
} else {
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.abbrev(pred_15671)], 0));
}

if(cljs.core.empty_QMARK_(in_15675)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[" in: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([in_15675], 0))].join('')], 0));
}

if(cljs.core.empty_QMARK_(path_15670)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[" at: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_15670], 0))].join('')], 0));
}

if(cljs.core.empty_QMARK_(via_15674)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[" spec: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(via_15674)], 0))].join('')], 0));
}

var seq__15618_15676 = cljs.core.seq(prob_15669);
var chunk__15619_15677 = null;
var count__15620_15678 = (0);
var i__15621_15679 = (0);
while(true){
if((i__15621_15679 < count__15620_15678)){
var vec__15630_15680 = chunk__15619_15677.cljs$core$IIndexed$_nth$arity$2(null,i__15621_15679);
var k_15681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15630_15680,(0),null);
var v_15682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15630_15680,(1),null);
if(cljs.core.truth_((function (){var fexpr__15633 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null);
return (fexpr__15633.cljs$core$IFn$_invoke$arity$1 ? fexpr__15633.cljs$core$IFn$_invoke$arity$1(k_15681) : fexpr__15633.call(null,k_15681));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15681], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_15682], 0));
}


var G__15683 = seq__15618_15676;
var G__15684 = chunk__15619_15677;
var G__15685 = count__15620_15678;
var G__15686 = (i__15621_15679 + (1));
seq__15618_15676 = G__15683;
chunk__15619_15677 = G__15684;
count__15620_15678 = G__15685;
i__15621_15679 = G__15686;
continue;
} else {
var temp__5753__auto___15687 = cljs.core.seq(seq__15618_15676);
if(temp__5753__auto___15687){
var seq__15618_15688__$1 = temp__5753__auto___15687;
if(cljs.core.chunked_seq_QMARK_(seq__15618_15688__$1)){
var c__4638__auto___15689 = cljs.core.chunk_first(seq__15618_15688__$1);
var G__15690 = cljs.core.chunk_rest(seq__15618_15688__$1);
var G__15691 = c__4638__auto___15689;
var G__15692 = cljs.core.count(c__4638__auto___15689);
var G__15693 = (0);
seq__15618_15676 = G__15690;
chunk__15619_15677 = G__15691;
count__15620_15678 = G__15692;
i__15621_15679 = G__15693;
continue;
} else {
var vec__15634_15694 = cljs.core.first(seq__15618_15688__$1);
var k_15695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15634_15694,(0),null);
var v_15696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15634_15694,(1),null);
if(cljs.core.truth_((function (){var fexpr__15637 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null);
return (fexpr__15637.cljs$core$IFn$_invoke$arity$1 ? fexpr__15637.cljs$core$IFn$_invoke$arity$1(k_15695) : fexpr__15637.call(null,k_15695));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15695], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_15696], 0));
}


var G__15697 = cljs.core.next(seq__15618_15688__$1);
var G__15698 = null;
var G__15699 = (0);
var G__15700 = (0);
seq__15618_15676 = G__15697;
chunk__15619_15677 = G__15698;
count__15620_15678 = G__15699;
i__15621_15679 = G__15700;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();


var G__15701 = seq__15571_15663;
var G__15702 = chunk__15572_15664;
var G__15703 = count__15573_15665;
var G__15704 = (i__15574_15666 + (1));
seq__15571_15663 = G__15701;
chunk__15572_15664 = G__15702;
count__15573_15665 = G__15703;
i__15574_15666 = G__15704;
continue;
} else {
var temp__5753__auto___15705 = cljs.core.seq(seq__15571_15663);
if(temp__5753__auto___15705){
var seq__15571_15706__$1 = temp__5753__auto___15705;
if(cljs.core.chunked_seq_QMARK_(seq__15571_15706__$1)){
var c__4638__auto___15707 = cljs.core.chunk_first(seq__15571_15706__$1);
var G__15708 = cljs.core.chunk_rest(seq__15571_15706__$1);
var G__15709 = c__4638__auto___15707;
var G__15710 = cljs.core.count(c__4638__auto___15707);
var G__15711 = (0);
seq__15571_15663 = G__15708;
chunk__15572_15664 = G__15709;
count__15573_15665 = G__15710;
i__15574_15666 = G__15711;
continue;
} else {
var map__15638_15712 = cljs.core.first(seq__15571_15706__$1);
var map__15638_15713__$1 = cljs.core.__destructure_map(map__15638_15712);
var prob_15714 = map__15638_15713__$1;
var path_15715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15638_15713__$1,cljs.core.cst$kw$path);
var pred_15716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15638_15713__$1,cljs.core.cst$kw$pred);
var val_15717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15638_15713__$1,cljs.core.cst$kw$val);
var reason_15718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15638_15713__$1,cljs.core.cst$kw$reason);
var via_15719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15638_15713__$1,cljs.core.cst$kw$via);
var in_15720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15638_15713__$1,cljs.core.cst$kw$in);
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val_15717], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" - failed: "], 0));

if(cljs.core.truth_(reason_15718)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reason_15718], 0));
} else {
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.abbrev(pred_15716)], 0));
}

if(cljs.core.empty_QMARK_(in_15720)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[" in: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([in_15720], 0))].join('')], 0));
}

if(cljs.core.empty_QMARK_(path_15715)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[" at: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_15715], 0))].join('')], 0));
}

if(cljs.core.empty_QMARK_(via_15719)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[" spec: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(via_15719)], 0))].join('')], 0));
}

var seq__15639_15721 = cljs.core.seq(prob_15714);
var chunk__15640_15722 = null;
var count__15641_15723 = (0);
var i__15642_15724 = (0);
while(true){
if((i__15642_15724 < count__15641_15723)){
var vec__15651_15725 = chunk__15640_15722.cljs$core$IIndexed$_nth$arity$2(null,i__15642_15724);
var k_15726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15651_15725,(0),null);
var v_15727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15651_15725,(1),null);
if(cljs.core.truth_((function (){var fexpr__15654 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null);
return (fexpr__15654.cljs$core$IFn$_invoke$arity$1 ? fexpr__15654.cljs$core$IFn$_invoke$arity$1(k_15726) : fexpr__15654.call(null,k_15726));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15726], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_15727], 0));
}


var G__15728 = seq__15639_15721;
var G__15729 = chunk__15640_15722;
var G__15730 = count__15641_15723;
var G__15731 = (i__15642_15724 + (1));
seq__15639_15721 = G__15728;
chunk__15640_15722 = G__15729;
count__15641_15723 = G__15730;
i__15642_15724 = G__15731;
continue;
} else {
var temp__5753__auto___15732__$1 = cljs.core.seq(seq__15639_15721);
if(temp__5753__auto___15732__$1){
var seq__15639_15733__$1 = temp__5753__auto___15732__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15639_15733__$1)){
var c__4638__auto___15734 = cljs.core.chunk_first(seq__15639_15733__$1);
var G__15735 = cljs.core.chunk_rest(seq__15639_15733__$1);
var G__15736 = c__4638__auto___15734;
var G__15737 = cljs.core.count(c__4638__auto___15734);
var G__15738 = (0);
seq__15639_15721 = G__15735;
chunk__15640_15722 = G__15736;
count__15641_15723 = G__15737;
i__15642_15724 = G__15738;
continue;
} else {
var vec__15655_15739 = cljs.core.first(seq__15639_15733__$1);
var k_15740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15655_15739,(0),null);
var v_15741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15655_15739,(1),null);
if(cljs.core.truth_((function (){var fexpr__15658 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null);
return (fexpr__15658.cljs$core$IFn$_invoke$arity$1 ? fexpr__15658.cljs$core$IFn$_invoke$arity$1(k_15740) : fexpr__15658.call(null,k_15740));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15740], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_15741], 0));
}


var G__15742 = cljs.core.next(seq__15639_15733__$1);
var G__15743 = null;
var G__15744 = (0);
var G__15745 = (0);
seq__15639_15721 = G__15742;
chunk__15640_15722 = G__15743;
count__15641_15723 = G__15744;
i__15642_15724 = G__15745;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();


var G__15746 = cljs.core.next(seq__15571_15706__$1);
var G__15747 = null;
var G__15748 = (0);
var G__15749 = (0);
seq__15571_15663 = G__15746;
chunk__15572_15664 = G__15747;
count__15573_15665 = G__15748;
i__15574_15666 = G__15749;
continue;
}
} else {
}
}
break;
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15568_15660);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15567_15659);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})()], 0));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Success!"], 0));
}
});
cljs.spec.alpha._STAR_explain_out_STAR_ = cljs.spec.alpha.explain_printer;
/**
 * Prints explanation data (per 'explain-data') to *out* using the printer in *explain-out*,
 *  by default explain-printer.
 */
cljs.spec.alpha.explain_out = (function cljs$spec$alpha$explain_out(ed){
return (cljs.spec.alpha._STAR_explain_out_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha._STAR_explain_out_STAR_.cljs$core$IFn$_invoke$arity$1(ed) : cljs.spec.alpha._STAR_explain_out_STAR_.call(null,ed));
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.alpha.explain = (function cljs$spec$alpha$explain(spec,x){
return cljs.spec.alpha.explain_out(cljs.spec.alpha.explain_data(spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.alpha.explain_str = (function cljs$spec$alpha$explain_str(spec,x){
var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15750_15754 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15751_15755 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15752_15756 = true;
var _STAR_print_fn_STAR__temp_val__15753_15757 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15752_15756);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15753_15757);

try{cljs.spec.alpha.explain(spec,x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15751_15755);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15750_15754);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
});
cljs.spec.alpha.gensub = (function cljs$spec$alpha$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec);
var temp__5751__auto__ = (function (){var or__4212__auto__ = (function (){var temp__5753__auto__ = (function (){var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,(function (){var or__4212__auto__ = cljs.spec.alpha.spec_name(spec__$1);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var gfn = temp__5753__auto__;
return (gfn.cljs$core$IFn$_invoke$arity$0 ? gfn.cljs$core$IFn$_invoke$arity$0() : gfn.call(null));
} else {
return null;
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.spec.alpha.gen_STAR_(spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var g = temp__5751__auto__;
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__15758_SHARP_){
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,p1__15758_SHARP_);
}),g,(100)], 0));
} else {
throw (new Error(["Unable to construct gen at: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.abbrev(form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.alpha.gen = (function cljs$spec$alpha$gen(var_args){
var G__15760 = arguments.length;
switch (G__15760) {
case 1:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(spec,null);
}));

(cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.alpha.gensub(spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_recursion_DASH_limit,cljs.spec.alpha._STAR_recursion_limit_STAR_], null),spec);
}));

(cljs.spec.alpha.gen.cljs$lang$maxFixedArity = 2);

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.alpha.def_impl = (function cljs$spec$alpha$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.ident_QMARK_(k);
if(and__4210__auto__){
return cljs.core.namespace(k);
} else {
return and__4210__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","k must be namespaced keyword or resolveable symbol","\n","(c/and (ident? k) (namespace k))"].join('')));
}

if((spec == null)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.registry_ref,cljs.core.dissoc,k);
} else {
var spec_15762__$1 = (cljs.core.truth_((function (){var or__4212__auto__ = cljs.spec.alpha.spec_QMARK_(spec);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = cljs.spec.alpha.regex_QMARK_(spec);
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.alpha.registry_ref),spec);
}
}
})())?spec:cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(form,spec,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.spec.alpha.registry_ref,cljs.core.assoc,k,cljs.spec.alpha.with_name(spec_15762__$1,k));
}

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.alpha.registry = (function cljs$spec$alpha$registry(){
return cljs.core.deref(cljs.spec.alpha.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.alpha.__GT_sym = (function cljs$spec$alpha$__GT_sym(x){
if(cljs.core.var_QMARK_(x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.alpha.get_spec = (function cljs$spec$alpha$get_spec(k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.registry(),(((k instanceof cljs.core.Keyword))?k:cljs.spec.alpha.__GT_sym(k)));
});
cljs.spec.alpha.macroexpand_check = (function cljs$spec$alpha$macroexpand_check(v,args){
var specs = cljs.spec.alpha.get_spec(v);
var temp__5753__auto__ = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__5753__auto__)){
var arg_spec = temp__5753__auto__;
if(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.conform(arg_spec,args))){
var ed = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.explain_data_STAR_(arg_spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__5751__auto__ = cljs.spec.alpha.spec_name(arg_spec);
if(cljs.core.truth_(temp__5751__auto__)){
var name = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),cljs.core.cst$kw$cljs$spec$alpha_SLASH_args,args);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Call to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.__GT_sym(v))," did not conform to spec."].join(''),ed);
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.alpha.recur_limit_QMARK_ = (function cljs$spec$alpha$recur_limit_QMARK_(rmap,id,path,k){
return (((cljs.core.get.cljs$core$IFn$_invoke$arity$2(rmap,id) > cljs.core.cst$kw$cljs$spec$alpha_SLASH_recursion_DASH_limit.cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_(cljs.core.set(path),k)));
});
cljs.spec.alpha.inck = (function cljs$spec$alpha$inck(m,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,((function (){var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.alpha.dt = (function cljs$spec$alpha$dt(var_args){
var G__15764 = arguments.length;
switch (G__15764) {
case 3:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4(pred,x,form,null);
}));

(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__5751__auto__ = cljs.spec.alpha.the_spec(pred);
if(cljs.core.truth_(temp__5751__auto__)){
var spec = temp__5751__auto__;
return cljs.spec.alpha.conform(spec,x);
} else {
if(cljs.core.ifn_QMARK_(pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
} else {
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return x;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
}
} else {
throw (new Error([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0))," is not a fn, expected predicate fn"].join('')));
}
}
} else {
return x;
}
}));

(cljs.spec.alpha.dt.cljs$lang$maxFixedArity = 4);

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.valid_QMARK_ = (function cljs$spec$alpha$valid_QMARK_(var_args){
var G__15767 = arguments.length;
switch (G__15767) {
case 2:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec);
return (!(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.conform_STAR_(spec__$1,x))));
}));

(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2(spec,form);
return (!(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.conform_STAR_(spec__$1,x))));
}));

(cljs.spec.alpha.valid_QMARK_.cljs$lang$maxFixedArity = 3);

/**
 * internal helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.pvalid_QMARK_ = (function cljs$spec$alpha$pvalid_QMARK_(var_args){
var G__15770 = arguments.length;
switch (G__15770) {
case 2:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return (!(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred,x,cljs.core.cst$kw$cljs$spec$alpha_SLASH_unknown))));
}));

(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return (!(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred,x,form))));
}));

(cljs.spec.alpha.pvalid_QMARK_.cljs$lang$maxFixedArity = 3);

cljs.spec.alpha.explain_1 = (function cljs$spec$alpha$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.alpha.maybe_spec(pred);
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_(pred__$1))){
return cljs.spec.alpha.explain_STAR_(pred__$1,path,(function (){var temp__5751__auto__ = cljs.spec.alpha.spec_name(pred__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var name = temp__5751__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,form,cljs.core.cst$kw$val,v,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});

/**
 * returns a generator for form f, which can be a keyword or a list
 *   starting with 'or or 'and.
 */
cljs.spec.alpha.k_gen = (function cljs$spec$alpha$k_gen(f){
if((f instanceof cljs.core.Keyword)){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$or,cljs.core.first(f))){
return cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$2((1),cljs.core.rest(f));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$and,cljs.core.first(f))){
return cljs.spec.alpha.and_k_gen(cljs.core.rest(f));
} else {
return null;
}
}
}
});
/**
 * returns a tuple generator made up of generators for a random subset
 *   of min-count (default 0) to all elements in s.
 */
cljs.spec.alpha.or_k_gen = (function cljs$spec$alpha$or_k_gen(var_args){
var G__15773 = arguments.length;
switch (G__15773) {
case 1:
return cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$2((0),s);
}));

(cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$2 = (function (min_count,s){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([min_count,cljs.core.count(s)], 0)),cljs.spec.gen.alpha.shuffle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.k_gen,s)], 0))], 0)),(function (p__15774){
var vec__15775 = p__15774;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15775,(0),null);
var gens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15775,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,gens));
})], 0));
}));

(cljs.spec.alpha.or_k_gen.cljs$lang$maxFixedArity = 2);

/**
 * returns a tuple generator made up of generators for every element
 *   in s.
 */
cljs.spec.alpha.and_k_gen = (function cljs$spec$alpha$and_k_gen(s){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.k_gen,s));
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.alpha.map_spec_impl = (function cljs$spec$alpha$map_spec_impl(p__15782){
var map__15783 = p__15782;
var map__15783__$1 = cljs.core.__destructure_map(map__15783);
var argm = map__15783__$1;
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15783__$1,cljs.core.cst$kw$opt);
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15783__$1,cljs.core.cst$kw$req_DASH_un);
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15783__$1,cljs.core.cst$kw$opt_DASH_un);
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15783__$1,cljs.core.cst$kw$gfn);
var pred_exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15783__$1,cljs.core.cst$kw$pred_DASH_exprs);
var keys_pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15783__$1,cljs.core.cst$kw$keys_DASH_pred);
var opt_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15783__$1,cljs.core.cst$kw$opt_DASH_keys);
var req_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15783__$1,cljs.core.cst$kw$req_DASH_specs);
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15783__$1,cljs.core.cst$kw$req);
var req_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15783__$1,cljs.core.cst$kw$req_DASH_keys);
var opt_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15783__$1,cljs.core.cst$kw$opt_DASH_specs);
var pred_forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15783__$1,cljs.core.cst$kw$pred_DASH_forms);
var k__GT_s = cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_keys,opt_keys),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_specs,opt_specs));
var keys__GT_specnames = (function (p1__15779_SHARP_){
var or__4212__auto__ = (k__GT_s.cljs$core$IFn$_invoke$arity$1 ? k__GT_s.cljs$core$IFn$_invoke$arity$1(p1__15779_SHARP_) : k__GT_s.call(null,p1__15779_SHARP_));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return p1__15779_SHARP_;
}
});
var id = cljs.core.random_uuid();
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha15784 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha15784 = (function (keys__GT_specnames,p__15782,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,map__15783,req,id,req_keys,opt_specs,k__GT_s,pred_forms,meta15785){
this.keys__GT_specnames = keys__GT_specnames;
this.p__15782 = p__15782;
this.opt = opt;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.req_specs = req_specs;
this.map__15783 = map__15783;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta15785 = meta15785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha15784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15786,meta15785__$1){
var self__ = this;
var _15786__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15784(self__.keys__GT_specnames,self__.p__15782,self__.opt,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.req_specs,self__.map__15783,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta15785__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha15784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15786){
var self__ = this;
var _15786__$1 = this;
return self__.meta15785;
}));

(cljs.spec.alpha.t_cljs$spec$alpha15784.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha15784.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha15784.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha15784.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha15784.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.keys_pred.cljs$core$IFn$_invoke$arity$1 ? self__.keys_pred.cljs$core$IFn$_invoke$arity$1(m) : self__.keys_pred.call(null,m)))){
var reg = cljs.spec.alpha.registry();
var ret = m;
var G__15793 = m;
var vec__15794 = G__15793;
var seq__15795 = cljs.core.seq(vec__15794);
var first__15796 = cljs.core.first(seq__15795);
var seq__15795__$1 = cljs.core.next(seq__15795);
var vec__15797 = first__15796;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15797,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15797,(1),null);
var ks = seq__15795__$1;
var keys = vec__15794;
var ret__$1 = ret;
var G__15793__$1 = G__15793;
while(true){
var ret__$2 = ret__$1;
var vec__15800 = G__15793__$1;
var seq__15801 = cljs.core.seq(vec__15800);
var first__15802 = cljs.core.first(seq__15801);
var seq__15801__$1 = cljs.core.next(seq__15801);
var vec__15803 = first__15802;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15803,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15803,(1),null);
var ks__$1 = seq__15801__$1;
var keys__$1 = vec__15800;
if(cljs.core.truth_(keys__$1)){
var sname = (self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1));
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,sname);
if(cljs.core.truth_(temp__5751__auto__)){
var s = temp__5751__auto__;
var cv = cljs.spec.alpha.conform(s,v__$1);
if(cljs.spec.alpha.invalid_QMARK_(cv)){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var G__15831 = (((cv === v__$1))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,cv));
var G__15832 = ks__$1;
ret__$1 = G__15831;
G__15793__$1 = G__15832;
continue;
}
} else {
var G__15833 = ret__$2;
var G__15834 = ks__$1;
ret__$1 = G__15833;
G__15793__$1 = G__15834;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha15784.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.alpha.registry();
var ret = m;
var G__15809 = cljs.core.keys(m);
var vec__15810 = G__15809;
var seq__15811 = cljs.core.seq(vec__15810);
var first__15812 = cljs.core.first(seq__15811);
var seq__15811__$1 = cljs.core.next(seq__15811);
var k = first__15812;
var ks = seq__15811__$1;
var keys = vec__15810;
var ret__$1 = ret;
var G__15809__$1 = G__15809;
while(true){
var ret__$2 = ret__$1;
var vec__15816 = G__15809__$1;
var seq__15817 = cljs.core.seq(vec__15816);
var first__15818 = cljs.core.first(seq__15817);
var seq__15817__$1 = cljs.core.next(seq__15817);
var k__$1 = first__15818;
var ks__$1 = seq__15817__$1;
var keys__$1 = vec__15816;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1)))){
var cv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k__$1);
var v = cljs.spec.alpha.unform((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1)),cv);
var G__15835 = (((cv === v))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,v));
var G__15836 = ks__$1;
ret__$1 = G__15835;
G__15809__$1 = G__15836;
continue;
} else {
var G__15837 = ret__$2;
var G__15838 = ks__$1;
ret__$1 = G__15837;
G__15809__$1 = G__15838;
continue;
}
} else {
return ret__$2;
}
break;
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha15784.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if((!(cljs.core.map_QMARK_(x)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
var reg = cljs.spec.alpha.registry();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,(function (){var temp__5753__auto__ = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (pred,form){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return null;
} else {
return form;
}
}),self__.pred_exprs,self__.pred_forms)));
if(temp__5753__auto__){
var probs = temp__5753__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15780_SHARP_){
return cljs.core.identity(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,p1__15780_SHARP_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null));
}),probs);
} else {
return null;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15819){
var vec__15820 = p__15819;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15820,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15820,(1),null);
if((((!(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)))))) || (cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),v,k)))){
return null;
} else {
return cljs.spec.alpha.explain_1((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,k),v);
}
}),cljs.core.seq(x)));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha15784.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var rmap__$1 = cljs.spec.alpha.inck(rmap,self__.id);
var rgen = (function (k,s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.alpha.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k)], null);
});
var ogen = (function (k,s){
if(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,self__.id,path,k)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay((function (){
return cljs.spec.alpha.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
}),null)))], null);
}
});
var reqs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(rgen,self__.req_keys,self__.req_specs);
var opts = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,reqs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,opts)))){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.and_k_gen(self__.req),cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$1(self__.opt),cljs.spec.alpha.and_k_gen(self__.req_un),cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$1(self__.opt_un)], 0)),(function (p__15823){
var vec__15824 = p__15823;
var req_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15824,(0),null);
var opt_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15824,(1),null);
var req_un_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15824,(2),null);
var opt_un_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15824,(3),null);
var qks = cljs.core.flatten(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_ks,opt_ks));
var unqks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.name),cljs.core.flatten(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_un_ks,opt_un_ks)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.hash_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15781_SHARP_){
var G__15828 = cljs.core.first(p1__15781_SHARP_);
var fexpr__15827 = cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(qks,unqks));
return (fexpr__15827.cljs$core$IFn$_invoke$arity$1 ? fexpr__15827.cljs$core$IFn$_invoke$arity$1(G__15828) : fexpr__15827.call(null,G__15828));
}),cljs.core.into.cljs$core$IFn$_invoke$arity$2(reqs,opts))));
})], 0));
} else {
return null;
}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha15784.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
var G__15829 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.argm,cljs.core.cst$kw$gfn,gfn__$1);
return (cljs.spec.alpha.map_spec_impl.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.map_spec_impl.cljs$core$IFn$_invoke$arity$1(G__15829) : cljs.spec.alpha.map_spec_impl.call(null,G__15829));
}));

(cljs.spec.alpha.t_cljs$spec$alpha15784.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,(function (){var G__15830 = cljs.core.PersistentVector.EMPTY;
var G__15830__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__15830,cljs.core.cst$kw$req,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.req], 0)):G__15830);
var G__15830__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__15830__$1,cljs.core.cst$kw$opt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opt], 0)):G__15830__$1);
var G__15830__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__15830__$2,cljs.core.cst$kw$req_DASH_un,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.req_un], 0)):G__15830__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__15830__$3,cljs.core.cst$kw$opt_DASH_un,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opt_un], 0));
} else {
return G__15830__$3;
}
})());
}));

(cljs.spec.alpha.t_cljs$spec$alpha15784.getBasis = (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$keys_DASH__GT_specnames,cljs.core.cst$sym$p__15782,cljs.core.cst$sym$opt,cljs.core.cst$sym$req_DASH_un,cljs.core.cst$sym$opt_DASH_un,cljs.core.cst$sym$gfn,cljs.core.cst$sym$pred_DASH_exprs,cljs.core.cst$sym$keys_DASH_pred,cljs.core.cst$sym$argm,cljs.core.cst$sym$opt_DASH_keys,cljs.core.cst$sym$req_DASH_specs,cljs.core.cst$sym$map__15783,cljs.core.cst$sym$req,cljs.core.cst$sym$id,cljs.core.cst$sym$req_DASH_keys,cljs.core.cst$sym$opt_DASH_specs,cljs.core.cst$sym$k_DASH__GT_s,cljs.core.cst$sym$pred_DASH_forms,cljs.core.cst$sym$meta15785], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha15784.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha15784.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15784");

(cljs.spec.alpha.t_cljs$spec$alpha15784.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15784");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha15784.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha15784 = (function cljs$spec$alpha$map_spec_impl_$___GT_t_cljs$spec$alpha15784(keys__GT_specnames__$1,p__15782__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,map__15783__$2,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta15785){
return (new cljs.spec.alpha.t_cljs$spec$alpha15784(keys__GT_specnames__$1,p__15782__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,map__15783__$2,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta15785));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha15784(keys__GT_specnames,p__15782,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,map__15783__$1,req,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.alpha.spec_impl = (function cljs$spec$alpha$spec_impl(var_args){
var G__15840 = arguments.length;
switch (G__15840) {
case 4:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(form,pred,gfn,cpred_QMARK_,null);
}));

(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_(pred))){
var G__15841 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen(G__15841,gfn);
} else {
return G__15841;
}
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(pred))){
return cljs.spec.alpha.regex_spec_impl(pred,gfn);
} else {
if(cljs.core.ident_QMARK_(pred)){
var G__15842 = cljs.spec.alpha.the_spec(pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen(G__15842,gfn);
} else {
return G__15842;
}
} else {
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha15843 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha15843 = (function (form,pred,gfn,cpred_QMARK_,unc,meta15844){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta15844 = meta15844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha15843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15845,meta15844__$1){
var self__ = this;
var _15845__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15843(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta15844__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha15843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15845){
var self__ = this;
var _15845__$1 = this;
return self__.meta15844;
}));

(cljs.spec.alpha.t_cljs$spec$alpha15843.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha15843.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha15843.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha15843.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha15843.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = (self__.pred.cljs$core$IFn$_invoke$arity$1 ? self__.pred.cljs$core$IFn$_invoke$arity$1(x) : self__.pred.call(null,x));
if(cljs.core.truth_(self__.cpred_QMARK_)){
return ret;
} else {
if(cljs.core.truth_(ret)){
return x;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha15843.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return (self__.unc.cljs$core$IFn$_invoke$arity$1 ? self__.unc.cljs$core$IFn$_invoke$arity$1(x) : self__.unc.call(null,x));
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha15843.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4(self__.pred,x,self__.form,self__.cpred_QMARK_))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,self__.form,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
return null;
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha15843.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.gen_for_pred(self__.pred);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha15843.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
}));

(cljs.spec.alpha.t_cljs$spec$alpha15843.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
}));

(cljs.spec.alpha.t_cljs$spec$alpha15843.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$pred,cljs.core.cst$sym$gfn,cljs.core.cst$sym$cpred_QMARK_,cljs.core.cst$sym$unc,cljs.core.cst$sym$meta15844], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha15843.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha15843.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15843");

(cljs.spec.alpha.t_cljs$spec$alpha15843.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15843");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha15843.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha15843 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha15843(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta15844){
return (new cljs.spec.alpha.t_cljs$spec$alpha15843(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta15844));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha15843(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
}));

(cljs.spec.alpha.spec_impl.cljs$lang$maxFixedArity = 5);

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.alpha.multi_spec_impl = (function cljs$spec$alpha$multi_spec_impl(var_args){
var G__15853 = arguments.length;
switch (G__15853) {
case 3:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(form,mmvar,retag,null);
}));

(cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid();
var predx = (function (p1__15847_SHARP_){
var mm = cljs.core.deref(mmvar);
var and__4210__auto__ = cljs.core._get_method(mm,(function (){var fexpr__15854 = cljs.core._dispatch_fn(mm);
return (fexpr__15854.cljs$core$IFn$_invoke$arity$1 ? fexpr__15854.cljs$core$IFn$_invoke$arity$1(p1__15847_SHARP_) : fexpr__15854.call(null,p1__15847_SHARP_));
})());
if(cljs.core.truth_(and__4210__auto__)){
return (mm.cljs$core$IFn$_invoke$arity$1 ? mm.cljs$core$IFn$_invoke$arity$1(p1__15847_SHARP_) : mm.call(null,p1__15847_SHARP_));
} else {
return and__4210__auto__;
}
});
var dval = (function (p1__15848_SHARP_){
var fexpr__15855 = cljs.core._dispatch_fn(cljs.core.deref(mmvar));
return (fexpr__15855.cljs$core$IFn$_invoke$arity$1 ? fexpr__15855.cljs$core$IFn$_invoke$arity$1(p1__15848_SHARP_) : fexpr__15855.call(null,p1__15848_SHARP_));
});
var tag = (((retag instanceof cljs.core.Keyword))?(function (p1__15849_SHARP_,p2__15850_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15849_SHARP_,retag,p2__15850_SHARP_);
}):retag);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha15856 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha15856 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta15857){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta15857 = meta15857;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha15856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15858,meta15857__$1){
var self__ = this;
var _15858__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15856(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta15857__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha15856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15858){
var self__ = this;
var _15858__$1 = this;
return self__.meta15857;
}));

(cljs.spec.alpha.t_cljs$spec$alpha15856.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha15856.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha15856.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha15856.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha15856.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__5751__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__5751__auto__)){
var pred = temp__5751__auto__;
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred,x,self__.form);
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha15856.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__5751__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__5751__auto__)){
var pred = temp__5751__auto__;
return cljs.spec.alpha.unform(pred,x);
} else {
throw (new Error(["No method of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.form)," for dispatch value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.dval.cljs$core$IFn$_invoke$arity$1 ? self__.dval.cljs$core$IFn$_invoke$arity$1(x) : self__.dval.call(null,x)))].join('')));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha15856.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = (self__.dval.cljs$core$IFn$_invoke$arity$1 ? self__.dval.cljs$core$IFn$_invoke$arity$1(x) : self__.dval.call(null,x));
var path__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,dv);
var temp__5751__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__5751__auto__)){
var pred = temp__5751__auto__;
return cljs.spec.alpha.explain_1(self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path__$1,cljs.core.cst$kw$pred,self__.form,cljs.core.cst$kw$val,x,cljs.core.cst$kw$reason,"no method",cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha15856.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = (function (p__15859){
var vec__15860 = p__15859;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15860,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15860,(1),null);
var p = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(null) : f.call(null,null));
var rmap__$1 = cljs.spec.alpha.inck(rmap,self__.id);
if(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,self__.id,path,k)){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay((function (){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__15851_SHARP_){
return (self__.tag.cljs$core$IFn$_invoke$arity$2 ? self__.tag.cljs$core$IFn$_invoke$arity$2(p1__15851_SHARP_,k) : self__.tag.call(null,p1__15851_SHARP_,k));
}),cljs.spec.alpha.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,(new cljs.core.List(null,cljs.core.cst$sym$method,(new cljs.core.List(null,self__.form,(new cljs.core.List(null,k,null,(1),null)),(2),null)),(3),null)))], 0));
}),null)));
}
});
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__15863){
var vec__15864 = p__15863;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15864,(0),null);
return cljs.spec.alpha.invalid_QMARK_(k);
}),cljs.core.methods$(cljs.core.deref(self__.mmvar)))));
if(cljs.core.every_QMARK_(cljs.core.identity,gs)){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs], 0));
} else {
return null;
}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha15856.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.mmvar,self__.retag,gfn__$1);
}));

(cljs.spec.alpha.t_cljs$spec$alpha15856.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_multi_DASH_spec,null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,self__.retag,null,(1),null))], 0))));
}));

(cljs.spec.alpha.t_cljs$spec$alpha15856.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$mmvar,cljs.core.cst$sym$retag,cljs.core.cst$sym$gfn,cljs.core.cst$sym$id,cljs.core.cst$sym$predx,cljs.core.cst$sym$dval,cljs.core.cst$sym$tag,cljs.core.cst$sym$meta15857], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha15856.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha15856.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15856");

(cljs.spec.alpha.t_cljs$spec$alpha15856.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15856");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha15856.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha15856 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha15856(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta15857){
return (new cljs.spec.alpha.t_cljs$spec$alpha15856(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta15857));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha15856(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.spec.alpha.multi_spec_impl.cljs$lang$maxFixedArity = 4);

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.alpha.tuple_impl = (function cljs$spec$alpha$tuple_impl(var_args){
var G__15869 = arguments.length;
switch (G__15869) {
case 2:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3(forms,preds,null);
}));

(cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.specize,preds,forms);
}),null));
var cnt = cljs.core.count(preds);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha15870 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha15870 = (function (forms,preds,gfn,specs,cnt,meta15871){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cnt = cnt;
this.meta15871 = meta15871;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha15870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15872,meta15871__$1){
var self__ = this;
var _15872__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15870(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cnt,meta15871__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha15870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15872){
var self__ = this;
var _15872__$1 = this;
return self__.meta15871;
}));

(cljs.spec.alpha.t_cljs$spec$alpha15870.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha15870.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha15870.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha15870.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha15870.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var specs__$1 = cljs.core.deref(self__.specs);
if((!(((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),self__.cnt)))))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,self__.cnt)){
return ret;
} else {
var v = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
var cv = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i)),v);
if(cljs.spec.alpha.invalid_QMARK_(cv)){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var G__15874 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv));
var G__15875 = (i + (1));
ret = G__15874;
i = G__15875;
continue;
}
}
break;
}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha15870.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds))))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,cljs.core.count(x))){
return ret;
} else {
var cv = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
var v = cljs.spec.alpha.unform((self__.preds.cljs$core$IFn$_invoke$arity$1 ? self__.preds.cljs$core$IFn$_invoke$arity$1(i) : self__.preds.call(null,i)),cv);
var G__15876 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,v));
var G__15877 = (i + (1));
ret = G__15876;
i = G__15877;
continue;
}
break;
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha15870.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if((!(cljs.core.vector_QMARK_(x)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_count,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_PERCENT_,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.count(self__.preds),null,(1),null))], 0)))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4((function (i,form,pred){
var v = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
if(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,v)){
return null;
} else {
return cljs.spec.alpha.explain_1(form,pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i),v);
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.preds)),self__.forms,self__.preds));

}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha15870.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = (function (i,p,f){
return cljs.spec.alpha.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),rmap,f);
});
var gs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,gs);
} else {
return null;
}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha15870.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1);
}));

(cljs.spec.alpha.t_cljs$spec$alpha15870.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,null,(1),null)),self__.forms)));
}));

(cljs.spec.alpha.t_cljs$spec$alpha15870.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$cnt,cljs.core.cst$sym$meta15871], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha15870.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha15870.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15870");

(cljs.spec.alpha.t_cljs$spec$alpha15870.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15870");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha15870.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha15870 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha15870(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta15871){
return (new cljs.spec.alpha.t_cljs$spec$alpha15870(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta15871));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha15870(forms,preds,gfn,specs,cnt,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.spec.alpha.tuple_impl.cljs$lang$maxFixedArity = 3);

cljs.spec.alpha.tagged_ret = (function cljs$spec$alpha$tagged_ret(tag,ret){
return (new cljs.core.MapEntry(tag,ret,null));
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.alpha.or_spec_impl = (function cljs$spec$alpha$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid();
var kps = cljs.core.zipmap(keys,preds);
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.specize,preds,forms);
}),null));
var cform = (function (){var G__15878 = cljs.core.count(preds);
switch (G__15878) {
case (2):
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.spec.alpha.invalid_QMARK_(ret)){
var ret__$1 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),x);
if(cljs.spec.alpha.invalid_QMARK_(ret__$1)){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.spec.alpha.tagged_ret((keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((1)) : keys.call(null,(1))),ret__$1);
}
} else {
return cljs.spec.alpha.tagged_ret((keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((0)) : keys.call(null,(0))),ret);
}
});

break;
case (3):
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.spec.alpha.invalid_QMARK_(ret)){
var ret__$1 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),x);
if(cljs.spec.alpha.invalid_QMARK_(ret__$1)){
var ret__$2 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((2)) : specs__$1.call(null,(2))),x);
if(cljs.spec.alpha.invalid_QMARK_(ret__$2)){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.spec.alpha.tagged_ret((keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((2)) : keys.call(null,(2))),ret__$2);
}
} else {
return cljs.spec.alpha.tagged_ret((keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((1)) : keys.call(null,(1))),ret__$1);
}
} else {
return cljs.spec.alpha.tagged_ret((keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((0)) : keys.call(null,(0))),ret);
}
});

break;
default:
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var i = (0);
while(true){
if((i < cljs.core.count(specs__$1))){
var spec = (specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i));
var ret = cljs.spec.alpha.conform_STAR_(spec,x);
if(cljs.spec.alpha.invalid_QMARK_(ret)){
var G__15887 = (i + (1));
i = G__15887;
continue;
} else {
return cljs.spec.alpha.tagged_ret((keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1(i) : keys.call(null,i)),ret);
}
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
break;
}
});

}
})();
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha15879 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha15879 = (function (keys,forms,preds,gfn,id,kps,specs,cform,meta15880){
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.specs = specs;
this.cform = cform;
this.meta15880 = meta15880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha15879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15881,meta15880__$1){
var self__ = this;
var _15881__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15879(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.specs,self__.cform,meta15880__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha15879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15881){
var self__ = this;
var _15881__$1 = this;
return self__.meta15880;
}));

(cljs.spec.alpha.t_cljs$spec$alpha15879.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha15879.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha15879.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha15879.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha15879.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.cform.cljs$core$IFn$_invoke$arity$1 ? self__.cform.cljs$core$IFn$_invoke$arity$1(x) : self__.cform.call(null,x));
}));

(cljs.spec.alpha.t_cljs$spec$alpha15879.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,p__15882){
var self__ = this;
var vec__15883 = p__15882;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15883,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15883,(1),null);
var ___$1 = this;
return cljs.spec.alpha.unform((self__.kps.cljs$core$IFn$_invoke$arity$1 ? self__.kps.cljs$core$IFn$_invoke$arity$1(k) : self__.kps.call(null,k)),x);
}));

(cljs.spec.alpha.t_cljs$spec$alpha15879.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$__$1,x)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4((function (k,form,pred){
if(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,x)){
return null;
} else {
return cljs.spec.alpha.explain_1(form,pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,in$,x);
}
}),self__.keys,self__.forms,self__.preds));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha15879.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = (function (k,p,f){
var rmap__$1 = cljs.spec.alpha.inck(rmap,self__.id);
if(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,self__.id,path,k)){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay((function (){
return cljs.spec.alpha.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,f);
}),null)));
}
});
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_(gs)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs], 0));
}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha15879.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.or_spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.or_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.keys,self__.forms,self__.preds,gfn__$1) : cljs.spec.alpha.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha15879.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,null,(1),null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.keys,self__.forms], 0)))));
}));

(cljs.spec.alpha.t_cljs$spec$alpha15879.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$keys,cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$id,cljs.core.cst$sym$kps,cljs.core.cst$sym$specs,cljs.core.cst$sym$cform,cljs.core.cst$sym$meta15880], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha15879.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha15879.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15879");

(cljs.spec.alpha.t_cljs$spec$alpha15879.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15879");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha15879.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha15879 = (function cljs$spec$alpha$or_spec_impl_$___GT_t_cljs$spec$alpha15879(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta15880){
return (new cljs.spec.alpha.t_cljs$spec$alpha15879(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta15880));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha15879(keys,forms,preds,gfn,id,kps,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.and_preds = (function cljs$spec$alpha$and_preds(x,preds,forms){
var ret = x;
var G__15894 = preds;
var vec__15896 = G__15894;
var seq__15897 = cljs.core.seq(vec__15896);
var first__15898 = cljs.core.first(seq__15897);
var seq__15897__$1 = cljs.core.next(seq__15897);
var pred = first__15898;
var preds__$1 = seq__15897__$1;
var G__15895 = forms;
var vec__15899 = G__15895;
var seq__15900 = cljs.core.seq(vec__15899);
var first__15901 = cljs.core.first(seq__15900);
var seq__15900__$1 = cljs.core.next(seq__15900);
var form = first__15901;
var forms__$1 = seq__15900__$1;
var ret__$1 = ret;
var G__15894__$1 = G__15894;
var G__15895__$1 = G__15895;
while(true){
var ret__$2 = ret__$1;
var vec__15902 = G__15894__$1;
var seq__15903 = cljs.core.seq(vec__15902);
var first__15904 = cljs.core.first(seq__15903);
var seq__15903__$1 = cljs.core.next(seq__15903);
var pred__$1 = first__15904;
var preds__$2 = seq__15903__$1;
var vec__15905 = G__15895__$1;
var seq__15906 = cljs.core.seq(vec__15905);
var first__15907 = cljs.core.first(seq__15906);
var seq__15906__$1 = cljs.core.next(seq__15906);
var form__$1 = first__15907;
var forms__$2 = seq__15906__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.spec.alpha.invalid_QMARK_(nret)){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var G__15908 = nret;
var G__15909 = preds__$2;
var G__15910 = forms__$2;
ret__$1 = G__15908;
G__15894__$1 = G__15909;
G__15895__$1 = G__15910;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.alpha.explain_pred_list = (function cljs$spec$alpha$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__15917 = forms;
var vec__15919 = G__15917;
var seq__15920 = cljs.core.seq(vec__15919);
var first__15921 = cljs.core.first(seq__15920);
var seq__15920__$1 = cljs.core.next(seq__15920);
var form = first__15921;
var forms__$1 = seq__15920__$1;
var G__15918 = preds;
var vec__15922 = G__15918;
var seq__15923 = cljs.core.seq(vec__15922);
var first__15924 = cljs.core.first(seq__15923);
var seq__15923__$1 = cljs.core.next(seq__15923);
var pred = first__15924;
var preds__$1 = seq__15923__$1;
var ret__$1 = ret;
var G__15917__$1 = G__15917;
var G__15918__$1 = G__15918;
while(true){
var ret__$2 = ret__$1;
var vec__15925 = G__15917__$1;
var seq__15926 = cljs.core.seq(vec__15925);
var first__15927 = cljs.core.first(seq__15926);
var seq__15926__$1 = cljs.core.next(seq__15926);
var form__$1 = first__15927;
var forms__$2 = seq__15926__$1;
var vec__15928 = G__15918__$1;
var seq__15929 = cljs.core.seq(vec__15928);
var first__15930 = cljs.core.first(seq__15929);
var seq__15929__$1 = cljs.core.next(seq__15929);
var pred__$1 = first__15930;
var preds__$2 = seq__15929__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.spec.alpha.invalid_QMARK_(nret)){
return cljs.spec.alpha.explain_1(form__$1,pred__$1,path,via,in$,ret__$2);
} else {
var G__15931 = nret;
var G__15932 = forms__$2;
var G__15933 = preds__$2;
ret__$1 = G__15931;
G__15917__$1 = G__15932;
G__15918__$1 = G__15933;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.alpha.and_spec_impl = (function cljs$spec$alpha$and_spec_impl(forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.specize,preds,forms);
}),null));
var cform = (function (){var G__15936 = cljs.core.count(preds);
switch (G__15936) {
case (2):
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.spec.alpha.invalid_QMARK_(ret)){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),ret);
}
});

break;
case (3):
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.spec.alpha.invalid_QMARK_(ret)){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var ret__$1 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),ret);
if(cljs.spec.alpha.invalid_QMARK_(ret__$1)){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((2)) : specs__$1.call(null,(2))),ret__$1);
}
}
});

break;
default:
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = x;
var i = (0);
while(true){
if((i < cljs.core.count(specs__$1))){
var nret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i)),ret);
if(cljs.spec.alpha.invalid_QMARK_(nret)){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var G__15941 = nret;
var G__15942 = (i + (1));
ret = G__15941;
i = G__15942;
continue;
}
} else {
return ret;
}
break;
}
});

}
})();
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha15937 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha15937 = (function (forms,preds,gfn,specs,cform,meta15938){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cform = cform;
this.meta15938 = meta15938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha15937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15939,meta15938__$1){
var self__ = this;
var _15939__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15937(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cform,meta15938__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha15937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15939){
var self__ = this;
var _15939__$1 = this;
return self__.meta15938;
}));

(cljs.spec.alpha.t_cljs$spec$alpha15937.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha15937.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha15937.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha15937.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha15937.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.cform.cljs$core$IFn$_invoke$arity$1 ? self__.cform.cljs$core$IFn$_invoke$arity$1(x) : self__.cform.call(null,x));
}));

(cljs.spec.alpha.t_cljs$spec$alpha15937.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__15935_SHARP_,p2__15934_SHARP_){
return cljs.spec.alpha.unform(p2__15934_SHARP_,p1__15935_SHARP_);
}),x,cljs.core.reverse(self__.preds));
}));

(cljs.spec.alpha.t_cljs$spec$alpha15937.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_pred_list(self__.forms,self__.preds,path,via,in$,x);
}));

(cljs.spec.alpha.t_cljs$spec$alpha15937.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.alpha.gensub(cljs.core.first(self__.preds),overrides,path,rmap,cljs.core.first(self__.forms));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha15937.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.and_spec_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.and_spec_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1) : cljs.spec.alpha.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha15937.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,null,(1),null)),self__.forms)));
}));

(cljs.spec.alpha.t_cljs$spec$alpha15937.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$cform,cljs.core.cst$sym$meta15938], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha15937.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha15937.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15937");

(cljs.spec.alpha.t_cljs$spec$alpha15937.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15937");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha15937.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha15937 = (function cljs$spec$alpha$and_spec_impl_$___GT_t_cljs$spec$alpha15937(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta15938){
return (new cljs.spec.alpha.t_cljs$spec$alpha15937(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta15938));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha15937(forms,preds,gfn,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.coll_prob = (function cljs$spec$alpha$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__4212__auto__ = kfn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__4212__auto__ = kform;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.cst$sym$cljs$core_SLASH_coll_QMARK_;
}
})();
if((!(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,x)))){
return cljs.spec.alpha.explain_1(kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__4210__auto__ = count;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(count,cljs.core.bounded_count(count,x));
} else {
return and__4210__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,count,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_count,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_PERCENT_,null,(1),null))))),null,(1),null))], 0)))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__4210__auto__ = (function (){var or__4212__auto__ = min_count;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__4210__auto__)){
return (!(((((function (){var or__4212__auto__ = min_count;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count((cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__4212__auto__ = max_count;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (9007199254740991);
}
})())))));
} else {
return and__4210__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__LT__EQ_,null,(1),null)),(new cljs.core.List(null,(function (){var or__4212__auto__ = min_count;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})(),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_count,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_PERCENT_,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(function (){var or__4212__auto__ = max_count;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (9007199254740991);
}
})(),null,(1),null))], 0)))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__4210__auto__ = distinct;
if(cljs.core.truth_(and__4210__auto__)){
return (((!(cljs.core.empty_QMARK_(x)))) && (cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,x))));
} else {
return and__4210__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$distinct_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.alpha.merge_spec_impl = (function cljs$spec$alpha$merge_spec_impl(forms,preds,gfn){
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha15951 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha15951 = (function (forms,preds,gfn,meta15952){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta15952 = meta15952;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha15951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15953,meta15952__$1){
var self__ = this;
var _15953__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15951(self__.forms,self__.preds,self__.gfn,meta15952__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha15951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15953){
var self__ = this;
var _15953__$1 = this;
return self__.meta15952;
}));

(cljs.spec.alpha.t_cljs$spec$alpha15951.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha15951.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha15951.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha15951.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha15951.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__15943_SHARP_,p2__15944_SHARP_){
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(p1__15943_SHARP_,x,p2__15944_SHARP_);
}),self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some(cljs.spec.alpha.invalid_QMARK_,ms))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,ms);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha15951.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15945_SHARP_){
return cljs.spec.alpha.unform(p1__15945_SHARP_,x);
}),cljs.core.reverse(self__.preds)));
}));

(cljs.spec.alpha.t_cljs$spec$alpha15951.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__15946_SHARP_,p2__15947_SHARP_){
return cljs.spec.alpha.explain_1(p1__15946_SHARP_,p2__15947_SHARP_,path,via,in$,x);
}),self__.forms,self__.preds));
}));

(cljs.spec.alpha.t_cljs$spec$alpha15951.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__15948_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,p1__15948_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__15949_SHARP_,p2__15950_SHARP_){
return cljs.spec.alpha.gensub(p1__15949_SHARP_,overrides,path,rmap,p2__15950_SHARP_);
}),self__.preds,self__.forms))], 0));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha15951.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.merge_spec_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.merge_spec_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1) : cljs.spec.alpha.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha15951.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_merge,null,(1),null)),self__.forms)));
}));

(cljs.spec.alpha.t_cljs$spec$alpha15951.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta15952], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha15951.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha15951.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15951");

(cljs.spec.alpha.t_cljs$spec$alpha15951.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15951");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha15951.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha15951 = (function cljs$spec$alpha$merge_spec_impl_$___GT_t_cljs$spec$alpha15951(forms__$1,preds__$1,gfn__$1,meta15952){
return (new cljs.spec.alpha.t_cljs$spec$alpha15951(forms__$1,preds__$1,gfn__$1,meta15952));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha15951(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.empty_coll = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.PersistentVector.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_list_QMARK_,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.alpha.every_impl = (function cljs$spec$alpha$every_impl(var_args){
var G__15959 = arguments.length;
switch (G__15959) {
case 3:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(form,pred,opts,null);
}));

(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__15960,gfn){
var map__15961 = p__15960;
var map__15961__$1 = cljs.core.__destructure_map(map__15961);
var opts = map__15961__$1;
var max_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15961__$1,cljs.core.cst$kw$max_DASH_count);
var kind_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15961__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form);
var gen_max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15961__$1,cljs.core.cst$kw$gen_DASH_max,(20));
var cpred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15961__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred);
var conform_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15961__$1,cljs.core.cst$kw$conform_DASH_keys);
var describe_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15961__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe);
var distinct = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15961__$1,cljs.core.cst$kw$distinct);
var kfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15961__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn);
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15961__$1,cljs.core.cst$kw$count);
var min_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15961__$1,cljs.core.cst$kw$min_DASH_count);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15961__$1,cljs.core.cst$kw$kind);
var conform_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15961__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all);
var conform_into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15961__$1,cljs.core.cst$kw$into);
var gen_into = (cljs.core.truth_(conform_into)?cljs.core.empty(conform_into):cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.empty_coll,kind_form));
var spec = (new cljs.core.Delay((function (){
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(pred);
}),null));
var check_QMARK_ = (function (p1__15954_SHARP_){
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(spec),p1__15954_SHARP_);
});
var kfn__$1 = (function (){var or__4212__auto__ = kfn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (function (i,v){
return i;
});
}
})();
var addcv = (function (ret,i,v,cv){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cv);
});
var cfns = (function (x){
if(((cljs.core.vector_QMARK_(x)) && (((cljs.core.not(conform_into)) || (cljs.core.vector_QMARK_(conform_into)))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,(function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv);
}
}),cljs.core.identity], null);
} else {
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.map_QMARK_(x);
if(and__4210__auto__){
var or__4212__auto__ = (function (){var and__4210__auto____$1 = kind;
if(cljs.core.truth_(and__4210__auto____$1)){
return cljs.core.not(conform_into);
} else {
return and__4210__auto____$1;
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.map_QMARK_(conform_into);
}
} else {
return and__4210__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),(function (ret,i,v,cv){
if((((v === cv)) && (cljs.core.not(conform_keys)))){
return ret;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.nth.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cv,(1)));
}
}),cljs.core.identity], null);
} else {
if(((cljs.core.list_QMARK_(conform_into)) || (((cljs.core.seq_QMARK_(conform_into)) || (((cljs.core.not(conform_into)) && (((cljs.core.list_QMARK_(x)) || (cljs.core.seq_QMARK_(x)))))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__15955_SHARP_){
return cljs.core.empty((function (){var or__4212__auto__ = conform_into;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return p1__15955_SHARP_;
}
})());
}),addcv,cljs.core.identity], null);

}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha15962 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha15962 = (function (form,max_count,check_QMARK_,gfn,gen_max,map__15961,pred,cpred,conform_keys,kind_form,addcv,cfns,describe_form,distinct,p__15960,spec,kfn,gen_into,count,min_count,opts,kind,conform_all,conform_into,meta15963){
this.form = form;
this.max_count = max_count;
this.check_QMARK_ = check_QMARK_;
this.gfn = gfn;
this.gen_max = gen_max;
this.map__15961 = map__15961;
this.pred = pred;
this.cpred = cpred;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.describe_form = describe_form;
this.distinct = distinct;
this.p__15960 = p__15960;
this.spec = spec;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.conform_all = conform_all;
this.conform_into = conform_into;
this.meta15963 = meta15963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha15962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15964,meta15963__$1){
var self__ = this;
var _15964__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15962(self__.form,self__.max_count,self__.check_QMARK_,self__.gfn,self__.gen_max,self__.map__15961,self__.pred,self__.cpred,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.describe_form,self__.distinct,self__.p__15960,self__.spec,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.conform_into,meta15963__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha15962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15964){
var self__ = this;
var _15964__$1 = this;
return self__.meta15963;
}));

(cljs.spec.alpha.t_cljs$spec$alpha15962.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha15962.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha15962.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha15962.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha15962.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var spec__$1 = cljs.core.deref(self__.spec);
if(cljs.core.not((self__.cpred.cljs$core$IFn$_invoke$arity$1 ? self__.cpred.cljs$core$IFn$_invoke$arity$1(x) : self__.cpred.call(null,x)))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__15965 = (self__.cfns.cljs$core$IFn$_invoke$arity$1 ? self__.cfns.cljs$core$IFn$_invoke$arity$1(x) : self__.cfns.call(null,x));
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15965,(0),null);
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15965,(1),null);
var complete = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15965,(2),null);
var ret = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(x) : init.call(null,x));
var i = (0);
var G__15971 = cljs.core.seq(x);
var vec__15972 = G__15971;
var seq__15973 = cljs.core.seq(vec__15972);
var first__15974 = cljs.core.first(seq__15973);
var seq__15973__$1 = cljs.core.next(seq__15973);
var v = first__15974;
var vs = seq__15973__$1;
var vseq = vec__15972;
var ret__$1 = ret;
var i__$1 = i;
var G__15971__$1 = G__15971;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__15975 = G__15971__$1;
var seq__15976 = cljs.core.seq(vec__15975);
var first__15977 = cljs.core.first(seq__15976);
var seq__15976__$1 = cljs.core.next(seq__15976);
var v__$1 = first__15977;
var vs__$1 = seq__15976__$1;
var vseq__$1 = vec__15975;
if(vseq__$1){
var cv = cljs.spec.alpha.conform_STAR_(spec__$1,v__$1);
if(cljs.spec.alpha.invalid_QMARK_(cv)){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var G__16008 = (add.cljs$core$IFn$_invoke$arity$4 ? add.cljs$core$IFn$_invoke$arity$4(ret__$2,i__$2,v__$1,cv) : add.call(null,ret__$2,i__$2,v__$1,cv));
var G__16009 = (i__$2 + (1));
var G__16010 = vs__$1;
ret__$1 = G__16008;
i__$1 = G__16009;
G__15971__$1 = G__16010;
continue;
}
} else {
return (complete.cljs$core$IFn$_invoke$arity$1 ? complete.cljs$core$IFn$_invoke$arity$1(ret__$2) : complete.call(null,ret__$2));
}
break;
}
} else {
if(cljs.core.indexed_QMARK_(x)){
var step = (function (){var x__4295__auto__ = (1);
var y__4296__auto__ = cljs.core.long$((cljs.core.count(x) / cljs.spec.alpha._STAR_coll_check_limit_STAR_));
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count(x))){
return x;
} else {
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,i))){
var G__16011 = (i + step);
i = G__16011;
continue;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
}
break;
}
} else {
var limit = cljs.spec.alpha._STAR_coll_check_limit_STAR_;
var i = (0);
var G__15981 = cljs.core.seq(x);
var vec__15982 = G__15981;
var seq__15983 = cljs.core.seq(vec__15982);
var first__15984 = cljs.core.first(seq__15983);
var seq__15983__$1 = cljs.core.next(seq__15983);
var v = first__15984;
var vs = seq__15983__$1;
var vseq = vec__15982;
var i__$1 = i;
var G__15981__$1 = G__15981;
while(true){
var i__$2 = i__$1;
var vec__15985 = G__15981__$1;
var seq__15986 = cljs.core.seq(vec__15985);
var first__15987 = cljs.core.first(seq__15986);
var seq__15986__$1 = cljs.core.next(seq__15986);
var v__$1 = first__15987;
var vs__$1 = seq__15986__$1;
var vseq__$1 = vec__15985;
if((((vseq__$1 == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i__$2,limit)))){
return x;
} else {
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,v__$1)){
var G__16012 = (i__$2 + (1));
var G__16013 = vs__$1;
i__$1 = G__16012;
G__15981__$1 = G__16013;
continue;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;

}
}
break;
}
}

}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha15962.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.conform_all)){
var spec__$1 = cljs.core.deref(self__.spec);
var vec__15988 = (self__.cfns.cljs$core$IFn$_invoke$arity$1 ? self__.cfns.cljs$core$IFn$_invoke$arity$1(x) : self__.cfns.call(null,x));
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15988,(0),null);
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15988,(1),null);
var complete = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15988,(2),null);
var ret = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(x) : init.call(null,x));
var i = (0);
var G__15994 = cljs.core.seq(x);
var vec__15995 = G__15994;
var seq__15996 = cljs.core.seq(vec__15995);
var first__15997 = cljs.core.first(seq__15996);
var seq__15996__$1 = cljs.core.next(seq__15996);
var v = first__15997;
var vs = seq__15996__$1;
var vseq = vec__15995;
var ret__$1 = ret;
var i__$1 = i;
var G__15994__$1 = G__15994;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__15998 = G__15994__$1;
var seq__15999 = cljs.core.seq(vec__15998);
var first__16000 = cljs.core.first(seq__15999);
var seq__15999__$1 = cljs.core.next(seq__15999);
var v__$1 = first__16000;
var vs__$1 = seq__15999__$1;
var vseq__$1 = vec__15998;
if((i__$2 >= cljs.core.count(x))){
return (complete.cljs$core$IFn$_invoke$arity$1 ? complete.cljs$core$IFn$_invoke$arity$1(ret__$2) : complete.call(null,ret__$2));
} else {
var G__16014 = (function (){var G__16001 = ret__$2;
var G__16002 = i__$2;
var G__16003 = v__$1;
var G__16004 = cljs.spec.alpha.unform_STAR_(spec__$1,v__$1);
return (add.cljs$core$IFn$_invoke$arity$4 ? add.cljs$core$IFn$_invoke$arity$4(G__16001,G__16002,G__16003,G__16004) : add.call(null,G__16001,G__16002,G__16003,G__16004));
})();
var G__16015 = (i__$2 + (1));
var G__16016 = vs__$1;
ret__$1 = G__16014;
i__$1 = G__16015;
G__15994__$1 = G__16016;
continue;
}
break;
}
} else {
return x;
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha15962.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__4212__auto__ = cljs.spec.alpha.coll_prob(x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var G__16006 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (i,v){
var k = (self__.kfn.cljs$core$IFn$_invoke$arity$2 ? self__.kfn.cljs$core$IFn$_invoke$arity$2(i,v) : self__.kfn.call(null,i,v));
if(cljs.core.truth_((self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : self__.check_QMARK_.call(null,v)))){
return null;
} else {
var prob = cljs.spec.alpha.explain_1(self__.form,self__.pred,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,k),v);
return prob;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0(),x));
var fexpr__16005 = (cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,cljs.spec.alpha._STAR_coll_error_limit_STAR_));
return (fexpr__16005.cljs$core$IFn$_invoke$arity$1 ? fexpr__16005.cljs$core$IFn$_invoke$arity$1(G__16006) : fexpr__16005.call(null,G__16006));
})());
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha15962.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var pgen = cljs.spec.alpha.gensub(self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(self__.gen_into)?cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.gen_into], 0)):(cljs.core.truth_(self__.kind)?cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__15956_SHARP_){
if(cljs.core.empty_QMARK_(p1__15956_SHARP_)){
return p1__15956_SHARP_;
} else {
return cljs.core.empty(p1__15956_SHARP_);
}
}),cljs.spec.alpha.gensub(self__.kind,overrides,path,rmap,self__.form)], 0)):cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentVector.EMPTY], 0))
)),(function (init){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__15957_SHARP_){
if(cljs.core.vector_QMARK_(init)){
return p1__15957_SHARP_;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(init,p1__15957_SHARP_);
}
}),(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$num_DASH_elements,self__.count,cljs.core.cst$kw$max_DASH_tries,(100)], null)], 0)):cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$min_DASH_elements,(function (){var or__4212__auto__ = self__.min_count;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})(),cljs.core.cst$kw$max_DASH_elements,(function (){var or__4212__auto__ = self__.max_count;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var x__4295__auto__ = self__.gen_max;
var y__4296__auto__ = ((2) * (function (){var or__4212__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return (0);
}
})());
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
}
})(),cljs.core.cst$kw$max_DASH_tries,(100)], null)], 0))):(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,self__.count], 0)):(cljs.core.truth_((function (){var or__4212__auto__ = self__.min_count;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,(function (){var or__4212__auto__ = self__.min_count;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})(),(function (){var or__4212__auto__ = self__.max_count;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var x__4295__auto__ = self__.gen_max;
var y__4296__auto__ = ((2) * (function (){var or__4212__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return (0);
}
})());
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
}
})()], 0)):cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,(0),self__.gen_max], 0))
)))], 0));
})], 0));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha15962.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.pred,self__.opts,gfn__$1);
}));

(cljs.spec.alpha.t_cljs$spec$alpha15962.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__4212__auto__ = self__.describe_form;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_every,null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opts], 0))], 0))));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha15962.getBasis = (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$max_DASH_count,cljs.core.cst$sym$check_QMARK_,cljs.core.cst$sym$gfn,cljs.core.cst$sym$gen_DASH_max,cljs.core.cst$sym$map__15961,cljs.core.cst$sym$pred,cljs.core.cst$sym$cpred,cljs.core.cst$sym$conform_DASH_keys,cljs.core.cst$sym$kind_DASH_form,cljs.core.cst$sym$addcv,cljs.core.cst$sym$cfns,cljs.core.cst$sym$describe_DASH_form,cljs.core.cst$sym$distinct,cljs.core.cst$sym$p__15960,cljs.core.cst$sym$spec,cljs.core.cst$sym$kfn,cljs.core.cst$sym$gen_DASH_into,cljs.core.cst$sym$count,cljs.core.cst$sym$min_DASH_count,cljs.core.cst$sym$opts,cljs.core.cst$sym$kind,cljs.core.cst$sym$conform_DASH_all,cljs.core.cst$sym$conform_DASH_into,cljs.core.cst$sym$meta15963], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha15962.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha15962.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15962");

(cljs.spec.alpha.t_cljs$spec$alpha15962.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15962");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha15962.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha15962 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha15962(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,map__15961__$2,pred__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,p__15960__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta15963){
return (new cljs.spec.alpha.t_cljs$spec$alpha15962(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,map__15961__$2,pred__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,p__15960__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta15963));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha15962(form,max_count,check_QMARK_,gfn,gen_max,map__15961__$1,pred,cpred,conform_keys,kind_form,addcv,cfns,describe_form,distinct,p__15960,spec,kfn__$1,gen_into,count,min_count,opts,kind,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.spec.alpha.every_impl.cljs$lang$maxFixedArity = 4);

cljs.spec.alpha.accept = (function cljs$spec$alpha$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_op,cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,cljs.core.cst$kw$ret,x], null);
});
cljs.spec.alpha.accept_QMARK_ = (function cljs$spec$alpha$accept_QMARK_(p__16017){
var map__16018 = p__16017;
var map__16018__$1 = cljs.core.__destructure_map(map__16018);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16018__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,op);
});
cljs.spec.alpha.pcat_STAR_ = (function cljs$spec$alpha$pcat_STAR_(p__16019){
var map__16020 = p__16019;
var map__16020__$1 = cljs.core.__destructure_map(map__16020);
var vec__16021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16020__$1,cljs.core.cst$kw$ps);
var seq__16022 = cljs.core.seq(vec__16021);
var first__16023 = cljs.core.first(seq__16022);
var seq__16022__$1 = cljs.core.next(seq__16022);
var p1 = first__16023;
var pr = seq__16022__$1;
var ps = vec__16021;
var vec__16024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16020__$1,cljs.core.cst$kw$ks);
var seq__16025 = cljs.core.seq(vec__16024);
var first__16026 = cljs.core.first(seq__16025);
var seq__16025__$1 = cljs.core.next(seq__16025);
var k1 = first__16026;
var kr = seq__16025__$1;
var ks = vec__16024;
var vec__16027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16020__$1,cljs.core.cst$kw$forms);
var seq__16028 = cljs.core.seq(vec__16027);
var first__16029 = cljs.core.first(seq__16028);
var seq__16028__$1 = cljs.core.next(seq__16028);
var f1 = first__16029;
var fr = seq__16028__$1;
var forms = vec__16027;
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16020__$1,cljs.core.cst$kw$ret);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16020__$1,cljs.core.cst$kw$rep_PLUS_);
if(cljs.core.every_QMARK_(cljs.core.identity,ps)){
if(cljs.spec.alpha.accept_QMARK_(p1)){
var rp = cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,rp]):rp));
if(pr){
var G__16030 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,pr,cljs.core.cst$kw$ks,kr,cljs.core.cst$kw$forms,fr,cljs.core.cst$kw$ret,ret__$1], null);
return (cljs.spec.alpha.pcat_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.pcat_STAR_.cljs$core$IFn$_invoke$arity$1(G__16030) : cljs.spec.alpha.pcat_STAR_.call(null,G__16030));
} else {
return cljs.spec.alpha.accept(ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_op,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$ret,ret,cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$rep_PLUS_,rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.alpha.pcat = (function cljs$spec$alpha$pcat(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16032 = arguments.length;
var i__4819__auto___16033 = (0);
while(true){
if((i__4819__auto___16033 < len__4818__auto___16032)){
args__4824__auto__.push((arguments[i__4819__auto___16033]));

var G__16034 = (i__4819__auto___16033 + (1));
i__4819__auto___16033 = G__16034;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$ret,cljs.core.PersistentVector.EMPTY], null));
}));

(cljs.spec.alpha.pcat.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.alpha.pcat.cljs$lang$applyTo = (function (seq16031){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16031));
}));

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.alpha.cat_impl = (function cljs$spec$alpha$cat_impl(ks,ps,forms){
return cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$ret,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.alpha.rep_STAR_ = (function cljs$spec$alpha$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_op,cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,cljs.core.cst$kw$p2,p2,cljs.core.cst$kw$splice,splice,cljs.core.cst$kw$forms,form,cljs.core.cst$kw$id,cljs.core.random_uuid()], null);
if(cljs.spec.alpha.accept_QMARK_(p1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.cst$kw$p1,p2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ret,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.cst$kw$p1,p1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ret,ret], 0));
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.alpha.rep_impl = (function cljs$spec$alpha$rep_impl(form,p){
return cljs.spec.alpha.rep_STAR_(p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.alpha.rep_PLUS_impl = (function cljs$spec$alpha$rep_PLUS_impl(form,p){
return cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.rep_STAR_(p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),cljs.core.cst$kw$forms,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)))))),cljs.core.cst$kw$ret,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$rep_PLUS_,form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.alpha.amp_impl = (function cljs$spec$alpha$amp_impl(re,re_form,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_op,cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,cljs.core.cst$kw$p1,re,cljs.core.cst$kw$amp,re_form,cljs.core.cst$kw$ps,preds,cljs.core.cst$kw$forms,pred_forms], null);
});
cljs.spec.alpha.filter_alt = (function cljs$spec$alpha$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__4212__auto__ = ks;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16035_SHARP_){
var G__16037 = cljs.core.first(p1__16035_SHARP_);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16037) : f.call(null,G__16037));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__4212__auto__ = cljs.core.seq(ks);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__4212__auto__ = cljs.core.seq(forms);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16036_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__16036_SHARP_,(2));
}),pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,ps)),ks,forms], null);
}
});
cljs.spec.alpha.alt_STAR_ = (function cljs$spec$alpha$alt_STAR_(ps,ks,forms){
var vec__16038 = cljs.spec.alpha.filter_alt(ps,ks,forms,cljs.core.identity);
var vec__16041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16038,(0),null);
var seq__16042 = cljs.core.seq(vec__16041);
var first__16043 = cljs.core.first(seq__16042);
var seq__16042__$1 = cljs.core.next(seq__16042);
var p1 = first__16043;
var pr = seq__16042__$1;
var ps__$1 = vec__16041;
var vec__16044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16038,(1),null);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16044,(0),null);
var ks__$1 = vec__16044;
var forms__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16038,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_op,cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,cljs.core.cst$kw$ps,ps__$1,cljs.core.cst$kw$ks,ks__$1,cljs.core.cst$kw$forms,forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.spec.alpha.accept_QMARK_(p1)){
return cljs.spec.alpha.accept(cljs.spec.alpha.tagged_ret(k1,cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alpha.alts = (function cljs$spec$alpha$alts(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16048 = arguments.length;
var i__4819__auto___16049 = (0);
while(true){
if((i__4819__auto___16049 < len__4818__auto___16048)){
args__4824__auto__.push((arguments[i__4819__auto___16049]));

var G__16050 = (i__4819__auto___16049 + (1));
i__4819__auto___16049 = G__16050;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.alt_STAR_(ps,null,null);
}));

(cljs.spec.alpha.alts.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.alpha.alts.cljs$lang$applyTo = (function (seq16047){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16047));
}));

cljs.spec.alpha.alt2 = (function cljs$spec$alpha$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__4210__auto__ = p1;
if(cljs.core.truth_(and__4210__auto__)){
return p2;
} else {
return and__4210__auto__;
}
})())){
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1,p2], 0));
} else {
var or__4212__auto__ = p1;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alpha.alt_impl = (function cljs$spec$alpha$alt_impl(ks,ps,forms){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.alt_STAR_(ps,ks,forms),cljs.core.cst$kw$id,cljs.core.random_uuid());
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.alpha.maybe_impl = (function cljs$spec$alpha$maybe_impl(p,form){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.alt_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.accept(cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil], null)),cljs.core.cst$kw$maybe,form);
});
cljs.spec.alpha.noret_QMARK_ = (function cljs$spec$alpha$noret_QMARK_(p1,pret){
var or__4212__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = (function (){var and__4210__auto__ = (function (){var G__16052 = cljs.core.cst$kw$cljs$spec$alpha_SLASH_op.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(p1));
var fexpr__16051 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,null], null), null);
return (fexpr__16051.cljs$core$IFn$_invoke$arity$1 ? fexpr__16051.cljs$core$IFn$_invoke$arity$1(G__16052) : fexpr__16051.call(null,G__16052));
})();
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.empty_QMARK_(pret);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return null;
}
}
});
cljs.spec.alpha.accept_nil_QMARK_ = (function cljs$spec$alpha$accept_nil_QMARK_(p){
var map__16053 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__16053__$1 = cljs.core.__destructure_map(map__16053);
var p__$1 = map__16053__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16053__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16053__$1,cljs.core.cst$kw$ps);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16053__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16053__$1,cljs.core.cst$kw$p2);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16053__$1,cljs.core.cst$kw$forms);
var G__16054 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__16054)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__16054)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__16054)){
var and__4210__auto__ = (cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.accept_nil_QMARK_.call(null,p1));
if(cljs.core.truth_(and__4210__auto__)){
var ret = cljs.spec.alpha.and_preds(cljs.spec.alpha.preturn(p1),ps,cljs.core.next(forms));
return (!(cljs.spec.alpha.invalid_QMARK_(ret)));
} else {
return and__4210__auto__;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__16054)){
var or__4212__auto__ = (p1 === p2);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return (cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.accept_nil_QMARK_.call(null,p1));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__16054)){
return cljs.core.every_QMARK_(cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__16054)){
return cljs.core.some(cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16054)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.preturn = (function cljs$spec$alpha$preturn(p){
var map__16055 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__16055__$1 = cljs.core.__destructure_map(map__16055);
var p__$1 = map__16055__$1;
var vec__16056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16055__$1,cljs.core.cst$kw$ps);
var seq__16057 = cljs.core.seq(vec__16056);
var first__16058 = cljs.core.first(seq__16057);
var seq__16057__$1 = cljs.core.next(seq__16057);
var p0 = first__16058;
var pr = seq__16057__$1;
var ps = vec__16056;
var vec__16059 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16055__$1,cljs.core.cst$kw$ks);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16059,(0),null);
var ks = vec__16059;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16055__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16055__$1,cljs.core.cst$kw$p1);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16055__$1,cljs.core.cst$kw$ret);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16055__$1,cljs.core.cst$kw$forms);
var G__16062 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__16062)){
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__16062)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__16062)){
var pret = (cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.preturn.call(null,p1));
if(cljs.core.truth_(cljs.spec.alpha.noret_QMARK_(p1,pret))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil;
} else {
return cljs.spec.alpha.and_preds(pret,ps,forms);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__16062)){
return cljs.spec.alpha.add_ret(p1,ret,k);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__16062)){
return cljs.spec.alpha.add_ret(p0,ret,k);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__16062)){
var vec__16063 = cljs.spec.alpha.filter_alt(ps,ks,forms,cljs.spec.alpha.accept_nil_QMARK_);
var vec__16066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16063,(0),null);
var p0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16066,(0),null);
var vec__16069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16063,(1),null);
var k0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16069,(0),null);
var r = (((p0__$1 == null))?cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil:(cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p0__$1) : cljs.spec.alpha.preturn.call(null,p0__$1)));
if(cljs.core.truth_(k0)){
return cljs.spec.alpha.tagged_ret(k0,r);
} else {
return r;
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16062)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.op_unform = (function cljs$spec$alpha$op_unform(p,x){
var map__16076 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__16076__$1 = cljs.core.__destructure_map(map__16076);
var p__$1 = map__16076__$1;
var vec__16077 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16076__$1,cljs.core.cst$kw$ps);
var seq__16078 = cljs.core.seq(vec__16077);
var first__16079 = cljs.core.first(seq__16078);
var seq__16078__$1 = cljs.core.next(seq__16078);
var p0 = first__16079;
var pr = seq__16078__$1;
var ps = vec__16077;
var vec__16080 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16076__$1,cljs.core.cst$kw$ks);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16080,(0),null);
var ks = vec__16080;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16076__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16076__$1,cljs.core.cst$kw$p1);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16076__$1,cljs.core.cst$kw$ret);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16076__$1,cljs.core.cst$kw$forms);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16076__$1,cljs.core.cst$kw$rep_PLUS_);
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16076__$1,cljs.core.cst$kw$maybe);
var kps = cljs.core.zipmap(ks,ps);
var G__16083 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__16083)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__16083)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform(p__$1,x)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__16083)){
var px = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__16073_SHARP_,p2__16072_SHARP_){
return cljs.spec.alpha.unform(p2__16072_SHARP_,p1__16073_SHARP_);
}),x,cljs.core.reverse(ps));
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p1,px) : cljs.spec.alpha.op_unform.call(null,p1,px));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__16083)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__16074_SHARP_){
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p1,p1__16074_SHARP_) : cljs.spec.alpha.op_unform.call(null,p1,p1__16074_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__16083)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__16075_SHARP_){
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p0,p1__16075_SHARP_) : cljs.spec.alpha.op_unform.call(null,p0,p1__16075_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (k__$1){
if(cljs.core.contains_QMARK_(x,k__$1)){
var G__16084 = (kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1));
var G__16085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,k__$1);
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(G__16084,G__16085) : cljs.spec.alpha.op_unform.call(null,G__16084,G__16085));
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__16083)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform(p0,x)], null);
} else {
var vec__16086 = x;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16086,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16086,(1),null);
var G__16089 = (kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1));
var G__16090 = v;
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(G__16089,G__16090) : cljs.spec.alpha.op_unform.call(null,G__16089,G__16090));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16083)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.add_ret = (function cljs$spec$alpha$add_ret(p,r,k){
var map__16091 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__16091__$1 = cljs.core.__destructure_map(map__16091);
var p__$1 = map__16091__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16091__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16091__$1,cljs.core.cst$kw$ps);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16091__$1,cljs.core.cst$kw$splice);
var prop = (function (){
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core.empty_QMARK_(ret)){
return r;
} else {
var G__16093 = r;
var G__16094 = (cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret);
var fexpr__16092 = (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj);
return (fexpr__16092.cljs$core$IFn$_invoke$arity$2 ? fexpr__16092.cljs$core$IFn$_invoke$arity$2(G__16093,G__16094) : fexpr__16092.call(null,G__16093,G__16094));
}
});
var G__16095 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__16095)){
return r;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__16095)){
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__16095)){
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__16095)){
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__16095)){
return prop();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__16095)){
return prop();
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16095)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.deriv = (function cljs$spec$alpha$deriv(p,x){
var map__16097 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__16097__$1 = cljs.core.__destructure_map(map__16097);
var p__$1 = map__16097__$1;
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16097__$1,cljs.core.cst$kw$forms);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16097__$1,cljs.core.cst$kw$p2);
var vec__16098 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16097__$1,cljs.core.cst$kw$ps);
var seq__16099 = cljs.core.seq(vec__16098);
var first__16100 = cljs.core.first(seq__16099);
var seq__16099__$1 = cljs.core.next(seq__16099);
var p0 = first__16100;
var pr = seq__16099__$1;
var ps = vec__16098;
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16097__$1,cljs.core.cst$kw$ret);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16097__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16097__$1,cljs.core.cst$kw$splice);
var vec__16101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16097__$1,cljs.core.cst$kw$ks);
var seq__16102 = cljs.core.seq(vec__16101);
var first__16103 = cljs.core.first(seq__16102);
var seq__16102__$1 = cljs.core.next(seq__16102);
var k0 = first__16103;
var kr = seq__16102__$1;
var ks = vec__16101;
var amp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16097__$1,cljs.core.cst$kw$amp);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16097__$1,cljs.core.cst$kw$p1);
if(cljs.core.truth_(p__$1)){
var G__16104 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__16104)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__16104)){
var ret__$1 = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(p__$1,x,p__$1);
if(cljs.spec.alpha.invalid_QMARK_(ret__$1)){
return null;
} else {
return cljs.spec.alpha.accept(ret__$1);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__16104)){
var temp__5753__auto__ = (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1,x) : cljs.spec.alpha.deriv.call(null,p1,x));
if(cljs.core.truth_(temp__5753__auto__)){
var p1__$1 = temp__5753__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op.cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.alpha.and_preds(cljs.spec.alpha.preturn(p1__$1),ps,cljs.core.next(forms));
if(cljs.spec.alpha.invalid_QMARK_(ret__$1)){
return null;
} else {
return cljs.spec.alpha.accept(ret__$1);
}
} else {
return cljs.spec.alpha.amp_impl(p1__$1,amp,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__16104)){
return cljs.spec.alpha.alt2(cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,cljs.core.cons((cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p0,x) : cljs.spec.alpha.deriv.call(null,p0,x)),pr),cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$ret,ret], null)),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p0))?(function (){var G__16105 = cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,pr,cljs.core.cst$kw$ks,kr,cljs.core.cst$kw$forms,cljs.core.next(forms),cljs.core.cst$kw$ret,cljs.spec.alpha.add_ret(p0,ret,k0)], null));
var G__16106 = x;
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(G__16105,G__16106) : cljs.spec.alpha.deriv.call(null,G__16105,G__16106));
})():null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__16104)){
return cljs.spec.alpha.alt_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16096_SHARP_){
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1__16096_SHARP_,x) : cljs.spec.alpha.deriv.call(null,p1__16096_SHARP_,x));
}),ps),ks,forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__16104)){
return cljs.spec.alpha.alt2(cljs.spec.alpha.rep_STAR_((cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1,x) : cljs.spec.alpha.deriv.call(null,p1,x)),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p1))?(function (){var G__16107 = cljs.spec.alpha.rep_STAR_(p2,p2,cljs.spec.alpha.add_ret(p1,ret,null),splice,forms);
var G__16108 = x;
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(G__16107,G__16108) : cljs.spec.alpha.deriv.call(null,G__16107,G__16108));
})():null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16104)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_describe = (function cljs$spec$alpha$op_describe(p){
var map__16109 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__16109__$1 = cljs.core.__destructure_map(map__16109);
var p__$1 = map__16109__$1;
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16109__$1,cljs.core.cst$kw$ps);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16109__$1,cljs.core.cst$kw$forms);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16109__$1,cljs.core.cst$kw$rep_PLUS_);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16109__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16109__$1,cljs.core.cst$kw$splice);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16109__$1,cljs.core.cst$kw$ks);
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16109__$1,cljs.core.cst$kw$maybe);
var amp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16109__$1,cljs.core.cst$kw$amp);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16109__$1,cljs.core.cst$kw$p1);
if(cljs.core.truth_(p__$1)){
var G__16110 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__16110)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__16110)){
return p__$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__16110)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$cljs$spec$alpha_SLASH__AMPERSAND_,amp,forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__16110)){
if(cljs.core.truth_(rep_PLUS_)){
return (new cljs.core.List(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,(new cljs.core.List(null,rep_PLUS_,null,(1),null)),(2),null));
} else {
return cljs.core.cons(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = cljs.core.seq(ks);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$_);
}
})(),forms], 0)));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__16110)){
if(cljs.core.truth_(maybe)){
return (new cljs.core.List(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,(new cljs.core.List(null,maybe,null,(1),null)),(2),null));
} else {
return cljs.core.cons(cljs.core.cst$sym$cljs$spec$alpha_SLASH_alt,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks,forms], 0)));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__16110)){
return (new cljs.core.List(null,(cljs.core.truth_(splice)?cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_:cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_),(new cljs.core.List(null,forms,null,(1),null)),(2),null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16110)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_explain = (function cljs$spec$alpha$op_explain(form,p,path,via,in$,input){
var vec__16111 = input;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16111,(0),null);
var input__$1 = vec__16111;
var map__16114 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__16114__$1 = cljs.core.__destructure_map(map__16114);
var p__$1 = map__16114__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16114__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16114__$1,cljs.core.cst$kw$ps);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16114__$1,cljs.core.cst$kw$ks);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16114__$1,cljs.core.cst$kw$forms);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16114__$1,cljs.core.cst$kw$splice);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16114__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16114__$1,cljs.core.cst$kw$p2);
var via__$1 = (function (){var temp__5751__auto__ = cljs.spec.alpha.spec_name(p__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var name = temp__5751__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,name);
} else {
return via;
}
})();
var insufficient = (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path__$1,cljs.core.cst$kw$reason,"Insufficient input",cljs.core.cst$kw$pred,form__$1,cljs.core.cst$kw$val,cljs.core.List.EMPTY,cljs.core.cst$kw$via,via__$1,cljs.core.cst$kw$in,in$], null)], null);
});
if(cljs.core.truth_(p__$1)){
var G__16115 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__16115)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__16115)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,form);
} else {
return cljs.spec.alpha.explain_1(form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__16115)){
if(cljs.core.empty_QMARK_(input__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p1))){
return cljs.spec.alpha.explain_pred_list(forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn(p1));
} else {
return insufficient(path,cljs.core.cst$kw$amp.cljs$core$IFn$_invoke$arity$1(p__$1));
}
} else {
var temp__5751__auto__ = cljs.spec.alpha.deriv(p1,x);
if(cljs.core.truth_(temp__5751__auto__)){
var p1__$1 = temp__5751__auto__;
return cljs.spec.alpha.explain_pred_list(forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn(p1__$1));
} else {
var G__16116 = cljs.core.cst$kw$amp.cljs$core$IFn$_invoke$arity$1(p__$1);
var G__16117 = p1;
var G__16118 = path;
var G__16119 = via__$1;
var G__16120 = in$;
var G__16121 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__16116,G__16117,G__16118,G__16119,G__16120,G__16121) : cljs.spec.alpha.op_explain.call(null,G__16116,G__16117,G__16118,G__16119,G__16120,G__16121));
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__16115)){
var pkfs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__4212__auto__ = cljs.core.seq(ks);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__4212__auto__ = cljs.core.seq(forms);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})());
var vec__16122 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(pkfs)))?cljs.core.first(pkfs):cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__16125){
var vec__16126 = p__16125;
var p__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16126,(0),null);
return cljs.spec.alpha.accept_nil_QMARK_(p__$2);
}),pkfs)));
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16122,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16122,(1),null);
var form__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16122,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var form__$2 = (function (){var or__4212__auto__ = form__$1;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.spec.alpha.op_describe(pred);
}
})();
if(((cljs.core.empty_QMARK_(input__$1)) && (cljs.core.not(pred)))){
return insufficient(path__$1,form__$2);
} else {
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(form__$2,pred,path__$1,via__$1,in$,input__$1) : cljs.spec.alpha.op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__16115)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,cljs.spec.alpha.op_describe(p__$1));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4((function (k,form__$1,pred){
var G__16129 = (function (){var or__4212__auto__ = form__$1;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.spec.alpha.op_describe(pred);
}
})();
var G__16130 = pred;
var G__16131 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__16132 = via__$1;
var G__16133 = in$;
var G__16134 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__16129,G__16130,G__16131,G__16132,G__16133,G__16134) : cljs.spec.alpha.op_explain.call(null,G__16129,G__16130,G__16131,G__16132,G__16133,G__16134));
}),(function (){var or__4212__auto__ = cljs.core.seq(ks);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__4212__auto__ = cljs.core.seq(forms);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__16115)){
var G__16135 = (((p1 === p2))?forms:cljs.spec.alpha.op_describe(p1));
var G__16136 = p1;
var G__16137 = path;
var G__16138 = via__$1;
var G__16139 = in$;
var G__16140 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__16135,G__16136,G__16137,G__16138,G__16139,G__16140) : cljs.spec.alpha.op_explain.call(null,G__16135,G__16136,G__16137,G__16138,G__16139,G__16140));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16115)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.re_gen = (function cljs$spec$alpha$re_gen(p,overrides,path,rmap,f){
var origp = p;
var map__16142 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__16142__$1 = cljs.core.__destructure_map(map__16142);
var p__$1 = map__16142__$1;
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16142__$1,cljs.core.cst$kw$ps);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16142__$1,cljs.core.cst$kw$forms);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16142__$1,cljs.core.cst$kw$p2);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16142__$1,cljs.core.cst$kw$ret);
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16142__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_gfn);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16142__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16142__$1,cljs.core.cst$kw$splice);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16142__$1,cljs.core.cst$kw$ks);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16142__$1,cljs.core.cst$kw$p1);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16142__$1,cljs.core.cst$kw$id);
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.alpha.inck(rmap,id):rmap);
var ggens = (function (ps__$1,ks__$1,forms__$1){
var gen = (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__4210__auto__ = rmap__$1;
if(cljs.core.truth_(and__4210__auto__)){
var and__4210__auto____$1 = id;
if(cljs.core.truth_(and__4210__auto____$1)){
var and__4210__auto____$2 = k;
if(cljs.core.truth_(and__4210__auto____$2)){
return cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,id,path,k);
} else {
return and__4210__auto____$2;
}
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay((function (){
var G__16143 = p__$2;
var G__16144 = overrides;
var G__16145 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__16146 = rmap__$1;
var G__16147 = (function (){var or__4212__auto__ = f__$1;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return p__$2;
}
})();
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__16143,G__16144,G__16145,G__16146,G__16147) : cljs.spec.alpha.re_gen.call(null,G__16143,G__16144,G__16145,G__16146,G__16147));
}),null)));
} else {
var G__16148 = p__$2;
var G__16149 = overrides;
var G__16150 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__16151 = rmap__$1;
var G__16152 = (function (){var or__4212__auto__ = f__$1;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return p__$2;
}
})();
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__16148,G__16149,G__16150,G__16151,G__16152) : cljs.spec.alpha.re_gen.call(null,G__16148,G__16149,G__16150,G__16151,G__16152));
}
}
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,ps__$1,(function (){var or__4212__auto__ = cljs.core.seq(ks__$1);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__4212__auto__ = cljs.core.seq(forms__$1);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});
var or__4212__auto__ = (function (){var temp__5753__auto__ = (function (){var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,cljs.spec.alpha.spec_name(origp));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,cljs.spec.alpha.spec_name(p__$1));
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
}
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var gfn__$1 = temp__5753__auto__;
var G__16153 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$accept,G__16153)){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vector,(gfn__$1.cljs$core$IFn$_invoke$arity$0 ? gfn__$1.cljs$core$IFn$_invoke$arity$0() : gfn__$1.call(null))], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__16153)){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vector,(gfn__$1.cljs$core$IFn$_invoke$arity$0 ? gfn__$1.cljs$core$IFn$_invoke$arity$0() : gfn__$1.call(null))], 0));
} else {
return (gfn__$1.cljs$core$IFn$_invoke$arity$0 ? gfn__$1.cljs$core$IFn$_invoke$arity$0() : gfn__$1.call(null));

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = (cljs.core.truth_(gfn)?(gfn.cljs$core$IFn$_invoke$arity$0 ? gfn.cljs$core$IFn$_invoke$arity$0() : gfn.call(null)):null);
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
var G__16154 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__16154)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentVector.EMPTY], 0));
} else {
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null)], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__16154)){
var temp__5753__auto__ = cljs.spec.alpha.gensub(p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__5753__auto__)){
var g = temp__5753__auto__;
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vector,g], 0));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__16154)){
var G__16155 = p1;
var G__16156 = overrides;
var G__16157 = path;
var G__16158 = rmap__$1;
var G__16159 = cljs.spec.alpha.op_describe(p1);
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__16155,G__16156,G__16157,G__16158,G__16159) : cljs.spec.alpha.re_gen.call(null,G__16155,G__16156,G__16157,G__16158,G__16159));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__16154)){
var gens = ggens(ps,ks,forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gens)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__16154)){
var gens = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,ggens(ps,ks,forms));
if(cljs.core.empty_QMARK_(gens)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gens], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__16154)){
if(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id)){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentVector.EMPTY], 0));
} else {
var temp__5753__auto__ = (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(p2,overrides,path,rmap__$1,forms) : cljs.spec.alpha.re_gen.call(null,p2,overrides,path,rmap__$1,forms));
if(cljs.core.truth_(temp__5753__auto__)){
var g = temp__5753__auto__;
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__16141_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__16141_SHARP_);
}),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([g], 0))], 0));
} else {
return null;
}
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16154)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
}
});
cljs.spec.alpha.re_conform = (function cljs$spec$alpha$re_conform(p,p__16160){
while(true){
var vec__16161 = p__16160;
var seq__16162 = cljs.core.seq(vec__16161);
var first__16163 = cljs.core.first(seq__16162);
var seq__16162__$1 = cljs.core.next(seq__16162);
var x = first__16163;
var xs = seq__16162__$1;
var data = vec__16161;
if(cljs.core.empty_QMARK_(data)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p))){
var ret = cljs.spec.alpha.preturn(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)){
return null;
} else {
return ret;
}
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
} else {
var temp__5751__auto__ = cljs.spec.alpha.deriv(p,x);
if(cljs.core.truth_(temp__5751__auto__)){
var dp = temp__5751__auto__;
var G__16164 = dp;
var G__16165 = xs;
p = G__16164;
p__16160 = G__16165;
continue;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
}
break;
}
});
cljs.spec.alpha.re_explain = (function cljs$spec$alpha$re_explain(path,via,in$,re,input){
var p = re;
var G__16169 = input;
var vec__16170 = G__16169;
var seq__16171 = cljs.core.seq(vec__16170);
var first__16172 = cljs.core.first(seq__16171);
var seq__16171__$1 = cljs.core.next(seq__16171);
var x = first__16172;
var xs = seq__16171__$1;
var data = vec__16170;
var i = (0);
var p__$1 = p;
var G__16169__$1 = G__16169;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__16173 = G__16169__$1;
var seq__16174 = cljs.core.seq(vec__16173);
var first__16175 = cljs.core.first(seq__16174);
var seq__16174__$1 = cljs.core.next(seq__16174);
var x__$1 = first__16175;
var xs__$1 = seq__16174__$1;
var data__$1 = vec__16173;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_(data__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p__$2))){
return null;
} else {
return cljs.spec.alpha.op_explain(cljs.spec.alpha.op_describe(p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__5751__auto__ = cljs.spec.alpha.deriv(p__$2,x__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var dp = temp__5751__auto__;
var G__16176 = dp;
var G__16177 = xs__$1;
var G__16178 = (i__$2 + (1));
p__$1 = G__16176;
G__16169__$1 = G__16177;
i__$1 = G__16178;
continue;
} else {
if(cljs.spec.alpha.accept_QMARK_(p__$2)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_op.cljs$core$IFn$_invoke$arity$1(p__$2),cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat)){
return cljs.spec.alpha.op_explain(cljs.spec.alpha.op_describe(p__$2),p__$2,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2),cljs.core.seq(data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$reason,"Extra input",cljs.core.cst$kw$pred,cljs.spec.alpha.op_describe(re),cljs.core.cst$kw$val,data__$1,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2)], null)], null);
}
} else {
var or__4212__auto__ = cljs.spec.alpha.op_explain(cljs.spec.alpha.op_describe(p__$2),p__$2,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2),cljs.core.seq(data__$1));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$reason,"Extra input",cljs.core.cst$kw$pred,cljs.spec.alpha.op_describe(p__$2),cljs.core.cst$kw$val,data__$1,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.alpha.regex_spec_impl = (function cljs$spec$alpha$regex_spec_impl(re,gfn){
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha16179 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha16179 = (function (re,gfn,meta16180){
this.re = re;
this.gfn = gfn;
this.meta16180 = meta16180;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha16179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16181,meta16180__$1){
var self__ = this;
var _16181__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha16179(self__.re,self__.gfn,meta16180__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha16179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16181){
var self__ = this;
var _16181__$1 = this;
return self__.meta16180;
}));

(cljs.spec.alpha.t_cljs$spec$alpha16179.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha16179.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha16179.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha16179.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha16179.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((((x == null)) || (cljs.core.sequential_QMARK_(x)))){
return cljs.spec.alpha.re_conform(self__.re,cljs.core.seq(x));
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha16179.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_unform(self__.re,x);
}));

(cljs.spec.alpha.t_cljs$spec$alpha16179.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if((((x == null)) || (cljs.core.sequential_QMARK_(x)))){
return cljs.spec.alpha.re_explain(path,via,in$,self__.re,cljs.core.seq(x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$_PERCENT_,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_or,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_PERCENT_,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_sequential_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_PERCENT_,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha16179.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.alpha.re_gen(self__.re,overrides,path,rmap,cljs.spec.alpha.op_describe(self__.re));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha16179.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(self__.re,gfn__$1) : cljs.spec.alpha.regex_spec_impl.call(null,self__.re,gfn__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha16179.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_describe(self__.re);
}));

(cljs.spec.alpha.t_cljs$spec$alpha16179.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$re,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta16180], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha16179.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha16179.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha16179");

(cljs.spec.alpha.t_cljs$spec$alpha16179.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.spec.alpha/t_cljs$spec$alpha16179");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha16179.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha16179 = (function cljs$spec$alpha$regex_spec_impl_$___GT_t_cljs$spec$alpha16179(re__$1,gfn__$1,meta16180){
return (new cljs.spec.alpha.t_cljs$spec$alpha16179(re__$1,gfn__$1,meta16180));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha16179(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.call_valid_QMARK_ = (function cljs$spec$alpha$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.alpha.conform(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.spec.alpha.invalid_QMARK_(cargs)){
return null;
} else {
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
var cret = cljs.spec.alpha.conform(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__4210__auto__ = (!(cljs.spec.alpha.invalid_QMARK_(cret)));
if(and__4210__auto__){
if(cljs.core.truth_(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,cargs,cljs.core.cst$kw$ret,cret], null));
} else {
return true;
}
} else {
return and__4210__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.alpha.validate_fn = (function cljs$spec$alpha$validate_fn(f,specs,iters){
var g = cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),(function (p1__16182_SHARP_){
return cljs.spec.alpha.call_valid_QMARK_(f,specs,p1__16182_SHARP_);
})], 0));
var ret = cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([iters,prop], 0));
var temp__5751__auto__ = cljs.core.cst$kw$smallest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$shrunk.cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__5751__auto__)){
var vec__16183 = temp__5751__auto__;
var smallest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16183,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.alpha.fspec_impl = (function cljs$spec$alpha$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$args,argspec,cljs.core.cst$kw$ret,retspec,cljs.core.cst$kw$fn,fnspec], null);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha16186 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.alpha.t_cljs$spec$alpha16186 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta16187){
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta16187 = meta16187;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha16186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16188,meta16187__$1){
var self__ = this;
var _16188__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha16186(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta16187__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha16186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16188){
var self__ = this;
var _16188__$1 = this;
return self__.meta16187;
}));

(cljs.spec.alpha.t_cljs$spec$alpha16186.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.specs,k);
}));

(cljs.spec.alpha.t_cljs$spec$alpha16186.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.specs,k,not_found);
}));

(cljs.spec.alpha.t_cljs$spec$alpha16186.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha16186.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha16186.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha16186.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha16186.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_(f)){
if((f === cljs.spec.alpha.validate_fn(f,self__.specs,cljs.spec.alpha._STAR_fspec_iterations_STAR_))){
return f;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha16186.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
}));

(cljs.spec.alpha.t_cljs$spec$alpha16186.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_(f)){
var args = cljs.spec.alpha.validate_fn(f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}catch (e16189){if((e16189 instanceof Error)){
var t = e16189;
return t;
} else {
throw e16189;

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.list(cljs.core.cst$sym$apply,cljs.core.cst$sym$fn),cljs.core.cst$kw$val,args,cljs.core.cst$kw$reason,ret.message,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
var cret = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(self__.retspec,ret,self__.rform);
if(cljs.spec.alpha.invalid_QMARK_(cret)){
return cljs.spec.alpha.explain_1(self__.rform,self__.retspec,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$ret),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.alpha.conform(self__.argspec,args);
return cljs.spec.alpha.explain_1(self__.fform,self__.fnspec,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$fn),via,in$,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,cargs,cljs.core.cst$kw$ret,cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$kw$val,f,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha16186.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function() { 
var G__16198__delegate = function (args){
if(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(self__.argspec,args)){
} else {
throw (new Error(["Assert failed: ",(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16194_16199 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16195_16200 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16196_16201 = true;
var _STAR_print_fn_STAR__temp_val__16197_16202 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16196_16201);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16197_16202);

try{cljs.spec.alpha.explain(self__.argspec,args);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16195_16200);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16194_16199);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})(),"\n","(pvalid? argspec args)"].join('')));
}

return cljs.spec.gen.alpha.generate(cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(self__.retspec,overrides));
};
var G__16198 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16203__i = 0, G__16203__a = new Array(arguments.length -  0);
while (G__16203__i < G__16203__a.length) {G__16203__a[G__16203__i] = arguments[G__16203__i + 0]; ++G__16203__i;}
  args = new cljs.core.IndexedSeq(G__16203__a,0,null);
} 
return G__16198__delegate.call(this,args);};
G__16198.cljs$lang$maxFixedArity = 0;
G__16198.cljs$lang$applyTo = (function (arglist__16204){
var args = cljs.core.seq(arglist__16204);
return G__16198__delegate(args);
});
G__16198.cljs$core$IFn$_invoke$arity$variadic = G__16198__delegate;
return G__16198;
})()
], 0));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha16186.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.fspec_impl.cljs$core$IFn$_invoke$arity$7 ? cljs.spec.alpha.fspec_impl.cljs$core$IFn$_invoke$arity$7(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1) : cljs.spec.alpha.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha16186.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$args,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,self__.aform,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$ret,null,(1),null)),(new cljs.core.List(null,self__.rform,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$fn,null,(1),null)),(new cljs.core.List(null,self__.fform,null,(1),null))], 0))));
}));

(cljs.spec.alpha.t_cljs$spec$alpha16186.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$argspec,cljs.core.cst$sym$aform,cljs.core.cst$sym$retspec,cljs.core.cst$sym$rform,cljs.core.cst$sym$fnspec,cljs.core.cst$sym$fform,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$meta16187], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha16186.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha16186.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha16186");

(cljs.spec.alpha.t_cljs$spec$alpha16186.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.spec.alpha/t_cljs$spec$alpha16186");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha16186.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha16186 = (function cljs$spec$alpha$fspec_impl_$___GT_t_cljs$spec$alpha16186(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta16187){
return (new cljs.spec.alpha.t_cljs$spec$alpha16186(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta16187));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha16186(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.def_impl(cljs.core.cst$kw$cljs$spec$alpha_SLASH_kvs_DASH__GT_map,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_conformer,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__16205_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_zipmap,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$p1__16205_SHARP_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$p1__16205_SHARP_))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__16206_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k,cljs.core.cst$sym$v], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$k,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$v], null)),cljs.core.cst$sym$p1__16206_SHARP_))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_conformer,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_zipmap,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$_PERCENT_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$_PERCENT_))),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k,cljs.core.cst$sym$v], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$k,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$v], null)),cljs.core.cst$sym$_PERCENT_))),(function (p1__16205_SHARP_){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,p1__16205_SHARP_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,p1__16205_SHARP_));
}),null,true,(function (p1__16206_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16207){
var vec__16208 = p__16207;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16208,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16208,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,k,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,v], null);
}),p1__16206_SHARP_);
})));
/**
 * takes a spec and returns a spec that has the same properties except
 *   'conform' returns the original (not the conformed) value. Note, will specize regex ops.
 */
cljs.spec.alpha.nonconforming = (function cljs$spec$alpha$nonconforming(spec){
var spec__$1 = (new cljs.core.Delay((function (){
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec);
}),null));
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha16211 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha16211 = (function (spec,meta16212){
this.spec = spec;
this.meta16212 = meta16212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha16211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16213,meta16212__$1){
var self__ = this;
var _16213__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha16211(self__.spec,meta16212__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha16211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16213){
var self__ = this;
var _16213__$1 = this;
return self__.meta16212;
}));

(cljs.spec.alpha.t_cljs$spec$alpha16211.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha16211.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha16211.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha16211.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha16211.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = cljs.spec.alpha.conform_STAR_(cljs.core.deref(self__.spec),x);
if(cljs.spec.alpha.invalid_QMARK_(ret)){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return x;
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha16211.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.unform_STAR_(cljs.core.deref(self__.spec),x);
}));

(cljs.spec.alpha.t_cljs$spec$alpha16211.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_STAR_(cljs.core.deref(self__.spec),path,via,in$,x);
}));

(cljs.spec.alpha.t_cljs$spec$alpha16211.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.gen_STAR_(cljs.core.deref(self__.spec),overrides,path,rmap);
}));

(cljs.spec.alpha.t_cljs$spec$alpha16211.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn){
var self__ = this;
var ___$1 = this;
var G__16214 = cljs.spec.alpha.with_gen_STAR_(cljs.core.deref(self__.spec),gfn);
return (cljs.spec.alpha.nonconforming.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.nonconforming.cljs$core$IFn$_invoke$arity$1(G__16214) : cljs.spec.alpha.nonconforming.call(null,G__16214));
}));

(cljs.spec.alpha.t_cljs$spec$alpha16211.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_nonconforming,null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha.describe_STAR_(cljs.core.deref(self__.spec)),null,(1),null)))));
}));

(cljs.spec.alpha.t_cljs$spec$alpha16211.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$spec,cljs.core.cst$sym$meta16212], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha16211.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha16211.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha16211");

(cljs.spec.alpha.t_cljs$spec$alpha16211.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.spec.alpha/t_cljs$spec$alpha16211");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha16211.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha16211 = (function cljs$spec$alpha$nonconforming_$___GT_t_cljs$spec$alpha16211(spec__$2,meta16212){
return (new cljs.spec.alpha.t_cljs$spec$alpha16211(spec__$2,meta16212));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha16211(spec__$1,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'nilable'
 */
cljs.spec.alpha.nilable_impl = (function cljs$spec$alpha$nilable_impl(form,pred,gfn){
var spec = (new cljs.core.Delay((function (){
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2(pred,form);
}),null));
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha16215 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha16215 = (function (form,pred,gfn,spec,meta16216){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.spec = spec;
this.meta16216 = meta16216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha16215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16217,meta16216__$1){
var self__ = this;
var _16217__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha16215(self__.form,self__.pred,self__.gfn,self__.spec,meta16216__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha16215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16217){
var self__ = this;
var _16217__$1 = this;
return self__.meta16216;
}));

(cljs.spec.alpha.t_cljs$spec$alpha16215.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha16215.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha16215.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha16215.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha16215.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.conform_STAR_(cljs.core.deref(self__.spec),x);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha16215.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.unform_STAR_(cljs.core.deref(self__.spec),x);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha16215.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.spec),x)) || ((x == null)))){
return null;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.explain_1(self__.form,self__.pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pred),via,in$,x),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil),cljs.core.cst$kw$pred,cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha16215.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay((function (){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
}),null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay((function (){
return cljs.spec.alpha.gensub(self__.pred,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pred),rmap,self__.form);
}),null)))], null)], null)], 0));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha16215.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.nilable_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.nilable_impl.cljs$core$IFn$_invoke$arity$3(self__.form,self__.pred,gfn__$1) : cljs.spec.alpha.nilable_impl.call(null,self__.form,self__.pred,gfn__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha16215.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)))));
}));

(cljs.spec.alpha.t_cljs$spec$alpha16215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$pred,cljs.core.cst$sym$gfn,cljs.core.cst$sym$spec,cljs.core.cst$sym$meta16216], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha16215.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha16215.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha16215");

(cljs.spec.alpha.t_cljs$spec$alpha16215.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.spec.alpha/t_cljs$spec$alpha16215");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha16215.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha16215 = (function cljs$spec$alpha$nilable_impl_$___GT_t_cljs$spec$alpha16215(form__$1,pred__$1,gfn__$1,spec__$1,meta16216){
return (new cljs.spec.alpha.t_cljs$spec$alpha16215(form__$1,pred__$1,gfn__$1,spec__$1,meta16216));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha16215(form,pred,gfn,spec,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.alpha.exercise = (function cljs$spec$alpha$exercise(var_args){
var G__16220 = arguments.length;
switch (G__16220) {
case 1:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2(spec,(10));
}));

(cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3(spec,n,null);
}));

(cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16218_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__16218_SHARP_,cljs.spec.alpha.conform(spec,p1__16218_SHARP_)],null));
}),cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(spec,overrides),n], 0)));
}));

(cljs.spec.alpha.exercise.cljs$lang$maxFixedArity = 3);

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.alpha.inst_in_range_QMARK_ = (function cljs$spec$alpha$inst_in_range_QMARK_(start,end,inst){
var and__4210__auto__ = cljs.core.inst_QMARK_(inst);
if(and__4210__auto__){
var t = cljs.core.inst_ms(inst);
return (((cljs.core.inst_ms(start) <= t)) && ((t < cljs.core.inst_ms(end))));
} else {
return and__4210__auto__;
}
});
/**
 * Return true if start <= val, val < end and val is a fixed
 *   precision integer.
 */
cljs.spec.alpha.int_in_range_QMARK_ = (function cljs$spec$alpha$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_(val)){
return (((start <= val)) && ((val < end)));
} else {
if((val instanceof goog.math.Long)){
var and__4210__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__4210__auto__)){
return val.lessThan(end);
} else {
return and__4210__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__4210__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__4210__auto__)){
return val.lessThan(end);
} else {
return and__4210__auto__;
}
} else {
return false;

}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha._STAR_compile_asserts_STAR_ !== 'undefined')){
} else {
/**
 * If true, compiler will enable spec asserts, which are then
 * subject to runtime control via check-asserts? If false, compiler
 * will eliminate all spec assert overhead. See 'assert'.
 * Initially set to the negation of the ':elide-asserts' compiler option.
 * Defaults to true.
 */
cljs.spec.alpha._STAR_compile_asserts_STAR_ = true;
}
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha._STAR_runtime_asserts_STAR_ !== 'undefined')){
} else {
cljs.spec.alpha._STAR_runtime_asserts_STAR_ = false;
}
/**
 * Returns the value set by check-asserts.
 */
cljs.spec.alpha.check_asserts_QMARK_ = (function cljs$spec$alpha$check_asserts_QMARK_(){
return cljs.spec.alpha._STAR_runtime_asserts_STAR_;
});
/**
 * Enable or disable spec asserts that have been compiled
 * with '*compile-asserts*' true.  See 'assert'.
 * Initially set to boolean value of cljs.spec.alpha/*runtime-asserts*.
 * Defaults to false.
 */
cljs.spec.alpha.check_asserts = (function cljs$spec$alpha$check_asserts(flag){
return (cljs.spec.alpha._STAR_runtime_asserts_STAR_ = flag);
});
/**
 * Do not call this directly, use 'assert'.
 */
cljs.spec.alpha.assert_STAR_ = (function cljs$spec$alpha$assert_STAR_(spec,x){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,x)){
return x;
} else {
var ed = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.explain_data_STAR_(spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,x),cljs.core.cst$kw$cljs$spec$alpha_SLASH_failure,cljs.core.cst$kw$assertion_DASH_failed)], 0));
throw (new Error(["Spec assertion failed\n",(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16226_16230 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16227_16231 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16228_16232 = true;
var _STAR_print_fn_STAR__temp_val__16229_16233 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16228_16232);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16229_16233);

try{cljs.spec.alpha.explain_out(ed);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16227_16231);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16226_16230);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})()].join('')));
}
});
