import {Component, OnInit} from '@angular/core';
import {Category} from "./Category";
import {AlertifyService} from "../services/alertify.service";
import {CategoryService} from "../services/category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit{

  constructor(private alertifyService : AlertifyService, private categoryService : CategoryService) {}

  private categoryList : Category[] = [];

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => this.categoryList = data);
  }

  getAllCategories() : Category[] { return this.categoryList;}
}
