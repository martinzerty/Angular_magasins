import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataServiceService } from '../data-service.service';
import { Typage_mag, itemStock } from '../liste_shop';
import { CartList, CartItem } from '../data-service.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private location : Location,
    private MagInfo : DataServiceService
  ) { }

  ngOnInit(): void {
    this.get_mag()
    this.getCart()
  }

  cart: CartItem[] = [];

  all_mag: Typage_mag[] = []
  single_mag: Typage_mag = {
    id: 9999,
    name: "DEFAULT",
    adress: "DEFAULT",
    ville: "DEFAULT",
    zipcode : 9999,
    rate: 9999,
    stock: [],
    week : [
      {
          name : "Lundi",
          ouvert : true,
          heures : {
              open_hour : 0,
              open_min : 0,
              close_hour : 0,
              close_min : 0
          }
      },
      {
          name : "Mardi",
          ouvert : true,
          heures : {
              open_hour : 0,
              open_min : 0,
              close_hour : 0,
              close_min : 0
          }
      },
      {
          name : "Mercredi",
          ouvert : true,
          heures : {
              open_hour : 0,
              open_min : 0,
              close_hour : 0,
              close_min : 0
          }
      },
      {
          name : "Jeudi",
          ouvert : true,
          heures : {
              open_hour : 0,
              open_min : 0,
              close_hour : 0,
              close_min : 0
          }
      },
      {
          name : "Vendredi",
          ouvert : true,
          heures : {
              open_hour : 0,
              open_min : 0,
              close_hour : 0,
              close_min : 0
          }
      },
      {
          name : "Samedi",
          ouvert : true,
          heures : {
              open_hour : 0,
              open_min : 0,
              close_hour : 0,
              close_min : 0
          }
      },
      {
          name : "Dimanche",
          ouvert : false,
          heures : {
              open_hour : 0,
              open_min : 0,
              close_hour : 0,
              close_min : 0
          }
      },
  ]
  }

  getCart() : void{
    for ( let x = 0; x < CartList.length; x++){
      if ( CartList[x].shopId == this.single_mag.id ){
        this.cart.push(CartList[x])
      }
    }
    return 
  }


  temp_item : CartItem = {
    id : 999,
    name : "DEFAULT",
    shopId : 999,
    quantity : 999
  };

  addToCart(id: any, name : string){
    console.log("FUNCTION ENTERED")
    for (let x = 0; x < CartList.length; x++){
      console.log("LOOP, COEF ", x)

      if (CartList[x].id == id && CartList[x].shopId == this.single_mag.id){
        console.log("ITEM IN CART")
        CartList[x].quantity += 1;
        console.log(CartList)
       
        for(let y = 0; y < this.single_mag.stock.length; y++){
          if ( this.single_mag.stock[y].id == id ){
            this.single_mag.stock[y].quantity -= 1
            console.log("ITEM DELETED FROM STOCK")
          }
        }

        return
      }
    
    }

    console.log("ADDING ITEM TO CART")
    this.temp_item  = {
      id : id,
      name : name,
      shopId : this.single_mag.id,
      quantity : 1
    }
    console.log("cocuou")
    CartList.push(this.temp_item)
    console.log(CartList)

    for(let y = 0; y < this.single_mag.stock.length; y++){
      if ( this.single_mag.stock[y].id == id ){
        this.single_mag.stock[y].quantity -= 1
      }
    }
    return 
      
    }
  

  get_mag(): void{
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.all_mag = this.MagInfo.getMag()

    for (let x = 0; x <= this.all_mag.length; x++){
      if (this.all_mag[x]["id"] == id){
        this.single_mag = this.all_mag[x]
        let stock = this.single_mag.stock
        for (let y = 0; y < stock.length ; y++){
          if (stock[y]["quantity"] > 1){
            stock[y]["name"] += "s"
          }
        }
        return
      }
    }
  }

  tup(item :any){
    return typeof(item)
  }

}
