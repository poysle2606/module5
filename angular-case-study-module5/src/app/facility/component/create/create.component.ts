import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../service/facility.service';
import {FacilityTypeService} from '../../service/facility-type.service';
import {FacilityType} from '../../model/facility-type';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  facilityTypeList: FacilityType[];
  temp: string;

  facilityForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    facilityType: new FormControl(),
    nameFacility: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required]),
    rentalCosts: new FormControl('', [Validators.required]),
    rental: new FormControl('', [Validators.required]),
    maxPeople: new FormControl('', [Validators.required]),
    roomStandard: new FormControl('', [Validators.required]),
    convenient: new FormControl('', [Validators.required]),
    areaPool: new FormControl('', [Validators.required]),
    numberFloor: new FormControl('', [Validators.required]),
    freeFacility: new FormControl('', [Validators.required]),
    img: new FormControl()
  });

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getFacilityTypeList();
  }

  private getFacilityTypeList() {
    this.facilityTypeList = this.facilityTypeService.getList();
  }

  submitForm() {
    const facility = this.facilityForm.value;
    this.facilityService.save(facility);
    this.facilityForm.reset();
    this.router.navigate(['facility/list']);
    alert('Thêm mới dịch vụ thành công');
  }

  changeFacility(value: any) {
    this.temp = value;
  }
}
