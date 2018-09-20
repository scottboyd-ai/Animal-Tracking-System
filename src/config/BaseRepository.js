"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
class BaseRepository {
    constructor(name) {
        this._collection = mongoose.connection.db.collection(name);
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._collection.deleteOne({ $eq: { _id: id } });
            return !!result.result.ok;
        });
    }
    update(id, item) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._collection.updateOne({ $eq: { _id: id } }, item);
            return !!result.result.ok;
        });
    }
    create(item) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._collection.insertOne(item);
            return !!result.result.ok;
        });
    }
    find(item) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._collection.find({ $eq: item });
            return result.toArray();
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._collection.findOne({ $eq: { _id: id } });
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._collection.find({});
            return result.toArray();
        });
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=BaseRepository.js.map