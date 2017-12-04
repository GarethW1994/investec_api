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
const csv = require("csvtojson");
class FileParser {
    constructor(path) {
        this.filePath = "";
        this.jsonData = [];
        this.filePath = path;
    }
    convert() {
        csv()
            .fromFile(this.filePath)
            .on('json', (jsonObj) => __awaiter(this, void 0, void 0, function* () {
            return jsonObj;
        }))
            .on('done', (error) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log('extracted data succesfully...');
            }
        });
    }
    pushData(rawData) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(rawData);    
            yield this.jsonData.push(rawData);
            return this.jsonData;
        });
    }
    getData() {
        console.log(this.jsonData);
        return this.jsonData;
    }
}
exports.FileParser = FileParser;
