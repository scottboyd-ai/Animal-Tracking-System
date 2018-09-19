import {prop} from "typegoose";
import {BaseModel} from "./BaseModel";

export class FeedingInformation extends BaseModel{
    @prop()
    instructions: string;
    @prop()
    notes: string

}