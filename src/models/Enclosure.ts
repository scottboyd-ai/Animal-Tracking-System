import {prop} from "typegoose";
import {BaseModel} from "./BaseModel";

export class Enclosure extends BaseModel{
    @prop()
    dimensions: string;
    @prop()
    lastCleaned: number /*Epoch*/;
    @prop()
    notes: string;
}