import { Injectable } from '@angular/core';
import {CustomerType} from '../model/customet-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeServiceService {

  customerType: CustomerType[] = [];
  constructor() {
    this.customerType.push({nameType: 'Diamond'});
    this.customerType.push({nameType: 'Platinum'});
    this.customerType.push({nameType: 'Gold'});
    this.customerType.push({nameType: 'Silver'});
    this.customerType.push({nameType: 'Member'});
  }
  getAll() {
    return this.customerType;
  }
}
