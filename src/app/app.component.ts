import {Component, OnInit} from '@angular/core';
import {TechnologyService} from "./service/technology.service";

export enum selectedTree {
  all, physics,society, engineering
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'stellaris';
  readonly selectedTree = selectedTree;

  selected: selectedTree = selectedTree.all;
  selectedVersion: string = 'cepheus-3.4.3';

  versions: any = [
  { name: 'Cepheus 3.4.3',   route: 'cepheus-3.4.3',  title: 'Stellaris 3.4.3 (Cepheus)' },
  { name: 'Herbert 3.2.2',   route: 'herbert-3.2.2',  title: 'Stellaris 3.2.2 (Herbert)' },
  { name: 'Lem 3.1.1',       route: 'lem-3.1.1',     title: 'Stellaris 3.1.1 (Lem)' },
  { name: 'Stellaris 3.0.1', route: 'dick-3.0.1',    title: 'Stellaris 3.0.1 (Dick)' },
  { name: 'Stellaris 2.7.1', route: 'wells-2.7.1',   title: 'Stellaris 2.7.1 (Wells)' },
  { name: 'Stellaris 2.6.0', route: 'verne-2.6.0',   title: 'Stellaris 2.6.0 (Verne)' },
  { name: 'Stellaris 2.5.0', route: 'shelley-2.5.0', title: 'Stellaris 2.5.0 (Shelley)' },
  { name: 'Stellaris 2.3.3', route: 'wolfe-2.3.3',   title: 'Stellaris 2.3.3 (Wolfe)' },
  { name: 'Stellaris 2.3.0', route: 'wolfe-2.3.0',   title: 'Stellaris 2.3.0 (Wolfe)' },
  { name: 'Stellaris 2.2.7', route: 'leguin-2.2.7',  title: 'Stellaris 2.2.7 (Leguin)' },
  { name: 'Stellaris 2.2.4', route: 'leguin-2.2.4',  title: 'Stellaris 2.2.4 (Leguin)' },
  { name: 'Stellaris 2.2.3', route: 'leguin-2.2.3',  title: 'Stellaris 2.2.3 (Leguin)' },
  { name: 'Stellaris 2.2.0', route: 'leguin-2.2.0',  title: 'Stellaris 2.2.0 (Leguin)'}
]

  click(index: number) {
    this.selected = index;
    window.scroll({top:0, left: 0});
  }

  changeVersion(selected) {
    this.selected = selectedTree.all;
    this.selectedVersion = selected;
  }

  ngOnInit(): void {

  }
}
