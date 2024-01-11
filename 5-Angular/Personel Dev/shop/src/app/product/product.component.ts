import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from './product';
import { ProductFilterPipe } from './product-filter.pipe';
import { FormsModule } from '@angular/forms';
import { AlertifyService } from '../services/alertify.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ProductFilterPipe, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  constructor(
    private alertifyService: AlertifyService,
    private http: HttpClient
  ) {}

  title: string = 'Ürün Listesi';
  filterText = '';
  products: Product[];

  deniz() {
    this.http.get<Product>('http://localhost:3000/products').subscribe((data) => {
      this.products = data;
    });
  }
  addToCart(product: Product) {
    this.alertifyService.success(product.name + 'added');
  }
}
