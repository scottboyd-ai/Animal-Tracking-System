import {Animal} from "./models/Animal";
import {Sex} from "./Enums/Sex";
import {AnimalLocation} from "./models/AnimalLocation";
import {Enclosure} from "./models/Enclosure";
import {MedicalRecord} from "./models/MedicalRecord";
import {WeightUnit} from "./Enums/WeightUnit";
import {FeedingInformation} from "./models/FeedingInformation";
import {prepareAnimal, saveAnimal} from "./config/Animal/AnimalService";

let Routes = [
    {
        method: 'GET',
        path: '/',
        handler: async function (request, h) {
            return h.view('index.html');
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
