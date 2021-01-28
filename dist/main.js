(()=>{"use strict";var r={402:(r,n,e)=>{e.d(n,{Z:()=>a});var t=e(15),o=e.n(t),A=e(645),i=e.n(A)()(o());i.push([r.id,"* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nhtml {\r\n    font-family: Lato, Verdana, sans-serif;\r\n    font-size: 10 px;\r\n}\r\n\r\n.display-none {\r\n    display: none;\r\n}\r\n\r\n.intro {\r\n    max-width: 1020px;\r\n    height: 100vh;\r\n    background: linear-gradient(to top, rgb(241, 248, 248), rgb(91, 194, 241));\r\n    margin: auto;\r\n    font-family: 'Potta One', cursive;\r\n}\r\n\r\n.logo {\r\n    margin: auto;\r\n}\r\n\r\n.logo > img, .logo-name {\r\n    position: absolute;\r\n    top: 30%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.logo > img {\r\n    width: 200px;\r\n}\r\n\r\n.logo-name {\r\n    color: blue;\r\n    font-size: 90px;\r\n    opacity: 0.5;\r\n    text-align: center;\r\n    text-shadow: 2px 2px 4px rgb(0, 0, 0); \r\n}\r\n\r\n.buttons {\r\n    position: absolute;\r\n    top: 75%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.buttons > button {\r\n    width: 200px;\r\n    height: 40px;\r\n    border-color: cornflowerblue;\r\n    background-color: deepskyblue;\r\n    cursor: pointer;\r\n    font-family: inherit;\r\n    color: blue;\r\n\r\n}\r\n\r\n.wrapper {\r\n    max-width: 1020px;\r\n    height: 100vh;\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.game-screen {                                      /*game screen*/\r\n    background-color: rgb(241, 248, 248);\r\n    flex: 2;\r\n    position: relative;\r\n    background: linear-gradient(to top, rgb(241, 248, 248), rgb(91, 194, 241));\r\n}\r\n\r\n.water {\r\n    height: 100px;\r\n    width: 100%;\r\n    background-color: rgb(73, 187, 240);\r\n    opacity: 0.5;\r\n    position:absolute;\r\n    bottom:0;   \r\n}\r\n\r\n.drop {\r\n    width: 100px;\r\n    height: 100px;\r\n    background-color: rgb(40, 135, 194);\r\n    font-size: 2rem;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    offset-position: 20;\r\n    display: flex;\r\n}\r\n\r\n.sign, .numbers {\r\n    align-self:center;\r\n    font-size: 2rem;\r\n    font-weight: 800;\r\n\r\n}\r\n\r\n.sign {\r\n    justify-content: space-around;\r\n    display: flex;\r\n    flex: 1;\r\n}\r\n\r\n.numbers {\r\n    flex-direction: column;\r\n    flex: 2;\r\n}\r\n\r\n\r\n\r\n.calc-screen {                                          /*clc-screen*/\r\n    background-color: rgb(205, 243, 243);\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.star-ico {\r\n    height: 20px;\r\n    width: 20px;\r\n    margin-left: 10px;\r\n}\r\n\r\n.counter, .lives {\r\n    height: 60px;\r\n    width: 70%;\r\n    background-color:rgb(233, 231, 221);\r\n    border: 3px solid white;\r\n    text-align: center;\r\n}\r\n\r\n.counter {\r\n    margin: 0 auto;\r\n    border-bottom-left-radius: 30px;\r\n    border-bottom-right-radius: 30px;\r\n    font-size: 1.6rem;\r\n}\r\n\r\n.lives {\r\n    margin: 20px auto;\r\n    border-radius: 30px;\r\n}\r\n\r\n.scores {\r\n    color: tomato;\r\n}\r\n\r\n.heart {\r\n    height: 40px;\r\n    margin-top: 10px;\r\n}\r\n\r\ntable {\r\n    border: 2px solid black;\r\n    margin: 20px auto;\r\n    border-radius: 5px;\r\n    background-color:burlywood;\r\n}\r\n\r\n.display {\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    background-color:rgb(233, 231, 221);\r\n    height: 70px;\r\n    font-size: 2.5rem;\r\n    color: rgb(0, 0, 0);\r\n}\r\n\r\ntd {\r\n    border: 2px solid black;\r\n    border-radius: 10%;\r\n    width: 50px;\r\n    height: 50px;\r\n    text-align: center;\r\n    user-select: none;\r\n}\r\n\r\n.numButton {\r\n    font-size: 1.6rem;\r\n    font-weight: 700;\r\n}\r\n\r\n.numButton, .operator {\r\n    background-color: rgb(250, 245, 245);\r\n}\r\n\r\n.numButton:hover, .operator:hover {\r\n    cursor: pointer;\r\n    background-color:rgb(248, 201, 201);\r\n    transition: 0.5s;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n","",{version:3,sources:["webpack://./src/css/style.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,sCAAsC;IACtC,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,0EAA0E;IAC1E,YAAY;IACZ,iCAAiC;AACrC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,qCAAqC;AACzC;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,4BAA4B;IAC5B,6BAA6B;IAC7B,eAAe;IACf,oBAAoB;IACpB,WAAW;;AAEf;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,YAAY;IACZ,aAAa;IACb,8BAA8B;AAClC;;AAEA,oDAAoD,cAAc;IAC9D,oCAAoC;IACpC,OAAO;IACP,kBAAkB;IAClB,0EAA0E;AAC9E;;AAEA;IACI,aAAa;IACb,WAAW;IACX,mCAAmC;IACnC,YAAY;IACZ,iBAAiB;IACjB,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mCAAmC;IACnC,eAAe;IACf,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,gBAAgB;;AAEpB;;AAEA;IACI,6BAA6B;IAC7B,aAAa;IACb,OAAO;AACX;;AAEA;IACI,sBAAsB;IACtB,OAAO;AACX;;;;AAIA,wDAAwD,aAAa;IACjE,oCAAoC;IACpC,OAAO;IACP,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,mCAAmC;IACnC,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,+BAA+B;IAC/B,gCAAgC;IAChC,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,kBAAkB;IAClB,0BAA0B;AAC9B;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,kBAAkB;IAClB,mCAAmC;IACnC,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,eAAe;IACf,mCAAmC;IACnC,gBAAgB;AACpB",sourcesContent:["* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nhtml {\r\n    font-family: Lato, Verdana, sans-serif;\r\n    font-size: 10 px;\r\n}\r\n\r\n.display-none {\r\n    display: none;\r\n}\r\n\r\n.intro {\r\n    max-width: 1020px;\r\n    height: 100vh;\r\n    background: linear-gradient(to top, rgb(241, 248, 248), rgb(91, 194, 241));\r\n    margin: auto;\r\n    font-family: 'Potta One', cursive;\r\n}\r\n\r\n.logo {\r\n    margin: auto;\r\n}\r\n\r\n.logo > img, .logo-name {\r\n    position: absolute;\r\n    top: 30%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.logo > img {\r\n    width: 200px;\r\n}\r\n\r\n.logo-name {\r\n    color: blue;\r\n    font-size: 90px;\r\n    opacity: 0.5;\r\n    text-align: center;\r\n    text-shadow: 2px 2px 4px rgb(0, 0, 0); \r\n}\r\n\r\n.buttons {\r\n    position: absolute;\r\n    top: 75%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.buttons > button {\r\n    width: 200px;\r\n    height: 40px;\r\n    border-color: cornflowerblue;\r\n    background-color: deepskyblue;\r\n    cursor: pointer;\r\n    font-family: inherit;\r\n    color: blue;\r\n\r\n}\r\n\r\n.wrapper {\r\n    max-width: 1020px;\r\n    height: 100vh;\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.game-screen {                                      /*game screen*/\r\n    background-color: rgb(241, 248, 248);\r\n    flex: 2;\r\n    position: relative;\r\n    background: linear-gradient(to top, rgb(241, 248, 248), rgb(91, 194, 241));\r\n}\r\n\r\n.water {\r\n    height: 100px;\r\n    width: 100%;\r\n    background-color: rgb(73, 187, 240);\r\n    opacity: 0.5;\r\n    position:absolute;\r\n    bottom:0;   \r\n}\r\n\r\n.drop {\r\n    width: 100px;\r\n    height: 100px;\r\n    background-color: rgb(40, 135, 194);\r\n    font-size: 2rem;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    offset-position: 20;\r\n    display: flex;\r\n}\r\n\r\n.sign, .numbers {\r\n    align-self:center;\r\n    font-size: 2rem;\r\n    font-weight: 800;\r\n\r\n}\r\n\r\n.sign {\r\n    justify-content: space-around;\r\n    display: flex;\r\n    flex: 1;\r\n}\r\n\r\n.numbers {\r\n    flex-direction: column;\r\n    flex: 2;\r\n}\r\n\r\n\r\n\r\n.calc-screen {                                          /*clc-screen*/\r\n    background-color: rgb(205, 243, 243);\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.star-ico {\r\n    height: 20px;\r\n    width: 20px;\r\n    margin-left: 10px;\r\n}\r\n\r\n.counter, .lives {\r\n    height: 60px;\r\n    width: 70%;\r\n    background-color:rgb(233, 231, 221);\r\n    border: 3px solid white;\r\n    text-align: center;\r\n}\r\n\r\n.counter {\r\n    margin: 0 auto;\r\n    border-bottom-left-radius: 30px;\r\n    border-bottom-right-radius: 30px;\r\n    font-size: 1.6rem;\r\n}\r\n\r\n.lives {\r\n    margin: 20px auto;\r\n    border-radius: 30px;\r\n}\r\n\r\n.scores {\r\n    color: tomato;\r\n}\r\n\r\n.heart {\r\n    height: 40px;\r\n    margin-top: 10px;\r\n}\r\n\r\ntable {\r\n    border: 2px solid black;\r\n    margin: 20px auto;\r\n    border-radius: 5px;\r\n    background-color:burlywood;\r\n}\r\n\r\n.display {\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    background-color:rgb(233, 231, 221);\r\n    height: 70px;\r\n    font-size: 2.5rem;\r\n    color: rgb(0, 0, 0);\r\n}\r\n\r\ntd {\r\n    border: 2px solid black;\r\n    border-radius: 10%;\r\n    width: 50px;\r\n    height: 50px;\r\n    text-align: center;\r\n    user-select: none;\r\n}\r\n\r\n.numButton {\r\n    font-size: 1.6rem;\r\n    font-weight: 700;\r\n}\r\n\r\n.numButton, .operator {\r\n    background-color: rgb(250, 245, 245);\r\n}\r\n\r\n.numButton:hover, .operator:hover {\r\n    cursor: pointer;\r\n    background-color:rgb(248, 201, 201);\r\n    transition: 0.5s;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n"],sourceRoot:""}]);const a=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e=r(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(r,e,t){"string"==typeof r&&(r=[[null,r,""]]);var o={};if(t)for(var A=0;A<this.length;A++){var i=this[A][0];null!=i&&(o[i]=!0)}for(var a=0;a<r.length;a++){var c=[].concat(r[a]);t&&o[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),n.push(c))}},n}},15:r=>{function n(r,n){(null==n||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}r.exports=function(r){var e,t,o=(t=4,function(r){if(Array.isArray(r))return r}(e=r)||function(r,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var e=[],t=!0,o=!1,A=void 0;try{for(var i,a=r[Symbol.iterator]();!(t=(i=a.next()).done)&&(e.push(i.value),!n||e.length!==n);t=!0);}catch(r){o=!0,A=r}finally{try{t||null==a.return||a.return()}finally{if(o)throw A}}return e}}(e,t)||function(r,e){if(r){if("string"==typeof r)return n(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(r,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),A=o[1],i=o[3];if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),l="/*# ".concat(c," */"),s=i.sources.map((function(r){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(r," */")}));return[A].concat(s).concat([l]).join("\n")}return[A].join("\n")}},379:(r,n,e)=>{var t,o=function(){var r={};return function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}r[n]=e}return r[n]}}(),A=[];function i(r){for(var n=-1,e=0;e<A.length;e++)if(A[e].identifier===r){n=e;break}return n}function a(r,n){for(var e={},t=[],o=0;o<r.length;o++){var a=r[o],c=n.base?a[0]+n.base:a[0],l=e[c]||0,s="".concat(c," ").concat(l);e[c]=l+1;var u=i(s),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(A[u].references++,A[u].updater(d)):A.push({identifier:s,updater:C(d,n),references:1}),t.push(s)}return t}function c(r){var n=document.createElement("style"),t=r.attributes||{};if(void 0===t.nonce){var A=e.nc;A&&(t.nonce=A)}if(Object.keys(t).forEach((function(r){n.setAttribute(r,t[r])})),"function"==typeof r.insert)r.insert(n);else{var i=o(r.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var l,s=(l=[],function(r,n){return l[r]=n,l.filter(Boolean).join("\n")});function u(r,n,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(r.styleSheet)r.styleSheet.cssText=s(n,o);else{var A=document.createTextNode(o),i=r.childNodes;i[n]&&r.removeChild(i[n]),i.length?r.insertBefore(A,i[n]):r.appendChild(A)}}function d(r,n,e){var t=e.css,o=e.media,A=e.sourceMap;if(o?r.setAttribute("media",o):r.removeAttribute("media"),A&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}var p=null,f=0;function C(r,n){var e,t,o;if(n.singleton){var A=f++;e=p||(p=c(n)),t=u.bind(null,e,A,!1),o=u.bind(null,e,A,!0)}else e=c(n),t=d.bind(null,e,n),o=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)};return t(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;t(r=n)}else o()}}r.exports=function(r,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=a(r=r||[],n);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var t=0;t<e.length;t++){var o=i(e[t]);A[o].references--}for(var c=a(r,n),l=0;l<e.length;l++){var s=i(e[l]);0===A[s].references&&(A[s].updater(),A.splice(s,1))}e=c}}}}},n={};function e(t){if(n[t])return n[t].exports;var o=n[t]={id:t,exports:{}};return r[t](o,o.exports,e),o.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{let r=document.querySelector(".display");const n=document.querySelectorAll(".numButton"),t=document.querySelectorAll(".operator");let o;const A=document.querySelector(".game-screen");let i=Math.floor(Math.random()*Math.floor(99)),a=Math.floor(Math.random()*Math.floor(99));const c=["+","-","*","/"][Math.floor(Math.random()*Math.floor(4))];console.log(function(){const r=document.createElement("div");r.classList.add("drop");const n=document.createElement("div");n.classList.add("sign"),n.innerHTML=c;const e=document.createElement("div");e.classList.add("numbers");const t=document.createElement("div");t.classList.add("firstNum"),t.innerHTML=i;const o=document.createElement("div");return o.classList.add("secondNum"),o.innerHTML=a,A.prepend(r),r.prepend(n),r.append(e),e.append(t),e.append(o),"*"===c?i*a:"/"===c?i/a:"+"===c?i+a:i-a}());var l=e(379),s=e.n(l),u=e(402);s()(u.Z,{insert:"head",singleton:!1}),u.Z.locals;const d=document.querySelector(".intro-button"),p=document.querySelector(".start-button"),f=document.querySelector(".intro"),C=document.querySelector(".game");document.querySelector(".display"),document.querySelectorAll(".numButton"),document.querySelectorAll(".operator"),d.addEventListener("click",console.log("DEMO")),p.addEventListener("click",(function(){f.classList.add("display-none"),C.classList.remove("display-none"),n.forEach((n=>{n.addEventListener("click",(function(){if(o){if(o>99)return;r.innerHTML+=n.innerHTML,o=r.innerHTML}else r.innerHTML=n.innerHTML,o=n.innerHTML}))})),window.addEventListener("keydown",(function(n){if(parseInt(n.key))if(console.log(n,n.key,typeof parseInt(n.key)),o){if(o>99999999)return;r.innerHTML+=n.key,o=r.innerHTML}else r.innerHTML=n.key,o=n.key})),t.forEach((n=>{n.addEventListener("click",(function(){"Delete"===n.innerHTML?(o=void 0,r.innerHTML=""):"Clear"===n.innerHTML&&(r.innerHTML=o.substring(0,o.length-1),o=r.innerHTML)}))}))}))})()})();
//# sourceMappingURL=main.js.map