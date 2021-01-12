"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.version = exports.isEqual = exports.overlaps = exports.isProperSubset = exports.isSubset = exports.subtract = exports.intersect = exports.union = exports.properSubsets = exports.powerSet = exports.subsets = exports.sizeType = exports.isProper = exports.isNull = exports.belongs = exports.Universe = exports.Set = exports.length = void 0;
__exportStar(require("./Util"), exports);
var Util_1 = require("./Util");
Object.defineProperty(exports, "length", { enumerable: true, get: function () { return Util_1.n; } });
var Class_1 = require("./Class");
Object.defineProperty(exports, "Set", { enumerable: true, get: function () { return Class_1.Set; } });
var Universe_1 = require("./Universe");
Object.defineProperty(exports, "Universe", { enumerable: true, get: function () { return Universe_1.Universe; } });
var Methods_1 = require("./Methods");
Object.defineProperty(exports, "belongs", { enumerable: true, get: function () { return Methods_1.belongs; } });
Object.defineProperty(exports, "isNull", { enumerable: true, get: function () { return Methods_1.isNull; } });
Object.defineProperty(exports, "isProper", { enumerable: true, get: function () { return Methods_1.isProper; } });
Object.defineProperty(exports, "sizeType", { enumerable: true, get: function () { return Methods_1.sizeType; } });
Object.defineProperty(exports, "subsets", { enumerable: true, get: function () { return Methods_1.subsets; } });
Object.defineProperty(exports, "powerSet", { enumerable: true, get: function () { return Methods_1.subsets; } });
Object.defineProperty(exports, "properSubsets", { enumerable: true, get: function () { return Methods_1.properSubsets; } });
Object.defineProperty(exports, "union", { enumerable: true, get: function () { return Methods_1.union; } });
Object.defineProperty(exports, "intersect", { enumerable: true, get: function () { return Methods_1.intersect; } });
Object.defineProperty(exports, "subtract", { enumerable: true, get: function () { return Methods_1.subtract; } });
Object.defineProperty(exports, "isSubset", { enumerable: true, get: function () { return Methods_1.isSubset; } });
Object.defineProperty(exports, "isProperSubset", { enumerable: true, get: function () { return Methods_1.isProperSubset; } });
Object.defineProperty(exports, "overlaps", { enumerable: true, get: function () { return Methods_1.overlaps; } });
Object.defineProperty(exports, "isEqual", { enumerable: true, get: function () { return Methods_1.isEqual; } });
exports.version = '1.0.0-beta';
