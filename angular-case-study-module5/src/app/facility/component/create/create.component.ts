import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../service/facility.service';
import {FacilityTypeService} from '../../service/facility-type.service';
import {FacilityType} from '../../model/facility-type';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  facilityTypeList: FacilityType[];
  temp: string;

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private router: Router,
              private toast: ToastrService) {
    this.getFacilityTypeList();
  }

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


  ngOnInit(): void {
  }

  submitForm() {
    const facility = this.facilityForm.value;
    this.facilityService.save(facility).subscribe(value => {
      this.facilityForm.reset();
      this.router.navigate(['facility/list']);
      this.toast.success('Create success', 'tittle', {
        timeOut: 1500, progressBar: false
      });
    }, error => {
    }, () => {
    });
  }

  changeFacility(value: any) {
    this.temp = value;
  }

  private getFacilityTypeList() {
    this.facilityTypeService.getList().subscribe(value => {
      this.facilityTypeList = value;
    });
  }

}
