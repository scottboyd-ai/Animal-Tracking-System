import {prop} from "typegoose";
import {BaseModel} from "./BaseModel";

export class AnimalLocation extends BaseModel {
    @prop()
    name: string;
}