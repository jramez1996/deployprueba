"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1752],{49101:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(1413),r=n(67294),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},i=n(30076),c=function(e,t){return r.createElement(i.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:o}))};c.displayName="PlusOutlined";var l=r.forwardRef(c)},51752:function(e,t,n){n.d(t,{Z:function(){return J}});var a=n(87462),r=n(4942),o=n(67294),i=n(29439),c=n(71002),l=n(44925),u=n(1413),s=n(94184),f=n.n(s),d=n(50344),v=n(31131),p=n(21770),m=n(93433),b=n(75164),h=n(48717);function y(e){var t=(0,o.useRef)(),n=(0,o.useRef)(!1);return(0,o.useEffect)((function(){return function(){n.current=!0,b.Z.cancel(t.current)}}),[]),function(){for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];n.current||(b.Z.cancel(t.current),t.current=(0,b.Z)((function(){e.apply(void 0,r)})))}}var g=n(15105);function Z(e,t){var n,a=e.prefixCls,i=e.id,c=e.active,l=e.tab,u=l.key,s=l.tab,d=l.disabled,v=l.closeIcon,p=e.closable,m=e.renderWrapper,b=e.removeAriaLabel,h=e.editable,y=e.onClick,Z=e.onRemove,E=e.onFocus,w=e.style,k="".concat(a,"-tab");o.useEffect((function(){return Z}),[]);var C=h&&!1!==p&&!d;function x(e){d||y(e)}var N=o.createElement("div",{key:u,ref:t,className:f()(k,(n={},(0,r.Z)(n,"".concat(k,"-with-remove"),C),(0,r.Z)(n,"".concat(k,"-active"),c),(0,r.Z)(n,"".concat(k,"-disabled"),d),n)),style:w,onClick:x},o.createElement("div",{role:"tab","aria-selected":c,id:i&&"".concat(i,"-tab-").concat(u),className:"".concat(k,"-btn"),"aria-controls":i&&"".concat(i,"-panel-").concat(u),"aria-disabled":d,tabIndex:d?null:0,onClick:function(e){e.stopPropagation(),x(e)},onKeyDown:function(e){[g.Z.SPACE,g.Z.ENTER].includes(e.which)&&(e.preventDefault(),x(e))},onFocus:E},s),C&&o.createElement("button",{type:"button","aria-label":b||"remove",tabIndex:0,className:"".concat(k,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),h.onEdit("remove",{key:u,event:t})}},v||h.removeIcon||"\xd7"));return m?m(N):N}var E=o.forwardRef(Z),w={width:0,height:0,left:0,top:0};var k={width:0,height:0,left:0,top:0,right:0};var C=n(11688),x=n(70271);function N(e,t){var n=e.prefixCls,a=e.editable,r=e.locale,i=e.style;return a&&!1!==a.showAdd?o.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:i,"aria-label":(null===r||void 0===r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}var P=o.forwardRef(N);function T(e,t){var n=e.prefixCls,a=e.id,c=e.tabs,l=e.locale,u=e.mobile,s=e.moreIcon,d=void 0===s?"More":s,v=e.moreTransitionName,p=e.style,m=e.className,b=e.editable,h=e.tabBarGutter,y=e.rtl,Z=e.removeAriaLabel,E=e.onTabClick,w=(0,o.useState)(!1),k=(0,i.Z)(w,2),N=k[0],T=k[1],S=(0,o.useState)(null),I=(0,i.Z)(S,2),R=I[0],M=I[1],A="".concat(a,"-more-popup"),L="".concat(n,"-dropdown"),O=null!==R?"".concat(A,"-").concat(R):null,B=null===l||void 0===l?void 0:l.dropdownAriaLabel;var D=o.createElement(C.ZP,{onClick:function(e){var t=e.key,n=e.domEvent;E(t,n),T(!1)},id:A,tabIndex:-1,role:"listbox","aria-activedescendant":O,selectedKeys:[R],"aria-label":void 0!==B?B:"expanded dropdown"},c.map((function(e){var t=b&&!1!==e.closable&&!e.disabled;return o.createElement(C.sN,{key:e.key,id:"".concat(A,"-").concat(e.key),role:"option","aria-controls":a&&"".concat(a,"-panel-").concat(e.key),disabled:e.disabled},o.createElement("span",null,e.tab),t&&o.createElement("button",{type:"button","aria-label":Z||"remove",tabIndex:0,className:"".concat(L,"-menu-item-remove"),onClick:function(t){var n,a;t.stopPropagation(),n=t,a=e.key,n.preventDefault(),n.stopPropagation(),b.onEdit("remove",{key:a,event:n})}},e.closeIcon||b.removeIcon||"\xd7"))})));function W(e){for(var t=c.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===R}))||0,a=t.length,r=0;r<a;r+=1){var o=t[n=(n+e+a)%a];if(!o.disabled)return void M(o.key)}}(0,o.useEffect)((function(){var e=document.getElementById(O);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[R]),(0,o.useEffect)((function(){N||M(null)}),[N]);var K=(0,r.Z)({},y?"marginRight":"marginLeft",h);c.length||(K.visibility="hidden",K.order=1);var j=f()((0,r.Z)({},"".concat(L,"-rtl"),y)),V=u?null:o.createElement(x.Z,{prefixCls:L,overlay:D,trigger:["hover"],visible:N,transitionName:v,onVisibleChange:T,overlayClassName:j,mouseEnterDelay:.1,mouseLeaveDelay:.1},o.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:K,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":A,id:"".concat(a,"-more"),"aria-expanded":N,onKeyDown:function(e){var t=e.which;if(N)switch(t){case g.Z.UP:W(-1),e.preventDefault();break;case g.Z.DOWN:W(1),e.preventDefault();break;case g.Z.ESC:T(!1);break;case g.Z.SPACE:case g.Z.ENTER:null!==R&&E(R,e)}else[g.Z.DOWN,g.Z.SPACE,g.Z.ENTER].includes(t)&&(T(!0),e.preventDefault())}},d));return o.createElement("div",{className:f()("".concat(n,"-nav-operations"),m),style:p,ref:t},V,o.createElement(P,{prefixCls:n,locale:l,editable:b}))}var S=o.memo(o.forwardRef(T),(function(e,t){return t.tabMoving})),I=(0,o.createContext)(null),R=Math.pow(.995,20);function M(e,t){var n=o.useRef(e),a=o.useState({}),r=(0,i.Z)(a,2)[1];return[n.current,function(e){var a="function"===typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,r({})}]}var A=function(e){var t,n=e.position,a=e.prefixCls,r=e.extra;if(!r)return null;var i={};return r&&"object"===(0,c.Z)(r)&&!o.isValidElement(r)?i=r:i.right=r,"right"===n&&(t=i.right),"left"===n&&(t=i.left),t?o.createElement("div",{className:"".concat(a,"-extra-content")},t):null};function L(e,t){var n,c=o.useContext(I),l=c.prefixCls,s=c.tabs,d=e.className,v=e.style,p=e.id,g=e.animated,Z=e.activeKey,C=e.rtl,x=e.extra,N=e.editable,T=e.locale,L=e.tabPosition,O=e.tabBarGutter,B=e.children,D=e.onTabClick,W=e.onTabScroll,K=(0,o.useRef)(),j=(0,o.useRef)(),V=(0,o.useRef)(),_=(0,o.useRef)(),q=function(){var e=(0,o.useRef)(new Map);return[function(t){return e.current.has(t)||e.current.set(t,o.createRef()),e.current.get(t)},function(t){e.current.delete(t)}]}(),H=(0,i.Z)(q,2),z=H[0],G=H[1],Y="top"===L||"bottom"===L,F=M(0,(function(e,t){Y&&W&&W({direction:e>t?"left":"right"})})),X=(0,i.Z)(F,2),U=X[0],J=X[1],Q=M(0,(function(e,t){!Y&&W&&W({direction:e>t?"top":"bottom"})})),$=(0,i.Z)(Q,2),ee=$[0],te=$[1],ne=(0,o.useState)(0),ae=(0,i.Z)(ne,2),re=ae[0],oe=ae[1],ie=(0,o.useState)(0),ce=(0,i.Z)(ie,2),le=ce[0],ue=ce[1],se=(0,o.useState)(0),fe=(0,i.Z)(se,2),de=fe[0],ve=fe[1],pe=(0,o.useState)(0),me=(0,i.Z)(pe,2),be=me[0],he=me[1],ye=(0,o.useState)(null),ge=(0,i.Z)(ye,2),Ze=ge[0],Ee=ge[1],we=(0,o.useState)(null),ke=(0,i.Z)(we,2),Ce=ke[0],xe=ke[1],Ne=(0,o.useState)(0),Pe=(0,i.Z)(Ne,2),Te=Pe[0],Se=Pe[1],Ie=(0,o.useState)(0),Re=(0,i.Z)(Ie,2),Me=Re[0],Ae=Re[1],Le=function(e){var t=(0,o.useRef)([]),n=(0,o.useState)({}),a=(0,i.Z)(n,2)[1],r=(0,o.useRef)("function"===typeof e?e():e),c=y((function(){var e=r.current;t.current.forEach((function(t){e=t(e)})),t.current=[],r.current=e,a({})}));return[r.current,function(e){t.current.push(e),c()}]}(new Map),Oe=(0,i.Z)(Le,2),Be=Oe[0],De=Oe[1],We=function(e,t,n){return(0,o.useMemo)((function(){for(var n,a=new Map,r=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||w,o=r.left+r.width,i=0;i<e.length;i+=1){var c,l=e[i].key,s=t.get(l);s||(s=t.get(null===(c=e[i-1])||void 0===c?void 0:c.key)||w);var f=a.get(l)||(0,u.Z)({},s);f.right=o-f.left-f.width,a.set(l,f)}return a}),[e.map((function(e){return e.key})).join("_"),t,n])}(s,Be,re),Ke="".concat(l,"-nav-operations-hidden"),je=0,Ve=0;function _e(e){return e<je?je:e>Ve?Ve:e}Y?C?(je=0,Ve=Math.max(0,re-Ze)):(je=Math.min(0,Ze-re),Ve=0):(je=Math.min(0,Ce-le),Ve=0);var qe=(0,o.useRef)(),He=(0,o.useState)(),ze=(0,i.Z)(He,2),Ge=ze[0],Ye=ze[1];function Fe(){Ye(Date.now())}function Xe(){window.clearTimeout(qe.current)}function Ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=We.get(e)||{width:0,height:0,left:0,right:0,top:0};if(Y){var n=U;C?t.right<U?n=t.right:t.right+t.width>U+Ze&&(n=t.right+t.width-Ze):t.left<-U?n=-t.left:t.left+t.width>-U+Ze&&(n=-(t.left+t.width-Ze)),te(0),J(_e(n))}else{var a=ee;t.top<-ee?a=-t.top:t.top+t.height>-ee+Ce&&(a=-(t.top+t.height-Ce)),J(0),te(_e(a))}}!function(e,t){var n=(0,o.useState)(),a=(0,i.Z)(n,2),r=a[0],c=a[1],l=(0,o.useState)(0),u=(0,i.Z)(l,2),s=u[0],f=u[1],d=(0,o.useState)(0),v=(0,i.Z)(d,2),p=v[0],m=v[1],b=(0,o.useState)(),h=(0,i.Z)(b,2),y=h[0],g=h[1],Z=(0,o.useRef)(),E=(0,o.useRef)(),w=(0,o.useRef)(null);w.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,a=t.screenY;c({x:n,y:a}),window.clearInterval(Z.current)},onTouchMove:function(e){if(r){e.preventDefault();var n=e.touches[0],a=n.screenX,o=n.screenY;c({x:a,y:o});var i=a-r.x,l=o-r.y;t(i,l);var u=Date.now();f(u),m(u-s),g({x:i,y:l})}},onTouchEnd:function(){if(r&&(c(null),g(null),y)){var e=y.x/p,n=y.y/p,a=Math.abs(e),o=Math.abs(n);if(Math.max(a,o)<.1)return;var i=e,l=n;Z.current=window.setInterval((function(){Math.abs(i)<.01&&Math.abs(l)<.01?window.clearInterval(Z.current):t(20*(i*=R),20*(l*=R))}),20)}},onWheel:function(e){var n=e.deltaX,a=e.deltaY,r=0,o=Math.abs(n),i=Math.abs(a);o===i?r="x"===E.current?n:a:o>i?(r=n,E.current="x"):(r=a,E.current="y"),t(-r,-r)&&e.preventDefault()}},o.useEffect((function(){function t(e){w.current.onTouchMove(e)}function n(e){w.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),e.current.addEventListener("touchstart",(function(e){w.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){w.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}}),[])}(K,(function(e,t){function n(e,t){e((function(e){return _e(e+t)}))}if(Y){if(Ze>=re)return!1;n(J,e)}else{if(Ce>=le)return!1;n(te,t)}return Xe(),Fe(),!0})),(0,o.useEffect)((function(){return Xe(),Ge&&(qe.current=window.setTimeout((function(){Ye(0)}),100)),Xe}),[Ge]);var Je=function(e,t,n,a,r){var i,c,l,u=r.tabs,s=r.tabPosition,f=r.rtl;["top","bottom"].includes(s)?(i="width",c=f?"right":"left",l=Math.abs(t.left)):(i="height",c="top",l=-t.top);var d=t[i],v=n[i],p=a[i],m=d;return v+p>d&&(m=d-p),(0,o.useMemo)((function(){if(!u.length)return[0,0];for(var t=u.length,n=t,a=0;a<t;a+=1){var r=e.get(u[a].key)||k;if(r[c]+r[i]>l+m){n=a-1;break}}for(var o=0,s=t-1;s>=0;s-=1)if((e.get(u[s].key)||k)[c]<l){o=s+1;break}return[o,n]}),[e,l,m,s,u.map((function(e){return e.key})).join("_"),f])}(We,{width:Ze,height:Ce,left:U,top:ee},{width:de,height:be},{width:Te,height:Me},(0,u.Z)((0,u.Z)({},e),{},{tabs:s})),Qe=(0,i.Z)(Je,2),$e=Qe[0],et=Qe[1],tt={};"top"===L||"bottom"===L?tt[C?"marginRight":"marginLeft"]=O:tt.marginTop=O;var nt=s.map((function(e,t){var n=e.key;return o.createElement(E,{id:p,prefixCls:l,key:n,tab:e,style:0===t?void 0:tt,closable:e.closable,editable:N,active:n===Z,renderWrapper:B,removeAriaLabel:null===T||void 0===T?void 0:T.removeAriaLabel,ref:z(n),onClick:function(e){D(n,e)},onRemove:function(){G(n)},onFocus:function(){Ue(n),Fe(),K.current&&(C||(K.current.scrollLeft=0),K.current.scrollTop=0)}})})),at=y((function(){var e,t,n,a,r,o,i,c,l,u=(null===(e=K.current)||void 0===e?void 0:e.offsetWidth)||0,f=(null===(t=K.current)||void 0===t?void 0:t.offsetHeight)||0,d=(null===(n=_.current)||void 0===n?void 0:n.offsetWidth)||0,v=(null===(a=_.current)||void 0===a?void 0:a.offsetHeight)||0,p=(null===(r=V.current)||void 0===r?void 0:r.offsetWidth)||0,m=(null===(o=V.current)||void 0===o?void 0:o.offsetHeight)||0;Ee(u),xe(f),Se(d),Ae(v);var b=((null===(i=j.current)||void 0===i?void 0:i.offsetWidth)||0)-d,h=((null===(c=j.current)||void 0===c?void 0:c.offsetHeight)||0)-v;oe(b),ue(h);var y=null===(l=V.current)||void 0===l?void 0:l.className.includes(Ke);ve(b-(y?0:p)),he(h-(y?0:m)),De((function(){var e=new Map;return s.forEach((function(t){var n=t.key,a=z(n).current;a&&e.set(n,{width:a.offsetWidth,height:a.offsetHeight,left:a.offsetLeft,top:a.offsetTop})})),e}))})),rt=s.slice(0,$e),ot=s.slice(et+1),it=[].concat((0,m.Z)(rt),(0,m.Z)(ot)),ct=(0,o.useState)(),lt=(0,i.Z)(ct,2),ut=lt[0],st=lt[1],ft=We.get(Z),dt=(0,o.useRef)();function vt(){b.Z.cancel(dt.current)}(0,o.useEffect)((function(){var e={};return ft&&(Y?(C?e.right=ft.right:e.left=ft.left,e.width=ft.width):(e.top=ft.top,e.height=ft.height)),vt(),dt.current=(0,b.Z)((function(){st(e)})),vt}),[ft,Y,C]),(0,o.useEffect)((function(){Ue()}),[Z,ft,We,Y]),(0,o.useEffect)((function(){at()}),[C,O,Z,s.map((function(e){return e.key})).join("_")]);var pt,mt,bt,ht,yt=!!it.length,gt="".concat(l,"-nav-wrap");return Y?C?(mt=U>0,pt=U+Ze<re):(pt=U<0,mt=-U+Ze<re):(bt=ee<0,ht=-ee+Ce<le),o.createElement("div",{ref:t,role:"tablist",className:f()("".concat(l,"-nav"),d),style:v,onKeyDown:function(){Fe()}},o.createElement(A,{position:"left",extra:x,prefixCls:l}),o.createElement(h.Z,{onResize:at},o.createElement("div",{className:f()(gt,(n={},(0,r.Z)(n,"".concat(gt,"-ping-left"),pt),(0,r.Z)(n,"".concat(gt,"-ping-right"),mt),(0,r.Z)(n,"".concat(gt,"-ping-top"),bt),(0,r.Z)(n,"".concat(gt,"-ping-bottom"),ht),n)),ref:K},o.createElement(h.Z,{onResize:at},o.createElement("div",{ref:j,className:"".concat(l,"-nav-list"),style:{transform:"translate(".concat(U,"px, ").concat(ee,"px)"),transition:Ge?"none":void 0}},nt,o.createElement(P,{ref:_,prefixCls:l,locale:T,editable:N,style:(0,u.Z)((0,u.Z)({},0===nt.length?void 0:tt),{},{visibility:yt?"hidden":null})}),o.createElement("div",{className:f()("".concat(l,"-ink-bar"),(0,r.Z)({},"".concat(l,"-ink-bar-animated"),g.inkBar)),style:ut}))))),o.createElement(S,(0,a.Z)({},e,{removeAriaLabel:null===T||void 0===T?void 0:T.removeAriaLabel,ref:V,prefixCls:l,tabs:it,className:!yt&&Ke,tabMoving:!!Ge})),o.createElement(A,{position:"right",extra:x,prefixCls:l}))}var O=o.forwardRef(L);function B(e){var t=e.id,n=e.activeKey,a=e.animated,i=e.tabPosition,c=e.rtl,l=e.destroyInactiveTabPane,u=o.useContext(I),s=u.prefixCls,d=u.tabs,v=a.tabPane,p=d.findIndex((function(e){return e.key===n}));return o.createElement("div",{className:f()("".concat(s,"-content-holder"))},o.createElement("div",{className:f()("".concat(s,"-content"),"".concat(s,"-content-").concat(i),(0,r.Z)({},"".concat(s,"-content-animated"),v)),style:p&&v?(0,r.Z)({},c?"marginRight":"marginLeft","-".concat(p,"00%")):null},d.map((function(e){return o.cloneElement(e.node,{key:e.key,prefixCls:s,tabKey:e.key,id:t,animated:v,active:e.key===n,destroyInactiveTabPane:l})}))))}function D(e){var t=e.prefixCls,n=e.forceRender,a=e.className,r=e.style,c=e.id,l=e.active,s=e.animated,d=e.destroyInactiveTabPane,v=e.tabKey,p=e.children,m=o.useState(n),b=(0,i.Z)(m,2),h=b[0],y=b[1];o.useEffect((function(){l?y(!0):d&&y(!1)}),[l,d]);var g={};return l||(s?(g.visibility="hidden",g.height=0,g.overflowY="hidden"):g.display="none"),o.createElement("div",{id:c&&"".concat(c,"-panel-").concat(v),role:"tabpanel",tabIndex:l?0:-1,"aria-labelledby":c&&"".concat(c,"-tab-").concat(v),"aria-hidden":!l,style:(0,u.Z)((0,u.Z)({},g),r),className:f()("".concat(t,"-tabpane"),l&&"".concat(t,"-tabpane-active"),a)},(l||h||n)&&p)}var W=["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"],K=0;function j(e,t){var n,s,m=e.id,b=e.prefixCls,h=void 0===b?"rc-tabs":b,y=e.className,g=e.children,Z=e.direction,E=e.activeKey,w=e.defaultActiveKey,k=e.editable,C=e.animated,x=void 0===C?{inkBar:!0,tabPane:!1}:C,N=e.tabPosition,P=void 0===N?"top":N,T=e.tabBarGutter,S=e.tabBarStyle,R=e.tabBarExtraContent,M=e.locale,A=e.moreIcon,L=e.moreTransitionName,D=e.destroyInactiveTabPane,j=e.renderTabBar,V=e.onChange,_=e.onTabClick,q=e.onTabScroll,H=(0,l.Z)(e,W),z=function(e){return(0,d.Z)(e).map((function(e){if(o.isValidElement(e)){var t=void 0!==e.key?String(e.key):void 0;return(0,u.Z)((0,u.Z)({key:t},e.props),{},{node:e})}return null})).filter((function(e){return e}))}(g),G="rtl"===Z;s=!1===x?{inkBar:!1,tabPane:!1}:!0===x?{inkBar:!0,tabPane:!0}:(0,u.Z)({inkBar:!0,tabPane:!1},"object"===(0,c.Z)(x)?x:{});var Y=(0,o.useState)(!1),F=(0,i.Z)(Y,2),X=F[0],U=F[1];(0,o.useEffect)((function(){U((0,v.Z)())}),[]);var J=(0,p.Z)((function(){var e;return null===(e=z[0])||void 0===e?void 0:e.key}),{value:E,defaultValue:w}),Q=(0,i.Z)(J,2),$=Q[0],ee=Q[1],te=(0,o.useState)((function(){return z.findIndex((function(e){return e.key===$}))})),ne=(0,i.Z)(te,2),ae=ne[0],re=ne[1];(0,o.useEffect)((function(){var e,t=z.findIndex((function(e){return e.key===$}));-1===t&&(t=Math.max(0,Math.min(ae,z.length-1)),ee(null===(e=z[t])||void 0===e?void 0:e.key));re(t)}),[z.map((function(e){return e.key})).join("_"),$,ae]);var oe=(0,p.Z)(null,{value:m}),ie=(0,i.Z)(oe,2),ce=ie[0],le=ie[1],ue=P;X&&!["left","right"].includes(P)&&(ue="top"),(0,o.useEffect)((function(){m||(le("rc-tabs-".concat(K)),K+=1)}),[]);var se,fe={id:ce,activeKey:$,animated:s,tabPosition:ue,rtl:G,mobile:X},de=(0,u.Z)((0,u.Z)({},fe),{},{editable:k,locale:M,moreIcon:A,moreTransitionName:L,tabBarGutter:T,onTabClick:function(e,t){null===_||void 0===_||_(e,t);var n=e!==$;ee(e),n&&(null===V||void 0===V||V(e))},onTabScroll:q,extra:R,style:S,panes:g});return se=j?j(de,O):o.createElement(O,de),o.createElement(I.Provider,{value:{tabs:z,prefixCls:h}},o.createElement("div",(0,a.Z)({ref:t,id:m,className:f()(h,"".concat(h,"-").concat(ue),(n={},(0,r.Z)(n,"".concat(h,"-mobile"),X),(0,r.Z)(n,"".concat(h,"-editable"),k),(0,r.Z)(n,"".concat(h,"-rtl"),G),n),y)},H),se,o.createElement(B,(0,a.Z)({destroyInactiveTabPane:D},fe,{animated:s}))))}var V=o.forwardRef(j);V.TabPane=D;var _=V,q=n(44545),H=n(49101),z=n(54549),G=n(21687),Y=n(86032),F=n(97647),X=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function U(e){var t,n=e.type,i=e.className,c=e.size,l=e.onEdit,u=e.hideAdd,s=e.centered,d=e.addIcon,v=X(e,["type","className","size","onEdit","hideAdd","centered","addIcon"]),p=v.prefixCls,m=v.moreIcon,b=void 0===m?o.createElement(q.Z,null):m,h=o.useContext(Y.E_),y=h.getPrefixCls,g=h.direction,Z=y("tabs",p);"editable-card"===n&&(t={onEdit:function(e,t){var n=t.key,a=t.event;null===l||void 0===l||l("add"===e?a:n,e)},removeIcon:o.createElement(z.Z,null),addIcon:d||o.createElement(H.Z,null),showAdd:!0!==u});var E=y();return(0,G.Z)(!("onPrevClick"in v)&&!("onNextClick"in v),"Tabs","`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead."),o.createElement(F.Z.Consumer,null,(function(e){var l,u=void 0!==c?c:e;return o.createElement(_,(0,a.Z)({direction:g,moreTransitionName:"".concat(E,"-slide-up")},v,{className:f()((l={},(0,r.Z)(l,"".concat(Z,"-").concat(u),u),(0,r.Z)(l,"".concat(Z,"-card"),["card","editable-card"].includes(n)),(0,r.Z)(l,"".concat(Z,"-editable-card"),"editable-card"===n),(0,r.Z)(l,"".concat(Z,"-centered"),s),l),i),editable:t,moreIcon:b,prefixCls:Z}))}))}U.TabPane=D;var J=U},70271:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(4942),r=n(1413),o=n(29439),i=n(44925),c=n(67294),l=n(15074),u=n(94184),s=n.n(u),f={adjustX:1,adjustY:1},d=[0,0],v={topLeft:{points:["bl","tl"],overflow:f,offset:[0,-4],targetOffset:d},topCenter:{points:["bc","tc"],overflow:f,offset:[0,-4],targetOffset:d},topRight:{points:["br","tr"],overflow:f,offset:[0,-4],targetOffset:d},bottomLeft:{points:["tl","bl"],overflow:f,offset:[0,4],targetOffset:d},bottomCenter:{points:["tc","bc"],overflow:f,offset:[0,4],targetOffset:d},bottomRight:{points:["tr","br"],overflow:f,offset:[0,4],targetOffset:d}},p=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger"];function m(e,t){var n=e.arrow,u=void 0!==n&&n,f=e.prefixCls,d=void 0===f?"rc-dropdown":f,m=e.transitionName,b=e.animation,h=e.align,y=e.placement,g=void 0===y?"bottomLeft":y,Z=e.placements,E=void 0===Z?v:Z,w=e.getPopupContainer,k=e.showAction,C=e.hideAction,x=e.overlayClassName,N=e.overlayStyle,P=e.visible,T=e.trigger,S=void 0===T?["hover"]:T,I=(0,i.Z)(e,p),R=c.useState(),M=(0,o.Z)(R,2),A=M[0],L=M[1],O="visible"in e?P:A,B=c.useRef(null);c.useImperativeHandle(t,(function(){return B.current}));var D=function(){var t=e.overlay;return"function"===typeof t?t():t},W=function(t){var n=e.onOverlayClick,a=D().props;L(!1),n&&n(t),a.onClick&&a.onClick(t)},K=function(){var e=D(),t={prefixCls:"".concat(d,"-menu"),onClick:W};return"string"===typeof e.type&&delete t.prefixCls,c.createElement(c.Fragment,null,u&&c.createElement("div",{className:"".concat(d,"-arrow")}),c.cloneElement(e,t))},j=C;return j||-1===S.indexOf("contextMenu")||(j=["click"]),c.createElement(l.Z,(0,r.Z)((0,r.Z)({builtinPlacements:E},I),{},{prefixCls:d,ref:B,popupClassName:s()(x,(0,a.Z)({},"".concat(d,"-show-arrow"),u)),popupStyle:N,action:S,showAction:k,hideAction:j||[],popupPlacement:g,popupAlign:h,popupTransitionName:m,popupAnimation:b,popupVisible:O,stretch:function(){var t=e.minOverlayWidthMatchTrigger,n=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?t:!n}()?"minWidth":"",popup:"function"===typeof e.overlay?K:K(),onPopupVisibleChange:function(t){var n=e.onVisibleChange;L(t),"function"===typeof n&&n(t)},getPopupContainer:w}),function(){var t=e.children,n=t.props?t.props:{},a=s()(n.className,function(){var t=e.openClassName;return void 0!==t?t:"".concat(d,"-open")}());return O&&t?c.cloneElement(t,{className:a}):t}())}var b=c.forwardRef(m)}}]);