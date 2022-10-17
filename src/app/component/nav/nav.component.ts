import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export class AreaOption {
  label: string;
  icon: string;
  constructor(label: string, icon: string) {
    this.label = label;
    this.icon = icon;
  }
}

export let AreaOptions: { [key in number]: AreaOption } = {
  [0]: new AreaOption("All", "research_icon.png"),
  [1]: new AreaOption("Physics", "physics_research.png"),
  [2]: new AreaOption("Society", "society_research.png"),
  [3]: new AreaOption("Engineering", "engineering_research.png"),
  [4]: new AreaOption("Anomalies", "event.png")
};

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  readonly areaOptions = AreaOptions;
  @Input() versionArray: any[];

  @Output() onTabSelect = new EventEmitter<number>();
  @Output() onVersionSelect = new EventEmitter<string>();

  private _selected: number = 0;
  get selected(): number {
    return this._selected;
  }
  @Input() set selected(value: number) {
    this._selected = value;
    this.onTabSelect.emit(this._selected);
  }

  constructor() { }
}
