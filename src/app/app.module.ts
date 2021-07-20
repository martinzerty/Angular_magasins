import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { dbConfig } from './db-config';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { ComponentModule } from './componenents/component.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    ComponentModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
