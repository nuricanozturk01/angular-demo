import {Component, OnInit} from '@angular/core';
import {Product} from "../Product";
import {CategoryService} from "../../services/category.service";
import {Category} from "../../category/Category";
import {NgForm} from "@angular/forms";
import {ProductserviceService} from "../../services/productservice.service";
import {AlertifyService} from "../../services/alertify.service";

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers : [CategoryService, ProductserviceService] //local service
})
export class ProductAddForms1Component implements OnInit{

  constructor(private categoryService : CategoryService,
              private productService : ProductserviceService,
              private alertifyService : AlertifyService) {}


  categoryList : Category[] = [];

  model : Product = new Product();
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => this.categoryList = data);
  }


  add (form : NgForm) {
    this.productService.addProduct(this.model).subscribe(data => {
      this.alertifyService.success(data.name + " added successfully!");
    });
  }
}
