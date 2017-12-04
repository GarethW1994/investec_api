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
require("reflect-metadata");
const typeorm_1 = require("typeorm");
// Repositories
const Entity_1 = require("../entities/Entity");
const EntityRelationship_1 = require("../entities/EntityRelationship");
const EntityLimit_1 = require("../entities/EntityLimit");
class Routes {
    getLimits(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const EntityLimitRepo = typeorm_1.getRepository(EntityLimit_1.EntityLimit);
            const id = Number(req.params.id);
            const entityLimit = yield EntityLimitRepo
                .find({
                join: {
                    alias: "entity_limit",
                    leftJoinAndSelect: {
                        entity: "entity_limit.entity"
                    }
                }
            }).then(limitLoaded => {
                let arr = [];
                for (var i in limitLoaded) {
                    if (limitLoaded[i].entity.entityId === id)
                        arr.push(limitLoaded[i]);
                }
                res.json({
                    status: 200,
                    data: arr
                });
            });
        });
    }
    getEntity(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const entityRepo = typeorm_1.getRepository(Entity_1._Entity);
            const entity = yield entityRepo
                .find({
                join: {
                    alias: "_entity",
                    leftJoinAndSelect: {
                        parent: "_entity.ParentRelationship",
                        child: "_entity.ChildRelationship",
                        limit: "_entity.limit"
                    }
                }
            }).then(loadedEntity => {
                res.json({
                    status: 200,
                    data: loadedEntity
                });
            });
        });
    }
    getRelationship(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const entityRelationshipRepo = typeorm_1.getRepository(EntityRelationship_1.EntityRelationship);
            const entityRelationship = yield entityRelationshipRepo
                .find({
                join: {
                    alias: "entity_relationship",
                    leftJoinAndSelect: {
                        parent: "entity_relationship.parent",
                        child: "entity_relationship.child"
                    }
                }
            }).then(loadedEntityRelationship => {
                res.json({
                    status: 200,
                    data: loadedEntityRelationship
                });
            });
        });
    }
    getChildEntity(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const entityRelationshipRepo = typeorm_1.getRepository(EntityRelationship_1.EntityRelationship);
            let parentId = Number(req.params.id);
            const entityRelationship = yield entityRelationshipRepo
                .find({
                join: {
                    alias: "entity_relationship",
                    leftJoinAndSelect: {
                        parent: "entity_relationship.parent",
                        child: "entity_relationship.child"
                    }
                }
            }).then((loadedEntityRelationship) => __awaiter(this, void 0, void 0, function* () {
                let arr = [];
                for (var i in loadedEntityRelationship) {
                    if (loadedEntityRelationship[i].parent.entityId === parentId)
                        arr.push(loadedEntityRelationship[i].child);
                }
                res.json({
                    status: 200,
                    data: arr
                });
            }));
        });
    }
    getParentEntity(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // const parentRepo = getRepository(ParentEntity);
            //
            // const parent = await parentRepo
            // .createQueryBuilder("parent_entity")
            // .leftJoinAndSelect("parent_entity.children", "child_entity")
            // .getMany();
            //
            // res.json({
            //   status: 200,
            //   data: parent
            // })
        });
    }
}
exports.Routes = Routes;
