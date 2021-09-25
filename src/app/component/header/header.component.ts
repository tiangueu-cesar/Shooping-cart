import {Component, Input, OnInit, Output} from '@angular/core';
import {CartService} from "../../service/cart.service";
import {APIService} from "../../service/api.service";
import {ProductPayload} from "../../shared/productPayload";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  public productsSearch: any [];
  //public searchTerm !: string;
  constructor(private cartService : CartService, private apiService: APIService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res=>{
        this.totalItem = res.length;
      });

    this.apiService.getAllProducts().subscribe(
      (response: ProductPayload[]) => {
        this.productsSearch = response;
      },
      (message: HttpErrorResponse) => {
          alert(message);
      }
    );
  }

  searchTerm(key: string){
    const results: any [] = [];

    for (let product of this.productsSearch) {
      if (product.description.toLocaleLowerCase().indexOf(key) !== - 1
         || product.category.toLocaleLowerCase().indexOf(key) !== -1) {
          results.push(product);
        }
      }

      this.productsSearch = results;
    }

}
