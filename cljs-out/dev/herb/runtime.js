// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('herb.runtime');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('goog.object');
goog.require('garden.core');
goog.require('garden.selectors');
herb.runtime.dev_QMARK_ = goog.DEBUG;
if((typeof herb !== 'undefined') && (typeof herb.runtime !== 'undefined') && (typeof herb.runtime.injected_styles !== 'undefined')){
} else {
/**
 * Atom containing all styles added to DOM. Takes the form of a map with
 *   classnames as keys. The map entry contains a `:data` which is Herb's
 *   representation of a style unit, `:data-string` which is what is used as the
 *   style data attribute in DOM, and `:css` which contains the rendered CSS
 *   string.
 */
herb.runtime.injected_styles = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof herb !== 'undefined') && (typeof herb.runtime !== 'undefined') && (typeof herb.runtime.injected_keyframes !== 'undefined')){
} else {
/**
 * Atom containing all keyframe CSS added to DOM. Takes the form of a map
 *   with a namespace as a key. A map entry contains the keys `:data` which is herb's
 *   representation of a keyframe unit and `:css` which is the rendered CSS
 *   string
 */
herb.runtime.injected_keyframes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof herb !== 'undefined') && (typeof herb.runtime !== 'undefined') && (typeof herb.runtime.injected_global !== 'undefined')){
} else {
/**
 * Atom containing all global style added to DOM. Takes the form of a map
 *   with namespace as keys. A map entry contains `:data` which is a collection of
 *   global styles for a given via defglobal call and `:css` that contains the
 *   rendered CSS
 */
herb.runtime.injected_global = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof herb !== 'undefined') && (typeof herb.runtime !== 'undefined') && (typeof herb.runtime.options !== 'undefined')){
} else {
/**
 * Atom containing a map with options passed from `herb.core/init!`.
 *   Entry includes `:vendors` and `:auto-prefix`
 */
herb.runtime.options = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Either update a style in state, or create it depending on existing state.
 */
herb.runtime.update_state = (function herb$runtime$update_state(state,ident,p__14876,css){
var map__14877 = p__14876;
var map__14877__$1 = cljs.core.__destructure_map(map__14877);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14877__$1,cljs.core.cst$kw$data);
var data_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14877__$1,cljs.core.cst$kw$data_DASH_string);
var element = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14877__$1,cljs.core.cst$kw$element);
var css__$1 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(herb.runtime.injected_styles),ident);
if(cljs.core.truth_(temp__5751__auto__)){
var old = temp__5751__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$css.cljs$core$IFn$_invoke$arity$1(old)),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(css)].join('');
} else {
return css;
}
})();
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident,cljs.core.cst$kw$data,cljs.core.first(data)], null),cljs.core.last(data)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident,cljs.core.cst$kw$data_DASH_string], null),data_string),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident,cljs.core.cst$kw$element], null),element),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident,cljs.core.cst$kw$css], null),css__$1);
});
herb.runtime.combinator_fns = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$_GT_,garden.selectors._GT_,cljs.core.cst$kw$_PLUS_,garden.selectors._PLUS_,cljs.core.cst$kw$_DASH_,garden.selectors._,cljs.core.cst$kw$descendant,garden.selectors.descendant], null);
/**
 * Renders CSS, and appends to DOM. Ensure state is in sync with DOM.
 */
herb.runtime.render_style_BANG_ = (function herb$runtime$render_style_BANG_(identifier,new$){
var style = (function (){var vec__14878 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(new$);
var classname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14878,(0),null);
var map__14881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14878,(1),null);
var map__14881__$1 = cljs.core.__destructure_map(map__14881);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14881__$1,cljs.core.cst$kw$style);
var pseudo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14881__$1,cljs.core.cst$kw$pseudo);
var media = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14881__$1,cljs.core.cst$kw$media);
var supports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14881__$1,cljs.core.cst$kw$supports);
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14881__$1,cljs.core.cst$kw$prefix);
var vendors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14881__$1,cljs.core.cst$kw$vendors);
var combinators = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14881__$1,cljs.core.cst$kw$combinators);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [classname,cljs.core.with_meta(style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$prefix,prefix,cljs.core.cst$kw$vendors,vendors], null)),pseudo,media,supports], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14882){
var vec__14883 = p__14882;
var vec__14886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14883,(0),null);
var seq__14887 = cljs.core.seq(vec__14886);
var first__14888 = cljs.core.first(seq__14887);
var seq__14887__$1 = cljs.core.next(seq__14887);
var combinator = first__14888;
var elements = seq__14887__$1;
var style__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14883,(1),null);
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(herb.runtime.combinator_fns,combinator);
if(cljs.core.truth_(temp__5751__auto__)){
var cfn = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cfn,classname,elements),style__$1], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unsupported combinator function ",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$combinator,combinator,cljs.core.cst$kw$elements,elements,cljs.core.cst$kw$style,style__$1], null));
}
}),combinators)], null)], null);
})();
var css_str = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$vendors,cljs.core.seq(cljs.core.cst$kw$vendors.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(herb.runtime.options))),cljs.core.cst$kw$pretty_DASH_print_QMARK_,herb.runtime.dev_QMARK_,cljs.core.cst$kw$auto_DASH_prefix,cljs.core.seq(cljs.core.cst$kw$auto_DASH_prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(herb.runtime.options)))], null),style], 0));
goog.dom.append(cljs.core.cst$kw$element.cljs$core$IFn$_invoke$arity$1(new$),["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_str)].join(''));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(herb.runtime.injected_styles,herb.runtime.update_state,identifier,new$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([css_str], 0));
});
/**
 * Create an element in the DOM with an optional data-herb attribute
 */
