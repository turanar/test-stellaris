import {
  Component, ComponentFactoryResolver, ElementRef, EmbeddedViewRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewChild, ViewContainerRef,
  ViewEncapsulation,
} from "@angular/core";
import {TechnologyService} from "../service/technology.service";

declare var Treant: any;

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'treant-tree',
  styleUrls: ['treant-tree.component.scss'],
  templateUrl: 'treant-tree.component.html'
})
export class TreantTree implements OnInit {
  @ViewChild('node') public node: TemplateRef<any>;
  @ViewChild('treeDiv') public treantElement: ElementRef;

  test: EmbeddedViewRef<any>[] = [];

  constructor(private techService : TechnologyService, private viewRef : ViewContainerRef) {

  }

  private init(tree: any) {
    tree.HTMLid = tree.key;
    tree.text = {name: tree.name};
    tree.innerHTML = `<div style='width:250px;height: 70px;border: 1px solid black'>${tree.name}</div>`
    tree.meta = tree;
    if(tree.children) {
      tree.children.forEach((child:any) => this.init(child));
    }
  }

  ngOnInit(): void {
    this.techService.physics().subscribe(r => {
      this.init(r);
       Treant({chart: this.config, nodeStructure: r.children[0]});
    })
  }

  createNode() {
    return (node: any) => {
      console.log(node);
    }
  }

  onTreeLoaded() {
    return (test: any) => {
      console.log(test.getTree());
    }
  }
  private config: any  =  {
    container: '#treant-id',
    rootOrientation: 'WEST', // NORTH || EAST || WEST || SOUTH
    nodeAlign: 'TOP',
    hideRootNode: true,
    siblingSeparation: 20,
    subTeeSeparation:  20,
    scrollbar: 'resize',
    connectors: {
      type: 'step'
    },
    node: {
      HTMLclass: 'tech',
      collapsable: false
    },
    callback: {
      onCreateNode: this.createNode(),
      onTreeLoaded: this.onTreeLoaded()
    }
  };
}
