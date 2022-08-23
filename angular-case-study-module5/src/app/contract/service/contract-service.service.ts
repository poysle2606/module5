import {Injectable} from '@angular/core';
import {Contract} from '../model/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractServiceService {
  listContract: Contract[] = [];

  constructor() {
    this.listContract.push({
      id: 1,
      codeContract: 'HD-1111',
      customerName: 'Nguyễn Văn A',
      startDay: '2022-04-23',
      endDay: '26-04-2022',
      cost: 1000000,
      total: 4000000,
    });
    this.listContract.push({
      id: 2,
      codeContract: 'HD-2222',
      customerName: 'Lê Thị B',
      startDay: '2022-06-05',
      endDay: '11-06-2022',
      cost: 2000000,
      total: 6000000,
    });
    this.listContract.push({
      id: 3,
      codeContract: 'HD-3333',
      customerName: 'Nguyễn Văn C',
      startDay: '2022-04-11',
      endDay: '15-04-2022',
      cost: 2000000,
      total: 5000000,
    });
    this.listContract.push({
      id: 4,
      codeContract: 'HD-4444',
      customerName: 'Nguyễn Thị D',
      startDay: '05-05-2022',
      endDay: '2022-05-07',
      cost: 2000000,
      total: 4000000
    });
    this.listContract.push({
      id: 5,
      codeContract: 'HD-55555',
      customerName: 'Trần Văn E',
      startDay: '2022-15-06',
      endDay: '16-06-2022',
      cost: 500000,
      total: 3000000
    });
  }

  getAll() {
    return this.listContract;
  }

  save(contract1: any) {
    this.listContract.push(contract1);
  }
}
