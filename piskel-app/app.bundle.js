!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=22)}([function(e,t){e.exports=(e,t,n,r)=>{const i=Math.floor(t/e.pixelSize),a=Math.floor(n/e.pixelSize),s=a*e.cols+i;return s!==r&&i>=0&&a>=0&&i<e.cols&&a<e.rows?{indx:s,x:i,y:a}:{indx:void 0,x:void 0,y:void 0}}},function(e,t){e.exports=(e,t,n)=>t<0||n<0||t>=e.cols||n>=e.rows},function(e,t,n){e.exports=n.p+"de476d8e412c6a57ee46315d03cd60ec.png"},function(e,t,n){e.exports=n.p+"dc0c3d772410a5bb267cba4a6424ec24.png"},function(e,t,n){e.exports=n.p+"a15754a34f7f6bc40aa68c3c7d88a5a7.png"},function(e,t,n){e.exports=n.p+"0b08562cf2ce3321b7576170efd4ce20.png"},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(s=r,o=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(c," */")),a=r.sources.map(function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")});return[n].concat(a).concat([i]).join("\n")}var s,o,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var o=e[s];null!=o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="(".concat(o[2],") and (").concat(n,")")),t.push(o))}},t}},function(e,t,n){var r,i,a={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),o=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),c=null,l=0,d=[],p=n(13);function u(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=a[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(b(r.parts[s],t))}else{var o=[];for(s=0;s<r.parts.length;s++)o.push(b(r.parts[s],t));a[r.id]={id:r.id,refs:1,parts:o}}}}function f(e,t){for(var n=[],r={},i=0;i<e.length;i++){var a=e[i],s=t.base?a[0]+t.base:a[0],o={css:a[1],media:a[2],sourceMap:a[3]};r[s]?r[s].parts.push(o):n.push(r[s]={id:s,parts:[o]})}return n}function m(e,t){var n=o(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),d.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=o(e.insertAt.before,n);n.insertBefore(t,i)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function g(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return v(t,e.attrs),m(e,t),t}function v(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,r,i,a;if(t.transform&&e.css){if(!(a="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=a}if(t.singleton){var s=l++;n=c||(c=g(t)),r=w.bind(null,n,s,!1),i=w.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),m(e,t),t}(t),r=function(e,t,n){var r=n.css,i=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||a)&&(r=p(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(s),o&&URL.revokeObjectURL(o)}.bind(null,n,t),i=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){h(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=f(e,t);return u(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var s=n[i];(o=a[s.id]).refs--,r.push(o)}e&&u(f(e,t),t);for(i=0;i<r.length;i++){var o;if(0===(o=r[i]).refs){for(var c=0;c<o.parts.length;c++)o.parts[c]();delete a[o.id]}}}};var x,y=(x=[],function(e,t){return x[e]=t,x.filter(Boolean).join("\n")});function w(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var a=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}},function(e,t,n){e.exports='<header>\n  <h1>Piskel-Clone</h1>\n</header>\n<main>\n  <div class="tools-wrapper" id="tools-wrapper">\n    <ul class="tool-picker">\n      <li id="pencil">\n        <img src="'+n(2)+'" alt="pencil-icon" class="tool-icon">\n        <span>(P)</span>\n      </li>\n      <li id="bucket">\n        <img src="'+n(3)+'" alt="bucket-icon" class="tool-icon">\n        <span>(B)</span>\n      </li>\n      <li id="eraser">\n        <img src="'+n(4)+'" alt="eraser-icon" class="tool-icon">\n        <span>(E)</span>\n      </li>\n      <li id="picker">\n        <img src="'+n(5)+'" alt="pick-icon" class="tool-icon">\n        <span>(C)</span>\n      </li>\n      <li id="reset">\n        <img src="'+n(14)+'" alt="reset-icon" class="tool-icon">\n        <span>(R)</span>\n      </li>\n    </ul>\n    <ul class="color-picker">\n      <li id="current">\n        <input type="color" id="color-selector">\n      </li>\n      <li id="prev">\n        <div class="color-circle" id="prev-indicator"></div>\n      </li>\n      <li class="red" id="red">\n        <div class="color-circle"></div>\n      </li>\n      <li class="blue" id="blue">\n        <div class="color-circle"></div>\n      </li>\n    </ul>\n  </div>\n  <div class="canvas-wrapper" id="canvas-wrapper">\n    <div class="palette-background" id="palette-background">\n      <canvas class="palette" id="palette" width="512" height="512">\n        \x3c!-- fallback contect --\x3e\n        <p>canvas is not supported :(</p>\n      </canvas>\n    </div>\n    <div class="size-manager" id="size-manager">\n      <div id="button-wrapper">\n        <div><span>Canvas size:</span></div>\n        <div class="size-button" id="size32"> 32x32</div>\n        <div class="size-button size-button-selected" id="size64">64x64</div>\n        <div class="size-button" id="size128">128x128</div>\n      </div>\n      <span class= "coordinats" id="coordinats">[0, 0]</span>\n    </div>\n  </div>\n  <div class="preview-wrapper">\n    <div class="preview-box">\n      <h3>preview</h3>\n      <div class="preview-img-wrapper">\n        <img id="preview" alt="preview" width="250" height="250">\n      </div>\n      <br>\n      <div class="fps-range-wrapper" id="fps-rate-wrapper">\n        <span class="fps-indicator" id="fps-indicator">8 fps</span>\n        <input class="fps-range" id="fps-range" type="range" min="1" max="24" value="8">\n      </div>\n      <div class="frame-rate-wrapper" id="fps-wrapper">\n        <div class="fps-button" id="4fps">4fps</div>\n        <div class="fps-button" id="8fps">8fps</div>\n        <div class="fps-button" id="16fps">16fps</div>\n      </div>\n    </div>\n    <div class="button-wrapper">\n      <div class="play button" id="play">\n        <span>Play (A)</span>\n      </div>\n      <div class="fullscreen button" id="fullscreen">\n        <span>Full Screen (F)</span>\n      </div>\n      <div class="load button" id="load">\n        <span>Load .piscelc (L)</span>\n      </div>\n      <div class="save button" id="save">\n        <span>Save .piscelc (S)</span>\n      </div>\n      <div class="local-load button" id="local-load">\n        <span>from LocalStorage (O)</span>\n      </div>\n      <div class="local-save button" id="local-save">\n        <span>to LocalStorage (T)</span>\n      </div>\n        <input type="file" name="file" class="open-file-button" id="open-file">\n      </div>\n    </div>\n  </div>\n</main>\n'},function(e,t,n){e.exports='<div class="frame-control" id="frame-control">\r\n    <div class="new frame" id="new-frame">\r\n      <img src="'+n(15)+'" alt="new">\r\n      <span>new frame</span>\r\n    </div>\r\n</div>\r\n'},function(e,t){e.exports={COLORS:{black:"#000000",gray:"#404040",red:"#FF0000",blue:"#0000CC",white:"#FFFFFF",transparent:"#00000000",selectedTool:"rgb(219, 219, 219)"},RESOLUTIONS:{low:{cols:32,rows:32},medium:{cols:64,rows:64},high:{cols:128,rows:128}}}},function(e,t,n){var r=n(12);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(7)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(6)(!1)).push([e.i,"* {\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n  margin: 0px;\n  padding: 0px;\n  user-select: none; }\n\nbody {\n  background: #f0f0f0;\n  color: black; }\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 5vh;\n  -webkit-box-shadow: 3px 4px 8px -2px #545454;\n  -moz-box-shadow: 3px 4px 8px -2px #545454;\n  box-shadow: 3px 4px 8px -2px #545454;\n  background: white; }\n\nmain {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-content: center;\n  margin-top: 3.5vh; }\n\n.tools-wrapper {\n  margin: 0vh 1vw; }\n\n.palette-background {\n  box-sizing: content-box;\n  position: relative;\n  text-align: center;\n  height: 512px;\n  width: 512px;\n  background-color: #b9b9b9;\n  background-image: linear-gradient(45deg, gray 25%, transparent 25%, transparent 74%, gray 75%, gray), linear-gradient(45deg, gray 25%, transparent 25%, transparent 74%, gray 75%, gray);\n  background-size: 32px 32px;\n  background-position: 0px 0px, 16px 16px;\n  border: 2px solid gray; }\n\n.palette {\n  height: 100%; }\n\n.preview-box {\n  padding: 1vh;\n  text-align: center;\n  background: white; }\n\n.preview-img-wrapper {\n  background-color: #b9b9b9;\n  background-image: linear-gradient(45deg, gray 25%, transparent 25%, transparent 74%, gray 75%, gray), linear-gradient(45deg, gray 25%, transparent 25%, transparent 74%, gray 75%, gray);\n  background-size: 32px 32px;\n  background-position: 0px 0px, 16px 16px; }\n\n.preview-box input {\n  width: 80%; }\n\n.preview-box h3 {\n  padding: 0px;\n  margin: 1vw; }\n\n.frame-rate-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  width: 100%;\n  padding: 1vh; }\n\n.fps-range-wrapper {\n  display: flex;\n  justify-content: space-around;\n  padding: 5px 0px; }\n\n.fps-range {\n  width: 190px !important;\n  background: skyblue; }\n\n.fps-button {\n  transition: all 0.07s;\n  text-align: center;\n  background: black;\n  color: #e2e2e2;\n  border-radius: 20px;\n  height: 25px;\n  width: 60px;\n  padding: 3px;\n  cursor: pointer; }\n\n.fps-button:hover {\n  transform: scale(1.08); }\n\n.fps-button:active {\n  transform: scale(1); }\n\n.preview-box, .frame-control, .new-frame, .frame, .button {\n  -webkit-box-shadow: 3px 4px 8px -2px #545454;\n  -moz-box-shadow: 3px 4px 8px -2px #545454;\n  box-shadow: 3px 4px 8px -2px #545454; }\n\n.new {\n  cursor: pointer;\n  height: 70px;\n  font-size: 16pt;\n  padding: 10px;\n  background: #afafaf; }\n\n.new img {\n  display: inline-block;\n  padding-bottom: 8px; }\n\n.new span {\n  display: inline-block;\n  height: 100%;\n  width: 60%; }\n\n.button-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  width: 26vw; }\n\n.button {\n  transition: all, 0.06s;\n  text-align: center;\n  margin: 1.5vh 0.5vw;\n  font-size: 12pt;\n  padding: 1vh;\n  background: skyblue;\n  cursor: pointer; }\n  .button:hover {\n    transform: scale(1.03);\n    background: #6cd5ff; }\n  .button:active {\n    transform: scale(1);\n    background: skyblue; }\n\nh1 {\n  flex-grow: 1;\n  font-size: 3vh;\n  padding-left: 1vw;\n  padding-top: 2px; }\n\n.tool-picker, .color-picker {\n  cursor: pointer;\n  list-style-type: none;\n  color: gray;\n  width: 6.5vw;\n  margin: 0px 6% 15%;\n  background: white;\n  -webkit-box-shadow: 3px 4px 8px -2px #545454;\n  -moz-box-shadow: 3px 4px 8px -2px #545454;\n  box-shadow: 3px 4px 8px -2px #545454; }\n\n.tool-picker li, .color-picker li {\n  padding: 1.5vh 0px 2vh 1vw; }\n\n.tool-picker li:hover, .color-picker li:hover {\n  background: #dbdbdb; }\n\n.tool-picker li:active, .color-picker li:active {\n  color: #141414; }\n\n.tool-picker span, .color-picker span {\n  display: inline-block;\n  margin: 0px 0px 0px 7%; }\n\n.color-circle {\n  display: inline-block;\n  height: 15px;\n  width: 15px;\n  border: 1px solid black;\n  border-radius: 100%; }\n\n.red div {\n  background: red; }\n\n.blue div {\n  background: blue; }\n\n.size-manager {\n  display: flex;\n  justify-content: space-between;\n  text-align: right;\n  color: #494949; }\n  .size-manager div {\n    margin: 3px;\n    display: flex; }\n\n.size-button {\n  background: #c4c4c4;\n  border-radius: 3px;\n  padding: 2px; }\n  .size-button:hover {\n    cursor: pointer;\n    color: black; }\n  .size-button:active {\n    cursor: pointer;\n    color: gray; }\n\n.size-button-selected {\n  color: gray !important; }\n  .size-button-selected:hover {\n    cursor: inherit !important;\n    color: gray !important; }\n\n.coordinats {\n  text-align: right;\n  margin: 3px; }\n\n.open-file-button {\n  display: none; }\n",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(i=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,t,n){e.exports=n.p+"60f305de56a834c2a460134f8c10291d.png"},function(e,t,n){e.exports=n.p+"551d8c76aee47b0bb8adaee8defd04ea.png"},function(e,t,n){var r=n(17);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(7)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(6)(!1);var r=n(18),i=r(n(19)),a=r(n(20)),s=r(n(21));t.push([e.i,".frame-control {\n  width: 155px;\n  min-width: 100px;\n  height: 82vh;\n  padding: 0vh 1vw 0vh 0vh;\n  color: #363636;\n  overflow: scroll;\n  background: white; }\n\n.frame-control::-webkit-scrollbar {\n  width: 12px; }\n\n.frame-control::-webkit-scrollbar-track {\n  background: #bbbbbb; }\n\n.frame-control::-webkit-scrollbar-thumb {\n  background: #555; }\n\n.frame {\n  position: relative;\n  transition: all 0.09s;\n  height: 110px;\n  width: 90%;\n  margin: 1vw;\n  font-size: 18pt;\n  text-align: center;\n  flex-basis: 100%;\n  border: 2px solid #575757;\n  cursor: pointer; }\n\n.frame-preview {\n  background-color: #b9b9b9;\n  background-image: linear-gradient(45deg, gray 25%, transparent 25%, transparent 74%, gray 75%, gray), linear-gradient(45deg, gray 25%, transparent 25%, transparent 74%, gray 75%, gray);\n  background-size: 32px 32px;\n  background-position: 0px 0px, 16px 16px;\n  height: 100%;\n  width: 100%; }\n\n.copy-frame, .frame-number, .move-frame, .delete-frame {\n  position: absolute;\n  height: 30px;\n  width: 30px;\n  border: 1px solid #2b2b2b;\n  padding: 1px;\n  margin: 2px;\n  color: #2e2e2e; }\n\n.copy-frame:hover, .move-frame:hover, .delete-frame:hover {\n  transform: scale(1.1);\n  transform: translateY(); }\n\n.frame-number {\n  top: 0px;\n  left: 0px;\n  background: #afafaf; }\n\n.delete-frame {\n  top: 0px;\n  right: 0px;\n  cursor: pointer;\n  background: url("+i+"), #afafaf;\n  background-repeat: no-repeat;\n  background-size: auto;\n  background-position: center; }\n\n.move-frame {\n  bottom: 0px;\n  left: 0px;\n  cursor: move;\n  background: url("+a+"), #afafaf;\n  background-repeat: no-repeat;\n  background-size: auto;\n  background-position: center; }\n\n.copy-frame {\n  bottom: 0px;\n  right: 0px;\n  cursor: pointer;\n  background: url("+s+"), #afafaf;\n  background-repeat: no-repeat;\n  background-size: auto;\n  background-position: center; }\n\n.new {\n  height: 80px; }\n  .new :hover {\n    transform: scale(1.05); }\n  .new :active {\n    transform: scale(1); }\n",""])},function(e,t,n){"use strict";e.exports=function(e,t){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||t?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){e.exports=n.p+"cc51afdfc4c98b6b41f721212f970778.png"},function(e,t,n){e.exports=n.p+"932714910dfd17b80b017bbe53cc2dbb.png"},function(e,t,n){e.exports=n.p+"119c969dfa6907c79941cdafa4759802.png"},function(e,t,n){"use strict";n.r(t);n(11);var r=n(8),i=n.n(r),a=n(2),s=n.n(a),o=n(3),c=n.n(o),l=n(5),d=n.n(l),p=n(4),u=n.n(p),f=e=>{e.bucketClick=()=>{e.tool="bucket",e.cleanTools(),e.bucket.style.background=e.COLORS.selectedTool,e.canvas.style.cursor=`url(${c.a}) 4 8, auto`},e.pencilClick=()=>{e.tool="pencil",e.cleanTools(),e.color=e.colorSelector.value,e.pencil.style.background=e.COLORS.selectedTool,e.canvas.style.cursor=`url(${s.a}) 0 30, auto`},e.pickerClick=()=>{e.tool="picker",e.cleanTools(),e.picker.style.background=e.COLORS.selectedTool,e.canvas.style.cursor=`url(${d.a}) 0 30, auto`},e.resetClick=()=>{e.animating&&e.play(),e.frames[e.currentFrame].reset()},e.eraserClick=()=>{e.tool="eraser",e.cleanTools(),e.eraser.style.background=e.COLORS.selectedTool,e.canvas.style.cursor=`url(${u.a}) 0 30, auto`,e.color=e.COLORS.transparent},e.canvasClick=t=>{e.animating&&e.play(),e.frames[e.currentFrame].click(t)},e.canvasMouseDown=t=>{e.animating&&(e.play(),t.stopPropagation()),e.frames[e.currentFrame].mouseDown(t)},e.keyHandler=t=>{switch(t.code){case"KeyB":e.bucketClick();break;case"KeyP":e.pencilClick();break;case"KeyE":e.eraserClick();break;case"KeyR":e.resetClick();break;case"KeyA":e.play();break;case"KeyF":e.full();break;case"KeyS":e.frameManager.saveToFile();break;case"KeyL":e.fileInput.click();break;case"KeyO":e.frameManager.loadFromLocalStorage.call(e.frameManager);break;case"KeyT":e.frameManager.saveToLocalStorage.call(e.frameManager)}},e.bodyMouseUp=t=>{"palette"!==t.target.id&&(e.canvas.onmouseup=null,e.canvas.onmousemove=null)},e.selectColor=()=>{e.changeColor(e.colorSelector.value)},e.fpsClick=t=>{t&&("4fps"===t.target.id&&e.setFps(4),"8fps"===t.target.id&&e.setFps(8),"16fps"===t.target.id&&e.setFps(16)),e.animating&&(e.play(),e.play()),e.playPreview()},e.fpsChange=()=>{e.setFps(document.getElementById("fps-range").value)},e.sizeManagerClick=t=>{if("size"===t.target.id.slice(0,4)){const n=+t.target.id.slice(4);n!==e.currentResolution.cols&&(e.frameManager.resizePalette(n),document.getElementById("size32").classList.remove("size-button-selected"),document.getElementById("size64").classList.remove("size-button-selected"),document.getElementById("size128").classList.remove("size-button-selected"),t.target.classList.add("size-button-selected"))}},e.fileInputHandler=t=>{const n=new FileReader;n.onloadend=t=>{if(t.target.readyState===FileReader.DONE){const n=t.target.result,r=JSON.parse(n);e.frameManager.loadProject(r)}},n.readAsBinaryString(t.target.files[0])}},m=e=>{e.cleanTools=()=>{e.bucket.style.background=e.COLORS.transparent,e.pencil.style.background=e.COLORS.transparent,e.picker.style.background=e.COLORS.transparent,e.eraser.style.background=e.COLORS.transparent,e.reset.style.background=e.COLORS.transparent},e.setFps=t=>{e.fps=t,e.animating&&(e.play(),e.play()),e.playPreview(),document.getElementById("fps-range").value=e.fps,document.getElementById("fps-indicator").innerHTML=`${e.fps} fps`},e.fpsChange=()=>{e.setFps(document.getElementById("fps-range").value)},e.changeColor=t=>{if(t!==e.color&&e.newColor!==e.COLORS.transparent){const n=e.color;e.color=t!==e.COLORS.transparent?t:e.COLORS.white,e.prevColor=n}e.prevInd.style.background=e.prevColor,document.getElementById("color-selector").value=e.color},e.animate=()=>{e.currentFrame+=1,e.currentFrame===e.frames.length&&(e.currentFrame=0),e.frames[e.currentFrame].draw()},e.play=()=>{e.animating?(clearInterval(e.animationIndervalId),e.animating=!1,document.getElementById("play").innerText="Play (A)"):(e.animationIndervalId=setInterval(e.animate,1e3/e.fps),e.animating=!0,document.getElementById("play").innerText="Stop (A)")},e.full=()=>{e.fullScreenMode&&window.innerHeight===window.screen.height?(document.exitFullscreen(),e.fullScreenMode=!1):(e.fullScreenMode=!0,document.getElementById("palette-background").requestFullscreen())},e.animatePreview=()=>{document.getElementById("preview").src=e.previews[e.previewFrame],e.previewFrame+=1,e.previewFrame>=e.previews.length&&(e.previewFrame=0)},e.playPreview=()=>{e.previewIndervalId&&clearInterval(e.previewIndervalId),e.previewIndervalId=setInterval(e.animatePreview,1e3/e.fps)},e.stopPreview=()=>{e.previewIndervalId&&clearInterval(e.previewIndervalId)}},h=n(9),g=n.n(h),v=n(0),b=n.n(v),x=n(1),y=n.n(x);class w{constructor(e){this.state=e;const{currentResolution:t,canvas:n,ctx:r,COLORS:i}=e;this.COLORS=i,this.canvas=n,this.ctx=r;const{cols:a,rows:s}=t;this.cols=a,this.rows=s,this.pixelSize=n.width/this.cols,this.pixels=Array(a*s).fill(i.transparent),this.getClickedPixel=b.a,this.outOfRange=y.a;const o=document.createElement("div");o.className="frame",o.id=`frame${e.frames.length}`,o.innerHTML=`\n    <div class="frame-number" id="number">${e.frames.length+1}</div>\n    <img class="frame-preview" id="frame-preview${e.frames.length}"\n         src="" alt="preview"></img>\n\n    <div class="copy-frame" id="copy"></div>\n    `;const c=document.getElementById("frame-control"),l=document.getElementById("new-frame");c.insertBefore(o,l),o.addEventListener("click",e.switchFrame),this.frameNumber=this.state.currentFrame}static clone(e){if(e instanceof w){const t=new w(e.state);return Object.assign(t.pixels,e.pixels),t}throw new Error("Object trying to be cloned is not a Frame")}load(e){this.pixels=e.frames[this.frameNumber],this.cols=e.currentResolution.cols,this.cols=e.currentResolution.rows}resize(e){const t=Array(e**2).fill(this.state.COLORS.transparent);for(let n=0;n<this.cols;n+=1)for(let r=0;r<this.rows;r+=1)this.pixels[n*this.cols+r]&&(t[n*e+r]=this.pixels[n*this.cols+r]);this.pixels=t,this.cols=e,this.rows=e,this.pixelSize=this.state.canvas.width/this.cols,this.draw()}draw(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(let e=0;e<this.cols;e+=1)for(let t=0;t<this.rows;t+=1)this.ctx.fillStyle=this.pixels[e*this.rows+t],this.ctx.strokeStyle=this.pixels[e*this.rows+t],this.ctx.fillRect(this.pixelSize*t,this.pixelSize*e,this.pixelSize,this.pixelSize);this.state.previews[this.frameNumber]=this.canvas.toDataURL(),document.getElementById(`frame-preview${this.frameNumber}`).src=this.canvas.toDataURL()}reset(){this.pixels=this.pixels.map(()=>this.COLORS.transparent),this.draw()}fill(e,t,n){const{color:r}=this.state;y()(this,e,t)||n===this.pixels[t*this.cols+e]||(y()(this,e,t-1)||this.pixels[(t-1)*this.cols+e]!==n||(this.pixels[(t-1)*this.cols+e]=r,this.fill(e,t-1,n)),y()(this,e+1,t)||this.pixels[t*this.cols+(e+1)]!==n||(this.pixels[t*this.cols+(e+1)]=r,this.fill(e+1,t,n)),y()(this,e,t+1)||this.pixels[(t+1)*this.cols+e]!==n||(this.pixels[(t+1)*this.cols+e]=r,this.fill(e,t+1,n)),y()(this,e-1,t)||this.pixels[t*this.cols+e-1]!==n||(this.pixels[t*this.cols+e-1]=r,this.fill(e-1,t,n)))}click(e){const{tool:t,color:n}=this.state,r=this.canvas.getBoundingClientRect(),i=e.clientX-r.left,a=e.clientY-r.top,s=b()(this,i,a),o=s.indx;if(o||0===o){if("pencil"!==t&&"eraser"!==t||(this.pixels[o]=n),"bucket"===t){const e=this.pixels[o];this.pixels[o]=n,this.fill(s.x,s.y,e)}"picker"===t&&this.state.changeColor(this.pixels[o])}this.draw()}mouseDown(e){const{tool:t,color:n}=this.state;if("pencil"===t||"eraser"===t){const t=this.canvas.getBoundingClientRect(),r=e.clientX-t.left,i=e.clientY-t.top;this.pixel=b()(this,r,i),this.pixelIndex=this.pixel.indx,(this.pixelIndex||0===this.pixelIndex)&&(this.initialX=r,this.initialY=i,this.pixels[this.pixelIdex]=n,document.onmousemove=this.onMove.bind(this),document.onmouseup=this.onUp.bind(this))}this.draw()}onMove(e){const{tool:t,color:n}=this.state;if("pencil"===t||"eraser"===t){const t=this.canvas.getBoundingClientRect(),r=e.clientX-t.left,i=e.clientY-t.top,a=b()(this,r,i).indx;(a||0===a)&&(this.pixels[a]=n),this.drawLine(r,i),this.initialX=r,this.initialY=i,this.draw()}}defaultMove(e){const t=this.canvas.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top,i=b()(this,n,r);i.indx&&(this.state.coordinats.innerHTML=`[${i.x}, ${i.y}]`)}drawLine(e,t){const{color:n}=this.state;let r=e,i=Math.abs(r-this.initialX)/this.cols;r>this.initialX&&(i=-i);let a=t,s=Math.abs(a-this.initialY)/this.rows;for(a>this.initialY&&(s=-s);Math.abs(r-this.initialX)>Math.abs(i)||Math.abs(a-this.initialY)>Math.abs(s);){r+=i,a+=s;const e=b()(this,r,a).indx;e&&(this.pixels[e]=n)}}onUp(){document.onmousemove=null,document.onmouseup=null,this.draw()}}n(16);class k{constructor(e){this.state=e;const t=document.createElement("div");t.innerHTML=g.a;const n=document.getElementById("canvas-wrapper");n.parentNode.insertBefore(t,n),this.state.frames=[],this.state.previews=[],this.createNewFrame(),document.getElementById("new-frame").addEventListener("click",this.createNewFrame.bind(this))}loadProject(e){this.cleanProject(),this.state.frames=[],e.frames.forEach(()=>{this.createNewFrame()}),this.state.setFps(e.fps),this.state.previews=[],this.renumerate(),document.getElementById(`size${e.currentResolution.cols}`).click(),this.state.frames.forEach(t=>{t.load(e)}),this.state.frames.forEach(e=>{e.draw()})}getDataToSave(){const e={frames:[]};return this.state.frames.forEach(t=>{e.frames.push(t.pixels)}),e.currentResolution=this.state.currentResolution,e.fps=this.state.fps,JSON.stringify(e)}saveToFile(){const e=this.getDataToSave(),t=document.createElement("a");t.download="animation.piskelc";const n=new Blob([e],{type:"text/plain"});t.href=window.URL.createObjectURL(n),t.click()}saveToLocalStorage(){const e=this.getDataToSave();localStorage.animation=e}loadFromLocalStorage(){if(localStorage.animation){const e=JSON.parse(localStorage.animation);this.loadProject(e)}}cleanProject(){this.a=0;const e=document.getElementById("frame-control");this.state.currentFrame=0,this.state.previewFrame=0;let t=e.firstChild.nextSibling;for(;"new-frame"!==t.id;){const e=t;t=t.nextSibling,e.remove()}}resizePalette(e){this.state.currentResolution={cols:e,rows:e},this.state.frames.forEach(t=>{t.resize(e)})}showCoordinats(e){this.state.frames[this.state.currentFrame].defaultMove(e)}swapFrames(e,t){let n=this.state.frames[e];this.state.frames[e]=this.state.frames[t],this.state.frames[t]=n,n=this.state.previews[e],this.state.previews[e]=this.state.previews[t],this.state.previews[t]=n}static moveDownFrame(e){const t=e.target.parentNode;let n=+t.id.slice(5);t.style["z-index"]=1,document.body.style.cursor="move";const r={x:e.clientX,y:e.clientY};document.onmousemove=function(e){const i={x:e.clientX-r.x,y:e.clientY-r.y};i.y>111&&"new-frame"!==t.nextSibling.id&&(t.parentNode.insertBefore(t,t.nextSibling.nextSibling),r.y=e.clientY,i.y=0,this.swapFrames(n,n+1),n+=1),i.y<-111&&t.previousSibling.previousSibling&&(t.parentNode.insertBefore(t,t.previousSibling),r.y=e.clientY,i.y=0,this.swapFrames(n,n-1),n-=1),t.style.transform=`translateY(${i.y}px)`}.bind(this),document.onmouseup=function(){document.body.style.cursor="inherit",t.style.transform="translateY(0px)",t.style.transform="scale(1)",document.onmousemove=null,document.onmouseup=null,this.state.currentFrame=n,this.renumerate(),this.state.frames[this.state.currentFrame].draw()}.bind(this)}renumerate(){let e=0,t=document.getElementById("frame-control").firstChild.nextSibling;for(;"new-frame"!==t.id;)t.id=`frame${e}`,t.innerHTML=`\n      <div class="frame-number" id="number${e}">${e+1}</div>\n      <div class="delete-frame" id="delete${e}"></div>\n\n      <img class="frame-preview" id="frame-preview${e}"\n          src="${this.state.previews[e]}" alt="preview"></img>\n\n      <div class="move-frame" id="move${e}"></div>\n      <div class="copy-frame" id="copy${e}"></div>\n      `,t.style.border="2px solid gray",t.style["z-index"]=0,document.getElementById(`move${e}`).addEventListener("mousedown",k.moveDownFrame.bind(this)),t.onclick=this.switchFrame.bind(this),t=t.nextSibling,this.state.frames[e].frameNumber=e,e+=1;document.getElementById(`frame${this.state.currentFrame}`)&&(document.getElementById(`frame${this.state.currentFrame}`).style.border="2px solid yellow"),1===this.state.frames.length&&(document.getElementById(`delete${this.state.currentFrame}`).remove(),document.getElementById(`move${this.state.currentFrame}`).remove())}switchFrame(e){if("frame-preview"===e.target.id.slice(0,13)){this.state.animating&&this.state.play();const t=+e.target.id.slice(13);document.getElementById(`frame${t}`).style.border="2px solid yellow",this.state.currentFrame=t}if("number"===e.target.id.slice(0,6)){this.state.animating&&this.state.play();const t=+e.target.id.slice(6);document.getElementById(`frame${t}`).style.border="2px solid yellow",this.state.currentFrame=t}if("delete"===e.target.id.slice(0,6)&&this.state.frames.length>1){const t=+e.target.id.slice(6);this.state.frames.splice(t,1),this.state.previews.splice(t,1),this.state.currentFrame>=this.state.frames.length&&(this.state.currentFrame=this.state.frames.length-1),this.state.previewFrame=0,e.target.parentNode.remove()}if("copy"===e.target.id.slice(0,4)){const t=+e.target.id.slice(4);this.state.frames.splice(t,0,w.clone(this.state.frames[t])),this.state.previews.splice(t,0,this.state.previews[t]),this.state.currentFrame=t+1}this.renumerate(),this.state.frames[this.state.currentFrame].draw()}createNewFrame(){this.state.currentFrame=this.state.frames.length,this.state.frames.push(new w(this.state)),this.state.frames[this.state.currentFrame].draw(),this.renumerate()}}var E=n(10),I=n.n(E);(new class{constructor(e){this.state=e}init(){const{COLORS:e,RESOLUTIONS:t}=I.a,n={COLORS:e,RESOLUTIONS:t,currentResolution:t.medium,tool:"pencil",color:e.black,prevColor:e.gray,currentFrame:0,previewFrame:0,animating:!1,fps:8};this.state=n,m(n),f(n),document.body.innerHTML=i.a,n.canvas=document.getElementById("palette"),n.ctx=n.canvas.getContext("2d"),n.canvas.onclick=n.canvasClick,n.canvas.onmousedown=n.canvasDown,n.canvas.onmousedown=n.canvasMouseDown,n.reset=document.getElementById("reset"),n.reset.onclick=n.resetClick,n.bucket=document.getElementById("bucket"),n.bucket.onclick=n.bucketClick,n.picker=document.getElementById("picker"),n.picker.onclick=n.pickerClick,n.pencil=document.getElementById("pencil"),n.pencil.addEventListener("click",n.pencilClick),n.eraser=document.getElementById("eraser"),n.eraser.addEventListener("click",n.eraserClick),n.canvas.style.cursor=`url(${s.a}) 0 30, auto`,document.addEventListener("keydown",n.keyHandler),n.current=document.getElementById("current"),n.colorSelector=document.getElementById("color-selector"),n.current.onclick=n.selectColor,n.prev=document.getElementById("prev"),n.prev.onclick=function(){n.changeColor(n.prevColor)},n.prevInd=document.getElementById("prev-indicator"),n.red=document.getElementById("red"),n.red.onclick=function(){n.changeColor(n.COLORS.red)},n.blue=document.getElementById("blue"),n.blue.onclick=function(){n.changeColor(n.COLORS.blue)},n.pencil.style.background="rgb(219, 219, 219)",n.changeColor(n.color),n.sizeManager=document.getElementById("size-manager"),n.sizeManager.addEventListener("click",n.sizeManagerClick),document.getElementById("color-selector").addEventListener("change",n.selectColor),n.fileInput=document.getElementById("open-file"),n.fileInput.addEventListener("change",n.fileInputHandler,!1),document.getElementById("play").addEventListener("click",n.play),document.getElementById("fullscreen").addEventListener("click",n.full),document.getElementById("load").addEventListener("click",()=>{n.fileInput.click()}),document.getElementById("save").addEventListener("click",()=>{n.frameManager.saveToFile()}),document.getElementById("fps-wrapper").addEventListener("click",n.fpsClick),document.getElementById("fps-range").addEventListener("input",n.fpsChange),document.addEventListener("mouseup",n.bodyMouseUp),n.frameManager=new k(n),document.getElementById("local-load").addEventListener("click",n.frameManager.loadFromLocalStorage.bind(n.frameManager)),document.getElementById("local-save").addEventListener("click",n.frameManager.saveToLocalStorage.bind(n.frameManager)),n.coordinats=document.getElementById("coordinats");const r={};r.state=n,n.canvas.addEventListener("mousemove",n.frameManager.showCoordinats.bind(r)),n.playPreview()}}).init()}]);
//# sourceMappingURL=app.bundle.js.map