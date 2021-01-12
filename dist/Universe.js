"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Universe = void 0;
const Class_1 = require("./Class");
class Universe {
    constructor() {
        this.data = {};
        this.outer = new Class_1.Set();
    }
    get inner() {
        let res = new Class_1.Set();
        Object.values(this.data).forEach((x) => res.union(...x));
        return res;
    }
    ;
    get set() {
        return new Class_1.Set(...this.outer, ...this.inner);
    }
    getSet(label) {
        return this.data[label] || null;
    }
    addSet(label, set = new Class_1.Set()) {
        set.setUniverse(this, label);
        return this;
    }
    removeSet(...labels) {
        labels.forEach(x => delete this.data[x]);
        return this;
    }
    union(...labels) {
        let res = new Class_1.Set();
        Object.keys(this.data).filter(x => labels.includes(x)).forEach(x => res.union(...this.data[x]));
        return res;
    }
    useData(data) {
        this.data = { ...this.data, ...data };
        return this;
    }
}
exports.Universe = Universe;
;
