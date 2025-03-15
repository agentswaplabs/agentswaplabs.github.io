(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function $d(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fa={exports:{}},lo={},Ba={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dr=Symbol.for("react.element"),zd=Symbol.for("react.portal"),Pd=Symbol.for("react.fragment"),Ld=Symbol.for("react.strict_mode"),Nd=Symbol.for("react.profiler"),Td=Symbol.for("react.provider"),Id=Symbol.for("react.context"),Rd=Symbol.for("react.forward_ref"),Od=Symbol.for("react.suspense"),Dd=Symbol.for("react.memo"),Md=Symbol.for("react.lazy"),gu=Symbol.iterator;function Ad(e){return e===null||typeof e!="object"?null:(e=gu&&e[gu]||e["@@iterator"],typeof e=="function"?e:null)}var Ua={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wa=Object.assign,Ha={};function Bn(e,t,n){this.props=e,this.context=t,this.refs=Ha,this.updater=n||Ua}Bn.prototype.isReactComponent={};Bn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Bn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Va(){}Va.prototype=Bn.prototype;function ps(e,t,n){this.props=e,this.context=t,this.refs=Ha,this.updater=n||Ua}var hs=ps.prototype=new Va;hs.constructor=ps;Wa(hs,Bn.prototype);hs.isPureReactComponent=!0;var yu=Array.isArray,Qa=Object.prototype.hasOwnProperty,ms={current:null},Ga={key:!0,ref:!0,__self:!0,__source:!0};function Ya(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Qa.call(t,r)&&!Ga.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),f=0;f<s;f++)u[f]=arguments[f+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Dr,type:e,key:o,ref:l,props:i,_owner:ms.current}}function Fd(e,t){return{$$typeof:Dr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function gs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Dr}function Bd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var vu=/\/+/g;function No(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Bd(""+e.key):t.toString(36)}function pi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Dr:case zd:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+No(l,0):r,yu(i)?(n="",e!=null&&(n=e.replace(vu,"$&/")+"/"),pi(i,t,n,"",function(f){return f})):i!=null&&(gs(i)&&(i=Fd(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(vu,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",yu(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+No(o,s);l+=pi(o,t,n,u,i)}else if(u=Ad(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+No(o,s++),l+=pi(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Vr(e,t,n){if(e==null)return e;var r=[],i=0;return pi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Ud(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},hi={transition:null},Wd={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:hi,ReactCurrentOwner:ms};function Ka(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:Vr,forEach:function(e,t,n){Vr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vr(e,function(){t++}),t},toArray:function(e){return Vr(e,function(t){return t})||[]},only:function(e){if(!gs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=Bn;R.Fragment=Pd;R.Profiler=Nd;R.PureComponent=ps;R.StrictMode=Ld;R.Suspense=Od;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wd;R.act=Ka;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Wa({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=ms.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Qa.call(t,u)&&!Ga.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var f=0;f<u;f++)s[f]=arguments[f+2];r.children=s}return{$$typeof:Dr,type:e.type,key:i,ref:o,props:r,_owner:l}};R.createContext=function(e){return e={$$typeof:Id,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Td,_context:e},e.Consumer=e};R.createElement=Ya;R.createFactory=function(e){var t=Ya.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:Rd,render:e}};R.isValidElement=gs;R.lazy=function(e){return{$$typeof:Md,_payload:{_status:-1,_result:e},_init:Ud}};R.memo=function(e,t){return{$$typeof:Dd,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=hi.transition;hi.transition={};try{e()}finally{hi.transition=t}};R.unstable_act=Ka;R.useCallback=function(e,t){return he.current.useCallback(e,t)};R.useContext=function(e){return he.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return he.current.useDeferredValue(e)};R.useEffect=function(e,t){return he.current.useEffect(e,t)};R.useId=function(){return he.current.useId()};R.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return he.current.useMemo(e,t)};R.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};R.useRef=function(e){return he.current.useRef(e)};R.useState=function(e){return he.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return he.current.useTransition()};R.version="18.3.1";Ba.exports=R;var Ee=Ba.exports;const Ie=$d(Ee);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd=Ee,Vd=Symbol.for("react.element"),Qd=Symbol.for("react.fragment"),Gd=Object.prototype.hasOwnProperty,Yd=Hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kd={key:!0,ref:!0,__self:!0,__source:!0};function Xa(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Gd.call(t,r)&&!Kd.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Vd,type:e,key:o,ref:l,props:i,_owner:Yd.current}}lo.Fragment=Qd;lo.jsx=Xa;lo.jsxs=Xa;Fa.exports=lo;var a=Fa.exports,dl={},Za={exports:{}},Pe={},Ja={exports:{}},ba={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,P){var L=E.length;E.push(P);e:for(;0<L;){var A=L-1>>>1,F=E[A];if(0<i(F,P))E[A]=P,E[L]=F,L=A;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var P=E[0],L=E.pop();if(L!==P){E[0]=L;e:for(var A=0,F=E.length,Ft=F>>>1;A<Ft;){var Fe=2*(A+1)-1,dt=E[Fe],Se=Fe+1,et=E[Se];if(0>i(dt,L))Se<F&&0>i(et,dt)?(E[A]=et,E[Se]=L,A=Se):(E[A]=dt,E[Fe]=L,A=Fe);else if(Se<F&&0>i(et,L))E[A]=et,E[Se]=L,A=Se;else break e}}return P}function i(E,P){var L=E.sortIndex-P.sortIndex;return L!==0?L:E.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],f=[],g=1,m=null,h=3,v=!1,x=!1,S=!1,T=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(E){for(var P=n(f);P!==null;){if(P.callback===null)r(f);else if(P.startTime<=E)r(f),P.sortIndex=P.expirationTime,t(u,P);else break;P=n(f)}}function y(E){if(S=!1,p(E),!x)if(n(u)!==null)x=!0,Vn(C);else{var P=n(f);P!==null&&At(y,P.startTime-E)}}function C(E,P){x=!1,S&&(S=!1,d(z),z=-1),v=!0;var L=h;try{for(p(P),m=n(u);m!==null&&(!(m.expirationTime>P)||E&&!ke());){var A=m.callback;if(typeof A=="function"){m.callback=null,h=m.priorityLevel;var F=A(m.expirationTime<=P);P=e.unstable_now(),typeof F=="function"?m.callback=F:m===n(u)&&r(u),p(P)}else r(u);m=n(u)}if(m!==null)var Ft=!0;else{var Fe=n(f);Fe!==null&&At(y,Fe.startTime-P),Ft=!1}return Ft}finally{m=null,h=L,v=!1}}var j=!1,w=null,z=-1,B=5,I=-1;function ke(){return!(e.unstable_now()-I<B)}function Dt(){if(w!==null){var E=e.unstable_now();I=E;var P=!0;try{P=w(!0,E)}finally{P?Mt():(j=!1,w=null)}}else j=!1}var Mt;if(typeof c=="function")Mt=function(){c(Dt)};else if(typeof MessageChannel<"u"){var Wr=new MessageChannel,Po=Wr.port2;Wr.port1.onmessage=Dt,Mt=function(){Po.postMessage(null)}}else Mt=function(){T(Dt,0)};function Vn(E){w=E,j||(j=!0,Mt())}function At(E,P){z=T(function(){E(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,Vn(C))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(E){switch(h){case 1:case 2:case 3:var P=3;break;default:P=h}var L=h;h=P;try{return E()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,P){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var L=h;h=E;try{return P()}finally{h=L}},e.unstable_scheduleCallback=function(E,P,L){var A=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?A+L:A):L=A,E){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=L+F,E={id:g++,callback:P,priorityLevel:E,startTime:L,expirationTime:F,sortIndex:-1},L>A?(E.sortIndex=L,t(f,E),n(u)===null&&E===n(f)&&(S?(d(z),z=-1):S=!0,At(y,L-A))):(E.sortIndex=F,t(u,E),x||v||(x=!0,Vn(C))),E},e.unstable_shouldYield=ke,e.unstable_wrapCallback=function(E){var P=h;return function(){var L=h;h=P;try{return E.apply(this,arguments)}finally{h=L}}}})(ba);Ja.exports=ba;var Xd=Ja.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd=Ee,ze=Xd;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qa=new Set,yr={};function rn(e,t){zn(e,t),zn(e+"Capture",t)}function zn(e,t){for(yr[e]=t,e=0;e<t.length;e++)qa.add(t[e])}var st=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pl=Object.prototype.hasOwnProperty,Jd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xu={},wu={};function bd(e){return pl.call(wu,e)?!0:pl.call(xu,e)?!1:Jd.test(e)?wu[e]=!0:(xu[e]=!0,!1)}function qd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ep(e,t,n,r){if(t===null||typeof t>"u"||qd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var ys=/[\-:]([a-z])/g;function vs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ys,vs);se[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ys,vs);se[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ys,vs);se[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function xs(e,t,n,r){var i=se.hasOwnProperty(t)?se[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ep(t,n,i,r)&&(n=null),r||i===null?bd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ft=Zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qr=Symbol.for("react.element"),an=Symbol.for("react.portal"),cn=Symbol.for("react.fragment"),ws=Symbol.for("react.strict_mode"),hl=Symbol.for("react.profiler"),ec=Symbol.for("react.provider"),tc=Symbol.for("react.context"),ks=Symbol.for("react.forward_ref"),ml=Symbol.for("react.suspense"),gl=Symbol.for("react.suspense_list"),Ss=Symbol.for("react.memo"),gt=Symbol.for("react.lazy"),nc=Symbol.for("react.offscreen"),ku=Symbol.iterator;function Gn(e){return e===null||typeof e!="object"?null:(e=ku&&e[ku]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,To;function nr(e){if(To===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);To=t&&t[1]||""}return`
`+To+e}var Io=!1;function Ro(e,t){if(!e||Io)return"";Io=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{Io=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?nr(e):""}function tp(e){switch(e.tag){case 5:return nr(e.type);case 16:return nr("Lazy");case 13:return nr("Suspense");case 19:return nr("SuspenseList");case 0:case 2:case 15:return e=Ro(e.type,!1),e;case 11:return e=Ro(e.type.render,!1),e;case 1:return e=Ro(e.type,!0),e;default:return""}}function yl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cn:return"Fragment";case an:return"Portal";case hl:return"Profiler";case ws:return"StrictMode";case ml:return"Suspense";case gl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case tc:return(e.displayName||"Context")+".Consumer";case ec:return(e._context.displayName||"Context")+".Provider";case ks:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ss:return t=e.displayName||null,t!==null?t:yl(e.type)||"Memo";case gt:t=e._payload,e=e._init;try{return yl(e(t))}catch{}}return null}function np(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yl(t);case 8:return t===ws?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function rp(e){var t=rc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gr(e){e._valueTracker||(e._valueTracker=rp(e))}function ic(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=rc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vl(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Su(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Nt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function oc(e,t){t=t.checked,t!=null&&xs(e,"checked",t,!1)}function xl(e,t){oc(e,t);var n=Nt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?wl(e,t.type,n):t.hasOwnProperty("defaultValue")&&wl(e,t.type,Nt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ju(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function wl(e,t,n){(t!=="number"||Li(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var rr=Array.isArray;function Sn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Nt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function kl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(rr(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Nt(n)}}function lc(e,t){var n=Nt(t.value),r=Nt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Eu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function sc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?sc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yr,uc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yr=Yr||document.createElement("div"),Yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ip=["Webkit","ms","Moz","O"];Object.keys(sr).forEach(function(e){ip.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),sr[t]=sr[e]})});function ac(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||sr.hasOwnProperty(e)&&sr[e]?(""+t).trim():t+"px"}function cc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ac(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var op=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jl(e,t){if(t){if(op[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Cl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var El=null;function js(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _l=null,jn=null,Cn=null;function _u(e){if(e=Fr(e)){if(typeof _l!="function")throw Error(k(280));var t=e.stateNode;t&&(t=fo(t),_l(e.stateNode,e.type,t))}}function fc(e){jn?Cn?Cn.push(e):Cn=[e]:jn=e}function dc(){if(jn){var e=jn,t=Cn;if(Cn=jn=null,_u(e),t)for(e=0;e<t.length;e++)_u(t[e])}}function pc(e,t){return e(t)}function hc(){}var Oo=!1;function mc(e,t,n){if(Oo)return e(t,n);Oo=!0;try{return pc(e,t,n)}finally{Oo=!1,(jn!==null||Cn!==null)&&(hc(),dc())}}function xr(e,t){var n=e.stateNode;if(n===null)return null;var r=fo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var $l=!1;if(st)try{var Yn={};Object.defineProperty(Yn,"passive",{get:function(){$l=!0}}),window.addEventListener("test",Yn,Yn),window.removeEventListener("test",Yn,Yn)}catch{$l=!1}function lp(e,t,n,r,i,o,l,s,u){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(g){this.onError(g)}}var ur=!1,Ni=null,Ti=!1,zl=null,sp={onError:function(e){ur=!0,Ni=e}};function up(e,t,n,r,i,o,l,s,u){ur=!1,Ni=null,lp.apply(sp,arguments)}function ap(e,t,n,r,i,o,l,s,u){if(up.apply(this,arguments),ur){if(ur){var f=Ni;ur=!1,Ni=null}else throw Error(k(198));Ti||(Ti=!0,zl=f)}}function on(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function gc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $u(e){if(on(e)!==e)throw Error(k(188))}function cp(e){var t=e.alternate;if(!t){if(t=on(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return $u(i),e;if(o===r)return $u(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function yc(e){return e=cp(e),e!==null?vc(e):null}function vc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vc(e);if(t!==null)return t;e=e.sibling}return null}var xc=ze.unstable_scheduleCallback,zu=ze.unstable_cancelCallback,fp=ze.unstable_shouldYield,dp=ze.unstable_requestPaint,Z=ze.unstable_now,pp=ze.unstable_getCurrentPriorityLevel,Cs=ze.unstable_ImmediatePriority,wc=ze.unstable_UserBlockingPriority,Ii=ze.unstable_NormalPriority,hp=ze.unstable_LowPriority,kc=ze.unstable_IdlePriority,so=null,be=null;function mp(e){if(be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(so,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:vp,gp=Math.log,yp=Math.LN2;function vp(e){return e>>>=0,e===0?32:31-(gp(e)/yp|0)|0}var Kr=64,Xr=4194304;function ir(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ri(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=ir(s):(o&=l,o!==0&&(r=ir(o)))}else l=n&~i,l!==0?r=ir(l):o!==0&&(r=ir(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ve(t),i=1<<n,r|=e[n],t&=~i;return r}function xp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ve(o),s=1<<l,u=i[l];u===-1?(!(s&n)||s&r)&&(i[l]=xp(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function Pl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Sc(){var e=Kr;return Kr<<=1,!(Kr&4194240)&&(Kr=64),e}function Do(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Mr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=n}function kp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ve(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Es(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var M=0;function jc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cc,_s,Ec,_c,$c,Ll=!1,Zr=[],St=null,jt=null,Ct=null,wr=new Map,kr=new Map,vt=[],Sp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pu(e,t){switch(e){case"focusin":case"focusout":St=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":Ct=null;break;case"pointerover":case"pointerout":wr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":kr.delete(t.pointerId)}}function Kn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Fr(t),t!==null&&_s(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function jp(e,t,n,r,i){switch(t){case"focusin":return St=Kn(St,e,t,n,r,i),!0;case"dragenter":return jt=Kn(jt,e,t,n,r,i),!0;case"mouseover":return Ct=Kn(Ct,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return wr.set(o,Kn(wr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,kr.set(o,Kn(kr.get(o)||null,e,t,n,r,i)),!0}return!1}function zc(e){var t=Ht(e.target);if(t!==null){var n=on(t);if(n!==null){if(t=n.tag,t===13){if(t=gc(n),t!==null){e.blockedOn=t,$c(e.priority,function(){Ec(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Nl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);El=r,n.target.dispatchEvent(r),El=null}else return t=Fr(n),t!==null&&_s(t),e.blockedOn=n,!1;t.shift()}return!0}function Lu(e,t,n){mi(e)&&n.delete(t)}function Cp(){Ll=!1,St!==null&&mi(St)&&(St=null),jt!==null&&mi(jt)&&(jt=null),Ct!==null&&mi(Ct)&&(Ct=null),wr.forEach(Lu),kr.forEach(Lu)}function Xn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ll||(Ll=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,Cp)))}function Sr(e){function t(i){return Xn(i,e)}if(0<Zr.length){Xn(Zr[0],e);for(var n=1;n<Zr.length;n++){var r=Zr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(St!==null&&Xn(St,e),jt!==null&&Xn(jt,e),Ct!==null&&Xn(Ct,e),wr.forEach(t),kr.forEach(t),n=0;n<vt.length;n++)r=vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<vt.length&&(n=vt[0],n.blockedOn===null);)zc(n),n.blockedOn===null&&vt.shift()}var En=ft.ReactCurrentBatchConfig,Oi=!0;function Ep(e,t,n,r){var i=M,o=En.transition;En.transition=null;try{M=1,$s(e,t,n,r)}finally{M=i,En.transition=o}}function _p(e,t,n,r){var i=M,o=En.transition;En.transition=null;try{M=4,$s(e,t,n,r)}finally{M=i,En.transition=o}}function $s(e,t,n,r){if(Oi){var i=Nl(e,t,n,r);if(i===null)Go(e,t,r,Di,n),Pu(e,r);else if(jp(i,e,t,n,r))r.stopPropagation();else if(Pu(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var o=Fr(i);if(o!==null&&Cc(o),o=Nl(e,t,n,r),o===null&&Go(e,t,r,Di,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Go(e,t,r,null,n)}}var Di=null;function Nl(e,t,n,r){if(Di=null,e=js(r),e=Ht(e),e!==null)if(t=on(e),t===null)e=null;else if(n=t.tag,n===13){if(e=gc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Di=e,null}function Pc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pp()){case Cs:return 1;case wc:return 4;case Ii:case hp:return 16;case kc:return 536870912;default:return 16}default:return 16}}var wt=null,zs=null,gi=null;function Lc(){if(gi)return gi;var e,t=zs,n=t.length,r,i="value"in wt?wt.value:wt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return gi=i.slice(e,1<r?1-r:void 0)}function yi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jr(){return!0}function Nu(){return!1}function Le(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Jr:Nu,this.isPropagationStopped=Nu,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jr)},persist:function(){},isPersistent:Jr}),t}var Un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ps=Le(Un),Ar=K({},Un,{view:0,detail:0}),$p=Le(Ar),Mo,Ao,Zn,uo=K({},Ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ls,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zn&&(Zn&&e.type==="mousemove"?(Mo=e.screenX-Zn.screenX,Ao=e.screenY-Zn.screenY):Ao=Mo=0,Zn=e),Mo)},movementY:function(e){return"movementY"in e?e.movementY:Ao}}),Tu=Le(uo),zp=K({},uo,{dataTransfer:0}),Pp=Le(zp),Lp=K({},Ar,{relatedTarget:0}),Fo=Le(Lp),Np=K({},Un,{animationName:0,elapsedTime:0,pseudoElement:0}),Tp=Le(Np),Ip=K({},Un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rp=Le(Ip),Op=K({},Un,{data:0}),Iu=Le(Op),Dp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ap={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ap[e])?!!t[e]:!1}function Ls(){return Fp}var Bp=K({},Ar,{key:function(e){if(e.key){var t=Dp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ls,charCode:function(e){return e.type==="keypress"?yi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Up=Le(Bp),Wp=K({},uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ru=Le(Wp),Hp=K({},Ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ls}),Vp=Le(Hp),Qp=K({},Un,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gp=Le(Qp),Yp=K({},uo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kp=Le(Yp),Xp=[9,13,27,32],Ns=st&&"CompositionEvent"in window,ar=null;st&&"documentMode"in document&&(ar=document.documentMode);var Zp=st&&"TextEvent"in window&&!ar,Nc=st&&(!Ns||ar&&8<ar&&11>=ar),Ou=" ",Du=!1;function Tc(e,t){switch(e){case"keyup":return Xp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ic(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fn=!1;function Jp(e,t){switch(e){case"compositionend":return Ic(t);case"keypress":return t.which!==32?null:(Du=!0,Ou);case"textInput":return e=t.data,e===Ou&&Du?null:e;default:return null}}function bp(e,t){if(fn)return e==="compositionend"||!Ns&&Tc(e,t)?(e=Lc(),gi=zs=wt=null,fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nc&&t.locale!=="ko"?null:t.data;default:return null}}var qp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qp[e.type]:t==="textarea"}function Rc(e,t,n,r){fc(r),t=Mi(t,"onChange"),0<t.length&&(n=new Ps("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var cr=null,jr=null;function e0(e){Qc(e,0)}function ao(e){var t=hn(e);if(ic(t))return e}function t0(e,t){if(e==="change")return t}var Oc=!1;if(st){var Bo;if(st){var Uo="oninput"in document;if(!Uo){var Au=document.createElement("div");Au.setAttribute("oninput","return;"),Uo=typeof Au.oninput=="function"}Bo=Uo}else Bo=!1;Oc=Bo&&(!document.documentMode||9<document.documentMode)}function Fu(){cr&&(cr.detachEvent("onpropertychange",Dc),jr=cr=null)}function Dc(e){if(e.propertyName==="value"&&ao(jr)){var t=[];Rc(t,jr,e,js(e)),mc(e0,t)}}function n0(e,t,n){e==="focusin"?(Fu(),cr=t,jr=n,cr.attachEvent("onpropertychange",Dc)):e==="focusout"&&Fu()}function r0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ao(jr)}function i0(e,t){if(e==="click")return ao(t)}function o0(e,t){if(e==="input"||e==="change")return ao(t)}function l0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ye=typeof Object.is=="function"?Object.is:l0;function Cr(e,t){if(Ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!pl.call(t,i)||!Ye(e[i],t[i]))return!1}return!0}function Bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uu(e,t){var n=Bu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bu(n)}}function Mc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ac(){for(var e=window,t=Li();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Li(e.document)}return t}function Ts(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function s0(e){var t=Ac(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Mc(n.ownerDocument.documentElement,n)){if(r!==null&&Ts(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Uu(n,o);var l=Uu(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var u0=st&&"documentMode"in document&&11>=document.documentMode,dn=null,Tl=null,fr=null,Il=!1;function Wu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Il||dn==null||dn!==Li(r)||(r=dn,"selectionStart"in r&&Ts(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fr&&Cr(fr,r)||(fr=r,r=Mi(Tl,"onSelect"),0<r.length&&(t=new Ps("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=dn)))}function br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pn={animationend:br("Animation","AnimationEnd"),animationiteration:br("Animation","AnimationIteration"),animationstart:br("Animation","AnimationStart"),transitionend:br("Transition","TransitionEnd")},Wo={},Fc={};st&&(Fc=document.createElement("div").style,"AnimationEvent"in window||(delete pn.animationend.animation,delete pn.animationiteration.animation,delete pn.animationstart.animation),"TransitionEvent"in window||delete pn.transitionend.transition);function co(e){if(Wo[e])return Wo[e];if(!pn[e])return e;var t=pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Fc)return Wo[e]=t[n];return e}var Bc=co("animationend"),Uc=co("animationiteration"),Wc=co("animationstart"),Hc=co("transitionend"),Vc=new Map,Hu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function It(e,t){Vc.set(e,t),rn(t,[e])}for(var Ho=0;Ho<Hu.length;Ho++){var Vo=Hu[Ho],a0=Vo.toLowerCase(),c0=Vo[0].toUpperCase()+Vo.slice(1);It(a0,"on"+c0)}It(Bc,"onAnimationEnd");It(Uc,"onAnimationIteration");It(Wc,"onAnimationStart");It("dblclick","onDoubleClick");It("focusin","onFocus");It("focusout","onBlur");It(Hc,"onTransitionEnd");zn("onMouseEnter",["mouseout","mouseover"]);zn("onMouseLeave",["mouseout","mouseover"]);zn("onPointerEnter",["pointerout","pointerover"]);zn("onPointerLeave",["pointerout","pointerover"]);rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),f0=new Set("cancel close invalid load scroll toggle".split(" ").concat(or));function Vu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ap(r,t,void 0,e),e.currentTarget=null}function Qc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,f=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;Vu(i,s,f),o=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,f=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;Vu(i,s,f),o=u}}}if(Ti)throw e=zl,Ti=!1,zl=null,e}function W(e,t){var n=t[Al];n===void 0&&(n=t[Al]=new Set);var r=e+"__bubble";n.has(r)||(Gc(t,e,2,!1),n.add(r))}function Qo(e,t,n){var r=0;t&&(r|=4),Gc(n,e,r,t)}var qr="_reactListening"+Math.random().toString(36).slice(2);function Er(e){if(!e[qr]){e[qr]=!0,qa.forEach(function(n){n!=="selectionchange"&&(f0.has(n)||Qo(n,!1,e),Qo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qr]||(t[qr]=!0,Qo("selectionchange",!1,t))}}function Gc(e,t,n,r){switch(Pc(t)){case 1:var i=Ep;break;case 4:i=_p;break;default:i=$s}n=i.bind(null,t,n,e),i=void 0,!$l||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Go(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;s!==null;){if(l=Ht(s),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}s=s.parentNode}}r=r.return}mc(function(){var f=o,g=js(n),m=[];e:{var h=Vc.get(e);if(h!==void 0){var v=Ps,x=e;switch(e){case"keypress":if(yi(n)===0)break e;case"keydown":case"keyup":v=Up;break;case"focusin":x="focus",v=Fo;break;case"focusout":x="blur",v=Fo;break;case"beforeblur":case"afterblur":v=Fo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Tu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Pp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Vp;break;case Bc:case Uc:case Wc:v=Tp;break;case Hc:v=Gp;break;case"scroll":v=$p;break;case"wheel":v=Kp;break;case"copy":case"cut":case"paste":v=Rp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ru}var S=(t&4)!==0,T=!S&&e==="scroll",d=S?h!==null?h+"Capture":null:h;S=[];for(var c=f,p;c!==null;){p=c;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,d!==null&&(y=xr(c,d),y!=null&&S.push(_r(c,y,p)))),T)break;c=c.return}0<S.length&&(h=new v(h,x,null,n,g),m.push({event:h,listeners:S}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==El&&(x=n.relatedTarget||n.fromElement)&&(Ht(x)||x[ut]))break e;if((v||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=f,x=x?Ht(x):null,x!==null&&(T=on(x),x!==T||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=f),v!==x)){if(S=Tu,y="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(S=Ru,y="onPointerLeave",d="onPointerEnter",c="pointer"),T=v==null?h:hn(v),p=x==null?h:hn(x),h=new S(y,c+"leave",v,n,g),h.target=T,h.relatedTarget=p,y=null,Ht(g)===f&&(S=new S(d,c+"enter",x,n,g),S.target=p,S.relatedTarget=T,y=S),T=y,v&&x)t:{for(S=v,d=x,c=0,p=S;p;p=sn(p))c++;for(p=0,y=d;y;y=sn(y))p++;for(;0<c-p;)S=sn(S),c--;for(;0<p-c;)d=sn(d),p--;for(;c--;){if(S===d||d!==null&&S===d.alternate)break t;S=sn(S),d=sn(d)}S=null}else S=null;v!==null&&Qu(m,h,v,S,!1),x!==null&&T!==null&&Qu(m,T,x,S,!0)}}e:{if(h=f?hn(f):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var C=t0;else if(Mu(h))if(Oc)C=o0;else{C=r0;var j=n0}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=i0);if(C&&(C=C(e,f))){Rc(m,C,n,g);break e}j&&j(e,h,f),e==="focusout"&&(j=h._wrapperState)&&j.controlled&&h.type==="number"&&wl(h,"number",h.value)}switch(j=f?hn(f):window,e){case"focusin":(Mu(j)||j.contentEditable==="true")&&(dn=j,Tl=f,fr=null);break;case"focusout":fr=Tl=dn=null;break;case"mousedown":Il=!0;break;case"contextmenu":case"mouseup":case"dragend":Il=!1,Wu(m,n,g);break;case"selectionchange":if(u0)break;case"keydown":case"keyup":Wu(m,n,g)}var w;if(Ns)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else fn?Tc(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Nc&&n.locale!=="ko"&&(fn||z!=="onCompositionStart"?z==="onCompositionEnd"&&fn&&(w=Lc()):(wt=g,zs="value"in wt?wt.value:wt.textContent,fn=!0)),j=Mi(f,z),0<j.length&&(z=new Iu(z,e,null,n,g),m.push({event:z,listeners:j}),w?z.data=w:(w=Ic(n),w!==null&&(z.data=w)))),(w=Zp?Jp(e,n):bp(e,n))&&(f=Mi(f,"onBeforeInput"),0<f.length&&(g=new Iu("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:f}),g.data=w))}Qc(m,t)})}function _r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Mi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=xr(e,n),o!=null&&r.unshift(_r(e,o,i)),o=xr(e,t),o!=null&&r.push(_r(e,o,i))),e=e.return}return r}function sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qu(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,f=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&f!==null&&(s=f,i?(u=xr(n,o),u!=null&&l.unshift(_r(n,u,s))):i||(u=xr(n,o),u!=null&&l.push(_r(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var d0=/\r\n?/g,p0=/\u0000|\uFFFD/g;function Gu(e){return(typeof e=="string"?e:""+e).replace(d0,`
`).replace(p0,"")}function ei(e,t,n){if(t=Gu(t),Gu(e)!==t&&n)throw Error(k(425))}function Ai(){}var Rl=null,Ol=null;function Dl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ml=typeof setTimeout=="function"?setTimeout:void 0,h0=typeof clearTimeout=="function"?clearTimeout:void 0,Yu=typeof Promise=="function"?Promise:void 0,m0=typeof queueMicrotask=="function"?queueMicrotask:typeof Yu<"u"?function(e){return Yu.resolve(null).then(e).catch(g0)}:Ml;function g0(e){setTimeout(function(){throw e})}function Yo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Sr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Sr(t)}function Et(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ku(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Wn=Math.random().toString(36).slice(2),Je="__reactFiber$"+Wn,$r="__reactProps$"+Wn,ut="__reactContainer$"+Wn,Al="__reactEvents$"+Wn,y0="__reactListeners$"+Wn,v0="__reactHandles$"+Wn;function Ht(e){var t=e[Je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ut]||n[Je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ku(e);e!==null;){if(n=e[Je])return n;e=Ku(e)}return t}e=n,n=e.parentNode}return null}function Fr(e){return e=e[Je]||e[ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function hn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function fo(e){return e[$r]||null}var Fl=[],mn=-1;function Rt(e){return{current:e}}function V(e){0>mn||(e.current=Fl[mn],Fl[mn]=null,mn--)}function U(e,t){mn++,Fl[mn]=e.current,e.current=t}var Tt={},fe=Rt(Tt),ve=Rt(!1),Zt=Tt;function Pn(e,t){var n=e.type.contextTypes;if(!n)return Tt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function xe(e){return e=e.childContextTypes,e!=null}function Fi(){V(ve),V(fe)}function Xu(e,t,n){if(fe.current!==Tt)throw Error(k(168));U(fe,t),U(ve,n)}function Yc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,np(e)||"Unknown",i));return K({},n,r)}function Bi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tt,Zt=fe.current,U(fe,e),U(ve,ve.current),!0}function Zu(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Yc(e,t,Zt),r.__reactInternalMemoizedMergedChildContext=e,V(ve),V(fe),U(fe,e)):V(ve),U(ve,n)}var rt=null,po=!1,Ko=!1;function Kc(e){rt===null?rt=[e]:rt.push(e)}function x0(e){po=!0,Kc(e)}function Ot(){if(!Ko&&rt!==null){Ko=!0;var e=0,t=M;try{var n=rt;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}rt=null,po=!1}catch(i){throw rt!==null&&(rt=rt.slice(e+1)),xc(Cs,Ot),i}finally{M=t,Ko=!1}}return null}var gn=[],yn=0,Ui=null,Wi=0,Ne=[],Te=0,Jt=null,it=1,ot="";function Ut(e,t){gn[yn++]=Wi,gn[yn++]=Ui,Ui=e,Wi=t}function Xc(e,t,n){Ne[Te++]=it,Ne[Te++]=ot,Ne[Te++]=Jt,Jt=e;var r=it;e=ot;var i=32-Ve(r)-1;r&=~(1<<i),n+=1;var o=32-Ve(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,it=1<<32-Ve(t)+i|n<<i|r,ot=o+e}else it=1<<o|n<<i|r,ot=e}function Is(e){e.return!==null&&(Ut(e,1),Xc(e,1,0))}function Rs(e){for(;e===Ui;)Ui=gn[--yn],gn[yn]=null,Wi=gn[--yn],gn[yn]=null;for(;e===Jt;)Jt=Ne[--Te],Ne[Te]=null,ot=Ne[--Te],Ne[Te]=null,it=Ne[--Te],Ne[Te]=null}var $e=null,_e=null,Q=!1,He=null;function Zc(e,t){var n=Re(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ju(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,_e=Et(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,_e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jt!==null?{id:it,overflow:ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Re(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,_e=null,!0):!1;default:return!1}}function Bl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ul(e){if(Q){var t=_e;if(t){var n=t;if(!Ju(e,t)){if(Bl(e))throw Error(k(418));t=Et(n.nextSibling);var r=$e;t&&Ju(e,t)?Zc(r,n):(e.flags=e.flags&-4097|2,Q=!1,$e=e)}}else{if(Bl(e))throw Error(k(418));e.flags=e.flags&-4097|2,Q=!1,$e=e}}}function bu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function ti(e){if(e!==$e)return!1;if(!Q)return bu(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Dl(e.type,e.memoizedProps)),t&&(t=_e)){if(Bl(e))throw Jc(),Error(k(418));for(;t;)Zc(e,t),t=Et(t.nextSibling)}if(bu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_e=Et(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_e=null}}else _e=$e?Et(e.stateNode.nextSibling):null;return!0}function Jc(){for(var e=_e;e;)e=Et(e.nextSibling)}function Ln(){_e=$e=null,Q=!1}function Os(e){He===null?He=[e]:He.push(e)}var w0=ft.ReactCurrentBatchConfig;function Jn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function ni(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qu(e){var t=e._init;return t(e._payload)}function bc(e){function t(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=Pt(d,c),d.index=0,d.sibling=null,d}function o(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,c,p,y){return c===null||c.tag!==6?(c=tl(p,d.mode,y),c.return=d,c):(c=i(c,p),c.return=d,c)}function u(d,c,p,y){var C=p.type;return C===cn?g(d,c,p.props.children,y,p.key):c!==null&&(c.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===gt&&qu(C)===c.type)?(y=i(c,p.props),y.ref=Jn(d,c,p),y.return=d,y):(y=Ci(p.type,p.key,p.props,null,d.mode,y),y.ref=Jn(d,c,p),y.return=d,y)}function f(d,c,p,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=nl(p,d.mode,y),c.return=d,c):(c=i(c,p.children||[]),c.return=d,c)}function g(d,c,p,y,C){return c===null||c.tag!==7?(c=Kt(p,d.mode,y,C),c.return=d,c):(c=i(c,p),c.return=d,c)}function m(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=tl(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Qr:return p=Ci(c.type,c.key,c.props,null,d.mode,p),p.ref=Jn(d,null,c),p.return=d,p;case an:return c=nl(c,d.mode,p),c.return=d,c;case gt:var y=c._init;return m(d,y(c._payload),p)}if(rr(c)||Gn(c))return c=Kt(c,d.mode,p,null),c.return=d,c;ni(d,c)}return null}function h(d,c,p,y){var C=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:s(d,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Qr:return p.key===C?u(d,c,p,y):null;case an:return p.key===C?f(d,c,p,y):null;case gt:return C=p._init,h(d,c,C(p._payload),y)}if(rr(p)||Gn(p))return C!==null?null:g(d,c,p,y,null);ni(d,p)}return null}function v(d,c,p,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(p)||null,s(c,d,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Qr:return d=d.get(y.key===null?p:y.key)||null,u(c,d,y,C);case an:return d=d.get(y.key===null?p:y.key)||null,f(c,d,y,C);case gt:var j=y._init;return v(d,c,p,j(y._payload),C)}if(rr(y)||Gn(y))return d=d.get(p)||null,g(c,d,y,C,null);ni(c,y)}return null}function x(d,c,p,y){for(var C=null,j=null,w=c,z=c=0,B=null;w!==null&&z<p.length;z++){w.index>z?(B=w,w=null):B=w.sibling;var I=h(d,w,p[z],y);if(I===null){w===null&&(w=B);break}e&&w&&I.alternate===null&&t(d,w),c=o(I,c,z),j===null?C=I:j.sibling=I,j=I,w=B}if(z===p.length)return n(d,w),Q&&Ut(d,z),C;if(w===null){for(;z<p.length;z++)w=m(d,p[z],y),w!==null&&(c=o(w,c,z),j===null?C=w:j.sibling=w,j=w);return Q&&Ut(d,z),C}for(w=r(d,w);z<p.length;z++)B=v(w,d,z,p[z],y),B!==null&&(e&&B.alternate!==null&&w.delete(B.key===null?z:B.key),c=o(B,c,z),j===null?C=B:j.sibling=B,j=B);return e&&w.forEach(function(ke){return t(d,ke)}),Q&&Ut(d,z),C}function S(d,c,p,y){var C=Gn(p);if(typeof C!="function")throw Error(k(150));if(p=C.call(p),p==null)throw Error(k(151));for(var j=C=null,w=c,z=c=0,B=null,I=p.next();w!==null&&!I.done;z++,I=p.next()){w.index>z?(B=w,w=null):B=w.sibling;var ke=h(d,w,I.value,y);if(ke===null){w===null&&(w=B);break}e&&w&&ke.alternate===null&&t(d,w),c=o(ke,c,z),j===null?C=ke:j.sibling=ke,j=ke,w=B}if(I.done)return n(d,w),Q&&Ut(d,z),C;if(w===null){for(;!I.done;z++,I=p.next())I=m(d,I.value,y),I!==null&&(c=o(I,c,z),j===null?C=I:j.sibling=I,j=I);return Q&&Ut(d,z),C}for(w=r(d,w);!I.done;z++,I=p.next())I=v(w,d,z,I.value,y),I!==null&&(e&&I.alternate!==null&&w.delete(I.key===null?z:I.key),c=o(I,c,z),j===null?C=I:j.sibling=I,j=I);return e&&w.forEach(function(Dt){return t(d,Dt)}),Q&&Ut(d,z),C}function T(d,c,p,y){if(typeof p=="object"&&p!==null&&p.type===cn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Qr:e:{for(var C=p.key,j=c;j!==null;){if(j.key===C){if(C=p.type,C===cn){if(j.tag===7){n(d,j.sibling),c=i(j,p.props.children),c.return=d,d=c;break e}}else if(j.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===gt&&qu(C)===j.type){n(d,j.sibling),c=i(j,p.props),c.ref=Jn(d,j,p),c.return=d,d=c;break e}n(d,j);break}else t(d,j);j=j.sibling}p.type===cn?(c=Kt(p.props.children,d.mode,y,p.key),c.return=d,d=c):(y=Ci(p.type,p.key,p.props,null,d.mode,y),y.ref=Jn(d,c,p),y.return=d,d=y)}return l(d);case an:e:{for(j=p.key;c!==null;){if(c.key===j)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(d,c.sibling),c=i(c,p.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=nl(p,d.mode,y),c.return=d,d=c}return l(d);case gt:return j=p._init,T(d,c,j(p._payload),y)}if(rr(p))return x(d,c,p,y);if(Gn(p))return S(d,c,p,y);ni(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(d,c.sibling),c=i(c,p),c.return=d,d=c):(n(d,c),c=tl(p,d.mode,y),c.return=d,d=c),l(d)):n(d,c)}return T}var Nn=bc(!0),qc=bc(!1),Hi=Rt(null),Vi=null,vn=null,Ds=null;function Ms(){Ds=vn=Vi=null}function As(e){var t=Hi.current;V(Hi),e._currentValue=t}function Wl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _n(e,t){Vi=e,Ds=vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(Ds!==e)if(e={context:e,memoizedValue:t,next:null},vn===null){if(Vi===null)throw Error(k(308));vn=e,Vi.dependencies={lanes:0,firstContext:e}}else vn=vn.next=e;return t}var Vt=null;function Fs(e){Vt===null?Vt=[e]:Vt.push(e)}function ef(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Fs(t)):(n.next=i.next,i.next=n),t.interleaved=n,at(e,r)}function at(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var yt=!1;function Bs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _t(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,at(e,n)}return i=r.interleaved,i===null?(t.next=t,Fs(r)):(t.next=i.next,i.next=t),r.interleaved=t,at(e,n)}function vi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Es(e,n)}}function ea(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qi(e,t,n,r){var i=e.updateQueue;yt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,f=u.next;u.next=null,l===null?o=f:l.next=f,l=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==l&&(s===null?g.firstBaseUpdate=f:s.next=f,g.lastBaseUpdate=u))}if(o!==null){var m=i.baseState;l=0,g=f=u=null,s=o;do{var h=s.lane,v=s.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,S=s;switch(h=t,v=n,S.tag){case 1:if(x=S.payload,typeof x=="function"){m=x.call(v,m,h);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,h=typeof x=="function"?x.call(v,m,h):x,h==null)break e;m=K({},m,h);break e;case 2:yt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else v={eventTime:v,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(f=g=v,u=m):g=g.next=v,l|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(g===null&&(u=m),i.baseState=u,i.firstBaseUpdate=f,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);qt|=l,e.lanes=l,e.memoizedState=m}}function ta(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Br={},qe=Rt(Br),zr=Rt(Br),Pr=Rt(Br);function Qt(e){if(e===Br)throw Error(k(174));return e}function Us(e,t){switch(U(Pr,t),U(zr,e),U(qe,Br),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Sl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Sl(t,e)}V(qe),U(qe,t)}function Tn(){V(qe),V(zr),V(Pr)}function nf(e){Qt(Pr.current);var t=Qt(qe.current),n=Sl(t,e.type);t!==n&&(U(zr,e),U(qe,n))}function Ws(e){zr.current===e&&(V(qe),V(zr))}var G=Rt(0);function Gi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xo=[];function Hs(){for(var e=0;e<Xo.length;e++)Xo[e]._workInProgressVersionPrimary=null;Xo.length=0}var xi=ft.ReactCurrentDispatcher,Zo=ft.ReactCurrentBatchConfig,bt=0,Y=null,q=null,te=null,Yi=!1,dr=!1,Lr=0,k0=0;function ue(){throw Error(k(321))}function Vs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ye(e[n],t[n]))return!1;return!0}function Qs(e,t,n,r,i,o){if(bt=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xi.current=e===null||e.memoizedState===null?E0:_0,e=n(r,i),dr){o=0;do{if(dr=!1,Lr=0,25<=o)throw Error(k(301));o+=1,te=q=null,t.updateQueue=null,xi.current=$0,e=n(r,i)}while(dr)}if(xi.current=Ki,t=q!==null&&q.next!==null,bt=0,te=q=Y=null,Yi=!1,t)throw Error(k(300));return e}function Gs(){var e=Lr!==0;return Lr=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?Y.memoizedState=te=e:te=te.next=e,te}function Me(){if(q===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=q.next;var t=te===null?Y.memoizedState:te.next;if(t!==null)te=t,q=e;else{if(e===null)throw Error(k(310));q=e,e={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},te===null?Y.memoizedState=te=e:te=te.next=e}return te}function Nr(e,t){return typeof t=="function"?t(e):t}function Jo(e){var t=Me(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=q,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,u=null,f=o;do{var g=f.lane;if((bt&g)===g)u!==null&&(u=u.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var m={lane:g,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};u===null?(s=u=m,l=r):u=u.next=m,Y.lanes|=g,qt|=g}f=f.next}while(f!==null&&f!==o);u===null?l=r:u.next=s,Ye(r,t.memoizedState)||(ye=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Y.lanes|=o,qt|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function bo(e){var t=Me(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ye(o,t.memoizedState)||(ye=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function rf(){}function of(e,t){var n=Y,r=Me(),i=t(),o=!Ye(r.memoizedState,i);if(o&&(r.memoizedState=i,ye=!0),r=r.queue,Ys(uf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,Tr(9,sf.bind(null,n,r,i,t),void 0,null),ie===null)throw Error(k(349));bt&30||lf(n,t,i)}return i}function lf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sf(e,t,n,r){t.value=n,t.getSnapshot=r,af(t)&&cf(e)}function uf(e,t,n){return n(function(){af(t)&&cf(e)})}function af(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ye(e,n)}catch{return!0}}function cf(e){var t=at(e,1);t!==null&&Qe(t,e,1,-1)}function na(e){var t=Xe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Nr,lastRenderedState:e},t.queue=e,e=e.dispatch=C0.bind(null,Y,e),[t.memoizedState,e]}function Tr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ff(){return Me().memoizedState}function wi(e,t,n,r){var i=Xe();Y.flags|=e,i.memoizedState=Tr(1|t,n,void 0,r===void 0?null:r)}function ho(e,t,n,r){var i=Me();r=r===void 0?null:r;var o=void 0;if(q!==null){var l=q.memoizedState;if(o=l.destroy,r!==null&&Vs(r,l.deps)){i.memoizedState=Tr(t,n,o,r);return}}Y.flags|=e,i.memoizedState=Tr(1|t,n,o,r)}function ra(e,t){return wi(8390656,8,e,t)}function Ys(e,t){return ho(2048,8,e,t)}function df(e,t){return ho(4,2,e,t)}function pf(e,t){return ho(4,4,e,t)}function hf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mf(e,t,n){return n=n!=null?n.concat([e]):null,ho(4,4,hf.bind(null,t,e),n)}function Ks(){}function gf(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function yf(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function vf(e,t,n){return bt&21?(Ye(n,t)||(n=Sc(),Y.lanes|=n,qt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=n)}function S0(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=Zo.transition;Zo.transition={};try{e(!1),t()}finally{M=n,Zo.transition=r}}function xf(){return Me().memoizedState}function j0(e,t,n){var r=zt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wf(e))kf(t,n);else if(n=ef(e,t,n,r),n!==null){var i=pe();Qe(n,e,r,i),Sf(n,t,r)}}function C0(e,t,n){var r=zt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wf(e))kf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,Ye(s,l)){var u=t.interleaved;u===null?(i.next=i,Fs(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=ef(e,t,i,r),n!==null&&(i=pe(),Qe(n,e,r,i),Sf(n,t,r))}}function wf(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function kf(e,t){dr=Yi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Sf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Es(e,n)}}var Ki={readContext:De,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},E0={readContext:De,useCallback:function(e,t){return Xe().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:ra,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wi(4194308,4,hf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wi(4194308,4,e,t)},useInsertionEffect:function(e,t){return wi(4,2,e,t)},useMemo:function(e,t){var n=Xe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=j0.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Xe();return e={current:e},t.memoizedState=e},useState:na,useDebugValue:Ks,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=na(!1),t=e[0];return e=S0.bind(null,e[1]),Xe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=Xe();if(Q){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ie===null)throw Error(k(349));bt&30||lf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ra(uf.bind(null,r,o,e),[e]),r.flags|=2048,Tr(9,sf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Xe(),t=ie.identifierPrefix;if(Q){var n=ot,r=it;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Lr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=k0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_0={readContext:De,useCallback:gf,useContext:De,useEffect:Ys,useImperativeHandle:mf,useInsertionEffect:df,useLayoutEffect:pf,useMemo:yf,useReducer:Jo,useRef:ff,useState:function(){return Jo(Nr)},useDebugValue:Ks,useDeferredValue:function(e){var t=Me();return vf(t,q.memoizedState,e)},useTransition:function(){var e=Jo(Nr)[0],t=Me().memoizedState;return[e,t]},useMutableSource:rf,useSyncExternalStore:of,useId:xf,unstable_isNewReconciler:!1},$0={readContext:De,useCallback:gf,useContext:De,useEffect:Ys,useImperativeHandle:mf,useInsertionEffect:df,useLayoutEffect:pf,useMemo:yf,useReducer:bo,useRef:ff,useState:function(){return bo(Nr)},useDebugValue:Ks,useDeferredValue:function(e){var t=Me();return q===null?t.memoizedState=e:vf(t,q.memoizedState,e)},useTransition:function(){var e=bo(Nr)[0],t=Me().memoizedState;return[e,t]},useMutableSource:rf,useSyncExternalStore:of,useId:xf,unstable_isNewReconciler:!1};function Ue(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Hl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var mo={isMounted:function(e){return(e=e._reactInternals)?on(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),i=zt(e),o=lt(r,i);o.payload=t,n!=null&&(o.callback=n),t=_t(e,o,i),t!==null&&(Qe(t,e,i,r),vi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),i=zt(e),o=lt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=_t(e,o,i),t!==null&&(Qe(t,e,i,r),vi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=zt(e),i=lt(n,r);i.tag=2,t!=null&&(i.callback=t),t=_t(e,i,r),t!==null&&(Qe(t,e,r,n),vi(t,e,r))}};function ia(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(i,o):!0}function jf(e,t,n){var r=!1,i=Tt,o=t.contextType;return typeof o=="object"&&o!==null?o=De(o):(i=xe(t)?Zt:fe.current,r=t.contextTypes,o=(r=r!=null)?Pn(e,i):Tt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=mo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function oa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&mo.enqueueReplaceState(t,t.state,null)}function Vl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Bs(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=De(o):(o=xe(t)?Zt:fe.current,i.context=Pn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Hl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&mo.enqueueReplaceState(i,i.state,null),Qi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function In(e,t){try{var n="",r=t;do n+=tp(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function qo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ql(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var z0=typeof WeakMap=="function"?WeakMap:Map;function Cf(e,t,n){n=lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zi||(Zi=!0,ts=r),Ql(e,t)},n}function Ef(e,t,n){n=lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ql(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ql(e,t),typeof r!="function"&&($t===null?$t=new Set([this]):$t.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function la(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new z0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=W0.bind(null,e,t,n),t.then(e,e))}function sa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ua(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=lt(-1,1),t.tag=2,_t(n,t,1))),n.lanes|=1),e)}var P0=ft.ReactCurrentOwner,ye=!1;function de(e,t,n,r){t.child=e===null?qc(t,null,n,r):Nn(t,e.child,n,r)}function aa(e,t,n,r,i){n=n.render;var o=t.ref;return _n(t,i),r=Qs(e,t,n,r,o,i),n=Gs(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ct(e,t,i)):(Q&&n&&Is(t),t.flags|=1,de(e,t,r,i),t.child)}function ca(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!nu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,_f(e,t,o,r,i)):(e=Ci(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Cr,n(l,r)&&e.ref===t.ref)return ct(e,t,i)}return t.flags|=1,e=Pt(o,r),e.ref=t.ref,e.return=t,t.child=e}function _f(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Cr(o,r)&&e.ref===t.ref)if(ye=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,ct(e,t,i)}return Gl(e,t,n,r,i)}function $f(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(wn,Ce),Ce|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(wn,Ce),Ce|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,U(wn,Ce),Ce|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,U(wn,Ce),Ce|=r;return de(e,t,i,n),t.child}function zf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Gl(e,t,n,r,i){var o=xe(n)?Zt:fe.current;return o=Pn(t,o),_n(t,i),n=Qs(e,t,n,r,o,i),r=Gs(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ct(e,t,i)):(Q&&r&&Is(t),t.flags|=1,de(e,t,n,i),t.child)}function fa(e,t,n,r,i){if(xe(n)){var o=!0;Bi(t)}else o=!1;if(_n(t,i),t.stateNode===null)ki(e,t),jf(t,n,r),Vl(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,f=n.contextType;typeof f=="object"&&f!==null?f=De(f):(f=xe(n)?Zt:fe.current,f=Pn(t,f));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==f)&&oa(t,l,r,f),yt=!1;var h=t.memoizedState;l.state=h,Qi(t,r,l,i),u=t.memoizedState,s!==r||h!==u||ve.current||yt?(typeof g=="function"&&(Hl(t,n,g,r),u=t.memoizedState),(s=yt||ia(t,n,s,r,h,u,f))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=f,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,tf(e,t),s=t.memoizedProps,f=t.type===t.elementType?s:Ue(t.type,s),l.props=f,m=t.pendingProps,h=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=De(u):(u=xe(n)?Zt:fe.current,u=Pn(t,u));var v=n.getDerivedStateFromProps;(g=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||h!==u)&&oa(t,l,r,u),yt=!1,h=t.memoizedState,l.state=h,Qi(t,r,l,i);var x=t.memoizedState;s!==m||h!==x||ve.current||yt?(typeof v=="function"&&(Hl(t,n,v,r),x=t.memoizedState),(f=yt||ia(t,n,f,r,h,x,u)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=u,r=f):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Yl(e,t,n,r,o,i)}function Yl(e,t,n,r,i,o){zf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Zu(t,n,!1),ct(e,t,o);r=t.stateNode,P0.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Nn(t,e.child,null,o),t.child=Nn(t,null,s,o)):de(e,t,s,o),t.memoizedState=r.state,i&&Zu(t,n,!0),t.child}function Pf(e){var t=e.stateNode;t.pendingContext?Xu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xu(e,t.context,!1),Us(e,t.containerInfo)}function da(e,t,n,r,i){return Ln(),Os(i),t.flags|=256,de(e,t,n,r),t.child}var Kl={dehydrated:null,treeContext:null,retryLane:0};function Xl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lf(e,t,n){var r=t.pendingProps,i=G.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),U(G,i&1),e===null)return Ul(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=vo(l,r,0,null),e=Kt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Xl(n),t.memoizedState=Kl,e):Xs(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return L0(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Pt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Pt(s,o):(o=Kt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Xl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Kl,r}return o=e.child,e=o.sibling,r=Pt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xs(e,t){return t=vo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ri(e,t,n,r){return r!==null&&Os(r),Nn(t,e.child,null,n),e=Xs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function L0(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=qo(Error(k(422))),ri(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=vo({mode:"visible",children:r.children},i,0,null),o=Kt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Nn(t,e.child,null,l),t.child.memoizedState=Xl(l),t.memoizedState=Kl,o);if(!(t.mode&1))return ri(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(k(419)),r=qo(o,r,void 0),ri(e,t,l,r)}if(s=(l&e.childLanes)!==0,ye||s){if(r=ie,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,at(e,i),Qe(r,e,i,-1))}return tu(),r=qo(Error(k(421))),ri(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=H0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,_e=Et(i.nextSibling),$e=t,Q=!0,He=null,e!==null&&(Ne[Te++]=it,Ne[Te++]=ot,Ne[Te++]=Jt,it=e.id,ot=e.overflow,Jt=t),t=Xs(t,r.children),t.flags|=4096,t)}function pa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Wl(e.return,t,n)}function el(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Nf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(de(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pa(e,n,t);else if(e.tag===19)pa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(G,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Gi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),el(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Gi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}el(t,!0,n,null,o);break;case"together":el(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ki(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function N0(e,t,n){switch(t.tag){case 3:Pf(t),Ln();break;case 5:nf(t);break;case 1:xe(t.type)&&Bi(t);break;case 4:Us(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;U(Hi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?Lf(e,t,n):(U(G,G.current&1),e=ct(e,t,n),e!==null?e.sibling:null);U(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Nf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,$f(e,t,n)}return ct(e,t,n)}var Tf,Zl,If,Rf;Tf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zl=function(){};If=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Qt(qe.current);var o=null;switch(n){case"input":i=vl(e,i),r=vl(e,r),o=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),o=[];break;case"textarea":i=kl(e,i),r=kl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ai)}jl(n,r);var l;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var s=i[f];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(yr.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var u=r[f];if(s=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&u!==s&&(u!=null||s!=null))if(f==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(f,n)),n=u;else f==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(f,u)):f==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(f,""+u):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(yr.hasOwnProperty(f)?(u!=null&&f==="onScroll"&&W("scroll",e),o||s===u||(o=[])):(o=o||[]).push(f,u))}n&&(o=o||[]).push("style",n);var f=o;(t.updateQueue=f)&&(t.flags|=4)}};Rf=function(e,t,n,r){n!==r&&(t.flags|=4)};function bn(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function T0(e,t,n){var r=t.pendingProps;switch(Rs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return xe(t.type)&&Fi(),ae(t),null;case 3:return r=t.stateNode,Tn(),V(ve),V(fe),Hs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ti(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,He!==null&&(is(He),He=null))),Zl(e,t),ae(t),null;case 5:Ws(t);var i=Qt(Pr.current);if(n=t.type,e!==null&&t.stateNode!=null)If(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ae(t),null}if(e=Qt(qe.current),ti(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Je]=t,r[$r]=o,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<or.length;i++)W(or[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":Su(r,o),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},W("invalid",r);break;case"textarea":Cu(r,o),W("invalid",r)}jl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&ei(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&ei(r.textContent,s,e),i=["children",""+s]):yr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&W("scroll",r)}switch(n){case"input":Gr(r),ju(r,o,!0);break;case"textarea":Gr(r),Eu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ai)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Je]=t,e[$r]=r,Tf(e,t,!1,!1),t.stateNode=e;e:{switch(l=Cl(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<or.length;i++)W(or[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":Su(e,r),i=vl(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),W("invalid",e);break;case"textarea":Cu(e,r),i=kl(e,r),W("invalid",e);break;default:i=r}jl(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?cc(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&uc(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&vr(e,u):typeof u=="number"&&vr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(yr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&W("scroll",e):u!=null&&xs(e,o,u,l))}switch(n){case"input":Gr(e),ju(e,r,!1);break;case"textarea":Gr(e),Eu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Sn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ai)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)Rf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Qt(Pr.current),Qt(qe.current),ti(t)){if(r=t.stateNode,n=t.memoizedProps,r[Je]=t,(o=r.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:ei(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ei(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Je]=t,t.stateNode=r}return ae(t),null;case 13:if(V(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&_e!==null&&t.mode&1&&!(t.flags&128))Jc(),Ln(),t.flags|=98560,o=!1;else if(o=ti(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[Je]=t}else Ln(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),o=!1}else He!==null&&(is(He),He=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?ee===0&&(ee=3):tu())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return Tn(),Zl(e,t),e===null&&Er(t.stateNode.containerInfo),ae(t),null;case 10:return As(t.type._context),ae(t),null;case 17:return xe(t.type)&&Fi(),ae(t),null;case 19:if(V(G),o=t.memoizedState,o===null)return ae(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)bn(o,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Gi(e),l!==null){for(t.flags|=128,bn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(G,G.current&1|2),t.child}e=e.sibling}o.tail!==null&&Z()>Rn&&(t.flags|=128,r=!0,bn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Gi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),bn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Q)return ae(t),null}else 2*Z()-o.renderingStartTime>Rn&&n!==1073741824&&(t.flags|=128,r=!0,bn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Z(),t.sibling=null,n=G.current,U(G,r?n&1|2:n&1),t):(ae(t),null);case 22:case 23:return eu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ce&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function I0(e,t){switch(Rs(t),t.tag){case 1:return xe(t.type)&&Fi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tn(),V(ve),V(fe),Hs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ws(t),null;case 13:if(V(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Ln()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(G),null;case 4:return Tn(),null;case 10:return As(t.type._context),null;case 22:case 23:return eu(),null;case 24:return null;default:return null}}var ii=!1,ce=!1,R0=typeof WeakSet=="function"?WeakSet:Set,_=null;function xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function Jl(e,t,n){try{n()}catch(r){X(e,t,r)}}var ha=!1;function O0(e,t){if(Rl=Oi,e=Ac(),Ts(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,f=0,g=0,m=e,h=null;t:for(;;){for(var v;m!==n||i!==0&&m.nodeType!==3||(s=l+i),m!==o||r!==0&&m.nodeType!==3||(u=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(v=m.firstChild)!==null;)h=m,m=v;for(;;){if(m===e)break t;if(h===n&&++f===i&&(s=l),h===o&&++g===r&&(u=l),(v=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=v}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ol={focusedElem:e,selectionRange:n},Oi=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var S=x.memoizedProps,T=x.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?S:Ue(t.type,S),T);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){X(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return x=ha,ha=!1,x}function pr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Jl(t,n,o)}i=i.next}while(i!==r)}}function go(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function bl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Of(e){var t=e.alternate;t!==null&&(e.alternate=null,Of(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Je],delete t[$r],delete t[Al],delete t[y0],delete t[v0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Df(e){return e.tag===5||e.tag===3||e.tag===4}function ma(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Df(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ql(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ai));else if(r!==4&&(e=e.child,e!==null))for(ql(e,t,n),e=e.sibling;e!==null;)ql(e,t,n),e=e.sibling}function es(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(es(e,t,n),e=e.sibling;e!==null;)es(e,t,n),e=e.sibling}var oe=null,We=!1;function ht(e,t,n){for(n=n.child;n!==null;)Mf(e,t,n),n=n.sibling}function Mf(e,t,n){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(so,n)}catch{}switch(n.tag){case 5:ce||xn(n,t);case 6:var r=oe,i=We;oe=null,ht(e,t,n),oe=r,We=i,oe!==null&&(We?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(We?(e=oe,n=n.stateNode,e.nodeType===8?Yo(e.parentNode,n):e.nodeType===1&&Yo(e,n),Sr(e)):Yo(oe,n.stateNode));break;case 4:r=oe,i=We,oe=n.stateNode.containerInfo,We=!0,ht(e,t,n),oe=r,We=i;break;case 0:case 11:case 14:case 15:if(!ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Jl(n,t,l),i=i.next}while(i!==r)}ht(e,t,n);break;case 1:if(!ce&&(xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){X(n,t,s)}ht(e,t,n);break;case 21:ht(e,t,n);break;case 22:n.mode&1?(ce=(r=ce)||n.memoizedState!==null,ht(e,t,n),ce=r):ht(e,t,n);break;default:ht(e,t,n)}}function ga(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new R0),t.forEach(function(r){var i=V0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:oe=s.stateNode,We=!1;break e;case 3:oe=s.stateNode.containerInfo,We=!0;break e;case 4:oe=s.stateNode.containerInfo,We=!0;break e}s=s.return}if(oe===null)throw Error(k(160));Mf(o,l,i),oe=null,We=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(f){X(i,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Af(t,e),t=t.sibling}function Af(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(t,e),Ke(e),r&4){try{pr(3,e,e.return),go(3,e)}catch(S){X(e,e.return,S)}try{pr(5,e,e.return)}catch(S){X(e,e.return,S)}}break;case 1:Be(t,e),Ke(e),r&512&&n!==null&&xn(n,n.return);break;case 5:if(Be(t,e),Ke(e),r&512&&n!==null&&xn(n,n.return),e.flags&32){var i=e.stateNode;try{vr(i,"")}catch(S){X(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&oc(i,o),Cl(s,l);var f=Cl(s,o);for(l=0;l<u.length;l+=2){var g=u[l],m=u[l+1];g==="style"?cc(i,m):g==="dangerouslySetInnerHTML"?uc(i,m):g==="children"?vr(i,m):xs(i,g,m,f)}switch(s){case"input":xl(i,o);break;case"textarea":lc(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Sn(i,!!o.multiple,v,!1):h!==!!o.multiple&&(o.defaultValue!=null?Sn(i,!!o.multiple,o.defaultValue,!0):Sn(i,!!o.multiple,o.multiple?[]:"",!1))}i[$r]=o}catch(S){X(e,e.return,S)}}break;case 6:if(Be(t,e),Ke(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(S){X(e,e.return,S)}}break;case 3:if(Be(t,e),Ke(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Sr(t.containerInfo)}catch(S){X(e,e.return,S)}break;case 4:Be(t,e),Ke(e);break;case 13:Be(t,e),Ke(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(bs=Z())),r&4&&ga(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ce=(f=ce)||g,Be(t,e),ce=f):Be(t,e),Ke(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!g&&e.mode&1)for(_=e,g=e.child;g!==null;){for(m=_=g;_!==null;){switch(h=_,v=h.child,h.tag){case 0:case 11:case 14:case 15:pr(4,h,h.return);break;case 1:xn(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(S){X(r,n,S)}}break;case 5:xn(h,h.return);break;case 22:if(h.memoizedState!==null){va(m);continue}}v!==null?(v.return=h,_=v):va(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{i=m.stateNode,f?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=m.stateNode,u=m.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=ac("display",l))}catch(S){X(e,e.return,S)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=f?"":m.memoizedProps}catch(S){X(e,e.return,S)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Be(t,e),Ke(e),r&4&&ga(e);break;case 21:break;default:Be(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Df(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(vr(i,""),r.flags&=-33);var o=ma(e);es(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=ma(e);ql(e,s,l);break;default:throw Error(k(161))}}catch(u){X(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function D0(e,t,n){_=e,Ff(e)}function Ff(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var i=_,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||ii;if(!l){var s=i.alternate,u=s!==null&&s.memoizedState!==null||ce;s=ii;var f=ce;if(ii=l,(ce=u)&&!f)for(_=i;_!==null;)l=_,u=l.child,l.tag===22&&l.memoizedState!==null?xa(i):u!==null?(u.return=l,_=u):xa(i);for(;o!==null;)_=o,Ff(o),o=o.sibling;_=i,ii=s,ce=f}ya(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,_=o):ya(e)}}function ya(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ce||go(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ce)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ue(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ta(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ta(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var g=f.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&Sr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ce||t.flags&512&&bl(t)}catch(h){X(t,t.return,h)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function va(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function xa(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{go(4,t)}catch(u){X(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){X(t,i,u)}}var o=t.return;try{bl(t)}catch(u){X(t,o,u)}break;case 5:var l=t.return;try{bl(t)}catch(u){X(t,l,u)}}}catch(u){X(t,t.return,u)}if(t===e){_=null;break}var s=t.sibling;if(s!==null){s.return=t.return,_=s;break}_=t.return}}var M0=Math.ceil,Xi=ft.ReactCurrentDispatcher,Zs=ft.ReactCurrentOwner,Oe=ft.ReactCurrentBatchConfig,O=0,ie=null,b=null,le=0,Ce=0,wn=Rt(0),ee=0,Ir=null,qt=0,yo=0,Js=0,hr=null,ge=null,bs=0,Rn=1/0,tt=null,Zi=!1,ts=null,$t=null,oi=!1,kt=null,Ji=0,mr=0,ns=null,Si=-1,ji=0;function pe(){return O&6?Z():Si!==-1?Si:Si=Z()}function zt(e){return e.mode&1?O&2&&le!==0?le&-le:w0.transition!==null?(ji===0&&(ji=Sc()),ji):(e=M,e!==0||(e=window.event,e=e===void 0?16:Pc(e.type)),e):1}function Qe(e,t,n,r){if(50<mr)throw mr=0,ns=null,Error(k(185));Mr(e,n,r),(!(O&2)||e!==ie)&&(e===ie&&(!(O&2)&&(yo|=n),ee===4&&xt(e,le)),we(e,r),n===1&&O===0&&!(t.mode&1)&&(Rn=Z()+500,po&&Ot()))}function we(e,t){var n=e.callbackNode;wp(e,t);var r=Ri(e,e===ie?le:0);if(r===0)n!==null&&zu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&zu(n),t===1)e.tag===0?x0(wa.bind(null,e)):Kc(wa.bind(null,e)),m0(function(){!(O&6)&&Ot()}),n=null;else{switch(jc(r)){case 1:n=Cs;break;case 4:n=wc;break;case 16:n=Ii;break;case 536870912:n=kc;break;default:n=Ii}n=Yf(n,Bf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Bf(e,t){if(Si=-1,ji=0,O&6)throw Error(k(327));var n=e.callbackNode;if($n()&&e.callbackNode!==n)return null;var r=Ri(e,e===ie?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=bi(e,r);else{t=r;var i=O;O|=2;var o=Wf();(ie!==e||le!==t)&&(tt=null,Rn=Z()+500,Yt(e,t));do try{B0();break}catch(s){Uf(e,s)}while(!0);Ms(),Xi.current=o,O=i,b!==null?t=0:(ie=null,le=0,t=ee)}if(t!==0){if(t===2&&(i=Pl(e),i!==0&&(r=i,t=rs(e,i))),t===1)throw n=Ir,Yt(e,0),xt(e,r),we(e,Z()),n;if(t===6)xt(e,r);else{if(i=e.current.alternate,!(r&30)&&!A0(i)&&(t=bi(e,r),t===2&&(o=Pl(e),o!==0&&(r=o,t=rs(e,o))),t===1))throw n=Ir,Yt(e,0),xt(e,r),we(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Wt(e,ge,tt);break;case 3:if(xt(e,r),(r&130023424)===r&&(t=bs+500-Z(),10<t)){if(Ri(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ml(Wt.bind(null,e,ge,tt),t);break}Wt(e,ge,tt);break;case 4:if(xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ve(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*M0(r/1960))-r,10<r){e.timeoutHandle=Ml(Wt.bind(null,e,ge,tt),r);break}Wt(e,ge,tt);break;case 5:Wt(e,ge,tt);break;default:throw Error(k(329))}}}return we(e,Z()),e.callbackNode===n?Bf.bind(null,e):null}function rs(e,t){var n=hr;return e.current.memoizedState.isDehydrated&&(Yt(e,t).flags|=256),e=bi(e,t),e!==2&&(t=ge,ge=n,t!==null&&is(t)),e}function is(e){ge===null?ge=e:ge.push.apply(ge,e)}function A0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ye(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xt(e,t){for(t&=~Js,t&=~yo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ve(t),r=1<<n;e[n]=-1,t&=~r}}function wa(e){if(O&6)throw Error(k(327));$n();var t=Ri(e,0);if(!(t&1))return we(e,Z()),null;var n=bi(e,t);if(e.tag!==0&&n===2){var r=Pl(e);r!==0&&(t=r,n=rs(e,r))}if(n===1)throw n=Ir,Yt(e,0),xt(e,t),we(e,Z()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wt(e,ge,tt),we(e,Z()),null}function qs(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(Rn=Z()+500,po&&Ot())}}function en(e){kt!==null&&kt.tag===0&&!(O&6)&&$n();var t=O;O|=1;var n=Oe.transition,r=M;try{if(Oe.transition=null,M=1,e)return e()}finally{M=r,Oe.transition=n,O=t,!(O&6)&&Ot()}}function eu(){Ce=wn.current,V(wn)}function Yt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,h0(n)),b!==null)for(n=b.return;n!==null;){var r=n;switch(Rs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fi();break;case 3:Tn(),V(ve),V(fe),Hs();break;case 5:Ws(r);break;case 4:Tn();break;case 13:V(G);break;case 19:V(G);break;case 10:As(r.type._context);break;case 22:case 23:eu()}n=n.return}if(ie=e,b=e=Pt(e.current,null),le=Ce=t,ee=0,Ir=null,Js=yo=qt=0,ge=hr=null,Vt!==null){for(t=0;t<Vt.length;t++)if(n=Vt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Vt=null}return e}function Uf(e,t){do{var n=b;try{if(Ms(),xi.current=Ki,Yi){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Yi=!1}if(bt=0,te=q=Y=null,dr=!1,Lr=0,Zs.current=null,n===null||n.return===null){ee=1,Ir=t,b=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=le,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=u,g=s,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var v=sa(l);if(v!==null){v.flags&=-257,ua(v,l,s,o,t),v.mode&1&&la(o,f,t),t=v,u=f;var x=t.updateQueue;if(x===null){var S=new Set;S.add(u),t.updateQueue=S}else x.add(u);break e}else{if(!(t&1)){la(o,f,t),tu();break e}u=Error(k(426))}}else if(Q&&s.mode&1){var T=sa(l);if(T!==null){!(T.flags&65536)&&(T.flags|=256),ua(T,l,s,o,t),Os(In(u,s));break e}}o=u=In(u,s),ee!==4&&(ee=2),hr===null?hr=[o]:hr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=Cf(o,u,t);ea(o,d);break e;case 1:s=u;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&($t===null||!$t.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=Ef(o,s,t);ea(o,y);break e}}o=o.return}while(o!==null)}Vf(n)}catch(C){t=C,b===n&&n!==null&&(b=n=n.return);continue}break}while(!0)}function Wf(){var e=Xi.current;return Xi.current=Ki,e===null?Ki:e}function tu(){(ee===0||ee===3||ee===2)&&(ee=4),ie===null||!(qt&268435455)&&!(yo&268435455)||xt(ie,le)}function bi(e,t){var n=O;O|=2;var r=Wf();(ie!==e||le!==t)&&(tt=null,Yt(e,t));do try{F0();break}catch(i){Uf(e,i)}while(!0);if(Ms(),O=n,Xi.current=r,b!==null)throw Error(k(261));return ie=null,le=0,ee}function F0(){for(;b!==null;)Hf(b)}function B0(){for(;b!==null&&!fp();)Hf(b)}function Hf(e){var t=Gf(e.alternate,e,Ce);e.memoizedProps=e.pendingProps,t===null?Vf(e):b=t,Zs.current=null}function Vf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=I0(n,t),n!==null){n.flags&=32767,b=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,b=null;return}}else if(n=T0(n,t,Ce),n!==null){b=n;return}if(t=t.sibling,t!==null){b=t;return}b=t=e}while(t!==null);ee===0&&(ee=5)}function Wt(e,t,n){var r=M,i=Oe.transition;try{Oe.transition=null,M=1,U0(e,t,n,r)}finally{Oe.transition=i,M=r}return null}function U0(e,t,n,r){do $n();while(kt!==null);if(O&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(kp(e,o),e===ie&&(b=ie=null,le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||oi||(oi=!0,Yf(Ii,function(){return $n(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Oe.transition,Oe.transition=null;var l=M;M=1;var s=O;O|=4,Zs.current=null,O0(e,n),Af(n,e),s0(Ol),Oi=!!Rl,Ol=Rl=null,e.current=n,D0(n),dp(),O=s,M=l,Oe.transition=o}else e.current=n;if(oi&&(oi=!1,kt=e,Ji=i),o=e.pendingLanes,o===0&&($t=null),mp(n.stateNode),we(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Zi)throw Zi=!1,e=ts,ts=null,e;return Ji&1&&e.tag!==0&&$n(),o=e.pendingLanes,o&1?e===ns?mr++:(mr=0,ns=e):mr=0,Ot(),null}function $n(){if(kt!==null){var e=jc(Ji),t=Oe.transition,n=M;try{if(Oe.transition=null,M=16>e?16:e,kt===null)var r=!1;else{if(e=kt,kt=null,Ji=0,O&6)throw Error(k(331));var i=O;for(O|=4,_=e.current;_!==null;){var o=_,l=o.child;if(_.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var f=s[u];for(_=f;_!==null;){var g=_;switch(g.tag){case 0:case 11:case 15:pr(8,g,o)}var m=g.child;if(m!==null)m.return=g,_=m;else for(;_!==null;){g=_;var h=g.sibling,v=g.return;if(Of(g),g===f){_=null;break}if(h!==null){h.return=v,_=h;break}_=v}}}var x=o.alternate;if(x!==null){var S=x.child;if(S!==null){x.child=null;do{var T=S.sibling;S.sibling=null,S=T}while(S!==null)}}_=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,_=l;else e:for(;_!==null;){if(o=_,o.flags&2048)switch(o.tag){case 0:case 11:case 15:pr(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,_=d;break e}_=o.return}}var c=e.current;for(_=c;_!==null;){l=_;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,_=p;else e:for(l=c;_!==null;){if(s=_,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:go(9,s)}}catch(C){X(s,s.return,C)}if(s===l){_=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,_=y;break e}_=s.return}}if(O=i,Ot(),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(so,e)}catch{}r=!0}return r}finally{M=n,Oe.transition=t}}return!1}function ka(e,t,n){t=In(n,t),t=Cf(e,t,1),e=_t(e,t,1),t=pe(),e!==null&&(Mr(e,1,t),we(e,t))}function X(e,t,n){if(e.tag===3)ka(e,e,n);else for(;t!==null;){if(t.tag===3){ka(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($t===null||!$t.has(r))){e=In(n,e),e=Ef(t,e,1),t=_t(t,e,1),e=pe(),t!==null&&(Mr(t,1,e),we(t,e));break}}t=t.return}}function W0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(le&n)===n&&(ee===4||ee===3&&(le&130023424)===le&&500>Z()-bs?Yt(e,0):Js|=n),we(e,t)}function Qf(e,t){t===0&&(e.mode&1?(t=Xr,Xr<<=1,!(Xr&130023424)&&(Xr=4194304)):t=1);var n=pe();e=at(e,t),e!==null&&(Mr(e,t,n),we(e,n))}function H0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qf(e,n)}function V0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Qf(e,n)}var Gf;Gf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ye=!1,N0(e,t,n);ye=!!(e.flags&131072)}else ye=!1,Q&&t.flags&1048576&&Xc(t,Wi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ki(e,t),e=t.pendingProps;var i=Pn(t,fe.current);_n(t,n),i=Qs(null,t,r,e,i,n);var o=Gs();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(r)?(o=!0,Bi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bs(t),i.updater=mo,t.stateNode=i,i._reactInternals=t,Vl(t,r,e,n),t=Yl(null,t,r,!0,o,n)):(t.tag=0,Q&&o&&Is(t),de(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ki(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=G0(r),e=Ue(r,e),i){case 0:t=Gl(null,t,r,e,n);break e;case 1:t=fa(null,t,r,e,n);break e;case 11:t=aa(null,t,r,e,n);break e;case 14:t=ca(null,t,r,Ue(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),Gl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),fa(e,t,r,i,n);case 3:e:{if(Pf(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,tf(e,t),Qi(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=In(Error(k(423)),t),t=da(e,t,r,n,i);break e}else if(r!==i){i=In(Error(k(424)),t),t=da(e,t,r,n,i);break e}else for(_e=Et(t.stateNode.containerInfo.firstChild),$e=t,Q=!0,He=null,n=qc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ln(),r===i){t=ct(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return nf(t),e===null&&Ul(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Dl(r,i)?l=null:o!==null&&Dl(r,o)&&(t.flags|=32),zf(e,t),de(e,t,l,n),t.child;case 6:return e===null&&Ul(t),null;case 13:return Lf(e,t,n);case 4:return Us(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Nn(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),aa(e,t,r,i,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,U(Hi,r._currentValue),r._currentValue=l,o!==null)if(Ye(o.value,l)){if(o.children===i.children&&!ve.current){t=ct(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=lt(-1,n&-n),u.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var g=f.pending;g===null?u.next=u:(u.next=g.next,g.next=u),f.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Wl(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(k(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Wl(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}de(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,_n(t,n),i=De(i),r=r(i),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,i=Ue(r,t.pendingProps),i=Ue(r.type,i),ca(e,t,r,i,n);case 15:return _f(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),ki(e,t),t.tag=1,xe(r)?(e=!0,Bi(t)):e=!1,_n(t,n),jf(t,r,i),Vl(t,r,i,n),Yl(null,t,r,!0,e,n);case 19:return Nf(e,t,n);case 22:return $f(e,t,n)}throw Error(k(156,t.tag))};function Yf(e,t){return xc(e,t)}function Q0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,t,n,r){return new Q0(e,t,n,r)}function nu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function G0(e){if(typeof e=="function")return nu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ks)return 11;if(e===Ss)return 14}return 2}function Pt(e,t){var n=e.alternate;return n===null?(n=Re(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ci(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")nu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case cn:return Kt(n.children,i,o,t);case ws:l=8,i|=8;break;case hl:return e=Re(12,n,t,i|2),e.elementType=hl,e.lanes=o,e;case ml:return e=Re(13,n,t,i),e.elementType=ml,e.lanes=o,e;case gl:return e=Re(19,n,t,i),e.elementType=gl,e.lanes=o,e;case nc:return vo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ec:l=10;break e;case tc:l=9;break e;case ks:l=11;break e;case Ss:l=14;break e;case gt:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Re(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Kt(e,t,n,r){return e=Re(7,e,r,t),e.lanes=n,e}function vo(e,t,n,r){return e=Re(22,e,r,t),e.elementType=nc,e.lanes=n,e.stateNode={isHidden:!1},e}function tl(e,t,n){return e=Re(6,e,null,t),e.lanes=n,e}function nl(e,t,n){return t=Re(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Y0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Do(0),this.expirationTimes=Do(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Do(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ru(e,t,n,r,i,o,l,s,u){return e=new Y0(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Re(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bs(o),e}function K0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:an,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Kf(e){if(!e)return Tt;e=e._reactInternals;e:{if(on(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(xe(n))return Yc(e,n,t)}return t}function Xf(e,t,n,r,i,o,l,s,u){return e=ru(n,r,!0,e,i,o,l,s,u),e.context=Kf(null),n=e.current,r=pe(),i=zt(n),o=lt(r,i),o.callback=t??null,_t(n,o,i),e.current.lanes=i,Mr(e,i,r),we(e,r),e}function xo(e,t,n,r){var i=t.current,o=pe(),l=zt(i);return n=Kf(n),t.context===null?t.context=n:t.pendingContext=n,t=lt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_t(i,t,l),e!==null&&(Qe(e,i,l,o),vi(e,i,l)),l}function qi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sa(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function iu(e,t){Sa(e,t),(e=e.alternate)&&Sa(e,t)}function X0(){return null}var Zf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ou(e){this._internalRoot=e}wo.prototype.render=ou.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));xo(e,t,null,null)};wo.prototype.unmount=ou.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;en(function(){xo(null,e,null,null)}),t[ut]=null}};function wo(e){this._internalRoot=e}wo.prototype.unstable_scheduleHydration=function(e){if(e){var t=_c();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vt.length&&t!==0&&t<vt[n].priority;n++);vt.splice(n,0,e),n===0&&zc(e)}};function lu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ja(){}function Z0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var f=qi(l);o.call(f)}}var l=Xf(t,r,e,0,null,!1,!1,"",ja);return e._reactRootContainer=l,e[ut]=l.current,Er(e.nodeType===8?e.parentNode:e),en(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var f=qi(u);s.call(f)}}var u=ru(e,0,!1,null,null,!1,!1,"",ja);return e._reactRootContainer=u,e[ut]=u.current,Er(e.nodeType===8?e.parentNode:e),en(function(){xo(t,u,n,r)}),u}function So(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var u=qi(l);s.call(u)}}xo(t,l,e,i)}else l=Z0(n,t,e,i,r);return qi(l)}Cc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ir(t.pendingLanes);n!==0&&(Es(t,n|1),we(t,Z()),!(O&6)&&(Rn=Z()+500,Ot()))}break;case 13:en(function(){var r=at(e,1);if(r!==null){var i=pe();Qe(r,e,1,i)}}),iu(e,1)}};_s=function(e){if(e.tag===13){var t=at(e,134217728);if(t!==null){var n=pe();Qe(t,e,134217728,n)}iu(e,134217728)}};Ec=function(e){if(e.tag===13){var t=zt(e),n=at(e,t);if(n!==null){var r=pe();Qe(n,e,t,r)}iu(e,t)}};_c=function(){return M};$c=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};_l=function(e,t,n){switch(t){case"input":if(xl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=fo(r);if(!i)throw Error(k(90));ic(r),xl(r,i)}}}break;case"textarea":lc(e,n);break;case"select":t=n.value,t!=null&&Sn(e,!!n.multiple,t,!1)}};pc=qs;hc=en;var J0={usingClientEntryPoint:!1,Events:[Fr,hn,fo,fc,dc,qs]},qn={findFiberByHostInstance:Ht,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},b0={bundleType:qn.bundleType,version:qn.version,rendererPackageName:qn.rendererPackageName,rendererConfig:qn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yc(e),e===null?null:e.stateNode},findFiberByHostInstance:qn.findFiberByHostInstance||X0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!li.isDisabled&&li.supportsFiber)try{so=li.inject(b0),be=li}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J0;Pe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lu(t))throw Error(k(200));return K0(e,t,null,n)};Pe.createRoot=function(e,t){if(!lu(e))throw Error(k(299));var n=!1,r="",i=Zf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ru(e,1,!1,null,null,n,!1,r,i),e[ut]=t.current,Er(e.nodeType===8?e.parentNode:e),new ou(t)};Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=yc(t),e=e===null?null:e.stateNode,e};Pe.flushSync=function(e){return en(e)};Pe.hydrate=function(e,t,n){if(!ko(t))throw Error(k(200));return So(null,e,t,!0,n)};Pe.hydrateRoot=function(e,t,n){if(!lu(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Zf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Xf(t,null,e,1,n??null,i,!1,o,l),e[ut]=t.current,Er(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new wo(t)};Pe.render=function(e,t,n){if(!ko(t))throw Error(k(200));return So(null,e,t,!1,n)};Pe.unmountComponentAtNode=function(e){if(!ko(e))throw Error(k(40));return e._reactRootContainer?(en(function(){So(null,null,e,!1,function(){e._reactRootContainer=null,e[ut]=null})}),!0):!1};Pe.unstable_batchedUpdates=qs;Pe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ko(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return So(e,t,n,!1,r)};Pe.version="18.3.1-next-f1338f8080-20240426";function Jf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jf)}catch(e){console.error(e)}}Jf(),Za.exports=Pe;var q0=Za.exports,Ca=q0;dl.createRoot=Ca.createRoot,dl.hydrateRoot=Ca.hydrateRoot;var re=function(){return re=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},re.apply(this,arguments)};function On(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var H="-ms-",gr="-moz-",D="-webkit-",bf="comm",jo="rule",su="decl",eh="@import",qf="@keyframes",th="@layer",ed=Math.abs,uu=String.fromCharCode,os=Object.assign;function nh(e,t){return ne(e,0)^45?(((t<<2^ne(e,0))<<2^ne(e,1))<<2^ne(e,2))<<2^ne(e,3):0}function td(e){return e.trim()}function nt(e,t){return(e=t.exec(e))?e[0]:e}function N(e,t,n){return e.replace(t,n)}function Ei(e,t,n){return e.indexOf(t,n)}function ne(e,t){return e.charCodeAt(t)|0}function Dn(e,t,n){return e.slice(t,n)}function Ze(e){return e.length}function nd(e){return e.length}function lr(e,t){return t.push(e),e}function rh(e,t){return e.map(t).join("")}function Ea(e,t){return e.filter(function(n){return!nt(n,t)})}var Co=1,Mn=1,rd=0,Ae=0,J=0,Hn="";function Eo(e,t,n,r,i,o,l,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Co,column:Mn,length:l,return:"",siblings:s}}function mt(e,t){return os(Eo("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function un(e){for(;e.root;)e=mt(e.root,{children:[e]});lr(e,e.siblings)}function ih(){return J}function oh(){return J=Ae>0?ne(Hn,--Ae):0,Mn--,J===10&&(Mn=1,Co--),J}function Ge(){return J=Ae<rd?ne(Hn,Ae++):0,Mn++,J===10&&(Mn=1,Co++),J}function Xt(){return ne(Hn,Ae)}function _i(){return Ae}function _o(e,t){return Dn(Hn,e,t)}function ls(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function lh(e){return Co=Mn=1,rd=Ze(Hn=e),Ae=0,[]}function sh(e){return Hn="",e}function rl(e){return td(_o(Ae-1,ss(e===91?e+2:e===40?e+1:e)))}function uh(e){for(;(J=Xt())&&J<33;)Ge();return ls(e)>2||ls(J)>3?"":" "}function ah(e,t){for(;--t&&Ge()&&!(J<48||J>102||J>57&&J<65||J>70&&J<97););return _o(e,_i()+(t<6&&Xt()==32&&Ge()==32))}function ss(e){for(;Ge();)switch(J){case e:return Ae;case 34:case 39:e!==34&&e!==39&&ss(J);break;case 40:e===41&&ss(e);break;case 92:Ge();break}return Ae}function ch(e,t){for(;Ge()&&e+J!==57;)if(e+J===84&&Xt()===47)break;return"/*"+_o(t,Ae-1)+"*"+uu(e===47?e:Ge())}function fh(e){for(;!ls(Xt());)Ge();return _o(e,Ae)}function dh(e){return sh($i("",null,null,null,[""],e=lh(e),0,[0],e))}function $i(e,t,n,r,i,o,l,s,u){for(var f=0,g=0,m=l,h=0,v=0,x=0,S=1,T=1,d=1,c=0,p="",y=i,C=o,j=r,w=p;T;)switch(x=c,c=Ge()){case 40:if(x!=108&&ne(w,m-1)==58){Ei(w+=N(rl(c),"&","&\f"),"&\f",ed(f?s[f-1]:0))!=-1&&(d=-1);break}case 34:case 39:case 91:w+=rl(c);break;case 9:case 10:case 13:case 32:w+=uh(x);break;case 92:w+=ah(_i()-1,7);continue;case 47:switch(Xt()){case 42:case 47:lr(ph(ch(Ge(),_i()),t,n,u),u);break;default:w+="/"}break;case 123*S:s[f++]=Ze(w)*d;case 125*S:case 59:case 0:switch(c){case 0:case 125:T=0;case 59+g:d==-1&&(w=N(w,/\f/g,"")),v>0&&Ze(w)-m&&lr(v>32?$a(w+";",r,n,m-1,u):$a(N(w," ","")+";",r,n,m-2,u),u);break;case 59:w+=";";default:if(lr(j=_a(w,t,n,f,g,i,s,p,y=[],C=[],m,o),o),c===123)if(g===0)$i(w,t,j,j,y,o,m,s,C);else switch(h===99&&ne(w,3)===110?100:h){case 100:case 108:case 109:case 115:$i(e,j,j,r&&lr(_a(e,j,j,0,0,i,s,p,i,y=[],m,C),C),i,C,m,s,r?y:C);break;default:$i(w,j,j,j,[""],C,0,s,C)}}f=g=v=0,S=d=1,p=w="",m=l;break;case 58:m=1+Ze(w),v=x;default:if(S<1){if(c==123)--S;else if(c==125&&S++==0&&oh()==125)continue}switch(w+=uu(c),c*S){case 38:d=g>0?1:(w+="\f",-1);break;case 44:s[f++]=(Ze(w)-1)*d,d=1;break;case 64:Xt()===45&&(w+=rl(Ge())),h=Xt(),g=m=Ze(p=w+=fh(_i())),c++;break;case 45:x===45&&Ze(w)==2&&(S=0)}}return o}function _a(e,t,n,r,i,o,l,s,u,f,g,m){for(var h=i-1,v=i===0?o:[""],x=nd(v),S=0,T=0,d=0;S<r;++S)for(var c=0,p=Dn(e,h+1,h=ed(T=l[S])),y=e;c<x;++c)(y=td(T>0?v[c]+" "+p:N(p,/&\f/g,v[c])))&&(u[d++]=y);return Eo(e,t,n,i===0?jo:s,u,f,g,m)}function ph(e,t,n,r){return Eo(e,t,n,bf,uu(ih()),Dn(e,2,-2),0,r)}function $a(e,t,n,r,i){return Eo(e,t,n,su,Dn(e,0,r),Dn(e,r+1,-1),r,i)}function id(e,t,n){switch(nh(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 4789:return gr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+gr+e+H+e+e;case 5936:switch(ne(e,t+11)){case 114:return D+e+H+N(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+H+N(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+H+N(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return D+e+H+e+e;case 6165:return D+e+H+"flex-"+e+e;case 5187:return D+e+N(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+H+"flex-$1$2")+e;case 5443:return D+e+H+"flex-item-"+N(e,/flex-|-self/g,"")+(nt(e,/flex-|baseline/)?"":H+"grid-row-"+N(e,/flex-|-self/g,""))+e;case 4675:return D+e+H+"flex-line-pack"+N(e,/align-content|flex-|-self/g,"")+e;case 5548:return D+e+H+N(e,"shrink","negative")+e;case 5292:return D+e+H+N(e,"basis","preferred-size")+e;case 6060:return D+"box-"+N(e,"-grow","")+D+e+H+N(e,"grow","positive")+e;case 4554:return D+N(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return N(N(N(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return N(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return N(N(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+H+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4200:if(!nt(e,/flex-|baseline/))return H+"grid-column-align"+Dn(e,t)+e;break;case 2592:case 3360:return H+N(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,nt(r.props,/grid-\w+-end/)})?~Ei(e+(n=n[t].value),"span",0)?e:H+N(e,"-start","")+e+H+"grid-row-span:"+(~Ei(n,"span",0)?nt(n,/\d+/):+nt(n,/\d+/)-+nt(e,/\d+/))+";":H+N(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return nt(r.props,/grid-\w+-start/)})?e:H+N(N(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return N(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ze(e)-1-t>6)switch(ne(e,t+1)){case 109:if(ne(e,t+4)!==45)break;case 102:return N(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+gr+(ne(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ei(e,"stretch",0)?id(N(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return N(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,s,u,f){return H+i+":"+o+f+(l?H+i+"-span:"+(s?u:+u-+o)+f:"")+e});case 4949:if(ne(e,t+6)===121)return N(e,":",":"+D)+e;break;case 6444:switch(ne(e,ne(e,14)===45?18:11)){case 120:return N(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+D+(ne(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+H+"$2box$3")+e;case 100:return N(e,":",":"+H)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return N(e,"scroll-","scroll-snap-")+e}return e}function eo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function hh(e,t,n,r){switch(e.type){case th:if(e.children.length)break;case eh:case su:return e.return=e.return||e.value;case bf:return"";case qf:return e.return=e.value+"{"+eo(e.children,r)+"}";case jo:if(!Ze(e.value=e.props.join(",")))return""}return Ze(n=eo(e.children,r))?e.return=e.value+"{"+n+"}":""}function mh(e){var t=nd(e);return function(n,r,i,o){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,o)||"";return l}}function gh(e){return function(t){t.root||(t=t.return)&&e(t)}}function yh(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case su:e.return=id(e.value,e.length,n);return;case qf:return eo([mt(e,{value:N(e.value,"@","@"+D)})],r);case jo:if(e.length)return rh(n=e.props,function(i){switch(nt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":un(mt(e,{props:[N(i,/:(read-\w+)/,":"+gr+"$1")]})),un(mt(e,{props:[i]})),os(e,{props:Ea(n,r)});break;case"::placeholder":un(mt(e,{props:[N(i,/:(plac\w+)/,":"+D+"input-$1")]})),un(mt(e,{props:[N(i,/:(plac\w+)/,":"+gr+"$1")]})),un(mt(e,{props:[N(i,/:(plac\w+)/,H+"input-$1")]})),un(mt(e,{props:[i]})),os(e,{props:Ea(n,r)});break}return""})}}var vh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},je={},An=typeof process<"u"&&je!==void 0&&(je.REACT_APP_SC_ATTR||je.SC_ATTR)||"data-styled",od="active",ld="data-styled-version",$o="6.1.15",au=`/*!sc*/
`,to=typeof window<"u"&&"HTMLElement"in window,xh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&je!==void 0&&je.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&je.REACT_APP_SC_DISABLE_SPEEDY!==""?je.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&je.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&je!==void 0&&je.SC_DISABLE_SPEEDY!==void 0&&je.SC_DISABLE_SPEEDY!==""&&je.SC_DISABLE_SPEEDY!=="false"&&je.SC_DISABLE_SPEEDY),wh={},zo=Object.freeze([]),Fn=Object.freeze({});function sd(e,t,n){return n===void 0&&(n=Fn),e.theme!==n.theme&&e.theme||t||n.theme}var ud=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),kh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Sh=/(^-|-$)/g;function za(e){return e.replace(kh,"-").replace(Sh,"")}var jh=/(a)(d)/gi,si=52,Pa=function(e){return String.fromCharCode(e+(e>25?39:97))};function us(e){var t,n="";for(t=Math.abs(e);t>si;t=t/si|0)n=Pa(t%si)+n;return(Pa(t%si)+n).replace(jh,"$1-$2")}var il,ad=5381,kn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},cd=function(e){return kn(ad,e)};function cu(e){return us(cd(e)>>>0)}function Ch(e){return e.displayName||e.name||"Component"}function ol(e){return typeof e=="string"&&!0}var fd=typeof Symbol=="function"&&Symbol.for,dd=fd?Symbol.for("react.memo"):60115,Eh=fd?Symbol.for("react.forward_ref"):60112,_h={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$h={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},pd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zh=((il={})[Eh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},il[dd]=pd,il);function La(e){return("type"in(t=e)&&t.type.$$typeof)===dd?pd:"$$typeof"in e?zh[e.$$typeof]:_h;var t}var Ph=Object.defineProperty,Lh=Object.getOwnPropertyNames,Na=Object.getOwnPropertySymbols,Nh=Object.getOwnPropertyDescriptor,Th=Object.getPrototypeOf,Ta=Object.prototype;function hd(e,t,n){if(typeof t!="string"){if(Ta){var r=Th(t);r&&r!==Ta&&hd(e,r,n)}var i=Lh(t);Na&&(i=i.concat(Na(t)));for(var o=La(e),l=La(t),s=0;s<i.length;++s){var u=i[s];if(!(u in $h||n&&n[u]||l&&u in l||o&&u in o)){var f=Nh(t,u);try{Ph(e,u,f)}catch{}}}}return e}function tn(e){return typeof e=="function"}function fu(e){return typeof e=="object"&&"styledComponentId"in e}function Gt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function no(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Rr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function as(e,t,n){if(n===void 0&&(n=!1),!n&&!Rr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=as(e[r],t[r]);else if(Rr(t))for(var r in t)e[r]=as(e[r],t[r]);return e}function du(e,t){Object.defineProperty(e,"toString",{value:t})}function nn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ih=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw nn(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),u=(l=0,n.length);l<u;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(au);return n},e}(),zi=new Map,ro=new Map,Pi=1,ui=function(e){if(zi.has(e))return zi.get(e);for(;ro.has(Pi);)Pi++;var t=Pi++;return zi.set(e,t),ro.set(t,e),t},Rh=function(e,t){Pi=t+1,zi.set(e,t),ro.set(t,e)},Oh="style[".concat(An,"][").concat(ld,'="').concat($o,'"]'),Dh=new RegExp("^".concat(An,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Mh=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},Ah=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(au),i=[],o=0,l=r.length;o<l;o++){var s=r[o].trim();if(s){var u=s.match(Dh);if(u){var f=0|parseInt(u[1],10),g=u[2];f!==0&&(Rh(g,f),Mh(e,g,u[3]),e.getTag().insertRules(f,i)),i.length=0}else i.push(s)}}},Ia=function(e){for(var t=document.querySelectorAll(Oh),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(An)!==od&&(Ah(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Fh(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var md=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var u=Array.from(s.querySelectorAll("style[".concat(An,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(An,od),r.setAttribute(ld,$o);var l=Fh();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},Bh=function(){function e(t){this.element=md(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw nn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Uh=function(){function e(t){this.element=md(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Wh=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Ra=to,Hh={isServer:!to,useCSSOMInjection:!xh},io=function(){function e(t,n,r){t===void 0&&(t=Fn),n===void 0&&(n={});var i=this;this.options=re(re({},Hh),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&to&&Ra&&(Ra=!1,Ia(this)),du(this,function(){return function(o){for(var l=o.getTag(),s=l.length,u="",f=function(m){var h=function(d){return ro.get(d)}(m);if(h===void 0)return"continue";var v=o.names.get(h),x=l.getGroup(m);if(v===void 0||!v.size||x.length===0)return"continue";var S="".concat(An,".g").concat(m,'[id="').concat(h,'"]'),T="";v!==void 0&&v.forEach(function(d){d.length>0&&(T+="".concat(d,","))}),u+="".concat(x).concat(S,'{content:"').concat(T,'"}').concat(au)},g=0;g<s;g++)f(g);return u}(i)})}return e.registerId=function(t){return ui(t)},e.prototype.rehydrate=function(){!this.server&&to&&Ia(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(re(re({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Wh(i):r?new Bh(i):new Uh(i)}(this.options),new Ih(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ui(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ui(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ui(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Vh=/&/g,Qh=/^\s*\/\/.*$/gm;function gd(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=gd(n.children,t)),n})}function Gh(e){var t,n,r,i=Fn,o=i.options,l=o===void 0?Fn:o,s=i.plugins,u=s===void 0?zo:s,f=function(h,v,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):h},g=u.slice();g.push(function(h){h.type===jo&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(Vh,n).replace(r,f))}),l.prefix&&g.push(yh),g.push(hh);var m=function(h,v,x,S){v===void 0&&(v=""),x===void 0&&(x=""),S===void 0&&(S="&"),t=S,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var T=h.replace(Qh,""),d=dh(x||v?"".concat(x," ").concat(v," { ").concat(T," }"):T);l.namespace&&(d=gd(d,l.namespace));var c=[];return eo(d,mh(g.concat(gh(function(p){return c.push(p)})))),c};return m.hash=u.length?u.reduce(function(h,v){return v.name||nn(15),kn(h,v.name)},ad).toString():"",m}var Yh=new io,cs=Gh(),yd=Ie.createContext({shouldForwardProp:void 0,styleSheet:Yh,stylis:cs});yd.Consumer;Ie.createContext(void 0);function fs(){return Ee.useContext(yd)}var vd=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=cs);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,du(this,function(){throw nn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=cs),this.name+t.hash},e}(),Kh=function(e){return e>="A"&&e<="Z"};function Oa(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Kh(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var xd=function(e){return e==null||e===!1||e===""},wd=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!xd(o)&&(Array.isArray(o)&&o.isCss||tn(o)?r.push("".concat(Oa(i),":"),o,";"):Rr(o)?r.push.apply(r,On(On(["".concat(i," {")],wd(o),!1),["}"],!1)):r.push("".concat(Oa(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in vh||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Lt(e,t,n,r){if(xd(e))return[];if(fu(e))return[".".concat(e.styledComponentId)];if(tn(e)){if(!tn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Lt(i,t,n,r)}var o;return e instanceof vd?n?(e.inject(n,r),[e.getName(r)]):[e]:Rr(e)?wd(e):Array.isArray(e)?Array.prototype.concat.apply(zo,e.map(function(l){return Lt(l,t,n,r)})):[e.toString()]}function kd(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(tn(n)&&!fu(n))return!1}return!0}var Xh=cd($o),Zh=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&kd(t),this.componentId=n,this.baseHash=kn(Xh,n),this.baseStyle=r,io.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Gt(i,this.staticRulesId);else{var o=no(Lt(this.rules,t,n,r)),l=us(kn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}i=Gt(i,l),this.staticRulesId=l}else{for(var u=kn(this.baseHash,r.hash),f="",g=0;g<this.rules.length;g++){var m=this.rules[g];if(typeof m=="string")f+=m;else if(m){var h=no(Lt(m,t,n,r));u=kn(u,h+g),f+=h}}if(f){var v=us(u>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(f,".".concat(v),void 0,this.componentId)),i=Gt(i,v)}}return i},e}(),Or=Ie.createContext(void 0);Or.Consumer;function Jh(e){var t=Ie.useContext(Or),n=Ee.useMemo(function(){return function(r,i){if(!r)throw nn(14);if(tn(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw nn(8);return i?re(re({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Ie.createElement(Or.Provider,{value:n},e.children):null}var ll={};function bh(e,t,n){var r=fu(e),i=e,o=!ol(e),l=t.attrs,s=l===void 0?zo:l,u=t.componentId,f=u===void 0?function(y,C){var j=typeof y!="string"?"sc":za(y);ll[j]=(ll[j]||0)+1;var w="".concat(j,"-").concat(cu($o+j+ll[j]));return C?"".concat(C,"-").concat(w):w}(t.displayName,t.parentComponentId):u,g=t.displayName,m=g===void 0?function(y){return ol(y)?"styled.".concat(y):"Styled(".concat(Ch(y),")")}(e):g,h=t.displayName&&t.componentId?"".concat(za(t.displayName),"-").concat(t.componentId):t.componentId||f,v=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var S=i.shouldForwardProp;if(t.shouldForwardProp){var T=t.shouldForwardProp;x=function(y,C){return S(y,C)&&T(y,C)}}else x=S}var d=new Zh(n,h,r?i.componentStyle:void 0);function c(y,C){return function(j,w,z){var B=j.attrs,I=j.componentStyle,ke=j.defaultProps,Dt=j.foldedComponentIds,Mt=j.styledComponentId,Wr=j.target,Po=Ie.useContext(Or),Vn=fs(),At=j.shouldForwardProp||Vn.shouldForwardProp,E=sd(w,Po,ke)||Fn,P=function(dt,Se,et){for(var Qn,Bt=re(re({},Se),{className:void 0,theme:et}),Lo=0;Lo<dt.length;Lo+=1){var Hr=tn(Qn=dt[Lo])?Qn(Bt):Qn;for(var pt in Hr)Bt[pt]=pt==="className"?Gt(Bt[pt],Hr[pt]):pt==="style"?re(re({},Bt[pt]),Hr[pt]):Hr[pt]}return Se.className&&(Bt.className=Gt(Bt.className,Se.className)),Bt}(B,w,E),L=P.as||Wr,A={};for(var F in P)P[F]===void 0||F[0]==="$"||F==="as"||F==="theme"&&P.theme===E||(F==="forwardedAs"?A.as=P.forwardedAs:At&&!At(F,L)||(A[F]=P[F]));var Ft=function(dt,Se){var et=fs(),Qn=dt.generateAndInjectStyles(Se,et.styleSheet,et.stylis);return Qn}(I,P),Fe=Gt(Dt,Mt);return Ft&&(Fe+=" "+Ft),P.className&&(Fe+=" "+P.className),A[ol(L)&&!ud.has(L)?"class":"className"]=Fe,z&&(A.ref=z),Ee.createElement(L,A)}(p,y,C)}c.displayName=m;var p=Ie.forwardRef(c);return p.attrs=v,p.componentStyle=d,p.displayName=m,p.shouldForwardProp=x,p.foldedComponentIds=r?Gt(i.foldedComponentIds,i.styledComponentId):"",p.styledComponentId=h,p.target=r?i.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(C){for(var j=[],w=1;w<arguments.length;w++)j[w-1]=arguments[w];for(var z=0,B=j;z<B.length;z++)as(C,B[z],!0);return C}({},i.defaultProps,y):y}}),du(p,function(){return".".concat(p.styledComponentId)}),o&&hd(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function Da(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Ma=function(e){return Object.assign(e,{isCss:!0})};function pu(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(tn(e)||Rr(e))return Ma(Lt(Da(zo,On([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Lt(r):Ma(Lt(Da(r,t)))}function ds(e,t,n){if(n===void 0&&(n=Fn),!t)throw nn(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,pu.apply(void 0,On([i],o,!1)))};return r.attrs=function(i){return ds(e,t,re(re({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return ds(e,t,re(re({},n),i))},r}var Sd=function(e){return ds(bh,e)},$=Sd;ud.forEach(function(e){$[e]=Sd(e)});var qh=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=kd(t),io.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(no(Lt(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&io.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function em(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=pu.apply(void 0,On([e],t,!1)),i="sc-global-".concat(cu(JSON.stringify(r))),o=new qh(r,i),l=function(u){var f=fs(),g=Ie.useContext(Or),m=Ie.useRef(f.styleSheet.allocateGSInstance(i)).current;return f.styleSheet.server&&s(m,u,f.styleSheet,g,f.stylis),Ie.useLayoutEffect(function(){if(!f.styleSheet.server)return s(m,u,f.styleSheet,g,f.stylis),function(){return o.removeStyles(m,f.styleSheet)}},[m,u,f.styleSheet,g,f.stylis]),null};function s(u,f,g,m,h){if(o.isStatic)o.renderStyles(u,wh,g,h);else{var v=re(re({},f),{theme:sd(f,m,l.defaultProps)});o.renderStyles(u,v,g,h)}}return Ie.memo(l)}function Ur(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=no(pu.apply(void 0,On([e],t,!1))),i=cu(r);return new vd(i,r)}const tm={colors:{primary:"#ffd700",primaryLight:"rgba(255, 215, 0, 0.15)",primaryDark:"#e6c200",primaryGlow:"rgba(255, 215, 0, 0.3)",primaryTransparent:"rgba(255, 215, 0, 0.07)",textDark:"#000000",textLight:"#ffffff",textLightFaded:"rgba(255, 255, 255, 0.85)",backgroundLight:"#f8f8f8",backgroundDark:"#111111",backgroundBlack:"#000000",grayLight:"#eeeeee",grayMedium:"#888888"},breakpoints:{mobile:"768px",tablet:"1024px",laptop:"1366px",desktop:"1920px"},shadows:{small:"0 4px 8px rgba(0, 0, 0, 0.1)",medium:"0 8px 25px rgba(255, 215, 0, 0.3)",large:"0 12px 30px rgba(255, 215, 0, 0.4)"},spacing:{xs:"5px",sm:"10px",md:"20px",lg:"40px",xl:"80px"},borderRadius:{small:"5px",medium:"7px",large:"15px",circle:"50%"},animation:{fast:"0.3s ease",medium:"0.5s ease",slow:"1s ease"}},nm=em`
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
`,jd=({width:e=50,height:t=50})=>a.jsxs("svg",{width:e,height:t,viewBox:"0 0 200 200",children:[a.jsx("path",{d:"M40 110 Q60 40 100 40 Q140 40 160 110 Q140 160 100 160 Q60 160 40 110 Z",fill:"#ffd700",opacity:"0.8"}),a.jsx("circle",{cx:"80",cy:"80",r:"3",fill:"#000000"}),a.jsx("circle",{cx:"120",cy:"80",r:"3",fill:"#000000"}),a.jsx("path",{d:"M85 85 L115 85 Q105 65 100 60 Q95 65 85 85 Z",fill:"#000000"}),a.jsx("path",{d:"M95 85 L105 85 L100 105 L95 85 Z",fill:"#000000"}),a.jsx("path",{d:"M100 105 L100 115",stroke:"#000000",strokeWidth:"2"}),a.jsx("line",{x1:"80",y1:"140",x2:"90",y2:"140",stroke:"#ffd700",strokeWidth:"1",opacity:"0.5"}),a.jsx("line",{x1:"110",y1:"140",x2:"120",y2:"140",stroke:"#ffd700",strokeWidth:"1",opacity:"0.5"}),a.jsx("path",{d:"M90 140 L95 145 L90 140 Z",fill:"none",stroke:"#ffd700",strokeWidth:"1",opacity:"0.5"}),a.jsx("path",{d:"M110 140 L105 145 L110 140 Z",fill:"none",stroke:"#ffd700",strokeWidth:"1",opacity:"0.5"})]}),ln=$.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`,rm=Ur`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`,im=Ur`
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
`,om=$.header`
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
`,lm=$.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`,sm=$.div`
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
    animation: ${im} 4s infinite ease-in-out;
  }
  
  svg {
    filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.3));
  }
`,um=$.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-left: 10px;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary} 0%, #FFF3B0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0.5px;
`,am=$.ul`
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
`,er=$.li`
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
`,tr=$.a`
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
`,cm=$.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 200;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    display: flex;
  }
`,sl=$.span`
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
`,fm=$.a`
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
    animation: ${rm} 3s infinite;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(255, 215, 0, 0.4);
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    display: none;
  }
`,dm=()=>a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),a.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),pm=()=>a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})}),hm=()=>a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"}),a.jsx("rect",{x:"9",y:"9",width:"6",height:"6"}),a.jsx("line",{x1:"9",y1:"2",x2:"9",y2:"4"}),a.jsx("line",{x1:"15",y1:"2",x2:"15",y2:"4"}),a.jsx("line",{x1:"9",y1:"20",x2:"9",y2:"22"}),a.jsx("line",{x1:"15",y1:"20",x2:"15",y2:"22"}),a.jsx("line",{x1:"20",y1:"9",x2:"22",y2:"9"}),a.jsx("line",{x1:"20",y1:"14",x2:"22",y2:"14"}),a.jsx("line",{x1:"2",y1:"9",x2:"4",y2:"9"}),a.jsx("line",{x1:"2",y1:"14",x2:"4",y2:"14"})]}),mm=()=>a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"22"}),a.jsx("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})]}),gm=()=>a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),a.jsx("polyline",{points:"22,6 12,13 2,6"})]}),ym=()=>a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),a.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),a.jsx("polyline",{points:"21 15 16 10 5 21"})]}),vm=()=>{const[e,t]=Ee.useState(!1),[n,r]=Ee.useState(!1);Ee.useEffect(()=>{const o=()=>{r(window.scrollY>20)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]);const i=()=>{e&&t(!1)};return a.jsx(om,{style:{padding:n?"8px 0":"12px 0",background:n?"rgba(0, 0, 0, 0.95)":"rgba(0, 0, 0, 0.85)"},children:a.jsx(ln,{children:a.jsxs(lm,{children:[a.jsxs(sm,{children:[a.jsx(jd,{}),a.jsx(um,{children:"AgentSwap"})]}),a.jsxs(am,{isOpen:e,children:[a.jsx(er,{children:a.jsxs(tr,{href:"#home",onClick:i,children:[a.jsx(dm,{}),"Home"]})}),a.jsx(er,{children:a.jsxs(tr,{href:"#features",onClick:i,children:[a.jsx(pm,{}),"Features"]})}),a.jsx(er,{children:a.jsxs(tr,{href:"#technology",onClick:i,children:[a.jsx(hm,{}),"Technology"]})}),a.jsx(er,{children:a.jsxs(tr,{href:"#roadmap",onClick:i,children:[a.jsx(mm,{}),"Roadmap"]})}),a.jsx(er,{children:a.jsxs(tr,{href:"#contact",onClick:i,children:[a.jsx(gm,{}),"Contact"]})})]}),a.jsxs(fm,{href:"https://agentswap.pro",target:"_blank",children:[a.jsx(ym,{}),"Launch App"]}),a.jsxs(cm,{onClick:()=>t(!e),children:[a.jsx(sl,{isOpen:e}),a.jsx(sl,{isOpen:e}),a.jsx(sl,{isOpen:e})]})]})})})},xm=$.footer`
  background-color: ${({theme:e})=>e.colors.backgroundDark};
  color: ${({theme:e})=>e.colors.textLight};
  padding: 50px 0 20px;
`,wm=$.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 40px;
`,km=$.div`
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
`,ul=$.div`
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
`,Sm=$.div`
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.1);
  color: ${({theme:e})=>e.colors.grayMedium};
  font-size: 0.9rem;
`,jm=()=>a.jsx(xm,{children:a.jsxs(ln,{children:[a.jsxs(wm,{children:[a.jsxs(km,{children:[a.jsx(jd,{}),a.jsx("h3",{children:"AgentSwap"}),a.jsx("p",{children:"Trade Smarter, Thrive on Solana"})]}),a.jsxs(ul,{children:[a.jsx("h4",{children:"Quick Links"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("a",{href:"#home",children:"Home"})}),a.jsx("li",{children:a.jsx("a",{href:"#features",children:"Features"})}),a.jsx("li",{children:a.jsx("a",{href:"#technology",children:"Technology"})}),a.jsx("li",{children:a.jsx("a",{href:"#roadmap",children:"Roadmap"})})]})]}),a.jsxs(ul,{children:[a.jsx("h4",{children:"Resources"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("a",{href:"#",children:"Documentation"})}),a.jsx("li",{children:a.jsx("a",{href:"https://github.com/agentswaplabs",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})}),a.jsx("li",{children:a.jsx("a",{href:"#",children:"Developers"})}),a.jsx("li",{children:a.jsx("a",{href:"#",children:"Blog"})})]})]}),a.jsxs(ul,{children:[a.jsx("h4",{children:"Connect"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("a",{href:"https://x.com/agentswap_sol",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})}),a.jsx("li",{children:a.jsx("a",{href:"#",children:"Discord"})}),a.jsx("li",{children:a.jsx("a",{href:"#",children:"Telegram"})}),a.jsx("li",{children:a.jsx("a",{href:"#",children:"Email"})})]})]})]}),a.jsx(Sm,{children:a.jsxs("p",{children:["© ",new Date().getFullYear()," AgentSwap. All rights reserved."]})})]})}),hu=$.a`
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
`,Aa=Ur`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
`,oo=Ur`
  0% { opacity: 0.7; }
  50% { opacity: 1; }
  100% { opacity: 0.7; }
`,Cd=Ur`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,Cm=$.section`
  min-height: 100vh;
  padding: 140px 0 70px;
  position: relative;
  overflow: hidden;
  background: #000;
  display: flex;
  align-items: center;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    padding: 120px 0 60px;
    min-height: auto;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    padding: 100px 0 50px;
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
`,Em=$.div`
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
`,Ed=$.div`
  position: absolute;
  width: 550px;
  height: 550px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.18) 0%, transparent 70%);
  filter: blur(45px);
  top: 10%;
  right: -180px;
  z-index: 1;
  animation: ${oo} 9s infinite ease-in-out;
  
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
    animation: ${oo} 7s infinite ease-in-out;
  }
