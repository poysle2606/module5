import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  listCustomer: Customer[] = [];

  constructor() {
    this.listCustomer.push({
      id: 1,
      name: 'Nguyễn Văn A',
      dayOfBirth: '1998-12-12',
      gender: 0,
      idCard: 123456789,
      numberPhone: '093423489',
      email: 'nguyenA1998@gmail.com',
      address: 'Đà Nẵng',
      typeCustomer: {id: 1, nameType: 'Diamond'}
    });
    this.listCustomer.push({
      id: 2,
      name: 'Lê Thị B',
      dayOfBirth: '1978-09-03',
      gender: 1,
      idCard: 678912987,
      numberPhone: '012423231',
      email: 'leB1978@gmail.com',
      address: 'Thái Bình',
      typeCustomer: {id: 2, nameType: 'Platinum'}
    });
    this.listCustomer.push({
      id: 3,
      name: 'Nguyễn Văn C',
      dayOfBirth: '1989-09-09',
      gender: 0,
      idCard: 987654321,
      numberPhone: '092423444',
      email: 'nguyenC1989@gmail.com',
      address: 'Gia Lai',
      typeCustomer: {id: 3, nameType: 'Gold'}
    });
    this.listCustomer.push({
      id: 4,
      name: 'Nguyễn Thị D',
      dayOfBirth: '1982-08-09',
      gender: 1,
      idCard: 544789321,
      numberPhone: '083452358',
      email: 'nguyenD1982@gmail.com',
      address: 'Huế',
      typeCustomer: {id: 1, nameType: 'Platinum'}
    });
    this.listCustomer.push({
      id: 5,
      name: 'Trần Văn E',
      dayOfBirth: '1995-03-24',
      gender: 0,
      idCard: 898943760,
      numberPhone: '093423870',
      email: 'tranE1995@gmail.com',
      address: 'Đà Nẵng',
      typeCustomer: {id: 1, nameType: 'Platinum'}
    });
  }

  getAll() {
    return this.listCustomer;
  }

  save(customer) {
    this.listCustomer.push(customer);
  }

  updateCustomer(id: number, customer: any) {
    for (let i = 0; i < this.listCustomer.length; i++) {
      if (this.listCustomer[i].id === id) {
        return this.listCustomer[i] = customer;
      }
    }
  }

  delete(id: number) {
    this.listCustomer = this.listCustomer.filter(customer => {
      return customer.id !== id;
    });
  }

  findById(id: number) {
    return this.listCustomer.find(customer => customer.id === id);
  }
}
