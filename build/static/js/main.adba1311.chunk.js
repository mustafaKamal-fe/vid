(this.webpackJsonpfetcher=this.webpackJsonpfetcher||[]).push([[0],{21:function(e,n,t){e.exports=t.p+"static/media/eighty.655f0a46.mp3"},22:function(e,n,t){e.exports=t.p+"static/media/five.f5b2f9c8.mp3"},23:function(e,n,t){e.exports=t.p+"static/media/ninty.f220dccb.mp3"},24:function(e,n,t){e.exports=t.p+"static/media/tfive.938f04c6.mp3"},26:function(e,n,t){e.exports=t.p+"static/media/videoo.3f19604a.mp4"},27:function(e,n,t){e.exports=t.p+"static/media/live.3fd06b63.jpg"},28:function(e,n,t){"use strict";t.r(n),t.d(n,"light",(function(){return r})),t.d(n,"dark",(function(){return a}));var r={body:{bg:"white"},ScreenComp:{border:"#caabab",FrameLine:{bg:"rgb(225, 211, 211)"}},settingsIcons:{bg:"rgb(87, 87, 90)"},shellAndProg:{bg:"rgb(221, 217, 217)",color:"black"}},a={body:{bg:"black"},ScreenComp:{border:"#575353",FrameLine:{bg:"rgb(61, 59, 59)"}},settingsIcons:{bg:"#c7c5c5"},shellAndProg:{bg:"#3f3f3f",color:"white"}}},29:function(e,n,t){e.exports=t(40)},40:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(17),o=t.n(i),c=t(4),u=t(6),l=t(1),s=t(2),d=Object(r.createContext)(),b=Object(r.createContext)();function f(){var e=Object(l.a)(["\n  fill: ",";\n  stroke: ",";\n"]);return f=function(){return e},e}var m=s.b.circle(f(),(function(e){return e.theme.use.shellAndProg.bg}),(function(e){return e.launched?"green":"rgb(243,90,90)"})),p=function(e){var n=Object(r.useContext)(d),t=Object(r.useContext)(b),i=Object(c.a)(t,1)[0],o=e.radius,u=e.stroke,l=e.progress,s=o-2*u,f=2*s*Math.PI,p=f-l/100*f;return a.a.createElement("svg",{height:2*o,width:2*o},a.a.createElement(m,{launched:!!i.fire,theme:n,strokeWidth:u,strokeDasharray:f+" "+f,style:{strokeDashoffset:p},r:s,cx:o,cy:o}))};function h(){var e=Object(l.a)(["\n  width: 50%;\n  margin: auto;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  outline: none;\n  border: none;\n  background: none;\n  transform: scale(",");\n  &:hover {\n    outline: none;\n    background: none;\n  }\n"]);return h=function(){return e},e}function g(){var e=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n  color: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"]);return g=function(){return e},e}var v=s.b.span(g(),(function(e){return e.theme.use.shellAndProg.color})),x=s.b.button(h(),(function(e){return e.btnStyle?.9:1})),j=function(){var e=Object(r.useContext)(d),n=Object(r.useContext)(b),t=Object(c.a)(n,2),i=t[0],o=t[1],u=Object(r.useState)(0),l=Object(c.a)(u,2),s=l[0],f=l[1],m=Object(r.useState)(!1),h=Object(c.a)(m,2),g=h[0],j=h[1];return Object(r.useEffect)((function(){i.ready&&(f(100),document.querySelector("#vid").addEventListener("ended",(function(){f(0),o({type:"REPEAT"})})))}),[i.ready,o]),a.a.createElement(x,{btnStyle:g,disabled:!0===i.start&&!1===i.ready&&!0,onClick:function(){j(!0),setTimeout((function(){j(!1)}),100),function(){if(i.ready)o({type:"FIRE",payload:{text:"Launched",fire:!0}});else{if(100===s)return;!1===i.start&&(o({type:"START"}),f(s+50))}}()}},a.a.createElement(v,{theme:e},i.stateText),a.a.createElement(p,{radius:50,stroke:5,progress:s}))};function O(){var e=Object(l.a)(["\n  width: 100%;\n  padding: ",";\n  overflow: hidden;\n  margin-top: 0.5rem;\n  border-radius: 10px;\n  background: ",";\n  display: flex;\n  height: ",";\n  overflow: ",";\n  position: relative;\n  /* add scroll bar styles here  */\n  ::-webkit-scrollbar {\n    display: none;\n  }\n\n  /* Track */\n  ::-webkit-scrollbar-track {\n    display: none;\n  }\n\n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    display: none;\n  }\n\n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    display: none;\n  }\n"]);return O=function(){return e},e}function y(){var e=Object(l.a)(["\n  padding: 4px;\n  background-color: rgb(89, 89, 247);\n  border-radius: 50%;\n"]);return y=function(){return e},e}function E(){var e=Object(l.a)(["\n  padding: 4px;\n  background-color: rgb(243, 90, 90);\n  border-radius: 50%;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n"]);return E=function(){return e},e}function w(){var e=Object(l.a)(["\n  background-color: ",";\n  height: 6px;\n  border-radius: 10px;\n  flex-grow: 2;\n  margin-right: auto;\n"]);return w=function(){return e},e}function k(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]);return k=function(){return e},e}function C(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  width: ",";\n  border: 1px solid ",";\n  padding: 0.5rem;\n  border-radius: 10px;\n  margin: ",";\n  max-height: ",";\n"]);return C=function(){return e},e}var L=s.b.div(C(),(function(e){return e.isCameraView?"75%":"90%"}),(function(e){return e.theme.ScreenComp.border}),(function(e){return e.isCameraView?"0.8rem 0":"0.5rem auto"}),(function(e){return e.isCameraView||e.isLog?"100%":"23.333333vh"})),S=s.b.div(k()),T=s.b.div(w(),(function(e){return e.theme.ScreenComp.FrameLine.bg})),R=s.b.div(E()),A=s.b.div(y()),V=s.b.div(O(),(function(e){return e.isCameraView?"0.5rem":"0"}),(function(e){return e.isCameraView?"transparent":"inherit"}),(function(e){return!0===e.isCameraView||e.isLog?"100%":"".concat(100/3.5,"vh")}),(function(e){return e.isLog?"scroll":"hidden"})),P=function(e){var n=e.children,t=e.isCameraView,i=e.isLog,o=Object(r.useContext)(d).use;return a.a.createElement(L,{isCameraView:t,isLog:i,theme:o},a.a.createElement(S,null,a.a.createElement(T,{theme:o}),a.a.createElement(R,null),a.a.createElement(A,null)),a.a.createElement(V,{isCameraView:t,isLog:i},n))},F=t(10),I=t(21),D=t.n(I),M=t(22),q=t.n(M),z=t(23),H=t.n(z),U=t(24),Y=t.n(U),_=Object(r.createContext)(),N=Object(r.createContext)();function B(){var e=Object(l.a)(["\n  margin: 0 0.5rem;\n  font-size: 1.5rem;\n  color: rgb(89, 89, 247);\n  &:hover {\n    background-color: transparent;\n    cursor: pointer;\n  }\n"]);return B=function(){return e},e}function W(){var e=Object(l.a)(["\n  visibility: hidden;\n  position: fixed;\n"]);return W=function(){return e},e}function J(){var e=Object(l.a)(["\n  position: relative;\n  margin-left: 0.5rem;\n  visibility: ",";\n  & span {\n    display: block;\n    bottom: 0px;\n    width: 3px;\n    height: 4px;\n    background: #9b59b6;\n    position: absolute;\n    animation: "," 1.1s infinite ease-in-out;\n  }\n  & span:nth-child(2) {\n    left: 11px;\n    animation-delay: 0.2s;\n  }\n\n  & span:nth-child(3) {\n    left: 22px;\n    animation-delay: 0.4s;\n  }\n"]);return J=function(){return e},e}function G(){var e=Object(l.a)(["\n  position: absolute;\n  right: 15%;\n  top: 7%;\n  color: red;\n  width: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return G=function(){return e},e}function K(){var e=Object(l.a)(["\n    0% {height:5px;transform:translateY(0px);background:#9b59b6;}\n    25% {height:20px;transform:translateY(8px);background:#3498db;}\n    50% {height:5px;transform:translateY(0px);background:#9b59b6;}\n    100% {height:5px;transform:translateY(0px);background:#9b59b6;}\n"]);return K=function(){return e},e}var Q=Object(s.c)(K()),X=s.b.div(G()),Z=s.b.div(J(),(function(e){return e.showWave?"visibile":"hidden"}),Q),$=s.b.audio(W()),ee=Object(s.b)(F.a)(B()),ne=function(){var e=Object(r.useContext)(N),n=Object(c.a)(e,1)[0],t=Object(r.useState)(!1),i=Object(c.a)(t,2),o=i[0],u=i[1],l=Object(r.useContext)(b),s=Object(c.a)(l,1)[0],d=Object(r.useState)(""),f=Object(c.a)(d,2),m=f[0],p=f[1],h=function(e){fetch(e,{cache:"no-store"}).then((function(e){if(200===e.status)return e.blob()})).then((function(e){var n=URL.createObjectURL(new Blob([e],{type:"audio/mp3"}));p(n)}))};return Object(r.useEffect)((function(){s.start&&(2===n&&h(D.a),50===n&&h(H.a),70===n&&h(q.a),90===n&&h(Y.a))}),[s.start,n]),Object(r.useEffect)((function(){s.fire&&(document.querySelector("#vid").addEventListener("play",(function(){!0!==o&&u(!0)})),document.querySelector("#vid").addEventListener("ended",(function(){!1!==o&&u(!1)})))}),[s.fire,o]),Object(r.useEffect)((function(){""!==m&&(u(!0),document.querySelector("#audio-player").play()),document.querySelector("#audio-player").addEventListener("ended",(function(){u(!1)}))}),[m]),a.a.createElement(r.Fragment,null,a.a.createElement($,{id:"audio-player",src:m}),a.a.createElement(X,null,a.a.createElement(ee,{icon:"headset"}),a.a.createElement(Z,{showWave:o},a.a.createElement("span",null),a.a.createElement("span",null),a.a.createElement("span",null))))},te=function(){return a.a.createElement(P,{isCameraView:!1},a.a.createElement(ne,null),a.a.createElement(j,null))};function re(){var e=Object(l.a)(["\n  background-color: ",";\n  align-self: center;\n  margin: 0 0.5rem;\n  padding: 1rem;\n  height: 100%;\n  width: 100%;\n  color: ",";\n  overflow: auto;\n  /* add scroll bar styles here  */\n  ::-webkit-scrollbar {\n    display: none;\n  }\n\n  /* Track */\n  ::-webkit-scrollbar-track {\n    display: none;\n  }\n\n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    display: none;\n  }\n\n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    display: none;\n  }\n"]);return re=function(){return e},e}var ae=s.b.div(re(),(function(e){return e.theme.shellAndProg.bg}),(function(e){return e.theme.shellAndProg.color})),ie=function(){var e=Object(r.useContext)(d).use,n=Object(r.useContext)(_),t=Object(c.a)(n,2),i=t[0],o=(t[1],Object(r.useContext)(b)),u=Object(c.a)(o,2),l=u[0],s=(u[1],Object(r.useRef)());return Object(r.useEffect)((function(){var e=document.createElement("p");e.innerHTML="_> "+i,s.current.append(e),e.scrollIntoView()}),[i]),Object(r.useEffect)((function(){if(!0===l.start&&!0!==l.ready){var e=document.createElement("p");e.innerHTML="_> <span style=color:red>initializing</span>",s.current.append(e),e.scrollIntoView()}if(!0===l.ready){var n=document.createElement("p");n.innerHTML="<p>_> <span style=color:green> succesfull</span></p> <p>_> launch now</p>",s.current.append(n),n.scrollIntoView(),document.querySelector("#vid").addEventListener("ended",(function(){s.current.innerHTML="_>"}))}}),[l.start,l.ready]),a.a.createElement(P,{isCameraView:!1,isLog:!0},a.a.createElement(ae,{theme:e,ref:s,id:"shell"}))},oe=t(8),ce=t.n(oe),ue=t(25),le=t(26),se=t.n(le);function de(){var e=Object(l.a)(["\n  color: rgb(89, 89, 247);\n  text-align: center;\n  padding: 0.5rem;\n"]);return de=function(){return e},e}function be(){var e=Object(l.a)(["\n  width: 45px;\n  height: 90%;\n  display: flex;\n  flex-direction: column-reverse;\n  background-color: ",";\n  align-self: center;\n  margin: 0 0.5rem;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  overflow: hidden;\n"]);return be=function(){return e},e}function fe(){var e=Object(l.a)(["\n  height: ","%;\n  text-align: center;\n  background-color: rgb(89, 89, 247);\n  position: relative;\n  & .bubble-left {\n    background: rgb(89, 89, 247);\n    width: 49px;\n    height: 26px;\n    border-radius: 50%;\n    position: absolute;\n    top: -4px;\n    left: -10px;\n    animation: 0.5s "," linear 0.3s infinite alternate;\n  }\n  & .bubble-right {\n    background: rgb(89, 89, 247);\n    width: 48px;\n    height: 26px;\n    border-radius: 50%;\n    position: absolute;\n    top: -4px;\n    right: -10px;\n    animation: 0.5s "," linear infinite alternate;\n  }\n"]);return fe=function(){return e},e}function me(){var e=Object(l.a)(["\n  from{\n    top: -4px;\n  } \n  to{\n    top: -1px;\n  }\n"]);return me=function(){return e},e}var pe=Object(s.c)(me()),he=s.b.div(fe(),(function(e){return e.loaded}),pe,pe),ge=s.b.div(be(),(function(e){return e.theme.use.shellAndProg.bg})),ve=s.b.div(de()),xe=function(){var e=Object(r.useContext)(d),n=Object(r.useContext)(b),t=Object(c.a)(n,2),i=t[0],o=t[1],u=Object(r.useState)(0),l=Object(c.a)(u,2),s=l[0],f=l[1],m=Object(r.useContext)(_),p=Object(c.a)(m,2),h=(p[0],p[1]),g=Object(r.useContext)(N),v=Object(c.a)(g,2),x=(v[0],v[1]),j=function(){var e=Object(ue.a)(ce.a.mark((function e(){var n,t,r,a,i,c,u,l,d,b,m,p,g,v;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(se.a,{cache:"no-store"});case 2:n=e.sent,t=n.body.getReader(),r=+n.headers.get("Content-Length"),a=0,i=[],c=function(e){return e!==Math.round(a/r*100)?Math.round(a/r*100):e},u=ce.a.mark((function e(){var n,r,o,u;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.read();case 2:if(n=e.sent,r=n.done,o=n.value,!r){e.next=7;break}return e.abrupt("return","break");case 7:h((function(e){return o.toString()!==e?o.slice(0,3).toString():e})),i.push(o),a+=o.length,u=c(s),f(u),x(u);case 13:case"end":return e.stop()}}),e)}));case 9:return e.delegateYield(u(),"t0",11);case 11:if("break"!==e.t0){e.next=14;break}return e.abrupt("break",16);case 14:e.next=9;break;case 16:for(l=new Uint8Array(a),d=0,b=0,m=i;b<m.length;b++)p=m[b],l.set(p,d),d+=p.length;return g=new Blob([l],{type:"video/mp4"}),v=URL.createObjectURL(g),o({type:"READY",payload:{vidData:v}}),e.abrupt("return",(function(){URL.revokeObjectURL(v)}));case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){i.start&&j()}),[i.start]),Object(r.useEffect)((function(){i.ready&&document.querySelector("#vid").addEventListener("ended",(function(){f(0)}))}),[i.ready]),a.a.createElement("div",null,a.a.createElement(ge,{id:"progress-bar-itself-container",theme:e},a.a.createElement(he,{id:"progress-bar-itself",loaded:s},a.a.createElement("div",{className:"bubble-left"}),a.a.createElement("div",{className:"bubble-right"}))),a.a.createElement(ve,null,s,"%"))};function je(){var e=Object(l.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 0.8rem;\n"]);return je=function(){return e},e}var Oe=s.b.div(je()),ye=function(){return a.a.createElement(P,{isCameraView:!1},a.a.createElement(Oe,null,a.a.createElement(ie,null),a.a.createElement(xe,null)))};function Ee(){var e=Object(l.a)(["\n  width: 100%;\n  margin-left: 1rem;\n  display: flex;\n  padding: 1rem;\n  justify-content: space-around;\n  align-items: center;\n"]);return Ee=function(){return e},e}function we(){var e=Object(l.a)(["\n  margin: 0 0.5rem;\n  font-size: 1.5rem;\n  color: ",";\n  &:hover {\n    background-color: transparent;\n    cursor: pointer;\n  }\n"]);return we=function(){return e},e}var ke=Object(s.b)(F.a)(we(),(function(e){return e.theme.settingsIcons.bg})),Ce=s.b.div(Ee()),Le=function(){var e=Object(r.useContext)(d),n=e.use,i=e.setTheme;return a.a.createElement(r.Fragment,null,a.a.createElement(P,{isCameraView:!1,isLog:!0},a.a.createElement(Ce,null,a.a.createElement(ke,{theme:n,icon:"sun",onClick:function(e){Promise.resolve().then(t.bind(null,28)).then((function(e){var n=e.light;i(n)}))}}),a.a.createElement(ke,{theme:n,icon:"moon",onClick:function(e){Promise.resolve().then(t.bind(null,28)).then((function(e){var n=e.dark;i(n)}))}}),a.a.createElement(ke,{theme:n,icon:"compress",onClick:function(e){document.fullscreenEnabled?document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen():alert("Fullscreen is not supported on "+navigator.userAgent+"try the app on a diffrent browser")}}),a.a.createElement("a",{href:"https://www.imustafa.com",target:"_new"},a.a.createElement(ke,{theme:n,icon:"user-astronaut"})))))};function Se(){var e=Object(l.a)(["\n  padding: 0.5rem;\n  min-width: 300px;\n  width: 25%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return Se=function(){return e},e}var Te=s.b.div(Se()),Re=function(){return a.a.createElement(Te,null,a.a.createElement(te,null),a.a.createElement(ye,null),a.a.createElement(Le,null))},Ae=t(27),Ve=t.n(Ae);function Pe(){var e=Object(l.a)(["\n  z-index: 3000;\n  position: absolute;\n  right: 5%;\n  top: 5%;\n  padding: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  & .live {\n    color: white;\n    font-weight: 900;\n    font-size: 1.5rem;\n  }\n  & .signal {\n    margin-right: 0.5rem;\n    padding: 0.8rem;\n    border-radius: 50%;\n    background-color: red;\n    animation: 0.5s "," infinite;\n    animation-direction: alternate;\n  }\n"]);return Pe=function(){return e},e}function Fe(){var e=Object(l.a)(["\n  background-repeat: no-repeat;\n  background-size: cover;\n  overflow: hidden;\n  width: 100%;\n  background-color: #303030;\n  border-radius: 10px;\n  position: relative;\n  background-image: url(",");\n  z-index: ",";\n"]);return Fe=function(){return e},e}function Ie(){var e=Object(l.a)(["\n  @media (min-width: 1500px) {\n    width: 1800px;\n    position: absolute;\n    left: -200px;\n  }\n  @media (max-width: 1500px) {\n    width: 1290px;\n    position: absolute;\n    left: -200px;\n  }\n"]);return Ie=function(){return e},e}function De(){var e=Object(l.a)(["\n  from {\n    background-color: #ff00008f;\n  }\n  to{\n    background-color: red;\n  }\n"]);return De=function(){return e},e}var Me=Object(s.c)(De()),qe=s.b.video(Ie()),ze=s.b.div(Fe(),Ve.a,(function(e){return"true"===e.start?"1":"-1"})),He=s.b.div(Pe(),Me),Ue=function(){var e=Object(r.useContext)(b),n=Object(c.a)(e,2),t=n[0],i=(n[1],Object(r.useRef)());return Object(r.useEffect)((function(){t.ready&&t.fire&&i.current.play()}),[t.fire,t.ready]),a.a.createElement(P,{isCameraView:!0},a.a.createElement(ze,{start:t.start?"true":"false"},t.start&&a.a.createElement(He,null,a.a.createElement("div",{className:"signal"}),a.a.createElement("div",{className:"live"},"Live")),t.ready&&a.a.createElement(qe,{id:"vid",ref:i,onContextMenu:function(e){return e.preventDefault()}},a.a.createElement("source",{src:t.vidData,type:"video/mp4"}))))};function Ye(){var e=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  display: none;\n  @media (min-width: 1201px) {\n    display: flex;\n  }\n"]);return Ye=function(){return e},e}var _e=s.b.div(Ye()),Ne=function(){return a.a.createElement(_e,null,a.a.createElement(Re,null),a.a.createElement(Ue,null))},Be=t(28),We=t(7),Je=t(11),Ge=t(5);function Ke(){var e=Object(l.a)(["\n  display: none;\n  @media (max-width: 1200px) {\n    display: flex;\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n    justify-content: center;\n    align-items: center;\n    color: white;\n  }\n"]);return Ke=function(){return e},e}function Qe(){var e=Object(l.a)(["\n\n* {\n  box-sizing: border-box !important;\n}\n\nbody,\nhtml,\n#root {\n  font-family: monospace;\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  background-color: ","\n}\n\n* :focus {\n  outline: none;\n}\n\ncircle {\n  transition: stroke-dashoffset 0.35s;\n  transform: rotate(-90deg);\n  transform-origin: 50% 50%;\n}\n\n\n"]);return Qe=function(){return e},e}We.b.add(Je.c,Je.a,Je.b,Ge.d,Ge.c,Ge.a,Ge.f,Ge.e,Ge.b);var Xe=Object(s.a)(Qe(),(function(e){return e.theme.use.body.bg})),Ze=function(){var e=Object(r.useContext)(d);return a.a.createElement(Xe,{theme:e})},$e={start:!1,ready:!1,fire:!1,vidData:null,stateText:"START"},en=function(e,n){return"START"===n.type?Object(u.a)(Object(u.a)({},e),{},{start:!0,stateText:"Injecting"}):"READY"===n.type?Object(u.a)(Object(u.a)({},e),{},{ready:!0,stateText:"Fire",vidData:n.payload.vidData}):"FIRE"===n.type?Object(u.a)(Object(u.a)({},e),{},{stateText:n.payload.text,fire:n.payload.fire}):"REPEAT"===n.type?$e:e},nn=s.b.div(Ke()),tn=function(){var e=Object(r.useReducer)(en,$e),n=Object(r.useState)(""),t=Object(r.useState)(Be.dark),i=Object(c.a)(t,2),o=i[0],u=i[1],l=Object(r.useState)(0);return a.a.createElement(b.Provider,{value:e},a.a.createElement(_.Provider,{value:n},a.a.createElement(N.Provider,{value:l},a.a.createElement(d.Provider,{value:{use:o,setTheme:u}},a.a.createElement(Ze,null),a.a.createElement(nn,null,"A Space Shuttle needs a computer monitor to fire it!!"),a.a.createElement(Ne,null)))))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(tn,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.adba1311.chunk.js.map