import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../service/facility.service';
import {FacilityTypeService} from '../../service/facility-type.service';
import {FacilityType} from '../../model/facility-type';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listFacility: Facility[] = [];
  listFacilityType: FacilityType[] = [];
  facilityTypeS: FacilityType;
  nameFacility: string;
  idFacility: number;
  area: number;
  rentalCosts: number;
  maxPeople: number;
  rental: string;
  roomStandard: string;
  convenient: string;
  areaPool: number;
  numberFloor: number;
  freeFacility: string;
  img: string;
  p = 1;

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private toast: ToastrService) {
    this.getList();
  }

  ngOnInit(): void {
    this.getTypeList();
  }

  private getList() {
    this.facilityService.getAll().subscribe(value => {
      this.listFacility = value;
    }, error => {
    }, () => {
    });
  }

  openFacility(facility2: Facility) {
    this.facilityTypeS = facility2.facilityType;
    this.nameFacility = facility2.nameFacility;
    this.idFacility = facility2.id;
    this.area = facility2.area;
    this.rentalCosts = facility2.rentalCosts;
    this.maxPeople = facility2.maxPeople;
    this.rental = facility2.rental;
    this.roomStandard = facility2.roomStandard;
    this.convenient = facility2.convenient;
    this.areaPool = facility2.areaPool;
    this.numberFloor = facility2.numberFloor;
    this.freeFacility = facility2.freeFacility;
  }

  delete(idFacility: number) {
    this.facilityService.delete(idFacility).subscribe(value => {
      this.ngOnInit();
      this.toast.success('Xóa dịch vụ thành công', 'tittle', {
        timeOut: 2500, progressBar: false
      });
    });

  }

  private getTypeList() {
    this.facilityTypeService.getList().subscribe(value => {
      this.listFacilityType = value;
    });
  }
}
