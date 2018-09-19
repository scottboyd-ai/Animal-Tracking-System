import {BaseRepository} from "../BaseRepository";
import {Animal} from "../../models/Animal";

export class AnimalRepository extends BaseRepository<Animal> {
    constructor(){
        super('animals');
    }

}