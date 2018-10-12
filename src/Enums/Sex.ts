export enum Sex{
    MALE, FEMALE, UNKNOWN
}


export function getValue(value:string): Sex;
export function getValue(value:number);
export function getValue(value) {
    if(typeof value === 'string'){
        return Sex[value.toUpperCase()];
    } else if (typeof value === 'number'){
        return Sex[value];
    }
}