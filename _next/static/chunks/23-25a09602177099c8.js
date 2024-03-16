"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[23],{7907:function(t,e,n){var r=n(5313);n.o(r,"usePathname")&&n.d(e,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(e,{useRouter:function(){return r.useRouter}})},7839:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(6832);class i{add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){let e=this.order.indexOf(t);-1!==e&&(this.order.splice(e,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}constructor(){this.order=[],this.scheduled=new Set}}let s=["read","resolveKeyframes","update","preRender","render","postRender"];function o(t,e){let n=!1,o=!0,u={delta:0,timestamp:0,isProcessing:!1},a=s.reduce((t,e)=>(t[e]=function(t){let e=new i,n=new i,r=0,s=!1,o=!1,u=new WeakSet,a={schedule:function(t){let i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=o&&s,l=a?e:n;return i&&u.add(t),l.add(t)&&a&&s&&(r=e.order.length),t},cancel:t=>{n.remove(t),u.delete(t)},process:i=>{if(s){o=!0;return}if(s=!0,[e,n]=[n,e],n.clear(),r=e.order.length)for(let n=0;n<r;n++){let r=e.order[n];u.has(r)&&(a.schedule(r),t()),r(i)}s=!1,o&&(o=!1,a.process(i))}};return a}(()=>n=!0),t),{}),l=t=>{a[t].process(u)},c=()=>{let i=r.c.useManualTiming?u.timestamp:performance.now();n=!1,u.delta=o?1e3/60:Math.max(Math.min(i-u.timestamp,40),1),u.timestamp=i,u.isProcessing=!0,s.forEach(l),u.isProcessing=!1,n&&e&&(o=!1,t(c))},f=()=>{n=!0,o=!0,u.isProcessing||t(c)};return{schedule:s.reduce((t,e)=>{let r=a[e];return t[e]=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n||f(),r.schedule(t,e,i)},t},{}),cancel:t=>s.forEach(e=>a[e].cancel(t)),state:u,steps:a}}},4205:function(t,e,n){n.d(e,{Pn:function(){return s},S6:function(){return u},Wi:function(){return i},frameData:function(){return o}});var r=n(3393);let{schedule:i,cancel:s,state:o,steps:u}=(0,n(7839).Z)("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:r.Z,!0)},3791:function(t,e,n){let r;n.d(e,{X:function(){return u}});var i=n(6832),s=n(4205);function o(){r=void 0}let u={now:()=>(void 0===r&&u.set(s.frameData.isProcessing||i.c.useManualTiming?s.frameData.timestamp:performance.now()),r),set:t=>{r=t,queueMicrotask(o)}}},7126:function(t,e,n){n.d(e,{f:function(){return i},t:function(){return o}});let r=t=>e=>"string"==typeof e&&e.startsWith(t),i=r("--"),s=r("var(--"),o=t=>!!s(t)&&u.test(t.split("/*")[0].trim()),u=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu},6832:function(t,e,n){n.d(e,{c:function(){return r}});let r={skipAnimations:!1,useManualTiming:!1}},406:function(t,e,n){function r(t,e){-1===t.indexOf(e)&&t.push(e)}function i(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}n.d(e,{cl:function(){return i},y4:function(){return r}})},2476:function(t,e,n){n.d(e,{u:function(){return r}});let r=(t,e,n)=>n>e?e:n<t?t:n},9908:function(t,e,n){n.d(e,{K:function(){return i},k:function(){return s}});var r=n(3393);let i=r.Z,s=r.Z},9780:function(t,e,n){n.d(e,{s:function(){return l}});var r=n(9908),i=n(2476),s=n(9280),o=n(9049),u=n(3393),a=n(7416);function l(t,e){let{clamp:n=!0,ease:l,mixer:c}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},f=t.length;if((0,r.k)(f===e.length,"Both input and output ranges must be the same length"),1===f)return()=>e[0];if(2===f&&t[0]===t[1])return()=>e[1];t[0]>t[f-1]&&(t=[...t].reverse(),e=[...e].reverse());let d=function(t,e,n){let r=[],i=n||a.C,o=t.length-1;for(let n=0;n<o;n++){let o=i(t[n],t[n+1]);if(e){let t=Array.isArray(e)?e[n]||u.Z:e;o=(0,s.z)(t,o)}r.push(o)}return r}(e,l,c),h=d.length,p=e=>{let n=0;if(h>1)for(;n<t.length-2&&!(e<t[n+1]);n++);let r=(0,o.Y)(t[n],t[n+1],e);return d[n](r)};return n?e=>p((0,i.u)(t[0],t[f-1],e)):p}},1702:function(t,e,n){n.d(e,{j:function(){return r}});let r="undefined"!=typeof document},7416:function(t,e,n){n.d(e,{C:function(){return P}});var r=n(5312),i=n(9908);function s(t,e,n){return(n<0&&(n+=1),n>1&&(n-=1),n<1/6)?t+(e-t)*6*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}var o=n(4184),u=n(6352),a=n(9808);let l=(t,e,n)=>{let r=t*t,i=n*(e*e-r)+r;return i<0?0:Math.sqrt(i)},c=[o.$,u.m,a.J],f=t=>c.find(e=>e.test(t));function d(t){let e=f(t);(0,i.k)(!!e,"'".concat(t,"' is not an animatable color. Use the equivalent color code instead."));let n=e.parse(t);return e===a.J&&(n=function(t){let{hue:e,saturation:n,lightness:r,alpha:i}=t;e/=360,r/=100;let o=0,u=0,a=0;if(n/=100){let t=r<.5?r*(1+n):r+n-r*n,i=2*r-t;o=s(i,t,e+1/3),u=s(i,t,e),a=s(i,t,e-1/3)}else o=u=a=r;return{red:Math.round(255*o),green:Math.round(255*u),blue:Math.round(255*a),alpha:i}}(n)),n}let h=(t,e)=>{let n=d(t),i=d(e),s={...n};return t=>(s.red=l(n.red,i.red,t),s.green=l(n.green,i.green,t),s.blue=l(n.blue,i.blue,t),s.alpha=(0,r.t)(n.alpha,i.alpha,t),u.m.transform(s))};var p=n(9280),g=n(2809),v=n(2263),m=n(7126);function y(t,e){return n=>n>0?e:t}function b(t,e){return n=>(0,r.t)(t,e,n)}function w(t){return"number"==typeof t?b:"string"==typeof t?(0,m.t)(t)?y:g.$.test(t)?h:x:Array.isArray(t)?A:"object"==typeof t?g.$.test(t)?h:E:y}function A(t,e){let n=[...t],r=n.length,i=t.map((t,n)=>w(t)(t,e[n]));return t=>{for(let e=0;e<r;e++)n[e]=i[e](t);return n}}function E(t,e){let n={...t,...e},r={};for(let i in n)void 0!==t[i]&&void 0!==e[i]&&(r[i]=w(t[i])(t[i],e[i]));return t=>{for(let e in r)n[e]=r[e](t);return n}}let x=(t,e)=>{let n=v.P.createTransformer(e),r=(0,v.V)(t),s=(0,v.V)(e);return r.indexes.var.length===s.indexes.var.length&&r.indexes.color.length===s.indexes.color.length&&r.indexes.number.length>=s.indexes.number.length?(0,p.z)(A(function(t,e){var n;let r=[],i={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){let o=e.types[s],u=t.indexes[o][i[o]],a=null!==(n=t.values[u])&&void 0!==n?n:0;r[s]=a,i[o]++}return r}(r,s),s.values),n):((0,i.K)(!0,"Complex values '".concat(t,"' and '").concat(e,"' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.")),y(t,e))};function P(t,e,n){return"number"==typeof t&&"number"==typeof e&&"number"==typeof n?(0,r.t)(t,e,n):w(t)(t,e)}},5312:function(t,e,n){n.d(e,{t:function(){return r}});let r=(t,e,n)=>t+(e-t)*n},3393:function(t,e,n){n.d(e,{Z:function(){return r}});let r=t=>t},4594:function(t,e,n){n.d(e,{Y:function(){return s}});var r=n(5312),i=n(9049);function s(t){let e=[0];return!function(t,e){let n=t[t.length-1];for(let s=1;s<=e;s++){let o=(0,i.Y)(0,e,s);t.push((0,r.t)(n,1,o))}}(e,t.length-1),e}},9280:function(t,e,n){n.d(e,{z:function(){return i}});let r=(t,e)=>n=>e(t(n)),i=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce(r)}},9049:function(t,e,n){n.d(e,{Y:function(){return r}});let r=(t,e,n)=>{let r=e-t;return 0===r?1:(n-t)/r}},2685:function(t,e,n){n.d(e,{L:function(){return i}});var r=n(406);class i{add(t){return(0,r.y4)(this.subscriptions,t),()=>(0,r.cl)(this.subscriptions,t)}notify(t,e,n){let r=this.subscriptions.length;if(r){if(1===r)this.subscriptions[0](t,e,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(t,e,n)}}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}constructor(){this.subscriptions=[]}}},2435:function(t,e,n){n.d(e,{h:function(){return i}});var r=n(4090);function i(t){let e=(0,r.useRef)(null);return null===e.current&&(e.current=t()),e.current}},5526:function(t,e,n){n.d(e,{L:function(){return i}});var r=n(4090);let i=n(1702).j?r.useLayoutEffect:r.useEffect},5364:function(t,e,n){n.d(e,{W:function(){return i}});var r=n(4090);function i(t,e,n){(0,r.useInsertionEffect)(()=>t.on(e,n),[t,e,n])}},2181:function(t,e,n){n.d(e,{R:function(){return r}});function r(t,e){return e?1e3/e*t:0}},3299:function(t,e,n){n.d(e,{BX:function(){return c}});var r=n(2685),i=n(2181),s=n(3791),o=n(4205);let u=t=>!isNaN(parseFloat(t)),a={current:void 0};class l{setCurrent(t){this.current=t,this.updatedAt=s.X.now()}setPrevFrameValue(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.current;this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,e){this.events[t]||(this.events[t]=new r.L);let n=this.events[t].add(e);return"change"===t?()=>{n(),o.Wi.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let t in this.events)this.events[t].clear()}attach(t,e){this.passiveEffect=t,this.stopPassiveEffect=e}set(t){let e=!(arguments.length>1)||void 0===arguments[1]||arguments[1];e&&this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t,e)}setWithVelocity(t,e,n){this.set(e),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-n}jump(t){let e=!(arguments.length>1)||void 0===arguments[1]||arguments[1];this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,e&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return a.current&&a.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let t=s.X.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||t-this.updatedAt>30)return 0;let e=Math.min(this.updatedAt-this.prevUpdatedAt,30);return(0,i.R)(parseFloat(this.current)-parseFloat(this.prevFrameValue),e)}start(t){return this.stop(),new Promise(e=>{this.hasAnimated=!0,this.animation=t(e),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}constructor(t,e={}){var n=this;this.version="11.0.14",this.canTrackVelocity=!1,this.events={},this.updateAndNotify=function(t){let e=!(arguments.length>1)||void 0===arguments[1]||arguments[1],r=s.X.now();n.updatedAt!==r&&n.setPrevFrameValue(),n.prev=n.current,n.setCurrent(t),n.current!==n.prev&&n.events.change&&n.events.change.notify(n.current),e&&n.events.renderRequest&&n.events.renderRequest.notify(n.current)},this.hasAnimated=!1,this.setCurrent(t),this.canTrackVelocity=u(this.current),this.owner=e.owner}}function c(t,e){return new l(t,e)}},4184:function(t,e,n){n.d(e,{$:function(){return i}});var r=n(6352);let i={test:(0,n(204).i)("#"),parse:function(t){let e="",n="",r="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),r=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,r+=r,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}},transform:r.m.transform}},9808:function(t,e,n){n.d(e,{J:function(){return u}});var r=n(5218),i=n(2724),s=n(3922),o=n(204);let u={test:(0,o.i)("hsl","hue"),parse:(0,o.d)("hue","saturation","lightness"),transform:t=>{let{hue:e,saturation:n,lightness:o,alpha:u=1}=t;return"hsla("+Math.round(e)+", "+i.aQ.transform((0,s.Nw)(n))+", "+i.aQ.transform((0,s.Nw)(o))+", "+(0,s.Nw)(r.Fq.transform(u))+")"}}},2809:function(t,e,n){n.d(e,{$:function(){return u}});var r=n(3922),i=n(4184),s=n(9808),o=n(6352);let u={test:t=>o.m.test(t)||i.$.test(t)||s.J.test(t),parse:t=>o.m.test(t)?o.m.parse(t):s.J.test(t)?s.J.parse(t):i.$.parse(t),transform:t=>(0,r.HD)(t)?t:t.hasOwnProperty("red")?o.m.transform(t):s.J.transform(t)}},6352:function(t,e,n){n.d(e,{m:function(){return l}});var r=n(2476),i=n(5218),s=n(3922),o=n(204);let u=t=>(0,r.u)(0,255,t),a={...i.Rx,transform:t=>Math.round(u(t))},l={test:(0,o.i)("rgb","red"),parse:(0,o.d)("red","green","blue"),transform:t=>{let{red:e,green:n,blue:r,alpha:o=1}=t;return"rgba("+a.transform(e)+", "+a.transform(n)+", "+a.transform(r)+", "+(0,s.Nw)(i.Fq.transform(o))+")"}}},204:function(t,e,n){n.d(e,{d:function(){return s},i:function(){return i}});var r=n(3922);let i=(t,e)=>n=>!!((0,r.HD)(n)&&r.mj.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),s=(t,e,n)=>i=>{if(!(0,r.HD)(i))return i;let[s,o,u,a]=i.match(r.KP);return{[t]:parseFloat(s),[e]:parseFloat(o),[n]:parseFloat(u),alpha:void 0!==a?parseFloat(a):1}}},2263:function(t,e,n){n.d(e,{P:function(){return d},V:function(){return a}});var r=n(2809),i=n(3922);let s="number",o="color",u=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function a(t){let e=t.toString(),n=[],i={color:[],number:[],var:[]},a=[],l=0,c=e.replace(u,t=>(r.$.test(t)?(i.color.push(l),a.push(o),n.push(r.$.parse(t))):t.startsWith("var(")?(i.var.push(l),a.push("var"),n.push(t)):(i.number.push(l),a.push(s),n.push(parseFloat(t))),++l,"${}")).split("${}");return{values:n,split:c,indexes:i,types:a}}function l(t){return a(t).values}function c(t){let{split:e,types:n}=a(t),u=e.length;return t=>{let a="";for(let l=0;l<u;l++)if(a+=e[l],void 0!==t[l]){let e=n[l];e===s?a+=(0,i.Nw)(t[l]):e===o?a+=r.$.transform(t[l]):a+=t[l]}return a}}let f=t=>"number"==typeof t?0:t,d={test:function(t){var e,n;return isNaN(t)&&(0,i.HD)(t)&&((null===(e=t.match(i.KP))||void 0===e?void 0:e.length)||0)+((null===(n=t.match(i.dA))||void 0===n?void 0:n.length)||0)>0},parse:l,createTransformer:c,getAnimatableNone:function(t){let e=l(t);return c(t)(e.map(f))}}},5218:function(t,e,n){n.d(e,{Fq:function(){return s},Rx:function(){return i},bA:function(){return o}});var r=n(2476);let i={test:t=>"number"==typeof t,parse:parseFloat,transform:t=>t},s={...i,transform:t=>(0,r.u)(0,1,t)},o={...i,default:1}},2724:function(t,e,n){n.d(e,{$C:function(){return c},RW:function(){return s},aQ:function(){return o},px:function(){return u},vh:function(){return a},vw:function(){return l}});var r=n(3922);let i=t=>({test:e=>(0,r.HD)(e)&&e.endsWith(t)&&1===e.split(" ").length,parse:parseFloat,transform:e=>"".concat(e).concat(t)}),s=i("deg"),o=i("%"),u=i("px"),a=i("vh"),l=i("vw"),c={...o,parse:t=>o.parse(t)/100,transform:t=>o.transform(100*t)}},3922:function(t,e,n){n.d(e,{HD:function(){return u},KP:function(){return i},Nw:function(){return r},dA:function(){return s},mj:function(){return o}});let r=t=>Math.round(1e5*t)/1e5,i=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,s=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,o=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;function u(t){return"string"==typeof t}},8993:function(t,e,n){let r,i;n.d(e,{v:function(){return H}});var s=n(3299),o=n(2435),u=n(4090),a=n(9908);let l=new WeakMap;function c(t){var e;let{target:n,contentRect:r,borderBoxSize:i}=t;null===(e=l.get(n))||void 0===e||e.forEach(t=>{t({target:n,contentSize:r,get size(){return function(t,e){if(e){let{inlineSize:t,blockSize:n}=e[0];return{width:t,height:n}}return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}(n,i)}})})}function f(t){t.forEach(c)}let d=new Set;var h=n(9049),p=n(2181);let g=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),v=()=>({time:0,x:g(),y:g()}),m={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function y(t,e,n,r){let i=n[e],{length:s,position:o}=m[e],u=i.current,a=n.time;i.current=t["scroll"+o],i.scrollLength=t["scroll"+s]-t["client"+s],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=(0,h.Y)(0,i.scrollLength,i.current);let l=r-a;i.velocity=l>50?0:(0,p.R)(i.current-u,l)}let b={All:[[0,0],[1,1]]},w={start:0,center:.5,end:1};function A(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=0;if(void 0!==w[t]&&(t=w[t]),"string"==typeof t){let e=parseFloat(t);t.endsWith("px")?r=e:t.endsWith("%")?t=e/100:t.endsWith("vw")?r=e/100*document.documentElement.clientWidth:t.endsWith("vh")?r=e/100*document.documentElement.clientHeight:t=e}return"number"==typeof t&&(r=e*t),n+r}let E=[0,0];var x=n(9780),P=n(4594);let W={x:0,y:0};var L=n(4205);let F=new WeakMap,N=new WeakMap,k=new WeakMap,S=t=>t===document.documentElement?window:t;var M=n(5526);function B(t,e){(0,a.K)(!!(!e||e.current),"You have defined a ".concat(t," options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its `layoutEffect: false` option."))}let R=()=>({scrollX:(0,s.BX)(0),scrollY:(0,s.BX)(0),scrollXProgress:(0,s.BX)(0),scrollYProgress:(0,s.BX)(0)});function H(){let{container:t,target:e,layoutEffect:n=!0,...s}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=(0,o.h)(R);return(n?M.L:u.useEffect)(()=>(B("target",e),B("container",t),function(t){let{container:e=document.documentElement,...n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=k.get(e);s||(s=new Set,k.set(e,s));let o=function(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return{measure:()=>(function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,n=arguments.length>2?arguments[2]:void 0;if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let r=e;for(;r&&r!==t;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight})(t,r.target,n),update:e=>{y(t,"x",n,e),y(t,"y",n,e),n.time=e,(r.offset||r.target)&&function(t,e,n){let{offset:r=b.All}=n,{target:i=t,axis:s="y"}=n,o="y"===s?"height":"width",u=i!==t?function(t,e){let n={x:0,y:0},r=t;for(;r&&r!==e;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){let t=r.getBoundingClientRect(),e=(r=r.parentElement).getBoundingClientRect();n.x+=t.left-e.left,n.y+=t.top-e.top}else if(r instanceof SVGGraphicsElement){let{x:t,y:e}=r.getBBox();n.x+=t,n.y+=e;let i=null,s=r.parentNode;for(;!i;)"svg"===s.tagName&&(i=s),s=r.parentNode;r=i}else break;return n}(i,t):W,a=i===t?{width:t.scrollWidth,height:t.scrollHeight}:"getBBox"in i&&"svg"!==i.tagName?i.getBBox():{width:i.clientWidth,height:i.clientHeight},l={width:t.clientWidth,height:t.clientHeight};e[s].offset.length=0;let c=!e[s].interpolate,f=r.length;for(let t=0;t<f;t++){let n=function(t,e,n,r){let i=Array.isArray(t)?t:E,s=0;return"number"==typeof t?i=[t,t]:"string"==typeof t&&(i=(t=t.trim()).includes(" ")?t.split(" "):[t,w[t]?t:"0"]),A(i[0],n,r)-A(i[1],e)}(r[t],l[o],a[o],u[s]);c||n===e[s].interpolatorOffsets[t]||(c=!0),e[s].offset[t]=n}c&&(e[s].interpolate=(0,x.s)(e[s].offset,(0,P.Y)(r)),e[s].interpolatorOffsets=[...e[s].offset]),e[s].progress=e[s].interpolate(e[s].current)}(t,n,r)},notify:()=>e(n)}}(e,t,v(),n);if(s.add(o),!F.has(e)){let t=()=>{for(let t of s)t.measure()},n=()=>{for(let t of s)t.update(L.frameData.timestamp)},o=()=>{for(let t of s)t.notify()},u=()=>{L.Wi.read(t,!1,!0),L.Wi.read(n,!1,!0),L.Wi.update(o,!1,!0)};F.set(e,u);let c=S(e);window.addEventListener("resize",u,{passive:!0}),e!==document.documentElement&&N.set(e,"function"==typeof e?(d.add(e),i||(i=()=>{let t={width:window.innerWidth,height:window.innerHeight},e={target:window,size:t,contentSize:t};d.forEach(t=>t(e))},window.addEventListener("resize",i)),()=>{d.delete(e),!d.size&&i&&(i=void 0)}):function(t,e){r||"undefined"==typeof ResizeObserver||(r=new ResizeObserver(f));let n=function(t,e,n){var r;if("string"==typeof t){let i=document;e&&((0,a.k)(!!e.current,"Scope provided, but no element detected."),i=e.current),n?(null!==(r=n[t])&&void 0!==r||(n[t]=i.querySelectorAll(t)),t=n[t]):t=i.querySelectorAll(t)}else t instanceof Element&&(t=[t]);return Array.from(t||[])}(t);return n.forEach(t=>{let n=l.get(t);n||(n=new Set,l.set(t,n)),n.add(e),null==r||r.observe(t)}),()=>{n.forEach(t=>{let n=l.get(t);null==n||n.delete(e),(null==n?void 0:n.size)||null==r||r.unobserve(t)})}}(e,u)),c.addEventListener("scroll",u,{passive:!0})}let u=F.get(e);return L.Wi.read(u,!1,!0),()=>{var t;(0,L.Pn)(u);let n=k.get(e);if(!n||(n.delete(o),n.size))return;let r=F.get(e);F.delete(e),r&&(S(e).removeEventListener("scroll",r),null===(t=N.get(e))||void 0===t||t(),window.removeEventListener("resize",r))}}(t=>{let{x:e,y:n}=t;c.scrollX.set(e.current),c.scrollXProgress.set(e.progress),c.scrollY.set(n.current),c.scrollYProgress.set(n.progress)},{...s,container:(null==t?void 0:t.current)||void 0,target:(null==e?void 0:e.current)||void 0})),[t,e,JSON.stringify(s.offset)]),c}}}]);