// Compiled by ClojureScript 0.0-3291 {:static-fns true, :optimize-constants true}
goog.provide('markdown.transformers');
goog.require('cljs.core');
goog.require('clojure.string');
markdown.transformers.heading_QMARK_ = (function markdown$transformers$heading_QMARK_(text,type){
if(cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [" ",null], null), null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),text))){
return null;
} else {
var trimmed = (cljs.core.truth_(text)?clojure.string.trim(text):null);
var and__4297__auto__ = cljs.core.not_empty(trimmed);
if(cljs.core.truth_(and__4297__auto__)){
return cljs.core.every_QMARK_(cljs.core.PersistentHashSet.fromArray([type], true),trimmed);
} else {
return and__4297__auto__;
}
}
});
markdown.transformers.h1_QMARK_ = (function markdown$transformers$h1_QMARK_(text){
return markdown.transformers.heading_QMARK_(text,"=");
});
markdown.transformers.h2_QMARK_ = (function markdown$transformers$h2_QMARK_(text){
return markdown.transformers.heading_QMARK_(text,"-");
});
markdown.transformers.empty_line = (function markdown$transformers$empty_line(text,state){
if(cljs.core.truth_((function (){var or__4309__auto__ = cljs.core.constant$keyword$code.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cljs.core.constant$keyword$codeblock.cljs$core$IFn$_invoke$arity$1(state);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__4309__auto__ = markdown.transformers.h1_QMARK_(text);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return markdown.transformers.h2_QMARK_(text);
}
})())?"":text),(cljs.core.truth_(clojure.string.blank_QMARK_(text))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.constant$keyword$hr,cljs.core.array_seq([cljs.core.constant$keyword$heading], 0)):state)], null);
}
});
markdown.transformers.escape_code = (function markdown$transformers$escape_code(s){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(s,/&/,"&amp;"),/\*/,"&#42;"),/\^/,"&#94;"),/\_/,"&#95;"),/\~/,"&#126;"),/\</,"&lt;"),/\>/,"&gt;"),/\[/,"&#91;"),/\]/,"&#93;"),/\(/,"&#40;"),/\)/,"&#41;"),/\"/,"&quot;");
});
markdown.transformers.escape_link = (function markdown$transformers$escape_link(){
var argseq__5349__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return markdown.transformers.escape_link.cljs$core$IFn$_invoke$arity$variadic(argseq__5349__auto__);
});

markdown.transformers.escape_link.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.seq(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,xs)),/\*/,"&#42;"),/\^/,"&#94;"),/\_/,"&#95;"),/\~/,"&#126;"));
});

markdown.transformers.escape_link.cljs$lang$maxFixedArity = (0);

