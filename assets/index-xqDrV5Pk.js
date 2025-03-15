(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Pf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wu={exports:{}},so={},Bu={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ar=Symbol.for("react.element"),Tf=Symbol.for("react.portal"),Of=Symbol.for("react.fragment"),If=Symbol.for("react.strict_mode"),Mf=Symbol.for("react.profiler"),Rf=Symbol.for("react.provider"),Df=Symbol.for("react.context"),Af=Symbol.for("react.forward_ref"),Ff=Symbol.for("react.suspense"),Wf=Symbol.for("react.memo"),Bf=Symbol.for("react.lazy"),ga=Symbol.iterator;function Uf(e){return e===null||typeof e!="object"?null:(e=ga&&e[ga]||e["@@iterator"],typeof e=="function"?e:null)}var Uu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bu=Object.assign,Hu={};function Un(e,t,n){this.props=e,this.context=t,this.refs=Hu,this.updater=n||Uu}Un.prototype.isReactComponent={};Un.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Un.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vu(){}Vu.prototype=Un.prototype;function hs(e,t,n){this.props=e,this.context=t,this.refs=Hu,this.updater=n||Uu}var ms=hs.prototype=new Vu;ms.constructor=hs;bu(ms,Un.prototype);ms.isPureReactComponent=!0;var xa=Array.isArray,Qu=Object.prototype.hasOwnProperty,gs={current:null},Gu={key:!0,ref:!0,__self:!0,__source:!0};function Yu(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Qu.call(t,r)&&!Gu.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ar,type:e,key:o,ref:l,props:i,_owner:gs.current}}function bf(e,t){return{$$typeof:Ar,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function xs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ar}function Hf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ya=/\/+/g;function To(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Hf(""+e.key):t.toString(36)}function hi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ar:case Tf:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+To(l,0):r,xa(i)?(n="",e!=null&&(n=e.replace(ya,"$&/")+"/"),hi(i,t,n,"",function(c){return c})):i!=null&&(xs(i)&&(i=bf(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(ya,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",xa(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+To(o,a);l+=hi(o,t,n,u,i)}else if(u=Uf(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+To(o,a++),l+=hi(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Vr(e,t,n){if(e==null)return e;var r=[],i=0;return hi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Vf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},mi={transition:null},Qf={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:mi,ReactCurrentOwner:gs};function Ku(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:Vr,forEach:function(e,t,n){Vr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vr(e,function(){t++}),t},toArray:function(e){return Vr(e,function(t){return t})||[]},only:function(e){if(!xs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=Un;I.Fragment=Of;I.Profiler=Mf;I.PureComponent=hs;I.StrictMode=If;I.Suspense=Ff;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qf;I.act=Ku;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=bu({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=gs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Qu.call(t,u)&&!Gu.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ar,type:e.type,key:i,ref:o,props:r,_owner:l}};I.createContext=function(e){return e={$$typeof:Df,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Rf,_context:e},e.Consumer=e};I.createElement=Yu;I.createFactory=function(e){var t=Yu.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:Af,render:e}};I.isValidElement=xs;I.lazy=function(e){return{$$typeof:Bf,_payload:{_status:-1,_result:e},_init:Vf}};I.memo=function(e,t){return{$$typeof:Wf,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=mi.transition;mi.transition={};try{e()}finally{mi.transition=t}};I.unstable_act=Ku;I.useCallback=function(e,t){return me.current.useCallback(e,t)};I.useContext=function(e){return me.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return me.current.useDeferredValue(e)};I.useEffect=function(e,t){return me.current.useEffect(e,t)};I.useId=function(){return me.current.useId()};I.useImperativeHandle=function(e,t,n){return me.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return me.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return me.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return me.current.useMemo(e,t)};I.useReducer=function(e,t,n){return me.current.useReducer(e,t,n)};I.useRef=function(e){return me.current.useRef(e)};I.useState=function(e){return me.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return me.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return me.current.useTransition()};I.version="18.3.1";Bu.exports=I;var G=Bu.exports;const Ie=Pf(G);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gf=G,Yf=Symbol.for("react.element"),Kf=Symbol.for("react.fragment"),Xf=Object.prototype.hasOwnProperty,Zf=Gf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jf={key:!0,ref:!0,__self:!0,__source:!0};function Xu(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Xf.call(t,r)&&!Jf.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Yf,type:e,key:o,ref:l,props:i,_owner:Zf.current}}so.Fragment=Kf;so.jsx=Xu;so.jsxs=Xu;Wu.exports=so;var s=Wu.exports,pl={},Zu={exports:{}},Ne={},Ju={exports:{}},qu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,N){var P=$.length;$.push(N);e:for(;0<P;){var A=P-1>>>1,F=$[A];if(0<i(F,N))$[A]=N,$[P]=F,P=A;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var N=$[0],P=$.pop();if(P!==N){$[0]=P;e:for(var A=0,F=$.length,Bt=F>>>1;A<Bt;){var We=2*(A+1)-1,ht=$[We],je=We+1,tt=$[je];if(0>i(ht,P))je<F&&0>i(tt,ht)?($[A]=tt,$[je]=P,A=je):($[A]=ht,$[We]=P,A=We);else if(je<F&&0>i(tt,P))$[A]=tt,$[je]=P,A=je;else break e}}return N}function i($,N){var P=$.sortIndex-N.sortIndex;return P!==0?P:$.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],c=[],g=1,m=null,h=3,y=!1,v=!1,w=!1,z=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p($){for(var N=n(c);N!==null;){if(N.callback===null)r(c);else if(N.startTime<=$)r(c),N.sortIndex=N.expirationTime,t(u,N);else break;N=n(c)}}function x($){if(w=!1,p($),!v)if(n(u)!==null)v=!0,Qn(C);else{var N=n(c);N!==null&&Wt(x,N.startTime-$)}}function C($,N){v=!1,w&&(w=!1,f(L),L=-1),y=!0;var P=h;try{for(p(N),m=n(u);m!==null&&(!(m.expirationTime>N)||$&&!Se());){var A=m.callback;if(typeof A=="function"){m.callback=null,h=m.priorityLevel;var F=A(m.expirationTime<=N);N=e.unstable_now(),typeof F=="function"?m.callback=F:m===n(u)&&r(u),p(N)}else r(u);m=n(u)}if(m!==null)var Bt=!0;else{var We=n(c);We!==null&&Wt(x,We.startTime-N),Bt=!1}return Bt}finally{m=null,h=P,y=!1}}var j=!1,k=null,L=-1,W=5,O=-1;function Se(){return!(e.unstable_now()-O<W)}function At(){if(k!==null){var $=e.unstable_now();O=$;var N=!0;try{N=k(!0,$)}finally{N?Ft():(j=!1,k=null)}}else j=!1}var Ft;if(typeof d=="function")Ft=function(){d(At)};else if(typeof MessageChannel<"u"){var br=new MessageChannel,zo=br.port2;br.port1.onmessage=At,Ft=function(){zo.postMessage(null)}}else Ft=function(){z(At,0)};function Qn($){k=$,j||(j=!0,Ft())}function Wt($,N){L=z(function(){$(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,Qn(C))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function($){switch(h){case 1:case 2:case 3:var N=3;break;default:N=h}var P=h;h=N;try{return $()}finally{h=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,N){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var P=h;h=$;try{return N()}finally{h=P}},e.unstable_scheduleCallback=function($,N,P){var A=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?A+P:A):P=A,$){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=P+F,$={id:g++,callback:N,priorityLevel:$,startTime:P,expirationTime:F,sortIndex:-1},P>A?($.sortIndex=P,t(c,$),n(u)===null&&$===n(c)&&(w?(f(L),L=-1):w=!0,Wt(x,P-A))):($.sortIndex=F,t(u,$),v||y||(v=!0,Qn(C))),$},e.unstable_shouldYield=Se,e.unstable_wrapCallback=function($){var N=h;return function(){var P=h;h=N;try{return $.apply(this,arguments)}finally{h=P}}}})(qu);Ju.exports=qu;var qf=Ju.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ep=G,Le=qf;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ec=new Set,vr={};function ln(e,t){zn(e,t),zn(e+"Capture",t)}function zn(e,t){for(vr[e]=t,e=0;e<t.length;e++)ec.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hl=Object.prototype.hasOwnProperty,tp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,va={},wa={};function np(e){return hl.call(wa,e)?!0:hl.call(va,e)?!1:tp.test(e)?wa[e]=!0:(va[e]=!0,!1)}function rp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ip(e,t,n,r){if(t===null||typeof t>"u"||rp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var ys=/[\-:]([a-z])/g;function vs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ys,vs);ae[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ys,vs);ae[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ys,vs);ae[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function ws(e,t,n,r){var i=ae.hasOwnProperty(t)?ae[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ip(t,n,i,r)&&(n=null),r||i===null?np(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ft=ep.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qr=Symbol.for("react.element"),dn=Symbol.for("react.portal"),fn=Symbol.for("react.fragment"),ks=Symbol.for("react.strict_mode"),ml=Symbol.for("react.profiler"),tc=Symbol.for("react.provider"),nc=Symbol.for("react.context"),Ss=Symbol.for("react.forward_ref"),gl=Symbol.for("react.suspense"),xl=Symbol.for("react.suspense_list"),js=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),rc=Symbol.for("react.offscreen"),ka=Symbol.iterator;function Yn(e){return e===null||typeof e!="object"?null:(e=ka&&e[ka]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Oo;function ir(e){if(Oo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Oo=t&&t[1]||""}return`
`+Oo+e}var Io=!1;function Mo(e,t){if(!e||Io)return"";Io=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{Io=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ir(e):""}function op(e){switch(e.tag){case 5:return ir(e.type);case 16:return ir("Lazy");case 13:return ir("Suspense");case 19:return ir("SuspenseList");case 0:case 2:case 15:return e=Mo(e.type,!1),e;case 11:return e=Mo(e.type.render,!1),e;case 1:return e=Mo(e.type,!0),e;default:return""}}function yl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fn:return"Fragment";case dn:return"Portal";case ml:return"Profiler";case ks:return"StrictMode";case gl:return"Suspense";case xl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case nc:return(e.displayName||"Context")+".Consumer";case tc:return(e._context.displayName||"Context")+".Provider";case Ss:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case js:return t=e.displayName||null,t!==null?t:yl(e.type)||"Memo";case yt:t=e._payload,e=e._init;try{return yl(e(t))}catch{}}return null}function lp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yl(t);case 8:return t===ks?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ot(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ic(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function sp(e){var t=ic(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gr(e){e._valueTracker||(e._valueTracker=sp(e))}function oc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ic(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vl(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Sa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ot(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function lc(e,t){t=t.checked,t!=null&&ws(e,"checked",t,!1)}function wl(e,t){lc(e,t);var n=Ot(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?kl(e,t.type,n):t.hasOwnProperty("defaultValue")&&kl(e,t.type,Ot(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ja(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function kl(e,t,n){(t!=="number"||Pi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var or=Array.isArray;function Cn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ot(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Sl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ca(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(or(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ot(n)}}function sc(e,t){var n=Ot(t.value),r=Ot(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ea(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ac(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ac(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yr,uc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yr=Yr||document.createElement("div"),Yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ap=["Webkit","ms","Moz","O"];Object.keys(ur).forEach(function(e){ap.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ur[t]=ur[e]})});function cc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ur.hasOwnProperty(e)&&ur[e]?(""+t).trim():t+"px"}function dc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=cc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var up=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cl(e,t){if(t){if(up[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function El(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $l=null;function Cs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _l=null,En=null,$n=null;function $a(e){if(e=Br(e)){if(typeof _l!="function")throw Error(S(280));var t=e.stateNode;t&&(t=po(t),_l(e.stateNode,e.type,t))}}function fc(e){En?$n?$n.push(e):$n=[e]:En=e}function pc(){if(En){var e=En,t=$n;if($n=En=null,$a(e),t)for(e=0;e<t.length;e++)$a(t[e])}}function hc(e,t){return e(t)}function mc(){}var Ro=!1;function gc(e,t,n){if(Ro)return e(t,n);Ro=!0;try{return hc(e,t,n)}finally{Ro=!1,(En!==null||$n!==null)&&(mc(),pc())}}function kr(e,t){var n=e.stateNode;if(n===null)return null;var r=po(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Ll=!1;if(at)try{var Kn={};Object.defineProperty(Kn,"passive",{get:function(){Ll=!0}}),window.addEventListener("test",Kn,Kn),window.removeEventListener("test",Kn,Kn)}catch{Ll=!1}function cp(e,t,n,r,i,o,l,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var cr=!1,Ti=null,Oi=!1,Nl=null,dp={onError:function(e){cr=!0,Ti=e}};function fp(e,t,n,r,i,o,l,a,u){cr=!1,Ti=null,cp.apply(dp,arguments)}function pp(e,t,n,r,i,o,l,a,u){if(fp.apply(this,arguments),cr){if(cr){var c=Ti;cr=!1,Ti=null}else throw Error(S(198));Oi||(Oi=!0,Nl=c)}}function sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function xc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _a(e){if(sn(e)!==e)throw Error(S(188))}function hp(e){var t=e.alternate;if(!t){if(t=sn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return _a(i),e;if(o===r)return _a(i),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function yc(e){return e=hp(e),e!==null?vc(e):null}function vc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vc(e);if(t!==null)return t;e=e.sibling}return null}var wc=Le.unstable_scheduleCallback,La=Le.unstable_cancelCallback,mp=Le.unstable_shouldYield,gp=Le.unstable_requestPaint,Z=Le.unstable_now,xp=Le.unstable_getCurrentPriorityLevel,Es=Le.unstable_ImmediatePriority,kc=Le.unstable_UserBlockingPriority,Ii=Le.unstable_NormalPriority,yp=Le.unstable_LowPriority,Sc=Le.unstable_IdlePriority,ao=null,qe=null;function vp(e){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(ao,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:Sp,wp=Math.log,kp=Math.LN2;function Sp(e){return e>>>=0,e===0?32:31-(wp(e)/kp|0)|0}var Kr=64,Xr=4194304;function lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=lr(a):(o&=l,o!==0&&(r=lr(o)))}else l=n&~i,l!==0?r=lr(l):o!==0&&(r=lr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ve(t),i=1<<n,r|=e[n],t&=~i;return r}function jp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ve(o),a=1<<l,u=i[l];u===-1?(!(a&n)||a&r)&&(i[l]=jp(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function zl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jc(){var e=Kr;return Kr<<=1,!(Kr&4194240)&&(Kr=64),e}function Do(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=n}function Ep(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ve(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function $s(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var D=0;function Cc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ec,_s,$c,_c,Lc,Pl=!1,Zr=[],Ct=null,Et=null,$t=null,Sr=new Map,jr=new Map,wt=[],$p="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Na(e,t){switch(e){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":Et=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":Sr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jr.delete(t.pointerId)}}function Xn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Br(t),t!==null&&_s(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function _p(e,t,n,r,i){switch(t){case"focusin":return Ct=Xn(Ct,e,t,n,r,i),!0;case"dragenter":return Et=Xn(Et,e,t,n,r,i),!0;case"mouseover":return $t=Xn($t,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Sr.set(o,Xn(Sr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,jr.set(o,Xn(jr.get(o)||null,e,t,n,r,i)),!0}return!1}function Nc(e){var t=Vt(e.target);if(t!==null){var n=sn(t);if(n!==null){if(t=n.tag,t===13){if(t=xc(n),t!==null){e.blockedOn=t,Lc(e.priority,function(){$c(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Tl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);$l=r,n.target.dispatchEvent(r),$l=null}else return t=Br(n),t!==null&&_s(t),e.blockedOn=n,!1;t.shift()}return!0}function za(e,t,n){gi(e)&&n.delete(t)}function Lp(){Pl=!1,Ct!==null&&gi(Ct)&&(Ct=null),Et!==null&&gi(Et)&&(Et=null),$t!==null&&gi($t)&&($t=null),Sr.forEach(za),jr.forEach(za)}function Zn(e,t){e.blockedOn===t&&(e.blockedOn=null,Pl||(Pl=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,Lp)))}function Cr(e){function t(i){return Zn(i,e)}if(0<Zr.length){Zn(Zr[0],e);for(var n=1;n<Zr.length;n++){var r=Zr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ct!==null&&Zn(Ct,e),Et!==null&&Zn(Et,e),$t!==null&&Zn($t,e),Sr.forEach(t),jr.forEach(t),n=0;n<wt.length;n++)r=wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wt.length&&(n=wt[0],n.blockedOn===null);)Nc(n),n.blockedOn===null&&wt.shift()}var _n=ft.ReactCurrentBatchConfig,Ri=!0;function Np(e,t,n,r){var i=D,o=_n.transition;_n.transition=null;try{D=1,Ls(e,t,n,r)}finally{D=i,_n.transition=o}}function zp(e,t,n,r){var i=D,o=_n.transition;_n.transition=null;try{D=4,Ls(e,t,n,r)}finally{D=i,_n.transition=o}}function Ls(e,t,n,r){if(Ri){var i=Tl(e,t,n,r);if(i===null)Go(e,t,r,Di,n),Na(e,r);else if(_p(i,e,t,n,r))r.stopPropagation();else if(Na(e,r),t&4&&-1<$p.indexOf(e)){for(;i!==null;){var o=Br(i);if(o!==null&&Ec(o),o=Tl(e,t,n,r),o===null&&Go(e,t,r,Di,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Go(e,t,r,null,n)}}var Di=null;function Tl(e,t,n,r){if(Di=null,e=Cs(r),e=Vt(e),e!==null)if(t=sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=xc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Di=e,null}function zc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xp()){case Es:return 1;case kc:return 4;case Ii:case yp:return 16;case Sc:return 536870912;default:return 16}default:return 16}}var St=null,Ns=null,xi=null;function Pc(){if(xi)return xi;var e,t=Ns,n=t.length,r,i="value"in St?St.value:St.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return xi=i.slice(e,1<r?1-r:void 0)}function yi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jr(){return!0}function Pa(){return!1}function ze(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Jr:Pa,this.isPropagationStopped=Pa,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jr)},persist:function(){},isPersistent:Jr}),t}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zs=ze(bn),Wr=K({},bn,{view:0,detail:0}),Pp=ze(Wr),Ao,Fo,Jn,uo=K({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ps,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jn&&(Jn&&e.type==="mousemove"?(Ao=e.screenX-Jn.screenX,Fo=e.screenY-Jn.screenY):Fo=Ao=0,Jn=e),Ao)},movementY:function(e){return"movementY"in e?e.movementY:Fo}}),Ta=ze(uo),Tp=K({},uo,{dataTransfer:0}),Op=ze(Tp),Ip=K({},Wr,{relatedTarget:0}),Wo=ze(Ip),Mp=K({},bn,{animationName:0,elapsedTime:0,pseudoElement:0}),Rp=ze(Mp),Dp=K({},bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ap=ze(Dp),Fp=K({},bn,{data:0}),Oa=ze(Fp),Wp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Up={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Up[e])?!!t[e]:!1}function Ps(){return bp}var Hp=K({},Wr,{key:function(e){if(e.key){var t=Wp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ps,charCode:function(e){return e.type==="keypress"?yi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vp=ze(Hp),Qp=K({},uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ia=ze(Qp),Gp=K({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ps}),Yp=ze(Gp),Kp=K({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xp=ze(Kp),Zp=K({},uo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jp=ze(Zp),qp=[9,13,27,32],Ts=at&&"CompositionEvent"in window,dr=null;at&&"documentMode"in document&&(dr=document.documentMode);var e0=at&&"TextEvent"in window&&!dr,Tc=at&&(!Ts||dr&&8<dr&&11>=dr),Ma=" ",Ra=!1;function Oc(e,t){switch(e){case"keyup":return qp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ic(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pn=!1;function t0(e,t){switch(e){case"compositionend":return Ic(t);case"keypress":return t.which!==32?null:(Ra=!0,Ma);case"textInput":return e=t.data,e===Ma&&Ra?null:e;default:return null}}function n0(e,t){if(pn)return e==="compositionend"||!Ts&&Oc(e,t)?(e=Pc(),xi=Ns=St=null,pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tc&&t.locale!=="ko"?null:t.data;default:return null}}var r0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Da(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!r0[e.type]:t==="textarea"}function Mc(e,t,n,r){fc(r),t=Ai(t,"onChange"),0<t.length&&(n=new zs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var fr=null,Er=null;function i0(e){Qc(e,0)}function co(e){var t=gn(e);if(oc(t))return e}function o0(e,t){if(e==="change")return t}var Rc=!1;if(at){var Bo;if(at){var Uo="oninput"in document;if(!Uo){var Aa=document.createElement("div");Aa.setAttribute("oninput","return;"),Uo=typeof Aa.oninput=="function"}Bo=Uo}else Bo=!1;Rc=Bo&&(!document.documentMode||9<document.documentMode)}function Fa(){fr&&(fr.detachEvent("onpropertychange",Dc),Er=fr=null)}function Dc(e){if(e.propertyName==="value"&&co(Er)){var t=[];Mc(t,Er,e,Cs(e)),gc(i0,t)}}function l0(e,t,n){e==="focusin"?(Fa(),fr=t,Er=n,fr.attachEvent("onpropertychange",Dc)):e==="focusout"&&Fa()}function s0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return co(Er)}function a0(e,t){if(e==="click")return co(t)}function u0(e,t){if(e==="input"||e==="change")return co(t)}function c0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ye=typeof Object.is=="function"?Object.is:c0;function $r(e,t){if(Ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hl.call(t,i)||!Ye(e[i],t[i]))return!1}return!0}function Wa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ba(e,t){var n=Wa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wa(n)}}function Ac(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ac(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fc(){for(var e=window,t=Pi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Pi(e.document)}return t}function Os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function d0(e){var t=Fc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ac(n.ownerDocument.documentElement,n)){if(r!==null&&Os(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ba(n,o);var l=Ba(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var f0=at&&"documentMode"in document&&11>=document.documentMode,hn=null,Ol=null,pr=null,Il=!1;function Ua(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Il||hn==null||hn!==Pi(r)||(r=hn,"selectionStart"in r&&Os(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pr&&$r(pr,r)||(pr=r,r=Ai(Ol,"onSelect"),0<r.length&&(t=new zs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hn)))}function qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mn={animationend:qr("Animation","AnimationEnd"),animationiteration:qr("Animation","AnimationIteration"),animationstart:qr("Animation","AnimationStart"),transitionend:qr("Transition","TransitionEnd")},bo={},Wc={};at&&(Wc=document.createElement("div").style,"AnimationEvent"in window||(delete mn.animationend.animation,delete mn.animationiteration.animation,delete mn.animationstart.animation),"TransitionEvent"in window||delete mn.transitionend.transition);function fo(e){if(bo[e])return bo[e];if(!mn[e])return e;var t=mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wc)return bo[e]=t[n];return e}var Bc=fo("animationend"),Uc=fo("animationiteration"),bc=fo("animationstart"),Hc=fo("transitionend"),Vc=new Map,ba="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mt(e,t){Vc.set(e,t),ln(t,[e])}for(var Ho=0;Ho<ba.length;Ho++){var Vo=ba[Ho],p0=Vo.toLowerCase(),h0=Vo[0].toUpperCase()+Vo.slice(1);Mt(p0,"on"+h0)}Mt(Bc,"onAnimationEnd");Mt(Uc,"onAnimationIteration");Mt(bc,"onAnimationStart");Mt("dblclick","onDoubleClick");Mt("focusin","onFocus");Mt("focusout","onBlur");Mt(Hc,"onTransitionEnd");zn("onMouseEnter",["mouseout","mouseover"]);zn("onMouseLeave",["mouseout","mouseover"]);zn("onPointerEnter",["pointerout","pointerover"]);zn("onPointerLeave",["pointerout","pointerover"]);ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m0=new Set("cancel close invalid load scroll toggle".split(" ").concat(sr));function Ha(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,pp(r,t,void 0,e),e.currentTarget=null}function Qc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;Ha(i,a,c),o=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;Ha(i,a,c),o=u}}}if(Oi)throw e=Nl,Oi=!1,Nl=null,e}function U(e,t){var n=t[Fl];n===void 0&&(n=t[Fl]=new Set);var r=e+"__bubble";n.has(r)||(Gc(t,e,2,!1),n.add(r))}function Qo(e,t,n){var r=0;t&&(r|=4),Gc(n,e,r,t)}var ei="_reactListening"+Math.random().toString(36).slice(2);function _r(e){if(!e[ei]){e[ei]=!0,ec.forEach(function(n){n!=="selectionchange"&&(m0.has(n)||Qo(n,!1,e),Qo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ei]||(t[ei]=!0,Qo("selectionchange",!1,t))}}function Gc(e,t,n,r){switch(zc(t)){case 1:var i=Np;break;case 4:i=zp;break;default:i=Ls}n=i.bind(null,t,n,e),i=void 0,!Ll||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Go(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Vt(a),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}a=a.parentNode}}r=r.return}gc(function(){var c=o,g=Cs(n),m=[];e:{var h=Vc.get(e);if(h!==void 0){var y=zs,v=e;switch(e){case"keypress":if(yi(n)===0)break e;case"keydown":case"keyup":y=Vp;break;case"focusin":v="focus",y=Wo;break;case"focusout":v="blur",y=Wo;break;case"beforeblur":case"afterblur":y=Wo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ta;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Op;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Yp;break;case Bc:case Uc:case bc:y=Rp;break;case Hc:y=Xp;break;case"scroll":y=Pp;break;case"wheel":y=Jp;break;case"copy":case"cut":case"paste":y=Ap;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ia}var w=(t&4)!==0,z=!w&&e==="scroll",f=w?h!==null?h+"Capture":null:h;w=[];for(var d=c,p;d!==null;){p=d;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=kr(d,f),x!=null&&w.push(Lr(d,x,p)))),z)break;d=d.return}0<w.length&&(h=new y(h,v,null,n,g),m.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==$l&&(v=n.relatedTarget||n.fromElement)&&(Vt(v)||v[ut]))break e;if((y||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=c,v=v?Vt(v):null,v!==null&&(z=sn(v),v!==z||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=c),y!==v)){if(w=Ta,x="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=Ia,x="onPointerLeave",f="onPointerEnter",d="pointer"),z=y==null?h:gn(y),p=v==null?h:gn(v),h=new w(x,d+"leave",y,n,g),h.target=z,h.relatedTarget=p,x=null,Vt(g)===c&&(w=new w(f,d+"enter",v,n,g),w.target=p,w.relatedTarget=z,x=w),z=x,y&&v)t:{for(w=y,f=v,d=0,p=w;p;p=un(p))d++;for(p=0,x=f;x;x=un(x))p++;for(;0<d-p;)w=un(w),d--;for(;0<p-d;)f=un(f),p--;for(;d--;){if(w===f||f!==null&&w===f.alternate)break t;w=un(w),f=un(f)}w=null}else w=null;y!==null&&Va(m,h,y,w,!1),v!==null&&z!==null&&Va(m,z,v,w,!0)}}e:{if(h=c?gn(c):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var C=o0;else if(Da(h))if(Rc)C=u0;else{C=s0;var j=l0}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=a0);if(C&&(C=C(e,c))){Mc(m,C,n,g);break e}j&&j(e,h,c),e==="focusout"&&(j=h._wrapperState)&&j.controlled&&h.type==="number"&&kl(h,"number",h.value)}switch(j=c?gn(c):window,e){case"focusin":(Da(j)||j.contentEditable==="true")&&(hn=j,Ol=c,pr=null);break;case"focusout":pr=Ol=hn=null;break;case"mousedown":Il=!0;break;case"contextmenu":case"mouseup":case"dragend":Il=!1,Ua(m,n,g);break;case"selectionchange":if(f0)break;case"keydown":case"keyup":Ua(m,n,g)}var k;if(Ts)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else pn?Oc(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Tc&&n.locale!=="ko"&&(pn||L!=="onCompositionStart"?L==="onCompositionEnd"&&pn&&(k=Pc()):(St=g,Ns="value"in St?St.value:St.textContent,pn=!0)),j=Ai(c,L),0<j.length&&(L=new Oa(L,e,null,n,g),m.push({event:L,listeners:j}),k?L.data=k:(k=Ic(n),k!==null&&(L.data=k)))),(k=e0?t0(e,n):n0(e,n))&&(c=Ai(c,"onBeforeInput"),0<c.length&&(g=new Oa("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:c}),g.data=k))}Qc(m,t)})}function Lr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ai(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=kr(e,n),o!=null&&r.unshift(Lr(e,o,i)),o=kr(e,t),o!=null&&r.push(Lr(e,o,i))),e=e.return}return r}function un(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Va(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=kr(n,o),u!=null&&l.unshift(Lr(n,u,a))):i||(u=kr(n,o),u!=null&&l.push(Lr(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var g0=/\r\n?/g,x0=/\u0000|\uFFFD/g;function Qa(e){return(typeof e=="string"?e:""+e).replace(g0,`
`).replace(x0,"")}function ti(e,t,n){if(t=Qa(t),Qa(e)!==t&&n)throw Error(S(425))}function Fi(){}var Ml=null,Rl=null;function Dl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Al=typeof setTimeout=="function"?setTimeout:void 0,y0=typeof clearTimeout=="function"?clearTimeout:void 0,Ga=typeof Promise=="function"?Promise:void 0,v0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ga<"u"?function(e){return Ga.resolve(null).then(e).catch(w0)}:Al;function w0(e){setTimeout(function(){throw e})}function Yo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Cr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Cr(t)}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ya(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Hn=Math.random().toString(36).slice(2),Je="__reactFiber$"+Hn,Nr="__reactProps$"+Hn,ut="__reactContainer$"+Hn,Fl="__reactEvents$"+Hn,k0="__reactListeners$"+Hn,S0="__reactHandles$"+Hn;function Vt(e){var t=e[Je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ut]||n[Je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ya(e);e!==null;){if(n=e[Je])return n;e=Ya(e)}return t}e=n,n=e.parentNode}return null}function Br(e){return e=e[Je]||e[ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function po(e){return e[Nr]||null}var Wl=[],xn=-1;function Rt(e){return{current:e}}function H(e){0>xn||(e.current=Wl[xn],Wl[xn]=null,xn--)}function B(e,t){xn++,Wl[xn]=e.current,e.current=t}var It={},fe=Rt(It),ve=Rt(!1),Jt=It;function Pn(e,t){var n=e.type.contextTypes;if(!n)return It;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function we(e){return e=e.childContextTypes,e!=null}function Wi(){H(ve),H(fe)}function Ka(e,t,n){if(fe.current!==It)throw Error(S(168));B(fe,t),B(ve,n)}function Yc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,lp(e)||"Unknown",i));return K({},n,r)}function Bi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||It,Jt=fe.current,B(fe,e),B(ve,ve.current),!0}function Xa(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Yc(e,t,Jt),r.__reactInternalMemoizedMergedChildContext=e,H(ve),H(fe),B(fe,e)):H(ve),B(ve,n)}var it=null,ho=!1,Ko=!1;function Kc(e){it===null?it=[e]:it.push(e)}function j0(e){ho=!0,Kc(e)}function Dt(){if(!Ko&&it!==null){Ko=!0;var e=0,t=D;try{var n=it;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}it=null,ho=!1}catch(i){throw it!==null&&(it=it.slice(e+1)),wc(Es,Dt),i}finally{D=t,Ko=!1}}return null}var yn=[],vn=0,Ui=null,bi=0,Te=[],Oe=0,qt=null,ot=1,lt="";function bt(e,t){yn[vn++]=bi,yn[vn++]=Ui,Ui=e,bi=t}function Xc(e,t,n){Te[Oe++]=ot,Te[Oe++]=lt,Te[Oe++]=qt,qt=e;var r=ot;e=lt;var i=32-Ve(r)-1;r&=~(1<<i),n+=1;var o=32-Ve(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,ot=1<<32-Ve(t)+i|n<<i|r,lt=o+e}else ot=1<<o|n<<i|r,lt=e}function Is(e){e.return!==null&&(bt(e,1),Xc(e,1,0))}function Ms(e){for(;e===Ui;)Ui=yn[--vn],yn[vn]=null,bi=yn[--vn],yn[vn]=null;for(;e===qt;)qt=Te[--Oe],Te[Oe]=null,lt=Te[--Oe],Te[Oe]=null,ot=Te[--Oe],Te[Oe]=null}var _e=null,$e=null,V=!1,He=null;function Zc(e,t){var n=Me(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Za(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,_e=e,$e=_t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,_e=e,$e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=qt!==null?{id:ot,overflow:lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Me(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,_e=e,$e=null,!0):!1;default:return!1}}function Bl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ul(e){if(V){var t=$e;if(t){var n=t;if(!Za(e,t)){if(Bl(e))throw Error(S(418));t=_t(n.nextSibling);var r=_e;t&&Za(e,t)?Zc(r,n):(e.flags=e.flags&-4097|2,V=!1,_e=e)}}else{if(Bl(e))throw Error(S(418));e.flags=e.flags&-4097|2,V=!1,_e=e}}}function Ja(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_e=e}function ni(e){if(e!==_e)return!1;if(!V)return Ja(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Dl(e.type,e.memoizedProps)),t&&(t=$e)){if(Bl(e))throw Jc(),Error(S(418));for(;t;)Zc(e,t),t=_t(t.nextSibling)}if(Ja(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$e=_t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$e=null}}else $e=_e?_t(e.stateNode.nextSibling):null;return!0}function Jc(){for(var e=$e;e;)e=_t(e.nextSibling)}function Tn(){$e=_e=null,V=!1}function Rs(e){He===null?He=[e]:He.push(e)}var C0=ft.ReactCurrentBatchConfig;function qn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function ri(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qa(e){var t=e._init;return t(e._payload)}function qc(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=Pt(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,p,x){return d===null||d.tag!==6?(d=nl(p,f.mode,x),d.return=f,d):(d=i(d,p),d.return=f,d)}function u(f,d,p,x){var C=p.type;return C===fn?g(f,d,p.props.children,x,p.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===yt&&qa(C)===d.type)?(x=i(d,p.props),x.ref=qn(f,d,p),x.return=f,x):(x=Ei(p.type,p.key,p.props,null,f.mode,x),x.ref=qn(f,d,p),x.return=f,x)}function c(f,d,p,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=rl(p,f.mode,x),d.return=f,d):(d=i(d,p.children||[]),d.return=f,d)}function g(f,d,p,x,C){return d===null||d.tag!==7?(d=Xt(p,f.mode,x,C),d.return=f,d):(d=i(d,p),d.return=f,d)}function m(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=nl(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Qr:return p=Ei(d.type,d.key,d.props,null,f.mode,p),p.ref=qn(f,null,d),p.return=f,p;case dn:return d=rl(d,f.mode,p),d.return=f,d;case yt:var x=d._init;return m(f,x(d._payload),p)}if(or(d)||Yn(d))return d=Xt(d,f.mode,p,null),d.return=f,d;ri(f,d)}return null}function h(f,d,p,x){var C=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:a(f,d,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Qr:return p.key===C?u(f,d,p,x):null;case dn:return p.key===C?c(f,d,p,x):null;case yt:return C=p._init,h(f,d,C(p._payload),x)}if(or(p)||Yn(p))return C!==null?null:g(f,d,p,x,null);ri(f,p)}return null}function y(f,d,p,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,a(d,f,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Qr:return f=f.get(x.key===null?p:x.key)||null,u(d,f,x,C);case dn:return f=f.get(x.key===null?p:x.key)||null,c(d,f,x,C);case yt:var j=x._init;return y(f,d,p,j(x._payload),C)}if(or(x)||Yn(x))return f=f.get(p)||null,g(d,f,x,C,null);ri(d,x)}return null}function v(f,d,p,x){for(var C=null,j=null,k=d,L=d=0,W=null;k!==null&&L<p.length;L++){k.index>L?(W=k,k=null):W=k.sibling;var O=h(f,k,p[L],x);if(O===null){k===null&&(k=W);break}e&&k&&O.alternate===null&&t(f,k),d=o(O,d,L),j===null?C=O:j.sibling=O,j=O,k=W}if(L===p.length)return n(f,k),V&&bt(f,L),C;if(k===null){for(;L<p.length;L++)k=m(f,p[L],x),k!==null&&(d=o(k,d,L),j===null?C=k:j.sibling=k,j=k);return V&&bt(f,L),C}for(k=r(f,k);L<p.length;L++)W=y(k,f,L,p[L],x),W!==null&&(e&&W.alternate!==null&&k.delete(W.key===null?L:W.key),d=o(W,d,L),j===null?C=W:j.sibling=W,j=W);return e&&k.forEach(function(Se){return t(f,Se)}),V&&bt(f,L),C}function w(f,d,p,x){var C=Yn(p);if(typeof C!="function")throw Error(S(150));if(p=C.call(p),p==null)throw Error(S(151));for(var j=C=null,k=d,L=d=0,W=null,O=p.next();k!==null&&!O.done;L++,O=p.next()){k.index>L?(W=k,k=null):W=k.sibling;var Se=h(f,k,O.value,x);if(Se===null){k===null&&(k=W);break}e&&k&&Se.alternate===null&&t(f,k),d=o(Se,d,L),j===null?C=Se:j.sibling=Se,j=Se,k=W}if(O.done)return n(f,k),V&&bt(f,L),C;if(k===null){for(;!O.done;L++,O=p.next())O=m(f,O.value,x),O!==null&&(d=o(O,d,L),j===null?C=O:j.sibling=O,j=O);return V&&bt(f,L),C}for(k=r(f,k);!O.done;L++,O=p.next())O=y(k,f,L,O.value,x),O!==null&&(e&&O.alternate!==null&&k.delete(O.key===null?L:O.key),d=o(O,d,L),j===null?C=O:j.sibling=O,j=O);return e&&k.forEach(function(At){return t(f,At)}),V&&bt(f,L),C}function z(f,d,p,x){if(typeof p=="object"&&p!==null&&p.type===fn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Qr:e:{for(var C=p.key,j=d;j!==null;){if(j.key===C){if(C=p.type,C===fn){if(j.tag===7){n(f,j.sibling),d=i(j,p.props.children),d.return=f,f=d;break e}}else if(j.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===yt&&qa(C)===j.type){n(f,j.sibling),d=i(j,p.props),d.ref=qn(f,j,p),d.return=f,f=d;break e}n(f,j);break}else t(f,j);j=j.sibling}p.type===fn?(d=Xt(p.props.children,f.mode,x,p.key),d.return=f,f=d):(x=Ei(p.type,p.key,p.props,null,f.mode,x),x.ref=qn(f,d,p),x.return=f,f=x)}return l(f);case dn:e:{for(j=p.key;d!==null;){if(d.key===j)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=i(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=rl(p,f.mode,x),d.return=f,f=d}return l(f);case yt:return j=p._init,z(f,d,j(p._payload),x)}if(or(p))return v(f,d,p,x);if(Yn(p))return w(f,d,p,x);ri(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,p),d.return=f,f=d):(n(f,d),d=nl(p,f.mode,x),d.return=f,f=d),l(f)):n(f,d)}return z}var On=qc(!0),ed=qc(!1),Hi=Rt(null),Vi=null,wn=null,Ds=null;function As(){Ds=wn=Vi=null}function Fs(e){var t=Hi.current;H(Hi),e._currentValue=t}function bl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ln(e,t){Vi=e,Ds=wn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(Ds!==e)if(e={context:e,memoizedValue:t,next:null},wn===null){if(Vi===null)throw Error(S(308));wn=e,Vi.dependencies={lanes:0,firstContext:e}}else wn=wn.next=e;return t}var Qt=null;function Ws(e){Qt===null?Qt=[e]:Qt.push(e)}function td(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ws(t)):(n.next=i.next,i.next=n),t.interleaved=n,ct(e,r)}function ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vt=!1;function Bs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function st(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Lt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ct(e,n)}return i=r.interleaved,i===null?(t.next=t,Ws(r)):(t.next=i.next,i.next=t),r.interleaved=t,ct(e,n)}function vi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$s(e,n)}}function eu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qi(e,t,n,r){var i=e.updateQueue;vt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==l&&(a===null?g.firstBaseUpdate=c:a.next=c,g.lastBaseUpdate=u))}if(o!==null){var m=i.baseState;l=0,g=c=u=null,a=o;do{var h=a.lane,y=a.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,w=a;switch(h=t,y=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){m=v.call(y,m,h);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,h=typeof v=="function"?v.call(y,m,h):v,h==null)break e;m=K({},m,h);break e;case 2:vt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else y={eventTime:y,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(c=g=y,u=m):g=g.next=y,l|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(g===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);tn|=l,e.lanes=l,e.memoizedState=m}}function tu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Ur={},et=Rt(Ur),zr=Rt(Ur),Pr=Rt(Ur);function Gt(e){if(e===Ur)throw Error(S(174));return e}function Us(e,t){switch(B(Pr,t),B(zr,e),B(et,Ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:jl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=jl(t,e)}H(et),B(et,t)}function In(){H(et),H(zr),H(Pr)}function rd(e){Gt(Pr.current);var t=Gt(et.current),n=jl(t,e.type);t!==n&&(B(zr,e),B(et,n))}function bs(e){zr.current===e&&(H(et),H(zr))}var Q=Rt(0);function Gi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xo=[];function Hs(){for(var e=0;e<Xo.length;e++)Xo[e]._workInProgressVersionPrimary=null;Xo.length=0}var wi=ft.ReactCurrentDispatcher,Zo=ft.ReactCurrentBatchConfig,en=0,Y=null,ee=null,ne=null,Yi=!1,hr=!1,Tr=0,E0=0;function ue(){throw Error(S(321))}function Vs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ye(e[n],t[n]))return!1;return!0}function Qs(e,t,n,r,i,o){if(en=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wi.current=e===null||e.memoizedState===null?N0:z0,e=n(r,i),hr){o=0;do{if(hr=!1,Tr=0,25<=o)throw Error(S(301));o+=1,ne=ee=null,t.updateQueue=null,wi.current=P0,e=n(r,i)}while(hr)}if(wi.current=Ki,t=ee!==null&&ee.next!==null,en=0,ne=ee=Y=null,Yi=!1,t)throw Error(S(300));return e}function Gs(){var e=Tr!==0;return Tr=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?Y.memoizedState=ne=e:ne=ne.next=e,ne}function Ae(){if(ee===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=ne===null?Y.memoizedState:ne.next;if(t!==null)ne=t,ee=e;else{if(e===null)throw Error(S(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},ne===null?Y.memoizedState=ne=e:ne=ne.next=e}return ne}function Or(e,t){return typeof t=="function"?t(e):t}function Jo(e){var t=Ae(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ee,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,u=null,c=o;do{var g=c.lane;if((en&g)===g)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=m,l=r):u=u.next=m,Y.lanes|=g,tn|=g}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=a,Ye(r,t.memoizedState)||(ye=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Y.lanes|=o,tn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function qo(e){var t=Ae(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ye(o,t.memoizedState)||(ye=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function id(){}function od(e,t){var n=Y,r=Ae(),i=t(),o=!Ye(r.memoizedState,i);if(o&&(r.memoizedState=i,ye=!0),r=r.queue,Ys(ad.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ne!==null&&ne.memoizedState.tag&1){if(n.flags|=2048,Ir(9,sd.bind(null,n,r,i,t),void 0,null),oe===null)throw Error(S(349));en&30||ld(n,t,i)}return i}function ld(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sd(e,t,n,r){t.value=n,t.getSnapshot=r,ud(t)&&cd(e)}function ad(e,t,n){return n(function(){ud(t)&&cd(e)})}function ud(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ye(e,n)}catch{return!0}}function cd(e){var t=ct(e,1);t!==null&&Qe(t,e,1,-1)}function nu(e){var t=Xe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Or,lastRenderedState:e},t.queue=e,e=e.dispatch=L0.bind(null,Y,e),[t.memoizedState,e]}function Ir(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function dd(){return Ae().memoizedState}function ki(e,t,n,r){var i=Xe();Y.flags|=e,i.memoizedState=Ir(1|t,n,void 0,r===void 0?null:r)}function mo(e,t,n,r){var i=Ae();r=r===void 0?null:r;var o=void 0;if(ee!==null){var l=ee.memoizedState;if(o=l.destroy,r!==null&&Vs(r,l.deps)){i.memoizedState=Ir(t,n,o,r);return}}Y.flags|=e,i.memoizedState=Ir(1|t,n,o,r)}function ru(e,t){return ki(8390656,8,e,t)}function Ys(e,t){return mo(2048,8,e,t)}function fd(e,t){return mo(4,2,e,t)}function pd(e,t){return mo(4,4,e,t)}function hd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function md(e,t,n){return n=n!=null?n.concat([e]):null,mo(4,4,hd.bind(null,t,e),n)}function Ks(){}function gd(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xd(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function yd(e,t,n){return en&21?(Ye(n,t)||(n=jc(),Y.lanes|=n,tn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=n)}function $0(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=Zo.transition;Zo.transition={};try{e(!1),t()}finally{D=n,Zo.transition=r}}function vd(){return Ae().memoizedState}function _0(e,t,n){var r=zt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wd(e))kd(t,n);else if(n=td(e,t,n,r),n!==null){var i=he();Qe(n,e,r,i),Sd(n,t,r)}}function L0(e,t,n){var r=zt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wd(e))kd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Ye(a,l)){var u=t.interleaved;u===null?(i.next=i,Ws(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=td(e,t,i,r),n!==null&&(i=he(),Qe(n,e,r,i),Sd(n,t,r))}}function wd(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function kd(e,t){hr=Yi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Sd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$s(e,n)}}var Ki={readContext:De,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},N0={readContext:De,useCallback:function(e,t){return Xe().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:ru,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ki(4194308,4,hd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ki(4194308,4,e,t)},useInsertionEffect:function(e,t){return ki(4,2,e,t)},useMemo:function(e,t){var n=Xe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=_0.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Xe();return e={current:e},t.memoizedState=e},useState:nu,useDebugValue:Ks,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=nu(!1),t=e[0];return e=$0.bind(null,e[1]),Xe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=Xe();if(V){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),oe===null)throw Error(S(349));en&30||ld(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ru(ad.bind(null,r,o,e),[e]),r.flags|=2048,Ir(9,sd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Xe(),t=oe.identifierPrefix;if(V){var n=lt,r=ot;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=E0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},z0={readContext:De,useCallback:gd,useContext:De,useEffect:Ys,useImperativeHandle:md,useInsertionEffect:fd,useLayoutEffect:pd,useMemo:xd,useReducer:Jo,useRef:dd,useState:function(){return Jo(Or)},useDebugValue:Ks,useDeferredValue:function(e){var t=Ae();return yd(t,ee.memoizedState,e)},useTransition:function(){var e=Jo(Or)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:id,useSyncExternalStore:od,useId:vd,unstable_isNewReconciler:!1},P0={readContext:De,useCallback:gd,useContext:De,useEffect:Ys,useImperativeHandle:md,useInsertionEffect:fd,useLayoutEffect:pd,useMemo:xd,useReducer:qo,useRef:dd,useState:function(){return qo(Or)},useDebugValue:Ks,useDeferredValue:function(e){var t=Ae();return ee===null?t.memoizedState=e:yd(t,ee.memoizedState,e)},useTransition:function(){var e=qo(Or)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:id,useSyncExternalStore:od,useId:vd,unstable_isNewReconciler:!1};function Ue(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Hl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var go={isMounted:function(e){return(e=e._reactInternals)?sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=he(),i=zt(e),o=st(r,i);o.payload=t,n!=null&&(o.callback=n),t=Lt(e,o,i),t!==null&&(Qe(t,e,i,r),vi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=he(),i=zt(e),o=st(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Lt(e,o,i),t!==null&&(Qe(t,e,i,r),vi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=he(),r=zt(e),i=st(n,r);i.tag=2,t!=null&&(i.callback=t),t=Lt(e,i,r),t!==null&&(Qe(t,e,r,n),vi(t,e,r))}};function iu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!$r(n,r)||!$r(i,o):!0}function jd(e,t,n){var r=!1,i=It,o=t.contextType;return typeof o=="object"&&o!==null?o=De(o):(i=we(t)?Jt:fe.current,r=t.contextTypes,o=(r=r!=null)?Pn(e,i):It),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=go,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ou(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&go.enqueueReplaceState(t,t.state,null)}function Vl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Bs(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=De(o):(o=we(t)?Jt:fe.current,i.context=Pn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Hl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&go.enqueueReplaceState(i,i.state,null),Qi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Mn(e,t){try{var n="",r=t;do n+=op(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function el(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ql(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var T0=typeof WeakMap=="function"?WeakMap:Map;function Cd(e,t,n){n=st(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zi||(Zi=!0,ns=r),Ql(e,t)},n}function Ed(e,t,n){n=st(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ql(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ql(e,t),typeof r!="function"&&(Nt===null?Nt=new Set([this]):Nt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function lu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new T0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Q0.bind(null,e,t,n),t.then(e,e))}function su(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function au(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=st(-1,1),t.tag=2,Lt(n,t,1))),n.lanes|=1),e)}var O0=ft.ReactCurrentOwner,ye=!1;function pe(e,t,n,r){t.child=e===null?ed(t,null,n,r):On(t,e.child,n,r)}function uu(e,t,n,r,i){n=n.render;var o=t.ref;return Ln(t,i),r=Qs(e,t,n,r,o,i),n=Gs(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):(V&&n&&Is(t),t.flags|=1,pe(e,t,r,i),t.child)}function cu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ra(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,$d(e,t,o,r,i)):(e=Ei(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:$r,n(l,r)&&e.ref===t.ref)return dt(e,t,i)}return t.flags|=1,e=Pt(o,r),e.ref=t.ref,e.return=t,t.child=e}function $d(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if($r(o,r)&&e.ref===t.ref)if(ye=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,dt(e,t,i)}return Gl(e,t,n,r,i)}function _d(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Sn,Ee),Ee|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(Sn,Ee),Ee|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,B(Sn,Ee),Ee|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,B(Sn,Ee),Ee|=r;return pe(e,t,i,n),t.child}function Ld(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Gl(e,t,n,r,i){var o=we(n)?Jt:fe.current;return o=Pn(t,o),Ln(t,i),n=Qs(e,t,n,r,o,i),r=Gs(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):(V&&r&&Is(t),t.flags|=1,pe(e,t,n,i),t.child)}function du(e,t,n,r,i){if(we(n)){var o=!0;Bi(t)}else o=!1;if(Ln(t,i),t.stateNode===null)Si(e,t),jd(t,n,r),Vl(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=De(c):(c=we(n)?Jt:fe.current,c=Pn(t,c));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==c)&&ou(t,l,r,c),vt=!1;var h=t.memoizedState;l.state=h,Qi(t,r,l,i),u=t.memoizedState,a!==r||h!==u||ve.current||vt?(typeof g=="function"&&(Hl(t,n,g,r),u=t.memoizedState),(a=vt||iu(t,n,a,r,h,u,c))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,nd(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Ue(t.type,a),l.props=c,m=t.pendingProps,h=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=De(u):(u=we(n)?Jt:fe.current,u=Pn(t,u));var y=n.getDerivedStateFromProps;(g=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||h!==u)&&ou(t,l,r,u),vt=!1,h=t.memoizedState,l.state=h,Qi(t,r,l,i);var v=t.memoizedState;a!==m||h!==v||ve.current||vt?(typeof y=="function"&&(Hl(t,n,y,r),v=t.memoizedState),(c=vt||iu(t,n,c,r,h,v,u)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Yl(e,t,n,r,o,i)}function Yl(e,t,n,r,i,o){Ld(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Xa(t,n,!1),dt(e,t,o);r=t.stateNode,O0.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=On(t,e.child,null,o),t.child=On(t,null,a,o)):pe(e,t,a,o),t.memoizedState=r.state,i&&Xa(t,n,!0),t.child}function Nd(e){var t=e.stateNode;t.pendingContext?Ka(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ka(e,t.context,!1),Us(e,t.containerInfo)}function fu(e,t,n,r,i){return Tn(),Rs(i),t.flags|=256,pe(e,t,n,r),t.child}var Kl={dehydrated:null,treeContext:null,retryLane:0};function Xl(e){return{baseLanes:e,cachePool:null,transitions:null}}function zd(e,t,n){var r=t.pendingProps,i=Q.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(Q,i&1),e===null)return Ul(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=vo(l,r,0,null),e=Xt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Xl(n),t.memoizedState=Kl,e):Xs(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return I0(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Pt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Pt(a,o):(o=Xt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Xl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Kl,r}return o=e.child,e=o.sibling,r=Pt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xs(e,t){return t=vo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ii(e,t,n,r){return r!==null&&Rs(r),On(t,e.child,null,n),e=Xs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function I0(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=el(Error(S(422))),ii(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=vo({mode:"visible",children:r.children},i,0,null),o=Xt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&On(t,e.child,null,l),t.child.memoizedState=Xl(l),t.memoizedState=Kl,o);if(!(t.mode&1))return ii(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(S(419)),r=el(o,r,void 0),ii(e,t,l,r)}if(a=(l&e.childLanes)!==0,ye||a){if(r=oe,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ct(e,i),Qe(r,e,i,-1))}return na(),r=el(Error(S(421))),ii(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=G0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,$e=_t(i.nextSibling),_e=t,V=!0,He=null,e!==null&&(Te[Oe++]=ot,Te[Oe++]=lt,Te[Oe++]=qt,ot=e.id,lt=e.overflow,qt=t),t=Xs(t,r.children),t.flags|=4096,t)}function pu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),bl(e.return,t,n)}function tl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Pd(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(pe(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pu(e,n,t);else if(e.tag===19)pu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(Q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Gi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),tl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Gi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}tl(t,!0,n,null,o);break;case"together":tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Si(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function M0(e,t,n){switch(t.tag){case 3:Nd(t),Tn();break;case 5:rd(t);break;case 1:we(t.type)&&Bi(t);break;case 4:Us(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(Hi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?zd(e,t,n):(B(Q,Q.current&1),e=dt(e,t,n),e!==null?e.sibling:null);B(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Pd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,_d(e,t,n)}return dt(e,t,n)}var Td,Zl,Od,Id;Td=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zl=function(){};Od=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Gt(et.current);var o=null;switch(n){case"input":i=vl(e,i),r=vl(e,r),o=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),o=[];break;case"textarea":i=Sl(e,i),r=Sl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Fi)}Cl(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(vr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(vr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&U("scroll",e),o||a===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Id=function(e,t,n,r){n!==r&&(t.flags|=4)};function er(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function R0(e,t,n){var r=t.pendingProps;switch(Ms(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return we(t.type)&&Wi(),ce(t),null;case 3:return r=t.stateNode,In(),H(ve),H(fe),Hs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ni(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,He!==null&&(os(He),He=null))),Zl(e,t),ce(t),null;case 5:bs(t);var i=Gt(Pr.current);if(n=t.type,e!==null&&t.stateNode!=null)Od(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ce(t),null}if(e=Gt(et.current),ni(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Je]=t,r[Nr]=o,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(i=0;i<sr.length;i++)U(sr[i],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":Sa(r,o),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},U("invalid",r);break;case"textarea":Ca(r,o),U("invalid",r)}Cl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ti(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ti(r.textContent,a,e),i=["children",""+a]):vr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&U("scroll",r)}switch(n){case"input":Gr(r),ja(r,o,!0);break;case"textarea":Gr(r),Ea(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Fi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ac(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Je]=t,e[Nr]=r,Td(e,t,!1,!1),t.stateNode=e;e:{switch(l=El(n,r),n){case"dialog":U("cancel",e),U("close",e),i=r;break;case"iframe":case"object":case"embed":U("load",e),i=r;break;case"video":case"audio":for(i=0;i<sr.length;i++)U(sr[i],e);i=r;break;case"source":U("error",e),i=r;break;case"img":case"image":case"link":U("error",e),U("load",e),i=r;break;case"details":U("toggle",e),i=r;break;case"input":Sa(e,r),i=vl(e,r),U("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),U("invalid",e);break;case"textarea":Ca(e,r),i=Sl(e,r),U("invalid",e);break;default:i=r}Cl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?dc(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&uc(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&wr(e,u):typeof u=="number"&&wr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(vr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&U("scroll",e):u!=null&&ws(e,o,u,l))}switch(n){case"input":Gr(e),ja(e,r,!1);break;case"textarea":Gr(e),Ea(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ot(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Cn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Cn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Fi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)Id(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Gt(Pr.current),Gt(et.current),ni(t)){if(r=t.stateNode,n=t.memoizedProps,r[Je]=t,(o=r.nodeValue!==n)&&(e=_e,e!==null))switch(e.tag){case 3:ti(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ti(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Je]=t,t.stateNode=r}return ce(t),null;case 13:if(H(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&$e!==null&&t.mode&1&&!(t.flags&128))Jc(),Tn(),t.flags|=98560,o=!1;else if(o=ni(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[Je]=t}else Tn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),o=!1}else He!==null&&(os(He),He=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?te===0&&(te=3):na())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return In(),Zl(e,t),e===null&&_r(t.stateNode.containerInfo),ce(t),null;case 10:return Fs(t.type._context),ce(t),null;case 17:return we(t.type)&&Wi(),ce(t),null;case 19:if(H(Q),o=t.memoizedState,o===null)return ce(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)er(o,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Gi(e),l!==null){for(t.flags|=128,er(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&Z()>Rn&&(t.flags|=128,r=!0,er(o,!1),t.lanes=4194304)}else{if(!r)if(e=Gi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),er(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!V)return ce(t),null}else 2*Z()-o.renderingStartTime>Rn&&n!==1073741824&&(t.flags|=128,r=!0,er(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Z(),t.sibling=null,n=Q.current,B(Q,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return ta(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ee&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function D0(e,t){switch(Ms(t),t.tag){case 1:return we(t.type)&&Wi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return In(),H(ve),H(fe),Hs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return bs(t),null;case 13:if(H(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Q),null;case 4:return In(),null;case 10:return Fs(t.type._context),null;case 22:case 23:return ta(),null;case 24:return null;default:return null}}var oi=!1,de=!1,A0=typeof WeakSet=="function"?WeakSet:Set,_=null;function kn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function Jl(e,t,n){try{n()}catch(r){X(e,t,r)}}var hu=!1;function F0(e,t){if(Ml=Ri,e=Fc(),Os(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,c=0,g=0,m=e,h=null;t:for(;;){for(var y;m!==n||i!==0&&m.nodeType!==3||(a=l+i),m!==o||r!==0&&m.nodeType!==3||(u=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(y=m.firstChild)!==null;)h=m,m=y;for(;;){if(m===e)break t;if(h===n&&++c===i&&(a=l),h===o&&++g===r&&(u=l),(y=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rl={focusedElem:e,selectionRange:n},Ri=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,z=v.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ue(t.type,w),z);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(x){X(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return v=hu,hu=!1,v}function mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Jl(t,n,o)}i=i.next}while(i!==r)}}function xo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ql(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Md(e){var t=e.alternate;t!==null&&(e.alternate=null,Md(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Je],delete t[Nr],delete t[Fl],delete t[k0],delete t[S0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Rd(e){return e.tag===5||e.tag===3||e.tag===4}function mu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function es(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fi));else if(r!==4&&(e=e.child,e!==null))for(es(e,t,n),e=e.sibling;e!==null;)es(e,t,n),e=e.sibling}function ts(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ts(e,t,n),e=e.sibling;e!==null;)ts(e,t,n),e=e.sibling}var le=null,be=!1;function gt(e,t,n){for(n=n.child;n!==null;)Dd(e,t,n),n=n.sibling}function Dd(e,t,n){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(ao,n)}catch{}switch(n.tag){case 5:de||kn(n,t);case 6:var r=le,i=be;le=null,gt(e,t,n),le=r,be=i,le!==null&&(be?(e=le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(be?(e=le,n=n.stateNode,e.nodeType===8?Yo(e.parentNode,n):e.nodeType===1&&Yo(e,n),Cr(e)):Yo(le,n.stateNode));break;case 4:r=le,i=be,le=n.stateNode.containerInfo,be=!0,gt(e,t,n),le=r,be=i;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Jl(n,t,l),i=i.next}while(i!==r)}gt(e,t,n);break;case 1:if(!de&&(kn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){X(n,t,a)}gt(e,t,n);break;case 21:gt(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,gt(e,t,n),de=r):gt(e,t,n);break;default:gt(e,t,n)}}function gu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new A0),t.forEach(function(r){var i=Y0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:le=a.stateNode,be=!1;break e;case 3:le=a.stateNode.containerInfo,be=!0;break e;case 4:le=a.stateNode.containerInfo,be=!0;break e}a=a.return}if(le===null)throw Error(S(160));Dd(o,l,i),le=null,be=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){X(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ad(t,e),t=t.sibling}function Ad(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(t,e),Ke(e),r&4){try{mr(3,e,e.return),xo(3,e)}catch(w){X(e,e.return,w)}try{mr(5,e,e.return)}catch(w){X(e,e.return,w)}}break;case 1:Be(t,e),Ke(e),r&512&&n!==null&&kn(n,n.return);break;case 5:if(Be(t,e),Ke(e),r&512&&n!==null&&kn(n,n.return),e.flags&32){var i=e.stateNode;try{wr(i,"")}catch(w){X(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&lc(i,o),El(a,l);var c=El(a,o);for(l=0;l<u.length;l+=2){var g=u[l],m=u[l+1];g==="style"?dc(i,m):g==="dangerouslySetInnerHTML"?uc(i,m):g==="children"?wr(i,m):ws(i,g,m,c)}switch(a){case"input":wl(i,o);break;case"textarea":sc(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Cn(i,!!o.multiple,y,!1):h!==!!o.multiple&&(o.defaultValue!=null?Cn(i,!!o.multiple,o.defaultValue,!0):Cn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Nr]=o}catch(w){X(e,e.return,w)}}break;case 6:if(Be(t,e),Ke(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){X(e,e.return,w)}}break;case 3:if(Be(t,e),Ke(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Cr(t.containerInfo)}catch(w){X(e,e.return,w)}break;case 4:Be(t,e),Ke(e);break;case 13:Be(t,e),Ke(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(qs=Z())),r&4&&gu(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(de=(c=de)||g,Be(t,e),de=c):Be(t,e),Ke(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(_=e,g=e.child;g!==null;){for(m=_=g;_!==null;){switch(h=_,y=h.child,h.tag){case 0:case 11:case 14:case 15:mr(4,h,h.return);break;case 1:kn(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){X(r,n,w)}}break;case 5:kn(h,h.return);break;case 22:if(h.memoizedState!==null){yu(m);continue}}y!==null?(y.return=h,_=y):yu(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{i=m.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,u=m.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=cc("display",l))}catch(w){X(e,e.return,w)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(w){X(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Be(t,e),Ke(e),r&4&&gu(e);break;case 21:break;default:Be(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Rd(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(wr(i,""),r.flags&=-33);var o=mu(e);ts(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=mu(e);es(e,a,l);break;default:throw Error(S(161))}}catch(u){X(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function W0(e,t,n){_=e,Fd(e)}function Fd(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var i=_,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||oi;if(!l){var a=i.alternate,u=a!==null&&a.memoizedState!==null||de;a=oi;var c=de;if(oi=l,(de=u)&&!c)for(_=i;_!==null;)l=_,u=l.child,l.tag===22&&l.memoizedState!==null?vu(i):u!==null?(u.return=l,_=u):vu(i);for(;o!==null;)_=o,Fd(o),o=o.sibling;_=i,oi=a,de=c}xu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,_=o):xu(e)}}function xu(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||xo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ue(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&tu(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}tu(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&Cr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}de||t.flags&512&&ql(t)}catch(h){X(t,t.return,h)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function yu(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function vu(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xo(4,t)}catch(u){X(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){X(t,i,u)}}var o=t.return;try{ql(t)}catch(u){X(t,o,u)}break;case 5:var l=t.return;try{ql(t)}catch(u){X(t,l,u)}}}catch(u){X(t,t.return,u)}if(t===e){_=null;break}var a=t.sibling;if(a!==null){a.return=t.return,_=a;break}_=t.return}}var B0=Math.ceil,Xi=ft.ReactCurrentDispatcher,Zs=ft.ReactCurrentOwner,Re=ft.ReactCurrentBatchConfig,M=0,oe=null,q=null,se=0,Ee=0,Sn=Rt(0),te=0,Mr=null,tn=0,yo=0,Js=0,gr=null,xe=null,qs=0,Rn=1/0,nt=null,Zi=!1,ns=null,Nt=null,li=!1,jt=null,Ji=0,xr=0,rs=null,ji=-1,Ci=0;function he(){return M&6?Z():ji!==-1?ji:ji=Z()}function zt(e){return e.mode&1?M&2&&se!==0?se&-se:C0.transition!==null?(Ci===0&&(Ci=jc()),Ci):(e=D,e!==0||(e=window.event,e=e===void 0?16:zc(e.type)),e):1}function Qe(e,t,n,r){if(50<xr)throw xr=0,rs=null,Error(S(185));Fr(e,n,r),(!(M&2)||e!==oe)&&(e===oe&&(!(M&2)&&(yo|=n),te===4&&kt(e,se)),ke(e,r),n===1&&M===0&&!(t.mode&1)&&(Rn=Z()+500,ho&&Dt()))}function ke(e,t){var n=e.callbackNode;Cp(e,t);var r=Mi(e,e===oe?se:0);if(r===0)n!==null&&La(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&La(n),t===1)e.tag===0?j0(wu.bind(null,e)):Kc(wu.bind(null,e)),v0(function(){!(M&6)&&Dt()}),n=null;else{switch(Cc(r)){case 1:n=Es;break;case 4:n=kc;break;case 16:n=Ii;break;case 536870912:n=Sc;break;default:n=Ii}n=Gd(n,Wd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Wd(e,t){if(ji=-1,Ci=0,M&6)throw Error(S(327));var n=e.callbackNode;if(Nn()&&e.callbackNode!==n)return null;var r=Mi(e,e===oe?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=qi(e,r);else{t=r;var i=M;M|=2;var o=Ud();(oe!==e||se!==t)&&(nt=null,Rn=Z()+500,Kt(e,t));do try{H0();break}catch(a){Bd(e,a)}while(!0);As(),Xi.current=o,M=i,q!==null?t=0:(oe=null,se=0,t=te)}if(t!==0){if(t===2&&(i=zl(e),i!==0&&(r=i,t=is(e,i))),t===1)throw n=Mr,Kt(e,0),kt(e,r),ke(e,Z()),n;if(t===6)kt(e,r);else{if(i=e.current.alternate,!(r&30)&&!U0(i)&&(t=qi(e,r),t===2&&(o=zl(e),o!==0&&(r=o,t=is(e,o))),t===1))throw n=Mr,Kt(e,0),kt(e,r),ke(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Ht(e,xe,nt);break;case 3:if(kt(e,r),(r&130023424)===r&&(t=qs+500-Z(),10<t)){if(Mi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Al(Ht.bind(null,e,xe,nt),t);break}Ht(e,xe,nt);break;case 4:if(kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ve(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*B0(r/1960))-r,10<r){e.timeoutHandle=Al(Ht.bind(null,e,xe,nt),r);break}Ht(e,xe,nt);break;case 5:Ht(e,xe,nt);break;default:throw Error(S(329))}}}return ke(e,Z()),e.callbackNode===n?Wd.bind(null,e):null}function is(e,t){var n=gr;return e.current.memoizedState.isDehydrated&&(Kt(e,t).flags|=256),e=qi(e,t),e!==2&&(t=xe,xe=n,t!==null&&os(t)),e}function os(e){xe===null?xe=e:xe.push.apply(xe,e)}function U0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ye(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kt(e,t){for(t&=~Js,t&=~yo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ve(t),r=1<<n;e[n]=-1,t&=~r}}function wu(e){if(M&6)throw Error(S(327));Nn();var t=Mi(e,0);if(!(t&1))return ke(e,Z()),null;var n=qi(e,t);if(e.tag!==0&&n===2){var r=zl(e);r!==0&&(t=r,n=is(e,r))}if(n===1)throw n=Mr,Kt(e,0),kt(e,t),ke(e,Z()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ht(e,xe,nt),ke(e,Z()),null}function ea(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Rn=Z()+500,ho&&Dt())}}function nn(e){jt!==null&&jt.tag===0&&!(M&6)&&Nn();var t=M;M|=1;var n=Re.transition,r=D;try{if(Re.transition=null,D=1,e)return e()}finally{D=r,Re.transition=n,M=t,!(M&6)&&Dt()}}function ta(){Ee=Sn.current,H(Sn)}function Kt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,y0(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(Ms(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wi();break;case 3:In(),H(ve),H(fe),Hs();break;case 5:bs(r);break;case 4:In();break;case 13:H(Q);break;case 19:H(Q);break;case 10:Fs(r.type._context);break;case 22:case 23:ta()}n=n.return}if(oe=e,q=e=Pt(e.current,null),se=Ee=t,te=0,Mr=null,Js=yo=tn=0,xe=gr=null,Qt!==null){for(t=0;t<Qt.length;t++)if(n=Qt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Qt=null}return e}function Bd(e,t){do{var n=q;try{if(As(),wi.current=Ki,Yi){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Yi=!1}if(en=0,ne=ee=Y=null,hr=!1,Tr=0,Zs.current=null,n===null||n.return===null){te=1,Mr=t,q=null;break}e:{var o=e,l=n.return,a=n,u=t;if(t=se,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,g=a,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var y=su(l);if(y!==null){y.flags&=-257,au(y,l,a,o,t),y.mode&1&&lu(o,c,t),t=y,u=c;var v=t.updateQueue;if(v===null){var w=new Set;w.add(u),t.updateQueue=w}else v.add(u);break e}else{if(!(t&1)){lu(o,c,t),na();break e}u=Error(S(426))}}else if(V&&a.mode&1){var z=su(l);if(z!==null){!(z.flags&65536)&&(z.flags|=256),au(z,l,a,o,t),Rs(Mn(u,a));break e}}o=u=Mn(u,a),te!==4&&(te=2),gr===null?gr=[o]:gr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Cd(o,u,t);eu(o,f);break e;case 1:a=u;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Nt===null||!Nt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Ed(o,a,t);eu(o,x);break e}}o=o.return}while(o!==null)}Hd(n)}catch(C){t=C,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function Ud(){var e=Xi.current;return Xi.current=Ki,e===null?Ki:e}function na(){(te===0||te===3||te===2)&&(te=4),oe===null||!(tn&268435455)&&!(yo&268435455)||kt(oe,se)}function qi(e,t){var n=M;M|=2;var r=Ud();(oe!==e||se!==t)&&(nt=null,Kt(e,t));do try{b0();break}catch(i){Bd(e,i)}while(!0);if(As(),M=n,Xi.current=r,q!==null)throw Error(S(261));return oe=null,se=0,te}function b0(){for(;q!==null;)bd(q)}function H0(){for(;q!==null&&!mp();)bd(q)}function bd(e){var t=Qd(e.alternate,e,Ee);e.memoizedProps=e.pendingProps,t===null?Hd(e):q=t,Zs.current=null}function Hd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=D0(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,q=null;return}}else if(n=R0(n,t,Ee),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);te===0&&(te=5)}function Ht(e,t,n){var r=D,i=Re.transition;try{Re.transition=null,D=1,V0(e,t,n,r)}finally{Re.transition=i,D=r}return null}function V0(e,t,n,r){do Nn();while(jt!==null);if(M&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ep(e,o),e===oe&&(q=oe=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||li||(li=!0,Gd(Ii,function(){return Nn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Re.transition,Re.transition=null;var l=D;D=1;var a=M;M|=4,Zs.current=null,F0(e,n),Ad(n,e),d0(Rl),Ri=!!Ml,Rl=Ml=null,e.current=n,W0(n),gp(),M=a,D=l,Re.transition=o}else e.current=n;if(li&&(li=!1,jt=e,Ji=i),o=e.pendingLanes,o===0&&(Nt=null),vp(n.stateNode),ke(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Zi)throw Zi=!1,e=ns,ns=null,e;return Ji&1&&e.tag!==0&&Nn(),o=e.pendingLanes,o&1?e===rs?xr++:(xr=0,rs=e):xr=0,Dt(),null}function Nn(){if(jt!==null){var e=Cc(Ji),t=Re.transition,n=D;try{if(Re.transition=null,D=16>e?16:e,jt===null)var r=!1;else{if(e=jt,jt=null,Ji=0,M&6)throw Error(S(331));var i=M;for(M|=4,_=e.current;_!==null;){var o=_,l=o.child;if(_.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(_=c;_!==null;){var g=_;switch(g.tag){case 0:case 11:case 15:mr(8,g,o)}var m=g.child;if(m!==null)m.return=g,_=m;else for(;_!==null;){g=_;var h=g.sibling,y=g.return;if(Md(g),g===c){_=null;break}if(h!==null){h.return=y,_=h;break}_=y}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var z=w.sibling;w.sibling=null,w=z}while(w!==null)}}_=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,_=l;else e:for(;_!==null;){if(o=_,o.flags&2048)switch(o.tag){case 0:case 11:case 15:mr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,_=f;break e}_=o.return}}var d=e.current;for(_=d;_!==null;){l=_;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,_=p;else e:for(l=d;_!==null;){if(a=_,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xo(9,a)}}catch(C){X(a,a.return,C)}if(a===l){_=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,_=x;break e}_=a.return}}if(M=i,Dt(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(ao,e)}catch{}r=!0}return r}finally{D=n,Re.transition=t}}return!1}function ku(e,t,n){t=Mn(n,t),t=Cd(e,t,1),e=Lt(e,t,1),t=he(),e!==null&&(Fr(e,1,t),ke(e,t))}function X(e,t,n){if(e.tag===3)ku(e,e,n);else for(;t!==null;){if(t.tag===3){ku(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nt===null||!Nt.has(r))){e=Mn(n,e),e=Ed(t,e,1),t=Lt(t,e,1),e=he(),t!==null&&(Fr(t,1,e),ke(t,e));break}}t=t.return}}function Q0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(se&n)===n&&(te===4||te===3&&(se&130023424)===se&&500>Z()-qs?Kt(e,0):Js|=n),ke(e,t)}function Vd(e,t){t===0&&(e.mode&1?(t=Xr,Xr<<=1,!(Xr&130023424)&&(Xr=4194304)):t=1);var n=he();e=ct(e,t),e!==null&&(Fr(e,t,n),ke(e,n))}function G0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vd(e,n)}function Y0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Vd(e,n)}var Qd;Qd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ye=!1,M0(e,t,n);ye=!!(e.flags&131072)}else ye=!1,V&&t.flags&1048576&&Xc(t,bi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Si(e,t),e=t.pendingProps;var i=Pn(t,fe.current);Ln(t,n),i=Qs(null,t,r,e,i,n);var o=Gs();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,we(r)?(o=!0,Bi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bs(t),i.updater=go,t.stateNode=i,i._reactInternals=t,Vl(t,r,e,n),t=Yl(null,t,r,!0,o,n)):(t.tag=0,V&&o&&Is(t),pe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Si(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=X0(r),e=Ue(r,e),i){case 0:t=Gl(null,t,r,e,n);break e;case 1:t=du(null,t,r,e,n);break e;case 11:t=uu(null,t,r,e,n);break e;case 14:t=cu(null,t,r,Ue(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),Gl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),du(e,t,r,i,n);case 3:e:{if(Nd(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,i=o.element,nd(e,t),Qi(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Mn(Error(S(423)),t),t=fu(e,t,r,n,i);break e}else if(r!==i){i=Mn(Error(S(424)),t),t=fu(e,t,r,n,i);break e}else for($e=_t(t.stateNode.containerInfo.firstChild),_e=t,V=!0,He=null,n=ed(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tn(),r===i){t=dt(e,t,n);break e}pe(e,t,r,n)}t=t.child}return t;case 5:return rd(t),e===null&&Ul(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Dl(r,i)?l=null:o!==null&&Dl(r,o)&&(t.flags|=32),Ld(e,t),pe(e,t,l,n),t.child;case 6:return e===null&&Ul(t),null;case 13:return zd(e,t,n);case 4:return Us(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=On(t,null,r,n):pe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),uu(e,t,r,i,n);case 7:return pe(e,t,t.pendingProps,n),t.child;case 8:return pe(e,t,t.pendingProps.children,n),t.child;case 12:return pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,B(Hi,r._currentValue),r._currentValue=l,o!==null)if(Ye(o.value,l)){if(o.children===i.children&&!ve.current){t=dt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=st(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?u.next=u:(u.next=g.next,g.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),bl(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(S(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),bl(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}pe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ln(t,n),i=De(i),r=r(i),t.flags|=1,pe(e,t,r,n),t.child;case 14:return r=t.type,i=Ue(r,t.pendingProps),i=Ue(r.type,i),cu(e,t,r,i,n);case 15:return $d(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),Si(e,t),t.tag=1,we(r)?(e=!0,Bi(t)):e=!1,Ln(t,n),jd(t,r,i),Vl(t,r,i,n),Yl(null,t,r,!0,e,n);case 19:return Pd(e,t,n);case 22:return _d(e,t,n)}throw Error(S(156,t.tag))};function Gd(e,t){return wc(e,t)}function K0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,t,n,r){return new K0(e,t,n,r)}function ra(e){return e=e.prototype,!(!e||!e.isReactComponent)}function X0(e){if(typeof e=="function")return ra(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ss)return 11;if(e===js)return 14}return 2}function Pt(e,t){var n=e.alternate;return n===null?(n=Me(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ei(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")ra(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case fn:return Xt(n.children,i,o,t);case ks:l=8,i|=8;break;case ml:return e=Me(12,n,t,i|2),e.elementType=ml,e.lanes=o,e;case gl:return e=Me(13,n,t,i),e.elementType=gl,e.lanes=o,e;case xl:return e=Me(19,n,t,i),e.elementType=xl,e.lanes=o,e;case rc:return vo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case tc:l=10;break e;case nc:l=9;break e;case Ss:l=11;break e;case js:l=14;break e;case yt:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Me(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Xt(e,t,n,r){return e=Me(7,e,r,t),e.lanes=n,e}function vo(e,t,n,r){return e=Me(22,e,r,t),e.elementType=rc,e.lanes=n,e.stateNode={isHidden:!1},e}function nl(e,t,n){return e=Me(6,e,null,t),e.lanes=n,e}function rl(e,t,n){return t=Me(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Z0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Do(0),this.expirationTimes=Do(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Do(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ia(e,t,n,r,i,o,l,a,u){return e=new Z0(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Me(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bs(o),e}function J0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Yd(e){if(!e)return It;e=e._reactInternals;e:{if(sn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(we(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(we(n))return Yc(e,n,t)}return t}function Kd(e,t,n,r,i,o,l,a,u){return e=ia(n,r,!0,e,i,o,l,a,u),e.context=Yd(null),n=e.current,r=he(),i=zt(n),o=st(r,i),o.callback=t??null,Lt(n,o,i),e.current.lanes=i,Fr(e,i,r),ke(e,r),e}function wo(e,t,n,r){var i=t.current,o=he(),l=zt(i);return n=Yd(n),t.context===null?t.context=n:t.pendingContext=n,t=st(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Lt(i,t,l),e!==null&&(Qe(e,i,l,o),vi(e,i,l)),l}function eo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Su(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function oa(e,t){Su(e,t),(e=e.alternate)&&Su(e,t)}function q0(){return null}var Xd=typeof reportError=="function"?reportError:function(e){console.error(e)};function la(e){this._internalRoot=e}ko.prototype.render=la.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));wo(e,t,null,null)};ko.prototype.unmount=la.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nn(function(){wo(null,e,null,null)}),t[ut]=null}};function ko(e){this._internalRoot=e}ko.prototype.unstable_scheduleHydration=function(e){if(e){var t=_c();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wt.length&&t!==0&&t<wt[n].priority;n++);wt.splice(n,0,e),n===0&&Nc(e)}};function sa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function So(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ju(){}function eh(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=eo(l);o.call(c)}}var l=Kd(t,r,e,0,null,!1,!1,"",ju);return e._reactRootContainer=l,e[ut]=l.current,_r(e.nodeType===8?e.parentNode:e),nn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=eo(u);a.call(c)}}var u=ia(e,0,!1,null,null,!1,!1,"",ju);return e._reactRootContainer=u,e[ut]=u.current,_r(e.nodeType===8?e.parentNode:e),nn(function(){wo(t,u,n,r)}),u}function jo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var u=eo(l);a.call(u)}}wo(t,l,e,i)}else l=eh(n,t,e,i,r);return eo(l)}Ec=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=lr(t.pendingLanes);n!==0&&($s(t,n|1),ke(t,Z()),!(M&6)&&(Rn=Z()+500,Dt()))}break;case 13:nn(function(){var r=ct(e,1);if(r!==null){var i=he();Qe(r,e,1,i)}}),oa(e,1)}};_s=function(e){if(e.tag===13){var t=ct(e,134217728);if(t!==null){var n=he();Qe(t,e,134217728,n)}oa(e,134217728)}};$c=function(e){if(e.tag===13){var t=zt(e),n=ct(e,t);if(n!==null){var r=he();Qe(n,e,t,r)}oa(e,t)}};_c=function(){return D};Lc=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};_l=function(e,t,n){switch(t){case"input":if(wl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=po(r);if(!i)throw Error(S(90));oc(r),wl(r,i)}}}break;case"textarea":sc(e,n);break;case"select":t=n.value,t!=null&&Cn(e,!!n.multiple,t,!1)}};hc=ea;mc=nn;var th={usingClientEntryPoint:!1,Events:[Br,gn,po,fc,pc,ea]},tr={findFiberByHostInstance:Vt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nh={bundleType:tr.bundleType,version:tr.version,rendererPackageName:tr.rendererPackageName,rendererConfig:tr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yc(e),e===null?null:e.stateNode},findFiberByHostInstance:tr.findFiberByHostInstance||q0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var si=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!si.isDisabled&&si.supportsFiber)try{ao=si.inject(nh),qe=si}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=th;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sa(t))throw Error(S(200));return J0(e,t,null,n)};Ne.createRoot=function(e,t){if(!sa(e))throw Error(S(299));var n=!1,r="",i=Xd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ia(e,1,!1,null,null,n,!1,r,i),e[ut]=t.current,_r(e.nodeType===8?e.parentNode:e),new la(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=yc(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return nn(e)};Ne.hydrate=function(e,t,n){if(!So(t))throw Error(S(200));return jo(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!sa(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Xd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Kd(t,null,e,1,n??null,i,!1,o,l),e[ut]=t.current,_r(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ko(t)};Ne.render=function(e,t,n){if(!So(t))throw Error(S(200));return jo(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!So(e))throw Error(S(40));return e._reactRootContainer?(nn(function(){jo(null,null,e,!1,function(){e._reactRootContainer=null,e[ut]=null})}),!0):!1};Ne.unstable_batchedUpdates=ea;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!So(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return jo(e,t,n,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function Zd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zd)}catch(e){console.error(e)}}Zd(),Zu.exports=Ne;var rh=Zu.exports,Cu=rh;pl.createRoot=Cu.createRoot,pl.hydrateRoot=Cu.hydrateRoot;var ie=function(){return ie=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ie.apply(this,arguments)};function Dn(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var b="-ms-",yr="-moz-",R="-webkit-",Jd="comm",Co="rule",aa="decl",ih="@import",qd="@keyframes",oh="@layer",ef=Math.abs,ua=String.fromCharCode,ls=Object.assign;function lh(e,t){return re(e,0)^45?(((t<<2^re(e,0))<<2^re(e,1))<<2^re(e,2))<<2^re(e,3):0}function tf(e){return e.trim()}function rt(e,t){return(e=t.exec(e))?e[0]:e}function T(e,t,n){return e.replace(t,n)}function $i(e,t,n){return e.indexOf(t,n)}function re(e,t){return e.charCodeAt(t)|0}function An(e,t,n){return e.slice(t,n)}function Ze(e){return e.length}function nf(e){return e.length}function ar(e,t){return t.push(e),e}function sh(e,t){return e.map(t).join("")}function Eu(e,t){return e.filter(function(n){return!rt(n,t)})}var Eo=1,Fn=1,rf=0,Fe=0,J=0,Vn="";function $o(e,t,n,r,i,o,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Eo,column:Fn,length:l,return:"",siblings:a}}function xt(e,t){return ls($o("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function cn(e){for(;e.root;)e=xt(e.root,{children:[e]});ar(e,e.siblings)}function ah(){return J}function uh(){return J=Fe>0?re(Vn,--Fe):0,Fn--,J===10&&(Fn=1,Eo--),J}function Ge(){return J=Fe<rf?re(Vn,Fe++):0,Fn++,J===10&&(Fn=1,Eo++),J}function Zt(){return re(Vn,Fe)}function _i(){return Fe}function _o(e,t){return An(Vn,e,t)}function ss(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ch(e){return Eo=Fn=1,rf=Ze(Vn=e),Fe=0,[]}function dh(e){return Vn="",e}function il(e){return tf(_o(Fe-1,as(e===91?e+2:e===40?e+1:e)))}function fh(e){for(;(J=Zt())&&J<33;)Ge();return ss(e)>2||ss(J)>3?"":" "}function ph(e,t){for(;--t&&Ge()&&!(J<48||J>102||J>57&&J<65||J>70&&J<97););return _o(e,_i()+(t<6&&Zt()==32&&Ge()==32))}function as(e){for(;Ge();)switch(J){case e:return Fe;case 34:case 39:e!==34&&e!==39&&as(J);break;case 40:e===41&&as(e);break;case 92:Ge();break}return Fe}function hh(e,t){for(;Ge()&&e+J!==57;)if(e+J===84&&Zt()===47)break;return"/*"+_o(t,Fe-1)+"*"+ua(e===47?e:Ge())}function mh(e){for(;!ss(Zt());)Ge();return _o(e,Fe)}function gh(e){return dh(Li("",null,null,null,[""],e=ch(e),0,[0],e))}function Li(e,t,n,r,i,o,l,a,u){for(var c=0,g=0,m=l,h=0,y=0,v=0,w=1,z=1,f=1,d=0,p="",x=i,C=o,j=r,k=p;z;)switch(v=d,d=Ge()){case 40:if(v!=108&&re(k,m-1)==58){$i(k+=T(il(d),"&","&\f"),"&\f",ef(c?a[c-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:k+=il(d);break;case 9:case 10:case 13:case 32:k+=fh(v);break;case 92:k+=ph(_i()-1,7);continue;case 47:switch(Zt()){case 42:case 47:ar(xh(hh(Ge(),_i()),t,n,u),u);break;default:k+="/"}break;case 123*w:a[c++]=Ze(k)*f;case 125*w:case 59:case 0:switch(d){case 0:case 125:z=0;case 59+g:f==-1&&(k=T(k,/\f/g,"")),y>0&&Ze(k)-m&&ar(y>32?_u(k+";",r,n,m-1,u):_u(T(k," ","")+";",r,n,m-2,u),u);break;case 59:k+=";";default:if(ar(j=$u(k,t,n,c,g,i,a,p,x=[],C=[],m,o),o),d===123)if(g===0)Li(k,t,j,j,x,o,m,a,C);else switch(h===99&&re(k,3)===110?100:h){case 100:case 108:case 109:case 115:Li(e,j,j,r&&ar($u(e,j,j,0,0,i,a,p,i,x=[],m,C),C),i,C,m,a,r?x:C);break;default:Li(k,j,j,j,[""],C,0,a,C)}}c=g=y=0,w=f=1,p=k="",m=l;break;case 58:m=1+Ze(k),y=v;default:if(w<1){if(d==123)--w;else if(d==125&&w++==0&&uh()==125)continue}switch(k+=ua(d),d*w){case 38:f=g>0?1:(k+="\f",-1);break;case 44:a[c++]=(Ze(k)-1)*f,f=1;break;case 64:Zt()===45&&(k+=il(Ge())),h=Zt(),g=m=Ze(p=k+=mh(_i())),d++;break;case 45:v===45&&Ze(k)==2&&(w=0)}}return o}function $u(e,t,n,r,i,o,l,a,u,c,g,m){for(var h=i-1,y=i===0?o:[""],v=nf(y),w=0,z=0,f=0;w<r;++w)for(var d=0,p=An(e,h+1,h=ef(z=l[w])),x=e;d<v;++d)(x=tf(z>0?y[d]+" "+p:T(p,/&\f/g,y[d])))&&(u[f++]=x);return $o(e,t,n,i===0?Co:a,u,c,g,m)}function xh(e,t,n,r){return $o(e,t,n,Jd,ua(ah()),An(e,2,-2),0,r)}function _u(e,t,n,r,i){return $o(e,t,n,aa,An(e,0,r),An(e,r+1,-1),r,i)}function of(e,t,n){switch(lh(e,t)){case 5103:return R+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return R+e+e;case 4789:return yr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return R+e+yr+e+b+e+e;case 5936:switch(re(e,t+11)){case 114:return R+e+b+T(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return R+e+b+T(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return R+e+b+T(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return R+e+b+e+e;case 6165:return R+e+b+"flex-"+e+e;case 5187:return R+e+T(e,/(\w+).+(:[^]+)/,R+"box-$1$2"+b+"flex-$1$2")+e;case 5443:return R+e+b+"flex-item-"+T(e,/flex-|-self/g,"")+(rt(e,/flex-|baseline/)?"":b+"grid-row-"+T(e,/flex-|-self/g,""))+e;case 4675:return R+e+b+"flex-line-pack"+T(e,/align-content|flex-|-self/g,"")+e;case 5548:return R+e+b+T(e,"shrink","negative")+e;case 5292:return R+e+b+T(e,"basis","preferred-size")+e;case 6060:return R+"box-"+T(e,"-grow","")+R+e+b+T(e,"grow","positive")+e;case 4554:return R+T(e,/([^-])(transform)/g,"$1"+R+"$2")+e;case 6187:return T(T(T(e,/(zoom-|grab)/,R+"$1"),/(image-set)/,R+"$1"),e,"")+e;case 5495:case 3959:return T(e,/(image-set\([^]*)/,R+"$1$`$1");case 4968:return T(T(e,/(.+:)(flex-)?(.*)/,R+"box-pack:$3"+b+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+R+e+e;case 4200:if(!rt(e,/flex-|baseline/))return b+"grid-column-align"+An(e,t)+e;break;case 2592:case 3360:return b+T(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,rt(r.props,/grid-\w+-end/)})?~$i(e+(n=n[t].value),"span",0)?e:b+T(e,"-start","")+e+b+"grid-row-span:"+(~$i(n,"span",0)?rt(n,/\d+/):+rt(n,/\d+/)-+rt(e,/\d+/))+";":b+T(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return rt(r.props,/grid-\w+-start/)})?e:b+T(T(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return T(e,/(.+)-inline(.+)/,R+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ze(e)-1-t>6)switch(re(e,t+1)){case 109:if(re(e,t+4)!==45)break;case 102:return T(e,/(.+:)(.+)-([^]+)/,"$1"+R+"$2-$3$1"+yr+(re(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~$i(e,"stretch",0)?of(T(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return T(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,a,u,c){return b+i+":"+o+c+(l?b+i+"-span:"+(a?u:+u-+o)+c:"")+e});case 4949:if(re(e,t+6)===121)return T(e,":",":"+R)+e;break;case 6444:switch(re(e,re(e,14)===45?18:11)){case 120:return T(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+R+(re(e,14)===45?"inline-":"")+"box$3$1"+R+"$2$3$1"+b+"$2box$3")+e;case 100:return T(e,":",":"+b)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return T(e,"scroll-","scroll-snap-")+e}return e}function to(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function yh(e,t,n,r){switch(e.type){case oh:if(e.children.length)break;case ih:case aa:return e.return=e.return||e.value;case Jd:return"";case qd:return e.return=e.value+"{"+to(e.children,r)+"}";case Co:if(!Ze(e.value=e.props.join(",")))return""}return Ze(n=to(e.children,r))?e.return=e.value+"{"+n+"}":""}function vh(e){var t=nf(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function wh(e){return function(t){t.root||(t=t.return)&&e(t)}}function kh(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case aa:e.return=of(e.value,e.length,n);return;case qd:return to([xt(e,{value:T(e.value,"@","@"+R)})],r);case Co:if(e.length)return sh(n=e.props,function(i){switch(rt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":cn(xt(e,{props:[T(i,/:(read-\w+)/,":"+yr+"$1")]})),cn(xt(e,{props:[i]})),ls(e,{props:Eu(n,r)});break;case"::placeholder":cn(xt(e,{props:[T(i,/:(plac\w+)/,":"+R+"input-$1")]})),cn(xt(e,{props:[T(i,/:(plac\w+)/,":"+yr+"$1")]})),cn(xt(e,{props:[T(i,/:(plac\w+)/,b+"input-$1")]})),cn(xt(e,{props:[i]})),ls(e,{props:Eu(n,r)});break}return""})}}var Sh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ce={},Wn=typeof process<"u"&&Ce!==void 0&&(Ce.REACT_APP_SC_ATTR||Ce.SC_ATTR)||"data-styled",lf="active",sf="data-styled-version",Lo="6.1.15",ca=`/*!sc*/
`,no=typeof window<"u"&&"HTMLElement"in window,jh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ce!==void 0&&Ce.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ce.REACT_APP_SC_DISABLE_SPEEDY!==""?Ce.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ce.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ce!==void 0&&Ce.SC_DISABLE_SPEEDY!==void 0&&Ce.SC_DISABLE_SPEEDY!==""&&Ce.SC_DISABLE_SPEEDY!=="false"&&Ce.SC_DISABLE_SPEEDY),Ch={},No=Object.freeze([]),Bn=Object.freeze({});function af(e,t,n){return n===void 0&&(n=Bn),e.theme!==n.theme&&e.theme||t||n.theme}var uf=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Eh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$h=/(^-|-$)/g;function Lu(e){return e.replace(Eh,"-").replace($h,"")}var _h=/(a)(d)/gi,ai=52,Nu=function(e){return String.fromCharCode(e+(e>25?39:97))};function us(e){var t,n="";for(t=Math.abs(e);t>ai;t=t/ai|0)n=Nu(t%ai)+n;return(Nu(t%ai)+n).replace(_h,"$1-$2")}var ol,cf=5381,jn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},df=function(e){return jn(cf,e)};function da(e){return us(df(e)>>>0)}function Lh(e){return e.displayName||e.name||"Component"}function ll(e){return typeof e=="string"&&!0}var ff=typeof Symbol=="function"&&Symbol.for,pf=ff?Symbol.for("react.memo"):60115,Nh=ff?Symbol.for("react.forward_ref"):60112,zh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ph={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},hf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Th=((ol={})[Nh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ol[pf]=hf,ol);function zu(e){return("type"in(t=e)&&t.type.$$typeof)===pf?hf:"$$typeof"in e?Th[e.$$typeof]:zh;var t}var Oh=Object.defineProperty,Ih=Object.getOwnPropertyNames,Pu=Object.getOwnPropertySymbols,Mh=Object.getOwnPropertyDescriptor,Rh=Object.getPrototypeOf,Tu=Object.prototype;function mf(e,t,n){if(typeof t!="string"){if(Tu){var r=Rh(t);r&&r!==Tu&&mf(e,r,n)}var i=Ih(t);Pu&&(i=i.concat(Pu(t)));for(var o=zu(e),l=zu(t),a=0;a<i.length;++a){var u=i[a];if(!(u in Ph||n&&n[u]||l&&u in l||o&&u in o)){var c=Mh(t,u);try{Oh(e,u,c)}catch{}}}}return e}function rn(e){return typeof e=="function"}function fa(e){return typeof e=="object"&&"styledComponentId"in e}function Yt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ro(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Rr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function cs(e,t,n){if(n===void 0&&(n=!1),!n&&!Rr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=cs(e[r],t[r]);else if(Rr(t))for(var r in t)e[r]=cs(e[r],t[r]);return e}function pa(e,t){Object.defineProperty(e,"toString",{value:t})}function on(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Dh=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw on(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),u=(l=0,n.length);l<u;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(ca);return n},e}(),Ni=new Map,io=new Map,zi=1,ui=function(e){if(Ni.has(e))return Ni.get(e);for(;io.has(zi);)zi++;var t=zi++;return Ni.set(e,t),io.set(t,e),t},Ah=function(e,t){zi=t+1,Ni.set(e,t),io.set(t,e)},Fh="style[".concat(Wn,"][").concat(sf,'="').concat(Lo,'"]'),Wh=new RegExp("^".concat(Wn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Bh=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},Uh=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(ca),i=[],o=0,l=r.length;o<l;o++){var a=r[o].trim();if(a){var u=a.match(Wh);if(u){var c=0|parseInt(u[1],10),g=u[2];c!==0&&(Ah(g,c),Bh(e,g,u[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},Ou=function(e){for(var t=document.querySelectorAll(Fh),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Wn)!==lf&&(Uh(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function bh(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var gf=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(Wn,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Wn,lf),r.setAttribute(sf,Lo);var l=bh();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},Hh=function(){function e(t){this.element=gf(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw on(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Vh=function(){function e(t){this.element=gf(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Qh=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Iu=no,Gh={isServer:!no,useCSSOMInjection:!jh},oo=function(){function e(t,n,r){t===void 0&&(t=Bn),n===void 0&&(n={});var i=this;this.options=ie(ie({},Gh),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&no&&Iu&&(Iu=!1,Ou(this)),pa(this,function(){return function(o){for(var l=o.getTag(),a=l.length,u="",c=function(m){var h=function(f){return io.get(f)}(m);if(h===void 0)return"continue";var y=o.names.get(h),v=l.getGroup(m);if(y===void 0||!y.size||v.length===0)return"continue";var w="".concat(Wn,".g").concat(m,'[id="').concat(h,'"]'),z="";y!==void 0&&y.forEach(function(f){f.length>0&&(z+="".concat(f,","))}),u+="".concat(v).concat(w,'{content:"').concat(z,'"}').concat(ca)},g=0;g<a;g++)c(g);return u}(i)})}return e.registerId=function(t){return ui(t)},e.prototype.rehydrate=function(){!this.server&&no&&Ou(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ie(ie({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Qh(i):r?new Hh(i):new Vh(i)}(this.options),new Dh(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ui(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ui(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ui(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Yh=/&/g,Kh=/^\s*\/\/.*$/gm;function xf(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=xf(n.children,t)),n})}function Xh(e){var t,n,r,i=Bn,o=i.options,l=o===void 0?Bn:o,a=i.plugins,u=a===void 0?No:a,c=function(h,y,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):h},g=u.slice();g.push(function(h){h.type===Co&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(Yh,n).replace(r,c))}),l.prefix&&g.push(kh),g.push(yh);var m=function(h,y,v,w){y===void 0&&(y=""),v===void 0&&(v=""),w===void 0&&(w="&"),t=w,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var z=h.replace(Kh,""),f=gh(v||y?"".concat(v," ").concat(y," { ").concat(z," }"):z);l.namespace&&(f=xf(f,l.namespace));var d=[];return to(f,vh(g.concat(wh(function(p){return d.push(p)})))),d};return m.hash=u.length?u.reduce(function(h,y){return y.name||on(15),jn(h,y.name)},cf).toString():"",m}var Zh=new oo,ds=Xh(),yf=Ie.createContext({shouldForwardProp:void 0,styleSheet:Zh,stylis:ds});yf.Consumer;Ie.createContext(void 0);function fs(){return G.useContext(yf)}var vf=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ds);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,pa(this,function(){throw on(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ds),this.name+t.hash},e}(),Jh=function(e){return e>="A"&&e<="Z"};function Mu(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Jh(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var wf=function(e){return e==null||e===!1||e===""},kf=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!wf(o)&&(Array.isArray(o)&&o.isCss||rn(o)?r.push("".concat(Mu(i),":"),o,";"):Rr(o)?r.push.apply(r,Dn(Dn(["".concat(i," {")],kf(o),!1),["}"],!1)):r.push("".concat(Mu(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Sh||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Tt(e,t,n,r){if(wf(e))return[];if(fa(e))return[".".concat(e.styledComponentId)];if(rn(e)){if(!rn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Tt(i,t,n,r)}var o;return e instanceof vf?n?(e.inject(n,r),[e.getName(r)]):[e]:Rr(e)?kf(e):Array.isArray(e)?Array.prototype.concat.apply(No,e.map(function(l){return Tt(l,t,n,r)})):[e.toString()]}function Sf(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(rn(n)&&!fa(n))return!1}return!0}var qh=df(Lo),em=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Sf(t),this.componentId=n,this.baseHash=jn(qh,n),this.baseStyle=r,oo.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Yt(i,this.staticRulesId);else{var o=ro(Tt(this.rules,t,n,r)),l=us(jn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=Yt(i,l),this.staticRulesId=l}else{for(var u=jn(this.baseHash,r.hash),c="",g=0;g<this.rules.length;g++){var m=this.rules[g];if(typeof m=="string")c+=m;else if(m){var h=ro(Tt(m,t,n,r));u=jn(u,h+g),c+=h}}if(c){var y=us(u>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(c,".".concat(y),void 0,this.componentId)),i=Yt(i,y)}}return i},e}(),Dr=Ie.createContext(void 0);Dr.Consumer;function tm(e){var t=Ie.useContext(Dr),n=G.useMemo(function(){return function(r,i){if(!r)throw on(14);if(rn(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw on(8);return i?ie(ie({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Ie.createElement(Dr.Provider,{value:n},e.children):null}var sl={};function nm(e,t,n){var r=fa(e),i=e,o=!ll(e),l=t.attrs,a=l===void 0?No:l,u=t.componentId,c=u===void 0?function(x,C){var j=typeof x!="string"?"sc":Lu(x);sl[j]=(sl[j]||0)+1;var k="".concat(j,"-").concat(da(Lo+j+sl[j]));return C?"".concat(C,"-").concat(k):k}(t.displayName,t.parentComponentId):u,g=t.displayName,m=g===void 0?function(x){return ll(x)?"styled.".concat(x):"Styled(".concat(Lh(x),")")}(e):g,h=t.displayName&&t.componentId?"".concat(Lu(t.displayName),"-").concat(t.componentId):t.componentId||c,y=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var z=t.shouldForwardProp;v=function(x,C){return w(x,C)&&z(x,C)}}else v=w}var f=new em(n,h,r?i.componentStyle:void 0);function d(x,C){return function(j,k,L){var W=j.attrs,O=j.componentStyle,Se=j.defaultProps,At=j.foldedComponentIds,Ft=j.styledComponentId,br=j.target,zo=Ie.useContext(Dr),Qn=fs(),Wt=j.shouldForwardProp||Qn.shouldForwardProp,$=af(k,zo,Se)||Bn,N=function(ht,je,tt){for(var Gn,Ut=ie(ie({},je),{className:void 0,theme:tt}),Po=0;Po<ht.length;Po+=1){var Hr=rn(Gn=ht[Po])?Gn(Ut):Gn;for(var mt in Hr)Ut[mt]=mt==="className"?Yt(Ut[mt],Hr[mt]):mt==="style"?ie(ie({},Ut[mt]),Hr[mt]):Hr[mt]}return je.className&&(Ut.className=Yt(Ut.className,je.className)),Ut}(W,k,$),P=N.as||br,A={};for(var F in N)N[F]===void 0||F[0]==="$"||F==="as"||F==="theme"&&N.theme===$||(F==="forwardedAs"?A.as=N.forwardedAs:Wt&&!Wt(F,P)||(A[F]=N[F]));var Bt=function(ht,je){var tt=fs(),Gn=ht.generateAndInjectStyles(je,tt.styleSheet,tt.stylis);return Gn}(O,N),We=Yt(At,Ft);return Bt&&(We+=" "+Bt),N.className&&(We+=" "+N.className),A[ll(P)&&!uf.has(P)?"class":"className"]=We,L&&(A.ref=L),G.createElement(P,A)}(p,x,C)}d.displayName=m;var p=Ie.forwardRef(d);return p.attrs=y,p.componentStyle=f,p.displayName=m,p.shouldForwardProp=v,p.foldedComponentIds=r?Yt(i.foldedComponentIds,i.styledComponentId):"",p.styledComponentId=h,p.target=r?i.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(C){for(var j=[],k=1;k<arguments.length;k++)j[k-1]=arguments[k];for(var L=0,W=j;L<W.length;L++)cs(C,W[L],!0);return C}({},i.defaultProps,x):x}}),pa(p,function(){return".".concat(p.styledComponentId)}),o&&mf(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function Ru(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Du=function(e){return Object.assign(e,{isCss:!0})};function pt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(rn(e)||Rr(e))return Du(Tt(Ru(No,Dn([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Tt(r):Du(Tt(Ru(r,t)))}function ps(e,t,n){if(n===void 0&&(n=Bn),!t)throw on(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,pt.apply(void 0,Dn([i],o,!1)))};return r.attrs=function(i){return ps(e,t,ie(ie({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return ps(e,t,ie(ie({},n),i))},r}var jf=function(e){return ps(nm,e)},E=jf;uf.forEach(function(e){E[e]=jf(e)});var rm=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Sf(t),oo.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(ro(Tt(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&oo.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function im(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=pt.apply(void 0,Dn([e],t,!1)),i="sc-global-".concat(da(JSON.stringify(r))),o=new rm(r,i),l=function(u){var c=fs(),g=Ie.useContext(Dr),m=Ie.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&a(m,u,c.styleSheet,g,c.stylis),Ie.useLayoutEffect(function(){if(!c.styleSheet.server)return a(m,u,c.styleSheet,g,c.stylis),function(){return o.removeStyles(m,c.styleSheet)}},[m,u,c.styleSheet,g,c.stylis]),null};function a(u,c,g,m,h){if(o.isStatic)o.renderStyles(u,Ch,g,h);else{var y=ie(ie({},c),{theme:af(c,m,l.defaultProps)});o.renderStyles(u,y,g,h)}}return Ie.memo(l)}function Pe(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ro(pt.apply(void 0,Dn([e],t,!1))),i=da(r);return new vf(i,r)}const om={colors:{primary:"#ffd700",primaryLight:"rgba(255, 215, 0, 0.15)",primaryDark:"#e6c200",primaryGlow:"rgba(255, 215, 0, 0.3)",primaryTransparent:"rgba(255, 215, 0, 0.07)",textDark:"#000000",textLight:"#ffffff",textLightFaded:"rgba(255, 255, 255, 0.85)",backgroundLight:"#f8f8f8",backgroundDark:"#111111",backgroundBlack:"#000000",grayLight:"#eeeeee",grayMedium:"#888888"},breakpoints:{mobile:"768px",tablet:"1024px",laptop:"1366px",desktop:"1920px"},shadows:{small:"0 4px 8px rgba(0, 0, 0, 0.1)",medium:"0 8px 25px rgba(255, 215, 0, 0.3)",large:"0 12px 30px rgba(255, 215, 0, 0.4)"},spacing:{xs:"5px",sm:"10px",md:"20px",lg:"40px",xl:"80px"},borderRadius:{small:"5px",medium:"7px",large:"15px",circle:"50%"},animation:{fast:"0.3s ease",medium:"0.5s ease",slow:"1s ease"}},lm=im`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Arial, sans-serif;
  }
  
  body {
    background-color: ${({theme:e})=>e.colors.backgroundLight};
    color: ${({theme:e})=>e.colors.textDark};
    line-height: 1.6;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`,Cf=({width:e=50,height:t=50})=>s.jsxs("svg",{width:e,height:t,viewBox:"0 0 200 200",children:[s.jsx("path",{d:"M40 110 Q60 40 100 40 Q140 40 160 110 Q140 160 100 160 Q60 160 40 110 Z",fill:"#ffd700",opacity:"0.8"}),s.jsx("circle",{cx:"80",cy:"80",r:"3",fill:"#000000"}),s.jsx("circle",{cx:"120",cy:"80",r:"3",fill:"#000000"}),s.jsx("path",{d:"M85 85 L115 85 Q105 65 100 60 Q95 65 85 85 Z",fill:"#000000"}),s.jsx("path",{d:"M95 85 L105 85 L100 105 L95 85 Z",fill:"#000000"}),s.jsx("path",{d:"M100 105 L100 115",stroke:"#000000",strokeWidth:"2"}),s.jsx("line",{x1:"80",y1:"140",x2:"90",y2:"140",stroke:"#ffd700",strokeWidth:"1",opacity:"0.5"}),s.jsx("line",{x1:"110",y1:"140",x2:"120",y2:"140",stroke:"#ffd700",strokeWidth:"1",opacity:"0.5"}),s.jsx("path",{d:"M90 140 L95 145 L90 140 Z",fill:"none",stroke:"#ffd700",strokeWidth:"1",opacity:"0.5"}),s.jsx("path",{d:"M110 140 L105 145 L110 140 Z",fill:"none",stroke:"#ffd700",strokeWidth:"1",opacity:"0.5"})]}),an=E.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`,sm=Pe`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`,am=Pe`
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
`,um=E.header`
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(255, 215, 0, 0.1);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right, 
      transparent, 
      rgba(255, 215, 0, 0.5) 20%, 
      rgba(255, 215, 0, 0.5) 80%, 
      transparent
    );
  }
`,cm=E.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`,dm=E.div`
  display: flex;
  align-items: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: ${({theme:e})=>e.colors.primary};
    border-radius: 50%;
    bottom: -4px;
    left: 20px;
    box-shadow: 0 0 10px ${({theme:e})=>e.colors.primary},
                0 0 20px ${({theme:e})=>e.colors.primary};
    opacity: 0.7;
    animation: ${am} 4s infinite ease-in-out;
  }
  
  svg {
    filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.3));
  }
`,fm=E.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-left: 10px;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary} 0%, #FFF3B0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0.5px;
`,pm=E.ul`
  display: flex;
  list-style: none;
  margin: 0;
  transition: all 0.3s ease;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(10px);
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    transform: translateY(${({isOpen:e})=>e?"0":"-150%"});
    opacity: ${({isOpen:e})=>e?"1":"0"};
    z-index: 100;
    border-bottom: 1px solid rgba(255, 215, 0, 0.1);
  }
`,nr=E.li`
  margin-left: 35px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background: linear-gradient(90deg, ${({theme:e})=>e.colors.primary}, transparent);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    margin: 18px 0;
    
    &::after {
      bottom: -8px;
      background: linear-gradient(90deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.primaryDark});
    }
  }
`,rr=E.a`
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 0;
  font-size: 0.95rem;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  svg {
    transition: transform 0.3s ease;
    filter: drop-shadow(0 0 2px rgba(255, 215, 0, 0.3));
  }

  &:hover {
    color: ${({theme:e})=>e.colors.primary};
    
    svg {
      transform: translateY(-2px);
      filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.5));
    }
  }
`,hm=E.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 200;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    display: flex;
  }
`,al=E.span`
  width: 25px;
  height: 2px;
  background-color: ${({theme:e})=>e.colors.primary};
  margin: 3px 0;
  transition: all 0.3s ease;
  border-radius: 2px;
  box-shadow: 0 0 5px rgba(255, 215, 0, 0.5);

  &:nth-child(1) {
    transform: ${({isOpen:e})=>e?"rotate(45deg) translate(5px, 5px)":"rotate(0)"};
  }

  &:nth-child(2) {
    opacity: ${({isOpen:e})=>e?"0":"1"};
    transform: ${({isOpen:e})=>e?"translateX(-10px)":"translateX(0)"};
  }

  &:nth-child(3) {
    transform: ${({isOpen:e})=>e?"rotate(-45deg) translate(5px, -5px)":"rotate(0)"};
  }
`,mm=E.a`
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.primaryDark} 0%, ${({theme:e})=>e.colors.primary} 100%);
  color: #000;
  font-weight: 600;
  padding: 8px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 100%
    );
    animation: ${sm} 3s infinite;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(255, 215, 0, 0.4);
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    display: none;
  }
`,gm=()=>s.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),s.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),xm=()=>s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})}),ym=()=>s.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"}),s.jsx("rect",{x:"9",y:"9",width:"6",height:"6"}),s.jsx("line",{x1:"9",y1:"2",x2:"9",y2:"4"}),s.jsx("line",{x1:"15",y1:"2",x2:"15",y2:"4"}),s.jsx("line",{x1:"9",y1:"20",x2:"9",y2:"22"}),s.jsx("line",{x1:"15",y1:"20",x2:"15",y2:"22"}),s.jsx("line",{x1:"20",y1:"9",x2:"22",y2:"9"}),s.jsx("line",{x1:"20",y1:"14",x2:"22",y2:"14"}),s.jsx("line",{x1:"2",y1:"9",x2:"4",y2:"9"}),s.jsx("line",{x1:"2",y1:"14",x2:"4",y2:"14"})]}),vm=()=>s.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"22"}),s.jsx("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})]}),wm=()=>s.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),s.jsx("polyline",{points:"22,6 12,13 2,6"})]}),km=()=>s.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),s.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),s.jsx("polyline",{points:"21 15 16 10 5 21"})]}),Sm=()=>{const[e,t]=G.useState(!1),[n,r]=G.useState(!1);G.useEffect(()=>{const o=()=>{r(window.scrollY>20)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]);const i=()=>{e&&t(!1)};return s.jsx(um,{style:{padding:n?"8px 0":"12px 0",background:n?"rgba(0, 0, 0, 0.95)":"rgba(0, 0, 0, 0.85)"},children:s.jsx(an,{children:s.jsxs(cm,{children:[s.jsxs(dm,{children:[s.jsx(Cf,{}),s.jsx(fm,{children:"AgentSwap"})]}),s.jsxs(pm,{isOpen:e,children:[s.jsx(nr,{children:s.jsxs(rr,{href:"#home",onClick:i,children:[s.jsx(gm,{}),"Home"]})}),s.jsx(nr,{children:s.jsxs(rr,{href:"#features",onClick:i,children:[s.jsx(xm,{}),"Features"]})}),s.jsx(nr,{children:s.jsxs(rr,{href:"#technology",onClick:i,children:[s.jsx(ym,{}),"Technology"]})}),s.jsx(nr,{children:s.jsxs(rr,{href:"#roadmap",onClick:i,children:[s.jsx(vm,{}),"Roadmap"]})}),s.jsx(nr,{children:s.jsxs(rr,{href:"#contact",onClick:i,children:[s.jsx(wm,{}),"Contact"]})})]}),s.jsxs(mm,{href:"#contact",onClick:i,children:[s.jsx(km,{}),"Launch App"]}),s.jsxs(hm,{onClick:()=>t(!e),children:[s.jsx(al,{isOpen:e}),s.jsx(al,{isOpen:e}),s.jsx(al,{isOpen:e})]})]})})})},jm=E.footer`
  background-color: ${({theme:e})=>e.colors.backgroundDark};
  color: ${({theme:e})=>e.colors.textLight};
  padding: 50px 0 20px;
`,Cm=E.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 40px;
`,Em=E.div`
  flex: 1;
  min-width: 250px;
  margin-bottom: 30px;

  h3 {
    margin-top: 15px;
  }

  p {
    max-width: 250px;
    color: ${({theme:e})=>e.colors.grayMedium};
    margin-top: 15px;
  }
`,ul=E.div`
  flex: 1;
  min-width: 180px;
  margin-bottom: 30px;

  h4 {
    font-size: 1.2rem;
    margin-bottom: 20px;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 30px;
      height: 2px;
      background-color: ${({theme:e})=>e.colors.primary};
      bottom: -8px;
      left: 0;
    }
  }

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 10px;
  }

  a {
    color: ${({theme:e})=>e.colors.grayMedium};
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: ${({theme:e})=>e.colors.primary};
    }
  }
`,$m=E.div`
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.1);
  color: ${({theme:e})=>e.colors.grayMedium};
  font-size: 0.9rem;
`,_m=()=>s.jsx(jm,{children:s.jsxs(an,{children:[s.jsxs(Cm,{children:[s.jsxs(Em,{children:[s.jsx(Cf,{}),s.jsx("h3",{children:"AgentSwap"}),s.jsx("p",{children:"Trade Smarter, Thrive on Solana"})]}),s.jsxs(ul,{children:[s.jsx("h4",{children:"Quick Links"}),s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx("a",{href:"#home",children:"Home"})}),s.jsx("li",{children:s.jsx("a",{href:"#features",children:"Features"})}),s.jsx("li",{children:s.jsx("a",{href:"#technology",children:"Technology"})}),s.jsx("li",{children:s.jsx("a",{href:"#roadmap",children:"Roadmap"})})]})]}),s.jsxs(ul,{children:[s.jsx("h4",{children:"Resources"}),s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx("a",{href:"#",children:"Documentation"})}),s.jsx("li",{children:s.jsx("a",{href:"https://github.com/agentswaplabs",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:"Developers"})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:"Blog"})})]})]}),s.jsxs(ul,{children:[s.jsx("h4",{children:"Connect"}),s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx("a",{href:"https://x.com/agentswap_sol",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:"Discord"})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:"Telegram"})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:"Email"})})]})]})]}),s.jsx($m,{children:s.jsxs("p",{children:["© ",new Date().getFullYear()," AgentSwap. All rights reserved."]})})]})}),Ef=E.a`
  display: inline-block;
  padding: 12px 30px;
  background-color: ${({theme:e,variant:t})=>t==="secondary"?e.colors.textDark:e.colors.primary};
  color: ${({theme:e,variant:t})=>t==="secondary"?e.colors.textLight:e.colors.textDark};
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
  box-shadow: ${({theme:e,variant:t})=>t==="secondary"?"0 4px 10px rgba(0, 0, 0, 0.3)":"0 4px 10px rgba(255, 215, 0, 0.3)"};

  &:hover {
    background-color: ${({theme:e,variant:t})=>t==="secondary"?e.colors.backgroundDark:e.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: ${({theme:e,variant:t})=>t==="secondary"?"0 6px 15px rgba(0, 0, 0, 0.4)":"0 6px 15px rgba(255, 215, 0, 0.4)"};
  }
`,Au=Pe`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
`,lo=Pe`
  0% { opacity: 0.7; }
  50% { opacity: 1; }
  100% { opacity: 0.7; }
`,$f=Pe`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,Lm=E.section`
  min-height: 100vh;
  padding: 140px 0 70px; // 默认顶部内边距
  position: relative;
  overflow: hidden;
  background: #000;
  display: flex;
  align-items: center;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    padding: 130px 0 60px; // 稍微增加平板上的顶部内边距
    min-height: auto;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    padding: 120px 0 50px; // 更多的顶部内边距，确保不被导航栏遮挡
  }
  
  @media (max-width: 480px) { // 更小的屏幕尺寸
    padding: 140px 0 40px; // 为极小屏幕提供额外的顶部空间
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(17, 17, 17, 0.85) 100%);
    z-index: 0;
  }
`,Nm=E.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(255, 215, 0, 0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 215, 0, 0.07) 1px, transparent 1px);
  background-size: 45px 45px;
  transform: perspective(1000px) rotateX(55deg);
  opacity: 0.3;
  transition: background-size 0.3s ease;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    background-size: 30px 30px;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    background-size: 20px 20px;
    opacity: 0.2;
    transform: perspective(800px) rotateX(50deg);
  }
`,_f=E.div`
  position: absolute;
  width: 550px;
  height: 550px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.18) 0%, transparent 70%);
  filter: blur(45px);
  top: 10%;
  right: -180px;
  z-index: 1;
  animation: ${lo} 9s infinite ease-in-out;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    width: 400px;
    height: 400px;
    right: -120px;
    filter: blur(35px);
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    width: 220px;
    height: 220px;
    right: -80px;
    top: 5%;
    filter: blur(20px);
    animation: ${lo} 7s infinite ease-in-out;
  }
`,zm=E(_f)`
  width: 280px;
  height: 280px;
  left: -90px;
  top: 60%;
  animation-delay: 2s;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    width: 200px;
    height: 200px;
    left: -70px;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    width: 120px;
    height: 120px;
    left: -50px;
    top: 70%;
    filter: blur(15px);
  }
`,Pm=E.div`
  position: absolute;
  width: 750px;
  height: 750px;
  border: 1px solid rgba(255, 215, 0, 0.12);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    width: 550px;
    height: 550px;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    width: 300px;
    height: 300px;
    opacity: 0.4;
    border-width: 0.5px;
  }
  
  &::before, &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  &::before {
    width: 550px;
    height: 550px;
    border: 1px solid rgba(255, 215, 0, 0.15);
    
    @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
      width: 400px;
      height: 400px;
    }
    
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
      width: 220px;
      height: 220px;
      border-width: 0.5px;
    }
  }
  
  &::after {
    width: 350px;
    height: 350px;
    border: 1px solid rgba(255, 215, 0, 0.2);
    
    @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
      width: 250px;
      height: 250px;
    }
    
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
      width: 140px;
      height: 140px;
      border-width: 0.5px;
    }
  }
`,Tm=E.div`
  position: absolute;
  width: 850px;
  height: 850px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  animation: ${$f} 100s linear infinite;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    width: 650px;
    height: 650px;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    width: 320px;
    height: 320px;
    opacity: 0.6;
    display: none; /* Hide on mobile for performance */
  }
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background: ${({theme:e})=>e.colors.primary};
    border-radius: 50%;
    opacity: 0.8;
    
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
      width: 6px;
      height: 6px;
    }
  }
  
  &::before {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  
  &::after {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`,Om=E.div`
  position: relative;
  z-index: 5;
  width: 100%;
`,Im=E.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  flex-wrap: wrap;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    flex-direction: column;
    gap: 30px; // 减小内容间的间距
    text-align: center;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    gap: 20px; // 进一步减小间距
    padding-top: 10px; // 添加顶部内边距
  }
  
  @media (max-width: 480px) {
    gap: 15px; // 更小的间距
  }
`,Mm=E.div`
  flex: 1;
  min-width: 0;
  color: #fff;
  padding-right: 25px;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    padding-right: 0;
    width: 100%;
    order: 2;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    padding: 0 10px;
  }
`,Rm=E.div`
  font-size: 1.15rem;
  font-weight: 500;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: ${({theme:e})=>e.colors.primary};
  padding: 7px 15px;
  background: rgba(255, 215, 0, 0.1);
  border-radius: 5px;
  display: inline-block;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    font-size: 1rem;
    margin-bottom: 15px;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    font-size: 0.85rem;
    padding: 6px 12px;
    letter-spacing: 1.8px;
    margin-bottom: 12px;
  }
`,Dm=E.h1`
  font-size: 4.2rem;
  line-height: 1.1;
  margin-bottom: 30px;
  font-weight: 800;
  color: #fff;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.laptop}) {
    font-size: 3.6rem;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    font-size: 3rem;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    font-size: 2.2rem;
    margin-bottom: 16px;
    line-height: 1.2;
  }
  
  span {
    color: ${({theme:e})=>e.colors.primary};
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 4px;
      width: 100%;
      height: 8px;
      background: ${({theme:e})=>e.colors.primary};
      opacity: 0.18;
      z-index: -1;
      
      @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        height: 5px;
        bottom: 2px;
      }
    }
  }
`,Am=E.p`
  font-size: 1.3rem;
  margin-bottom: 40px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.65;
  max-width: 650px;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    font-size: 1.15rem;
    margin: 0 auto 30px;
    max-width: 550px;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 25px;
    max-width: 100%;
    color: rgba(255, 255, 255, 0.85);
  }
`,Fm=E.div`
  display: flex;
  gap: 24px;
  margin-top: 10px;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    justify-content: center;
    gap: 20px;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-width: 280px;
    margin: 5px auto 0;
  }
`,Lf=pt`
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 8px;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.3);
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    width: 100%;
    min-height: 50px;
    font-size: 1rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.7s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:active {
    transform: scale(0.98);
    transition: transform 0.1s ease;
  }
`,Wm=E(Ef)`
  ${Lf}
  padding: 16px 38px;
  font-size: 1.1rem;
  background: linear-gradient(135deg, #ffd700 0%, #e6c200 100%);
  color: #000;
  box-shadow: 0 6px 20px rgba(255, 215, 0, 0.3), 
              0 2px 5px rgba(0, 0, 0, 0.15);
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(255, 215, 0, 0.4),
                0 4px 10px rgba(0, 0, 0, 0.2);
    background: linear-gradient(135deg, #ffdb29 0%, #ffd700 100%);
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    padding: 15px 34px;
    font-size: 1.05rem;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    padding: 14px 24px;
    box-shadow: 0 4px 15px rgba(255, 215, 0, 0.25);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(255, 215, 0, 0.35);
    }
  }
`,Bm=E(Ef)`
  ${Lf}
  padding: 16px 38px;
  font-size: 1.1rem;
  background: transparent;
  color: ${({theme:e})=>e.colors.primary};
  border: 2px solid ${({theme:e})=>e.colors.primary};
  backdrop-filter: blur(5px);
  
  &:hover {
    background: rgba(255, 215, 0, 0.1);
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    border-color: #ffdc28;
    color: #ffdc28;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    padding: 15px 34px;
    font-size: 1.05rem;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    padding: 14px 24px;
    border-width: 1.5px;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    }
  }
`,Um=E.div`
  flex: 1;
  min-width: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  animation: ${Au} 5.5s ease-in-out infinite;
  margin-top: 0;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    width: 100%;
    order: 1;
    margin-top: 30px; // 增加顶部边距，防止被导航栏遮挡
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    animation: ${Au} 4s ease-in-out infinite;
    margin-top: 40px; // 为移动设备增加更多空间
  }
  
  @media (max-width: 480px) {
    margin-top: 50px; // 为更小的屏幕提供额外空间
  }
`,bm=E.div`
  position: relative;
  width: 380px;
  height: 380px;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.laptop}) {
    width: 320px;
    height: 320px;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    width: 260px; // 略微减小尺寸
    height: 260px;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    width: 170px; // 更小的尺寸
    height: 170px;
  }
  
  @media (max-width: 480px) {
    width: 150px; // 为非常小的屏幕减小尺寸
    height: 150px;
  }
`,Hm=E.div`
  position: absolute;
  width: 115%;
  height: 115%;
  top: -7.5%;
  left: -7.5%;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.38) 0%, transparent 70%);
  filter: blur(35px);
  animation: ${lo} 4s infinite alternate ease-in-out;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    filter: blur(15px);
    width: 110%;
    height: 110%;
    top: -5%;
    left: -5%;
  }
`,Vm=E.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 50%;
  box-shadow: 0 0 55px 25px rgba(255, 215, 0, 0.18);
  animation: ${lo} 3s infinite alternate ease-in-out;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    box-shadow: 0 0 25px 10px rgba(255, 215, 0, 0.18);
  }
`,Nf=E.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  height: 420px;
  border: 1px solid rgba(255, 215, 0, 0.25);
  border-radius: 50%;
  z-index: 0;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.laptop}) {
    width: 350px;
    height: 350px;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    width: 300px;
    height: 300px;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    width: 200px;
    height: 200px;
    border-width: 0.5px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: calc(50% - 8px);
    width: 16px;
    height: 16px;
    background: ${({theme:e})=>e.colors.primary};
    border-radius: 50%;
    box-shadow: 0 0 15px ${({theme:e})=>e.colors.primary};
    
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
      width: 8px;
      height: 8px;
      top: -4px;
      left: calc(50% - 4px);
      box-shadow: 0 0 8px ${({theme:e})=>e.colors.primary};
    }
  }
`,Qm=E(Nf)`
  width: 500px;
  height: 500px;
  border: 1px dashed rgba(255, 215, 0, 0.18);
  animation: ${$f} 110s linear infinite reverse;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.laptop}) {
    width: 420px;
    height: 420px;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    width: 360px;
    height: 360px;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    width: 240px;
    height: 240px;
    border-width: 0.5px;
    opacity: 0.8;
  }
  
  &::before {
    left: calc(20% - 8px);
    top: calc(50% - 8px);
    
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
      left: calc(20% - 4px);
      top: calc(50% - 4px);
      width: 8px;
      height: 8px;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: calc(20% - 8px);
    right: calc(30% - 8px);
    width: 12px;
    height: 12px;
    background: ${({theme:e})=>e.colors.primary};
    border-radius: 50%;
    box-shadow: 0 0 12px ${({theme:e})=>e.colors.primary};
    
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
      width: 6px;
      height: 6px;
      bottom: calc(20% - 3px);
      right: calc(30% - 3px);
      box-shadow: 0 0 8px ${({theme:e})=>e.colors.primary};
    }
  }
`,Gm=()=>s.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 200 200",preserveAspectRatio:"xMidYMid meet",children:[s.jsxs("defs",{children:[s.jsxs("filter",{id:"glow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[s.jsx("feGaussianBlur",{stdDeviation:"2.5",result:"blur"}),s.jsx("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]}),s.jsxs("radialGradient",{id:"logoGradient",cx:"50%",cy:"50%",r:"70%",fx:"50%",fy:"50%",children:[s.jsx("stop",{offset:"0%",stopColor:"#ffd700",stopOpacity:"0.95"}),s.jsx("stop",{offset:"90%",stopColor:"#ffd700",stopOpacity:"0.85"}),s.jsx("stop",{offset:"100%",stopColor:"#ffd700",stopOpacity:"0.75"})]})]}),s.jsx("circle",{cx:"100",cy:"100",r:"70",fill:"rgba(255, 215, 0, 0.06)"}),s.jsx("circle",{cx:"100",cy:"100",r:"60",fill:"rgba(255, 215, 0, 0.09)"}),s.jsx("path",{d:"M40 110 Q60 40 100 40 Q140 40 160 110 Q140 160 100 160 Q60 160 40 110 Z",fill:"url(#logoGradient)",filter:"url(#glow)"}),s.jsx("circle",{cx:"80",cy:"80",r:"3",fill:"#000000",children:s.jsx("animate",{attributeName:"r",values:"3;3.4;3",dur:"3.5s",repeatCount:"indefinite"})}),s.jsx("circle",{cx:"120",cy:"80",r:"3",fill:"#000000",children:s.jsx("animate",{attributeName:"r",values:"3;3.4;3",dur:"3.5s",repeatCount:"indefinite"})}),s.jsx("path",{d:"M85 85 L115 85 Q105 65 100 60 Q95 65 85 85 Z",fill:"#000000"}),s.jsx("path",{d:"M95 85 L105 85 L100 105 L95 85 Z",fill:"#000000"}),s.jsx("path",{d:"M100 105 L100 115",stroke:"#000000",strokeWidth:"2"}),s.jsx("line",{x1:"80",y1:"140",x2:"90",y2:"140",stroke:"#ffd700",strokeWidth:"1.5",opacity:"0.7",children:s.jsx("animate",{attributeName:"opacity",values:"0.7;1;0.7",dur:"3s",repeatCount:"indefinite"})}),s.jsx("line",{x1:"110",y1:"140",x2:"120",y2:"140",stroke:"#ffd700",strokeWidth:"1.5",opacity:"0.7",children:s.jsx("animate",{attributeName:"opacity",values:"0.7;1;0.7",dur:"3s",repeatCount:"indefinite"})}),s.jsx("path",{d:"M90 140 L95 145 L90 140 Z",fill:"none",stroke:"#ffd700",strokeWidth:"1.5",opacity:"0.7",children:s.jsx("animate",{attributeName:"opacity",values:"0.7;1;0.7",dur:"3s",repeatCount:"indefinite"})}),s.jsx("path",{d:"M110 140 L105 145 L110 140 Z",fill:"none",stroke:"#ffd700",strokeWidth:"1.5",opacity:"0.7",children:s.jsx("animate",{attributeName:"opacity",values:"0.7;1;0.7",dur:"3s",repeatCount:"indefinite"})})]}),Ym=()=>{const e=G.useRef(null),[t,n]=G.useState(!1);return G.useEffect(()=>{const r=()=>{n(window.innerWidth<=768)};return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),G.useEffect(()=>{if(!t&&e.current){const r=i=>{const o=(window.innerWidth/2-i.pageX)/50,l=(window.innerHeight/2-i.pageY)/50;e.current&&e.current.querySelectorAll(".parallax-element").forEach(u=>{const c=Number(u.getAttribute("data-speed"))||1;u.style.transform=`translate(${o*c}px, ${l*c}px)`})};return document.addEventListener("mousemove",r),()=>document.removeEventListener("mousemove",r)}},[t]),s.jsxs(Lm,{ref:e,id:"hero-section",children:[s.jsx(Nm,{}),s.jsx(_f,{className:"parallax-element","data-speed":"1.5"}),s.jsx(zm,{className:"parallax-element","data-speed":"1.2"}),s.jsx(Pm,{}),!t&&s.jsx(Tm,{}),s.jsx(an,{children:s.jsx(Om,{children:s.jsxs(Im,{children:[s.jsxs(Mm,{children:[s.jsx(Rm,{children:"AI-Powered DeFi"}),s.jsxs(Dm,{children:["Trade ",s.jsx("span",{children:"Smarter"}),",",s.jsx("br",{}),"Thrive on Solana"]}),s.jsx(Am,{children:"AgentSwap is a decentralized AI financial assistant platform on Solana, enabling users to manage crypto assets through natural language commands and community-developed strategy agents."}),s.jsxs(Fm,{children:[s.jsx(Wm,{href:"#contact",children:"Get Started"}),s.jsx(Bm,{href:"#features",children:"Explore Features"})]})]}),s.jsx(Um,{children:s.jsxs(bm,{children:[s.jsx(Qm,{className:"parallax-element","data-speed":"0.5"}),s.jsx(Nf,{className:"parallax-element","data-speed":"0.8"}),s.jsx(Hm,{}),s.jsx(Vm,{}),s.jsx(Gm,{})]})})]})})})]})},ha=E.div`
  text-align: center;
  margin-bottom: 60px;

  h2 {
    font-size: 2.2rem;
    margin-bottom: 15px;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      width: 60px;
      height: 3px;
      background-color: ${({theme:e})=>e.colors.primary};
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  p {
    color: ${({theme:e})=>e.colors.grayMedium};
    max-width: 700px;
    margin: 0 auto;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    h2 {
      font-size: 1.8rem;
    }
  }
`,Km=({width:e=24,height:t=24})=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("circle",{cx:"12",cy:"12",r:"10"}),s.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),s.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),Xm=({width:e=24,height:t=24})=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),s.jsx("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),s.jsx("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]}),Zm=({width:e=24,height:t=24})=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("polyline",{points:"23 4 23 10 17 10"}),s.jsx("polyline",{points:"1 20 1 14 7 14"}),s.jsx("path",{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"})]}),Jm=({width:e=24,height:t=24})=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),s.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),s.jsx("line",{x1:"9",y1:"21",x2:"9",y2:"9"})]}),qm=({width:e=24,height:t=24})=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),s.jsx("polyline",{points:"7.5 4.21 12 6.81 16.5 4.21"}),s.jsx("polyline",{points:"7.5 19.79 7.5 14.6 3 12"}),s.jsx("polyline",{points:"21 12 16.5 14.6 16.5 19.79"}),s.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),s.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),e1=({width:e=24,height:t=24})=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),s.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),t1=({width:e=24,height:t=24})=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),s.jsx("path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"})]}),n1=Pe`
  0% { opacity: 0.7; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
  100% { opacity: 0.7; transform: scale(1); }
`,r1=Pe`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`,i1=Pe`
  0% { filter: drop-shadow(0 0 2px rgba(255, 215, 0, 0.7)); }
  50% { filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.9)); }
  100% { filter: drop-shadow(0 0 2px rgba(255, 215, 0, 0.7)); }
`,ma=pt`
  animation: ${n1} 6s infinite ease-in-out;
`,o1=pt`
  animation: ${r1} 8s infinite ease-in-out;
`;pt`
  animation: ${i1} 4s infinite ease-in-out;
`;const l1=E.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  position: relative;
  
  svg {
    width: 100%;
    height: auto;
    overflow: visible;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    max-width: 340px;
  }
`,s1=E.g`
  transform-origin: center;
  ${o1}
`,a1=E.g`
  transform-origin: center;
  ${ma}
`,u1=E.g`
  transform-origin: center;
  ${ma}
  animation-duration: 7s;
`,Fu=E.g`
  transform-origin: center;
  ${ma}
  animation-duration: 5s;
`,c1=()=>{const e=G.useRef(null);return G.useEffect(()=>{const t=n=>{if(!e.current)return;const r=e.current,i=r.getBoundingClientRect(),o=i.left+i.width/2,l=i.top+i.height/2,a=(n.clientX-o)/i.width*20,u=(n.clientY-l)/i.height*20,c=r.querySelector("#ai-model"),g=r.querySelector("#mcp-module"),m=r.querySelector("#solana-node"),h=r.querySelectorAll(".agent-node");c&&(c.style.transform=`translate(${a*.5}px, ${u*.5}px)`),g&&(g.style.transform=`translate(${a*.3}px, ${u*.3}px)`),m&&(m.style.transform=`translate(${a*.2}px, ${u*.2}px)`),h.forEach(y=>{y.style.transform=`translate(${a*.4}px, ${u*.4}px)`})};return window.innerWidth>768&&window.addEventListener("mousemove",t),()=>{window.removeEventListener("mousemove",t)}},[]),s.jsx(l1,{children:s.jsxs("svg",{ref:e,viewBox:"0 0 500 400",xmlns:"http://www.w3.org/2000/svg",children:[s.jsxs("defs",{children:[s.jsxs("linearGradient",{id:"bgGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#f0f0f0"}),s.jsx("stop",{offset:"100%",stopColor:"#e5e5e5"})]}),s.jsxs("linearGradient",{id:"solanaGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#000000"}),s.jsx("stop",{offset:"100%",stopColor:"#333333"})]}),s.jsxs("linearGradient",{id:"aiGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#ffd700"}),s.jsx("stop",{offset:"100%",stopColor:"#e6c200"})]}),s.jsxs("linearGradient",{id:"mcpGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#ffd700",stopOpacity:"0.9"}),s.jsx("stop",{offset:"100%",stopColor:"#ffd700",stopOpacity:"0.7"})]}),s.jsxs("linearGradient",{id:"agentGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#ffd700",stopOpacity:"0.7"}),s.jsx("stop",{offset:"100%",stopColor:"#ffd700",stopOpacity:"0.5"})]}),s.jsxs("filter",{id:"glow1",height:"300%",width:"300%",x:"-100%",y:"-100%",children:[s.jsx("feGaussianBlur",{stdDeviation:"5",result:"blur"}),s.jsx("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]}),s.jsx("filter",{id:"shadow",height:"130%",width:"130%",x:"-15%",y:"-15%",children:s.jsx("feDropShadow",{dx:"0",dy:"4",stdDeviation:"5",floodColor:"rgba(0,0,0,0.2)"})}),s.jsxs("pattern",{id:"circuitPattern",x:"0",y:"0",width:"50",height:"50",patternUnits:"userSpaceOnUse",children:[s.jsx("path",{d:"M10 10 L40 10 L40 40 L10 40 Z",fill:"none",stroke:"#cccccc",strokeWidth:"0.5"}),s.jsx("circle",{cx:"10",cy:"10",r:"1",fill:"#cccccc"}),s.jsx("circle",{cx:"40",cy:"10",r:"1",fill:"#cccccc"}),s.jsx("circle",{cx:"40",cy:"40",r:"1",fill:"#cccccc"}),s.jsx("circle",{cx:"10",cy:"40",r:"1",fill:"#cccccc"}),s.jsx("path",{d:"M25 10 L25 40",stroke:"#cccccc",strokeWidth:"0.5",strokeDasharray:"2,2"}),s.jsx("path",{d:"M10 25 L40 25",stroke:"#cccccc",strokeWidth:"0.5",strokeDasharray:"2,2"})]}),s.jsxs("radialGradient",{id:"particleGradient",cx:"50%",cy:"50%",r:"50%",children:[s.jsx("stop",{offset:"0%",stopColor:"#ffd700",stopOpacity:"1"}),s.jsx("stop",{offset:"100%",stopColor:"#ffd700",stopOpacity:"0.6"})]})]}),s.jsx("rect",{width:"500",height:"400",rx:"15",ry:"15",fill:"url(#bgGradient)",filter:"url(#shadow)"}),s.jsx("rect",{width:"500",height:"400",rx:"15",ry:"15",fill:"url(#circuitPattern)",opacity:"0.3"}),s.jsxs("g",{opacity:"0.2",children:[s.jsx("path",{d:"M50,50 L65,25 L90,25 L105,50 L90,75 L65,75 Z",fill:"none",stroke:"#888",strokeWidth:"1"}),s.jsx("path",{d:"M400,100 L415,75 L440,75 L455,100 L440,125 L415,125 Z",fill:"none",stroke:"#888",strokeWidth:"1"}),s.jsx("path",{d:"M90,300 L105,275 L130,275 L145,300 L130,325 L105,325 Z",fill:"none",stroke:"#888",strokeWidth:"1"}),s.jsx("path",{d:"M350,350 L365,325 L390,325 L405,350 L390,375 L365,375 Z",fill:"none",stroke:"#888",strokeWidth:"1"})]}),s.jsxs(s1,{id:"solana-node",children:[s.jsx("circle",{cx:"250",cy:"320",r:"40",fill:"url(#solanaGradient)",filter:"url(#glow1)"}),s.jsx("circle",{cx:"250",cy:"320",r:"38",fill:"url(#solanaGradient)",stroke:"#ffd700",strokeWidth:"1",strokeOpacity:"0.5"}),s.jsx("text",{x:"250",y:"325",fontSize:"14",fontWeight:"bold",textAnchor:"middle",fill:"#ffffff",children:"SOLANA"}),s.jsx("circle",{cx:"250",cy:"320",r:"45",fill:"none",stroke:"#ffd700",strokeWidth:"0.5",strokeOpacity:"0.5",strokeDasharray:"3,3"}),s.jsx("circle",{cx:"250",cy:"320",r:"50",fill:"none",stroke:"#ffd700",strokeWidth:"0.5",strokeOpacity:"0.3",strokeDasharray:"2,4"})]}),s.jsxs(a1,{id:"ai-model",children:[s.jsx("rect",{x:"210",y:"40",width:"80",height:"50",rx:"8",ry:"8",fill:"url(#aiGradient)",filter:"url(#shadow)"}),s.jsx("rect",{x:"210",y:"40",width:"80",height:"50",rx:"8",ry:"8",fill:"none",stroke:"#fff",strokeWidth:"1",strokeOpacity:"0.5"}),s.jsx("text",{x:"250",y:"70",fontSize:"14",fontWeight:"bold",textAnchor:"middle",fill:"#000000",children:"AI MODEL"}),s.jsx("rect",{x:"215",y:"45",width:"70",height:"5",rx:"2",ry:"2",fill:"#000",fillOpacity:"0.1"}),s.jsx("circle",{cx:"220",cy:"47.5",r:"1.5",fill:"#000",fillOpacity:"0.2"}),s.jsx("circle",{cx:"225",cy:"47.5",r:"1.5",fill:"#000",fillOpacity:"0.2"}),s.jsx("circle",{cx:"230",cy:"47.5",r:"1.5",fill:"#000",fillOpacity:"0.2"})]}),s.jsxs(u1,{id:"mcp-module",children:[s.jsx("polygon",{points:"180,130 250,110 320,130 320,170 250,190 180,170",fill:"url(#mcpGradient)",filter:"url(#shadow)"}),s.jsx("polygon",{points:"180,130 250,110 320,130 320,170 250,190 180,170",fill:"none",stroke:"#fff",strokeWidth:"1",strokeOpacity:"0.6"}),s.jsx("text",{x:"250",y:"155",fontSize:"16",fontWeight:"bold",textAnchor:"middle",fill:"#000000",children:"MCP"}),s.jsx("line",{x1:"200",y1:"140",x2:"230",y2:"140",stroke:"#000",strokeWidth:"1",strokeOpacity:"0.2"}),s.jsx("line",{x1:"270",y1:"140",x2:"300",y2:"140",stroke:"#000",strokeWidth:"1",strokeOpacity:"0.2"}),s.jsx("line",{x1:"200",y1:"160",x2:"230",y2:"160",stroke:"#000",strokeWidth:"1",strokeOpacity:"0.2"}),s.jsx("line",{x1:"270",y1:"160",x2:"300",y2:"160",stroke:"#000",strokeWidth:"1",strokeOpacity:"0.2"}),s.jsx("circle",{cx:"250",cy:"140",r:"3",fill:"#000",fillOpacity:"0.2"}),s.jsx("circle",{cx:"250",cy:"160",r:"3",fill:"#000",fillOpacity:"0.2"})]}),s.jsxs(Fu,{className:"agent-node",children:[s.jsx("circle",{cx:"130",cy:"150",r:"25",fill:"url(#agentGradient)",filter:"url(#shadow)"}),s.jsx("circle",{cx:"130",cy:"150",r:"23",fill:"none",stroke:"#fff",strokeWidth:"1",strokeOpacity:"0.5"}),s.jsx("text",{x:"130",y:"154",fontSize:"11",fontWeight:"bold",textAnchor:"middle",fill:"#000000",children:"AGENT 1"}),s.jsx("circle",{cx:"130",cy:"135",r:"2",fill:"#000",fillOpacity:"0.3"}),s.jsx("circle",{cx:"120",cy:"150",r:"2",fill:"#000",fillOpacity:"0.3"}),s.jsx("circle",{cx:"140",cy:"150",r:"2",fill:"#000",fillOpacity:"0.3"}),s.jsx("line",{x1:"120",y1:"150",x2:"140",y2:"150",stroke:"#000",strokeWidth:"0.5",strokeOpacity:"0.3"}),s.jsx("line",{x1:"130",y1:"135",x2:"130",y2:"145",stroke:"#000",strokeWidth:"0.5",strokeOpacity:"0.3"})]}),s.jsxs(Fu,{className:"agent-node",children:[s.jsx("circle",{cx:"370",cy:"150",r:"25",fill:"url(#agentGradient)",filter:"url(#shadow)"}),s.jsx("circle",{cx:"370",cy:"150",r:"23",fill:"none",stroke:"#fff",strokeWidth:"1",strokeOpacity:"0.5"}),s.jsx("text",{x:"370",y:"154",fontSize:"11",fontWeight:"bold",textAnchor:"middle",fill:"#000000",children:"AGENT 2"}),s.jsx("circle",{cx:"370",cy:"135",r:"2",fill:"#000",fillOpacity:"0.3"}),s.jsx("circle",{cx:"360",cy:"150",r:"2",fill:"#000",fillOpacity:"0.3"}),s.jsx("circle",{cx:"380",cy:"150",r:"2",fill:"#000",fillOpacity:"0.3"}),s.jsx("line",{x1:"360",y1:"150",x2:"380",y2:"150",stroke:"#000",strokeWidth:"0.5",strokeOpacity:"0.3"}),s.jsx("line",{x1:"370",y1:"135",x2:"370",y2:"145",stroke:"#000",strokeWidth:"0.5",strokeOpacity:"0.3"})]}),s.jsxs("g",{children:[s.jsx("path",{d:"M250,90 C250,100 250,110 250,120",fill:"none",stroke:"#ffd700",strokeWidth:"2",strokeDasharray:"5,3",strokeOpacity:"0.7",children:s.jsx("animate",{attributeName:"stroke-dashoffset",from:"1000",to:"0",dur:"15s",repeatCount:"indefinite"})}),s.jsxs("circle",{cx:"250",cy:"90",r:"3",fill:"url(#particleGradient)",children:[s.jsx("animate",{attributeName:"cy",values:"90;120",dur:"4s",repeatCount:"indefinite"}),s.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"4s",repeatCount:"indefinite"})]}),s.jsxs("circle",{cx:"250",cy:"90",r:"3",fill:"url(#particleGradient)",children:[s.jsx("animate",{attributeName:"cy",values:"90;120",dur:"4s",begin:"1s",repeatCount:"indefinite"}),s.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"4s",begin:"1s",repeatCount:"indefinite"})]}),s.jsx("path",{d:"M250,190 C250,230 250,270 250,280",fill:"none",stroke:"#ffd700",strokeWidth:"2",strokeDasharray:"5,3",strokeOpacity:"0.7",children:s.jsx("animate",{attributeName:"stroke-dashoffset",from:"1000",to:"0",dur:"20s",repeatCount:"indefinite"})}),s.jsxs("circle",{cx:"250",cy:"190",r:"3",fill:"url(#particleGradient)",children:[s.jsx("animate",{attributeName:"cy",values:"190;280",dur:"5s",repeatCount:"indefinite"}),s.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"5s",repeatCount:"indefinite"})]}),s.jsxs("circle",{cx:"250",cy:"190",r:"3",fill:"url(#particleGradient)",children:[s.jsx("animate",{attributeName:"cy",values:"190;280",dur:"5s",begin:"2s",repeatCount:"indefinite"}),s.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"5s",begin:"2s",repeatCount:"indefinite"})]}),s.jsx("path",{d:"M155,150 C165,150 175,150 180,150",fill:"none",stroke:"#ffd700",strokeWidth:"1.5",strokeDasharray:"3,2",strokeOpacity:"0.6",children:s.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"10s",repeatCount:"indefinite"})}),s.jsx("path",{d:"M345,150 C335,150 325,150 320,150",fill:"none",stroke:"#ffd700",strokeWidth:"1.5",strokeDasharray:"3,2",strokeOpacity:"0.6",children:s.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"10s",repeatCount:"indefinite"})})]}),s.jsx("circle",{cx:"250",cy:"90",r:"5",fill:"#ffd700",opacity:"0.5",filter:"url(#glow1)"}),s.jsx("circle",{cx:"250",cy:"190",r:"5",fill:"#ffd700",opacity:"0.5",filter:"url(#glow1)"}),s.jsx("circle",{cx:"180",cy:"150",r:"4",fill:"#ffd700",opacity:"0.5",filter:"url(#glow1)"}),s.jsx("circle",{cx:"320",cy:"150",r:"4",fill:"#ffd700",opacity:"0.5",filter:"url(#glow1)"}),s.jsx("circle",{cx:"250",cy:"280",r:"5",fill:"#ffd700",opacity:"0.5",filter:"url(#glow1)"})]})})},d1=E.section`
  padding: 80px 0;
  background-color: ${({theme:e})=>e.colors.backgroundLight};
`,f1=E.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`,ci=E.div`
  background-color: ${({theme:e})=>e.colors.textLight};
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: all 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
`,di=E.div`
  margin-bottom: 20px;
  width: 60px;
  height: 60px;
  background-color: ${({theme:e})=>e.colors.primaryLight};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,fi=E.h3`
  font-size: 1.3rem;
  margin-bottom: 15px;
`,pi=E.p`
  color: ${({theme:e})=>e.colors.grayMedium};
`,p1=()=>s.jsx(d1,{id:"features",children:s.jsxs(an,{children:[s.jsxs(ha,{children:[s.jsx("h2",{children:"Core Features"}),s.jsx("p",{children:"Discover how AgentSwap revolutionizes DeFi with AI-powered strategy agents on Solana"})]}),s.jsxs(f1,{children:[s.jsxs(ci,{children:[s.jsx(di,{children:s.jsx(Km,{})}),s.jsx(fi,{children:"Real-time Wallet Monitoring"}),s.jsx(pi,{children:"Get instant insights on your Solana wallet assets with AI-powered analysis and investment recommendations based on Pyth Network price data."})]}),s.jsxs(ci,{children:[s.jsx(di,{children:s.jsx(Xm,{})}),s.jsx(fi,{children:"Natural Language Interaction"}),s.jsx(pi,{children:'Control your DeFi operations with simple commands like "Swap 50% of my SOL to USDC" or "Stake 100 SOL on Marinade" - no complex interfaces needed.'})]}),s.jsxs(ci,{children:[s.jsx(di,{children:s.jsx(Zm,{})}),s.jsx(fi,{children:"Automated DeFi Operations"}),s.jsx(pi,{children:"Execute token swaps through Jupiter Aggregator, stake your SOL with liquid staking protocols, and optimize yield farming - all through AI assistance."})]}),s.jsxs(ci,{children:[s.jsx(di,{children:s.jsx(Jm,{})}),s.jsx(fi,{children:"Strategy Agent Marketplace"}),s.jsx(pi,{children:"Rent or purchase community-developed strategy agents for trading, staking, or arbitrage to automatically execute sophisticated DeFi strategies."})]})]})]})}),h1=E.section`
  padding: 80px 0;
  background-color: ${({theme:e})=>e.colors.grayLight};
`,m1=E.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`,g1=E.div`
  flex: 1;
  min-width: 300px;
  padding: 20px;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    flex: 100%;
    padding: 20px 0;
  }
`,x1=E.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
  padding: 20px;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    flex: 100%;
    padding: 20px 0;
  }
`,cl=E.div`
  background-color: ${({theme:e})=>e.colors.textLight};
  border-radius: 10px;
  padding: 25px;
  margin-bottom: 25px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: all 0.3s;
  border-left: 4px solid ${({theme:e})=>e.colors.primary};

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }
`,dl=E.h3`
  font-size: 1.3rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`,fl=E.p`
  color: ${({theme:e})=>e.colors.grayMedium};
`,y1=()=>s.jsx(h1,{id:"technology",children:s.jsxs(an,{children:[s.jsxs(ha,{children:[s.jsx("h2",{children:"Our Technology"}),s.jsx("p",{children:"Cutting-edge blockchain and AI technologies powering AgentSwap"})]}),s.jsxs(m1,{children:[s.jsxs(g1,{children:[s.jsxs(cl,{children:[s.jsxs(dl,{children:[s.jsx(qm,{}),"Model Context Protocol (MCP)"]}),s.jsx(fl,{children:"AgentSwap is built on MCP, enabling AI models to interact directly with blockchain data and execute transactions. This protocol creates a standardized interface between large language models and Solana programs, allowing agents to understand wallet states and generate valid transactions."})]}),s.jsxs(cl,{children:[s.jsxs(dl,{children:[s.jsx(e1,{}),"Solana Agent Kit"]}),s.jsx(fl,{children:"We leverage the open-source Solana Agent Kit (github.com/sendaifun/solana-agent-kit) to create, deploy, and manage our AI agents. This toolkit provides essential components for building autonomous agents that can interact with Solana blockchain, ensuring security and efficiency in all operations."})]}),s.jsxs(cl,{children:[s.jsxs(dl,{children:[s.jsx(t1,{}),"Solana Smart Contracts"]}),s.jsx(fl,{children:"Our platform is powered by Rust-written Solana Programs that manage the agent marketplace, fee distribution, user permissions, and interactions with various DeFi protocols like Jupiter, Marinade, and Orca."})]})]}),s.jsx(x1,{children:s.jsx(c1,{})})]})]})}),v1=E.section`
  padding: 80px 0;
  background-color: ${({theme:e})=>e.colors.backgroundLight};
`,w1=E.div`
  position: relative;
  max-width: 800px;
  margin: 40px auto 0;

  &::after {
    content: '';
    position: absolute;
    width: 4px;
    background-color: ${({theme:e})=>e.colors.primary};
    opacity: 0.3;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    &::after {
      left: 31px;
    }
  }
`,k1=E.div`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;
  left: ${({isEven:e})=>e?"50%":"0"};

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    right: ${({isEven:e})=>e?"auto":"-10px"};
    left: ${({isEven:e})=>e?"-10px":"auto"};
    background-color: ${({theme:e})=>e.colors.primary};
    border-radius: 50%;
    top: 20px;
    z-index: 1;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0;

    &::after {
      left: 21px;
    }
  }
`,S1=E.div`
  padding: 20px;
  background-color: ${({theme:e})=>e.colors.textLight};
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  position: relative;
`,j1=E.h3`
  margin-bottom: 10px;
  font-size: 1.2rem;
`,C1=E.p`
  color: ${({theme:e})=>e.colors.grayMedium};
  font-size: 0.95rem;
`,E1=[{title:"Phase 1: Foundation (Q1-Q2 2025)",description:"Build core infrastructure including frontend DApp, basic Solana smart contracts, wallet monitoring integration, and token swap functionality via Jupiter Aggregator."},{title:"Phase 2: Agent Marketplace (Q3 2025)",description:"Launch strategy agent marketplace with upload/review system, implement rental/purchase functionality, and add staking features with Marinade and Jito integration."},{title:"Phase 3: Ecosystem Enhancement (Q4 2025)",description:"Optimize natural language processing, implement agent performance tracking, integrate Arweave for decentralized storage, and conduct smart contract audits."},{title:"Phase 4: Tokenomics & Governance (Q1 2026)",description:"Introduce AGENT token for payments and rewards, establish DAO governance, and expand support for additional Solana DeFi protocols."}],$1=()=>s.jsx(v1,{id:"roadmap",children:s.jsxs(an,{children:[s.jsxs(ha,{children:[s.jsx("h2",{children:"Development Roadmap"}),s.jsx("p",{children:"Our journey to build the future of AI-powered DeFi on Solana"})]}),s.jsx(w1,{children:E1.map((e,t)=>s.jsx(k1,{isEven:t%2===1,children:s.jsxs(S1,{children:[s.jsx(j1,{children:e.title}),s.jsx(C1,{children:e.description})]})},t))})]})}),zf=Pe`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;Pe`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;const _1=Pe`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
`,L1=Pe`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`,N1=Pe`
  0% { transform: translateY(0) rotate(0); opacity: 1; }
  100% { transform: translateY(-100vh) rotate(720deg); opacity: 0; }
`,z1=E.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  
  ${e=>e.isOpen&&pt`
    opacity: 1;
    visibility: visible;
  `}
`,P1=E.div`
  background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
  border-radius: 16px;
  padding: 40px;
  max-width: 500px;
  width: 90%;
  color: white;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3), 0 0 30px rgba(255, 215, 0, 0.2);
  position: relative;
  text-align: center;
  transform: scale(0.9);
  opacity: 0;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s;
  overflow: hidden;
  
  ${e=>e.isOpen&&pt`
    transform: scale(1);
    opacity: 1;
  `}
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`,T1=E.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffd700 0%, #e6c200 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  
  svg {
    width: 40px;
    height: 40px;
    fill: #000;
  }
`,O1=E.h3`
  font-size: 1.8rem;
  margin-bottom: 15px;
  background: linear-gradient(135deg, #ffd700 0%, #e6c200 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
`,I1=E.p`
  font-size: 1.1rem;
  margin-bottom: 30px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
`,M1=E.button`
  min-width: 150px;
  padding: 14px 32px;
  font-size: 1rem;
  background: linear-gradient(135deg, #ffd700 0%, #e6c200 100%);
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 6px 20px rgba(255, 215, 0, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(255, 215, 0, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`,R1=E.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background: ${e=>e.color};
  top: -10px;
  left: ${e=>e.left}%;
  border-radius: ${e=>e.rounded?"50%":"2px"};
  animation: ${N1} ${e=>1+Math.random()*2}s linear forwards;
  animation-delay: ${e=>e.delay}s;
`,D1=E.div`
  max-width: 500px;
  margin: 0 auto;
  animation: ${zf} 0.5s ease-out;
`,A1=E.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,F1=E.input`
  padding: 16px;
  border-radius: 8px;
  border: 2px solid transparent;
  font-size: 1rem;
  flex: 1;
  background: rgba(255, 255, 255, 0.9);
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  &:focus {
    outline: none;
    border-color: #e6c200;
    background: white;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
  
  &.error {
    border-color: #ff3b30;
    animation: ${_1} 0.5s linear;
  }
`,W1=E.button`
  min-width: 150px;
  padding: 16px 38px;
  font-size: 1.1rem;
  background: linear-gradient(135deg, #ffd700 0%, #e6c200 100%);
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 6px 20px rgba(255, 215, 0, 0.3), 0 2px 5px rgba(0, 0, 0, 0.15);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(255, 215, 0, 0.4), 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 14px 24px;
  }
  
  &.success {
    animation: ${L1} 0.5s ease-in-out;
  }
`,B1=E.div`
  margin-top: 15px;
  font-weight: 500;
  animation: ${zf} 0.3s ease-out;
  
  &.success {
    color: #00ff9d;
  }
  
  &.error {
    color: #ff3b30;
  }
`,U1=E.span`
  &::after {
    content: '...';
    animation: dots 1.5s steps(4, end) infinite;
  }
  
  @keyframes dots {
    0%, 20% { content: '.'; }
    40% { content: '..'; }
    60% { content: '...'; }
    80%, 100% { content: ''; }
  }
`,b1=({isOpen:e,onClose:t,email:n})=>{const r=["#ffd700","#e6c200","#ffffff","#ff3e00","#00c2ff","#44ff00","#ff00f7","#00fff7"],i=()=>{const o=[];for(let l=0;l<50;l++)o.push(s.jsx(R1,{color:r[Math.floor(Math.random()*r.length)],left:Math.random()*100,delay:Math.random()*.5,rounded:Math.random()>.5},l));return o};return G.useEffect(()=>{const o=l=>{l.keyCode===27&&t()};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[t]),G.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[e]),s.jsx(z1,{isOpen:e,onClick:t,children:s.jsxs(P1,{isOpen:e,onClick:o=>o.stopPropagation(),children:[i(),s.jsx(T1,{children:s.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})})}),s.jsx(O1,{children:"You're on the List!"}),s.jsxs(I1,{children:["Thanks for joining our waitlist! We've sent a confirmation to ",s.jsx("strong",{children:n}),". We'll notify you as soon as early access is available."]}),s.jsx(M1,{onClick:t,children:"Got it"})]})})},H1=()=>{const[e,t]=G.useState(""),[n,r]=G.useState(!1),[i,o]=G.useState({type:"",message:""}),[l,a]=G.useState(!0),[u,c]=G.useState(!1),[g,m]=G.useState(""),h=w=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(w).toLowerCase()),y=async w=>{if(w.preventDefault(),console.log("Form submitted with email:",e),!e||!h(e)){a(!1),o({type:"error",message:"Please enter a valid email address"});return}a(!0),r(!0),o({type:"",message:""});try{console.log("Sending API request...");const z=await fetch("https://api.getwaitlist.com/api/v1/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,waitlist_id:26298})}),f=await z.json();if(console.log("API response:",f),z.ok)m(e),t(""),c(!0);else throw new Error(f.message||"Something went wrong. Please try again.")}catch(z){console.error("API error:",z),o({type:"error",message:z.message||"Failed to join waitlist. Please try again."})}finally{r(!1)}},v=()=>{c(!1)};return s.jsxs(D1,{children:[s.jsxs(A1,{onSubmit:y,children:[s.jsx(F1,{type:"email",placeholder:"Enter your email address",value:e,onChange:w=>t(w.target.value),className:l?"":"error",disabled:n,required:!0}),s.jsx(W1,{type:"submit",disabled:n,className:i.type==="success"?"success":"",children:n?s.jsxs("span",{children:["Joining",s.jsx(U1,{})]}):"Join Waitlist"})]}),i.message&&s.jsx(B1,{className:i.type,children:i.message}),s.jsx(b1,{isOpen:u,onClose:v,email:g})]})},V1=E.section`
  padding: 80px 0;
  background: linear-gradient(to right, ${({theme:e})=>e.colors.primaryDark}, ${({theme:e})=>e.colors.primary});
  color: ${({theme:e})=>e.colors.textDark};
  text-align: center;
`,Q1=E.h2`
  font-size: 2.2rem;
  margin-bottom: 20px;
`,G1=E.p`
  max-width: 700px;
  margin: 0 auto 30px;
`,Y1=()=>s.jsx(V1,{id:"contact",children:s.jsxs(an,{children:[s.jsx(Q1,{children:"Ready to Transform Your DeFi Experience?"}),s.jsx(G1,{children:"Join AgentSwap early access program to be among the first to experience AI-powered asset management on Solana."}),s.jsx(H1,{})]})}),K1=()=>s.jsxs(s.Fragment,{children:[s.jsx(Ym,{}),s.jsx(p1,{}),s.jsx(y1,{}),s.jsx($1,{}),s.jsx(Y1,{})]}),X1=()=>s.jsxs(tm,{theme:om,children:[s.jsx(lm,{}),s.jsx(Sm,{}),s.jsx(K1,{}),s.jsx(_m,{})]});pl.createRoot(document.getElementById("root")).render(s.jsx(Ie.StrictMode,{children:s.jsx(X1,{})}));
