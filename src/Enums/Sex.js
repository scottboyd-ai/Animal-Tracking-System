"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sex;
(function (Sex) {
    Sex[Sex["MALE"] = 0] = "MALE";
    Sex[Sex["FEMALE"] = 1] = "FEMALE";
    Sex[Sex["UNKNOWN"] = 2] = "UNKNOWN";
})(Sex = exports.Sex || (exports.Sex = {}));
function getValue(value) {
    return Sex[value.toUpperCase()];
}
exports.getValue = getValue;
//# sourceMappingURL=Sex.js.map