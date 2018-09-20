export enum WeightUnit{
    GRAMS, MILLIGRAMS, KILOGRAMS
}

export function getValue(value:string): WeightUnit{
    return WeightUnit[value.toUpperCase()];
}