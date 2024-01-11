import {Component, OnInit} from '@angular/core';

import {Data} from "../../models/data";
import {ProductService} from "../../services/product.service";
import {delay} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  data: Data[] = [];
constructor(private productService:ProductService,
            private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
      }
      else{
        this.getProducts();
      }
    })
  }
  getProducts(){
  this.productService.getProducts().subscribe(response =>{
    this.data = response;
  })}
  getProductsByCategory(categoryId:number){
    this.productService.getProductsByCategory(categoryId).subscribe(response =>{
      this.data = response;
    })}

}
