import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Product} from "../../models/product";
import {Data} from "../../models/data";
import {HttpClient} from "@angular/common/http";
import {ProductResponseModel} from "../../models/productResponseModel";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  item: string = "deniz";
  apiUrl: string ="http://localhost:3000/data";
  // productResponseModel: ProductResponseModel;
  products: Product[] = []
  data: Data[] = [];
constructor(private htttpClient:HttpClient) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.htttpClient.get<Data[]>(this.apiUrl)
      .subscribe((response) => {
      this.data = response;
    });
  }

}
