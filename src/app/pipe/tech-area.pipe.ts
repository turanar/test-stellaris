import {Pipe, PipeTransform} from "@angular/core";
import {TreeNode} from "src/app/config/tree-node";

declare var TreeStore: any;

@Pipe({ name: 'techArea'})
export class TechAreaPipe implements PipeTransform {

  transform(value) {
    for(let store of TreeStore.storeMap.values()) {
      if(!store) continue;
      let found = store.nodeDB.db.find((n:TreeNode) => n.meta.key == value);
      if(found) return found.meta.area;
    }
  }
}
