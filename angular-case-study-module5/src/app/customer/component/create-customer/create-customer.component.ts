import {Component, OnInit} from '@angular/core';
import {CustomerType} from '../../model/customet-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerServiceService} from '../../service/customer-service.service';
import {CustomerTypeServiceService} from '../../service/customer-type-service.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.minLength(6)]),
    name: new FormControl('', [Validators.required]),
    dayOfBirth: new FormControl(),
    gender: new FormControl(),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}$')]),
    numberPhone: new FormControl('', [Validators.required, Validators.pattern('^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    typeCustomer: new FormControl()
  });

  constructor(private customerService: CustomerServiceService,
              private customerTypeService: CustomerTypeServiceService,
              private router: Router,
              private toast: ToastrService) {
  }

  customerTypeList: CustomerType[];

  submit() {
    const customer = this.customerForm.value;
    this.customerService.save(customer);
    this.customerForm.reset();
    this.router.navigate(['customer/list']);
    this.toast.success('Create success', 'tittle', {
      timeOut: 1500, progressBar: false
    });
  }

  ngOnInit(): void {
    this.getCustomerType();
  }

  getCustomerType() {
    this.customerTypeList = this.customerTypeService.getAll();
  }
}
