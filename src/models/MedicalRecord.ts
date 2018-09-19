import {prop} from "typegoose";
import {WeightUnit} from "../Enums/WeightUnit";
import {BaseModel} from "./BaseModel";

export class MedicalRecord extends BaseModel{
    @prop()
    datePerformed: number /*Epoch*/;
    @prop()
    measuredWeight: number;
    @prop({enum: WeightUnit})
    measuredWeightUnit: WeightUnit;
}