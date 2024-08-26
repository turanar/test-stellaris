import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from "@angular/core";

import {TechnologyService} from "../../service/technology.service";
import {Config} from "src/app/config/config";
import {TreeNode} from "src/app/config/tree-node";
import {Tech} from "../../config/tech";

declare var Treant: any;
declare var lozad: any;
declare var $: any;

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'tech-tree',
  styleUrls: ['tech-tree.component.scss'],
  templateUrl: 'tech-tree.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechTreeComponent implements OnInit, OnChanges {
  @ViewChild('node') public node: TemplateRef<any>;
  @ViewChild('break') public break: TemplateRef<any>;

  @ViewChild('container', {read: ViewContainerRef}) view: ViewContainerRef
  @ViewChild('parent') container: ElementRef;

  @Input() type: string;
  @Input() version: string = 'cepheus-3.4.3';

  config: Config;
  treant: any;
  observer: any;
  nodeDB: TreeNode[];

  civics: any[] = [
    { value: (data: Tech) => data.is_gestalt, image: 'ethic_gestalt_consciousness'},
    { value: (data: Tech) => data.is_machine_empire, image: 'auth_machine_intelligence'},
    { value: (data: Tech) => data.is_drive_assimilator, image: 'civic_machine_assimilator'},
    { value: (data: Tech) => data.is_rogue_servitor, image: 'civic_machine_servitor'},
    { value: (data: Tech) => data.is_hive_empire, image: 'auth_hive_mind'},
    { value: (data: Tech) => data.is_megacorp, image: 'auth_corporate'}
  ];

  constructor(protected techService : TechnologyService, private changeDetectorRef : ChangeDetectorRef) {

  }

  private visitChildren = (node: TreeNode, f: Function) => {
    node.children.map(i => node.getTreeNodeDb().get(i)).forEach(n => {
      f.call(this,n); this.visitChildren(n, f);
    })
  };

  private visitParent = (node: TreeNode, f: Function) => {
    f.call(this, node);
    if(node.parent()) this.visitParent(node.parent(), f);
  }

  private changePathClass(node: TreeNode) {
    let parent = node.parent();
    if(node.connector) {
      let path = node.connector.node
      if (parent.meta.tier == 0 || parent.meta.active) path.setAttribute('class', this.type);
      if (!parent.meta.active && parent.meta.tier>0) path.setAttribute('class', '');
    }
  }

  private updatePath(node: TreeNode) {
    let root = node.getTreeNodeDb().get(0);
    this.visitChildren(root, this.changePathClass);
  }

  private init(node: any) {
    node.meta = node;
    node.children.forEach((child:any) => this.init(child));
  }

  private load() {
    if(this.container !== undefined) this.container.nativeElement.setAttribute('style','');
    this.techService.fetch(this.version, this.type).subscribe(r => {
      this.init(r);
      this.config.container = '#' + this.type;
      this.treant = new Treant({chart: this.config, nodeStructure: r.children[0]});
      this.nodeDB = this.treant.tree.nodeDB.db;
    })
  }


  protected createNode() {
    return (treeNode: any) => {
      let viewRef = this.view.createEmbeddedView(this.node, {$implicit: treeNode.meta, item: treeNode});
      let e = viewRef.rootNodes[0];
      e.className = 'node ' + treeNode.meta.area;
      return e;
    }
  }

  private onTreeLoaded() {
    return (root: TreeNode) => {
      if(!this.observer) this.observer = lozad(); // lazy loads elements with default selector as '.lozad'
      this.techService.observe();
      this.changeDetectorRef.detectChanges();
    }
  }

  toggleActivation(event: Event, item: TreeNode) {
    if(item.meta.tier < 1) return;
    item.meta.active = !item.meta.active;
    // activate all parents
    if(item.meta.active) this.visitParent(item, n => n.meta.active = true);
    // de-activate all children
    if(!item.meta.active) this.visitChildren(item, n => n.meta.active = false);
    this.updatePath(item);
    event.stopPropagation();
  }

  area(key: string): string {
    console.log(this.treant);
    let find = this.nodeDB.find(n => n.meta.key == key)
    return (find !== undefined)  ? find.meta.area : '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['version'] && !changes['version'].firstChange) {
      this.view.clear();
      this.treant.destroy();
      this.load();
    }
  }

  ngOnInit(): void {
    this.config = new Config();
    this.config.callback = {
      onCreateNode: this.createNode(),
      onTreeLoaded: this.onTreeLoaded()
    };
    this.load();
  }
}
