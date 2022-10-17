import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TechnologyService} from "./service/technology.service";
import {HttpClientModule} from "@angular/common/http";
import {TechTreeComponent} from "./component/tech-tree/tech-tree.component";
import {TippyModule} from "@ngneat/helipopper";

import {SafeHtmlPipe} from "src/app/pipe/safe-html.pipe";
import {TeachAreaPipe} from "src/app/pipe/tech-area.pipe";

export const tooltipVariation: Partial<any> = {
  animation: false,
  arrow: true,
  trigger: 'click',
  placement: "auto",
  maxWidth: 'none'
};

@NgModule({
  declarations: [
    AppComponent,TechTreeComponent, SafeHtmlPipe, TeachAreaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TippyModule.forRoot({
      defaultVariation: 'tooltip',
      variations: {
        tooltip: tooltipVariation
      }
    })
  ],
  providers: [TechnologyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
