!function t(e,r,n){function i(s,o){if(!r[s]){if(!e[s]){var h="function"==typeof require&&require;if(!o&&h)return h(s,!0);if(a)return a(s,!0);throw new Error("Cannot find module '"+s+"'")}var f=r[s]={exports:{}};e[s][0].call(f.exports,function(t){var r=e[s][1][t];return i(r?r:t)},f,f.exports,t,e,r,n)}return r[s].exports}for(var a="function"==typeof require&&require,s=0;s<n.length;s++)i(n[s]);return i}({1:[function(t,e,r){(function(n){!function(t){if("object"==typeof r)e.exports=t();else if("function"==typeof define&&define.amd)define(t);else{var i;"undefined"!=typeof window?i=window:"undefined"!=typeof n?i=n:"undefined"!=typeof self&&(i=self),i.Geomicons=t()}}(function(){return function e(r,n,i){function a(o,h){if(!n[o]){if(!r[o]){var f="function"==typeof t&&t;if(!h&&f)return f(o,!0);if(s)return s(o,!0);throw new Error("Cannot find module '"+o+"'")}var u=n[o]={exports:{}};r[o][0].call(u.exports,function(t){var e=r[o][1][t];return a(e?e:t)},u,u.exports,e,r,n,i)}return n[o].exports}for(var s="function"==typeof t&&t,o=0;o<i.length;o++)a(i[o]);return a}({1:[function(t,e){var r=t("./paths"),n=t("./inject"),i={inject:function(t){var e=function(t){return t.replace(/-([a-z])/g,function(t){return t[1].toUpperCase()})};t.length||(t=[t]);for(var i=0;i<t.length;i++){var a=t[i].getAttribute("data-icon");a=e(a);var s=r[a];if(s)n(t[i],s);else{var o=[];for(var h in r)o.push(h);o=o.join(),console.error("No icon found for "+a+".\nGeomicons Open includes the following icons: \n"+o)}}}};e.exports=i},{"./inject":2,"./paths":3}],2:[function(t,e){e.exports=function(t,e){var r,n=document.createElementNS("http://www.w3.org/2000/svg","path");if("svg"==t.tagName)r=t.cloneNode(!0);else{r=document.createElementNS("http://www.w3.org/2000/svg","svg");for(var i=0;i<t.attributes.length;i++)r.setAttribute(t.attributes[i].name,t.attributes[i].value)}r.setAttribute("viewBox","0 0 32 32"),r.setAttribute("style","fill:currentcolor"),n.setAttribute("d",e),r.appendChild(n),t.parentNode.replaceChild(r,t)}},{}],3:[function(t,e){e.exports={bookmark:"M6 2 L26 2 L26 30 L16 24 L6 30 Z  ",calendar:"M2 4 L6 4 L6 2 A2 2 0 0 1 10 2 L10 4 L22 4 L22 2 A2 2 0 0 1 26 2 L26 4 L30 4 L30 10 L2 10 M2 12 L30 12 L30 30 L2 30  ",camera:"M0 6 L8 6 L10 2 L22 2 L24 6 L32 6 L32 28 L0 28 z M9 17 A7 7 0 0 0 23 17 A7 7 0 0 0 9 17  ",chat:"M32 16 A16 12 0 0 0 0 16 A16 12 0 0 0 16 28 L18 28 C20 30 24 32 28 32 C27 31 26 28 26 25.375 L26 25.375 A16 12 0 0 0 32 16  ",check:"M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z ",chevronDown:"M1 12 L16 26 L31 12 L27 8 L16 18 L5 8 z ",chevronLeft:"M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z ",chevronRight:"M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z ",chevronUp:"M1 20 L16 6 L31 20 L27 24 L16 14 L5 24 z ",clock:"M16 0 A16 16 0 0 0 0 16 A16 16 0 0 0 16 32 A16 16 0 0 0 32 16 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 28 16 A12 12 0 0 1 16 28 A12 12 0 0 1 4 16 A12 12 0 0 1 16 4 M14 6 L14 17.25 L22 22 L24.25 18.5 L18 14.75 L18 6z ",close:"M4 8 L8 4 L16 12 L24 4 L28 8 L20 16 L28 24 L24 28 L16 20 L8 28 L4 24 L12 16 z ",cloud:"M7 14 A7 7 0 0 0 0 21 A7 7 0 0 0 7 28 H27 A5 5 0 0 0 32 23 A5 5 0 0 0 27 18 A10 10 0 0 0 28 14 A10 10 0 0 0 18 4 A10 10 0 0 0 8 14 A7 7 0 0 0 7 14  ",cog:"M14 0 H18 L19 6 L20.707 6.707 L26 3.293 L28.707 6 L25.293 11.293 L26 13 L32 14 V18 L26 19 L25.293 20.707 L28.707 26 L26 28.707 L20.707 25.293 L19 26 L18 32 L14 32 L13 26 L11.293 25.293 L6 28.707 L3.293 26 L6.707 20.707 L6 19 L0 18 L0 14 L6 13 L6.707 11.293 L3.293 6 L6 3.293 L11.293 6.707 L13 6 L14 0 z M16 10 A6 6 0 0 0 16 22 A6 6 0 0 0 16 10 ",compose:"M4 4 L16 4 L16 8 L8 8 L8 24 L24 24 L24 16 L28 16 L28 28 L4 28 z M26 2 L30 6 L16 20 L12 20 L12 16 z ",dribbble:"M16 0 A16 16 0 0 0 0 16 A16 16 0 0 0 16 32 A16 16 0 0 0 32 16 A16 16 0 0 0 16 0 M5 11.5 A12 12 0 0 1 11 5 A46 46 0 0 1 13.5 9.25 A46 46 0 0 1 5 11.5 M15 4 A12 12 0 0 1 21.5 5.25 A46 46 0 0 1 17 7.75 A50 50 0 0 0 15 4 M4 16 A50 50 0 0 0 15 13 A46 46 0 0 1 16 15.5 A26 26 0 0 0 6 22.5 A12 12 0 0 1 4 16 M18.5 11.5 A50 50 0 0 0 25 8 A12 12 0 0 1 28 13.75 A26 26 0 0 0 19.75 14.5 A50 50 0 0 0 18.5 11.5 M17 19.5 A46 46 0 0 1 18 28 A12 12 0 0 1 8.75 25.5 A22 22 0 0 1 17 19.5 M20.75 18.25 A22 22 0 0 1 28 17.75 A12 12 0 0 1 22 26.5 A50 50 0 0 0 20.75 18.25 ",expand:"M16 4 L28 4 L28 16 L24 12 L20 16 L16 12 L20 8z M4 16 L8 20 L12 16 L16 20 L12 24 L16 28 L4 28z ",external:"M4 4 L12 4 L12 8 L8 8 L8 24 L24 24 L24 20 L28 20 L28 28 L4 28 z M16 4 L28 4 L28 16 L24 12 L16 20 L12 16 L20 8z ",facebook:"M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z ",file:"M4 2 L4 30 L28 30 L28 10 L20 2 z  ",folder:"M0 4 L0 28 L32 28 L32 8 L16 8 L12 4 z  ",geolocation:"M2 18 L30 2 L14 30 L14 18z ",github:"M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z ",grid:"M2 2 L10 2 L10 10 L2 10z M12 2 L20 2 L20 10 L12 10z M22 2 L30 2 L30 10 L22 10z M2 12 L10 12 L10 20 L2 20z M12 12 L20 12 L20 20 L12 20z M22 12 L30 12 L30 20 L22 20z M2 22 L10 22 L10 30 L2 30z M12 22 L20 22 L20 30 L12 30z M22 22 L30 22 L30 30 L22 30z ",heart:"M0 10 C0 6, 3 2, 8 2 C12 2, 15 5, 16 6 C17 5, 20 2, 24 2 C30 2, 32 6, 32 10 C32 18, 18 29, 16 30 C14 29, 0 18, 0 10  ",home:"M16 0 L32 16 L28 16 L28 30 L20 30 L20 20 L12 20 L12 30 L4 30 L4 16 L0 16 Z ",info:"M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6  ",link:"M0 16 A8 8 0 0 1 8 8 L14 8 A8 8 0 0 1 22 16 L18 16 A4 4 0 0 0 14 12 L8 12 A4 4 0 0 0 4 16 A4 4 0 0 0 8 20 L10 24 L8 24 A8 8 0 0 1 0 16z M22 8 L24 8 A8 8 0 0 1 32 16 A8 8 0 0 1 24 24 L18 24 A8 8 0 0 1 10 16 L14 16 A4 4 0 0 0 18 20 L24 20 A4 4 0 0 0 28 16 A4 4 0 0 0 24 12z  ",list:"M3 8 A3 3 0 0 0 9 8 A3 3 0 0 0 3 8 M12 6 L28 6 L28 10 L12 10z M3 16 A3 3 0 0 0 9 16 A3 3 0 0 0 3 16 M12 14 L28 14 L28 18 L12 18z M3 24 A3 3 0 0 0 9 24 A3 3 0 0 0 3 24 M12 22 L28 22 L28 26 L12 26z ",lock:"M22 16 L22 12 A6 6 0 0 0 10 12 L10 16 z M4 16 L6 16 L6 12 A10 10 0 0 1 26 12 L26 16 L28 16 L28 30 L4 30 z  ",mail:"M0 6 L16 16 L32 6 z M0 9 L0 26 L32 26 L32 9 L16 19 z  ",musicNote:"M0 24 A6 6 0 0 0 12 24 V8 H26 V18 A6 6 0 0 0 18 24 A6 6 0 0 0 30 24 V2 H8 V18 A6 6 0 0 0 0 24 ",next:"M4 4 L24 14 V4 H28 V28 H24 V18 L4 28 z ",no:"M16 0 A16 16 0 0 0 0 16 A16 16 0 0 0 16 32 A16 16 0 0 0 32 16 A16 16 0 0 0 16 0 M16 6 A10 10 0 0 1 20.675 7 L7 20.675 A10 10 0 0 1 6 16 A10 10 0 0 1 16 6 M26 16 A10 10 0 0 1 16 26 A10 10 0 0 1 11.325 25 L25 11.325 A10 10 0 0 1 26 16 ",pause:"M4 4 H12 V28 H4 z M20 4 H28 V28 H20 z ",picture:"M0 4 L0 28 L32 28 L32 4 z M4 24 L10 10 L15 18 L18 14 L24 24z M25 7 A4 4 0 0 1 25 15 A4 4 0 0 1 25 7  ",pin:"M4 12 A12 12 0 0 1 28 12 C28 20, 16 32, 16 32 C16 32, 4 20 4 12 M11 12 A5 5 0 0 0 21 12 A5 5 0 0 0 11 12 Z  ",play:"M4 4 L28 16 L4 28 z ",previous:"M4 4 H8 V14 L28 4 V28 L8 18 V28 H4 z ",refresh:"M16 2 A14 14 0 0 0 2 16 A14 14 0 0 0 16 30 A14 14 0 0 0 26 26 L 23.25 23 A10 10 0 0 1 16 26 A10 10 0 0 1 6 16 A10 10 0 0 1 16 6 A10 10 0 0 1 23.25 9 L19 13 L30 13 L30 2 L26 6 A14 14 0 0 0 16 2 ",repost:"M7 7 L14 14 L9 14 L9 20 L16 20 L16 24 L5 24 L5 14 L0 14 z M16 8 L27 8 L27 18 L32 18 L25 25 L18 18 L23 18 L23 12 L16 12z ",search:"M12 0 A12 12 0 0 0 0 12 A12 12 0 0 0 12 24 A12 12 0 0 0 18.5 22.25 L28 32 L32 28 L22.25 18.5 A12 12 0 0 0 24 12 A12 12 0 0 0 12 0 M12 4 A8 8 0 0 1 12 20 A8 8 0 0 1 12 4  ",shoppingCart:"M0 4 L5 4 L6 8 L30 8 L28 22 L6 22 L3.5 6 L0 6z M10 24 A3 3 0 0 0 10 30 A3 3 0 0 0 10 24 M24 24 A3 3 0 0 0 24 30 A3 3 0 0 0 24 24 ",skull:"M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12 ",speakerVolume:"M2 12 L8 12 L16 6 L16 26 L8 20 L2 20 z M32 16 A16 16 0 0 1 27.25 27.375 L25.25 25.25 A13 13 0 0 0 29 16 A13 13 0 0 0 25.25 6.75 L27.25 4.625 A16 16 0 0 1 32 16 M25 16 A9 9 0 0 1 22.375 22.375 L20.25 20.25 A6 6 0 0 0 22 16 A6 6 0 0 0 20.25 11.75 L22.375 9.625 A9 9 0 0 1 25 16  ",speaker:"M2 12 L8 12 L16 6 L16 26 L8 20 L2 20 z  ",star:"M16 0 L21 11 L32 12 L23 19 L26 31 L16 25 L6 31 L9 19 L0 12 L11 11 ",tag:"M0 18 L16 2 L29 3 L30 16 L14 32 z M20 9 A3 3 0 0 0 26 9 A3 3 0 0 0 20 9  ",trash:"M4 4 L10 4 L12 2 L20 2 L22 4 L28 4 L29 8 L3 8 z M5 10 L27 10 L26 30 L6 30 z  ",triangleDown:"M4 8 H28 L16 26 z ",triangleLeft:"M24 4 V28 L6 16 z ",triangleRight:"M8 4 V28 L26 16 z ",triangleUp:"M4 24 H28 L16 6 z ",twitter:"M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4 ",user:"M10 8 A6 6 0 0 1 22 8 L22 12 A6 6 0 0 1 10 12 z M2 26 C3 23 10 20 14 20 L18 20 C22 20 29 23 30 26 L30 28 L2 28 z ",video:"M0 6 L0 26 L24 26 L24 19 L32 23 L32 9 L24 13 L24 6 z  ",warning:"M15 0 H17 L32 29 L31 30 L1 30 L0 29 z M19 8 L13 8 L14 20 L18 20 z M16 22 A3 3 0 0 0 16 28 A3 3 0 0 0 16 22  "}},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(t,e){!function(){function t(t){var e={r:0,g:0,b:0},n=1,a=!1,o=!1;return"string"==typeof t&&(t=j(t)),"object"==typeof t&&(t.hasOwnProperty("r")&&t.hasOwnProperty("g")&&t.hasOwnProperty("b")?(e=r(t.r,t.g,t.b),a=!0,o="%"===String(t.r).substr(-1)?"prgb":"rgb"):t.hasOwnProperty("h")&&t.hasOwnProperty("s")&&t.hasOwnProperty("v")?(t.s=C(t.s),t.v=C(t.v),e=s(t.h,t.s,t.v),a=!0,o="hsv"):t.hasOwnProperty("h")&&t.hasOwnProperty("s")&&t.hasOwnProperty("l")&&(t.s=C(t.s),t.l=C(t.l),e=i(t.h,t.s,t.l),a=!0,o="hsl"),t.hasOwnProperty("a")&&(n=t.a)),n=_(n),{ok:a,format:t.format||o,r:N(255,T(e.r,0)),g:N(255,T(e.g,0)),b:N(255,T(e.b,0)),a:n}}function r(t,e,r){return{r:255*w(t,255),g:255*w(e,255),b:255*w(r,255)}}function n(t,e,r){t=w(t,255),e=w(e,255),r=w(r,255);var n,i,a=T(t,e,r),s=N(t,e,r),o=(a+s)/2;if(a==s)n=i=0;else{var h=a-s;switch(i=o>.5?h/(2-a-s):h/(a+s),a){case t:n=(e-r)/h+(r>e?6:0);break;case e:n=(r-t)/h+2;break;case r:n=(t-e)/h+4}n/=6}return{h:n,s:i,l:o}}function i(t,e,r){function n(t,e,r){return 0>r&&(r+=1),r>1&&(r-=1),1/6>r?t+6*(e-t)*r:.5>r?e:2/3>r?t+(e-t)*(2/3-r)*6:t}var i,a,s;if(t=w(t,360),e=w(e,100),r=w(r,100),0===e)i=a=s=r;else{var o=.5>r?r*(1+e):r+e-r*e,h=2*r-o;i=n(h,o,t+1/3),a=n(h,o,t),s=n(h,o,t-1/3)}return{r:255*i,g:255*a,b:255*s}}function a(t,e,r){t=w(t,255),e=w(e,255),r=w(r,255);var n,i,a=T(t,e,r),s=N(t,e,r),o=a,h=a-s;if(i=0===a?0:h/a,a==s)n=0;else{switch(a){case t:n=(e-r)/h+(r>e?6:0);break;case e:n=(r-t)/h+2;break;case r:n=(t-e)/h+4}n/=6}return{h:n,s:i,v:o}}function s(t,e,r){t=6*w(t,360),e=w(e,100),r=w(r,100);var n=P.floor(t),i=t-n,a=r*(1-e),s=r*(1-i*e),o=r*(1-(1-i)*e),h=n%6,f=[r,s,a,a,o,r][h],u=[o,r,r,s,a,a][h],c=[a,a,o,r,r,s][h];return{r:255*f,g:255*u,b:255*c}}function o(t,e,r,n){var i=[k(O(t).toString(16)),k(O(e).toString(16)),k(O(r).toString(16))];return n&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function h(t,e,r,n){var i=[k(R(n)),k(O(t).toString(16)),k(O(e).toString(16)),k(O(r).toString(16))];return i.join("")}function f(t,e){e=0===e?0:e||10;var r=G(t).toHsl();return r.s-=e/100,r.s=x(r.s),G(r)}function u(t,e){e=0===e?0:e||10;var r=G(t).toHsl();return r.s+=e/100,r.s=x(r.s),G(r)}function c(t){return G(t).desaturate(100)}function l(t,e){e=0===e?0:e||10;var r=G(t).toHsl();return r.l+=e/100,r.l=x(r.l),G(r)}function L(t,e){e=0===e?0:e||10;var r=G(t).toRgb();return r.r=T(0,N(255,r.r-O(255*-(e/100)))),r.g=T(0,N(255,r.g-O(255*-(e/100)))),r.b=T(0,N(255,r.b-O(255*-(e/100)))),G(r)}function p(t,e){e=0===e?0:e||10;var r=G(t).toHsl();return r.l-=e/100,r.l=x(r.l),G(r)}function d(t,e){var r=G(t).toHsl(),n=(O(r.h)+e)%360;return r.h=0>n?360+n:n,G(r)}function g(t){var e=G(t).toHsl();return e.h=(e.h+180)%360,G(e)}function b(t){var e=G(t).toHsl(),r=e.h;return[G(t),G({h:(r+120)%360,s:e.s,l:e.l}),G({h:(r+240)%360,s:e.s,l:e.l})]}function A(t){var e=G(t).toHsl(),r=e.h;return[G(t),G({h:(r+90)%360,s:e.s,l:e.l}),G({h:(r+180)%360,s:e.s,l:e.l}),G({h:(r+270)%360,s:e.s,l:e.l})]}function m(t){var e=G(t).toHsl(),r=e.h;return[G(t),G({h:(r+72)%360,s:e.s,l:e.l}),G({h:(r+216)%360,s:e.s,l:e.l})]}function v(t,e,r){e=e||6,r=r||30;var n=G(t).toHsl(),i=360/r,a=[G(t)];for(n.h=(n.h-(i*e>>1)+720)%360;--e;)n.h=(n.h+i)%360,a.push(G(n));return a}function y(t,e){e=e||6;for(var r=G(t).toHsv(),n=r.h,i=r.s,a=r.v,s=[],o=1/e;e--;)s.push(G({h:n,s:i,v:a})),a=(a+o)%1;return s}function M(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[t[r]]=r);return e}function _(t){return t=parseFloat(t),(isNaN(t)||0>t||t>1)&&(t=1),t}function w(t,e){S(t)&&(t="100%");var r=z(t);return t=N(e,T(0,parseFloat(t))),r&&(t=parseInt(t*e,10)/100),P.abs(t-e)<1e-6?1:t%e/parseFloat(e)}function x(t){return N(1,T(0,t))}function H(t){return parseInt(t,16)}function S(t){return"string"==typeof t&&-1!=t.indexOf(".")&&1===parseFloat(t)}function z(t){return"string"==typeof t&&-1!=t.indexOf("%")}function k(t){return 1==t.length?"0"+t:""+t}function C(t){return 1>=t&&(t=100*t+"%"),t}function R(t){return Math.round(255*parseFloat(t)).toString(16)}function $(t){return H(t)/255}function j(t){t=t.replace(V,"").replace(q,"").toLowerCase();var e=!1;if(D[t])t=D[t],e=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};var r;return(r=Z.rgb.exec(t))?{r:r[1],g:r[2],b:r[3]}:(r=Z.rgba.exec(t))?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=Z.hsl.exec(t))?{h:r[1],s:r[2],l:r[3]}:(r=Z.hsla.exec(t))?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=Z.hsv.exec(t))?{h:r[1],s:r[2],v:r[3]}:(r=Z.hex8.exec(t))?{a:$(r[1]),r:H(r[2]),g:H(r[3]),b:H(r[4]),format:e?"name":"hex8"}:(r=Z.hex6.exec(t))?{r:H(r[1]),g:H(r[2]),b:H(r[3]),format:e?"name":"hex"}:(r=Z.hex3.exec(t))?{r:H(r[1]+""+r[1]),g:H(r[2]+""+r[2]),b:H(r[3]+""+r[3]),format:e?"name":"hex"}:!1}var V=/^[\s,#]+/,q=/\s+$/,F=0,P=Math,O=P.round,N=P.min,T=P.max,E=P.random,G=function I(e,r){if(e=e?e:"",r=r||{},e instanceof I)return e;if(!(this instanceof I))return new I(e,r);var n=t(e);this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=O(100*this._a)/100,this._format=r.format||n.format,this._gradientType=r.gradientType,this._r<1&&(this._r=O(this._r)),this._g<1&&(this._g=O(this._g)),this._b<1&&(this._b=O(this._b)),this._ok=n.ok,this._tc_id=F++};G.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},setAlpha:function(t){return this._a=_(t),this._roundA=O(100*this._a)/100,this},toHsv:function(){var t=a(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=a(this._r,this._g,this._b),e=O(360*t.h),r=O(100*t.s),n=O(100*t.v);return 1==this._a?"hsv("+e+", "+r+"%, "+n+"%)":"hsva("+e+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var t=n(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=n(this._r,this._g,this._b),e=O(360*t.h),r=O(100*t.s),i=O(100*t.l);return 1==this._a?"hsl("+e+", "+r+"%, "+i+"%)":"hsla("+e+", "+r+"%, "+i+"%, "+this._roundA+")"},toHex:function(t){return o(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(){return h(this._r,this._g,this._b,this._a)},toHex8String:function(){return"#"+this.toHex8()},toRgb:function(){return{r:O(this._r),g:O(this._g),b:O(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+O(this._r)+", "+O(this._g)+", "+O(this._b)+")":"rgba("+O(this._r)+", "+O(this._g)+", "+O(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:O(100*w(this._r,255))+"%",g:O(100*w(this._g,255))+"%",b:O(100*w(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+O(100*w(this._r,255))+"%, "+O(100*w(this._g,255))+"%, "+O(100*w(this._b,255))+"%)":"rgba("+O(100*w(this._r,255))+"%, "+O(100*w(this._g,255))+"%, "+O(100*w(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":this._a<1?!1:B[o(this._r,this._g,this._b,!0)]||!1},toFilter:function(t){var e="#"+h(this._r,this._g,this._b,this._a),r=e,n=this._gradientType?"GradientType = 1, ":"";if(t){var i=G(t);r=i.toHex8String()}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+e+",endColorstr="+r+")"},toString:function(t){var e=!!t;t=t||this._format;var r=!1,n=this._a<1&&this._a>=0,i=!e&&n&&("hex"===t||"hex6"===t||"hex3"===t||"name"===t);return i?"name"===t&&0===this._a?this.toName():this.toRgbString():("rgb"===t&&(r=this.toRgbString()),"prgb"===t&&(r=this.toPercentageRgbString()),("hex"===t||"hex6"===t)&&(r=this.toHexString()),"hex3"===t&&(r=this.toHexString(!0)),"hex8"===t&&(r=this.toHex8String()),"name"===t&&(r=this.toName()),"hsl"===t&&(r=this.toHslString()),"hsv"===t&&(r=this.toHsvString()),r||this.toHexString())},_applyModification:function(t,e){var r=t.apply(null,[this].concat([].slice.call(e)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(l,arguments)},brighten:function(){return this._applyModification(L,arguments)},darken:function(){return this._applyModification(p,arguments)},desaturate:function(){return this._applyModification(f,arguments)},saturate:function(){return this._applyModification(u,arguments)},greyscale:function(){return this._applyModification(c,arguments)},spin:function(){return this._applyModification(d,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(v,arguments)},complement:function(){return this._applyCombination(g,arguments)},monochromatic:function(){return this._applyCombination(y,arguments)},splitcomplement:function(){return this._applyCombination(m,arguments)},triad:function(){return this._applyCombination(b,arguments)},tetrad:function(){return this._applyCombination(A,arguments)}},G.fromRatio=function(t,e){if("object"==typeof t){var r={};for(var n in t)t.hasOwnProperty(n)&&(r[n]="a"===n?t[n]:C(t[n]));t=r}return G(t,e)},G.equals=function(t,e){return t&&e?G(t).toRgbString()==G(e).toRgbString():!1},G.random=function(){return G.fromRatio({r:E(),g:E(),b:E()})},G.mix=function(t,e,r){r=0===r?0:r||50;var n,i=G(t).toRgb(),a=G(e).toRgb(),s=r/100,o=2*s-1,h=a.a-i.a;n=o*h==-1?o:(o+h)/(1+o*h),n=(n+1)/2;var f=1-n,u={r:a.r*n+i.r*f,g:a.g*n+i.g*f,b:a.b*n+i.b*f,a:a.a*s+i.a*(1-s)};return G(u)},G.readability=function(t,e){var r=G(t),n=G(e),i=r.toRgb(),a=n.toRgb(),s=r.getBrightness(),o=n.getBrightness(),h=Math.max(i.r,a.r)-Math.min(i.r,a.r)+Math.max(i.g,a.g)-Math.min(i.g,a.g)+Math.max(i.b,a.b)-Math.min(i.b,a.b);return{brightness:Math.abs(s-o),color:h}},G.isReadable=function(t,e){var r=G.readability(t,e);return r.brightness>125&&r.color>500},G.mostReadable=function(t,e){for(var r=null,n=0,i=!1,a=0;a<e.length;a++){var s=G.readability(t,e[a]),o=s.brightness>125&&s.color>500,h=3*(s.brightness/125)+s.color/500;(o&&!i||o&&i&&h>n||!o&&!i&&h>n)&&(i=o,n=h,r=G(e[a]))}return r};var D=G.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},B=G.hexNames=M(D),Z=function(){var t="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",r="(?:"+e+")|(?:"+t+")",n="[\\s|\\(]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")\\s*\\)?",i="[\\s|\\(]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")\\s*\\)?";return{rgb:new RegExp("rgb"+n),rgba:new RegExp("rgba"+i),hsl:new RegExp("hsl"+n),hsla:new RegExp("hsla"+i),hsv:new RegExp("hsv"+n),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();"undefined"!=typeof e&&e.exports?e.exports=G:"function"==typeof define&&define.amd?define(function(){return G}):window.tinycolor=G}()},{}],3:[function(require,module,exports){var Geomicons=require("geomicons-open"),tinycolor=require("tinycolor2");Vue.directive("icon",function(t){this.el.dataset.icon=t,Geomicons.inject(this.el)});var app={};app.data={},app.data.baseHex="#00c9fc",app.data.spectrumArray=[],app.data.rowsArray=[],app.computed={},app.computed.base={$get:function(){return this.baseHex},$set:function(t){return this.baseHex=tinycolor(t).toHexString(),this.updateState(),this.baseHex}},app.computed.baseHsl={$get:function(){var t=this.base,e=tinycolor(t);return e.toHsl()},$set:function(t){var e=tinycolor(t);return this.base=tinycolor(e).toHexString(),e.toHsl()}},app.computed.baseH={$get:function(){return this.baseHsl.h},$set:function(t){var e=this.baseHsl;return e.h=t,this.baseHsl=e,this.baseHsl.h}},app.computed.baseS={$get:function(){return this.baseHsl.s},$set:function(t){var e=this.baseHsl;return e.s=t,this.baseHsl=e,this.baseHsl.s}},app.computed.baseL={$get:function(){return this.baseHsl.l},$set:function(t){var e=this.baseHsl;return e.l=t,this.baseHsl=e,this.baseHsl.l}},app.computed.hGradient=function(){var t=tinycolor(this.base).toHsl();t.h=0,min=tinycolor(t).toHexString(),t.h=119,third=tinycolor(t).toHexString(),t.h=239,twoThirds=tinycolor(t).toHexString(),t.h=359,max=tinycolor(t).toHexString();var e="linear-gradient(90deg, "+min+", "+third+", "+twoThirds+", "+max+")";return e},app.computed.sGradient=function(){var t=tinycolor(this.base).toHsl();t.s=0;var e=tinycolor(t).toHexString();t.s=1;var r=tinycolor(t).toHexString(),n="linear-gradient(90deg, "+e+", "+r+")";return n},app.computed.lGradient=function(){var t=tinycolor(this.base).toHsl();t.l=.5;var e=tinycolor(t).toHexString();t.l=.1;var r=tinycolor(t).toHexString();t.l=.9;var n=tinycolor(t).toHexString(),i="linear-gradient(90deg, "+r+", "+e+", "+n+")";return i},app.computed.spectrum={$get:function(){this.baseHex;var t=tinycolor(this.baseHex),e=-360/(this.spectrumArray.length+1);this.spectrumArray[0]&&this.spectrumArray[0].color==this.baseHex?this.spectrumArray[0].color=this.baseHex:this.spectrumArray[0]={color:t.toHexString()};for(var r=1;r<this.spectrumArray.length;r++)this.spectrumArray[r]||(this.spectrumArray[r]={}),this.spectrumArray[r].color=t.spin(e).toHexString();return this.spectrumArray},$set:function(t){return this.spectrumArray=t,this.spectrumArray}},app.computed.rows={$get:function(){this.baseHex,this.shiftS,this.shiftL,this.spectrum;for(var t=this.spectrumArray,e=0;e<this.rowsArray.length;e++){var r=this.rowsArray[e]||[{colors:[]}];r.colors.splice(this.spectrum.length,32);for(var n=0;n<t.length;n++){var i=tinycolor(t[n].color).toHsl();i.s+=this.shiftS*(e+1),i.l+=this.shiftL*(e+1),i.s>1&&(i.s=1),i.s<0&&(i.s=0),i.l>1&&(i.l=1),i.l<0&&(i.l=0);var a=tinycolor(i).toHexString();r.colors[n]=r.colors[n]||{},r.colors[n].color=a}}return this.rowsArray},$set:function(t){return this.rowsArray=t,this.rowsArray}},app.data.customShiftS=null,app.computed.shiftS={$get:function(){if(this.customShiftS)return this.customShiftS;var t,e=tinycolor(this.baseHex).toHsl();return t=e.s>.5?-.1:.1},$set:function(t){return this.customShiftS=t,this.updateState(),this.customShiftS}},app.data.customShiftL=null,app.computed.shiftL={$get:function(){if(this.customShiftL)return this.customShiftL;var t,e=tinycolor(this.baseHex).toHsl();return t=e.s>.5?-.1:.1},$set:function(t){return this.customShiftL=t,this.updateState(),this.customShiftL}},app.computed.tileWidth=function(){return 100/this.spectrum.length},app.methods={},app.methods.addColumn=function(){if(this.spectrumArray.length>15)return!1;var t=tinycolor(this.baseHex),e=this.spectrumArray;e.push({color:t.toHexString()}),this.spectrumArray=e,this.updateState()},app.methods.removeColumn=function(){return this.spectrumArray.length<1?!1:(this.spectrumArray.splice(this.spectrumArray.length-1),void this.updateState())},app.methods.addRow=function(t){return t&&t.preventDefault(),this.rowsArray.length>7?!1:(this.rowsArray.push({colors:[]}),void this.updateState())},app.methods.removeRow=function(t){return t&&t.preventDefault(),this.rowsArray.length<1?!1:(this.rowsArray.splice(this.rowsArray.length-1),void this.updateState())},app.methods.updateState=function(){var t=this.baseHex+"&hues="+this.spectrum.length+"&rows="+this.rows.length+"&shiftS="+this.shiftS+"&shiftL="+this.shiftL;window.history.pushState({base:this.baseHex},"",t)},app.methods.handleKeydown=function(){},Vue.directive("zeroclip",function(t){var e=this.vm.$root,r=new ZeroClipboard(this.el);r.on("ready",function(){r.setText(t),r.on("aftercopy",function(){e.flash(t+" copied to clipboard")})})}),app.data.flashMessage=!1,app.methods.flash=function(t){function e(){r.flashMessage=!1,window.clearTimeout(n)}var r=this,n=window.setTimeout(e,2e3);this.flashMessage=t},app.created=function(){function parseHash(t){var e={};e.base=t.split("&")[0];for(var r=t.split("&"),n=1;n<r.length;n++){var i=r[n].split("=");e[i[0]]=i[1]}return e}console.log("S P E C T R A L");var self=this;if(window.location.hash){var obj=parseHash(window.location.hash);this.base=obj.base;for(var i=1;i<obj.hues;i++)self.addColumn();for(var i=0;i<obj.rows;i++)self.addRow();obj.shiftS&&(this.shiftS=obj.shiftS),obj.shiftL&&(this.shiftL=obj.shiftL)}window.onpopstate=function(e){var obj=parseHash(window.location.hash),hues=eval(obj.hues)}};var view=new Vue({el:"#app",created:app.created,data:app.data,computed:app.computed,methods:app.methods})},{"geomicons-open":1,tinycolor2:2}]},{},[3]);