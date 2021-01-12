"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Set = void 0;
const Methods = __importStar(require("./Methods"));
const Universe_1 = require("./Universe");
const Util_1 = require("./Util");
class Set extends Array {
    constructor(...set) {
        super();
        this.push(...Util_1.parse(set));
    }
    ;
    get size() { return this.length; }
    ;
    get proper() { return Util_1.proper(this); }
    ;
    get null() { return Methods.isNull(this); }
    ;
    get sizeType() { return Methods.sizeType(this); }
    ;
    get subsets() { return Methods.subsets(this); }
    ;
    get properSubsets() { return Methods.properSubsets(this); }
    ;
    setUniverse(universe, label) {
        universe.data[label] = this;
        this.universe = universe;
        return this;
    }
    overlaps(...set) {
        return Methods.overlaps(this, set);
    }
    complement() {
        if (!this.universe)
            this.universe = new Universe_1.Universe();
        return new Set(...Methods.subtract(this.universe.set, this));
    }
    makeProper() {
        this.splice(0, this.length);
        this.push(...this.proper);
        return this;
    }
    union(...items) {
        super.push(...Util_1.parse(items));
        return this;
    }
    intersect(...items) {
        this.copy(...Methods.intersect(this, items));
        return this;
    }
    sutract(...items) {
        this.copy(...Methods.subtract(this, items));
        return this;
    }
    sutractFrom(...items) {
        this.copy(...Methods.subtract(items, this));
        return this;
    }
    isSubset(...items) {
        return Methods.isSubset(this, items);
    }
    isProperSubset(...items) {
        return Methods.isProperSubset(this, items);
    }
    clear() {
        this.splice(0, this.length);
    }
    copy(...items) {
        this.clear();
        items.forEach((x, i) => this[i] = x);
        return this;
    }
    toString() {
        return Util_1.stringify(this);
    }
    static create(...items) {
        return new Set(...items);
    }
}
exports.Set = Set;
;
