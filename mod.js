// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var n=Number.POSITIVE_INFINITY;function t(r){return 0===r&&1/r===n}var u=Number.NEGATIVE_INFINITY;function e(e){return r(e)||e<0?NaN:function(e,N){var I,f,a,i;if(2===(I=arguments.length))return r(e)||r(N)?NaN:e===n||N===n?n:e===N&&0===e?t(e)?e:N:e>N?e:N;for(f=u,i=0;i<I;i++){if(r(a=arguments[i])||a===n)return a;(a>f||a===f&&0===a&&t(a))&&(f=a)}return f}(e-2,0)}export{e as default};
//# sourceMappingURL=mod.js.map
