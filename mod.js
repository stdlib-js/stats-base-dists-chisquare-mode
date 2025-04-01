// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function n(n){return n!=n}var r=Number.POSITIVE_INFINITY;function t(t,u){return n(t)||n(u)?NaN:t===r||u===r?r:t===u&&0===t?function(n){return 0===n&&1/n===r}(t)?t:u:t>u?t:u}function u(r){return n(r)||r<0?NaN:t(r-2,0)}export{u as default};
//# sourceMappingURL=mod.js.map
