import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TechnologyService} from "./service/technology.service";
import {HttpClientModule} from "@angular/common/http";
import {TechTreeComponent} from "./component/tech-tree/tech-tree.component";
import {TippyModule} from "@ngneat/helipopper";

import {SafeHtmlPipe} from "src/app/pipe/safe-html.pipe";
import {TechAreaPipe} from "src/app/pipe/tech-area.pipe";
import {NavComponent} from './component/nav/nav.component';
import {AnomaliesComponent} from "src/app/component/tech-tree/anomalies.component";
import {TechTextPipe} from "./pipe/tech-text.pipe";

export const tooltipVariation: Partial<any> = {
  animation: false,
  arrow: true,
  trigger: 'click',
  placement: "auto",
  maxWidth: 'none'
};

@NgModule({
  declarations: [
    AppComponent,
    TechTreeComponent,
    AnomaliesComponent,
    SafeHtmlPipe,
    TechAreaPipe,
    TechTextPipe,
    NavComponent
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
export class AppModule {
}
