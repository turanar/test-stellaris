import {Component, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {TechTreeComponent} from "src/app/component/tech-tree/tech-tree.component";
import {TreeNode} from "src/app/config/tree-node";
import {Tech} from "src/app/config/tech";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'anomalies',
  templateUrl: './tech-tree.component.html',
  styleUrls: ['./tech-tree.component.scss']
})
export class AnomaliesComponent extends TechTreeComponent implements OnInit, OnChanges {
  anomalies : Tech[];
  createAnomaly = this.createNode();

  toggleActivation(event: Event, item: TreeNode) {

  }

  ngOnInit(): void {
    this.loadAnomalies();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['version'] && !changes['version'].firstChange) {
      this.view.clear();
      this.loadAnomalies();
    }
  }

  private createViews(): void {
    for(let ano of this.anomalies) this.createAnomaly({meta: ano});
    this.techService.observe();
  }

  private loadAnomalies(): void {
    this.techService.fetch(this.version, this.type).subscribe(r => {
      this.anomalies = r;
      this.createViews();
    });
  }

  area(key: string): string {
    return '';
  }
}
