(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),l=n.n(c),u=(n(14),n(1)),o=n(2),i=n(4),s=n(3),m=n(5),p=(n(15),r.a.createContext()),h=r.a.createContext(),b=function(e){var t=Object(a.useContext)(p),n=Object(a.useContext)(h);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,n.isAuthenticated?n.name:"Please login"),r.a.createElement("p",null,"This is grand child component, I also can see there are"," ",t.users.length," users in the context"))},d=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"This is child component"),r.a.createElement(b,null))}}]),t}(a.Component),j=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.Consumer,null,function(e){return r.a.createElement("div",null,r.a.createElement("p",null,"This is parent component, I can see there are"," ",e.users.length," users in the context"),r.a.createElement(d,null))})}}]),t}(a.Component),E={users:[{name:"Jeremy Gu",age:18},{name:"Nicole Dong",age:17},{name:"Harper Gu",age:1}]},O={isAuthenticated:!0,name:"Jeremy Gu"},f=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(h.Provider,{value:O},r.a.createElement(p.Provider,{value:E},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},"Welcome to React"),r.a.createElement(j,null))))}}]),t}(a.Component);l.a.render(r.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.73a68867.chunk.js.map