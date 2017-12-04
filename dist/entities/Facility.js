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
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const EntityLimit_1 = require("./EntityLimit");
let Facility = class Facility {
};
__decorate([
    typeorm_1.PrimaryColumn({ type: "int", default: 0 }),
    __metadata("design:type", Number)
], Facility.prototype, "facilityID", void 0);
__decorate([
    typeorm_1.Column({ type: "char", length: 1, default: "" }),
    __metadata("design:type", String)
], Facility.prototype, "facilityType", void 0);
__decorate([
    typeorm_1.OneToMany(type => EntityLimit_1.EntityLimit, entity_limit => entity_limit.facilityLimit, {
        cascadeInsert: true,
        cascadeUpdate: true
    }),
    __metadata("design:type", Array)
], Facility.prototype, "entityFacility", void 0);
Facility = __decorate([
    typeorm_1.Entity()
], Facility);
exports.Facility = Facility;
