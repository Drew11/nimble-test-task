(this["webpackJsonpnimble-test-task"]=this["webpackJsonpnimble-test-task"]||[]).push([[0],{24:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),r=n.n(a),i=n(5),s=n.n(i),o=n(3);n(24);var d=n(4),u=n.n(d),l=(n(26),n.p+"static/media/play_circle_outline-24px.39fb5126.svg"),j=n.p+"static/media/stop_circle-24px.12a98abf.svg",p=function(t){var e=t.tracker,n=Object(o.b)();Object(a.useEffect)((function(){if(e.active){e.minutes>59&&n(function(t){return{type:"UPDATE_HOUR",payload:{id:t}}}(e.id)),e.seconds>59&&n(function(t){return{type:"UPDATE_MINUTE",payload:{id:t}}}(e.id));var t=setInterval((function(){n(function(t,e){return{type:"UPDATE_SECOND",payload:{id:t,currentSecond:e}}}(e.id,u()().unix()))}),1e3);return function(){return clearInterval(t)}}}),[e.active,e.seconds,e.minutes]);var r=function(t){var e=t.toString();return e.length<2&&(e="0".concat(e)),e},i=e.active?"play":"stop";return Object(c.jsxs)("div",{className:"tracker ".concat(i),children:[Object(c.jsx)("div",{className:"tracker-name",children:Object(c.jsx)("span",{children:e.name?e.name:"name"})}),Object(c.jsx)("div",{className:"tracker-time",children:"".concat(r(e.hours),": ").concat(r(e.minutes),":  ").concat(r(e.seconds))}),Object(c.jsxs)("div",{className:"tracker-controls-btn",children:[Object(c.jsx)("img",{src:e.active?j:l,className:"tracker-controls-btn",onClick:function(){e.active?n({type:"STOP_TRACKER",payload:{id:e.id}}):n(function(t,e){return{type:"START_TRACKER",payload:{id:t,startingTime:e}}}(e.id,u()().unix()))}}),Object(c.jsx)("div",{className:"remove",onClick:function(){n(function(t){return{type:"REMOVE_TRACKER",payload:t}}(e))}})]})]})};n(27);var m=function(){var t=Object(o.b)(),e=Object(o.c)((function(t){return t})),n=function(n){var c=u()().toString(),a=""===n.target.value||void 0===n.target.value?c:n.target.value,r={id:"".concat(c,"-").concat(e.length),name:a,seconds:0,minutes:0,hours:0,startingTime:u()().unix(),active:!0,created:u()().unix()};"Enter"!==n.code&&"click"!==n.type||t({type:"ADD_TRACKER",payload:r})};return Object(c.jsxs)("div",{className:"add-tracker",children:[Object(c.jsx)("input",{type:"text",className:"add-tracker-input",onKeyDown:n,placeholder:"Enter tracker name"}),Object(c.jsx)("div",{className:"add-tracker-btn",onClick:n})]})};var b=function(){var t=Object(o.c)((function(t){return t})).map((function(t,e){return Object(c.jsx)(p,{tracker:t},e)}));return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{className:"App-header",children:Object(c.jsx)("h1",{children:"tracker"})}),Object(c.jsx)("main",{children:Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)(m,{}),Object(c.jsx)("div",{className:"tracker-list",children:t})]})})]})},O=n(6),v=n(2),f=n(12);var y=function(){try{var t=localStorage.getItem("state");if(null===t)return;return JSON.parse(t)}catch(e){return}}(),T=Object(O.b)((function(t,e){switch(e.type){case"ADD_TRACKER":return[].concat(Object(f.a)(t),[e.payload]);case"REMOVE_TRACKER":return t.filter((function(t){return t.id!==e.payload.id}));case"START_TRACKER":return t.map((function(t){return t.id===e.payload.id?Object(v.a)(Object(v.a)({},t),{},{startingTime:e.payload.startingTime-t.seconds,active:!0}):t}));case"STOP_TRACKER":return t.map((function(t){return t.id===e.payload.id?Object(v.a)(Object(v.a)({},t),{},{startingTime:0,active:!1}):t}));case"UPDATE_SECOND":return t.map((function(t){return t.id===e.payload.id?Object(v.a)(Object(v.a)({},t),{},{seconds:t.seconds+(e.payload.currentSecond-t.startingTime),startingTime:t.startingTime+(e.payload.currentSecond-t.startingTime)}):t}));case"UPDATE_MINUTE":return t.map((function(t){return t.id===e.payload.id?Object(v.a)(Object(v.a)({},t),{},{seconds:0,minutes:t.minutes+1}):t}));case"UPDATE_HOUR":return t.map((function(t){return t.id===e.payload.id?Object(v.a)(Object(v.a)({},t),{},{minutes:0,hours:t.hours+1}):t}));default:return t}}),y||[]);T.subscribe((function(){!function(t){try{var e=JSON.stringify(t);localStorage.setItem("state",e)}catch(n){}}(T.getState())}));var h=T;s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(o.a,{store:h,children:Object(c.jsx)(b,{})})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.e1fbd09e.chunk.js.map