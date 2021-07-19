import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';
import { CartComponent } from './cart/cart.component';
import { dbConfig } from './db-config';
import { NgxIndexedDBModule } from 'ngx-indexed-db';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    SingleComponent,
    CartComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
