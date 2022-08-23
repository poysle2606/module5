import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../service/facility.service';
import {FacilityTypeService} from '../../service/facility-type.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FacilityType} from '../../model/facility-type';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editFacilityForm: FormGroup;
  id: number;
  temp: string;
  facilityTypeList: FacilityType[] = [];

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private activeRouter: ActivatedRoute,
              private router: Router) {
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const facility = this.getFacility(this.id);
      this.editFacilityForm = new FormGroup({
        id: new FormControl(facility.id, [Validators.required]),
        facility: new FormControl(facility.facilityType.name),
        nameFacility: new FormControl(facility.nameFacility, [Validators.required]),
        area: new FormControl(facility.area, [Validators.required]),
        rentalCosts: new FormControl(facility.rentalCosts, [Validators.required]),
        rental: new FormControl(facility.rental, [Validators.required]),
        maxPeople: new FormControl(facility.maxPeople, [Validators.required]),
        roomStandard: new FormControl(facility.roomStandard, [Validators.required]),
        convenient: new FormControl(facility.convenient, [Validators.required]),
        areaPool: new FormControl(facility.areaPool, [Validators.required]),
        numberFloor: new FormControl(facility.numberFloor, [Validators.required]),
        freeFacility: new FormControl(facility.freeFacility, [Validators.required]),
        img: new FormControl(facility.img)
      });
    });
  }

  ngOnInit(): void {
    this.getFacilityTypeList();
  }

  private getFacility(id: number) {
    return this.facilityService.findById(id);
  }


  changeFacility(value: any) {
    this.temp = value;
  }

  private getFacilityTypeList() {
    this.facilityTypeList = this.facilityTypeService.getList();
  }

  updateFacility(id: number) {
    const facility = this.editFacilityForm.value;
    this.facilityService.update(id, facility);
    this.editFacilityForm.reset();
    this.router.navigate(['facility/list']);
    alert('Cập nhật dịch vụ thành công');
  }
}
