import { Component, OnInit } from '@angular/core';
import { CartService } from "../../service/cart.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(
      (res) => {
        this.products = res;
        this.grandTotal = this.cartService.getTotalPrice();
      },
      (message: HttpErrorResponse) => {
        alert(message);
      }
    );
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }

  emptycart() {
    this.cartService.removeAllCart();
  }

}
