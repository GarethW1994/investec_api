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
const EntityRelationship_1 = require("../entities/EntityRelationship");
const Entity_1 = require("../entities/Entity");
const EntityLimit_1 = require("../entities/EntityLimit");
const Facility_1 = require("../entities/Facility");
const Limits_1 = require("../entities/Limits");
class ConnectionDB {
    connectToDb() {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield typeorm_1.createConnection({
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: "investec_user",
                password: "Investec3!",
                database: "investec_data",
                synchronize: true,
                entities: [EntityRelationship_1.EntityRelationship, Entity_1._Entity, EntityLimit_1.EntityLimit, Facility_1.Facility, Limits_1.Limits]
            });
        });
    }
}
exports.ConnectionDB = ConnectionDB;
