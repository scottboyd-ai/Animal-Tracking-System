import {prop, Typegoose} from "typegoose";
import {Types} from "mongoose";

export class BaseModel extends Typegoose{
    @prop()
    _id?: Types.ObjectId;
}