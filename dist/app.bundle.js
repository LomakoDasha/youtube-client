!function(n){var t={};function e(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(r,i,function(t){return n[t]}.bind(null,i));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=8)}([function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[e].concat(o).concat([i]).join("\n")}var a;return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<n.length;i++){var a=n[i];null!=a[0]&&r[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),t.push(a))}},t}},function(n,t,e){var r,i,o={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var r=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[n]=r}return t[n]}}(),c=null,l=0,u=[],p=e(5);function f(n,t){for(var e=0;e<n.length;e++){var r=n[e],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(v(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(v(r.parts[a],t));o[r.id]={id:r.id,refs:1,parts:s}}}}function d(n,t){for(var e=[],r={},i=0;i<n.length;i++){var o=n[i],a=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):e.push(r[a]={id:a,parts:[s]})}return e}function h(n,t){var e=s(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===n.insertAt)r?r.nextSibling?e.insertBefore(t,r.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),u.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(n.insertAt.before,e);e.insertBefore(t,i)}}function m(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=u.indexOf(n);t>=0&&u.splice(t,1)}function g(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return e.nc}();r&&(n.attrs.nonce=r)}return b(t,n.attrs),h(n,t),t}function b(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function v(n,t){var e,r,i,o;if(t.transform&&n.css){if(!(o="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=o}if(t.singleton){var a=l++;e=c||(c=g(t)),r=x.bind(null,e,a,!1),i=x.bind(null,e,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",b(t,n.attrs),h(n,t),t}(t),r=function(n,t,e){var r=e.css,i=e.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=p(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,t),i=function(){m(e),e.href&&URL.revokeObjectURL(e.href)}):(e=g(t),r=function(n,t){var e=t.css,r=t.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),i=function(){m(e)});return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else i()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=d(n,t);return f(e,t),function(n){for(var r=[],i=0;i<e.length;i++){var a=e[i];(s=o[a.id]).refs--,r.push(s)}n&&f(d(n,t),t);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete o[s.id]}}}};var y,w=(y=[],function(n,t){return y[n]=t,y.filter(Boolean).join("\n")});function x(n,t,e,r){var i=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=w(t,i);else{var o=document.createTextNode(i),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(o,a[t]):n.appendChild(o)}}},function(n,t){n.exports='  <form class="search-input-label" for="search-input">\n    <input class="search-input" id="search-input" type="search" placeholder="Type something..."></input>\n    <input class="search-button" id="search-button" type="submit" value="Find" onClick ="GetSelectedItem()">\n  </form>\n'},function(n,t,e){var r=e(4);"string"==typeof r&&(r=[[n.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(1)(r,i);r.locals&&(n.exports=r.locals)},function(n,t,e){(n.exports=e(0)(!1)).push([n.i,"body {\n  margin: 0;\n  padding: 0;\n  background-color:#fff;;\n}\n\n.main__clips {\n  list-style: none;\n  margin-top: 10%;\n  overflow: scroll;\n  /* overflow: hidden; */\n  padding: 0;\n  white-space: nowrap;\n}\n\n.main__clips__item {\n  cursor: grab;\n  overflow: hidden;\n  white-space: normal;\n  display: inline-block;\n  width:  calc(100vw/4.9);\n  height: calc(100vh/2);\n  border: 5px double #8C020C;\n  border-radius: 20px;\n  background-color: #D6D6D6;\n  margin:  calc(1em * 30 / 16);\n}\n\n@keyframes rattle {\n  15% {\n    transform: rotateZ(5deg);\n  }\n  30% {\n    transform: rotateZ(3deg);\n  }\n  40% {\n    transform: rotateZ(1px);\n  }\n  50% {\n    transform: rotateZ(-1px);\n  }\n  65% {\n    transform: rotateZ(-3deg);\n  }\n  100% {\n    transform: rotateZ(-5deg);\n  }\n}\n\n.main__clips__item:hover {\n  animation: rattle 0.2s ease;\n}\n\n.clip-inner {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n\n.clip-inner__image {\n  text-align: center;\n  width: 100%;\n  height: 200px;\n}\n\n.clip-inner__title {\n  text-align: center;\n  font-family: Arial, sans-serif;\n  font-size: 1.2rem;\n  font-weight: 700;\n  background-color: #8C020C;\n  opacity: 0.8;\n  margin: calc(1em * 5 / 16) calc(1em * 10 / 16);\n  padding: calc(1em * 5 / 16) calc(1em * 10 / 16);\n}\n\n.clip-inner__title:hover {\n  background-color: #EA7272;\n  transition: 200ms ease-in-out;\n}\n\n.clip-inner__link {\n  text-decoration: none;\n  color: #fff;\n}\n\n.clip-inner__channel {\n  background: url('http://s1.iconbird.com/ico/1212/267/w24h241355941024businessman3.png') no-repeat scroll 0 50%;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #000;\n  margin: calc(1em * 5 / 16) calc(1em * 15 / 16);\n  padding: calc(1em * 5 / 16) 0 calc(1em * 5 / 16) calc(1em * 60 / 16);\n}\n\n.clip-inner__date {\n  background: url('http://s1.iconbird.com/ico/0912/fugue/w24h241349011746calendarmonth.png') no-repeat scroll 0 50%;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #000;\n  margin: calc(1em * 5 / 16) calc(1em * 15 / 16);\n  padding: calc(1em * 5 / 16) 0 calc(1em * 5 / 16) calc(1em * 60 / 16);\n}\n\n.clip-inner__view-count {\n  background: url('http://s1.iconbird.com/ico/0912/fugue/w24h241349011761eye.png') no-repeat scroll 0 50%;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #000;\n  margin: calc(1em * 5 / 16) calc(1em * 15 / 16);\n  padding: calc(1em * 5 / 16) 0 calc(1em * 5 / 16) calc(1em * 60 / 16);\n}\n\n.clip-inner__description {\n  font-family: Arial, sans-serif;\n  font-size: 0.9rem;\n  font-weight: 400;\n  color: #000;\n  margin:  calc(1em * 5 / 16) calc(1em * 10 / 16);\n}\n\n@media only screen and (max-width: 1280px) {\n  .main__clips__item {\n    width:  calc(100vw/3.5);\n    margin:  calc(1em * 30 / 16);\n  }\n}\n\n@media only screen and (max-width: 800px) {\n  .main__clips__item {\n    width:  calc(100vw/2.4);\n    margin:  calc(1em * 30 / 16);\n  }\n}\n\n@media only screen and (max-width: 480px) {\n  .main__clips__item {\n    width:  calc(100vw/1.2);\n    margin:  calc(1em * 30 / 16);\n  }\n}\n",""])},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,r=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var i,o=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?n:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?e+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(n,t,e){var r=e(7);"string"==typeof r&&(r=[[n.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(1)(r,i);r.locals&&(n.exports=r.locals)},function(n,t,e){(n.exports=e(0)(!1)).push([n.i,".search-input-wrapper {\n  margin-top: 2%;\n  display: flex;\n  justify-content: center;\n}\n\n.search-input-label {\n  margin: 5px 10px;\n  height: 40px;\n  width: 60%;\n  border: 3px solid #C40F1D;\n  border-radius: 2rem;\n  display: flex;\n}\n\n.search-input {\n  width: 80%;\n  font-family: Arial, sans-serif;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #8C020C;\n  border: none;\n  margin-left: calc(1em * 20 / 16);\n  padding-left: calc(1em * 35 / 16);\n  background: url('http://3.bp.blogspot.com/-4w14hQHr5yQ/Tgm6u7KwUkI/AAAAAAAACAI/Hu2poBOPx3g/s25/search.png') no-repeat scroll 0 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n}\n\n.search-button {\n  width: 20%;\n  height: 40px;\n  font-family: Arial, sans-serif;\n  font-size: 1.2rem;\n  font-weight: 700;\n  letter-spacing: 3px;\n  color: #fff;\n  background-color: #C40F1D;\n  border: 5px solid #C40F1D;\n  border-radius: 2rem;\n  display: flex;\n  justify-content: center;\n}\n\n.search-button:hover {\n  opacity: 1.2;\n}\n\n@media only screen and (max-width: 1280px) {\n  .search-input {\n    width: 70%;\n  }\n  .search-button {\n    width: 30%;\n  }\n}\n\n@media only screen and (max-width: 800px) {\n  .search-input-label {\n    width: 70%;\n  }\n\n  .search-input {\n    width: 60%;\n  }\n  .search-button {\n    width: 40%;\n  }\n}\n\n@media only screen and (max-width: 480px) {\n  .search-input-label {\n    width: 80%;\n  }\n\n  .search-input {\n    width: 60%;\n  }\n  .search-button {\n    width: 40%;\n  }\n}\n",""])},function(n,t,e){"use strict";e.r(t);class r{constructor(n){this.state=n}static extractData(n){const t=[];return n.items.forEach((n,e)=>{t[e]={id:`${n.id}`,title:`${n.snippet.title}`,img:`${n.snippet.thumbnails.medium.url}`,channel:`${n.snippet.channelTitle}`,date:`${n.snippet.publishedAt.slice(0,10)}`,view:`${n.statistics.viewCount}`,description:`${n.snippet.description}`},t.push(t[e])}),t.slice(0,15)}async getData(){const{url:n}=this.state,t=await fetch(n),e=await t.json();return r.extractData(e)}}e(3);var i=class{constructor(n){this.data=n}render(){const n=document.createElement("ul");n.className="main__clips",n.innerHTML=this.data.map(n=>`<li class="main__clips__item">\n      <div class="clip-inner">\n        <img  class="clip-inner__image" src="${n.img}" alt="">\n        <h2 class="clip-inner__title"><a class="clip-inner__link" href="https://www.youtube.com/watch?v=${n.id}" target="_blank"> ${n.title} </a></h2>\n        <h3 class="clip-inner__channel"> ${n.channel} </h3>\n        <h3 class="clip-inner__date"> ${n.date} </h3>\n        <h3 class="clip-inner__view-count">${n.view}</h3>\n        <p class="clip-inner__description"> ${n.description} </p>\n      </div>\n    </li>`),document.body.appendChild(n)}};class o{constructor(n){this.id=n}async start(){const n={url:`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBOFwKCUVk7f6mLMO4khwLq_8ehtXsYiJo&id=${this.id}&part=snippet,statistics`};console.log("this.id",this.id),console.log("state.url",n.url);const t=new r(n),e=await t.getData();console.log("data",e),new i(e).render()}}class a{constructor(n){this.state=n}static extractData(n){return n.items.map(n=>n.id.videoId)}async getData(){const{url:n}=this.state,t=await fetch(n),e=await t.json();return a.extractData(e)}}var s=e(2),c=e.n(s);e(6);(new class{async search(){const n=document.createElement("div");n.className="search-input-wrapper",n.innerHTML=c.a,document.body.appendChild(n);const t=document.getElementById("search-button");t.onclick=document.getElementById("search-input").value;const e=t.onclick;this.inputValue="null"!==e?"frontend":e,this.state={url:`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=15&q=${this.inputValue}`};const r=new a(this.state),i=await r.getData();new o(i).start()}}).search()}]);
//# sourceMappingURL=app.bundle.js.map