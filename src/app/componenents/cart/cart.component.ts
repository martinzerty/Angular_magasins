import { Component, OnInit } from '@angular/core';
import {  DataServiceService } from '../../data-service.service';
import { Liste_Mag } from '../../liste_shop';
import { CartItem } from '../../data-service.service';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cartList : any
  infoMagTemp! : CartItem 
  id = 0
  fullInfos = Object()
  infosMags = Liste_Mag


  constructor( private dataService : DataServiceService, private dbservice : NgxIndexedDBService) {
  }

  ngOnInit(): void {
    this.CompleteInfos()   
  }

  CompleteInfos() : void{
    this.dbservice.getAll('cartDB').subscribe( (datas) => {
      this.cartList = JSON.parse(JSON.stringify(datas))
    } )

    for (let x = 0; x < this.infosMags.length; x++){
      this.fullInfos[x.toString()] = this.infosMags[x].name
    }
  }

  more(id : number ,name : string, shopId: number, quantity : number){
    this.dbservice.update('cartDB',{
      id : id,
      name: name,
      shopId : shopId,
      quantity : quantity + 1
    }).subscribe( (datas) => {
    } )
  }


  less(id : number ,name : string, shopId: number, quantity : number){
    if (quantity > 1){    
      this.dbservice.update('cartDB',{
        id : id,
        name: name,
        shopId : shopId,
        quantity : quantity - 1
      }).subscribe( (datas) => {
      } )
    }
    else{
      this.dbservice.delete('cartDB', id).subscribe( (datas) => {  } )
    }
  }

  checkout() {
    let text = 'Addition :\n'
    let total = 0
    for (let x = 0; x < this.cartList.length; x++){
      for (let y = 0; y < Liste_Mag[this.cartList[x].shopId].stock.length; y++){
        if ( Liste_Mag[this.cartList[x].shopId].stock[y].id == this.cartList[x].id ){
          let price = Liste_Mag[this.cartList[x].shopId].stock[y].price * this.cartList[x].quantity
          total += price
          text += price.toString() +'€ de ' + Liste_Mag[this.cartList[x].shopId].stock[y].name.toString() + 's chez '+Liste_Mag[this.cartList[x].shopId].name + '\n'
        }
      }
    }

    alert(text)
  }

}

