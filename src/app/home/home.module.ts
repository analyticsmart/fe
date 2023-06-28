import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CategoryComponent } from '../category/category.component';
import { ProductComponent } from '../product/product.component';
import { SubCategoryComponent } from '../sub-category/sub-category.component';
import { UpdatesComponent } from '../updates/updates.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage, 
    ProductComponent, 
    CategoryComponent,
    SubCategoryComponent,
    UpdatesComponent
  ]
})
export class HomePageModule {}
