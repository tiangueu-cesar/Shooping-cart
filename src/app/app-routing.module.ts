import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./component/products/products.component";
import {CartComponent} from "./component/cart/cart.component";

const routes: Routes = [
  { path: "", redirectTo: 'products', pathMatch: 'full' },
  { path: "products", component: ProductsComponent },
  { path: "cart", component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
