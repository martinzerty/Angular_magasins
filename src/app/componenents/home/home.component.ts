import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Avis } from '../../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dbService : NgxIndexedDBService) { }

  ngOnInit(): void {
    this.dbService.getAll('avis').subscribe( (datas) => {
      for (let x = 0; x < datas.length; x++){
      let coef = datas.length - x
      this.words.push(JSON.parse(JSON.stringify(datas))[x].avis)
      }
    })
  }
  words : Array<string> = []

  addWord(word: any){
    console.log(word)
    this.words.push(word.value)
    this.dbService.addItem('avis',
    {
      avis : word.value
    })
  }

}
