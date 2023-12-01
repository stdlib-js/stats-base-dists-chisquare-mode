// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";function e(e){return e!=e}var n=Number.POSITIVE_INFINITY;function t(t,o){return e(t)||e(o)?NaN:t===n||o===n?n:t===o&&0===t?function(e){return 0===e&&1/e===n}(t)?t:o:t>o?t:o}return function(n){return e(n)||n<0?NaN:t(n-2,0)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).mode=n();
//# sourceMappingURL=index.js.map
