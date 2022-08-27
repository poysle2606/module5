import {Component, OnInit} from '@angular/core';
import {CustomerType} from '../../model/customet-type';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
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
    name: new FormControl('', [Validators.required]),
    dayOfBirth: new FormControl('', this.validateBirthday),
    gender: new FormControl(),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}$')]),
    numberPhone: new FormControl('', [Validators.required, Validators.pattern('^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    typeCustomer: new FormControl()
  });

  customerTypeList: CustomerType[] = [];

  constructor(private customerService: CustomerServiceService,
              private customerTypeService: CustomerTypeServiceService,
              private router: Router,
              private toast: ToastrService) {
  }

  submit() {
    const customer = this.customerForm.value;
    this.customerService.save(customer).subscribe(value => {
      this.customerForm.reset();
      this.router.navigate(['customer/list']);
      this.toast.success('Create success', 'tittle', {
        timeOut: 1500, progressBar: false
      });
    }, error => {
    }, () => {
    });
  }

  validateBirthday(formControl: AbstractControl) {
  const date = new Date(formControl.value);
  if (new Date().getTime() - (date.getTime() + 18 * 365 * 24 * 60 * 60 * 1000) < 0) {
      return {customerBirthday: true};
    } else {
      return null;
    }
  }

  ngOnInit(): void {
    this.getCustomerType();
  }

  getCustomerType() {
    this.customerTypeService.getAll().subscribe(value => {
      this.customerTypeList = value;
    });
  }
}