`,_m=$(Ed)`
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
`,$m=$.div`
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
`,zm=$.div`
  position: absolute;
  width: 850px;
  height: 850px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  animation: ${Cd} 100s linear infinite;
  
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
`,Pm=$.div`
  position: relative;
  z-index: 5;
  width: 100%;
`,Lm=$.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  flex-wrap: wrap;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    flex-direction: column;
    gap: 40px;
    text-align: center;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    gap: 30px;
  }
`,Nm=$.div`
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
`,Tm=$.div`
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
`,Im=$.h1`
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
`,Rm=$.p`
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
`,Om=$.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    justify-content: center;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    flex-direction: column;
    gap: 12px;
    width: 100%;
    max-width: 240px;
    margin: 0 auto;
  }
`,Dm=$(hu)`
  padding: 15px 38px;
  font-size: 1.05rem;
  border-radius: 7px;
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(255, 215, 0, 0.4);
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    padding: 14px 20px;
    font-size: 0.95rem;
    width: 100%;
    min-height: 48px; /* Improve tap target size */
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,Mm=$(hu)`
  padding: 15px 38px;
  font-size: 1.05rem;
  border-radius: 7px;
  background: transparent;
  color: ${({theme:e})=>e.colors.primary};
  border: 2px solid ${({theme:e})=>e.colors.primary};
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 215, 0, 0.1);
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    padding: 14px 20px;
    font-size: 0.95rem;
    width: 100%;
    min-height: 48px; /* Improve tap target size */
    border-width: 1.5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,Am=$.div`
  flex: 1;
  min-width: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  animation: ${Aa} 5.5s ease-in-out infinite;
  margin-top: 0;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    width: 100%;
    order: 1;
    margin-top: 20px;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    animation: ${Aa} 4s ease-in-out infinite;
    margin-top: 10px;
    margin-bottom: 5px;
  }
