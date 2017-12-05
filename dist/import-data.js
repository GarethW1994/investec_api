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
const AddingData_1 = require("./data-modeling/AddingData");
let addingData = new AddingData_1.AddingData();
let fileEntities = './csv/entities.csv';
let fileLimits = './csv/limits.csv';
console.log(fileEntities);
class DataImport {
    constructor() {
    }
    dataImport() {
        return __awaiter(this, void 0, void 0, function* () {
            yield addingData.EntityRelationshipConverter(fileEntities);
            yield addingData.FacilityConverter(fileLimits);
            yield addingData.LimitConverter(fileLimits);
            yield addingData.LimitsConverter(fileEntities, fileLimits);
        });
    }
}
exports.DataImport = DataImport;
// const dataImport = async function() {
// }
