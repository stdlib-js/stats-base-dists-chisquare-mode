// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var n=Number.POSITIVE_INFINITY;var u=Number.POSITIVE_INFINITY;function t(t,I){return r(t)||r(I)?NaN:t===u||I===u?u:t===I&&0===t?function(r){return 0===r&&1/r===n}(t)?t:I:t>I?t:I}function I(n){return r(n)||n<0?NaN:t(n-2,0)}export{I as default};
//# sourceMappingURL=mod.js.map
