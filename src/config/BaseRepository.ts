import {IRead} from "./IRead";
import {IWrite} from "./IWrite";
import {Collection, connection} from "mongoose";

const mongoose = require('mongoose');
import {DeleteWriteOpResultObject, FilterQuery, InsertOneWriteOpResult, ObjectId, UpdateWriteOpResult} from "mongodb";


export abstract class BaseRepository<T> implements IRead<T>, IWrite<T> {
    public readonly _collection: Collection;

    constructor(name: string){
        this._collection = mongoose.connection.db.collection(name);
    }

    async delete(id: string): Promise<boolean> {
        const result: DeleteWriteOpResultObject = await this._collection.deleteOne( {_id: mongoose.Types.ObjectId(id)});
        return !!result.result.ok;
    }
    async update(id: string, item: T): Promise<boolean> {
        const result: UpdateWriteOpResult = await this._collection.updateOne({_id: mongoose.Types.ObjectId(id)}, {$set: item});
        return !!result.result.ok;
    }
    async updateById(id: ObjectId, item: T): Promise<boolean> {
        const result: UpdateWriteOpResult = await this._collection.updateOne({_id: id}, {$set: item});
        console.log(result);
        return !!result.result.ok;
    }
    async create(item: T): Promise<boolean> {
        const result: InsertOneWriteOpResult = await this._collection.insertOne(item);
        return !!result.result.ok;
    }
    async find(item: T): Promise<T[]> {
        const result = await this._collection.find({$eq: item});
        return result.toArray();
    }
    async findOne(id: string): Promise<T> {
        return await this._collection.findOne({_id: id});
    }
    async findAll(): Promise<T[]> {
        const result =  await this._collection.find({});
        return result.toArray();
    }
    async findById(id: ObjectId): Promise<T> {
        return await this._collection.findOne({_id: mongoose.Types.ObjectId(id)});
    }
}