import {BaseRepository} from "../BaseRepository";
import {Enclosure} from "../../models/Enclosure";

export class EnclosureRepository extends BaseRepository<Enclosure> {
    constructor(){
        super('enclosures');
    }

}