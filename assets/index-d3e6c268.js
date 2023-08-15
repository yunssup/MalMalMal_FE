(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function Wo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var em={exports:{}},Go={},tm={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xi=Symbol.for("react.element"),Jv=Symbol.for("react.portal"),e0=Symbol.for("react.fragment"),t0=Symbol.for("react.strict_mode"),n0=Symbol.for("react.profiler"),r0=Symbol.for("react.provider"),i0=Symbol.for("react.context"),a0=Symbol.for("react.forward_ref"),o0=Symbol.for("react.suspense"),s0=Symbol.for("react.memo"),l0=Symbol.for("react.lazy"),Af=Symbol.iterator;function u0(e){return e===null||typeof e!="object"?null:(e=Af&&e[Af]||e["@@iterator"],typeof e=="function"?e:null)}var nm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rm=Object.assign,im={};function Br(e,t,n){this.props=e,this.context=t,this.refs=im,this.updater=n||nm}Br.prototype.isReactComponent={};Br.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Br.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function am(){}am.prototype=Br.prototype;function qu(e,t,n){this.props=e,this.context=t,this.refs=im,this.updater=n||nm}var Zu=qu.prototype=new am;Zu.constructor=qu;rm(Zu,Br.prototype);Zu.isPureReactComponent=!0;var Lf=Array.isArray,om=Object.prototype.hasOwnProperty,Ju={current:null},sm={key:!0,ref:!0,__self:!0,__source:!0};function lm(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)om.call(t,r)&&!sm.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Xi,type:e,key:a,ref:o,props:i,_owner:Ju.current}}function c0(e,t){return{$$typeof:Xi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ec(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xi}function f0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Nf=/\/+/g;function Is(e,t){return typeof e=="object"&&e!==null&&e.key!=null?f0(""+e.key):t.toString(36)}function Ha(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Xi:case Jv:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Is(o,0):r,Lf(i)?(n="",e!=null&&(n=e.replace(Nf,"$&/")+"/"),Ha(i,t,n,"",function(u){return u})):i!=null&&(ec(i)&&(i=c0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Nf,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Lf(e))for(var l=0;l<e.length;l++){a=e[l];var s=r+Is(a,l);o+=Ha(a,t,n,s,i)}else if(s=u0(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=r+Is(a,l++),o+=Ha(a,t,n,s,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function aa(e,t,n){if(e==null)return e;var r=[],i=0;return Ha(e,r,"","",function(a){return t.call(n,a,i++)}),r}function d0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},Ua={transition:null},p0={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:Ua,ReactCurrentOwner:Ju};Q.Children={map:aa,forEach:function(e,t,n){aa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return aa(e,function(){t++}),t},toArray:function(e){return aa(e,function(t){return t})||[]},only:function(e){if(!ec(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=Br;Q.Fragment=e0;Q.Profiler=n0;Q.PureComponent=qu;Q.StrictMode=t0;Q.Suspense=o0;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p0;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=rm({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Ju.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)om.call(t,s)&&!sm.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Xi,type:e.type,key:i,ref:a,props:r,_owner:o}};Q.createContext=function(e){return e={$$typeof:i0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:r0,_context:e},e.Consumer=e};Q.createElement=lm;Q.createFactory=function(e){var t=lm.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:a0,render:e}};Q.isValidElement=ec;Q.lazy=function(e){return{$$typeof:l0,_payload:{_status:-1,_result:e},_init:d0}};Q.memo=function(e,t){return{$$typeof:s0,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=Ua.transition;Ua.transition={};try{e()}finally{Ua.transition=t}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(e,t){return $e.current.useCallback(e,t)};Q.useContext=function(e){return $e.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};Q.useEffect=function(e,t){return $e.current.useEffect(e,t)};Q.useId=function(){return $e.current.useId()};Q.useImperativeHandle=function(e,t,n){return $e.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return $e.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return $e.current.useReducer(e,t,n)};Q.useRef=function(e){return $e.current.useRef(e)};Q.useState=function(e){return $e.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return $e.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return $e.current.useTransition()};Q.version="18.2.0";tm.exports=Q;var W=tm.exports;const B=Wo(W);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0=W,h0=Symbol.for("react.element"),g0=Symbol.for("react.fragment"),v0=Object.prototype.hasOwnProperty,y0=m0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x0={key:!0,ref:!0,__self:!0,__source:!0};function um(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)v0.call(t,r)&&!x0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:h0,type:e,key:a,ref:o,props:i,_owner:y0.current}}Go.Fragment=g0;Go.jsx=um;Go.jsxs=um;em.exports=Go;var y=em.exports,Ol={},cm={exports:{}},et={},fm={exports:{}},dm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,A){var N=j.length;j.push(A);e:for(;0<N;){var D=N-1>>>1,U=j[D];if(0<i(U,A))j[D]=A,j[N]=U,N=D;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var A=j[0],N=j.pop();if(N!==A){j[0]=N;e:for(var D=0,U=j.length,X=U>>>1;D<X;){var Z=2*(D+1)-1,me=j[Z],re=Z+1,ie=j[re];if(0>i(me,N))re<U&&0>i(ie,me)?(j[D]=ie,j[re]=N,D=re):(j[D]=me,j[Z]=N,D=Z);else if(re<U&&0>i(ie,N))j[D]=ie,j[re]=N,D=re;else break e}}return A}function i(j,A){var N=j.sortIndex-A.sortIndex;return N!==0?N:j.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],u=[],c=1,d=null,m=3,g=!1,w=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(j){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=j)r(u),A.sortIndex=A.expirationTime,t(s,A);else break;A=n(u)}}function x(j){if(v=!1,p(j),!w)if(n(s)!==null)w=!0,$(b);else{var A=n(u);A!==null&&G(x,A.startTime-j)}}function b(j,A){w=!1,v&&(v=!1,h(L),L=-1),g=!0;var N=m;try{for(p(A),d=n(s);d!==null&&(!(d.expirationTime>A)||j&&!_());){var D=d.callback;if(typeof D=="function"){d.callback=null,m=d.priorityLevel;var U=D(d.expirationTime<=A);A=e.unstable_now(),typeof U=="function"?d.callback=U:d===n(s)&&r(s),p(A)}else r(s);d=n(s)}if(d!==null)var X=!0;else{var Z=n(u);Z!==null&&G(x,Z.startTime-A),X=!1}return X}finally{d=null,m=N,g=!1}}var T=!1,E=null,L=-1,P=5,R=-1;function _(){return!(e.unstable_now()-R<P)}function I(){if(E!==null){var j=e.unstable_now();R=j;var A=!0;try{A=E(!0,j)}finally{A?M():(T=!1,E=null)}}else T=!1}var M;if(typeof f=="function")M=function(){f(I)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,O=k.port2;k.port1.onmessage=I,M=function(){O.postMessage(null)}}else M=function(){S(I,0)};function $(j){E=j,T||(T=!0,M())}function G(j,A){L=S(function(){j(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,$(b))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(j){switch(m){case 1:case 2:case 3:var A=3;break;default:A=m}var N=m;m=A;try{return j()}finally{m=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,A){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var N=m;m=j;try{return A()}finally{m=N}},e.unstable_scheduleCallback=function(j,A,N){var D=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?D+N:D):N=D,j){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=N+U,j={id:c++,callback:A,priorityLevel:j,startTime:N,expirationTime:U,sortIndex:-1},N>D?(j.sortIndex=N,t(u,j),n(s)===null&&j===n(u)&&(v?(h(L),L=-1):v=!0,G(x,N-D))):(j.sortIndex=U,t(s,j),w||g||(w=!0,$(b))),j},e.unstable_shouldYield=_,e.unstable_wrapCallback=function(j){var A=m;return function(){var N=m;m=A;try{return j.apply(this,arguments)}finally{m=N}}}})(dm);fm.exports=dm;var w0=fm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm=W,Je=w0;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mm=new Set,ki={};function Xn(e,t){Tr(e,t),Tr(e+"Capture",t)}function Tr(e,t){for(ki[e]=t,e=0;e<t.length;e++)mm.add(t[e])}var Rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Al=Object.prototype.hasOwnProperty,S0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,If={},_f={};function b0(e){return Al.call(_f,e)?!0:Al.call(If,e)?!1:S0.test(e)?_f[e]=!0:(If[e]=!0,!1)}function E0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function k0(e,t,n,r){if(t===null||typeof t>"u"||E0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Re(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ae[e]=new Re(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ae[t]=new Re(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ae[e]=new Re(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ae[e]=new Re(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ae[e]=new Re(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ae[e]=new Re(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ae[e]=new Re(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ae[e]=new Re(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ae[e]=new Re(e,5,!1,e.toLowerCase(),null,!1,!1)});var tc=/[\-:]([a-z])/g;function nc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(tc,nc);Ae[t]=new Re(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(tc,nc);Ae[t]=new Re(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(tc,nc);Ae[t]=new Re(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ae[e]=new Re(e,1,!1,e.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ae[e]=new Re(e,1,!1,e.toLowerCase(),null,!0,!0)});function rc(e,t,n,r){var i=Ae.hasOwnProperty(t)?Ae[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(k0(t,n,i,r)&&(n=null),r||i===null?b0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Wt=pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oa=Symbol.for("react.element"),rr=Symbol.for("react.portal"),ir=Symbol.for("react.fragment"),ic=Symbol.for("react.strict_mode"),Ll=Symbol.for("react.profiler"),hm=Symbol.for("react.provider"),gm=Symbol.for("react.context"),ac=Symbol.for("react.forward_ref"),Nl=Symbol.for("react.suspense"),Il=Symbol.for("react.suspense_list"),oc=Symbol.for("react.memo"),Jt=Symbol.for("react.lazy"),vm=Symbol.for("react.offscreen"),jf=Symbol.iterator;function Kr(e){return e===null||typeof e!="object"?null:(e=jf&&e[jf]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,_s;function ri(e){if(_s===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_s=t&&t[1]||""}return`
`+_s+e}var js=!1;function Ms(e,t){if(!e||js)return"";js=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==a[l]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{js=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ri(e):""}function C0(e){switch(e.tag){case 5:return ri(e.type);case 16:return ri("Lazy");case 13:return ri("Suspense");case 19:return ri("SuspenseList");case 0:case 2:case 15:return e=Ms(e.type,!1),e;case 11:return e=Ms(e.type.render,!1),e;case 1:return e=Ms(e.type,!0),e;default:return""}}function _l(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ir:return"Fragment";case rr:return"Portal";case Ll:return"Profiler";case ic:return"StrictMode";case Nl:return"Suspense";case Il:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case gm:return(e.displayName||"Context")+".Consumer";case hm:return(e._context.displayName||"Context")+".Provider";case ac:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case oc:return t=e.displayName||null,t!==null?t:_l(e.type)||"Memo";case Jt:t=e._payload,e=e._init;try{return _l(e(t))}catch{}}return null}function T0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _l(t);case 8:return t===ic?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ym(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function P0(e){var t=ym(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function sa(e){e._valueTracker||(e._valueTracker=P0(e))}function xm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ym(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function lo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function jl(e,t){var n=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Mf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function wm(e,t){t=t.checked,t!=null&&rc(e,"checked",t,!1)}function Ml(e,t){wm(e,t);var n=vn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?zl(e,t.type,n):t.hasOwnProperty("defaultValue")&&zl(e,t.type,vn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function zl(e,t,n){(t!=="number"||lo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ii=Array.isArray;function xr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $l(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $f(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(ii(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vn(n)}}function Sm(e,t){var n=vn(t.value),r=vn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Rf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var la,Em=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(la=la||document.createElement("div"),la.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=la.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ci(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ci={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},O0=["Webkit","ms","Moz","O"];Object.keys(ci).forEach(function(e){O0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ci[t]=ci[e]})});function km(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ci.hasOwnProperty(e)&&ci[e]?(""+t).trim():t+"px"}function Cm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=km(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var A0=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dl(e,t){if(t){if(A0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function Fl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bl=null;function sc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hl=null,wr=null,Sr=null;function Df(e){if(e=Zi(e)){if(typeof Hl!="function")throw Error(z(280));var t=e.stateNode;t&&(t=qo(t),Hl(e.stateNode,e.type,t))}}function Tm(e){wr?Sr?Sr.push(e):Sr=[e]:wr=e}function Pm(){if(wr){var e=wr,t=Sr;if(Sr=wr=null,Df(e),t)for(e=0;e<t.length;e++)Df(t[e])}}function Om(e,t){return e(t)}function Am(){}var zs=!1;function Lm(e,t,n){if(zs)return e(t,n);zs=!0;try{return Om(e,t,n)}finally{zs=!1,(wr!==null||Sr!==null)&&(Am(),Pm())}}function Ti(e,t){var n=e.stateNode;if(n===null)return null;var r=qo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var Ul=!1;if(Rt)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){Ul=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{Ul=!1}function L0(e,t,n,r,i,a,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var fi=!1,uo=null,co=!1,Vl=null,N0={onError:function(e){fi=!0,uo=e}};function I0(e,t,n,r,i,a,o,l,s){fi=!1,uo=null,L0.apply(N0,arguments)}function _0(e,t,n,r,i,a,o,l,s){if(I0.apply(this,arguments),fi){if(fi){var u=uo;fi=!1,uo=null}else throw Error(z(198));co||(co=!0,Vl=u)}}function Qn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Nm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ff(e){if(Qn(e)!==e)throw Error(z(188))}function j0(e){var t=e.alternate;if(!t){if(t=Qn(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Ff(i),e;if(a===r)return Ff(i),t;a=a.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function Im(e){return e=j0(e),e!==null?_m(e):null}function _m(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_m(e);if(t!==null)return t;e=e.sibling}return null}var jm=Je.unstable_scheduleCallback,Bf=Je.unstable_cancelCallback,M0=Je.unstable_shouldYield,z0=Je.unstable_requestPaint,ve=Je.unstable_now,$0=Je.unstable_getCurrentPriorityLevel,lc=Je.unstable_ImmediatePriority,Mm=Je.unstable_UserBlockingPriority,fo=Je.unstable_NormalPriority,R0=Je.unstable_LowPriority,zm=Je.unstable_IdlePriority,Yo=null,At=null;function D0(e){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Yo,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:H0,F0=Math.log,B0=Math.LN2;function H0(e){return e>>>=0,e===0?32:31-(F0(e)/B0|0)|0}var ua=64,ca=4194304;function ai(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function po(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ai(l):(a&=o,a!==0&&(r=ai(a)))}else o=n&~i,o!==0?r=ai(o):a!==0&&(r=ai(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),i=1<<n,r|=e[n],t&=~i;return r}function U0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-xt(a),l=1<<o,s=i[o];s===-1?(!(l&n)||l&r)&&(i[o]=U0(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function Wl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $m(){var e=ua;return ua<<=1,!(ua&4194240)&&(ua=64),e}function $s(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function W0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-xt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function uc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ee=0;function Rm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Dm,cc,Fm,Bm,Hm,Gl=!1,fa=[],un=null,cn=null,fn=null,Pi=new Map,Oi=new Map,tn=[],G0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hf(e,t){switch(e){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":cn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":Pi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oi.delete(t.pointerId)}}function Qr(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Zi(t),t!==null&&cc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Y0(e,t,n,r,i){switch(t){case"focusin":return un=Qr(un,e,t,n,r,i),!0;case"dragenter":return cn=Qr(cn,e,t,n,r,i),!0;case"mouseover":return fn=Qr(fn,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Pi.set(a,Qr(Pi.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Oi.set(a,Qr(Oi.get(a)||null,e,t,n,r,i)),!0}return!1}function Um(e){var t=Ln(e.target);if(t!==null){var n=Qn(t);if(n!==null){if(t=n.tag,t===13){if(t=Nm(n),t!==null){e.blockedOn=t,Hm(e.priority,function(){Fm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Va(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bl=r,n.target.dispatchEvent(r),Bl=null}else return t=Zi(n),t!==null&&cc(t),e.blockedOn=n,!1;t.shift()}return!0}function Uf(e,t,n){Va(e)&&n.delete(t)}function K0(){Gl=!1,un!==null&&Va(un)&&(un=null),cn!==null&&Va(cn)&&(cn=null),fn!==null&&Va(fn)&&(fn=null),Pi.forEach(Uf),Oi.forEach(Uf)}function qr(e,t){e.blockedOn===t&&(e.blockedOn=null,Gl||(Gl=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,K0)))}function Ai(e){function t(i){return qr(i,e)}if(0<fa.length){qr(fa[0],e);for(var n=1;n<fa.length;n++){var r=fa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(un!==null&&qr(un,e),cn!==null&&qr(cn,e),fn!==null&&qr(fn,e),Pi.forEach(t),Oi.forEach(t),n=0;n<tn.length;n++)r=tn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tn.length&&(n=tn[0],n.blockedOn===null);)Um(n),n.blockedOn===null&&tn.shift()}var br=Wt.ReactCurrentBatchConfig,mo=!0;function X0(e,t,n,r){var i=ee,a=br.transition;br.transition=null;try{ee=1,fc(e,t,n,r)}finally{ee=i,br.transition=a}}function Q0(e,t,n,r){var i=ee,a=br.transition;br.transition=null;try{ee=4,fc(e,t,n,r)}finally{ee=i,br.transition=a}}function fc(e,t,n,r){if(mo){var i=Yl(e,t,n,r);if(i===null)Ys(e,t,r,ho,n),Hf(e,r);else if(Y0(i,e,t,n,r))r.stopPropagation();else if(Hf(e,r),t&4&&-1<G0.indexOf(e)){for(;i!==null;){var a=Zi(i);if(a!==null&&Dm(a),a=Yl(e,t,n,r),a===null&&Ys(e,t,r,ho,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Ys(e,t,r,null,n)}}var ho=null;function Yl(e,t,n,r){if(ho=null,e=sc(r),e=Ln(e),e!==null)if(t=Qn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Nm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ho=e,null}function Vm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($0()){case lc:return 1;case Mm:return 4;case fo:case R0:return 16;case zm:return 536870912;default:return 16}default:return 16}}var an=null,dc=null,Wa=null;function Wm(){if(Wa)return Wa;var e,t=dc,n=t.length,r,i="value"in an?an.value:an.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Wa=i.slice(e,1<r?1-r:void 0)}function Ga(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function da(){return!0}function Vf(){return!1}function tt(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?da:Vf,this.isPropagationStopped=Vf,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=da)},persist:function(){},isPersistent:da}),t}var Hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pc=tt(Hr),qi=pe({},Hr,{view:0,detail:0}),q0=tt(qi),Rs,Ds,Zr,Ko=pe({},qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zr&&(Zr&&e.type==="mousemove"?(Rs=e.screenX-Zr.screenX,Ds=e.screenY-Zr.screenY):Ds=Rs=0,Zr=e),Rs)},movementY:function(e){return"movementY"in e?e.movementY:Ds}}),Wf=tt(Ko),Z0=pe({},Ko,{dataTransfer:0}),J0=tt(Z0),e1=pe({},qi,{relatedTarget:0}),Fs=tt(e1),t1=pe({},Hr,{animationName:0,elapsedTime:0,pseudoElement:0}),n1=tt(t1),r1=pe({},Hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),i1=tt(r1),a1=pe({},Hr,{data:0}),Gf=tt(a1),o1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},s1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},l1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=l1[e])?!!t[e]:!1}function mc(){return u1}var c1=pe({},qi,{key:function(e){if(e.key){var t=o1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ga(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?s1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mc,charCode:function(e){return e.type==="keypress"?Ga(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ga(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),f1=tt(c1),d1=pe({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yf=tt(d1),p1=pe({},qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mc}),m1=tt(p1),h1=pe({},Hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),g1=tt(h1),v1=pe({},Ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),y1=tt(v1),x1=[9,13,27,32],hc=Rt&&"CompositionEvent"in window,di=null;Rt&&"documentMode"in document&&(di=document.documentMode);var w1=Rt&&"TextEvent"in window&&!di,Gm=Rt&&(!hc||di&&8<di&&11>=di),Kf=String.fromCharCode(32),Xf=!1;function Ym(e,t){switch(e){case"keyup":return x1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Km(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ar=!1;function S1(e,t){switch(e){case"compositionend":return Km(t);case"keypress":return t.which!==32?null:(Xf=!0,Kf);case"textInput":return e=t.data,e===Kf&&Xf?null:e;default:return null}}function b1(e,t){if(ar)return e==="compositionend"||!hc&&Ym(e,t)?(e=Wm(),Wa=dc=an=null,ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gm&&t.locale!=="ko"?null:t.data;default:return null}}var E1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!E1[e.type]:t==="textarea"}function Xm(e,t,n,r){Tm(r),t=go(t,"onChange"),0<t.length&&(n=new pc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var pi=null,Li=null;function k1(e){oh(e,0)}function Xo(e){var t=lr(e);if(xm(t))return e}function C1(e,t){if(e==="change")return t}var Qm=!1;if(Rt){var Bs;if(Rt){var Hs="oninput"in document;if(!Hs){var qf=document.createElement("div");qf.setAttribute("oninput","return;"),Hs=typeof qf.oninput=="function"}Bs=Hs}else Bs=!1;Qm=Bs&&(!document.documentMode||9<document.documentMode)}function Zf(){pi&&(pi.detachEvent("onpropertychange",qm),Li=pi=null)}function qm(e){if(e.propertyName==="value"&&Xo(Li)){var t=[];Xm(t,Li,e,sc(e)),Lm(k1,t)}}function T1(e,t,n){e==="focusin"?(Zf(),pi=t,Li=n,pi.attachEvent("onpropertychange",qm)):e==="focusout"&&Zf()}function P1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xo(Li)}function O1(e,t){if(e==="click")return Xo(t)}function A1(e,t){if(e==="input"||e==="change")return Xo(t)}function L1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var bt=typeof Object.is=="function"?Object.is:L1;function Ni(e,t){if(bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Al.call(t,i)||!bt(e[i],t[i]))return!1}return!0}function Jf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ed(e,t){var n=Jf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jf(n)}}function Zm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jm(){for(var e=window,t=lo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=lo(e.document)}return t}function gc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function N1(e){var t=Jm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zm(n.ownerDocument.documentElement,n)){if(r!==null&&gc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=ed(n,a);var o=ed(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var I1=Rt&&"documentMode"in document&&11>=document.documentMode,or=null,Kl=null,mi=null,Xl=!1;function td(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xl||or==null||or!==lo(r)||(r=or,"selectionStart"in r&&gc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mi&&Ni(mi,r)||(mi=r,r=go(Kl,"onSelect"),0<r.length&&(t=new pc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=or)))}function pa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var sr={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionend:pa("Transition","TransitionEnd")},Us={},eh={};Rt&&(eh=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function Qo(e){if(Us[e])return Us[e];if(!sr[e])return e;var t=sr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in eh)return Us[e]=t[n];return e}var th=Qo("animationend"),nh=Qo("animationiteration"),rh=Qo("animationstart"),ih=Qo("transitionend"),ah=new Map,nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bn(e,t){ah.set(e,t),Xn(t,[e])}for(var Vs=0;Vs<nd.length;Vs++){var Ws=nd[Vs],_1=Ws.toLowerCase(),j1=Ws[0].toUpperCase()+Ws.slice(1);bn(_1,"on"+j1)}bn(th,"onAnimationEnd");bn(nh,"onAnimationIteration");bn(rh,"onAnimationStart");bn("dblclick","onDoubleClick");bn("focusin","onFocus");bn("focusout","onBlur");bn(ih,"onTransitionEnd");Tr("onMouseEnter",["mouseout","mouseover"]);Tr("onMouseLeave",["mouseout","mouseover"]);Tr("onPointerEnter",["pointerout","pointerover"]);Tr("onPointerLeave",["pointerout","pointerover"]);Xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),M1=new Set("cancel close invalid load scroll toggle".split(" ").concat(oi));function rd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_0(r,t,void 0,e),e.currentTarget=null}function oh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&i.isPropagationStopped())break e;rd(i,l,u),a=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,u=l.currentTarget,l=l.listener,s!==a&&i.isPropagationStopped())break e;rd(i,l,u),a=s}}}if(co)throw e=Vl,co=!1,Vl=null,e}function ae(e,t){var n=t[eu];n===void 0&&(n=t[eu]=new Set);var r=e+"__bubble";n.has(r)||(sh(t,e,2,!1),n.add(r))}function Gs(e,t,n){var r=0;t&&(r|=4),sh(n,e,r,t)}var ma="_reactListening"+Math.random().toString(36).slice(2);function Ii(e){if(!e[ma]){e[ma]=!0,mm.forEach(function(n){n!=="selectionchange"&&(M1.has(n)||Gs(n,!1,e),Gs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ma]||(t[ma]=!0,Gs("selectionchange",!1,t))}}function sh(e,t,n,r){switch(Vm(t)){case 1:var i=X0;break;case 4:i=Q0;break;default:i=fc}n=i.bind(null,t,n,e),i=void 0,!Ul||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ys(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ln(l),o===null)return;if(s=o.tag,s===5||s===6){r=a=o;continue e}l=l.parentNode}}r=r.return}Lm(function(){var u=a,c=sc(n),d=[];e:{var m=ah.get(e);if(m!==void 0){var g=pc,w=e;switch(e){case"keypress":if(Ga(n)===0)break e;case"keydown":case"keyup":g=f1;break;case"focusin":w="focus",g=Fs;break;case"focusout":w="blur",g=Fs;break;case"beforeblur":case"afterblur":g=Fs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Wf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=J0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=m1;break;case th:case nh:case rh:g=n1;break;case ih:g=g1;break;case"scroll":g=q0;break;case"wheel":g=y1;break;case"copy":case"cut":case"paste":g=i1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Yf}var v=(t&4)!==0,S=!v&&e==="scroll",h=v?m!==null?m+"Capture":null:m;v=[];for(var f=u,p;f!==null;){p=f;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,h!==null&&(x=Ti(f,h),x!=null&&v.push(_i(f,x,p)))),S)break;f=f.return}0<v.length&&(m=new g(m,w,null,n,c),d.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==Bl&&(w=n.relatedTarget||n.fromElement)&&(Ln(w)||w[Dt]))break e;if((g||m)&&(m=c.window===c?c:(m=c.ownerDocument)?m.defaultView||m.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=u,w=w?Ln(w):null,w!==null&&(S=Qn(w),w!==S||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=u),g!==w)){if(v=Wf,x="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(v=Yf,x="onPointerLeave",h="onPointerEnter",f="pointer"),S=g==null?m:lr(g),p=w==null?m:lr(w),m=new v(x,f+"leave",g,n,c),m.target=S,m.relatedTarget=p,x=null,Ln(c)===u&&(v=new v(h,f+"enter",w,n,c),v.target=p,v.relatedTarget=S,x=v),S=x,g&&w)t:{for(v=g,h=w,f=0,p=v;p;p=Jn(p))f++;for(p=0,x=h;x;x=Jn(x))p++;for(;0<f-p;)v=Jn(v),f--;for(;0<p-f;)h=Jn(h),p--;for(;f--;){if(v===h||h!==null&&v===h.alternate)break t;v=Jn(v),h=Jn(h)}v=null}else v=null;g!==null&&id(d,m,g,v,!1),w!==null&&S!==null&&id(d,S,w,v,!0)}}e:{if(m=u?lr(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var b=C1;else if(Qf(m))if(Qm)b=A1;else{b=P1;var T=T1}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(b=O1);if(b&&(b=b(e,u))){Xm(d,b,n,c);break e}T&&T(e,m,u),e==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&zl(m,"number",m.value)}switch(T=u?lr(u):window,e){case"focusin":(Qf(T)||T.contentEditable==="true")&&(or=T,Kl=u,mi=null);break;case"focusout":mi=Kl=or=null;break;case"mousedown":Xl=!0;break;case"contextmenu":case"mouseup":case"dragend":Xl=!1,td(d,n,c);break;case"selectionchange":if(I1)break;case"keydown":case"keyup":td(d,n,c)}var E;if(hc)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else ar?Ym(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Gm&&n.locale!=="ko"&&(ar||L!=="onCompositionStart"?L==="onCompositionEnd"&&ar&&(E=Wm()):(an=c,dc="value"in an?an.value:an.textContent,ar=!0)),T=go(u,L),0<T.length&&(L=new Gf(L,e,null,n,c),d.push({event:L,listeners:T}),E?L.data=E:(E=Km(n),E!==null&&(L.data=E)))),(E=w1?S1(e,n):b1(e,n))&&(u=go(u,"onBeforeInput"),0<u.length&&(c=new Gf("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=E))}oh(d,t)})}function _i(e,t,n){return{instance:e,listener:t,currentTarget:n}}function go(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Ti(e,n),a!=null&&r.unshift(_i(e,a,i)),a=Ti(e,t),a!=null&&r.push(_i(e,a,i))),e=e.return}return r}function Jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function id(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=Ti(n,a),s!=null&&o.unshift(_i(n,s,l))):i||(s=Ti(n,a),s!=null&&o.push(_i(n,s,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var z1=/\r\n?/g,$1=/\u0000|\uFFFD/g;function ad(e){return(typeof e=="string"?e:""+e).replace(z1,`
`).replace($1,"")}function ha(e,t,n){if(t=ad(t),ad(e)!==t&&n)throw Error(z(425))}function vo(){}var Ql=null,ql=null;function Zl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Jl=typeof setTimeout=="function"?setTimeout:void 0,R1=typeof clearTimeout=="function"?clearTimeout:void 0,od=typeof Promise=="function"?Promise:void 0,D1=typeof queueMicrotask=="function"?queueMicrotask:typeof od<"u"?function(e){return od.resolve(null).then(e).catch(F1)}:Jl;function F1(e){setTimeout(function(){throw e})}function Ks(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ai(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ai(t)}function dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function sd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ur=Math.random().toString(36).slice(2),Tt="__reactFiber$"+Ur,ji="__reactProps$"+Ur,Dt="__reactContainer$"+Ur,eu="__reactEvents$"+Ur,B1="__reactListeners$"+Ur,H1="__reactHandles$"+Ur;function Ln(e){var t=e[Tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Dt]||n[Tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sd(e);e!==null;){if(n=e[Tt])return n;e=sd(e)}return t}e=n,n=e.parentNode}return null}function Zi(e){return e=e[Tt]||e[Dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function lr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function qo(e){return e[ji]||null}var tu=[],ur=-1;function En(e){return{current:e}}function le(e){0>ur||(e.current=tu[ur],tu[ur]=null,ur--)}function ne(e,t){ur++,tu[ur]=e.current,e.current=t}var yn={},_e=En(yn),Ue=En(!1),Bn=yn;function Pr(e,t){var n=e.type.contextTypes;if(!n)return yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ve(e){return e=e.childContextTypes,e!=null}function yo(){le(Ue),le(_e)}function ld(e,t,n){if(_e.current!==yn)throw Error(z(168));ne(_e,t),ne(Ue,n)}function lh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(z(108,T0(e)||"Unknown",i));return pe({},n,r)}function xo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yn,Bn=_e.current,ne(_e,e),ne(Ue,Ue.current),!0}function ud(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=lh(e,t,Bn),r.__reactInternalMemoizedMergedChildContext=e,le(Ue),le(_e),ne(_e,e)):le(Ue),ne(Ue,n)}var jt=null,Zo=!1,Xs=!1;function uh(e){jt===null?jt=[e]:jt.push(e)}function U1(e){Zo=!0,uh(e)}function kn(){if(!Xs&&jt!==null){Xs=!0;var e=0,t=ee;try{var n=jt;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}jt=null,Zo=!1}catch(i){throw jt!==null&&(jt=jt.slice(e+1)),jm(lc,kn),i}finally{ee=t,Xs=!1}}return null}var cr=[],fr=0,wo=null,So=0,at=[],ot=0,Hn=null,Mt=1,zt="";function Tn(e,t){cr[fr++]=So,cr[fr++]=wo,wo=e,So=t}function ch(e,t,n){at[ot++]=Mt,at[ot++]=zt,at[ot++]=Hn,Hn=e;var r=Mt;e=zt;var i=32-xt(r)-1;r&=~(1<<i),n+=1;var a=32-xt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mt=1<<32-xt(t)+i|n<<i|r,zt=a+e}else Mt=1<<a|n<<i|r,zt=e}function vc(e){e.return!==null&&(Tn(e,1),ch(e,1,0))}function yc(e){for(;e===wo;)wo=cr[--fr],cr[fr]=null,So=cr[--fr],cr[fr]=null;for(;e===Hn;)Hn=at[--ot],at[ot]=null,zt=at[--ot],at[ot]=null,Mt=at[--ot],at[ot]=null}var Ze=null,Qe=null,ce=!1,vt=null;function fh(e,t){var n=st(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function cd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ze=e,Qe=dn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ze=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Hn!==null?{id:Mt,overflow:zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=st(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ze=e,Qe=null,!0):!1;default:return!1}}function nu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ru(e){if(ce){var t=Qe;if(t){var n=t;if(!cd(e,t)){if(nu(e))throw Error(z(418));t=dn(n.nextSibling);var r=Ze;t&&cd(e,t)?fh(r,n):(e.flags=e.flags&-4097|2,ce=!1,Ze=e)}}else{if(nu(e))throw Error(z(418));e.flags=e.flags&-4097|2,ce=!1,Ze=e}}}function fd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function ga(e){if(e!==Ze)return!1;if(!ce)return fd(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zl(e.type,e.memoizedProps)),t&&(t=Qe)){if(nu(e))throw dh(),Error(z(418));for(;t;)fh(e,t),t=dn(t.nextSibling)}if(fd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Qe=dn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=Ze?dn(e.stateNode.nextSibling):null;return!0}function dh(){for(var e=Qe;e;)e=dn(e.nextSibling)}function Or(){Qe=Ze=null,ce=!1}function xc(e){vt===null?vt=[e]:vt.push(e)}var V1=Wt.ReactCurrentBatchConfig;function ht(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var bo=En(null),Eo=null,dr=null,wc=null;function Sc(){wc=dr=Eo=null}function bc(e){var t=bo.current;le(bo),e._currentValue=t}function iu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Er(e,t){Eo=e,wc=dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Be=!0),e.firstContext=null)}function ut(e){var t=e._currentValue;if(wc!==e)if(e={context:e,memoizedValue:t,next:null},dr===null){if(Eo===null)throw Error(z(308));dr=e,Eo.dependencies={lanes:0,firstContext:e}}else dr=dr.next=e;return t}var Nn=null;function Ec(e){Nn===null?Nn=[e]:Nn.push(e)}function ph(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ec(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ft(e,r)}function Ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var en=!1;function kc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ft(e,n)}return i=r.interleaved,i===null?(t.next=t,Ec(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ft(e,n)}function Ya(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,uc(e,n)}}function dd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ko(e,t,n,r){var i=e.updateQueue;en=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,o===null?a=u:o.next=u,o=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(a!==null){var d=i.baseState;o=0,c=u=s=null,l=a;do{var m=l.lane,g=l.eventTime;if((r&m)===m){c!==null&&(c=c.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,v=l;switch(m=t,g=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){d=w.call(g,d,m);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,m=typeof w=="function"?w.call(g,d,m):w,m==null)break e;d=pe({},d,m);break e;case 2:en=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else g={eventTime:g,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=g,s=d):c=c.next=g,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(c===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Vn|=o,e.lanes=o,e.memoizedState=d}}function pd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var hh=new pm.Component().refs;function au(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Jo={isMounted:function(e){return(e=e._reactInternals)?Qn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ze(),i=hn(e),a=$t(r,i);a.payload=t,n!=null&&(a.callback=n),t=pn(e,a,i),t!==null&&(wt(t,e,i,r),Ya(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ze(),i=hn(e),a=$t(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=pn(e,a,i),t!==null&&(wt(t,e,i,r),Ya(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ze(),r=hn(e),i=$t(n,r);i.tag=2,t!=null&&(i.callback=t),t=pn(e,i,r),t!==null&&(wt(t,e,r,n),Ya(t,e,r))}};function md(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ni(n,r)||!Ni(i,a):!0}function gh(e,t,n){var r=!1,i=yn,a=t.contextType;return typeof a=="object"&&a!==null?a=ut(a):(i=Ve(t)?Bn:_e.current,r=t.contextTypes,a=(r=r!=null)?Pr(e,i):yn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Jo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function hd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Jo.enqueueReplaceState(t,t.state,null)}function ou(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=hh,kc(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=ut(a):(a=Ve(t)?Bn:_e.current,i.context=Pr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(au(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Jo.enqueueReplaceState(i,i.state,null),ko(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Jr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=i.refs;l===hh&&(l=i.refs={}),o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function va(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gd(e){var t=e._init;return t(e._payload)}function vh(e){function t(h,f){if(e){var p=h.deletions;p===null?(h.deletions=[f],h.flags|=16):p.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function i(h,f){return h=gn(h,f),h.index=0,h.sibling=null,h}function a(h,f,p){return h.index=p,e?(p=h.alternate,p!==null?(p=p.index,p<f?(h.flags|=2,f):p):(h.flags|=2,f)):(h.flags|=1048576,f)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,f,p,x){return f===null||f.tag!==6?(f=nl(p,h.mode,x),f.return=h,f):(f=i(f,p),f.return=h,f)}function s(h,f,p,x){var b=p.type;return b===ir?c(h,f,p.props.children,x,p.key):f!==null&&(f.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Jt&&gd(b)===f.type)?(x=i(f,p.props),x.ref=Jr(h,f,p),x.return=h,x):(x=Ja(p.type,p.key,p.props,null,h.mode,x),x.ref=Jr(h,f,p),x.return=h,x)}function u(h,f,p,x){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=rl(p,h.mode,x),f.return=h,f):(f=i(f,p.children||[]),f.return=h,f)}function c(h,f,p,x,b){return f===null||f.tag!==7?(f=$n(p,h.mode,x,b),f.return=h,f):(f=i(f,p),f.return=h,f)}function d(h,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=nl(""+f,h.mode,p),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case oa:return p=Ja(f.type,f.key,f.props,null,h.mode,p),p.ref=Jr(h,null,f),p.return=h,p;case rr:return f=rl(f,h.mode,p),f.return=h,f;case Jt:var x=f._init;return d(h,x(f._payload),p)}if(ii(f)||Kr(f))return f=$n(f,h.mode,p,null),f.return=h,f;va(h,f)}return null}function m(h,f,p,x){var b=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return b!==null?null:l(h,f,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case oa:return p.key===b?s(h,f,p,x):null;case rr:return p.key===b?u(h,f,p,x):null;case Jt:return b=p._init,m(h,f,b(p._payload),x)}if(ii(p)||Kr(p))return b!==null?null:c(h,f,p,x,null);va(h,p)}return null}function g(h,f,p,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(p)||null,l(f,h,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case oa:return h=h.get(x.key===null?p:x.key)||null,s(f,h,x,b);case rr:return h=h.get(x.key===null?p:x.key)||null,u(f,h,x,b);case Jt:var T=x._init;return g(h,f,p,T(x._payload),b)}if(ii(x)||Kr(x))return h=h.get(p)||null,c(f,h,x,b,null);va(f,x)}return null}function w(h,f,p,x){for(var b=null,T=null,E=f,L=f=0,P=null;E!==null&&L<p.length;L++){E.index>L?(P=E,E=null):P=E.sibling;var R=m(h,E,p[L],x);if(R===null){E===null&&(E=P);break}e&&E&&R.alternate===null&&t(h,E),f=a(R,f,L),T===null?b=R:T.sibling=R,T=R,E=P}if(L===p.length)return n(h,E),ce&&Tn(h,L),b;if(E===null){for(;L<p.length;L++)E=d(h,p[L],x),E!==null&&(f=a(E,f,L),T===null?b=E:T.sibling=E,T=E);return ce&&Tn(h,L),b}for(E=r(h,E);L<p.length;L++)P=g(E,h,L,p[L],x),P!==null&&(e&&P.alternate!==null&&E.delete(P.key===null?L:P.key),f=a(P,f,L),T===null?b=P:T.sibling=P,T=P);return e&&E.forEach(function(_){return t(h,_)}),ce&&Tn(h,L),b}function v(h,f,p,x){var b=Kr(p);if(typeof b!="function")throw Error(z(150));if(p=b.call(p),p==null)throw Error(z(151));for(var T=b=null,E=f,L=f=0,P=null,R=p.next();E!==null&&!R.done;L++,R=p.next()){E.index>L?(P=E,E=null):P=E.sibling;var _=m(h,E,R.value,x);if(_===null){E===null&&(E=P);break}e&&E&&_.alternate===null&&t(h,E),f=a(_,f,L),T===null?b=_:T.sibling=_,T=_,E=P}if(R.done)return n(h,E),ce&&Tn(h,L),b;if(E===null){for(;!R.done;L++,R=p.next())R=d(h,R.value,x),R!==null&&(f=a(R,f,L),T===null?b=R:T.sibling=R,T=R);return ce&&Tn(h,L),b}for(E=r(h,E);!R.done;L++,R=p.next())R=g(E,h,L,R.value,x),R!==null&&(e&&R.alternate!==null&&E.delete(R.key===null?L:R.key),f=a(R,f,L),T===null?b=R:T.sibling=R,T=R);return e&&E.forEach(function(I){return t(h,I)}),ce&&Tn(h,L),b}function S(h,f,p,x){if(typeof p=="object"&&p!==null&&p.type===ir&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case oa:e:{for(var b=p.key,T=f;T!==null;){if(T.key===b){if(b=p.type,b===ir){if(T.tag===7){n(h,T.sibling),f=i(T,p.props.children),f.return=h,h=f;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Jt&&gd(b)===T.type){n(h,T.sibling),f=i(T,p.props),f.ref=Jr(h,T,p),f.return=h,h=f;break e}n(h,T);break}else t(h,T);T=T.sibling}p.type===ir?(f=$n(p.props.children,h.mode,x,p.key),f.return=h,h=f):(x=Ja(p.type,p.key,p.props,null,h.mode,x),x.ref=Jr(h,f,p),x.return=h,h=x)}return o(h);case rr:e:{for(T=p.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(h,f.sibling),f=i(f,p.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=rl(p,h.mode,x),f.return=h,h=f}return o(h);case Jt:return T=p._init,S(h,f,T(p._payload),x)}if(ii(p))return w(h,f,p,x);if(Kr(p))return v(h,f,p,x);va(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(n(h,f.sibling),f=i(f,p),f.return=h,h=f):(n(h,f),f=nl(p,h.mode,x),f.return=h,h=f),o(h)):n(h,f)}return S}var Ar=vh(!0),yh=vh(!1),Ji={},Lt=En(Ji),Mi=En(Ji),zi=En(Ji);function In(e){if(e===Ji)throw Error(z(174));return e}function Cc(e,t){switch(ne(zi,t),ne(Mi,e),ne(Lt,Ji),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Rl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Rl(t,e)}le(Lt),ne(Lt,t)}function Lr(){le(Lt),le(Mi),le(zi)}function xh(e){In(zi.current);var t=In(Lt.current),n=Rl(t,e.type);t!==n&&(ne(Mi,e),ne(Lt,n))}function Tc(e){Mi.current===e&&(le(Lt),le(Mi))}var fe=En(0);function Co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qs=[];function Pc(){for(var e=0;e<Qs.length;e++)Qs[e]._workInProgressVersionPrimary=null;Qs.length=0}var Ka=Wt.ReactCurrentDispatcher,qs=Wt.ReactCurrentBatchConfig,Un=0,de=null,we=null,Ee=null,To=!1,hi=!1,$i=0,W1=0;function Le(){throw Error(z(321))}function Oc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!bt(e[n],t[n]))return!1;return!0}function Ac(e,t,n,r,i,a){if(Un=a,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ka.current=e===null||e.memoizedState===null?X1:Q1,e=n(r,i),hi){a=0;do{if(hi=!1,$i=0,25<=a)throw Error(z(301));a+=1,Ee=we=null,t.updateQueue=null,Ka.current=q1,e=n(r,i)}while(hi)}if(Ka.current=Po,t=we!==null&&we.next!==null,Un=0,Ee=we=de=null,To=!1,t)throw Error(z(300));return e}function Lc(){var e=$i!==0;return $i=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?de.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function ct(){if(we===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=Ee===null?de.memoizedState:Ee.next;if(t!==null)Ee=t,we=e;else{if(e===null)throw Error(z(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Ee===null?de.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function Ri(e,t){return typeof t=="function"?t(e):t}function Zs(e){var t=ct(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=we,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=o=null,s=null,u=a;do{var c=u.lane;if((Un&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,o=r):s=s.next=d,de.lanes|=c,Vn|=c}u=u.next}while(u!==null&&u!==a);s===null?o=r:s.next=l,bt(r,t.memoizedState)||(Be=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,de.lanes|=a,Vn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Js(e){var t=ct(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);bt(a,t.memoizedState)||(Be=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function wh(){}function Sh(e,t){var n=de,r=ct(),i=t(),a=!bt(r.memoizedState,i);if(a&&(r.memoizedState=i,Be=!0),r=r.queue,Nc(kh.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,Di(9,Eh.bind(null,n,r,i,t),void 0,null),Ce===null)throw Error(z(349));Un&30||bh(n,t,i)}return i}function bh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Eh(e,t,n,r){t.value=n,t.getSnapshot=r,Ch(t)&&Th(e)}function kh(e,t,n){return n(function(){Ch(t)&&Th(e)})}function Ch(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!bt(e,n)}catch{return!0}}function Th(e){var t=Ft(e,1);t!==null&&wt(t,e,1,-1)}function vd(e){var t=kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ri,lastRenderedState:e},t.queue=e,e=e.dispatch=K1.bind(null,de,e),[t.memoizedState,e]}function Di(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ph(){return ct().memoizedState}function Xa(e,t,n,r){var i=kt();de.flags|=e,i.memoizedState=Di(1|t,n,void 0,r===void 0?null:r)}function es(e,t,n,r){var i=ct();r=r===void 0?null:r;var a=void 0;if(we!==null){var o=we.memoizedState;if(a=o.destroy,r!==null&&Oc(r,o.deps)){i.memoizedState=Di(t,n,a,r);return}}de.flags|=e,i.memoizedState=Di(1|t,n,a,r)}function yd(e,t){return Xa(8390656,8,e,t)}function Nc(e,t){return es(2048,8,e,t)}function Oh(e,t){return es(4,2,e,t)}function Ah(e,t){return es(4,4,e,t)}function Lh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nh(e,t,n){return n=n!=null?n.concat([e]):null,es(4,4,Lh.bind(null,t,e),n)}function Ic(){}function Ih(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _h(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function jh(e,t,n){return Un&21?(bt(n,t)||(n=$m(),de.lanes|=n,Vn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Be=!0),e.memoizedState=n)}function G1(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=qs.transition;qs.transition={};try{e(!1),t()}finally{ee=n,qs.transition=r}}function Mh(){return ct().memoizedState}function Y1(e,t,n){var r=hn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zh(e))$h(t,n);else if(n=ph(e,t,n,r),n!==null){var i=ze();wt(n,e,r,i),Rh(n,t,r)}}function K1(e,t,n){var r=hn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zh(e))$h(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(i.hasEagerState=!0,i.eagerState=l,bt(l,o)){var s=t.interleaved;s===null?(i.next=i,Ec(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=ph(e,t,i,r),n!==null&&(i=ze(),wt(n,e,r,i),Rh(n,t,r))}}function zh(e){var t=e.alternate;return e===de||t!==null&&t===de}function $h(e,t){hi=To=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,uc(e,n)}}var Po={readContext:ut,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},X1={readContext:ut,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:yd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xa(4194308,4,Lh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xa(4,2,e,t)},useMemo:function(e,t){var n=kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Y1.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:vd,useDebugValue:Ic,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=vd(!1),t=e[0];return e=G1.bind(null,e[1]),kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,i=kt();if(ce){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),Ce===null)throw Error(z(349));Un&30||bh(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,yd(kh.bind(null,r,a,e),[e]),r.flags|=2048,Di(9,Eh.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=kt(),t=Ce.identifierPrefix;if(ce){var n=zt,r=Mt;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$i++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=W1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Q1={readContext:ut,useCallback:Ih,useContext:ut,useEffect:Nc,useImperativeHandle:Nh,useInsertionEffect:Oh,useLayoutEffect:Ah,useMemo:_h,useReducer:Zs,useRef:Ph,useState:function(){return Zs(Ri)},useDebugValue:Ic,useDeferredValue:function(e){var t=ct();return jh(t,we.memoizedState,e)},useTransition:function(){var e=Zs(Ri)[0],t=ct().memoizedState;return[e,t]},useMutableSource:wh,useSyncExternalStore:Sh,useId:Mh,unstable_isNewReconciler:!1},q1={readContext:ut,useCallback:Ih,useContext:ut,useEffect:Nc,useImperativeHandle:Nh,useInsertionEffect:Oh,useLayoutEffect:Ah,useMemo:_h,useReducer:Js,useRef:Ph,useState:function(){return Js(Ri)},useDebugValue:Ic,useDeferredValue:function(e){var t=ct();return we===null?t.memoizedState=e:jh(t,we.memoizedState,e)},useTransition:function(){var e=Js(Ri)[0],t=ct().memoizedState;return[e,t]},useMutableSource:wh,useSyncExternalStore:Sh,useId:Mh,unstable_isNewReconciler:!1};function Nr(e,t){try{var n="",r=t;do n+=C0(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function el(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function su(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Z1=typeof WeakMap=="function"?WeakMap:Map;function Dh(e,t,n){n=$t(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ao||(Ao=!0,vu=r),su(e,t)},n}function Fh(e,t,n){n=$t(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){su(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){su(e,t),typeof r!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function xd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Z1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=dy.bind(null,e,t,n),t.then(e,e))}function wd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Sd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$t(-1,1),t.tag=2,pn(n,t,1))),n.lanes|=1),e)}var J1=Wt.ReactCurrentOwner,Be=!1;function Me(e,t,n,r){t.child=e===null?yh(t,null,n,r):Ar(t,e.child,n,r)}function bd(e,t,n,r,i){n=n.render;var a=t.ref;return Er(t,i),r=Ac(e,t,n,r,a,i),n=Lc(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Bt(e,t,i)):(ce&&n&&vc(t),t.flags|=1,Me(e,t,r,i),t.child)}function Ed(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Fc(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Bh(e,t,a,r,i)):(e=Ja(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ni,n(o,r)&&e.ref===t.ref)return Bt(e,t,i)}return t.flags|=1,e=gn(a,r),e.ref=t.ref,e.return=t,t.child=e}function Bh(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ni(a,r)&&e.ref===t.ref)if(Be=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Be=!0);else return t.lanes=e.lanes,Bt(e,t,i)}return lu(e,t,n,r,i)}function Hh(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(mr,Ke),Ke|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(mr,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ne(mr,Ke),Ke|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ne(mr,Ke),Ke|=r;return Me(e,t,i,n),t.child}function Uh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function lu(e,t,n,r,i){var a=Ve(n)?Bn:_e.current;return a=Pr(t,a),Er(t,i),n=Ac(e,t,n,r,a,i),r=Lc(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Bt(e,t,i)):(ce&&r&&vc(t),t.flags|=1,Me(e,t,n,i),t.child)}function kd(e,t,n,r,i){if(Ve(n)){var a=!0;xo(t)}else a=!1;if(Er(t,i),t.stateNode===null)Qa(e,t),gh(t,n,r),ou(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ut(u):(u=Ve(n)?Bn:_e.current,u=Pr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==u)&&hd(t,o,r,u),en=!1;var m=t.memoizedState;o.state=m,ko(t,r,o,i),s=t.memoizedState,l!==r||m!==s||Ue.current||en?(typeof c=="function"&&(au(t,n,c,r),s=t.memoizedState),(l=en||md(t,n,l,r,m,s,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,mh(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:ht(t.type,l),o.props=u,d=t.pendingProps,m=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=ut(s):(s=Ve(n)?Bn:_e.current,s=Pr(t,s));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||m!==s)&&hd(t,o,r,s),en=!1,m=t.memoizedState,o.state=m,ko(t,r,o,i);var w=t.memoizedState;l!==d||m!==w||Ue.current||en?(typeof g=="function"&&(au(t,n,g,r),w=t.memoizedState),(u=en||md(t,n,u,r,m,w,s)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return uu(e,t,n,r,a,i)}function uu(e,t,n,r,i,a){Uh(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&ud(t,n,!1),Bt(e,t,a);r=t.stateNode,J1.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Ar(t,e.child,null,a),t.child=Ar(t,null,l,a)):Me(e,t,l,a),t.memoizedState=r.state,i&&ud(t,n,!0),t.child}function Vh(e){var t=e.stateNode;t.pendingContext?ld(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ld(e,t.context,!1),Cc(e,t.containerInfo)}function Cd(e,t,n,r,i){return Or(),xc(i),t.flags|=256,Me(e,t,n,r),t.child}var cu={dehydrated:null,treeContext:null,retryLane:0};function fu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wh(e,t,n){var r=t.pendingProps,i=fe.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ne(fe,i&1),e===null)return ru(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=rs(o,r,0,null),e=$n(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=fu(n),t.memoizedState=cu,e):_c(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ey(e,t,o,r,l,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=gn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=gn(l,a):(a=$n(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?fu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=cu,r}return a=e.child,e=a.sibling,r=gn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function _c(e,t){return t=rs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ya(e,t,n,r){return r!==null&&xc(r),Ar(t,e.child,null,n),e=_c(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ey(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=el(Error(z(422))),ya(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=rs({mode:"visible",children:r.children},i,0,null),a=$n(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Ar(t,e.child,null,o),t.child.memoizedState=fu(o),t.memoizedState=cu,a);if(!(t.mode&1))return ya(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(z(419)),r=el(a,r,void 0),ya(e,t,o,r)}if(l=(o&e.childLanes)!==0,Be||l){if(r=Ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Ft(e,i),wt(r,e,i,-1))}return Dc(),r=el(Error(z(421))),ya(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=py.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Qe=dn(i.nextSibling),Ze=t,ce=!0,vt=null,e!==null&&(at[ot++]=Mt,at[ot++]=zt,at[ot++]=Hn,Mt=e.id,zt=e.overflow,Hn=t),t=_c(t,r.children),t.flags|=4096,t)}function Td(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),iu(e.return,t,n)}function tl(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Gh(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Me(e,t,r.children,n),r=fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Td(e,n,t);else if(e.tag===19)Td(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(fe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Co(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),tl(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Co(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}tl(t,!0,n,null,a);break;case"together":tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ty(e,t,n){switch(t.tag){case 3:Vh(t),Or();break;case 5:xh(t);break;case 1:Ve(t.type)&&xo(t);break;case 4:Cc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ne(bo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(fe,fe.current&1),t.flags|=128,null):n&t.child.childLanes?Wh(e,t,n):(ne(fe,fe.current&1),e=Bt(e,t,n),e!==null?e.sibling:null);ne(fe,fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Gh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(fe,fe.current),r)break;return null;case 22:case 23:return t.lanes=0,Hh(e,t,n)}return Bt(e,t,n)}var Yh,du,Kh,Xh;Yh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};du=function(){};Kh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,In(Lt.current);var a=null;switch(n){case"input":i=jl(e,i),r=jl(e,r),a=[];break;case"select":i=pe({},i,{value:void 0}),r=pe({},r,{value:void 0}),a=[];break;case"textarea":i=$l(e,i),r=$l(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=vo)}Dl(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ki.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(a||(a=[]),a.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ki.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ae("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Xh=function(e,t,n,r){n!==r&&(t.flags|=4)};function ei(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ny(e,t,n){var r=t.pendingProps;switch(yc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Ve(t.type)&&yo(),Ne(t),null;case 3:return r=t.stateNode,Lr(),le(Ue),le(_e),Pc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ga(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,vt!==null&&(wu(vt),vt=null))),du(e,t),Ne(t),null;case 5:Tc(t);var i=In(zi.current);if(n=t.type,e!==null&&t.stateNode!=null)Kh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return Ne(t),null}if(e=In(Lt.current),ga(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Tt]=t,r[ji]=a,e=(t.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<oi.length;i++)ae(oi[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":Mf(r,a),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ae("invalid",r);break;case"textarea":$f(r,a),ae("invalid",r)}Dl(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&ha(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&ha(r.textContent,l,e),i=["children",""+l]):ki.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ae("scroll",r)}switch(n){case"input":sa(r),zf(r,a,!0);break;case"textarea":sa(r),Rf(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=vo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Tt]=t,e[ji]=r,Yh(e,t,!1,!1),t.stateNode=e;e:{switch(o=Fl(n,r),n){case"dialog":ae("cancel",e),ae("close",e),i=r;break;case"iframe":case"object":case"embed":ae("load",e),i=r;break;case"video":case"audio":for(i=0;i<oi.length;i++)ae(oi[i],e);i=r;break;case"source":ae("error",e),i=r;break;case"img":case"image":case"link":ae("error",e),ae("load",e),i=r;break;case"details":ae("toggle",e),i=r;break;case"input":Mf(e,r),i=jl(e,r),ae("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=pe({},r,{value:void 0}),ae("invalid",e);break;case"textarea":$f(e,r),i=$l(e,r),ae("invalid",e);break;default:i=r}Dl(n,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?Cm(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Em(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Ci(e,s):typeof s=="number"&&Ci(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ki.hasOwnProperty(a)?s!=null&&a==="onScroll"&&ae("scroll",e):s!=null&&rc(e,a,s,o))}switch(n){case"input":sa(e),zf(e,r,!1);break;case"textarea":sa(e),Rf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?xr(e,!!r.multiple,a,!1):r.defaultValue!=null&&xr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=vo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ne(t),null;case 6:if(e&&t.stateNode!=null)Xh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=In(zi.current),In(Lt.current),ga(t)){if(r=t.stateNode,n=t.memoizedProps,r[Tt]=t,(a=r.nodeValue!==n)&&(e=Ze,e!==null))switch(e.tag){case 3:ha(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ha(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tt]=t,t.stateNode=r}return Ne(t),null;case 13:if(le(fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&Qe!==null&&t.mode&1&&!(t.flags&128))dh(),Or(),t.flags|=98560,a=!1;else if(a=ga(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(z(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(z(317));a[Tt]=t}else Or(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ne(t),a=!1}else vt!==null&&(wu(vt),vt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||fe.current&1?Se===0&&(Se=3):Dc())),t.updateQueue!==null&&(t.flags|=4),Ne(t),null);case 4:return Lr(),du(e,t),e===null&&Ii(t.stateNode.containerInfo),Ne(t),null;case 10:return bc(t.type._context),Ne(t),null;case 17:return Ve(t.type)&&yo(),Ne(t),null;case 19:if(le(fe),a=t.memoizedState,a===null)return Ne(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)ei(a,!1);else{if(Se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Co(e),o!==null){for(t.flags|=128,ei(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(fe,fe.current&1|2),t.child}e=e.sibling}a.tail!==null&&ve()>Ir&&(t.flags|=128,r=!0,ei(a,!1),t.lanes=4194304)}else{if(!r)if(e=Co(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ei(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ce)return Ne(t),null}else 2*ve()-a.renderingStartTime>Ir&&n!==1073741824&&(t.flags|=128,r=!0,ei(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ve(),t.sibling=null,n=fe.current,ne(fe,r?n&1|2:n&1),t):(Ne(t),null);case 22:case 23:return Rc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ke&1073741824&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function ry(e,t){switch(yc(t),t.tag){case 1:return Ve(t.type)&&yo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Lr(),le(Ue),le(_e),Pc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Tc(t),null;case 13:if(le(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));Or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(fe),null;case 4:return Lr(),null;case 10:return bc(t.type._context),null;case 22:case 23:return Rc(),null;case 24:return null;default:return null}}var xa=!1,Ie=!1,iy=typeof WeakSet=="function"?WeakSet:Set,H=null;function pr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(e,t,r)}else n.current=null}function pu(e,t,n){try{n()}catch(r){he(e,t,r)}}var Pd=!1;function ay(e,t){if(Ql=mo,e=Jm(),gc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,u=0,c=0,d=e,m=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==a||r!==0&&d.nodeType!==3||(s=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)m=d,d=g;for(;;){if(d===e)break t;if(m===n&&++u===i&&(l=o),m===a&&++c===r&&(s=o),(g=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=g}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ql={focusedElem:e,selectionRange:n},mo=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,S=w.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?v:ht(t.type,v),S);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(x){he(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return w=Pd,Pd=!1,w}function gi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&pu(t,n,a)}i=i.next}while(i!==r)}}function ts(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function mu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Qh(e){var t=e.alternate;t!==null&&(e.alternate=null,Qh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Tt],delete t[ji],delete t[eu],delete t[B1],delete t[H1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qh(e){return e.tag===5||e.tag===3||e.tag===4}function Od(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vo));else if(r!==4&&(e=e.child,e!==null))for(hu(e,t,n),e=e.sibling;e!==null;)hu(e,t,n),e=e.sibling}function gu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(gu(e,t,n),e=e.sibling;e!==null;)gu(e,t,n),e=e.sibling}var Pe=null,gt=!1;function Qt(e,t,n){for(n=n.child;n!==null;)Zh(e,t,n),n=n.sibling}function Zh(e,t,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Yo,n)}catch{}switch(n.tag){case 5:Ie||pr(n,t);case 6:var r=Pe,i=gt;Pe=null,Qt(e,t,n),Pe=r,gt=i,Pe!==null&&(gt?(e=Pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(gt?(e=Pe,n=n.stateNode,e.nodeType===8?Ks(e.parentNode,n):e.nodeType===1&&Ks(e,n),Ai(e)):Ks(Pe,n.stateNode));break;case 4:r=Pe,i=gt,Pe=n.stateNode.containerInfo,gt=!0,Qt(e,t,n),Pe=r,gt=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&pu(n,t,o),i=i.next}while(i!==r)}Qt(e,t,n);break;case 1:if(!Ie&&(pr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){he(n,t,l)}Qt(e,t,n);break;case 21:Qt(e,t,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,Qt(e,t,n),Ie=r):Qt(e,t,n);break;default:Qt(e,t,n)}}function Ad(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new iy),t.forEach(function(r){var i=my.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:Pe=l.stateNode,gt=!1;break e;case 3:Pe=l.stateNode.containerInfo,gt=!0;break e;case 4:Pe=l.stateNode.containerInfo,gt=!0;break e}l=l.return}if(Pe===null)throw Error(z(160));Zh(a,o,i),Pe=null,gt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){he(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Jh(t,e),t=t.sibling}function Jh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mt(t,e),Et(e),r&4){try{gi(3,e,e.return),ts(3,e)}catch(v){he(e,e.return,v)}try{gi(5,e,e.return)}catch(v){he(e,e.return,v)}}break;case 1:mt(t,e),Et(e),r&512&&n!==null&&pr(n,n.return);break;case 5:if(mt(t,e),Et(e),r&512&&n!==null&&pr(n,n.return),e.flags&32){var i=e.stateNode;try{Ci(i,"")}catch(v){he(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&wm(i,a),Fl(l,o);var u=Fl(l,a);for(o=0;o<s.length;o+=2){var c=s[o],d=s[o+1];c==="style"?Cm(i,d):c==="dangerouslySetInnerHTML"?Em(i,d):c==="children"?Ci(i,d):rc(i,c,d,u)}switch(l){case"input":Ml(i,a);break;case"textarea":Sm(i,a);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?xr(i,!!a.multiple,g,!1):m!==!!a.multiple&&(a.defaultValue!=null?xr(i,!!a.multiple,a.defaultValue,!0):xr(i,!!a.multiple,a.multiple?[]:"",!1))}i[ji]=a}catch(v){he(e,e.return,v)}}break;case 6:if(mt(t,e),Et(e),r&4){if(e.stateNode===null)throw Error(z(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(v){he(e,e.return,v)}}break;case 3:if(mt(t,e),Et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ai(t.containerInfo)}catch(v){he(e,e.return,v)}break;case 4:mt(t,e),Et(e);break;case 13:mt(t,e),Et(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(zc=ve())),r&4&&Ad(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ie=(u=Ie)||c,mt(t,e),Ie=u):mt(t,e),Et(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(H=e,c=e.child;c!==null;){for(d=H=c;H!==null;){switch(m=H,g=m.child,m.tag){case 0:case 11:case 14:case 15:gi(4,m,m.return);break;case 1:pr(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){he(r,n,v)}}break;case 5:pr(m,m.return);break;case 22:if(m.memoizedState!==null){Nd(d);continue}}g!==null?(g.return=m,H=g):Nd(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=d.stateNode,s=d.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=km("display",o))}catch(v){he(e,e.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){he(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:mt(t,e),Et(e),r&4&&Ad(e);break;case 21:break;default:mt(t,e),Et(e)}}function Et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(qh(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ci(i,""),r.flags&=-33);var a=Od(e);gu(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Od(e);hu(e,l,o);break;default:throw Error(z(161))}}catch(s){he(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function oy(e,t,n){H=e,eg(e)}function eg(e,t,n){for(var r=(e.mode&1)!==0;H!==null;){var i=H,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||xa;if(!o){var l=i.alternate,s=l!==null&&l.memoizedState!==null||Ie;l=xa;var u=Ie;if(xa=o,(Ie=s)&&!u)for(H=i;H!==null;)o=H,s=o.child,o.tag===22&&o.memoizedState!==null?Id(i):s!==null?(s.return=o,H=s):Id(i);for(;a!==null;)H=a,eg(a),a=a.sibling;H=i,xa=l,Ie=u}Ld(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,H=a):Ld(e)}}function Ld(e){for(;H!==null;){var t=H;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ie||ts(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ht(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&pd(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pd(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ai(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Ie||t.flags&512&&mu(t)}catch(m){he(t,t.return,m)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function Nd(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function Id(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ts(4,t)}catch(s){he(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){he(t,i,s)}}var a=t.return;try{mu(t)}catch(s){he(t,a,s)}break;case 5:var o=t.return;try{mu(t)}catch(s){he(t,o,s)}}}catch(s){he(t,t.return,s)}if(t===e){H=null;break}var l=t.sibling;if(l!==null){l.return=t.return,H=l;break}H=t.return}}var sy=Math.ceil,Oo=Wt.ReactCurrentDispatcher,jc=Wt.ReactCurrentOwner,lt=Wt.ReactCurrentBatchConfig,q=0,Ce=null,xe=null,Oe=0,Ke=0,mr=En(0),Se=0,Fi=null,Vn=0,ns=0,Mc=0,vi=null,Fe=null,zc=0,Ir=1/0,It=null,Ao=!1,vu=null,mn=null,wa=!1,on=null,Lo=0,yi=0,yu=null,qa=-1,Za=0;function ze(){return q&6?ve():qa!==-1?qa:qa=ve()}function hn(e){return e.mode&1?q&2&&Oe!==0?Oe&-Oe:V1.transition!==null?(Za===0&&(Za=$m()),Za):(e=ee,e!==0||(e=window.event,e=e===void 0?16:Vm(e.type)),e):1}function wt(e,t,n,r){if(50<yi)throw yi=0,yu=null,Error(z(185));Qi(e,n,r),(!(q&2)||e!==Ce)&&(e===Ce&&(!(q&2)&&(ns|=n),Se===4&&nn(e,Oe)),We(e,r),n===1&&q===0&&!(t.mode&1)&&(Ir=ve()+500,Zo&&kn()))}function We(e,t){var n=e.callbackNode;V0(e,t);var r=po(e,e===Ce?Oe:0);if(r===0)n!==null&&Bf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Bf(n),t===1)e.tag===0?U1(_d.bind(null,e)):uh(_d.bind(null,e)),D1(function(){!(q&6)&&kn()}),n=null;else{switch(Rm(r)){case 1:n=lc;break;case 4:n=Mm;break;case 16:n=fo;break;case 536870912:n=zm;break;default:n=fo}n=lg(n,tg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function tg(e,t){if(qa=-1,Za=0,q&6)throw Error(z(327));var n=e.callbackNode;if(kr()&&e.callbackNode!==n)return null;var r=po(e,e===Ce?Oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=No(e,r);else{t=r;var i=q;q|=2;var a=rg();(Ce!==e||Oe!==t)&&(It=null,Ir=ve()+500,zn(e,t));do try{cy();break}catch(l){ng(e,l)}while(1);Sc(),Oo.current=a,q=i,xe!==null?t=0:(Ce=null,Oe=0,t=Se)}if(t!==0){if(t===2&&(i=Wl(e),i!==0&&(r=i,t=xu(e,i))),t===1)throw n=Fi,zn(e,0),nn(e,r),We(e,ve()),n;if(t===6)nn(e,r);else{if(i=e.current.alternate,!(r&30)&&!ly(i)&&(t=No(e,r),t===2&&(a=Wl(e),a!==0&&(r=a,t=xu(e,a))),t===1))throw n=Fi,zn(e,0),nn(e,r),We(e,ve()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:Pn(e,Fe,It);break;case 3:if(nn(e,r),(r&130023424)===r&&(t=zc+500-ve(),10<t)){if(po(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ze(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Jl(Pn.bind(null,e,Fe,It),t);break}Pn(e,Fe,It);break;case 4:if(nn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-xt(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sy(r/1960))-r,10<r){e.timeoutHandle=Jl(Pn.bind(null,e,Fe,It),r);break}Pn(e,Fe,It);break;case 5:Pn(e,Fe,It);break;default:throw Error(z(329))}}}return We(e,ve()),e.callbackNode===n?tg.bind(null,e):null}function xu(e,t){var n=vi;return e.current.memoizedState.isDehydrated&&(zn(e,t).flags|=256),e=No(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&wu(t)),e}function wu(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function ly(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!bt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nn(e,t){for(t&=~Mc,t&=~ns,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function _d(e){if(q&6)throw Error(z(327));kr();var t=po(e,0);if(!(t&1))return We(e,ve()),null;var n=No(e,t);if(e.tag!==0&&n===2){var r=Wl(e);r!==0&&(t=r,n=xu(e,r))}if(n===1)throw n=Fi,zn(e,0),nn(e,t),We(e,ve()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pn(e,Fe,It),We(e,ve()),null}function $c(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(Ir=ve()+500,Zo&&kn())}}function Wn(e){on!==null&&on.tag===0&&!(q&6)&&kr();var t=q;q|=1;var n=lt.transition,r=ee;try{if(lt.transition=null,ee=1,e)return e()}finally{ee=r,lt.transition=n,q=t,!(q&6)&&kn()}}function Rc(){Ke=mr.current,le(mr)}function zn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,R1(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(yc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&yo();break;case 3:Lr(),le(Ue),le(_e),Pc();break;case 5:Tc(r);break;case 4:Lr();break;case 13:le(fe);break;case 19:le(fe);break;case 10:bc(r.type._context);break;case 22:case 23:Rc()}n=n.return}if(Ce=e,xe=e=gn(e.current,null),Oe=Ke=t,Se=0,Fi=null,Mc=ns=Vn=0,Fe=vi=null,Nn!==null){for(t=0;t<Nn.length;t++)if(n=Nn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Nn=null}return e}function ng(e,t){do{var n=xe;try{if(Sc(),Ka.current=Po,To){for(var r=de.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}To=!1}if(Un=0,Ee=we=de=null,hi=!1,$i=0,jc.current=null,n===null||n.return===null){Se=1,Fi=t,xe=null;break}e:{var a=e,o=n.return,l=n,s=t;if(t=Oe,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var m=c.alternate;m?(c.updateQueue=m.updateQueue,c.memoizedState=m.memoizedState,c.lanes=m.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=wd(o);if(g!==null){g.flags&=-257,Sd(g,o,l,a,t),g.mode&1&&xd(a,u,t),t=g,s=u;var w=t.updateQueue;if(w===null){var v=new Set;v.add(s),t.updateQueue=v}else w.add(s);break e}else{if(!(t&1)){xd(a,u,t),Dc();break e}s=Error(z(426))}}else if(ce&&l.mode&1){var S=wd(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Sd(S,o,l,a,t),xc(Nr(s,l));break e}}a=s=Nr(s,l),Se!==4&&(Se=2),vi===null?vi=[a]:vi.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var h=Dh(a,s,t);dd(a,h);break e;case 1:l=s;var f=a.type,p=a.stateNode;if(!(a.flags&128)&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(mn===null||!mn.has(p)))){a.flags|=65536,t&=-t,a.lanes|=t;var x=Fh(a,l,t);dd(a,x);break e}}a=a.return}while(a!==null)}ag(n)}catch(b){t=b,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(1)}function rg(){var e=Oo.current;return Oo.current=Po,e===null?Po:e}function Dc(){(Se===0||Se===3||Se===2)&&(Se=4),Ce===null||!(Vn&268435455)&&!(ns&268435455)||nn(Ce,Oe)}function No(e,t){var n=q;q|=2;var r=rg();(Ce!==e||Oe!==t)&&(It=null,zn(e,t));do try{uy();break}catch(i){ng(e,i)}while(1);if(Sc(),q=n,Oo.current=r,xe!==null)throw Error(z(261));return Ce=null,Oe=0,Se}function uy(){for(;xe!==null;)ig(xe)}function cy(){for(;xe!==null&&!M0();)ig(xe)}function ig(e){var t=sg(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?ag(e):xe=t,jc.current=null}function ag(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ry(n,t),n!==null){n.flags&=32767,xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Se=6,xe=null;return}}else if(n=ny(n,t,Ke),n!==null){xe=n;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);Se===0&&(Se=5)}function Pn(e,t,n){var r=ee,i=lt.transition;try{lt.transition=null,ee=1,fy(e,t,n,r)}finally{lt.transition=i,ee=r}return null}function fy(e,t,n,r){do kr();while(on!==null);if(q&6)throw Error(z(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(W0(e,a),e===Ce&&(xe=Ce=null,Oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wa||(wa=!0,lg(fo,function(){return kr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=lt.transition,lt.transition=null;var o=ee;ee=1;var l=q;q|=4,jc.current=null,ay(e,n),Jh(n,e),N1(ql),mo=!!Ql,ql=Ql=null,e.current=n,oy(n),z0(),q=l,ee=o,lt.transition=a}else e.current=n;if(wa&&(wa=!1,on=e,Lo=i),a=e.pendingLanes,a===0&&(mn=null),D0(n.stateNode),We(e,ve()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ao)throw Ao=!1,e=vu,vu=null,e;return Lo&1&&e.tag!==0&&kr(),a=e.pendingLanes,a&1?e===yu?yi++:(yi=0,yu=e):yi=0,kn(),null}function kr(){if(on!==null){var e=Rm(Lo),t=lt.transition,n=ee;try{if(lt.transition=null,ee=16>e?16:e,on===null)var r=!1;else{if(e=on,on=null,Lo=0,q&6)throw Error(z(331));var i=q;for(q|=4,H=e.current;H!==null;){var a=H,o=a.child;if(H.flags&16){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(H=u;H!==null;){var c=H;switch(c.tag){case 0:case 11:case 15:gi(8,c,a)}var d=c.child;if(d!==null)d.return=c,H=d;else for(;H!==null;){c=H;var m=c.sibling,g=c.return;if(Qh(c),c===u){H=null;break}if(m!==null){m.return=g,H=m;break}H=g}}}var w=a.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}H=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,H=o;else e:for(;H!==null;){if(a=H,a.flags&2048)switch(a.tag){case 0:case 11:case 15:gi(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,H=h;break e}H=a.return}}var f=e.current;for(H=f;H!==null;){o=H;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,H=p;else e:for(o=f;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ts(9,l)}}catch(b){he(l,l.return,b)}if(l===o){H=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,H=x;break e}H=l.return}}if(q=i,kn(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Yo,e)}catch{}r=!0}return r}finally{ee=n,lt.transition=t}}return!1}function jd(e,t,n){t=Nr(n,t),t=Dh(e,t,1),e=pn(e,t,1),t=ze(),e!==null&&(Qi(e,1,t),We(e,t))}function he(e,t,n){if(e.tag===3)jd(e,e,n);else for(;t!==null;){if(t.tag===3){jd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mn===null||!mn.has(r))){e=Nr(n,e),e=Fh(t,e,1),t=pn(t,e,1),e=ze(),t!==null&&(Qi(t,1,e),We(t,e));break}}t=t.return}}function dy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ze(),e.pingedLanes|=e.suspendedLanes&n,Ce===e&&(Oe&n)===n&&(Se===4||Se===3&&(Oe&130023424)===Oe&&500>ve()-zc?zn(e,0):Mc|=n),We(e,t)}function og(e,t){t===0&&(e.mode&1?(t=ca,ca<<=1,!(ca&130023424)&&(ca=4194304)):t=1);var n=ze();e=Ft(e,t),e!==null&&(Qi(e,t,n),We(e,n))}function py(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),og(e,n)}function my(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),og(e,n)}var sg;sg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)Be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Be=!1,ty(e,t,n);Be=!!(e.flags&131072)}else Be=!1,ce&&t.flags&1048576&&ch(t,So,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qa(e,t),e=t.pendingProps;var i=Pr(t,_e.current);Er(t,n),i=Ac(null,t,r,e,i,n);var a=Lc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(r)?(a=!0,xo(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,kc(t),i.updater=Jo,t.stateNode=i,i._reactInternals=t,ou(t,r,e,n),t=uu(null,t,r,!0,a,n)):(t.tag=0,ce&&a&&vc(t),Me(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Qa(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=gy(r),e=ht(r,e),i){case 0:t=lu(null,t,r,e,n);break e;case 1:t=kd(null,t,r,e,n);break e;case 11:t=bd(null,t,r,e,n);break e;case 14:t=Ed(null,t,r,ht(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),lu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),kd(e,t,r,i,n);case 3:e:{if(Vh(t),e===null)throw Error(z(387));r=t.pendingProps,a=t.memoizedState,i=a.element,mh(e,t),ko(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Nr(Error(z(423)),t),t=Cd(e,t,r,n,i);break e}else if(r!==i){i=Nr(Error(z(424)),t),t=Cd(e,t,r,n,i);break e}else for(Qe=dn(t.stateNode.containerInfo.firstChild),Ze=t,ce=!0,vt=null,n=yh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Or(),r===i){t=Bt(e,t,n);break e}Me(e,t,r,n)}t=t.child}return t;case 5:return xh(t),e===null&&ru(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Zl(r,i)?o=null:a!==null&&Zl(r,a)&&(t.flags|=32),Uh(e,t),Me(e,t,o,n),t.child;case 6:return e===null&&ru(t),null;case 13:return Wh(e,t,n);case 4:return Cc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ar(t,null,r,n):Me(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),bd(e,t,r,i,n);case 7:return Me(e,t,t.pendingProps,n),t.child;case 8:return Me(e,t,t.pendingProps.children,n),t.child;case 12:return Me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,ne(bo,r._currentValue),r._currentValue=o,a!==null)if(bt(a.value,o)){if(a.children===i.children&&!Ue.current){t=Bt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=$t(-1,n&-n),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),iu(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(z(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),iu(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Me(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Er(t,n),i=ut(i),r=r(i),t.flags|=1,Me(e,t,r,n),t.child;case 14:return r=t.type,i=ht(r,t.pendingProps),i=ht(r.type,i),Ed(e,t,r,i,n);case 15:return Bh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),Qa(e,t),t.tag=1,Ve(r)?(e=!0,xo(t)):e=!1,Er(t,n),gh(t,r,i),ou(t,r,i,n),uu(null,t,r,!0,e,n);case 19:return Gh(e,t,n);case 22:return Hh(e,t,n)}throw Error(z(156,t.tag))};function lg(e,t){return jm(e,t)}function hy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,n,r){return new hy(e,t,n,r)}function Fc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gy(e){if(typeof e=="function")return Fc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ac)return 11;if(e===oc)return 14}return 2}function gn(e,t){var n=e.alternate;return n===null?(n=st(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ja(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")Fc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case ir:return $n(n.children,i,a,t);case ic:o=8,i|=8;break;case Ll:return e=st(12,n,t,i|2),e.elementType=Ll,e.lanes=a,e;case Nl:return e=st(13,n,t,i),e.elementType=Nl,e.lanes=a,e;case Il:return e=st(19,n,t,i),e.elementType=Il,e.lanes=a,e;case vm:return rs(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case hm:o=10;break e;case gm:o=9;break e;case ac:o=11;break e;case oc:o=14;break e;case Jt:o=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=st(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function $n(e,t,n,r){return e=st(7,e,r,t),e.lanes=n,e}function rs(e,t,n,r){return e=st(22,e,r,t),e.elementType=vm,e.lanes=n,e.stateNode={isHidden:!1},e}function nl(e,t,n){return e=st(6,e,null,t),e.lanes=n,e}function rl(e,t,n){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$s(0),this.expirationTimes=$s(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$s(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bc(e,t,n,r,i,a,o,l,s){return e=new vy(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=st(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kc(a),e}function yy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ug(e){if(!e)return yn;e=e._reactInternals;e:{if(Qn(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(Ve(n))return lh(e,n,t)}return t}function cg(e,t,n,r,i,a,o,l,s){return e=Bc(n,r,!0,e,i,a,o,l,s),e.context=ug(null),n=e.current,r=ze(),i=hn(n),a=$t(r,i),a.callback=t??null,pn(n,a,i),e.current.lanes=i,Qi(e,i,r),We(e,r),e}function is(e,t,n,r){var i=t.current,a=ze(),o=hn(i);return n=ug(n),t.context===null?t.context=n:t.pendingContext=n,t=$t(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pn(i,t,o),e!==null&&(wt(e,i,o,a),Ya(e,i,o)),o}function Io(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Md(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hc(e,t){Md(e,t),(e=e.alternate)&&Md(e,t)}function xy(){return null}var fg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Uc(e){this._internalRoot=e}as.prototype.render=Uc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));is(e,t,null,null)};as.prototype.unmount=Uc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wn(function(){is(null,e,null,null)}),t[Dt]=null}};function as(e){this._internalRoot=e}as.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tn.length&&t!==0&&t<tn[n].priority;n++);tn.splice(n,0,e),n===0&&Um(e)}};function Vc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function os(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zd(){}function wy(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=Io(o);a.call(u)}}var o=cg(t,r,e,0,null,!1,!1,"",zd);return e._reactRootContainer=o,e[Dt]=o.current,Ii(e.nodeType===8?e.parentNode:e),Wn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Io(s);l.call(u)}}var s=Bc(e,0,!1,null,null,!1,!1,"",zd);return e._reactRootContainer=s,e[Dt]=s.current,Ii(e.nodeType===8?e.parentNode:e),Wn(function(){is(t,s,n,r)}),s}function ss(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var l=i;i=function(){var s=Io(o);l.call(s)}}is(t,o,e,i)}else o=wy(n,t,e,i,r);return Io(o)}Dm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ai(t.pendingLanes);n!==0&&(uc(t,n|1),We(t,ve()),!(q&6)&&(Ir=ve()+500,kn()))}break;case 13:Wn(function(){var r=Ft(e,1);if(r!==null){var i=ze();wt(r,e,1,i)}}),Hc(e,1)}};cc=function(e){if(e.tag===13){var t=Ft(e,134217728);if(t!==null){var n=ze();wt(t,e,134217728,n)}Hc(e,134217728)}};Fm=function(e){if(e.tag===13){var t=hn(e),n=Ft(e,t);if(n!==null){var r=ze();wt(n,e,t,r)}Hc(e,t)}};Bm=function(){return ee};Hm=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};Hl=function(e,t,n){switch(t){case"input":if(Ml(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=qo(r);if(!i)throw Error(z(90));xm(r),Ml(r,i)}}}break;case"textarea":Sm(e,n);break;case"select":t=n.value,t!=null&&xr(e,!!n.multiple,t,!1)}};Om=$c;Am=Wn;var Sy={usingClientEntryPoint:!1,Events:[Zi,lr,qo,Tm,Pm,$c]},ti={findFiberByHostInstance:Ln,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},by={bundleType:ti.bundleType,version:ti.version,rendererPackageName:ti.rendererPackageName,rendererConfig:ti.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Im(e),e===null?null:e.stateNode},findFiberByHostInstance:ti.findFiberByHostInstance||xy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sa.isDisabled&&Sa.supportsFiber)try{Yo=Sa.inject(by),At=Sa}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sy;et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vc(t))throw Error(z(200));return yy(e,t,null,n)};et.createRoot=function(e,t){if(!Vc(e))throw Error(z(299));var n=!1,r="",i=fg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Bc(e,1,!1,null,null,n,!1,r,i),e[Dt]=t.current,Ii(e.nodeType===8?e.parentNode:e),new Uc(t)};et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=Im(t),e=e===null?null:e.stateNode,e};et.flushSync=function(e){return Wn(e)};et.hydrate=function(e,t,n){if(!os(t))throw Error(z(200));return ss(null,e,t,!0,n)};et.hydrateRoot=function(e,t,n){if(!Vc(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=fg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=cg(t,null,e,1,n??null,i,!1,a,o),e[Dt]=t.current,Ii(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new as(t)};et.render=function(e,t,n){if(!os(t))throw Error(z(200));return ss(null,e,t,!1,n)};et.unmountComponentAtNode=function(e){if(!os(e))throw Error(z(40));return e._reactRootContainer?(Wn(function(){ss(null,null,e,!1,function(){e._reactRootContainer=null,e[Dt]=null})}),!0):!1};et.unstable_batchedUpdates=$c;et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!os(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return ss(e,t,n,!1,r)};et.version="18.2.0-next-9e3b772b8-20220608";function dg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dg)}catch(e){console.error(e)}}dg(),cm.exports=et;var pg=cm.exports;const ba=Wo(pg);var $d=pg;Ol.createRoot=$d.createRoot,Ol.hydrateRoot=$d.hydrateRoot;function Su(e,t){return Su=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Su(e,t)}function ft(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Su(e,t)}var mg={exports:{}},Ey="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ky=Ey,Cy=ky;function hg(){}function gg(){}gg.resetWarningCache=hg;var Ty=function(){function e(r,i,a,o,l,s){if(s!==Cy){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:gg,resetWarningCache:hg};return n.PropTypes=n,n};mg.exports=Ty();var Py=mg.exports;const K=Wo(Py);function je(){return je=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},je.apply(this,arguments)}function Ea(e){return e.charAt(0)==="/"}function il(e,t){for(var n=t,r=n+1,i=e.length;r<i;n+=1,r+=1)e[n]=e[r];e.pop()}function Oy(e,t){t===void 0&&(t="");var n=e&&e.split("/")||[],r=t&&t.split("/")||[],i=e&&Ea(e),a=t&&Ea(t),o=i||a;if(e&&Ea(e)?r=n:n.length&&(r.pop(),r=r.concat(n)),!r.length)return"/";var l;if(r.length){var s=r[r.length-1];l=s==="."||s===".."||s===""}else l=!1;for(var u=0,c=r.length;c>=0;c--){var d=r[c];d==="."?il(r,c):d===".."?(il(r,c),u++):u&&(il(r,c),u--)}if(!o)for(;u--;u)r.unshift("..");o&&r[0]!==""&&(!r[0]||!Ea(r[0]))&&r.unshift("");var m=r.join("/");return l&&m.substr(-1)!=="/"&&(m+="/"),m}var Ay=!0,al="Invariant failed";function qn(e,t){if(!e){if(Ay)throw new Error(al);var n=typeof t=="function"?t():t,r=n?"".concat(al,": ").concat(n):al;throw new Error(r)}}function xi(e){return e.charAt(0)==="/"?e:"/"+e}function Rd(e){return e.charAt(0)==="/"?e.substr(1):e}function Ly(e,t){return e.toLowerCase().indexOf(t.toLowerCase())===0&&"/?#".indexOf(e.charAt(t.length))!==-1}function vg(e,t){return Ly(e,t)?e.substr(t.length):e}function yg(e){return e.charAt(e.length-1)==="/"?e.slice(0,-1):e}function Ny(e){var t=e||"/",n="",r="",i=t.indexOf("#");i!==-1&&(r=t.substr(i),t=t.substr(0,i));var a=t.indexOf("?");return a!==-1&&(n=t.substr(a),t=t.substr(0,a)),{pathname:t,search:n==="?"?"":n,hash:r==="#"?"":r}}function De(e){var t=e.pathname,n=e.search,r=e.hash,i=t||"/";return n&&n!=="?"&&(i+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(i+=r.charAt(0)==="#"?r:"#"+r),i}function qe(e,t,n,r){var i;typeof e=="string"?(i=Ny(e),i.state=t):(i=je({},e),i.pathname===void 0&&(i.pathname=""),i.search?i.search.charAt(0)!=="?"&&(i.search="?"+i.search):i.search="",i.hash?i.hash.charAt(0)!=="#"&&(i.hash="#"+i.hash):i.hash="",t!==void 0&&i.state===void 0&&(i.state=t));try{i.pathname=decodeURI(i.pathname)}catch(a){throw a instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):a}return n&&(i.key=n),r?i.pathname?i.pathname.charAt(0)!=="/"&&(i.pathname=Oy(i.pathname,r.pathname)):i.pathname=r.pathname:i.pathname||(i.pathname="/"),i}function Wc(){var e=null;function t(o){return e=o,function(){e===o&&(e=null)}}function n(o,l,s,u){if(e!=null){var c=typeof e=="function"?e(o,l):e;typeof c=="string"?typeof s=="function"?s(c,u):u(!0):u(c!==!1)}else u(!0)}var r=[];function i(o){var l=!0;function s(){l&&o.apply(void 0,arguments)}return r.push(s),function(){l=!1,r=r.filter(function(u){return u!==s})}}function a(){for(var o=arguments.length,l=new Array(o),s=0;s<o;s++)l[s]=arguments[s];r.forEach(function(u){return u.apply(void 0,l)})}return{setPrompt:t,confirmTransitionTo:n,appendListener:i,notifyListeners:a}}var xg=!!(typeof window<"u"&&window.document&&window.document.createElement);function wg(e,t){t(window.confirm(e))}function Iy(){var e=window.navigator.userAgent;return(e.indexOf("Android 2.")!==-1||e.indexOf("Android 4.0")!==-1)&&e.indexOf("Mobile Safari")!==-1&&e.indexOf("Chrome")===-1&&e.indexOf("Windows Phone")===-1?!1:window.history&&"pushState"in window.history}function _y(){return window.navigator.userAgent.indexOf("Trident")===-1}function jy(){return window.navigator.userAgent.indexOf("Firefox")===-1}function My(e){return e.state===void 0&&navigator.userAgent.indexOf("CriOS")===-1}var Dd="popstate",Fd="hashchange";function Bd(){try{return window.history.state||{}}catch{return{}}}function zy(e){e===void 0&&(e={}),xg||qn(!1);var t=window.history,n=Iy(),r=!_y(),i=e,a=i.forceRefresh,o=a===void 0?!1:a,l=i.getUserConfirmation,s=l===void 0?wg:l,u=i.keyLength,c=u===void 0?6:u,d=e.basename?yg(xi(e.basename)):"";function m(A){var N=A||{},D=N.key,U=N.state,X=window.location,Z=X.pathname,me=X.search,re=X.hash,ie=Z+me+re;return d&&(ie=vg(ie,d)),qe(ie,U,D)}function g(){return Math.random().toString(36).substr(2,c)}var w=Wc();function v(A){je(j,A),j.length=t.length,w.notifyListeners(j.location,j.action)}function S(A){My(A)||p(m(A.state))}function h(){p(m(Bd()))}var f=!1;function p(A){if(f)f=!1,v();else{var N="POP";w.confirmTransitionTo(A,N,s,function(D){D?v({action:N,location:A}):x(A)})}}function x(A){var N=j.location,D=T.indexOf(N.key);D===-1&&(D=0);var U=T.indexOf(A.key);U===-1&&(U=0);var X=D-U;X&&(f=!0,R(X))}var b=m(Bd()),T=[b.key];function E(A){return d+De(A)}function L(A,N){var D="PUSH",U=qe(A,N,g(),j.location);w.confirmTransitionTo(U,D,s,function(X){if(X){var Z=E(U),me=U.key,re=U.state;if(n)if(t.pushState({key:me,state:re},null,Z),o)window.location.href=Z;else{var ie=T.indexOf(j.location.key),pt=T.slice(0,ie+1);pt.push(U.key),T=pt,v({action:D,location:U})}else window.location.href=Z}})}function P(A,N){var D="REPLACE",U=qe(A,N,g(),j.location);w.confirmTransitionTo(U,D,s,function(X){if(X){var Z=E(U),me=U.key,re=U.state;if(n)if(t.replaceState({key:me,state:re},null,Z),o)window.location.replace(Z);else{var ie=T.indexOf(j.location.key);ie!==-1&&(T[ie]=U.key),v({action:D,location:U})}else window.location.replace(Z)}})}function R(A){t.go(A)}function _(){R(-1)}function I(){R(1)}var M=0;function k(A){M+=A,M===1&&A===1?(window.addEventListener(Dd,S),r&&window.addEventListener(Fd,h)):M===0&&(window.removeEventListener(Dd,S),r&&window.removeEventListener(Fd,h))}var O=!1;function $(A){A===void 0&&(A=!1);var N=w.setPrompt(A);return O||(k(1),O=!0),function(){return O&&(O=!1,k(-1)),N()}}function G(A){var N=w.appendListener(A);return k(1),function(){k(-1),N()}}var j={length:t.length,action:"POP",location:b,createHref:E,push:L,replace:P,go:R,goBack:_,goForward:I,block:$,listen:G};return j}var Hd="hashchange",$y={hashbang:{encodePath:function(t){return t.charAt(0)==="!"?t:"!/"+Rd(t)},decodePath:function(t){return t.charAt(0)==="!"?t.substr(1):t}},noslash:{encodePath:Rd,decodePath:xi},slash:{encodePath:xi,decodePath:xi}};function Sg(e){var t=e.indexOf("#");return t===-1?e:e.slice(0,t)}function ni(){var e=window.location.href,t=e.indexOf("#");return t===-1?"":e.substring(t+1)}function Ry(e){window.location.hash=e}function ol(e){window.location.replace(Sg(window.location.href)+"#"+e)}function Dy(e){e===void 0&&(e={}),xg||qn(!1);var t=window.history;jy();var n=e,r=n.getUserConfirmation,i=r===void 0?wg:r,a=n.hashType,o=a===void 0?"slash":a,l=e.basename?yg(xi(e.basename)):"",s=$y[o],u=s.encodePath,c=s.decodePath;function d(){var N=c(ni());return l&&(N=vg(N,l)),qe(N)}var m=Wc();function g(N){je(A,N),A.length=t.length,m.notifyListeners(A.location,A.action)}var w=!1,v=null;function S(N,D){return N.pathname===D.pathname&&N.search===D.search&&N.hash===D.hash}function h(){var N=ni(),D=u(N);if(N!==D)ol(D);else{var U=d(),X=A.location;if(!w&&S(X,U)||v===De(U))return;v=null,f(U)}}function f(N){if(w)w=!1,g();else{var D="POP";m.confirmTransitionTo(N,D,i,function(U){U?g({action:D,location:N}):p(N)})}}function p(N){var D=A.location,U=E.lastIndexOf(De(D));U===-1&&(U=0);var X=E.lastIndexOf(De(N));X===-1&&(X=0);var Z=U-X;Z&&(w=!0,_(Z))}var x=ni(),b=u(x);x!==b&&ol(b);var T=d(),E=[De(T)];function L(N){var D=document.querySelector("base"),U="";return D&&D.getAttribute("href")&&(U=Sg(window.location.href)),U+"#"+u(l+De(N))}function P(N,D){var U="PUSH",X=qe(N,void 0,void 0,A.location);m.confirmTransitionTo(X,U,i,function(Z){if(Z){var me=De(X),re=u(l+me),ie=ni()!==re;if(ie){v=me,Ry(re);var pt=E.lastIndexOf(De(A.location)),Cn=E.slice(0,pt+1);Cn.push(me),E=Cn,g({action:U,location:X})}else g()}})}function R(N,D){var U="REPLACE",X=qe(N,void 0,void 0,A.location);m.confirmTransitionTo(X,U,i,function(Z){if(Z){var me=De(X),re=u(l+me),ie=ni()!==re;ie&&(v=me,ol(re));var pt=E.indexOf(De(A.location));pt!==-1&&(E[pt]=me),g({action:U,location:X})}})}function _(N){t.go(N)}function I(){_(-1)}function M(){_(1)}var k=0;function O(N){k+=N,k===1&&N===1?window.addEventListener(Hd,h):k===0&&window.removeEventListener(Hd,h)}var $=!1;function G(N){N===void 0&&(N=!1);var D=m.setPrompt(N);return $||(O(1),$=!0),function(){return $&&($=!1,O(-1)),D()}}function j(N){var D=m.appendListener(N);return O(1),function(){O(-1),D()}}var A={length:t.length,action:"POP",location:T,createHref:L,push:P,replace:R,go:_,goBack:I,goForward:M,block:G,listen:j};return A}function Ud(e,t,n){return Math.min(Math.max(e,t),n)}function Fy(e){e===void 0&&(e={});var t=e,n=t.getUserConfirmation,r=t.initialEntries,i=r===void 0?["/"]:r,a=t.initialIndex,o=a===void 0?0:a,l=t.keyLength,s=l===void 0?6:l,u=Wc();function c(L){je(E,L),E.length=E.entries.length,u.notifyListeners(E.location,E.action)}function d(){return Math.random().toString(36).substr(2,s)}var m=Ud(o,0,i.length-1),g=i.map(function(L){return typeof L=="string"?qe(L,void 0,d()):qe(L,void 0,L.key||d())}),w=De;function v(L,P){var R="PUSH",_=qe(L,P,d(),E.location);u.confirmTransitionTo(_,R,n,function(I){if(I){var M=E.index,k=M+1,O=E.entries.slice(0);O.length>k?O.splice(k,O.length-k,_):O.push(_),c({action:R,location:_,index:k,entries:O})}})}function S(L,P){var R="REPLACE",_=qe(L,P,d(),E.location);u.confirmTransitionTo(_,R,n,function(I){I&&(E.entries[E.index]=_,c({action:R,location:_}))})}function h(L){var P=Ud(E.index+L,0,E.entries.length-1),R="POP",_=E.entries[P];u.confirmTransitionTo(_,R,n,function(I){I?c({action:R,location:_,index:P}):c()})}function f(){h(-1)}function p(){h(1)}function x(L){var P=E.index+L;return P>=0&&P<E.entries.length}function b(L){return L===void 0&&(L=!1),u.setPrompt(L)}function T(L){return u.appendListener(L)}var E={length:g.length,action:"POP",location:g[m],index:m,entries:g,createHref:w,push:v,replace:S,go:h,goBack:f,goForward:p,canGo:x,block:b,listen:T};return E}var Vr={exports:{}},By=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"},_o=By;Vr.exports=kg;Vr.exports.parse=Gc;Vr.exports.compile=Uy;Vr.exports.tokensToFunction=bg;Vr.exports.tokensToRegExp=Eg;var Hy=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function Gc(e,t){for(var n=[],r=0,i=0,a="",o=t&&t.delimiter||"/",l;(l=Hy.exec(e))!=null;){var s=l[0],u=l[1],c=l.index;if(a+=e.slice(i,c),i=c+s.length,u){a+=u[1];continue}var d=e[i],m=l[2],g=l[3],w=l[4],v=l[5],S=l[6],h=l[7];a&&(n.push(a),a="");var f=m!=null&&d!=null&&d!==m,p=S==="+"||S==="*",x=S==="?"||S==="*",b=l[2]||o,T=w||v;n.push({name:g||r++,prefix:m||"",delimiter:b,optional:x,repeat:p,partial:f,asterisk:!!h,pattern:T?Gy(T):h?".*":"[^"+eo(b)+"]+?"})}return i<e.length&&(a+=e.substr(i)),a&&n.push(a),n}function Uy(e,t){return bg(Gc(e,t),t)}function Vy(e){return encodeURI(e).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function Wy(e){return encodeURI(e).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function bg(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)typeof e[r]=="object"&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",Kc(t)));return function(i,a){for(var o="",l=i||{},s=a||{},u=s.pretty?Vy:encodeURIComponent,c=0;c<e.length;c++){var d=e[c];if(typeof d=="string"){o+=d;continue}var m=l[d.name],g;if(m==null)if(d.optional){d.partial&&(o+=d.prefix);continue}else throw new TypeError('Expected "'+d.name+'" to be defined');if(_o(m)){if(!d.repeat)throw new TypeError('Expected "'+d.name+'" to not repeat, but received `'+JSON.stringify(m)+"`");if(m.length===0){if(d.optional)continue;throw new TypeError('Expected "'+d.name+'" to not be empty')}for(var w=0;w<m.length;w++){if(g=u(m[w]),!n[c].test(g))throw new TypeError('Expected all "'+d.name+'" to match "'+d.pattern+'", but received `'+JSON.stringify(g)+"`");o+=(w===0?d.prefix:d.delimiter)+g}continue}if(g=d.asterisk?Wy(m):u(m),!n[c].test(g))throw new TypeError('Expected "'+d.name+'" to match "'+d.pattern+'", but received "'+g+'"');o+=d.prefix+g}return o}}function eo(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function Gy(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function Yc(e,t){return e.keys=t,e}function Kc(e){return e&&e.sensitive?"":"i"}function Yy(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return Yc(e,t)}function Ky(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(kg(e[i],t,n).source);var a=new RegExp("(?:"+r.join("|")+")",Kc(n));return Yc(a,t)}function Xy(e,t,n){return Eg(Gc(e,n),t,n)}function Eg(e,t,n){_o(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,i=n.end!==!1,a="",o=0;o<e.length;o++){var l=e[o];if(typeof l=="string")a+=eo(l);else{var s=eo(l.prefix),u="(?:"+l.pattern+")";t.push(l),l.repeat&&(u+="(?:"+s+u+")*"),l.optional?l.partial?u=s+"("+u+")?":u="(?:"+s+"("+u+"))?":u=s+"("+u+")",a+=u}}var c=eo(n.delimiter||"/"),d=a.slice(-c.length)===c;return r||(a=(d?a.slice(0,-c.length):a)+"(?:"+c+"(?=$))?"),i?a+="$":a+=r&&d?"":"(?="+c+"|$)",Yc(new RegExp("^"+a,Kc(n)),t)}function kg(e,t,n){return _o(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?Yy(e,t):_o(e)?Ky(e,t,n):Xy(e,t,n)}var Qy=Vr.exports;const qy=Wo(Qy);var Cg={exports:{}},te={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Te=typeof Symbol=="function"&&Symbol.for,Xc=Te?Symbol.for("react.element"):60103,Qc=Te?Symbol.for("react.portal"):60106,ls=Te?Symbol.for("react.fragment"):60107,us=Te?Symbol.for("react.strict_mode"):60108,cs=Te?Symbol.for("react.profiler"):60114,fs=Te?Symbol.for("react.provider"):60109,ds=Te?Symbol.for("react.context"):60110,qc=Te?Symbol.for("react.async_mode"):60111,ps=Te?Symbol.for("react.concurrent_mode"):60111,ms=Te?Symbol.for("react.forward_ref"):60112,hs=Te?Symbol.for("react.suspense"):60113,Zy=Te?Symbol.for("react.suspense_list"):60120,gs=Te?Symbol.for("react.memo"):60115,vs=Te?Symbol.for("react.lazy"):60116,Jy=Te?Symbol.for("react.block"):60121,ex=Te?Symbol.for("react.fundamental"):60117,tx=Te?Symbol.for("react.responder"):60118,nx=Te?Symbol.for("react.scope"):60119;function nt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Xc:switch(e=e.type,e){case qc:case ps:case ls:case cs:case us:case hs:return e;default:switch(e=e&&e.$$typeof,e){case ds:case ms:case vs:case gs:case fs:return e;default:return t}}case Qc:return t}}}function Tg(e){return nt(e)===ps}te.AsyncMode=qc;te.ConcurrentMode=ps;te.ContextConsumer=ds;te.ContextProvider=fs;te.Element=Xc;te.ForwardRef=ms;te.Fragment=ls;te.Lazy=vs;te.Memo=gs;te.Portal=Qc;te.Profiler=cs;te.StrictMode=us;te.Suspense=hs;te.isAsyncMode=function(e){return Tg(e)||nt(e)===qc};te.isConcurrentMode=Tg;te.isContextConsumer=function(e){return nt(e)===ds};te.isContextProvider=function(e){return nt(e)===fs};te.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xc};te.isForwardRef=function(e){return nt(e)===ms};te.isFragment=function(e){return nt(e)===ls};te.isLazy=function(e){return nt(e)===vs};te.isMemo=function(e){return nt(e)===gs};te.isPortal=function(e){return nt(e)===Qc};te.isProfiler=function(e){return nt(e)===cs};te.isStrictMode=function(e){return nt(e)===us};te.isSuspense=function(e){return nt(e)===hs};te.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ls||e===ps||e===cs||e===us||e===hs||e===Zy||typeof e=="object"&&e!==null&&(e.$$typeof===vs||e.$$typeof===gs||e.$$typeof===fs||e.$$typeof===ds||e.$$typeof===ms||e.$$typeof===ex||e.$$typeof===tx||e.$$typeof===nx||e.$$typeof===Jy)};te.typeOf=nt;Cg.exports=te;var rx=Cg.exports;function Wr(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var Pg=rx,ix={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ax={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Og={};Og[Pg.ForwardRef]=ix;Og[Pg.Memo]=ax;var sl=1073741823,Vd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{};function ox(){var e="__global_unique_id__";return Vd[e]=(Vd[e]||0)+1}function sx(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function lx(e){var t=[];return{on:function(r){t.push(r)},off:function(r){t=t.filter(function(i){return i!==r})},get:function(){return e},set:function(r,i){e=r,t.forEach(function(a){return a(e,i)})}}}function ux(e){return Array.isArray(e)?e[0]:e}function cx(e,t){var n,r,i="__create-react-context-"+ox()+"__",a=function(l){ft(s,l);function s(){for(var c,d=arguments.length,m=new Array(d),g=0;g<d;g++)m[g]=arguments[g];return c=l.call.apply(l,[this].concat(m))||this,c.emitter=lx(c.props.value),c}var u=s.prototype;return u.getChildContext=function(){var d;return d={},d[i]=this.emitter,d},u.componentWillReceiveProps=function(d){if(this.props.value!==d.value){var m=this.props.value,g=d.value,w;sx(m,g)?w=0:(w=typeof t=="function"?t(m,g):sl,w|=0,w!==0&&this.emitter.set(d.value,w))}},u.render=function(){return this.props.children},s}(B.Component);a.childContextTypes=(n={},n[i]=K.object.isRequired,n);var o=function(l){ft(s,l);function s(){for(var c,d=arguments.length,m=new Array(d),g=0;g<d;g++)m[g]=arguments[g];return c=l.call.apply(l,[this].concat(m))||this,c.observedBits=void 0,c.state={value:c.getValue()},c.onUpdate=function(w,v){var S=c.observedBits|0;S&v&&c.setState({value:c.getValue()})},c}var u=s.prototype;return u.componentWillReceiveProps=function(d){var m=d.observedBits;this.observedBits=m??sl},u.componentDidMount=function(){this.context[i]&&this.context[i].on(this.onUpdate);var d=this.props.observedBits;this.observedBits=d??sl},u.componentWillUnmount=function(){this.context[i]&&this.context[i].off(this.onUpdate)},u.getValue=function(){return this.context[i]?this.context[i].get():e},u.render=function(){return ux(this.props.children)(this.state.value)},s}(B.Component);return o.contextTypes=(r={},r[i]=K.object,r),{Provider:a,Consumer:o}}var fx=B.createContext||cx,Ag=function(t){var n=fx();return n.displayName=t,n},Lg=Ag("Router-History"),_r=Ag("Router"),ys=function(e){ft(t,e),t.computeRootMatch=function(i){return{path:"/",url:"/",params:{},isExact:i==="/"}};function t(r){var i;return i=e.call(this,r)||this,i.state={location:r.history.location},i._isMounted=!1,i._pendingLocation=null,r.staticContext||(i.unlisten=r.history.listen(function(a){i._pendingLocation=a})),i}var n=t.prototype;return n.componentDidMount=function(){var i=this;this._isMounted=!0,this.unlisten&&this.unlisten(),this.props.staticContext||(this.unlisten=this.props.history.listen(function(a){i._isMounted&&i.setState({location:a})})),this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},n.render=function(){return B.createElement(_r.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},B.createElement(Lg.Provider,{children:this.props.children||null,value:this.props.history}))},t}(B.Component);B.Component;B.Component;var Wd={},dx=1e4,Gd=0;function px(e,t){var n=""+t.end+t.strict+t.sensitive,r=Wd[n]||(Wd[n]={});if(r[e])return r[e];var i=[],a=qy(e,i,t),o={regexp:a,keys:i};return Gd<dx&&(r[e]=o,Gd++),o}function Zc(e,t){t===void 0&&(t={}),(typeof t=="string"||Array.isArray(t))&&(t={path:t});var n=t,r=n.path,i=n.exact,a=i===void 0?!1:i,o=n.strict,l=o===void 0?!1:o,s=n.sensitive,u=s===void 0?!1:s,c=[].concat(r);return c.reduce(function(d,m){if(!m&&m!=="")return null;if(d)return d;var g=px(m,{end:a,strict:l,sensitive:u}),w=g.regexp,v=g.keys,S=w.exec(e);if(!S)return null;var h=S[0],f=S.slice(1),p=e===h;return a&&!p?null:{path:m,url:m==="/"&&h===""?"/":h,isExact:p,params:v.reduce(function(x,b,T){return x[b.name]=f[T],x},{})}},null)}function mx(e){return B.Children.count(e)===0}var it=function(e){ft(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.render=function(){var i=this;return B.createElement(_r.Consumer,null,function(a){a||qn(!1);var o=i.props.location||a.location,l=i.props.computedMatch?i.props.computedMatch:i.props.path?Zc(o.pathname,i.props):a.match,s=je({},a,{location:o,match:l}),u=i.props,c=u.children,d=u.component,m=u.render;return Array.isArray(c)&&mx(c)&&(c=null),B.createElement(_r.Provider,{value:s},s.match?c?typeof c=="function"?c(s):c:d?B.createElement(d,s):m?m(s):null:typeof c=="function"?c(s):null)})},t}(B.Component);function Jc(e){return e.charAt(0)==="/"?e:"/"+e}function hx(e,t){return e?je({},t,{pathname:Jc(e)+t.pathname}):t}function gx(e,t){if(!e)return t;var n=Jc(e);return t.pathname.indexOf(n)!==0?t:je({},t,{pathname:t.pathname.substr(n.length)})}function Yd(e){return typeof e=="string"?e:De(e)}function ll(e){return function(){qn(!1)}}function Kd(){}B.Component;var vx=function(e){ft(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.render=function(){var i=this;return B.createElement(_r.Consumer,null,function(a){a||qn(!1);var o=i.props.location||a.location,l,s;return B.Children.forEach(i.props.children,function(u){if(s==null&&B.isValidElement(u)){l=u;var c=u.props.path||u.props.from;s=c?Zc(o.pathname,je({},u.props,{path:c})):a.match}}),s?B.cloneElement(l,{location:o,computedMatch:s}):null})},t}(B.Component),yx=B.useContext;function ea(){return yx(Lg)}var xx=function(e){ft(t,e);function t(){for(var r,i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=e.call.apply(e,[this].concat(a))||this,r.history=zy(r.props),r}var n=t.prototype;return n.render=function(){return B.createElement(ys,{history:this.history,children:this.props.children})},t}(B.Component);B.Component;var bu=function(t,n){return typeof t=="function"?t(n):t},Eu=function(t,n){return typeof t=="string"?qe(t,null,null,n):t},ef=function(t){return t},jr=B.forwardRef;typeof jr>"u"&&(jr=ef);function wx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}var Sx=jr(function(e,t){var n=e.innerRef,r=e.navigate,i=e.onClick,a=Wr(e,["innerRef","navigate","onClick"]),o=a.target,l=je({},a,{onClick:function(u){try{i&&i(u)}catch(c){throw u.preventDefault(),c}!u.defaultPrevented&&u.button===0&&(!o||o==="_self")&&!wx(u)&&(u.preventDefault(),r())}});return ef!==jr?l.ref=t||n:l.ref=n,B.createElement("a",l)}),xs=jr(function(e,t){var n=e.component,r=n===void 0?Sx:n,i=e.replace,a=e.to,o=e.innerRef,l=Wr(e,["component","replace","to","innerRef"]);return B.createElement(_r.Consumer,null,function(s){s||qn(!1);var u=s.history,c=Eu(bu(a,s.location),s.location),d=c?u.createHref(c):"",m=je({},l,{href:d,navigate:function(){var w=bu(a,s.location),v=De(s.location)===De(Eu(w)),S=i||v?u.replace:u.push;S(w)}});return ef!==jr?m.ref=t||o:m.innerRef=o,B.createElement(r,m)})}),Ng=function(t){return t},jo=B.forwardRef;typeof jo>"u"&&(jo=Ng);function bx(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(function(r){return r}).join(" ")}jo(function(e,t){var n=e["aria-current"],r=n===void 0?"page":n,i=e.activeClassName,a=i===void 0?"active":i,o=e.activeStyle,l=e.className,s=e.exact,u=e.isActive,c=e.location,d=e.sensitive,m=e.strict,g=e.style,w=e.to,v=e.innerRef,S=Wr(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return B.createElement(_r.Consumer,null,function(h){h||qn(!1);var f=c||h.location,p=Eu(bu(w,f),f),x=p.pathname,b=x&&x.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),T=b?Zc(f.pathname,{path:b,exact:s,sensitive:d,strict:m}):null,E=!!(u?u(T,f):T),L=typeof l=="function"?l(E):l,P=typeof g=="function"?g(E):g;E&&(L=bx(L,a),P=je({},P,o));var R=je({"aria-current":E&&r||null,className:L,style:P,to:p},S);return Ng!==jo?R.ref=t||v:R.innerRef=v,B.createElement(xs,R)})});var He=function(){return He=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},He.apply(this,arguments)};function Bi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var oe="-ms-",wi="-moz-",J="-webkit-",Ig="comm",ws="rule",tf="decl",Ex="@import",_g="@keyframes",kx="@layer",Cx=Math.abs,nf=String.fromCharCode,ku=Object.assign;function Tx(e,t){return ke(e,0)^45?(((t<<2^ke(e,0))<<2^ke(e,1))<<2^ke(e,2))<<2^ke(e,3):0}function jg(e){return e.trim()}function _t(e,t){return(e=t.exec(e))?e[0]:e}function Y(e,t,n){return e.replace(t,n)}function to(e,t){return e.indexOf(t)}function ke(e,t){return e.charCodeAt(t)|0}function Mr(e,t,n){return e.slice(t,n)}function Ct(e){return e.length}function Mg(e){return e.length}function si(e,t){return t.push(e),e}function Px(e,t){return e.map(t).join("")}function Xd(e,t){return e.filter(function(n){return!_t(n,t)})}var Ss=1,zr=1,zg=0,dt=0,ye=0,Gr="";function bs(e,t,n,r,i,a,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Ss,column:zr,length:o,return:"",siblings:l}}function Zt(e,t){return ku(bs("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function er(e){for(;e.root;)e=Zt(e.root,{children:[e]});si(e,e.siblings)}function Ox(){return ye}function Ax(){return ye=dt>0?ke(Gr,--dt):0,zr--,ye===10&&(zr=1,Ss--),ye}function St(){return ye=dt<zg?ke(Gr,dt++):0,zr++,ye===10&&(zr=1,Ss++),ye}function Rn(){return ke(Gr,dt)}function no(){return dt}function Es(e,t){return Mr(Gr,e,t)}function Cu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Lx(e){return Ss=zr=1,zg=Ct(Gr=e),dt=0,[]}function Nx(e){return Gr="",e}function ul(e){return jg(Es(dt-1,Tu(e===91?e+2:e===40?e+1:e)))}function Ix(e){for(;(ye=Rn())&&ye<33;)St();return Cu(e)>2||Cu(ye)>3?"":" "}function _x(e,t){for(;--t&&St()&&!(ye<48||ye>102||ye>57&&ye<65||ye>70&&ye<97););return Es(e,no()+(t<6&&Rn()==32&&St()==32))}function Tu(e){for(;St();)switch(ye){case e:return dt;case 34:case 39:e!==34&&e!==39&&Tu(ye);break;case 40:e===41&&Tu(e);break;case 92:St();break}return dt}function jx(e,t){for(;St()&&e+ye!==47+10;)if(e+ye===42+42&&Rn()===47)break;return"/*"+Es(t,dt-1)+"*"+nf(e===47?e:St())}function Mx(e){for(;!Cu(Rn());)St();return Es(e,dt)}function zx(e){return Nx(ro("",null,null,null,[""],e=Lx(e),0,[0],e))}function ro(e,t,n,r,i,a,o,l,s){for(var u=0,c=0,d=o,m=0,g=0,w=0,v=1,S=1,h=1,f=0,p="",x=i,b=a,T=r,E=p;S;)switch(w=f,f=St()){case 40:if(w!=108&&ke(E,d-1)==58){to(E+=Y(ul(f),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:E+=ul(f);break;case 9:case 10:case 13:case 32:E+=Ix(w);break;case 92:E+=_x(no()-1,7);continue;case 47:switch(Rn()){case 42:case 47:si($x(jx(St(),no()),t,n,s),s);break;default:E+="/"}break;case 123*v:l[u++]=Ct(E)*h;case 125*v:case 59:case 0:switch(f){case 0:case 125:S=0;case 59+c:h==-1&&(E=Y(E,/\f/g,"")),g>0&&Ct(E)-d&&si(g>32?qd(E+";",r,n,d-1,s):qd(Y(E," ","")+";",r,n,d-2,s),s);break;case 59:E+=";";default:if(si(T=Qd(E,t,n,u,c,i,l,p,x=[],b=[],d,a),a),f===123)if(c===0)ro(E,t,T,T,x,a,d,l,b);else switch(m===99&&ke(E,3)===110?100:m){case 100:case 108:case 109:case 115:ro(e,T,T,r&&si(Qd(e,T,T,0,0,i,l,p,i,x=[],d,b),b),i,b,d,l,r?x:b);break;default:ro(E,T,T,T,[""],b,0,l,b)}}u=c=g=0,v=h=1,p=E="",d=o;break;case 58:d=1+Ct(E),g=w;default:if(v<1){if(f==123)--v;else if(f==125&&v++==0&&Ax()==125)continue}switch(E+=nf(f),f*v){case 38:h=c>0?1:(E+="\f",-1);break;case 44:l[u++]=(Ct(E)-1)*h,h=1;break;case 64:Rn()===45&&(E+=ul(St())),m=Rn(),c=d=Ct(p=E+=Mx(no())),f++;break;case 45:w===45&&Ct(E)==2&&(v=0)}}return a}function Qd(e,t,n,r,i,a,o,l,s,u,c,d){for(var m=i-1,g=i===0?a:[""],w=Mg(g),v=0,S=0,h=0;v<r;++v)for(var f=0,p=Mr(e,m+1,m=Cx(S=o[v])),x=e;f<w;++f)(x=jg(S>0?g[f]+" "+p:Y(p,/&\f/g,g[f])))&&(s[h++]=x);return bs(e,t,n,i===0?ws:l,s,u,c,d)}function $x(e,t,n,r){return bs(e,t,n,Ig,nf(Ox()),Mr(e,2,-2),0,r)}function qd(e,t,n,r,i){return bs(e,t,n,tf,Mr(e,0,r),Mr(e,r+1,-1),r,i)}function $g(e,t,n){switch(Tx(e,t)){case 5103:return J+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return J+e+e;case 4789:return wi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return J+e+wi+e+oe+e+e;case 5936:switch(ke(e,t+11)){case 114:return J+e+oe+Y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return J+e+oe+Y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return J+e+oe+Y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return J+e+oe+e+e;case 6165:return J+e+oe+"flex-"+e+e;case 5187:return J+e+Y(e,/(\w+).+(:[^]+)/,J+"box-$1$2"+oe+"flex-$1$2")+e;case 5443:return J+e+oe+"flex-item-"+Y(e,/flex-|-self/g,"")+(_t(e,/flex-|baseline/)?"":oe+"grid-row-"+Y(e,/flex-|-self/g,""))+e;case 4675:return J+e+oe+"flex-line-pack"+Y(e,/align-content|flex-|-self/g,"")+e;case 5548:return J+e+oe+Y(e,"shrink","negative")+e;case 5292:return J+e+oe+Y(e,"basis","preferred-size")+e;case 6060:return J+"box-"+Y(e,"-grow","")+J+e+oe+Y(e,"grow","positive")+e;case 4554:return J+Y(e,/([^-])(transform)/g,"$1"+J+"$2")+e;case 6187:return Y(Y(Y(e,/(zoom-|grab)/,J+"$1"),/(image-set)/,J+"$1"),e,"")+e;case 5495:case 3959:return Y(e,/(image-set\([^]*)/,J+"$1$`$1");case 4968:return Y(Y(e,/(.+:)(flex-)?(.*)/,J+"box-pack:$3"+oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+J+e+e;case 4200:if(!_t(e,/flex-|baseline/))return oe+"grid-column-align"+Mr(e,t)+e;break;case 2592:case 3360:return oe+Y(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,_t(r.props,/grid-\w+-end/)})?~to(e+(n=n[t].value),"span")?e:oe+Y(e,"-start","")+e+oe+"grid-row-span:"+(~to(n,"span")?_t(n,/\d+/):+_t(n,/\d+/)-+_t(e,/\d+/))+";":oe+Y(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return _t(r.props,/grid-\w+-start/)})?e:oe+Y(Y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Y(e,/(.+)-inline(.+)/,J+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ct(e)-1-t>6)switch(ke(e,t+1)){case 109:if(ke(e,t+4)!==45)break;case 102:return Y(e,/(.+:)(.+)-([^]+)/,"$1"+J+"$2-$3$1"+wi+(ke(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~to(e,"stretch")?$g(Y(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,a,o,l,s,u){return oe+i+":"+a+u+(o?oe+i+"-span:"+(l?s:+s-+a)+u:"")+e});case 4949:if(ke(e,t+6)===121)return Y(e,":",":"+J)+e;break;case 6444:switch(ke(e,ke(e,14)===45?18:11)){case 120:return Y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+J+(ke(e,14)===45?"inline-":"")+"box$3$1"+J+"$2$3$1"+oe+"$2box$3")+e;case 100:return Y(e,":",":"+oe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Y(e,"scroll-","scroll-snap-")+e}return e}function Mo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Rx(e,t,n,r){switch(e.type){case kx:if(e.children.length)break;case Ex:case tf:return e.return=e.return||e.value;case Ig:return"";case _g:return e.return=e.value+"{"+Mo(e.children,r)+"}";case ws:if(!Ct(e.value=e.props.join(",")))return""}return Ct(n=Mo(e.children,r))?e.return=e.value+"{"+n+"}":""}function Dx(e){var t=Mg(e);return function(n,r,i,a){for(var o="",l=0;l<t;l++)o+=e[l](n,r,i,a)||"";return o}}function Fx(e){return function(t){t.root||(t=t.return)&&e(t)}}function Bx(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case tf:e.return=$g(e.value,e.length,n);return;case _g:return Mo([Zt(e,{value:Y(e.value,"@","@"+J)})],r);case ws:if(e.length)return Px(n=e.props,function(i){switch(_t(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":er(Zt(e,{props:[Y(i,/:(read-\w+)/,":"+wi+"$1")]})),er(Zt(e,{props:[i]})),ku(e,{props:Xd(n,r)});break;case"::placeholder":er(Zt(e,{props:[Y(i,/:(plac\w+)/,":"+J+"input-$1")]})),er(Zt(e,{props:[Y(i,/:(plac\w+)/,":"+wi+"$1")]})),er(Zt(e,{props:[Y(i,/:(plac\w+)/,oe+"input-$1")]})),er(Zt(e,{props:[i]})),ku(e,{props:Xd(n,r)});break}return""})}}var Hx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$r=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",rf=typeof window<"u"&&"HTMLElement"in window,Ux=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),ks=Object.freeze([]),Rr=Object.freeze({});function Vx(e,t,n){return n===void 0&&(n=Rr),e.theme!==n.theme&&e.theme||t||n.theme}var Rg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Wx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Gx=/(^-|-$)/g;function Zd(e){return e.replace(Wx,"-").replace(Gx,"")}var Yx=/(a)(d)/gi,Jd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Pu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Jd(t%52)+n;return(Jd(t%52)+n).replace(Yx,"$1-$2")}var cl,hr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Dg=function(e){return hr(5381,e)};function Fg(e){return Pu(Dg(e)>>>0)}function Kx(e){return e.displayName||e.name||"Component"}function fl(e){return typeof e=="string"&&!0}var Bg=typeof Symbol=="function"&&Symbol.for,Hg=Bg?Symbol.for("react.memo"):60115,Xx=Bg?Symbol.for("react.forward_ref"):60112,Qx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},qx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ug={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Zx=((cl={})[Xx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},cl[Hg]=Ug,cl);function ep(e){return("type"in(t=e)&&t.type.$$typeof)===Hg?Ug:"$$typeof"in e?Zx[e.$$typeof]:Qx;var t}var Jx=Object.defineProperty,ew=Object.getOwnPropertyNames,tp=Object.getOwnPropertySymbols,tw=Object.getOwnPropertyDescriptor,nw=Object.getPrototypeOf,np=Object.prototype;function Vg(e,t,n){if(typeof t!="string"){if(np){var r=nw(t);r&&r!==np&&Vg(e,r,n)}var i=ew(t);tp&&(i=i.concat(tp(t)));for(var a=ep(e),o=ep(t),l=0;l<i.length;++l){var s=i[l];if(!(s in qx||n&&n[s]||o&&s in o||a&&s in a)){var u=tw(t,s);try{Jx(e,s,u)}catch{}}}}return e}function Dr(e){return typeof e=="function"}function af(e){return typeof e=="object"&&"styledComponentId"in e}function _n(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ou(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Hi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Au(e,t,n){if(n===void 0&&(n=!1),!n&&!Hi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Au(e[r],t[r]);else if(Hi(t))for(var r in t)e[r]=Au(e[r],t[r]);return e}function of(e,t){Object.defineProperty(e,"toString",{value:t})}function ta(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var rw=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,a=i;t>=a;)if((a<<=1)<0)throw ta(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var o=i;o<a;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(t+1),s=(o=0,n.length);o<s;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var a=r;a<i;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),a=i+r,o=i;o<a;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),io=new Map,zo=new Map,dl=1,ka=function(e){if(io.has(e))return io.get(e);for(;zo.has(dl);)dl++;var t=dl++;return io.set(e,t),zo.set(t,e),t},iw=function(e,t){io.set(e,t),zo.set(t,e)},aw="style[".concat($r,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),ow=new RegExp("^".concat($r,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),sw=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},lw=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],a=0,o=r.length;a<o;a++){var l=r[a].trim();if(l){var s=l.match(ow);if(s){var u=0|parseInt(s[1],10),c=s[2];u!==0&&(iw(c,u),sw(e,c,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}};function uw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Wg=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat($r,"]")));return s[s.length-1]}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute($r,"active"),r.setAttribute("data-styled-version","6.0.7");var o=uw();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},cw=function(){function e(t){this.element=Wg(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,a=r.length;i<a;i++){var o=r[i];if(o.ownerNode===n)return o}throw ta(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),fw=function(){function e(t){this.element=Wg(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),dw=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),rp=rf,pw={isServer:!rf,useCSSOMInjection:!Ux},Gg=function(){function e(t,n,r){t===void 0&&(t=Rr),n===void 0&&(n={});var i=this;this.options=He(He({},pw),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&rf&&rp&&(rp=!1,function(a){for(var o=document.querySelectorAll(aw),l=0,s=o.length;l<s;l++){var u=o[l];u&&u.getAttribute($r)!=="active"&&(lw(a,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),of(this,function(){return function(a){for(var o=a.getTag(),l=o.length,s="",u=function(d){var m=function(h){return zo.get(h)}(d);if(m===void 0)return"continue";var g=a.names.get(m),w=o.getGroup(d);if(g===void 0||w.length===0)return"continue";var v="".concat($r,".g").concat(d,'[id="').concat(m,'"]'),S="";g!==void 0&&g.forEach(function(h){h.length>0&&(S+="".concat(h,","))}),s+="".concat(w).concat(v,'{content:"').concat(S,'"}').concat(`/*!sc*/
`)},c=0;c<l;c++)u(c);return s}(i)})}return e.registerId=function(t){return ka(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(He(He({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new dw(i):r?new cw(i):new fw(i)}(this.options),new rw(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ka(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ka(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ka(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),mw=/&/g,hw=/^\s*\/\/.*$/gm;function Yg(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Yg(n.children,t)),n})}function gw(e){var t,n,r,i=e===void 0?Rr:e,a=i.options,o=a===void 0?Rr:a,l=i.plugins,s=l===void 0?ks:l,u=function(m,g,w){return w===n||w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):m},c=s.slice();c.push(function(m){m.type===ws&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(mw,n).replace(r,u))}),o.prefix&&c.push(Bx),c.push(Rx);var d=function(m,g,w,v){g===void 0&&(g=""),w===void 0&&(w=""),v===void 0&&(v="&"),t=v,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var S=m.replace(hw,""),h=zx(w||g?"".concat(w," ").concat(g," { ").concat(S," }"):S);o.namespace&&(h=Yg(h,o.namespace));var f=[];return Mo(h,Dx(c.concat(Fx(function(p){return f.push(p)})))),f};return d.hash=s.length?s.reduce(function(m,g){return g.name||ta(15),hr(m,g.name)},5381).toString():"",d}var vw=new Gg,Lu=gw(),Kg=B.createContext({shouldForwardProp:void 0,styleSheet:vw,stylis:Lu});Kg.Consumer;B.createContext(void 0);function ip(){return W.useContext(Kg)}var Xg=function(){function e(t,n){var r=this;this.inject=function(i,a){a===void 0&&(a=Lu);var o=r.name+a.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,a(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,of(this,function(){throw ta(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Lu),this.name+t.hash},e}(),yw=function(e){return e>="A"&&e<="Z"};function ap(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;yw(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Qg=function(e){return e==null||e===!1||e===""},qg=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!Qg(a)&&(Array.isArray(a)&&a.isCss||Dr(a)?r.push("".concat(ap(i),":"),a,";"):Hi(a)?r.push.apply(r,Bi(Bi(["".concat(i," {")],qg(a),!1),["}"],!1)):r.push("".concat(ap(i),": ").concat((t=i,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Hx||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Dn(e,t,n,r){if(Qg(e))return[];if(af(e))return[".".concat(e.styledComponentId)];if(Dr(e)){if(!Dr(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return Dn(i,t,n,r)}var a;return e instanceof Xg?n?(e.inject(n,r),[e.getName(r)]):[e]:Hi(e)?qg(e):Array.isArray(e)?Array.prototype.concat.apply(ks,e.map(function(o){return Dn(o,t,n,r)})):[e.toString()]}function xw(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Dr(n)&&!af(n))return!1}return!0}var ww=Dg("6.0.7"),Sw=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&xw(t),this.componentId=n,this.baseHash=hr(ww,n),this.baseStyle=r,Gg.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=_n(i,this.staticRulesId);else{var a=Ou(Dn(this.rules,t,n,r)),o=Pu(hr(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(a,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}i=_n(i,o),this.staticRulesId=o}else{for(var s=hr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var m=Ou(Dn(d,t,n,r));s=hr(s,m),u+=m}}if(u){var g=Pu(s>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=_n(i,g)}}return i},e}(),Zg=B.createContext(void 0);Zg.Consumer;var pl={};function bw(e,t,n){var r=af(e),i=e,a=!fl(e),o=t.attrs,l=o===void 0?ks:o,s=t.componentId,u=s===void 0?function(p,x){var b=typeof p!="string"?"sc":Zd(p);pl[b]=(pl[b]||0)+1;var T="".concat(b,"-").concat(Fg("6.0.7"+b+pl[b]));return x?"".concat(x,"-").concat(T):T}(t.displayName,t.parentComponentId):s,c=t.displayName;c===void 0&&function(p){return fl(p)?"styled.".concat(p):"Styled(".concat(Kx(p),")")}(e);var d=t.displayName&&t.componentId?"".concat(Zd(t.displayName),"-").concat(t.componentId):t.componentId||u,m=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;g=function(p,x){return w(p,x)&&v(p,x)}}else g=w}var S=new Sw(n,d,r?i.componentStyle:void 0);function h(p,x){return function(b,T,E){var L=b.attrs,P=b.componentStyle,R=b.defaultProps,_=b.foldedComponentIds,I=b.styledComponentId,M=b.target,k=B.useContext(Zg),O=ip(),$=b.shouldForwardProp||O.shouldForwardProp,G=function(X,Z,me){for(var re,ie=He(He({},Z),{className:void 0,theme:me}),pt=0;pt<X.length;pt+=1){var Cn=Dr(re=X[pt])?re(ie):re;for(var Xt in Cn)ie[Xt]=Xt==="className"?_n(ie[Xt],Cn[Xt]):Xt==="style"?He(He({},ie[Xt]),Cn[Xt]):Cn[Xt]}return Z.className&&(ie.className=_n(ie.className,Z.className)),ie}(L,T,Vx(T,k,R)||Rr),j=G.as||M,A={};for(var N in G)G[N]===void 0||N[0]==="$"||N==="as"||N==="theme"||(N==="forwardedAs"?A.as=G.forwardedAs:$&&!$(N,j)||(A[N]=G[N]));var D=function(X,Z){var me=ip(),re=X.generateAndInjectStyles(Z,me.styleSheet,me.stylis);return re}(P,G),U=_n(_,I);return D&&(U+=" "+D),G.className&&(U+=" "+G.className),A[fl(j)&&!Rg.has(j)?"class":"className"]=U,A.ref=E,W.createElement(j,A)}(f,p,x)}var f=B.forwardRef(h);return f.attrs=m,f.componentStyle=S,f.shouldForwardProp=g,f.foldedComponentIds=r?_n(i.foldedComponentIds,i.styledComponentId):"",f.styledComponentId=d,f.target=r?i.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?function(x){for(var b=[],T=1;T<arguments.length;T++)b[T-1]=arguments[T];for(var E=0,L=b;E<L.length;E++)Au(x,L[E],!0);return x}({},i.defaultProps,p):p}}),of(f,function(){return".".concat(f.styledComponentId)}),a&&Vg(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function op(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var sp=function(e){return Object.assign(e,{isCss:!0})};function Cs(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Dr(e)||Hi(e)){var r=e;return sp(Dn(op(ks,Bi([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Dn(i):sp(Dn(op(i,t)))}function Nu(e,t,n){if(n===void 0&&(n=Rr),!t)throw ta(1,t);var r=function(i){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,Cs.apply(void 0,Bi([i],a,!1)))};return r.attrs=function(i){return Nu(e,t,He(He({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Nu(e,t,He(He({},n),i))},r}var Jg=function(e){return Nu(bw,e)},C=Jg;Rg.forEach(function(e){C[e]=Jg(e)});function ev(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ou(Cs.apply(void 0,Bi([e],t,!1))),i=Fg(r);return new Xg(i,r)}function Ew(e,t){return e.classList?!!t&&e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function kw(e,t){e.classList?e.classList.add(t):Ew(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function lp(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Cw(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=lp(e.className,t):e.setAttribute("class",lp(e.className&&e.className.baseVal||"",t))}const up={disabled:!1},tv=B.createContext(null);var nv=function(t){return t.scrollTop},li="unmounted",On="exited",An="entering",nr="entered",Iu="exiting",Gt=function(e){ft(t,e);function t(r,i){var a;a=e.call(this,r,i)||this;var o=i,l=o&&!o.isMounting?r.enter:r.appear,s;return a.appearStatus=null,r.in?l?(s=On,a.appearStatus=An):s=nr:r.unmountOnExit||r.mountOnEnter?s=li:s=On,a.state={status:s},a.nextCallback=null,a}t.getDerivedStateFromProps=function(i,a){var o=i.in;return o&&a.status===li?{status:On}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var a=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==An&&o!==nr&&(a=An):(o===An||o===nr)&&(a=Iu)}this.updateStatus(!1,a)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,a,o,l;return a=o=l=i,i!=null&&typeof i!="number"&&(a=i.exit,o=i.enter,l=i.appear!==void 0?i.appear:o),{exit:a,enter:o,appear:l}},n.updateStatus=function(i,a){if(i===void 0&&(i=!1),a!==null)if(this.cancelNextCallback(),a===An){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:ba.findDOMNode(this);o&&nv(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===On&&this.setState({status:li})},n.performEnter=function(i){var a=this,o=this.props.enter,l=this.context?this.context.isMounting:i,s=this.props.nodeRef?[l]:[ba.findDOMNode(this),l],u=s[0],c=s[1],d=this.getTimeouts(),m=l?d.appear:d.enter;if(!i&&!o||up.disabled){this.safeSetState({status:nr},function(){a.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:An},function(){a.props.onEntering(u,c),a.onTransitionEnd(m,function(){a.safeSetState({status:nr},function(){a.props.onEntered(u,c)})})})},n.performExit=function(){var i=this,a=this.props.exit,o=this.getTimeouts(),l=this.props.nodeRef?void 0:ba.findDOMNode(this);if(!a||up.disabled){this.safeSetState({status:On},function(){i.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:Iu},function(){i.props.onExiting(l),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:On},function(){i.props.onExited(l)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,a){a=this.setNextCallback(a),this.setState(i,a)},n.setNextCallback=function(i){var a=this,o=!0;return this.nextCallback=function(l){o&&(o=!1,a.nextCallback=null,i(l))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,a){this.setNextCallback(a);var o=this.props.nodeRef?this.props.nodeRef.current:ba.findDOMNode(this),l=i==null&&!this.props.addEndListener;if(!o||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var s=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],u=s[0],c=s[1];this.props.addEndListener(u,c)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===li)return null;var a=this.props,o=a.children;a.in,a.mountOnEnter,a.unmountOnExit,a.appear,a.enter,a.exit,a.timeout,a.addEndListener,a.onEnter,a.onEntering,a.onEntered,a.onExit,a.onExiting,a.onExited,a.nodeRef;var l=Wr(a,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return B.createElement(tv.Provider,{value:null},typeof o=="function"?o(i,l):B.cloneElement(B.Children.only(o),l))},t}(B.Component);Gt.contextType=tv;Gt.propTypes={};function tr(){}Gt.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:tr,onEntering:tr,onEntered:tr,onExit:tr,onExiting:tr,onExited:tr};Gt.UNMOUNTED=li;Gt.EXITED=On;Gt.ENTERING=An;Gt.ENTERED=nr;Gt.EXITING=Iu;const Tw=Gt;var Pw=function(t,n){return t&&n&&n.split(" ").forEach(function(r){return kw(t,r)})},ml=function(t,n){return t&&n&&n.split(" ").forEach(function(r){return Cw(t,r)})},sf=function(e){ft(t,e);function t(){for(var r,i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=e.call.apply(e,[this].concat(a))||this,r.appliedClasses={appear:{},enter:{},exit:{}},r.onEnter=function(l,s){var u=r.resolveArguments(l,s),c=u[0],d=u[1];r.removeClasses(c,"exit"),r.addClass(c,d?"appear":"enter","base"),r.props.onEnter&&r.props.onEnter(l,s)},r.onEntering=function(l,s){var u=r.resolveArguments(l,s),c=u[0],d=u[1],m=d?"appear":"enter";r.addClass(c,m,"active"),r.props.onEntering&&r.props.onEntering(l,s)},r.onEntered=function(l,s){var u=r.resolveArguments(l,s),c=u[0],d=u[1],m=d?"appear":"enter";r.removeClasses(c,m),r.addClass(c,m,"done"),r.props.onEntered&&r.props.onEntered(l,s)},r.onExit=function(l){var s=r.resolveArguments(l),u=s[0];r.removeClasses(u,"appear"),r.removeClasses(u,"enter"),r.addClass(u,"exit","base"),r.props.onExit&&r.props.onExit(l)},r.onExiting=function(l){var s=r.resolveArguments(l),u=s[0];r.addClass(u,"exit","active"),r.props.onExiting&&r.props.onExiting(l)},r.onExited=function(l){var s=r.resolveArguments(l),u=s[0];r.removeClasses(u,"exit"),r.addClass(u,"exit","done"),r.props.onExited&&r.props.onExited(l)},r.resolveArguments=function(l,s){return r.props.nodeRef?[r.props.nodeRef.current,l]:[l,s]},r.getClassNames=function(l){var s=r.props.classNames,u=typeof s=="string",c=u&&s?s+"-":"",d=u?""+c+l:s[l],m=u?d+"-active":s[l+"Active"],g=u?d+"-done":s[l+"Done"];return{baseClassName:d,activeClassName:m,doneClassName:g}},r}var n=t.prototype;return n.addClass=function(i,a,o){var l=this.getClassNames(a)[o+"ClassName"],s=this.getClassNames("enter"),u=s.doneClassName;a==="appear"&&o==="done"&&u&&(l+=" "+u),o==="active"&&i&&nv(i),l&&(this.appliedClasses[a][o]=l,Pw(i,l))},n.removeClasses=function(i,a){var o=this.appliedClasses[a],l=o.base,s=o.active,u=o.done;this.appliedClasses[a]={},l&&ml(i,l),s&&ml(i,s),u&&ml(i,u)},n.render=function(){var i=this.props;i.classNames;var a=Wr(i,["classNames"]);return B.createElement(Tw,je({},a,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(B.Component);sf.defaultProps={classNames:""};sf.propTypes={};const Ow=sf,_u=C.div`
  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms ease-in;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: opacity 1000ms ease-out;
  }
`,Aw=C.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    #ffc1d4 0%,
    #fff 35.42%,
    #fff 61.46%,
    #b5dfff 100%
  );
  height: 840px;
`,Lw=C.p`
  margin-top: 30%;
  margin-left: 10%;
  color: #3d3f40;
  font-family: "Noto Sans KR";
  font-size: 33.854px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
  max-width: 100%;
  max-height: 150px;
`,Nw=C.img`
  margin-bottom: 30%;
  max-width: 100%;
  max-height: 150px;
  margin: 0% 10%;
  width: auto;
  height: auto;
`,Iw=C.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 360px;
  height: 360px;
`,_w=C.h4`
  display: flex;
  direction: column;
  justify-content: center;
  color: white;
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
  margin-top: auto;
`;function jw(){const e=ea();return W.useEffect(()=>{const t=setTimeout(()=>{e.push("/hello")},3e3);return()=>clearTimeout(t)},[e]),y.jsx(_u,{children:y.jsx(Ow,{in:!0,appear:!0,timeout:1e3,classNames:"fade",children:y.jsxs(Aw,{children:[y.jsx(Lw,{children:"음성으로 소통하다"}),y.jsx(Nw,{src:"/말말말글씨.jpg",alt:"버튼 이미지"}),y.jsx(Iw,{src:"/시작로고.jpg",alt:"버튼 이미지"}),y.jsx(_w,{children:"Dev by likelion 작고맵"})]})})})}const Mw=C.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    #e7f5ff 0%,
    #fff 50.69%,
    #fff 80.38%,
    #e7f5ff 100%
  );
  width: 370px;
`,zw=C.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10%;
`,$w=C.img`
  width: 65.806px;
  height: 56.345px;
  flex-shrink: 0;
  margin-left: 3%;
`,Rw=C.button`
  margin-right: 3%;

  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 143px;
  height: 40px;
  flex-shrink: 0;
  justify-content: center;

  border-radius: 24px;
  border: 2px solid var(--unnamed, #fefbff);
  background: #252728;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

  color: var(--unnamed, #fefbff);
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,Dw=C.div`
  margin-top: 10%;
  margin-left: 3%;
  color: #484848;
  font-family: Noto Sans KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,Fw=C.img`
  width: 300px;
  height: 300px;
  flex-shrink: 0;
  margin-left: 15%;
  margin-top: -15%;
`,Bw=C.img`
  width: 250px;
  height: 250px;
  flex-shrink: 0;
  margin-top: -10%;
`,Hw=C.div`
  color: #484848;
  font-family: Noto Sans KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: -53%;
  margin-left: 43%;
`,cp=C.span`
  color: #484848;
  font-family: Noto Sans KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,Uw=C.div`
  color: var(--unnamed, #011821);
  font-family: Noto Sans KR;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  margin-top: 25%;
`,Vw=C.span`
  color: #ff5f8f;
  font-family: Noto Sans KR;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,Ww=C.span`
  white-space: pre; /* 줄 바꿈 유지 */
`,Gw=C.img`
  width: 420px;
  height: 420px;
  flex-shrink: 0;
  display: inline-block;
  justify-content: center;
  align-items: center;
  align-self: center;
`,Yw=C.div`
  display: flex;
`,Kw=C.img`
  margin-top: -82%;
  max-width: 200px;
  max-height: 200px;
  border-radius: 50%;
  /* margin-bottom: -40px; */
  margin-left: 22%;
`,Xw=C.div`
  width: 90%;
  border-radius: 20px;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin: 2% 5%;
  color: #011821;
  color: var(--unnamed, #011821);
  font-family: Noto Sans KR;
  font-size: 27.112px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: -5%;
  height: 150px;
  flex-shrink: 0;
`,Qw=C.div`
  color: #484848;
  font-family: Noto Sans KR;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 5%;
  margin-top: 5%;
`,qw=C.div`
  margin-left: 5%;
  color: #484848;
  font-family: Noto Sans KR;
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,Zw=C.div`
  margin-top: 10%;
  width: 338px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 24px;
  border: 2px solid var(--unnamed, #fefbff);
  background: #ff87ab;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  color: var(--unnamed, #fefbff);
  font-family: Noto Sans KR;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  text-align: center;
  margin-bottom: 10%;
`;function Jw(){const e=ea(),t=()=>{console.log("로그인 버튼이 클릭되었습니다."),e.push("/Login")},[n,r]=W.useState(""),[i,a]=W.useState(""),o=()=>{console.log("말하기 버튼이 클릭되었습니다."),l()},l=()=>{const s=new(window.webkitSpeechRecognition||window.SpeechRecognition);s.onresult=u=>{const c=u.results[0][0].transcript;console.log("음성 인식 결과:",c),r(c),a(c),s.stop()},s.start()};return y.jsxs(Mw,{children:[y.jsxs(zw,{children:[y.jsx($w,{src:"/말말말로고.jpg",alt:"버튼 이미지"}),y.jsx(Rw,{onClick:t,children:"로그인하기"})]}),y.jsxs(Dw,{children:["안녕하세요. ",y.jsx("br",{}),"음성 기반 소셜미디어",y.jsx("br",{}),y.jsx(cp,{children:"말말말"}),"입니다."]}),y.jsx(Fw,{src:"/로딩.png",alt:"버튼 이미지"}),y.jsx(Bw,{src:"/로딩화면2.png",alt:"버튼 이미지"}),y.jsxs(Hw,{children:[y.jsx(cp,{children:"말말말"}),"에서 ",y.jsx("br",{}),"사람들의 소식과 ",y.jsx("br",{}),"지역 정보를 얻으세요"," "]}),y.jsx(Uw,{children:y.jsxs(Ww,{children:["말말말을 시작하기 전",y.jsx("br",{}),y.jsx(Vw,{children:"시범 음성"}),"을 진행할게요"]})}),y.jsx(Gw,{src:"/뒷배경.png",alt:"버튼 이미지"}),y.jsx(Yw,{onClick:o,children:y.jsx(Kw,{src:"/파랑.png",alt:"버튼 이미지"})}),y.jsx(Xw,{children:n||"마이크를 누르고 말해주세요"})," ",y.jsx(Qw,{children:"좋아요! "}),y.jsx(qw,{children:"이제 말말말을 시작하러 가볼까요? "}),y.jsx(Zw,{onClick:t,children:"로그인하기"})]})}const eS=C.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  height: 840px;
  --vh: 100%;
`,tS=C.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 96.806px;
  height: 82.889px;
  flex-shrink: 0;
  align-self: center;
  margin-top: 20%;
`,nS=C.h1`
  color: #000;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,rS=C.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`,iS=C.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`,Ts=C.span`
  display: inline-block;
  border-radius: 50%;
  background-color: ${({color:e})=>e};
  transition: transform 0.3s;
`,rv=C.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`,aS=C(Ts)`
  width: 202px; /* 원의 너비 조정 */
  height: 202px; /* 원의 높이 조정 */
  flex-shrink: 0; /* 이 부분 추가 */
  fill: ${({color:e})=>e};
  stroke-width: 3px;
  stroke: #fff;
  border: 3px solid #ff92b3;
`,oS=C(Ts)`
  width: 202px; /* 원의 너비 조정 */
  height: 202px; /* 원의 높이 조정 */
  flex-shrink: 0; /* 이 부분 추가 */
  fill: ${({color:e})=>e};
  border: 3px solid rgba(53, 150, 225, 0.8);
`,lf=C.h2`
  align-self: center; /* 가운데 정렬 추가 */
  opacity: ${({active:e})=>e?"0":"1"};
  transition: opacity 0.3s;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`,uf=C.h2`
  align-self: center; /* 가운데 정렬 추가 */
  opacity: ${({active:e})=>e?"0":"1"};
  transition: opacity 0.3s;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`,sS=C(rv)`
  position: relative;
  display: flex;
  justify-content: space-between;
  &:hover {
    ${Ts} {
      transform: scale(1.5);
    }
    ${lf}, ${uf} {
      opacity: 0; /* hover시 글씨 사라짐 */
    }

    &::after {
      content: "소식 나누기"; /* 줄바꿈을 위한 공백 문자 */
      white-space: pre; /* white-space 속성을 사용하여 공백 문자 유지 */
      position: absolute;
      top: 50%; /* 원 중앙에 정렬 */
      left: 30%; /* 원 중앙에 정렬 */
      transform: translate(-50%, -50%); /* 원 중앙에 정렬 */
      color: #fff;
      font-family: Noto Sans KR;
      font-size: 40px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
      opacity: 1;
    }
  }
`,lS=C(rv)`
  position: relative;

  &:hover {
    ${Ts} {
      transform: scale(1.5);
    }
    ${lf}, ${uf} {
      opacity: 0; /* hover시 글씨 사라짐 */
    }
    &::after {
      content: "지역 정보"; /* 새로운 텍스트 내용 */
      position: absolute;
      top: 50%; /* 원 중앙에 정렬 */
      right: -15%; /* 원 중앙에 정렬 */
      transform: translate(-50%, -50%); /* 원 중앙에 정렬 */
      color: #fff;
      font-family: Noto Sans KR;
      font-size: 40px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
      opacity: 1;
    }
  }
`,fp=C(xs)`
  text-decoration: none; /* 밑줄 없애기 */
`;function uS({showAge:e}){return y.jsxs(eS,{children:[y.jsx(tS,{src:"/말말말로고.jpg",alt:"로고 이미지"}),y.jsxs(nS,{children:["어떤 서비스를",y.jsx("br",{}),"이용하시겠어요?"]}),y.jsx(rS,{children:y.jsxs(fp,{to:"/mainsns",children:[" ",y.jsxs(sS,{children:[y.jsx(aS,{color:"#FF92B3;"}),y.jsx(lf,{active:!1,children:"소식 나누기"})]})]})})," ",y.jsx(iS,{children:y.jsxs(fp,{to:"/Mainshare",children:[" ",y.jsxs(lS,{children:[y.jsx(uf,{active:!1,children:"지역 정보"}),y.jsx(oS,{color:"#7fc8f8"})]})]})})," "]})}function dp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dp(Object(n),!0).forEach(function(r){be(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $o(e){"@babel/helpers - typeof";return $o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$o(e)}function cS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function pp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fS(e,t,n){return t&&pp(e.prototype,t),n&&pp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function cf(e,t){return pS(e)||hS(e,t)||iv(e,t)||vS()}function na(e){return dS(e)||mS(e)||iv(e)||gS()}function dS(e){if(Array.isArray(e))return ju(e)}function pS(e){if(Array.isArray(e))return e}function mS(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function hS(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,l;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(s){a=!0,l=s}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw l}}return r}}function iv(e,t){if(e){if(typeof e=="string")return ju(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ju(e,t)}}function ju(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function gS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var mp=function(){},ff={},av={},ov=null,sv={mark:mp,measure:mp};try{typeof window<"u"&&(ff=window),typeof document<"u"&&(av=document),typeof MutationObserver<"u"&&(ov=MutationObserver),typeof performance<"u"&&(sv=performance)}catch{}var yS=ff.navigator||{},hp=yS.userAgent,gp=hp===void 0?"":hp,xn=ff,ue=av,vp=ov,Ca=sv;xn.document;var Yt=!!ue.documentElement&&!!ue.head&&typeof ue.addEventListener=="function"&&typeof ue.createElement=="function",lv=~gp.indexOf("MSIE")||~gp.indexOf("Trident/"),Ta,Pa,Oa,Aa,La,Ht="___FONT_AWESOME___",Mu=16,uv="fa",cv="svg-inline--fa",Gn="data-fa-i2svg",zu="data-fa-pseudo-element",xS="data-fa-pseudo-element-pending",df="data-prefix",pf="data-icon",yp="fontawesome-i2svg",wS="async",SS=["HTML","HEAD","STYLE","SCRIPT"],fv=function(){try{return!0}catch{return!1}}(),se="classic",ge="sharp",mf=[se,ge];function ra(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[se]}})}var Ui=ra((Ta={},be(Ta,se,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),be(Ta,ge,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Ta)),Vi=ra((Pa={},be(Pa,se,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),be(Pa,ge,{solid:"fass",regular:"fasr",light:"fasl"}),Pa)),Wi=ra((Oa={},be(Oa,se,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),be(Oa,ge,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Oa)),bS=ra((Aa={},be(Aa,se,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),be(Aa,ge,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Aa)),ES=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,dv="fa-layers-text",kS=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,CS=ra((La={},be(La,se,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),be(La,ge,{900:"fass",400:"fasr",300:"fasl"}),La)),pv=[1,2,3,4,5,6,7,8,9,10],TS=pv.concat([11,12,13,14,15,16,17,18,19,20]),PS=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],jn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Gi=new Set;Object.keys(Vi[se]).map(Gi.add.bind(Gi));Object.keys(Vi[ge]).map(Gi.add.bind(Gi));var OS=[].concat(mf,na(Gi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",jn.GROUP,jn.SWAP_OPACITY,jn.PRIMARY,jn.SECONDARY]).concat(pv.map(function(e){return"".concat(e,"x")})).concat(TS.map(function(e){return"w-".concat(e)})),Si=xn.FontAwesomeConfig||{};function AS(e){var t=ue.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function LS(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ue&&typeof ue.querySelector=="function"){var NS=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];NS.forEach(function(e){var t=cf(e,2),n=t[0],r=t[1],i=LS(AS(n));i!=null&&(Si[r]=i)})}var mv={styleDefault:"solid",familyDefault:"classic",cssPrefix:uv,replacementClass:cv,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Si.familyPrefix&&(Si.cssPrefix=Si.familyPrefix);var Fr=F(F({},mv),Si);Fr.autoReplaceSvg||(Fr.observeMutations=!1);var V={};Object.keys(mv).forEach(function(e){Object.defineProperty(V,e,{enumerable:!0,set:function(n){Fr[e]=n,bi.forEach(function(r){return r(V)})},get:function(){return Fr[e]}})});Object.defineProperty(V,"familyPrefix",{enumerable:!0,set:function(t){Fr.cssPrefix=t,bi.forEach(function(n){return n(V)})},get:function(){return Fr.cssPrefix}});xn.FontAwesomeConfig=V;var bi=[];function IS(e){return bi.push(e),function(){bi.splice(bi.indexOf(e),1)}}var qt=Mu,Pt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function _S(e){if(!(!e||!Yt)){var t=ue.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ue.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return ue.head.insertBefore(t,r),e}}var jS="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Yi(){for(var e=12,t="";e-- >0;)t+=jS[Math.random()*62|0];return t}function Yr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function hf(e){return e.classList?Yr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function hv(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function MS(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(hv(e[n]),'" ')},"").trim()}function Ps(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function gf(e){return e.size!==Pt.size||e.x!==Pt.x||e.y!==Pt.y||e.rotate!==Pt.rotate||e.flipX||e.flipY}function zS(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(a," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:s,path:u}}function $S(e){var t=e.transform,n=e.width,r=n===void 0?Mu:n,i=e.height,a=i===void 0?Mu:i,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&lv?s+="translate(".concat(t.x/qt-r/2,"em, ").concat(t.y/qt-a/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/qt,"em), calc(-50% + ").concat(t.y/qt,"em)) "):s+="translate(".concat(t.x/qt,"em, ").concat(t.y/qt,"em) "),s+="scale(".concat(t.size/qt*(t.flipX?-1:1),", ").concat(t.size/qt*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var RS=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function gv(){var e=uv,t=cv,n=V.cssPrefix,r=V.replacementClass,i=RS;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var xp=!1;function hl(){V.autoAddCss&&!xp&&(_S(gv()),xp=!0)}var DS={mixout:function(){return{dom:{css:gv,insertCss:hl}}},hooks:function(){return{beforeDOMElementCreation:function(){hl()},beforeI2svg:function(){hl()}}}},Ut=xn||{};Ut[Ht]||(Ut[Ht]={});Ut[Ht].styles||(Ut[Ht].styles={});Ut[Ht].hooks||(Ut[Ht].hooks={});Ut[Ht].shims||(Ut[Ht].shims=[]);var yt=Ut[Ht],vv=[],FS=function e(){ue.removeEventListener("DOMContentLoaded",e),Ro=1,vv.map(function(t){return t()})},Ro=!1;Yt&&(Ro=(ue.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ue.readyState),Ro||ue.addEventListener("DOMContentLoaded",FS));function BS(e){Yt&&(Ro?setTimeout(e,0):vv.push(e))}function ia(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?hv(e):"<".concat(t," ").concat(MS(r),">").concat(a.map(ia).join(""),"</").concat(t,">")}function wp(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var HS=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},gl=function(t,n,r,i){var a=Object.keys(t),o=a.length,l=i!==void 0?HS(n,i):n,s,u,c;for(r===void 0?(s=1,c=t[a[0]]):(s=0,c=r);s<o;s++)u=a[s],c=l(c,t[u],u,t);return c};function US(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function $u(e){var t=US(e);return t.length===1?t[0].toString(16):null}function VS(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Sp(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ru(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Sp(t);typeof yt.hooks.addPack=="function"&&!i?yt.hooks.addPack(e,Sp(t)):yt.styles[e]=F(F({},yt.styles[e]||{}),a),e==="fas"&&Ru("fa",t)}var Na,Ia,_a,gr=yt.styles,WS=yt.shims,GS=(Na={},be(Na,se,Object.values(Wi[se])),be(Na,ge,Object.values(Wi[ge])),Na),vf=null,yv={},xv={},wv={},Sv={},bv={},YS=(Ia={},be(Ia,se,Object.keys(Ui[se])),be(Ia,ge,Object.keys(Ui[ge])),Ia);function KS(e){return~OS.indexOf(e)}function XS(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!KS(i)?i:null}var Ev=function(){var t=function(a){return gl(gr,function(o,l,s){return o[s]=gl(l,a,{}),o},{})};yv=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var l=a[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){i[s.toString(16)]=o})}return i}),xv=t(function(i,a,o){if(i[o]=o,a[2]){var l=a[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){i[s]=o})}return i}),bv=t(function(i,a,o){var l=a[2];return i[o]=o,l.forEach(function(s){i[s]=o}),i});var n="far"in gr||V.autoFetchSvg,r=gl(WS,function(i,a){var o=a[0],l=a[1],s=a[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(i.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:l,iconName:s}),i},{names:{},unicodes:{}});wv=r.names,Sv=r.unicodes,vf=Os(V.styleDefault,{family:V.familyDefault})};IS(function(e){vf=Os(e.styleDefault,{family:V.familyDefault})});Ev();function yf(e,t){return(yv[e]||{})[t]}function QS(e,t){return(xv[e]||{})[t]}function Mn(e,t){return(bv[e]||{})[t]}function kv(e){return wv[e]||{prefix:null,iconName:null}}function qS(e){var t=Sv[e],n=yf("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function wn(){return vf}var xf=function(){return{prefix:null,iconName:null,rest:[]}};function Os(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?se:n,i=Ui[r][e],a=Vi[r][e]||Vi[r][i],o=e in yt.styles?e:null;return a||o||null}var bp=(_a={},be(_a,se,Object.keys(Wi[se])),be(_a,ge,Object.keys(Wi[ge])),_a);function As(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},be(t,se,"".concat(V.cssPrefix,"-").concat(se)),be(t,ge,"".concat(V.cssPrefix,"-").concat(ge)),t),o=null,l=se;(e.includes(a[se])||e.some(function(u){return bp[se].includes(u)}))&&(l=se),(e.includes(a[ge])||e.some(function(u){return bp[ge].includes(u)}))&&(l=ge);var s=e.reduce(function(u,c){var d=XS(V.cssPrefix,c);if(gr[c]?(c=GS[l].includes(c)?bS[l][c]:c,o=c,u.prefix=c):YS[l].indexOf(c)>-1?(o=c,u.prefix=Os(c,{family:l})):d?u.iconName=d:c!==V.replacementClass&&c!==a[se]&&c!==a[ge]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var m=o==="fa"?kv(u.iconName):{},g=Mn(u.prefix,u.iconName);m.prefix&&(o=null),u.iconName=m.iconName||g||u.iconName,u.prefix=m.prefix||u.prefix,u.prefix==="far"&&!gr.far&&gr.fas&&!V.autoFetchSvg&&(u.prefix="fas")}return u},xf());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===ge&&(gr.fass||V.autoFetchSvg)&&(s.prefix="fass",s.iconName=Mn(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=wn()||"fas"),s}var ZS=function(){function e(){cS(this,e),this.definitions={}}return fS(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=F(F({},n.definitions[l]||{}),o[l]),Ru(l,o[l]);var s=Wi[se][l];s&&Ru(s,o[l]),Ev()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],l=o.prefix,s=o.iconName,u=o.icon,c=u[2];n[l]||(n[l]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[l][d]=u)}),n[l][s]=u}),n}}]),e}(),Ep=[],vr={},Cr={},JS=Object.keys(Cr);function e2(e,t){var n=t.mixoutsTo;return Ep=e,vr={},Object.keys(Cr).forEach(function(r){JS.indexOf(r)===-1&&delete Cr[r]}),Ep.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),$o(i[o])==="object"&&Object.keys(i[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=i[o][l]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){vr[o]||(vr[o]=[]),vr[o].push(a[o])})}r.provides&&r.provides(Cr)}),n}function Du(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=vr[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Yn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=vr[e]||[];i.forEach(function(a){a.apply(null,n)})}function Vt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Cr[e]?Cr[e].apply(null,t):void 0}function Fu(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||wn();if(t)return t=Mn(n,t)||t,wp(Cv.definitions,n,t)||wp(yt.styles,n,t)}var Cv=new ZS,t2=function(){V.autoReplaceSvg=!1,V.observeMutations=!1,Yn("noAuto")},n2={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Yt?(Yn("beforeI2svg",t),Vt("pseudoElements2svg",t),Vt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;V.autoReplaceSvg===!1&&(V.autoReplaceSvg=!0),V.observeMutations=!0,BS(function(){i2({autoReplaceSvgRoot:n}),Yn("watch",t)})}},r2={icon:function(t){if(t===null)return null;if($o(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Mn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Os(t[0]);return{prefix:r,iconName:Mn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(V.cssPrefix,"-"))>-1||t.match(ES))){var i=As(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||wn(),iconName:Mn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=wn();return{prefix:a,iconName:Mn(a,t)||t}}}},rt={noAuto:t2,config:V,dom:n2,parse:r2,library:Cv,findIconDefinition:Fu,toHtml:ia},i2=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ue:n;(Object.keys(yt.styles).length>0||V.autoFetchSvg)&&Yt&&V.autoReplaceSvg&&rt.dom.i2svg({node:r})};function Ls(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ia(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Yt){var r=ue.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function a2(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(gf(o)&&n.found&&!r.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};i.style=Ps(F(F({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function o2(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(V.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:F(F({},i),{},{id:o}),children:r}]}]}function wf(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,l=e.symbol,s=e.title,u=e.maskId,c=e.titleId,d=e.extra,m=e.watchable,g=m===void 0?!1:m,w=r.found?r:n,v=w.width,S=w.height,h=i==="fak",f=[V.replacementClass,a?"".concat(V.cssPrefix,"-").concat(a):""].filter(function(P){return d.classes.indexOf(P)===-1}).filter(function(P){return P!==""||!!P}).concat(d.classes).join(" "),p={children:[],attributes:F(F({},d.attributes),{},{"data-prefix":i,"data-icon":a,class:f,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(S)})},x=h&&!~d.classes.indexOf("fa-fw")?{width:"".concat(v/S*16*.0625,"em")}:{};g&&(p.attributes[Gn]=""),s&&(p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(c||Yi())},children:[s]}),delete p.attributes.title);var b=F(F({},p),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:l,styles:F(F({},x),d.styles)}),T=r.found&&n.found?Vt("generateAbstractMask",b)||{children:[],attributes:{}}:Vt("generateAbstractIcon",b)||{children:[],attributes:{}},E=T.children,L=T.attributes;return b.children=E,b.attributes=L,l?o2(b):a2(b)}function kp(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,u=F(F(F({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});s&&(u[Gn]="");var c=F({},o.styles);gf(i)&&(c.transform=$S({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Ps(c);d.length>0&&(u.style=d);var m=[];return m.push({tag:"span",attributes:u,children:[t]}),a&&m.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),m}function s2(e){var t=e.content,n=e.title,r=e.extra,i=F(F(F({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Ps(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var vl=yt.styles;function Bu(e){var t=e[0],n=e[1],r=e.slice(4),i=cf(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(V.cssPrefix,"-").concat(jn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(jn.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(jn.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var l2={found:!1,width:512,height:512};function u2(e,t){!fv&&!V.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Hu(e,t){var n=t;return t==="fa"&&V.styleDefault!==null&&(t=wn()),new Promise(function(r,i){if(Vt("missingIconAbstract"),n==="fa"){var a=kv(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&vl[t]&&vl[t][e]){var o=vl[t][e];return r(Bu(o))}u2(e,t),r(F(F({},l2),{},{icon:V.showMissingIcons&&e?Vt("missingIconAbstract")||{}:{}}))})}var Cp=function(){},Uu=V.measurePerformance&&Ca&&Ca.mark&&Ca.measure?Ca:{mark:Cp,measure:Cp},ui='FA "6.4.2"',c2=function(t){return Uu.mark("".concat(ui," ").concat(t," begins")),function(){return Tv(t)}},Tv=function(t){Uu.mark("".concat(ui," ").concat(t," ends")),Uu.measure("".concat(ui," ").concat(t),"".concat(ui," ").concat(t," begins"),"".concat(ui," ").concat(t," ends"))},Sf={begin:c2,end:Tv},ao=function(){};function Tp(e){var t=e.getAttribute?e.getAttribute(Gn):null;return typeof t=="string"}function f2(e){var t=e.getAttribute?e.getAttribute(df):null,n=e.getAttribute?e.getAttribute(pf):null;return t&&n}function d2(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(V.replacementClass)}function p2(){if(V.autoReplaceSvg===!0)return oo.replace;var e=oo[V.autoReplaceSvg];return e||oo.replace}function m2(e){return ue.createElementNS("http://www.w3.org/2000/svg",e)}function h2(e){return ue.createElement(e)}function Pv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?m2:h2:n;if(typeof e=="string")return ue.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(Pv(o,{ceFn:r}))}),i}function g2(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var oo={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Pv(i),n)}),n.getAttribute(Gn)===null&&V.keepOriginalSource){var r=ue.createComment(g2(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~hf(n).indexOf(V.replacementClass))return oo.replace(t);var i=new RegExp("".concat(V.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(l,s){return s===V.replacementClass||s.match(i)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(l){return ia(l)}).join(`
`);n.setAttribute(Gn,""),n.innerHTML=o}};function Pp(e){e()}function Ov(e,t){var n=typeof t=="function"?t:ao;if(e.length===0)n();else{var r=Pp;V.mutateApproach===wS&&(r=xn.requestAnimationFrame||Pp),r(function(){var i=p2(),a=Sf.begin("mutate");e.map(i),a(),n()})}}var bf=!1;function Av(){bf=!0}function Vu(){bf=!1}var Do=null;function Op(e){if(vp&&V.observeMutations){var t=e.treeCallback,n=t===void 0?ao:t,r=e.nodeCallback,i=r===void 0?ao:r,a=e.pseudoElementsCallback,o=a===void 0?ao:a,l=e.observeMutationsRoot,s=l===void 0?ue:l;Do=new vp(function(u){if(!bf){var c=wn();Yr(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Tp(d.addedNodes[0])&&(V.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&V.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Tp(d.target)&&~PS.indexOf(d.attributeName))if(d.attributeName==="class"&&f2(d.target)){var m=As(hf(d.target)),g=m.prefix,w=m.iconName;d.target.setAttribute(df,g||c),w&&d.target.setAttribute(pf,w)}else d2(d.target)&&i(d.target)})}}),Yt&&Do.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function v2(){Do&&Do.disconnect()}function y2(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],l=a.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function x2(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=As(hf(e));return i.prefix||(i.prefix=wn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=QS(i.prefix,e.innerText)||yf(i.prefix,$u(e.innerText))),!i.iconName&&V.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function w2(e){var t=Yr(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return V.autoA11y&&(n?t["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(r||Yi()):(t["aria-hidden"]="true",t.focusable="false")),t}function S2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Pt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ap(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=x2(e),r=n.iconName,i=n.prefix,a=n.rest,o=w2(e),l=Du("parseNodeAttributes",{},e),s=t.styleParser?y2(e):[];return F({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Pt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:o}},l)}var b2=yt.styles;function Lv(e){var t=V.autoReplaceSvg==="nest"?Ap(e,{styleParser:!1}):Ap(e);return~t.extra.classes.indexOf(dv)?Vt("generateLayersText",e,t):Vt("generateSvgReplacementMutation",e,t)}var Sn=new Set;mf.map(function(e){Sn.add("fa-".concat(e))});Object.keys(Ui[se]).map(Sn.add.bind(Sn));Object.keys(Ui[ge]).map(Sn.add.bind(Sn));Sn=na(Sn);function Lp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Yt)return Promise.resolve();var n=ue.documentElement.classList,r=function(d){return n.add("".concat(yp,"-").concat(d))},i=function(d){return n.remove("".concat(yp,"-").concat(d))},a=V.autoFetchSvg?Sn:mf.map(function(c){return"fa-".concat(c)}).concat(Object.keys(b2));a.includes("fa")||a.push("fa");var o=[".".concat(dv,":not([").concat(Gn,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(Gn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=Yr(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var s=Sf.begin("onTree"),u=l.reduce(function(c,d){try{var m=Lv(d);m&&c.push(m)}catch(g){fv||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(m){Ov(m,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),s(),c()})}).catch(function(m){s(),d(m)})})}function E2(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Lv(e).then(function(n){n&&Ov([n],t)})}function k2(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Fu(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Fu(i||{})),e(r,F(F({},n),{},{mask:i}))}}var C2=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Pt:r,a=n.symbol,o=a===void 0?!1:a,l=n.mask,s=l===void 0?null:l,u=n.maskId,c=u===void 0?null:u,d=n.title,m=d===void 0?null:d,g=n.titleId,w=g===void 0?null:g,v=n.classes,S=v===void 0?[]:v,h=n.attributes,f=h===void 0?{}:h,p=n.styles,x=p===void 0?{}:p;if(t){var b=t.prefix,T=t.iconName,E=t.icon;return Ls(F({type:"icon"},t),function(){return Yn("beforeDOMElementCreation",{iconDefinition:t,params:n}),V.autoA11y&&(m?f["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(w||Yi()):(f["aria-hidden"]="true",f.focusable="false")),wf({icons:{main:Bu(E),mask:s?Bu(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:T,transform:F(F({},Pt),i),symbol:o,title:m,maskId:c,titleId:w,extra:{attributes:f,styles:x,classes:S}})})}},T2={mixout:function(){return{icon:k2(C2)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Lp,n.nodeCallback=E2,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?ue:r,a=n.callback,o=a===void 0?function(){}:a;return Lp(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,l=r.prefix,s=r.transform,u=r.symbol,c=r.mask,d=r.maskId,m=r.extra;return new Promise(function(g,w){Promise.all([Hu(i,l),c.iconName?Hu(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var S=cf(v,2),h=S[0],f=S[1];g([n,wf({icons:{main:h,mask:f},prefix:l,iconName:i,transform:s,symbol:u,maskId:d,title:a,titleId:o,extra:m,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,l=n.styles,s=Ps(l);s.length>0&&(i.style=s);var u;return gf(o)&&(u=Vt("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},P2={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Ls({type:"layer"},function(){Yn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(V.cssPrefix,"-layers")].concat(na(a)).join(" ")},children:o}]})}}}},O2={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,l=o===void 0?[]:o,s=r.attributes,u=s===void 0?{}:s,c=r.styles,d=c===void 0?{}:c;return Ls({type:"counter",content:n},function(){return Yn("beforeDOMElementCreation",{content:n,params:r}),s2({content:n.toString(),title:a,extra:{attributes:u,styles:d,classes:["".concat(V.cssPrefix,"-layers-counter")].concat(na(l))}})})}}}},A2={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Pt:i,o=r.title,l=o===void 0?null:o,s=r.classes,u=s===void 0?[]:s,c=r.attributes,d=c===void 0?{}:c,m=r.styles,g=m===void 0?{}:m;return Ls({type:"text",content:n},function(){return Yn("beforeDOMElementCreation",{content:n,params:r}),kp({content:n,transform:F(F({},Pt),a),title:l,extra:{attributes:d,styles:g,classes:["".concat(V.cssPrefix,"-layers-text")].concat(na(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,l=null,s=null;if(lv){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();l=c.width/u,s=c.height/u}return V.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,kp({content:n.innerHTML,width:l,height:s,transform:a,title:i,extra:o,watchable:!0})])}}},L2=new RegExp('"',"ug"),Np=[1105920,1112319];function N2(e){var t=e.replace(L2,""),n=VS(t,0),r=n>=Np[0]&&n<=Np[1],i=t.length===2?t[0]===t[1]:!1;return{value:$u(i?t[0]:t),isSecondary:r||i}}function Ip(e,t){var n="".concat(xS).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Yr(e.children),o=a.filter(function(E){return E.getAttribute(zu)===t})[0],l=xn.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(kS),u=l.getPropertyValue("font-weight"),c=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&c!=="none"&&c!==""){var d=l.getPropertyValue("content"),m=~["Sharp"].indexOf(s[2])?ge:se,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Vi[m][s[2].toLowerCase()]:CS[m][u],w=N2(d),v=w.value,S=w.isSecondary,h=s[0].startsWith("FontAwesome"),f=yf(g,v),p=f;if(h){var x=qS(v);x.iconName&&x.prefix&&(f=x.iconName,g=x.prefix)}if(f&&!S&&(!o||o.getAttribute(df)!==g||o.getAttribute(pf)!==p)){e.setAttribute(n,p),o&&e.removeChild(o);var b=S2(),T=b.extra;T.attributes[zu]=t,Hu(f,g).then(function(E){var L=wf(F(F({},b),{},{icons:{main:E,mask:xf()},prefix:g,iconName:p,extra:T,watchable:!0})),P=ue.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(P,e.firstChild):e.appendChild(P),P.outerHTML=L.map(function(R){return ia(R)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function I2(e){return Promise.all([Ip(e,"::before"),Ip(e,"::after")])}function _2(e){return e.parentNode!==document.head&&!~SS.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(zu)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function _p(e){if(Yt)return new Promise(function(t,n){var r=Yr(e.querySelectorAll("*")).filter(_2).map(I2),i=Sf.begin("searchPseudoElements");Av(),Promise.all(r).then(function(){i(),Vu(),t()}).catch(function(){i(),Vu(),n()})})}var j2={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=_p,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ue:r;V.searchPseudoElements&&_p(i)}}},jp=!1,M2={mixout:function(){return{dom:{unwatch:function(){Av(),jp=!0}}}},hooks:function(){return{bootstrap:function(){Op(Du("mutationObserverCallbacks",{}))},noAuto:function(){v2()},watch:function(n){var r=n.observeMutationsRoot;jp?Vu():Op(Du("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Mp=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],l=a.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},z2={mixout:function(){return{parse:{transform:function(n){return Mp(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Mp(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(s," ").concat(u," ").concat(c)},m={transform:"translate(".concat(o/2*-1," -256)")},g={outer:l,inner:d,path:m};return{tag:"g",attributes:F({},g.outer),children:[{tag:"g",attributes:F({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:F(F({},r.icon.attributes),g.path)}]}]}}}},yl={x:0,y:0,width:"100%",height:"100%"};function zp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function $2(e){return e.tag==="g"?e.children:[e]}var R2={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?As(i.split(" ").map(function(o){return o.trim()})):xf();return a.prefix||(a.prefix=wn()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,l=n.maskId,s=n.transform,u=a.width,c=a.icon,d=o.width,m=o.icon,g=zS({transform:s,containerWidth:d,iconWidth:u}),w={tag:"rect",attributes:F(F({},yl),{},{fill:"white"})},v=c.children?{children:c.children.map(zp)}:{},S={tag:"g",attributes:F({},g.inner),children:[zp(F({tag:c.tag,attributes:F(F({},c.attributes),g.path)},v))]},h={tag:"g",attributes:F({},g.outer),children:[S]},f="mask-".concat(l||Yi()),p="clip-".concat(l||Yi()),x={tag:"mask",attributes:F(F({},yl),{},{id:f,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,h]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:$2(m)},x]};return r.push(b,{tag:"rect",attributes:F({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(f,")")},yl)}),{children:r,attributes:i}}}},D2={provides:function(t){var n=!1;xn.matchMedia&&(n=xn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:F(F({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=F(F({},a),{},{attributeName:"opacity"}),l={tag:"circle",attributes:F(F({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:F(F({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:F(F({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:F(F({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:F(F({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:F(F({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:F(F({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},F2={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},B2=[DS,T2,P2,O2,A2,j2,M2,z2,R2,D2,F2];e2(B2,{mixoutsTo:rt});rt.noAuto;rt.config;rt.library;rt.dom;var Wu=rt.parse;rt.findIconDefinition;rt.toHtml;var H2=rt.icon;rt.layer;rt.text;rt.counter;function $p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function sn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$p(Object(n),!0).forEach(function(r){yr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$p(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Fo(e){"@babel/helpers - typeof";return Fo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fo(e)}function yr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function V2(e,t){if(e==null)return{};var n=U2(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Gu(e){return W2(e)||G2(e)||Y2(e)||K2()}function W2(e){if(Array.isArray(e))return Yu(e)}function G2(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Y2(e,t){if(e){if(typeof e=="string")return Yu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yu(e,t)}}function Yu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function K2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X2(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,c=e.spinReverse,d=e.pulse,m=e.fixedWidth,g=e.inverse,w=e.border,v=e.listItem,S=e.flip,h=e.size,f=e.rotation,p=e.pull,x=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":m,"fa-inverse":g,"fa-border":w,"fa-li":v,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},yr(t,"fa-".concat(h),typeof h<"u"&&h!==null),yr(t,"fa-rotate-".concat(f),typeof f<"u"&&f!==null&&f!==0),yr(t,"fa-pull-".concat(p),typeof p<"u"&&p!==null),yr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(x).map(function(b){return x[b]?b:null}).filter(function(b){return b})}function Q2(e){return e=e-0,e===e}function Nv(e){return Q2(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var q2=["style"];function Z2(e){return e.charAt(0).toUpperCase()+e.slice(1)}function J2(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Nv(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[Z2(i)]=a:t[i]=a,t},{})}function Iv(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return Iv(e,s)}),i=Object.keys(t.attributes||{}).reduce(function(s,u){var c=t.attributes[u];switch(u){case"class":s.attrs.className=c,delete t.attributes.class;break;case"style":s.attrs.style=J2(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=c:s.attrs[Nv(u)]=c}return s},{attrs:{}}),a=n.style,o=a===void 0?{}:a,l=V2(n,q2);return i.attrs.style=sn(sn({},i.attrs.style),o),e.apply(void 0,[t.tag,sn(sn({},i.attrs),l)].concat(Gu(r)))}var _v=!1;try{_v=!0}catch{}function eb(){if(!_v&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Rp(e){if(e&&Fo(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Wu.icon)return Wu.icon(e);if(e===null)return null;if(e&&Fo(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function xl(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?yr({},e,t):{}}var Ge=B.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,a=e.className,o=e.title,l=e.titleId,s=e.maskId,u=Rp(n),c=xl("classes",[].concat(Gu(X2(e)),Gu(a.split(" ")))),d=xl("transform",typeof e.transform=="string"?Wu.transform(e.transform):e.transform),m=xl("mask",Rp(r)),g=H2(u,sn(sn(sn(sn({},c),d),m),{},{symbol:i,title:o,titleId:l,maskId:s}));if(!g)return eb("Could not find icon",u),null;var w=g.abstract,v={ref:t};return Object.keys(e).forEach(function(S){Ge.defaultProps.hasOwnProperty(S)||(v[S]=e[S])}),tb(w[0],v)});Ge.displayName="FontAwesomeIcon";Ge.propTypes={beat:K.bool,border:K.bool,beatFade:K.bool,bounce:K.bool,className:K.string,fade:K.bool,flash:K.bool,mask:K.oneOfType([K.object,K.array,K.string]),maskId:K.string,fixedWidth:K.bool,inverse:K.bool,flip:K.oneOf([!0,!1,"horizontal","vertical","both"]),icon:K.oneOfType([K.object,K.array,K.string]),listItem:K.bool,pull:K.oneOf(["right","left"]),pulse:K.bool,rotation:K.oneOf([0,90,180,270]),shake:K.bool,size:K.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:K.bool,spinPulse:K.bool,spinReverse:K.bool,symbol:K.oneOfType([K.bool,K.string]),title:K.string,titleId:K.string,transform:K.oneOfType([K.string,K.object]),swapOpacity:K.bool};Ge.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var tb=Iv.bind(null,B.createElement),nb={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},rb={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},Ef=rb,ib={prefix:"fas",iconName:"circle-arrow-right",icon:[512,512,["arrow-circle-right"],"f0a9","M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z"]},jv=ib,Bo={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},ab={prefix:"fas",iconName:"camera",icon:[512,512,[62258,"camera-alt"],"f030","M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]},ob={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},sb=ob;const lb=C.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  height: 840px;
  --vh: 100%;
`,ub=C.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 96.806px;
  height: 82.889px;
  flex-shrink: 0;
  align-self: center;
  margin-top: 20%;
`,cb=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 46.406px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 10%;
  margin-bottom: 10%;
`,Dp=C.input`
  width: 300px;
  height: 70px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 3px solid #aba8a8;
  background: #fff;
  margin: 5% 0%;
  padding: 10px 15px;
  color: #101010;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: border-color 0.3s, background-color 0.3s; /* 추가된 부분 */

  &::placeholder {
    color: #b9b4b4;
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  &:focus {
    border-color: #ff8d8f; /* 변경된 border 색상 */
    background: #fff7f7; /* 변경된 background 색상 */
    outline: none;
  }
`,fb=C.button`
  border-radius: 10px;
  background: ${({isFilled:e})=>e?"#ff8d8f":"#fff"}; /* 동적으로 배경 색상 변경 */
  color: ${({isFilled:e})=>e?"#fff":"#454545"}; /* 동적으로 글자 색상 변경 */
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 181px;
  height: 66px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  border: none;
  cursor: pointer;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: background-color 0.3s, color 0.3s; /* 추가된 부분 */
  margin-top: 20%;
`,db=C.button`
  color: #000;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 46px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  background: none;
  margin-top: 15%;
`;function pb(){const[e,t]=W.useState(""),[n,r]=W.useState(""),i=ea(),a=e!==""&&n!=="",o=()=>{i.push("/choice"),console.log("아이디:",e),console.log("비밀번호:",n)},l=()=>{i.push("/signup")};return y.jsxs(lb,{children:[y.jsx(ub,{src:"/말말말로고.jpg",alt:"로고 이미지"}),y.jsx(cb,{children:"로그인"}),y.jsx(Dp,{type:"text",placeholder:"아이디 입력",value:e,onChange:s=>t(s.target.value)}),y.jsx(Dp,{type:"password",placeholder:"비밀번호 입력",value:n,onChange:s=>r(s.target.value)}),y.jsx(fb,{isFilled:a,onClick:o,children:"접속하기"}),y.jsxs(db,{onClick:l,children:["회원가입",y.jsx(Ge,{icon:jv})]})]})}const mb=C.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  height: 840px;
  --vh: 100%;
`,hb=C.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 96.806px;
  height: 82.889px;
  flex-shrink: 0;
  align-self: center;
  margin-top: 20%;
`,gb=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 46.406px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 10%;
  margin-bottom: 10%;
`,wl=C.input`
  width: 300px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 3px solid #aba8a8;
  background: #fff;
  margin: 3% 0%;
  padding: 10px 15px;
  color: #101010;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: border-color 0.3s, background-color 0.3s; /* 추가된 부분 */

  &::placeholder {
    color: #b9b4b4;
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  &:focus {
    border-color: #ff8d8f; /* 변경된 border 색상 */
    background: #fff7f7; /* 변경된 background 색상 */
    outline: none;
  }
`,vb=C.button`
  border-radius: 10px;
  background: ${({isFilled:e})=>e?"#ff8d8f":"#fff"}; /* 동적으로 배경 색상 변경 */
  color: ${({isFilled:e})=>e?"#fff":"#454545"}; /* 동적으로 글자 색상 변경 */
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 181px;
  height: 66px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  border: none;
  cursor: pointer;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: background-color 0.3s, color 0.3s; /* 추가된 부분 */
  margin-top: 20%;
`,yb=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`,xb=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`,Sl=C.select`
  width: 100px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 3px solid #aba8a8;

  &:focus {
    border-color: #ff8d8f;
    background: #fff7f7;
    outline: none;
    box-shadow: 0px 0px 5px 5px rgba(255, 141, 143, 0.4);
    transform: scale(1.05);
  }
`,wb=C.select`
  width: 100px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 3px solid #aba8a8;
  color: #b9b4b4;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:focus {
    border-color: #ff8d8f;
    background: #fff7f7;
    outline: none;
    box-shadow: 0px 0px 5px 5px rgba(255, 141, 143, 0.4);
    transform: scale(1.05);
  }
`,Sb=C.select`
  width: 100px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 3px solid #aba8a8;
  color: #b9b4b4;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &:focus {
    border-color: #ff8d8f;
    background: #fff7f7;
    outline: none;
    box-shadow: 0px 0px 5px 5px rgba(255, 141, 143, 0.4);
    transform: scale(1.05);
  }
`,bb=C.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({visible:e})=>e?"block":"none"};
  z-index: 1000;
`,Eb=C.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 330px;
  height: 280px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 3px solid #ff8d8f;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  & button {
    border-radius: 10px;
    background: #ff8d8f;
    color: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    width: 240px;
    height: 66px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    border: none;
    cursor: pointer;
    color: #101010;
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    transition: background-color 0.3s, color 0.3s;
    margin-top: 20px;

    & svg {
      margin-right: 10px;
    }
  }
`,Fp=C.div`
  color: #000;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
`,kb=C(Ge)`
  margin-top: 20px;
  margin-bottom: 10px;

  width: 72px;
  height: 72px;
  flex-shrink: 0;
  color: #ff8d8f;
`;function Cb(){const[e,t]=W.useState(""),[n,r]=W.useState(""),[i,a]=W.useState(""),[o,l]=W.useState(!1),s=ea(),u=()=>{l(!o)},c=v=>{if(!v.target.isYearOptionExisted){v.target.isYearOptionExisted=!0;for(let S=1900;S<=2023;S++){const h=document.createElement("option");h.setAttribute("value",S),h.innerText=S,v.target.appendChild(h)}}},d=v=>{if(!v.target.isMonthOptionExisted){v.target.isMonthOptionExisted=!0;for(let S=1;S<=12;S++){const h=document.createElement("option");h.setAttribute("value",S),h.innerText=S,v.target.appendChild(h)}}},m=v=>{if(!v.target.isDayOptionExisted){v.target.isDayOptionExisted=!0;for(let S=1;S<=31;S++){const h=document.createElement("option");h.setAttribute("value",S),h.innerText=S,v.target.appendChild(h)}}},g=v=>{const S=v.target.value;if(!v.target.isCityOptionExisted){v.target.isCityOptionExisted=!0;const h=document.getElementById("residence-district");h.innerHTML="<option disabled selected>구 선택</option>";let f=[];S==="서울특별시"?f=["강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","성북구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"]:S==="부산광역시"?f=["중구","서구","동구","영도구","부산진구","동래구","남구","북구","해운대구","사하구","금정구","강서구","연제구","수영구","사상구","기장군"]:S==="대구광역시"?f=["중구","서구","동구","남구","북구","수성구","달서구","달성군"]:S==="인천광역시"?f=["중구","서구","동구","미추홀구","연수구","남동구","부평구","계양구","강화군","옹진군"]:S==="광주광역시"?f=["남구","서구","동구","북구","광산구"]:S==="대전광역시"?f=["중구","서구","동구","유성구","대덕구"]:S==="울산광역시"&&(f=["중구","남구","동구","북구","울주군"]);const p=document.createElement("option");p.setAttribute("value",""),p.innerText="구 선택",h.appendChild(p);for(const x of f){const b=document.createElement("option");b.setAttribute("value",x),b.innerText=x,h.appendChild(b)}}},w=()=>{s.push("/login")};return y.jsxs(mb,{children:[y.jsx(hb,{src:"/말말말로고.jpg",alt:"로고 이미지"}),y.jsx(gb,{children:"가입하기"}),y.jsx(wl,{type:"text",placeholder:"아이디 입력",value:e,onChange:v=>t(v.target.value)}),y.jsx(wl,{type:"password",placeholder:"비밀번호 입력",value:n,onChange:v=>r(v.target.value)}),y.jsx(wl,{type:"text",placeholder:"별명 입력",value:i,onChange:v=>a(v.target.value)}),y.jsx(yb,{children:y.jsxs("div",{className:"info",id:"info__birth",children:[y.jsx(Sl,{className:"box",id:"birth-year",onFocus:c,isyearoptionexisted:"false",children:y.jsx("option",{disabled:!0,selected:!0,children:"출생 연도"})}),y.jsx(Sl,{className:"box",id:"birth-month",onFocus:d,ismonthoptionexisted:"false",children:y.jsx("option",{disabled:!0,selected:!0,children:"월"})}),y.jsx(Sl,{className:"box",id:"birth-day",onFocus:m,isdayoptionexisted:"false",children:y.jsx("option",{disabled:!0,selected:!0,children:"일"})})]})}),y.jsx(xb,{children:y.jsxs("div",{className:"info",id:"info__residence",children:[y.jsxs(wb,{className:"box",id:"residence-city",onChange:g,iscityoptionexisted:"false",children:[y.jsx("option",{disabled:!0,selected:!0,children:"시 선택"}),y.jsx("option",{value:"서울특별시",children:"서울특별시"}),y.jsx("option",{value:"부산광역시",children:"부산광역시"}),y.jsx("option",{value:"대구광역시",children:"대구광역시"}),y.jsx("option",{value:"인천광역시",children:"인천광역시"}),y.jsx("option",{value:"광주광역시",children:"광주광역시"}),y.jsx("option",{value:"대전광역시",children:"대전광역시"}),y.jsx("option",{value:"울산광역시",children:"울산광역시"})," "]}),y.jsx(Sb,{className:"box",id:"residence-district","data-is-district-option-existed":!1,children:y.jsx("option",{disabled:!0,selected:!0,children:"구 선택"})})]})}),y.jsx(vb,{onClick:u,children:"회원가입"}),y.jsx(bb,{visible:o,children:y.jsxs(Eb,{children:[y.jsx(kb,{icon:Ef}),y.jsx(Fp,{children:"축하드립니다!"}),y.jsx(Fp,{children:"회원가입이 완료되었습니다."}),y.jsxs("button",{onClick:w,children:["로그인 하러 가기 ",y.jsx(Ge,{icon:jv})]})," "]})})]})}const Tb=C.footer`
  text-align: center;
  position: relative;
  max-width: 100%;
  max-height: 100px;
`,Pb=C.img`
  max-width: 100%;
  max-height: 150px;
`,Mv=C.button`
  width: 100px;
  height: 60px;
  flex-shrink: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: #d2d2d2;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 50px;
  transform: translateX(-50%);
  span {
    color: #d2d2d2;
    margin-top: 5px;
    font-family: Noto Sans KR;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`,Ob=C(Mv)`
  left: 10px;
  right: auto;
  transform: none;
  color: ${e=>e.isActive?"#FF8D8F":"#d2d2d2"};
  span {
    color: ${e=>e.isActive?"#FF8D8F":"#d2d2d2"};
  }
`,Ab=C(Mv)`
  right: 10px;
  left: auto;
  transform: none;
  color: ${e=>e.isActive?"#FF8D8F":"#d2d2d2"};
  span {
    color: ${e=>e.isActive?"#FF8D8F":"#d2d2d2"};
  }
`,Bp=C(Ge)`
  width: 3em;
  height: 3em;
  margin-top: 30px;
  color: ${e=>e.isActive?"#FF8D8F":"#d2d2d2"};
`,Zn=()=>{const[e,t]=W.useState(null),n=ea(),r=i=>{t(i),i==="홈으로갈거야"?n.push("/choice"):i==="마이페이지로 갈거야"&&n.push("/mypage")};return y.jsxs(Tb,{children:[y.jsx(Pb,{src:"풋바하얀색배경.jpg",alt:"로고 이미지"}),y.jsxs(Ob,{onClick:()=>r("홈으로갈거야"),isactive:e==="홈으로갈거야",children:[y.jsx(Bp,{icon:sb,isactive:e==="홈으로갈거야"}),y.jsx("span",{children:"홈"})]}),y.jsxs(Ab,{onClick:()=>r("마이페이지로 갈거야"),isactive:e==="마이페이지로 갈거야",children:[y.jsx(Bp,{icon:nb,isactive:e==="마이페이지로 갈거야"}),y.jsx("span",{children:"내 계정"})]})]})},Lb=C.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #fff2f6 0%, #fefbff 100%);
  height: 840px;
`,Nb=C.h1`
  color: #616161;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-weight: 400;
  margin-top: 15%;
  margin-left: 6%;
`,Ib=C.h2`
  color: #000;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 45px;
  font-weight: 500;
  text-transform: capitalize;
  margin-top: -3%;
  padding-left: 2%;
  padding-right: 2%;
`,_b=C.h5`
  color: #616161;
  font-family: "Noto Sans KR";
  font-size: 26px;
  font-weight: 400;
  margin-left: 5%;
  margin-top: -9%;
`,jb=ev`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`,Mb=C.div`
  display: flex;
  align-items: center;
  align-self: center;
  width: 340px;
  height: 24px;
  flex-shrink: 0;
  border: 2px solid #f9f9f9;
  background: #fff;
  margin-top: -8%;
`,zb=C.div`
  background: #aba8a8;
  width: 54px;
  height: 24px;
  flex-shrink: 0;
  background: transparent;
  transform-origin: left;
  animation: ${e=>e.isactive?Cs`
          ${jb} 10s linear infinite
        `:"none"};
`,$b=C.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: px;
  margin-left: 5%;
`,Rb=C.div`
  flex: 6;
  width: 90%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 20px;
  margin: 2% 5%;
  color: #011821;
  font-family: "Noto Sans KR";
  font-size: 36px;
  font-weight: 400;
  text-align: center;
`,Db=C.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
`,Fb=C.img`
  max-width: 130px;
  max-height: 130px;
  border-radius: 50%;
  margin-bottom: -70px;
  margin-left: 33%;
`;function Bb(){const[e,t]=W.useState(!1),n=()=>{console.log("버튼 눌림"),t(r=>!r)};return y.jsxs(Lb,{children:[y.jsx(Nb,{children:"날짜 불러오기"}),y.jsx(Ib,{children:"여기가 제목입니당 "}),y.jsx(_b,{children:"작성자 별명"}),y.jsx(Mb,{children:y.jsx(zb,{isActive:e})})," ",y.jsxs($b,{children:[y.jsx("span",{children:"00:00"}),y.jsx("span",{children:"99:99"})]}),y.jsx(Rb,{children:"쓴 글 불러오기"}),y.jsx(Db,{onClick:n,children:y.jsx(Fb,{src:"/재생버튼.jpg",alt:"버튼 이미지"})}),y.jsx(Zn,{})]})}const Hb=C.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #fff2f6 0%, #fefbff 100%);
  height: 840px;
`,Ub=C.button`
  border-radius: 20px 20px 5px 20px;
  background: var(--unnamed, #011821);
  color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 200px;
  height: 51px;
  flex-shrink: 0;
  border: none;
  cursor: pointer;
  margin-left: 40%;
  margin-top: 80px;

  color: #fff;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
`,Vb=C.input`
  width: 90%;
  height: 150px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 20px;
  margin: 2% 5%;
  color: #646464;
  font-family: Noto Sans KR;
  font-size: 42px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  border: none;
  outline: none; // 포커스된 상태에서의 테두리 제거

  &::placeholder {
    text-align: center;
  }

  &:focus {
    border: 2px solid #ff8d8f; // 포커스된 상태에서의 테두리 색
  }
`,Wb=C.div`
  flex: 6;
  width: 90%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin: 2% 5%;
  color: #011821;
  font-family: "Noto Sans KR";
  font-size: 36px;
  font-weight: 400;
  text-align: center;
  border-radius: 20px;
`,Gb=C.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
`,Yb=C(Ge)`
  width: 15px;
  height: 15px;
  color: #d2d2d2;
`,Kb=C.img`
  max-width: 130px;
  max-height: 130px;
  border-radius: 50%;
  margin-bottom: -70px;
  margin-left: 33%;
`;function Xb({showAge:e}){const[t,n]=W.useState(""),[r,i]=W.useState(""),[a,o]=W.useState(""),l=()=>{console.log("게시 버튼이 클릭되었습니다."),console.log("제목:",a)},s=()=>{console.log("말하기 버튼이 클릭되었습니다."),u()},u=()=>{const c=new(window.webkitSpeechRecognition||window.SpeechRecognition);c.onresult=d=>{const m=d.results[0][0].transcript;console.log("음성 인식 결과:",m),n(m),i(m),c.stop()},c.start()};return y.jsxs(Hb,{children:[y.jsxs(Ub,{onClick:l,children:[y.jsx(Yb,{icon:Ef}),"게시하기"]}),y.jsx(Vb,{type:"text",placeholder:"제목을 입력하세요",value:a,onChange:c=>o(c.target.value)}),y.jsx(Wb,{children:t||"텍스트 샘플입니다옹"})," ",y.jsxs("form",{action:"",method:"post",children:[y.jsx("h1",{children:"변환할 텍스트 입력"}),y.jsx("input",{type:"hidden",name:"csrfmiddlewaretoken",value:"YourCSRFTokenHere"}),y.jsx("input",{type:"text",name:"your_text_field_name",value:r,onChange:c=>i(c.target.value)}),y.jsx("input",{type:"submit",value:"Send message"})]}),y.jsxs(Gb,{onClick:s,children:[" ",y.jsx(Kb,{src:"/말하기.png",alt:"버튼 이미지"})]}),y.jsx(Zn,{})]})}const Qb=C.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #def1ff 0%, #f9f9f9 100%);
  height: 2264px;
`,qb=C.img`
  width: 370px;
  height: 420px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 15%;
`,Zb=ev`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`,Jb=C.div`
  display: flex;
  align-items: center;
  align-self: center;
  width: 370px;
  height: 24px;
  flex-shrink: 0;
  border: 2px solid #f9f9f9;
  background: #fff;
  /* margin-top: -8%; */
`,eE=C.div`
  background: #aba8a8;
  width: 54px;
  height: 24px;
  flex-shrink: 0;
  background: transparent;
  transform-origin: left;
  animation: ${e=>e.isactive?Cs`
          ${Zb} 10s linear infinite
        `:"none"};
`,tE=C.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: px;
  margin-left: 5%;
`,nE=C.h2`
  color: #000;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 45px;
  font-weight: 500;
  text-transform: capitalize;
  margin-top: -3%;
  padding-left: 2%;
  padding-right: 2%;
`,rE=C.h5`
  color: #616161;
  font-family: "Noto Sans KR";
  font-size: 26px;
  font-weight: 400;
  margin-left: 5%;
  margin-top: -9%;
`,ja=C.div`
  display: flex;
  flex-direction: column; /* 세로로 정렬 */
  justify-content: center;
  align-items: center;
  color: #011821;
  width: 90%;
  background-color: #fff;
  border-radius: 20px;
  margin: 2% 5%;
  height: 100px; /* 원하는 높이로 조정 */
`,Ma=C.h2`
  color: #2b1800;
  font-family: "Noto Sans KR";
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2; /* 줄 간격 조정 */
  margin-bottom: -27px;
`,za=C.h5`
  color: #5b5858;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  margin-top: 25px;
`,iE=C.div`
  flex: 6;
  width: 90%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 20px;
  margin: 2% 5%;
  color: #011821;
  font-family: "Noto Sans KR";
  font-size: 36px;
  font-weight: 400;
  text-align: center;
`,aE=C.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
`,oE=C.img`
  max-width: 130px;
  max-height: 130px;
  border-radius: 50%;
  margin-bottom: -70px;
  margin-left: 33%;
`;function sE(){const[e,t]=W.useState(!1),n=()=>{console.log("버튼 눌림"),t(r=>!r)};return y.jsxs(Qb,{children:[y.jsx(qb,{src:"/망한쿵야.jpeg",alt:"버튼 이미지"}),y.jsx(Jb,{children:y.jsx(eE,{isActive:e})})," ",y.jsxs(tE,{children:[y.jsx("span",{children:"00:00"}),y.jsx("span",{children:"99:99"})]}),y.jsx(nE,{children:"여기가 제목입니당 "}),y.jsx(rE,{children:"작성자 별명"}),y.jsxs(ja,{children:[y.jsx(Ma,{children:"모집 기간"}),y.jsx(za,{children:"2023년 9월 5일~"})]}),y.jsxs(ja,{children:[y.jsx(Ma,{children:"진행 기간"}),y.jsx(za,{children:"2023년 9월 5일~"})]}),y.jsxs(ja,{children:[y.jsx(Ma,{children:"주최 주소"}),y.jsx(za,{children:"중구 구민센터"})]}),y.jsxs(ja,{children:[y.jsx(Ma,{children:"연락처"}),y.jsx(za,{children:"02-1234-5678"})]}),y.jsx(iE,{children:"텍스트 샘플입니다"}),y.jsx(aE,{onClick:n,children:y.jsx(oE,{src:"/재생버튼.jpg",alt:"버튼 이미지"})}),y.jsx(Zn,{})]})}const lE=C.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #def1ff 0%, #f9f9f9 100%);
  height: 2264px;
`,uE=C.button`
  border-radius: 20px 20px 5px 20px;
  background: var(--unnamed, #011821);
  color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 200px;
  height: 51px;
  flex-shrink: 0;
  border: none;
  cursor: pointer;
  margin-left: 45%;
  margin-top: 50px;
  color: #fff;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
`,Hp=C(Ge)`
  width: 15px;
  height: 15px;
  color: #d2d2d2;
  width: 32px;
  height: 28.8px;
  flex-shrink: 0;
  margin-right: 5px;
`,cE=C.img`
  width: 370px;
  height: 420px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 10px;
`,fE=C.button`
  border-radius: 1000px;
  border: 3px solid #f9f9f9;
  background: #605e5e;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 286px;
  height: 60px;
  flex-shrink: 0;
  color: var(--unnamed, #fefbff);
  font-family: Noto Sans KR;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  margin-left: 14%;
  margin-top: 5%;
  margin-bottom: 5%;
`,dE=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`,Up=C.button`
  border-radius: 10px;
  border: none;
  width: 150px;
  height: 40px;
  cursor: pointer;
  font-family: "Noto Sans KR";
  font-size: 18px;
  font-weight: 500;
  margin: 0 10px;
  transition: background-color 0.3s, color 0.3s;
  border: 3px solid #ccc;

  background-color: ${e=>e.active?e.status==="모집중"?"#3596E1":"#ccc":"transparent"};
  color: ${e=>e.active?"white":"inherit"};

  &:hover {
    opacity: 0.8;
  }
`,$a=C.div`
  display: flex;
  flex-direction: column; /* 세로로 정렬 */
  justify-content: center;
  align-items: center;
  color: #011821;
  width: 90%;
  background-color: #fff;
  border-radius: 20px;
  margin: 2% 5%;
  height: 100px; /* 원하는 높이로 조정 */
`,Ra=C.h2`
  color: #2b1800;
  font-family: "Noto Sans KR";
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2; /* 줄 간격 조정 */
  margin-bottom: px;
`,Da=C.input`
  color: #5b5858;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  margin-top: -25px;
  border: none;
  outline: none;
`,pE=C.input`
  flex: 6;
  width: 90%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 20px;
  margin: 2% 5%;
  color: #011821;
  font-family: "Noto Sans KR";
  font-size: 36px;
  font-weight: 400;
  text-align: center;
  border: none;
  outline: none;
  &::placeholder {
    font-size: 20px;
  }
`,mE=C.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
`,hE=C.img`
  max-width: 130px;
  max-height: 130px;
  border-radius: 50%;
  margin-bottom: -70px;
  margin-left: 33%;
`;function gE(){const[e,t]=W.useState(""),[n,r]=W.useState("모집중"),[i,a]=W.useState(""),[o,l]=W.useState(""),[s,u]=W.useState(""),c=()=>{console.log("게시 버튼이 클릭되었습니다."),console.log("모집 기간:",e),console.log("진행 기간:",i),console.log("주최 주소:",o),console.log("연락처:",s)},[d,m]=W.useState(""),g=()=>{console.log("버튼 눌림")},w=()=>{console.log("사진추가가 클릭되었습니다.")},v=S=>{console.log("모집 상태 변경:",S),r(S)};return y.jsxs(lE,{children:[y.jsxs(uE,{onClick:c,children:[y.jsx(Hp,{icon:Ef}),"게시하기"]}),y.jsx(cE,{src:"/망한쿵야.jpeg",alt:"버튼 이미지"}),y.jsxs(fE,{onClick:w,children:[y.jsx(Hp,{icon:ab}),"사진 추가하기"]}),y.jsxs(dE,{children:[y.jsx(Up,{status:"모집중",active:n==="모집중",onClick:()=>v("모집중"),children:"모집중"}),y.jsx(Up,{status:"모집완료",active:n==="모집완료",onClick:()=>v("모집완료"),children:"모집완료"})]})," ",y.jsxs($a,{children:[y.jsx(Ra,{children:"모집 기간"}),y.jsx(Da,{type:"text",placeholder:"날짜를 입력해주세요",value:e,onChange:S=>t(S.target.value)})]}),y.jsxs($a,{children:[y.jsx(Ra,{children:"진행 기간"}),y.jsx(Da,{type:"text",placeholder:"날짜를 입력해주세요",value:i,onChange:S=>a(S.target.value)})]}),y.jsxs($a,{children:[y.jsx(Ra,{children:"주최 주소"}),y.jsx(Da,{type:"text",placeholder:"주소를 입력해주세요",value:o,onChange:S=>l(S.target.value)})]}),y.jsxs($a,{children:[y.jsx(Ra,{children:"연락처"}),y.jsx(Da,{type:"text",placeholder:"연락처를 입력해주세요",value:s,onChange:S=>u(S.target.value)})]})," ",y.jsx(pE,{type:"text",placeholder:"에디터는 직접 수기로 입력해주세요",value:d,onChange:S=>m(S.target.value)})," ",y.jsx(mE,{onClick:g,children:y.jsx(hE,{src:"/글쓰기.png",alt:"버튼 이미지"})}),y.jsx(Zn,{})]})}function Vp(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function kf(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:Vp(t[n])&&Vp(e[n])&&Object.keys(t[n]).length>0&&kf(e[n],t[n])})}const zv={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Kt(){const e=typeof document<"u"?document:{};return kf(e,zv),e}const vE={document:zv,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Ye(){const e=typeof window<"u"?window:{};return kf(e,vE),e}function yE(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function Ho(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function Uo(){return Date.now()}function xE(e){const t=Ye();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function wE(e,t){t===void 0&&(t="x");const n=Ye();let r,i,a;const o=xE(e);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),a=new n.WebKitCSSMatrix(i==="none"?"":i)):(a=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=a.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=a.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=a.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Fa(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function SE(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Xe(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!SE(r)){const i=Object.keys(Object(r)).filter(a=>t.indexOf(a)<0);for(let a=0,o=i.length;a<o;a+=1){const l=i[a],s=Object.getOwnPropertyDescriptor(r,l);s!==void 0&&s.enumerable&&(Fa(e[l])&&Fa(r[l])?r[l].__swiper__?e[l]=r[l]:Xe(e[l],r[l]):!Fa(e[l])&&Fa(r[l])?(e[l]={},r[l].__swiper__?e[l]=r[l]:Xe(e[l],r[l])):e[l]=r[l])}}}return e}function Ba(e,t,n){e.style.setProperty(t,n)}function $v(e){let{swiper:t,targetPosition:n,side:r}=e;const i=Ye(),a=-t.translate;let o=null,l;const s=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const u=n>a?"next":"prev",c=(m,g)=>u==="next"&&m>=g||u==="prev"&&m<=g,d=()=>{l=new Date().getTime(),o===null&&(o=l);const m=Math.max(Math.min((l-o)/s,1),0),g=.5-Math.cos(m*Math.PI)/2;let w=a+g*(n-a);if(c(w,n)&&(w=n),t.wrapperEl.scrollTo({[r]:w}),c(w,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:w})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(d)};d()}function Ot(e,t){return t===void 0&&(t=""),[...e.children].filter(n=>n.matches(t))}function Ns(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:[t]),n}function bE(e){const t=Ye(),n=Kt(),r=e.getBoundingClientRect(),i=n.body,a=e.clientTop||i.clientTop||0,o=e.clientLeft||i.clientLeft||0,l=e===t?t.scrollY:e.scrollTop,s=e===t?t.scrollX:e.scrollLeft;return{top:r.top+l-a,left:r.left+s-o}}function EE(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function kE(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function ln(e,t){return Ye().getComputedStyle(e,null).getPropertyValue(t)}function Ki(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Rv(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function Ku(e,t,n){const r=Ye();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function Cf(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let a=Ot(e.el,`.${r[i]}`)[0];a||(a=Ns("div",r[i]),a.className=r[i],e.el.append(a)),n[i]=a,t[i]=a}}),n}function Dv(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};const a=v=>(Array.isArray(v)?v:[v]).filter(S=>!!S);function o(v){let S;return v&&typeof v=="string"&&t.isElement&&(S=t.el.querySelector(v),S)?S:(v&&(typeof v=="string"&&(S=[...document.querySelectorAll(v)]),t.params.uniqueNavElements&&typeof v=="string"&&S.length>1&&t.el.querySelectorAll(v).length===1&&(S=t.el.querySelector(v))),v&&!S?v:S)}function l(v,S){const h=t.params.navigation;v=a(v),v.forEach(f=>{f&&(f.classList[S?"add":"remove"](...h.disabledClass.split(" ")),f.tagName==="BUTTON"&&(f.disabled=S),t.params.watchOverflow&&t.enabled&&f.classList[t.isLocked?"add":"remove"](h.lockClass))})}function s(){const{nextEl:v,prevEl:S}=t.navigation;if(t.params.loop){l(S,!1),l(v,!1);return}l(S,t.isBeginning&&!t.params.rewind),l(v,t.isEnd&&!t.params.rewind)}function u(v){v.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function c(v){v.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function d(){const v=t.params.navigation;if(t.params.navigation=Cf(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(v.nextEl||v.prevEl))return;let S=o(v.nextEl),h=o(v.prevEl);Object.assign(t.navigation,{nextEl:S,prevEl:h}),S=a(S),h=a(h);const f=(p,x)=>{p&&p.addEventListener("click",x==="next"?c:u),!t.enabled&&p&&p.classList.add(...v.lockClass.split(" "))};S.forEach(p=>f(p,"next")),h.forEach(p=>f(p,"prev"))}function m(){let{nextEl:v,prevEl:S}=t.navigation;v=a(v),S=a(S);const h=(f,p)=>{f.removeEventListener("click",p==="next"?c:u),f.classList.remove(...t.params.navigation.disabledClass.split(" "))};v.forEach(f=>h(f,"next")),S.forEach(f=>h(f,"prev"))}r("init",()=>{t.params.navigation.enabled===!1?w():(d(),s())}),r("toEdge fromEdge lock unlock",()=>{s()}),r("destroy",()=>{m()}),r("enable disable",()=>{let{nextEl:v,prevEl:S}=t.navigation;v=a(v),S=a(S),[...v,...S].filter(h=>!!h).forEach(h=>h.classList[t.enabled?"remove":"add"](t.params.navigation.lockClass))}),r("click",(v,S)=>{let{nextEl:h,prevEl:f}=t.navigation;h=a(h),f=a(f);const p=S.target;if(t.params.navigation.hideOnClick&&!f.includes(p)&&!h.includes(p)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===p||t.pagination.el.contains(p)))return;let x;h.length?x=h[0].classList.contains(t.params.navigation.hiddenClass):f.length&&(x=f[0].classList.contains(t.params.navigation.hiddenClass)),i(x===!0?"navigationShow":"navigationHide"),[...h,...f].filter(b=>!!b).forEach(b=>b.classList.toggle(t.params.navigation.hiddenClass))}});const g=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),d(),s()},w=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),m()};Object.assign(t.navigation,{enable:g,disable:w,update:s,init:d,destroy:m})}function rn(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Fv(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const a="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:f=>f,formatFractionTotal:f=>f,bulletClass:`${a}-bullet`,bulletActiveClass:`${a}-bullet-active`,modifierClass:`${a}-`,currentClass:`${a}-current`,totalClass:`${a}-total`,hiddenClass:`${a}-hidden`,progressbarFillClass:`${a}-progressbar-fill`,progressbarOppositeClass:`${a}-progressbar-opposite`,clickableClass:`${a}-clickable`,lockClass:`${a}-lock`,horizontalClass:`${a}-horizontal`,verticalClass:`${a}-vertical`,paginationDisabledClass:`${a}-disabled`}}),t.pagination={el:null,bullets:[]};let o,l=0;const s=f=>(Array.isArray(f)?f:[f]).filter(p=>!!p);function u(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function c(f,p){const{bulletActiveClass:x}=t.params.pagination;f&&(f=f[`${p==="prev"?"previous":"next"}ElementSibling`],f&&(f.classList.add(`${x}-${p}`),f=f[`${p==="prev"?"previous":"next"}ElementSibling`],f&&f.classList.add(`${x}-${p}-${p}`)))}function d(f){const p=f.target.closest(rn(t.params.pagination.bulletClass));if(!p)return;f.preventDefault();const x=Ki(p)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===x)return;const b=t.getSlideIndexByData(x),T=t.getSlideIndexByData(t.realIndex);b>t.slides.length-t.loopedSlides&&t.loopFix({direction:b>T?"next":"prev",activeSlideIndex:b,slideTo:!1}),t.slideToLoop(x)}else t.slideTo(x)}function m(){const f=t.rtl,p=t.params.pagination;if(u())return;let x=t.pagination.el;x=s(x);let b,T;const E=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,L=t.params.loop?Math.ceil(E/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(T=t.previousRealIndex||0,b=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(b=t.snapIndex,T=t.previousSnapIndex):(T=t.previousIndex||0,b=t.activeIndex||0),p.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const P=t.pagination.bullets;let R,_,I;if(p.dynamicBullets&&(o=Ku(P[0],t.isHorizontal()?"width":"height",!0),x.forEach(M=>{M.style[t.isHorizontal()?"width":"height"]=`${o*(p.dynamicMainBullets+4)}px`}),p.dynamicMainBullets>1&&T!==void 0&&(l+=b-(T||0),l>p.dynamicMainBullets-1?l=p.dynamicMainBullets-1:l<0&&(l=0)),R=Math.max(b-l,0),_=R+(Math.min(P.length,p.dynamicMainBullets)-1),I=(_+R)/2),P.forEach(M=>{const k=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(O=>`${p.bulletActiveClass}${O}`)].map(O=>typeof O=="string"&&O.includes(" ")?O.split(" "):O).flat();M.classList.remove(...k)}),x.length>1)P.forEach(M=>{const k=Ki(M);k===b?M.classList.add(...p.bulletActiveClass.split(" ")):t.isElement&&M.setAttribute("part","bullet"),p.dynamicBullets&&(k>=R&&k<=_&&M.classList.add(...`${p.bulletActiveClass}-main`.split(" ")),k===R&&c(M,"prev"),k===_&&c(M,"next"))});else{const M=P[b];if(M&&M.classList.add(...p.bulletActiveClass.split(" ")),t.isElement&&P.forEach((k,O)=>{k.setAttribute("part",O===b?"bullet-active":"bullet")}),p.dynamicBullets){const k=P[R],O=P[_];for(let $=R;$<=_;$+=1)P[$]&&P[$].classList.add(...`${p.bulletActiveClass}-main`.split(" "));c(k,"prev"),c(O,"next")}}if(p.dynamicBullets){const M=Math.min(P.length,p.dynamicMainBullets+4),k=(o*M-o)/2-I*o,O=f?"right":"left";P.forEach($=>{$.style[t.isHorizontal()?O:"top"]=`${k}px`})}}x.forEach((P,R)=>{if(p.type==="fraction"&&(P.querySelectorAll(rn(p.currentClass)).forEach(_=>{_.textContent=p.formatFractionCurrent(b+1)}),P.querySelectorAll(rn(p.totalClass)).forEach(_=>{_.textContent=p.formatFractionTotal(L)})),p.type==="progressbar"){let _;p.progressbarOpposite?_=t.isHorizontal()?"vertical":"horizontal":_=t.isHorizontal()?"horizontal":"vertical";const I=(b+1)/L;let M=1,k=1;_==="horizontal"?M=I:k=I,P.querySelectorAll(rn(p.progressbarFillClass)).forEach(O=>{O.style.transform=`translate3d(0,0,0) scaleX(${M}) scaleY(${k})`,O.style.transitionDuration=`${t.params.speed}ms`})}p.type==="custom"&&p.renderCustom?(P.innerHTML=p.renderCustom(t,b+1,L),R===0&&i("paginationRender",P)):(R===0&&i("paginationRender",P),i("paginationUpdate",P)),t.params.watchOverflow&&t.enabled&&P.classList[t.isLocked?"add":"remove"](p.lockClass)})}function g(){const f=t.params.pagination;if(u())return;const p=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length;let x=t.pagination.el;x=s(x);let b="";if(f.type==="bullets"){let T=t.params.loop?Math.ceil(p/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&T>p&&(T=p);for(let E=0;E<T;E+=1)f.renderBullet?b+=f.renderBullet.call(t,E,f.bulletClass):b+=`<${f.bulletElement} ${t.isElement?'part="bullet"':""} class="${f.bulletClass}"></${f.bulletElement}>`}f.type==="fraction"&&(f.renderFraction?b=f.renderFraction.call(t,f.currentClass,f.totalClass):b=`<span class="${f.currentClass}"></span> / <span class="${f.totalClass}"></span>`),f.type==="progressbar"&&(f.renderProgressbar?b=f.renderProgressbar.call(t,f.progressbarFillClass):b=`<span class="${f.progressbarFillClass}"></span>`),t.pagination.bullets=[],x.forEach(T=>{f.type!=="custom"&&(T.innerHTML=b||""),f.type==="bullets"&&t.pagination.bullets.push(...T.querySelectorAll(rn(f.bulletClass)))}),f.type!=="custom"&&i("paginationRender",x[0])}function w(){t.params.pagination=Cf(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const f=t.params.pagination;if(!f.el)return;let p;typeof f.el=="string"&&t.isElement&&(p=t.el.querySelector(f.el)),!p&&typeof f.el=="string"&&(p=[...document.querySelectorAll(f.el)]),p||(p=f.el),!(!p||p.length===0)&&(t.params.uniqueNavElements&&typeof f.el=="string"&&Array.isArray(p)&&p.length>1&&(p=[...t.el.querySelectorAll(f.el)],p.length>1&&(p=p.filter(x=>Rv(x,".swiper")[0]===t.el)[0])),Array.isArray(p)&&p.length===1&&(p=p[0]),Object.assign(t.pagination,{el:p}),p=s(p),p.forEach(x=>{f.type==="bullets"&&f.clickable&&x.classList.add(f.clickableClass),x.classList.add(f.modifierClass+f.type),x.classList.add(t.isHorizontal()?f.horizontalClass:f.verticalClass),f.type==="bullets"&&f.dynamicBullets&&(x.classList.add(`${f.modifierClass}${f.type}-dynamic`),l=0,f.dynamicMainBullets<1&&(f.dynamicMainBullets=1)),f.type==="progressbar"&&f.progressbarOpposite&&x.classList.add(f.progressbarOppositeClass),f.clickable&&x.addEventListener("click",d),t.enabled||x.classList.add(f.lockClass)}))}function v(){const f=t.params.pagination;if(u())return;let p=t.pagination.el;p&&(p=s(p),p.forEach(x=>{x.classList.remove(f.hiddenClass),x.classList.remove(f.modifierClass+f.type),x.classList.remove(t.isHorizontal()?f.horizontalClass:f.verticalClass),f.clickable&&x.removeEventListener("click",d)})),t.pagination.bullets&&t.pagination.bullets.forEach(x=>x.classList.remove(...f.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const f=t.params.pagination;let{el:p}=t.pagination;p=s(p),p.forEach(x=>{x.classList.remove(f.horizontalClass,f.verticalClass),x.classList.add(t.isHorizontal()?f.horizontalClass:f.verticalClass)})}),r("init",()=>{t.params.pagination.enabled===!1?h():(w(),g(),m())}),r("activeIndexChange",()=>{typeof t.snapIndex>"u"&&m()}),r("snapIndexChange",()=>{m()}),r("snapGridLengthChange",()=>{g(),m()}),r("destroy",()=>{v()}),r("enable disable",()=>{let{el:f}=t.pagination;f&&(f=s(f),f.forEach(p=>p.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),r("lock unlock",()=>{m()}),r("click",(f,p)=>{const x=p.target,b=s(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&b&&b.length>0&&!x.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&x===t.navigation.nextEl||t.navigation.prevEl&&x===t.navigation.prevEl))return;const T=b[0].classList.contains(t.params.pagination.hiddenClass);i(T===!0?"paginationShow":"paginationHide"),b.forEach(E=>E.classList.toggle(t.params.pagination.hiddenClass))}});const S=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:f}=t.pagination;f&&(f=s(f),f.forEach(p=>p.classList.remove(t.params.pagination.paginationDisabledClass))),w(),g(),m()},h=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:f}=t.pagination;f&&(f=s(f),f.forEach(p=>p.classList.add(t.params.pagination.paginationDisabledClass))),v()};Object.assign(t.pagination,{enable:S,disable:h,render:g,update:m,init:w,destroy:v})}function Bv(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const a=Kt();let o=!1,l=null,s=null,u,c,d,m;n({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),t.scrollbar={el:null,dragEl:null};function g(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:I,rtlTranslate:M}=t,{dragEl:k,el:O}=I,$=t.params.scrollbar,G=t.params.loop?t.progressLoop:t.progress;let j=c,A=(d-c)*G;M?(A=-A,A>0?(j=c-A,A=0):-A+c>d&&(j=d+A)):A<0?(j=c+A,A=0):A+c>d&&(j=d-A),t.isHorizontal()?(k.style.transform=`translate3d(${A}px, 0, 0)`,k.style.width=`${j}px`):(k.style.transform=`translate3d(0px, ${A}px, 0)`,k.style.height=`${j}px`),$.hide&&(clearTimeout(l),O.style.opacity=1,l=setTimeout(()=>{O.style.opacity=0,O.style.transitionDuration="400ms"},1e3))}function w(I){!t.params.scrollbar.el||!t.scrollbar.el||(t.scrollbar.dragEl.style.transitionDuration=`${I}ms`)}function v(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:I}=t,{dragEl:M,el:k}=I;M.style.width="",M.style.height="",d=t.isHorizontal()?k.offsetWidth:k.offsetHeight,m=t.size/(t.virtualSize+t.params.slidesOffsetBefore-(t.params.centeredSlides?t.snapGrid[0]:0)),t.params.scrollbar.dragSize==="auto"?c=d*m:c=parseInt(t.params.scrollbar.dragSize,10),t.isHorizontal()?M.style.width=`${c}px`:M.style.height=`${c}px`,m>=1?k.style.display="none":k.style.display="",t.params.scrollbar.hide&&(k.style.opacity=0),t.params.watchOverflow&&t.enabled&&I.el.classList[t.isLocked?"add":"remove"](t.params.scrollbar.lockClass)}function S(I){return t.isHorizontal()?I.clientX:I.clientY}function h(I){const{scrollbar:M,rtlTranslate:k}=t,{el:O}=M;let $;$=(S(I)-bE(O)[t.isHorizontal()?"left":"top"]-(u!==null?u:c/2))/(d-c),$=Math.max(Math.min($,1),0),k&&($=1-$);const G=t.minTranslate()+(t.maxTranslate()-t.minTranslate())*$;t.updateProgress(G),t.setTranslate(G),t.updateActiveIndex(),t.updateSlidesClasses()}function f(I){const M=t.params.scrollbar,{scrollbar:k,wrapperEl:O}=t,{el:$,dragEl:G}=k;o=!0,u=I.target===G?S(I)-I.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,I.preventDefault(),I.stopPropagation(),O.style.transitionDuration="100ms",G.style.transitionDuration="100ms",h(I),clearTimeout(s),$.style.transitionDuration="0ms",M.hide&&($.style.opacity=1),t.params.cssMode&&(t.wrapperEl.style["scroll-snap-type"]="none"),i("scrollbarDragStart",I)}function p(I){const{scrollbar:M,wrapperEl:k}=t,{el:O,dragEl:$}=M;o&&(I.preventDefault?I.preventDefault():I.returnValue=!1,h(I),k.style.transitionDuration="0ms",O.style.transitionDuration="0ms",$.style.transitionDuration="0ms",i("scrollbarDragMove",I))}function x(I){const M=t.params.scrollbar,{scrollbar:k,wrapperEl:O}=t,{el:$}=k;o&&(o=!1,t.params.cssMode&&(t.wrapperEl.style["scroll-snap-type"]="",O.style.transitionDuration=""),M.hide&&(clearTimeout(s),s=Ho(()=>{$.style.opacity=0,$.style.transitionDuration="400ms"},1e3)),i("scrollbarDragEnd",I),M.snapOnRelease&&t.slideToClosest())}function b(I){const{scrollbar:M,params:k}=t,O=M.el;if(!O)return;const $=O,G=k.passiveListeners?{passive:!1,capture:!1}:!1,j=k.passiveListeners?{passive:!0,capture:!1}:!1;if(!$)return;const A=I==="on"?"addEventListener":"removeEventListener";$[A]("pointerdown",f,G),a[A]("pointermove",p,G),a[A]("pointerup",x,j)}function T(){!t.params.scrollbar.el||!t.scrollbar.el||b("on")}function E(){!t.params.scrollbar.el||!t.scrollbar.el||b("off")}function L(){const{scrollbar:I,el:M}=t;t.params.scrollbar=Cf(t,t.originalParams.scrollbar,t.params.scrollbar,{el:"swiper-scrollbar"});const k=t.params.scrollbar;if(!k.el)return;let O;typeof k.el=="string"&&t.isElement&&(O=t.el.querySelector(k.el)),!O&&typeof k.el=="string"?O=a.querySelectorAll(k.el):O||(O=k.el),t.params.uniqueNavElements&&typeof k.el=="string"&&O.length>1&&M.querySelectorAll(k.el).length===1&&(O=M.querySelector(k.el)),O.length>0&&(O=O[0]),O.classList.add(t.isHorizontal()?k.horizontalClass:k.verticalClass);let $;O&&($=O.querySelector(`.${t.params.scrollbar.dragClass}`),$||($=Ns("div",t.params.scrollbar.dragClass),O.append($))),Object.assign(I,{el:O,dragEl:$}),k.draggable&&T(),O&&O.classList[t.enabled?"remove":"add"](t.params.scrollbar.lockClass)}function P(){const I=t.params.scrollbar,M=t.scrollbar.el;M&&M.classList.remove(t.isHorizontal()?I.horizontalClass:I.verticalClass),E()}r("init",()=>{t.params.scrollbar.enabled===!1?_():(L(),v(),g())}),r("update resize observerUpdate lock unlock",()=>{v()}),r("setTranslate",()=>{g()}),r("setTransition",(I,M)=>{w(M)}),r("enable disable",()=>{const{el:I}=t.scrollbar;I&&I.classList[t.enabled?"remove":"add"](t.params.scrollbar.lockClass)}),r("destroy",()=>{P()});const R=()=>{t.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.el&&t.scrollbar.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass),L(),v(),g()},_=()=>{t.el.classList.add(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.el&&t.scrollbar.el.classList.add(t.params.scrollbar.scrollbarDisabledClass),P()};Object.assign(t.scrollbar,{enable:R,disable:_,updateSize:v,setTranslate:g,init:L,destroy:P})}function Hv(e){let{swiper:t,extendParams:n,on:r}=e;n({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),t.a11y={clicked:!1};let i=null;function a(k){const O=i;O.length!==0&&(O.innerHTML="",O.innerHTML=k)}const o=k=>(Array.isArray(k)?k:[k]).filter(O=>!!O);function l(k){k===void 0&&(k=16);const O=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(k).replace(/x/g,O)}function s(k){k=o(k),k.forEach(O=>{O.setAttribute("tabIndex","0")})}function u(k){k=o(k),k.forEach(O=>{O.setAttribute("tabIndex","-1")})}function c(k,O){k=o(k),k.forEach($=>{$.setAttribute("role",O)})}function d(k,O){k=o(k),k.forEach($=>{$.setAttribute("aria-roledescription",O)})}function m(k,O){k=o(k),k.forEach($=>{$.setAttribute("aria-controls",O)})}function g(k,O){k=o(k),k.forEach($=>{$.setAttribute("aria-label",O)})}function w(k,O){k=o(k),k.forEach($=>{$.setAttribute("id",O)})}function v(k,O){k=o(k),k.forEach($=>{$.setAttribute("aria-live",O)})}function S(k){k=o(k),k.forEach(O=>{O.setAttribute("aria-disabled",!0)})}function h(k){k=o(k),k.forEach(O=>{O.setAttribute("aria-disabled",!1)})}function f(k){if(k.keyCode!==13&&k.keyCode!==32)return;const O=t.params.a11y,$=k.target;t.pagination&&t.pagination.el&&($===t.pagination.el||t.pagination.el.contains(k.target))&&!k.target.matches(rn(t.params.pagination.bulletClass))||(t.navigation&&t.navigation.nextEl&&$===t.navigation.nextEl&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?a(O.lastSlideMessage):a(O.nextSlideMessage)),t.navigation&&t.navigation.prevEl&&$===t.navigation.prevEl&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?a(O.firstSlideMessage):a(O.prevSlideMessage)),t.pagination&&$.matches(rn(t.params.pagination.bulletClass))&&$.click())}function p(){if(t.params.loop||t.params.rewind||!t.navigation)return;const{nextEl:k,prevEl:O}=t.navigation;O&&(t.isBeginning?(S(O),u(O)):(h(O),s(O))),k&&(t.isEnd?(S(k),u(k)):(h(k),s(k)))}function x(){return t.pagination&&t.pagination.bullets&&t.pagination.bullets.length}function b(){return x()&&t.params.pagination.clickable}function T(){const k=t.params.a11y;x()&&t.pagination.bullets.forEach(O=>{t.params.pagination.clickable&&(s(O),t.params.pagination.renderBullet||(c(O,"button"),g(O,k.paginationBulletMessage.replace(/\{\{index\}\}/,Ki(O)+1)))),O.matches(rn(t.params.pagination.bulletActiveClass))?O.setAttribute("aria-current","true"):O.removeAttribute("aria-current")})}const E=(k,O,$)=>{s(k),k.tagName!=="BUTTON"&&(c(k,"button"),k.addEventListener("keydown",f)),g(k,$),m(k,O)},L=()=>{t.a11y.clicked=!0},P=()=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{t.destroyed||(t.a11y.clicked=!1)})})},R=k=>{if(t.a11y.clicked)return;const O=k.target.closest(`.${t.params.slideClass}, swiper-slide`);if(!O||!t.slides.includes(O))return;const $=t.slides.indexOf(O)===t.activeIndex,G=t.params.watchSlidesProgress&&t.visibleSlides&&t.visibleSlides.includes(O);$||G||k.sourceCapabilities&&k.sourceCapabilities.firesTouchEvents||(t.isHorizontal()?t.el.scrollLeft=0:t.el.scrollTop=0,t.slideTo(t.slides.indexOf(O),0))},_=()=>{const k=t.params.a11y;k.itemRoleDescriptionMessage&&d(t.slides,k.itemRoleDescriptionMessage),k.slideRole&&c(t.slides,k.slideRole);const O=t.slides.length;k.slideLabelMessage&&t.slides.forEach(($,G)=>{const j=t.params.loop?parseInt($.getAttribute("data-swiper-slide-index"),10):G,A=k.slideLabelMessage.replace(/\{\{index\}\}/,j+1).replace(/\{\{slidesLength\}\}/,O);g($,A)})},I=()=>{const k=t.params.a11y;t.el.append(i);const O=t.el;k.containerRoleDescriptionMessage&&d(O,k.containerRoleDescriptionMessage),k.containerMessage&&g(O,k.containerMessage);const $=t.wrapperEl,G=k.id||$.getAttribute("id")||`swiper-wrapper-${l(16)}`,j=t.params.autoplay&&t.params.autoplay.enabled?"off":"polite";w($,G),v($,j),_();let{nextEl:A,prevEl:N}=t.navigation?t.navigation:{};A=o(A),N=o(N),A&&A.forEach(D=>E(D,G,k.nextSlideMessage)),N&&N.forEach(D=>E(D,G,k.prevSlideMessage)),b()&&(Array.isArray(t.pagination.el)?t.pagination.el:[t.pagination.el]).forEach(U=>{U.addEventListener("keydown",f)}),t.el.addEventListener("focus",R,!0),t.el.addEventListener("pointerdown",L,!0),t.el.addEventListener("pointerup",P,!0)};function M(){i&&i.remove();let{nextEl:k,prevEl:O}=t.navigation?t.navigation:{};k=o(k),O=o(O),k&&k.forEach($=>$.removeEventListener("keydown",f)),O&&O.forEach($=>$.removeEventListener("keydown",f)),b()&&(Array.isArray(t.pagination.el)?t.pagination.el:[t.pagination.el]).forEach(G=>{G.removeEventListener("keydown",f)}),t.el.removeEventListener("focus",R,!0),t.el.removeEventListener("pointerdown",L,!0),t.el.removeEventListener("pointerup",P,!0)}r("beforeInit",()=>{i=Ns("span",t.params.a11y.notificationClass),i.setAttribute("aria-live","assertive"),i.setAttribute("aria-atomic","true")}),r("afterInit",()=>{t.params.a11y.enabled&&I()}),r("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{t.params.a11y.enabled&&_()}),r("fromEdge toEdge afterInit lock unlock",()=>{t.params.a11y.enabled&&p()}),r("paginationUpdate",()=>{t.params.a11y.enabled&&T()}),r("destroy",()=>{t.params.a11y.enabled&&M()})}let bl;function CE(){const e=Ye(),t=Kt();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Uv(){return bl||(bl=CE()),bl}let El;function TE(e){let{userAgent:t}=e===void 0?{}:e;const n=Uv(),r=Ye(),i=r.navigator.platform,a=t||r.navigator.userAgent,o={ios:!1,android:!1},l=r.screen.width,s=r.screen.height,u=a.match(/(Android);?[\s\/]+([\d.]+)?/);let c=a.match(/(iPad).*OS\s([\d_]+)/);const d=a.match(/(iPod)(.*OS\s([\d_]+))?/),m=!c&&a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),g=i==="Win32";let w=i==="MacIntel";const v=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&w&&n.touch&&v.indexOf(`${l}x${s}`)>=0&&(c=a.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),w=!1),u&&!g&&(o.os="android",o.android=!0),(c||m||d)&&(o.os="ios",o.ios=!0),o}function PE(e){return e===void 0&&(e={}),El||(El=TE(e)),El}let kl;function OE(){const e=Ye();let t=!1;function n(){const r=e.navigator.userAgent.toLowerCase();return r.indexOf("safari")>=0&&r.indexOf("chrome")<0&&r.indexOf("android")<0}if(n()){const r=String(e.navigator.userAgent);if(r.includes("Version/")){const[i,a]=r.split("Version/")[1].split(" ")[0].split(".").map(o=>Number(o));t=i<16||i===16&&a<2}}return{isSafari:t||n(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}function AE(){return kl||(kl=OE()),kl}function LE(e){let{swiper:t,on:n,emit:r}=e;const i=Ye();let a=null,o=null;const l=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},s=()=>{!t||t.destroyed||!t.initialized||(a=new ResizeObserver(d=>{o=i.requestAnimationFrame(()=>{const{width:m,height:g}=t;let w=m,v=g;d.forEach(S=>{let{contentBoxSize:h,contentRect:f,target:p}=S;p&&p!==t.el||(w=f?f.width:(h[0]||h).inlineSize,v=f?f.height:(h[0]||h).blockSize)}),(w!==m||v!==g)&&l()})}),a.observe(t.el))},u=()=>{o&&i.cancelAnimationFrame(o),a&&a.unobserve&&t.el&&(a.unobserve(t.el),a=null)},c=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){s();return}i.addEventListener("resize",l),i.addEventListener("orientationchange",c)}),n("destroy",()=>{u(),i.removeEventListener("resize",l),i.removeEventListener("orientationchange",c)})}function NE(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const a=[],o=Ye(),l=function(c,d){d===void 0&&(d={});const m=o.MutationObserver||o.WebkitMutationObserver,g=new m(w=>{if(t.__preventObserver__)return;if(w.length===1){i("observerUpdate",w[0]);return}const v=function(){i("observerUpdate",w[0])};o.requestAnimationFrame?o.requestAnimationFrame(v):o.setTimeout(v,0)});g.observe(c,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:typeof d.childList>"u"?!0:d.childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),a.push(g)},s=()=>{if(t.params.observer){if(t.params.observeParents){const c=Rv(t.hostEl);for(let d=0;d<c.length;d+=1)l(c[d])}l(t.hostEl,{childList:t.params.observeSlideChildren}),l(t.wrapperEl,{attributes:!1})}},u=()=>{a.forEach(c=>{c.disconnect()}),a.splice(0,a.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",s),r("destroy",u)}var IE={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(a=>{r.eventsListeners[a]||(r.eventsListeners[a]=[]),r.eventsListeners[a][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,a)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(a,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return typeof a[0]=="string"||Array.isArray(a[0])?(t=a[0],n=a.slice(1,a.length),r=e):(t=a[0].events,n=a[0].data,r=a[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(s=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(u=>{u.apply(r,[s,...n])}),e.eventsListeners&&e.eventsListeners[s]&&e.eventsListeners[s].forEach(u=>{u.apply(r,n)})}),e}};function _E(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(ln(r,"padding-left")||0,10)-parseInt(ln(r,"padding-right")||0,10),n=n-parseInt(ln(r,"padding-top")||0,10)-parseInt(ln(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function jE(){const e=this;function t(_){return e.isHorizontal()?_:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[_]}function n(_,I){return parseFloat(_.getPropertyValue(t(I))||0)}const r=e.params,{wrapperEl:i,slidesEl:a,size:o,rtlTranslate:l,wrongRTL:s}=e,u=e.virtual&&r.virtual.enabled,c=u?e.virtual.slides.length:e.slides.length,d=Ot(a,`.${e.params.slideClass}, swiper-slide`),m=u?e.virtual.slides.length:d.length;let g=[];const w=[],v=[];let S=r.slidesOffsetBefore;typeof S=="function"&&(S=r.slidesOffsetBefore.call(e));let h=r.slidesOffsetAfter;typeof h=="function"&&(h=r.slidesOffsetAfter.call(e));const f=e.snapGrid.length,p=e.slidesGrid.length;let x=r.spaceBetween,b=-S,T=0,E=0;if(typeof o>"u")return;typeof x=="string"&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*o:typeof x=="string"&&(x=parseFloat(x)),e.virtualSize=-x,d.forEach(_=>{l?_.style.marginLeft="":_.style.marginRight="",_.style.marginBottom="",_.style.marginTop=""}),r.centeredSlides&&r.cssMode&&(Ba(i,"--swiper-centered-offset-before",""),Ba(i,"--swiper-centered-offset-after",""));const L=r.grid&&r.grid.rows>1&&e.grid;L&&e.grid.initSlides(m);let P;const R=r.slidesPerView==="auto"&&r.breakpoints&&Object.keys(r.breakpoints).filter(_=>typeof r.breakpoints[_].slidesPerView<"u").length>0;for(let _=0;_<m;_+=1){P=0;let I;if(d[_]&&(I=d[_]),L&&e.grid.updateSlide(_,I,m,t),!(d[_]&&ln(I,"display")==="none")){if(r.slidesPerView==="auto"){R&&(d[_].style[t("width")]="");const M=getComputedStyle(I),k=I.style.transform,O=I.style.webkitTransform;if(k&&(I.style.transform="none"),O&&(I.style.webkitTransform="none"),r.roundLengths)P=e.isHorizontal()?Ku(I,"width",!0):Ku(I,"height",!0);else{const $=n(M,"width"),G=n(M,"padding-left"),j=n(M,"padding-right"),A=n(M,"margin-left"),N=n(M,"margin-right"),D=M.getPropertyValue("box-sizing");if(D&&D==="border-box")P=$+A+N;else{const{clientWidth:U,offsetWidth:X}=I;P=$+G+j+A+N+(X-U)}}k&&(I.style.transform=k),O&&(I.style.webkitTransform=O),r.roundLengths&&(P=Math.floor(P))}else P=(o-(r.slidesPerView-1)*x)/r.slidesPerView,r.roundLengths&&(P=Math.floor(P)),d[_]&&(d[_].style[t("width")]=`${P}px`);d[_]&&(d[_].swiperSlideSize=P),v.push(P),r.centeredSlides?(b=b+P/2+T/2+x,T===0&&_!==0&&(b=b-o/2-x),_===0&&(b=b-o/2-x),Math.abs(b)<1/1e3&&(b=0),r.roundLengths&&(b=Math.floor(b)),E%r.slidesPerGroup===0&&g.push(b),w.push(b)):(r.roundLengths&&(b=Math.floor(b)),(E-Math.min(e.params.slidesPerGroupSkip,E))%e.params.slidesPerGroup===0&&g.push(b),w.push(b),b=b+P+x),e.virtualSize+=P+x,T=P,E+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+h,l&&s&&(r.effect==="slide"||r.effect==="coverflow")&&(i.style.width=`${e.virtualSize+x}px`),r.setWrapperSize&&(i.style[t("width")]=`${e.virtualSize+x}px`),L&&e.grid.updateWrapperSize(P,g,t),!r.centeredSlides){const _=[];for(let I=0;I<g.length;I+=1){let M=g[I];r.roundLengths&&(M=Math.floor(M)),g[I]<=e.virtualSize-o&&_.push(M)}g=_,Math.floor(e.virtualSize-o)-Math.floor(g[g.length-1])>1&&g.push(e.virtualSize-o)}if(u&&r.loop){const _=v[0]+x;if(r.slidesPerGroup>1){const I=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/r.slidesPerGroup),M=_*r.slidesPerGroup;for(let k=0;k<I;k+=1)g.push(g[g.length-1]+M)}for(let I=0;I<e.virtual.slidesBefore+e.virtual.slidesAfter;I+=1)r.slidesPerGroup===1&&g.push(g[g.length-1]+_),w.push(w[w.length-1]+_),e.virtualSize+=_}if(g.length===0&&(g=[0]),x!==0){const _=e.isHorizontal()&&l?"marginLeft":t("marginRight");d.filter((I,M)=>!r.cssMode||r.loop?!0:M!==d.length-1).forEach(I=>{I.style[_]=`${x}px`})}if(r.centeredSlides&&r.centeredSlidesBounds){let _=0;v.forEach(M=>{_+=M+(x||0)}),_-=x;const I=_-o;g=g.map(M=>M<=0?-S:M>I?I+h:M)}if(r.centerInsufficientSlides){let _=0;if(v.forEach(I=>{_+=I+(x||0)}),_-=x,_<o){const I=(o-_)/2;g.forEach((M,k)=>{g[k]=M-I}),w.forEach((M,k)=>{w[k]=M+I})}}if(Object.assign(e,{slides:d,snapGrid:g,slidesGrid:w,slidesSizesGrid:v}),r.centeredSlides&&r.cssMode&&!r.centeredSlidesBounds){Ba(i,"--swiper-centered-offset-before",`${-g[0]}px`),Ba(i,"--swiper-centered-offset-after",`${e.size/2-v[v.length-1]/2}px`);const _=-e.snapGrid[0],I=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(M=>M+_),e.slidesGrid=e.slidesGrid.map(M=>M+I)}if(m!==c&&e.emit("slidesLengthChange"),g.length!==f&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),w.length!==p&&e.emit("slidesGridLengthChange"),r.watchSlidesProgress&&e.updateSlidesOffset(),!u&&!r.cssMode&&(r.effect==="slide"||r.effect==="fade")){const _=`${r.containerModifierClass}backface-hidden`,I=e.el.classList.contains(_);m<=r.maxBackfaceHiddenSlides?I||e.el.classList.add(_):I&&e.el.classList.remove(_)}}function ME(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,a;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(a=0;a<Math.ceil(t.params.slidesPerView);a+=1){const l=t.activeIndex+a;if(l>t.slides.length&&!r)break;n.push(o(l))}else n.push(o(t.activeIndex));for(a=0;a<n.length;a+=1)if(typeof n[a]<"u"){const l=n[a].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function zE(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}function $E(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:a}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;i&&(o=e),r.forEach(s=>{s.classList.remove(n.slideVisibleClass)}),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<r.length;s+=1){const u=r[s];let c=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=r[0].swiperSlideOffset);const d=(o+(n.centeredSlides?t.minTranslate():0)-c)/(u.swiperSlideSize+l),m=(o-a[0]+(n.centeredSlides?t.minTranslate():0)-c)/(u.swiperSlideSize+l),g=-(o-c),w=g+t.slidesSizesGrid[s];(g>=0&&g<t.size-1||w>1&&w<=t.size||g<=0&&w>=t.size)&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(s),r[s].classList.add(n.slideVisibleClass)),u.progress=i?-d:d,u.originalProgress=i?-m:m}}function RE(e){const t=this;if(typeof e>"u"){const c=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*c||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:a,isEnd:o,progressLoop:l}=t;const s=a,u=o;if(r===0)i=0,a=!0,o=!0;else{i=(e-t.minTranslate())/r;const c=Math.abs(e-t.minTranslate())<1,d=Math.abs(e-t.maxTranslate())<1;a=c||i<=0,o=d||i>=1,c&&(i=0),d&&(i=1)}if(n.loop){const c=t.getSlideIndexByData(0),d=t.getSlideIndexByData(t.slides.length-1),m=t.slidesGrid[c],g=t.slidesGrid[d],w=t.slidesGrid[t.slidesGrid.length-1],v=Math.abs(e);v>=m?l=(v-m)/w:l=(v+w-g)/w,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:a,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),a&&!s&&t.emit("reachBeginning toEdge"),o&&!u&&t.emit("reachEnd toEdge"),(s&&!a||u&&!o)&&t.emit("fromEdge"),t.emit("progress",i)}function DE(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,a=e.virtual&&n.virtual.enabled,o=s=>Ot(r,`.${n.slideClass}${s}, swiper-slide${s}`)[0];t.forEach(s=>{s.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)});let l;if(a)if(n.loop){let s=i-e.virtual.slidesBefore;s<0&&(s=e.virtual.slides.length+s),s>=e.virtual.slides.length&&(s-=e.virtual.slides.length),l=o(`[data-swiper-slide-index="${s}"]`)}else l=o(`[data-swiper-slide-index="${i}"]`);else l=t[i];if(l){l.classList.add(n.slideActiveClass);let s=kE(l,`.${n.slideClass}, swiper-slide`)[0];n.loop&&!s&&(s=t[0]),s&&s.classList.add(n.slideNextClass);let u=EE(l,`.${n.slideClass}, swiper-slide`)[0];n.loop&&!u===0&&(u=t[t.length-1]),u&&u.classList.add(n.slidePrevClass)}e.emitSlidesClasses()}const so=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){const i=r.querySelector(`.${e.params.lazyPreloaderClass}`);i&&i.remove()}},Cl=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Xu=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const o=i,l=[o-t];l.push(...Array.from({length:t}).map((s,u)=>o+r+u)),e.slides.forEach((s,u)=>{l.includes(s.column)&&Cl(e,u)});return}const a=i+r-1;if(e.params.rewind||e.params.loop)for(let o=i-t;o<=a+t;o+=1){const l=(o%n+n)%n;(l<i||l>a)&&Cl(e,l)}else for(let o=Math.max(i-t,0);o<=Math.min(a+t,n-1);o+=1)o!==i&&(o>a||o<i)&&Cl(e,o)};function FE(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let a=0;a<t.length;a+=1)typeof t[a+1]<"u"?r>=t[a]&&r<t[a+1]-(t[a+1]-t[a])/2?i=a:r>=t[a]&&r<t[a+1]&&(i=a+1):r>=t[a]&&(i=a);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function BE(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:a,realIndex:o,snapIndex:l}=t;let s=e,u;const c=m=>{let g=m-t.virtual.slidesBefore;return g<0&&(g=t.virtual.slides.length+g),g>=t.virtual.slides.length&&(g-=t.virtual.slides.length),g};if(typeof s>"u"&&(s=FE(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const m=Math.min(i.slidesPerGroupSkip,s);u=m+Math.floor((s-m)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),s===a){u!==l&&(t.snapIndex=u,t.emit("snapIndexChange")),t.params.loop&&t.virtual&&t.params.virtual.enabled&&(t.realIndex=c(s));return}let d;t.virtual&&i.virtual.enabled&&i.loop?d=c(s):t.slides[s]?d=parseInt(t.slides[s].getAttribute("data-swiper-slide-index")||s,10):d=s,Object.assign(t,{previousSnapIndex:l,snapIndex:u,previousRealIndex:o,realIndex:d,previousIndex:a,activeIndex:s}),t.initialized&&Xu(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),o!==d&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")}function HE(e){const t=this,n=t.params,r=e.closest(`.${n.slideClass}, swiper-slide`);let i=!1,a;if(r){for(let o=0;o<t.slides.length;o+=1)if(t.slides[o]===r){i=!0,a=o;break}}if(r&&i)t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=a;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}n.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var UE={updateSize:_E,updateSlides:jE,updateAutoHeight:ME,updateSlidesOffset:zE,updateSlidesProgress:$E,updateProgress:RE,updateSlidesClasses:DE,updateActiveIndex:BE,updateClickedSlide:HE};function VE(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:a}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let o=wE(a,e);return o+=t.cssOverflowAdjustment(),r&&(o=-o),o||0}function WE(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:a,progress:o}=n;let l=0,s=0;const u=0;n.isHorizontal()?l=r?-e:e:s=e,i.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:s,i.cssMode?a[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-s:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),a.style.transform=`translate3d(${l}px, ${s}px, ${u}px)`);let c;const d=n.maxTranslate()-n.minTranslate();d===0?c=0:c=(e-n.minTranslate())/d,c!==o&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function GE(){return-this.snapGrid[0]}function YE(){return-this.snapGrid[this.snapGrid.length-1]}function KE(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const a=this,{params:o,wrapperEl:l}=a;if(a.animating&&o.preventInteractionOnTransition)return!1;const s=a.minTranslate(),u=a.maxTranslate();let c;if(r&&e>s?c=s:r&&e<u?c=u:c=e,a.updateProgress(c),o.cssMode){const d=a.isHorizontal();if(t===0)l[d?"scrollLeft":"scrollTop"]=-c;else{if(!a.support.smoothScroll)return $v({swiper:a,targetPosition:-c,side:d?"left":"top"}),!0;l.scrollTo({[d?"left":"top"]:-c,behavior:"smooth"})}return!0}return t===0?(a.setTransition(0),a.setTranslate(c),n&&(a.emit("beforeTransitionStart",t,i),a.emit("transitionEnd"))):(a.setTransition(t),a.setTranslate(c),n&&(a.emit("beforeTransitionStart",t,i),a.emit("transitionStart")),a.animating||(a.animating=!0,a.onTranslateToWrapperTransitionEnd||(a.onTranslateToWrapperTransitionEnd=function(m){!a||a.destroyed||m.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onTranslateToWrapperTransitionEnd),a.onTranslateToWrapperTransitionEnd=null,delete a.onTranslateToWrapperTransitionEnd,n&&a.emit("transitionEnd"))}),a.wrapperEl.addEventListener("transitionend",a.onTranslateToWrapperTransitionEnd))),!0}var XE={getTranslate:VE,setTranslate:WE,minTranslate:GE,maxTranslate:YE,translateTo:KE};function QE(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`),n.emit("setTransition",e,t)}function Vv(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:a,previousIndex:o}=t;let l=r;if(l||(a>o?l="next":a<o?l="prev":l="reset"),t.emit(`transition${i}`),n&&a!==o){if(l==="reset"){t.emit(`slideResetTransition${i}`);return}t.emit(`slideChangeTransition${i}`),l==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function qE(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Vv({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function ZE(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Vv({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var JE={setTransition:QE,transitionStart:qE,transitionEnd:ZE};function ek(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const a=this;let o=e;o<0&&(o=0);const{params:l,snapGrid:s,slidesGrid:u,previousIndex:c,activeIndex:d,rtlTranslate:m,wrapperEl:g,enabled:w}=a;if(a.animating&&l.preventInteractionOnTransition||!w&&!r&&!i)return!1;const v=Math.min(a.params.slidesPerGroupSkip,o);let S=v+Math.floor((o-v)/a.params.slidesPerGroup);S>=s.length&&(S=s.length-1);const h=-s[S];if(l.normalizeSlideIndex)for(let p=0;p<u.length;p+=1){const x=-Math.floor(h*100),b=Math.floor(u[p]*100),T=Math.floor(u[p+1]*100);typeof u[p+1]<"u"?x>=b&&x<T-(T-b)/2?o=p:x>=b&&x<T&&(o=p+1):x>=b&&(o=p)}if(a.initialized&&o!==d&&(!a.allowSlideNext&&(m?h>a.translate&&h>a.minTranslate():h<a.translate&&h<a.minTranslate())||!a.allowSlidePrev&&h>a.translate&&h>a.maxTranslate()&&(d||0)!==o))return!1;o!==(c||0)&&n&&a.emit("beforeSlideChangeStart"),a.updateProgress(h);let f;if(o>d?f="next":o<d?f="prev":f="reset",m&&-h===a.translate||!m&&h===a.translate)return a.updateActiveIndex(o),l.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),l.effect!=="slide"&&a.setTranslate(h),f!=="reset"&&(a.transitionStart(n,f),a.transitionEnd(n,f)),!1;if(l.cssMode){const p=a.isHorizontal(),x=m?h:-h;if(t===0){const b=a.virtual&&a.params.virtual.enabled;b&&(a.wrapperEl.style.scrollSnapType="none",a._immediateVirtual=!0),b&&!a._cssModeVirtualInitialSet&&a.params.initialSlide>0?(a._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{g[p?"scrollLeft":"scrollTop"]=x})):g[p?"scrollLeft":"scrollTop"]=x,b&&requestAnimationFrame(()=>{a.wrapperEl.style.scrollSnapType="",a._immediateVirtual=!1})}else{if(!a.support.smoothScroll)return $v({swiper:a,targetPosition:x,side:p?"left":"top"}),!0;g.scrollTo({[p?"left":"top"]:x,behavior:"smooth"})}return!0}return a.setTransition(t),a.setTranslate(h),a.updateActiveIndex(o),a.updateSlidesClasses(),a.emit("beforeTransitionStart",t,r),a.transitionStart(n,f),t===0?a.transitionEnd(n,f):a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||(a.onSlideToWrapperTransitionEnd=function(x){!a||a.destroyed||x.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onSlideToWrapperTransitionEnd),a.onSlideToWrapperTransitionEnd=null,delete a.onSlideToWrapperTransitionEnd,a.transitionEnd(n,f))}),a.wrapperEl.addEventListener("transitionend",a.onSlideToWrapperTransitionEnd)),!0}function tk(e,t,n,r){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this;let a=e;return i.params.loop&&(i.virtual&&i.params.virtual.enabled?a=a+i.virtual.slidesBefore:a=i.getSlideIndexByData(a)),i.slideTo(a,t,n,r)}function nk(e,t,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const r=this,{enabled:i,params:a,animating:o}=r;if(!i)return r;let l=a.slidesPerGroup;a.slidesPerView==="auto"&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<a.slidesPerGroupSkip?1:l,u=r.virtual&&a.virtual.enabled;if(a.loop){if(o&&!u&&a.loopPreventsSliding)return!1;r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft}return a.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function rk(e,t,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const r=this,{params:i,snapGrid:a,slidesGrid:o,rtlTranslate:l,enabled:s,animating:u}=r;if(!s)return r;const c=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!c&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const d=l?r.translate:-r.translate;function m(h){return h<0?-Math.floor(Math.abs(h)):Math.floor(h)}const g=m(d),w=a.map(h=>m(h));let v=a[w.indexOf(g)-1];if(typeof v>"u"&&i.cssMode){let h;a.forEach((f,p)=>{g>=f&&(h=p)}),typeof h<"u"&&(v=a[h>0?h-1:h])}let S=0;if(typeof v<"u"&&(S=o.indexOf(v),S<0&&(S=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(S=S-r.slidesPerViewDynamic("previous",!0)+1,S=Math.max(S,0))),i.rewind&&r.isBeginning){const h=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(h,e,t,n)}return r.slideTo(S,e,t,n)}function ik(e,t,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const r=this;return r.slideTo(r.activeIndex,e,t,n)}function ak(e,t,n,r){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),r===void 0&&(r=.5);const i=this;let a=i.activeIndex;const o=Math.min(i.params.slidesPerGroupSkip,a),l=o+Math.floor((a-o)/i.params.slidesPerGroup),s=i.rtlTranslate?i.translate:-i.translate;if(s>=i.snapGrid[l]){const u=i.snapGrid[l],c=i.snapGrid[l+1];s-u>(c-u)*r&&(a+=i.params.slidesPerGroup)}else{const u=i.snapGrid[l-1],c=i.snapGrid[l];s-u<=(c-u)*r&&(a-=i.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,i.slidesGrid.length-1),i.slideTo(a,e,t,n)}function ok(){const e=this,{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,a;const o=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;a=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=e.getSlideIndex(Ot(n,`${o}[data-swiper-slide-index="${a}"]`)[0]),Ho(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=e.getSlideIndex(Ot(n,`${o}[data-swiper-slide-index="${a}"]`)[0]),Ho(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var sk={slideTo:ek,slideToLoop:tk,slideNext:nk,slidePrev:rk,slideReset:ik,slideToClosest:ak,slideToClickedSlide:ok};function lk(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;Ot(r,`.${n.slideClass}, swiper-slide`).forEach((a,o)=>{a.setAttribute("data-swiper-slide-index",o)}),t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function uk(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:a,byController:o,byMousewheel:l}=e===void 0?{}:e;const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:u,allowSlidePrev:c,allowSlideNext:d,slidesEl:m,params:g}=s;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&g.virtual.enabled){n&&(!g.centeredSlides&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):g.centeredSlides&&s.snapIndex<g.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=c,s.allowSlideNext=d,s.emit("loopFix");return}const w=g.slidesPerView==="auto"?s.slidesPerViewDynamic():Math.ceil(parseFloat(g.slidesPerView,10));let v=g.loopedSlides||w;v%g.slidesPerGroup!==0&&(v+=g.slidesPerGroup-v%g.slidesPerGroup),s.loopedSlides=v;const S=[],h=[];let f=s.activeIndex;typeof a>"u"?a=s.getSlideIndex(s.slides.filter(E=>E.classList.contains(g.slideActiveClass))[0]):f=a;const p=r==="next"||!r,x=r==="prev"||!r;let b=0,T=0;if(a<v){b=Math.max(v-a,g.slidesPerGroup);for(let E=0;E<v-a;E+=1){const L=E-Math.floor(E/u.length)*u.length;S.push(u.length-L-1)}}else if(a>s.slides.length-v*2){T=Math.max(a-(s.slides.length-v*2),g.slidesPerGroup);for(let E=0;E<T;E+=1){const L=E-Math.floor(E/u.length)*u.length;h.push(L)}}if(x&&S.forEach(E=>{s.slides[E].swiperLoopMoveDOM=!0,m.prepend(s.slides[E]),s.slides[E].swiperLoopMoveDOM=!1}),p&&h.forEach(E=>{s.slides[E].swiperLoopMoveDOM=!0,m.append(s.slides[E]),s.slides[E].swiperLoopMoveDOM=!1}),s.recalcSlides(),g.slidesPerView==="auto"&&s.updateSlides(),g.watchSlidesProgress&&s.updateSlidesOffset(),n){if(S.length>0&&x)if(typeof t>"u"){const E=s.slidesGrid[f],P=s.slidesGrid[f+b]-E;l?s.setTranslate(s.translate-P):(s.slideTo(f+b,0,!1,!0),i&&(s.touches[s.isHorizontal()?"startX":"startY"]+=P,s.touchEventsData.currentTranslate=s.translate))}else i&&(s.slideToLoop(t,0,!1,!0),s.touchEventsData.currentTranslate=s.translate);else if(h.length>0&&p)if(typeof t>"u"){const E=s.slidesGrid[f],P=s.slidesGrid[f-T]-E;l?s.setTranslate(s.translate-P):(s.slideTo(f-T,0,!1,!0),i&&(s.touches[s.isHorizontal()?"startX":"startY"]+=P,s.touchEventsData.currentTranslate=s.translate))}else s.slideToLoop(t,0,!1,!0)}if(s.allowSlidePrev=c,s.allowSlideNext=d,s.controller&&s.controller.control&&!o){const E={slideRealIndex:t,slideTo:!1,direction:r,setTranslate:i,activeSlideIndex:a,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach(L=>{!L.destroyed&&L.params.loop&&L.loopFix(E)}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix(E)}s.emit("loopFix")}function ck(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const a=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[a]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var fk={loopCreate:lk,loopFix:uk,loopDestroy:ck};function dk(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function pk(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var mk={setGrabCursor:dk,unsetGrabCursor:pk};function hk(e,t){t===void 0&&(t=this);function n(r){if(!r||r===Kt()||r===Ye())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function gk(e){const t=this,n=Kt(),r=Ye(),i=t.touchEventsData;i.evCache.push(e);const{params:a,touches:o,enabled:l}=t;if(!l||!a.simulateTouch&&e.pointerType==="mouse"||t.animating&&a.preventInteractionOnTransition)return;!t.animating&&a.cssMode&&a.loop&&t.loopFix();let s=e;s.originalEvent&&(s=s.originalEvent);let u=s.target;if(a.touchEventsTarget==="wrapper"&&!t.wrapperEl.contains(u)||"which"in s&&s.which===3||"button"in s&&s.button>0||i.isTouched&&i.isMoved)return;const c=!!a.noSwipingClass&&a.noSwipingClass!=="",d=e.composedPath?e.composedPath():e.path;c&&s.target&&s.target.shadowRoot&&d&&(u=d[0]);const m=a.noSwipingSelector?a.noSwipingSelector:`.${a.noSwipingClass}`,g=!!(s.target&&s.target.shadowRoot);if(a.noSwiping&&(g?hk(m,u):u.closest(m))){t.allowClick=!0;return}if(a.swipeHandler&&!u.closest(a.swipeHandler))return;o.currentX=s.pageX,o.currentY=s.pageY;const w=o.currentX,v=o.currentY,S=a.edgeSwipeDetection||a.iOSEdgeSwipeDetection,h=a.edgeSwipeThreshold||a.iOSEdgeSwipeThreshold;if(S&&(w<=h||w>=r.innerWidth-h))if(S==="prevent")e.preventDefault();else return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=w,o.startY=v,i.touchStartTime=Uo(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,a.threshold>0&&(i.allowThresholdMove=!1);let f=!0;u.matches(i.focusableElements)&&(f=!1,u.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==u&&n.activeElement.blur();const p=f&&t.allowTouchMove&&a.touchStartPreventDefault;(a.touchStartForcePreventDefault||p)&&!u.isContentEditable&&s.preventDefault(),a.freeMode&&a.freeMode.enabled&&t.freeMode&&t.animating&&!a.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",s)}function vk(e){const t=Kt(),n=this,r=n.touchEventsData,{params:i,touches:a,rtlTranslate:o,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const u=r.evCache.findIndex(T=>T.pointerId===s.pointerId);u>=0&&(r.evCache[u]=s);const c=r.evCache.length>1?r.evCache[0]:s,d=c.pageX,m=c.pageY;if(s.preventedByNestedSwiper){a.startX=d,a.startY=m;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(a,{startX:d,startY:m,prevX:n.touches.currentX,prevY:n.touches.currentY,currentX:d,currentY:m}),r.touchStartTime=Uo());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(m<a.startY&&n.translate<=n.maxTranslate()||m>a.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(d<a.startX&&n.translate<=n.maxTranslate()||d>a.startX&&n.translate>=n.minTranslate())return}if(t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}if(r.allowTouchCallbacks&&n.emit("touchMove",s),s.targetTouches&&s.targetTouches.length>1)return;a.currentX=d,a.currentY=m;const g=a.currentX-a.startX,w=a.currentY-a.startY;if(n.params.threshold&&Math.sqrt(g**2+w**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let T;n.isHorizontal()&&a.currentY===a.startY||n.isVertical()&&a.currentX===a.startX?r.isScrolling=!1:g*g+w*w>=25&&(T=Math.atan2(Math.abs(w),Math.abs(g))*180/Math.PI,r.isScrolling=n.isHorizontal()?T>i.touchAngle:90-T>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(a.currentX!==a.startX||a.currentY!==a.startY)&&(r.startMoving=!0),r.isScrolling||n.zoom&&n.params.zoom&&n.params.zoom.enabled&&r.evCache.length>1){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&s.cancelable&&s.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&s.stopPropagation();let v=n.isHorizontal()?g:w,S=n.isHorizontal()?a.currentX-a.previousX:a.currentY-a.previousY;i.oneWayMovement&&(v=Math.abs(v)*(o?1:-1),S=Math.abs(S)*(o?1:-1)),a.diff=v,v*=i.touchRatio,o&&(v=-v,S=-S);const h=n.touchesDirection;n.swipeDirection=v>0?"prev":"next",n.touchesDirection=S>0?"prev":"next";const f=n.params.loop&&!i.cssMode;if(!r.isMoved){if(f&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const T=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(T)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let p;r.isMoved&&h!==n.touchesDirection&&f&&Math.abs(v)>=1&&(n.loopFix({direction:n.swipeDirection,setTranslate:!0}),p=!0),n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=v+r.startTranslate;let x=!0,b=i.resistanceRatio;if(i.touchReleaseOnEdges&&(b=0),v>0?(f&&!p&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.size/2:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(x=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+v)**b))):v<0&&(f&&!p&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.size/2:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(x=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-v)**b))),x&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(v)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,r.currentTranslate=r.startTranslate,a.diff=n.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function yk(e){const t=this,n=t.touchEventsData,r=n.evCache.findIndex(p=>p.pointerId===e.pointerId);if(r>=0&&n.evCache.splice(r,1),["pointercancel","pointerout","pointerleave"].includes(e.type)&&!(e.type==="pointercancel"&&(t.browser.isSafari||t.browser.isWebView)))return;const{params:i,touches:a,rtlTranslate:o,slidesGrid:l,enabled:s}=t;if(!s||!i.simulateTouch&&e.pointerType==="mouse")return;let u=e;if(u.originalEvent&&(u=u.originalEvent),n.allowTouchCallbacks&&t.emit("touchEnd",u),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&i.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}i.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const c=Uo(),d=c-n.touchStartTime;if(t.allowClick){const p=u.path||u.composedPath&&u.composedPath();t.updateClickedSlide(p&&p[0]||u.target),t.emit("tap click",u),d<300&&c-n.lastClickTime<300&&t.emit("doubleTap doubleClick",u)}if(n.lastClickTime=Uo(),Ho(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||a.diff===0||n.currentTranslate===n.startTranslate){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let m;if(i.followFinger?m=o?t.translate:-t.translate:m=-n.currentTranslate,i.cssMode)return;if(i.freeMode&&i.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:m});return}let g=0,w=t.slidesSizesGrid[0];for(let p=0;p<l.length;p+=p<i.slidesPerGroupSkip?1:i.slidesPerGroup){const x=p<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;typeof l[p+x]<"u"?m>=l[p]&&m<l[p+x]&&(g=p,w=l[p+x]-l[p]):m>=l[p]&&(g=p,w=l[l.length-1]-l[l.length-2])}let v=null,S=null;i.rewind&&(t.isBeginning?S=i.virtual&&i.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(v=0));const h=(m-l[g])/w,f=g<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(d>i.longSwipesMs){if(!i.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(h>=i.longSwipesRatio?t.slideTo(i.rewind&&t.isEnd?v:g+f):t.slideTo(g)),t.swipeDirection==="prev"&&(h>1-i.longSwipesRatio?t.slideTo(g+f):S!==null&&h<0&&Math.abs(h)>i.longSwipesRatio?t.slideTo(S):t.slideTo(g))}else{if(!i.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(u.target===t.navigation.nextEl||u.target===t.navigation.prevEl)?u.target===t.navigation.nextEl?t.slideTo(g+f):t.slideTo(g):(t.swipeDirection==="next"&&t.slideTo(v!==null?v:g+f),t.swipeDirection==="prev"&&t.slideTo(S!==null?S:g))}}function Wp(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:a}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=o&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&a!==e.snapGrid&&e.checkOverflow()}function xk(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function wk(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const a=e.maxTranslate()-e.minTranslate();a===0?i=0:i=(e.translate-e.minTranslate())/a,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function Sk(e){const t=this;so(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}let Gp=!1;function bk(){}const Wv=(e,t)=>{const n=Kt(),{params:r,el:i,wrapperEl:a,device:o}=e,l=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",u=t;i[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[s]("click",e.onClick,!0),r.cssMode&&a[s]("scroll",e.onScroll),r.updateOnWindowResize?e[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Wp,!0):e[u]("observerUpdate",Wp,!0),i[s]("load",e.onLoad,{capture:!0})};function Ek(){const e=this,t=Kt(),{params:n}=e;e.onTouchStart=gk.bind(e),e.onTouchMove=vk.bind(e),e.onTouchEnd=yk.bind(e),n.cssMode&&(e.onScroll=wk.bind(e)),e.onClick=xk.bind(e),e.onLoad=Sk.bind(e),Gp||(t.addEventListener("touchstart",bk),Gp=!0),Wv(e,"on")}function kk(){Wv(this,"off")}var Ck={attachEvents:Ek,detachEvents:kk};const Yp=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function Tk(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,a=r.breakpoints;if(!a||a&&Object.keys(a).length===0)return;const o=e.getBreakpoint(a,e.params.breakpointsBase,e.el);if(!o||e.currentBreakpoint===o)return;const s=(o in a?a[o]:void 0)||e.originalParams,u=Yp(e,r),c=Yp(e,s),d=r.enabled;u&&!c?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!u&&c&&(i.classList.add(`${r.containerModifierClass}grid`),(s.grid.fill&&s.grid.fill==="column"||!s.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(v=>{if(typeof s[v]>"u")return;const S=r[v]&&r[v].enabled,h=s[v]&&s[v].enabled;S&&!h&&e[v].disable(),!S&&h&&e[v].enable()});const m=s.direction&&s.direction!==r.direction,g=r.loop&&(s.slidesPerView!==r.slidesPerView||m);m&&n&&e.changeDirection(),Xe(e.params,s);const w=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),d&&!w?e.disable():!d&&w&&e.enable(),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",s),g&&n&&(e.loopDestroy(),e.loopCreate(t),e.updateSlides()),e.emit("breakpoint",s)}function Pk(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const i=Ye(),a=t==="window"?i.innerHeight:n.clientHeight,o=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const s=parseFloat(l.substr(1));return{value:a*s,point:l}}return{value:l,point:l}});o.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<o.length;l+=1){const{point:s,value:u}=o[l];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=s):u<=n.clientWidth&&(r=s)}return r||"max"}var Ok={setBreakpoint:Tk,getBreakpoint:Pk};function Ak(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function Lk(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:a}=e,o=Ak(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:a.android},{ios:a.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),i.classList.add(...t),e.emitContainerClasses()}function Nk(){const e=this,{el:t,classNames:n}=e;t.classList.remove(...n),e.emitContainerClasses()}var Ik={addClasses:Lk,removeClasses:Nk};function _k(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,a=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>a}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var jk={checkOverflow:_k},Qu={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Mk(e,t){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],a=r[i];if(typeof a!="object"||a===null){Xe(t,r);return}if(["navigation","pagination","scrollbar"].indexOf(i)>=0&&e[i]===!0&&(e[i]={auto:!0}),!(i in e&&"enabled"in a)){Xe(t,r);return}e[i]===!0&&(e[i]={enabled:!0}),typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Xe(t,r)}}const Tl={eventsEmitter:IE,update:UE,translate:XE,transition:JE,slide:sk,loop:fk,grabCursor:mk,events:Ck,breakpoints:Ok,checkOverflow:jk,classes:Ik},Pl={};let Tf=class Nt{constructor(){let t,n;for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=Xe({},n),t&&!n.el&&(n.el=t);const o=Kt();if(n.el&&typeof n.el=="string"&&o.querySelectorAll(n.el).length>1){const c=[];return o.querySelectorAll(n.el).forEach(d=>{const m=Xe({},n,{el:d});c.push(new Nt(m))}),c}const l=this;l.__swiper__=!0,l.support=Uv(),l.device=PE({userAgent:n.userAgent}),l.browser=AE(),l.eventsListeners={},l.eventsAnyListeners=[],l.modules=[...l.__modules__],n.modules&&Array.isArray(n.modules)&&l.modules.push(...n.modules);const s={};l.modules.forEach(c=>{c({params:n,swiper:l,extendParams:Mk(n,s),on:l.on.bind(l),once:l.once.bind(l),off:l.off.bind(l),emit:l.emit.bind(l)})});const u=Xe({},Qu,s);return l.params=Xe({},u,Pl,n),l.originalParams=Xe({},l.params),l.passedParams=Xe({},n),l.params&&l.params.on&&Object.keys(l.params.on).forEach(c=>{l.on(c,l.params.on[c])}),l.params&&l.params.onAny&&l.onAny(l.params.onAny),Object.assign(l,{enabled:l.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return l.params.direction==="horizontal"},isVertical(){return l.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:l.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.emit("_swiper"),l.params.init&&l.init(),l}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=Ot(n,`.${r.slideClass}, swiper-slide`),a=Ki(i[0]);return Ki(t)-a}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=Ot(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),o=(r.maxTranslate()-i)*t+i;r.translateTo(o,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:a,slidesGrid:o,slidesSizesGrid:l,size:s,activeIndex:u}=r;let c=1;if(i.centeredSlides){let d=a[u]?a[u].swiperSlideSize:0,m;for(let g=u+1;g<a.length;g+=1)a[g]&&!m&&(d+=a[g].swiperSlideSize,c+=1,d>s&&(m=!0));for(let g=u-1;g>=0;g-=1)a[g]&&!m&&(d+=a[g].swiperSlideSize,c+=1,d>s&&(m=!0))}else if(t==="current")for(let d=u+1;d<a.length;d+=1)(n?o[d]+l[d]-o[u]<s:o[d]-o[u]<s)&&(c+=1);else for(let d=u-1;d>=0;d-=1)o[u]-o[d]<s&&(c+=1);return c}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&so(t,o)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const o=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let a;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const o=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;a=t.slideTo(o.length-1,0,!1,!0)}else a=t.slideTo(t.activeIndex,0,!1,!0);a||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(a=>{t==="vertical"?a.style.width="":a.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName==="SWIPER-CONTAINER"&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):Ot(r,i())[0])();return!o&&n.params.createElements&&(o=Ns("div",n.params.wrapperClass),r.append(o),Ot(r,`.${n.params.slideClass}`).forEach(l=>{o.append(l)})),Object.assign(n,{el:r,wrapperEl:o,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:o,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||ln(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||ln(r,"direction")==="rtl"),wrongRTL:ln(o,"display")==="-webkit-box"}),!0}init(t){const n=this;return n.initialized||n.mount(t)===!1||(n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents(),[...n.el.querySelectorAll('[loading="lazy"]')].forEach(i=>{i.complete?so(n,i):i.addEventListener("load",a=>{so(n,a.target)})}),Xu(n),n.initialized=!0,Xu(n),n.emit("init"),n.emit("afterInit")),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:i,el:a,wrapperEl:o,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),a.removeAttribute("style"),o.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el.swiper=null,yE(r)),r.destroyed=!0),null}static extendDefaults(t){Xe(Pl,t)}static get extendedDefaults(){return Pl}static get defaults(){return Qu}static installModule(t){Nt.prototype.__modules__||(Nt.prototype.__modules__=[]);const n=Nt.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>Nt.installModule(n)),Nt):(Nt.installModule(t),Nt)}};Object.keys(Tl).forEach(e=>{Object.keys(Tl[e]).forEach(t=>{Tf.prototype[t]=Tl[e][t]})});Tf.use([LE,NE]);const Gv=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopedSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideNextClass","slidePrevClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Kn(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function Fn(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Kn(t[r])&&Kn(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Fn(e[r],t[r]):e[r]=t[r]})}function Yv(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Kv(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function Xv(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function Qv(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function zk(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function $k(e){let{swiper:t,slides:n,passedParams:r,changedParams:i,nextEl:a,prevEl:o,scrollbarEl:l,paginationEl:s}=e;const u=i.filter(P=>P!=="children"&&P!=="direction"&&P!=="wrapperClass"),{params:c,pagination:d,navigation:m,scrollbar:g,virtual:w,thumbs:v}=t;let S,h,f,p,x,b,T,E;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&c.thumbs&&!c.thumbs.swiper&&(S=!0),i.includes("controller")&&r.controller&&r.controller.control&&c.controller&&!c.controller.control&&(h=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||s)&&(c.pagination||c.pagination===!1)&&d&&!d.el&&(f=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||l)&&(c.scrollbar||c.scrollbar===!1)&&g&&!g.el&&(p=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||o)&&(r.navigation.nextEl||a)&&(c.navigation||c.navigation===!1)&&m&&!m.prevEl&&!m.nextEl&&(x=!0);const L=P=>{t[P]&&(t[P].destroy(),P==="navigation"?(t.isElement&&(t[P].prevEl.remove(),t[P].nextEl.remove()),c[P].prevEl=void 0,c[P].nextEl=void 0,t[P].prevEl=void 0,t[P].nextEl=void 0):(t.isElement&&t[P].el.remove(),c[P].el=void 0,t[P].el=void 0))};i.includes("loop")&&t.isElement&&(c.loop&&!r.loop?b=!0:!c.loop&&r.loop?T=!0:E=!0),u.forEach(P=>{if(Kn(c[P])&&Kn(r[P]))Fn(c[P],r[P]),(P==="navigation"||P==="pagination"||P==="scrollbar")&&"enabled"in r[P]&&!r[P].enabled&&L(P);else{const R=r[P];(R===!0||R===!1)&&(P==="navigation"||P==="pagination"||P==="scrollbar")?R===!1&&L(P):c[P]=r[P]}}),u.includes("controller")&&!h&&t.controller&&t.controller.control&&c.controller&&c.controller.control&&(t.controller.control=c.controller.control),i.includes("children")&&n&&w&&c.virtual.enabled&&(w.slides=n,w.update(!0)),i.includes("children")&&n&&c.loop&&(E=!0),S&&v.init()&&v.update(!0),h&&(t.controller.control=c.controller.control),f&&(t.isElement&&(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-pagination"),t.el.appendChild(s)),s&&(c.pagination.el=s),d.init(),d.render(),d.update()),p&&(t.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-scrollbar"),t.el.appendChild(l)),l&&(c.scrollbar.el=l),g.init(),g.updateSize(),g.setTranslate()),x&&(t.isElement&&((!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-button-next"),a.innerHTML=t.hostEl.nextButtonSvg,t.el.appendChild(a)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),a.innerHTML=t.hostEl.prevButtonSvg,t.el.appendChild(o))),a&&(c.navigation.nextEl=a),o&&(c.navigation.prevEl=o),m.init(),m.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&t.changeDirection(r.direction,!1),(b||E)&&t.loopDestroy(),(T||E)&&t.loopCreate(),t.update()}function Rk(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},r={},i={};Fn(n,Qu),n._emitClasses=!0,n.init=!1;const a={},o=Gv.map(s=>s.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(s=>{typeof e[s]>"u"||(o.indexOf(s)>=0?Kn(e[s])?(n[s]={},i[s]={},Fn(n[s],e[s]),Fn(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:a[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:i,rest:a,events:r}}function Dk(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:a,scrollbarEl:o,swiper:l}=e;Yv(t)&&r&&i&&(l.params.navigation.nextEl=r,l.originalParams.navigation.nextEl=r,l.params.navigation.prevEl=i,l.originalParams.navigation.prevEl=i),Kv(t)&&a&&(l.params.pagination.el=a,l.originalParams.pagination.el=a),Xv(t)&&o&&(l.params.scrollbar.el=o,l.originalParams.scrollbar.el=o),l.init(n)}function Fk(e,t,n,r,i){const a=[];if(!t)return a;const o=s=>{a.indexOf(s)<0&&a.push(s)};if(n&&r){const s=r.map(i),u=n.map(i);s.join("")!==u.join("")&&o("children"),r.length!==n.length&&o("children")}return Gv.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(Kn(e[s])&&Kn(t[s])){const u=Object.keys(e[s]),c=Object.keys(t[s]);u.length!==c.length?o(s):(u.forEach(d=>{e[s][d]!==t[s][d]&&o(s)}),c.forEach(d=>{e[s][d]!==t[s][d]&&o(s)}))}else e[s]!==t[s]&&o(s)}),a}const Bk=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Vo(){return Vo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vo.apply(this,arguments)}function qv(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function Zv(e){const t=[];return B.Children.toArray(e).forEach(n=>{qv(n)?t.push(n):n.props&&n.props.children&&Zv(n.props.children).forEach(r=>t.push(r))}),t}function Hk(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return B.Children.toArray(e).forEach(r=>{if(qv(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=Zv(r.props.children);i.length>0?i.forEach(a=>t.push(a)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function Uk(e,t,n){if(!n)return null;const r=c=>{let d=c;return c<0?d=t.length+c:d>=t.length&&(d=d-t.length),d},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:a,to:o}=n,l=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,u=[];for(let c=l;c<s;c+=1)c>=a&&c<=o&&u.push(t[r(c)]);return u.map((c,d)=>B.cloneElement(c,{swiper:e,style:i,key:`slide-${d}`}))}function Ei(e,t){return typeof window>"u"?W.useEffect(e,t):W.useLayoutEffect(e,t)}const Kp=W.createContext(null),Vk=W.createContext(null),Pf=W.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:a,onSwiper:o,...l}=e===void 0?{}:e,s=!1;const[u,c]=W.useState("swiper"),[d,m]=W.useState(null),[g,w]=W.useState(!1),v=W.useRef(!1),S=W.useRef(null),h=W.useRef(null),f=W.useRef(null),p=W.useRef(null),x=W.useRef(null),b=W.useRef(null),T=W.useRef(null),E=W.useRef(null),{params:L,passedParams:P,rest:R,events:_}=Rk(l),{slides:I,slots:M}=Hk(a),k=()=>{w(!g)};Object.assign(L.on,{_containerClasses(A,N){c(N)}});const O=()=>{Object.assign(L.on,_),s=!0;const A={...L};if(delete A.wrapperClass,h.current=new Tf(A),h.current.virtual&&h.current.params.virtual.enabled){h.current.virtual.slides=I;const N={cache:!1,slides:I,renderExternal:m,renderExternalUpdate:!1};Fn(h.current.params.virtual,N),Fn(h.current.originalParams.virtual,N)}};S.current||O(),h.current&&h.current.on("_beforeBreakpoint",k);const $=()=>{s||!_||!h.current||Object.keys(_).forEach(A=>{h.current.on(A,_[A])})},G=()=>{!_||!h.current||Object.keys(_).forEach(A=>{h.current.off(A,_[A])})};W.useEffect(()=>()=>{h.current&&h.current.off("_beforeBreakpoint",k)}),W.useEffect(()=>{!v.current&&h.current&&(h.current.emitSlidesClasses(),v.current=!0)}),Ei(()=>{if(t&&(t.current=S.current),!!S.current)return h.current.destroyed&&O(),Dk({el:S.current,nextEl:x.current,prevEl:b.current,paginationEl:T.current,scrollbarEl:E.current,swiper:h.current},L),o&&o(h.current),()=>{h.current&&!h.current.destroyed&&h.current.destroy(!0,!1)}},[]),Ei(()=>{$();const A=Fk(P,f.current,I,p.current,N=>N.key);return f.current=P,p.current=I,A.length&&h.current&&!h.current.destroyed&&$k({swiper:h.current,slides:I,passedParams:P,changedParams:A,nextEl:x.current,prevEl:b.current,scrollbarEl:E.current,paginationEl:T.current}),()=>{G()}}),Ei(()=>{Bk(h.current)},[d]);function j(){return L.virtual?Uk(h.current,I,d):I.map((A,N)=>B.cloneElement(A,{swiper:h.current,swiperSlideIndex:N}))}return B.createElement(r,Vo({ref:S,className:Qv(`${u}${n?` ${n}`:""}`)},R),B.createElement(Vk.Provider,{value:h.current},M["container-start"],B.createElement(i,{className:zk(L.wrapperClass)},M["wrapper-start"],j(),M["wrapper-end"]),Yv(L)&&B.createElement(B.Fragment,null,B.createElement("div",{ref:b,className:"swiper-button-prev"}),B.createElement("div",{ref:x,className:"swiper-button-next"})),Xv(L)&&B.createElement("div",{ref:E,className:"swiper-scrollbar"}),Kv(L)&&B.createElement("div",{ref:T,className:"swiper-pagination"}),M["container-end"]))});Pf.displayName="Swiper";const Of=W.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:a,zoom:o,lazy:l,virtualIndex:s,swiperSlideIndex:u,...c}=e===void 0?{}:e;const d=W.useRef(null),[m,g]=W.useState("swiper-slide"),[w,v]=W.useState(!1);function S(x,b,T){b===d.current&&g(T)}Ei(()=>{if(typeof u<"u"&&(d.current.swiperSlideIndex=u),t&&(t.current=d.current),!(!d.current||!a)){if(a.destroyed){m!=="swiper-slide"&&g("swiper-slide");return}return a.on("_slideClass",S),()=>{a&&a.off("_slideClass",S)}}}),Ei(()=>{a&&d.current&&!a.destroyed&&g(a.getSlideClasses(d.current))},[a]);const h={isActive:m.indexOf("swiper-slide-active")>=0,isVisible:m.indexOf("swiper-slide-visible")>=0,isPrev:m.indexOf("swiper-slide-prev")>=0,isNext:m.indexOf("swiper-slide-next")>=0},f=()=>typeof r=="function"?r(h):r,p=()=>{v(!0)};return B.createElement(n,Vo({ref:d,className:Qv(`${m}${i?` ${i}`:""}`),"data-swiper-slide-index":s,onLoad:p},c),o&&B.createElement(Kp.Provider,{value:h},B.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0},f(),l&&!w&&B.createElement("div",{className:"swiper-lazy-preloader"}))),!o&&B.createElement(Kp.Provider,{value:h},f(),l&&!w&&B.createElement("div",{className:"swiper-lazy-preloader"})))});Of.displayName="SwiperSlide";const Wk=C.div`
  display: flex;
  flex-direction: column;
  background: #fff6f6;
  width: 370px;
`,Gk=C.div`
  background: var(--unnamed, #fefbff);
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-between;
  /* margin-top: 10%; */
  height: 120px;
`,Yk=C.img`
  width: 65.806px;
  height: 56.345px;
  flex-shrink: 0;
  margin-left: 3%;
  margin-bottom: 15px;
`,Xp=C(xs)`
  text-decoration: none !important;
  margin-bottom: 15px;
`,Kk=C.button`
  display: flex;
  background-color: transparent; /* 배경색 없애기 */
  border: none; /* 테두리 없애기 */
`,Xk=C.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 120px;
  height: 50px;
  flex-shrink: 0;
  justify-content: center;

  border-radius: 44.798px;
  background: linear-gradient(173deg, #e5e3e3 0%, #fff 100%);

  color: #ff6392;
  font-family: Noto Sans KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`,Qk=C.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 120px;
  height: 50px;
  flex-shrink: 0;
  justify-content: center;

  border-radius: 48.727px;
  background: #ec7196;
  color: #ff6392;
  color: #f7f7f7;

  text-align: center;
  font-family: Noto Sans KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,Qp=C.h1`
  color: #011821;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`,qk=C.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* margin-bottom: 20px; */
`,Zk=C.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: var(--unnamed, #f9f9f9);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 221px;
  height: 204px;
  flex-shrink: 0;
  margin-left: 20%;
  /* margin-bottom: 10%; */
`,Jk=C.div`
  color: #909090;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10%;
  margin-left: 10%;
`,eC=C.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 133.333% */
  margin-top: 10%;
  margin-left: 10%;
`,tC=C.div`
  border-radius: 0px 0px 20px 20px;
  background: #ececec;
  width: 221px;
  height: 55px;
  flex-shrink: 0;
  display: flex;
  margin-top: 20%;
  justify-content: space-between;
`,nC=C(Ge)`
  width: 44px;
  height: 40.37px;
  flex-shrink: 0;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
  margin-top: 2%;
  margin-left: 2%;
`,rC=C.img`
  width: 55px;
  height: 55px;
  flex-shrink: 0;
`,iC=C.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  border-radius: 20px;
  background: var(--unnamed, #f9f9f9);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 300px;
  height: 189px;
  flex-shrink: 0;
  margin-left: 10%;
  margin-bottom: 10%;
`,aC=C.div`
  color: #909090;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10%;
  margin-left: 10%;
`,oC=C.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 133.333% */
  margin-top: 4%;
  margin-left: 10%;
`,sC=C.div`
  border-radius: 0px 0px 20px 20px;
  background: #ececec;
  width: 300px;
  height: 55px;
  flex-shrink: 0;
  display: flex;
  margin-top: 11%;
  justify-content: space-between;
`,lC=C(Ge)`
  width: 44px;
  height: 40.37px;
  flex-shrink: 0;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
  margin-top: 2%;
  margin-left: 2%;
`,uC=C.img`
  width: 55px;
  height: 55px;
  flex-shrink: 0;
`,cC=C.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;

  button {
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    background-color: #ff6392;
    color: #ffffff;
    border-radius: 5px;
    cursor: pointer;

    &:disabled {
      background-color: #f0f0f0;
      color: #a0a0a0;
      cursor: not-allowed;
    }
  }
`,fC=C.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
`,dC=C.img`
  max-width: 130px;
  max-height: 130px;
  border-radius: 50%;
  margin-bottom: -90px;
  margin-left: 90%;
  /* align-self: center; */
`;function pC(){const t=[{name:"닉네임1",title:"제목1"},{name:"닉네임2",title:"제목2"},{name:"닉네임3",title:"제목3"},{name:"닉네임4",title:"제목4"}],n=[{name:"닉네임1",title:"제목1"},{name:"닉네임2",title:"제목2"},{name:"닉네임3",title:"제목3"},{name:"닉네임4",title:"제목4"}],[r,i]=W.useState(0),a=()=>{r<t.length-4&&i(r+4)},o=()=>{r>0&&i(r-4)},l=()=>{console.log("버튼 눌림")};return y.jsxs(Wk,{children:[y.jsxs(Gk,{children:[y.jsx(Yk,{src:"/말말말로고.jpg",alt:"버튼 이미지"}),y.jsxs(Kk,{children:[y.jsx(Qk,{children:"소식 나누기"}),y.jsx(Xp,{to:"/Mainshare",children:y.jsx(Xk,{children:"지역 정보"})})]})]}),y.jsx(Qp,{children:"인기글"}),y.jsx(qk,{children:y.jsx(Pf,{modules:[Dv,Fv,Bv,Hv],navigation:!0,pagination:{clickable:!0},loop:!0,children:t.map((s,u)=>y.jsx(Of,{children:y.jsxs(Zk,{children:[y.jsx(Jk,{children:s.name}),y.jsx(eC,{children:s.title}),y.jsxs(tC,{children:[y.jsx(nC,{icon:Bo}),y.jsx(rC,{src:"/재생.png",alt:"버튼 이미지"})]})]})},u))})}),y.jsx(Qp,{children:"전체글"}),y.jsx("div",{children:n.slice(r,r+4).map((s,u)=>y.jsxs(iC,{children:[y.jsx(aC,{children:s.name}),y.jsx(oC,{children:s.title}),y.jsxs(sC,{children:[y.jsx(lC,{icon:Bo}),y.jsx(uC,{src:"/재생.png",alt:"버튼 이미지"})]})]},u))}),y.jsxs(cC,{children:[y.jsx("button",{onClick:o,disabled:r===0,children:"이전"}),y.jsx("button",{onClick:a,disabled:r>=n.length-4,children:"다음"})]}),y.jsx(fC,{onClick:l,children:y.jsx(Xp,{to:"/Writesns",children:y.jsx(dC,{src:"/글쓰기버튼.png",alt:"버튼 이미지"})})}),y.jsx(Zn,{})]})}const mC=C.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #b1deff 0%, #f9f9f9 100%);
  width: 370px;
`,hC=C.div`
  background: var(--unnamed, #fefbff);
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-between;
  /* margin-top: 10%; */
  height: 120px;
`,gC=C.img`
  width: 65.806px;
  height: 56.345px;
  flex-shrink: 0;
  margin-left: 3%;
  margin-bottom: 15px;
`,qp=C(xs)`
  text-decoration: none !important;
  margin-bottom: 15px;
`,vC=C.span`
  display: flex;
  background-color: transparent;
  border: none;
`,yC=C.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 120px;
  height: 50px;
  flex-shrink: 0;
  justify-content: center;

  border-radius: 48.727px;
  background: #3c95d5;

  color: #f7f7f7;
  font-family: Noto Sans KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,xC=C.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 120px;
  height: 50px;
  flex-shrink: 0;
  justify-content: center;

  border-radius: 44.798px;
  background: linear-gradient(187deg, #e5e3e3 0%, #fff 100%);

  color: #30a8ff;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`,Zp=C.h1`
  color: #011821;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`,wC=C.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 0%;
`,SC=C.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: var(--unnamed, #f9f9f9);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 221px;
  height: 204px;
  flex-shrink: 0;
  margin-left: 20%;
  /* margin-bottom: 10%; */
`,bC=C.div`
  color: #909090;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10%;
  margin-left: 10%;
`,EC=C.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 133.333% */
  margin-top: 10%;
  margin-left: 10%;
`,kC=C.div`
  border-radius: 0px 0px 20px 20px;
  background: #ececec;
  width: 221px;
  height: 55px;
  flex-shrink: 0;
  display: flex;
  margin-top: 20%;
  justify-content: space-between;
`,CC=C(Ge)`
  width: 44px;
  height: 40.37px;
  flex-shrink: 0;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
  margin-top: 2%;
  margin-left: 2%;
`,TC=C.img`
  width: 55px;
  height: 55px;
  flex-shrink: 0;
`,PC=C.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  border-radius: 20px;
  background: var(--unnamed, #f9f9f9);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 300px;
  height: 189px;
  flex-shrink: 0;
  margin-left: 10%;
  margin-bottom: 10%;
`,OC=C.div`
  color: #909090;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10%;
  margin-left: 10%;
`,AC=C.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 133.333% */
  margin-top: 4%;
  margin-left: 10%;
`,LC=C.div`
  border-radius: 0px 0px 20px 20px;
  background: #ececec;
  width: 300px;
  height: 55px;
  flex-shrink: 0;
  display: flex;
  margin-top: 11%;
  justify-content: space-between;
`,NC=C(Ge)`
  width: 44px;
  height: 40.37px;
  flex-shrink: 0;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
  margin-top: 2%;
  margin-left: 2%;
`,IC=C.img`
  width: 55px;
  height: 55px;
  flex-shrink: 0;
`,_C=C.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;

  button {
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    background-color: #ff6392;
    color: #ffffff;
    border-radius: 5px;
    cursor: pointer;

    &:disabled {
      background-color: #f0f0f0;
      color: #a0a0a0;
      cursor: not-allowed;
    }
  }
`,jC=C.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
`,MC=C.img`
  max-width: 130px;
  max-height: 130px;
  border-radius: 50%;
  margin-bottom: -90px;
  margin-left: 90%;
  /* align-self: center; */
`;function zC(){const t=[{name:"닉네임1",title:"제목1"},{name:"닉네임2",title:"제목2"},{name:"닉네임3",title:"제목3"},{name:"닉네임4",title:"제목4"}],n=[{name:"닉네임1",title:"제목1"},{name:"닉네임2",title:"제목2"},{name:"닉네임3",title:"제목3"},{name:"닉네임4",title:"제목4"}],[r,i]=W.useState(0),a=()=>{r<t.length-4&&i(r+4)},o=()=>{r>0&&i(r-4)},l=()=>{console.log("버튼 눌림")};return y.jsxs(mC,{children:[y.jsxs(hC,{children:[y.jsx(gC,{src:"/말말말로고.jpg",alt:"버튼 이미지"}),y.jsxs(vC,{children:[y.jsx(qp,{to:"/Mainsns",children:y.jsx(xC,{children:"소식 나누기"})}),y.jsx(yC,{children:"지역 정보"})]})]})," ",y.jsx(Zp,{children:"인기글"}),y.jsx(wC,{children:y.jsx(Pf,{modules:[Dv,Fv,Bv,Hv],navigation:!0,pagination:{clickable:!0},loop:!0,children:t.map((s,u)=>y.jsx(Of,{children:y.jsxs(SC,{children:[y.jsx(bC,{children:s.name}),y.jsx(EC,{children:s.title}),y.jsxs(kC,{children:[y.jsx(CC,{icon:Bo}),y.jsx(TC,{src:"/재생.png",alt:"버튼 이미지"})]})]})},u))})}),y.jsx(Zp,{children:"전체글"}),y.jsx("div",{children:n.slice(r,r+4).map((s,u)=>y.jsxs(PC,{children:[y.jsx(OC,{children:s.name}),y.jsx(AC,{children:s.title}),y.jsxs(LC,{children:[y.jsx(NC,{icon:Bo}),y.jsx(IC,{src:"/재생.png",alt:"버튼 이미지"})]})]},u))}),y.jsxs(_C,{children:[y.jsx("button",{onClick:o,disabled:r===0,children:"이전"}),y.jsx("button",{onClick:a,disabled:r>=n.length-4,children:"다음"})]}),y.jsx(jC,{onClick:l,children:y.jsx(qp,{to:"/Writeedit",children:y.jsx(MC,{src:"/글쓰기버튼.png",alt:"버튼 이미지"})})}),y.jsx(Zn,{})]})}const $C=C.div`
  display: flex;
  flex-direction: column;
  background: #f9f9f9;
  height: 840px;
  --vh: 100%;
`,RC=C.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 96.806px;
  height: 82.889px;
  flex-shrink: 0;
  align-self: center;
  margin-top: 20%;
`,DC=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 46.406px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 5%;
  margin-bottom: 5%;
`,FC=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
  text-align: center;
  color: #000;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,Jp=C.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;

  border-radius: 30px;
  border: 4px solid #fe81a7;
  background: #fff;
  width: 300px;
  height: 150px;
  flex-shrink: 0;
  margin-top: 10%;
  margin-bottom: 5%;
  color: #000;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;function BC(){return y.jsxs($C,{children:[y.jsx(RC,{src:"/말말말로고.jpg",alt:"로고 이미지"}),y.jsx(DC,{children:"마이페이지"}),y.jsx(FC,{children:"쿵야님, 반갑습니다!"}),y.jsx(Jp,{children:"내 글 관리"}),y.jsx(Jp,{children:"공감한 글"}),y.jsx(Zn,{})]})}function HC(){return y.jsx(xx,{children:y.jsxs(vx,{children:[y.jsx(it,{path:"/",exact:!0,children:y.jsx(_u,{children:y.jsx(jw,{})})}),y.jsx(it,{path:"/hello",children:y.jsx(_u,{children:y.jsx(Jw,{})})}),y.jsx(it,{path:"/choice",children:y.jsx(uS,{})}),y.jsx(it,{path:"/login",children:y.jsx(pb,{})}),y.jsx(it,{path:"/signup",children:y.jsx(Cb,{})}),y.jsx(it,{path:"/readsns",children:y.jsx(Bb,{})}),y.jsx(it,{path:"/writesns",children:y.jsx(Xb,{})}),y.jsx(it,{path:"/readedit",children:y.jsx(sE,{})}),y.jsx(it,{path:"/writeedit",children:y.jsx(gE,{})}),y.jsx(it,{path:"/mainsns",children:y.jsx(pC,{})}),y.jsx(it,{path:"/mainshare",children:y.jsx(zC,{})}),y.jsx(it,{path:"/mypage",children:y.jsx(BC,{})})]})})}Ol.createRoot(document.getElementById("root")).render(y.jsx(B.StrictMode,{children:y.jsx(HC,{})}));
