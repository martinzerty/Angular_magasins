import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  constructor( private httpClient : HttpClient ) { }

  getShopList() {
    return this.httpClient.get('http://localhost:5050/api/shop',this.httpOptions);
  }
}
