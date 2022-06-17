(()=>{"use strict";var e={558:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),i=n.n(o),r=n(645),s=n.n(r)()(i());s.push([e.id,"#box {\n    position: absolute;\n    top: 20%;\n    left: 40%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 1em;\n    width: 28em;\n    height: 20em;\n    color: white;\n    gap: 2em;\n    text-shadow: 1px 1px 2px black;\n    box-shadow: 1px 1px 10px rgba(0, 0, 0, 1);\n}\n\n#loading {\n    position: absolute;\n    top: 35%;\n    left: 40%;\n    color: white;\n    text-shadow: 1px 1px 2px black;\n}\n\n#boxTop {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#boxCity {\n    display: flex;\n    gap: 0.5em;\n    align-items: center;\n}\n\n#boxCity img {\n    width: 2.5em;\n    height: 2em;\n    box-shadow: 2px 2px 2px black;\n}\n\n#boxCity h2 {\n    font-size: 2.5em;\n}\n\n#tempBox, #minBox, #maxBox, #sunriseBox, #sunsetBox {\n    display: flex;\n    align-items: center;\n}\n\n#midLeft {\n    display: flex;\n    flex-direction: column;\n    gap: 0.2em;\n}\n\n#sunriseBox, #sunsetBox {\n    gap: 0.2em;\n}\n\n#boxTemps, #boxMid {\n    display: flex;\n    font-size: 2em;\n    gap: 1em;\n}\n\n.icon {\n    width: 1.1em;\n    height: 1.1em;\n}\n\n#tempBox img {\n    width: 3em;\n}",""]);const a=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&s[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},s=[],a=0;a<e.length;a++){var c=e[a],d=o.base?c[0]+o.base:c[0],l=r[d]||0,u="".concat(d," ").concat(l);r[d]=l+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=i(m,o);o.byIndex=a,t.splice(a,0,{identifier:u,updater:h,references:1})}s.push(u)}return s}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=o(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var a=n(r[s]);t[a].references--}for(var c=o(e,i),d=0;d<r.length;d++){var l=n(r[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),i=n.n(o),r=n(569),s=n.n(r),a=n(565),c=n.n(a),d=n(216),l=n.n(d),u=n(589),p=n.n(u),m=n(558),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const x=document.querySelector("#container"),g=document.querySelector("#search"),f=document.querySelector("#submit"),v=document.querySelector("#unit");v.addEventListener("click",(()=>{"°F"===v.textContent?(v.textContent="°C",v.value="C"):(v.textContent="°F",v.value="F")})),f.addEventListener("click",(()=>{if(document.querySelector("#box")&&document.querySelector("#box").remove(),""===g.value)g.value="You gotta type a city here, bro";else if("You gotta type a city here, bro"===g.value)g.value="I mean it, bro... Type it.";else if("I mean it, bro... Type it."===g.value)g.value="Last warning";else if("Last warning"===g.value){document.querySelector("body").remove();const e=document.createElement("body"),t=document.querySelector("html");e.textContent="You broke it. Congrats... Was it worth it?",e.style.backgroundColor="white",t.appendChild(e)}else(async(e,t)=>{(()=>{const e=document.createElement("h1");e.setAttribute("id","loading"),e.textContent="Grabbing the info... Hold on...",x.appendChild(e)})();const n=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=7116002a174a015421ce618f1e16b246`),o=await n.json(),i=`https://countryflagsapi.com/png/${o.sys.country}`;o.flag=i,o.unit=t,o&&((e=>{const t=document.createElement("div");t.setAttribute("id","box");const n=document.createElement("div");n.setAttribute("id","boxTop");const o=document.createElement("div");o.setAttribute("id","boxCity");const i=document.createElement("div");i.setAttribute("id","tempBox");const r=document.createElement("div");r.setAttribute("id","boxTemps");const s=document.createElement("div");s.setAttribute("id","minBox");const a=document.createElement("div");a.setAttribute("id","maxBox");const c=document.createElement("div");c.setAttribute("id","boxMid");const d=document.createElement("div");d.setAttribute("id","midLeft");const l=document.createElement("div");l.setAttribute("id","sunriseBox");const u=document.createElement("div");u.setAttribute("id","sunsetBox");const p=document.createElement("div");p.setAttribute("id","midRight");const m=document.createElement("img");m.setAttribute("src",e.flag);const h=document.createElement("h2");h.textContent=e.name;const g=document.createElement("img");g.src="./Assets/Icons/thermometer.png";const f=document.createElement("h1"),v=document.createElement("h2"),b=e.weather[0].description.toString();v.textContent=`Mainly ${b}`;const C=document.createElement("img");C.src="./Assets/Icons/thermometer-low.png",C.setAttribute("class","icon");const y=document.createElement("p"),E=document.createElement("img");E.src="./Assets/Icons/thermometer-high.png",E.setAttribute("class","icon");const w=document.createElement("p"),A=document.createElement("p"),F=document.createElement("p");F.textContent=`Humidity: ${e.main.humidity}%`;const k=document.createElement("p"),I=e.main.pressure.toString().slice(0,1)+"."+e.main.pressure.toString().slice(1);k.textContent=`Pressure: ${I}`;const S=new Date(1e3*e.sys.sunrise),$=("0"+S.getHours()).slice(-2),T=("0"+S.getMinutes()).slice(-2),B=document.createElement("img");B.src="./Assets/Icons/weather-sunset-up.png",B.setAttribute("class","icon");const M=document.createElement("p");M.textContent=`${$}:${T}`;const j=new Date(1e3*e.sys.sunset),q=("0"+j.getHours()).slice(-2),L=("0"+j.getMinutes()).slice(-2),_=document.createElement("img");_.src="./Assets/Icons/weather-sunset-down.png",_.setAttribute("class","icon");const H=document.createElement("p");switch(H.textContent=`${q}:${L}`,e.unit){case"F":f.textContent=`${(1.8*(e.main.temp-273.15)+32).toFixed(2)} °F`,y.textContent=`${(1.8*(e.main.temp_min-273.15)+32).toFixed(2)} °F`,w.textContent=`${(1.8*(e.main.temp_max-273.15)+32).toFixed(2)} °F`,A.textContent=`Feels like: ${(1.8*(e.main.feels_like-273.15)+32).toFixed(2)} °F`;break;case"C":f.textContent=`${(e.main.temp-273.15).toFixed(2)} °C`,y.textContent=`${(e.main.temp_min-273.15).toFixed(2)} °C`,w.textContent=`${(e.main.temp_max-273.15).toFixed(2)} °C`,A.textContent=`Feels like: ${(e.main.feels_like-273.15).toFixed(2)} °C`}console.log(b.includes("cloud")),console.log(b.includes("clear")),b.includes("cloud")?t.style.background="url('./Assets/Images/clouds.jpg')":b.includes("clear")?t.style.background="url('./Assets/Images/clear.jpg')":b.includes("rain")?t.style.background="url('./Assets/Images/rain.jpg')":b.includes("thunderstorm")?t.style.background="url('./Assets/Images/thunderstorm.jpg')":b.includes("snow")?t.style.background="url('./Assets/Images/snow.jpg')":b.includes("mist")&&(t.style.background="url('./Assets/Images/mist.jpg')"),o.appendChild(m),o.appendChild(h),i.appendChild(g),i.appendChild(f),s.appendChild(C),s.appendChild(y),a.appendChild(E),a.appendChild(w),r.appendChild(s),r.appendChild(a),n.appendChild(o),n.appendChild(i),n.appendChild(v),n.appendChild(r),d.appendChild(A),d.appendChild(F),d.appendChild(k),l.appendChild(B),l.appendChild(M),u.appendChild(_),u.appendChild(H),p.appendChild(l),p.appendChild(u),c.appendChild(d),c.appendChild(p),t.appendChild(n),t.appendChild(c),x.appendChild(t)})(o),x.removeChild(document.querySelector("#loading")))})(g.value,v.value),g.value=""}))})()})();