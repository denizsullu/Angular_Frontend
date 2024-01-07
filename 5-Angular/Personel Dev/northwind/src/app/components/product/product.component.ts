import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product1: any = {productId: 1, productName: 'Bardak', categoryId: 1, unitPrice: 5}
  product2: any = {productId: 2, productName: 'Laptop', categoryId: 1, unitPrice: 5}
  product3: any = {productId: 3, productName: 'Mous', categoryId: 1, unitPrice: 5}
  product4: any = {productId: 4, productName: 'Keyboard', categoryId: 1, unitPrice: 5}
  product5: any = {productId: 5, productName: 'Camera', categoryId: 1, unitPrice: 5}
  products: any = [this.product1, this.product2, this.product3, this.product4, this.product5]
constructor() {}

}
