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
class RelationshipTableModeling {
    PopulateParentEntity() {
        return __awaiter(this, void 0, void 0, function* () {
            //   let entityRepo = getRepository(_Entity);
            //
            //   let ParentEntityManger = getRepository(ParentEntity);
            //   let parentEntityRepo: ParentEntity = new ParentEntity();
            //
            //   let entityData = await entityRepo.find({});
            //
            //
            //   entityData.forEach((data) => {
            //
            //       parentEntityRepo.entityId = data.entityId;
            //       parentEntityRepo.entityName = data.entityName;
            //
            //       ParentEntityManger.save(parentEntityRepo);
            //   });
            //
            //   let parent = await ParentEntityManger.find({});
            //
            //   console.log(parent);
        });
    }
}
exports.RelationshipTableModeling = RelationshipTableModeling;