`,Fm=$.div`
  position: relative;
  width: 380px;
  height: 380px;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.laptop}) {
    width: 320px;
    height: 320px;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    width: 280px;
    height: 280px;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    width: 180px;
    height: 180px;
  }
`,Bm=$.div`
  position: absolute;
  width: 115%;
  height: 115%;
  top: -7.5%;
  left: -7.5%;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.38) 0%, transparent 70%);
  filter: blur(35px);
  animation: ${oo} 4s infinite alternate ease-in-out;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    filter: blur(15px);
    width: 110%;
    height: 110%;
    top: -5%;
    left: -5%;
  }
`,Um=$.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 50%;
  box-shadow: 0 0 55px 25px rgba(255, 215, 0, 0.18);
  animation: ${oo} 3s infinite alternate ease-in-out;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    box-shadow: 0 0 25px 10px rgba(255, 215, 0, 0.18);
  }
`,_d=$.div`
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
`,Wm=$(_d)`
  width: 500px;
  height: 500px;
  border: 1px dashed rgba(255, 215, 0, 0.18);
  animation: ${Cd} 110s linear infinite reverse;
  
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
`,Hm=()=>a.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 200 200",preserveAspectRatio:"xMidYMid meet",children:[a.jsxs("defs",{children:[a.jsxs("filter",{id:"glow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[a.jsx("feGaussianBlur",{stdDeviation:"2.5",result:"blur"}),a.jsx("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]}),a.jsxs("radialGradient",{id:"logoGradient",cx:"50%",cy:"50%",r:"70%",fx:"50%",fy:"50%",children:[a.jsx("stop",{offset:"0%",stopColor:"#ffd700",stopOpacity:"0.95"}),a.jsx("stop",{offset:"90%",stopColor:"#ffd700",stopOpacity:"0.85"}),a.jsx("stop",{offset:"100%",stopColor:"#ffd700",stopOpacity:"0.75"})]})]}),a.jsx("circle",{cx:"100",cy:"100",r:"70",fill:"rgba(255, 215, 0, 0.06)"}),a.jsx("circle",{cx:"100",cy:"100",r:"60",fill:"rgba(255, 215, 0, 0.09)"}),a.jsx("path",{d:"M40 110 Q60 40 100 40 Q140 40 160 110 Q140 160 100 160 Q60 160 40 110 Z",fill:"url(#logoGradient)",filter:"url(#glow)"}),a.jsx("circle",{cx:"80",cy:"80",r:"3",fill:"#000000",children:a.jsx("animate",{attributeName:"r",values:"3;3.4;3",dur:"3.5s",repeatCount:"indefinite"})}),a.jsx("circle",{cx:"120",cy:"80",r:"3",fill:"#000000",children:a.jsx("animate",{attributeName:"r",values:"3;3.4;3",dur:"3.5s",repeatCount:"indefinite"})}),a.jsx("path",{d:"M85 85 L115 85 Q105 65 100 60 Q95 65 85 85 Z",fill:"#000000"}),a.jsx("path",{d:"M95 85 L105 85 L100 105 L95 85 Z",fill:"#000000"}),a.jsx("path",{d:"M100 105 L100 115",stroke:"#000000",strokeWidth:"2"}),a.jsx("line",{x1:"80",y1:"140",x2:"90",y2:"140",stroke:"#ffd700",strokeWidth:"1.5",opacity:"0.7",children:a.jsx("animate",{attributeName:"opacity",values:"0.7;1;0.7",dur:"3s",repeatCount:"indefinite"})}),a.jsx("line",{x1:"110",y1:"140",x2:"120",y2:"140",stroke:"#ffd700",strokeWidth:"1.5",opacity:"0.7",children:a.jsx("animate",{attributeName:"opacity",values:"0.7;1;0.7",dur:"3s",repeatCount:"indefinite"})}),a.jsx("path",{d:"M90 140 L95 145 L90 140 Z",fill:"none",stroke:"#ffd700",strokeWidth:"1.5",opacity:"0.7",children:a.jsx("animate",{attributeName:"opacity",values:"0.7;1;0.7",dur:"3s",repeatCount:"indefinite"})}),a.jsx("path",{d:"M110 140 L105 145 L110 140 Z",fill:"none",stroke:"#ffd700",strokeWidth:"1.5",opacity:"0.7",children:a.jsx("animate",{attributeName:"opacity",values:"0.7;1;0.7",dur:"3s",repeatCount:"indefinite"})})]}),Vm=()=>{const e=Ee.useRef(null),[t,n]=Ee.useState(!1);return Ee.useEffect(()=>{const r=()=>{n(window.innerWidth<=768)};return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),Ee.useEffect(()=>{if(!t&&e.current){const r=i=>{const o=(window.innerWidth/2-i.pageX)/50,l=(window.innerHeight/2-i.pageY)/50;e.current&&e.current.querySelectorAll(".parallax-element").forEach(u=>{const f=Number(u.getAttribute("data-speed"))||1;u.style.transform=`translate(${o*f}px, ${l*f}px)`})};return document.addEventListener("mousemove",r),()=>document.removeEventListener("mousemove",r)}},[t]),a.jsxs(Cm,{ref:e,id:"hero-section",children:[a.jsx(Em,{}),a.jsx(Ed,{className:"parallax-element","data-speed":"1.5"}),a.jsx(_m,{className:"parallax-element","data-speed":"1.2"}),a.jsx($m,{}),!t&&a.jsx(zm,{}),a.jsx(ln,{children:a.jsx(Pm,{children:a.jsxs(Lm,{children:[a.jsxs(Nm,{children:[a.jsx(Tm,{children:"AI-Powered DeFi"}),a.jsxs(Im,{children:["Trade ",a.jsx("span",{children:"Smarter"}),",",a.jsx("br",{}),"Thrive on Solana"]}),a.jsx(Rm,{children:"AgentSwap is a decentralized AI financial assistant platform on Solana, enabling users to manage crypto assets through natural language commands and community-developed strategy agents."}),a.jsxs(Om,{children:[a.jsx(Dm,{href:"#contact",children:"Get Started"}),a.jsx(Mm,{href:"#features",children:"Explore Features"})]})]}),a.jsx(Am,{children:a.jsxs(Fm,{children:[a.jsx(Wm,{className:"parallax-element","data-speed":"0.5"}),a.jsx(_d,{className:"parallax-element","data-speed":"0.8"}),a.jsx(Bm,{}),a.jsx(Um,{}),a.jsx(Hm,{})]})})]})})})]})},mu=$.div`
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
`,Qm=({width:e=24,height:t=24})=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10"}),a.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),a.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),Gm=({width:e=24,height:t=24})=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),a.jsx("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),a.jsx("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]}),Ym=({width:e=24,height:t=24})=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("polyline",{points:"23 4 23 10 17 10"}),a.jsx("polyline",{points:"1 20 1 14 7 14"}),a.jsx("path",{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"})]}),Km=({width:e=24,height:t=24})=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),a.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),a.jsx("line",{x1:"9",y1:"21",x2:"9",y2:"9"})]}),Xm=({width:e=24,height:t=24})=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),a.jsx("polyline",{points:"7.5 4.21 12 6.81 16.5 4.21"}),a.jsx("polyline",{points:"7.5 19.79 7.5 14.6 3 12"}),a.jsx("polyline",{points:"21 12 16.5 14.6 16.5 19.79"}),a.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),a.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),Zm=({width:e=24,height:t=24})=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),a.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),Jm=({width:e=24,height:t=24})=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),a.jsx("path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"})]}),bm=()=>a.jsxs("svg",{width:"400",height:"300",viewBox:"0 0 400 300",children:[a.jsx("rect",{width:"400",height:"300",fill:"#f8f8f8",rx:"10",ry:"10"}),a.jsx("circle",{cx:"200",cy:"240",r:"30",fill:"#000000"}),a.jsx("text",{x:"200",y:"245",fontSize:"12",textAnchor:"middle",fill:"#ffffff",children:"SOLANA"}),a.jsx("rect",{x:"170",y:"30",width:"60",height:"40",rx:"5",ry:"5",fill:"#ffd700"}),a.jsx("text",{x:"200",y:"55",fontSize:"12",textAnchor:"middle",fill:"#000000",children:"AI MODEL"}),a.jsx("rect",{x:"150",y:"110",width:"100",height:"50",rx:"5",ry:"5",fill:"#ffd700",opacity:"0.7"}),a.jsx("text",{x:"200",y:"140",fontSize:"14",textAnchor:"middle",fill:"#000000",children:"MCP"}),a.jsx("line",{x1:"200",y1:"70",x2:"200",y2:"110",stroke:"#000000",strokeWidth:"2"}),a.jsx("line",{x1:"200",y1:"160",x2:"200",y2:"210",stroke:"#000000",strokeWidth:"2"}),a.jsx("circle",{cx:"100",cy:"140",r:"20",fill:"#ffd700",opacity:"0.5"}),a.jsx("text",{x:"100",y:"144",fontSize:"10",textAnchor:"middle",fill:"#000000",children:"AGENT 1"}),a.jsx("circle",{cx:"300",cy:"140",r:"20",fill:"#ffd700",opacity:"0.5"}),a.jsx("text",{x:"300",y:"144",fontSize:"10",textAnchor:"middle",fill:"#000000",children:"AGENT 2"}),a.jsx("line",{x1:"120",y1:"140",x2:"150",y2:"140",stroke:"#000000",strokeWidth:"1"}),a.jsx("line",{x1:"250",y1:"140",x2:"280",y2:"140",stroke:"#000000",strokeWidth:"1"})]}),qm=$.section`
  padding: 80px 0;
  background-color: ${({theme:e})=>e.colors.backgroundLight};
`,eg=$.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`,ai=$.div`
  background-color: ${({theme:e})=>e.colors.textLight};
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: all 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
`,ci=$.div`
  margin-bottom: 20px;
  width: 60px;
  height: 60px;
  background-color: ${({theme:e})=>e.colors.primaryLight};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,fi=$.h3`
  font-size: 1.3rem;
  margin-bottom: 15px;
`,di=$.p`
  color: ${({theme:e})=>e.colors.grayMedium};
`,tg=()=>a.jsx(qm,{id:"features",children:a.jsxs(ln,{children:[a.jsxs(mu,{children:[a.jsx("h2",{children:"Core Features"}),a.jsx("p",{children:"Discover how AgentSwap revolutionizes DeFi with AI-powered strategy agents on Solana"})]}),a.jsxs(eg,{children:[a.jsxs(ai,{children:[a.jsx(ci,{children:a.jsx(Qm,{})}),a.jsx(fi,{children:"Real-time Wallet Monitoring"}),a.jsx(di,{children:"Get instant insights on your Solana wallet assets with AI-powered analysis and investment recommendations based on Pyth Network price data."})]}),a.jsxs(ai,{children:[a.jsx(ci,{children:a.jsx(Gm,{})}),a.jsx(fi,{children:"Natural Language Interaction"}),a.jsx(di,{children:'Control your DeFi operations with simple commands like "Swap 50% of my SOL to USDC" or "Stake 100 SOL on Marinade" - no complex interfaces needed.'})]}),a.jsxs(ai,{children:[a.jsx(ci,{children:a.jsx(Ym,{})}),a.jsx(fi,{children:"Automated DeFi Operations"}),a.jsx(di,{children:"Execute token swaps through Jupiter Aggregator, stake your SOL with liquid staking protocols, and optimize yield farming - all through AI assistance."})]}),a.jsxs(ai,{children:[a.jsx(ci,{children:a.jsx(Km,{})}),a.jsx(fi,{children:"Strategy Agent Marketplace"}),a.jsx(di,{children:"Rent or purchase community-developed strategy agents for trading, staking, or arbitrage to automatically execute sophisticated DeFi strategies."})]})]})]})}),ng=$.section`
  padding: 80px 0;
  background-color: ${({theme:e})=>e.colors.grayLight};
`,rg=$.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`,ig=$.div`
  flex: 1;
  min-width: 300px;
  padding: 20px;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    flex: 100%;
    padding: 20px 0;
  }
`,og=$.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
  padding: 20px;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    flex: 100%;
    padding: 20px 0;
  }
`,al=$.div`
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
`,cl=$.h3`
  font-size: 1.3rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`,fl=$.p`
  color: ${({theme:e})=>e.colors.grayMedium};
`,lg=()=>a.jsx(ng,{id:"technology",children:a.jsxs(ln,{children:[a.jsxs(mu,{children:[a.jsx("h2",{children:"Our Technology"}),a.jsx("p",{children:"Cutting-edge blockchain and AI technologies powering AgentSwap"})]}),a.jsxs(rg,{children:[a.jsxs(ig,{children:[a.jsxs(al,{children:[a.jsxs(cl,{children:[a.jsx(Xm,{}),"Model Context Protocol (MCP)"]}),a.jsx(fl,{children:"AgentSwap is built on MCP, enabling AI models to interact directly with blockchain data and execute transactions. This protocol creates a standardized interface between large language models and Solana programs, allowing agents to understand wallet states and generate valid transactions."})]}),a.jsxs(al,{children:[a.jsxs(cl,{children:[a.jsx(Zm,{}),"Solana Agent Kit"]}),a.jsx(fl,{children:"We leverage the open-source Solana Agent Kit (github.com/sendaifun/solana-agent-kit) to create, deploy, and manage our AI agents. This toolkit provides essential components for building autonomous agents that can interact with Solana blockchain, ensuring security and efficiency in all operations."})]}),a.jsxs(al,{children:[a.jsxs(cl,{children:[a.jsx(Jm,{}),"Solana Smart Contracts"]}),a.jsx(fl,{children:"Our platform is powered by Rust-written Solana Programs that manage the agent marketplace, fee distribution, user permissions, and interactions with various DeFi protocols like Jupiter, Marinade, and Orca."})]})]}),a.jsx(og,{children:a.jsx(bm,{})})]})]})}),sg=$.section`
  padding: 80px 0;
  background-color: ${({theme:e})=>e.colors.backgroundLight};
`,ug=$.div`
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
`,ag=$.div`
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
`,cg=$.div`
  padding: 20px;
  background-color: ${({theme:e})=>e.colors.textLight};
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  position: relative;
`,fg=$.h3`
  margin-bottom: 10px;
  font-size: 1.2rem;
`,dg=$.p`
  color: ${({theme:e})=>e.colors.grayMedium};
  font-size: 0.95rem;
`,pg=[{title:"Phase 1: Foundation (Q1-Q2 2025)",description:"Build core infrastructure including frontend DApp, basic Solana smart contracts, wallet monitoring integration, and token swap functionality via Jupiter Aggregator."},{title:"Phase 2: Agent Marketplace (Q3 2025)",description:"Launch strategy agent marketplace with upload/review system, implement rental/purchase functionality, and add staking features with Marinade and Jito integration."},{title:"Phase 3: Ecosystem Enhancement (Q4 2025)",description:"Optimize natural language processing, implement agent performance tracking, integrate Arweave for decentralized storage, and conduct smart contract audits."},{title:"Phase 4: Tokenomics & Governance (Q1 2026)",description:"Introduce AGENT token for payments and rewards, establish DAO governance, and expand support for additional Solana DeFi protocols."}],hg=()=>a.jsx(sg,{id:"roadmap",children:a.jsxs(ln,{children:[a.jsxs(mu,{children:[a.jsx("h2",{children:"Development Roadmap"}),a.jsx("p",{children:"Our journey to build the future of AI-powered DeFi on Solana"})]}),a.jsx(ug,{children:pg.map((e,t)=>a.jsx(ag,{isEven:t%2===1,children:a.jsxs(cg,{children:[a.jsx(fg,{children:e.title}),a.jsx(dg,{children:e.description})]})},t))})]})}),mg=$.section`
  padding: 80px 0;
  background: linear-gradient(to right, ${({theme:e})=>e.colors.primaryDark}, ${({theme:e})=>e.colors.primary});
  color: ${({theme:e})=>e.colors.textDark};
  text-align: center;
`,gg=$.h2`
  font-size: 2.2rem;
  margin-bottom: 20px;
`,yg=$.p`
  max-width: 700px;
  margin: 0 auto 30px;
`,vg=()=>a.jsx(mg,{id:"contact",children:a.jsxs(ln,{children:[a.jsx(gg,{children:"Ready to Transform Your DeFi Experience?"}),a.jsx(yg,{children:"Join AgentSwap early access program to be among the first to experience AI-powered asset management on Solana."}),a.jsx(hu,{href:"https://agentswap.pro",variant:"secondary",children:"Join Waitlist"})]})}),xg=()=>a.jsxs(a.Fragment,{children:[a.jsx(Vm,{}),a.jsx(tg,{}),a.jsx(lg,{}),a.jsx(hg,{}),a.jsx(vg,{})]}),wg=()=>a.jsxs(Jh,{theme:tm,children:[a.jsx(nm,{}),a.jsx(vm,{}),a.jsx(xg,{}),a.jsx(jm,{})]});dl.createRoot(document.getElementById("root")).render(a.jsx(Ie.StrictMode,{children:a.jsx(wg,{})}));
