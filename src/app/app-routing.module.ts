import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenents/home/home.component';
import { ListComponent } from './componenents/list/list.component';
import { CartComponent } from './componenents/cart/cart.component';
import { SingleComponent } from './componenents/single/single.component';

const routes: Routes = [
  { path : '', component : HomeComponent },
  { path : 'list', component : ListComponent },
  { path : 'single/:id', component : SingleComponent },
  { path : 'cart', component : CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
