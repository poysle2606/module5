import {Component, OnInit} from '@angular/core';
import {CustomerType} from '../../model/customet-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerServiceService} from '../../service/customer-service.service';
import {CustomerTypeServiceService} from '../../service/customer-type-service.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required]),
    dayOfBirth: new FormControl(),
    gender: new FormControl(),
    idCard: new FormControl(),
    numberPhone: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    typeCustomer: new FormControl()
  });

  constructor(private customerService: CustomerServiceService, private customerTypeService: CustomerTypeServiceService) {
  }

  customerTypeList: CustomerType[];

  submit() {
    const customer = this.customerForm.value;
    this.customerService.save(customer);
    this.customerForm.reset();
  }

  ngOnInit(): void {
    this.getCustomerType();
  }

  getCustomerType() {
    this.customerTypeList = this.customerTypeService.getAll();
  }
}
