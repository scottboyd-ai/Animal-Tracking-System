"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typegoose_1 = require("typegoose");
const AnimalLocation_1 = require("./AnimalLocation");
const Sex_1 = require("../Enums/Sex");
const Enclosure_1 = require("./Enclosure");
const MedicalRecord_1 = require("./MedicalRecord");
const FeedingInformation_1 = require("./FeedingInformation");
const BaseModel_1 = require("./BaseModel");
const WeightUnit_1 = require("../Enums/WeightUnit");
class Animal extends BaseModel_1.BaseModel {
}
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Animal.prototype, "name", void 0);
__decorate([
    typegoose_1.prop({ ref: AnimalLocation_1.AnimalLocation }),
    __metadata("design:type", Object)
], Animal.prototype, "location", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Animal.prototype, "species", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Date)
], Animal.prototype, "dob", void 0);
__decorate([
    typegoose_1.prop({ enum: Sex_1.Sex }),
    __metadata("design:type", Number)
], Animal.prototype, "sex", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Number)
], Animal.prototype, "weight", void 0);
__decorate([
    typegoose_1.prop({ enum: WeightUnit_1.WeightUnit }),
    __metadata("design:type", Number)
], Animal.prototype, "weightUnit", void 0);
__decorate([
    typegoose_1.prop({ ref: Enclosure_1.Enclosure }),
    __metadata("design:type", Object)
], Animal.prototype, "enclosure", void 0);
__decorate([
    typegoose_1.arrayProp({ itemsRef: MedicalRecord_1.MedicalRecord }),
    __metadata("design:type", Array)
], Animal.prototype, "medicalRecords", void 0);
__decorate([
    typegoose_1.prop({ ref: FeedingInformation_1.FeedingInformation }),
    __metadata("design:type", Object)
], Animal.prototype, "feedingInformation", void 0);
exports.Animal = Animal;
//# sourceMappingURL=Animal.js.map