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
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Connection_1 = require("../db-connection/Connection");
class Server {
    constructor(port) {
        this.app = express();
        this.Config();
        this.connectDatabase();
        this.startServer(port);
    }
    Config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(express.static(__dirname + "public"));
        this.app.use(logger('dev'));
    }
    connectDatabase() {
        const connectionDB = new Connection_1.ConnectionDB();
        const dbCon = connectionDB.connectToDb();
        dbCon.then((connection) => __awaiter(this, void 0, void 0, function* () {
            console.log('connected to DB');
            return yield connection;
        }))
            .catch(Error => {
            console.log(Error);
        });
    }
    startServer(port) {
        this.app.listen(port, () => {
            console.log('Server Running at http://localhost:' + port);
        });
    }
}
exports.Server = Server;
