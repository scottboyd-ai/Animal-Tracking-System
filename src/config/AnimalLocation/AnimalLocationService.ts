import {AnimalLocationRepository} from "./AnimalLocationRepository";

export function getAllLocations(){
    const locationRepository = new AnimalLocationRepository();
    return locationRepository.findAll();
}