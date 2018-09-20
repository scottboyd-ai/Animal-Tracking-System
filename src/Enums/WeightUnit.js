"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WeightUnit;
(function (WeightUnit) {
    WeightUnit[WeightUnit["GRAMS"] = 0] = "GRAMS";
    WeightUnit[WeightUnit["MILLIGRAMS"] = 1] = "MILLIGRAMS";
    WeightUnit[WeightUnit["KILOGRAMS"] = 2] = "KILOGRAMS";
})(WeightUnit = exports.WeightUnit || (exports.WeightUnit = {}));
function getValue(value) {
    return WeightUnit[value.toUpperCase()];
}
exports.getValue = getValue;
//# sourceMappingURL=WeightUnit.js.map