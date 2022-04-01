// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return r!=r},n=Number.POSITIVE_INFINITY,t=n;var u=function(r){return 0===r&&1/r===t},e=Number.NEGATIVE_INFINITY,N=u,a=r,I=e,f=n;var i=r,o=function(r,n){var t,u,e,i;if(2===(t=arguments.length))return a(r)||a(n)?NaN:r===f||n===f?f:r===n&&0===r?N(r)?r:n:r>n?r:n;for(u=I,i=0;i<t;i++){if(a(e=arguments[i])||e===f)return e;(e>u||e===u&&0===e&&N(e))&&(u=e)}return u};var v=function(r){return i(r)||r<0?NaN:o(r-2,0)};export{v as default};
//# sourceMappingURL=mod.js.map
