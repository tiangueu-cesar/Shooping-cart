import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { HttpClientModule } from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
