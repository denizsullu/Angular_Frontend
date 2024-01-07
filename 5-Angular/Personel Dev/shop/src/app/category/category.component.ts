import { Component, NgModule } from '@angular/core';
import { Category } from './category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  constructor() {}
  title = 'Kategori Listesi';
  categories: Category[] = [
    { id: 1, name: 'Teknoloji' },
    { id: 2, name: 'Elektronik' },
    { id: 3, name: 'Bilgisayar' },
    { id: 4, name: 'İletişim' },
    { id: 5, name: 'Müzik' },
  ];
}
