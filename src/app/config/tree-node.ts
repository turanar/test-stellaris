import {Tech} from "./tech";

export interface TreeNode {
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

  disabled: boolean;

  getTree();
  getTreeConfig();
  getTreeNodeDb();
  lookupNode(nodeId: number);
  childAt(index:number);
  parent(): TreeNode;
  hide(collapse_to_point?: boolean);
  show();
  collapse();
  expand();
  toggleCollapse();
  hideConnector();
}
