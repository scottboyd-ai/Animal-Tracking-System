import {EnclosureRepository} from "./EnclosureRepository";
import {Enclosure} from "../../models/Enclosure";

function getRepository():EnclosureRepository{
    return new EnclosureRepository();
}

export function getAllEnclosures(){
    return getRepository().findAll();
}

export async function updateEnclosure(enclosure){
    const enclosureRepository:EnclosureRepository = getRepository();
    let enclosureObject:Enclosure = await enclosureRepository.findById(enclosure._id);
    delete enclosure._id;
    return enclosureRepository.updateById(enclosureObject._id, enclosure);
}

export async function addNewEnclosure(enclosure){
    getRepository().create(enclosure);
}

