import { Component } from '@angular/core';
import { DataServiceService, User_sess } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'buisnessManager';
  session = User_sess;
}
