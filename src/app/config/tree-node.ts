import {Tech} from "./tech";

export abstract class TreeNode {
  id: number;
  parentId: number;
  treeId: number;

  prelim: number;
  modifier: number;
  leftNeighborId: string;
  link: string;
  drawLineThrough: boolean;
  collapsable: boolean;
  collapsed: boolean;
  text: any;

  X: number;
  Y: number;
  connStyle: any;
  connector: any;
  height: number;
  image: string;
  meta: any;
  children: number[];

  abstract getTree();
  abstract getTreeConfig();
  abstract getTreeNodeDb();
  abstract lookupNode(nodeId: number);
  abstract childAt(index:number);
  abstract parent(): TreeNode;
  abstract hide();
  abstract show();
  abstract collapse();
  abstract expand();
}
