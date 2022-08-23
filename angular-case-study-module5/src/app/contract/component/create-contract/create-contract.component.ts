import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContractServiceService} from '../../service/contract-service.service';
import {Router} from '@angular/router';
import {CustomerTypeServiceService} from '../../../customer/service/customer-type-service.service';
import {CustomerType} from '../../../customer/model/customet-type';
import {CustomerServiceService} from '../../../customer/service/customer-service.service';
import {Customer} from '../../../customer/model/customer';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  listCustomer: Customer[] = [];

  constructor(private contractService: ContractServiceService,
              private customerList: CustomerServiceService,
              private router: Router) {
  }

  formContract: FormGroup = new FormGroup({
    id: new FormControl(),
    codeContract: new FormControl('', [Validators.required]),
    customer: new FormControl(),
    startDay: new FormControl(),
    endDay: new FormControl(),
    cost: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
    total: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')])
  });

  ngOnInit(): void {
    this.getCustomerList();
  }

  submitContract() {
    const contract1 = this.formContract.value;
    this.contractService.save(contract1);
    this.formContract.reset();
    this.router.navigate(['/contract/list']);
  }

  getCustomerList() {
    this.listCustomer = this.customerList.getAll();
  }
}
