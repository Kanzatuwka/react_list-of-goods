(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s,r=n(4),a=n.n(r),o=n(5),c=n(6),i=n(9),l=n(7),u=n(8),h=n(1),b=n.n(h),d=n(2),p=n.n(d),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],y=(n(14),n(15),n(0));!function(e){e[e.NONE=0]="NONE",e[e.ALPHABET=1]="ALPHABET",e[e.LENGTH=2]="LENGTH"}(s||(s={}));var N=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isReversed:!1,sortType:s.NONE},e.handleSortByAlphabet=function(){e.setState({sortType:s.ALPHABET})},e.handleSortByLength=function(){e.setState({sortType:s.LENGTH})},e.handleReverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.handleReset=function(){e.setState({isReversed:!1,sortType:s.NONE})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isReversed,n=e.sortType,r=function(e,t){var n=t.sortType,r=t.isReversed,a=Object(u.a)(e);switch(n){case s.NONE:break;case s.ALPHABET:a.sort((function(e,t){return e.localeCompare(t)}));break;case s.LENGTH:a.sort((function(e,t){return e.length-t.length}))}return r&&a.reverse(),a}(j,{isReversed:t,sortType:n});return Object(y.jsxs)("div",{className:"section content",children:[Object(y.jsxs)("div",{className:"buttons",children:[Object(y.jsx)("button",{type:"button",className:p()("button is-info",{"is-light":n!==s.ALPHABET}),onClick:this.handleSortByAlphabet,children:"Sort alphabetically"}),Object(y.jsx)("button",{type:"button",className:p()("button is-success",{"is-light":n!==s.LENGTH}),onClick:this.handleSortByLength,children:"Sort by length"}),Object(y.jsx)("button",{type:"button",className:p()("button is-warning",{"is-light":!t}),onClick:this.handleReverse,children:"Reverse"}),(n!==s.NONE||t)&&Object(y.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.handleReset,children:"Reset"})]}),Object(y.jsx)("ul",{children:r.map((function(e){return Object(y.jsx)("li",{"data-cy":"Good",children:e},e)}))})]})}}]),n}(b.a.Component);a.a.render(Object(y.jsx)(N,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.46dea367.chunk.js.map