(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{375:function(e,t,n){},455:function(e,t,n){"use strict";n.r(t);var a=n(24),r=n(285),c=n(0),o=n.n(c),l=n(452),i=n(456),d=n(454),u=n(287),s=n(458),m=n(449),p=n(451),g=function(e){var t=e.onSearch,n=e.onCheck,a=e.onDeleted,r=e.filterText,l=e.inStockOnly,i=e.showDeleted,d=e.inputRef;return o.a.createElement(c.Fragment,null,o.a.createElement(m.a,{icon:"search",placeholder:"Filter...",size:"mini",ref:d,value:r,onChange:t}),o.a.createElement("span",{className:"check-box",style:{paddingLeft:10}},o.a.createElement(p.a,{type:"checkbox",checked:l,onChange:n,id:"checkInStock",label:"Show only in stock"})),o.a.createElement("span",{className:"check-box",style:{paddingLeft:10}},o.a.createElement(p.a,{type:"checkbox",checked:i,onChange:a,id:"checkDeleted",label:"Show Deleted"})))},f=n(324),E=n.n(f),h=n(326),b=n.n(h),y=n(286),k=n(459),v=n(58),C=n(332),S=n.n(C),O=n(335),I=n(453),j=n(284),w=Object(j.a)({mapPropsToValues:function(e){return Object(v.a)({},e.field,e.product[e.field])},handleSubmit:function(){var e=Object(O.a)(S.a.mark(function e(t,n){var a,r,c,o,l;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.setSubmitting,n.resetForm,r=n.props,c=r.product,o=r.field,l=r.onSubmit,e.next=3,l({type:"update_product",payload:{field:o,value:"price"===o?parseFloat(t[o]):t[o],id:c.id}});case 3:a(!1);case 4:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),displayName:"UpdateProduct"})(function(e){var t=e.product,n=e.field,a=e.trigger,l=(e.position,e.dispatch,e.values),i=(e.dirty,e.touched,e.errors,e.handleChange),d=e.handleBlur,m=e.handleSubmit,p=e.isSubmitting,g=(e.setFieldValue,e.setFieldTouched,e.isValid,e.onSubmit,Object(c.useState)(!1)),f=Object(r.a)(g,2),E=f[0],h=f[1],b=Object(c.useRef)(null),y=function(){var e=Object(O.a)(S.a.mark(function e(t){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t,h);case 2:h(!1);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),k=o.a.createElement("div",{style:{cursor:"pointer",border:"none",backgroundColor:"transparent"},onClick:function(){return h(!E)},content:"".concat(t[n])},a);return Object(c.useEffect)(function(){b.current&&b.current.select()},[]),E||p?o.a.createElement(I.a,{onSubmit:y},o.a.createElement(I.a.Group,{widths:"equal",inline:!0,style:{margin:0}},o.a.createElement(I.a.Input,{size:"small",width:3,value:l[n],onKeyUp:function(e){13===e.keyCode&&y(e),27===e.keyCode&&h(!1)},onChange:i,onBlur:d,name:n,placeholder:t[n]}),o.a.createElement(s.a.Group,null,o.a.createElement(s.a,{loading:p,type:"normal",onClick:y,size:"mini",icon:o.a.createElement(u.a,{name:"check"}),positive:!0}),o.a.createElement(s.a,{type:"normal",onClick:function(){return h(!1)},size:"mini",icon:o.a.createElement(u.a,{name:"close"}),negative:!0})))):k}),x=function(e){var t=e.product,n=e.dispatch;return o.a.createElement(i.a.Row,{textAlign:"center"},o.a.createElement(i.a.Cell,{textAlign:"left",disabled:t.deleted,width:9},o.a.createElement(w,{field:"name",product:t,onSubmit:n,position:"top left",trigger:o.a.createElement(c.Fragment,null,t.name)})),o.a.createElement(i.a.Cell,{collapsing:!0,disabled:t.deleted,width:4},o.a.createElement(w,{field:"price",product:t,onSubmit:n,position:"top center",trigger:o.a.createElement(s.a,{basic:!0,content:"$ ".concat(t.price)})})),o.a.createElement(i.a.Cell,{disabled:t.deleted,collapsing:!0,positive:t.stocked,negative:!t.stocked,onClick:function(){return n({type:"update_stock",payload:{id:t.id,stocked:!t.stocked}})}},t.stocked?o.a.createElement(u.a,{name:"checkmark"}):o.a.createElement(u.a,{name:"close"}),t.stocked?"In Stock":"Out of Stock"),o.a.createElement(i.a.Cell,{collapsing:!0},!t.deleted&&o.a.createElement(k.a,{trigger:o.a.createElement(s.a,{size:"mini",color:"red",icon:!0,onClick:function(){return n({type:"remove_product",payload:{id:t.id}})}},o.a.createElement(u.a,{name:"trash"})),position:"top center",content:"Delete Product"}),t.deleted&&o.a.createElement(k.a,{trigger:o.a.createElement(s.a,{size:"mini",color:"orange",icon:!0,onClick:function(){return n({type:"undelete_product",payload:{id:t.id}})}},o.a.createElement(u.a,{name:"undo"})),position:"top center",content:"Restore Product"})))},F=function(e){var t=e.category;return o.a.createElement("strong",{style:{padding:10}},t)},A=(n(375),function(e){var t=e.categories,n=e.showCategoryHeader,a=e.products,r=e.dispatch,l=function(e){switch(e){case 1:return"purple";case 2:return"red";case 3:return"blue";default:return"violet"}},d=null,u=0,s=null;return o.a.createElement(c.Fragment,null,o.a.createElement(E.a,{component:null},a.map(function(e,a){var m=t.find(function(t){return t.id===e.categoryId});return e.categoryId!==d&&u<=a?(d=e.categoryId,u=a,s=!0):s=!1,o.a.createElement(b.a,{mountOnEnter:!0,unmountOnExit:!0,onEnter:function(){return console.log("ENTER")},onEntering:function(){return console.log("ENTERING")},onEntered:function(){return console.log("ENTERED")},onExit:function(){return console.log("EXIT")},onExiting:function(){return console.log("EXITING")},onExited:function(){return console.log("EXITED")},timeout:300,classNames:{enterActive:"fadeIn",exitActive:"fadeOut"},key:e.id},o.a.createElement(c.Fragment,{key:e.id},s&&n?o.a.createElement(i.a.Row,{key:e.categoryId},o.a.createElement(i.a.Cell,{verticalAlign:"middle",colSpan:4,width:16},o.a.createElement(y.a,{color:l(e.categoryId),ribbon:!0},o.a.createElement(F,{category:m.name})))):null,o.a.createElement(x,{product:e,dispatch:r})))})))});A.defaultProps={showCategoryHeader:!0};var P=A,T=n(264),R=n.n(T),H=n(267),B=Object(H.a)({categories:[{id:1,name:"Sporting Goods"},{id:2,name:"Electronics"},{id:3,name:"Clothes"},{id:4,name:"Accessories"}],items:[{id:R()(),categoryId:1,price:49.99,stocked:!0,name:"Football"},{id:R()(),categoryId:2,price:199.99,stocked:!0,name:"iPad Pro"},{id:R()(),categoryId:1,price:49.99,stocked:!0,name:"Football 2"},{id:R()(),categoryId:4,price:199.99,stocked:!0,name:"Bag"},{id:R()(),categoryId:1,price:49.99,stocked:!1,name:"Football 3"},{id:R()(),categoryId:2,price:199.99,stocked:!0,name:"iPhone 7"},{id:R()(),categoryId:4,price:199.99,stocked:!1,name:"Belt"},{id:R()(),categoryId:2,price:199.99,stocked:!1,name:"iPod"},{id:R()(),categoryId:3,price:199.99,stocked:!0,name:"Thong"},{id:R()(),categoryId:3,price:199.99,stocked:!0,name:"Thong"},{id:R()(),categoryId:3,price:199.99,stocked:!1,name:"Thong"},{id:R()(),categoryId:4,price:199.99,stocked:!0,name:"Shoe"}]}),N=n(440),D=n(457),_=Object(j.a)({mapPropsToValues:function(e){return{name:"",price:"",stocked:!1,category:""}},validate:function(e){var t={};return e.name||(t.name="Error"),e.price||(t.price="Error"),e.category||(t.category="Error"),t},handleSubmit:function(e,t){var n=t.setSubmitting,a=t.resetForm,r=t.props.onSubmit;n(!0),r(e),n(!1),a()},displayName:"AddProduct"})(function(e){var t=e.values,n=e.touched,a=e.errors,r=e.handleChange,c=e.handleBlur,l=e.handleSubmit,i=e.isSubmitting,d=e.setFieldValue,u=e.setFieldTouched,s=e.isValid,m=(e.onSubmit,e.categories),p=(Object(N.a)(e,["values","touched","errors","handleChange","handleBlur","handleSubmit","isSubmitting","setFieldValue","setFieldTouched","isValid","onSubmit","categories"]),t.name),g=t.price,f=t.stocked,E=t.category,h=m.reduce(function(e,t){return e.concat({text:t.name,value:t.id})},[]);return o.a.createElement(I.a,{onSubmit:l,style:{padding:10}},o.a.createElement(I.a.Group,{widths:"equal"},o.a.createElement(I.a.Input,{error:a.name&&n.name,disabled:i,placeholder:"Name",name:"name",value:p,onChange:r,onBlur:c}),o.a.createElement(I.a.Input,{error:a.price&&n.price,disabled:i,onBlur:c,placeholder:"Price",type:"number",name:"price",value:g,onChange:r})),o.a.createElement(I.a.Group,null,o.a.createElement(I.a.Field,{width:8},o.a.createElement(D.a,{clearable:!0,name:"category",value:E,onChange:function(e,t){var n=t.name,a=t.value;d(n,a),u(n)},placeholder:"Select Category",selection:!0,options:h})),o.a.createElement(I.a.Field,{width:4,style:{display:"flex",alignItems:"center"}},o.a.createElement(I.a.Checkbox,{label:"In Stock",name:"stocked",checked:f,id:"stocked",onChange:r})),o.a.createElement(I.a.Field,{width:4},o.a.createElement(I.a.Button,{icon:"cart",fluid:!0,color:"violet",type:"submit",size:"small",disabled:0!==Object.keys(a).length||!s,loading:i,content:"Add Product"}))))}),z=function(e,t){var n;switch(t.type){case"undelete_product":return n=e.get("items").findIndex(function(e){return e.get("id")===t.payload.id}),e.setIn(["items",n,"deleted"],!1);case"update_product":n=e.get("items").findIndex(function(e){return e.get("id")===t.payload.id});var r=t.payload.field,c=t.payload.value;return e.setIn(["items",n,r],c);case"update_stock":return n=e.get("items").findIndex(function(e){return e.get("id")===t.payload.id}),e.setIn(["items",n,"stocked"],t.payload.stocked);case"add_product":return e.set("items",e.get("items").push(Object(H.a)(Object(a.a)({},t.payload.product,{id:R()()}))));case"remove_product":return n=e.get("items").findIndex(function(e){return e.get("id")===t.payload.id}),e.setIn(["items",n,"deleted"],!0);default:return e}};t.default=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(""),n=Object(r.a)(t,2),m=n[0],p=n[1],f=Object(c.useState)(null),E=Object(r.a)(f,2),h=E[0],b=E[1],y=Object(c.useState)("ascending"),k=Object(r.a)(y,2),v=k[0],C=k[1],S=Object(c.useState)(!1),O=Object(r.a)(S,2),I=O[0],j=O[1],w=Object(c.useState)(!1),x=Object(r.a)(w,2),F=x[0],A=x[1],T=Object(c.useState)(!1),R=Object(r.a)(T,2),H=R[0],N=R[1],D=Object(c.useState)(0),V=Object(r.a)(D,2),G=V[0],J=V[1],L=Object(c.useReducer)(z,B),$=Object(r.a)(L,2),U=$[0],X=$[1],q=function(e){return p(e.target.value)},M=function(){return j(!I)},K=function(){return A(!F)},Q=function(e,t,n){var a="ascending"===n?"descending":"ascending";e!==t&&b(t),C(a)},W=function(e,t,n,a,r,c){var o=e.filter(function(e){return""!==t?e.get("name").match(new RegExp(t,"ig")):e}).filter(function(e){return n?!0===e.get("stocked"):e}).filter(function(e){return a?e:!e.get("deleted")});if(r||c){var l=r||null,i=c||"ascending";return o=l?o.sortBy(function(e){return e.get(l)}):o.sortBy(function(e){return e.get("categoryId")}),"name"===l&&(o=o.sort(function(e,t){return e.get("name").toLowerCase().localeCompare(t.get("name").toLowerCase())})),"descending"===i?o:o.reverse()}return o}(U.get("items"),m,I,F,h,v),Y=U.get("categories"),Z=Object(c.useMemo)(function(){return o.a.createElement(g,{onSearch:q,onDeleted:K,showDeleted:F,onCheck:M,filterText:m,inStockOnly:I,inputRef:e})},[q,M,K,m,I,F,e]),ee=Object(c.useMemo)(function(){return o.a.createElement(P,{products:W.toJS(),categories:Y.toJS(),dispatch:X})},[W,Y,X]);return Object(c.useEffect)(function(){e.current},[]),Object(c.useEffect)(function(){var e,t=(e=F,W.reduce(function(t,n){return n.get("deleted")&&!e?t:t+n.get("price")},0));J(t)},[G,W.toJS().length]),o.a.createElement(l.a,{style:{paddingTop:20}},o.a.createElement(i.a,null,o.a.createElement(i.a.Header,null,o.a.createElement(i.a.Row,{active:!1},o.a.createElement(i.a.HeaderCell,{textAlign:"left",colSpan:3},Z),o.a.createElement(i.a.HeaderCell,{textAlign:"right"},o.a.createElement(d.a,{centered:!1,dimmer:!0,size:"small",closeIcon:o.a.createElement("div",{style:{position:"absolute",right:0,top:8,textAlign:"right",padding:15,cursor:"pointer"}},o.a.createElement(u.a,{name:"close"})),closeOnDimmerClick:!0,onClose:function(){return N(!1)},open:H,trigger:o.a.createElement(s.a,{onClick:function(){return N(!0)},color:"purple"},"Add A Product")},o.a.createElement(d.a.Header,null,"Add Product"),o.a.createElement(d.a.Content,null,o.a.createElement(_,{onSubmit:function(e){X({type:"add_product",payload:{category:{id:e.category},product:Object(a.a)({},e,{name:e.name.replace(/\b\w/g,function(e){return e.toUpperCase()}),categoryId:e.category})}}),N(!1)},categories:Y.toJS()}))))))),o.a.createElement(i.a,{celled:!0,padded:!0,sortable:!0,stackable:!0,structured:!0,striped:!0,size:"small",singleLine:!0},o.a.createElement(i.a.Header,null,o.a.createElement(i.a.Row,{textAlign:"center"},o.a.createElement(i.a.HeaderCell,{textAlign:"left",sorted:"name"===h?v:null,onClick:function(){return Q(h,"name",v)}},"Product"),o.a.createElement(i.a.HeaderCell,{sorted:"price"===h?v:null,onClick:function(){return Q(h,"price",v)}},"Price"),o.a.createElement(i.a.HeaderCell,{sorted:"stocked"===h?v:null,onClick:function(){return Q(h,"stocked",v)}},"In Stock"),o.a.createElement(i.a.HeaderCell,null,"Action"))),o.a.createElement(i.a.Body,null,ee),o.a.createElement(i.a.Footer,null,o.a.createElement(i.a.Row,{textAlign:"center"},o.a.createElement(i.a.HeaderCell,null),o.a.createElement(i.a.HeaderCell,null,o.a.createElement("strong",null,"$$$$ ",G.toFixed(2))),o.a.createElement(i.a.HeaderCell,{colSpan:2})))))}}}]);
//# sourceMappingURL=1.a9e50250.chunk.js.map