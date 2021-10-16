// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('herb.impl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('herb.runtime');
goog.require('garden.stylesheet');
herb.impl.dev_QMARK_ = goog.DEBUG;
herb.impl.convert_pseudo = (function herb$impl$convert_pseudo(pseudos){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14942){
var vec__14943 = p__14942;
var kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14943,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14943,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["&",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kw)].join('')),p], null);
}),pseudos);
});
herb.impl.convert_media = (function herb$impl$convert_media(media){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14946){
var vec__14947 = p__14946;
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14947,(0),null);
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14947,(1),null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic(query,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND_,style], null)], 0));
}),media);
});
herb.impl.convert_supports = (function herb$impl$convert_supports(supports){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14950){
var vec__14951 = p__14950;
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14951,(0),null);
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14951,(1),null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic(query,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND_,style], null)], 0));
}),supports);
});
herb.impl.convert_vendors = (function herb$impl$convert_vendors(vendors){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.name,vendors);
});
/**
 * Calls each function provided in a collection of style-fns. Input can take
 *   multiple forms depending on how it got called from the consumer side either
 *   using the macro directly or via extend meta data. Takes a collection of
 *   `style-fns`  and returns a vector with the resolved style maps.
 */
herb.impl.resolve_style_fns = (function herb$impl$resolve_style_fns(style_fns){
var sf = style_fns;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(sf)){
return result;
} else {
var input = cljs.core.first(sf);
if(cljs.core.fn_QMARK_(input)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(input,cljs.core.rest(sf)));
} else {
if(((cljs.core.coll_QMARK_(input)) && (cljs.core.fn_QMARK_(cljs.core.first(input))))){
var style_fn = cljs.core.first(input);
var style_args = cljs.core.rest(input);
var G__14954 = cljs.core.rest(sf);
var G__14955 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(style_fn,style_args));
sf = G__14954;
result = G__14955;
continue;
} else {
var G__14956 = cljs.core.rest(sf);
var G__14957 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,(herb.impl.resolve_style_fns.cljs$core$IFn$_invoke$arity$1 ? herb.impl.resolve_style_fns.cljs$core$IFn$_invoke$arity$1(input) : herb.impl.resolve_style_fns.call(null,input)));
sf = G__14956;
result = G__14957;
continue;

}
}
}
break;
}
});
/**
 * Return a transducer that pulls out a given meta type from a sequence and filter
 *   out nil values
 */
herb.impl.process_meta_xform = (function herb$impl$process_meta_xform(meta_type){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.meta),cljs.core.map.cljs$core$IFn$_invoke$arity$1(meta_type),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.identity));
});
/**
 * Extract all the `:extend` meta, ensuring what we walk the entire tree, passing
 *   each extend vector of style-fns to `resolve-style-fns` for resolution. Returns
 *   vector of resolved styles
 */
herb.impl.extract_extended_styles = (function herb$impl$extract_extended_styles(style_fns){
var sf = style_fns;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.fn_QMARK_(sf)){
var G__14958 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sf], null);
var G__14959 = result;
sf = G__14958;
result = G__14959;
continue;
} else {
if(((cljs.core.vector_QMARK_(sf)) && (cljs.core.seq(sf)))){
var styles = herb.impl.resolve_style_fns(sf);
var new_meta = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,herb.impl.process_meta_xform(cljs.core.cst$kw$extend),styles);
var G__14960 = new_meta;
var G__14961 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(styles,result);
sf = G__14960;
result = G__14961;
continue;
} else {
return result;

}
}
break;
}
});
/**
 * Takes a group of resolved styles and a meta type. Pull out each meta obj and
 *   merge to prevent duplicates, finally convert to garden acceptable input and
 *   return
 */
herb.impl.extract_meta = (function herb$impl$extract_meta(styles,meta_type){
var convert_fn = (function (){var G__14962 = meta_type;
var G__14962__$1 = (((G__14962 instanceof cljs.core.Keyword))?G__14962.fqn:null);
switch (G__14962__$1) {
case "media":
return herb.impl.convert_media;

break;
case "supports":
return herb.impl.convert_supports;

break;
case "prefix":
return cljs.core.identity;

break;
case "vendors":
return herb.impl.convert_vendors;

break;
case "pseudo":
return herb.impl.convert_pseudo;

break;
case "combinators":
return cljs.core.identity;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14962__$1)].join('')));

}
})();
var extracted = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,herb.impl.process_meta_xform(meta_type),styles);
if(cljs.core.seq(extracted)){
var merged = (function (){var G__14963 = meta_type;
var G__14963__$1 = (((G__14963 instanceof cljs.core.Keyword))?G__14963.fqn:null);
switch (G__14963__$1) {
case "prefix":
return cljs.core.last(extracted);

break;
case "vendors":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,extracted);

break;
default:
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,extracted);

}
})();
return (convert_fn.cljs$core$IFn$_invoke$arity$1 ? convert_fn.cljs$core$IFn$_invoke$arity$1(merged) : convert_fn.call(null,merged));
} else {
return null;
}
});
/**
 * Prepare `resolved-styles` so they can be passed to `garden.core/css` Merge
 *   the styles to remove duplicate entries and ensuring precedence. Extract all
 *   meta and return a final vector of styles including meta.
 */
