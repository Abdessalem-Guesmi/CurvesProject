import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import {rts} from '../routes/routes';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BarChartComponent 
  ],
  imports: [
    BrowserModule, rts
  ],
  providers: [RouterOutlet],
  bootstrap: [AppComponent]
})
export class AppModule { }
