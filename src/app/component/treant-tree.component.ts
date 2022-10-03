import {Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation,} from "@angular/core";

import {TechnologyService} from "../service/technology.service";
import {Config} from "src/app/config/config";

declare var Treant: any;
declare var lozad: any;

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'treant-tree',
  styleUrls: ['treant-tree.component.scss'],
  templateUrl: 'treant-tree.component.html'
})
export class TreantTree implements OnInit {
  @ViewChild('node') public node: TemplateRef<any>;
  @ViewChild('treeDiv', {read: ViewContainerRef}) viewRef: ViewContainerRef

  @Input() type: string;
  config: Config;

  constructor(private techService : TechnologyService) {

  }

  onClick(event: any) {

  }

  private init(tree: any) {
    tree.meta = tree;
    if(tree.children) {
      tree.children.forEach((child:any) => this.init(child));
    }
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
      Treant({chart: this.config, nodeStructure: r.children[0]});
    })
  }

  createNode() {
    return (treeNode: any, element: any) => {
      let viewRef = this.viewRef.createEmbeddedView(this.node, {$implicit: treeNode, data: treeNode.meta});
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
