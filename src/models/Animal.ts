import {prop, Ref, arrayProp} from "typegoose";
import {AnimalLocation} from "./AnimalLocation";
import {Sex} from '../Enums/Sex';
import {Enclosure} from "./Enclosure";
import {MedicalRecord} from "./MedicalRecord";
import {FeedingInformation} from "./FeedingInformation";
import {BaseModel} from "./BaseModel";

export class Animal extends BaseModel{
    @prop()
    name: string;
    @prop({ref: AnimalLocation})
    location: Ref<AnimalLocation>;
    @prop()
    species: string;
    @prop()
    age: number;
    @prop({enum: Sex})
    sex: Sex;
    @prop()
    weight: number;
    @prop({ref: Enclosure})
    enclosure: Ref<Enclosure>;
    @arrayProp({itemsRef: MedicalRecord})
    medicalRecords: MedicalRecord[];
    @prop({ref: FeedingInformation})
    feedingInformation: Ref<FeedingInformation>;
}