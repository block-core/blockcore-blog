import{b as Cs,c as Ls,s as Ts,g as Hs}from"./setting-utils.3AT7fowt.js";const wt=(t,e)=>{const{o:n,u:o,_:s}=t;let r,c=n;const l=(t,e)=>{const n=c,l=t,i=e||(o?!o(n,l):n!==l);return(i||s)&&(c=l,r=n),[c,i,r]};return[e?t=>l(e(c,r),t):l,t=>[c,!!t,r]]},Bn=typeof window<"u"&&typeof document<"u",ft=Bn?window:{},pe=Math.max,As=Math.min,Fe=Math.round,Vn=ft.cancelAnimationFrame,zn=ft.requestAnimationFrame,ge=ft.setTimeout,Ue=ft.clearTimeout,Oe=t=>typeof ft[t]<"u"?ft[t]:void 0,ks=Oe("MutationObserver"),hn=Oe("IntersectionObserver"),be=Oe("ResizeObserver"),je=Oe("ScrollTimeline"),_n=Bn&&Node.ELEMENT_NODE,{toString:Ps,hasOwnProperty:Be}=Object.prototype,Ds=/^\[object (.+)\]$/,ce=t=>void 0===t,$e=t=>null===t,Is=t=>ce(t)||$e(t)?`${t}`:Ps.call(t).replace(Ds,"$1").toLowerCase(),$t=t=>"number"==typeof t,Ce=t=>"string"==typeof t,Nn=t=>"boolean"==typeof t,Ct=t=>"function"==typeof t,Et=t=>Array.isArray(t),se=t=>"object"==typeof t&&!Et(t)&&!$e(t),Le=t=>{const e=!!t&&t.length,n=$t(e)&&e>-1&&e%1==0;return!!(Et(t)||!Ct(t)&&n)&&(!(e>0&&se(t))||e-1 in t)},ve=t=>{if(!t||!se(t)||"object"!==Is(t))return!1;let e;const n="constructor",o=t[n],s=o&&o.prototype,r=Be.call(t,n),c=s&&Be.call(s,"isPrototypeOf");if(o&&!r&&!c)return!1;for(e in t);return ce(e)||Be.call(t,e)},ye=t=>{const e=HTMLElement;return!!t&&(e?t instanceof e:t.nodeType===_n)},Te=t=>{const e=Element;return!!t&&(e?t instanceof e:t.nodeType===_n)};function q(t,e){if(Le(t))for(let n=0;n<t.length&&!1!==e(t[n],n,t);n++);else t&&q(Object.keys(t),(n=>e(t[n],n,t)));return t}const He=(t,e)=>t.indexOf(e)>=0,Tt=(t,e)=>t.concat(e),tt=(t,e,n)=>(!Ce(e)&&Le(e)?Array.prototype.push.apply(t,e):t.push(e),t),zt=t=>Array.from(t||[]),Fn=t=>Et(t)?t:[t],We=t=>!!t&&!t.length,gn=t=>zt(new Set(t)),gt=(t,e,n)=>{q(t,(t=>t&&t.apply(void 0,e||[]))),!n&&(t.length=0)},Un="paddingTop",jn="paddingRight",Wn="paddingLeft",qn="paddingBottom",Gn="marginLeft",Xn="marginRight",Kn="marginBottom",Ae="overflowX",ke="overflowY",Xt="width",Kt="height",Yt="hidden",Yn="visible",nn=(t,e,n,o)=>{if(t&&e){let o=!0;return q(n,(n=>{t[n]!==e[n]&&(o=!1)})),o}return!1},Jn=(t,e)=>nn(t,e,["w","h"]),Zn=(t,e)=>nn(t,e,["x","y"]),Rs=(t,e)=>nn(t,e,["t","r","b","l"]),St=()=>{},M=(t,...e)=>t.bind(0,...e),Ut=t=>{let e;const n=t?ge:zn,o=t?Ue:Vn;return[s=>{o(e),e=n(s,Ct(t)?t():t)},()=>o(e)]},Qn=(t,e)=>{let n,o,s,r=St;const{v:c,p:l,S:i}=e||{},a=function(e){r(),Ue(n),n=o=void 0,r=St,t.apply(this,e)},d=t=>i&&o?i(o,t):t,u=()=>{r!==St&&a(d(s)||s)},p=function(){const t=zt(arguments),e=Ct(c)?c():c;if($t(e)&&e>=0){const c=Ct(l)?l():l,i=$t(c)&&c>=0,p=e>0?ge:zn,f=e>0?Ue:Vn,y=d(t)||t,h=a.bind(0,y);r();const m=p(h,e);r=()=>f(m),i&&!n&&(n=ge(u,c)),o=s=y}else a(t)};return p.m=u,p},ts=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),kt=t=>t?Object.keys(t):[],W=(t,e,n,o,s,r,c)=>{const l=[e,n,o,s,r,c];return("object"!=typeof t||$e(t))&&!Ct(t)&&(t={}),q(l,(e=>{q(e,((n,o)=>{const s=e[o];if(t===s)return!0;const r=Et(s);if(s&&ve(s)){const e=t[o];let n=e;r&&!Et(e)?n=[]:!r&&!ve(e)&&(n={}),t[o]=W(n,s)}else t[o]=r?s.slice():s}))})),t},es=(t,e)=>q(W({},t),((t,e,n)=>{void 0===t?delete n[e]:t&&ve(t)&&(n[e]=es(t))})),sn=t=>{for(const e in t)return!1;return!0},qe=(t,e,n)=>pe(t,As(e,n)),Mt=t=>zt(new Set((Et(t)?t:(t||"").split(" ")).filter((t=>t)))),Pe=(t,e)=>t&&t.getAttribute(e),bn=(t,e)=>t&&t.hasAttribute(e),yt=(t,e,n)=>{q(Mt(e),(e=>{t&&t.setAttribute(e,n||"")}))},Ot=(t,e)=>{q(Mt(e),(e=>t&&t.removeAttribute(e)))},De=(t,e)=>{const n=Mt(Pe(t,e)),o=M(yt,t,e),s=(t,e)=>{const o=new Set(n);return q(Mt(t),(t=>o[e](t))),zt(o).join(" ")};return{$:t=>o(s(t,"delete")),O:t=>o(s(t,"add")),C:t=>{const e=Mt(t);return e.reduce(((t,e)=>t&&n.includes(e)),e.length>0)}}},ns=(t,e,n)=>{De(t,e).$(n)},oe=(t,e,n)=>(De(t,e).O(n),M(ns,t,e,n)),me=(t,e,n,o)=>{(o?oe:ns)(t,e,n)},Ms=(t,e,n)=>De(t,e).C(n),ss=t=>De(t,"class"),on=(t,e)=>{ss(t).$(e)},we=(t,e)=>(ss(t).O(e),M(on,t,e)),os=(t,e)=>{const n=[],o=e?Te(e)&&e:document;return o?tt(n,o.querySelectorAll(t)):n},Bs=(t,e)=>{const n=e?Te(e)&&e:document;return n?n.querySelector(t):null},Se=(t,e)=>!!Te(t)&&t.matches(e),cs=t=>Se(t,"body"),Ge=t=>t?zt(t.childNodes):[],Jt=t=>t&&t.parentElement,jt=(t,e)=>Te(t)&&t.closest(e),Xe=t=>document.activeElement,Vs=(t,e,n)=>{const o=jt(t,e),s=t&&Bs(n,o),r=jt(s,e)===o;return!(!o||!s)&&(o===t||s===t||r&&jt(jt(t,n),e)!==o)},Pt=t=>{if(Le(t))q(zt(t),(t=>Pt(t)));else if(t){const e=Jt(t);e&&e.removeChild(t)}},rs=(t,e,n)=>{if(n&&t){let o,s=e;return Le(n)?(o=document.createDocumentFragment(),q(n,(t=>{t===s&&(s=t.previousSibling),o.appendChild(t)}))):o=n,e&&(s?s!==e&&(s=s.nextSibling):s=t.firstChild),t.insertBefore(o,s||null),()=>Pt(n)}return St},dt=(t,e)=>rs(t,null,e),vn=(t,e)=>rs(Jt(t),t&&t.nextSibling,e),Wt=t=>{const e=document.createElement("div");return yt(e,"class",t),e},ls=t=>{const e=Wt();return e.innerHTML=t.trim(),q(Ge(e),(t=>Pt(t)))},zs=/^--/,yn=(t,e)=>t.getPropertyValue(e)||t[e]||"",cn=t=>{const e=t||0;return isFinite(e)?e:0},de=t=>cn(parseFloat(t||"")),wn=t=>`${(100*cn(t)).toFixed(3)}%`,Ke=t=>`${cn(t)}px`;function Zt(t,e){t&&q(e,((e,n)=>{try{const o=t.style,s=$t(e)?Ke(e):(e||"")+"";zs.test(n)?o.setProperty(n,s):o[n]=s}catch{}}))}function Bt(t,e,n){const o=Ce(e);let s=o?"":{};if(t){const r=ft.getComputedStyle(t,n)||t.style;s=o?yn(r,e):e.reduce(((t,e)=>(t[e]=yn(r,e),t)),s)}return s}const At=t=>"rtl"===Bt(t,"direction"),Sn=(t,e,n)=>{const o=e?`${e}-`:"",s=n?`-${n}`:"",r=`${o}top${s}`,c=`${o}right${s}`,l=`${o}bottom${s}`,i=`${o}left${s}`,a=Bt(t,[r,c,l,i]);return{t:de(a[r]),r:de(a[c]),b:de(a[l]),l:de(a[i])}},Ve=(t,e)=>"translate"+(se(t)?`(${t.x},${t.y})`:`${e?"X":"Y"}(${t})`),_s={w:0,h:0},Ie=(t,e)=>e?{w:e[`${t}Width`],h:e[`${t}Height`]}:_s,Ns=t=>Ie("inner",t||ft),ne=M(Ie,"offset"),is=M(Ie,"client"),Ye=M(Ie,"scroll"),rn=t=>{const e=parseFloat(Bt(t,Xt))||0,n=parseFloat(Bt(t,Kt))||0;return{w:e-Fe(e),h:n-Fe(n)}},qt=t=>t.getBoundingClientRect(),Je=t=>!(!t||!t[Kt]&&!t[Xt]),as=(t,e)=>{const n=Je(t);return!Je(e)&&n},En=(t,e,n,o)=>{q(Mt(e),(e=>{t.removeEventListener(e,n,o)}))},Q=(t,e,n,o)=>{var s;const r=null==(s=o&&o.H)||s,c=o&&o.I||!1,l=o&&o.A||!1,i={passive:r,capture:c};return M(gt,Mt(e).map((e=>{const o=l?s=>{En(t,e,o,c),n(s)}:n;return t.addEventListener(e,o,i),M(En,t,e,o,c)})))},ln=t=>t.stopPropagation(),xn=t=>t.preventDefault(),Fs={x:0,y:0},ze=t=>{const e=t&&qt(t);return e?{x:e.left+ft.scrollX,y:e.top+ft.scrollY}:Fs},Ee=(t,e,n)=>n?n.n?0-t:n.i?e-t:t:t,On=(t,e)=>[Ee(0,t,e),Ee(t,t,e)],$n=(t,e,n)=>qe(0,1,Ee(t,e,n)/e||0),Dt=(t,e)=>{const{x:n,y:o}=$t(e)?{x:e,y:e}:e||{};$t(n)&&(t.scrollLeft=n),$t(o)&&(t.scrollTop=o)},Qt=t=>({x:t.scrollLeft,y:t.scrollTop}),Cn=(t,e)=>{q(Fn(e),t)},Ze=t=>{const e=new Map,n=(t,n)=>{if(t){const o=e.get(t);Cn((t=>{o&&o[t?"delete":"clear"](t)}),n)}else e.forEach((t=>{t.clear()})),e.clear()},o=(t,s)=>{if(Ce(t)){const o=e.get(t)||new Set;return e.set(t,o),Cn((t=>{Ct(t)&&o.add(t)}),s),M(n,t,s)}Nn(s)&&s&&n();const r=kt(t),c=[];return q(r,(e=>{const n=t[e];n&&tt(c,o(e,n))})),M(gt,c)};return o(t||{}),[o,n,(t,n)=>{q(zt(e.get(t)),(t=>{n&&!We(n)?t.apply(0,n):t()}))}]},Ln=t=>JSON.stringify(t,((t,e)=>{if(Ct(e))throw 0;return e})),Tn=(t,e)=>t?`${e}`.split(".").reduce(((t,e)=>t&&ts(t,e)?t[e]:void 0),t):void 0,Us={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},us=(t,e)=>{const n={};return q(Tt(kt(e),kt(t)),(o=>{const s=t[o],r=e[o];if(se(s)&&se(r))W(n[o]={},us(s,r)),sn(n[o])&&delete n[o];else if(ts(e,o)&&r!==s){let t=!0;if(Et(s)||Et(r))try{Ln(s)===Ln(r)&&(t=!1)}catch{}t&&(n[o]=r)}})),n},Hn=(t,e,n)=>o=>[Tn(t,o),n||void 0!==Tn(e,o)],re="data-overlayscrollbars",he="os-environment",fe=`${he}-scrollbar-hidden`,_e=`${re}-initialize`,ut=re,ds=`${ut}-overflow-x`,fs=`${ut}-overflow-y`,ps="overflowVisible",js="scrollbarPressed",Qe="updating",Ws="body",Lt=`${re}-viewport`,qs="arrange",ms="scrollbarHidden",Gt=ps,tn=`${re}-padding`,Gs=Gt,An=`${re}-content`,an="os-size-observer",Xs=`${an}-appear`,Ks=`${an}-listener`,Ys="os-trinsic-observer",Js="os-theme-none",pt="os-scrollbar",Zs=`${pt}-rtl`,Qs=`${pt}-horizontal`,to=`${pt}-vertical`,hs=`${pt}-track`,un=`${pt}-handle`,eo=`${pt}-visible`,no=`${pt}-cornerless`,kn=`${pt}-interaction`,Pn=`${pt}-unusable`,en=`${pt}-auto-hide`,Dn=`${en}-hidden`,In=`${pt}-wheel`,so=`${hs}-interactive`,oo=`${un}-interactive`,gs={},bs={},co=t=>{q(t,(t=>q(t,((e,n)=>{gs[n]=t[n]}))))},vs=(t,e,n)=>kt(t).map((o=>{const{static:s,instance:r}=t[o],[c,l,i]=n||[],a=n?r:s;if(a){const t=n?a(c,l,e):a(e);return(i||bs)[o]=t}})),te=t=>bs[t],ro="__osOptionsValidationPlugin",lo="__osSizeObserverPlugin",io=(t,e)=>{const{T:n}=e,[o,s]=t("showNativeOverlaidScrollbars");return[o&&n.x&&n.y,s]},xe=t=>0===t.indexOf(Yn),ys=(t,e)=>{const{D:n}=t,o=t=>{const o=Bt(n,t);return[o,"scroll"===(e?e[t]:o)]},[s,r]=o(Ae),[c,l]=o(ke);return{k:{x:s,y:c},R:{x:r,y:l}}},ao=(t,e,n,o)=>{const s=e.x||e.y,r=(t,e)=>{const n=xe(t),o=n&&s?"hidden":"",r=e&&n&&t.replace(`${Yn}-`,"")||o;return[e&&!n?t:"",xe(r)?"hidden":r]},[c,l]=r(n.x,e.x),[i,a]=r(n.y,e.y);return o[Ae]=l&&i?l:c,o[ke]=a&&c?a:i,ys(t,o)},dn="__osScrollbarsHidingPlugin",uo="__osClickScrollPlugin";let Ne;const fo=()=>{const t=(t,e,n)=>{dt(document.body,t),dt(document.body,t);const o=is(t),s=ne(t),r=rn(e);return n&&Pt(t),{x:s.h-o.h+r.h,y:s.w-o.w+r.w}},e=ls(`<div class="${he}"><div></div><style>${`.${he}{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.${he} div{width:200%;height:200%;margin:10px 0}.${fe}{scrollbar-width:none!important}.${fe}::-webkit-scrollbar,.${fe}::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}`}</style></div>`)[0],n=e.firstChild,[o,,s]=Ze(),[r,c]=wt({o:t(e,n),u:Zn},M(t,e,n,!0)),[l]=c(),i=(t=>{let e=!1;const n=we(t,fe);try{e="none"===Bt(t,"scrollbar-width")||"none"===Bt(t,"display","::-webkit-scrollbar")}catch{}return n(),e})(e),a={x:0===l.x,y:0===l.y},d={elements:{host:null,padding:!i,viewport:t=>i&&cs(t)&&t,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},u=W({},Us),p=M(W,{},u),f=M(W,{},d),y={P:l,T:a,L:i,J:!!je,K:((t,e)=>{Zt(t,{[Ae]:Yt,[ke]:Yt,direction:"rtl"}),Dt(t,{x:0});const n=ze(t),o=ze(e);Dt(t,{x:-999});const s=ze(e);return{i:n.x===o.x,n:o.x!==s.x}})(e,n),Z:M(o,"r"),G:f,tt:t=>W(d,t)&&f(),nt:p,ot:t=>W(u,t)&&p(),st:W({},d),et:W({},u)};return Ot(e,"style"),Pt(e),ft.addEventListener("resize",(()=>{let t;if(!(i||a.x&&a.y)){const e=te(dn);t=!!(e?e.Y():St)(y,r)}s("r",[t])})),y},bt=()=>(Ne||(Ne=fo()),Ne),ws=(t,e)=>Ct(e)?e.apply(0,t):e,po=(t,e,n,o)=>{const s=ce(o)?n:o;return ws(t,s)||e.apply(0,t)},Ss=(t,e,n,o)=>{const s=ce(o)?n:o,r=ws(t,s);return!!r&&(ye(r)?r:e.apply(0,t))},mo=(t,e)=>{const{nativeScrollbarsOverlaid:n,body:o}=e||{},{T:s,L:r,G:c}=bt(),{nativeScrollbarsOverlaid:l,body:i}=c().cancel,a=n??l,d=ce(o)?i:o,u=(s.x||s.y)&&a,p=t&&($e(d)?!r:d);return!!u||!!p},fn=new WeakMap,ho=(t,e)=>{fn.set(t,e)},go=t=>{fn.delete(t)},Es=t=>fn.get(t),bo=(t,e,n)=>{let o=!1;const s=!!n&&new WeakMap,r=r=>{if(s&&n){q(n.map((e=>{const[n,o]=e||[];return[o&&n?(r||os)(n,t):[],o]})),(n=>q(n[0],(r=>{const c=n[1],l=s.get(r)||[];if(t.contains(r)&&c){const t=Q(r,c,(n=>{o?(t(),s.delete(r)):e(n)}));s.set(r,tt(l,t))}else gt(l),s.delete(r)}))))}};return r(),[()=>{o=!0},r]},Rn=(t,e,n,o)=>{let s=!1;const{ct:r,rt:c,lt:l,it:i,ut:a,dt:d}=o||{},u=Qn((()=>s&&n(!0)),{v:33,p:99}),[p,f]=bo(t,u,l),y=c||[],h=Tt(r||[],y),m=(s,r)=>{if(!We(r)){const c=a||St,l=d||St,u=[],p=[];let h=!1,m=!1;if(q(r,(n=>{const{attributeName:s,target:r,type:a,oldValue:d,addedNodes:f,removedNodes:b}=n,v="attributes"===a,g="childList"===a,w=t===r,$=v&&s,x=$&&Pe(r,s||"")||null,M=$&&d!==x,E=He(y,s)&&M;if(e&&(g||!w)){const e=v&&M,a=e&&i&&Se(r,i),p=(a?!c(r,s,d,x):!v||e)&&!l(n,!!a,t,o);q(f,(t=>tt(u,t))),q(b,(t=>tt(u,t))),m=m||p}!e&&w&&M&&!c(r,s,d,x)&&(tt(p,s),h=h||E)})),f((t=>gn(u).reduce(((e,n)=>(tt(e,os(t,n)),Se(n,t)?tt(e,n):e)),[]))),e)return!s&&m&&n(!1),[!1];if(!We(p)||h){const t=[gn(p),h];return!s&&n.apply(0,t),t}}},b=new ks(M(m,!1));return[()=>(b.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:h,subtree:e,childList:e,characterData:e}),s=!0,()=>{s&&(p(),b.disconnect(),s=!1)}),()=>{if(s)return u.m(),m(!0,b.takeRecords())}]},xs=(t,e,n)=>{const{ft:o,_t:s}=n||{},r=te(lo),{K:c}=bt(),l=M(At,t),[i]=wt({o:!1,_:!0});return()=>{const n=[],a=ls(`<div class="${an}"><div class="${Ks}"></div></div>`)[0],d=a.firstChild,u=t=>{const n=t instanceof ResizeObserverEntry,s=!n&&Et(t);let r=!1,l=!1,d=!0;if(n){const[e,,n]=i(t.contentRect),o=Je(e),s=as(e,n);l=!n||s,r=!l&&!o,d=!r}else s?[,d]=t:l=!0===t;if(o&&d){const e=s?t[0]:At(a);Dt(a,{x:Ee(3333333,3333333,e&&c),y:3333333})}r||e({vt:s?t:void 0,ht:!s,_t:l})};if(be){const t=new be((t=>u(t.pop())));t.observe(d),tt(n,(()=>{t.disconnect()}))}else{if(!r)return St;{const[t,e]=r(d,u,s);tt(n,Tt([we(a,Xs),Q(a,"animationstart",t)],e))}}if(o){const[t]=wt({o:void 0},l);tt(n,Q(a,"scroll",(e=>{const n=t(),[o,s,r]=n;s&&(on(d,"ltr rtl"),we(d,o?"rtl":"ltr"),u([!!o,s,r])),ln(e)})))}return M(gt,tt(n,dt(t,a)))}},vo=(t,e)=>{let n;const o=Wt(Ys),[s]=wt({o:!1}),r=(t,n)=>{if(t){const o=s((t=>0===t.h||t.isIntersecting||t.intersectionRatio>0)(t)),[,r]=o;return r&&!n&&e(o)&&[o]}},c=(t,e)=>r(e.pop(),t);return[()=>{const e=[];if(hn)n=new hn(M(c,!1),{root:t}),n.observe(o),tt(e,(()=>{n.disconnect()}));else{const t=()=>{const t=ne(o);r(t)};tt(e,xs(o,t)()),t()}return M(gt,tt(e,dt(t,o)))},()=>n&&c(!0,n.takeRecords())]},yo=(t,e,n,o)=>{let s,r,c,l,i,a;const{L:d}=bt(),u=`[${ut}]`,p=`[${Lt}]`,f=["tabindex"],y=["wrap","cols","rows"],h=["id","class","style","open"],{gt:m,bt:b,D:v,wt:g,yt:w,V:$,St:x,$t:M}=t,E={Ot:!1,N:At(m)},S=bt(),L=te(dn),[O]=wt({u:Jn,o:{w:0,h:0}},(()=>{const o=L&&L.M(t,e,E,S,n).W,s=x(Gt),r=!$&&x(qs),c=r&&Qt(v);M(Gt),$&&M(Qe,!0);const l=r&&o&&o()[0],i=Ye(g),a=Ye(v),d=rn(v);return M(Gt,s),$&&M(Qe),l&&l(),Dt(v,c),{w:a.w+i.w+d.w,h:a.h+i.h+d.h}})),k=w?y:Tt(h,y),T=Qn(o,{v:()=>s,p:()=>r,S(t,e){const[n]=t,[o]=e;return[Tt(kt(n),kt(o)).reduce(((t,e)=>(t[e]=n[e]||o[e],t)),{})]}}),C=t=>{if($){const e=At(m);W(t,{Ct:a!==e}),W(E,{N:e}),a=e}},D=t=>{q(t||f,(t=>{if(He(f,t)){const e=Pe(b,t);Ce(e)?yt(v,t,e):Ot(v,t)}}))},A=(t,e)=>{const[n,s]=t,r={xt:s};return W(E,{Ot:n}),!e&&o(r),r},Q=({ht:t,vt:e,_t:n})=>{const s=(!t||n||e)&&d?T:o,[r,c]=e||[],l={ht:t||n,_t:n,Ct:c};C(l),e&&W(E,{N:r}),s(l)},P=(t,e)=>{const[,n]=O(),s={Ht:n};return C(s),n&&!e&&(t?o:T)(s),s},H=(t,e,n)=>{const o={zt:e};return C(o),e&&!n?T(o):$||D(t),o},{Z:V}=S,[I,z]=g?vo(b,A):[],B=!$&&xs(b,Q,{_t:!0,ft:!0}),[j,N]=Rn(b,!1,H,{rt:h,ct:Tt(h,f)}),_=$&&be&&new be((t=>{const e=t[t.length-1].contentRect;Q({ht:!0,_t:as(e,i)}),i=e}));return[()=>{D(),_&&_.observe(b);const t=B&&B(),e=I&&I(),n=j(),o=V((t=>{const[,e]=O();T({It:t,Ht:e})}));return()=>{_&&_.disconnect(),t&&t(),e&&e(),l&&l(),n(),o()}},({Et:t,At:e,Tt:n})=>{const o={},[i]=t("update.ignoreMutation"),[a,d]=t("update.attributes"),[f,y]=t("update.elementEvents"),[h,m]=t("update.debounce"),b=e||n;if(y||d){c&&c(),l&&l();const[t,e]=Rn(g||v,!0,P,{ct:Tt(k,a||[]),lt:f,it:u,dt:(t,e)=>{const{target:n,attributeName:o}=t;return!(e||!o||$)&&Vs(n,u,p)||!!jt(n,`.${pt}`)||!!(t=>Ct(i)&&i(t))(t)}});l=t(),c=e}if(m)if(T.m(),Et(h)){const t=h[0],e=h[1];s=$t(t)&&t,r=$t(e)&&e}else $t(h)?(s=h,r=!1):(s=!1,r=!1);if(b){const t=N(),e=z&&z(),n=c&&c();t&&W(o,H(t[0],t[1],b)),e&&W(o,A(e[0],b)),n&&W(o,P(n[0],b))}return C(o),o},E]},wo=(t,e,n,o)=>{const{G:s,K:r}=bt(),{scrollbars:c}=s(),{slot:l}=c,{gt:i,bt:a,D:d,Dt:u,kt:p,Rt:f,V:y}=e,{scrollbars:h}=u?{}:t,{slot:m}=h||{},b=new Map,v=t=>je&&new je({source:p,axis:t}),g=v("x"),w=v("y"),$=Ss([i,a,d],(()=>y&&f?i:a),l,m),x=(t,e)=>{if(e){const n=t?Xt:Kt,{Mt:o,Vt:s}=e,r=qt(s)[n],c=qt(o)[n];return qe(0,1,r/c||0)}const o=t?"x":"y",{Lt:s,Pt:r}=n,c=r[o],l=s[o];return qe(0,1,c/(c+l)||0)},E=(t,e)=>W(t,e?{clear:["left"]}:{}),S=t=>{b.forEach(((e,n)=>{(!t||He(Fn(t),n))&&(q(e||[],(t=>{t&&t.cancel()})),b.delete(n))}))},L=(t,e,n,o)=>{const s=b.get(t)||[],r=s.find((t=>t&&t.timeline===e));r?r.effect=new KeyframeEffect(t,n,{composite:o}):b.set(t,Tt(s,[t.animate(n,{timeline:e,composite:o})]))},O=(t,e,n)=>{const o=n?we:on;q(t,(t=>{o(t.Ut,e)}))},k=(t,e)=>{q(t,(t=>{const[n,o]=e(t);Zt(n,o)}))},T=(t,e)=>{k(t,(t=>{const{Vt:n}=t;return[n,{[e?Xt:Kt]:wn(x(e))}]}))},C=(t,e)=>{const{Lt:o}=n,s=e?o.x:o.y,c=(t,n,o)=>Ve(wn(((t,e,n,o)=>{const s=x(n,t);return 1/s*(1-s)*(o?1-e:e)||0})(t,$n(n,s,o),e,o)),e);if(g&&w)q(t,(t=>{const{Ut:n,Vt:o}=t,l=e&&At(n)&&r;L(o,e?g:w,E({transform:On(s,l).map((e=>c(t,e,l)))},l))}));else{const n=Qt(p);k(t,(t=>{const{Vt:o,Ut:s}=t;return[o,{transform:c(t,e?n.x:n.y,e&&At(s)&&r)}]}))}},D=t=>y&&!f&&Jt(t)===d,A=[],Q=[],P=[],H=(t,e,n)=>{const o=Nn(n),s=!o||!n;(!o||n)&&O(Q,t,e),s&&O(P,t,e)},V=t=>{const e=Wt(`${pt} ${t?Qs:to}`),n=Wt(hs),s=Wt(un),r={Ut:e,Mt:n,Vt:s};return tt(t?Q:P,r),tt(A,[dt(e,n),dt(n,s),M(Pt,e),S,o(r,H,C,t)]),r},I=M(V,!0),z=M(V,!1);return I(),z(),[{Bt:()=>{T(Q,!0),T(P)},Nt:()=>{C(Q,!0),C(P)},jt:()=>{if(y){const{Lt:t}=n,e=.5;if(g&&w)q(Tt(P,Q),(({Ut:n})=>{if(D(n)){const o=(t,o,s)=>{const c=s&&At(n)&&r;L(n,t,E({transform:On(o-e,c).map((t=>Ve(Ke(t),s)))},c),"add")};o(g,t.x,!0),o(w,t.y)}else S(n)}));else{const e=Qt(p),n=n=>{const{Ut:o}=n,s=D(o)&&o,c=(t,e,n)=>{const o=e*$n(t,e,n);return Ke(n?-o:o)};return[s,{transform:s?Ve({x:c(e.x,t.x,At(o)&&r),y:c(e.y,t.y)}):""}]};k(Q,n),k(P,n)}}},Ft:H,qt:{J:g,Wt:Q,Xt:I,Yt:M(k,Q)},Jt:{J:w,Wt:P,Xt:z,Yt:M(k,P)}},()=>(dt($,Q[0].Ut),dt($,P[0].Ut),M(gt,A))]},So=(t,e,n,o)=>{const{bt:s,D:r,V:c,kt:l,Kt:i}=e;return(e,a,d,u)=>{const{Ut:p,Mt:f,Vt:y}=e,[h,m]=Ut(333),[b,v]=Ut(),g=M(d,[e],u),w=!!l.scrollBy,$="client"+(u?"X":"Y"),x=u?Xt:Kt,E=u?"left":"top",S=u?"w":"h",L=u?"x":"y",O=t=>t.propertyName.indexOf(x)>-1;let k=!0;return M(gt,[Q(y,"pointermove pointerleave",o),Q(p,"pointerenter",(()=>{a(kn,!0)})),Q(p,"pointerleave pointercancel",(()=>{a(kn,!1)})),!c&&Q(p,"mousedown",(()=>{const t=Xe();(bn(t,Lt)||bn(t,ut)||t===document.body)&&ge((()=>{r.focus({preventScroll:!0})}),25)})),Q(p,"wheel",(t=>{const{deltaX:e,deltaY:n,deltaMode:o}=t;w&&k&&0===o&&Jt(p)===s&&l.scrollBy({left:e,top:n,behavior:"smooth"}),k=!1,a(In,!0),h((()=>{k=!0,a(In)})),xn(t)}),{H:!1,I:!0}),Q(y,"transitionstart",(t=>{if(O(t)){const t=()=>{g(),b(t)};t()}})),Q(y,"transitionend transitioncancel",(t=>{O(t)&&(v(),g())})),Q(p,"mousedown",M(Q,i,"click",ln,{A:!0,I:!0}),{I:!0}),(()=>{const e="pointerup pointerleave pointercancel lostpointercapture";return Q(f,"pointerdown",(o=>{const r=jt(o.target,`.${un}`)===y,c=r?y:f,a=t.scrollbars,{button:d,isPrimary:u,pointerType:p}=o,{pointers:h}=a;if(0===d&&u&&a[r?"dragScroll":"clickScroll"]&&(h||[]).includes(p)){const t=!r&&o.shiftKey,a=M(qt,y),d=M(qt,f),u=(t,e)=>(t||a())[E]-(e||d())[E],p=Fe(qt(l)[x])/ne(l)[S]||1,h=((t,e)=>o=>{const{Lt:s}=n,r=ne(f)[S]-ne(y)[S],c=e*o/r*s[L];Dt(l,{[L]:t+c})})(Qt(l)[L]||0,1/p),m=o[$],b=a(),v=d(),g=b[x],w=u(b,v)+g/2,O=m-v[E],k=r?0:O-w,q=t=>{gt(W),c.releasePointerCapture(t.pointerId)},W=[oe(s,ut,js),Q(i,e,q),Q(i,"selectstart",(t=>xn(t)),{H:!1}),Q(f,e,q),Q(f,"pointermove",(e=>{const n=e[$]-m;(r||t)&&h(k+n)}))];if(c.setPointerCapture(o.pointerId),t)h(k);else if(!r){const t=te(uo);t&&tt(W,t(h,u,k,g,O))}}}))})(),m,v])}},Eo=(t,e,n,o,s,r)=>{let c,l,i,a,d,u=St,p=0;const f=t=>"mouse"===t.pointerType,[y,h]=Ut(),[m,b]=Ut(100),[v,g]=Ut(100),[w,$]=Ut((()=>p)),[x,E]=wo(t,s,o,So(e,s,o,(t=>f(t)&&D()))),{bt:S,Zt:L,Rt:O}=s,{Ft:k,Bt:q,Nt:W,jt:T}=x,C=(t,e)=>{if($(),t)k(Dn);else{const t=M(k,Dn,!0);p>0&&!e?w(t):t()}},D=()=>{(i?!c:!a)&&(C(!0),m((()=>{C(!1)})))},A=t=>{k(en,t,!0),k(en,t,!1)},P=t=>{f(t)&&(c=i,i&&C(!0))},H=[$,b,g,h,()=>u(),Q(S,"pointerover",P,{A:!0}),Q(S,"pointerenter",P),Q(S,"pointerleave",(t=>{f(t)&&(c=!1,i&&C(!1))})),Q(S,"pointermove",(t=>{f(t)&&l&&D()})),Q(L,"scroll",(t=>{y((()=>{W(),D()})),r(t),T()}))];return[()=>M(gt,tt(H,E())),({Et:t,Tt:e,Gt:s,Qt:r})=>{const{tn:c,nn:f,sn:y}=r||{},{Ct:h,_t:m}=s||{},{N:b}=n,{T:g}=bt(),{k:w,en:$}=o,[x,E]=t("showNativeOverlaidScrollbars"),[S,D]=t("scrollbars.theme"),[P,H]=t("scrollbars.visibility"),[V,I]=t("scrollbars.autoHide"),[z,B]=t("scrollbars.autoHideSuspend"),[j]=t("scrollbars.autoHideDelay"),[N,_]=t("scrollbars.dragScroll"),[G,U]=t("scrollbars.clickScroll"),[X,K]=t("overflow"),Y=m&&!e,J=$.x||$.y,R=c||f||h||e,Z=y||H||K,F=x&&g.x&&g.y,tt=(t,e,n)=>{const o=t.includes("scroll")&&("visible"===P||"auto"===P&&"scroll"===e);return k(eo,o,n),o};if(p=j,Y&&(z&&J?(A(!1),u(),v((()=>{u=Q(L,"scroll",M(A,!0),{A:!0})}))):A(!0)),E&&k(Js,F),D&&(k(d),k(S,!0),d=S),B&&!z&&A(!0),I&&(l="move"===V,i="leave"===V,a="never"===V,C(a,!0)),_&&k(oo,N),U&&k(so,G),Z){const t=tt(X.x,w.x,!0),e=tt(X.y,w.y,!1);k(no,!(t&&e))}R&&(q(),W(),T(),k(Pn,!$.x,!0),k(Pn,!$.y,!1),k(Zs,b&&!O))},{},x]},xo=t=>{const e=bt(),{G:n,L:o}=e,{elements:s}=n(),{host:r,padding:c,viewport:l,content:i}=s,a=ye(t),d=a?{}:t,{elements:u}=d,{host:p,padding:f,viewport:y,content:h}=u||{},m=a?t:d.target,b=cs(m),v=Se(m,"textarea"),g=m.ownerDocument,w=g.documentElement,$=()=>g.defaultView||ft,x=t=>{t&&t.focus&&t.focus({preventScroll:!0})},E=M(po,[m]),S=M(Ss,[m]),L=M(Wt,""),O=M(E,L,l),k=M(S,L,i),q=O(y),W=q===m,T=W&&b,C=!W&&k(h),D=!W&&q===C,A=T?w:q,P=v?E(L,r,p):m,H=T?A:P,V=!W&&S(L,c,f),I=!D&&C,z=[I,A,V,H].map((t=>ye(t)&&!Jt(t)&&t)),B=t=>t&&He(z,t),j=B(A)?m:A,N={gt:m,bt:H,D:A,cn:V,wt:I,kt:T?w:A,Zt:T?g:A,rn:b?w:j,Kt:g,yt:v,Rt:b,Dt:a,V:W,ln:$,St:t=>Ms(A,W?ut:Lt,t),$t:(t,e)=>me(A,W?ut:Lt,t,e)},{gt:_,bt:G,cn:U,D:X,wt:K}=N,Y=[()=>{Ot(G,[ut,_e]),Ot(_,_e),b&&Ot(w,[_e,ut])}],J=v&&B(G);let R=v?_:Ge([K,X,U,G,_].find((t=>t&&!B(t))));const Z=T?_:K||X,F=M(gt,Y);return[N,()=>{const t=$(),e=Xe(),n=t=>{dt(Jt(t),Ge(t)),Pt(t)},s=t=>t?Q(t,"focusin focusout focus blur",(t=>{ln(t),t.stopImmediatePropagation()}),{I:!0,H:!1}):St,r="tabindex",c=Pe(X,r),l=s(e);return yt(G,ut,W?"viewport":"host"),yt(U,tn,""),yt(K,An,""),W||(yt(X,Lt,""),yt(X,r,c||"-1"),b&&oe(w,ut,Ws)),J&&(vn(_,G),tt(Y,(()=>{vn(G,_),Pt(G)}))),dt(Z,R),dt(G,U),dt(U||G,!W&&X),dt(X,K),tt(Y,[l,()=>{const t=Xe(),e=s(t);Ot(U,tn),Ot(K,An),Ot(X,[ds,fs,Lt]),c?yt(X,r,c):Ot(X,r),B(K)&&n(K),B(X)&&n(X),B(U)&&n(U),x(t),e()}]),o&&!W&&(oe(X,Lt,ms),tt(Y,M(Ot,X,Lt))),x(W||e!==m||t.top!==t?e:X),l(),R=0,F},F]},Oo=({wt:t})=>({Gt:e,an:n,Tt:o})=>{const{xt:s}=e||{},{Ot:r}=n;t&&(s||o)&&Zt(t,{[Kt]:r&&"100%"})},$o=({bt:t,cn:e,D:n,V:o},s)=>{const[r,c]=wt({u:Rs,o:Sn()},M(Sn,t,"padding",""));return({Et:t,Gt:l,an:i,Tt:a})=>{let[d,u]=c(a);const{L:p}=bt(),{ht:f,Ht:y,Ct:h}=l||{},{N:m}=i,[b,v]=t("paddingAbsolute");(f||u||a||y)&&([d,u]=r(a));const g=!o&&(v||h||u);if(g){const t=!b||!e&&!p,o=d.r+d.l,r=d.t+d.b,c={[Xn]:t&&!m?-o:0,[Kn]:t?-r:0,[Gn]:t&&m?-o:0,top:t?-d.t:0,right:t?m?-d.r:"auto":0,left:t?m?"auto":-d.l:0,[Xt]:t&&`calc(100% + ${o}px)`},l={[Un]:t?d.t:0,[jn]:t?d.r:0,[qn]:t?d.b:0,[Wn]:t?d.l:0};Zt(e||n,c),Zt(n,l),W(s,{cn:d,un:!t,j:e?l:W({},c,l)})}return{dn:g}}},Co=(t,e)=>{const n=bt(),{bt:o,cn:s,D:r,V:c,Rt:l,$t:i,ln:a}=t,{L:d}=n,u=l&&c,p=M(pe,0),f={u:Jn,o:{w:0,h:0}},y={u:Zn,o:{x:Yt,y:Yt}},[h,m]=wt(f,M(rn,r)),[b,v]=wt(f,M(Ye,r)),[g,w]=wt(f),[$,x]=wt(f),[E]=wt(y),S=te(dn);return({Et:l,Gt:f,an:y,Tt:M},{dn:L})=>{const{ht:O,Ht:k,Ct:q,It:T}=f||{},C=S&&S.M(t,e,y,n,l),{q:D,W:A,X:Q}=C||{},[P,H]=io(l,n),[V,I]=l("overflow"),z=O||L||k||q||T||H,B=xe(V.x),j=xe(V.y),N=B||j;let _=m(M),G=v(M),U=w(M),X=x(M);if(H&&d&&i(ms,!P),z){N&&i(Gt,!1);const[t,e]=A?A(undefined):[],[n,o]=_=h(M),[s,c]=G=b(M),l=is(r),d=s,f=l;t&&t(),(c||o||H)&&e&&!P&&D&&D(e,s,n);const y=Ns(a()),m={w:p(pe(s.w,d.w)+n.w),h:p(pe(s.h,d.h)+n.h)},v={w:p((u?y.w:f.w+p(l.w-s.w))+n.w),h:p((u?y.h:f.h+p(l.h-s.h))+n.h)};X=$(v),U=g(((t,e)=>{const n=ft.devicePixelRatio%1!=0?1:0,o={w:p(t.w-e.w),h:p(t.h-e.h)};return{w:o.w>n?o.w:0,h:o.h>n?o.h:0}})(m,v),M)}const[K,Y]=X,[J,R]=U,[Z,F]=G,[tt,et]=_,nt={x:J.w>0,y:J.h>0},ot=B&&j&&(nt.x||nt.y)||B&&nt.x&&!nt.y||j&&nt.y&&!nt.x;if(L||q||T||et||F||Y||R||I||H||z){const e={},n=ao(t,nt,V,e);Q&&Q(n,y,!!D&&D(n,Z,tt),e),c?(yt(o,ds,e[Ae]),yt(o,fs,e[ke])):Zt(r,e)}me(o,ut,ps,ot),me(s,tn,Gs,ot),c||me(r,Lt,Gt,N);const[st,rt]=E(ys(t).k);return W(e,{k:st,Pt:{x:K.w,y:K.h},Lt:{x:J.w,y:J.h},en:nt}),{sn:rt,tn:Y,nn:R}}},Lo=t=>{const[e,n,o]=xo(t),s={cn:{t:0,r:0,b:0,l:0},un:!1,j:{[Xn]:0,[Kn]:0,[Gn]:0,[Un]:0,[jn]:0,[qn]:0,[Wn]:0},Pt:{x:0,y:0},Lt:{x:0,y:0},k:{x:Yt,y:Yt},en:{x:!1,y:!1}},{gt:r,D:c,V:l}=e,{L:i,T:a}=bt(),d=!i&&(a.x||a.y),u=[Oo(e),$o(e,s),Co(e,s)];return[n,t=>{const e={},n=d&&Qt(c),o=l?oe(c,ut,Qe):St;return q(u,(n=>{W(e,n(t,e)||{})})),o(),Dt(c,n),!l&&Dt(r,0),e},s,e,o]},To=(t,e,n,o)=>{const s=Hn(e,{}),[r,c,l,i,a]=Lo(t),[d,u,p]=yo(i,l,s,(t=>{b({},t)})),[f,y,,h]=Eo(t,e,p,l,i,o),m=t=>kt(t).some((e=>!!t[e])),b=(t,o)=>{const{fn:s,Tt:r,At:l,_n:i}=t,a=s||{},d=!!r,f={Et:Hn(e,a,d),fn:a,Tt:d};if(i)return y(f),!1;const h=o||u(W({},f,{At:l})),b=c(W({},f,{an:p,Gt:h}));y(W({},f,{Gt:h,Qt:b}));const v=m(h),g=m(b),w=v||g||!sn(a)||d;return w&&n(t,{Gt:h,Qt:b}),w};return[()=>{const{rn:t,D:e}=i,n=Qt(t),o=[d(),r(),f()];return Dt(e,n),M(gt,o)},b,()=>({vn:p,hn:l}),{pn:i,gn:h},a]},Vt=(t,e,n)=>{const{nt:o}=bt(),s=ye(t),r=s?t:t.target,c=Es(r);if(e&&!c){let c=!1;const l=[],i={},a=t=>{const e=es(t),n=te(ro);return n?n(e,!0):e},d=W({},o(),a(e)),[u,p,f]=Ze(),[y,h,m]=Ze(n),b=(t,e)=>{m(t,e),f(t,e)},[v,g,w,$,x]=To(t,d,(({fn:t,Tt:e},{Gt:n,Qt:o})=>{const{ht:s,Ct:r,xt:c,Ht:l,zt:i,_t:a}=n,{tn:d,nn:u,sn:p}=o;b("updated",[S,{updateHints:{sizeChanged:!!s,directionChanged:!!r,heightIntrinsicChanged:!!c,overflowEdgeChanged:!!d,overflowAmountChanged:!!u,overflowStyleChanged:!!p,contentMutation:!!l,hostMutation:!!i,appear:!!a},changedOptions:t||{},force:!!e}])}),(t=>b("scroll",[S,t]))),E=t=>{go(r),gt(l),c=!0,b("destroyed",[S,t]),p(),h()},S={options(t,e){if(t){const n=e?o():{},s=us(d,W(n,a(t)));sn(s)||(W(d,s),g({fn:s}))}return W({},d)},on:y,off:(t,e)=>{t&&e&&h(t,e)},state(){const{vn:t,hn:e}=w(),{N:n}=t,{Pt:o,Lt:s,k:r,en:l,cn:i,un:a}=e;return W({},{overflowEdge:o,overflowAmount:s,overflowStyle:r,hasOverflow:l,padding:i,paddingAbsolute:a,directionRTL:n,destroyed:c})},elements(){const{gt:t,bt:e,cn:n,D:o,wt:s,kt:r,Zt:c}=$.pn,{qt:l,Jt:i}=$.gn,a=t=>{const{Vt:e,Mt:n,Ut:o}=t;return{scrollbar:o,track:n,handle:e}},d=t=>{const{Wt:e,Xt:n}=t,o=a(e[0]);return W({},o,{clone:()=>{const t=a(n());return g({_n:!0}),t}})};return W({},{target:t,host:e,padding:n||o,viewport:o,content:s||o,scrollOffsetElement:r,scrollEventElement:c,scrollbarHorizontal:d(l),scrollbarVertical:d(i)})},update:t=>g({Tt:t,At:!0}),destroy:M(E,!1),plugin:t=>i[kt(t)[0]]};return tt(l,[x]),ho(r,S),vs(gs,Vt,[S,u,i]),mo($.pn.Rt,!s&&t.cancel)?(E(!0),S):(tt(l,v()),b("initialized",[S]),S.update(!0),S)}return c};function pn(t,e){document.addEventListener("click",(n=>{let o=document.getElementById(t),s=n.target;for(let t of e){let e=document.getElementById(t);if(e==s||e?.contains(s))return}o.classList.add("float-panel-closed")}))}function Ho(){const t=Cs();Ls(t)}function Ao(){Ts(Hs())}function ko(){const t=document.getElementById("banner-wrapper");document.documentElement.hasAttribute("isHome")?(t.classList.remove("banner-else"),t.classList.add("banner-home")):(t.classList.remove("banner-home"),t.classList.add("banner-else"))}function Po(){Vt({target:document.querySelector("body"),cancel:{nativeScrollbarsOverlaid:!0}},{scrollbars:{theme:"scrollbar-base scrollbar-auto py-1",autoHide:"move",autoHideDelay:500,autoHideSuspend:!1}}),document.querySelectorAll("pre").forEach((t=>{Vt(t,{scrollbars:{theme:"scrollbar-base scrollbar-dark px-2",autoHide:"leave",autoHideDelay:500,autoHideSuspend:!1}})}))}function Os(){ko(),Ho(),Ao(),Po()}Vt.plugin=t=>{const e=Et(t),n=e?t:[t],o=n.map((t=>vs(t,Vt)[0]));return co(n),e?o:o[0]},Vt.valid=t=>{const e=t&&t.elements,n=Ct(e)&&e();return ve(n)&&!!Es(n.target)},Vt.env=()=>{const{P:t,T:e,L:n,K:o,J:s,st:r,et:c,G:l,tt:i,nt:a,ot:d}=bt();return W({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:n,rtlScrollBehavior:o,scrollTimeline:s,staticDefaultInitialization:r,staticDefaultOptions:c,getDefaultInitialization:l,setDefaultInitialization:i,getDefaultOptions:a,setDefaultOptions:d})},pn("display-setting",["display-setting","display-settings-switch"]),pn("nav-menu-panel",["nav-menu-panel","nav-menu-switch"]),pn("search-panel",["search-panel","search-bar","search-switch"]),Os(),document.addEventListener("astro:after-swap",Os);const Mn=()=>{window.swup.hooks.on("link:click",(()=>{document.documentElement.style.setProperty("--content-delay","0ms")}))};function Do(){"dark"===localStorage.theme?(document.documentElement.classList.remove("dark"),localStorage.theme="light"):(document.documentElement.classList.add("dark"),localStorage.theme="dark")}function $s(){document.getElementById("scheme-switch").addEventListener("click",(function(){Do()}));let t=document.getElementById("display-settings-switch");t&&t.addEventListener("click",(function(){document.getElementById("display-setting").classList.toggle("float-panel-closed")})),document.getElementById("nav-menu-switch").addEventListener("click",(function(){document.getElementById("nav-menu-panel").classList.toggle("float-panel-closed")}))}window.swup.hooks?Mn():document.addEventListener("swup:enable",Mn),$s(),document.addEventListener("astro:after-swap",(()=>{$s()}),{once:!1});class Io extends HTMLElement{constructor(){if(super(),void 0===this.dataset.isCollapsed||!1===this.dataset.isCollapsed)return;const t=this.dataset.id,e=this.querySelector(".expand-btn"),n=this.querySelector(`#${t}`);e.addEventListener("click",(()=>{n.classList.remove("collapsed"),e.classList.add("hidden")}))}}customElements.define("widget-layout",Io);