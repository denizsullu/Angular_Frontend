import {Component, OnInit} from '@angular/core';
import {Category} from "../../models/category";
import {HttpClient} from "@angular/common/http";
import {CategoryService} from "../../services/category.service";

import {ActivatedRoute, RouterModule} from "@angular/router";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    RouterModule
],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  categories :Category[] = [];
  currentCategory:Category;
  constructor(private categoryService:CategoryService) {}
  ngOnInit(): void {

    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(response =>{
      this.categories = response;
    })}


  setCurrentCategory(item:Category){
    this.currentCategory = item;
  }
  getCurrentCategoryClass(category:Category){
    if(category == this.currentCategory){
      return "category-active"
    }
    else{
      return "category"
    }
  }
  allCategoryClass(){
    if(!this.currentCategory){
      return "category-active"
    }
    else{
      return "category";
    }
  }
  cleanCurrentCategory(){
    this.currentCategory= {categoryId:1,categoryName:"deniz"};
  }

}
