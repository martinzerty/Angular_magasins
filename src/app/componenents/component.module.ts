import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { AppRoutingModule } from '../app-routing.module';
import { SingleComponent } from './single/single.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    SingleComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent,
    ListComponent,
    SingleComponent,
    CartComponent
  ]
})

export class ComponentModule { }
