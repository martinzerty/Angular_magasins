import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IComment } from './liste_shop';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

  constructor( private httpClient : HttpClient ) { }

  getShopList() {
    return this.httpClient.get('http://localhost:5050/api/shop',this.httpOptions)
  }

  postComment( comment : string) {
    let body = { comment : comment}
    console.log("body : ",body)
    console.log('Sending post request')
    return this.httpClient.post('http://localhost:5050/api/addcomment',body, this.httpOptions)
  }

  getComments() {
    console.log('Request all comments')
    let result = this.httpClient.get<IComment[]>('http://localhost:5050/api/getcomments',this.httpOptions)
    console.log(result)
    return result
  }

  // getGetAuth() {
  //   const header = new HttpHeaders().set('Content-type','text/plain; charset=utf-8')
  //   header.set('Session-Token', 'a49e3a2c94cd0dfb213ebdba8d57dfab8ca5bf2888b0a8de29662f1443b59786' )
  //   let datas = this.httpClient.get('http://localhost:5050/api/session', {headers : header})
  // }
}
