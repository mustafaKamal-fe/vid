(this.webpackJsonpfetcher=this.webpackJsonpfetcher||[]).push([[0],{16:function(e,t,n){e.exports=n(24)},24:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(9),u=n.n(c),o=(n(8),n(3)),i=n.n(o),s=n(10),d=n(2),l=n(11),f=n(4),p=n.n(f);function b(){var e=Object(l.a)(["\n  width: ","%;\n  padding: 1rem;\n  text-align: center;\n  background-color: red;\n"]);return b=function(){return e},e}var h=n(12).a.div(b(),(function(e){return e.loaded})),m=function(){var e=Object(r.useState)(null),t=Object(d.a)(e,2),n=(t[0],t[1]),c=Object(r.useState)(!1),u=Object(d.a)(c,2),o=u[0],l=u[1],f=Object(r.useState)(0),b=Object(d.a)(f,2),m=b[0],v=b[1],g=function(){var e=Object(s.a)(i.a.mark((function e(){var t,r,a,c,u,o,s,d,f,b,h,m,g,j,O,E;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p.a);case 2:t=e.sent,r=t.body.getReader(),a=+t.headers.get("Content-Length"),c=0,u=[],o=function(e){return e!==Math.round(c/a*100)?Math.round(c/a*100):e};case 8:return e.next=11,r.read();case 11:if(s=e.sent,d=s.done,f=s.value,!d){e.next=16;break}return e.abrupt("break",21);case 16:u.push(f),c+=f.length,v(o),e.next=8;break;case 21:for(b=new Uint8Array(c),h=0,m=0,g=u;m<g.length;m++)j=g[m],b.set(j,h),h+=j.length;O=new Blob([b],{type:"video/mp4"}),E=URL.createObjectURL(O),l(!0),n(E);case 28:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){g()}),[]),a.a.createElement("div",null,a.a.createElement(h,{loaded:m},m,"%"),o&&a.a.createElement("video",{width:"500",height:"500",autoPlay:!0},a.a.createElement("source",{src:p.a,type:"video/mp4"})))},v=function(){return a.a.createElement(m,null)};u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root"))},4:function(e,t,n){e.exports=n.p+"static/media/video.15b75f5a.mp4"},8:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.d22dbed9.chunk.js.map