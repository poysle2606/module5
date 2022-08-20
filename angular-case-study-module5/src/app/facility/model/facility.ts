import {FacilityType} from './facility-type';

export interface Facility {
  id?: number;
  facilityType?: FacilityType;
  nameFacility?: string;
  area?: number;
  rentalCosts?: number;
  maxPeople?: number;
  rental?: string;
  roomStandard?: string;
  convenient?: string;
  areaPool?: number;
  numberFloor?: number;
  freeFacility?: string;
  img?: string;
}
