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
const AnimalLocationRepository_1 = require("../AnimalLocation/AnimalLocationRepository");
const EnclosureRepository_1 = require("../Enclosure/EnclosureRepository");
const MedicalRecordRepository_1 = require("../MedicalRecord/MedicalRecordRepository");
const FeedingInformationRepository_1 = require("../FeedingInformation/FeedingInformationRepository");
const AnimalRepository_1 = require("./AnimalRepository");
function prepareAnimal(animal, animalLocation, enclosure, medicalRecords, feedingInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        if (animalLocation && !animalLocation._id) {
            const animalLocationRepository = new AnimalLocationRepository_1.AnimalLocationRepository();
            yield animalLocationRepository.create(animalLocation);
            animal.location = animalLocation;
        }
        if (enclosure && !enclosure._id) {
            const enclosureRepository = new EnclosureRepository_1.EnclosureRepository();
            yield enclosureRepository.create(enclosure);
            animal.enclosure = enclosure;
        }
        if (medicalRecords) {
            const medicalRecordRepository = new MedicalRecordRepository_1.MedicalRecordRepository();
            let medicalRecordsArr = [];
            for (let medicalRecord of medicalRecords) {
                if (!medicalRecord._id) {
                    yield medicalRecordRepository.create(medicalRecord);
                }
                medicalRecordsArr.push(medicalRecord);
            }
            animal.medicalRecords = medicalRecordsArr;
        }
        if (feedingInfo && !feedingInfo._id) {
            const feedingInformationRepository = new FeedingInformationRepository_1.FeedingInformationRepository();
            yield feedingInformationRepository.create(feedingInfo);
            animal.feedingInformation = feedingInfo;
        }
        return animal;
    });
}
exports.prepareAnimal = prepareAnimal;
function saveAnimal(animal) {
    return __awaiter(this, void 0, void 0, function* () {
        const animalRepository = new AnimalRepository_1.AnimalRepository();
        return yield animalRepository.create(animal);
    });
}
exports.saveAnimal = saveAnimal;
function findAllAnimals() {
    return __awaiter(this, void 0, void 0, function* () {
        const animalRepository = new AnimalRepository_1.AnimalRepository();
        return yield animalRepository.findAll();
    });
}
exports.findAllAnimals = findAllAnimals;
//# sourceMappingURL=AnimalService.js.map