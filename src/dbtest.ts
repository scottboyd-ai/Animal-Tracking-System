import {Typegoose} from "typegoose";

export async function saveObject(objectType: {new (): Typegoose}, object){
    console.log( await new objectType().getModelForClass(object).save());
}