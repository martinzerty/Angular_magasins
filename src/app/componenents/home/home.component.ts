import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Avis } from '../../data-service.service';
import { ShopService } from 'src/app/shop.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dbService : NgxIndexedDBService, private shopService : ShopService) { }

  ngOnInit(): void {
    this.shopService.getComments().subscribe( (datas) => {
      for (let x = 0; x < datas.length; x++){

        this.words.push(datas[x].comment)
        }

    } )

    this.dbService.getAll('avis').subscribe( (datas) => {
      
    })
  }
  words : Array<string> = []

  addWord(word: any){
    console.log("Asking service to post comment : ", word.value)
    this.shopService.postComment(word.value).subscribe( (data) => {
      console.log(data)},
      (err) => console.log(err)
    )
  }

}
