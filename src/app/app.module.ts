import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import {NgOptimizedImage} from "@angular/common";
import { ProductFilterPipe } from './product/product-filter.pipe';
import {FormsModule} from "@angular/forms";
import {AlertifyService} from "./services/alertify.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Rooting modules
    NgOptimizedImage,
    FormsModule,
    HttpClientModule
  ],
  providers: [AlertifyService], // Buraya yazmamız global servis olduğu anlamına geliyor. servisteki root ile aynı.

  bootstrap: [AppComponent]
})
export class AppModule { }
