import * as Methods from './Methods';
import { n, P, proper, removeDuplicates, parse } from './Util';

export class Set{

    set: any[]
    size: number;
    length: number;
    proper: any[];
    null: boolean;
    sizeType: 'empty' | 'singleton' | 'many';
    subsets: any[];
    properSubsets: any[];

    constructor(set: any[]){
        this.set = parse(set);
        this.size = this.set.length;
        this.length = this.size;
        this.proper = proper(this.set);
        this.null = Methods.isNull(this.set);
        this.sizeType = Methods.sizeType(this.set);
        this.subsets = Methods.subsets(this.set);
        this.properSubsets = Methods.properSubsets(this.set);
    };

};
