import { Injectable } from '@angular/core';
import {CustomerType} from '../model/customet-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeServiceService {

  customerType: CustomerType[] = [];
  constructor() {
    this.customerType.push({id: 1, nameType: 'Diamond'});
    this.customerType.push({id: 2, nameType: 'Platinum'});
    this.customerType.push({id: 3, nameType: 'Gold'});
    this.customerType.push({id: 4, nameType: 'Silver'});
    this.customerType.push({id: 5, nameType: 'Member'});
  }
  getAll() {
    return this.customerType;
  }
}
