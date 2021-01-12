window.FontAwesomeKitConfig={asyncLoading:{enabled:!1},autoA11y:{enabled:!0},baseUrl:"https://ka-f.fontawesome.com",detectConflictsUntil:null,iconUploads:{},license:"free",method:"css",minify:{enabled:!0},token:"ad375d374e",v4FontFaceShim:{enabled:!0},v4shim:{enabled:!0},version:"5.15.1"},function(l){typeof define=="function"&&define.amd?define(l):l()}(function(){"use strict";function l(t){return(l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function E(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,o)}return n}function A(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?_(Object(n),!0).forEach(function(o){E(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function I(t,e){return function(n){if(Array.isArray(n))return n}(t)||function(n,o){if(Symbol.iterator in Object(n)||Object.prototype.toString.call(n)==="[object Arguments]"){var r=[],i=!0,u=!1,a=void 0;try{for(var c,s=n[Symbol.iterator]();!(i=(c=s.next()).done)&&(r.push(c.value),!o||r.length!==o);i=!0);}catch(d){u=!0,a=d}finally{try{i||s.return==null||s.return()}finally{if(u)throw a}}return r}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function b(t,e){var n=e&&e.addOn||"",o=e&&e.baseFilename||t.license+n,r=e&&e.minify?".min":"",i=e&&e.fileSuffix||t.method,u=e&&e.subdir||t.method;return t.baseUrl+"/releases/"+(t.version==="latest"?"latest":"v".concat(t.version))+"/"+u+"/"+o+r+"."+i}function F(t,e){var n=e||["fa"],o="."+Array.prototype.join.call(n,",."),r=t.querySelectorAll(o);Array.prototype.forEach.call(r,function(i){var u=i.getAttribute("title");i.setAttribute("aria-hidden","true");var a=!i.nextElementSibling||!i.nextElementSibling.classList.contains("sr-only");if(u&&a){var c=t.createElement("span");c.innerHTML=u,c.classList.add("sr-only"),i.parentNode.insertBefore(c,i.nextSibling)}})}var O,D=function(){},P=typeof global!="undefined"&&global.process!==void 0&&typeof global.process.emit=="function",M=typeof setImmediate=="undefined"?setTimeout:setImmediate,p=[];function N(){for(var t=0;t<p.length;t++)p[t][0](p[t][1]);p=[],O=!1}function g(t,e){p.push([t,e]),O||(O=!0,M(N,0))}function C(t){var e=t.owner,n=e._state,o=e._data,r=t[n],i=t.then;if(typeof r=="function"){n="fulfilled";try{o=r(o)}catch(u){v(i,u)}}T(i,o)||(n==="fulfilled"&&j(i,o),n==="rejected"&&v(i,o))}function T(t,e){var n;try{if(t===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&(typeof e=="function"||l(e)==="object")){var o=e.then;if(typeof o=="function")return o.call(e,function(r){n||(n=!0,e===r?k(t,r):j(t,r))},function(r){n||(n=!0,v(t,r))}),!0}}catch(r){return n||v(t,r),!0}return!1}function j(t,e){t!==e&&T(t,e)||k(t,e)}function k(t,e){t._state==="pending"&&(t._state="settled",t._data=e,g(H,t))}function v(t,e){t._state==="pending"&&(t._state="settled",t._data=e,g(R,t))}function L(t){t._then=t._then.forEach(C)}function H(t){t._state="fulfilled",L(t)}function R(t){t._state="rejected",L(t),!t._handled&&P&&global.process.emit("unhandledRejection",t._data,t)}function q(t){global.process.emit("rejectionHandled",t)}function f(t){if(typeof t!="function")throw new TypeError("Promise resolver "+t+" is not a function");if(!(this instanceof f))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(e,n){function o(r){v(n,r)}try{e(function(r){j(n,r)},o)}catch(r){o(r)}}(t,this)}f.prototype={constructor:f,_state:"pending",_then:null,_data:void 0,_handled:!1,then:function(t,e){var n={owner:this,then:new this.constructor(D),fulfilled:t,rejected:e};return!e&&!t||this._handled||(this._handled=!0,this._state==="rejected"&&P&&g(q,this)),this._state==="fulfilled"||this._state==="rejected"?g(C,n):this._then.push(n),n.then},catch:function(t){return this.then(null,t)}},f.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new f(function(e,n){var o=[],r=0;function i(c){return r++,function(s){o[c]=s,--r||e(o)}}for(var u,a=0;a<t.length;a++)(u=t[a])&&typeof u.then=="function"?u.then(i(a),n):o[a]=u;r||e(o)})},f.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new f(function(e,n){for(var o,r=0;r<t.length;r++)(o=t[r])&&typeof o.then=="function"?o.then(e,n):e(o)})},f.resolve=function(t){return t&&l(t)==="object"&&t.constructor===f?t:new f(function(e){e(t)})},f.reject=function(t){return new f(function(e,n){n(t)})};var m=typeof Promise=="function"?Promise:f;function S(t,e){var n=e.fetch,o=e.XMLHttpRequest,r=e.token;return new m(function(i,u){if(typeof n=="function")n(t,{mode:"cors",cache:"default",headers:new Headers(E({},"fa-kit-token",r))}).then(function(c){if(c.ok)return c.text();throw new Error("")}).then(function(c){i(c)}).catch(u);else if(typeof o=="function"){var a=new o;a.addEventListener("loadend",function(){this.responseText?i(this.responseText):u(new Error(""))}),["abort","error","timeout"].map(function(c){a.addEventListener(c,function(){u(new Error(""))})}),a.open("GET",t),a.setRequestHeader("fa-kit-token",r),a.send()}else u(new Error(""))})}function K(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(){},o=e.document||o,r=F.bind(F,o,["fa","fab","fas","far","fal","fad","fak"]);t.autoA11y.enabled&&n(r);var i=[{id:"fa-main",addOn:void 0}];t.v4shim.enabled&&i.push({id:"fa-v4-shims",addOn:"-v4-shims"}),t.v4FontFaceShim.enabled&&i.push({id:"fa-v4-font-face",addOn:"-v4-font-face"});var u=i.map(function(a){return new m(function(c,s){S(b(t,{addOn:a.addOn,minify:t.minify.enabled}),e).then(function(d){c(X(d,A({},e,{baseUrl:t.baseUrl,version:t.version,id:a.id})))}).catch(s)})});return m.all(u)}function X(t,e){var n=document.createElement("style"),o=document.createTextNode(function(r,i,u){var a=r;return[[/(url\("?)\.\.\/\.\.\/\.\./g,function(c,s){return"".concat(s).concat(i)}],[/(url\("?)\.\.\/webfonts/g,function(c,s){return"".concat(s).concat(i,"/releases/v").concat(u,"/webfonts")}],[/(url\("?)https:\/\/kit-free([^.])*\.fontawesome\.com/g,function(c,s){return"".concat(s).concat(i)}]].forEach(function(c){var s=I(c,2),d=s[0],G=s[1];a=a.replace(d,G)}),a}(t,e.baseUrl,e.version));return n.appendChild(o),n.media="all",e.id&&n.setAttribute("id",e.id),e&&e.detectingConflicts&&e.detectionIgnoreAttr&&n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),n}function B(t,e){e.autoA11y=t.autoA11y.enabled,t.license==="pro"&&(e.autoFetchSvg=!0,e.fetchSvgFrom=t.baseUrl+"/releases/"+(t.version==="latest"?"latest":"v".concat(t.version))+"/svgs",e.fetchUploadedSvgFrom=t.uploadsUrl);var n=[];return t.v4shim.enabled&&n.push(new m(function(o,r){S(b(t,{addOn:"-v4-shims",minify:t.minify.enabled}),e).then(function(i){o(U(i,A({},e,{id:"fa-v4-shims"})))}).catch(r)})),n.push(new m(function(o,r){S(b(t,{minify:t.minify.enabled}),e).then(function(i){var u=U(i,A({},e,{id:"fa-main"}));o(function(a,c){var s=c&&c.autoFetchSvg!==void 0?c.autoFetchSvg:void 0,d=c&&c.autoA11y!==void 0?c.autoA11y:void 0;return d!==void 0&&a.setAttribute("data-auto-a11y",d?"true":"false"),s&&(a.setAttributeNode(document.createAttribute("data-auto-fetch-svg")),a.setAttribute("data-fetch-svg-from",c.fetchSvgFrom),a.setAttribute("data-fetch-uploaded-svg-from",c.fetchUploadedSvgFrom)),a}(u,e))}).catch(r)})),m.all(n)}function U(t,e){var n=document.createElement("SCRIPT"),o=document.createTextNode(t);return n.appendChild(o),n.referrerPolicy="strict-origin",e.id&&n.setAttribute("id",e.id),e&&e.detectingConflicts&&e.detectionIgnoreAttr&&n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),n}function x(t){var e,n=[],o=document,r=o.documentElement.doScroll,i=(r?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);i||o.addEventListener("DOMContentLoaded",e=function(){for(o.removeEventListener("DOMContentLoaded",e),i=1;e=n.shift();)e()}),i?setTimeout(t,0):n.push(t)}function Y(t){typeof MutationObserver!="undefined"&&new MutationObserver(t).observe(document,{childList:!0,subtree:!0})}try{if(window.FontAwesomeKitConfig){var y=window.FontAwesomeKitConfig,w={detectingConflicts:y.detectConflictsUntil&&new Date<=new Date(y.detectConflictsUntil),detectionIgnoreAttr:"data-fa-detection-ignore",fetch:window.fetch,token:y.token,XMLHttpRequest:window.XMLHttpRequest,document},h=document.currentScript,z=h?h.parentElement:document.head;(function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return t.method==="js"?B(t,e):t.method==="css"?K(t,e,function(n){x(n),Y(n)}):void 0})(y,w).then(function(t){t.map(function(e){z.insertBefore(e,h?h.nextSibling:null)}),w.detectingConflicts&&h&&x(function(){h.setAttributeNode(document.createAttribute(w.detectionIgnoreAttr));var e=function(n,o){var r=document.createElement("script");return o&&o.detectionIgnoreAttr&&r.setAttributeNode(document.createAttribute(o.detectionIgnoreAttr)),r.src=b(n,{baseFilename:"conflict-detection",fileSuffix:"js",subdir:"js",minify:n.minify.enabled}),r}(y,w);document.body.appendChild(e)})}).catch(function(t){console.error("".concat("Font Awesome Kit:"," ").concat(t))})}}catch(t){console.error("".concat("Font Awesome Kit:"," ").concat(t))}});