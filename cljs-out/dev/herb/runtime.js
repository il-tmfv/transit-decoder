// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
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
herb.runtime.update_state = (function herb$runtime$update_state(state,ident,p__15213,css){
var map__15214 = p__15213;
var map__15214__$1 = (((((!((map__15214 == null))))?(((((map__15214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15214):map__15214);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15214__$1,cljs.core.cst$kw$data);
var data_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15214__$1,cljs.core.cst$kw$data_DASH_string);
var element = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15214__$1,cljs.core.cst$kw$element);
var css__$1 = (function (){var temp__5455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(herb.runtime.injected_styles),ident);
if(cljs.core.truth_(temp__5455__auto__)){
var old = temp__5455__auto__;
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
var style = (function (){var vec__15216 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(new$);
var classname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15216,(0),null);
var map__15219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15216,(1),null);
var map__15219__$1 = (((((!((map__15219 == null))))?(((((map__15219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15219):map__15219);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15219__$1,cljs.core.cst$kw$style);
var pseudo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15219__$1,cljs.core.cst$kw$pseudo);
var media = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15219__$1,cljs.core.cst$kw$media);
var supports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15219__$1,cljs.core.cst$kw$supports);
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15219__$1,cljs.core.cst$kw$prefix);
var vendors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15219__$1,cljs.core.cst$kw$vendors);
var combinators = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15219__$1,cljs.core.cst$kw$combinators);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [classname,cljs.core.with_meta(style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$prefix,prefix,cljs.core.cst$kw$vendors,vendors], null)),pseudo,media,supports], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__15216,classname,map__15219,map__15219__$1,style,pseudo,media,supports,prefix,vendors,combinators){
return (function (p__15221){
var vec__15222 = p__15221;
var vec__15225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15222,(0),null);
var seq__15226 = cljs.core.seq(vec__15225);
var first__15227 = cljs.core.first(seq__15226);
var seq__15226__$1 = cljs.core.next(seq__15226);
var combinator = first__15227;
var elements = seq__15226__$1;
var style__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15222,(1),null);
var temp__5455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(herb.runtime.combinator_fns,combinator);
if(cljs.core.truth_(temp__5455__auto__)){
var cfn = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cfn,classname,elements),style__$1], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unsupported combinator function ",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$combinator,combinator,cljs.core.cst$kw$elements,elements,cljs.core.cst$kw$style,style__$1], null));
}
});})(vec__15216,classname,map__15219,map__15219__$1,style,pseudo,media,supports,prefix,vendors,combinators))
,combinators)], null)], null);
})();
var css_str = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$vendors,cljs.core.seq(cljs.core.cst$kw$vendors.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(herb.runtime.options))),cljs.core.cst$kw$pretty_DASH_print_QMARK_,herb.runtime.dev_QMARK_,cljs.core.cst$kw$auto_DASH_prefix,cljs.core.seq(cljs.core.cst$kw$auto_DASH_prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(herb.runtime.options)))], null),style], 0));
var G__15228_15230 = cljs.core.cst$kw$element.cljs$core$IFn$_invoke$arity$1(new$);
var G__15229_15231 = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_str)].join('');
goog.dom.append(G__15228_15230,G__15229_15231);

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
return herb.runtime.render_style_BANG_(identifier,(function (){var G__15232 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,new$,cljs.core.cst$kw$element,element], null);
if(cljs.core.truth_(data_str)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15232,cljs.core.cst$kw$data_DASH_string,data_str);
} else {
return G__15232;
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
var args__4736__auto__ = [];
var len__4730__auto___15240 = arguments.length;
var i__4731__auto___15241 = (0);
while(true){
if((i__4731__auto___15241 < len__4730__auto___15240)){
args__4736__auto__.push((arguments[i__4731__auto___15241]));

var G__15242 = (i__4731__auto___15241 + (1));
i__4731__auto___15241 = G__15242;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return herb.runtime.inject_obj_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

herb.runtime.inject_obj_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (sym,dispatch,obj){
var state = (function (){var G__15236 = dispatch;
var G__15236__$1 = (((G__15236 instanceof cljs.core.Keyword))?G__15236.fqn:null);
switch (G__15236__$1) {
case "global":
return herb.runtime.injected_global;

break;
case "keyframes":
return herb.runtime.injected_keyframes;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15236__$1)].join('')));

}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),sym)),obj)){
return null;
} else {
var css_str = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pretty_DASH_print_QMARK_,herb.runtime.dev_QMARK_], null),obj], 0));
var element_15244 = (function (){var or__4131__auto__ = document.querySelector(["style[data-herb=\"",cljs.core.name(dispatch),"\"]"].join(''));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return herb.runtime.create_element_BANG_(cljs.core.name(dispatch));
}
})();
var inner_html_15245 = goog.object.get(element_15244,"innerHTML");
var G__15237_15246 = element_15244;
var G__15238_15247 = "innerHTML";
var G__15239_15248 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inner_html_15245),((herb.runtime.dev_QMARK_)?"\n":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_str)].join('');
goog.object.set(G__15237_15246,G__15238_15247,G__15239_15248);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,sym,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,obj,cljs.core.cst$kw$css,css_str], null));
}
});

herb.runtime.inject_obj_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
herb.runtime.inject_obj_BANG_.cljs$lang$applyTo = (function (seq15233){
var G__15234 = cljs.core.first(seq15233);
var seq15233__$1 = cljs.core.next(seq15233);
var G__15235 = cljs.core.first(seq15233__$1);
var seq15233__$2 = cljs.core.next(seq15233__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15234,G__15235,seq15233__$2);
});

