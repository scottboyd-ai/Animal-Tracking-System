"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AnimalLocationRepository_1 = require("./AnimalLocationRepository");
function getAllLocations() {
    const locationRepository = new AnimalLocationRepository_1.AnimalLocationRepository();
    return locationRepository.findAll();
}
exports.getAllLocations = getAllLocations;
//# sourceMappingURL=AnimalLocationService.js.map