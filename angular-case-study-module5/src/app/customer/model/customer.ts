import {CustomerType} from './customet-type';

export interface Customer {
  id?: number;
  name?: string;
  dayOfBirth?: string;
  gender?: number;
  idCard?: number;
  numberPhone?: string;
  email?: string;
  address?: string;
  typeCustomer?: CustomerType;
}
