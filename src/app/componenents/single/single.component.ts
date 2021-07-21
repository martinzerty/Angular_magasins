import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataServiceService } from '../../data-service.service';
import { ShopService } from 'src/app/shop.service';
import { CartItem } from '../../data-service.service';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  cart: CartItem[] = []
  coef: number = 0
  all_mag: any
  single_mag: any
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private dataService: DataServiceService,
    private dbservice: NgxIndexedDBService,
    private shopService: ShopService
  ) { }

  ngOnInit(): void {
    this.getShops()
    this.cartGrab()
  }

  cartGrab() {
    this.dbservice.getAll('cartDB').subscribe((datas) => {
      this.cart = JSON.parse(JSON.stringify(datas))
    })
  }

  getShops() {
    console.log('getting datas from api')
    this.shopService.getShopList().subscribe((data) => {
      this.all_mag = data
      console.log("mags received : ",this.all_mag)
      this.get_mag()
    }, (err) => this.all_mag = this.dataService.getMag())
  }

  addToCart(id: any, name: string) {
    this.cartGrab()

    // On enlève d'abord l'élément du magasin
    for (let y = 0; y < this.single_mag.stock.length; y++) {
      if (this.single_mag.stock[y].id == id) {
        if (this.single_mag.stock[y].quantity > 0) {
          this.single_mag.stock[y].quantity -= 1
        }
      }
    }

    let futQuantity = 1

    for (let x = 0; x < this.cart.length; x++) {
      if (this.cart[x].id == id && this.cart[x].shopId == this.single_mag.id) {
        futQuantity += this.cart[x].quantity
      }
    }


    this.dbservice.update('cartDB', {
      id: id,
      name: name,
      shopId: this.single_mag.id,
      quantity: futQuantity
    }).subscribe((datas) => {
      console.log("ADDED ITEM : ", datas)
    })

    return

  }


  get_mag(): void {
    const id: number = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    // this.all_mag = this.dataService.getMag()
    console.log(typeof(id), id)
    this.single_mag = this.all_mag[id]
    console.log("mags :",this.all_mag)

  }

}
