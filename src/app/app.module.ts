import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { NavRightComponent } from './nav-right/nav-right.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    ProductPageComponent,
    NavLeftComponent,
    NavRightComponent,
    NotfoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
