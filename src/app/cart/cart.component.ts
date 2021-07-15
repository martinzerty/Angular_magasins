import { Component, OnInit } from '@angular/core';
import {  DataServiceService } from '../data-service.service';
import { Liste_Mag } from '../liste_shop';
import { CartItem } from '../data-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList = this.dataService.getCart()
  infoMagTemp: CartItem | undefined
  id = 0
  fullInfos = Object()
  infosMags = Liste_Mag


  constructor( private dataService : DataServiceService) { 
  }

  ngOnInit(): void {
    this.CompleteInfos()
  }

  CompleteInfos() : void{
    for (let x = 0; x < this.cartList.length; x++){
      this.id = this.cartList[x]['id']

      for (let y = 0; y < this.infosMags.length ; y++){
        if (this.infosMags[y]['id'] == this.cartList[x].shopId  ){
          this.fullInfos[this.infosMags[y]['id']] = this.infosMags[y]['name']
        }
      }
    }
    console.log(this.fullInfos)
  }

}

