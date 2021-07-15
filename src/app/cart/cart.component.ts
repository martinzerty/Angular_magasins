import { Component, OnInit } from '@angular/core';
import { CartList } from '../data-service.service';
import { CartItem } from '../data-service.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.cart)
  }

  cart = CartList


}
