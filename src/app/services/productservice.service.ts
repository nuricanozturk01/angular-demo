import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Product} from "../product/Product";
import {catchError, Observable, tap, throwError} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  constructor(private httpClient : HttpClient) {}

  private baseUrl : string = "http://localhost:3000/products";

  getProducts(categoryId: number) : Observable<Product[]> {
    let categoryPath = this.baseUrl;

    if (categoryId)
      categoryPath += "?categoryId=" + categoryId;

    return this.httpClient.get<Product[]>(categoryPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err : HttpErrorResponse) : Observable<never> {
      return throwError(err.error instanceof ErrorEvent ? "Error! " + err.message : "Internal Server Error!");
  }
}
