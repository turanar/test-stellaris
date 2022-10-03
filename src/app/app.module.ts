import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TechnologyService} from "./service/technology.service";
import {HttpClientModule} from "@angular/common/http";
import {TreantTree} from "./component/treant-tree.component";

@NgModule({
  declarations: [
    AppComponent,TreantTree
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