markdown.transformers.escape_link.cljs$lang$applyTo = (function (seq19876){
return markdown.transformers.escape_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19876));
});
markdown.transformers.escaped_chars = (function markdown$transformers$escaped_chars(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__4309__auto__ = cljs.core.constant$keyword$code.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cljs.core.constant$keyword$codeblock.cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(text,/\\\\/,"&#92;"),/\\`/,"&#8216;"),/\\\*/,"&#42;"),/\\_/,"&#95;"),/\\\{/,"&#123;"),/\\\}/,"&#125;"),/\\\[/,"&#91;"),/\\\]/,"&#93;"),/\\\(/,"&#40;"),/\\\)/,"&#41;"),/\\#/,"&#35;"),/\\\+/,"&#43;"),/\\-/,"&#45;"),/\\\./,"&#46;"),/\\!/,"&#33;")),state], null);
});
markdown.transformers.separator = (function markdown$transformers$separator(escape_QMARK_,text,open,close,separator__$1,state){
if(cljs.core.truth_(cljs.core.constant$keyword$code.cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var buf = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.first(separator__$1)),cljs.core.seq(text));
var cur_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$found_DASH_token,false);
while(true){
if(cljs.core.empty_QMARK_(tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.constant$keyword$found_DASH_token.cljs$core$IFn$_invoke$arity$1(cur_state))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(out,separator__$1):out),buf)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cur_state,cljs.core.constant$keyword$found_DASH_token)], null);
} else {
if(cljs.core.truth_(cljs.core.constant$keyword$found_DASH_token.cljs$core$IFn$_invoke$arity$1(cur_state))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(tokens),separator__$1)){
var G__19877 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(out,cljs.core.seq(open),cljs.core.array_seq([(cljs.core.truth_(escape_QMARK_)?cljs.core.seq(markdown.transformers.escape_code(clojure.string.join.cljs$core$IFn$_invoke$arity$1(buf))):buf),cljs.core.seq(close)], 0)));
var G__19878 = cljs.core.PersistentVector.EMPTY;
var G__19879 = cljs.core.rest(tokens);
var G__19880 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cur_state,cljs.core.constant$keyword$found_DASH_token,false);
out = G__19877;
buf = G__19878;
tokens = G__19879;
cur_state = G__19880;
continue;
} else {
var G__19881 = out;
var G__19882 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.first(tokens));
var G__19883 = cljs.core.rest(tokens);
var G__19884 = cur_state;
out = G__19881;
buf = G__19882;
tokens = G__19883;
cur_state = G__19884;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(tokens),separator__$1)){
var G__19885 = out;
var G__19886 = buf;
var G__19887 = cljs.core.rest(tokens);
var G__19888 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cur_state,cljs.core.constant$keyword$found_DASH_token,true);
out = G__19885;
buf = G__19886;
tokens = G__19887;
cur_state = G__19888;
continue;
} else {
var G__19889 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(out,cljs.core.first(tokens));
var G__19890 = buf;
var G__19891 = cljs.core.rest(tokens);
var G__19892 = cur_state;
out = G__19889;
buf = G__19890;
tokens = G__19891;
cur_state = G__19892;
continue;

}
}
}
break;
}
}
});
markdown.transformers.strong = (function markdown$transformers$strong(text,state){
return markdown.transformers.separator(false,text,"<strong>","</strong>",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*","*"], null),state);
});
markdown.transformers.bold = (function markdown$transformers$bold(text,state){
return markdown.transformers.separator(false,text,"<b>","</b>",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["_","_"], null),state);
});
markdown.transformers.em = (function markdown$transformers$em(text,state){
return markdown.transformers.separator(false,text,"<em>","</em>",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*"], null),state);
});
markdown.transformers.italics = (function markdown$transformers$italics(text,state){
return markdown.transformers.separator(false,text,"<i>","</i>",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["_"], null),state);
});
markdown.transformers.inline_code = (function markdown$transformers$inline_code(text,state){
return markdown.transformers.separator(true,text,"<code>","</code>",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`"], null),state);
});
markdown.transformers.strikethrough = (function markdown$transformers$strikethrough(text,state){
return markdown.transformers.separator(false,text,"<del>","</del>",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~","~"], null),state);
});
markdown.transformers.superscript = (function markdown$transformers$superscript(text,state){
if(cljs.core.truth_(cljs.core.constant$keyword$code.cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var tokens = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"^",null], null), null)),text);
var buf = cljs.core.PersistentVector.EMPTY;
var remaining = tokens;
while(true){
if(cljs.core.empty_QMARK_(remaining)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$1(buf),state], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(remaining),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null))){
var G__19893 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq("<sup>"),cljs.core.second(remaining),cljs.core.array_seq([cljs.core.seq("</sup>")], 0)));
var G__19894 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),remaining);
buf = G__19893;
remaining = G__19894;
continue;
} else {
var G__19895 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.first(remaining));
var G__19896 = cljs.core.rest(remaining);
buf = G__19895;
remaining = G__19896;
continue;

}
}
break;
}
}
});
markdown.transformers.heading_text = (function markdown$transformers$heading_text(text){
return clojure.string.trim(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__19898_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("#",p1__19898_SHARP_);
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__19897_SHARP_){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",p1__19897_SHARP_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",p1__19897_SHARP_));
}),text))));
});
markdown.transformers.heading_level = (function markdown$transformers$heading_level(text){
var num_hashes = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19899_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(" ",p1__19899_SHARP_);
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__19900_SHARP_){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",p1__19900_SHARP_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",p1__19900_SHARP_));
}),cljs.core.seq(text))));
if((num_hashes > (0))){
return num_hashes;
} else {
return null;
}
});
markdown.transformers.make_heading = (function markdown$transformers$make_heading(text,heading_anchors){
var temp__4421__auto__ = markdown.transformers.heading_level(text);
if(cljs.core.truth_(temp__4421__auto__)){
var heading = temp__4421__auto__;
var text__$1 = markdown.transformers.heading_text(text);
return [cljs.core.str("<h"),cljs.core.str(heading),cljs.core.str(">"),cljs.core.str((cljs.core.truth_(heading_anchors)?[cljs.core.str("<a name=\""),cljs.core.str(clojure.string.replace(clojure.string.lower_case(text__$1)," ","&#95;")),cljs.core.str("\"></a>")].join(''):null)),cljs.core.str(text__$1),cljs.core.str("</h"),cljs.core.str(heading),cljs.core.str(">")].join('');
} else {
return null;
}
});
markdown.transformers.heading = (function markdown$transformers$heading(text,state){
if(cljs.core.truth_((function (){var or__4309__auto__ = cljs.core.constant$keyword$codeblock.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cljs.core.constant$keyword$code.cljs$core$IFn$_invoke$arity$1(state);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.transformers.h1_QMARK_(markdown.transformers._STAR_next_line_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<h1>"),cljs.core.str(text),cljs.core.str("</h1>")].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$heading,true)], null);
} else {
if(cljs.core.truth_(markdown.transformers.h2_QMARK_(markdown.transformers._STAR_next_line_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<h2>"),cljs.core.str(text),cljs.core.str("</h2>")].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$heading,true)], null);
} else {
var temp__4421__auto__ = markdown.transformers.make_heading(text,cljs.core.constant$keyword$heading_DASH_anchors.cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(temp__4421__auto__)){
var heading__$1 = temp__4421__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [heading__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$heading,true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}

}
}
}
});
markdown.transformers.br = (function markdown$transformers$br(text,p__19901){
var map__19903 = p__19901;
var map__19903__$1 = ((cljs.core.seq_QMARK_(map__19903))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19903):map__19903);
var state = map__19903__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19903__$1,cljs.core.constant$keyword$code);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19903__$1,cljs.core.constant$keyword$lists);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "," "], null),cljs.core.take_last((2),text))) && (cljs.core.not((function (){var or__4309__auto__ = code;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return lists;
}
})())))?[cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),text))),cljs.core.str("<br />")].join(''):text),state], null);
});
markdown.transformers.autourl_transformer = (function markdown$transformers$autourl_transformer(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.constant$keyword$code.cljs$core$IFn$_invoke$arity$1(state))?text:clojure.string.replace(text,/<https?:\/\/[-A-Za-z0-9+&@#\/%?=~_()|!:,.;]*[-A-Za-z0-9+&@#\/%=~_()|]>/,(function (p1__19904_SHARP_){
var url = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__19904_SHARP_,(1),(cljs.core.count(p1__19904_SHARP_) - (1)));
return [cljs.core.str("<a href=\""),cljs.core.str(url),cljs.core.str("\">"),cljs.core.str(url),cljs.core.str("</a>")].join('');
}))),state], null);
});
markdown.transformers.autoemail_transformer = (function markdown$transformers$autoemail_transformer(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__4309__auto__ = cljs.core.constant$keyword$code.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cljs.core.constant$keyword$codeblock.cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace(text,/<[\w._%+-]+@[\w.-]+\.[\w]{2,4}>/,(function (p1__19905_SHARP_){
var encoded = (cljs.core.truth_(cljs.core.constant$keyword$clojurescript.cljs$core$IFn$_invoke$arity$1(state))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__19905_SHARP_,(1),(cljs.core.count(p1__19905_SHARP_) - (1))):cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
if((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() > 0.5)){
var G__19908 = "&#x%02x;";
var G__19909 = (c | (0));
return (markdown.transformers.formatter.cljs$core$IFn$_invoke$arity$2 ? markdown.transformers.formatter.cljs$core$IFn$_invoke$arity$2(G__19908,G__19909) : markdown.transformers.formatter.call(null,G__19908,G__19909));
} else {
return c;
}
}),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__19905_SHARP_,(1),(cljs.core.count(p1__19905_SHARP_) - (1))))));
return [cljs.core.str("<a href=\"mailto:"),cljs.core.str(encoded),cljs.core.str("\">"),cljs.core.str(encoded),cljs.core.str("</a>")].join('');
}))),state], null);
});
markdown.transformers.paragraph_text = (function markdown$transformers$paragraph_text(last_line_empty_QMARK_,text){
if(cljs.core.truth_((function (){var and__4297__auto__ = cljs.core.not(last_line_empty_QMARK_);
if(and__4297__auto__){
return cljs.core.not_empty(text);
} else {
return and__4297__auto__;
}
})())){
return [cljs.core.str(" "),cljs.core.str(text)].join('');
} else {
return text;
}
});
markdown.transformers.paragraph = (function markdown$transformers$paragraph(text,p__19910){
var map__19912 = p__19910;
var map__19912__$1 = ((cljs.core.seq_QMARK_(map__19912))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19912):map__19912);
var state = map__19912__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19912__$1,cljs.core.constant$keyword$eof);
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19912__$1,cljs.core.constant$keyword$heading);
var hr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19912__$1,cljs.core.constant$keyword$hr);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19912__$1,cljs.core.constant$keyword$code);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19912__$1,cljs.core.constant$keyword$lists);
var blockquote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19912__$1,cljs.core.constant$keyword$blockquote);
var paragraph__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19912__$1,cljs.core.constant$keyword$paragraph);
var last_line_empty_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19912__$1,cljs.core.constant$keyword$last_DASH_line_DASH_empty_QMARK_);
if(cljs.core.truth_((function (){var or__4309__auto__ = heading;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = hr;
if(cljs.core.truth_(or__4309__auto____$1)){
return or__4309__auto____$1;
} else {
var or__4309__auto____$2 = code;
if(cljs.core.truth_(or__4309__auto____$2)){
return or__4309__auto____$2;
} else {
var or__4309__auto____$3 = lists;
if(cljs.core.truth_(or__4309__auto____$3)){
return or__4309__auto____$3;
} else {
return blockquote;
}
}
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(paragraph__$1)){
if(cljs.core.truth_((function (){var or__4309__auto__ = eof;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cljs.core.empty_QMARK_(clojure.string.trim(text));
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(markdown.transformers.paragraph_text(last_line_empty_QMARK_,text)),cljs.core.str("</p>")].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$paragraph,false)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.paragraph_text(last_line_empty_QMARK_,text),state], null);
}
} else {
if(cljs.core.truth_((function (){var and__4297__auto__ = cljs.core.not(eof);
if(and__4297__auto__){
return last_line_empty_QMARK_;
} else {
return and__4297__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<p>"),cljs.core.str(text)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.constant$keyword$paragraph,true,cljs.core.array_seq([cljs.core.constant$keyword$last_DASH_line_DASH_empty_QMARK_,false], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
});
markdown.transformers.code = (function markdown$transformers$code(text,p__19913){
var map__19915 = p__19913;
var map__19915__$1 = ((cljs.core.seq_QMARK_(map__19915))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19915):map__19915);
var state = map__19915__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19915__$1,cljs.core.constant$keyword$eof);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19915__$1,cljs.core.constant$keyword$lists);
var code__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19915__$1,cljs.core.constant$keyword$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19915__$1,cljs.core.constant$keyword$codeblock);
if(cljs.core.truth_((function (){var or__4309__auto__ = lists;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(code__$1)){
if(cljs.core.truth_((function (){var or__4309__auto__ = eof;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("    ",clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),text)));
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("\n</code></pre>"),cljs.core.str(text)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.constant$keyword$code,false,cljs.core.array_seq([cljs.core.constant$keyword$last_DASH_line_DASH_empty_QMARK_,false], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("\n"),cljs.core.str(markdown.transformers.escape_code(clojure.string.replace_first(text,/    /,"")))].join(''),state], null);
}
} else {
if(cljs.core.empty_QMARK_(clojure.string.trim(text))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var num_spaces = cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_," "),text));
if((num_spaces > (3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<pre><code>"),cljs.core.str(markdown.transformers.escape_code(clojure.string.replace_first(text,/    /,"")))].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$code,true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}

}
}
}
});
markdown.transformers.codeblock = (function markdown$transformers$codeblock(text,state){
var trimmed = clojure.string.trim(text);
if(cljs.core.truth_((function (){var and__4297__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`","`","`"], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),trimmed));
if(and__4297__auto__){
return cljs.core.constant$keyword$codeblock.cljs$core$IFn$_invoke$arity$1(state);
} else {
return and__4297__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("</code></pre>"),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),trimmed)))].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.constant$keyword$code,false,cljs.core.array_seq([cljs.core.constant$keyword$codeblock,false,cljs.core.constant$keyword$last_DASH_line_DASH_empty_QMARK_,false], 0))], null);
} else {
if(cljs.core.truth_((function (){var and__4297__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`","`","`"], null),cljs.core.take_last((3),trimmed));
if(and__4297__auto__){
return cljs.core.constant$keyword$codeblock.cljs$core$IFn$_invoke$arity$1(state);
} else {
return and__4297__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("</code></pre>"),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((3),trimmed)))].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.constant$keyword$code,false,cljs.core.array_seq([cljs.core.constant$keyword$codeblock,false,cljs.core.constant$keyword$last_DASH_line_DASH_empty_QMARK_,false], 0))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`","`","`"], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),trimmed))){
var vec__19918 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),trimmed));
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19918,(0),null);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19918,(1),null);
var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(code));
var formatter = cljs.core.constant$keyword$code_DASH_style.cljs$core$IFn$_invoke$arity$1(state);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<pre><code"),cljs.core.str((cljs.core.truth_(cljs.core.not_empty(lang))?[cljs.core.str(" "),cljs.core.str((cljs.core.truth_(formatter)?(function (){var G__19919 = clojure.string.join.cljs$core$IFn$_invoke$arity$1(lang);
return (formatter.cljs$core$IFn$_invoke$arity$1 ? formatter.cljs$core$IFn$_invoke$arity$1(G__19919) : formatter.call(null,G__19919));
})():[cljs.core.str("class=\""),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$1(lang)),cljs.core.str("\"")].join('')))].join(''):null)),cljs.core.str(">"),cljs.core.str(markdown.transformers.escape_code(((cljs.core.empty_QMARK_(s))?s:[cljs.core.str(s),cljs.core.str("\n")].join(''))))].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.constant$keyword$code,true,cljs.core.array_seq([cljs.core.constant$keyword$codeblock,true], 0))], null);
} else {
if(cljs.core.truth_(cljs.core.constant$keyword$codeblock.cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(markdown.transformers.escape_code(text)),cljs.core.str("\n")].join(''),state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
}
});
markdown.transformers.hr = (function markdown$transformers$hr(text,state){
if(cljs.core.truth_(cljs.core.constant$keyword$code.cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(((cljs.core.empty_QMARK_(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"*",null], null), null),text))) || (cljs.core.empty_QMARK_(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"-",null], null), null),text))) || (cljs.core.empty_QMARK_(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"_",null], null), null),text)))) && ((cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [" ",null], null), null),text)) > (2)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<hr/>")].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$hr,true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
}
});
markdown.transformers.blockquote = (function markdown$transformers$blockquote(text,p__19920){
var map__19922 = p__19920;
var map__19922__$1 = ((cljs.core.seq_QMARK_(map__19922))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19922):map__19922);
var state = map__19922__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19922__$1,cljs.core.constant$keyword$eof);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19922__$1,cljs.core.constant$keyword$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19922__$1,cljs.core.constant$keyword$codeblock);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19922__$1,cljs.core.constant$keyword$lists);
var trimmed = clojure.string.trim(text);
if(cljs.core.truth_((function (){var or__4309__auto__ = code;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = codeblock;
if(cljs.core.truth_(or__4309__auto____$1)){
return or__4309__auto____$1;
} else {
return lists;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(cljs.core.constant$keyword$blockquote.cljs$core$IFn$_invoke$arity$1(state))){
if(cljs.core.truth_((function (){var or__4309__auto__ = eof;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cljs.core.empty_QMARK_(trimmed);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["</p></blockquote>",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$blockquote,false)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">-",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(trimmed,(0),(2)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("</p><footer>"),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text,(2))),cljs.core.str("</footer><p>")].join(''),state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(text),cljs.core.str(" ")].join(''),state], null);
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",cljs.core.first(text))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<blockquote><p>"),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.rest(text))),cljs.core.str(" ")].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$blockquote,true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}

}
}
});
markdown.transformers.href = (function markdown$transformers$href(title,link){
return markdown.transformers.escape_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.seq("<a href='"),link,cljs.core.seq("'>"),title,cljs.core.seq("</a>")], 0));
});
markdown.transformers.img = (function markdown$transformers$img(){
var argseq__5349__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return markdown.transformers.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5349__auto__);
});

markdown.transformers.img.cljs$core$IFn$_invoke$arity$variadic = (function (alt,url,p__19926){
var vec__19927 = p__19926;
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19927,(0),null);
return markdown.transformers.escape_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.seq("<img src=\""),url,cljs.core.seq("\" alt=\""),alt,(cljs.core.truth_(cljs.core.not_empty(title))?cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"\" title=",clojure.string.join.cljs$core$IFn$_invoke$arity$1(title)," />")):cljs.core.seq("\" />"))], 0));
});

markdown.transformers.img.cljs$lang$maxFixedArity = (2);

markdown.transformers.img.cljs$lang$applyTo = (function (seq19923){
var G__19924 = cljs.core.first(seq19923);
var seq19923__$1 = cljs.core.next(seq19923);
var G__19925 = cljs.core.first(seq19923__$1);
var seq19923__$2 = cljs.core.next(seq19923__$1);
return markdown.transformers.img.cljs$core$IFn$_invoke$arity$variadic(G__19924,G__19925,seq19923__$2);
});
markdown.transformers.handle_img_link = (function markdown$transformers$handle_img_link(xs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","!","["], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),xs))){
var xs__$1 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),xs);
var vec__19931 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"]"),xs__$1);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19931,(0),null);
var xy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19931,(1),null);
var vec__19932 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,")"),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),xy));
var url_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19932,(0),null);
var zy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19932,(1),null);
var vec__19933 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),url_title);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19933,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19933,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic("[",markdown.transformers.img.cljs$core$IFn$_invoke$arity$variadic(alt,url,cljs.core.array_seq([cljs.core.not_empty(title)], 0)),cljs.core.array_seq([cljs.core.rest(zy)], 0));
} else {
return xs;
}
});
markdown.transformers.process_link_title = (function markdown$transformers$process_link_title(title,state){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__19935_SHARP_,p2__19934_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(p2__19934_SHARP_,p1__19935_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,state], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.italics,markdown.transformers.em,markdown.transformers.strong,markdown.transformers.bold,markdown.transformers.strikethrough], null)));
});
markdown.transformers.link = (function markdown$transformers$link(text,p__19936){
var map__19943 = p__19936;
var map__19943__$1 = ((cljs.core.seq_QMARK_(map__19943))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19943):map__19943);
var state = map__19943__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19943__$1,cljs.core.constant$keyword$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19943__$1,cljs.core.constant$keyword$codeblock);
if(cljs.core.truth_((function (){var or__4309__auto__ = code;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.seq(text);
while(true){
if(cljs.core.empty_QMARK_(tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$1(out),state], null);
} else {
var vec__19944 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"["),tokens);
var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19944,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19944,(1),null);
var xs__$1 = markdown.transformers.handle_img_link(xs);
var vec__19945 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"]"),xs__$1);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19945,(0),null);
var ys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19945,(1),null);
var vec__19946 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"("),ys);
var dud = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19946,(0),null);
var zs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19946,(1),null);
var vec__19947 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,")"),zs);
var link__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19947,(0),null);
var tail = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19947,(1),null);
if(((cljs.core.count(link__$1) < (2))) || ((cljs.core.count(tail) < (1))) || ((cljs.core.count(dud) > (1)))){
var G__19949 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(out,head,cljs.core.array_seq([markdown.transformers.process_link_title(title,state),dud,link__$1], 0));
var G__19950 = tail;
out = G__19949;
tokens = G__19950;
continue;
} else {
var G__19951 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(out,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(head),"!"))?(function (){var alt = cljs.core.rest(title);
var vec__19948 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),cljs.core.rest(link__$1));
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19948,(0),null);
var title__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19948,(1),null);
var title__$2 = markdown.transformers.process_link_title(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.rest(title__$1)),state);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(head),markdown.transformers.img.cljs$core$IFn$_invoke$arity$variadic(alt,url,cljs.core.array_seq([title__$2], 0)));
})():cljs.core.concat.cljs$core$IFn$_invoke$arity$2(head,markdown.transformers.href(cljs.core.rest(markdown.transformers.process_link_title(title,state)),cljs.core.rest(link__$1)))));
var G__19952 = cljs.core.rest(tail);
out = G__19951;
tokens = G__19952;
continue;
}
}
break;
}
}
});
markdown.transformers.reference = (function markdown$transformers$reference(text){
return cljs.core.re_find(/^\[[a-zA-Z0-9 ]+\]:/,text);
});
markdown.transformers.parse_reference = (function markdown$transformers$parse_reference(reference,start){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(reference,start)),/\s+/,(2));
});
markdown.transformers.parse_reference_link = (function markdown$transformers$parse_reference_link(line,references){
var trimmed = clojure.string.trim(line);
var temp__4423__auto__ = markdown.transformers.reference(trimmed);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(references,cljs.core.assoc,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(link,(0),(cljs.core.count(link) - (1))),markdown.transformers.parse_reference(trimmed,(cljs.core.count(link) + (1))));
} else {
return null;
}
});
markdown.transformers.replace_reference_link = (function markdown$transformers$replace_reference_link(references,reference){
var vec__19955 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(reference,/\]\s*/,(2));
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19955,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19955,(1),null);
var vec__19956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(references,id);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19956,(0),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19956,(1),null);
return [cljs.core.str("<a href='"),cljs.core.str(link),cljs.core.str("'"),cljs.core.str((cljs.core.truth_(alt)?[cljs.core.str(" title='"),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(alt,(1),(cljs.core.count(alt) - (1)))),cljs.core.str("'")].join(''):null)),cljs.core.str(">"),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(title,(1))),cljs.core.str("</a>")].join('');
});
markdown.transformers.reference_link = (function markdown$transformers$reference_link(text,p__19957){
var map__19959 = p__19957;
var map__19959__$1 = ((cljs.core.seq_QMARK_(map__19959))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19959):map__19959);
var state = map__19959__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19959__$1,cljs.core.constant$keyword$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19959__$1,cljs.core.constant$keyword$codeblock);
var references = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19959__$1,cljs.core.constant$keyword$references);
if((references == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.transformers.reference(clojure.string.trim(text)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__4309__auto__ = code;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return codeblock;
}
})())?text:clojure.string.replace(text,/\[[a-zA-Z0-9 ]+\]\s*\[[a-zA-Z0-9 ]+\]/,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(markdown.transformers.replace_reference_link,references))),state], null);

}
}
});
markdown.transformers.close_lists = (function markdown$transformers$close_lists(lists){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1((function (){var iter__5063__auto__ = (function markdown$transformers$close_lists_$_iter__19970(s__19971){
return (new cljs.core.LazySeq(null,(function (){
var s__19971__$1 = s__19971;
while(true){
var temp__4423__auto__ = cljs.core.seq(s__19971__$1);
if(temp__4423__auto__){
var s__19971__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19971__$2)){
var c__5061__auto__ = cljs.core.chunk_first(s__19971__$2);
var size__5062__auto__ = cljs.core.count(c__5061__auto__);
var b__19973 = cljs.core.chunk_buffer(size__5062__auto__);
if((function (){var i__19972 = (0);
while(true){
if((i__19972 < size__5062__auto__)){
var vec__19978 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5061__auto__,i__19972);
var list_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19978,(0),null);
cljs.core.chunk_append(b__19973,[cljs.core.str("</li></"),cljs.core.str(cljs.core.name(list_type)),cljs.core.str(">")].join(''));

var G__19980 = (i__19972 + (1));
i__19972 = G__19980;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19973),markdown$transformers$close_lists_$_iter__19970(cljs.core.chunk_rest(s__19971__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19973),null);
}
} else {
var vec__19979 = cljs.core.first(s__19971__$2);
var list_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19979,(0),null);
return cljs.core.cons([cljs.core.str("</li></"),cljs.core.str(cljs.core.name(list_type)),cljs.core.str(">")].join(''),markdown$transformers$close_lists_$_iter__19970(cljs.core.rest(s__19971__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5063__auto__(lists);
})());
});
markdown.transformers.add_row = (function markdown$transformers$add_row(row_type,list_type,num_indents,indents,content,state){
if(cljs.core.truth_(list_type)){
if((num_indents < indents)){
var lists_to_close = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__19981_SHARP_){
return (cljs.core.second(p1__19981_SHARP_) > num_indents);
}),cljs.core.reverse(cljs.core.constant$keyword$lists.cljs$core$IFn$_invoke$arity$1(state)));
var remaining_lists = cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lists_to_close),cljs.core.constant$keyword$lists.cljs$core$IFn$_invoke$arity$1(state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,markdown.transformers.close_lists(lists_to_close),"</li><li>",content),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$lists,(((num_indents > cljs.core.second(cljs.core.last(remaining_lists))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(remaining_lists,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_type,num_indents], null)):remaining_lists))], null);
} else {
if((num_indents > indents)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<"),cljs.core.str(cljs.core.name(row_type)),cljs.core.str("><li>"),cljs.core.str(content)].join(''),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$lists], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_type,num_indents], null))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_indents,indents)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("</li><li>"),cljs.core.str(content)].join(''),state], null);
} else {
return null;
}
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<"),cljs.core.str(cljs.core.name(row_type)),cljs.core.str("><li>"),cljs.core.str(content)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$lists,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_type,num_indents], null)], null))], null);
}
});
markdown.transformers.ul = (function markdown$transformers$ul(text,state){
var vec__19985 = cljs.core.last(cljs.core.constant$keyword$lists.cljs$core$IFn$_invoke$arity$1(state));
var list_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19985,(0),null);
var indents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19985,(1),null);
var num_indents = cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_," "),text));
var content = clojure.string.trim((function (){var G__19986 = text;
var G__19987 = (num_indents + (1));
return (markdown.transformers._STAR_substring_STAR_.cljs$core$IFn$_invoke$arity$2 ? markdown.transformers._STAR_substring_STAR_.cljs$core$IFn$_invoke$arity$2(G__19986,G__19987) : markdown.transformers._STAR_substring_STAR_.call(null,G__19986,G__19987));
})());
return markdown.transformers.add_row(cljs.core.constant$keyword$ul,list_type,num_indents,indents,(function (){var or__4309__auto__ = markdown.transformers.make_heading(content,false);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return content;
}
})(),state);
});
markdown.transformers.ol = (function markdown$transformers$ol(text,state){
var vec__19989 = cljs.core.last(cljs.core.constant$keyword$lists.cljs$core$IFn$_invoke$arity$1(state));
var list_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19989,(0),null);
var indents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19989,(1),null);
var num_indents = cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_," "),text));
var content = clojure.string.trim(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),clojure.string.trim(text))));
return markdown.transformers.add_row(cljs.core.constant$keyword$ol,list_type,num_indents,indents,(function (){var or__4309__auto__ = markdown.transformers.make_heading(content,false);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return content;
}
})(),state);
});
markdown.transformers.li = (function markdown$transformers$li(text,p__19990){
var map__19992 = p__19990;
var map__19992__$1 = ((cljs.core.seq_QMARK_(map__19992))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19992):map__19992);
var state = map__19992__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19992__$1,cljs.core.constant$keyword$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19992__$1,cljs.core.constant$keyword$codeblock);
var last_line_empty_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19992__$1,cljs.core.constant$keyword$last_DASH_line_DASH_empty_QMARK_);
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19992__$1,cljs.core.constant$keyword$eof);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19992__$1,cljs.core.constant$keyword$lists);
if(cljs.core.truth_((function (){var and__4297__auto__ = last_line_empty_QMARK_;
if(cljs.core.truth_(and__4297__auto__)){
return clojure.string.blank_QMARK_(text);
} else {
return and__4297__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(markdown.transformers.close_lists(cljs.core.reverse(lists))),cljs.core.str(text)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.constant$keyword$lists),cljs.core.constant$keyword$last_DASH_line_DASH_empty_QMARK_,false)], null);
} else {
if(cljs.core.truth_((function (){var or__4309__auto__ = code;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return codeblock;
}
})())){
if(cljs.core.truth_((function (){var and__4297__auto__ = lists;
if(cljs.core.truth_(and__4297__auto__)){
var or__4309__auto__ = last_line_empty_QMARK_;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return eof;
}
} else {
return and__4297__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(markdown.transformers.close_lists(cljs.core.reverse(lists))),cljs.core.str(text)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.constant$keyword$lists),cljs.core.constant$keyword$last_DASH_line_DASH_empty_QMARK_,false)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
} else {
if(cljs.core.truth_((function (){var and__4297__auto__ = cljs.core.not(eof);
if(and__4297__auto__){
var and__4297__auto____$1 = lists;
if(cljs.core.truth_(and__4297__auto____$1)){
return clojure.string.blank_QMARK_(text);
} else {
return and__4297__auto____$1;
}
} else {
return and__4297__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$last_DASH_line_DASH_empty_QMARK_,true)], null);
} else {
var indents = (cljs.core.truth_(last_line_empty_QMARK_)?(0):cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_," "),text)));
var trimmed = clojure.string.trim(text);
var in_list_QMARK_ = cljs.core.constant$keyword$lists.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(cljs.core.re_find(/^[\*\+-] /,trimmed))){
return markdown.transformers.ul((cljs.core.truth_(in_list_QMARK_)?text:trimmed),state);
} else {
if(cljs.core.truth_(cljs.core.re_find(/^[0-9]+\. /,trimmed))){
return markdown.transformers.ol((cljs.core.truth_(in_list_QMARK_)?text:trimmed),state);
} else {
if((indents > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_((function (){var and__4297__auto__ = (function (){var or__4309__auto__ = eof;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return last_line_empty_QMARK_;
}
})();
if(cljs.core.truth_(and__4297__auto__)){
return cljs.core.not_empty(lists);
} else {
return and__4297__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.close_lists(cljs.core.reverse(lists)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.constant$keyword$lists,cljs.core.PersistentVector.EMPTY,cljs.core.array_seq([cljs.core.constant$keyword$buf,text], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
}

}
}
}
});
markdown.transformers.transformer_vector = new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.empty_line,markdown.transformers.codeblock,markdown.transformers.code,markdown.transformers.escaped_chars,markdown.transformers.inline_code,markdown.transformers.autoemail_transformer,markdown.transformers.autourl_transformer,markdown.transformers.link,markdown.transformers.reference_link,markdown.transformers.hr,markdown.transformers.li,markdown.transformers.heading,markdown.transformers.italics,markdown.transformers.em,markdown.transformers.strong,markdown.transformers.bold,markdown.transformers.strikethrough,markdown.transformers.superscript,markdown.transformers.blockquote,markdown.transformers.paragraph,markdown.transformers.br], null);
