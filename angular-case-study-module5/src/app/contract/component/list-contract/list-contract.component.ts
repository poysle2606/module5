import {Component, OnInit} from '@angular/core';
import {Contract} from '../../model/contract';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  listContract: Contract[] = [];

  constructor() {
    this.listContract.push({
      codeContract: 'HD-1111',
      customerName: 'Nguyễn Văn A',
      startDay: '23-04-2022',
      endDay: '26-04-2022',
      cost: 1000000,
      total: 4000000
    });
    this.listContract.push({
      codeContract: 'HD-2222',
      customerName: 'Lê Thị B',
      startDay: '05-06-2022',
      endDay: '11-06-2022',
      cost: 2000000,
      total: 6000000
    });
    this.listContract.push({
      codeContract: 'HD-3333',
      customerName: 'Nguyễn Văn C',
      startDay: '11-04-2022',
      endDay: '15-04-2022',
      cost: 2000000,
      total: 5000000
    });
    this.listContract.push({
      codeContract: 'HD-4444',
      customerName: 'Nguyễn Thị D',
      startDay: '05-05-2022',
      endDay: '07-05-2022',
      cost: 2000000,
      total: 4000000
    });
    this.listContract.push({
      codeContract: 'HD-55555',
      customerName: 'Trần Văn E',
      startDay: '15-06-2022',
      endDay: '16-06-2022',
      cost: 500000,
      total: 3000000
    });
  }

  ngOnInit(): void {
  }
}
