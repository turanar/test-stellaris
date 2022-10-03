import {Component, OnInit} from '@angular/core';
import {TechnologyService} from "./service/technology.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'stellaris';
  physics: any;

  constructor(private techService : TechnologyService) {
  }
  ngOnInit(): void {

  }
}
