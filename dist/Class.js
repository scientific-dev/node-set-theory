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
const Util_1 = require("./Util");
class Set {
    constructor(set) {
        this.set = Util_1.parse(set);
        this.size = this.set.length;
        this.length = this.size;
        this.proper = Util_1.proper(this.set);
        this.null = Methods.isNull(this.set);
        this.sizeType = Methods.sizeType(this.set);
        this.subsets = Methods.subsets(this.set);
        this.properSubsets = Methods.properSubsets(this.set);
    }
    ;
}
exports.Set = Set;
;
//# sourceMappingURL=Class.js.map