import {EventEmitter, Injectable} from '@angular/core';
import {AreaOptions} from "src/app/component/nav/nav.component";

export class EthicsOption {
  label: string;
  predicate: Function;
  constructor(label: string, predicate: Function) {
    this.label = label;
    this.predicate = predicate;
  }
}

export let EthicsOptions: { [key in number]: EthicsOption } = {
  [0]: new EthicsOption('standard', (n) => n.meta.is_gestalt || n.meta.is_machine_empire || n.meta.is_hive_empire)
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private _ethics: string;
  readonly ethicsOptions = EthicsOptions;
  onEthicsChange = new EventEmitter<Function>();

  private selection = [
  ]
  set ethics(value: string) {
    this._ethics = value;
    this.onEthicsChange.emit(this.ethicsOptions[0].predicate);
  }

  get ethos(){
    return this._ethics;
  }

  constructor() { }
}
