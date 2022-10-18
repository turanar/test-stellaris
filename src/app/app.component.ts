import {Component, OnInit} from '@angular/core';
import {TechnologyService} from "./service/technology.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'stellaris';
  private _version: string = 'orion-3.6.0';
  get version(): string {
    return this._version;
  }
  set version(value: string) {
    this.selected = 0;
    this._version = value;
    document.title = this.versions[this.version].title;
  }

  constructor(private route: ActivatedRoute) {

  }

  selected: number = 0;

  versions: any = {
    'orion-3.6.0' :   {route: 'orion-3.6.0',    title: 'Stellaris 3.6.0 (Orion)'},
    'fornax-3.5.3' :  {route: 'fornax-3.5.3',   title: 'Stellaris 3.5.3 (Fornax)'},
    'cepheus-3.4.3' : {route: 'cepheus-3.4.3',  title: 'Stellaris 3.4.3 (Cepheus)'},
    'herbert-3.2.2' : {route: 'herbert-3.2.2',  title: 'Stellaris 3.2.2 (Herbert)'},
    'lem-3.1.1' :     {route: 'lem-3.1.1',      title: 'Stellaris 3.1.1 (Lem)'},
    'dick-3.0.1' :    {route: 'dick-3.0.1',     title: 'Stellaris 3.0.1 (Dick)'},
    'wells-2.7.1' :   {route: 'wells-2.7.1',    title: 'Stellaris 2.7.1 (Wells)'},
    'verne-2.6.0' :   {route: 'verne-2.6.0',    title: 'Stellaris 2.6.0 (Verne)'},
    'shelley-2.5.0' : {route: 'shelley-2.5.0',  title: 'Stellaris 2.5.0 (Shelley)'},
    'wolfe-2.3.3' :   {route: 'wolfe-2.3.3',    title: 'Stellaris 2.3.3 (Wolfe)'},
    'wolfe-2.3.0' :   {route: 'wolfe-2.3.0',    title: 'Stellaris 2.3.0 (Wolfe)'},
    'leguin-2.2.7' :  {route: 'leguin-2.2.7',   title: 'Stellaris 2.2.7 (Leguin)'},
    'leguin-2.2.4' :  {route: 'leguin-2.2.4',   title: 'Stellaris 2.2.4 (Leguin)'},
    'leguin-2.2.3' :  {route: 'leguin-2.2.3',   title: 'Stellaris 2.2.3 (Leguin)'},
    'leguin-2.2.0' :  {route: 'leguin-2.2.0',   title: 'Stellaris 2.2.0 (Leguin)'}
  };

  ngOnInit(): void {
    document.title = this.versions[this.version].title;
    console.log(this.route);
  }
}
