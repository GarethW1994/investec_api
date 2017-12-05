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
const Server_1 = require("./server/Server");
const Routes_1 = require("./routes/Routes");
const import_data_1 = require("./import-data");
var data_import = new import_data_1.DataImport();
data_import.dataImport();
// classes instance
var AppRoutes = new Routes_1.Routes();
// server instance
var server = new Server_1.Server(5000);
//Grant access to the resources to web browers
//specify what they can and can't do
server.app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
        return res.status(200).json({});
    }
    next();
});
//routes
server.app.get("/api/entity_limit/:id", AppRoutes.getLimits);
server.app.get("/api/entity", AppRoutes.getEntity);
server.app.get("/api/entity_relationship", AppRoutes.getRelationship);
server.app.get("/api/parent_entity", AppRoutes.getParentEntity);
server.app.get("/api/child_entity/:id", AppRoutes.getChildEntity);
server.app.get("/importCSV", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
}));
