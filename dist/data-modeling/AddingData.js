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
// Repositories
const EntityLimit_1 = require("../entities/EntityLimit");
const EntityRelationship_1 = require("../entities/EntityRelationship");
const Entity_1 = require("../entities/Entity");
const Facility_1 = require("../entities/Facility");
const Limits_1 = require("../entities/Limits");
const typeorm_1 = require("typeorm");
const csvtojson_1 = require("csvtojson");
class AddingData {
    constructor() {
        this.EntitiesConverter = () => {
            let file = "../csv/entities.csv";
            const converter = new csvtojson_1.Converter();
            converter.fromFile(file, (err, rawData) => __awaiter(this, void 0, void 0, function* () {
                if (err) {
                    console.log(err);
                    return;
                }
                const manager = typeorm_1.getRepository(Entity_1._Entity);
                let _EntityRepo = new Entity_1._Entity();
                rawData.forEach((data) => __awaiter(this, void 0, void 0, function* () {
                    let entity = new Entity_1._Entity();
                    entity.entityId = data["Parent Entity Id"];
                    entity.entityName = data["Parent Entity Name"];
                    manager
                        .save(entity)
                        .then(entity => console.log('Parent Entities Saved!'))
                        .catch((error) => { console.log(error); });
                }));
                rawData.forEach((data) => __awaiter(this, void 0, void 0, function* () {
                    let entity = new Entity_1._Entity();
                    entity.entityId = data["Entity Id"];
                    entity.entityName = data["Entity Name"];
                    manager
                        .save(entity)
                        .then(entity => console.log('Child Entities Saved!'))
                        .catch((error) => { console.log(error); });
                }));
            }));
        };
        this.EntityRelationshipConverter = () => {
            let file = "../csv/entities.csv";
            const converter = new csvtojson_1.Converter();
            converter.fromFile(file, (err, rawData) => {
                if (err) {
                    console.log(err);
                    return;
                }
                const entityRelationshipRepo = typeorm_1.getRepository(EntityRelationship_1.EntityRelationship);
                const _entityRepository = typeorm_1.getRepository(Entity_1._Entity);
                let currentEntity;
                entityRelationshipRepo.query("DELETE FROM entity_relationship");
                rawData.forEach((data) => __awaiter(this, void 0, void 0, function* () {
                    currentEntity = data;
                    let currentParentEntityID = data["Parent Entity Id"];
                    let currentRowEntity = yield _entityRepository.findOne({ entityId: currentParentEntityID });
                    let currentRowRelationship = yield entityRelationshipRepo.findOne({ relationshipType: data["Relationship Type"] });
                    let currentChildEntityID = data["Entity Id"];
                    let currentChildEntityRow = yield _entityRepository.findOne({ entityId: currentChildEntityID });
                    try {
                        if (currentEntity["Parent Entity Name"] !== currentRowEntity.entityName) {
                            // create a new parent
                            let newRelationship = new EntityRelationship_1.EntityRelationship();
                            newRelationship.relationshipType = data["Relationship Type"];
                            newRelationship.parent = currentRowEntity;
                            newRelationship.child = currentChildEntityRow;
                            // save the parent
                            currentEntity = yield entityRelationshipRepo.save(newRelationship);
                            console.log('Saved Relationship Successfully.../');
                        }
                    }
                    catch (e) {
                        console.log('Could not find parent... moving on.../');
                    }
                }));
            });
        };
        this.FacilityConverter = () => {
            let file = "../csv/limits.csv";
            const converter = new csvtojson_1.Converter();
            converter.fromFile(file, (err, rawData) => {
                if (err) {
                    console.log(err);
                    return;
                }
                let facilityRepo = typeorm_1.getRepository(Facility_1.Facility);
                let currentFacility;
                facilityRepo.query("DELETE FROM facility");
                rawData.forEach((data) => __awaiter(this, void 0, void 0, function* () {
                    currentFacility = data;
                    let currentFacilityId = data["Facility Id"];
                    let currentFacilityRow = yield facilityRepo.findOne({ facilityID: currentFacilityId });
                    try {
                        if (!currentFacilityRow) {
                            // let check = currentFacilityId === currentFacilityRow.facilityID ? true : false || undefined;
                            // console.log(check);
                            let newFacility = new Facility_1.Facility();
                            //
                            newFacility.facilityID = data["Facility Id"];
                            newFacility.facilityType = data["Facility Type"];
                            //save new facility
                            currentFacility = yield facilityRepo.save(newFacility);
                            console.log("saved facility successfully");
                        }
                    }
                    catch (e) {
                        console.log('Facility Already Exists In Database');
                    }
                }));
            });
        };
        this.LimitConverter = () => {
            let file = "../csv/limits.csv";
            const converter = new csvtojson_1.Converter();
            converter.fromFile(file, (err, rawData) => {
                if (err) {
                    console.log(err);
                    return;
                }
                const limitRepo = typeorm_1.getRepository(Limits_1.Limits);
                let currentLimit;
                limitRepo.query("DELETE FROM limits");
                rawData.forEach((data) => __awaiter(this, void 0, void 0, function* () {
                    currentLimit = data;
                    let currentLimitId = data["Limit Id"];
                    let currentLimitRow = yield limitRepo.findOne({ limitID: currentLimitId });
                    try {
                        if (!currentLimitRow) {
                            let newLimit = new Limits_1.Limits();
                            newLimit.limitID = data["Limit Id"];
                            newLimit.limitType = data["Limit Type"];
                            //save new limit
                            currentLimit = yield limitRepo.save(newLimit);
                            console.log("saved limit successfully");
                        }
                    }
                    catch (e) {
                        console.log('Limit Already Exists In Database');
                    }
                }));
            });
        };
        this.LimitsConverter = () => {
            let file = "../csv/limits.csv";
            let file2 = "../csv/entities.csv";
            const converter = new csvtojson_1.Converter();
            converter.fromFile(file, (err, rawData) => {
                if (err) {
                    console.log(err);
                    return;
                }
                const entityLimitRepo = typeorm_1.getRepository(EntityLimit_1.EntityLimit);
                const facilityRepo = typeorm_1.getRepository(Facility_1.Facility);
                const _entityRepository = typeorm_1.getRepository(Entity_1._Entity);
                const limitRepo = typeorm_1.getRepository(Limits_1.Limits);
                let currentEntity;
                entityLimitRepo.query("DELETE FROM entity_limit");
                rawData.forEach((data) => __awaiter(this, void 0, void 0, function* () {
                    currentEntity = data;
                    let currentEntityID = data["Entity Id"];
                    let currentRowEntity = yield _entityRepository.findOne({ entityId: currentEntityID });
                    let currentFacilityLimit = yield facilityRepo.findOne({ facilityID: data["Facility Id"] });
                    let currentLimit = yield limitRepo.findOne({ limitID: data["Limit Id"] });
                    try {
                        if (currentRowEntity) {
                            // create a new limit
                            let newEntityLimit = new EntityLimit_1.EntityLimit();
                            newEntityLimit.RiskTaker_Group_Name = data["Risk Taker Group Name"];
                            newEntityLimit.Risk_Taker_Name = data["Risk Taker Name"];
                            newEntityLimit.Product = data["Product"];
                            newEntityLimit.Risk_Type = data["Risk Type"];
                            newEntityLimit.Currency = data["Currency"];
                            newEntityLimit.Exposure_Amount = data["Exposure Amount"];
                            newEntityLimit.Total_Current_Limit = data["Total Current Limit"];
                            newEntityLimit.Total_Approved_Limit = data["Total Approved Limit"];
                            newEntityLimit.entity = currentRowEntity;
                            newEntityLimit.facilityLimit = currentFacilityLimit;
                            newEntityLimit.entityLimit = currentLimit;
                            // save the parent
                            currentEntity = yield entityLimitRepo.save(newEntityLimit);
                            console.log('Saved Entity Limit Successfully.../');
                        }
                    }
                    catch (e) {
                        console.log(e);
                    }
                }));
            });
        };
    }
}
exports.AddingData = AddingData;
