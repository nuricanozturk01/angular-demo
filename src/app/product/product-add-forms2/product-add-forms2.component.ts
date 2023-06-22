import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "../Product";
import {Category} from "../../category/Category";
import {CategoryService} from "../../services/category.service";
import {ProductserviceService} from "../../services/productservice.service";
import {AlertifyService} from "../../services/alertify.service";

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css'],
  providers: [CategoryService, ProductserviceService]
})
export class ProductAddForms2Component implements OnInit{

  constructor(private formBuilder : FormBuilder,
              private categoryService : CategoryService,
              private productService : ProductserviceService,
              private alertifyService : AlertifyService) {
  }

  // @ts-ignore
  productAddForm : FormGroup;
  product : Product = new Product();
  categoryList : Category[] = [];

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name:["", Validators.required],
      description:["", Validators.required],
      image:["", Validators.required],
      price:["", Validators.required],
      categoryId:["", Validators.required],
    })
  }
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => this.categoryList = data);
    this.createProductAddForm()
  }

  add() {
    if (this.productAddForm.valid) {
        this.product = Object.assign({}, this.productAddForm.value)
        this.productService.addProduct(this.product).subscribe(p => this.alertProduct(p))
    }
  }

  private alertProduct(p: Product) {
    this.alertifyService.success(p.name + " added successfully!");
  }

  protected readonly name = name;
}