herb.impl.prepare_data = (function herb$impl$prepare_data(resolved_styles){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$style,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,resolved_styles),cljs.core.cst$kw$pseudo,herb.impl.extract_meta(resolved_styles,cljs.core.cst$kw$pseudo),cljs.core.cst$kw$vendors,herb.impl.extract_meta(resolved_styles,cljs.core.cst$kw$vendors),cljs.core.cst$kw$prefix,herb.impl.extract_meta(resolved_styles,cljs.core.cst$kw$prefix),cljs.core.cst$kw$supports,herb.impl.extract_meta(resolved_styles,cljs.core.cst$kw$supports),cljs.core.cst$kw$media,herb.impl.extract_meta(resolved_styles,cljs.core.cst$kw$media),cljs.core.cst$kw$combinators,herb.impl.extract_meta(resolved_styles,cljs.core.cst$kw$combinators)], null);
});
/**
 * Takes `input` and remove any non-valid characters
 */
herb.impl.sanitize = (function herb$impl$sanitize(input){
if(cljs.core.truth_(input)){
if((input instanceof cljs.core.Keyword)){
var G__14966 = cljs.core.name(input);
return (herb.impl.sanitize.cljs$core$IFn$_invoke$arity$1 ? herb.impl.sanitize.cljs$core$IFn$_invoke$arity$1(G__14966) : herb.impl.sanitize.call(null,G__14966));
} else {
return clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(input),/[^A-Za-z0-9-_]/,"_");

}
} else {
return null;
}
});
herb.impl.compose_selector = (function herb$impl$compose_selector(n,hsh,kind,hint){
return [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,cljs.core.cst$kw$id))?"#":"."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(herb.impl.sanitize(n)),(cljs.core.truth_((function (){var and__4210__auto__ = hint;
if(cljs.core.truth_(and__4210__auto__)){
return herb.impl.dev_QMARK_;
} else {
return and__4210__auto__;
}
})())?["_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(herb.impl.sanitize(hint))].join(''):null),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hsh)].join('');
});
/**
 * Create a fully qualified name string for use in the data-herb attr
 */
herb.impl.create_data_string = (function herb$impl$create_data_string(n){
var c = clojure.string.split.cljs$core$IFn$_invoke$arity$2(n,/\//);
var ns = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(".",cljs.core.butlast(c)));
var sym = cljs.core.last(c);
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,sym));
});
herb.impl.get_name = (function herb$impl$get_name(style_fn,ns_name){
var name_STAR_ = style_fn.name;
var anon_QMARK_ = cljs.core.empty_QMARK_(name_STAR_);
var cname = ((((anon_QMARK_) && ((!(herb.impl.dev_QMARK_)))))?"A-":((((herb.impl.dev_QMARK_) && (anon_QMARK_)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),"/","anonymous"].join(''):name_STAR_
));
if(herb.impl.dev_QMARK_){
return cljs.core.demunge(cname);
} else {
return cname;
}
});
/**
 * Entry point for macros.
 *   Takes an `opt` map as first argument, and currently only supports `:id true`
 *   which appends an id identifier instead of a class to the DOM
 */
herb.impl.with_style_BANG_ = (function herb$impl$with_style_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___14972 = arguments.length;
var i__4819__auto___14973 = (0);
while(true){
if((i__4819__auto___14973 < len__4818__auto___14972)){
args__4824__auto__.push((arguments[i__4819__auto___14973]));

var G__14974 = (i__4819__auto___14973 + (1));
i__4819__auto___14973 = G__14974;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((4) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((4)),(0),null)):null);
return herb.impl.with_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4825__auto__);
});

(herb.impl.with_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (kind,fn_name,ns_name,style_fn,args){
var name_STAR_ = herb.impl.get_name(style_fn,ns_name);
var resolved_styles = herb.impl.extract_extended_styles(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [style_fn], null),args));
var style_data = herb.impl.prepare_data(resolved_styles);
var hint = cljs.core.cst$kw$hint.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.last(resolved_styles)));
var selector = herb.impl.compose_selector(name_STAR_,cljs.core.hash(style_data),kind,hint);
var identifier = herb.impl.sanitize(name_STAR_);
var data_str = ((herb.impl.dev_QMARK_)?herb.impl.create_data_string(name_STAR_):null);
var result = herb.runtime.inject_style_BANG_(identifier,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector,style_data], null),data_str);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,cljs.core.cst$kw$style)){
return cljs.core.cst$kw$css.cljs$core$IFn$_invoke$arity$1(result);
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(selector,(1));
}
}));

(herb.impl.with_style_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(herb.impl.with_style_BANG_.cljs$lang$applyTo = (function (seq14967){
var G__14968 = cljs.core.first(seq14967);
var seq14967__$1 = cljs.core.next(seq14967);
var G__14969 = cljs.core.first(seq14967__$1);
var seq14967__$2 = cljs.core.next(seq14967__$1);
var G__14970 = cljs.core.first(seq14967__$2);
var seq14967__$3 = cljs.core.next(seq14967__$2);
var G__14971 = cljs.core.first(seq14967__$3);
var seq14967__$4 = cljs.core.next(seq14967__$3);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14968,G__14969,G__14970,G__14971,seq14967__$4);
}));

