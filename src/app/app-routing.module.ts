import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {ProductPageComponent} from './product-page/product-page.component';
import {NotfoundPageComponent} from './notfound-page/notfound-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: WelcomePageComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: '**', component: NotfoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
