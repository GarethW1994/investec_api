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
const EntityRelationship_1 = require("./EntityRelationship");
const EntityLimit_1 = require("./EntityLimit");
let _Entity = class _Entity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], _Entity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ unique: true, default: 0 }),
    __metadata("design:type", Number)
], _Entity.prototype, "entityId", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar" }),
    __metadata("design:type", String)
], _Entity.prototype, "entityName", void 0);
__decorate([
    typeorm_1.OneToMany(type => EntityRelationship_1.EntityRelationship, entity_relationship => entity_relationship.child, {
        cascadeInsert: true,
        cascadeUpdate: true
    }),
    __metadata("design:type", Array)
], _Entity.prototype, "ChildRelationship", void 0);
__decorate([
    typeorm_1.OneToMany(type => EntityRelationship_1.EntityRelationship, entity_relationship => entity_relationship.parent, {
        cascadeInsert: true,
        cascadeUpdate: true
    }),
    __metadata("design:type", Array)
], _Entity.prototype, "ParentRelationship", void 0);
__decorate([
    typeorm_1.OneToMany(type => EntityLimit_1.EntityLimit, entity_limit => entity_limit.entity, {
        cascadeInsert: true,
        cascadeUpdate: true
    }),
    __metadata("design:type", Array)
], _Entity.prototype, "limit", void 0);
_Entity = __decorate([
    typeorm_1.Entity()
], _Entity);
exports._Entity = _Entity;
