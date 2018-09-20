import {prop} from "typegoose";
import {BaseModel} from "./BaseModel";

export class Enclosure extends BaseModel{
    @prop()
    name: string;
    @prop()
    dimensions: string;
    @prop()
    lastCleaned: number /*Epoch*/;
    @prop()
    notes: string;
}