herb.runtime.create_element_BANG_ = (function herb$runtime$create_element_BANG_(attr){
var head = document.head;
if((!((head == null)))){
} else {
throw (new Error(["Assert failed: ","An head element is required in the dom to inject the style.","\n","(some? head)"].join('')));
}

var element = document.createElement("style");
element.setAttribute("type","text/css");

if(cljs.core.truth_(attr)){
element.setAttribute("data-herb",attr);
} else {
}

head.appendChild(element);

return element;
});
/**
 * Create a style element in head if identifier is not already present Attach a
 *   data attr with namespace and call render-style with new element
 */
herb.runtime.create_style_BANG_ = (function herb$runtime$create_style_BANG_(identifier,new$,data_str){
var element = herb.runtime.create_element_BANG_(data_str);
return herb.runtime.render_style_BANG_(identifier,(function (){var G__14889 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,new$,cljs.core.cst$kw$element,element], null);
if(cljs.core.truth_(data_str)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14889,cljs.core.cst$kw$data_DASH_string,data_str);
} else {
return G__14889;
}
})());
});
/**
 * Main interface to runtime. Takes an identifier, new garden style data
 *   structure, fully qualified name. Make sure to add style only where
 *   necessary. Returns the injected style state object.
 */
herb.runtime.inject_style_BANG_ = (function herb$runtime$inject_style_BANG_(identifier,new$,data_str){
var injected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(herb.runtime.injected_styles),identifier);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(injected),cljs.core.first(new$));
if(cljs.core.not(injected)){
herb.runtime.create_style_BANG_(identifier,new$,data_str);
} else {
if((((!((injected == null)))) && (cljs.core.not(target)))){
herb.runtime.render_style_BANG_(identifier,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$data,new$,cljs.core.cst$kw$element,cljs.core.cst$kw$element.cljs$core$IFn$_invoke$arity$1(injected),cljs.core.cst$kw$data_DASH_string,data_str], null));
} else {
}
}

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(herb.runtime.injected_styles),identifier);
});
/**
 * Inject collection of style objects in a common element, used by passing a
 *   dispatch in the form of :keyframes or :global
 */
herb.runtime.inject_obj_BANG_ = (function herb$runtime$inject_obj_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___14894 = arguments.length;
var i__4819__auto___14895 = (0);
while(true){
if((i__4819__auto___14895 < len__4818__auto___14894)){
args__4824__auto__.push((arguments[i__4819__auto___14895]));

var G__14896 = (i__4819__auto___14895 + (1));
i__4819__auto___14895 = G__14896;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return herb.runtime.inject_obj_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(herb.runtime.inject_obj_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (sym,dispatch,obj){
var state = (function (){var G__14893 = dispatch;
var G__14893__$1 = (((G__14893 instanceof cljs.core.Keyword))?G__14893.fqn:null);
switch (G__14893__$1) {
case "global":
return herb.runtime.injected_global;

break;
case "keyframes":
return herb.runtime.injected_keyframes;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14893__$1)].join('')));

}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),sym)),obj)){
return null;
} else {
var css_str = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pretty_DASH_print_QMARK_,herb.runtime.dev_QMARK_], null),obj], 0));
var element_14898 = (function (){var or__4212__auto__ = document.querySelector(["style[data-herb=\"",cljs.core.name(dispatch),"\"]"].join(''));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return herb.runtime.create_element_BANG_(cljs.core.name(dispatch));
}
})();
var inner_html_14899 = goog.object.get(element_14898,"innerHTML");
goog.object.set(element_14898,"innerHTML",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(inner_html_14899),((herb.runtime.dev_QMARK_)?"\n":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_str)].join(''));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,sym,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,obj,cljs.core.cst$kw$css,css_str], null));
}
}));

(herb.runtime.inject_obj_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(herb.runtime.inject_obj_BANG_.cljs$lang$applyTo = (function (seq14890){
var G__14891 = cljs.core.first(seq14890);
var seq14890__$1 = cljs.core.next(seq14890);
var G__14892 = cljs.core.first(seq14890__$1);
var seq14890__$2 = cljs.core.next(seq14890__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14891,G__14892,seq14890__$2);
}));

