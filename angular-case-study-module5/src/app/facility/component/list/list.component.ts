import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listFacility: Facility[] = [];

  constructor() {
    this.listFacility.push({
      nameFacility: 'House 01', area: 60, rentalCosts: 5000000
    });
    this.listFacility.push({
      nameFacility: 'Room 02', area: 60, rentalCosts: 5000000
    });
    this.listFacility.push({
      nameFacility: 'Villa 01', area: 60, rentalCosts: 5000000
    });
    this.listFacility.push({
      nameFacility: 'Room 01', area: 90, rentalCosts: 8000000
    });
    this.listFacility.push({
      nameFacility: 'Villa 11', area: 160, rentalCosts: 17000000
    });
    this.listFacility.push({
      nameFacility: 'House 03', area: 50, rentalCosts: 4500000
    });
    this.listFacility.push({
      nameFacility: 'House 05', area: 80, rentalCosts: 8000000
    });
    this.listFacility.push({
      nameFacility: 'Room 01', area: 50, rentalCosts: 5000000
    });
    this.listFacility.push({
      nameFacility: 'Villa 04', area: 140, rentalCosts: 12000000
    });
  }

  ngOnInit(): void {
  }

}
