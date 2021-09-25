import {Component, Input, OnInit} from '@angular/core';
import {ProductPayload} from "../../shared/productPayload";
import {APIService} from "../../service/api.service";
import {HttpErrorResponse} from "@angular/common/http";
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input()
  public productList: ProductPayload[];
  public filterCategory : any
  searchKey:string ="";

  constructor(private apiService: APIService, private cartService : CartService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  public getAllProducts(): void {
    this.apiService.getAllProducts().subscribe(
      (response: ProductPayload[]) => {
        console.log("ProductList successful found");
        this.productList = response;
        this.filterCategory = response;

        this.productList.forEach( (a:any) => {
          if(a.category ==="women's clothing" || a.category ==="men's clothing"){
            a.category ="fashion"
          }
          Object.assign(a,{ quantity:1, total:a.price });
        });
        console.log(this.productList)
      },
      (message: HttpErrorResponse) => {
        alert(message);
      }
    );
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }

  filter(category:string){
    this.filterCategory = this.productList.filter((a:any) => {
        if(a.category == category || category==''){
          return a;
        }
    })
  }
}
