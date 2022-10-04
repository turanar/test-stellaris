import {Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation,} from "@angular/core";

import {TechnologyService} from "../service/technology.service";
import {Config} from "src/app/config/config";
import {TreeNode} from "src/app/config/tree-node";
import {Tech} from "../config/tech";

declare var Treant: any;
declare var lozad: any;

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'tech-tree',
  styleUrls: ['tech-tree.component.scss'],
  templateUrl: 'tech-tree.component.html'
})
export class TechTree implements OnInit {
  @ViewChild('node') public node: TemplateRef<any>;
  @ViewChild('container', {read: ViewContainerRef}) view: ViewContainerRef

  @Input() type: string;
  config: Config;
  treant: any;
  civics: any[] = [
    { value: (data: Tech) => data.is_gestalt, image: 'ethic_gestalt_consciousness'},
    { value: (data: Tech) => data.is_machine_empire, image: 'auth_machine_intelligence'},
    { value: (data: Tech) => data.is_drive_assimilator, image: 'civic_machine_assimilator'},
    { value: (data: Tech) => data.is_rogue_servitor, image: 'civic_machine_servitor'},
    { value: (data: Tech) => data.is_hive_empire, image: 'auth_hive_mind'},
    { value: (data: Tech) => data.is_megacorp, image: 'auth_corporate'}
  ];

  constructor(private techService : TechnologyService) { }

  find = (index: number): TreeNode => this.treant.tree.nodeDB.db[index];

  visitChildren = (node: TreeNode, f: Function) => {
    node.children.map(this.find).forEach(n => {
      f.call(this,n); this.visitChildren(n, f);
    })
  };

  visitParent = (node: TreeNode, f: Function) => {
    f.call(this, node);
    if(node.parent()) this.visitParent(node.parent(), f);
  }

  toggleActivation(event: TreeNode) {
    if(event.meta.tier < 1) return;
    event.meta.active = !event.meta.active;
    // activate all parents
    if(event.meta.active) this.visitParent(event, n => n.meta.active = true);
    // de-activate all children
    if(!event.meta.active) this.visitChildren(event, n => n.meta.active = false);
  }

  private init(node: TreeNode) {
    node.meta = node;
    node.children.forEach((child:any) => this.init(child));
  }

  ngOnInit(): void {
    this.config = new Config();
    this.config.callback = {
      onCreateNode: this.createNode(),
      onTreeLoaded: this.onTreeLoaded()
    };

    this.techService.fetch(this.type).subscribe(r => {
      this.init(r);
      this.config.container = '#' + this.type;
      this.treant = new Treant({chart: this.config, nodeStructure: r.children[0]});
    })
  }

  createNode() {
    return (treeNode: TreeNode) => {
      let viewRef = this.view.createEmbeddedView(this.node, {$implicit: treeNode.meta, item: treeNode});
      let e = viewRef.rootNodes[0];
      e.className = 'node ' + treeNode.meta.area;
      return e;
    }
  }

  onTreeLoaded() {
    return (tree: any) => {
      const observer = lozad(); // lazy loads elements with default selector as '.lozad'
      observer.observe();
    }
  }

}
