import {BaseRepository} from "../BaseRepository";
import {AnimalLocation} from "../../models/AnimalLocation";

export class AnimalLocationRepository extends BaseRepository<AnimalLocation> {
    constructor(){
        super('animallocations');
    }

}