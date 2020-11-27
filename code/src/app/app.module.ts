import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { Product1Component } from './components/product-list/product1/product1.component';
import { Product2Component } from './components/product-list/product2/product2.component';
import { Product3Component } from './components/product-list/product3/product3.component';
import { Product4Component } from './components/product-list/product4/product4.component';
import { Product5Component } from './components/product-list/product5/product5.component';
import { Product6Component } from './components/product-list/product6/product6.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { Product7Component } from './components/product-list/product7/product7.component';
import { Product8Component } from './components/product-list/product8/product8.component';
import { Product9Component } from './components/product-list/product9/product9.component';
import { Product10Component } from './components/product-list/product10/product10.component';
import { Product11Component } from './components/product-list/product11/product11.component';
import { Product12Component } from './components/product-list/product12/product12.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    ProductsComponent,
    HomeComponent,
    Product1Component,
    Product2Component,
    Product3Component,
    Product4Component,
    Product5Component,
    Product6Component,
    LoginComponent,
    SigninComponent,
    Product7Component,
    Product8Component,
    Product9Component,
    Product10Component,
    Product11Component,
    Product12Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
