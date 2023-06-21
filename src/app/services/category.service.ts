import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Category} from "../category/Category";
import {catchError, Observable, tap, throwError} from "rxjs";
@Injectable()
export class CategoryService {
  constructor(private httpClient : HttpClient) {}

  private baseUrl : string = "http://localhost:4040/categories";
  getCategories() : Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.baseUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err : HttpErrorResponse) : Observable<Category[]> {
    return throwError(err.error instanceof ErrorEvent ? "Error! " + err.message : "Internal Server Error!");
  }
}
