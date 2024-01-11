import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todos} from "../models/todos";

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  urlLink:string = "https://jsonplaceholder.typicode.com/todos";
  constructor(private htttpClient:HttpClient) { }

  getTodos():Observable<Todos[]>{
      return this.htttpClient.get<Todos[]>(this.urlLink)
  }
}
