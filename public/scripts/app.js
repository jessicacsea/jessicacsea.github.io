(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Typewriter",[],t):"object"==typeof exports?exports.Typewriter=t():e.Typewriter=t()}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([,function(e,t,n){(function(t){for(var r=n(11),o="undefined"==typeof window?t:window,i=["moz","webkit"],a="AnimationFrame",s=o["request"+a],u=o["cancel"+a]||o["cancelRequest"+a],c=0;!s&&c<i.length;c++)s=o[i[c]+"Request"+a],u=o[i[c]+"Cancel"+a]||o[i[c]+"CancelRequest"+a];if(!s||!u){var l=0,p=0,d=[];s=function(e){if(0===d.length){var t=r(),n=Math.max(0,1e3/60-(t-l));l=n+t,setTimeout((function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(l)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return d.push({handle:++p,callback:e,cancelled:!1}),p},u=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return s.call(o,e)},e.exports.cancel=function(){u.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=s,e.cancelAnimationFrame=u}}).call(this,n(4))},,function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var r=n(1),o=n.n(r),i=function(e){return new RegExp(/<[a-z][\s\S]*>/i).test(e)},a=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes},s=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},u=function(e){var t=document.createElement("style");t.appendChild(document.createTextNode(e)),document.head.appendChild(t)},c="TYPE_CHARACTER",l="REMOVE_CHARACTER",p="REMOVE_ALL",d="REMOVE_LAST_VISIBLE_NODE",f="PAUSE_FOR",v="CALL_FUNCTION",h="ADD_HTML_TAG_ELEMENT",m="CHANGE_DELETE_SPEED",y="CHANGE_DELAY",g="CHANGE_CURSOR",w="PASTE_STRING",T="HTML_TAG",E="TEXT_NODE";function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e){return function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(){function e(t,n){var u=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),_(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),_(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),_(this,"setupWrapperElement",(function(){u.state.elements.container&&(u.state.elements.wrapper.className=u.options.wrapperClassName,u.state.elements.cursor.className=u.options.cursorClassName,u.state.elements.cursor.innerHTML=u.options.cursor,u.state.elements.container.innerHTML="",u.state.elements.container.appendChild(u.state.elements.wrapper),u.state.elements.container.appendChild(u.state.elements.cursor))})),_(this,"start",(function(){return u.state.eventLoopPaused=!1,u.runEventLoop(),u})),_(this,"pause",(function(){return u.state.eventLoopPaused=!0,u})),_(this,"stop",(function(){return u.state.eventLoop&&(Object(r.cancel)(u.state.eventLoop),u.state.eventLoop=null),u})),_(this,"pauseFor",(function(e){return u.addEventToQueue(f,{ms:e}),u})),_(this,"typeOutAllStrings",(function(){return"string"==typeof u.options.strings?(u.typeString(u.options.strings).pauseFor(u.options.pauseFor),u):(u.options.strings.forEach((function(e){u.typeString(e).pauseFor(u.options.pauseFor).deleteAll(u.options.deleteSpeed)})),u)})),_(this,"typeString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(i(e))return u.typeOutHTMLString(e,t);if(e){var n=u.options||{},r=n.stringSplitter,o="function"==typeof r?r(e):e.split("");u.typeCharacters(o,t)}return u})),_(this,"pasteString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return i(e)?u.typeOutHTMLString(e,t,!0):(e&&u.addEventToQueue(w,{character:e,node:t}),u)})),_(this,"typeOutHTMLString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0,r=a(e);if(r.length>0)for(var o=0;o<r.length;o++){var i=r[o],s=i.innerHTML;i&&3!==i.nodeType?(i.innerHTML="",u.addEventToQueue(h,{node:i,parentNode:t}),n?u.pasteString(s,i):u.typeString(s,i)):i.textContent&&(n?u.pasteString(i.textContent,t):u.typeString(i.textContent,t))}return u})),_(this,"deleteAll",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"natural";return u.addEventToQueue(p,{speed:e}),u})),_(this,"changeDeleteSpeed",(function(e){if(!e)throw new Error("Must provide new delete speed");return u.addEventToQueue(m,{speed:e}),u})),_(this,"changeDelay",(function(e){if(!e)throw new Error("Must provide new delay");return u.addEventToQueue(y,{delay:e}),u})),_(this,"changeCursor",(function(e){if(!e)throw new Error("Must provide new cursor");return u.addEventToQueue(g,{cursor:e}),u})),_(this,"deleteChars",(function(e){if(!e)throw new Error("Must provide amount of characters to delete");for(var t=0;t<e;t++)u.addEventToQueue(l);return u})),_(this,"callFunction",(function(e,t){if(!e||"function"!=typeof e)throw new Error("Callbak must be a function");return u.addEventToQueue(v,{cb:e,thisArg:t}),u})),_(this,"typeCharacters",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(e){u.addEventToQueue(c,{character:e,node:t})})),u})),_(this,"removeCharacters",(function(e){if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(){u.addEventToQueue(l)})),u})),_(this,"addEventToQueue",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return u.addEventToStateProperty(e,t,n,"eventQueue")})),_(this,"addReverseCalledEvent",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=u.options.loop;return r?u.addEventToStateProperty(e,t,n,"reverseCalledEvents"):u})),_(this,"addEventToStateProperty",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,o={eventName:e,eventArgs:t||{}};return u.state[r]=n?[o].concat(S(u.state[r])):[].concat(S(u.state[r]),[o]),u})),_(this,"runEventLoop",(function(){u.state.lastFrameTime||(u.state.lastFrameTime=Date.now());var e=Date.now(),t=e-u.state.lastFrameTime;if(!u.state.eventQueue.length){if(!u.options.loop)return;u.state.eventQueue=S(u.state.calledEvents),u.state.calledEvents=[],u.options=A({},u.state.initialOptions)}if(u.state.eventLoop=o()(u.runEventLoop),!u.state.eventLoopPaused){if(u.state.pauseUntil){if(e<u.state.pauseUntil)return;u.state.pauseUntil=null}var n=S(u.state.eventQueue),r=n.shift(),i=0;if(!(t<=(i=r.eventName===d||r.eventName===l?"natural"===u.options.deleteSpeed?s(40,80):u.options.deleteSpeed:"natural"===u.options.delay?s(120,160):u.options.delay))){var a=r.eventName,b=r.eventArgs;switch(u.logInDevMode({currentEvent:r,state:u.state,delay:i}),a){case w:case c:var N=b.character,C=b.node,_=document.createTextNode(N),O=_;u.options.onCreateTextNode&&"function"==typeof u.options.onCreateTextNode&&(O=u.options.onCreateTextNode(N,_)),O&&(C?C.appendChild(O):u.state.elements.wrapper.appendChild(O)),u.state.visibleNodes=[].concat(S(u.state.visibleNodes),[{type:E,character:N,node:O}]);break;case l:n.unshift({eventName:d,eventArgs:{removingCharacterNode:!0}});break;case f:var L=r.eventArgs.ms;u.state.pauseUntil=Date.now()+parseInt(L);break;case v:var M=r.eventArgs,x=M.cb,j=M.thisArg;x.call(j,{elements:u.state.elements});break;case h:var D=r.eventArgs,P=D.node,k=D.parentNode;k?k.appendChild(P):u.state.elements.wrapper.appendChild(P),u.state.visibleNodes=[].concat(S(u.state.visibleNodes),[{type:T,node:P,parentNode:k||u.state.elements.wrapper}]);break;case p:var R=u.state.visibleNodes,Q=b.speed,F=[];Q&&F.push({eventName:m,eventArgs:{speed:Q,temp:!0}});for(var H=0,I=R.length;H<I;H++)F.push({eventName:d,eventArgs:{removingCharacterNode:!1}});Q&&F.push({eventName:m,eventArgs:{speed:u.options.deleteSpeed,temp:!0}}),n.unshift.apply(n,F);break;case d:var U=r.eventArgs.removingCharacterNode;if(u.state.visibleNodes.length){var q=u.state.visibleNodes.pop(),G=q.type,Y=q.node,V=q.character;u.options.onRemoveNode&&"function"==typeof u.options.onRemoveNode&&u.options.onRemoveNode({node:Y,character:V}),Y&&Y.parentNode.removeChild(Y),G===T&&U&&n.unshift({eventName:d,eventArgs:{}})}break;case m:u.options.deleteSpeed=r.eventArgs.speed;break;case y:u.options.delay=r.eventArgs.delay;break;case g:u.options.cursor=r.eventArgs.cursor,u.state.elements.cursor.innerHTML=r.eventArgs.cursor}u.options.loop&&(r.eventName===d||r.eventArgs&&r.eventArgs.temp||(u.state.calledEvents=[].concat(S(u.state.calledEvents),[r]))),u.state.eventQueue=n,u.state.lastFrameTime=e}}})),t)if("string"==typeof t){var b=document.querySelector(t);if(!b)throw new Error("Could not find container element");this.state.elements.container=b}else this.state.elements.container=t;n&&(this.options=A(A({},this.options),n)),this.state.initialOptions=A({},this.options),this.init()}var t,n,b;return t=e,(n=[{key:"init",value:function(){this.setupWrapperElement(),this.addEventToQueue(g,{cursor:this.options.cursor},!0),this.addEventToQueue(p,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(u(".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}"),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(e){this.options.devMode&&console.log(e)}}])&&C(t.prototype,n),b&&C(t,b),e}()},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},,,,,,,function(e,t,n){(function(t){(function(){var n,r,o,i,a,s;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},r=t.hrtime,i=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),s=1e9*t.uptime(),a=i-s):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,n(12))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,c=[],l=!1,p=-1;function d(){l&&u&&(l=!1,u.length?c=u.concat(c):p=-1,c.length&&f())}function f(){if(!l){var e=s(d);l=!0;for(var t=c.length;t;){for(u=c,c=[];++p<t;)u&&u[p].run();p=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new v(e,t)),1!==c.length||l||s(f)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}]).default}));
},{}],2:[function(require,module,exports){
"use strict";

var _core = _interopRequireDefault(require("typewriter-effect/dist/core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hello = 'World';
console.log(hello);
var app = document.getElementById('mainTitle');
var typewriter = new _core.default(app, {
  loop: true,
  delay: 75
});
typewriter.pauseFor(1000).typeString('Jessica Sea.').pauseFor(5500).start();

},{"typewriter-effect/dist/core":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvdHlwZXdyaXRlci1lZmZlY3QvZGlzdC9jb3JlLmpzIiwic3JjL3NjcmlwdHMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7QUNHQTs7OztBQUhBLElBQU0sS0FBSyxHQUFHLE9BQWQ7QUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLEtBQVo7QUFJQSxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixXQUF4QixDQUFWO0FBRUEsSUFBSSxVQUFVLEdBQUcsSUFBSSxhQUFKLENBQWUsR0FBZixFQUFvQjtBQUNuQyxFQUFBLElBQUksRUFBRSxJQUQ2QjtBQUVuQyxFQUFBLEtBQUssRUFBRTtBQUY0QixDQUFwQixDQUFqQjtBQUtBLFVBQVUsQ0FDUCxRQURILENBQ1ksSUFEWixFQUVHLFVBRkgsQ0FFYyxjQUZkLEVBR0csUUFISCxDQUdZLElBSFosRUFJRyxLQUpIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJUeXBld3JpdGVyXCIsW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5UeXBld3JpdGVyPXQoKTplLlR5cGV3cml0ZXI9dCgpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMsKGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PXt9O2Z1bmN0aW9uIG4ocil7aWYodFtyXSlyZXR1cm4gdFtyXS5leHBvcnRzO3ZhciBvPXRbcl09e2k6cixsOiExLGV4cG9ydHM6e319O3JldHVybiBlW3JdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLG4pLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIG4ubT1lLG4uYz10LG4uZD1mdW5jdGlvbihlLHQscil7bi5vKGUsdCl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2VudW1lcmFibGU6ITAsZ2V0OnJ9KX0sbi5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LG4udD1mdW5jdGlvbihlLHQpe2lmKDEmdCYmKGU9bihlKSksOCZ0KXJldHVybiBlO2lmKDQmdCYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgcj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG4ucihyKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTplfSksMiZ0JiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIG8gaW4gZSluLmQocixvLGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfS5iaW5kKG51bGwsbykpO3JldHVybiByfSxuLm49ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIG4uZCh0LFwiYVwiLHQpLHR9LG4ubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sbi5wPVwiXCIsbihuLnM9Myl9KFssZnVuY3Rpb24oZSx0LG4peyhmdW5jdGlvbih0KXtmb3IodmFyIHI9bigxMSksbz1cInVuZGVmaW5lZFwiPT10eXBlb2Ygd2luZG93P3Q6d2luZG93LGk9W1wibW96XCIsXCJ3ZWJraXRcIl0sYT1cIkFuaW1hdGlvbkZyYW1lXCIscz1vW1wicmVxdWVzdFwiK2FdLHU9b1tcImNhbmNlbFwiK2FdfHxvW1wiY2FuY2VsUmVxdWVzdFwiK2FdLGM9MDshcyYmYzxpLmxlbmd0aDtjKyspcz1vW2lbY10rXCJSZXF1ZXN0XCIrYV0sdT1vW2lbY10rXCJDYW5jZWxcIithXXx8b1tpW2NdK1wiQ2FuY2VsUmVxdWVzdFwiK2FdO2lmKCFzfHwhdSl7dmFyIGw9MCxwPTAsZD1bXTtzPWZ1bmN0aW9uKGUpe2lmKDA9PT1kLmxlbmd0aCl7dmFyIHQ9cigpLG49TWF0aC5tYXgoMCwxZTMvNjAtKHQtbCkpO2w9bit0LHNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7dmFyIGU9ZC5zbGljZSgwKTtkLmxlbmd0aD0wO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKWlmKCFlW3RdLmNhbmNlbGxlZCl0cnl7ZVt0XS5jYWxsYmFjayhsKX1jYXRjaChlKXtzZXRUaW1lb3V0KChmdW5jdGlvbigpe3Rocm93IGV9KSwwKX19KSxNYXRoLnJvdW5kKG4pKX1yZXR1cm4gZC5wdXNoKHtoYW5kbGU6KytwLGNhbGxiYWNrOmUsY2FuY2VsbGVkOiExfSkscH0sdT1mdW5jdGlvbihlKXtmb3IodmFyIHQ9MDt0PGQubGVuZ3RoO3QrKylkW3RdLmhhbmRsZT09PWUmJihkW3RdLmNhbmNlbGxlZD0hMCl9fWUuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gcy5jYWxsKG8sZSl9LGUuZXhwb3J0cy5jYW5jZWw9ZnVuY3Rpb24oKXt1LmFwcGx5KG8sYXJndW1lbnRzKX0sZS5leHBvcnRzLnBvbHlmaWxsPWZ1bmN0aW9uKGUpe2V8fChlPW8pLGUucmVxdWVzdEFuaW1hdGlvbkZyYW1lPXMsZS5jYW5jZWxBbmltYXRpb25GcmFtZT11fX0pLmNhbGwodGhpcyxuKDQpKX0sLGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtuLnIodCksbi5kKHQsXCJkZWZhdWx0XCIsKGZ1bmN0aW9uKCl7cmV0dXJuIE99KSk7dmFyIHI9bigxKSxvPW4ubihyKSxpPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgUmVnRXhwKC88W2Etel1bXFxzXFxTXSo+L2kpLnRlc3QoZSl9LGE9ZnVuY3Rpb24oZSl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gdC5pbm5lckhUTUw9ZSx0LmNoaWxkTm9kZXN9LHM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKih0LWUrMSkpK2V9LHU9ZnVuY3Rpb24oZSl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO3QuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZSkpLGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodCl9LGM9XCJUWVBFX0NIQVJBQ1RFUlwiLGw9XCJSRU1PVkVfQ0hBUkFDVEVSXCIscD1cIlJFTU9WRV9BTExcIixkPVwiUkVNT1ZFX0xBU1RfVklTSUJMRV9OT0RFXCIsZj1cIlBBVVNFX0ZPUlwiLHY9XCJDQUxMX0ZVTkNUSU9OXCIsaD1cIkFERF9IVE1MX1RBR19FTEVNRU5UXCIsbT1cIkNIQU5HRV9ERUxFVEVfU1BFRURcIix5PVwiQ0hBTkdFX0RFTEFZXCIsZz1cIkNIQU5HRV9DVVJTT1JcIix3PVwiUEFTVEVfU1RSSU5HXCIsVD1cIkhUTUxfVEFHXCIsRT1cIlRFWFRfTk9ERVwiO2Z1bmN0aW9uIGIoZSx0KXt2YXIgbj1PYmplY3Qua2V5cyhlKTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO3QmJihyPXIuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLHQpLmVudW1lcmFibGV9KSkpLG4ucHVzaC5hcHBseShuLHIpfXJldHVybiBufWZ1bmN0aW9uIEEoZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49bnVsbCE9YXJndW1lbnRzW3RdP2FyZ3VtZW50c1t0XTp7fTt0JTI/YihPYmplY3QobiksITApLmZvckVhY2goKGZ1bmN0aW9uKHQpe18oZSx0LG5bdF0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMobikpOmIoT2JqZWN0KG4pKS5mb3JFYWNoKChmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iobix0KSl9KSl9cmV0dXJuIGV9ZnVuY3Rpb24gUyhlKXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gTihlKX0oZSl8fGZ1bmN0aW9uKGUpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoZSkpcmV0dXJuIEFycmF5LmZyb20oZSl9KGUpfHxmdW5jdGlvbihlLHQpe2lmKCFlKXJldHVybjtpZihcInN0cmluZ1wiPT10eXBlb2YgZSlyZXR1cm4gTihlLHQpO3ZhciBuPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LC0xKTtcIk9iamVjdFwiPT09biYmZS5jb25zdHJ1Y3RvciYmKG49ZS5jb25zdHJ1Y3Rvci5uYW1lKTtpZihcIk1hcFwiPT09bnx8XCJTZXRcIj09PW4pcmV0dXJuIEFycmF5LmZyb20oZSk7aWYoXCJBcmd1bWVudHNcIj09PW58fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKXJldHVybiBOKGUsdCl9KGUpfHxmdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIE4oZSx0KXsobnVsbD09dHx8dD5lLmxlbmd0aCkmJih0PWUubGVuZ3RoKTtmb3IodmFyIG49MCxyPW5ldyBBcnJheSh0KTtuPHQ7bisrKXJbbl09ZVtuXTtyZXR1cm4gcn1mdW5jdGlvbiBDKGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciByPXRbbl07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIua2V5LHIpfX1mdW5jdGlvbiBfKGUsdCxuKXtyZXR1cm4gdCBpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOm4sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPW4sZX12YXIgTz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuKXt2YXIgdT10aGlzO2lmKGZ1bmN0aW9uKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyxlKSxfKHRoaXMsXCJzdGF0ZVwiLHtjdXJzb3JBbmltYXRpb246bnVsbCxsYXN0RnJhbWVUaW1lOm51bGwscGF1c2VVbnRpbDpudWxsLGV2ZW50UXVldWU6W10sZXZlbnRMb29wOm51bGwsZXZlbnRMb29wUGF1c2VkOiExLHJldmVyc2VDYWxsZWRFdmVudHM6W10sY2FsbGVkRXZlbnRzOltdLHZpc2libGVOb2RlczpbXSxpbml0aWFsT3B0aW9uczpudWxsLGVsZW1lbnRzOntjb250YWluZXI6bnVsbCx3cmFwcGVyOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpLGN1cnNvcjpkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKX19KSxfKHRoaXMsXCJvcHRpb25zXCIse3N0cmluZ3M6bnVsbCxjdXJzb3I6XCJ8XCIsZGVsYXk6XCJuYXR1cmFsXCIscGF1c2VGb3I6MTUwMCxkZWxldGVTcGVlZDpcIm5hdHVyYWxcIixsb29wOiExLGF1dG9TdGFydDohMSxkZXZNb2RlOiExLHNraXBBZGRTdHlsZXM6ITEsd3JhcHBlckNsYXNzTmFtZTpcIlR5cGV3cml0ZXJfX3dyYXBwZXJcIixjdXJzb3JDbGFzc05hbWU6XCJUeXBld3JpdGVyX19jdXJzb3JcIixzdHJpbmdTcGxpdHRlcjpudWxsLG9uQ3JlYXRlVGV4dE5vZGU6bnVsbCxvblJlbW92ZU5vZGU6bnVsbH0pLF8odGhpcyxcInNldHVwV3JhcHBlckVsZW1lbnRcIiwoZnVuY3Rpb24oKXt1LnN0YXRlLmVsZW1lbnRzLmNvbnRhaW5lciYmKHUuc3RhdGUuZWxlbWVudHMud3JhcHBlci5jbGFzc05hbWU9dS5vcHRpb25zLndyYXBwZXJDbGFzc05hbWUsdS5zdGF0ZS5lbGVtZW50cy5jdXJzb3IuY2xhc3NOYW1lPXUub3B0aW9ucy5jdXJzb3JDbGFzc05hbWUsdS5zdGF0ZS5lbGVtZW50cy5jdXJzb3IuaW5uZXJIVE1MPXUub3B0aW9ucy5jdXJzb3IsdS5zdGF0ZS5lbGVtZW50cy5jb250YWluZXIuaW5uZXJIVE1MPVwiXCIsdS5zdGF0ZS5lbGVtZW50cy5jb250YWluZXIuYXBwZW5kQ2hpbGQodS5zdGF0ZS5lbGVtZW50cy53cmFwcGVyKSx1LnN0YXRlLmVsZW1lbnRzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh1LnN0YXRlLmVsZW1lbnRzLmN1cnNvcikpfSkpLF8odGhpcyxcInN0YXJ0XCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHUuc3RhdGUuZXZlbnRMb29wUGF1c2VkPSExLHUucnVuRXZlbnRMb29wKCksdX0pKSxfKHRoaXMsXCJwYXVzZVwiLChmdW5jdGlvbigpe3JldHVybiB1LnN0YXRlLmV2ZW50TG9vcFBhdXNlZD0hMCx1fSkpLF8odGhpcyxcInN0b3BcIiwoZnVuY3Rpb24oKXtyZXR1cm4gdS5zdGF0ZS5ldmVudExvb3AmJihPYmplY3Qoci5jYW5jZWwpKHUuc3RhdGUuZXZlbnRMb29wKSx1LnN0YXRlLmV2ZW50TG9vcD1udWxsKSx1fSkpLF8odGhpcyxcInBhdXNlRm9yXCIsKGZ1bmN0aW9uKGUpe3JldHVybiB1LmFkZEV2ZW50VG9RdWV1ZShmLHttczplfSksdX0pKSxfKHRoaXMsXCJ0eXBlT3V0QWxsU3RyaW5nc1wiLChmdW5jdGlvbigpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB1Lm9wdGlvbnMuc3RyaW5ncz8odS50eXBlU3RyaW5nKHUub3B0aW9ucy5zdHJpbmdzKS5wYXVzZUZvcih1Lm9wdGlvbnMucGF1c2VGb3IpLHUpOih1Lm9wdGlvbnMuc3RyaW5ncy5mb3JFYWNoKChmdW5jdGlvbihlKXt1LnR5cGVTdHJpbmcoZSkucGF1c2VGb3IodS5vcHRpb25zLnBhdXNlRm9yKS5kZWxldGVBbGwodS5vcHRpb25zLmRlbGV0ZVNwZWVkKX0pKSx1KX0pKSxfKHRoaXMsXCJ0eXBlU3RyaW5nXCIsKGZ1bmN0aW9uKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpudWxsO2lmKGkoZSkpcmV0dXJuIHUudHlwZU91dEhUTUxTdHJpbmcoZSx0KTtpZihlKXt2YXIgbj11Lm9wdGlvbnN8fHt9LHI9bi5zdHJpbmdTcGxpdHRlcixvPVwiZnVuY3Rpb25cIj09dHlwZW9mIHI/cihlKTplLnNwbGl0KFwiXCIpO3UudHlwZUNoYXJhY3RlcnMobyx0KX1yZXR1cm4gdX0pKSxfKHRoaXMsXCJwYXN0ZVN0cmluZ1wiLChmdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06bnVsbDtyZXR1cm4gaShlKT91LnR5cGVPdXRIVE1MU3RyaW5nKGUsdCwhMCk6KGUmJnUuYWRkRXZlbnRUb1F1ZXVlKHcse2NoYXJhY3RlcjplLG5vZGU6dH0pLHUpfSkpLF8odGhpcyxcInR5cGVPdXRIVE1MU3RyaW5nXCIsKGZ1bmN0aW9uKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpudWxsLG49YXJndW1lbnRzLmxlbmd0aD4yP2FyZ3VtZW50c1syXTp2b2lkIDAscj1hKGUpO2lmKHIubGVuZ3RoPjApZm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspe3ZhciBpPXJbb10scz1pLmlubmVySFRNTDtpJiYzIT09aS5ub2RlVHlwZT8oaS5pbm5lckhUTUw9XCJcIix1LmFkZEV2ZW50VG9RdWV1ZShoLHtub2RlOmkscGFyZW50Tm9kZTp0fSksbj91LnBhc3RlU3RyaW5nKHMsaSk6dS50eXBlU3RyaW5nKHMsaSkpOmkudGV4dENvbnRlbnQmJihuP3UucGFzdGVTdHJpbmcoaS50ZXh0Q29udGVudCx0KTp1LnR5cGVTdHJpbmcoaS50ZXh0Q29udGVudCx0KSl9cmV0dXJuIHV9KSksXyh0aGlzLFwiZGVsZXRlQWxsXCIsKGZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOlwibmF0dXJhbFwiO3JldHVybiB1LmFkZEV2ZW50VG9RdWV1ZShwLHtzcGVlZDplfSksdX0pKSxfKHRoaXMsXCJjaGFuZ2VEZWxldGVTcGVlZFwiLChmdW5jdGlvbihlKXtpZighZSl0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IHByb3ZpZGUgbmV3IGRlbGV0ZSBzcGVlZFwiKTtyZXR1cm4gdS5hZGRFdmVudFRvUXVldWUobSx7c3BlZWQ6ZX0pLHV9KSksXyh0aGlzLFwiY2hhbmdlRGVsYXlcIiwoZnVuY3Rpb24oZSl7aWYoIWUpdGhyb3cgbmV3IEVycm9yKFwiTXVzdCBwcm92aWRlIG5ldyBkZWxheVwiKTtyZXR1cm4gdS5hZGRFdmVudFRvUXVldWUoeSx7ZGVsYXk6ZX0pLHV9KSksXyh0aGlzLFwiY2hhbmdlQ3Vyc29yXCIsKGZ1bmN0aW9uKGUpe2lmKCFlKXRocm93IG5ldyBFcnJvcihcIk11c3QgcHJvdmlkZSBuZXcgY3Vyc29yXCIpO3JldHVybiB1LmFkZEV2ZW50VG9RdWV1ZShnLHtjdXJzb3I6ZX0pLHV9KSksXyh0aGlzLFwiZGVsZXRlQ2hhcnNcIiwoZnVuY3Rpb24oZSl7aWYoIWUpdGhyb3cgbmV3IEVycm9yKFwiTXVzdCBwcm92aWRlIGFtb3VudCBvZiBjaGFyYWN0ZXJzIHRvIGRlbGV0ZVwiKTtmb3IodmFyIHQ9MDt0PGU7dCsrKXUuYWRkRXZlbnRUb1F1ZXVlKGwpO3JldHVybiB1fSkpLF8odGhpcyxcImNhbGxGdW5jdGlvblwiLChmdW5jdGlvbihlLHQpe2lmKCFlfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBFcnJvcihcIkNhbGxiYWsgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO3JldHVybiB1LmFkZEV2ZW50VG9RdWV1ZSh2LHtjYjplLHRoaXNBcmc6dH0pLHV9KSksXyh0aGlzLFwidHlwZUNoYXJhY3RlcnNcIiwoZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOm51bGw7aWYoIWV8fCFBcnJheS5pc0FycmF5KGUpKXRocm93IG5ldyBFcnJvcihcIkNoYXJhY3RlcnMgbXVzdCBiZSBhbiBhcnJheVwiKTtyZXR1cm4gZS5mb3JFYWNoKChmdW5jdGlvbihlKXt1LmFkZEV2ZW50VG9RdWV1ZShjLHtjaGFyYWN0ZXI6ZSxub2RlOnR9KX0pKSx1fSkpLF8odGhpcyxcInJlbW92ZUNoYXJhY3RlcnNcIiwoZnVuY3Rpb24oZSl7aWYoIWV8fCFBcnJheS5pc0FycmF5KGUpKXRocm93IG5ldyBFcnJvcihcIkNoYXJhY3RlcnMgbXVzdCBiZSBhbiBhcnJheVwiKTtyZXR1cm4gZS5mb3JFYWNoKChmdW5jdGlvbigpe3UuYWRkRXZlbnRUb1F1ZXVlKGwpfSkpLHV9KSksXyh0aGlzLFwiYWRkRXZlbnRUb1F1ZXVlXCIsKGZ1bmN0aW9uKGUsdCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0mJmFyZ3VtZW50c1syXTtyZXR1cm4gdS5hZGRFdmVudFRvU3RhdGVQcm9wZXJ0eShlLHQsbixcImV2ZW50UXVldWVcIil9KSksXyh0aGlzLFwiYWRkUmV2ZXJzZUNhbGxlZEV2ZW50XCIsKGZ1bmN0aW9uKGUsdCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0mJmFyZ3VtZW50c1syXSxyPXUub3B0aW9ucy5sb29wO3JldHVybiByP3UuYWRkRXZlbnRUb1N0YXRlUHJvcGVydHkoZSx0LG4sXCJyZXZlcnNlQ2FsbGVkRXZlbnRzXCIpOnV9KSksXyh0aGlzLFwiYWRkRXZlbnRUb1N0YXRlUHJvcGVydHlcIiwoZnVuY3Rpb24oZSx0KXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXSYmYXJndW1lbnRzWzJdLHI9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDAsbz17ZXZlbnROYW1lOmUsZXZlbnRBcmdzOnR8fHt9fTtyZXR1cm4gdS5zdGF0ZVtyXT1uP1tvXS5jb25jYXQoUyh1LnN0YXRlW3JdKSk6W10uY29uY2F0KFModS5zdGF0ZVtyXSksW29dKSx1fSkpLF8odGhpcyxcInJ1bkV2ZW50TG9vcFwiLChmdW5jdGlvbigpe3Uuc3RhdGUubGFzdEZyYW1lVGltZXx8KHUuc3RhdGUubGFzdEZyYW1lVGltZT1EYXRlLm5vdygpKTt2YXIgZT1EYXRlLm5vdygpLHQ9ZS11LnN0YXRlLmxhc3RGcmFtZVRpbWU7aWYoIXUuc3RhdGUuZXZlbnRRdWV1ZS5sZW5ndGgpe2lmKCF1Lm9wdGlvbnMubG9vcClyZXR1cm47dS5zdGF0ZS5ldmVudFF1ZXVlPVModS5zdGF0ZS5jYWxsZWRFdmVudHMpLHUuc3RhdGUuY2FsbGVkRXZlbnRzPVtdLHUub3B0aW9ucz1BKHt9LHUuc3RhdGUuaW5pdGlhbE9wdGlvbnMpfWlmKHUuc3RhdGUuZXZlbnRMb29wPW8oKSh1LnJ1bkV2ZW50TG9vcCksIXUuc3RhdGUuZXZlbnRMb29wUGF1c2VkKXtpZih1LnN0YXRlLnBhdXNlVW50aWwpe2lmKGU8dS5zdGF0ZS5wYXVzZVVudGlsKXJldHVybjt1LnN0YXRlLnBhdXNlVW50aWw9bnVsbH12YXIgbj1TKHUuc3RhdGUuZXZlbnRRdWV1ZSkscj1uLnNoaWZ0KCksaT0wO2lmKCEodDw9KGk9ci5ldmVudE5hbWU9PT1kfHxyLmV2ZW50TmFtZT09PWw/XCJuYXR1cmFsXCI9PT11Lm9wdGlvbnMuZGVsZXRlU3BlZWQ/cyg0MCw4MCk6dS5vcHRpb25zLmRlbGV0ZVNwZWVkOlwibmF0dXJhbFwiPT09dS5vcHRpb25zLmRlbGF5P3MoMTIwLDE2MCk6dS5vcHRpb25zLmRlbGF5KSkpe3ZhciBhPXIuZXZlbnROYW1lLGI9ci5ldmVudEFyZ3M7c3dpdGNoKHUubG9nSW5EZXZNb2RlKHtjdXJyZW50RXZlbnQ6cixzdGF0ZTp1LnN0YXRlLGRlbGF5Oml9KSxhKXtjYXNlIHc6Y2FzZSBjOnZhciBOPWIuY2hhcmFjdGVyLEM9Yi5ub2RlLF89ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoTiksTz1fO3Uub3B0aW9ucy5vbkNyZWF0ZVRleHROb2RlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB1Lm9wdGlvbnMub25DcmVhdGVUZXh0Tm9kZSYmKE89dS5vcHRpb25zLm9uQ3JlYXRlVGV4dE5vZGUoTixfKSksTyYmKEM/Qy5hcHBlbmRDaGlsZChPKTp1LnN0YXRlLmVsZW1lbnRzLndyYXBwZXIuYXBwZW5kQ2hpbGQoTykpLHUuc3RhdGUudmlzaWJsZU5vZGVzPVtdLmNvbmNhdChTKHUuc3RhdGUudmlzaWJsZU5vZGVzKSxbe3R5cGU6RSxjaGFyYWN0ZXI6Tixub2RlOk99XSk7YnJlYWs7Y2FzZSBsOm4udW5zaGlmdCh7ZXZlbnROYW1lOmQsZXZlbnRBcmdzOntyZW1vdmluZ0NoYXJhY3Rlck5vZGU6ITB9fSk7YnJlYWs7Y2FzZSBmOnZhciBMPXIuZXZlbnRBcmdzLm1zO3Uuc3RhdGUucGF1c2VVbnRpbD1EYXRlLm5vdygpK3BhcnNlSW50KEwpO2JyZWFrO2Nhc2Ugdjp2YXIgTT1yLmV2ZW50QXJncyx4PU0uY2Isaj1NLnRoaXNBcmc7eC5jYWxsKGose2VsZW1lbnRzOnUuc3RhdGUuZWxlbWVudHN9KTticmVhaztjYXNlIGg6dmFyIEQ9ci5ldmVudEFyZ3MsUD1ELm5vZGUsaz1ELnBhcmVudE5vZGU7az9rLmFwcGVuZENoaWxkKFApOnUuc3RhdGUuZWxlbWVudHMud3JhcHBlci5hcHBlbmRDaGlsZChQKSx1LnN0YXRlLnZpc2libGVOb2Rlcz1bXS5jb25jYXQoUyh1LnN0YXRlLnZpc2libGVOb2RlcyksW3t0eXBlOlQsbm9kZTpQLHBhcmVudE5vZGU6a3x8dS5zdGF0ZS5lbGVtZW50cy53cmFwcGVyfV0pO2JyZWFrO2Nhc2UgcDp2YXIgUj11LnN0YXRlLnZpc2libGVOb2RlcyxRPWIuc3BlZWQsRj1bXTtRJiZGLnB1c2goe2V2ZW50TmFtZTptLGV2ZW50QXJnczp7c3BlZWQ6USx0ZW1wOiEwfX0pO2Zvcih2YXIgSD0wLEk9Ui5sZW5ndGg7SDxJO0grKylGLnB1c2goe2V2ZW50TmFtZTpkLGV2ZW50QXJnczp7cmVtb3ZpbmdDaGFyYWN0ZXJOb2RlOiExfX0pO1EmJkYucHVzaCh7ZXZlbnROYW1lOm0sZXZlbnRBcmdzOntzcGVlZDp1Lm9wdGlvbnMuZGVsZXRlU3BlZWQsdGVtcDohMH19KSxuLnVuc2hpZnQuYXBwbHkobixGKTticmVhaztjYXNlIGQ6dmFyIFU9ci5ldmVudEFyZ3MucmVtb3ZpbmdDaGFyYWN0ZXJOb2RlO2lmKHUuc3RhdGUudmlzaWJsZU5vZGVzLmxlbmd0aCl7dmFyIHE9dS5zdGF0ZS52aXNpYmxlTm9kZXMucG9wKCksRz1xLnR5cGUsWT1xLm5vZGUsVj1xLmNoYXJhY3Rlcjt1Lm9wdGlvbnMub25SZW1vdmVOb2RlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB1Lm9wdGlvbnMub25SZW1vdmVOb2RlJiZ1Lm9wdGlvbnMub25SZW1vdmVOb2RlKHtub2RlOlksY2hhcmFjdGVyOlZ9KSxZJiZZLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoWSksRz09PVQmJlUmJm4udW5zaGlmdCh7ZXZlbnROYW1lOmQsZXZlbnRBcmdzOnt9fSl9YnJlYWs7Y2FzZSBtOnUub3B0aW9ucy5kZWxldGVTcGVlZD1yLmV2ZW50QXJncy5zcGVlZDticmVhaztjYXNlIHk6dS5vcHRpb25zLmRlbGF5PXIuZXZlbnRBcmdzLmRlbGF5O2JyZWFrO2Nhc2UgZzp1Lm9wdGlvbnMuY3Vyc29yPXIuZXZlbnRBcmdzLmN1cnNvcix1LnN0YXRlLmVsZW1lbnRzLmN1cnNvci5pbm5lckhUTUw9ci5ldmVudEFyZ3MuY3Vyc29yfXUub3B0aW9ucy5sb29wJiYoci5ldmVudE5hbWU9PT1kfHxyLmV2ZW50QXJncyYmci5ldmVudEFyZ3MudGVtcHx8KHUuc3RhdGUuY2FsbGVkRXZlbnRzPVtdLmNvbmNhdChTKHUuc3RhdGUuY2FsbGVkRXZlbnRzKSxbcl0pKSksdS5zdGF0ZS5ldmVudFF1ZXVlPW4sdS5zdGF0ZS5sYXN0RnJhbWVUaW1lPWV9fX0pKSx0KWlmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXt2YXIgYj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHQpO2lmKCFiKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGNvbnRhaW5lciBlbGVtZW50XCIpO3RoaXMuc3RhdGUuZWxlbWVudHMuY29udGFpbmVyPWJ9ZWxzZSB0aGlzLnN0YXRlLmVsZW1lbnRzLmNvbnRhaW5lcj10O24mJih0aGlzLm9wdGlvbnM9QShBKHt9LHRoaXMub3B0aW9ucyksbikpLHRoaXMuc3RhdGUuaW5pdGlhbE9wdGlvbnM9QSh7fSx0aGlzLm9wdGlvbnMpLHRoaXMuaW5pdCgpfXZhciB0LG4sYjtyZXR1cm4gdD1lLChuPVt7a2V5OlwiaW5pdFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5zZXR1cFdyYXBwZXJFbGVtZW50KCksdGhpcy5hZGRFdmVudFRvUXVldWUoZyx7Y3Vyc29yOnRoaXMub3B0aW9ucy5jdXJzb3J9LCEwKSx0aGlzLmFkZEV2ZW50VG9RdWV1ZShwLG51bGwsITApLCF3aW5kb3d8fHdpbmRvdy5fX19UWVBFV1JJVEVSX0pTX1NUWUxFU19BRERFRF9fX3x8dGhpcy5vcHRpb25zLnNraXBBZGRTdHlsZXN8fCh1KFwiLlR5cGV3cml0ZXJfX2N1cnNvcnstd2Via2l0LWFuaW1hdGlvbjpUeXBld3JpdGVyLWN1cnNvciAxcyBpbmZpbml0ZTthbmltYXRpb246VHlwZXdyaXRlci1jdXJzb3IgMXMgaW5maW5pdGU7bWFyZ2luLWxlZnQ6MXB4fUAtd2Via2l0LWtleWZyYW1lcyBUeXBld3JpdGVyLWN1cnNvcnswJXtvcGFjaXR5OjB9NTAle29wYWNpdHk6MX0xMDAle29wYWNpdHk6MH19QGtleWZyYW1lcyBUeXBld3JpdGVyLWN1cnNvcnswJXtvcGFjaXR5OjB9NTAle29wYWNpdHk6MX0xMDAle29wYWNpdHk6MH19XCIpLHdpbmRvdy5fX19UWVBFV1JJVEVSX0pTX1NUWUxFU19BRERFRF9fXz0hMCksITA9PT10aGlzLm9wdGlvbnMuYXV0b1N0YXJ0JiZ0aGlzLm9wdGlvbnMuc3RyaW5ncyYmdGhpcy50eXBlT3V0QWxsU3RyaW5ncygpLnN0YXJ0KCl9fSx7a2V5OlwibG9nSW5EZXZNb2RlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5vcHRpb25zLmRldk1vZGUmJmNvbnNvbGUubG9nKGUpfX1dKSYmQyh0LnByb3RvdHlwZSxuKSxiJiZDKHQsYiksZX0oKX0sZnVuY3Rpb24oZSx0KXt2YXIgbjtuPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCk7dHJ5e249bnx8bmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKX1jYXRjaChlKXtcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiYobj13aW5kb3cpfWUuZXhwb3J0cz1ufSwsLCwsLCxmdW5jdGlvbihlLHQsbil7KGZ1bmN0aW9uKHQpeyhmdW5jdGlvbigpe3ZhciBuLHIsbyxpLGEscztcInVuZGVmaW5lZFwiIT10eXBlb2YgcGVyZm9ybWFuY2UmJm51bGwhPT1wZXJmb3JtYW5jZSYmcGVyZm9ybWFuY2Uubm93P2UuZXhwb3J0cz1mdW5jdGlvbigpe3JldHVybiBwZXJmb3JtYW5jZS5ub3coKX06bnVsbCE9dCYmdC5ocnRpbWU/KGUuZXhwb3J0cz1mdW5jdGlvbigpe3JldHVybihuKCktYSkvMWU2fSxyPXQuaHJ0aW1lLGk9KG49ZnVuY3Rpb24oKXt2YXIgZTtyZXR1cm4gMWU5KihlPXIoKSlbMF0rZVsxXX0pKCkscz0xZTkqdC51cHRpbWUoKSxhPWktcyk6RGF0ZS5ub3c/KGUuZXhwb3J0cz1mdW5jdGlvbigpe3JldHVybiBEYXRlLm5vdygpLW99LG89RGF0ZS5ub3coKSk6KGUuZXhwb3J0cz1mdW5jdGlvbigpe3JldHVybihuZXcgRGF0ZSkuZ2V0VGltZSgpLW99LG89KG5ldyBEYXRlKS5nZXRUaW1lKCkpfSkuY2FsbCh0aGlzKX0pLmNhbGwodGhpcyxuKDEyKSl9LGZ1bmN0aW9uKGUsdCl7dmFyIG4scixvPWUuZXhwb3J0cz17fTtmdW5jdGlvbiBpKCl7dGhyb3cgbmV3IEVycm9yKFwic2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiBhKCl7dGhyb3cgbmV3IEVycm9yKFwiY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfWZ1bmN0aW9uIHMoZSl7aWYobj09PXNldFRpbWVvdXQpcmV0dXJuIHNldFRpbWVvdXQoZSwwKTtpZigobj09PWl8fCFuKSYmc2V0VGltZW91dClyZXR1cm4gbj1zZXRUaW1lb3V0LHNldFRpbWVvdXQoZSwwKTt0cnl7cmV0dXJuIG4oZSwwKX1jYXRjaCh0KXt0cnl7cmV0dXJuIG4uY2FsbChudWxsLGUsMCl9Y2F0Y2godCl7cmV0dXJuIG4uY2FsbCh0aGlzLGUsMCl9fX0hZnVuY3Rpb24oKXt0cnl7bj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBzZXRUaW1lb3V0P3NldFRpbWVvdXQ6aX1jYXRjaChlKXtuPWl9dHJ5e3I9XCJmdW5jdGlvblwiPT10eXBlb2YgY2xlYXJUaW1lb3V0P2NsZWFyVGltZW91dDphfWNhdGNoKGUpe3I9YX19KCk7dmFyIHUsYz1bXSxsPSExLHA9LTE7ZnVuY3Rpb24gZCgpe2wmJnUmJihsPSExLHUubGVuZ3RoP2M9dS5jb25jYXQoYyk6cD0tMSxjLmxlbmd0aCYmZigpKX1mdW5jdGlvbiBmKCl7aWYoIWwpe3ZhciBlPXMoZCk7bD0hMDtmb3IodmFyIHQ9Yy5sZW5ndGg7dDspe2Zvcih1PWMsYz1bXTsrK3A8dDspdSYmdVtwXS5ydW4oKTtwPS0xLHQ9Yy5sZW5ndGh9dT1udWxsLGw9ITEsZnVuY3Rpb24oZSl7aWYocj09PWNsZWFyVGltZW91dClyZXR1cm4gY2xlYXJUaW1lb3V0KGUpO2lmKChyPT09YXx8IXIpJiZjbGVhclRpbWVvdXQpcmV0dXJuIHI9Y2xlYXJUaW1lb3V0LGNsZWFyVGltZW91dChlKTt0cnl7cihlKX1jYXRjaCh0KXt0cnl7cmV0dXJuIHIuY2FsbChudWxsLGUpfWNhdGNoKHQpe3JldHVybiByLmNhbGwodGhpcyxlKX19fShlKX19ZnVuY3Rpb24gdihlLHQpe3RoaXMuZnVuPWUsdGhpcy5hcnJheT10fWZ1bmN0aW9uIGgoKXt9by5uZXh0VGljaz1mdW5jdGlvbihlKXt2YXIgdD1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aC0xKTtpZihhcmd1bWVudHMubGVuZ3RoPjEpZm9yKHZhciBuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyl0W24tMV09YXJndW1lbnRzW25dO2MucHVzaChuZXcgdihlLHQpKSwxIT09Yy5sZW5ndGh8fGx8fHMoZil9LHYucHJvdG90eXBlLnJ1bj1mdW5jdGlvbigpe3RoaXMuZnVuLmFwcGx5KG51bGwsdGhpcy5hcnJheSl9LG8udGl0bGU9XCJicm93c2VyXCIsby5icm93c2VyPSEwLG8uZW52PXt9LG8uYXJndj1bXSxvLnZlcnNpb249XCJcIixvLnZlcnNpb25zPXt9LG8ub249aCxvLmFkZExpc3RlbmVyPWgsby5vbmNlPWgsby5vZmY9aCxvLnJlbW92ZUxpc3RlbmVyPWgsby5yZW1vdmVBbGxMaXN0ZW5lcnM9aCxvLmVtaXQ9aCxvLnByZXBlbmRMaXN0ZW5lcj1oLG8ucHJlcGVuZE9uY2VMaXN0ZW5lcj1oLG8ubGlzdGVuZXJzPWZ1bmN0aW9uKGUpe3JldHVybltdfSxvLmJpbmRpbmc9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWRcIil9LG8uY3dkPWZ1bmN0aW9uKCl7cmV0dXJuXCIvXCJ9LG8uY2hkaXI9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkXCIpfSxvLnVtYXNrPWZ1bmN0aW9uKCl7cmV0dXJuIDB9fV0pLmRlZmF1bHR9KSk7IiwiY29uc3QgaGVsbG8gPSAnV29ybGQnO1xuY29uc29sZS5sb2coaGVsbG8pO1xuXG5pbXBvcnQgVHlwZXdyaXRlciBmcm9tICd0eXBld3JpdGVyLWVmZmVjdC9kaXN0L2NvcmUnO1xuXG52YXIgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5UaXRsZScpO1xuXG52YXIgdHlwZXdyaXRlciA9IG5ldyBUeXBld3JpdGVyKGFwcCwge1xuICBsb29wOiB0cnVlLFxuICBkZWxheTogNzUsXG59KTtcblxudHlwZXdyaXRlclxuICAucGF1c2VGb3IoMTAwMClcbiAgLnR5cGVTdHJpbmcoJ0plc3NpY2EgU2VhLicpXG4gIC5wYXVzZUZvcig1NTAwKVxuICAuc3RhcnQoKTsiXX0=
