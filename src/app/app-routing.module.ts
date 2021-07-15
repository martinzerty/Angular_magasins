import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path : '', component : HomeComponent },
  { path : 'list', component : ListComponent },
  { path : 'single/:id', component : SingleComponent },
  { path : 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
