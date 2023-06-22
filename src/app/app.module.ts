import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import {NgOptimizedImage} from "@angular/common";
import { ProductFilterPipe } from './product/product-filter.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AlertifyService} from "./services/alertify.service";
import {HttpClientModule} from "@angular/common/http";
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe,
    ProductAddForms1Component,
    ProductAddForms2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Rooting modules
    NgOptimizedImage,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AlertifyService], // Buraya yazmamız global servis olduğu anlamına geliyor. servisteki root ile aynı.

  bootstrap: [AppComponent]
})
export class AppModule { }
