import {Animal} from "./models/Animal";
import {Sex} from "./Enums/Sex";
import {AnimalLocation} from "./models/AnimalLocation";
import {Enclosure} from "./models/Enclosure";
import {MedicalRecord} from "./models/MedicalRecord";
import {FeedingInformation} from "./models/FeedingInformation";
import {prepareAnimal, saveAnimal} from "./config/Animal/AnimalService";
import * as EnclosureService from "./config/Enclosure/EnclosureService";
import * as htmlUtil from "./util/htmlUtil";
import {AgeUnit, getValue as getAgeValue} from "./Enums/AgeUnit";
import {WeightUnit, getValue as getWeightValue} from "./Enums/WeightUnit";



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
        handler: async function (request, h) {
            const ageUnitOptions = htmlUtil.formatAgeUnitsAsSelectOptions();
            const weightUnitOptions = htmlUtil.formatWeightUnitsAsSelectOptions();
            const enclosures = await EnclosureService.getAllEnclosures();
            const enclosureOptions = htmlUtil.formatEnclosuresAsSelectOptions(enclosures);
            const data = {
                ageUnitOptions: ageUnitOptions,
                weightUnitOptions: weightUnitOptions,
                enclosureOptions: enclosureOptions
            };
            return h.view('newanimal.html', data);
        }
    },
    {
        method: 'POST',
        path: '/animals/new',
        handler: async function (request, h){
            let animal = new Animal();
            animal.name = request.payload.animalName;
            animal.species = request.payload.species;
            animal.age = request.payload.age;
            animal.ageUnit = getAgeValue(request.payload.ageUnit);
            animal.weight = request.payload.weight;
            animal.weightUnit = getWeightValue(request.payload.weightUnit);
            let enclosure = new Enclosure();
            if (request.payload.newEnclosureVal) {
                enclosure.name = request.payload.enclosureName;
                enclosure.dimensions = request.payload.dimensions;
                enclosure.lastCleaned = new Date(request.payload.enclosureLastCleaned).getTime();
                enclosure.notes = request.payload.enclosureNotes;
            } else if (request.payload.enclosure._id !== 0) {
                enclosure = request.payload.enclosure;
            }
            let feedingInformation = new FeedingInformation();
            if (request.payload.feedingInstructions || request.payload.feedingNotes) {
                feedingInformation.instructions = request.payload.feedingInstructions;
                feedingInformation.notes = request.payload.feedingNotes;
            }

            return saveAnimal(animal);
        }
    },
    {
        method: 'GET',
        path: '/test',
        handler: async function (request, h) {
            let animal = new Animal();
            animal.name = 'Hello';
            let animalLocation = new AnimalLocation();
            animalLocation.name = 'new location';
            animal.species = 'snek';
            animal.age = 23;
            animal.sex = Sex.FEMALE;
            animal.weight = 42;
            let enclosure = new Enclosure();
            enclosure.dimensions = 'smol';
            enclosure.lastCleaned = new Date().getTime();
            enclosure.notes = 'sweet';
            let medicalRecords = [];
            let medicalRecord1 = new MedicalRecord();
            medicalRecord1.datePerformed = new Date().getTime();
            medicalRecord1.measuredWeight = 41;
            medicalRecord1.measuredWeightUnit = WeightUnit.GRAMS;
            medicalRecords.push(medicalRecord1);
            let feedingInfo = new FeedingInformation();
            feedingInfo.instructions = 'feed it';
            feedingInfo.notes = 'feed it good';

            animal = await prepareAnimal(animal, animalLocation, enclosure, medicalRecords, feedingInfo);
            return saveAnimal(animal);
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
