import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FxOrderRatesComponent } from './components/fx-order-rates/fx-order-rates.component';
import { NewsComponent } from './components/news/news.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'news', component: NewsComponent },
  { path: 'tools', component: FxOrderRatesComponent },
  // { path: 'shop', component: ShoppingCartComponent },
  // { path: 'productDetails', component: ProductDetailsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
