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

  addToCart(cart : object) : void{
/*
    Mettre en paramètre un objet de type tableau et non pas 
    une chaîne de charactères.
*/

    this.cartStorage.setItem('CART',JSON.stringify(cart))
  }

}

export interface CartItem{
  id:number;
  name:string;
  shopId:number;
  quantity: number
};
