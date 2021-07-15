import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataServiceService } from '../data-service.service';
import { Typage_mag, itemStock } from '../liste_shop';
import { CartItem } from '../data-service.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  cartList = this.dataService.getCart()

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
  constructor(
    private route : ActivatedRoute,
    private location : Location,
    private dataService : DataServiceService
  ) { }

  ngOnInit(): void {
    this.get_mag()
  }

  

  getCart() : void{

    for ( let x = 0; x < this.cartList.length; x++){
      if ( this.cartList[x].shopId == this.single_mag.id ){
        this.cart.push( this.cartList[x])
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

    for (let x = 0; x < this.cartList.length; x++){

      if (this.cartList[x].id == id && this.cartList[x].shopId == this.single_mag.id){
        this.cartList[x].quantity += 1;
       
        for(let y = 0; y < this.single_mag.stock.length; y++){
          if ( this.single_mag.stock[y].id == id ){
            this.single_mag.stock[y].quantity -= 1
          }
        }

        return
      }
    
    }

    this.temp_item  = {
      id : id,
      name : name,
      shopId : this.single_mag.id,
      quantity : 1
    }

    this.cartList.push(this.temp_item)
    console.log(this.cartList)


    for(let y = 0; y < this.single_mag.stock.length; y++){
      if ( this.single_mag.stock[y].id == id ){
        this.single_mag.stock[y].quantity -= 1
      }
    }
    
    this.dataService.addToCart(this.cartList)
      
    }
  

  get_mag(): void{
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.all_mag = this.dataService.getMag()

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
