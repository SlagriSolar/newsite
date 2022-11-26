/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.12.8
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
*/
!function(){var e={2:function(e,t,n){n="undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},e.exports=n},1:function(e){e.exports=function(e){"complete"===document.readyState||"interactive"===document.readyState?e.call():document.attachEvent?document.attachEvent("onreadystatechange",(function(){"interactive"===document.readyState&&e.call()})):document.addEventListener&&document.addEventListener("DOMContentLoaded",e)}},8:function(e,t,n){"use strict";n.r(t);var o=n(1),i=(o=n.n(o),n(2));function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,i,a=[],r=!0,l=!1;try{for(n=n.call(e);!(r=(o=n.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(e){l=!0,i=e}finally{try{r||null==n["return"]||n["return"]()}finally{if(l)throw i}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var c,u,p=i.window.navigator,m=-1<p.userAgent.indexOf("MSIE ")||-1<p.userAgent.indexOf("Trident/")||-1<p.userAgent.indexOf("Edge/"),d=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(p.userAgent),f=function(){for(var e="transform WebkitTransform MozTransform".split(" "),t=document.createElement("div"),n=0;n<e.length;n+=1)if(t&&void 0!==t.style[e[n]])return e[n];return!1}();function g(){u=d?(!c&&document.body&&((c=document.createElement("div")).style.cssText="position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;",document.body.appendChild(c)),(c?c.clientHeight:0)||i.window.innerHeight||document.documentElement.clientHeight):i.window.innerHeight||document.documentElement.clientHeight}g(),i.window.addEventListener("resize",g),i.window.addEventListener("orientationchange",g),i.window.addEventListener("load",g),o()((function(){g()}));var y=[];function h(){y.length&&(y.forEach((function(e,t){var n,o=e.instance,a=e.oldData;e={width:(n=o.$item.getBoundingClientRect()).width,height:n.height,top:n.top,bottom:n.bottom,wndW:i.window.innerWidth,wndH:u},a=(n=!a||a.wndW!==e.wndW||a.wndH!==e.wndH||a.width!==e.width||a.height!==e.height)||!a||a.top!==e.top||a.bottom!==e.bottom;y[t].oldData=e,n&&o.onResize(),a&&o.onScroll()})),i.window.requestAnimationFrame(h))}var b=0,v=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var o=this;o.instanceID=b,b+=1,o.$item=t,o.defaults={type:"scroll",speed:.5,imgSrc:null,imgElement:".jarallax-img",imgSize:"cover",imgPosition:"50% 50%",imgRepeat:"no-repeat",keepImg:!1,elementInViewport:null,zIndex:-100,disableParallax:!1,disableVideo:!1,videoSrc:null,videoStartTime:0,videoEndTime:0,videoVolume:0,videoLoop:!0,videoPlayOnlyVisible:!0,videoLazyLoading:!0,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null};var i,r,s=o.$item.dataset||{},c={};Object.keys(s).forEach((function(e){var t=e.substr(0,1).toLowerCase()+e.substr(1);t&&void 0!==o.defaults[t]&&(c[t]=s[e])})),o.options=o.extend({},o.defaults,c,n),o.pureOptions=o.extend({},o.options),Object.keys(o.options).forEach((function(e){"true"===o.options[e]?o.options[e]=!0:"false"===o.options[e]&&(o.options[e]=!1)})),o.options.speed=Math.min(2,Math.max(-1,parseFloat(o.options.speed))),"string"==typeof o.options.disableParallax&&(o.options.disableParallax=new RegExp(o.options.disableParallax)),o.options.disableParallax instanceof RegExp&&(i=o.options.disableParallax,o.options.disableParallax=function(){return i.test(p.userAgent)}),"function"!=typeof o.options.disableParallax&&(o.options.disableParallax=function(){return!1}),"string"==typeof o.options.disableVideo&&(o.options.disableVideo=new RegExp(o.options.disableVideo)),o.options.disableVideo instanceof RegExp&&(r=o.options.disableVideo,o.options.disableVideo=function(){return r.test(p.userAgent)}),"function"!=typeof o.options.disableVideo&&(o.options.disableVideo=function(){return!1}),(n=(n=o.options.elementInViewport)&&"object"===l(n)&&void 0!==n.length?a(n,1)[0]:n)instanceof Element||(n=null),o.options.elementInViewport=n,o.image={src:o.options.imgSrc||null,$container:null,useImgTag:!1,position:"fixed"},o.initImg()&&o.canInitParallax()&&o.init()}var t,n;return t=e,(n=[{key:"css",value:function(e,t){return"string"==typeof t?i.window.getComputedStyle(e).getPropertyValue(t):(t.transform&&f&&(t[f]=t.transform),Object.keys(t).forEach((function(n){e.style[n]=t[n]})),e)}},{key:"extend",value:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return e=e||{},Object.keys(n).forEach((function(t){n[t]&&Object.keys(n[t]).forEach((function(o){e[o]=n[t][o]}))})),e}},{key:"getWindowData",value:function(){return{width:i.window.innerWidth||document.documentElement.clientWidth,height:u,y:document.documentElement.scrollTop}}},{key:"initImg",value:function(){var e=this,t=e.options.imgElement;return(t=t&&"string"==typeof t?e.$item.querySelector(t):t)instanceof Element||(e.options.imgSrc?(t=new Image).src=e.options.imgSrc:t=null),t&&(e.options.keepImg?e.image.$item=t.cloneNode(!0):(e.image.$item=t,e.image.$itemParent=t.parentNode),e.image.useImgTag=!0),!(!e.image.$item&&(null===e.image.src&&(e.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",e.image.bgImage=e.css(e.$item,"background-image")),!e.image.bgImage||"none"===e.image.bgImage))}},{key:"canInitParallax",value:function(){return f&&!this.options.disableParallax()}},{key:"init",value:function(){var e,t=this,n={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"},o={pointerEvents:"none",transformStyle:"preserve-3d",backfaceVisibility:"hidden",willChange:"transform,opacity"};t.options.keepImg||((e=t.$item.getAttribute("style"))&&t.$item.setAttribute("data-jarallax-original-styles",e),!t.image.useImgTag||(e=t.image.$item.getAttribute("style"))&&t.image.$item.setAttribute("data-jarallax-original-styles",e)),"static"===t.css(t.$item,"position")&&t.css(t.$item,{position:"relative"}),"auto"===t.css(t.$item,"z-index")&&t.css(t.$item,{zIndex:0}),t.image.$container=document.createElement("div"),t.css(t.image.$container,n),t.css(t.image.$container,{"z-index":t.options.zIndex}),m&&t.css(t.image.$container,{opacity:.9999}),t.image.$container.setAttribute("id","jarallax-container-".concat(t.instanceID)),t.$item.appendChild(t.image.$container),t.image.useImgTag?o=t.extend({"object-fit":t.options.imgSize,"object-position":t.options.imgPosition,"font-family":"object-fit: ".concat(t.options.imgSize,"; object-position: ").concat(t.options.imgPosition,";"),"max-width":"none"},n,o):(t.image.$item=document.createElement("div"),t.image.src&&(o=t.extend({"background-position":t.options.imgPosition,"background-size":t.options.imgSize,"background-repeat":t.options.imgRepeat,"background-image":t.image.bgImage||'url("'.concat(t.image.src,'")')},n,o))),"opacity"!==t.options.type&&"scale"!==t.options.type&&"scale-opacity"!==t.options.type&&1!==t.options.speed||(t.image.position="absolute"),"fixed"===t.image.position&&(n=function(e){for(var t=[];null!==e.parentElement;)1===(e=e.parentElement).nodeType&&t.push(e);return t}(t.$item).filter((function(e){var t=i.window.getComputedStyle(e);return(e=t["-webkit-transform"]||t["-moz-transform"]||t.transform)&&"none"!==e||/(auto|scroll)/.test(t.overflow+t["overflow-y"]+t["overflow-x"])})),t.image.position=n.length?"absolute":"fixed"),o.position=t.image.position,t.css(t.image.$item,o),t.image.$container.appendChild(t.image.$item),t.onResize(),t.onScroll(!0),t.options.onInit&&t.options.onInit.call(t),"none"!==t.css(t.$item,"background-image")&&t.css(t.$item,{"background-image":"none"}),t.addToParallaxList()}},{key:"addToParallaxList",value:function(){y.push({instance:this}),1===y.length&&i.window.requestAnimationFrame(h)}},{key:"removeFromParallaxList",value:function(){var e=this;y.forEach((function(t,n){t.instance.instanceID===e.instanceID&&y.splice(n,1)}))}},{key:"destroy",value:function(){var e=this;e.removeFromParallaxList();var t,n=e.$item.getAttribute("data-jarallax-original-styles");e.$item.removeAttribute("data-jarallax-original-styles"),n?e.$item.setAttribute("style",n):e.$item.removeAttribute("style"),e.image.useImgTag&&(t=e.image.$item.getAttribute("data-jarallax-original-styles"),e.image.$item.removeAttribute("data-jarallax-original-styles"),t?e.image.$item.setAttribute("style",n):e.image.$item.removeAttribute("style"),e.image.$itemParent&&e.image.$itemParent.appendChild(e.image.$item)),e.$clipStyles&&e.$clipStyles.parentNode.removeChild(e.$clipStyles),e.image.$container&&e.image.$container.parentNode.removeChild(e.image.$container),e.options.onDestroy&&e.options.onDestroy.call(e),delete e.$item.jarallax}},{key:"clipContainer",value:function(){var e,t,n;"fixed"===this.image.position&&(t=(n=(e=this).image.$container.getBoundingClientRect()).width,n=n.height,e.$clipStyles||(e.$clipStyles=document.createElement("style"),e.$clipStyles.setAttribute("type","text/css"),e.$clipStyles.setAttribute("id","jarallax-clip-".concat(e.instanceID)),(document.head||document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles)),n="#jarallax-container-".concat(e.instanceID," {\n            clip: rect(0 ").concat(t,"px ").concat(n,"px 0);\n            clip: rect(0, ").concat(t,"px, ").concat(n,"px, 0);\n            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n        }"),e.$clipStyles.styleSheet?e.$clipStyles.styleSheet.cssText=n:e.$clipStyles.innerHTML=n)}},{key:"coverImage",value:function(){var e,t=this,n=t.image.$container.getBoundingClientRect(),o=n.height,i=t.options.speed,a="scroll"===t.options.type||"scroll-opacity"===t.options.type,r=0,l=o;return a&&(i<0?(r=i*Math.max(o,u),u<o&&(r-=i*(o-u))):r=i*(o+u),1<i?l=Math.abs(r-u):i<0?l=r/i+Math.abs(r):l+=(u-o)*(1-i),r/=2),t.parallaxScrollDistance=r,e=a?(u-l)/2:(o-l)/2,t.css(t.image.$item,{height:"".concat(l,"px"),marginTop:"".concat(e,"px"),left:"fixed"===t.image.position?"".concat(n.left,"px"):"0",width:"".concat(n.width,"px")}),t.options.onCoverImage&&t.options.onCoverImage.call(t),{image:{height:l,marginTop:e},container:n}}},{key:"isVisible",value:function(){return this.isElementInViewport||!1}},{key:"onScroll",value:function(e){var t,n,o,a,r,l,s,c=this,p=c.$item.getBoundingClientRect(),m=p.top,d=p.height,f={},g=p;c.options.elementInViewport&&(g=c.options.elementInViewport.getBoundingClientRect()),c.isElementInViewport=0<=g.bottom&&0<=g.right&&g.top<=u&&g.left<=i.window.innerWidth,(e||c.isElementInViewport)&&(t=Math.max(0,m),n=Math.max(0,d+m),o=Math.max(0,-m),a=Math.max(0,m+d-u),r=Math.max(0,d-(m+d-u)),l=Math.max(0,-m+u-d),g=1-(u-m)/(u+d)*2,e=1,d<u?e=1-(o||a)/d:n<=u?e=n/u:r<=u&&(e=r/u),"opacity"!==c.options.type&&"scale-opacity"!==c.options.type&&"scroll-opacity"!==c.options.type||(f.transform="translate3d(0,0,0)",f.opacity=e),"scale"!==c.options.type&&"scale-opacity"!==c.options.type||(s=1,c.options.speed<0?s-=c.options.speed*e:s+=c.options.speed*(1-e),f.transform="scale(".concat(s,") translate3d(0,0,0)")),"scroll"!==c.options.type&&"scroll-opacity"!==c.options.type||(s=c.parallaxScrollDistance*g,"absolute"===c.image.position&&(s-=m),f.transform="translate3d(0,".concat(s,"px,0)")),c.css(c.image.$item,f),c.options.onScroll&&c.options.onScroll.call(c,{section:p,beforeTop:t,beforeTopEnd:n,afterTop:o,beforeBottom:a,beforeBottomEnd:r,afterBottom:l,visiblePercent:e,fromViewportCenter:g}))}},{key:"onResize",value:function(){this.coverImage(),this.clipContainer()}}])&&s(t.prototype,n),e}();o=function(e,t){for(var n,o=(e=("object"===("undefined"==typeof HTMLElement?"undefined":l(HTMLElement))?e instanceof HTMLElement:e&&"object"===l(e)&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)?[e]:e).length,i=0,a=arguments.length,r=new Array(2<a?a-2:0),s=2;s<a;s++)r[s-2]=arguments[s];for(;i<o;i+=1)if("object"===l(t)||void 0===t?e[i].jarallax||(e[i].jarallax=new v(e[i],t)):e[i].jarallax&&(n=e[i].jarallax[t].apply(e[i].jarallax,r)),void 0!==n)return n;return e};o.constructor=v,t["default"]=o}},t={};function n(o){var i=t[o];return void 0!==i||(i=t[o]={exports:{}},e[o](i,i.exports,n)),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};!function(){"use strict";n.r(o);var e=n(1),t=n.n(e),i=n(2),a=n(8);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l,s=i.window.jarallax;i.window.jarallax=a["default"],i.window.jarallax.noConflict=function(){return i.window.jarallax=s,this},void 0!==i.jQuery&&((e=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];Array.prototype.unshift.call(t,this);var o=a["default"].apply(i.window,t);return"object"!==r(o)?o:this}).constructor=a["default"].constructor,l=i.jQuery.fn.jarallax,i.jQuery.fn.jarallax=e,i.jQuery.fn.jarallax.noConflict=function(){return i.jQuery.fn.jarallax=l,this}),t()((function(){(0,a["default"])(document.querySelectorAll("[data-jarallax]"))}))}()}();
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */