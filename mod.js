// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return r!=r},n=Number.POSITIVE_INFINITY,t=n;var u=function(r){return 0===r&&1/r===t},e=Number.NEGATIVE_INFINITY,N=u,I=r,a=e,f=n;var i=function(r,n){var t,u,e,i;if(2===(t=arguments.length))return I(r)||I(n)?NaN:r===f||n===f?f:r===n&&0===r?N(r)?r:n:r>n?r:n;for(u=a,i=0;i<t;i++){if(I(e=arguments[i])||e===f)return e;(e>u||e===u&&0===e&&N(e))&&(u=e)}return u};function o(n){return r(n)||n<0?NaN:i(n-2,0)}export{o as default};
//# sourceMappingURL=mod.js.map
