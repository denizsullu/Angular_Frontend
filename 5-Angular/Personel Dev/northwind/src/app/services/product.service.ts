import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Data} from "../models/data";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string ="http://localhost:3000/data";
  constructor(private htttpClient:HttpClient) { }

  getProducts():Observable<Data[]>{
    return this.htttpClient
      .get<Data[]>(this.apiUrl);
  }
  getProductsByCategory(categoryId:number):Observable<Data[]>{
    let newPath = this.apiUrl + "?categoryId=" + categoryId;
    return this.htttpClient
      .get<Data[]>(newPath);
  }


}
