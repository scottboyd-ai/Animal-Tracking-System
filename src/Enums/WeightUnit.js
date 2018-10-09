"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WeightUnit;
(function (WeightUnit) {
    WeightUnit[WeightUnit["GRAMS"] = 0] = "GRAMS";
    WeightUnit[WeightUnit["MILLIGRAMS"] = 1] = "MILLIGRAMS";
    WeightUnit[WeightUnit["KILOGRAMS"] = 2] = "KILOGRAMS";
})(WeightUnit = exports.WeightUnit || (exports.WeightUnit = {}));
function getValue(value) {
    if (typeof value === 'string') {
        return WeightUnit[value.toUpperCase()];
    }
    else if (typeof value === 'number') {
        return WeightUnit[value];
    }
}
exports.getValue = getValue;
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
//# sourceMappingURL=WeightUnit.js.map