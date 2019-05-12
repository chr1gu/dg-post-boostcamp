import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { NavLeftComponent } from './components/nav-left/nav-left.component';
import { NavRightComponent } from './components/nav-right/nav-right.component';
import { NotfoundPageComponent } from './components/notfound-page/notfound-page.component';
import {NavigationService} from './services/navigation.service';
import {CheckoutPageComponent} from './components/checkout-page/checkout-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    ProductPageComponent,
    NavLeftComponent,
    NavRightComponent,
    NotfoundPageComponent,
    CheckoutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
