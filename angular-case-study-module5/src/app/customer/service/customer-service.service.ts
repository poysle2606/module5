import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  listCustomer: Customer[] = [];

  constructor() {
    this.listCustomer.push({
      name: 'Nguyễn Văn A',
      dayOfBirth: '1998',
      gender: 0,
      idCard: 123456789,
      numberPhone: '093423489',
      email: 'nguyenA1998@gmail.com',
      address: 'Đà Nẵng',
      typeCustomer: {id: 1, nameType: 'Diamond'}
    });
    this.listCustomer.push({
      name: 'Lê Thị B',
      dayOfBirth: '1978',
      gender: 1,
      idCard: 678912987,
      numberPhone: '012423231',
      email: 'leB1978@gmail.com',
      address: 'Thái Bình',
      typeCustomer:  {id: 2, nameType: 'Platinum'}
    });
    this.listCustomer.push({
      name: 'Nguyễn Văn C',
      dayOfBirth: '1989',
      gender: 0,
      idCard: 987654321,
      numberPhone: '092423444',
      email: 'nguyenC1989@gmail.com',
      address: 'Gia Lai',
      typeCustomer:  {id: 3, nameType: 'Gold'}
    });
    this.listCustomer.push({
      name: 'Nguyễn Thị D',
      dayOfBirth: '1982',
      gender: 1,
      idCard: 544789321,
      numberPhone: '083452358',
      email: 'nguyenD1982@gmail.com',
      address: 'Huế',
      typeCustomer: {id: 1, nameType: 'Platinum'}
    });
    this.listCustomer.push({
      name: 'Trần Văn E',
      dayOfBirth: '1995',
      gender: 0,
      idCard: 898943760,
      numberPhone: '093423870',
      email: 'tranE1995@gmail.com',
      address: 'Đà Nẵng',
      typeCustomer:  {id: 1, nameType: 'Platinum'}
    });
  }

  getAll() {
    return this.listCustomer;
  }

  save(customer) {
    this.listCustomer.push(customer);
  }

}
