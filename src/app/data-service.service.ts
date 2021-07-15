import { Injectable } from '@angular/core';
import { Typage_mag, Liste_Mag } from './liste_shop';
import * as Cart from '../assets/cart.json'

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  getMag() : Typage_mag[] {
    return Liste_Mag  
  }
}

export interface CartItem{
  id:number;
  name:string;
  shopId:number;
  quantity: number
};

export var CartList : CartItem[] = Cart;