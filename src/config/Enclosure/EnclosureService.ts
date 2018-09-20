import {EnclosureRepository} from "./EnclosureRepository";

export function getAllEnclosures(){
    const enclosureRepository = new EnclosureRepository();
    return enclosureRepository.findAll();
}