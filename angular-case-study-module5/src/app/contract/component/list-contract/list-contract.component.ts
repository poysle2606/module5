import {Component, OnInit} from '@angular/core';
import {Contract} from '../../model/contract';
import {ContractServiceService} from '../../service/contract-service.service';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  listContract: Contract[] = [];
  p = 1;

  constructor(private contractService: ContractServiceService) {
  }

  ngOnInit(): void {
    this.listContract = this.contractService.getAll();
  }
}
