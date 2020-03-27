"use strict";
exports.__esModule = true;
function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
        return true;
    }
    return false;
}
exports.isDivisible = isDivisible;
