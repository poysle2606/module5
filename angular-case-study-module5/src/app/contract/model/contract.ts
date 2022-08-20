import {Customer} from '../../customer/model/customer';

export interface Contract {
  id?: number;
  codeContract?: string;
  customerName?: string;
  startDay?: string;
  endDay?: string;
  cost?: number;
  total?: number;
}
