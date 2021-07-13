import { Injectable } from '@angular/core';
import { Typage_mag, Liste_Mag } from './liste_shop';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  getMag() : Typage_mag[] {
    return Liste_Mag  
  }
}
