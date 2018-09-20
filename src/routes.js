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
const WeightUnit_1 = require("./Enums/WeightUnit");
const FeedingInformation_1 = require("./models/FeedingInformation");
const AnimalService_1 = require("./config/Animal/AnimalService");
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
            return h.view('newanimal.html');
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
                animal.age = 23;
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
                animal = yield AnimalService_1.prepareAnimal(animal, animalLocation, enclosure, medicalRecords, feedingInfo);
                return AnimalService_1.saveAnimal(animal);
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