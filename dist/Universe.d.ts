import { Set } from './Class';
export declare class Universe<T> {
    data: any;
    outer: Set<T>;
    constructor();
    get inner(): Set<T>;
    get set(): Set<T>;
    getSet(label: any): Set<T> | null;
    addSet(label: any, set?: Set<T>): this;
    removeSet(...labels: any[]): this;
    union(...labels: any[]): Set<T>;
    useData(data: any): this;
}
