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
const Entity_1 = require("./Entity");
const Facility_1 = require("./Facility");
const Limits_1 = require("./Limits");
let EntityLimit = class EntityLimit {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], EntityLimit.prototype, "limitID", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 100 }),
    __metadata("design:type", String)
], EntityLimit.prototype, "RiskTaker_Group_Name", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 100, default: "" }),
    __metadata("design:type", String)
], EntityLimit.prototype, "Risk_Taker_Name", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 100, default: "" }),
    __metadata("design:type", String)
], EntityLimit.prototype, "Product", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 50, default: "" }),
    __metadata("design:type", String)
], EntityLimit.prototype, "Risk_Type", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 5, default: "" }),
    __metadata("design:type", String)
], EntityLimit.prototype, "Currency", void 0);
__decorate([
    typeorm_1.Column({ type: "float" }),
    __metadata("design:type", Number)
], EntityLimit.prototype, "Exposure_Amount", void 0);
__decorate([
    typeorm_1.Column({ type: "decimal" }),
    __metadata("design:type", Number)
], EntityLimit.prototype, "Total_Current_Limit", void 0);
__decorate([
    typeorm_1.Column({ type: "decimal" }),
    __metadata("design:type", Number)
], EntityLimit.prototype, "Total_Approved_Limit", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Entity_1._Entity, _entity => _entity.limit, {
        cascadeInsert: true,
        cascadeUpdate: true,
        cascadeRemove: true
    }),
    __metadata("design:type", Entity_1._Entity)
], EntityLimit.prototype, "entity", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Facility_1.Facility, facility => facility.entityFacility, {
        cascadeInsert: true,
        cascadeUpdate: true,
        cascadeRemove: true
    }),
    __metadata("design:type", Facility_1.Facility)
], EntityLimit.prototype, "facilityLimit", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Limits_1.Limits, limits => limits.entityLimit, {
        cascadeInsert: true,
        cascadeUpdate: true,
        cascadeRemove: true
    }),
    __metadata("design:type", Limits_1.Limits)
], EntityLimit.prototype, "entityLimit", void 0);
EntityLimit = __decorate([
    typeorm_1.Entity()
], EntityLimit);
exports.EntityLimit = EntityLimit;
