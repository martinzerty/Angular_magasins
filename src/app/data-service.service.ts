import { not } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Typage_mag, Liste_Mag } from './liste_shop';
import { itemStock } from './liste_shop';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  cart : CartItem[] = []
  cartStorage = localStorage

  constructor() { }

  getMag() : Typage_mag[] {
    return Liste_Mag  
  }

  getCart() : CartItem[] {
    const tmp = this.cartStorage.getItem('CART')
    if (tmp != null){
      this.cart = JSON.parse(tmp)
    }

    return this.cart
  }


}

export interface Avis{
  avis : string;
  index: number;
}

export interface CartItem{
  id:number;
  name:string;
  shopId:number;
  quantity: number
};
