import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerServiceService} from '../../service/customer-service.service';
import {CustomerTypeServiceService} from '../../service/customer-type-service.service';
import {CustomerType} from '../../model/customet-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  idDelete: number;
  nameDelete: string;
  idCardDelete: number;
  p = 1;

  constructor(private customerService: CustomerServiceService, private customerTypeService: CustomerTypeServiceService) {
  }

  listCustomer: Customer[];

  ngOnInit(): void {
    this.listCustomer = this.customerService.getAll();

  }

  openDelete(customer: Customer) {
    this.idDelete = customer.id;
    this.nameDelete = customer.name;
    this.idCardDelete = customer.idCard;
  }

  delete(idDelete: number) {
    this.customerService.delete(idDelete);
    this.ngOnInit();
  }
}
