import {Component, OnInit} from '@angular/core';
import {Product} from "./Product";
import {AlertifyService} from "../services/alertify.service";
import {ProductserviceService} from "../services/productservice.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [] // for Local services
})
export class ProductComponent implements OnInit {
  constructor(private alertifyService: AlertifyService,
              private productService: ProductserviceService,
              private activatedRoute : ActivatedRoute/*Parametre yakalamak için*/) {
  }

  title = "Products";

  FilterText: string = "";

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.productService.getProducts(params["categoryId"]).subscribe(data => this.productList = data);
    })

  }

  private productList: Product[] = [];

  getAllProducts(): Product[] {
    return this.productList;
  }
  isAddToCart: boolean = false;
  addToCart(p: Product): boolean {
    this.alertifyService.success(`Added to cart: ${p.name}`);
    return true;
  }
}
