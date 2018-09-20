export enum AgeUnit {
    DAYS, WEEKS, MONTHS, YEARS
}

export function getValue(value:string): AgeUnit{
    return AgeUnit[value.toUpperCase()];
}