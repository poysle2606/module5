import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BenhAnService} from '../../service/benh-an.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BenhNhanService} from '../../../benh-nhan/benh-nhan/service/benh-nhan.service';
import {BenhNhan} from '../../../benh-nhan/benh-nhan/model/benh-nhan';

@Component({
  selector: 'app-sua-benh-an',
  templateUrl: './sua-benh-an.component.html',
  styleUrls: ['./sua-benh-an.component.css']
})
export class SuaBenhAnComponent implements OnInit {
  editPatientForm: FormGroup;
  id: number;
  listPatienter: BenhNhan[];

  constructor(private patientService: BenhAnService,
              private activeRouter: ActivatedRoute,
              private router: Router,
              private patienterService: BenhNhanService) {
    this.activeRouter.paramMap.subscribe((paraMap: ParamMap) => {
      this.id = +paraMap.get('id');
      this.getPatient(this.id);
      this.getPatienter();
    });
  }

  ngOnInit(): void {
  }

  updatePatient(id: any) {
    const custom = this.editPatientForm.value;
    this.patientService.updatePatient(id, custom).subscribe(value => {
      this.router.navigate(['/patient/list']);
      alert('Sửa bệnh án thành công');
    });
  }

  private getPatient(id: any) {
    return this.patientService.findById(id).subscribe( value => {
      this.editPatientForm = new FormGroup({
        codePatient: new FormControl(value.codePatient, [Validators.required]),
        patienter: new FormGroup({
          codePatienter: new FormControl(value.patienter.codePatienter, [Validators.required]),
          namePatienter: new FormControl(value.patienter.namePatienter, [Validators.required])
        }),
        startDay: new FormControl(value.startDay, [Validators.required]),
        endDay: new FormControl(value.endDay, [Validators.required]),
        reason: new FormControl(value.reason, [Validators.required]),
        method: new FormControl(value.method, [Validators.required]),
        doctor: new FormControl(value.doctor, [Validators.required])
      });
    });
  }

  private getPatienter() {
    this.patienterService.getAll().subscribe(value => {
      this.listPatienter = value;
    });
  }
}
