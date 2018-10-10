"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const EnclosureRepository_1 = require("./EnclosureRepository");
function getRepository() {
    return new EnclosureRepository_1.EnclosureRepository();
}
function getAllEnclosures() {
    return getRepository().findAll();
}
exports.getAllEnclosures = getAllEnclosures;
function updateEnclosure(enclosure) {
    return __awaiter(this, void 0, void 0, function* () {
        const enclosureRepository = getRepository();
        let enclosureObject = yield enclosureRepository.findById(enclosure._id);
        delete enclosure._id;
        return enclosureRepository.updateById(enclosureObject._id, enclosure);
    });
}
exports.updateEnclosure = updateEnclosure;
function addNewEnclosure(enclosure) {
    return __awaiter(this, void 0, void 0, function* () {
        getRepository().create(enclosure);
    });
}
exports.addNewEnclosure = addNewEnclosure;
//# sourceMappingURL=EnclosureService.js.map