import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataServiceService } from '../data-service.service';
import { Typage_mag, itemStock } from '../liste_shop';

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
  }

  all_mag: Typage_mag[] = []
  single_mag: Typage_mag = {
    id: 9999,
    name: "DEFAULT",
    adress: "DEFAULT",
    ville: "DEFAULT",
    zipcode : 9999,
    rate: 9999,
    stock: [],
    ouvert_days :
        {
            lundi : [true, 8, 8],
            mardi : [true, 8, 8],
            mercredi : [true, 9, 8],
            jeudi : [true, 8, 8],
            vendredi : [true, 8, 7],
            samedi : [true, 9, 6],
            dimanche :  [false, 0, 0]
        }
  }

  single_ouverts : string[] = []

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

        for (let x in this.single_mag.ouvert_days){
          this.single_ouverts.push(x)
          console.log(typeof(x))
        }
        return
      }
    }
  }

  tup(item :any){
    return typeof(item)
  }

}
