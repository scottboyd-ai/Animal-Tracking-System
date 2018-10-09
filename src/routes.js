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
const Animal_1 = require("./models/Animal");
const Sex_1 = require("./Enums/Sex");
const AnimalLocation_1 = require("./models/AnimalLocation");
const Enclosure_1 = require("./models/Enclosure");
const MedicalRecord_1 = require("./models/MedicalRecord");
const FeedingInformation_1 = require("./models/FeedingInformation");
const AnimalService = require("./config/Animal/AnimalService");
const EnclosureService = require("./config/Enclosure/EnclosureService");
const AnimalLocationService = require("./config/AnimalLocation/AnimalLocationService");
const htmlUtil = require("./util/htmlUtil");
const WeightUnit_1 = require("./Enums/WeightUnit");
let Routes = [
    {
        method: 'GET',
        path: '/',
        handler: function (request, h) {
            return h.view('index.html');
        }
    },
    {
        method: 'GET',
        path: '/animals/new',
        handler: function (request, h) {
            return __awaiter(this, void 0, void 0, function* () {
                const ageUnitOptions = htmlUtil.formatAgeUnitsAsSelectOptions();
                const weightUnitOptions = htmlUtil.formatWeightUnitsAsSelectOptions();
                const enclosures = yield EnclosureService.getAllEnclosures();
                const enclosureOptions = htmlUtil.formatEnclosuresAsSelectOptions(enclosures);
                const locations = yield AnimalLocationService.getAllLocations();
                const animalLocationOptions = htmlUtil.formatLocationsAsSelectOptions(locations);
                const data = {
                    ageUnitOptions: ageUnitOptions,
                    weightUnitOptions: weightUnitOptions,
                    enclosureOptions: enclosureOptions,
                    animalLocationOptions: animalLocationOptions
                };
                return h.view('newanimal.html', data);
            });
        }
    },
    {
        method: 'POST',
        path: '/animals/new',
        handler: function (request, h) {
            return __awaiter(this, void 0, void 0, function* () {
                let animal = new Animal_1.Animal();
                animal.name = request.payload.animalName;
                animal.species = request.payload.species;
                animal.dob = request.payload.dob;
                animal.weight = request.payload.weight;
                animal.weightUnit = WeightUnit_1.getValue(request.payload.weightUnit);
                let animalLocation = new AnimalLocation_1.AnimalLocation();
                console.log(request.payload);
                if (request.payload.newLocationVal) {
                    animalLocation.name = request.payload.locationName;
                }
                else if (request.payload.animalLocation._id !== 0) {
                    animalLocation = request.payload.animalLocation;
                }
                let enclosure = new Enclosure_1.Enclosure();
                if (request.payload.newEnclosureVal) {
                    enclosure.name = request.payload.enclosureName;
                    enclosure.dimensions = request.payload.dimensions;
                    enclosure.lastCleaned = new Date(request.payload.enclosureLastCleaned).getTime();
                    enclosure.notes = request.payload.enclosureNotes;
                }
                else if (request.payload.enclosure._id !== 0) {
                    enclosure = request.payload.enclosure;
                }
                let feedingInformation = new FeedingInformation_1.FeedingInformation();
                if (request.payload.feedingInstructions || request.payload.feedingNotes) {
                    feedingInformation.instructions = request.payload.feedingInstructions;
                    feedingInformation.notes = request.payload.feedingNotes;
                }
                animal = yield AnimalService.prepareAnimal(animal, animalLocation, enclosure, null, feedingInformation);
                return AnimalService.saveAnimal(animal);
            });
        }
    },
    {
        method: 'GET',
        path: '/enclosures',
        handler: function (request, h) {
            return __awaiter(this, void 0, void 0, function* () {
                const enclosures = yield EnclosureService.getAllEnclosures();
                const enclosureTable = htmlUtil.formatEnclosuresAsTable(enclosures);
                const data = {
                    enclosureTable: enclosureTable
                };
                return h.view('editenclosures.html', data);
            });
        }
    },
    {
        method: 'POST',
        path: '/enclosures',
        handler: function (request, h) {
            return __awaiter(this, void 0, void 0, function* () {
                const data = {
                    _id: request.payload._id,
                    number: request.payload.number,
                    name: request.payload.name,
                    dimensions: request.payload.dimensions,
                    lastCleaned: new Date(request.payload.lastCleaned).getTime(),
                    notes: request.payload.notes
                };
                yield EnclosureService.updateEnclosure(data);
                return ('Success');
            });
        }
    },
    {
        method: 'POST',
        path: '/enclosures/new',
        handler: function (request, h) {
            return __awaiter(this, void 0, void 0, function* () {
                const data = {
                    number: request.payload.number,
                    name: request.payload.name,
                    dimensions: request.payload.dimensions,
                    lastCleaned: new Date(request.payload.lastCleaned).getTime(),
                    notes: request.payload.notes
                };
                yield EnclosureService.addNewEnclosure(data);
                return h.redirect('/enclosures');
            });
        }
    },
    {
        method: 'GET',
        path: '/test',
        handler: function (request, h) {
            return __awaiter(this, void 0, void 0, function* () {
                let animal = new Animal_1.Animal();
                animal.name = 'Hello';
                let animalLocation = new AnimalLocation_1.AnimalLocation();
                animalLocation.name = 'new location';
                animal.species = 'snek';
                animal.dob = new Date();
                animal.sex = Sex_1.Sex.FEMALE;
                animal.weight = 42;
                let enclosure = new Enclosure_1.Enclosure();
                enclosure.dimensions = 'smol';
                enclosure.lastCleaned = new Date().getTime();
                enclosure.notes = 'sweet';
                let medicalRecords = [];
                let medicalRecord1 = new MedicalRecord_1.MedicalRecord();
                medicalRecord1.datePerformed = new Date().getTime();
                medicalRecord1.measuredWeight = 41;
                medicalRecord1.measuredWeightUnit = WeightUnit_1.WeightUnit.GRAMS;
                medicalRecords.push(medicalRecord1);
                let feedingInfo = new FeedingInformation_1.FeedingInformation();
                feedingInfo.instructions = 'feed it';
                feedingInfo.notes = 'feed it good';
                animal = yield AnimalService.prepareAnimal(animal, animalLocation, enclosure, medicalRecords, feedingInfo);
                return AnimalService.saveAnimal(animal);
            });
        }
    },
    {
        method: 'POST',
        path: '/test',
        handler: function (request, h) {
            return `You said:  ${encodeURIComponent(request.payload.test)}!`;
        }
    },
    {
        method: 'GET',
        path: '/{name}',
        handler: function (request, h) {
            return `Hello, ${encodeURIComponent(request.params.name)}!`;
        }
    }
];
module.exports = Routes;
//# sourceMappingURL=routes.js.map