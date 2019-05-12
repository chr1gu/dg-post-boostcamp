import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomePageComponent} from './components/welcome-page/welcome-page.component';
import {ProductPageComponent} from './components/product-page/product-page.component';
import {NotfoundPageComponent} from './components/notfound-page/notfound-page.component';
import {CheckoutPageComponent} from './components/checkout-page/checkout-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: WelcomePageComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: 'de/Checkout', component: CheckoutPageComponent },
  { path: '**', component: NotfoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
