import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ProductPayload } from "../shared/productPayload";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class APIService {
  api: string = "https://fakestoreapi.com/products";

  constructor(private httpClient: HttpClient) { }

  //Get all products coming from the giving API and return each
  public getAllProducts(): Observable<ProductPayload[]> {
    return this.httpClient.get<ProductPayload[]>(`${this.api}`)
      .pipe(map((product: ProductPayload[]) => {
        return product;
    }));
  }
}
