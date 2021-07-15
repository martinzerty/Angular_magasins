import { Component } from '@angular/core';
import { CartItem } from './data-service.service';
import * as Cart from '../assets/cart.json'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'buisnessManager';

}
