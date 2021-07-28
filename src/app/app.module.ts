import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import {
  CategoryService,
  LegendService,
  LineSeriesService,
} from '@syncfusion/ej2-angular-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { NewsComponent } from './components/news/news.component';
import { FxOrderRatesComponent } from './components/fx-order-rates/fx-order-rates.component';
import { ChartsComponent } from './components/charts/charts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    NewsComponent,
    FxOrderRatesComponent,
    ChartsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ChartModule],
  providers: [CategoryService, LegendService, LineSeriesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
