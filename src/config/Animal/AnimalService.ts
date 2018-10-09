import {Animal} from "../../models/Animal";
import {AnimalLocation} from "../../models/AnimalLocation";
import {Enclosure} from "../../models/Enclosure";
import {MedicalRecord} from "../../models/MedicalRecord";
import {FeedingInformation} from "../../models/FeedingInformation";
import {AnimalLocationRepository} from "../AnimalLocation/AnimalLocationRepository";
import {EnclosureRepository} from "../Enclosure/EnclosureRepository";
import {MedicalRecordRepository} from "../MedicalRecord/MedicalRecordRepository";
import {FeedingInformationRepository} from "../FeedingInformation/FeedingInformationRepository";
import {AnimalRepository} from "./AnimalRepository";

export async function prepareAnimal(animal:Animal, animalLocation?:AnimalLocation, enclosure?:Enclosure, medicalRecords?:MedicalRecord[], feedingInfo?: FeedingInformation){
    if(animalLocation && !animalLocation._id){
        const animalLocationRepository = new AnimalLocationRepository();
        await animalLocationRepository.create(animalLocation);
        animal.location = animalLocation;
    }
    if (enclosure && !enclosure._id) {
        const enclosureRepository = new EnclosureRepository();
        await enclosureRepository.create(enclosure);
        animal.enclosure = enclosure;
    }
    if(medicalRecords){
        const medicalRecordRepository = new MedicalRecordRepository();
        let medicalRecordsArr = [];
        for(let medicalRecord of medicalRecords){
            if(!medicalRecord._id){
                await medicalRecordRepository.create(medicalRecord);
            }
            medicalRecordsArr.push(medicalRecord);
        }
        animal.medicalRecords = medicalRecordsArr;
    }
    if (feedingInfo && !feedingInfo._id) {
        const feedingInformationRepository = new FeedingInformationRepository();
        await feedingInformationRepository.create(feedingInfo);
        animal.feedingInformation = feedingInfo;
    }

    return animal;
}

export async function saveAnimal(animal: Animal) {
    const animalRepository = new AnimalRepository();
    return await animalRepository.create(animal);
}

export async function findAllAnimals(){
    const animalRepository = new AnimalRepository();
    return await animalRepository.findAll();
}