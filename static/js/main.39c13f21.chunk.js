(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var n,r=s(4),i=s.n(r),a=s(5),o=s(6),c=s(9),l=s(7),d=s(8),u=s(1),h=s.n(u),b=s(2),O=s.n(b),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],g=(s(14),s(15),s(0));!function(e){e[e.NONE=0]="NONE",e[e.ALPHABET=1]="ALPHABET",e[e.LENGTH=2]="LENGTH"}(n||(n={}));var j=function(e){Object(c.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(a.a)(this,s);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={isReversed:!1,sortType:n.NONE,isOriginalOrder:!0},e.handleSortByAlphabet=function(){e.setState({isReversed:!1,sortType:n.ALPHABET,isOriginalOrder:!1})},e.handleSortByLength=function(){e.setState({isReversed:!1,sortType:n.LENGTH,isOriginalOrder:!1})},e.handleReverse=function(){e.setState((function(e){return{isReversed:!e.isReversed,isOriginalOrder:!1}}))},e.handleReset=function(){e.setState({isReversed:!1,sortType:n.NONE,isOriginalOrder:!0})},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this.state,t=e.isReversed,s=e.sortType,r=e.isOriginalOrder,i=function(e,t){var s=t.sortType,r=t.isReversed,i=Object(d.a)(e);switch(s){case n.ALPHABET:i.sort((function(e,t){return e.localeCompare(t)}));break;case n.LENGTH:i.sort((function(e,t){return e.length-t.length}))}return r&&(i=i.reverse()),i}(p,{isReversed:t,sortType:s});return Object(g.jsxs)("div",{className:"section content",children:[Object(g.jsxs)("div",{className:"buttons",children:[Object(g.jsx)("button",{type:"button",className:O()("button is-info",{"is-light":s!==n.ALPHABET}),onClick:this.handleSortByAlphabet,children:"Sort alphabetically"}),Object(g.jsx)("button",{type:"button",className:O()("button is-success",{"is-light":s!==n.LENGTH}),onClick:this.handleSortByLength,children:"Sort by length"}),Object(g.jsx)("button",{type:"button",className:O()("button is-warning",{"is-light":!t}),onClick:this.handleReverse,children:"Reverse"}),!r&&Object(g.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.handleReset,children:"Reset"})]}),Object(g.jsx)("ul",{children:i.map((function(e){return Object(g.jsx)("li",{"data-cy":"Good",children:e},e)}))})]})}}]),s}(h.a.Component);i.a.render(Object(g.jsx)(j,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.39c13f21.chunk.js.map