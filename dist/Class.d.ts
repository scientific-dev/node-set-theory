import { Universe } from './Universe';
export declare class Set<T> extends Array<T> {
    universe?: Universe<any>;
    constructor(...set: T[]);
    get size(): number;
    get proper(): T[];
    get null(): boolean;
    get sizeType(): 'empty' | 'singleton' | 'many';
    get subsets(): T[][];
    get properSubsets(): T[][];
    setUniverse(universe: Universe<any>, label: any): this;
    overlaps(...set: any[]): boolean;
    complement(): Set<T>;
    makeProper(): this;
    union(...items: T[]): this;
    intersect(...items: any[]): this;
    sutract(...items: any[]): this;
    sutractFrom(...items: any[]): this;
    isSubset(...items: any[]): boolean;
    isProperSubset(...items: any[]): boolean;
    clear(): void;
    copy(...items: T[]): this;
    toString(): string;
    static create<T>(...items: T[]): Set<T>;
}
