export enum Sex{
    MALE, FEMALE, UNKNOWN
}

export function getValue(value:string): Sex{
    return Sex[value.toUpperCase()];
}