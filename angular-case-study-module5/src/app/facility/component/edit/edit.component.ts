import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../service/facility.service';
import {FacilityTypeService} from '../../service/facility-type.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FacilityType} from '../../model/facility-type';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editFacilityForm: FormGroup;
  id: number;
  temp: string;
  facilityTypeList: FacilityType[];

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private activeRouter: ActivatedRoute,
              private router: Router,
              private toast: ToastrService) {
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getFacility(this.id);
      this.getFacilityTypeList();
    });
  }

  ngOnInit(): void {
  }

  private getFacility(id: number) {
    return this.facilityService.findById(id).subscribe(value => {
      this.editFacilityForm = new FormGroup({
        facility: new FormControl(value.facilityType),
        nameFacility: new FormControl(value.nameFacility, [Validators.required]),
        area: new FormControl(value.area, [Validators.required]),
        rentalCosts: new FormControl(value.rentalCosts, [Validators.required]),
        rental: new FormControl(value.rental, [Validators.required]),
        maxPeople: new FormControl(value.maxPeople, [Validators.required]),
        roomStandard: new FormControl(value.roomStandard, [Validators.required]),
        convenient: new FormControl(value.convenient, [Validators.required]),
        areaPool: new FormControl(value.areaPool, [Validators.required]),
        numberFloor: new FormControl(value.numberFloor, [Validators.required]),
        freeFacility: new FormControl(value.freeFacility, [Validators.required]),
        img: new FormControl(value.img)
      });
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

  updateFacility(id: number) {
    const facility = this.editFacilityForm.value;
    this.facilityService.update(id, facility).subscribe(value => {
      this.editFacilityForm.reset();
      this.router.navigate(['facility/list']);
      this.toast.success('Sửa dịch vụ thành công', 'tittle', {
        timeOut: 2500, progressBar: false
      });
    });
  }
}
