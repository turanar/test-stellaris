import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TechnologyService} from "./service/technology.service";
import {HttpClientModule} from "@angular/common/http";
import {TechTree} from "./component/tech-tree.component";

@NgModule({
  declarations: [
    AppComponent,TechTree
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TechnologyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
