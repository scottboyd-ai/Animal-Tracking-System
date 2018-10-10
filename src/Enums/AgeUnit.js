"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AgeUnit;
(function (AgeUnit) {
    AgeUnit[AgeUnit["DAYS"] = 0] = "DAYS";
    AgeUnit[AgeUnit["WEEKS"] = 1] = "WEEKS";
    AgeUnit[AgeUnit["MONTHS"] = 2] = "MONTHS";
    AgeUnit[AgeUnit["YEARS"] = 3] = "YEARS";
})(AgeUnit = exports.AgeUnit || (exports.AgeUnit = {}));
function getValue(value) {
    return AgeUnit[value.toUpperCase()];
}
exports.getValue = getValue;
//# sourceMappingURL=AgeUnit.js.map