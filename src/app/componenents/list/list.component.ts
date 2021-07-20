import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data-service.service';
import { ShopService } from 'src/app/shop.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private MagService: DataServiceService, private shopService : ShopService ) { }

  ngOnInit(): void {
    this.getShopList()
  }

  liste_mag :any

  MagInfos() : void{
    this.liste_mag = this.MagService.getMag();

  };

  getShopList() {
    this.shopService.getShopList().subscribe( (data) => {
      this.liste_mag = data
    }, (err) => console.error(err) )
  }

  addRate(id: any) {
    for (let x = 0; x <= this.liste_mag.length ; x++){
      if( this.liste_mag[x]["id"]  == id){
        let now = this.liste_mag[x]["rate"];
        let fut = Number(String(now + 0.1))
        let rounded = fut.toFixed(2)
        fut = Number(rounded)
        let ope = fut < 5;
        if (ope){
          this.liste_mag[x]["rate"] = fut;
          return
        }
        else{
          this.liste_mag[x]["rate"] = 5;
          return
        };
      }
    }
  }


}
