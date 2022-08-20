import {Injectable} from '@angular/core';
import {Facility} from '../model/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  listFacility: Facility[] = [];

  constructor() {
    this.listFacility.push({
     id: 1, facilityType: {id: 3, name: 'House'}, nameFacility: 'House 01', area: 60, rentalCosts: 5000000
    });
    this.listFacility.push({
     id: 2, facilityType: {id: 3, name: 'House'}, nameFacility: 'Room 02', area: 60, rentalCosts: 5000000
    });
    this.listFacility.push({
     id: 3, facilityType: {id: 1, name: 'Villa'}, nameFacility: 'Villa 01', area: 60, rentalCosts: 5000000
    });
    this.listFacility.push({
     id: 4, facilityType: {id: 2, name: 'Room'}, nameFacility: 'Room 01', area: 90, rentalCosts: 8000000
    });
    this.listFacility.push({
     id: 5, facilityType: {id: 1, name: 'Villa'}, nameFacility: 'Villa 11', area: 160, rentalCosts: 17000000
    });
    this.listFacility.push({
     id: 6, facilityType: {id: 3, name: 'House'}, nameFacility: 'House 03', area: 50, rentalCosts: 4500000
    });
    this.listFacility.push({
     id: 7, facilityType: {id: 3, name: 'House'}, nameFacility: 'House 05', area: 80, rentalCosts: 8000000
    });
    this.listFacility.push({
     id: 8, facilityType: {id: 2, name: 'Room'}, nameFacility: 'Room 01', area: 50, rentalCosts: 5000000
    });
    this.listFacility.push({
     id: 9, facilityType: {id: 1, name: 'Villa'}, nameFacility: 'Villa 04', area: 140, rentalCosts: 12000000
    });
  }

  getAll() {
    return this.listFacility;
  }

  save(facility) {
    this.listFacility.push(facility);
  }

  delete(id: number) {
    this.listFacility = this.listFacility.filter(facility => {
      return facility.id !== id;
    });
  }

  findById(id: number) {
    return this.listFacility.find(facility => facility.id === id);
  }

  update(id: number, facility: any) {
    for (let i = 0; i < this.listFacility.length ; i++) {
      if (this.listFacility[i].id === id) {
        return this.listFacility[i] = facility;
      }
    }
  }
}
