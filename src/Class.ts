import * as Methods from './Methods';
import { Universe } from './Universe';
import { proper, parse, stringify } from './Util';

export class Set<T> extends Array<T>{

    universe?: Universe<any>;

    constructor(...set: T[]){
        super();
        this.push(...parse(set));
    };

    get size(): number { return this.length };
    get proper(): T[] { return proper(this) };
    get null(): boolean { return Methods.isNull(this) };
    get sizeType(): 'empty' | 'singleton' | 'many' { return Methods.sizeType(this) };
    get subsets(): T[][] { return Methods.subsets(this) };
    get properSubsets(): T[][] { return Methods.properSubsets(this) };

    setUniverse(universe: Universe<any>, label: any): this {
        universe.data[label] = this;
        this.universe = universe;
        return this;
    }

    overlaps(...set: any[]): boolean {
        return Methods.overlaps(this, set);
    }

    complement(): Set<T> {
        if(!this.universe) this.universe = new Universe<T>();
        return new Set<T>(...Methods.subtract(this.universe.set, this))
    }

    makeProper(): this {
        this.splice(0, this.length);
        this.push(...this.proper);
        return this;
    }

    union(...items: T[]): this {
        super.push(...parse(items));
        return this;
    }

    intersect(...items: any[]): this {
        this.copy(...Methods.intersect(this, items))
        return this;
    }

    sutract(...items: any[]): this {
        this.copy(...Methods.subtract(this, items))
        return this;
    }

    sutractFrom(...items: any[]): this {
        this.copy(...Methods.subtract(items, this))
        return this;
    }

    isSubset(...items: any[]): boolean {
        return Methods.isSubset(this, items);
    }

    isProperSubset(...items: any[]): boolean {
        return Methods.isProperSubset(this, items);
    }

    clear(): void {
        this.splice(0, this.length);
    }

    copy(...items: T[]): this {
        this.clear();
        items.forEach((x, i) => this[i] = x);
        return this;
    }

    toString(): string {
        return stringify(this);
    }

    static create<T>(...items: T[]): Set<T> {
        return new Set<T>(...items);
    }

};