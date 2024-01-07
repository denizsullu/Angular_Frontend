import {Component} from '@angular/core';

import {RouterOutlet} from '@angular/router';
import {NgForOf} from "@angular/common";
import {ProductComponent} from "./components/product/product.component";
import {CategoryComponent} from "./components/category/category.component";
import {NaviComponent} from "./components/navi/navi.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, ProductComponent, CategoryComponent, NaviComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'northwind';
  user: string = 'Deniz Süllü';
  condition: boolean = false;
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  data: number = 1
}
