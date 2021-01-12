import { Universe } from "./Universe";

export function removeDuplicates<T>(set: T[]): T[];
export function removeDuplicates(set: any[]): any[] {
    if(!Array.isArray(set)) throw new Error('invalid form of set!');
    return set.filter((x, i) => set.indexOf(x) === i);
};

export function parse<T>(set: T[]): T[];
export function parse(set: any[]): any[] {
    if(!Array.isArray(set)) throw new Error('invalid form of set!');
    return removeDuplicates(set);
};

export function n(set: any): number {
    return parse(set).length;
};

export function P<T>(set: T[]): T[][];
export function P(set: any): any[] | unknown {
    return parse(set).reduce((subsets: any, value) => subsets.concat(subsets.map((x: any) => [value, ...x])), [[]]);
};

export function proper<T>(set: (T | [] | null | undefined | 0 | false)[]): T[];
export function proper(set: any[]): any[] {
    return parse(set).filter(x => Array.isArray(x) ? x.length : x);
};

export function stringify(set: any[]): string {
    let content: string[] = [];
    parse(set).forEach(x => {
        switch(typeof x){
            case 'number': content.push(x.toString()); break;
            case 'boolean': content.push(x.toString()); break;
            case 'object': content.push(Array.isArray(x) ? stringify(x) : JSON.stringify(x)); break;
            default: content.push(JSON.stringify(x.toString()));
        }
    })
    return `{ ${content.join(', ')} }`;
};