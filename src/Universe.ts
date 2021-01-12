import { Set } from './Class';

export class Universe<T>{

    data: any;
    outer: Set<T>;

    constructor(){
        this.data = {};
        this.outer = new Set<T>();
    }

    get inner(): Set<T> {
        let res = new Set<T>();
        Object.values(this.data).forEach((x: T[]) => res.union(...x))
        return res;
    };

    get set(): Set<T> {
        return new Set<T>(...this.outer, ...this.inner);
    }

    getSet(label: any): Set<T> | null {
        return this.data[label] || null;
    }

    addSet(label: any, set: Set<T> = new Set<T>()): this {
        set.setUniverse(this, label);
        return this;
    }

    removeSet(...labels: any[]): this {
        labels.forEach(x => delete this.data[x]);
        return this;
    }

    union(...labels: any[]): Set<T> {
        let res = new Set<T>();
        Object.keys(this.data).filter(x => labels.includes(x)).forEach(x => res.union(...this.data[x]));
        return res;
    }

    useData(data: any): this {
        this.data = { ...this.data, ...data };
        return this;
    }

};