import { AddingData } from './data-modeling/AddingData';

let addingData = new AddingData();

let fileEntities = process.argv[2] || './csv/entities.csv';
let fileLimits =  process.argv[3] || './csv/limits.csv';

import { ConnectionDB } from "./db-connection/Connection";
import { createConnection } from "typeorm";

console.log(fileEntities);

async function dataImport() {
    await addingData.EntityRelationshipConverter(fileEntities);
    // await addingData.FacilityConverter(fileLimits);
    // await addingData.LimitConverter(fileLimits);
    // await addingData.LimitsConverter(fileEntities, fileLimits);
}

(async function(){

  const connectionDB = new ConnectionDB();
  const dbCon = connectionDB.connectToDb();

  dbCon.then(async connection => {
      console.log('connected to DB');
      //return await connection;
      await dataImport();
      console.log("Done importing data!");
  })
  .catch(Error => {
      console.log(Error);
  });

})();
