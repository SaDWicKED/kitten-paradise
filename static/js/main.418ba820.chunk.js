(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(1),i=n.n(r),a=n(3),s=n.n(a),o=(n(13),n(4)),u=n(5),h=n(7),l=n(6);n(14),n(15),n(16);function d(t){return Object(c.jsxs)("div",{className:"card-container",children:[Object(c.jsx)("img",{src:"https://robohash.org/".concat(t.kitty.name,"?set=set4&size=180x180&bgset=bg1"),alt:"kitty"}),Object(c.jsx)("h2",{children:t.kitty.name}),Object(c.jsx)("p",{children:t.kitty.email})]})}var j=function(t){return Object(c.jsx)("div",{className:"card-list",children:t.kitten.map((function(t){return Object(c.jsx)(d,{kitty:t},t.id)}))})},f=(n(17),function(t){var e=t.placeholder,n=t.changeHandler;return Object(c.jsx)("input",{className:"search",type:"search",placeholder:e,onChange:n})}),b=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).changeHandler=function(e){t.setState({searchField:e.target.value},(function(){}))},t.state={kitten:[],searchField:""},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(t){return t.json()})).then((function(e){return t.setState({kitten:e})}))}},{key:"render",value:function(){var t=this.state,e=t.kitten,n=t.searchField,r=e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}));return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Kitty Paradise"}),Object(c.jsx)(f,{placeholder:"search kitty",changeHandler:this.changeHandler}),Object(c.jsx)(j,{kitten:r})]})}}]),n}(r.Component),p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),c(t),r(t),i(t),a(t)}))};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.418ba820.chunk.js.map