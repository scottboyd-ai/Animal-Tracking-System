export enum WeightUnit{
    GRAMS, MILLIGRAMS, KILOGRAMS
}

export function getValue(value:string): WeightUnit;
export function getValue(value:number);
export function getValue(value) {
    if(typeof value === 'string'){
        return WeightUnit[value.toUpperCase()];
    } else if (typeof value === 'number'){
        return WeightUnit[value];
    }
}

// export function getFriendlyName(weightUnit:number);
// export function getFriendlyName(weightUnit:WeightUnit){
//     let localWeightUnit;
//     if(typeof weightUnit === 'number'){
//         localWeightUnit = getValue(weightUnit);
//     } else{
//         localWeightUnit = weightUnit;
//     }
//     if(localWeightUnit){
//         let output = localWeightUnit.toString().toLowerCase();
//         let firstLetter = output.charAt(0);
//         return firstLetter.toUpperCase() + output.slice(1);
//     }
//     return '';
// }