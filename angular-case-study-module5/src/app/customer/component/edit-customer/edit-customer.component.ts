import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerServiceService} from '../../service/customer-service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerTypeServiceService} from '../../service/customer-type-service.service';
import {CustomerType} from '../../model/customet-type';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customerForm: FormGroup;
  id: number;
  customerTypeList: CustomerType[];

  constructor(private customerService: CustomerServiceService,
              private activeRouter: ActivatedRoute,
              private router: Router,
              private customerTypeService: CustomerTypeServiceService,
              private toast: ToastrService) {
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const customer = this.getCustomer(this.id);
      this.customerForm = new FormGroup({
        id: new FormControl(customer.id, [Validators.required, Validators.minLength(6)]),
        name: new FormControl(customer.name, [Validators.required]),
        dayOfBirth: new FormControl(customer.dayOfBirth),
        gender: new FormControl(customer.gender),
        idCard: new FormControl(customer.idCard, [Validators.required, Validators.pattern('^\\d{9}$')]),
        numberPhone: new FormControl(customer.numberPhone, [Validators.required, Validators.pattern('^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$')]),
        email: new FormControl(customer.email, [Validators.required, Validators.email]),
        address: new FormControl(customer.address, [Validators.required]),
        typeCustomer: new FormControl(customer.typeCustomer)
      });
    });
  }

  ngOnInit(): void {
    this.getCustomerType();
  }

  private getCustomer(id: number) {
    return this.customerService.findById(id);
  }

  getCustomerType() {
    this.customerTypeList = this.customerTypeService.getAll();
  }

  updateCustomer(id: number) {
    const custom = this.customerForm.value;
    this.customerService.updateCustomer(id, custom);
    this.router.navigate(['/customer/list']);
    this.toast.success('Edit success', 'tittle', {
      timeOut: 2500, progressBar: false
    });
  }
}
