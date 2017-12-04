import 'reflect-metadata';
import { createConnection, Connection, getRepository } from "typeorm";

// Repositories
import { EntityRelationship } from '../entities/EntityRelationship';
import { _Entity } from '../entities/Entity';
import { EntityLimit } from  '../entities/EntityLimit';
import { Facility } from '../entities/Facility';
import { Limits } from '../entities/Limits';

export class ConnectionDB {
    private conn;

    async connectToDb() {
        const connection = await createConnection({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "investec_user",
            password: "Investec3!",
            database: "investec_data",
            synchronize: true,
            entities: [ EntityRelationship, _Entity, EntityLimit, Facility, Limits ]
        })
      }
}
