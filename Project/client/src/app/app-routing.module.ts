import { Product12Component } from './components/product-list/product12/product12.component';
import { Product11Component } from './components/product-list/product11/product11.component';
import { Product10Component } from './components/product-list/product10/product10.component';
import { Product9Component } from './components/product-list/product9/product9.component';
import { Product8Component } from './components/product-list/product8/product8.component';
import { Product7Component } from './components/product-list/product7/product7.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { Product6Component } from './components/product-list/product6/product6.component';
import { Product5Component } from './components/product-list/product5/product5.component';
import { Product4Component } from './components/product-list/product4/product4.component';
import { Product3Component } from './components/product-list/product3/product3.component';
import { Product2Component } from './components/product-list/product2/product2.component';
import { Product1Component } from './components/product-list/product1/product1.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'cart',component:CartComponent},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'product1',component:Product1Component},
  {path:'product2',component:Product2Component},
  {path:'product3',component:Product3Component},
  {path:'product4',component:Product4Component},
  {path:'product5',component:Product5Component},
  {path:'product6',component:Product6Component},
  {path:'product7',component:Product7Component},
  {path:'product8',component:Product8Component},
  {path:'product9',component:Product9Component},
  {path:'product10',component:Product10Component},
  {path:'product11',component:Product11Component},
  {path:'product12',component:Product12Component},
  {path:'login',component:LoginComponent},
  {path:'register',component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[SignupComponent,CartComponent,ProductsComponent,Product1Component,Product2Component,Product3Component,Product4Component,Product5Component,Product6Component,Product7Component,Product8Component,Product9Component,Product9Component,Product11Component,Product12Component,LoginComponent];
