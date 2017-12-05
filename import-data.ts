import { AddingData } from './data-modeling/AddingData';

let addingData = new AddingData();

let fileEntities = './csv/entities.csv';
let fileLimits = './csv/limits.csv';

console.log(fileEntities);
export class DataImport {
  constructor() {

  }

  async dataImport() {
      await addingData.EntityRelationshipConverter(fileEntities);
      await addingData.FacilityConverter(fileLimits);
      await addingData.LimitConverter(fileLimits);
      await addingData.LimitsConverter(fileEntities, fileLimits);
  }
}
// const dataImport = async function() {
// }
