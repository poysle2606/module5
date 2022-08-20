import {Injectable} from '@angular/core';
import {FacilityType} from '../model/facility-type';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  facilityTypeList: FacilityType[] = [];

  constructor() {
    this.facilityTypeList.push({id: 1, name: 'Villa'});
    this.facilityTypeList.push({id: 2, name: 'House'});
    this.facilityTypeList.push({id: 3, name: 'Room'});
  }
  getList() {
    return this.facilityTypeList;
  }
}
